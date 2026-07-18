import { t } from '../i18n.js';
import { mountHubShell } from '../hubShell.js';

const GAS_TOPICS = [
  {
    id: 'gasLaws',
    titleKey: 'topic.gasLaws',
  },
  {
    id: 'kineticTheory',
    titleKey: 'topic.kineticTheory',
  },
  {
    id: 'gasPressure',
    titleKey: 'topic.gasPressure',
  },
];

export function mountGasHub(root) {
  let section = sessionStorage.getItem('s3phy.gas.section') || 'topics';
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
            <p class="lead" style="margin-bottom: 0;">${t('gas.comingSoon')}</p>
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
      subtitleKey: 'strand.gas.subtitle',
      activeSection: section,
      onSection: (id) => {
        section = id;
        sessionStorage.setItem('s3phy.gas.section', id);
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
          ${GAS_TOPICS.map((topic) => `
            <div class="card">
              <h3>${t(topic.titleKey)}</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${t('gas.section.empty')}</p>
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
