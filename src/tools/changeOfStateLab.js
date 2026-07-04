import { getLang } from '../i18n.js';

export function createChangeOfStateLab(t) {
  const wrap = document.createElement('div');
  wrap.className = 'tool-change-of-state';
  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : base + '/';
  function iframeSrc() {
    return root + 'change-of-state/index.html?embed=1&lang=' + encodeURIComponent(getLang()) + '&v=13';
  }
  iframe.src = iframeSrc();
  iframe.title = t('tools.changeOfState.title') || 'Change of State Lab';
  iframe.setAttribute('loading', 'lazy');
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  const onLang = () => {
    try {
      iframe.contentWindow?.postMessage({ type: 's3phy:lang', lang: getLang() }, '*');
    } catch {
      iframe.src = iframeSrc();
    }
  };
  window.addEventListener('s3phy:lang', onLang);
  wrap._thermometerLabCleanup = () => window.removeEventListener('s3phy:lang', onLang);
  wrap.appendChild(iframe);
  return wrap;
}