import { createLabIframe } from './createLabIframe.js';

/** @param {(key: string) => string} t */
export function createRefractionLab(t) {
  return createLabIframe(t, {
    slug: 'refraction',
    titleKey: 'tools.refraction.title',
    className: 'tool-refraction-lab',
    extraParams: () => '&v=20260719_two_boxes_particles_v10',
  });
}
