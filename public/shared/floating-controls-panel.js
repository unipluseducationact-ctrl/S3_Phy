/**
 * Floating, draggable, upward-collapsing parameter panel.
 * Used by heat lab iframe pages (standalone script tag).
 */
(function () {
  'use strict';

  const FLOAT_BREAKPOINT = 768;
  const HUB_FLOAT_BREAKPOINT = 768;
  const DEFAULT_POS = { x: 12, y: 12 };
  const LAYOUT_DEBOUNCE_MS = 200;

  function isFloatingEnabled(container, breakpoint) {
    const bp = breakpoint || FLOAT_BREAKPOINT;
    const width = container
      ? container.getBoundingClientRect().width
      : window.innerWidth;
    return width >= bp;
  }

  function readPosition(storageKey) {
    try {
      const raw = localStorage.getItem(storageKey + ':pos');
      if (!raw) return { ...DEFAULT_POS };
      const parsed = JSON.parse(raw);
      if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
        return parsed;
      }
    } catch (_) { /* ignore */ }
    return { ...DEFAULT_POS };
  }

  function savePosition(storageKey, pos) {
    try {
      localStorage.setItem(storageKey + ':pos', JSON.stringify(pos));
    } catch (_) { /* ignore */ }
  }

  function clampPosition(container, panel, x, y) {
    const cRect = container.getBoundingClientRect();
    const pRect = panel.getBoundingClientRect();
    const maxX = Math.max(0, cRect.width - pRect.width);
    const maxY = Math.max(0, cRect.height - pRect.height);
    return {
      x: Math.min(Math.max(0, x), maxX),
      y: Math.min(Math.max(0, y), maxY),
    };
  }

  function applyPosition(panel, pos) {
    panel.style.left = pos.x + 'px';
    panel.style.top = pos.y + 'px';
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
  }

  function initFloatingControlsPanel(options) {
    const {
      container,
      panel,
      toggleBtn,
      dragHandle,
      storageKey,
      onLayoutChange,
      breakpoint = FLOAT_BREAKPOINT,
      collapsedBodySelector = '.lab-controls-body, .lab-controls-desc, .tl-controls-scroll',
      collapsedClass = 'controls-collapsed',
      floatingClass = 'controls-floating',
    } = options;

    if (!container || !panel || !toggleBtn) return null;

    let collapsed = sessionStorage.getItem(storageKey) !== 'false';
    let pos = readPosition(storageKey);
    let dragState = null;
    let layoutTimer = null;

    function scheduleLayoutChange() {
      if (typeof onLayoutChange !== 'function') return;
      clearTimeout(layoutTimer);
      layoutTimer = setTimeout(onLayoutChange, LAYOUT_DEBOUNCE_MS);
    }

    function updateToggleUi() {
      toggleBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      if (options.getToggleTitle) {
        toggleBtn.title = options.getToggleTitle(collapsed);
      }
      const icon = toggleBtn.querySelector('[data-float-chevron]');
      if (icon) {
        icon.setAttribute('data-lucide', collapsed ? 'chevron-down' : 'chevron-up');
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      }
    }

    function setCollapsed(next) {
      collapsed = next;
      panel.classList.toggle(collapsedClass, collapsed);
      sessionStorage.setItem(storageKey, collapsed ? 'true' : 'false');
      updateToggleUi();
      scheduleLayoutChange();
    }

    function enableFloating() {
      container.classList.add(floatingClass);
      panel.classList.add('lab-controls-float');
      applyPosition(panel, clampPosition(container, panel, pos.x, pos.y));
      if (dragHandle) dragHandle.style.display = '';
    }

    function disableFloating() {
      container.classList.remove(floatingClass);
      panel.classList.remove('lab-controls-float');
      panel.style.left = '';
      panel.style.top = '';
      panel.style.right = '';
      panel.style.bottom = '';
      if (dragHandle) dragHandle.style.display = 'none';
    }

    function refreshMode() {
      if (isFloatingEnabled(container, breakpoint)) {
        enableFloating();
        applyPosition(panel, clampPosition(container, panel, pos.x, pos.y));
      } else {
        disableFloating();
      }
      scheduleLayoutChange();
    }

    panel.classList.toggle(collapsedClass, collapsed);
    updateToggleUi();
    refreshMode();

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setCollapsed(!collapsed);
    });

    toggleBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setCollapsed(!collapsed);
      }
    });

    if (dragHandle) {
      dragHandle.addEventListener('pointerdown', (e) => {
        if (!isFloatingEnabled(container, breakpoint)) return;
        e.preventDefault();
        dragState = {
          pointerId: e.pointerId,
          startX: e.clientX,
          startY: e.clientY,
          originX: pos.x,
          originY: pos.y,
        };
        dragHandle.setPointerCapture(e.pointerId);
        dragHandle.classList.add('is-dragging');
      });

      dragHandle.addEventListener('pointermove', (e) => {
        if (!dragState || dragState.pointerId !== e.pointerId) return;
        const dx = e.clientX - dragState.startX;
        const dy = e.clientY - dragState.startY;
        const next = clampPosition(container, panel, dragState.originX + dx, dragState.originY + dy);
        pos = next;
        applyPosition(panel, next);
      });

      const endDrag = (e) => {
        if (!dragState || dragState.pointerId !== e.pointerId) return;
        dragHandle.releasePointerCapture(e.pointerId);
        dragHandle.classList.remove('is-dragging');
        savePosition(storageKey, pos);
        dragState = null;
        scheduleLayoutChange();
      };

      dragHandle.addEventListener('pointerup', endDrag);
      dragHandle.addEventListener('pointercancel', endDrag);
    }

    window.addEventListener('resize', refreshMode);

    return {
      setCollapsed,
      refreshMode,
      isCollapsed: () => collapsed,
      setToggleTitleGetter: (fn) => { options.getToggleTitle = fn; updateToggleUi(); },
    };
  }

  window.initFloatingControlsPanel = initFloatingControlsPanel;
  window.S3PHY_FLOAT_BREAKPOINT = FLOAT_BREAKPOINT;
  window.S3PHY_HUB_FLOAT_BREAKPOINT = HUB_FLOAT_BREAKPOINT;
})();
