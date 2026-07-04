import { getLang } from '../i18n.js';

export function createHeatTransferLab(t) {
  const wrap = document.createElement('div');
  wrap.className = 'tool-heat-transfer';
  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : base + '/';
  function iframeSrc() {
    return root + 'heat-transfer/index.html?embed=1&lang=' + encodeURIComponent(getLang()) + '&v=8';
  }
  iframe.src = iframeSrc();
  iframe.title = t('tools.heatTransfer.title') || 'Heat Transfer Laboratory';
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