import { t, getLang } from '../i18n.js';
import questions from '../data/questions.json';
import flashcards from '../data/flashcards.json';
import { createThermometerLab } from '../tools/thermometerLab.js';
import { mountHubShell } from '../hubShell.js';
import { renderWorksheets, hydrateWorksheets } from '../worksheets/mcqWorksheet.js';

function langKey() {
  return getLang() === 'zh-Hant' ? 'zhHant' : 'en';
}

async function assetExists(folder, name) {
  const url = `${import.meta.env.BASE_URL}${folder}/${name}`;
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

async function noteExists(name) {
  return assetExists('notes', name);
}

export function mountHeatHub(root) {
  let section = 'topics';
  let flashIndex = 0;
  let flashDeck = 'all';
  let flashShowBack = false;

  let shell = null;
  let el = { main: null };

  function renderMain() {
    if (!el.main) return;

    if (section === 'topics') el.main.innerHTML = renderTopics();
    else if (section === 'notes') el.main.innerHTML = renderNotesShell();
    else if (section === 'tools') el.main.innerHTML = renderToolsShell();
    else if (section === 'worksheets') el.main.innerHTML = renderWorksheets(t);
    else if (section === 'flashcards') el.main.innerHTML = renderFlashcardsShell();
    else if (section === 'summary') el.main.innerHTML = renderSummary();

    if (section === 'notes') void hydrateNotes();
    if (section === 'tools') hydrateTools();
    if (section === 'worksheets') {
      // Filter questions specifically for Heat topics
      const heatQuestions = questions.filter(q => 
        ['liquidThermometer', 'faultyThermometer', 'resistanceThermometer', 'thermistor'].includes(q.topic)
      );
      hydrateWorksheets(root, heatQuestions, t, langKey);
      // Override paper title for Heat
      const titleEl = root.querySelector('[data-ws-paper] h3');
      if (titleEl) {
        titleEl.textContent = t('worksheets.paperTitleHeat');
      }
    }
    if (section === 'flashcards') hydrateFlashcards();
    if (section === 'summary') void hydrateSummary();
  }

  function render() {
    shell?.destroy();
    shell = mountHubShell(root, {
      subtitleKey: 'strand.heat.subtitle',
      activeSection: section,
      onSection: (id) => {
        section = id;
        shell.updateSection(section);
        renderMain();
      },
      onLang: () => render(),
    });
    el.main = shell.main;
    shell.updateSection(section);
    renderMain();
  }

  function renderTopics() {
    const cards = [
      ['liquidThermometer', 'topic.liquidThermometer'],
      ['faultyThermometer', 'topic.faultyThermometer'],
      ['resistanceThermometer', 'topic.resistanceThermometer'],
      ['thermistor', 'topic.thermistor'],
    ];
    return `
      <section class="panel panel--topic-hub">
        <h2>${t('topics.title')}</h2>
        <p class="lead">${t('topics.intro')}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${cards
            .map(([id, key]) => `
            <div class="card">
              <h3>${t(key)}</h3>
              <button class="btn primary" type="button" data-go-tool="thermometerLab">${t('topic.openTool')}</button>
            </div>`)
            .join('')}
        </div>
      </section>`;
  }

  function onMainClick(ev) {
    const b = ev.target.closest('[data-go-tool]');
    if (!b) return;
    section = 'tools';
    shell.updateSection(section);
    renderMain();
  }

  function renderNotesShell() {
    const rows = [
      { key: 'liquidThermometer', fileEn: 'liquid-thermometer-en.pdf', fileZh: 'liquid-thermometer-zhHant.pdf' },
      { key: 'faultyThermometer', fileEn: 'faulty-thermometer-en.pdf', fileZh: 'faulty-thermometer-zhHant.pdf' },
      { key: 'resistanceThermometer', fileEn: 'resistance-thermometer-en.pdf', fileZh: 'resistance-thermometer-zhHant.pdf' },
      { key: 'thermistor', fileEn: 'thermistor-en.pdf', fileZh: 'thermistor-zhHant.pdf' },
    ];
    return `
      <section class="panel">
        <h2>${t('notes.title')}</h2>
        <p class="lead">${t('notes.intro')}</p>
        <p class="lead">${t('notes.embedHint')}</p>
        <div class="grid cols-2" data-notes-grid>
          ${rows
            .map((r) => {
              const title = t(`notes.card.${r.key}`);
              return `
            <div class="card" data-note-card="${r.key}">
              <h3>${title}</h3>
              <div data-note-body></div>
            </div>`;
            })
            .join('')}
        </div>
      </section>`;
  }

  async function hydrateNotes() {
    const rows = [
      { key: 'liquidThermometer', fileEn: 'liquid-thermometer-en.pdf', fileZh: 'liquid-thermometer-zhHant.pdf' },
      { key: 'faultyThermometer', fileEn: 'faulty-thermometer-en.pdf', fileZh: 'faulty-thermometer-zhHant.pdf' },
      { key: 'resistanceThermometer', fileEn: 'resistance-thermometer-en.pdf', fileZh: 'resistance-thermometer-zhHant.pdf' },
      { key: 'thermistor', fileEn: 'thermistor-en.pdf', fileZh: 'thermistor-zhHant.pdf' },
    ];
    const lk = langKey();
    for (const r of rows) {
      const card = root.querySelector(`[data-note-card="${r.key}"]`);
      if (!card) continue;
      const body = card.querySelector('[data-note-body]');
      const file = lk === 'zhHant' ? r.fileZh : r.fileEn;
      const ok = await noteExists(file);
      const url = `${import.meta.env.BASE_URL}notes/${file}`;
      if (ok) {
        body.innerHTML = `
          <iframe class="notes-grid" title="${t(`notes.card.${r.key}`)}" src="${url}"></iframe>
          <p style="margin-top:8px"><a href="${url}" target="_blank" rel="noopener">${t('notes.openPdf')}</a></p>`;
      } else {
        body.innerHTML = `<p class="lead">${t('notes.missing')}</p>`;
      }
    }
  }

  function renderToolsShell() {
    return `
      <section class="panel panel--tools">
        <h2>${t('tools.title')}</h2>
        <div class="tools-layout">
          <div class="tool-stage" data-tool-stage style="width: 100%"></div>
        </div>
      </section>`;
  }

  let activeLabInstance = null;

  function hydrateTools() {
    const stage = root.querySelector('[data-tool-stage]');
    if (!stage) return;
    stage.innerHTML = '';
    if (activeLabInstance && activeLabInstance._thermometerLabCleanup) {
      activeLabInstance._thermometerLabCleanup();
    }
    activeLabInstance = createThermometerLab(t);
    stage.appendChild(activeLabInstance);
  }

  function renderFlashcardsShell() {
    return `
      <section class="panel">
        <h2>${t('flashcards.title')}</h2>
        <p class="lead">${t('flashcards.intro')}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${t('flashcards.deck')}</label>
          <select data-flash-deck>
            <option value="all">${t('flashcards.all')}</option>
            <option value="liquidThermometer">${t('topic.liquidThermometer')}</option>
            <option value="faultyThermometer">${t('topic.faultyThermometer')}</option>
            <option value="resistanceThermometer">${t('topic.resistanceThermometer')}</option>
            <option value="thermistor">${t('topic.thermistor')}</option>
          </select>
        </div>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-flip-card>
            <div class="label" data-flash-label>${t('flashcards.question')}</div>
            <div class="body" data-flash-front></div>
          </div>
          <p class="flashcard-progress muted" data-flash-progress hidden></p>
          <div class="flash-toolbar no-print">
            <button class="btn" type="button" data-flash-prev>${t('flashcards.prev')}</button>
            <button class="btn primary" type="button" data-flash-flip>${t('flashcards.flip')}</button>
            <button class="btn" type="button" data-flash-next>${t('flashcards.next')}</button>
            <button class="btn" type="button" data-flash-shuf>${t('flashcards.shuffle')}</button>
          </div>
        </div>
      </section>`;
  }

  function heatFlashcards() {
    // Filter flashcards specifically for Heat topics
    return flashcards.filter(c => 
      ['liquidThermometer', 'faultyThermometer', 'resistanceThermometer', 'thermistor'].includes(c.topic)
    );
  }

  function flashDeckList() {
    const list = heatFlashcards();
    if (flashDeck === 'all') return list;
    return list.filter((c) => c.topic === flashDeck);
  }

  function paintFlash() {
    const list = flashDeckList();
    const progress = root.querySelector('[data-flash-progress]');
    if (!list.length) {
      flashIndex = 0;
      const front = root.querySelector('[data-flash-front]');
      const surface = root.querySelector('[data-flip-card]');
      if (front) front.textContent = '';
      if (surface) surface.classList.remove('flashcard-surface--image');
      if (progress) {
        progress.hidden = true;
        progress.textContent = '';
      }
      return;
    }

    flashIndex = Math.max(0, Math.min(flashIndex, list.length - 1));
    const card = list[flashIndex];
    const frontEl = root.querySelector('[data-flash-front]');
    const surface = root.querySelector('[data-flip-card]');
    const labelEl = root.querySelector('[data-flash-label]');
    if (!frontEl || !surface) return;

    if (progress) {
      progress.hidden = false;
      progress.textContent = t('flashcards.progress')
        .replace('{current}', String(flashIndex + 1))
        .replace('{total}', String(list.length));
    }

    surface.classList.remove('flashcard-surface--image');
    const lk = langKey();
    const pack = card[lk] || card.en;
    if (labelEl) {
      labelEl.hidden = false;
      labelEl.textContent = flashShowBack ? t('flashcards.answer') : t('flashcards.question');
    }
    frontEl.textContent = flashShowBack ? pack.a : pack.q;
  }

  function hydrateFlashcards() {
    const deckSel = root.querySelector('[data-flash-deck]');
    deckSel.value = flashDeck;
    deckSel.addEventListener('change', () => {
      flashDeck = deckSel.value;
      flashIndex = 0;
      flashShowBack = false;
      paintFlash();
    });
    root.querySelector('[data-flip-card]').addEventListener('click', () => {
      flashShowBack = !flashShowBack;
      paintFlash();
    });
    root.querySelector('[data-flash-flip]').addEventListener('click', (e) => {
      e.stopPropagation();
      flashShowBack = !flashShowBack;
      paintFlash();
    });
    root.querySelector('[data-flash-prev]').addEventListener('click', () => {
      const list = flashDeckList();
      flashIndex = (flashIndex - 1 + list.length) % list.length;
      flashShowBack = false;
      paintFlash();
    });
    root.querySelector('[data-flash-next]').addEventListener('click', () => {
      const list = flashDeckList();
      flashIndex = (flashIndex + 1) % list.length;
      flashShowBack = false;
      paintFlash();
    });
    root.querySelector('[data-flash-shuf]').addEventListener('click', () => {
      const list = flashDeckList();
      flashIndex = Math.floor(Math.random() * list.length);
      flashShowBack = false;
      paintFlash();
    });
    paintFlash();
  }

  function renderSummary() {
    const items = [
      { key: 'liquidThermometer', fileEn: 'liquid-thermometer-en.pdf', fileZh: 'liquid-thermometer-zhHant.pdf' },
      { key: 'faultyThermometer', fileEn: 'faulty-thermometer-en.pdf', fileZh: 'faulty-thermometer-zhHant.pdf' },
      { key: 'resistanceThermometer', fileEn: 'resistance-thermometer-en.pdf', fileZh: 'resistance-thermometer-zhHant.pdf' },
      { key: 'thermistor', fileEn: 'thermistor-en.pdf', fileZh: 'thermistor-zhHant.pdf' },
    ];
    return `
      <section class="panel">
        <h2>${t('summary.title')}</h2>
        <p class="lead">${t('summary.intro')}</p>
        <p class="lead">${t('notes.embedHint')}</p>
        <div class="grid cols-2" data-summary-grid>
          ${items
            .map((it) => {
              const title = t(`summary.item.${it.key}`);
              return `
            <div class="card" data-summary-card="${it.key}">
              <h3>${title}</h3>
              <div data-summary-body></div>
            </div>`;
            })
            .join('')}
        </div>
      </section>`;
  }

  async function hydrateSummary() {
    const rows = [
      { key: 'liquidThermometer', fileEn: 'liquid-thermometer-en.pdf', fileZh: 'liquid-thermometer-zhHant.pdf' },
      { key: 'faultyThermometer', fileEn: 'faulty-thermometer-en.pdf', fileZh: 'faulty-thermometer-zhHant.pdf' },
      { key: 'resistanceThermometer', fileEn: 'resistance-thermometer-en.pdf', fileZh: 'resistance-thermometer-zhHant.pdf' },
      { key: 'thermistor', fileEn: 'thermistor-en.pdf', fileZh: 'thermistor-zhHant.pdf' },
    ];
    const lk = langKey();
    for (const r of rows) {
      const card = root.querySelector(`[data-summary-card="${r.key}"]`);
      if (!card) continue;
      const body = card.querySelector('[data-summary-body]');
      const file = lk === 'zhHant' ? r.fileZh : r.fileEn;
      const ok = await assetExists('summary-pdfs', file);
      const url = `${import.meta.env.BASE_URL}summary-pdfs/${file}`;
      if (ok) {
        body.innerHTML = `
          <iframe class="notes-grid" title="${t(`summary.item.${r.key}`)}" src="${url}"></iframe>
          <p style="margin-top:8px"><a href="${url}" target="_blank" rel="noopener">${t('summary.download')}</a></p>`;
      } else {
        body.innerHTML = `<p class="lead">${t('summary.missing')}</p>`;
      }
    }
  }

  const onLang = () => render();
  const onClick = (ev) => onMainClick(ev);

  window.addEventListener('s3phy:lang', onLang);
  root.addEventListener('click', onClick);

  render();

  return () => {
    window.removeEventListener('s3phy:lang', onLang);
    root.removeEventListener('click', onClick);
    if (activeLabInstance && activeLabInstance._thermometerLabCleanup) {
      activeLabInstance._thermometerLabCleanup();
    }
    shell?.destroy();
  };
}
