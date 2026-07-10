import { createLabIframe } from './createLabIframe.js';

/** @param {(key: string) => string} t */
export function createEmLab(t) {
  return createLabIframe(t, {
    slug: 'em-spectrum',
    titleKey: 'tools.em.title',
    className: 'tool-em-spectrum',
  });
}
