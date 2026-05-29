const LETTERS = ['A', 'B', 'C', 'D'];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function filterPool(questions, picked) {
  return questions.filter((q) => {
    const topic = q.topic;
    if (picked.includes(topic)) return true;
    if (picked.includes('rotatingMirror') && topic === 'reflection') return true;
    if (picked.includes('refractionTir') && (topic === 'refraction' || topic === 'tir')) return true;
    if (topic === 'convex' && picked.includes('convex')) return true;
    if (topic === 'concave' && picked.includes('concave')) return true;
    return false;
  });
}

function todayStr() {
  return new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderWorksheets(t) {
  const topics = [
    ['rotatingMirror', 'topic.rotatingMirror'],
    ['refractionTir', 'topic.refractionTir'],
    ['convex', 'topic.convex'],
    ['concave', 'topic.concave'],
    ['em', 'topic.em'],
  ];
  return `
    <section class="panel panel--worksheets">
      <h2>${t('worksheets.title')}</h2>
      <p class="lead">${t('worksheets.intro')}</p>
      <div class="ws-controls no-print">
        <div class="controls">
          <div class="control">
            <label>${t('worksheets.count')}</label>
            <select data-ws-count>
              <option>5</option><option>10</option><option>15</option>
            </select>
          </div>
        </div>
        <p class="lead" style="margin-top:10px">${t('worksheets.topics')}</p>
        <div class="grid cols-2" data-ws-topics>
          ${topics
            .map(
              ([id, key]) => `<label class="card ws-topic-card">
            <input type="checkbox" data-ws-topic="${id}" checked />
            <span>${t(key)}</span>
          </label>`,
            )
            .join('')}
        </div>
        <p class="ws-action-row">
          <button class="btn primary" type="button" data-ws-gen>${t('worksheets.generate')}</button>
        </p>
      </div>
      <div class="ws-preview-area" data-ws-preview-area hidden>
        <div class="preview-tabs no-print" data-ws-tabs>
          <button type="button" class="preview-tab active" data-ws-tab="student">${t('worksheets.tabStudent')}</button>
          <button type="button" class="preview-tab" data-ws-tab="practice">${t('worksheets.tabPractice')}</button>
          <button type="button" class="preview-tab" data-ws-tab="answer">${t('worksheets.tabAnswer')}</button>
        </div>
        <div class="worksheet-paper" data-ws-paper>
          <div class="worksheet-header">
            <div class="header-top">
              <h3>${t('worksheets.paperTitle')}</h3>
              <div class="ws-date-row no-print" data-ws-date-row hidden>
                <span data-ws-date-label></span>
                <button type="button" class="btn btn-sm" data-ws-date-today>${t('worksheets.today')}</button>
              </div>
            </div>
            <p class="ws-date-print" data-ws-date-print hidden></p>
          </div>
          <div class="worksheet-body" data-ws-body></div>
        </div>
        <div class="practice-actions no-print" data-ws-practice-actions hidden>
          <button type="button" class="check-btn" data-ws-check>${t('worksheets.checkAnswers')}</button>
          <div class="score-display" data-ws-score hidden>
            <span class="score-label">${t('worksheets.score')}</span>
            <span class="score-value" data-ws-score-val>0/0</span>
          </div>
        </div>
        <div class="ws-session-summary no-print" data-ws-summary hidden></div>
        <div class="export-buttons no-print" data-ws-export>
          <button type="button" class="export-btn" data-ws-word-p>${t('worksheets.exportWord')}</button>
          <button type="button" class="export-btn" data-ws-word-a>${t('worksheets.exportWordAnswers')}</button>
          <button type="button" class="export-btn" data-ws-print-p>${t('worksheets.printPractice')}</button>
          <button type="button" class="export-btn" data-ws-print-a>${t('worksheets.printAnswers')}</button>
        </div>
      </div>
      <div class="worksheet-output" data-ws-out><p class="lead">${t('worksheets.empty')}</p></div>
    </section>`;
}

export function hydrateWorksheets(root, questions, t, langKey) {
  const state = {
    items: [],
    tab: 'student',
    dateStr: '',
    attemptMap: {},
    userAnswers: {},
    checked: false,
  };

  const gen = root.querySelector('[data-ws-gen]');
  const previewArea = root.querySelector('[data-ws-preview-area]');
  const emptyOut = root.querySelector('[data-ws-out]');
  const body = root.querySelector('[data-ws-body]');
  const tabs = root.querySelector('[data-ws-tabs]');
  const practiceActions = root.querySelector('[data-ws-practice-actions]');
  const checkBtn = root.querySelector('[data-ws-check]');
  const scoreEl = root.querySelector('[data-ws-score]');
  const scoreVal = root.querySelector('[data-ws-score-val]');
  const summaryEl = root.querySelector('[data-ws-summary]');
  const dateRow = root.querySelector('[data-ws-date-row]');
  const datePrint = root.querySelector('[data-ws-date-print]');
  const dateToday = root.querySelector('[data-ws-date-today]');
  const dateLabel = root.querySelector('[data-ws-date-label]');

  if (!gen || !body) return;

  function lk() {
    return langKey();
  }

  function resetSession() {
    state.attemptMap = {};
    state.userAnswers = {};
    state.checked = false;
    scoreEl.hidden = true;
    summaryEl.hidden = true;
  }

  function setTab(tab) {
    state.tab = tab;
    tabs?.querySelectorAll('[data-ws-tab]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-ws-tab') === tab);
    });
    if (practiceActions) practiceActions.hidden = tab !== 'practice';
    if (dateRow) dateRow.hidden = tab !== 'student';
    if (datePrint) {
      datePrint.hidden = !state.dateStr || tab === 'practice';
      datePrint.textContent = state.dateStr ? `${t('worksheets.date')}: ${state.dateStr}` : '';
    }
    root.querySelector('[data-ws-paper]')?.classList.toggle('practice-mode', tab === 'practice');
    paint();
  }

  function paintQuestionRow(q, i, mode) {
    const pack = q[lk()] || q.en;
    const letters = LETTERS;
    const qNum = i + 1;
    const sectionTag = q.section ? `<span class="q-section">${escapeHtml(q.section)}</span>` : '';

    if (mode === 'student') {
      const choices = pack.choices
        .map((c, j) => `<li><span class="choice-circle"></span> <strong>${letters[j]}.</strong> ${escapeHtml(c)}</li>`)
        .join('');
      return `<div class="question-row"><h4>Q${qNum} ${sectionTag}</h4><p>${escapeHtml(pack.q)}</p><ol class="choice-list">${choices}</ol></div>`;
    }

    if (mode === 'answer') {
      const choices = pack.choices
        .map(
          (c, j) =>
            `<li class="${j === pack.a ? 'choice-correct' : ''}"><strong>${letters[j]}.</strong> ${escapeHtml(c)}</li>`,
        )
        .join('');
      return `<div class="question-row question-row--answer">
        <h4>Q${qNum} ${sectionTag}</h4>
        <p>${escapeHtml(pack.q)}</p>
        <ol class="choice-list">${choices}</ol>
        <p class="q-exp"><strong>${t('worksheets.answer')}:</strong> ${letters[pack.a]}</p>
        <p class="q-exp"><em>${escapeHtml(pack.exp)}</em></p>
      </div>`;
    }

    // practice mode
    const attempts = state.attemptMap[i] || 0;
    const solved = attempts >= 2 || (state.checked && state.userAnswers[i] === pack.a);
    const selected = state.userAnswers[i];
    const isCorrect = state.checked && selected === pack.a;
    const isWrong = state.checked && selected !== undefined && selected !== pack.a;

    let feedback = '';
    if (attempts === 1 && !state.checked) {
      feedback = `<p class="q-hint"><strong>${t('worksheets.hint')}:</strong> ${escapeHtml(pack.hint || pack.exp)}</p>`;
    } else if (attempts >= 2 || (state.checked && isWrong)) {
      feedback = `<p class="q-exp"><strong>${t('worksheets.answer')}:</strong> ${letters[pack.a]} — ${escapeHtml(pack.exp)}</p>`;
    }

    const rowClass = state.checked
      ? isCorrect
        ? 'correct'
        : isWrong
          ? 'incorrect'
          : ''
      : '';

    const choices = pack.choices
      .map((c, j) => {
        const checked = selected === j ? ' checked' : '';
        const disabled = solved ? ' disabled' : '';
        return `<li>
          <label class="choice-radio">
            <input type="radio" name="ws-q-${i}" value="${j}" data-ws-q="${i}" data-ws-choice="${j}"${checked}${disabled} />
            <strong>${letters[j]}.</strong> ${escapeHtml(c)}
          </label>
        </li>`;
      })
      .join('');

    const icon = state.checked ? (isCorrect ? '<span class="result-icon">✓</span>' : isWrong ? '<span class="result-icon">✗</span>' : '') : '';

    return `<div class="question-row ${rowClass}" data-ws-row="${i}">
      <div class="q-header"><h4>Q${qNum} ${sectionTag}</h4>${icon}</div>
      <p>${escapeHtml(pack.q)}</p>
      <ol class="choice-list choice-list--radio">${choices}</ol>
      ${feedback}
    </div>`;
  }

  function paint() {
    if (!state.items.length) return;
    body.innerHTML = state.items.map((q, i) => paintQuestionRow(q, i, state.tab)).join('');
    bindPracticeInputs();
  }

  function bindPracticeInputs() {
    if (state.tab !== 'practice') return;
    body.querySelectorAll('[data-ws-choice]').forEach((input) => {
      input.addEventListener('change', () => {
        const qi = Number(input.getAttribute('data-ws-q'));
        const choice = Number(input.getAttribute('data-ws-choice'));
        const pack = state.items[qi][lk()] || state.items[qi].en;
        const prev = state.userAnswers[qi];
        state.userAnswers[qi] = choice;

        if (choice !== pack.a) {
          state.attemptMap[qi] = (state.attemptMap[qi] || 0) + 1;
        } else if (prev === undefined) {
          state.attemptMap[qi] = state.attemptMap[qi] || 0;
        }
        state.checked = false;
        scoreEl.hidden = true;
        summaryEl.hidden = true;
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
        if ((state.attemptMap[i] || 0) === 0) firstTry += 1;
      } else {
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
      <h4>${t('worksheets.sessionSummary')}</h4>
      <p>${t('worksheets.score')}: <strong>${correct}/${total}</strong> (${pct}%)</p>
      <p>${t('worksheets.firstTry')}: <strong>${firstTry}/${total}</strong></p>
      <p>${t('worksheets.revisionSuggestions')}: ${band}</p>
      ${weakList ? `<p>${t('worksheets.weakSections')}:</p><ul>${weakList}</ul>` : ''}`;
    summaryEl.hidden = false;
  }

  function checkAnswers() {
    state.checked = true;
    let correct = 0;
    state.items.forEach((q, i) => {
      const pack = q[lk()] || q.en;
      if (state.userAnswers[i] === pack.a) correct += 1;
      else if (state.userAnswers[i] !== undefined && state.userAnswers[i] !== pack.a) {
        state.attemptMap[i] = Math.max(state.attemptMap[i] || 0, 1);
      }
    });
    scoreVal.textContent = `${correct}/${state.items.length}`;
    scoreEl.hidden = false;
    paint();
    buildSessionSummary();
  }

  function buildWordHtml(withAnswers) {
    const lkVal = lk();
    const rows = state.items
      .map((q, i) => {
        const pack = q[lkVal] || q.en;
        const choices = pack.choices.map((c, j) => `${LETTERS[j]}. ${c}`).join('<br/>');
        const ans = withAnswers
          ? `<p><b>${t('worksheets.answer')}:</b> ${LETTERS[pack.a]}<br/><i>${pack.exp}</i></p>`
          : '';
        return `<tr><td valign="top"><b>Q${i + 1}.</b></td><td>${pack.q}<br/>${choices}${ans}</td></tr>`;
      })
      .join('');
    return `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
<head><meta charset="utf-8"><title>${t('worksheets.paperTitle')}</title></head>
<body><h2>${t('worksheets.paperTitle')}</h2>
${state.dateStr && !withAnswers ? `<p>${t('worksheets.date')}: ${state.dateStr}</p>` : ''}
<table border="0" cellspacing="8">${rows}</table></body></html>`;
  }

  function downloadWord(withAnswers) {
    const html = buildWordHtml(withAnswers);
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = withAnswers ? 'worksheet-answers.doc' : 'worksheet.doc';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  gen.addEventListener('click', () => {
    const count = Number(root.querySelector('[data-ws-count]').value);
    const picked = [...root.querySelectorAll('[data-ws-topic]')]
      .filter((c) => c.checked)
      .map((c) => c.getAttribute('data-ws-topic'));
    const pool = filterPool(questions, picked);
    const deck = shuffle(pool).slice(0, Math.min(count, pool.length || 1));
    state.items = deck.length ? deck : shuffle(questions).slice(0, Math.min(count, questions.length));
    resetSession();
    state.tab = 'student';
    state.dateStr = '';
    previewArea.hidden = false;
    emptyOut.hidden = true;
    tabs?.querySelectorAll('[data-ws-tab]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-ws-tab') === 'student');
    });
    if (practiceActions) practiceActions.hidden = true;
    if (dateRow) dateRow.hidden = false;
    if (datePrint) datePrint.hidden = true;
    paint();
  });

  tabs?.addEventListener('click', (ev) => {
    const btn = ev.target.closest('[data-ws-tab]');
    if (!btn || !state.items.length) return;
    setTab(btn.getAttribute('data-ws-tab'));
  });

  checkBtn?.addEventListener('click', checkAnswers);

  dateToday?.addEventListener('click', () => {
    if (state.dateStr) {
      state.dateStr = '';
      dateLabel.textContent = '';
    } else {
      state.dateStr = todayStr();
      dateLabel.textContent = `${t('worksheets.date')}: ${state.dateStr}`;
    }
    if (datePrint) {
      datePrint.hidden = !state.dateStr || state.tab === 'practice';
      datePrint.textContent = state.dateStr ? `${t('worksheets.date')}: ${state.dateStr}` : '';
    }
  });

  root.querySelector('[data-ws-word-p]')?.addEventListener('click', () => downloadWord(false));
  root.querySelector('[data-ws-word-a]')?.addEventListener('click', () => downloadWord(true));
  root.querySelector('[data-ws-print-p]')?.addEventListener('click', () => {
    setTab('student');
    window.print();
  });
  root.querySelector('[data-ws-print-a]')?.addEventListener('click', () => {
    setTab('answer');
    window.print();
  });
}
