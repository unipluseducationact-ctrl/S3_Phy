/** @param {(key: string) => string} t */
export function createEmLab(t) {
  const wrap = document.createElement('div');
  wrap.className = 'tool-em-spectrum';

  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  iframe.src = `${root}em-spectrum/index.html`;
  iframe.title = t('tools.em.title');
  iframe.setAttribute('loading', 'lazy');
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';

  wrap.appendChild(iframe);
  return wrap;
}
