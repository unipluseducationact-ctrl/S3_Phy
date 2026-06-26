import { t } from '../i18n.js';
import { createFlashcardSession } from './flashcardSession.js';

/**
 * @typedef {{ value: string, label: string }} DeckOption
 * @typedef {(deckKey: string) => import('./flashcardDeck.js').Flashcard[]} BuildDeckFn
 */

/**
 * @param {HTMLElement} container
 * @param {{ deckOptions: DeckOption[], buildDeck: BuildDeckFn, initialDeck?: string }} opts
 * @returns {() => void}
 */
export function mountFlashcardStudy(container, { deckOptions, buildDeck, initialDeck = 'all' }) {
  let deckKey = initialDeck;
  let session = null;
  let onKeyDown = null;

  container.innerHTML = `
    <section class="panel panel--flashcards">
      <h2>${t('flashcards.title')}</h2>
      <p class="lead">${t('flashcards.intro')}</p>
      <div class="flash-study-controls no-print">
        <div class="control">
          <label>${t('flashcards.deck')}</label>
          <select data-fc-deck>
            ${deckOptions.map((o) => `<option value="${o.value}">${o.label}</option>`).join('')}
          </select>
        </div>
        <div class="flash-mode-toggle" data-fc-mode>
          <button type="button" data-mode="sequence" class="active">${t('flashcards.mode.sequence')}</button>
          <button type="button" data-mode="random">${t('flashcards.mode.random')}</button>
        </div>
      </div>
      <div class="flash-study-header no-print">
        <span class="flash-round-badge" data-fc-round></span>
        <span class="flashcard-progress muted" data-fc-progress></span>
      </div>
      <div data-fc-study-panel>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-fc-card>
            <div class="label" data-fc-label>${t('flashcards.question')}</div>
            <div class="body" data-fc-body></div>
          </div>
          <p class="flash-rating-hint muted" data-fc-hint></p>
          <div class="flash-toolbar flash-rating-row no-print">
            <button class="btn" type="button" data-fc-prev>${t('flashcards.prev')}</button>
            <button class="btn danger" type="button" data-fc-again>${t('flashcards.again')}</button>
            <button class="btn primary" type="button" data-fc-flip>${t('flashcards.flip')}</button>
            <button class="btn success" type="button" data-fc-gotit>${t('flashcards.gotIt')}</button>
            <button class="btn" type="button" data-fc-next>${t('flashcards.next')}</button>
          </div>
        </div>
      </div>
      <div class="flash-summary-panel" data-fc-summary hidden>
        <h3 data-fc-summary-title></h3>
        <p class="muted" data-fc-summary-stats></p>
        <div class="flash-summary-counts">
          <span data-fc-summary-keep></span>
          <span data-fc-summary-confident></span>
        </div>
        <div class="flash-toolbar no-print">
          <button class="btn primary" type="button" data-fc-next-round>${t('flashcards.summary.nextRound')}</button>
          <button class="btn" type="button" data-fc-restart>${t('flashcards.summary.restart')}</button>
        </div>
      </div>
    </section>`;

  const els = {
    deck: container.querySelector('[data-fc-deck]'),
    mode: container.querySelector('[data-fc-mode]'),
    round: container.querySelector('[data-fc-round]'),
    progress: container.querySelector('[data-fc-progress]'),
    studyPanel: container.querySelector('[data-fc-study-panel]'),
    summaryPanel: container.querySelector('[data-fc-summary]'),
    card: container.querySelector('[data-fc-card]'),
    label: container.querySelector('[data-fc-label]'),
    body: container.querySelector('[data-fc-body]'),
    hint: container.querySelector('[data-fc-hint]'),
    prev: container.querySelector('[data-fc-prev]'),
    again: container.querySelector('[data-fc-again]'),
    flip: container.querySelector('[data-fc-flip]'),
    gotit: container.querySelector('[data-fc-gotit]'),
    next: container.querySelector('[data-fc-next]'),
    summaryTitle: container.querySelector('[data-fc-summary-title]'),
    summaryStats: container.querySelector('[data-fc-summary-stats]'),
    summaryKeep: container.querySelector('[data-fc-summary-keep]'),
    summaryConfident: container.querySelector('[data-fc-summary-confident]'),
    nextRound: container.querySelector('[data-fc-next-round]'),
    restart: container.querySelector('[data-fc-restart]'),
  };

  function makeSession() {
    session = createFlashcardSession(() => buildDeck(deckKey));
  }

  function setControlsEnabled(flipped, hasCard) {
    const dis = !hasCard;
    els.prev.disabled = dis;
    els.again.disabled = dis || !flipped;
    els.gotit.disabled = dis || !flipped;
    els.flip.disabled = dis;
    els.next.disabled = dis;
  }

  function renderCard() {
    const card = session.currentCard();
    const flipped = session.isFlipped();
    if (!card) {
      els.label.hidden = true;
      els.body.textContent = '';
      els.card.classList.remove('flashcard-surface--image');
      setControlsEnabled(false, false);
      els.hint.textContent = '';
      return;
    }

    if (card.isImage) {
      els.card.classList.add('flashcard-surface--image');
      const twoSided = card.backImage && card.backImage !== card.frontImage;
      if (!twoSided) {
        els.label.hidden = true;
      } else {
        els.label.hidden = false;
        els.label.textContent = flipped ? t('flashcards.answer') : t('flashcards.question');
      }
      const src = flipped && card.backImage ? card.backImage : card.frontImage;
      const alt = (card.alt || '').replace(/"/g, '&quot;');
      const fallback = (card.alt || t('flashcards.question')).replace(/</g, '&lt;');
      els.body.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy" data-fc-img /><p class="flash-img-fallback muted" data-fc-img-fallback hidden>${fallback}</p>`;
      const img = els.body.querySelector('[data-fc-img]');
      const fb = els.body.querySelector('[data-fc-img-fallback]');
      if (img && fb) {
        img.onerror = () => {
          img.hidden = true;
          fb.hidden = false;
        };
        img.onload = () => {
          img.hidden = false;
          fb.hidden = true;
        };
      }
    } else {
      els.card.classList.remove('flashcard-surface--image');
      els.label.hidden = false;
      els.label.textContent = flipped ? t('flashcards.answer') : t('flashcards.question');
      els.body.textContent = flipped ? card.back : card.front;
    }

    setControlsEnabled(flipped, true);
    els.hint.textContent = flipped
      ? t('flashcards.hint.rated')
      : t('flashcards.flipFirst');
  }

  function renderSummary() {
    const stats = session.getRoundStats();
    const { total } = session.getProgress();

    if (session.isSessionComplete()) {
      els.summaryTitle.textContent = t('flashcards.summary.complete');
      els.summaryStats.textContent = t('flashcards.summary.completeStats');
      els.nextRound.hidden = true;
    } else {
      els.summaryTitle.textContent = t('flashcards.summary.title')
        .replace('{round}', String(session.getRoundNumber()));
      els.summaryStats.textContent = t('flashcards.summary.stats')
        .replace('{total}', String(total))
        .replace('{again}', String(stats.again))
        .replace('{gotIt}', String(stats.gotIt))
        .replace('{neutral}', String(stats.neutral));
      els.nextRound.hidden = false;
    }

    els.summaryKeep.textContent = t('flashcards.summary.keep')
      .replace('{count}', String(stats.again));
    els.summaryConfident.textContent = t('flashcards.summary.confident')
      .replace('{count}', String(stats.gotIt));
  }

  function renderUI() {
    const { index, total } = session.getProgress();
    els.round.textContent = t('flashcards.round')
      .replace('{round}', String(session.getRoundNumber()))
      .replace('{total}', String(total));
    els.progress.textContent = total
      ? t('flashcards.progress').replace('{current}', String(index)).replace('{total}', String(total))
      : '';

    const summary = session.isSummary();
    els.studyPanel.hidden = summary;
    els.summaryPanel.hidden = !summary;

    if (summary) renderSummary();
    else renderCard();
  }

  function renderModeToggle() {
    const mode = session.getMode();
    els.mode.querySelectorAll('button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });
  }

  function doFlip() {
    if (!session.currentCard()) return;
    session.flip();
    renderCard();
  }

  function refreshLabels() {
    container.querySelector('h2').textContent = t('flashcards.title');
    container.querySelector('.lead').textContent = t('flashcards.intro');
    container.querySelector('[data-fc-deck]').previousElementSibling.textContent = t('flashcards.deck');
    els.mode.querySelector('[data-mode="sequence"]').textContent = t('flashcards.mode.sequence');
    els.mode.querySelector('[data-mode="random"]').textContent = t('flashcards.mode.random');
    els.prev.textContent = t('flashcards.prev');
    els.again.textContent = t('flashcards.again');
    els.flip.textContent = t('flashcards.flip');
    els.gotit.textContent = t('flashcards.gotIt');
    els.next.textContent = t('flashcards.next');
    els.nextRound.textContent = t('flashcards.summary.nextRound');
    els.restart.textContent = t('flashcards.summary.restart');
    renderUI();
  }

  els.deck.value = deckKey;
  els.deck.addEventListener('change', () => {
    deckKey = els.deck.value;
    makeSession();
    renderModeToggle();
    renderUI();
  });

  els.mode.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      session.setMode(btn.dataset.mode);
      renderModeToggle();
      renderUI();
    });
  });

  els.card.addEventListener('click', (e) => {
    if (e.target.closest('button')) return;
    doFlip();
  });

  els.flip.addEventListener('click', (e) => {
    e.stopPropagation();
    doFlip();
  });

  els.prev.addEventListener('click', () => {
    session.prev();
    renderUI();
  });

  els.again.addEventListener('click', () => {
    if (session.rateAgain()) renderUI();
    else renderCard();
  });

  els.gotit.addEventListener('click', () => {
    if (session.rateGotIt()) renderUI();
    else renderCard();
  });

  els.next.addEventListener('click', () => {
    if (session.isFlipped()) {
      if (session.rateNeutral()) renderUI();
      else renderCard();
    } else if (session.nextNavigate()) {
      renderUI();
    }
  });

  els.nextRound.addEventListener('click', () => {
    session.nextRound();
    renderUI();
  });

  els.restart.addEventListener('click', () => {
    session.restart();
    renderUI();
  });

  onKeyDown = (e) => {
    if (!container.isConnected) return;
    const tag = e.target?.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;

    if (e.code === 'Space') {
      e.preventDefault();
      doFlip();
      return;
    }
    if (e.key === 'ArrowLeft') {
      if (session.isFlipped()) {
        if (session.rateAgain()) renderUI();
        else renderCard();
      } else {
        session.prev();
        renderUI();
      }
      return;
    }
    if (e.key === 'ArrowRight' || e.key === '1') {
      if (session.isFlipped()) {
        if (session.rateGotIt()) renderUI();
        else renderCard();
      } else if (session.nextNavigate()) {
        renderUI();
      }
      return;
    }
    if (e.key === '2' && session.isFlipped()) {
      if (session.rateAgain()) renderUI();
      else renderCard();
    }
  };

  window.addEventListener('keydown', onKeyDown);

  const onLang = () => {
    makeSession();
    renderModeToggle();
    refreshLabels();
  };
  window.addEventListener('s3phy:lang', onLang);

  makeSession();
  renderModeToggle();
  renderUI();

  return () => {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('s3phy:lang', onLang);
    session?.restart();
    container.innerHTML = '';
  };
}
