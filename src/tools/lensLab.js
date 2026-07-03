import { getLang } from '../i18n.js';

/** @param {(key: string) => string} t @param {{ defaultKind?: 'convex' | 'concave' }} [opts] */
export function createLensLab(t, opts = {}) {
  const kind = opts.defaultKind === 'concave' ? 'concave' : 'convex';
  const titleKey = 'tools.lens.title';

  const wrap = document.createElement('div');
  wrap.className = 'tool-lens-simulator';

  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;

  function iframeSrc() {
    const labLang = getLang() === 'zh-Hant' ? 'zh' : 'en';
    return `${root}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(kind)}&lang=${encodeURIComponent(labLang)}&v=2`;
  }

  iframe.src = iframeSrc();
  iframe.title = t(titleKey);
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
  wrap._lensLabCleanup = () => window.removeEventListener('s3phy:lang', onLang);

  wrap.appendChild(iframe);
  return wrap;
}
