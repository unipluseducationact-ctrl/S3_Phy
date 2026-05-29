import { t, getLang } from '../i18n.js';
import questions from '../data/questions.json';
import flashcards from '../data/flashcards.json';
import { createRotatingMirrorLab } from '../tools/rotatingMirrorLab.js';
import { createTirEscapeLab } from '../tools/tirEscapeLab.js';
import { createLensLab } from '../tools/lensLab.js';
import { createEmLab } from '../tools/emLab.js';
import { createRgbColorMixerLab } from '../tools/rgbColorMixerLab.js';
import { mountHubShell } from '../hubShell.js';
import { renderWorksheets, hydrateWorksheets } from '../worksheets/mcqWorksheet.js';

const TOOL_ORDER = ['rotatingMirror', 'refractionTir', 'lens', 'rgbMixer', 'em'];

const TOOL_FACTORIES = {
  rotatingMirror: (tr) => createRotatingMirrorLab(tr),
  refractionTir: (tr) => createTirEscapeLab(tr),
  lens: (tr, kind) => createLensLab(tr, { defaultKind: kind }),
  rgbMixer: (tr) => createRgbColorMixerLab(tr),
  em: (tr) => createEmLab(tr),
};

function toolLabel(id) {
  const map = {
    rotatingMirror: 'tools.rotatingMirror.title',
    refractionTir: 'tools.refractionTir.title',
    lens: 'tools.lens.title',
    rgbMixer: 'tools.rgbMixer.title',
    em: 'tools.em.title',
  };
  return t(map[id] || id);
}

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

export function mountOpticsHub(root) {
  let section = 'topics';
  let toolId = 'rotatingMirror';
  let lensDefaultKind = 'convex';
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
    if (section === 'worksheets') hydrateWorksheets(root, questions, t, langKey);
    if (section === 'flashcards') hydrateFlashcards();
    if (section === 'summary') void hydrateSummary();
  }

  function render() {
    shell?.destroy();
    shell = mountHubShell(root, {
      subtitleKey: 'strand.optics.subtitle',
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
      ['rotatingMirror', 'topic.reflection'],
      ['refraction', 'topic.refractionSnell'],
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
                id === 'convex' || id === 'concave'
                  ? 'lens'
                  : id === 'refraction' || id === 'tir'
                    ? 'refractionTir'
                    : id === 'em'
                      ? 'em'
                      : id;
              const lensKind =
                id === 'convex' ? 'convex' : id === 'concave' ? 'concave' : '';
              return `
            <div class="card">
              <h3>${t(key)}</h3>
              <button class="btn primary" type="button" data-go-tool="${tid}"${lensKind ? ` data-lens-kind="${lensKind}"` : ''}>${t('topic.openTool')}</button>
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
    const lk = b.getAttribute('data-lens-kind');
    if (lk === 'convex' || lk === 'concave') lensDefaultKind = lk;
    shell.updateSection(section);
    renderMain();
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
      <section class="panel panel--tools">
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
    const node = toolId === 'lens' ? factory(t, lensDefaultKind) : factory(t);
    stage.appendChild(node);
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
            <option value="rotatingMirror">${t('topic.rotatingMirror')}</option>
            <option value="refractionTir">${t('flashcards.deck.refractionTir')}</option>
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
    } else if (flashDeck === 'refractionTir') {
      list = list.filter((c) => c.topic === 'refraction' || c.topic === 'tir');
    } else if (flashDeck === 'rotatingMirror') {
      list = list.filter((c) => c.topic === 'reflection');
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
      { key: 'reflection', fileEn: 'reflection-en.pdf', fileZh: 'reflection-zhHant.pdf' },
      { key: 'refraction', fileEn: 'refraction-en.pdf', fileZh: 'refraction-zhHant.pdf' },
      { key: 'tir', fileEn: 'tir-en.pdf', fileZh: 'tir-zhHant.pdf' },
      { key: 'convex', fileEn: 'convex-en.pdf', fileZh: 'convex-zhHant.pdf' },
      { key: 'concave', fileEn: 'concave-en.pdf', fileZh: 'concave-zhHant.pdf' },
      { key: 'em', fileEn: 'em-en.pdf', fileZh: 'em-zhHant.pdf' },
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
      { key: 'reflection', fileEn: 'reflection-en.pdf', fileZh: 'reflection-zhHant.pdf' },
      { key: 'refraction', fileEn: 'refraction-en.pdf', fileZh: 'refraction-zhHant.pdf' },
      { key: 'tir', fileEn: 'tir-en.pdf', fileZh: 'tir-zhHant.pdf' },
      { key: 'convex', fileEn: 'convex-en.pdf', fileZh: 'convex-zhHant.pdf' },
      { key: 'concave', fileEn: 'concave-en.pdf', fileZh: 'concave-zhHant.pdf' },
      { key: 'em', fileEn: 'em-en.pdf', fileZh: 'em-zhHant.pdf' },
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
    shell?.destroy();
  };
}
