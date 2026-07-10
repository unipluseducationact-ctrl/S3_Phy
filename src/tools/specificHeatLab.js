import { createLabIframe } from './createLabIframe.js';

/** @param {(key: string) => string} t */
export function createSpecificHeatLab(t) {
  return createLabIframe(t, {
    slug: 'specific-heat',
    titleKey: 'tools.specificHeat.title',
    className: 'tool-specific-heat',
    extraParams: () => '&v=3',
  });
}
