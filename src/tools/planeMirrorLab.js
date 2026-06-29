/** @param {(key: string) => string} t */
export function createPlaneMirrorLab(t) {
  const wrap = document.createElement('div');
  wrap.className = 'tool-plane-mirror-lab';

  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  iframe.src = `${root}plane-mirror-lab/index.html?embed=1`;
  iframe.title = t('tools.planeMirror.title');
  iframe.setAttribute('loading', 'lazy');
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';

  wrap.appendChild(iframe);
  return wrap;
}
