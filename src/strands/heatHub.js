import { t, getLang } from '../i18n.js';
import questions from '../data/questions.json';
import flashcards from '../data/flashcards.json';
import { createThermometerLab } from '../tools/thermometerLab.js';
import { createSpecificHeatLab } from '../tools/specificHeatLab.js';
import { createThermalMixingLab } from '../tools/thermalMixingLab.js';
import { createChangeOfStateLab } from '../tools/changeOfStateLab.js';
import { createHeatTransferLab } from '../tools/heatTransferLab.js';
import { mountHubShell } from '../hubShell.js';
import { renderWorksheets, hydrateWorksheets } from '../worksheets/mcqWorksheet.js';

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
  let flashIndex = 0;
  let flashDeck = 'all';
  let flashShowBack = false;

  let shell = null;
  let el = { main: null };
  let activeLabInstance = null;

  function renderMain() {
    if (!el.main) return;

    if (section === 'topics') el.main.innerHTML = renderTopics();
    else if (section === 'notes') el.main.innerHTML = renderNotesShell();
    else if (section === 'tools') el.main.innerHTML = renderToolsShell();
    else if (section === 'worksheets') {
      el.main.innerHTML = renderWorksheets(t, {
        topics: HEAT_WORKSHEET_TOPICS,
        paperTitleKey: 'worksheets.paperTitleHeat',
      });
    } else if (section === 'flashcards') el.main.innerHTML = renderFlashcardsShell();
    else if (section === 'summary') el.main.innerHTML = renderSummary();

    if (section === 'notes') void hydrateNotes();
    if (section === 'tools') hydrateTools();
    if (section === 'worksheets') {
      const heatQuestions = questions.filter((q) =>
        THERMOMETRY_SUBTOPICS.includes(q.topic),
      );
      hydrateWorksheets(root, heatQuestions, t, langKey, {
        topicFilter: (q, picked) => {
          if (picked.includes('thermometer')) {
            return THERMOMETRY_SUBTOPICS.includes(q.topic);
          }
          return picked.includes(q.topic);
        },
      });
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
    if (activeLabInstance?._thermometerLabCleanup) {
      activeLabInstance._thermometerLabCleanup();
    }
    const factory = TOOL_FACTORIES[toolId];
    if (!factory) return;
    activeLabInstance = factory(t);
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
            <option value="thermometry">${t('flashcards.deck.thermometry')}</option>
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
    return flashcards.filter((c) => THERMOMETRY_SUBTOPICS.includes(c.topic));
  }

  function flashDeckList() {
    const list = heatFlashcards();
    if (flashDeck === 'all' || flashDeck === 'thermometry') return list;
    return list.filter((c) => c.topic === flashDeck);
  }

  function paintFlash() {
    const list = flashDeckList();
    const progress = root.querySelector('[data-flash-progress]');
    if (!list.length) {
      flashIndex = 0;
      const front = root.querySelector('[data-flash-front]');
      if (front) front.textContent = '';
      if (progress) {
        progress.hidden = true;
        progress.textContent = '';
      }
      return;
    }

    flashIndex = Math.max(0, Math.min(flashIndex, list.length - 1));
    const card = list[flashIndex];
    const frontEl = root.querySelector('[data-flash-front]');
    const labelEl = root.querySelector('[data-flash-label]');
    if (!frontEl) return;

    if (progress) {
      progress.hidden = false;
      progress.textContent = t('flashcards.progress')
        .replace('{current}', String(flashIndex + 1))
        .replace('{total}', String(list.length));
    }

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

  async function hydrateSummary() {
    const lk = langKey();
    for (const r of HEAT_TOPICS) {
      const card = root.querySelector(`[data-summary-card="${r.id}"]`);
      if (!card) continue;
      const body = card.querySelector('[data-summary-body]');
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
    if (activeLabInstance?._thermometerLabCleanup) {
      activeLabInstance._thermometerLabCleanup();
    }
    shell?.destroy();
  };
}
