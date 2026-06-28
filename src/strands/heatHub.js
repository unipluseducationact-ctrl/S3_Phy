import { t, getLang } from '../i18n.js';
import questions from '../data/questions.json';
import { createThermometerLab } from '../tools/thermometerLab.js';
import { createSpecificHeatLab } from '../tools/specificHeatLab.js';
import { createThermalMixingLab } from '../tools/thermalMixingLab.js';
import { createChangeOfStateLab } from '../tools/changeOfStateLab.js';
import { createHeatTransferLab } from '../tools/heatTransferLab.js';
import { mountHubShell } from '../hubShell.js';
import { renderToolsShell, hydrateToolsShell } from '../tools/toolsShell.js';
import { renderWorksheets, hydrateWorksheets } from '../worksheets/mcqWorksheet.js';
import { mountFlashcardStudy } from '../flashcards/flashcardStudy.js';
import { buildHeatDeck } from '../flashcards/flashcardDeck.js';

const HEAT_TOPICS = [
  {
    id: 'thermometer',
    titleKey: 'topic.thermometer',
    fileEn: 'thermometer-en.pdf',
    fileZh: 'thermometer-zhHant.pdf',
    tool: 'liquid',
  },
  {
    id: 'heatInternalEnergy',
    titleKey: 'topic.heatInternalEnergy',
    fileEn: 'heat-internal-energy-en.pdf',
    fileZh: 'heat-internal-energy-zhHant.pdf',
    tool: 'specificHeat',
  },
  {
    id: 'changeOfState',
    titleKey: 'topic.changeOfState',
    fileEn: 'change-of-state-en.pdf',
    fileZh: 'change-of-state-zhHant.pdf',
    tool: 'changeOfState',
  },
  {
    id: 'heatTransfer',
    titleKey: 'topic.heatTransfer',
    fileEn: 'heat-transfer-en.pdf',
    fileZh: 'heat-transfer-zhHant.pdf',
    tool: 'heatTransfer',
  },
];

const THERMOMETRY_SUBTOPICS = [
  'liquidThermometer',
  'faultyThermometer',
  'resistanceThermometer',
  'thermistor',
];

const HEAT_WORKSHEET_TOPICS = [
  ['thermometer', 'topic.thermometer'],
  ['heatInternalEnergy', 'topic.heatInternalEnergy'],
  ['changeOfState', 'topic.changeOfState'],
  ['heatTransfer', 'topic.heatTransfer'],
];

const HEAT_QUESTION_TOPICS = [
  ...THERMOMETRY_SUBTOPICS,
  'heatInternalEnergy',
  'changeOfState',
  'heatTransfer',
];

const TOOL_ORDER = [
  'liquid', 'resistance', 'thermistor',
  'specificHeat', 'thermalMixing', 'changeOfState', 'heatTransfer'
];

const TOOL_FACTORIES = {
  liquid: (tr) => createThermometerLab(tr, { type: 'liquid' }),
  resistance: (tr) => createThermometerLab(tr, { type: 'resistance' }),
  thermistor: (tr) => createThermometerLab(tr, { type: 'thermistor' }),
  specificHeat: (tr) => createSpecificHeatLab(tr),
  thermalMixing: (tr) => createThermalMixingLab(tr),
  changeOfState: (tr) => createChangeOfStateLab(tr),
  heatTransfer: (tr) => createHeatTransferLab(tr),
};

