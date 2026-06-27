const LETTERS = ['A', 'B', 'C', 'D'];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function filterPool(questions, picked, topicFilter) {
  return questions.filter((q) => {
    if (topicFilter) return topicFilter(q, picked);
    const topic = q.topic;
    if (picked.includes(topic)) return true;
    if (picked.includes('rotatingMirror') && topic === 'reflection') return true;
    if (picked.includes('refraction') && topic === 'refraction') return true;
    if (picked.includes('tir') && topic === 'tir') return true;
    if (topic === 'convex' && picked.includes('convex')) return true;
    if (topic === 'concave' && picked.includes('concave')) return true;
    return false;
  });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderWorksheets(t, options = {}) {
  const topics = options.topics ?? [
    ['rotatingMirror', 'topic.rotatingMirror'],
    ['refraction', 'topic.refractionSnell'],
    ['tir', 'topic.tir'],
    ['convex', 'topic.convex'],
    ['concave', 'topic.concave'],
    ['em', 'topic.em'],
  ];

  return `
    <section class="panel panel--worksheets">
      <div class="ws-layout" id="ws-layout">
        <aside class="ws-settings-panel no-print" id="ws-settings-panel">
          <h2 class="ws-settings-title">${t('worksheets.settingsTitle')}</h2>
          <div class="ws-bank-summary" id="ws-bank-summary" aria-live="polite"></div>
          <label class="ws-field-label">${t('worksheets.topics')}</label>
          <div class="ws-topic-checks" data-ws-topics>
            ${topics
              .map(
                ([id, key]) =>
                  `<label class="ws-check-card">
                    <input type="checkbox" data-ws-topic="${id}" checked />
                    <span>${t(key)}</span>
                  </label>`,
              )
              .join('')}
          </div>
          <label class="ws-field-label" for="ws-count-input">${t('worksheets.countLabel')}</label>
          <input class="ws-input" id="ws-count-input" data-ws-count type="number" min="1" max="50" value="10" />
          <button class="ws-generate-btn" type="button" data-ws-gen>${t('worksheets.generate')}</button>
          <h3 class="ws-export-title">${t('worksheets.exportTitle')}</h3>
          <p class="ws-export-hint">${t('worksheets.exportHint')}</p>
          <div class="ws-export-stack">
            <button type="button" class="ws-export-btn" data-ws-word-p>${t('worksheets.exportWordQuestions')}</button>
            <button type="button" class="ws-export-btn" data-ws-word-a>${t('worksheets.exportWordAnswers')}</button>
            <button type="button" class="ws-export-btn" data-ws-print-p>${t('worksheets.printPractice')}</button>
            <button type="button" class="ws-export-btn" data-ws-print-a>${t('worksheets.printAnswers')}</button>
          </div>
        </aside>

        <div class="ws-practice-col">
          <div class="ws-progress-row no-print">
            <div class="ws-progress-block">
              <p class="ws-strand-label" data-ws-strand-label></p>
              <p class="ws-progress-text" data-ws-progress-text>${t('worksheets.progressNone')}</p>
              <div class="ws-progress-track">
                <div class="ws-progress-bar" data-ws-progress-bar style="width:0%"></div>
              </div>
            </div>
            <button type="button" class="ws-settings-toggle" data-ws-toggle-settings aria-controls="ws-settings-panel" aria-expanded="true">
              <span class="ws-settings-toggle-icon" data-ws-toggle-icon>‹</span>
              <span data-ws-toggle-label>${t('worksheets.hideSettings')}</span>
            </button>
          </div>

          <div class="ws-main-grid">
            <section class="ws-practice-panel">
              <div class="ws-practice-header no-print">
                <div>
                  <h2 class="ws-practice-title">${t('worksheets.practiceTitle')}</h2>
                  <p class="ws-practice-hint">${t('worksheets.practiceHint')}</p>
                </div>
                <button type="button" class="ws-summary-btn" data-ws-summary-btn>${t('worksheets.sessionSummary')}</button>
              </div>
              <div class="ws-summary-panel no-print" data-ws-summary hidden></div>
              <div class="ws-quiz-area ws-quiz-empty" data-ws-body>
                <p>${t('worksheets.empty')}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div class="ws-print-sheet" data-ws-print-sheet hidden aria-hidden="true"></div>
    </section>`;
}

export function hydrateWorksheets(root, questions, t, langKey, options = {}) {
  const state = {
    items: [],
    userAnswers: {},
    wrongAttempts: {},
    resolved: {},
    pending: {},
  };

  const layout = root.querySelector('#ws-layout');
  const settingsPanel = root.querySelector('#ws-settings-panel');
  const bankSummary = root.querySelector('#ws-bank-summary');
  const gen = root.querySelector('[data-ws-gen]');
  const body = root.querySelector('[data-ws-body]');
  const progressText = root.querySelector('[data-ws-progress-text]');
  const progressBar = root.querySelector('[data-ws-progress-bar]');
  const summaryEl = root.querySelector('[data-ws-summary]');
  const summaryBtn = root.querySelector('[data-ws-summary-btn]');
  const toggleSettings = root.querySelector('[data-ws-toggle-settings]');
  const toggleLabel = root.querySelector('[data-ws-toggle-label]');
  const toggleIcon = root.querySelector('[data-ws-toggle-icon]');
  const strandLabel = root.querySelector('[data-ws-strand-label]');
  const printSheetEl = root.querySelector('[data-ws-print-sheet]');

  if (!gen || !body) return;

  if (strandLabel && options.paperTitleKey) {
    strandLabel.textContent = t(options.paperTitleKey).toUpperCase();
  } else if (strandLabel) {
    strandLabel.textContent = t('worksheets.paperTitle').toUpperCase();
  }

  function lk() {
    return langKey();
  }

  function pickedTopics() {
    return [...root.querySelectorAll('[data-ws-topic]')]
      .filter((c) => c.checked)
      .map((c) => c.getAttribute('data-ws-topic'));
  }

  function topicLabel(id) {
    const node = root.querySelector(`[data-ws-topic="${id}"]`);
    const label = node?.closest('.ws-check-card')?.querySelector('span');
    return label?.textContent?.trim() || id;
  }

  function updateBankSummary() {
    if (!bankSummary) return;
    const picked = pickedTopics();
    if (!picked.length) {
      bankSummary.innerHTML = `<p class="ws-bank-title">${escapeHtml(t('worksheets.bankTitle'))}</p>
        <p class="ws-bank-muted">${escapeHtml(t('worksheets.bankNone'))}</p>`;
      return;
    }
    const pool = filterPool(questions, picked, options.topicFilter);
    const rows = picked
      .map((id) => {
        const count = pool.filter((q) => {
          if (options.topicFilter) return options.topicFilter(q, [id]);
          if (id === 'rotatingMirror') return q.topic === 'reflection';
          if (id === 'refraction') return q.topic === 'refraction';
          return q.topic === id;
        }).length;
        return `<li><span>${escapeHtml(topicLabel(id))}</span><strong>${count}</strong></li>`;
      })
      .join('');
    bankSummary.innerHTML = `
      <p class="ws-bank-title">${escapeHtml(t('worksheets.bankTitle'))}</p>
      <p class="ws-bank-muted">${escapeHtml(t('worksheets.bankAvailable'))}</p>
      <p class="ws-bank-count">${pool.length}</p>
      <p class="ws-bank-muted ws-bank-by-topic">${escapeHtml(t('worksheets.bankByTopic'))}</p>
      <ul class="ws-bank-list">${rows}</ul>`;
  }

  function updateProgress() {
    if (!state.items.length) {
      if (progressText) progressText.textContent = t('worksheets.progressNone');
      if (progressBar) progressBar.style.width = '0%';
      return;
    }
    const done = state.items.filter((_, i) => state.resolved[i]).length;
    if (progressText) {
      progressText.textContent = `${t('worksheets.progressPrefix')} ${done} / ${state.items.length}`;
    }
    if (progressBar) {
      progressBar.style.width = `${(done / state.items.length) * 100}%`;
    }
  }

  function resetSession() {
    state.userAnswers = {};
    state.wrongAttempts = {};
    state.resolved = {};
    state.pending = {};
    if (summaryEl) {
      summaryEl.hidden = true;
      summaryEl.innerHTML = '';
    }
  }

  function allResolved() {
    return state.items.length > 0 && state.items.every((_, i) => state.resolved[i]);
  }

  function paintQuestionBlock(q, i) {
    const pack = q[lk()] || q.en;
    const qNum = i + 1;
    const st = {
      selected: state.pending[i] ?? state.userAnswers[i],
      wrong: state.wrongAttempts[i] || 0,
      solved: state.resolved[i],
    };
    const sectionTag = q.section ? escapeHtml(q.section) : escapeHtml(q.topic || '');

    const optionsHtml = pack.choices
      .map((c, j) => {
        const letter = LETTERS[j];
        const isSelected = st.selected === j;
        const isCorrect = st.solved && j === pack.a;
        const classes = ['ws-option-btn'];
        if (isSelected && !st.solved) classes.push('ws-option-btn--selected');
        if (isCorrect) classes.push('ws-option-btn--correct');
        const disabled = st.solved ? ' disabled' : '';
        return `<button type="button" class="${classes.join(' ')}" data-ws-option="${j}" data-ws-q="${i}"${disabled}>
          <span class="ws-option-badge">${letter}</span>
          <span class="ws-option-text">${escapeHtml(c)}</span>
        </button>`;
      })
      .join('');

    let feedback = '';
    if (st.wrong === 1 && !st.solved) {
      feedback = `<div class="ws-feedback ws-feedback--hint" role="status">
        <strong>${escapeHtml(t('worksheets.hint'))}:</strong> ${escapeHtml(pack.hint || pack.exp)}
      </div>`;
    } else if (st.solved && st.selected !== pack.a) {
      feedback = `<div class="ws-feedback ws-feedback--model" role="status">
        <strong>${escapeHtml(t('worksheets.modelAnswer'))}:</strong> ${escapeHtml(LETTERS[pack.a])}
        <span class="ws-feedback-exp">${escapeHtml(pack.exp)}</span>
      </div>`;
    } else if (st.solved && st.selected === pack.a) {
      feedback = `<div class="ws-feedback ws-feedback--correct" role="status">${escapeHtml(t('worksheets.correct'))}</div>`;
    }

    const checkDisabled = st.solved ? ' disabled' : '';
    const rowClass = st.solved
      ? st.selected === pack.a
        ? 'ws-q-block--correct'
        : 'ws-q-block--incorrect'
      : '';

    return `<article class="ws-q-block ${rowClass}" data-ws-block="${i}">
      <div class="ws-q-meta">Q${qNum} · ${sectionTag.toUpperCase()} · MCQ</div>
      <p class="ws-q-stem">${escapeHtml(pack.q)}</p>
      <div class="ws-options">${optionsHtml}</div>
      <button type="button" class="ws-check-btn" data-ws-check="${i}"${checkDisabled}>${escapeHtml(t('worksheets.checkAnswer'))}</button>
      ${feedback}
    </article>`;
  }

  function paint() {
    if (!state.items.length) {
      body.className = 'ws-quiz-area ws-quiz-empty';
      body.innerHTML = `<p>${escapeHtml(t('worksheets.empty'))}</p>`;
      return;
    }

    body.className = 'ws-quiz-area';
    body.innerHTML = state.items.map((q, i) => paintQuestionBlock(q, i)).join('');

    body.querySelectorAll('[data-ws-option]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qi = Number(btn.getAttribute('data-ws-q'));
        if (state.resolved[qi]) return;
        const choice = Number(btn.getAttribute('data-ws-option'));
        state.pending[qi] = choice;
        body.querySelectorAll(`[data-ws-q="${qi}"][data-ws-option]`).forEach((b) => {
          b.classList.toggle('ws-option-btn--selected', Number(b.getAttribute('data-ws-option')) === choice);
        });
      });
    });

    body.querySelectorAll('[data-ws-check]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qi = Number(btn.getAttribute('data-ws-check'));
        if (state.resolved[qi]) return;
        const choice = state.pending[qi];
        if (choice === undefined) return;

        const pack = state.items[qi][lk()] || state.items[qi].en;
        state.userAnswers[qi] = choice;

        if (choice === pack.a) {
          state.resolved[qi] = true;
        } else {
          state.wrongAttempts[qi] = (state.wrongAttempts[qi] || 0) + 1;
          if (state.wrongAttempts[qi] >= 2) state.resolved[qi] = true;
        }

        updateProgress();
        if (allResolved()) buildSessionSummary();
        paint();
      });
    });
  }

  function buildSessionSummary() {
    const total = state.items.length;
    let correct = 0;
    let firstTry = 0;
    const weakSections = {};

    state.items.forEach((q, i) => {
      const pack = q[lk()] || q.en;
      const ans = state.userAnswers[i];
      if (ans === pack.a) {
        correct += 1;
        if ((state.wrongAttempts[i] || 0) === 0) firstTry += 1;
      } else if (state.resolved[i]) {
        const sec = q.section || q.topic;
        weakSections[sec] = (weakSections[sec] || 0) + 1;
      }
    });

    const pct = total ? Math.round((correct / total) * 100) : 0;
    let band = t('worksheets.revisionFair');
    if (pct >= 90) band = t('worksheets.revisionExcellent');
    else if (pct >= 70) band = t('worksheets.revisionGood');
    else if (pct < 50) band = t('worksheets.revisionLow');

    const weakList = Object.entries(weakSections)
      .sort((a, b) => b[1] - a[1])
      .map(([sec, n]) => `<li>${escapeHtml(sec)} (${n})</li>`)
      .join('');

    summaryEl.innerHTML = `
      <h4>${escapeHtml(t('worksheets.sessionSummary'))}</h4>
      <p>${escapeHtml(t('worksheets.score'))}: <strong>${correct}/${total}</strong> (${pct}%)</p>
      <p>${escapeHtml(t('worksheets.firstTry'))}: <strong>${firstTry}/${total}</strong></p>
      <p>${escapeHtml(t('worksheets.revisionSuggestions'))}: ${escapeHtml(band)}</p>
      ${weakList ? `<p>${escapeHtml(t('worksheets.weakSections'))}:</p><ul>${weakList}</ul>` : ''}`;
    summaryEl.hidden = false;
  }

  function buildPrintHtml(withAnswers) {
    const paperTitle = options.paperTitleKey ? t(options.paperTitleKey) : t('worksheets.paperTitle');
    const rows = state.items
      .map((q, i) => {
        const pack = q[lk()] || q.en;
        const choices = pack.choices
          .map((c, j) => `<li>${LETTERS[j]}. ${escapeHtml(c)}</li>`)
          .join('');
        const ans = withAnswers
          ? `<p><strong>${escapeHtml(t('worksheets.answer'))}:</strong> ${LETTERS[pack.a]}<br/><em>${escapeHtml(pack.exp)}</em></p>`
          : '';
        return `<div class="ws-print-q"><strong>Q${i + 1}.</strong> ${escapeHtml(pack.q)}<ol>${choices}</ol>${ans}</div>`;
      })
      .join('');
    return `<h2>${escapeHtml(paperTitle)}</h2>${rows}`;
  }

  function buildWordHtml(withAnswers) {
    const paperTitle = options.paperTitleKey ? t(options.paperTitleKey) : t('worksheets.paperTitle');
    const rows = state.items
      .map((q, i) => {
        const pack = q[lk()] || q.en;
        const choices = pack.choices.map((c, j) => `${LETTERS[j]}. ${c}`).join('<br/>');
        const ans = withAnswers
          ? `<p><b>${t('worksheets.answer')}:</b> ${LETTERS[pack.a]}<br/><i>${pack.exp}</i></p>`
          : '';
        return `<div style="page-break-inside:avoid;margin-bottom:16px"><b>Q${i + 1}.</b> ${pack.q}<br/>${choices}${ans}</div>`;
      })
      .join('');
    return `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
<head><meta charset="utf-8"><title>${paperTitle}</title></head>
<body><h2>${paperTitle}</h2>${rows}</body></html>`;
  }

  function downloadWord(withAnswers) {
    if (!state.items.length) return;
    const html = buildWordHtml(withAnswers);
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = withAnswers ? 'worksheet-answers.doc' : 'worksheet.doc';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function printWorksheet(withAnswers) {
    if (!state.items.length || !printSheetEl) return;
    printSheetEl.hidden = false;
    printSheetEl.innerHTML = buildPrintHtml(withAnswers);
    const cleanup = () => {
      printSheetEl.hidden = true;
      printSheetEl.innerHTML = '';
      document.body.classList.remove('ws-printing');
    };
    document.body.classList.add('ws-printing');
    window.addEventListener('afterprint', cleanup, { once: true });
    window.print();
  }

  gen.addEventListener('click', () => {
    const count = Math.min(50, Math.max(1, Number(root.querySelector('[data-ws-count]').value) || 10));
    const picked = pickedTopics();
    if (!picked.length) return;
    const pool = filterPool(questions, picked, options.topicFilter);
    const deck = shuffle(pool).slice(0, Math.min(count, pool.length || 1));
    state.items = deck.length ? deck : shuffle(questions).slice(0, Math.min(count, questions.length));
    resetSession();
    updateProgress();
    paint();
  });

  root.querySelector('[data-ws-topics]')?.addEventListener('change', updateBankSummary);

  toggleSettings?.addEventListener('click', () => {
    const collapsed = layout?.classList.toggle('ws-layout--collapsed');
    if (toggleLabel) {
      toggleLabel.textContent = collapsed ? t('worksheets.showSettings') : t('worksheets.hideSettings');
    }
    if (toggleIcon) toggleIcon.textContent = collapsed ? '›' : '‹';
    toggleSettings.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
  });

  summaryBtn?.addEventListener('click', () => {
    if (!state.items.length) return;
    if (!summaryEl.hidden && summaryEl.innerHTML) {
      summaryEl.hidden = true;
      return;
    }
    buildSessionSummary();
  });

  root.querySelector('[data-ws-word-p]')?.addEventListener('click', () => downloadWord(false));
  root.querySelector('[data-ws-word-a]')?.addEventListener('click', () => downloadWord(true));
  root.querySelector('[data-ws-print-p]')?.addEventListener('click', () => printWorksheet(false));
  root.querySelector('[data-ws-print-a]')?.addEventListener('click', () => printWorksheet(true));

  updateBankSummary();
}
