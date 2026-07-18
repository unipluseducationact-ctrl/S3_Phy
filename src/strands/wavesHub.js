import { t } from '../i18n.js';
import { mountHubShell } from '../hubShell.js';
import { hydrateNoteCards } from './hubHelpers.js';

const WAVES_TOPICS = [
  {
    id: 'waveMotion',
    titleKey: 'topic.waveMotion',
    fileEn: 'wave-motion-en.pdf',
    fileZh: 'wave-motion-zhHant.pdf',
  },
  {
    id: 'waveProperties',
    titleKey: 'topic.waveProperties',
    fileEn: 'wave-properties-en.pdf',
    fileZh: 'wave-properties-zhHant.pdf',
  },
  {
    id: 'stationaryWave',
    titleKey: 'topic.stationaryWave',
  },
  {
    id: 'lightWave',
    titleKey: 'topic.lightWave',
  },
  {
    id: 'soundWave',
    titleKey: 'topic.soundWave',
  },
];

export function mountWavesHub(root) {
  let section = 'topics';
  let shell = null;
  let el = { main: null };

  function renderMain() {
    if (!el.main) return;

    if (section === 'topics') {
      el.main.innerHTML = renderTopics();
    } else if (section === 'notes') {
      el.main.innerHTML = renderNotesShell();
    } else {
      el.main.innerHTML = `
        <section class="panel">
          <h2>${t(`nav.${section}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${t('waves.comingSoon')}</p>
          </div>
        </section>
      `;
    }

    if (section === 'notes') void hydrateNotes();
  }

  function onLangChange() {
    shell?.refreshLabels();
    renderMain();
  }

  function render() {
    shell?.destroy();
    shell = mountHubShell(root, {
      subtitleKey: 'strand.waves.subtitle',
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
        <div class="grid cols-3 topic-hub-grid">
          ${WAVES_TOPICS.map((topic) => `
            <div class="card">
              <h3>${t(topic.titleKey)}</h3>
              <button class="btn primary" type="button" data-go-section="notes">${t('topic.viewNotes')}</button>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  function renderNotesShell() {
    return `
      <section class="panel">
        <h2>${t('notes.title')}</h2>
        <p class="lead">${t('notes.intro')}</p>
        <p class="lead">${t('notes.embedHint')}</p>
        <div class="grid cols-3" data-notes-grid>
          ${WAVES_TOPICS.map(
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
    const rows = WAVES_TOPICS.map((r) => ({
      key: r.id,
      fileEn: r.fileEn,
      fileZh: r.fileZh,
    }));
    await hydrateNoteCards(root, rows);
  }

  root.addEventListener('click', onMainClick);
  function onMainClick(ev) {
    const notesBtn = ev.target.closest('[data-go-section]');
    if (notesBtn?.getAttribute('data-go-section') === 'notes') {
      section = 'notes';
      shell.updateSection(section);
      renderMain();
    }
  }

  render();

  return () => {
    root.removeEventListener('click', onMainClick);
    shell?.destroy();
  };
}
