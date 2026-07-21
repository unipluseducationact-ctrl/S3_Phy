import { createLabIframe } from './createLabIframe.js';

/** @param {(key: string) => string} t */
export function createDispersionLab(t) {
  return createLabIframe(t, {
    slug: 'dispersion',
    titleKey: 'tools.dispersion.title',
    className: 'tool-dispersion-lab',
    extraParams: () => '&v=20260721_dispersion_v1',
  });
}
