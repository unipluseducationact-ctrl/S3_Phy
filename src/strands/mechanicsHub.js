import { t, getLang } from '../i18n.js';
import { hydrateNoteCards, hydrateSummaryCards } from './hubHelpers.js';
import { mountHubShell } from '../hubShell.js';

const MECHANICS_TOPICS = [
  {
    id: 'positionDisplacement',
    titleKey: 'topic.positionDisplacement',
    fileEn: 'position-displacement-en.pdf',
    fileZh: 'position-displacement-zhHant.pdf',
  },
  {
    id: 'speedVelocity',
    titleKey: 'topic.speedVelocity',
    fileEn: 'speed-velocity-en.pdf',
    fileZh: 'speed-velocity-zhHant.pdf',
  },
  {
    id: 'acceleration',
    titleKey: 'topic.acceleration',
    fileEn: 'acceleration-en.pdf',
    fileZh: 'acceleration-zhHant.pdf',
  },
  {
    id: 'forceMotion',
    titleKey: 'topic.forceMotion',
    fileEn: 'force-motion-en.pdf',
    fileZh: 'force-motion-zhHant.pdf',
  },
];

const SUMMARY_POSTER_BASE = {
  positionDisplacement: 'position-displacement',
  speedVelocity: 'speed-velocity',
  acceleration: 'acceleration',
  forceMotion: 'force-motion',
};

const MECHANICS_SUMMARY_ROWS = MECHANICS_TOPICS.map((r) => {
  const posterBase = SUMMARY_POSTER_BASE[r.id];
  return {
    key: r.id,
    type: 'image',
    fileEn: `${posterBase}-en.webp`,
    fileZh: `${posterBase}-zhHant.webp`,
  };
});

export function mountMechanicsHub(root) {
  let section = 'topics';

  let shell = null;
  let el = { main: null };

  function renderMain() {
    if (!el.main) return;

    if (section === 'topics') {
      el.main.innerHTML = renderTopics();
    } else if (section === 'notes') {
      el.main.innerHTML = renderNotesShell();
    } else if (section === 'tools') {
      el.main.innerHTML = `
        <section class="panel">
          <h2>${t('tools.title')}</h2>
          <p class="lead">${t('tools.comingSoon')}</p>
        </section>
      `;
    } else if (section === 'worksheets') {
      el.main.innerHTML = `
        <section class="panel">
          <h2>${t('worksheets.practiceTitle')}</h2>
          <p class="lead">${t('worksheets.comingSoon')}</p>
        </section>
      `;
    } else if (section === 'quiz') {
      el.main.innerHTML = `
        <section class="panel">
          <h2>${t('quiz.practiceTitle')}</h2>
          <p class="lead">${t('quiz.comingSoon')}</p>
        </section>
      `;
    } else if (section === 'flashcards') {
      el.main.innerHTML = `
        <section class="panel">
          <h2>${t('flashcards.title')}</h2>
          <p class="lead">${t('flashcards.comingSoon')}</p>
        </section>
      `;
    } else if (section === 'summary') {
      el.main.innerHTML = renderSummary();
    }

    if (section === 'notes') void hydrateNotes();
    if (section === 'summary') void hydrateSummary();
  }

  function onLangChange() {
    shell?.refreshLabels();
    renderMain();
  }

  function render() {
    shell?.destroy();
    shell = mountHubShell(root, {
      subtitleKey: 'strand.mechanics.subtitle',
      activeSection: section,
      onSection: (id) => {
        section = id;
        shell.updateSection(section);
        renderMain();
      },
      onLang: onLangChange,
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
          ${MECHANICS_TOPICS.map((topic) => `
            <div class="card">
              <h3>${t(topic.titleKey)}</h3>
              <button class="btn primary" type="button" data-go-section="notes">${t('topic.viewNotes')}</button>
            </div>
          `).join('')}
        </div>
      </section>`;
  }

  function onMainClick(ev) {
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
          ${MECHANICS_TOPICS.map((r) => `
            <div class="card" data-note-card="${r.id}">
              <h3>${t(`notes.card.${r.id}`)}</h3>
              <div data-note-body></div>
            </div>
          `).join('')}
        </div>
      </section>`;
  }

  async function hydrateNotes() {
    const rows = MECHANICS_TOPICS.map((r) => ({
      key: r.id,
      fileEn: r.fileEn,
      fileZh: r.fileZh,
    }));
    await hydrateNoteCards(root, rows);
  }

  function renderSummary() {
    return `
      <section class="panel">
        <h2>${t('summary.title')}</h2>
        <p class="lead">${t('summary.intro')}</p>
        <p class="lead">${t('notes.embedHint')}</p>
        <div class="grid cols-4" data-summary-grid>
          ${MECHANICS_TOPICS.map((it) => `
            <div class="card" data-summary-card="${it.id}">
              <h3>${t(`summary.item.${it.id}`)}</h3>
              <div data-summary-body></div>
            </div>
          `).join('')}
        </div>
      </section>`;
  }

  async function hydrateSummary() {
    await hydrateSummaryCards(root, MECHANICS_SUMMARY_ROWS);
  }

  const onLang = onLangChange;
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