const Tt="s3phy-thermometer-lab-css";const Vt=`
.tl-wrap {
  --tl-bg: #09090b;
  --tl-panel: #151518;
  --tl-border: #27272a;
  --tl-green: #00e676;
  --tl-cyan: #06b6d4;
  --tl-yellow: #f59e0b;
  --tl-red: #ef4444;
  --tl-text: #f4f4f5;
  --tl-muted: #a1a1aa;
  --tl-primary: #6366f1;
  --tl-primary-hover: #4f46e5;
  --tl-glow-cyan: rgba(6, 182, 212, 0.15);
  --tl-glow-primary: rgba(99, 102, 241, 0.15);
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--tl-text);
  background: var(--tl-bg);
  border-radius: 16px;
  padding: 16px;
  max-width: 100%;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
.tl-wrap * { box-sizing: border-box; }
.tl-wrap .tl-head { text-align: center; margin: 0 0 20px; }
.tl-wrap .tl-title {
  margin: 0;
  font-weight: 850;
  font-size: 1.6rem;
  background: linear-gradient(135deg, #22d3ee, #6366f1, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}
.tl-wrap .tl-sub { color: var(--tl-muted); font-size: 0.88rem; margin-top: 6px; }
.tl-wrap .tl-dash {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: min(1400px, 100%);
  margin: 0 auto;
  align-items: stretch;
}
.tl-wrap .tl-viz-phys,
.tl-wrap .tl-viz-graph {
  min-width: 0;
  background: var(--tl-panel);
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--tl-border);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.tl-wrap .tl-canvas-phys {
  background: #0d0d10;
  border-radius: 12px;
  width: 100%;
  max-width: 520px;
  height: auto;
  aspect-ratio: 460 / 340;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.tl-wrap .tl-canvas-graph {
  background: #0d0d10;
  border-radius: 12px;
  width: 100%;
  max-width: 580px;
  height: auto;
  aspect-ratio: 640 / 420;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.tl-wrap .tl-bath-bar--full-width {
  grid-column: 1 / -1;
  grid-row: 2;
  margin-top: 0;
}
.tl-wrap .tl-bath-bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 2px;
  padding: 12px 16px;
  background: var(--tl-panel);
  border: 1px solid var(--tl-border);
  border-radius: 14px;
  align-items: stretch;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.05);
}
.tl-wrap .tl-bath-bar-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 16px;
  font-size: 0.8rem;
  font-weight: 600;
}
.tl-wrap .tl-bath-bar-top .tl-beaker-overlay {
  flex: 1 1 auto;
  min-width: 150px;
  padding: 8px 12px;
  margin: 0;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.tl-wrap .tl-bath-slider-wrap {
  flex: 1 1 220px;
  min-width: 180px;
}
.tl-wrap .tl-bath-slider-wrap .tl-lr {
  font-size: 0.78rem;
  margin-bottom: 4px;
}
.tl-wrap .tl-bath-bar--under-graph {
  margin-top: 0;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
}
.tl-wrap .tl-bath-bar--under-graph .tl-bath-bar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.tl-wrap .tl-bath-bar--under-graph .tl-beaker-overlay {
  padding: 4px 8px;
  margin: 0;
  font-size: 0.75rem;
  background: transparent;
  border: none;
}
.tl-wrap .tl-bath-bar--under-graph .tl-temp-badge {
  font-size: 1rem;
}
.tl-wrap .tl-bath-bar--under-graph .tl-bath-slider-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tl-wrap .tl-bath-bar--under-graph input[type="range"] {
  margin: 0;
}
.tl-wrap .tl-bath-bar--under-graph .tl-val-bath-temp {
  color: var(--tl-cyan);
}
.tl-wrap .tl-controls {
  min-width: min(100%, 280px);
  background: var(--tl-panel);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid var(--tl-border);
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 0;
}
.tl-wrap .tl-controls-float-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.tl-wrap .tl-controls.lab-controls-float .tl-controls-float-bar {
  cursor: grab;
  touch-action: none;
  user-select: none;
}
.tl-wrap .tl-controls.lab-controls-float .tl-controls-float-bar.is-dragging {
  cursor: grabbing;
}
.tl-wrap .tl-controls-drag-handle {
  display: none;
  color: var(--tl-muted);
  padding: 4px 6px;
  border-radius: 6px;
  background: none;
  border: 1px solid transparent;
  font-size: 0.85rem;
  line-height: 1;
  flex-shrink: 0;
  pointer-events: none;
}
.tl-wrap .tl-controls-drag-handle:hover { color: var(--tl-text); border-color: var(--tl-border); }
.tl-wrap .tl-controls.lab-controls-float .tl-controls-drag-handle { display: inline-flex; align-items: center; }
.tl-wrap .tl-controls-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
  background: none;
  border: none;
  color: var(--tl-cyan);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  padding: 4px 0;
  text-align: left;
}
.tl-wrap .tl-controls-toggle:hover { opacity: 0.85; }
.tl-wrap .tl-controls-body {
  transition: max-height 0.25s ease, opacity 0.2s ease;
  min-height: 0;
}
.tl-wrap .tl-controls.controls-collapsed .tl-controls-body {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
}
.tl-wrap .tl-controls:not(.controls-collapsed) .tl-controls-body {
  max-height: min(70vh, 520px);
  opacity: 1;
  overflow-y: auto;
}
.tl-wrap .tl-controls.lab-controls-float {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
}
.tl-wrap .tl-controls-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-right: 2px;
  scrollbar-width: thin;
  scrollbar-color: #3f3f46 transparent;
}
.tl-wrap .tl-controls-scroll::-webkit-scrollbar { width: 6px; }
.tl-wrap .tl-controls-scroll::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 3px;
}
.tl-wrap .tl-details {
  border: 1px solid var(--tl-border);
  border-radius: 10px;
  background: rgba(255,255,255,0.01);
}
.tl-wrap .tl-details summary {
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--tl-cyan);
  padding: 10px 12px;
  list-style: none;
  user-select: none;
}
.tl-wrap .tl-details summary::-webkit-details-marker { display: none; }
.tl-wrap .tl-details summary::before {
  content: "▸ ";
  color: var(--tl-muted);
}
.tl-wrap .tl-details[open] summary::before { content: "▾ "; }
.tl-wrap .tl-details-body {
  padding: 0 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (min-width: 700px) {
  .tl-wrap .tl-btn-group {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 1024px) {
  .tl-wrap .tl-dash {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    grid-template-rows: auto auto auto;
    gap: 16px;
    align-items: stretch;
    position: relative;
  }
  .tl-wrap .tl-viz-phys {
    grid-column: 1;
    grid-row: 1;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tl-wrap .tl-viz-graph {
    grid-column: 2;
    grid-row: 1;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tl-wrap .tl-live-calculations {
    grid-row: 3;
    grid-column: 1 / -1;
    min-width: 0;
  }
  .tl-wrap .tl-controls.lab-controls-float {
    position: absolute;
    z-index: 40;
    width: min(360px, calc(100% - 24px));
    padding: 12px;
    gap: 10px;
  }
  .tl-wrap .tl-canvas-phys,
  .tl-wrap .tl-canvas-graph {
    max-width: 100%;
    width: 100%;
  }
  .tl-wrap .tl-bath-slider-wrap {
    flex: 1 1 260px;
    max-width: 360px;
  }
  .tl-wrap .tl-worked-solution {
    padding: 14px 20px;
    font-size: 1rem;
    border-radius: 10px;
    border-left-width: 6px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
}
.tl-wrap .tl-tabs-container {
  display: flex;
  background-color: #1f1f23;
  border-radius: 10px;
  padding: 4px;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
  border: 1px solid var(--tl-border);
}
.tl-wrap .tl-tabs-container::-webkit-scrollbar { display: none; }
.tl-wrap .tl-tab-btn {
  flex: 1;
  min-width: 0;
  padding: 8px 6px;
  background: none;
  border: none;
  font-size: 0.78rem;
  line-height: 1.2;
  font-weight: 700;
  color: var(--tl-muted);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-align: center;
  white-space: nowrap;
}
.tl-wrap .tl-tab-btn:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.03);
}
.tl-wrap .tl-tab-btn.active {
  color: #fff;
  background-color: var(--tl-primary);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
}
.tl-wrap .tl-tab-content {
  display: none;
  flex-direction: column;
  gap: 10px;
}
.tl-wrap .tl-tab-content.active {
  display: flex;
}
.tl-wrap .tl-live-calculations {
  background: var(--tl-panel);
  border: 1px solid var(--tl-border);
  border-radius: 16px;
  padding: 20px;
  min-width: 0;
}
.tl-wrap .tl-live-tab {
  display: none;
}
.tl-wrap .tl-live-tab.active {
  display: block;
}
.tl-wrap .tl-param-num {
  width: 80px;
  padding: 4px 6px;
  border: 1px solid var(--tl-border);
  border-radius: 6px;
  background: #0d0d10;
  color: var(--tl-cyan);
  font-size: 0.85rem;
  font-weight: 700;
  text-align: right;
  outline: none;
}
.tl-wrap .tl-param-num:focus {
  border-color: var(--tl-primary);
}
.tl-wrap .tl-live-calculations .tl-info-label {
  font-size: 1rem;
}
.tl-wrap .tl-live-calculations .tl-info-label.tl-live-direction {
  font-size: 0.95rem;
  margin-bottom: 4px;
}
.tl-wrap .tl-live-calculations .tl-worked-solution {
  font-size: 1.05rem;
}
.tl-wrap .tl-live-calculations .tl-worked-solution p {
  font-size: 1.1rem;
  margin: 2px 0;
}
.tl-wrap .tl-live-calculations .tl-math-formula {
  font-size: 1.55rem;
}
.tl-wrap .tl-live-calculations .tl-live-value {
  font-size: 1.25rem;
}
.tl-wrap .tl-live-calculations .tl-final-ans {
  font-size: 1.2rem;
}
.tl-wrap .tl-slope-label {
  font-size: 0.9rem;
  margin-bottom: 2px;
  color: var(--tl-muted);
}
.tl-wrap .tl-beaker-overlay {
  background-color: rgba(20, 20, 23, 0.95);
  border: 1px solid var(--tl-border);
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tl-wrap .tl-temp-badge {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--tl-cyan);
  text-shadow: 0 0 10px var(--tl-glow-cyan);
}
.tl-wrap .tl-live-value {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--tl-cyan);
}
.tl-wrap .tl-lr-value {
  font-size: 1.1rem;
}
.tl-wrap .tl-bath-bar-top {
  font-size: 0.95rem;
}
.tl-wrap .tl-cg { display: flex; flex-direction: column; gap: 6px; }
.tl-wrap .tl-lr { display: flex; justify-content: space-between; align-items: center; font-size: 0.95rem; font-weight: 600; }
.tl-wrap .tl-section-label {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--tl-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 4px 0 2px;
}
.tl-wrap .tl-param-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.tl-wrap .tl-param-grid .tl-cg { min-width: 0; }
.tl-wrap .tl-param-grid input[type="range"] { margin: 2px 0; }
.tl-wrap .tl-badge {
  background: #27272a;
  padding: 3px 10px;
  border-radius: 6px;
  font-family: ui-monospace, monospace;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.tl-wrap input[type="range"] { -webkit-appearance: none; width: 100%; background: transparent; margin: 6px 0; }
.tl-wrap input[type="range"]:focus { outline: none; }
.tl-wrap input[type="range"]::-webkit-slider-runnable-track {
  width: 100%; height: 6px; cursor: pointer; background: #27272a; border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.tl-wrap input[type="range"]::-webkit-slider-thumb {
  height: 16px; width: 16px; border-radius: 50%; background: #fff; cursor: pointer;
  -webkit-appearance: none; margin-top: -5px; box-shadow: 0 0 8px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.5);
  transition: transform 0.1s;
}
.tl-wrap input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
.tl-wrap .tl-btn-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  align-items: stretch;
  width: 100%;
  margin-top: 6px;
}
.tl-wrap .tl-preset-btn {
  padding: 6px 4px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  white-space: nowrap;
}
.tl-wrap .tl-btn {
  background-color: #1f1f23;
  border: 1px solid var(--tl-border);
  color: var(--tl-text);
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 650;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
.tl-wrap .tl-btn:hover {
  background-color: #27272a;
  border-color: #3f3f46;
  transform: translateY(-1px);
}
.tl-wrap .tl-btn.primary {
  background-color: var(--tl-primary);
  border-color: var(--tl-primary);
}
.tl-wrap .tl-btn.primary:hover {
  background-color: var(--tl-primary-hover);
  box-shadow: 0 4px 12px var(--tl-glow-primary);
}
.tl-wrap .tl-seg {
  display: flex;
  background-color: #1f1f23;
  border-radius: 10px;
  padding: 4px;
  gap: 4px;
  border: 1px solid var(--tl-border);
}
.tl-wrap .tl-seg-btn {
  flex: 1;
  border: 1px solid transparent;
  background: none;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--tl-muted);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
}
.tl-wrap .tl-seg-btn:hover { color: #fff; background-color: rgba(255, 255, 255, 0.02); }
.tl-wrap .tl-seg-btn.active-mercury {
  color: #fff;
  background-color: #27272a;
  border-color: var(--tl-muted);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
.tl-wrap .tl-seg-btn.active-alcohol {
  color: #fff;
  background-color: rgba(239, 68, 68, 0.15);
  border-color: var(--tl-red);
  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.1);
}
.tl-wrap .tl-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}
.tl-wrap .tl-dot.mercury { background-color: var(--tl-muted); box-shadow: 0 0 6px var(--tl-muted); }
.tl-wrap .tl-dot.alcohol { background-color: var(--tl-red); box-shadow: 0 0 6px var(--tl-red); }
.tl-wrap .tl-warning-banner {
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-left: 4px solid var(--tl-red);
  padding: 12px;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #fca5a5;
  line-height: 1.4;
  display: none;
  animation: tl-pulse 2s infinite alternate;
}
@keyframes tl-pulse {
  0% { box-shadow: 0 0 4px rgba(239, 68, 68, 0.1); }
  100% { box-shadow: 0 0 12px rgba(239, 68, 68, 0.3); }
}
.tl-wrap .tl-info-card {
  background-color: rgba(255,255,255,0.02);
  border: 1px dashed var(--tl-border);
  border-radius: 10px;
  padding: 8px 12px;
}
.tl-wrap .tl-info-card--compact {
  font-size: 0.78rem;
  color: var(--tl-muted);
  line-height: 1.4;
}
.tl-wrap .tl-info-card--compact b { color: var(--tl-cyan); }
.tl-wrap .tl-info-label {
  font-size: 0.85rem;
  font-weight: 750;
  color: var(--tl-cyan);
  margin-bottom: 4px;
}
.tl-wrap .tl-info-card p {
  margin: 0;
  font-size: 0.78rem;
  color: var(--tl-muted);
  line-height: 1.4;
}
.tl-wrap .tl-worked-solution {
  background-color: rgba(99, 102, 241, 0.05);
  border-left: 6px solid var(--tl-primary);
  border-radius: 0 10px 10px 0;
  padding: 12px 16px;
  font-size: 0.88rem;
  line-height: 1.5;
}
.tl-wrap .tl-solution-header {
  font-weight: 800;
  color: var(--tl-cyan);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}
.tl-wrap .tl-worked-solution p {
  margin: 6px 0;
}
.tl-wrap .tl-worked-solution.tl-dual-direction {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: stretch;
  margin-bottom: 10px;
}
.tl-wrap .tl-direction-col {
  flex: 1 1 0;
  min-width: 0;
}
.tl-wrap .tl-dual-direction > .tl-direction-col:first-child {
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  padding-right: 16px;
}
@media (max-width: 699px) {
  .tl-wrap .tl-worked-solution.tl-dual-direction {
    flex-direction: column;
    gap: 12px;
  }
  .tl-wrap .tl-dual-direction > .tl-direction-col:first-child {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-right: 0;
    padding-bottom: 10px;
  }
}
.tl-wrap .tl-math-formula {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  font-size: 1.35rem;
  color: #fff;
  background-color: rgba(0,0,0,0.25);
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.tl-wrap .tl-final-ans {
  color: var(--tl-green);
  font-size: 1.05rem;
  font-weight: 850;
  background-color: rgba(16, 185, 129, 0.15);
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  text-shadow: 0 0 8px rgba(16, 185, 129, 0.3);
}
.tl-wrap .tl-solver-tabs {
  display: flex;
  background-color: #1f1f23;
  border-radius: 8px;
  padding: 3px;
  gap: 3px;
  margin-bottom: 12px;
  border: 1px solid var(--tl-border);
}
.tl-wrap .tl-solver-tab-btn {
  flex: 1;
  background: none;
  border: none;
  padding: 8px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--tl-muted);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-align: center;
}
.tl-wrap .tl-solver-tab-btn.active {
  background-color: #27272a;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
.tl-wrap .tl-solver-pane {
  display: none;
  flex-direction: column;
  gap: 12px;
}
.tl-wrap .tl-solver-pane.active {
  display: flex;
}
.tl-wrap .tl-calc-inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255,255,255,0.01);
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--tl-border);
}
.tl-wrap .tl-calc-inputs span {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--tl-muted);
}
.tl-wrap .tl-input-with-unit {
  display: flex;
  align-items: center;
  background-color: #0d0d10;
  border: 1px solid var(--tl-border);
  border-radius: 6px;
  padding-right: 8px;
}
.tl-wrap .tl-calc-input {
  width: 70px;
  padding: 6px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 700;
  text-align: center;
  outline: none;
}
.tl-wrap .tl-input-with-unit .tl-unit {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--tl-muted);
}
.tl-wrap .tl-probe-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.tl-wrap .tl-spec-tile {
  background-color: rgba(255,255,255,0.01);
  border: 1px solid var(--tl-border);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
.tl-wrap .tl-tile-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--tl-muted);
}
.tl-wrap .tl-tile-val {
  font-size: 1.1rem;
  font-weight: 850;
  color: var(--tl-cyan);
  margin-top: 4px;
}
.tl-wrap .tl-faulty-cal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 4px;
}
.tl-wrap .tl-faulty-cal .tl-calc-inputs {
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
}
.tl-wrap .tl-faulty-cal .tl-input-with-unit {
  width: 100%;
  justify-content: space-between;
}
.tl-wrap .tl-faulty-cal .tl-calc-input {
  width: 100%;
  text-align: right;
}
.tl-wrap .tl-faulty-interval {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--tl-muted);
  padding: 8px 12px;
  background: rgba(255,255,255,0.02);
  border-radius: 10px;
  border: 1px dashed var(--tl-border);
  margin-bottom: 10px;
}
.tl-wrap .tl-faulty-interval b {
  color: var(--tl-cyan);
  font-family: ui-monospace, monospace;
}
.tl-wrap .tl-solver-error {
  font-size: 0.78rem;
  color: var(--tl-red);
  font-weight: 600;
  margin: 0;
}
.tl-wrap--faulty-cal .tl-dash--faulty {
  position: relative;
  min-height: min(72vh, 720px);
}
.tl-wrap--faulty-cal .tl-faulty-hero {
  background: var(--tl-panel);
  padding: 16px 20px 20px;
  border-radius: 16px;
  border: 1px solid var(--tl-border);
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: min(52vh, 520px);
}
.tl-wrap--faulty-cal .tl-faulty-hero-viz {
  flex: 1;
  min-height: 240px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 1px solid var(--tl-border);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
}
.tl-wrap--faulty-cal .tl-faulty-live {
  background: var(--tl-panel);
  border: 1px solid var(--tl-border);
  border-radius: 16px;
  padding: 14px 16px;
}
@media (min-width: 1024px) {
  .tl-wrap--faulty-cal .tl-controls {
    width: min(380px, calc(100% - 24px));
  }
}
`;function St(){if(document.getElementById(Tt))return;const c=document.createElement("style");c.id=Tt,c.textContent=Vt,document.head.appendChild(c)}function kt(c){const U={x:12,y:12},j=200,{container:_,panel:a,toggleBtn:e,dragHandle:D,dragSurface:lt,storageKey:E,onLayoutChange:Q,breakpoint:at=1024,collapsedClass:S="controls-collapsed",floatingClass:T="controls-floating"}=c,k=lt||D;if(!_||!a||!e)return null;let $=sessionStorage.getItem(E)!=="false",v=(()=>{try{const A=localStorage.getItem(E+":pos");if(!A)return{...U};const L=JSON.parse(A);if(typeof L.x=="number"&&typeof L.y=="number")return L}catch{}return{...U}})(),C=null,I=null;const G=()=>window.innerWidth>=at,H=(A,L)=>{const Y=_.getBoundingClientRect(),nt=a.getBoundingClientRect(),tt=Math.max(0,Y.width-nt.width),K=Math.max(0,Y.height-nt.height);return{x:Math.min(Math.max(0,A),tt),y:Math.min(Math.max(0,L),K)}},z=()=>{a.style.left=v.x+"px",a.style.top=v.y+"px",a.style.right="auto",a.style.bottom="auto"},w=()=>{typeof Q=="function"&&(clearTimeout(I),I=setTimeout(Q,j))},V=()=>{e.setAttribute("aria-expanded",$?"false":"true"),c.getToggleTitle&&(e.title=c.getToggleTitle($));const A=e.querySelector("[data-float-chevron]");A&&(A.textContent=$?"v":"^")},rt=()=>{G()&&(v=H(v.x,v.y),z())},it=A=>{$=A,a.classList.toggle(S,$),sessionStorage.setItem(E,$?"true":"false"),V(),w(),requestAnimationFrame(rt),setTimeout(rt,260)},ot=()=>{_.classList.add(T),a.classList.add("lab-controls-float"),v=H(v.x,v.y),z(),D&&(D.style.display="")},ct=()=>{_.classList.remove(T),a.classList.remove("lab-controls-float"),a.style.left="",a.style.top="",a.style.right="",a.style.bottom="",D&&(D.style.display="none")},J=()=>{G()?(ot(),v=H(v.x,v.y),z()):ct(),w()};if(a.classList.toggle(S,$),V(),J(),e.addEventListener("click",A=>{A.stopPropagation(),it(!$)}),k){k.addEventListener("pointerdown",L=>{G()&&(e.contains(L.target)||(L.preventDefault(),C={pointerId:L.pointerId,startX:L.clientX,startY:L.clientY,originX:v.x,originY:v.y},k.setPointerCapture(L.pointerId),k.classList.add("is-dragging")))}),k.addEventListener("pointermove",L=>{!C||C.pointerId!==L.pointerId||(v=H(C.originX+L.clientX-C.startX,C.originY+L.clientY-C.startY),z())});const A=L=>{if(!(!C||C.pointerId!==L.pointerId)){k.releasePointerCapture(L.pointerId),k.classList.remove("is-dragging");try{localStorage.setItem(E+":pos",JSON.stringify(v))}catch{}C=null,w()}};k.addEventListener("pointerup",A),k.addEventListener("pointercancel",A)}return window.addEventListener("resize",J),{setCollapsed:it,refreshMode:J,isCollapsed:()=>$}}function Ut(c,g={}){St();const U=g.type||"liquid";let j=c("tools.thermometerLab.title"),_=c("tools.thermometerLab.subtitle");g.type==="liquid"?(j=c("tools.thermometerLab.liquid.title"),_=c("tools.thermometerLab.liquid.subtitle")||c("tools.thermometerLab.subtitle")):g.type==="resistance"?(j=c("tools.thermometerLab.resistance.title"),_=c("tools.thermometerLab.resistance.subtitle")||c("tools.thermometerLab.subtitle")):g.type==="thermistor"&&(j=c("tools.thermometerLab.thermistor.title"),_=c("tools.thermometerLab.thermistor.subtitle")||c("tools.thermometerLab.subtitle"));const a=document.createElement("div");a.className="tl-wrap",a.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${j}</h2>
      <div class="tl-sub">${_}</div>
    </div>
    <div class="tl-dash">
      <!-- TOP ROW LEFT: THERMOMETER VIEW -->
      <div class="tl-viz-phys" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;">
        <canvas class="tl-canvas-phys" id="tl-thermometerCanvas" width="460" height="340"></canvas>
        <button class="tl-btn" id="tl-btn-toggle-labels" style="margin-top:4px;width:100%;display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.75rem;padding:6px 10px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <span id="tl-lbl-toggle-labels">${c("tools.thermometerLab.labels.hide")}</span>
        </button>
      </div>

      <!-- TOP ROW RIGHT: GRAPH -->
      <div class="tl-viz-graph" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;width:100%">
        <canvas class="tl-canvas-graph" id="tl-graphCanvas" width="640" height="420"></canvas>
      </div>

      <!-- BATH CONTROLS (full width row) -->
      <div class="tl-bath-bar tl-bath-bar--full-width">
        <div class="tl-bath-bar-top">
          <div class="tl-beaker-overlay">
            <span>Liquid: <b id="tl-bath-state">Water</b></span>
            <span><b class="tl-temp-badge" id="tl-bath-temp-display">25.0°C</b></span>
          </div>
          <div class="tl-bath-slider-wrap">
            <div class="tl-lr">
              <span>T<sub>bath</sub></span>
              <span class="tl-badge tl-lr-value tl-val-bath-temp" id="tl-val-bath-temp">25.0 °C</span>
            </div>
            <input type="range" id="tl-bath-temp-slider" min="0" max="200" step="0.5" value="25.0">
          </div>
        </div>
        <div class="tl-btn-group">
          <button class="tl-btn tl-preset-btn" id="tl-btn-preset-ice">Ice 0°C</button>
          <button class="tl-btn tl-preset-btn" id="tl-btn-preset-room">Room 25°C</button>
          <button class="tl-btn tl-preset-btn" id="tl-btn-preset-steam">Steam 100°C</button>
          <button class="tl-btn tl-preset-btn" id="tl-btn-preset-oil">Oil 150°C</button>
        </div>
      </div>

      <!-- DOCKED LIVE CALCULATIONS -->
      <div class="tl-live-calculations">
        <div class="tl-live-tab active" id="tl-live-liquid">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
            <div class="tl-worked-solution tl-dual-direction">
              <div class="tl-direction-col">
                <div class="tl-info-label tl-live-direction" style="color:var(--tl-cyan)">Direction A: Length to Temperature (L<sub>T</sub> &rarr; T)</div>
                <div class="tl-info-label tl-slope-label">Slope Equation:</div>
                <div id="tl-svg-formula-liquid" class="tl-math-formula" style="min-height:55px; margin:4px 0"></div>
                <p>Substitute current reading <b class="tl-live-value" id="tl-live-liquid-lt">5.50 cm</b>:</p>
                <div id="tl-svg-formula-liquid-sub" class="tl-math-formula" style="min-height:90px; margin:4px 0"></div>
              </div>
              <div class="tl-direction-col">
                <div class="tl-info-label tl-live-direction" style="color:var(--tl-cyan)">Direction B: Temperature to Length (T &rarr; L<sub>T</sub>)</div>
                <p>Substitute current bath temperature <b class="tl-live-value" id="tl-live-liquid-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-l" class="tl-math-formula" style="min-height:100px; margin:4px 0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tl-live-tab" id="tl-live-resistance">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
            <div class="tl-worked-solution tl-dual-direction">
              <div class="tl-direction-col">
                <div class="tl-info-label tl-live-direction" style="color:var(--tl-cyan)">Direction A: Resistance to Temperature (R<sub>T</sub> &rarr; T)</div>
                <div class="tl-info-label tl-slope-label">Slope Equation:</div>
                <div id="tl-svg-formula-resistance" class="tl-math-formula" style="min-height:55px; margin:4px 0"></div>
                <p>Substitute current resistance <b class="tl-live-value" id="tl-live-resistance-rt">5.30 Ω</b>:</p>
                <div id="tl-svg-formula-resistance-sub" class="tl-math-formula" style="min-height:90px; margin:4px 0"></div>
              </div>
              <div class="tl-direction-col">
                <div class="tl-info-label tl-live-direction" style="color:var(--tl-cyan)">Direction B: Temperature to Resistance (T &rarr; R<sub>T</sub>)</div>
                <p>Substitute current bath temperature <b class="tl-live-value" id="tl-live-resistance-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-r" class="tl-math-formula" style="min-height:100px; margin:4px 0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tl-live-tab" id="tl-live-thermistor">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;color:var(--tl-green)">${c("tools.thermometerLab.thermistor.liveBetaLabel")}</div>
            <div class="tl-worked-solution" style="background-color:rgba(16,185,129,0.05);border-left-color:var(--tl-green)">
              <div id="tl-svg-formula-thermistor" class="tl-math-formula"></div>
              <p>Substitute current resistance <b class="tl-live-value" id="tl-live-thermistor-rt">10.00 kΩ</b>:</p>
              <div id="tl-svg-formula-thermistor-sub" class="tl-math-formula"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- FLOATING CONTROLS & SOLVERS -->
      <div class="tl-controls controls-collapsed">
        <div class="tl-controls-float-bar">
          <button type="button" class="tl-controls-drag-handle" id="tl-controls-drag" aria-label="${c("tools.floatingControls.dragHint")}" title="${c("tools.floatingControls.dragHint")}">⋮⋮</button>
          <button type="button" class="tl-controls-toggle" id="tl-controls-toggle" aria-expanded="false">
            <span data-float-chevron>▾</span>
            <span>${c("tools.thermometerLab.paramSettings")}</span>
          </button>
        </div>
        <div class="tl-controls-body">

        <!-- TAB 1: LIQUID-IN-GLASS -->
        <div class="tl-tab-content active" id="tl-tab-liquid">
          <details class="tl-details">
            <summary>${c("tools.thermometerLab.paramSettings")}</summary>
            <div class="tl-details-body">
              <div class="tl-cg">
                <span class="tl-section-label">Thermometric liquid</span>
                <div class="tl-seg" role="group" aria-label="Thermometric liquid">
                  <button type="button" class="tl-seg-btn active-mercury" id="tl-card-mercury" title="Mercury — boils at 356.7°C; suitable for high temperatures">
                    <span class="tl-dot mercury"></span> Hg
                  </button>
                  <button type="button" class="tl-seg-btn" id="tl-card-alcohol" title="Alcohol — boils at 78.4°C; vaporizes at high temperatures">
                    <span class="tl-dot alcohol"></span> Alcohol
                  </button>
                </div>
              </div>
              <div class="tl-warning-banner" id="tl-alcohol-boiling-warning">
                <strong>CRITICAL PHYSICS ALERT!</strong> Alcohol boils at 78.4°C. Dipping it into this temperature vaporizes the liquid, creating extreme pressure and breaking the thermometer. This is why alcohol <b>cannot</b> be used to measure hot oil (150°C)!
              </div>
              <div class="tl-param-grid">
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Bulb Volume (V<sub>b</sub>) [mm³]</span>
                    <input type="number" id="tl-input-bulb-vol" class="tl-param-num" min="10" max="1000" step="10" value="200">
                  </div>
                  <input type="range" id="tl-slider-bulb-vol" min="10" max="1000" step="10" value="200">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Wall Thickness (w) [mm]</span>
                    <input type="number" id="tl-input-wall-thick" class="tl-param-num" min="0.05" max="3.0" step="0.05" value="0.5">
                  </div>
                  <input type="range" id="tl-slider-wall-thick" min="0.05" max="3.0" step="0.05" value="0.5">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Capillary Bore Diameter (d) [mm]</span>
                    <input type="number" id="tl-input-capillary-bore" class="tl-param-num" min="0.05" max="2.0" step="0.05" value="0.3">
                  </div>
                  <input type="range" id="tl-slider-capillary-bore" min="0.05" max="2.0" step="0.05" value="0.3">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Ice Point Column Length (L<sub>0</sub>) [cm]</span>
                    <input type="number" id="tl-input-liquid-l0" class="tl-param-num" min="0.5" max="15.0" step="0.1" value="3.0">
                  </div>
                  <input type="range" id="tl-slider-liquid-l0" min="0.5" max="15.0" step="0.1" value="3.0">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Steam Point Column Length (L<sub>100</sub>) [cm]</span>
                    <input type="number" id="tl-input-liquid-l100" class="tl-param-num" min="5.0" max="30.0" step="0.1" value="13.0">
                  </div>
                  <input type="range" id="tl-slider-liquid-l100" min="5.0" max="30.0" step="0.1" value="13.0">
                </div>
              </div>
              <div class="tl-info-card tl-info-card--compact">
                τ = <b id="tl-val-response-time">0.65 s</b> · larger V<sub>b</sub> → slower equilibration
              </div>
            </div>
          </details>
        </div>

        <!-- TAB 2: PLATINUM RESISTANCE -->
        <div class="tl-tab-content" id="tl-tab-resistance">
          <details class="tl-details">
            <summary>${c("tools.thermometerLab.paramSettings")}</summary>
            <div class="tl-details-body">
              <div class="tl-probe-specs">
                <div class="tl-spec-tile">
                  <span class="tl-tile-label">Ice Point Resistance (R<sub>0</sub>)</span>
                  <span class="tl-tile-val" id="tl-spec-resistance-r0">5.0 Ω</span>
                </div>
                <div class="tl-spec-tile">
                  <span class="tl-tile-label">Steam Point Resistance (R<sub>100</sub>)</span>
                  <span class="tl-tile-val" id="tl-spec-resistance-r100">6.2 Ω</span>
                </div>
              </div>
              <div class="tl-param-grid">
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Ice Point Resistance (R<sub>0</sub>) [Ω]</span>
                    <input type="number" id="tl-input-resistance-r0" class="tl-param-num" min="0.5" max="20.0" step="0.1" value="5.0">
                  </div>
                  <input type="range" id="tl-slider-resistance-r0" min="0.5" max="20.0" step="0.1" value="5.0">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Steam Point Resistance (R<sub>100</sub>) [Ω]</span>
                    <input type="number" id="tl-input-resistance-r100" class="tl-param-num" min="2.0" max="30.0" step="0.1" value="6.2">
                  </div>
                  <input type="range" id="tl-slider-resistance-r100" min="2.0" max="30.0" step="0.1" value="6.2">
                </div>
              </div>
              <div class="tl-info-card" style="border-color:rgba(245,158,11,0.3)">
                <div class="tl-info-label" style="color:#f59e0b">Fundamental Assumption</div>
                <p>To calculate temperature using linear calibration, it is <b>fundamentally assumed that electrical resistance varies linearly with temperature</b>.</p>
              </div>
            </div>
          </details>
        </div>

        <!-- TAB 3: THERMISTOR -->
        <div class="tl-tab-content" id="tl-tab-thermistor">
          <details class="tl-details">
            <summary>${c("tools.thermometerLab.paramSettings")}</summary>
            <div class="tl-details-body">
              <div class="tl-probe-specs">
                <div class="tl-spec-tile">
                  <span class="tl-tile-label">Resistance at 25°C (R<sub>25</sub>)</span>
                  <span class="tl-tile-val" id="tl-spec-thermistor-r25">10.0 kΩ</span>
                </div>
                <div class="tl-spec-tile">
                  <span class="tl-tile-label">Beta Parameter (β)</span>
                  <span class="tl-tile-val" id="tl-spec-thermistor-beta">3500 K</span>
                </div>
              </div>
              <div class="tl-param-grid">
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Resistance at 25°C (R<sub>25</sub>) [kΩ]</span>
                    <input type="number" id="tl-input-thermistor-r25" class="tl-param-num" min="0.5" max="50.0" step="0.1" value="10.0">
                  </div>
                  <input type="range" id="tl-slider-thermistor-r25" min="0.5" max="50.0" step="0.1" value="10.0">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Beta Parameter (β) [K]</span>
                    <input type="number" id="tl-input-thermistor-beta" class="tl-param-num" min="1000" max="8000" step="50" value="3500">
                  </div>
                  <input type="range" id="tl-slider-thermistor-beta" min="1000" max="8000" step="50" value="3500">
                </div>
              </div>
            </div>
          </details>
        </div>

        </div>
      </div>
    </div>
  `;const e={liquidType:"mercury",thermometerType:U,bulbVolume:200,wallThickness:.5,capillaryBore:.3,liquidL0:3,liquidL100:13,resistanceR0:5,resistanceR100:6.2,thermistorR25:10,thermistorBeta:3500,bathTemp:25,thermometerTemp:25,bubbles:[],iceCubes:[],heatWaves:[],steamParticles:[],currentLength:5.5,currentResistance:5.3,currentThermistorR:10,lastTimestamp:0,showLabels:!0},D={xs:11,sm:14,md:17,lg:18,sub:10};function lt(t,l,o,n){let r=Math.min(o,Math.max(l,t));return n>0&&(r=Math.round(r/n)*n,r=Math.min(o,Math.max(l,parseFloat(r.toFixed(10))))),r}function E(t,l,{min:o,max:n,step:r,decimals:f,onUpdate:s}){function d(p){const u=Number.isFinite(p)?p:o,i=lt(u,o,n,r);t.value=i,l.value=i.toFixed(f),s(i)}t.addEventListener("input",()=>d(parseFloat(t.value))),l.addEventListener("change",()=>d(parseFloat(l.value))),l.addEventListener("blur",()=>d(parseFloat(l.value)))}const Q=460,at=340,S=8,T=10,k=40,$=Q-k,v=205,C=640,I=420;function G(){const t={left:110,top:48,right:30,bottom:65};return{gx:t.left,gy:t.top,gw:C-t.left-t.right,gh:I-t.top-t.bottom,tickFont:`bold ${Math.round(C*.024)}px Arial`,axisFont:`bold ${Math.round(C*.026)}px Arial`,dotR:8,yLabelX:t.left-75,xLabelY:I-t.bottom+32}}function H(){return{minT:0,maxT:200,tickStep:25}}function z(t,l,o,n,r){return n+(t-l)/(o-l)*r}function w(t,l,o,n,r){return n+r-(t-l)/(o-l)*r}function V(t,l,o,n,r,f,s=null){const{gx:d,gy:p,gw:u,gh:i,tickFont:h,axisFont:y,yLabelX:m,xLabelY:q}=l;t.strokeStyle="#1e1e24",t.lineWidth=1;for(const b of f){const x=w(b.value,b.min,b.max,p,i);t.beginPath(),t.moveTo(d,x),t.lineTo(d+u,x),t.stroke()}for(let b=o;b<=n+.01;b+=r){const x=z(b,o,n,d,u);t.beginPath(),t.moveTo(x,p),t.lineTo(x,p+i),t.stroke()}t.strokeStyle="#4b5563",t.lineWidth=2.5,t.beginPath(),t.moveTo(d,p),t.lineTo(d,p+i),t.lineTo(d+u,p+i),t.stroke(),t.fillStyle="#e4e4e7",t.font=h,t.textAlign="right",t.textBaseline="middle";for(const b of f){const x=w(b.value,b.min,b.max,p,i);t.fillText(b.label,d-15,x)}t.textAlign="center",t.textBaseline="top";for(let b=o;b<=n+.01;b+=r){if(s!=null&&Math.abs(b-s)<.25)continue;const x=z(b,o,n,d,u);t.fillText(`${Math.round(b)}`,x,p+i+10)}return{gx:d,gy:p,gw:u,gh:i,axisFont:y,yLabelX:m,xLabelY:q}}function rt(t,l){const o=l-t,n=o<=8?1:o<=14?2:5,r=[],f=Math.ceil(t/n)*n;for(let s=f;s<=l+.001;s+=n)r.push({value:s,label:s%1===0?`${s.toFixed(0)}`:`${s.toFixed(1)}`,min:t,max:l});return r}function it(){const{maxT:t}=H(),l=ot(0),o=ot(t),n=o-l,r=Math.max(1,n*.1),f=Math.max(0,Math.round((l-r)*10)/10),s=Math.round((o+r)*10)/10;return{minL:f,maxL:s}}function ot(t){return e.liquidL0+(e.liquidL100-e.liquidL0)/100*t}function ct(){const{maxT:t}=H(),l=J(0),o=J(t),n=o-l,r=Math.max(.2,n*.1),f=Math.max(0,l-r),s=o+r,d=n<=2?.5:n<=4?1:2,p=[],u=Math.ceil(f/d)*d;for(let i=u;i<=s+.001;i+=d)p.push({value:i,label:i.toFixed(1),min:f,max:s});return{minR:f,maxR:s,ticks:p}}function J(t){return e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*t}function A(t){const{maxT:l}=t;let o=e.thermistorR25;for(let s=0;s<=l;s+=5){const d=s+273.15,p=e.thermistorR25*Math.exp(e.thermistorBeta*(1/d-1/298.15));o=Math.max(o,p)}o=Math.ceil(o*1.08*10)/10;const n=0,r=o<=12?2:4,f=[];for(let s=0;s<=o+.001;s+=r)f.push({value:s,label:s.toFixed(0),min:n,max:o});return{minR:n,maxR:o,ticks:f}}const L=a.querySelector("#tl-thermometerCanvas"),Y=L.getContext("2d"),nt=a.querySelector("#tl-graphCanvas"),tt=nt.getContext("2d"),K=window.devicePixelRatio||1;L.width=Q*K,L.height=at*K,Y.scale(K,K),nt.width=C*K,nt.height=I*K,tt.scale(K,K);function Ct(){e.iceCubes=[];for(let t=0;t<5;t++)e.iceCubes.push({x:60+Math.random()*120,y:200+Math.random()*15,size:12+Math.random()*8,angle:Math.random()*Math.PI,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.15});e.bubbles=[];for(let t=0;t<20;t++)e.bubbles.push({x:60+Math.random()*120,y:190+Math.random()*70,r:1+Math.random()*3.5,speedY:.8+Math.random()*1.5,phase:Math.random()*Math.PI*2,wobbleSpeed:.08+Math.random()*.08});e.heatWaves=[];for(let t=0;t<8;t++)e.heatWaves.push({x:65+Math.random()*110,y:190+Math.random()*60,length:15+Math.random()*15,speedY:.5+Math.random()*.6,opacity:.15+Math.random()*.25});e.steamParticles=[];for(let t=0;t<12;t++)e.steamParticles.push({x:60+Math.random()*120,y:175+Math.random()*10,r:2+Math.random()*4,vx:(Math.random()-.5)*.3,vy:-.4-Math.random()*.6,alpha:.2+Math.random()*.4})}const Lt=200,mt=11;function qt(){const t=Math.pow(e.bulbVolume/Lt,.3333333333333333);return mt*t}function $t(){if(e.thermometerType==="resistance"||e.thermometerType==="thermistor")return .35;const t=e.liquidType==="mercury"?1:8,l=.2+e.wallThickness*1.5,o=.4+e.bulbVolume*.003,n=1.35-e.capillaryBore*.45;return Math.max(.1,l*o*n*t*.15)}function zt(t){e.bathTemp<=8&&e.iceCubes.forEach(l=>{l.x+=l.speedX,l.y+=l.speedY,(l.x<65||l.x>175)&&(l.speedX*=-1),(l.y<195||l.y>210)&&(l.speedY*=-1)}),e.bathTemp>35&&e.heatWaves.forEach(l=>{l.y-=l.speedY*(1+e.bathTemp/100),l.y<185&&(l.y=265,l.x=65+Math.random()*110)}),e.bathTemp>=80&&e.bubbles.forEach(l=>{l.y-=l.speedY*(1+(e.bathTemp-80)/40),l.phase+=l.wobbleSpeed,l.x+=Math.sin(l.phase)*.3,l.y<185&&(l.y=260+Math.random()*10,l.x=60+Math.random()*120)}),e.bathTemp>=95&&e.steamParticles.forEach(l=>{l.x+=l.vx,l.y+=l.vy,l.alpha-=.005,(l.alpha<=0||l.y<130)&&(l.x=60+Math.random()*120,l.y=175+Math.random()*5,l.alpha=.2+Math.random()*.4)})}function Ft(t){let s=59,d=130,p=246;if(e.bathTemp<25){const m=e.bathTemp/25;s=Math.round(180-m*121),d=Math.round(210-m*80),p=Math.round(250-m*4)}else{const m=Math.min(1,(e.bathTemp-25)/125);s=Math.round(59+m*180),d=Math.round(130-m*100),p=Math.round(246-m*190)}if(e.bathTemp>40){const m=Math.min(1,(e.bathTemp-40)/100),q=Date.now()*.02;t.fillStyle=`rgba(239, 68, 68, ${m*.25})`,t.beginPath(),t.roundRect(45,284,150,10,4),t.fill(),t.fillStyle="rgba(249, 115, 22, 0.85)",t.beginPath(),t.moveTo(55+130/2-25,284);for(let b=-25;b<=25;b+=6){const x=m*(12+Math.sin(b*.4+q)*5);t.lineTo(55+130/2+b,284-x)}t.lineTo(55+130/2+25,284),t.closePath(),t.fill()}t.strokeStyle="#4b5563",t.lineWidth=2,t.fillStyle="#121214",t.beginPath(),t.roundRect(55,180,130,100,[0,0,10,10]),t.fill();const u=t.createLinearGradient(55,190,55,280);u.addColorStop(0,`rgba(${s}, ${d}, ${p}, 0.25)`),u.addColorStop(1,`rgba(${s}, ${d}, ${p}, 0.55)`),t.fillStyle=u,t.beginPath(),t.moveTo(55,190);const i=e.bathTemp>=80?2:.5,h=e.bathTemp>=80?.09:.03,y=Date.now()*h;for(let m=55;m<=185;m+=5){const q=190+Math.sin(m*.15+y)*i;t.lineTo(m,q)}t.lineTo(185,280),t.lineTo(55,280),t.closePath(),t.fill(),e.bathTemp>35&&(t.strokeStyle=`rgba(239, 68, 68, ${Math.min(.5,(e.bathTemp-35)/120)})`,t.lineWidth=1.2,e.heatWaves.forEach(m=>{t.beginPath(),t.moveTo(m.x,m.y),t.quadraticCurveTo(m.x+Math.sin(m.y*.06)*5,m.y-m.length/2,m.x,m.y-m.length),t.stroke()})),e.bathTemp<=8&&(t.fillStyle="rgba(224, 242, 254, 0.55)",t.strokeStyle="rgba(186, 230, 253, 0.8)",t.lineWidth=1,e.iceCubes.forEach(m=>{t.save(),t.translate(m.x,m.y),t.rotate(m.angle),t.beginPath(),t.roundRect(-m.size/2,-m.size/2,m.size,m.size,3),t.fill(),t.stroke(),t.restore()})),e.bathTemp>=80&&(t.fillStyle="rgba(255, 255, 255, 0.4)",t.strokeStyle="rgba(255, 255, 255, 0.65)",t.lineWidth=.6,e.bubbles.forEach(m=>{t.beginPath(),t.arc(m.x,m.y,m.r,0,Math.PI*2),t.fill(),t.stroke()})),e.bathTemp>=95&&e.steamParticles.forEach(m=>{t.fillStyle=`rgba(255, 255, 255, ${m.alpha})`,t.beginPath(),t.arc(m.x,m.y,m.r,0,Math.PI*2),t.fill()}),t.strokeStyle="#9ca3af",t.lineWidth=3.5,t.beginPath(),t.moveTo(54,180),t.lineTo(54,272),t.arcTo(54,281,65,281,8),t.lineTo(175,281),t.arcTo(186,281,186,272,8),t.lineTo(186,180),t.stroke(),t.strokeStyle="rgba(255, 255, 255, 0.4)",t.lineWidth=1.5,t.beginPath(),t.moveTo(59,190),t.lineTo(59,270),t.stroke()}function Rt(t,l,o){const n=l.split(" "),r=[];function f(d){if(t.measureText(d).width<=o){r.push(d);return}let p="";for(const u of d){const i=p+u;t.measureText(i).width>o&&p?(r.push(p),p=u):p=i}p&&r.push(p)}let s="";for(const d of n){const p=s?`${s} ${d}`:d;t.measureText(p).width<=o||!s?s=p:(f(s),s=d)}return s&&f(s),r.length?r:[l]}function Z(t,l,o,n,r,f,s="left"){if(!e.showLabels)return;t.font="bold 9px system-ui, sans-serif";const d=11,p=5,u=3,i=Math.max(40,s==="left"?$-n-S:n-S),h=Rt(t,f,i),y=h.map(M=>t.measureText(M).width),m=Math.max(...y)+p*2,q=h.length*d+u*2;let b=s==="left"?n:n-m;b=Math.max(S,Math.min(b,$-m-S));const x=r-q/2,N=s==="left"?b:b+m;t.strokeStyle="rgba(6, 182, 212, 0.7)",t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.moveTo(l,o),t.lineTo(N,r),t.stroke(),t.setLineDash([]),t.fillStyle="#06b6d4",t.beginPath(),t.arc(l,o,3,0,Math.PI*2),t.fill(),t.fillStyle="rgba(21, 21, 24, 0.9)",t.strokeStyle="#06b6d4",t.lineWidth=1,t.beginPath(),t.roundRect(b,x,m,q,4),t.fill(),t.stroke(),t.fillStyle="#f4f4f5",t.textAlign="center",t.textBaseline="middle",h.forEach((M,F)=>{const R=x+u+d*(F+.5);t.fillText(M,b+m/2,R)})}function Mt(t){const n=qt(),r=250+Math.max(0,n-mt)*.35,f=r-n-1,s=10+e.wallThickness*8,d=120-s/2,p=120+s/2,u=t.createLinearGradient(d,20,p,20);u.addColorStop(0,"rgba(209, 213, 219, 0.85)"),u.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),u.addColorStop(.5,"rgba(243, 244, 246, 0.15)"),u.addColorStop(.8,"rgba(255, 255, 255, 0.95)"),u.addColorStop(1,"rgba(156, 163, 175, 0.9)"),t.fillStyle=u,t.strokeStyle="rgba(156, 163, 175, 0.8)",t.lineWidth=1,t.beginPath(),t.moveTo(d,f),t.lineTo(d,25),t.arcTo(d,20,d+5,20,5),t.arcTo(p,20,p,25,5),t.lineTo(p,f),t.closePath(),t.fill(),t.stroke();const i=t.createRadialGradient(120-n*.2,r-n*.2,n*.1,120,r,n);i.addColorStop(0,"rgba(255, 255, 255, 0.8)"),i.addColorStop(1,"rgba(156, 163, 175, 0.35)"),t.fillStyle=i,t.strokeStyle="#6b7280",t.lineWidth=.8+e.wallThickness*.6,t.beginPath(),t.arc(120,r,n+.5+e.wallThickness*.5,0,Math.PI*2),t.fill(),t.stroke();const h=Math.min(s*.72,.8+e.capillaryBore*4.5);t.fillStyle="#0a0a0c",t.fillRect(120-h/2,28,h,f-20-8);const y=e.liquidType==="mercury",m=y?"#a1a1aa":"#ef4444",q=y?"#f4f4f5":"#fee2e2",b=210,x=220,M=(b-40)/x,F=b-Math.min(x,e.thermometerTemp)*M;t.fillStyle=m,t.fillRect(120-h/2,F,h,f-F),t.beginPath(),t.ellipse(120,F,h/2,1.5,0,0,Math.PI*2),t.fill(),t.fillStyle=q,t.fillRect(120-h/6,F,h/3,f-F);const R=n*.9,P=t.createRadialGradient(120-R*.2,r-R*.2,R*.1,120,r,R);y?(P.addColorStop(0,"#f4f4f5"),P.addColorStop(.3,"#d4d4d8"),P.addColorStop(.8,"#71717a"),P.addColorStop(1,"#3f3f46")):(P.addColorStop(0,"#fee2e2"),P.addColorStop(.2,"#fca5a5"),P.addColorStop(.7,"#ef4444"),P.addColorStop(1,"#991b1b")),t.fillStyle=P,t.beginPath(),t.arc(120,r,R,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(161, 161, 170, 0.6)",t.lineWidth=.5,t.font="6.5px Arial",t.fillStyle="#a1a1aa",t.textAlign="right",t.textBaseline="middle";for(let B=0;B<=200;B+=50){const O=b-B*M;t.beginPath(),t.moveTo(d,O),t.lineTo(d+4,O),t.stroke(),t.fillText(`${B}°C`,d-22,O+2.5)}e.showLabels&&(Z(t,d+1,80,T,50,c("tools.thermometerLab.labels.thinWall"),"left"),Z(t,120,F,v,F-15,c("tools.thermometerLab.labels.meniscus"),"right"),Z(t,120-h/2,130,T,130,c("tools.thermometerLab.labels.narrowBore"),"left"),Z(t,120,r,v,r+15,c("tools.thermometerLab.labels.largeBulb"),"right"))}function Pt(t){const s=t.createLinearGradient(115,20,125,20);s.addColorStop(0,"#71717a"),s.addColorStop(.3,"#f4f4f5"),s.addColorStop(.7,"#d4d4d8"),s.addColorStop(1,"#3f3f46"),t.fillStyle=s,t.strokeStyle="#4b5563",t.lineWidth=1,t.beginPath(),t.roundRect(115,20,10,225,[0,0,4,4]),t.fill(),t.stroke(),t.fillStyle="rgba(21, 21, 24, 0.8)",t.fillRect(117,200,6,40),t.strokeStyle="#e2e8f0",t.lineWidth=1.2,t.beginPath();let d=205;t.moveTo(118,d);for(let y=0;y<8;y++)d+=4,t.lineTo(122,d),d+=4,t.lineTo(118,d);t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(118,20),t.bezierCurveTo(110,5,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(122,20),t.bezierCurveTo(130,8,210,45,245,75),t.stroke();const p=245,u=40,i=135,h=90;t.fillStyle="#18181b",t.strokeStyle="#6366f1",t.lineWidth=2.5,t.beginPath(),t.roundRect(p,u,i,h,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(p+10,u+12,i-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#10b981",t.textAlign="right",t.fillText(e.currentResistance.toFixed(2)+" Ω",p+i-16,u+34),t.font="6px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText("PLATINUM RTD METER",p+14,u+21),e.showLabels&&(Z(t,116,100,T,70,c("tools.thermometerLab.labels.metalSheath"),"left"),Z(t,120,225,v,205,c("tools.thermometerLab.labels.platinumCoil"),"right"))}function Et(t){t.strokeStyle="#111827",t.lineWidth=1.2,t.beginPath(),t.moveTo(118,20),t.lineTo(118,245),t.stroke(),t.beginPath(),t.moveTo(122,20),t.lineTo(122,245),t.stroke();const r=20,f=225,s=12,d=120-s/2,p=t.createLinearGradient(d,r,d+s,r);p.addColorStop(0,"rgba(229, 231, 235, 0.4)"),p.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),p.addColorStop(.7,"rgba(243, 244, 246, 0.5)"),p.addColorStop(1,"rgba(209, 213, 219, 0.6)"),t.fillStyle=p,t.strokeStyle="rgba(156, 163, 175, 0.6)",t.lineWidth=.8,t.beginPath(),t.roundRect(d,r,s,f-r,[0,0,3,3]),t.fill(),t.stroke();const u=7,i=t.createRadialGradient(120-u*.2,245-u*.2,u*.1,120,245,u);i.addColorStop(0,"#6b7280"),i.addColorStop(.7,"#1f2937"),i.addColorStop(1,"#09090b"),t.fillStyle=i,t.strokeStyle="#030712",t.lineWidth=1.2,t.beginPath(),t.arc(120,245,u,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(118,20),t.bezierCurveTo(110,5,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(122,20),t.bezierCurveTo(130,8,210,45,245,75),t.stroke();const h=245,y=40,m=135,q=90;t.fillStyle="#18181b",t.strokeStyle="#10b981",t.lineWidth=2.5,t.beginPath(),t.roundRect(h,y,m,q,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(h+10,y+12,m-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#34d399",t.textAlign="right",t.fillText(e.currentThermistorR.toFixed(2)+" kΩ",h+m-16,y+34),t.font="5px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText(c("tools.thermometerLab.thermistor.meterLabelLine1"),h+14,y+52),t.fillText(c("tools.thermometerLab.thermistor.meterLabelLine2"),h+14,y+59),e.showLabels&&(Z(t,118,120,T,90,c("tools.thermometerLab.labels.leads"),"left"),Z(t,120,245,v,225,c("tools.thermometerLab.labels.semiconductorBead"),"right"))}function ft(t,l,o,n,r,f,s,d,p){const{gx:u,gy:i,gw:h,gh:y,tickFont:m}=l;t.strokeStyle="rgba(255, 255, 255, 0.2)",t.lineWidth=1,t.setLineDash([4,4]),t.beginPath(),t.moveTo(o,n),t.lineTo(o,i+y),t.stroke(),t.beginPath(),t.moveTo(o,n),t.lineTo(u,n),t.stroke(),t.setLineDash([]);const q=i+y+10;t.font=m,t.textAlign="center",t.textBaseline="top";const b=`${r.toFixed(1)}${s}`,x=t.measureText(b).width+10,N=18;t.fillStyle=p,t.beginPath(),t.roundRect(o-x/2,q-2,x,N,3),t.fill(),t.fillStyle="#000",t.fillText(b,o,q),t.textAlign="right",t.textBaseline="middle";const M=`${f.toFixed(2)} ${d}`,F=t.measureText(M).width+10;t.fillStyle=p,t.beginPath(),t.roundRect(u-F-2,n-7,F,15,3),t.fill(),t.fillStyle="#000",t.fillText(M,u-7,n)}function Gt(t){const l=G(),{minL:o,maxL:n}=it(),{minT:r,maxT:f,tickStep:s}=H(),d=rt(o,n),p=V(t,l,r,f,s,d,e.thermometerTemp),{gx:u,gy:i,gw:h,gh:y,axisFont:m,yLabelX:q,xLabelY:b,dotR:x}={...l,...p};t.save(),t.translate(q,i+y/2),t.rotate(-Math.PI/2),t.font=m,t.fillStyle="#e4e4e7",t.fillText("Length of liquid column / cm",0,0),t.restore(),t.font=m,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",u+h/2,b);const N=f,M=z(0,r,f,u,h),F=w(ot(0),o,n,i,y),R=z(N,r,f,u,h),P=w(ot(N),o,n,i,y);t.strokeStyle="#ef4444",t.lineWidth=3,t.beginPath(),t.moveTo(M,F),t.lineTo(R,P),t.stroke();const B=e.thermometerTemp,O=e.currentLength;if(B>=r&&B<=f){const X=z(B,r,f,u,h),st=w(O,o,n,i,y);ft(t,l,X,st,B,O,"°C","cm","#ef4444"),t.shadowColor="#ef4444",t.shadowBlur=10,t.fillStyle="#ef4444",t.beginPath(),t.arc(X,st,x,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function At(t){const l=G(),{minR:o,maxR:n,ticks:r}=ct(),f=H(),s=V(t,l,f.minT,f.maxT,f.tickStep,r,e.thermometerTemp),{gx:d,gy:p,gw:u,gh:i,axisFont:h,yLabelX:y,xLabelY:m,dotR:q}={...l,...s};t.save(),t.translate(y,p+i/2),t.rotate(-Math.PI/2),t.font=h,t.fillStyle="#e4e4e7",t.fillText("Resistance of platinum / Ω",0,0),t.restore(),t.font=h,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",d+u/2,m);const{minT:b,maxT:x}=f,N=x,M=z(0,b,x,d,u),F=w(J(0),o,n,p,i),R=z(N,b,x,d,u),P=w(J(N),o,n,p,i);t.strokeStyle="#6366f1",t.lineWidth=3,t.beginPath(),t.moveTo(M,F),t.lineTo(R,P),t.stroke();const B=e.thermometerTemp,O=e.currentResistance;if(B>=b&&B<=x){const X=z(B,b,x,d,u),st=w(O,o,n,p,i);ft(t,l,X,st,B,O,"°C","Ω","#6366f1"),t.shadowColor="#6366f1",t.shadowBlur=10,t.fillStyle="#6366f1",t.beginPath(),t.arc(X,st,q,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function Bt(t){const l=G(),o=H(),{minR:n,maxR:r,ticks:f}=A(o),s=V(t,l,o.minT,o.maxT,o.tickStep,f,e.thermometerTemp),{gx:d,gy:p,gw:u,gh:i,axisFont:h,yLabelX:y,xLabelY:m,dotR:q}={...l,...s},{minT:b,maxT:x}=o;t.save(),t.translate(y,p+i/2),t.rotate(-Math.PI/2),t.font=h,t.fillStyle="#e4e4e7",t.fillText("Resistance of thermistor / kΩ",0,0),t.restore(),t.font=h,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",d+u/2,m),t.strokeStyle="#10b981",t.lineWidth=3,t.beginPath();let N=!1;for(let R=b;R<=x;R+=1){const P=R+273.15,B=e.thermistorR25*Math.exp(e.thermistorBeta*(1/P-1/298.15)),O=z(R,b,x,d,u),X=w(Math.min(r,B),n,r,p,i);X>=p&&X<=p+i&&(N?t.lineTo(O,X):(t.moveTo(O,X),N=!0))}t.stroke();const M=e.thermometerTemp,F=e.currentThermistorR;if(M>=b&&M<=x){const R=z(M,b,x,d,u),P=w(Math.min(r,F),n,r,p,i);ft(t,l,R,P,M,F,"°C","kΩ","#10b981"),t.shadowColor="#10b981",t.shadowBlur=10,t.fillStyle="#10b981",t.beginPath(),t.arc(R,P,q,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function bt(){Y.clearRect(0,0,Q,at),tt.clearRect(0,0,C,I),Y.save(),Y.translate(k,0),Ft(Y),e.thermometerType==="liquid"?Mt(Y):e.thermometerType==="resistance"?Pt(Y):Et(Y),Y.restore(),e.thermometerType==="liquid"?Gt(tt):e.thermometerType==="resistance"?At(tt):Bt(tt)}function It(){const{sm:t,md:l,lg:o,xs:n,sub:r}=D,f=a.querySelector("#tl-svg-formula-liquid");f&&(f.innerHTML=`
        <svg height="50" width="240" style="background:transparent; overflow:visible;">
          <line x1="10" y1="26" x2="100" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="55" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">L<tspan dy="2" font-size="${r}">100</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="${r}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="55" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="130" y1="26" x2="220" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="175" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">L<tspan dy="2" font-size="${r}">T</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="${r}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="175" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>
        </svg>
      `);const s=a.querySelector("#tl-svg-formula-liquid-sub");if(s){const h=e.liquidL100-e.liquidL0,y=e.currentLength-e.liquidL0;s.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.liquidL100.toFixed(1)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">${e.currentLength.toFixed(2)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>

          <line x1="10" y1="68" x2="90" y2="68" stroke="#fff" stroke-width="1.2" />
          <text x="50" y="60" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">${y.toFixed(2)} &times; 100</text>
          <text x="50" y="82" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${h.toFixed(1)}</text>
          
          <text x="105" y="73" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="${o}" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const d=a.querySelector("#tl-svg-formula-resistance");d&&(d.innerHTML=`
        <svg height="50" width="240" style="background:transparent; overflow:visible;">
          <line x1="10" y1="26" x2="100" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="55" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">R<tspan dy="2" font-size="${r}">100</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="${r}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="55" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="130" y1="26" x2="220" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="175" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">R<tspan dy="2" font-size="${r}">T</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="${r}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="175" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>
        </svg>
      `);const p=a.querySelector("#tl-svg-formula-resistance-sub");if(p){const h=e.resistanceR100-e.resistanceR0,y=e.currentResistance-e.resistanceR0;p.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">${e.currentResistance.toFixed(2)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>

          <line x1="10" y1="68" x2="90" y2="68" stroke="#fff" stroke-width="1.2" />
          <text x="50" y="60" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">${y.toFixed(2)} &times; 100</text>
          <text x="50" y="82" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${h.toFixed(1)}</text>
          
          <text x="105" y="73" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="${o}" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const u=a.querySelector("#tl-svg-formula-thermistor");u&&(u.innerHTML=`
        <svg height="50" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">T =</text>
          <line x1="40" y1="23" x2="220" y2="23" stroke="#fff" stroke-width="1.5" />
          <text x="130" y="15" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">1</text>
          <text x="130" y="38" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${n}" text-anchor="middle">(1/&beta;) &bull; ln(R<tspan dy="2" font-size="${r}">T</tspan><tspan dy="-2">/R</tspan><tspan dy="2" font-size="${r}">25</tspan><tspan dy="-2">) + 1/298.15</tspan></text>
          <text x="230" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">- 273.15</text>
        </svg>
      `);const i=a.querySelector("#tl-svg-formula-thermistor-sub");if(i){const h=e.thermometerTemp+273.15;i.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">
            T<tspan dy="3" font-size="${r}">K</tspan><tspan dy="-3" fill="#10b981" font-weight="bold"> = ${h.toFixed(2)} K</tspan>
            <tspan fill="#fff"> &rArr; T = </tspan>
            <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${e.thermometerTemp.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `}}function Ht(){const t=a.querySelector("#tl-faulty-svg-container");if(!t)return;const{cf:l,cu:o,interval:n}=gt(),r=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,f=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,s=a.querySelector("#tl-pane-q10a").classList.contains("active"),d=s?(r-l)/n*100:f,p=s?r:f/100*n+l,i=(h=>130-h/100*80)(d);t.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <!-- Left Scale: True Scale -->
        <g transform="translate(0, 0)">
          <!-- Glass Tube -->
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="84" y="${i}" width="4" height="${144-i}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          
          <!-- Ticks -->
          <!-- Ice Point 0°C -->
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          
          <!-- Steam Point 100°C -->
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>

          <!-- Current Point -->
          <text x="65" y="${i+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${d.toFixed(1)}°C</text>

          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${c("tools.thermometerLab.faulty.trueScale")}</text>
        </g>

        <!-- Right Scale: Faulty Scale -->
        <g transform="translate(130, 0)">
          <!-- Glass Tube -->
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="104" y="${i}" width="4" height="${144-i}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          
          <!-- Ticks -->
          <!-- Faulty Ice Point Cf -->
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${l.toFixed(1)}°C</tspan></text>
          
          <!-- Faulty Steam Point Cu -->
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${o.toFixed(1)}°C</tspan></text>

          <!-- Current Faulty Point -->
          <text x="125" y="${i+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${p.toFixed(1)}°C</text>

          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${c("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>

        <!-- Connecting Ratio Indicator Line -->
        <line x1="86" y1="${i}" x2="236" y2="${i}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${i}" r="3" fill="#34d399" />
        <circle cx="236" cy="${i}" r="3" fill="#34d399" />
      </svg>
    `}function Wt(t){a.querySelector("#tl-bath-temp-display").innerHTML=e.bathTemp.toFixed(1)+"°C",a.querySelector("#tl-val-bath-temp").innerHTML=e.bathTemp.toFixed(1)+" °C";const l=a.querySelector("#tl-bath-state");e.bathTemp<=0?l.textContent="Melting Ice Bath":e.bathTemp>=100?l.textContent="Boiling Water/Steam":e.bathTemp===150?l.textContent="Hot Cooking Oil":l.textContent="Liquid Water",a.querySelector("#tl-val-response-time").textContent=t.toFixed(2)+" s";const o=a.querySelector("#tl-alcohol-boiling-warning");e.thermometerType==="liquid"&&e.liquidType==="alcohol"&&e.bathTemp>=78?o.style.display="block":o.style.display="none",e.thermometerType==="liquid"?(a.querySelector("#tl-live-liquid-lt").textContent=e.currentLength.toFixed(2)+" cm",a.querySelector("#tl-live-liquid-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):e.thermometerType==="resistance"?(a.querySelector("#tl-live-resistance-rt").textContent=e.currentResistance.toFixed(2)+" Ω",a.querySelector("#tl-live-resistance-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):a.querySelector("#tl-live-thermistor-rt").textContent=e.currentThermistorR.toFixed(2)+" kΩ",It()}let dt=null;function ht(t){e.lastTimestamp||(e.lastTimestamp=t);const l=(t-e.lastTimestamp)/1e3;e.lastTimestamp=t;const o=Math.min(l,.1),n=$t(),r=o/n*(e.bathTemp-e.thermometerTemp);e.thermometerTemp+=r,e.currentLength=e.liquidL0+(e.liquidL100-e.liquidL0)/100*e.thermometerTemp,e.currentResistance=e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*e.thermometerTemp;const f=e.thermometerTemp+273.15;e.currentThermistorR=e.thermistorR25*Math.exp(e.thermistorBeta*(1/f-1/298.15)),zt(),bt(),Wt(n),dt=requestAnimationFrame(ht)}function gt(){const t=parseFloat(a.querySelector("#tl-input-faulty-cf").value),l=parseFloat(a.querySelector("#tl-input-faulty-cu").value),o=Number.isFinite(t)?t:-1.5,n=Number.isFinite(l)?l:105,r=n-o;return{cf:o,cu:n,interval:r}}function ut(t){const l=Math.round(t*100)/100;return l>=0?l.toFixed(1):`(${l.toFixed(1)})`}function et(){if(!a.querySelector("#tl-input-faulty-cf"))return;const{cf:t,cu:l,interval:o}=gt(),n=a.querySelector("#tl-val-faulty-interval"),r=a.querySelector("#tl-faulty-error-a"),f=a.querySelector("#tl-faulty-error-b"),s=Math.abs(o)<.01;n.textContent=o.toFixed(1)+" °C";const d=a.querySelector("#tl-svg-formula-faulty-a"),p=a.querySelector("#tl-svg-formula-faulty-b");if(s){r.hidden=!1,r.textContent="C_u must differ from C_f (interval cannot be zero).",f.hidden=!1,f.textContent=r.textContent,d&&(d.innerHTML=""),p&&(p.innerHTML="");return}r.hidden=!0,f.hidden=!0;const u=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,i=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,h=(u-t)/o*100,y=i/100*o+t;d&&(d.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${u.toFixed(1)} - ${ut(t)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${l.toFixed(1)} - ${ut(t)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${h.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),p&&(p.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${i.toFixed(1)} &times; ${o.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${ut(t)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${y.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),Ht()}function Yt(){const{sm:t,md:l,sub:o}=D,n=e.thermometerTemp,r=e.liquidL100-e.liquidL0,f=e.liquidL0+r/100*n,s=a.querySelector("#tl-svg-formula-t-to-l");s&&(s.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.liquidL100.toFixed(1)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">L<tspan dy="2" font-size="${o}">T</tspan><tspan dy="-2"> - ${e.liquidL0.toFixed(1)}</tspan></text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${n.toFixed(1)} - 0</text>

          <text x="10" y="73" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}">L<tspan dy="2" font-size="${o}">T</tspan><tspan dy="-2"> = ${e.liquidL0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${r.toFixed(1)} / 100)</tspan> &times; ${n.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${f.toFixed(2)} cm</tspan>
          </text>
        </svg>
      `)}function Nt(){const{sm:t,md:l,sub:o}=D,n=e.thermometerTemp,r=e.resistanceR100-e.resistanceR0,f=e.resistanceR0+r/100*n,s=a.querySelector("#tl-svg-formula-t-to-r");s&&(s.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">R<tspan dy="2" font-size="${o}">T</tspan><tspan dy="-2"> - ${e.resistanceR0.toFixed(1)}</tspan></text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${n.toFixed(1)} - 0</text>

          <text x="10" y="73" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}">R<tspan dy="2" font-size="${o}">T</tspan><tspan dy="-2"> = ${e.resistanceR0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${r.toFixed(1)} / 100)</tspan> &times; ${n.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${f.toFixed(2)} Ω</tspan>
          </text>
        </svg>
      `)}function W(){et(),Yt(),Nt()}function pt(t,l){a.querySelector("#"+t).addEventListener("click",()=>{e.bathTemp=l,a.querySelector("#tl-bath-temp-slider").value=l,W()})}function yt(t){a.querySelectorAll(".tl-tab-btn").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tl-tab")===t)}),a.querySelectorAll(".tl-tab-content").forEach(l=>{l.classList.toggle("active",l.id==="tl-tab-"+t)}),a.querySelectorAll(".tl-live-tab").forEach(l=>{l.classList.toggle("active",l.id==="tl-live-"+t)}),e.thermometerType=t}function _t(){var s,d,p,u;a.querySelectorAll(".tl-tab-btn").forEach(i=>{i.addEventListener("click",()=>{yt(i.getAttribute("data-tl-tab")),W()})}),a.querySelector("#tl-btn-toggle-labels").addEventListener("click",()=>{e.showLabels=!e.showLabels,a.querySelector("#tl-lbl-toggle-labels").textContent=e.showLabels?c("tools.thermometerLab.labels.hide"):c("tools.thermometerLab.labels.show")}),a.querySelector("#tl-bath-temp-slider").addEventListener("input",i=>{e.bathTemp=parseFloat(i.target.value),W()}),pt("tl-btn-preset-ice",0),pt("tl-btn-preset-room",25),pt("tl-btn-preset-steam",100),pt("tl-btn-preset-oil",150),a.querySelector("#tl-card-mercury").addEventListener("click",()=>{e.liquidType="mercury",a.querySelector("#tl-card-mercury").className="tl-seg-btn active-mercury",a.querySelector("#tl-card-alcohol").className="tl-seg-btn",W()}),a.querySelector("#tl-card-alcohol").addEventListener("click",()=>{e.liquidType="alcohol",a.querySelector("#tl-card-mercury").className="tl-seg-btn",a.querySelector("#tl-card-alcohol").className="tl-seg-btn active-alcohol",W()}),E(a.querySelector("#tl-slider-bulb-vol"),a.querySelector("#tl-input-bulb-vol"),{min:10,max:1e3,step:10,decimals:0,onUpdate:i=>{e.bulbVolume=i}}),E(a.querySelector("#tl-slider-wall-thick"),a.querySelector("#tl-input-wall-thick"),{min:.05,max:3,step:.05,decimals:2,onUpdate:i=>{e.wallThickness=i}}),E(a.querySelector("#tl-slider-capillary-bore"),a.querySelector("#tl-input-capillary-bore"),{min:.05,max:2,step:.05,decimals:2,onUpdate:i=>{e.capillaryBore=i}}),E(a.querySelector("#tl-slider-liquid-l0"),a.querySelector("#tl-input-liquid-l0"),{min:.5,max:15,step:.1,decimals:1,onUpdate:i=>{e.liquidL0=i,W()}}),E(a.querySelector("#tl-slider-liquid-l100"),a.querySelector("#tl-input-liquid-l100"),{min:5,max:30,step:.1,decimals:1,onUpdate:i=>{e.liquidL100=i,W()}}),E(a.querySelector("#tl-slider-resistance-r0"),a.querySelector("#tl-input-resistance-r0"),{min:.5,max:20,step:.1,decimals:1,onUpdate:i=>{e.resistanceR0=i,a.querySelector("#tl-spec-resistance-r0").textContent=i.toFixed(1)+" Ω",W()}}),E(a.querySelector("#tl-slider-resistance-r100"),a.querySelector("#tl-input-resistance-r100"),{min:2,max:30,step:.1,decimals:1,onUpdate:i=>{e.resistanceR100=i,a.querySelector("#tl-spec-resistance-r100").textContent=i.toFixed(1)+" Ω",W()}}),E(a.querySelector("#tl-slider-thermistor-r25"),a.querySelector("#tl-input-thermistor-r25"),{min:.5,max:50,step:.1,decimals:1,onUpdate:i=>{e.thermistorR25=i,a.querySelector("#tl-spec-thermistor-r25").textContent=i.toFixed(1)+" kΩ",W()}}),E(a.querySelector("#tl-slider-thermistor-beta"),a.querySelector("#tl-input-thermistor-beta"),{min:1e3,max:8e3,step:50,decimals:0,onUpdate:i=>{e.thermistorBeta=i,a.querySelector("#tl-spec-thermistor-beta").textContent=i+" K",W()}});const o=a.querySelector("#tl-btn-solve-q10a"),n=a.querySelector("#tl-btn-solve-q10b");o&&n&&(o.addEventListener("click",()=>{o.classList.add("active"),n.classList.remove("active"),a.querySelector("#tl-pane-q10a").classList.add("active"),a.querySelector("#tl-pane-q10b").classList.remove("active"),et()}),n.addEventListener("click",()=>{o.classList.remove("active"),n.classList.add("active"),a.querySelector("#tl-pane-q10a").classList.remove("active"),a.querySelector("#tl-pane-q10b").classList.add("active"),et()})),(s=a.querySelector("#tl-input-faulty-cf"))==null||s.addEventListener("input",et),(d=a.querySelector("#tl-input-faulty-cu"))==null||d.addEventListener("input",et),(p=a.querySelector("#tl-input-q10a-cm"))==null||p.addEventListener("input",et),(u=a.querySelector("#tl-input-q10b-t"))==null||u.addEventListener("input",et);const r=a.querySelector("#tl-input-t-to-l");r&&r.addEventListener("input",W);const f=a.querySelector("#tl-input-t-to-r");f&&f.addEventListener("input",W)}if(g.type){const t=a.querySelector(".tl-tabs-container");t&&(t.style.display="none")}yt(U),Ct(),_t(),W();const xt=a.querySelector(".tl-dash"),vt=a.querySelector(".tl-controls"),wt=a.querySelector("#tl-controls-toggle"),Dt=a.querySelector("#tl-controls-drag"),Ot=a.querySelector(".tl-controls-float-bar");return xt&&vt&&wt&&kt({container:xt,panel:vt,toggleBtn:wt,dragHandle:Dt,dragSurface:Ot,storageKey:`s3phy-thermo-${U}`,breakpoint:1024,getToggleTitle:t=>c(t?"tools.floatingControls.showParams":"tools.floatingControls.hideParams"),onLayoutChange:()=>bt()}),dt=requestAnimationFrame(ht),a._thermometerLabCleanup=()=>{dt&&cancelAnimationFrame(dt)},a}function Kt(c){St();const g=document.createElement("div");g.className="tl-wrap tl-wrap--faulty-cal",g.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${c("tools.faultyCalibration.title")}</h2>
      <div class="tl-sub">${c("tools.faultyCalibration.subtitle")}</div>
    </div>
    <div class="tl-dash tl-dash--faulty">
      <section class="tl-faulty-hero">
        <div class="tl-info-card" style="margin:0">
          <div class="tl-info-label">${c("tools.faultyCalibration.formulaTitle")}</div>
          <p style="margin:0;font-size:0.82rem">T / 100 = (C − C<sub>f</sub>) / (C<sub>u</sub> − C<sub>f</sub>)</p>
        </div>
        <div class="tl-info-label" style="font-size:0.78rem;color:var(--tl-muted);margin:0;">${c("tools.thermometerLab.faulty.dualScale")}</div>
        <div id="fsc-faulty-svg-container" class="tl-faulty-hero-viz"></div>
      </section>

      <section class="tl-faulty-live">
        <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-cyan)">${c("tools.faultyCalibration.liveLabel")}</div>
        <div id="fsc-pane-q10a" class="tl-solver-pane active">
          <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15);margin:0">
            <div id="fsc-svg-formula-faulty-a" class="tl-math-formula" style="font-size:0.85rem"></div>
          </div>
        </div>
        <div id="fsc-pane-q10b" class="tl-solver-pane">
          <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15);margin:0">
            <div id="fsc-svg-formula-faulty-b" class="tl-math-formula" style="font-size:0.85rem"></div>
          </div>
        </div>
      </section>

      <div class="tl-controls controls-collapsed">
        <div class="tl-controls-float-bar">
          <button type="button" class="tl-controls-drag-handle" id="fsc-controls-drag" aria-label="${c("tools.floatingControls.dragHint")}" title="${c("tools.floatingControls.dragHint")}">⋮⋮</button>
          <button type="button" class="tl-controls-toggle" id="fsc-controls-toggle" aria-expanded="false">
            <span data-float-chevron>▾</span>
            <span>${c("tools.thermometerLab.paramSettings")}</span>
          </button>
        </div>
        <div class="tl-controls-body">
          <p style="font-size:0.75rem;color:var(--tl-muted);margin:0 0 8px">${c("tools.faultyCalibration.intro")}</p>
          <div class="tl-faulty-cal">
            <div class="tl-calc-inputs">
              <span>${c("tools.faultyCalibration.iceReading")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-faulty-cf" value="-1.5" step="0.1" class="tl-calc-input" aria-label="Ice point faulty reading">
                <span class="tl-unit">°C</span>
              </div>
            </div>
            <div class="tl-calc-inputs">
              <span>${c("tools.faultyCalibration.steamReading")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-faulty-cu" value="105" step="0.1" class="tl-calc-input" aria-label="Steam point faulty reading">
                <span class="tl-unit">°C</span>
              </div>
            </div>
          </div>
          <div class="tl-faulty-interval">
            <span>${c("tools.faultyCalibration.interval")}</span>
            <b id="fsc-val-faulty-interval">106.5 °C</b>
          </div>
          <div class="tl-solver-tabs">
            <button class="tl-solver-tab-btn active" id="fsc-btn-solve-q10a">${c("tools.faultyCalibration.findTrueTemp")}</button>
            <button class="tl-solver-tab-btn" id="fsc-btn-solve-q10b">${c("tools.faultyCalibration.findFaultyReading")}</button>
          </div>
          <div id="fsc-input-pane-q10a" class="tl-solver-pane active">
            <div class="tl-calc-inputs">
              <span>${c("tools.faultyCalibration.faultyReadingC")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-q10a-cm" value="25.0" step="0.5" class="tl-calc-input">
                <span class="tl-unit">°C</span>
              </div>
            </div>
            <p class="tl-solver-error" id="fsc-faulty-error-a" hidden></p>
          </div>
          <div id="fsc-input-pane-q10b" class="tl-solver-pane">
            <div class="tl-calc-inputs">
              <span>${c("tools.faultyCalibration.trueTempT")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-q10b-t" value="70.0" step="1.0" class="tl-calc-input">
                <span class="tl-unit">°C</span>
              </div>
            </div>
            <p class="tl-solver-error" id="fsc-faulty-error-b" hidden></p>
          </div>
        </div>
      </div>
    </div>
  `;function U(S){const T=Math.round(S*100)/100;return T>=0?T.toFixed(1):`(${T.toFixed(1)})`}function j(){const S=parseFloat(g.querySelector("#fsc-input-faulty-cf").value),T=parseFloat(g.querySelector("#fsc-input-faulty-cu").value),k=Number.isFinite(S)?S:-1.5,$=Number.isFinite(T)?T:105,v=$-k;return{cf:k,cu:$,interval:v}}function _(){const S=g.querySelector("#fsc-faulty-svg-container");if(!S)return;const{cf:T,cu:k,interval:$}=j(),v=parseFloat(g.querySelector("#fsc-input-q10a-cm").value)||0,C=parseFloat(g.querySelector("#fsc-input-q10b-t").value)||0,I=g.querySelector("#fsc-input-pane-q10a").classList.contains("active"),G=I?(v-T)/$*100:C,H=I?v:C/100*$+T,z=V=>130-V/100*80,w=Number.isFinite(G)?z(G):130;S.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <g transform="translate(0, 0)">
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <rect x="84" y="${w}" width="4" height="${144-w}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>
          <text x="65" y="${w+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${Number.isFinite(G)?G.toFixed(1):"—"}°C</text>
          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${c("tools.thermometerLab.faulty.trueScale")}</text>
        </g>
        <g transform="translate(130, 0)">
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <rect x="104" y="${w}" width="4" height="${144-w}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${T.toFixed(1)}°C</tspan></text>
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${k.toFixed(1)}°C</tspan></text>
          <text x="125" y="${w+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${Number.isFinite(H)?H.toFixed(1):"—"}°C</text>
          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${c("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>
        <line x1="86" y1="${w}" x2="236" y2="${w}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${w}" r="3" fill="#34d399" />
        <circle cx="236" cy="${w}" r="3" fill="#34d399" />
      </svg>
    `}function a(S){const T=S==="a";g.querySelector("#fsc-btn-solve-q10a").classList.toggle("active",T),g.querySelector("#fsc-btn-solve-q10b").classList.toggle("active",!T),g.querySelector("#fsc-input-pane-q10a").classList.toggle("active",T),g.querySelector("#fsc-input-pane-q10b").classList.toggle("active",!T),g.querySelector("#fsc-pane-q10a").classList.toggle("active",T),g.querySelector("#fsc-pane-q10b").classList.toggle("active",!T),e()}function e(){const{cf:S,cu:T,interval:k}=j(),$=g.querySelector("#fsc-val-faulty-interval"),v=g.querySelector("#fsc-faulty-error-a"),C=g.querySelector("#fsc-faulty-error-b"),I=g.querySelector("#fsc-svg-formula-faulty-a"),G=g.querySelector("#fsc-svg-formula-faulty-b"),H=Math.abs(k)<.01,z=c("tools.faultyCalibration.invalidInterval");if($.textContent=k.toFixed(1)+" °C",H){v.hidden=!1,v.textContent=z,C.hidden=!1,C.textContent=z,I&&(I.innerHTML=""),G&&(G.innerHTML=""),_();return}v.hidden=!0,C.hidden=!0;const w=parseFloat(g.querySelector("#fsc-input-q10a-cm").value)||0,V=parseFloat(g.querySelector("#fsc-input-q10b-t").value)||0,rt=(w-S)/k*100,it=V/100*k+S;I&&(I.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${w.toFixed(1)} - ${U(S)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${T.toFixed(1)} - ${U(S)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${rt.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),G&&(G.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${V.toFixed(1)} &times; ${k.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${U(S)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${it.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),_()}g.querySelector("#fsc-btn-solve-q10a").addEventListener("click",()=>a("a")),g.querySelector("#fsc-btn-solve-q10b").addEventListener("click",()=>a("b")),g.querySelector("#fsc-input-faulty-cf").addEventListener("input",e),g.querySelector("#fsc-input-faulty-cu").addEventListener("input",e),g.querySelector("#fsc-input-q10a-cm").addEventListener("input",e),g.querySelector("#fsc-input-q10b-t").addEventListener("input",e);const D=g.querySelector(".tl-dash--faulty"),lt=g.querySelector(".tl-controls"),E=g.querySelector("#fsc-controls-toggle"),Q=g.querySelector("#fsc-controls-drag"),at=g.querySelector(".tl-controls-float-bar");return D&&lt&&E&&kt({container:D,panel:lt,toggleBtn:E,dragHandle:Q,dragSurface:at,storageKey:"s3phy-faulty-calibration",breakpoint:1024,getToggleTitle:S=>c(S?"tools.floatingControls.showParams":"tools.floatingControls.hideParams")}),e(),g._thermometerLabCleanup=()=>{},g}export{Kt as createFaultyScaleCalibrationLab,Ut as createThermometerLab};
