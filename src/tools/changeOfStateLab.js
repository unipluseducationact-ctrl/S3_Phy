import { createLabIframe } from './createLabIframe.js';

/** @param {(key: string) => string} t */
export function createChangeOfStateLab(t) {
  return createLabIframe(t, {
    slug: 'change-of-state',
    titleKey: 'tools.changeOfState.title',
    className: 'tool-change-of-state',
    extraParams: () => '&v=17',
  });
}