function toolLabel(id) {
  const map = {
    liquid: 'tools.thermometerLab.liquid.title',
    resistance: 'tools.thermometerLab.resistance.title',
    thermistor: 'tools.thermometerLab.thermistor.title',
    specificHeat: 'tools.specificHeat.title',
    thermalMixing: 'tools.thermalMixing.title',
    changeOfState: 'tools.changeOfState.title',
    heatTransfer: 'tools.heatTransfer.title',
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

export function mountHeatHub(root) {
  let section = 'topics';
  let toolId = 'liquid';

  let shell = null;
  let el = { main: null };
  let activeLabInstance = null;
  let destroyFlashcards = null;

  const HEAT_DECK_OPTIONS = [
    { value: 'all', labelKey: 'flashcards.all' },
    { value: 'thermometry', labelKey: 'flashcards.deck.thermometry' },
    { value: 'heatInternalEnergy', labelKey: 'flashcards.deck.heatInternalEnergy' },
    { value: 'changeOfState', labelKey: 'flashcards.deck.changeOfState' },
    { value: 'heatTransfer', labelKey: 'flashcards.deck.heatTransfer' },
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
    else if (section === 'worksheets') {
      el.main.innerHTML = renderWorksheets(t, {
        topics: HEAT_WORKSHEET_TOPICS,
        paperTitleKey: 'worksheets.paperTitleHeat',
      });
    } else if (section === 'flashcards') {
      destroyFlashcards = mountFlashcardStudy(el.main, {
        deckOptions: HEAT_DECK_OPTIONS.map((o) => ({
          value: o.value,
          label: t(o.labelKey),
        })),
        buildDeck: (key) => buildHeatDeck(key, getLang()),
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
          if (activeLabInstance?._thermometerLabCleanup) {
            activeLabInstance._thermometerLabCleanup();
          }
          const factory = TOOL_FACTORIES[toolId];
          if (!factory) return;
          activeLabInstance = factory(t);
          stage.appendChild(activeLabInstance);
        },
      });
    }
    if (section === 'worksheets') {
      const heatQuestions = questions.filter((q) =>
        HEAT_QUESTION_TOPICS.includes(q.topic),
      );
      hydrateWorksheets(root, heatQuestions, t, langKey, {
        topicFilter: (q, picked) => {
          if (picked.includes('thermometer') && THERMOMETRY_SUBTOPICS.includes(q.topic)) {
            return true;
          }
          if (picked.includes('heatInternalEnergy') && q.topic === 'heatInternalEnergy') {
            return true;
          }
          if (picked.includes('changeOfState') && q.topic === 'changeOfState') {
            return true;
          }
          if (picked.includes('heatTransfer') && q.topic === 'heatTransfer') {
            return true;
          }
          return false;
        },
      });
    }
    if (section === 'summary') void hydrateSummary();
  }

  function render() {
    shell?.destroy();
    shell = mountHubShell(root, {
      subtitleKey: 'strand.heat.subtitle',
      activeSection: section,
      onSection: (id) => {
        if (section === 'tools' && id !== 'tools') {
          if (activeLabInstance?._thermometerLabCleanup) {
            activeLabInstance._thermometerLabCleanup();
            activeLabInstance = null;
          }
        }
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
    return `
      <section class="panel panel--topic-hub">
        <h2>${t('topics.title')}</h2>
        <p class="lead">${t('topics.intro')}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${HEAT_TOPICS.map((topic) => {
            const btn = topic.tool
              ? `<button class="btn primary" type="button" data-go-tool="${topic.tool}">${t('topic.openTool')}</button>`
              : `<button class="btn primary" type="button" data-go-section="notes">${t('topic.viewNotes')}</button>`;
            return `
            <div class="card">
              <h3>${t(topic.titleKey)}</h3>
              ${btn}
            </div>`;
          }).join('')}
        </div>
      </section>`;
  }

  function onMainClick(ev) {
    const toolBtn = ev.target.closest('[data-go-tool]');
    if (toolBtn) {
      const targetTool = toolBtn.getAttribute('data-go-tool');
      if (TOOL_ORDER.includes(targetTool)) {
        toolId = targetTool;
      } else {
        toolId = 'liquid';
      }
      section = 'tools';
      shell.updateSection(section);
      renderMain();
      return;
    }
    const notesBtn = ev.target.closest('[data-go-section]');
    if (notesBtn?.getAttribute('data-go-section') === 'notes') {
      section = 'notes';
      shell.updateSection(section);
      renderMain();
    }
  }

  function renderNotesShell() {
    return `
      <section class="panel">
        <h2>${t('notes.title')}</h2>
        <p class="lead">${t('notes.intro')}</p>
        <p class="lead">${t('notes.embedHint')}</p>
        <div class="grid cols-2" data-notes-grid>
          ${HEAT_TOPICS.map(
            (r) => `
            <div class="card" data-note-card="${r.id}">
              <h3>${t(`notes.card.${r.id}`)}</h3>
              <div data-note-body></div>
            </div>`,
          ).join('')}
        </div>
      </section>`;
  }

  async function hydrateNotes() {
    const lk = langKey();
    for (const r of HEAT_TOPICS) {
      const card = root.querySelector(`[data-note-card="${r.id}"]`);
      if (!card) continue;
      const body = card.querySelector('[data-note-body]');
      const file = lk === 'zhHant' ? r.fileZh : r.fileEn;
      const ok = await noteExists(file);
      const url = `${import.meta.env.BASE_URL}notes/${file}`;
      if (ok) {
        body.innerHTML = `
          <iframe class="notes-grid" title="${t(`notes.card.${r.id}`)}" src="${url}"></iframe>
          <p style="margin-top:8px"><a href="${url}" target="_blank" rel="noopener">${t('notes.openPdf')}</a></p>`;
      } else {
        body.innerHTML = `<p class="lead">${t('notes.missing')}</p>`;
      }
    }
  }

  function renderSummary() {
    return `
      <section class="panel">
        <h2>${t('summary.title')}</h2>
        <p class="lead">${t('summary.intro')}</p>
        <p class="lead">${t('notes.embedHint')}</p>
        <div class="grid cols-2" data-summary-grid>
          ${HEAT_TOPICS.map(
            (it) => `
            <div class="card" data-summary-card="${it.id}">
              <h3>${t(`summary.item.${it.id}`)}</h3>
              <div data-summary-body></div>
            </div>`,
          ).join('')}
        </div>
      </section>`;
  }

  const SUMMARY_POSTER_BASE = {
    thermometer: 'thermometer',
    heatInternalEnergy: 'heat-internal-energy',
    changeOfState: 'change-of-state',
    heatTransfer: 'heat-transfer',
  };

  async function hydrateSummary() {
    const lk = langKey();
    for (const r of HEAT_TOPICS) {
      const card = root.querySelector(`[data-summary-card="${r.id}"]`);
      if (!card) continue;
      const body = card.querySelector('[data-summary-body]');

      const posterBase = SUMMARY_POSTER_BASE[r.id];
      if (posterBase) {
        const file = lk === 'zhHant'
          ? `${posterBase}-zhHant.webp`
          : `${posterBase}-en.webp`;
        const ok = await assetExists('summary', file);
        const url = `${import.meta.env.BASE_URL}summary/${file}`;
        if (ok) {
          body.innerHTML = `
          <img class="summary-thumb" src="${url}" alt="${t(`summary.item.${r.id}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${url}" target="_blank" rel="noopener">${t('summary.viewImage')}</a></p>`;
        } else {
          body.innerHTML = `<p class="lead">${t('summary.missing')}</p>`;
        }
        continue;
      }

      const file = lk === 'zhHant' ? r.fileZh : r.fileEn;
      const ok = await noteExists(file);
      const url = `${import.meta.env.BASE_URL}notes/${file}`;
      if (ok) {
        body.innerHTML = `
          <iframe class="notes-grid" title="${t(`summary.item.${r.id}`)}" src="${url}"></iframe>
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
    if (activeLabInstance?._thermometerLabCleanup) {
      activeLabInstance._thermometerLabCleanup();
    }
    shell?.destroy();
  };
}
