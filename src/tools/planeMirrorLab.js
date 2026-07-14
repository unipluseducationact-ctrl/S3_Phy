import { createLabIframe } from './createLabIframe.js';

/** @param {(key: string) => string} t */
export function createPlaneMirrorLab(t) {
  return createLabIframe(t, {
    slug: 'plane-mirror-lab',
    titleKey: 'tools.planeMirror.title',
    className: 'tool-plane-mirror-lab',
    extraParams: () => '&v=20260714',
  });
}