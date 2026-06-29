import { getLang } from '../i18n.js';

/** @param {(key: string) => string} t */
export function createPlaneMirrorLab(t) {
  const wrap = document.createElement('div');
  wrap.className = 'tool-plane-mirror-lab';

  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;

  function iframeSrc() {
    const labLang = getLang() === 'zh-Hant' ? 'zh' : 'en';
    return `${root}plane-mirror-lab/index.html?embed=1&lang=${encodeURIComponent(labLang)}`;
  }

  iframe.src = iframeSrc();
  iframe.title = t('tools.planeMirror.title');
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
  wrap._planeMirrorLabCleanup = () => window.removeEventListener('s3phy:lang', onLang);

  wrap.appendChild(iframe);
  return wrap;
}
