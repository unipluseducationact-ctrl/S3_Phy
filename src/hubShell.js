import { t, getLang, setLang } from './i18n.js';

export const HUB_SECTIONS = ['topics', 'notes', 'tools', 'worksheets', 'flashcards', 'summary'];

const NAV_LABELS = {
  topics: 'nav.topics',
  notes: 'nav.notes',
  tools: 'nav.tools',
  worksheets: 'nav.worksheets',
  flashcards: 'nav.flashcards',
  summary: 'nav.summary',
};

/**
 * @param {HTMLElement} root
 * @param {{ subtitleKey: string, activeSection: string, onSection: (id: string) => void, onLang: () => void }} opts
 */
export function mountHubShell(root, { subtitleKey, activeSection, onSection, onLang }) {
  root.innerHTML = `
    <header class="site-header">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="${import.meta.env.BASE_URL}images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${t('app.title')}</h1>
          <p class="site-subtitle" data-hub-subtitle>${t(subtitleKey)}</p>
        </div>
      </div>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${t('strand.back')}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <nav class="main-nav" data-nav></nav>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${t('footer.conventions')}</footer>
  `;

  const main = root.querySelector('[data-main]');
  const nav = root.querySelector('[data-nav]');
  const langEl = root.querySelector('[data-lang]');
  const backBtn = root.querySelector('[data-strand-back]');

  let currentSection = activeSection;

  function paintNav(sec) {
    currentSection = sec;
    nav.innerHTML = HUB_SECTIONS.map((id) => {
      const active = sec === id ? 'active' : '';
      return `<button type="button" class="${active}" data-sec="${id}">${t(NAV_LABELS[id])}</button>`;
    }).join('');
    nav.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => onSection(btn.getAttribute('data-sec')));
    });
  }

  function paintLang() {
    langEl.innerHTML = `
      <button type="button" data-set-lang="en" class="${getLang() === 'en' ? 'active' : ''}">${t('lang.en')}</button>
      <button type="button" data-set-lang="zh-Hant" class="${getLang() === 'zh-Hant' ? 'active' : ''}">${t('lang.zhHant')}</button>
    `;
    langEl.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLang(btn.getAttribute('data-set-lang'));
        onLang();
      });
    });
  }

  function refreshLabels() {
    root.querySelector('[data-hub-subtitle]').textContent = t(subtitleKey);
    backBtn.textContent = t('strand.back');
    root.querySelector('[data-hub-footer]').textContent = t('footer.conventions');
    root.querySelector('.site-title').textContent = t('app.title');
  }

  const onBack = () => {
    window.dispatchEvent(new CustomEvent('s3phy:strand', { detail: null }));
  };
  backBtn.addEventListener('click', onBack);

  paintNav(activeSection);
  paintLang();

  return {
    main,
    updateSection(sec) {
      paintNav(sec);
    },
    refreshLabels() {
      refreshLabels();
      paintNav(currentSection);
      paintLang();
    },
    destroy() {
      backBtn.removeEventListener('click', onBack);
    },
  };
}
