import { getLang } from '../i18n.js';

/** @param {(key: string) => string} t */
export function createEmLab(t) {
  const wrap = document.createElement('div');
  wrap.className = 'tool-em-spectrum';

  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;

  function iframeSrc() {
    return `${root}em-spectrum/index.html?lang=${encodeURIComponent(getLang())}`;
  }

  iframe.src = iframeSrc();
  iframe.title = t('tools.em.title');
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
  wrap._emLabCleanup = () => window.removeEventListener('s3phy:lang', onLang);

  wrap.appendChild(iframe);
  return wrap;
}
