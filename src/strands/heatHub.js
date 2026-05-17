import { t } from '../i18n.js';
import { mountHubShell } from '../hubShell.js';

const SECTION_TITLES = {
  topics: 'nav.topics',
  notes: 'nav.notes',
  tools: 'nav.tools',
  worksheets: 'nav.worksheets',
  flashcards: 'nav.flashcards',
  summary: 'nav.summary',
};

export function mountHeatHub(root) {
  let section = 'topics';
  let shell = null;
  let el = { main: null };

  function renderEmpty() {
    if (!el.main) return;
    el.main.innerHTML = `
      <section class="panel panel--empty-strand">
        <h2>${t(SECTION_TITLES[section])}</h2>
        <p class="lead">${t('heat.section.empty')}</p>
      </section>`;
  }

  function render() {
    shell?.destroy();
    shell = mountHubShell(root, {
      subtitleKey: 'strand.heat.subtitle',
      activeSection: section,
      onSection: (id) => {
        section = id;
        shell.updateSection(section);
        renderEmpty();
      },
      onLang: () => render(),
    });
    el.main = shell.main;
    shell.updateSection(section);
    renderEmpty();
  }

  const onLang = () => render();
  window.addEventListener('s3phy:lang', onLang);
  render();

  return () => {
    window.removeEventListener('s3phy:lang', onLang);
    shell?.destroy();
  };
}
