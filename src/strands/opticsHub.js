import { t, getLang } from '../i18n.js';
import questions from '../data/questions.json';
import { createRotatingMirrorLab } from '../tools/rotatingMirrorLab.js';
import { createTirEscapeLab } from '../tools/tirEscapeLab.js';
import { createLensLab } from '../tools/lensLab.js';
import { createEmLab } from '../tools/emLab.js';
import { createRgbColorMixerLab } from '../tools/rgbColorMixerLab.js';
import { mountHubShell } from '../hubShell.js';
import { renderToolsShell, hydrateToolsShell } from '../tools/toolsShell.js';
import { renderWorksheets, hydrateWorksheets } from '../worksheets/mcqWorksheet.js';
import { mountFlashcardStudy } from '../flashcards/flashcardStudy.js';
import { buildOpticsDeck } from '../flashcards/flashcardDeck.js';

const TOOL_ORDER = ['rotatingMirror', 'refractionTir', 'lens', 'rgbMixer', 'em'];
const SUMMARY_ASSET_VERSION = '20260627-em';

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

  let shell = null;
  let el = { main: null };
  let destroyFlashcards = null;

  const OPTICS_DECK_OPTIONS = [
    { value: 'all', labelKey: 'flashcards.all' },
    { value: 'reflection', labelKey: 'topic.reflection' },
    { value: 'refractionTir', labelKey: 'flashcards.deck.refractionTir' },
    { value: 'convex', labelKey: 'topic.convex' },
    { value: 'concave', labelKey: 'topic.concave' },
    { value: 'em', labelKey: 'topic.em' },
  ];

  function renderMain() {
    if (!el.main) return;

    destroyFlashcards?.();
    destroyFlashcards = null;

    if (section === 'topics') el.main.innerHTML = renderTopics();
    else if (section === 'notes') el.main.innerHTML = renderNotesShell();
    else if (section === 'tools') {
      el.main.innerHTML = renderToolsShell({
        toolOrder: TOOL_ORDER,
        toolId,
        getLabel: toolLabel,
        t,
      });
    }
    else if (section === 'worksheets') el.main.innerHTML = renderWorksheets(t);
    else if (section === 'flashcards') {
      destroyFlashcards = mountFlashcardStudy(el.main, {
        deckOptions: OPTICS_DECK_OPTIONS.map((o) => ({
          value: o.value,
          label: t(o.labelKey),
        })),
        buildDeck: (key) => buildOpticsDeck(key, getLang()),
      });
    } else if (section === 'summary') el.main.innerHTML = renderSummary();

    if (section === 'notes') void hydrateNotes();
    if (section === 'tools') {
      hydrateToolsShell(root, {
        getLabel: toolLabel,
        t,
        getActiveToolId: () => toolId,
        onSelectTool: (id) => {
          toolId = id;
        },
        mountTool: (stage) => {
          stage.innerHTML = '';
          const factory = TOOL_FACTORIES[toolId];
          if (!factory) return;
          const node = toolId === 'lens' ? factory(t, lensDefaultKind) : factory(t);
          stage.appendChild(node);
        },
      });
    }
    if (section === 'worksheets') hydrateWorksheets(root, questions, t, langKey);
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

  function renderSummary() {
    const items = [
      {
        key: 'reflection',
        type: 'image',
        fileEn: 'reflection-en.webp',
        fileZh: 'reflection-zhHant.webp',
      },
      {
        key: 'refraction',
        type: 'image',
        fileEn: 'refraction-en.webp',
        fileZh: 'refraction-zhHant.webp',
      },
      { key: 'tir', type: 'image', fileEn: 'tir-en.webp', fileZh: 'tir-zhHant.webp' },
      { key: 'convex', type: 'image', fileEn: 'convex-en.webp', fileZh: 'convex-zhHant.webp' },
      { key: 'concave', type: 'image', fileEn: 'concave-en.webp', fileZh: 'concave-zhHant.webp' },
      { key: 'em', type: 'image', fileEn: 'em-en.webp', fileZh: 'em-zhHant.webp' },
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
      {
        key: 'reflection',
        type: 'image',
        fileEn: 'reflection-en.webp',
        fileZh: 'reflection-zhHant.webp',
      },
      {
        key: 'refraction',
        type: 'image',
        fileEn: 'refraction-en.webp',
        fileZh: 'refraction-zhHant.webp',
      },
      { key: 'tir', type: 'image', fileEn: 'tir-en.webp', fileZh: 'tir-zhHant.webp' },
      { key: 'convex', type: 'image', fileEn: 'convex-en.webp', fileZh: 'convex-zhHant.webp' },
      { key: 'concave', type: 'image', fileEn: 'concave-en.webp', fileZh: 'concave-zhHant.webp' },
      { key: 'em', type: 'image', fileEn: 'em-en.webp', fileZh: 'em-zhHant.webp' },
    ];
    const lk = langKey();
    for (const r of rows) {
      const card = root.querySelector(`[data-summary-card="${r.key}"]`);
      if (!card) continue;
      const body = card.querySelector('[data-summary-body]');

      if (r.type === 'image') {
        const file = r.fileEn && r.fileZh ? (lk === 'zhHant' ? r.fileZh : r.fileEn) : r.file;
        const ok = await assetExists('summary', file);
        const baseUrl = `${import.meta.env.BASE_URL}summary/${file}`;
        const url = `${baseUrl}?v=${SUMMARY_ASSET_VERSION}`;
        if (ok) {
          body.innerHTML = `
          <img class="summary-thumb" src="${url}" alt="${t(`summary.item.${r.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${url}" target="_blank" rel="noopener">${t('summary.viewImage')}</a></p>`;
        } else {
          body.innerHTML = `<p class="lead">${t('summary.missing')}</p>`;
        }
        continue;
      }

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
    destroyFlashcards?.();
    shell?.destroy();
  };
}
