import { t, getLang, setLang } from './i18n.js';
import questions from './data/questions.json';
import flashcards from './data/flashcards.json';
import { createReflectionLab } from './tools/reflectionLab.js';
import { createRefractionLab } from './tools/refractionLab.js';
import { createTirLab } from './tools/tirLab.js';
import { createLensLab } from './tools/lensLab.js';
import { createEmLab } from './tools/emLab.js';

const SECTIONS = ['topics', 'notes', 'tools', 'worksheets', 'flashcards', 'summary'];

const TOOL_ORDER = ['reflection', 'refraction', 'tir', 'convexLens', 'concaveLens', 'em'];

const TOOL_FACTORIES = {
  reflection: (tr) => createReflectionLab(tr),
  refraction: (tr) => createRefractionLab(tr),
  tir: (tr) => createTirLab(tr),
  convexLens: (tr) => createLensLab(tr, { defaultKind: 'convex' }),
  concaveLens: (tr) => createLensLab(tr, { defaultKind: 'concave' }),
  em: (tr) => createEmLab(tr),
};

function toolLabel(id) {
  const map = {
    reflection: 'tools.reflection.title',
    refraction: 'tools.refraction.title',
    tir: 'tools.tir.title',
    convexLens: 'tools.convexLens.title',
    concaveLens: 'tools.concaveLens.title',
    em: 'tools.em.title',
  };
  return t(map[id] || id);
}

function langKey() {
  return getLang() === 'zh-Hant' ? 'zhHant' : 'en';
}

