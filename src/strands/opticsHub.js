import { t, getLang } from '../i18n.js';
import { langKey, hydrateNoteCards, hydrateSummaryCards } from './hubHelpers.js';
import { mountHubShell } from '../hubShell.js';
import { renderToolsShell, hydrateToolsShell } from '../tools/toolsShell.js';
import { createOpticsLightLensWorksheet } from '../worksheets/opticsLightLensWorksheet.js';
import { mountFlashcardStudy } from '../flashcards/flashcardStudy.js';
import { buildOpticsDeck } from '../flashcards/flashcardDeck.js';

const TOOL_ORDER = ['rotatingMirror', 'planeMirrorLab', 'refractionTir', 'lens', 'rgbMixer', 'em'];
const SUMMARY_ASSET_VERSION = '20260627-em-v2';

const TOOL_LOADERS = {
  rotatingMirror: () => import('../tools/rotatingMirrorLab.js').then((m) => m.createRotatingMirrorLab),
  planeMirrorLab: () => import('../tools/planeMirrorLab.js').then((m) => m.createPlaneMirrorLab),
  refractionTir: () => import('../tools/tirEscapeLab.js').then((m) => m.createTirEscapeLab),
  lens: () => import('../tools/lensLab.js').then((m) => m.createLensLab),
  rgbMixer: () => import('../tools/rgbColorMixerLab.js').then((m) => m.createRgbColorMixerLab),
  em: () => import('../tools/emLab.js').then((m) => m.createEmLab),
};

function toolLabel(id) {
  const map = {
    rotatingMirror: 'tools.rotatingMirror.title',
    planeMirrorLab: 'tools.planeMirror.title',
    refractionTir: 'tools.refractionTir.title',
    lens: 'tools.lens.title',
    rgbMixer: 'tools.rgbMixer.title',
    em: 'tools.em.title',
  };
  return t(map[id] || id);
}

export function mountOpticsHub(root) {
  let section = 'topics';
  let toolId = 'rotatingMirror';
  let lensDefaultKind = 'convex';

  let shell = null;
  let el = { main: null };
  let destroyFlashcards = null;
  let destroyWorksheet = null;

  const OPTICS_DECK_OPTIONS = [
    { value: 'all', labelKey: 'flashcards.all' },
    { value: 'reflection', labelKey: 'topic.reflection' },
    { value: 'refractionTir', labelKey: 'flashcards.deck.refractionTir' },
  ];

  async function mountActiveTool(stage) {
    stage.innerHTML = '';
    const loader = TOOL_LOADERS[toolId];
    if (!loader) return;
    const factory = await loader();
    const node = toolId === 'lens' ? factory(t, { defaultKind: lensDefaultKind }) : factory(t);
    stage.appendChild(node);
  }

  function renderMain() {
    if (!el.main) return;

    destroyFlashcards?.();
    destroyFlashcards = null;
    destroyWorksheet?.();
    destroyWorksheet = null;

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
    else if (section === 'worksheets') {
      el.main.innerHTML = '<section class="panel panel--worksheets-embed"></section>';
      const panel = el.main.querySelector('.panel--worksheets-embed');
      const node = createOpticsLightLensWorksheet(t);
      panel.appendChild(node);
      destroyWorksheet = node._opticsLightLensWorksheetCleanup || null;
    }
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
          void mountActiveTool(stage);
        },
      });
    }
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
      ['planeMirrorLab', 'topic.reflection'],
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
    await hydrateNoteCards(root, rows);
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
    await hydrateSummaryCards(root, rows, { version: SUMMARY_ASSET_VERSION });
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
    destroyWorksheet?.();
    shell?.destroy();
  };
}
