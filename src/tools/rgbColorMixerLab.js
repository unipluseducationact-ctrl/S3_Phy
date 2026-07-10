import { createLabIframe } from './createLabIframe.js';

/** @param {(key: string) => string} t */
export function createRgbColorMixerLab(t) {
  return createLabIframe(t, {
    slug: 'rgb-color-mixer',
    titleKey: 'tools.rgbMixer.title',
    className: 'tool-rgb-color-mixer',
  });
}