async function noteExists(name) {
  const url = `${import.meta.env.BASE_URL}notes/${name}`;
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function mountApp(root) {
  let section = 'topics';
  let toolId = 'reflection';
  let flashIndex = 0;
  let flashDeck = 'all';
  let flashShowBack = false;
  let wsItems = [];
  let wsAnswers = false;

  const el = {};
  const toolStageMount = { node: null };

  function render() {
    root.innerHTML = `
      <header class="site-header">
        <div class="site-header__brand">
          <div class="brand-logo-wrap" aria-hidden="true">
            <img class="brand-logo-img" src="${import.meta.env.BASE_URL}images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
          </div>
          <div class="brand-text-block">
            <h1 class="site-title">${t('app.title')}</h1>
            <p class="site-subtitle">${t('app.subtitle')}</p>
          </div>
        </div>
        <div class="site-header__actions">
          <div class="lang-toggle" data-lang></div>
        </div>
      </header>
      <nav class="main-nav" data-nav></nav>
      <main data-main></main>
      <footer class="site-footer no-print">${t('footer.conventions')}</footer>
    `;

    el.lang = root.querySelector('[data-lang]');
    el.nav = root.querySelector('[data-nav]');
    el.main = root.querySelector('[data-main]');

    el.lang.innerHTML = `
      <button type="button" data-set-lang="en" class="${getLang() === 'en' ? 'active' : ''}">${t('lang.en')}</button>
      <button type="button" data-set-lang="zh-Hant" class="${getLang() === 'zh-Hant' ? 'active' : ''}">${t('lang.zhHant')}</button>
    `;
    el.lang.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLang(btn.getAttribute('data-set-lang'));
        render();
      });
    });

    el.nav.innerHTML = SECTIONS.map((id) => {
      const labels = {
        topics: 'nav.topics',
        notes: 'nav.notes',
        tools: 'nav.tools',
        worksheets: 'nav.worksheets',
        flashcards: 'nav.flashcards',
        summary: 'nav.summary',
      };
      const active = section === id ? 'active' : '';
      return `<button type="button" class="${active}" data-sec="${id}">${t(labels[id])}</button>`;
    }).join('');
    el.nav.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        section = btn.getAttribute('data-sec');
        render();
      });
    });

    if (section === 'topics') el.main.innerHTML = renderTopics();
    else if (section === 'notes') el.main.innerHTML = renderNotesShell();
    else if (section === 'tools') el.main.innerHTML = renderToolsShell();
    else if (section === 'worksheets') el.main.innerHTML = renderWorksheets();
    else if (section === 'flashcards') el.main.innerHTML = renderFlashcardsShell();
    else if (section === 'summary') el.main.innerHTML = renderSummary();

    if (section === 'notes') void hydrateNotes();
    if (section === 'tools') hydrateTools();
    if (section === 'worksheets') hydrateWorksheets();
    if (section === 'flashcards') hydrateFlashcards();
  }

  function renderTopics() {
    const cards = [
      ['reflection', 'topic.reflection'],
      ['refraction', 'topic.refraction'],
      ['tir', 'topic.tir'],
      ['convex', 'topic.convex'],
      ['concave', 'topic.concave'],
      ['em', 'topic.em'],
    ];
    return `
      <section class="panel panel--topic-hub">
        <h2>${t('topics.title')}</h2>
        <p class="lead">${t('topics.intro')}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${cards
            .map(([id, key]) => {
              const tid =
                id === 'convex' ? 'convexLens' : id === 'concave' ? 'concaveLens' : id === 'em' ? 'em' : id;
              return `
            <div class="card">
              <h3>${t(key)}</h3>
              <p>${id === 'convex' || id === 'concave' ? t('tools.lens.note') : ''}</p>
              <button class="btn primary" type="button" data-go-tool="${tid}">${t('topic.openTool')}</button>
            </div>`;
            })
            .join('')}
        </div>
      </section>`;
  }

  function onMainClick(ev) {
    const b = ev.target.closest('[data-go-tool]');
    if (!b) return;
    section = 'tools';
    toolId = b.getAttribute('data-go-tool');
    render();
  }

  function renderNotesShell() {
    const rows = [
      { key: 'reflection', fileEn: 'reflection-en.pdf', fileZh: 'reflection-zhHant.pdf' },
      { key: 'refraction', fileEn: 'refraction-en.pdf', fileZh: 'refraction-zhHant.pdf' },
      { key: 'tir', fileEn: 'tir-en.pdf', fileZh: 'tir-zhHant.pdf' },
      { key: 'convexLens', fileEn: 'convex-lens-en.pdf', fileZh: 'convex-lens-zhHant.pdf' },
      { key: 'concaveLens', fileEn: 'concave-lens-en.pdf', fileZh: 'concave-lens-zhHant.pdf' },
      { key: 'em', fileEn: 'emwaves-en.pdf', fileZh: 'emwaves-zhHant.pdf' },
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
      { key: 'reflection', fileEn: 'reflection-en.pdf', fileZh: 'reflection-zhHant.pdf' },
      { key: 'refraction', fileEn: 'refraction-en.pdf', fileZh: 'refraction-zhHant.pdf' },
      { key: 'tir', fileEn: 'tir-en.pdf', fileZh: 'tir-zhHant.pdf' },
      { key: 'convexLens', fileEn: 'convex-lens-en.pdf', fileZh: 'convex-lens-zhHant.pdf' },
      { key: 'concaveLens', fileEn: 'concave-lens-en.pdf', fileZh: 'concave-lens-zhHant.pdf' },
      { key: 'em', fileEn: 'emwaves-en.pdf', fileZh: 'emwaves-zhHant.pdf' },
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
        body.innerHTML = `<p class="lead">${t('notes.missing')}</p>
          <p><a class="btn" href="${import.meta.env.BASE_URL}notes/README.txt" target="_blank" rel="noopener">README</a></p>`;
      }
    }
  }

  function renderToolsShell() {
    return `
      <section class="panel">
        <h2>${t('tools.title')}</h2>
        <p class="lead">${t('tools.pick')}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${TOOL_ORDER.map((id) => `<button type="button" data-tool="${id}" class="${toolId === id ? 'active' : ''}">${toolLabel(id)}</button>`).join('')}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`;
  }

  function hydrateTools() {
    const list = root.querySelector('[data-tool-list]');
    const stage = root.querySelector('[data-tool-stage]');
    if (!list || !stage) return;
    list.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        toolId = btn.getAttribute('data-tool');
        list.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b.getAttribute('data-tool') === toolId));
        mountTool(stage);
      });
    });
    mountTool(stage);
  }

  function mountTool(stage) {
    stage.innerHTML = '';
    const factory = TOOL_FACTORIES[toolId];
    if (!factory) return;
    const node = factory(t);
    stage.appendChild(node);
  }

  function renderWorksheets() {
    const topics = [
      ['reflection', 'topic.reflection'],
      ['refraction', 'topic.refraction'],
      ['tir', 'topic.tir'],
      ['convex', 'topic.convex'],
      ['concave', 'topic.concave'],
      ['em', 'topic.em'],
    ];
    return `
      <section class="panel">
        <h2>${t('worksheets.title')}</h2>
        <p class="lead">${t('worksheets.intro')}</p>
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
            .map(([id, key]) => `<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${id}" checked />
            <span>${t(key)}</span>
          </label>`)
            .join('')}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${t('worksheets.generate')}</button>
          <button class="btn" type="button" data-ws-print-p>${t('worksheets.printPractice')}</button>
          <button class="btn" type="button" data-ws-print-a>${t('worksheets.printAnswers')}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${t('worksheets.empty')}</p></div>
      </section>`;
  }

  function hydrateWorksheets() {
    const gen = root.querySelector('[data-ws-gen]');
    const printP = root.querySelector('[data-ws-print-p]');
    const printA = root.querySelector('[data-ws-print-a]');
    const out = root.querySelector('[data-ws-out]');
    if (!gen || !out) return;

    gen.addEventListener('click', () => {
      const count = Number(root.querySelector('[data-ws-count]').value);
      const picked = [...root.querySelectorAll('[data-ws-topic]')]
        .filter((c) => c.checked)
        .map((c) => c.getAttribute('data-ws-topic'));
      const pool = questions.filter((q) => {
        const topic = q.topic;
        if (picked.includes(topic)) return true;
        if (topic === 'convex' && (picked.includes('convex') || picked.includes('concave'))) return true;
        return false;
      });
      const deck = shuffle(pool).slice(0, Math.min(count, pool.length || 1));
      wsItems = deck.length ? deck : shuffle(questions).slice(0, Math.min(count, questions.length));
      wsAnswers = false;
      paintWs(out);
    });

    printP.addEventListener('click', () => {
      wsAnswers = false;
      paintWs(out);
      window.print();
    });
    printA.addEventListener('click', () => {
      wsAnswers = true;
      paintWs(out);
      window.print();
    });
  }

  function paintWs(out) {
    const lk = langKey();
    if (!wsItems.length) {
      out.innerHTML = `<p class="lead">${t('worksheets.empty')}</p>`;
      return;
    }
    out.innerHTML = wsItems
      .map((q, i) => {
        const pack = q[lk] || q.en;
        const letters = ['A', 'B', 'C', 'D'];
        const choices = pack.choices.map((c, j) => `<li><strong>${letters[j]}.</strong> ${c}</li>`).join('');
        const ans = wsAnswers ? `<p><em>${pack.exp}</em></p><p><strong>Answer:</strong> ${letters[pack.a]}</p>` : '';
        return `<div class="q"><h4>Q${i + 1}</h4><p>${pack.q}</p><ol style="margin:0;padding-left:18px">${choices}</ol>${ans}</div>`;
      })
      .join('');
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
            <option value="reflection">${t('topic.reflection')}</option>
            <option value="refraction">${t('topic.refraction')}</option>
            <option value="tir">${t('topic.tir')}</option>
            <option value="convex">${t('topic.convex')}</option>
            <option value="concave">${t('topic.concave')}</option>
            <option value="em">${t('topic.em')}</option>
          </select>
        </div>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-flip-card>
            <div class="label">${t('flashcards.question')}</div>
            <div class="body" data-flash-front></div>
          </div>
          <div class="flash-toolbar no-print">
            <button class="btn" type="button" data-flash-prev>${t('flashcards.prev')}</button>
            <button class="btn primary" type="button" data-flash-flip>${t('flashcards.flip')}</button>
            <button class="btn" type="button" data-flash-next>${t('flashcards.next')}</button>
            <button class="btn" type="button" data-flash-shuf>${t('flashcards.shuffle')}</button>
          </div>
        </div>
      </section>`;
  }

  function flashDeckList() {
    let list = flashcards.slice();
    if (flashDeck === 'all') return list;
    if (flashDeck === 'convex' || flashDeck === 'concave') {
      list = list.filter((c) => c.topic === 'convex' || c.topic === 'concave');
    } else {
      list = list.filter((c) => c.topic === flashDeck);
    }
    return list.length ? list : flashcards;
  }

  function paintFlash() {
    const list = flashDeckList();
    flashIndex = Math.max(0, Math.min(flashIndex, list.length - 1));
    const card = list[flashIndex];
    const lk = langKey();
    const pack = card[lk] || card.en;
    const front = root.querySelector('[data-flash-front]');
    const surface = root.querySelector('[data-flip-card]');
    if (!front || !surface) return;
    if (!flashShowBack) {
      surface.querySelector('.label').textContent = t('flashcards.question');
      front.textContent = pack.q;
    } else {
      surface.querySelector('.label').textContent = t('flashcards.answer');
      front.textContent = pack.a;
    }
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
      { file: 'reflection.svg', key: 'summary.item.reflection' },
      { file: 'refraction.svg', key: 'summary.item.refraction' },
      { file: 'lenses.svg', key: 'summary.item.lenses' },
      { file: 'emwaves.svg', key: 'summary.item.em' },
    ];
    return `
      <section class="panel">
        <h2>${t('summary.title')}</h2>
        <p class="lead">${t('summary.intro')}</p>
        <div class="grid cols-2">
          ${items
            .map((it) => {
              const src = `${import.meta.env.BASE_URL}summary/${it.file}`;
              return `
            <div class="card">
              <h3>${t(it.key)}</h3>
              <img class="summary-thumb" alt="" src="${src}" />
              <p style="margin-top:10px"><a download href="${src}">${t('summary.download')}</a></p>
            </div>`;
            })
            .join('')}
        </div>
      </section>`;
  }

  window.addEventListener('s3phy:lang', () => render());

  root.addEventListener('click', onMainClick);

  render();
}
