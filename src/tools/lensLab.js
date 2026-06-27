/** @param {(key: string) => string} t @param {{ defaultKind?: 'convex' | 'concave' }} [opts] */
export function createLensLab(t, opts = {}) {
  const kind = opts.defaultKind === 'concave' ? 'concave' : 'convex';
  const titleKey = 'tools.lens.title';

  const wrap = document.createElement('div');
  wrap.className = 'tool-lens-simulator';

  const iframe = document.createElement('iframe');
  const base = import.meta.env.BASE_URL || '/';
  const root = base.endsWith('/') ? base : `${base}/`;
  iframe.src = `${root}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(kind)}&v=2`;
  iframe.title = t(titleKey);
  iframe.setAttribute('loading', 'lazy');
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';

  wrap.appendChild(iframe);
  return wrap;
}
