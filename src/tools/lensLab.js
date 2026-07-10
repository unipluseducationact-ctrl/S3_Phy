import { createLabIframe } from './createLabIframe.js';

/** @param {(key: string) => string} t @param {{ defaultKind?: 'convex' | 'concave' }} [opts] */
export function createLensLab(t, opts = {}) {
  const kind = opts.defaultKind === 'concave' ? 'concave' : 'convex';
  return createLabIframe(t, {
    slug: 'lens-simulator',
    titleKey: 'tools.lens.title',
    className: 'tool-lens-simulator',
    extraParams: () => `&defaultLens=${encodeURIComponent(kind)}&v=2`,
  });
}
