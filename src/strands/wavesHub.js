import { t } from '../i18n.js';
import { mountHubShell } from '../hubShell.js';

const WAVES_TOPICS = [
  {
    id: 'waveMotion',
    titleKey: 'topic.waveMotion',
  },
  {
    id: 'waveProperties',
    titleKey: 'topic.waveProperties',
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
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${t('waves.section.empty')}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  root.addEventListener('click', onMainClick);
  function onMainClick(ev) {
    // Handle clicks if we add navigation buttons inside topics later
  }

  render();

  return () => {
    root.removeEventListener('click', onMainClick);
    shell?.destroy();
  };
}
