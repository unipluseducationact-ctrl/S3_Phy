import { createLabIframe } from './createLabIframe.js';

/** @param {(key: string) => string} t */
export function createThermalMixingLab(t) {
  return createLabIframe(t, {
    slug: 'thermal-mixing',
    titleKey: 'tools.thermalMixing.title',
    className: 'tool-thermal-mixing',
    extraParams: () => '&v=3',
  });
}
