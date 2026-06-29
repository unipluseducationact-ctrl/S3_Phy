const MCQ_KEYS = ['A', 'B', 'C', 'D'];

const activeByRoot = new WeakMap();
const callbacksByRoot = new WeakMap();
let documentBound = false;

export function setActiveWsQuestion(root, index) {
  activeByRoot.set(root, index === null || index === undefined ? null : index);
}

export function getActiveWsQuestion(root) {
  return activeByRoot.get(root) ?? null;
}

function isEnterKey(e) {
  return (
    e.key === 'Enter' ||
    e.key === 'Return' ||
    e.code === 'Enter' ||
    e.code === 'NumpadEnter'
  );
}

function isFinePointerDesktop() {
  try {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  } catch {
    return true;
  }
}

function isTextFieldTarget(target) {
  const tag = target?.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable;
}

function resolveTargetIndex(getActiveIndex, isResolved, itemCount) {
  const hovered = getActiveIndex();
  if (hovered !== null && hovered >= 0 && hovered < itemCount && !isResolved(hovered)) {
    return hovered;
  }
  for (let i = 0; i < itemCount; i += 1) {
    if (!isResolved(i)) return i;
  }
  return null;
}

function resolveHoveredIndex(getActiveIndex, isResolved, itemCount) {
  const hovered = getActiveIndex();
  if (hovered === null || hovered < 0 || hovered >= itemCount) return null;
  if (isResolved(hovered)) return null;
  return hovered;
}

function onDocumentKeydown(e) {
  if (!isFinePointerDesktop()) return;
  if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;

  for (const [root, callbacks] of callbacksByRoot) {
    if (!root.isConnected) {
      callbacksByRoot.delete(root);
      continue;
    }

    const { getItemCount, isResolved, findOptionBtn, findCheckBtn } = callbacks;
    const settingsPanel = root.querySelector('#ws-settings-panel');
    const target = e.target;

    if (settingsPanel?.contains(target)) continue;

    const itemCount = getItemCount();
    if (!itemCount) continue;

    const getActiveIndex = () => getActiveWsQuestion(root);

    if (isEnterKey(e)) {
      if (isTextFieldTarget(target)) continue;

      const qi = resolveHoveredIndex(getActiveIndex, isResolved, itemCount);
      if (qi === null) continue;

      const checkBtn = findCheckBtn(qi);
      if (!checkBtn || checkBtn.disabled) continue;

      e.preventDefault();
      e.stopImmediatePropagation();
      checkBtn.click();
      return;
    }

    if (isTextFieldTarget(target)) continue;

    const qi = resolveTargetIndex(getActiveIndex, isResolved, itemCount);
    if (qi === null) continue;

    const key = e.key?.length === 1 ? e.key.toUpperCase() : '';
    if (!MCQ_KEYS.includes(key)) continue;

    const optionBtn = findOptionBtn(qi, key);
    if (!optionBtn || optionBtn.disabled) continue;

    e.preventDefault();
    optionBtn.click();
    return;
  }
}

/**
 * Desktop keyboard shortcuts for MCQ worksheets:
 * A–D select options; Enter/Return checks the hovered question only.
 */
export function bindWsKeyboardShortcuts(root, callbacks) {
  if (!root || callbacksByRoot.has(root)) return;
  callbacksByRoot.set(root, callbacks);

  const settingsPanel = root.querySelector('#ws-settings-panel');
  settingsPanel?.addEventListener(
    'keydown',
    (e) => {
      if (!isEnterKey(e)) return;
      e.preventDefault();
      e.stopImmediatePropagation();
    },
    true,
  );

  if (!documentBound) {
    document.addEventListener('keydown', onDocumentKeydown, true);
    documentBound = true;
  }
}
