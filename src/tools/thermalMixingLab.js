import { getLang } from '../i18n.js';

export function createThermalMixingLab(t) {
  const wrap = document.createElement('div');
  wrap.className = 'tool-thermal-mixing';
  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : base + '/';
  function iframeSrc() {
    return root + 'thermal-mixing/index.html?embed=1&lang=' + encodeURIComponent(getLang()) + '&v=1';
  }
  iframe.src = iframeSrc();
  iframe.title = t('tools.thermalMixing.title') || 'Thermal Mixing Lab';
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