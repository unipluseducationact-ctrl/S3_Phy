/** @param {(key: string) => string} t */
export function createTirEscapeLab(t) {
  const wrap = document.createElement('div');
  wrap.className = 'tool-tir-escape';

  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  iframe.src = `${root}tir-escape/index.html?embed=1`;
  iframe.title = t('tools.refractionTir.title');
  iframe.setAttribute('loading', 'lazy');
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';

  wrap.appendChild(iframe);
  return wrap;
}
