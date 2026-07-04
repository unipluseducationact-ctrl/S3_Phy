const Tt="s3phy-thermometer-lab-css";const Ot=`
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
`;function kt(){if(document.getElementById(Tt))return;const u=document.createElement("style");u.id=Tt,u.textContent=Ot,document.head.appendChild(u)}function St(u){const U={x:12,y:12},j=200,{container:D,panel:n,toggleBtn:e,dragHandle:O,dragSurface:lt,storageKey:P,onLayoutChange:Q,breakpoint:at=1024,collapsedClass:k="controls-collapsed",floatingClass:S="controls-floating"}=u,C=lt||O;if(!D||!n||!e)return null;let $=sessionStorage.getItem(P)!=="false",w=(()=>{try{const G=localStorage.getItem(P+":pos");if(!G)return{...U};const L=JSON.parse(G);if(typeof L.x=="number"&&typeof L.y=="number")return L}catch{}return{...U}})(),q=null,H=null;const E=()=>window.innerWidth>=at,W=(G,L)=>{const X=D.getBoundingClientRect(),nt=n.getBoundingClientRect(),tt=Math.max(0,X.width-nt.width),K=Math.max(0,X.height-nt.height);return{x:Math.min(Math.max(0,G),tt),y:Math.min(Math.max(0,L),K)}},F=()=>{n.style.left=w.x+"px",n.style.top=w.y+"px",n.style.right="auto",n.style.bottom="auto"},T=()=>{typeof Q=="function"&&(clearTimeout(H),H=setTimeout(Q,j))},V=()=>{e.setAttribute("aria-expanded",$?"false":"true"),u.getToggleTitle&&(e.title=u.getToggleTitle($));const G=e.querySelector("[data-float-chevron]");G&&(G.textContent=$?"v":"^")},rt=()=>{E()&&(w=W(w.x,w.y),F())},it=G=>{$=G,n.classList.toggle(k,$),sessionStorage.setItem(P,$?"true":"false"),V(),T(),requestAnimationFrame(rt),setTimeout(rt,260)},ot=()=>{D.classList.add(S),n.classList.add("lab-controls-float"),w=W(w.x,w.y),F(),O&&(O.style.display="")},ft=()=>{D.classList.remove(S),n.classList.remove("lab-controls-float"),n.style.left="",n.style.top="",n.style.right="",n.style.bottom="",O&&(O.style.display="none")},J=()=>{E()?(ot(),w=W(w.x,w.y),F()):ft(),T()};if(n.classList.toggle(k,$),V(),J(),e.addEventListener("click",G=>{G.stopPropagation(),it(!$)}),C){C.addEventListener("pointerdown",L=>{E()&&(e.contains(L.target)||(L.preventDefault(),q={pointerId:L.pointerId,startX:L.clientX,startY:L.clientY,originX:w.x,originY:w.y},C.setPointerCapture(L.pointerId),C.classList.add("is-dragging")))}),C.addEventListener("pointermove",L=>{!q||q.pointerId!==L.pointerId||(w=W(q.originX+L.clientX-q.startX,q.originY+L.clientY-q.startY),F())});const G=L=>{if(!(!q||q.pointerId!==L.pointerId)){C.releasePointerCapture(L.pointerId),C.classList.remove("is-dragging");try{localStorage.setItem(P+":pos",JSON.stringify(w))}catch{}q=null,T()}};C.addEventListener("pointerup",G),C.addEventListener("pointercancel",G)}return window.addEventListener("resize",J),{setCollapsed:it,refreshMode:J,isCollapsed:()=>$}}function Vt(u,g={}){kt();const U=g.type||"liquid";let j=u("tools.thermometerLab.title"),D=u("tools.thermometerLab.subtitle");g.type==="liquid"?(j=u("tools.thermometerLab.liquid.title"),D=u("tools.thermometerLab.liquid.subtitle")||u("tools.thermometerLab.subtitle")):g.type==="resistance"?(j=u("tools.thermometerLab.resistance.title"),D=u("tools.thermometerLab.resistance.subtitle")||u("tools.thermometerLab.subtitle")):g.type==="thermistor"&&(j=u("tools.thermometerLab.thermistor.title"),D=u("tools.thermometerLab.thermistor.subtitle")||u("tools.thermometerLab.subtitle"));const n=document.createElement("div");n.className="tl-wrap",n.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${j}</h2>
      <div class="tl-sub">${D}</div>
    </div>
    <div class="tl-dash">
      <!-- TOP ROW LEFT: THERMOMETER VIEW -->
      <div class="tl-viz-phys" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;">
        <canvas class="tl-canvas-phys" id="tl-thermometerCanvas" width="460" height="340"></canvas>
        <button class="tl-btn" id="tl-btn-toggle-labels" style="margin-top:4px;width:100%;display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.75rem;padding:6px 10px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <span id="tl-lbl-toggle-labels">${u("tools.thermometerLab.labels.hide")}</span>
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
            <div class="tl-info-label" style="margin-top:0;color:var(--tl-green)">${u("tools.thermometerLab.thermistor.liveBetaLabel")}</div>
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
          <button type="button" class="tl-controls-drag-handle" id="tl-controls-drag" aria-label="${u("tools.floatingControls.dragHint")}" title="${u("tools.floatingControls.dragHint")}">⋮⋮</button>
          <button type="button" class="tl-controls-toggle" id="tl-controls-toggle" aria-expanded="false">
            <span data-float-chevron>▾</span>
            <span>${u("tools.thermometerLab.paramSettings")}</span>
          </button>
        </div>
        <div class="tl-controls-body">

        <!-- TAB 1: LIQUID-IN-GLASS -->
        <div class="tl-tab-content active" id="tl-tab-liquid">
          <details class="tl-details">
            <summary>${u("tools.thermometerLab.paramSettings")}</summary>
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
            <summary>${u("tools.thermometerLab.paramSettings")}</summary>
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
            <summary>${u("tools.thermometerLab.paramSettings")}</summary>
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
  `;const e={liquidType:"mercury",thermometerType:U,bulbVolume:200,wallThickness:.5,capillaryBore:.3,liquidL0:3,liquidL100:13,resistanceR0:5,resistanceR100:6.2,thermistorR25:10,thermistorBeta:3500,bathTemp:25,thermometerTemp:25,bubbles:[],iceCubes:[],heatWaves:[],steamParticles:[],currentLength:5.5,currentResistance:5.3,currentThermistorR:10,lastTimestamp:0,showLabels:!0},O={xs:11,sm:14,md:17,lg:18,sub:10};function lt(t,i,l,a){let r=Math.min(l,Math.max(i,t));return a>0&&(r=Math.round(r/a)*a,r=Math.min(l,Math.max(i,parseFloat(r.toFixed(10))))),r}function P(t,i,{min:l,max:a,step:r,decimals:d,onUpdate:f}){function o(c){const p=Number.isFinite(c)?c:l,s=lt(p,l,a,r);t.value=s,i.value=s.toFixed(d),f(s)}t.addEventListener("input",()=>o(parseFloat(t.value))),i.addEventListener("change",()=>o(parseFloat(i.value))),i.addEventListener("blur",()=>o(parseFloat(i.value)))}const Q=460,at=340,k=8,S=40,C=Q-S,$=130,w=640,q=420;function H(){return e.thermometerType==="liquid"?{beakerX:C/2-$/2,beakerW:$,thermometerX:C/2}:{beakerX:55,beakerW:$,thermometerX:120}}function E(){const t={left:110,top:48,right:30,bottom:65};return{gx:t.left,gy:t.top,gw:w-t.left-t.right,gh:q-t.top-t.bottom,tickFont:`bold ${Math.round(w*.024)}px Arial`,axisFont:`bold ${Math.round(w*.026)}px Arial`,dotR:8,yLabelX:t.left-75,xLabelY:q-t.bottom+32}}function W(){return{minT:0,maxT:200,tickStep:25}}function F(t,i,l,a,r){return a+(t-i)/(l-i)*r}function T(t,i,l,a,r){return a+r-(t-i)/(l-i)*r}function V(t,i,l,a,r,d,f=null){const{gx:o,gy:c,gw:p,gh:s,tickFont:h,axisFont:y,yLabelX:x,xLabelY:m}=i;t.strokeStyle="#1e1e24",t.lineWidth=1;for(const b of d){const v=T(b.value,b.min,b.max,c,s);t.beginPath(),t.moveTo(o,v),t.lineTo(o+p,v),t.stroke()}for(let b=l;b<=a+.01;b+=r){const v=F(b,l,a,o,p);t.beginPath(),t.moveTo(v,c),t.lineTo(v,c+s),t.stroke()}t.strokeStyle="#4b5563",t.lineWidth=2.5,t.beginPath(),t.moveTo(o,c),t.lineTo(o,c+s),t.lineTo(o+p,c+s),t.stroke(),t.fillStyle="#e4e4e7",t.font=h,t.textAlign="right",t.textBaseline="middle";for(const b of d){const v=T(b.value,b.min,b.max,c,s);t.fillText(b.label,o-15,v)}t.textAlign="center",t.textBaseline="top";for(let b=l;b<=a+.01;b+=r){if(f!=null&&Math.abs(b-f)<.25)continue;const v=F(b,l,a,o,p);t.fillText(`${Math.round(b)}`,v,c+s+10)}return{gx:o,gy:c,gw:p,gh:s,axisFont:y,yLabelX:x,xLabelY:m}}function rt(t,i){const l=i-t,a=l<=8?1:l<=14?2:5,r=[],d=Math.ceil(t/a)*a;for(let f=d;f<=i+.001;f+=a)r.push({value:f,label:f%1===0?`${f.toFixed(0)}`:`${f.toFixed(1)}`,min:t,max:i});return r}function it(){const{maxT:t}=W(),i=ot(0),l=ot(t),a=l-i,r=Math.max(1,a*.1),d=Math.max(0,Math.round((i-r)*10)/10),f=Math.round((l+r)*10)/10;return{minL:d,maxL:f}}function ot(t){return e.liquidL0+(e.liquidL100-e.liquidL0)/100*t}function ft(){const{maxT:t}=W(),i=J(0),l=J(t),a=l-i,r=Math.max(.2,a*.1),d=Math.max(0,i-r),f=l+r,o=a<=2?.5:a<=4?1:2,c=[],p=Math.ceil(d/o)*o;for(let s=p;s<=f+.001;s+=o)c.push({value:s,label:s.toFixed(1),min:d,max:f});return{minR:d,maxR:f,ticks:c}}function J(t){return e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*t}function G(t){const{maxT:i}=t;let l=e.thermistorR25;for(let f=0;f<=i;f+=5){const o=f+273.15,c=e.thermistorR25*Math.exp(e.thermistorBeta*(1/o-1/298.15));l=Math.max(l,c)}l=Math.ceil(l*1.08*10)/10;const a=0,r=l<=12?2:4,d=[];for(let f=0;f<=l+.001;f+=r)d.push({value:f,label:f.toFixed(0),min:a,max:l});return{minR:a,maxR:l,ticks:d}}const L=n.querySelector("#tl-thermometerCanvas"),X=L.getContext("2d"),nt=n.querySelector("#tl-graphCanvas"),tt=nt.getContext("2d"),K=window.devicePixelRatio||1;L.width=Q*K,L.height=at*K,X.scale(K,K),nt.width=w*K,nt.height=q*K,tt.scale(K,K);function Ct(){const{beakerX:t,beakerW:i}=H(),l=t+5,a=i-10;e.iceCubes=[];for(let r=0;r<5;r++)e.iceCubes.push({x:l+Math.random()*a,y:200+Math.random()*15,size:12+Math.random()*8,angle:Math.random()*Math.PI,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.15});e.bubbles=[];for(let r=0;r<20;r++)e.bubbles.push({x:l+Math.random()*a,y:190+Math.random()*70,r:1+Math.random()*3.5,speedY:.8+Math.random()*1.5,phase:Math.random()*Math.PI*2,wobbleSpeed:.08+Math.random()*.08});e.heatWaves=[];for(let r=0;r<8;r++)e.heatWaves.push({x:t+10+Math.random()*(i-20),y:190+Math.random()*60,length:15+Math.random()*15,speedY:.5+Math.random()*.6,opacity:.15+Math.random()*.25});e.steamParticles=[];for(let r=0;r<12;r++)e.steamParticles.push({x:l+Math.random()*a,y:175+Math.random()*10,r:2+Math.random()*4,vx:(Math.random()-.5)*.3,vy:-.4-Math.random()*.6,alpha:.2+Math.random()*.4})}const Lt=200,mt=11;function qt(){const t=Math.pow(e.bulbVolume/Lt,.3333333333333333);return mt*t}function $t(){if(e.thermometerType==="resistance"||e.thermometerType==="thermistor")return .35;const t=e.liquidType==="mercury"?1:8,i=.2+e.wallThickness*1.5,l=.4+e.bulbVolume*.003,a=1.35-e.capillaryBore*.45;return Math.max(.1,i*l*a*t*.15)}function zt(t){const{beakerX:i,beakerW:l}=H(),a=i+5,r=l-10,d=i+10,f=i+l-10;e.bathTemp<=8&&e.iceCubes.forEach(o=>{o.x+=o.speedX,o.y+=o.speedY,(o.x<d||o.x>f)&&(o.speedX*=-1),(o.y<195||o.y>210)&&(o.speedY*=-1)}),e.bathTemp>35&&e.heatWaves.forEach(o=>{o.y-=o.speedY*(1+e.bathTemp/100),o.y<185&&(o.y=265,o.x=i+10+Math.random()*(l-20))}),e.bathTemp>=80&&e.bubbles.forEach(o=>{o.y-=o.speedY*(1+(e.bathTemp-80)/40),o.phase+=o.wobbleSpeed,o.x+=Math.sin(o.phase)*.3,o.y<185&&(o.y=260+Math.random()*10,o.x=a+Math.random()*r)}),e.bathTemp>=95&&e.steamParticles.forEach(o=>{o.x+=o.vx,o.y+=o.vy,o.alpha-=.005,(o.alpha<=0||o.y<130)&&(o.x=a+Math.random()*r,o.y=175+Math.random()*5,o.alpha=.2+Math.random()*.4)})}function Rt(t,i){const l=i.beakerX,a=180,r=i.beakerW,d=100,f=190;let o=59,c=130,p=246;if(e.bathTemp<25){const m=e.bathTemp/25;o=Math.round(180-m*121),c=Math.round(210-m*80),p=Math.round(250-m*4)}else{const m=Math.min(1,(e.bathTemp-25)/125);o=Math.round(59+m*180),c=Math.round(130-m*100),p=Math.round(246-m*190)}if(e.bathTemp>40){const m=Math.min(1,(e.bathTemp-40)/100),b=Date.now()*.02;t.fillStyle=`rgba(239, 68, 68, ${m*.25})`,t.beginPath(),t.roundRect(l-10,a+d+4,r+20,10,4),t.fill(),t.fillStyle="rgba(249, 115, 22, 0.85)",t.beginPath(),t.moveTo(l+r/2-25,a+d+4);for(let v=-25;v<=25;v+=6){const M=m*(12+Math.sin(v*.4+b)*5);t.lineTo(l+r/2+v,a+d+4-M)}t.lineTo(l+r/2+25,a+d+4),t.closePath(),t.fill()}t.strokeStyle="#4b5563",t.lineWidth=2,t.fillStyle="#121214",t.beginPath(),t.roundRect(l,a,r,d,[0,0,10,10]),t.fill();const s=t.createLinearGradient(l,f,l,a+d);s.addColorStop(0,`rgba(${o}, ${c}, ${p}, 0.25)`),s.addColorStop(1,`rgba(${o}, ${c}, ${p}, 0.55)`),t.fillStyle=s,t.beginPath(),t.moveTo(l,f);const h=e.bathTemp>=80?2:.5,y=e.bathTemp>=80?.09:.03,x=Date.now()*y;for(let m=l;m<=l+r;m+=5){const b=f+Math.sin(m*.15+x)*h;t.lineTo(m,b)}t.lineTo(l+r,a+d),t.lineTo(l,a+d),t.closePath(),t.fill(),e.bathTemp>35&&(t.strokeStyle=`rgba(239, 68, 68, ${Math.min(.5,(e.bathTemp-35)/120)})`,t.lineWidth=1.2,e.heatWaves.forEach(m=>{t.beginPath(),t.moveTo(m.x,m.y),t.quadraticCurveTo(m.x+Math.sin(m.y*.06)*5,m.y-m.length/2,m.x,m.y-m.length),t.stroke()})),e.bathTemp<=8&&(t.fillStyle="rgba(224, 242, 254, 0.55)",t.strokeStyle="rgba(186, 230, 253, 0.8)",t.lineWidth=1,e.iceCubes.forEach(m=>{t.save(),t.translate(m.x,m.y),t.rotate(m.angle),t.beginPath(),t.roundRect(-m.size/2,-m.size/2,m.size,m.size,3),t.fill(),t.stroke(),t.restore()})),e.bathTemp>=80&&(t.fillStyle="rgba(255, 255, 255, 0.4)",t.strokeStyle="rgba(255, 255, 255, 0.65)",t.lineWidth=.6,e.bubbles.forEach(m=>{t.beginPath(),t.arc(m.x,m.y,m.r,0,Math.PI*2),t.fill(),t.stroke()})),e.bathTemp>=95&&e.steamParticles.forEach(m=>{t.fillStyle=`rgba(255, 255, 255, ${m.alpha})`,t.beginPath(),t.arc(m.x,m.y,m.r,0,Math.PI*2),t.fill()}),t.strokeStyle="#9ca3af",t.lineWidth=3.5,t.beginPath(),t.moveTo(l-1,a),t.lineTo(l-1,a+d-8),t.arcTo(l-1,a+d+1,l+10,a+d+1,8),t.lineTo(l+r-10,a+d+1),t.arcTo(l+r+1,a+d+1,l+r+1,a+d-8,8),t.lineTo(l+r+1,a),t.stroke(),t.strokeStyle="rgba(255, 255, 255, 0.4)",t.lineWidth=1.5,t.beginPath(),t.moveTo(l+4,a+10),t.lineTo(l+4,a+d-10),t.stroke()}function Ft(t,i,l){const a=i.split(" "),r=[];function d(o){if(t.measureText(o).width<=l){r.push(o);return}let c="";for(const p of o){const s=c+p;t.measureText(s).width>l&&c?(r.push(c),c=p):c=s}c&&r.push(c)}let f="";for(const o of a){const c=f?`${f} ${o}`:o;t.measureText(c).width<=l||!f?f=c:(d(f),f=o)}return f&&d(f),r.length?r:[i]}function Z(t,i,l,a,r,d,f="left"){if(!e.showLabels)return;t.font="bold 9px system-ui, sans-serif";const o=11,c=5,p=3,s=Math.max(40,f==="left"?C-a-k:a-k),h=Ft(t,d,s),y=h.map(B=>t.measureText(B).width),x=Math.max(...y)+c*2,m=h.length*o+p*2;let b=f==="left"?a:a-x;b=Math.max(k,Math.min(b,C-x-k));const v=r-m/2,M=f==="left"?b:b+x;t.strokeStyle="rgba(6, 182, 212, 0.7)",t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.moveTo(i,l),t.lineTo(M,r),t.stroke(),t.setLineDash([]),t.fillStyle="#06b6d4",t.beginPath(),t.arc(i,l,3,0,Math.PI*2),t.fill(),t.fillStyle="rgba(21, 21, 24, 0.9)",t.strokeStyle="#06b6d4",t.lineWidth=1,t.beginPath(),t.roundRect(b,v,x,m,4),t.fill(),t.stroke(),t.fillStyle="#f4f4f5",t.textAlign="center",t.textBaseline="middle",h.forEach((B,N)=>{const z=v+p+o*(N+.5);t.fillText(B,b+x/2,z)})}function Mt(t,i){const l=i.thermometerX,a=20,r=qt(),d=250+Math.max(0,r-mt)*.35,f=d-r-1,o=10+e.wallThickness*8,c=l-o/2,p=l+o/2,s=t.createLinearGradient(c,a,p,a);s.addColorStop(0,"rgba(209, 213, 219, 0.85)"),s.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),s.addColorStop(.5,"rgba(243, 244, 246, 0.15)"),s.addColorStop(.8,"rgba(255, 255, 255, 0.95)"),s.addColorStop(1,"rgba(156, 163, 175, 0.9)"),t.fillStyle=s,t.strokeStyle="rgba(156, 163, 175, 0.8)",t.lineWidth=1,t.beginPath(),t.moveTo(c,f),t.lineTo(c,a+5),t.arcTo(c,a,c+5,a,5),t.arcTo(p,a,p,a+5,5),t.lineTo(p,f),t.closePath(),t.fill(),t.stroke();const h=t.createRadialGradient(l-r*.2,d-r*.2,r*.1,l,d,r);h.addColorStop(0,"rgba(255, 255, 255, 0.8)"),h.addColorStop(1,"rgba(156, 163, 175, 0.35)"),t.fillStyle=h,t.strokeStyle="#6b7280",t.lineWidth=.8+e.wallThickness*.6,t.beginPath(),t.arc(l,d,r+.5+e.wallThickness*.5,0,Math.PI*2),t.fill(),t.stroke();const y=Math.min(o*.72,.8+e.capillaryBore*4.5);t.fillStyle="#0a0a0c",t.fillRect(l-y/2,a+8,y,f-a-8);const x=e.liquidType==="mercury",m=x?"#a1a1aa":"#ef4444",b=x?"#f4f4f5":"#fee2e2",v=210,M=220,N=(v-40)/M,z=v-Math.min(M,e.thermometerTemp)*N;t.fillStyle=m,t.fillRect(l-y/2,z,y,f-z),t.beginPath(),t.ellipse(l,z,y/2,1.5,0,0,Math.PI*2),t.fill(),t.fillStyle=b,t.fillRect(l-y/6,z,y/3,f-z);const _=r*.9,R=t.createRadialGradient(l-_*.2,d-_*.2,_*.1,l,d,_);x?(R.addColorStop(0,"#f4f4f5"),R.addColorStop(.3,"#d4d4d8"),R.addColorStop(.8,"#71717a"),R.addColorStop(1,"#3f3f46")):(R.addColorStop(0,"#fee2e2"),R.addColorStop(.2,"#fca5a5"),R.addColorStop(.7,"#ef4444"),R.addColorStop(1,"#991b1b")),t.fillStyle=R,t.beginPath(),t.arc(l,d,_,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(161, 161, 170, 0.6)",t.lineWidth=.5,t.font="6.5px Arial",t.fillStyle="#a1a1aa",t.textAlign="right",t.textBaseline="middle";for(let I=0;I<=200;I+=50){const A=v-I*N;t.beginPath(),t.moveTo(c,A),t.lineTo(c+4,A),t.stroke(),t.fillText(`${I}°C`,c-22,A+2.5)}if(e.showLabels){const I=i.beakerX+i.beakerW+12,A=c-28;Z(t,c+1,a+60,A,a+60,u("tools.thermometerLab.labels.thinWall"),"right"),Z(t,p+1,z,I,z,u("tools.thermometerLab.labels.meniscus"),"left"),Z(t,c,a+110,A,a+110,u("tools.thermometerLab.labels.narrowBore"),"right"),Z(t,p+1,d,I,d,u("tools.thermometerLab.labels.largeBulb"),"left")}}function Pt(t,i){const l=i.thermometerX,a=20,r=245,d=10,f=l-d/2,o=t.createLinearGradient(f,a,f+d,a);o.addColorStop(0,"#71717a"),o.addColorStop(.3,"#f4f4f5"),o.addColorStop(.7,"#d4d4d8"),o.addColorStop(1,"#3f3f46"),t.fillStyle=o,t.strokeStyle="#4b5563",t.lineWidth=1,t.beginPath(),t.roundRect(f,a,d,r-a,[0,0,4,4]),t.fill(),t.stroke(),t.fillStyle="rgba(21, 21, 24, 0.8)",t.fillRect(f+2,r-45,d-4,40),t.strokeStyle="#e2e8f0",t.lineWidth=1.2,t.beginPath();let c=r-40;t.moveTo(l-2,c);for(let x=0;x<8;x++)c+=4,t.lineTo(l+2,c),c+=4,t.lineTo(l-2,c);t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(l-2,a),t.bezierCurveTo(l-10,a-15,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(l+2,a),t.bezierCurveTo(l+10,a-12,210,45,245,75),t.stroke();const p=245,s=40,h=135,y=90;if(t.fillStyle="#18181b",t.strokeStyle="#6366f1",t.lineWidth=2.5,t.beginPath(),t.roundRect(p,s,h,y,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(p+10,s+12,h-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#10b981",t.textAlign="right",t.fillText(e.currentResistance.toFixed(2)+" Ω",p+h-16,s+34),t.font="6px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText("PLATINUM RTD METER",p+14,s+21),e.showLabels){const x=i.beakerX+i.beakerW+12,m=f-8;Z(t,f+1,a+80,m,a+80,u("tools.thermometerLab.labels.metalSheath"),"right"),Z(t,f+d,r-20,x,r-20,u("tools.thermometerLab.labels.platinumCoil"),"left")}}function Et(t,i){const l=i.thermometerX,a=20,r=245;t.strokeStyle="#111827",t.lineWidth=1.2,t.beginPath(),t.moveTo(l-2,a),t.lineTo(l-2,r),t.stroke(),t.beginPath(),t.moveTo(l+2,a),t.lineTo(l+2,r),t.stroke();const d=20,f=225,o=12,c=l-o/2,p=t.createLinearGradient(c,d,c+o,d);p.addColorStop(0,"rgba(229, 231, 235, 0.4)"),p.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),p.addColorStop(.7,"rgba(243, 244, 246, 0.5)"),p.addColorStop(1,"rgba(209, 213, 219, 0.6)"),t.fillStyle=p,t.strokeStyle="rgba(156, 163, 175, 0.6)",t.lineWidth=.8,t.beginPath(),t.roundRect(c,d,o,f-d,[0,0,3,3]),t.fill(),t.stroke();const s=7,h=t.createRadialGradient(l-s*.2,r-s*.2,s*.1,l,r,s);h.addColorStop(0,"#6b7280"),h.addColorStop(.7,"#1f2937"),h.addColorStop(1,"#09090b"),t.fillStyle=h,t.strokeStyle="#030712",t.lineWidth=1.2,t.beginPath(),t.arc(l,r,s,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(l-2,a),t.bezierCurveTo(l-10,a-15,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(l+2,a),t.bezierCurveTo(l+10,a-12,210,45,245,75),t.stroke();const y=245,x=40,m=135,b=90;if(t.fillStyle="#18181b",t.strokeStyle="#10b981",t.lineWidth=2.5,t.beginPath(),t.roundRect(y,x,m,b,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(y+10,x+12,m-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#34d399",t.textAlign="right",t.fillText(e.currentThermistorR.toFixed(2)+" kΩ",y+m-16,x+34),t.font="5px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText(u("tools.thermometerLab.thermistor.meterLabelLine1"),y+14,x+52),t.fillText(u("tools.thermometerLab.thermistor.meterLabelLine2"),y+14,x+59),e.showLabels){const v=i.beakerX+i.beakerW+12,M=c-8;Z(t,c,a+100,M,a+100,u("tools.thermometerLab.labels.leads"),"right"),Z(t,c+o,r,v,r,u("tools.thermometerLab.labels.semiconductorBead"),"left")}}function pt(t,i,l,a,r,d,f,o,c){const{gx:p,gy:s,gw:h,gh:y,tickFont:x}=i;t.strokeStyle="rgba(255, 255, 255, 0.2)",t.lineWidth=1,t.setLineDash([4,4]),t.beginPath(),t.moveTo(l,a),t.lineTo(l,s+y),t.stroke(),t.beginPath(),t.moveTo(l,a),t.lineTo(p,a),t.stroke(),t.setLineDash([]);const m=s+y+10;t.font=x,t.textAlign="center",t.textBaseline="top";const b=`${r.toFixed(1)}${f}`,v=t.measureText(b).width+10,M=18;t.fillStyle=c,t.beginPath(),t.roundRect(l-v/2,m-2,v,M,3),t.fill(),t.fillStyle="#000",t.fillText(b,l,m),t.textAlign="right",t.textBaseline="middle";const B=`${d.toFixed(2)} ${o}`,N=t.measureText(B).width+10;t.fillStyle=c,t.beginPath(),t.roundRect(p-N-2,a-7,N,15,3),t.fill(),t.fillStyle="#000",t.fillText(B,p-7,a)}function Gt(t){const i=E(),{minL:l,maxL:a}=it(),{minT:r,maxT:d,tickStep:f}=W(),o=rt(l,a),c=V(t,i,r,d,f,o,e.thermometerTemp),{gx:p,gy:s,gw:h,gh:y,axisFont:x,yLabelX:m,xLabelY:b,dotR:v}={...i,...c};t.save(),t.translate(m,s+y/2),t.rotate(-Math.PI/2),t.font=x,t.fillStyle="#e4e4e7",t.fillText("Length of liquid column / cm",0,0),t.restore(),t.font=x,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",p+h/2,b);const M=d,B=F(0,r,d,p,h),N=T(ot(0),l,a,s,y),z=F(M,r,d,p,h),_=T(ot(M),l,a,s,y);t.strokeStyle="#ef4444",t.lineWidth=3,t.beginPath(),t.moveTo(B,N),t.lineTo(z,_),t.stroke();const R=e.thermometerTemp,I=e.currentLength;if(R>=r&&R<=d){const A=F(R,r,d,p,h),st=T(I,l,a,s,y);pt(t,i,A,st,R,I,"°C","cm","#ef4444"),t.shadowColor="#ef4444",t.shadowBlur=10,t.fillStyle="#ef4444",t.beginPath(),t.arc(A,st,v,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function At(t){const i=E(),{minR:l,maxR:a,ticks:r}=ft(),d=W(),f=V(t,i,d.minT,d.maxT,d.tickStep,r,e.thermometerTemp),{gx:o,gy:c,gw:p,gh:s,axisFont:h,yLabelX:y,xLabelY:x,dotR:m}={...i,...f};t.save(),t.translate(y,c+s/2),t.rotate(-Math.PI/2),t.font=h,t.fillStyle="#e4e4e7",t.fillText("Resistance of platinum / Ω",0,0),t.restore(),t.font=h,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",o+p/2,x);const{minT:b,maxT:v}=d,M=v,B=F(0,b,v,o,p),N=T(J(0),l,a,c,s),z=F(M,b,v,o,p),_=T(J(M),l,a,c,s);t.strokeStyle="#6366f1",t.lineWidth=3,t.beginPath(),t.moveTo(B,N),t.lineTo(z,_),t.stroke();const R=e.thermometerTemp,I=e.currentResistance;if(R>=b&&R<=v){const A=F(R,b,v,o,p),st=T(I,l,a,c,s);pt(t,i,A,st,R,I,"°C","Ω","#6366f1"),t.shadowColor="#6366f1",t.shadowBlur=10,t.fillStyle="#6366f1",t.beginPath(),t.arc(A,st,m,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function Bt(t){const i=E(),l=W(),{minR:a,maxR:r,ticks:d}=G(l),f=V(t,i,l.minT,l.maxT,l.tickStep,d,e.thermometerTemp),{gx:o,gy:c,gw:p,gh:s,axisFont:h,yLabelX:y,xLabelY:x,dotR:m}={...i,...f},{minT:b,maxT:v}=l;t.save(),t.translate(y,c+s/2),t.rotate(-Math.PI/2),t.font=h,t.fillStyle="#e4e4e7",t.fillText("Resistance of thermistor / kΩ",0,0),t.restore(),t.font=h,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",o+p/2,x),t.strokeStyle="#10b981",t.lineWidth=3,t.beginPath();let M=!1;for(let z=b;z<=v;z+=1){const _=z+273.15,R=e.thermistorR25*Math.exp(e.thermistorBeta*(1/_-1/298.15)),I=F(z,b,v,o,p),A=T(Math.min(r,R),a,r,c,s);A>=c&&A<=c+s&&(M?t.lineTo(I,A):(t.moveTo(I,A),M=!0))}t.stroke();const B=e.thermometerTemp,N=e.currentThermistorR;if(B>=b&&B<=v){const z=F(B,b,v,o,p),_=T(Math.min(r,N),a,r,c,s);pt(t,i,z,_,B,N,"°C","kΩ","#10b981"),t.shadowColor="#10b981",t.shadowBlur=10,t.fillStyle="#10b981",t.beginPath(),t.arc(z,_,m,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function bt(){X.clearRect(0,0,Q,at),tt.clearRect(0,0,w,q),X.save(),X.translate(S,0);const t=H();Rt(X,t),e.thermometerType==="liquid"?Mt(X,t):e.thermometerType==="resistance"?Pt(X,t):Et(X,t),X.restore(),e.thermometerType==="liquid"?Gt(tt):e.thermometerType==="resistance"?At(tt):Bt(tt)}function It(){const{sm:t,md:i,lg:l,xs:a,sub:r}=O,d=n.querySelector("#tl-svg-formula-liquid");d&&(d.innerHTML=`
        <svg height="50" width="240" style="background:transparent; overflow:visible;">
          <line x1="10" y1="26" x2="100" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="55" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">L<tspan dy="2" font-size="${r}">100</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="${r}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="55" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${i}">=</text>
          
          <line x1="130" y1="26" x2="220" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="175" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">L<tspan dy="2" font-size="${r}">T</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="${r}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="175" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>
        </svg>
      `);const f=n.querySelector("#tl-svg-formula-liquid-sub");if(f){const h=e.liquidL100-e.liquidL0,y=e.currentLength-e.liquidL0;f.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.liquidL100.toFixed(1)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${i}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">${e.currentLength.toFixed(2)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>

          <line x1="10" y1="68" x2="90" y2="68" stroke="#fff" stroke-width="1.2" />
          <text x="50" y="60" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">${y.toFixed(2)} &times; 100</text>
          <text x="50" y="82" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${h.toFixed(1)}</text>
          
          <text x="105" y="73" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="${l}" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const o=n.querySelector("#tl-svg-formula-resistance");o&&(o.innerHTML=`
        <svg height="50" width="240" style="background:transparent; overflow:visible;">
          <line x1="10" y1="26" x2="100" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="55" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">R<tspan dy="2" font-size="${r}">100</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="${r}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="55" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${i}">=</text>
          
          <line x1="130" y1="26" x2="220" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="175" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">R<tspan dy="2" font-size="${r}">T</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="${r}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="175" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>
        </svg>
      `);const c=n.querySelector("#tl-svg-formula-resistance-sub");if(c){const h=e.resistanceR100-e.resistanceR0,y=e.currentResistance-e.resistanceR0;c.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${i}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">${e.currentResistance.toFixed(2)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>

          <line x1="10" y1="68" x2="90" y2="68" stroke="#fff" stroke-width="1.2" />
          <text x="50" y="60" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">${y.toFixed(2)} &times; 100</text>
          <text x="50" y="82" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${h.toFixed(1)}</text>
          
          <text x="105" y="73" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="${l}" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const p=n.querySelector("#tl-svg-formula-thermistor");p&&(p.innerHTML=`
        <svg height="50" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${i}">T =</text>
          <line x1="40" y1="23" x2="220" y2="23" stroke="#fff" stroke-width="1.5" />
          <text x="130" y="15" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">1</text>
          <text x="130" y="38" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${a}" text-anchor="middle">(1/&beta;) &bull; ln(R<tspan dy="2" font-size="${r}">T</tspan><tspan dy="-2">/R</tspan><tspan dy="2" font-size="${r}">25</tspan><tspan dy="-2">) + 1/298.15</tspan></text>
          <text x="230" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${i}">- 273.15</text>
        </svg>
      `);const s=n.querySelector("#tl-svg-formula-thermistor-sub");if(s){const h=e.thermometerTemp+273.15;s.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${i}">
            T<tspan dy="3" font-size="${r}">K</tspan><tspan dy="-3" fill="#10b981" font-weight="bold"> = ${h.toFixed(2)} K</tspan>
            <tspan fill="#fff"> &rArr; T = </tspan>
            <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${e.thermometerTemp.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `}}function Wt(){const t=n.querySelector("#tl-faulty-svg-container");if(!t)return;const{cf:i,cu:l,interval:a}=gt(),r=parseFloat(n.querySelector("#tl-input-q10a-cm").value)||0,d=parseFloat(n.querySelector("#tl-input-q10b-t").value)||0,f=n.querySelector("#tl-pane-q10a").classList.contains("active"),o=f?(r-i)/a*100:d,c=f?r:d/100*a+i,s=(h=>130-h/100*80)(o);t.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <!-- Left Scale: True Scale -->
        <g transform="translate(0, 0)">
          <!-- Glass Tube -->
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="84" y="${s}" width="4" height="${144-s}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          
          <!-- Ticks -->
          <!-- Ice Point 0°C -->
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          
          <!-- Steam Point 100°C -->
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>

          <!-- Current Point -->
          <text x="65" y="${s+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${o.toFixed(1)}°C</text>

          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${u("tools.thermometerLab.faulty.trueScale")}</text>
        </g>

        <!-- Right Scale: Faulty Scale -->
        <g transform="translate(130, 0)">
          <!-- Glass Tube -->
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="104" y="${s}" width="4" height="${144-s}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          
          <!-- Ticks -->
          <!-- Faulty Ice Point Cf -->
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${i.toFixed(1)}°C</tspan></text>
          
          <!-- Faulty Steam Point Cu -->
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${l.toFixed(1)}°C</tspan></text>

          <!-- Current Faulty Point -->
          <text x="125" y="${s+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${c.toFixed(1)}°C</text>

          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${u("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>

        <!-- Connecting Ratio Indicator Line -->
        <line x1="86" y1="${s}" x2="236" y2="${s}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${s}" r="3" fill="#34d399" />
        <circle cx="236" cy="${s}" r="3" fill="#34d399" />
      </svg>
    `}function Ht(t){n.querySelector("#tl-bath-temp-display").innerHTML=e.bathTemp.toFixed(1)+"°C",n.querySelector("#tl-val-bath-temp").innerHTML=e.bathTemp.toFixed(1)+" °C";const i=n.querySelector("#tl-bath-state");e.bathTemp<=0?i.textContent="Melting Ice Bath":e.bathTemp>=100?i.textContent="Boiling Water/Steam":e.bathTemp===150?i.textContent="Hot Cooking Oil":i.textContent="Liquid Water",n.querySelector("#tl-val-response-time").textContent=t.toFixed(2)+" s";const l=n.querySelector("#tl-alcohol-boiling-warning");e.thermometerType==="liquid"&&e.liquidType==="alcohol"&&e.bathTemp>=78?l.style.display="block":l.style.display="none",e.thermometerType==="liquid"?(n.querySelector("#tl-live-liquid-lt").textContent=e.currentLength.toFixed(2)+" cm",n.querySelector("#tl-live-liquid-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):e.thermometerType==="resistance"?(n.querySelector("#tl-live-resistance-rt").textContent=e.currentResistance.toFixed(2)+" Ω",n.querySelector("#tl-live-resistance-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):n.querySelector("#tl-live-thermistor-rt").textContent=e.currentThermistorR.toFixed(2)+" kΩ",It()}let dt=null;function ht(t){e.lastTimestamp||(e.lastTimestamp=t);const i=(t-e.lastTimestamp)/1e3;e.lastTimestamp=t;const l=Math.min(i,.1),a=$t(),r=l/a*(e.bathTemp-e.thermometerTemp);e.thermometerTemp+=r,e.currentLength=e.liquidL0+(e.liquidL100-e.liquidL0)/100*e.thermometerTemp,e.currentResistance=e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*e.thermometerTemp;const d=e.thermometerTemp+273.15;e.currentThermistorR=e.thermistorR25*Math.exp(e.thermistorBeta*(1/d-1/298.15)),zt(),bt(),Ht(a),dt=requestAnimationFrame(ht)}function gt(){const t=parseFloat(n.querySelector("#tl-input-faulty-cf").value),i=parseFloat(n.querySelector("#tl-input-faulty-cu").value),l=Number.isFinite(t)?t:-1.5,a=Number.isFinite(i)?i:105,r=a-l;return{cf:l,cu:a,interval:r}}function ut(t){const i=Math.round(t*100)/100;return i>=0?i.toFixed(1):`(${i.toFixed(1)})`}function et(){if(!n.querySelector("#tl-input-faulty-cf"))return;const{cf:t,cu:i,interval:l}=gt(),a=n.querySelector("#tl-val-faulty-interval"),r=n.querySelector("#tl-faulty-error-a"),d=n.querySelector("#tl-faulty-error-b"),f=Math.abs(l)<.01;a.textContent=l.toFixed(1)+" °C";const o=n.querySelector("#tl-svg-formula-faulty-a"),c=n.querySelector("#tl-svg-formula-faulty-b");if(f){r.hidden=!1,r.textContent="C_u must differ from C_f (interval cannot be zero).",d.hidden=!1,d.textContent=r.textContent,o&&(o.innerHTML=""),c&&(c.innerHTML="");return}r.hidden=!0,d.hidden=!0;const p=parseFloat(n.querySelector("#tl-input-q10a-cm").value)||0,s=parseFloat(n.querySelector("#tl-input-q10b-t").value)||0,h=(p-t)/l*100,y=s/100*l+t;o&&(o.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${p.toFixed(1)} - ${ut(t)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${i.toFixed(1)} - ${ut(t)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${h.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),c&&(c.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${s.toFixed(1)} &times; ${l.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${ut(t)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${y.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),Wt()}function Yt(){const{sm:t,md:i,sub:l}=O,a=e.thermometerTemp,r=e.liquidL100-e.liquidL0,d=e.liquidL0+r/100*a,f=n.querySelector("#tl-svg-formula-t-to-l");f&&(f.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.liquidL100.toFixed(1)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${i}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">L<tspan dy="2" font-size="${l}">T</tspan><tspan dy="-2"> - ${e.liquidL0.toFixed(1)}</tspan></text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${a.toFixed(1)} - 0</text>

          <text x="10" y="73" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}">L<tspan dy="2" font-size="${l}">T</tspan><tspan dy="-2"> = ${e.liquidL0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${r.toFixed(1)} / 100)</tspan> &times; ${a.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${d.toFixed(2)} cm</tspan>
          </text>
        </svg>
      `)}function Nt(){const{sm:t,md:i,sub:l}=O,a=e.thermometerTemp,r=e.resistanceR100-e.resistanceR0,d=e.resistanceR0+r/100*a,f=n.querySelector("#tl-svg-formula-t-to-r");f&&(f.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${i}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">R<tspan dy="2" font-size="${l}">T</tspan><tspan dy="-2"> - ${e.resistanceR0.toFixed(1)}</tspan></text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${a.toFixed(1)} - 0</text>

          <text x="10" y="73" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}">R<tspan dy="2" font-size="${l}">T</tspan><tspan dy="-2"> = ${e.resistanceR0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${r.toFixed(1)} / 100)</tspan> &times; ${a.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${d.toFixed(2)} Ω</tspan>
          </text>
        </svg>
      `)}function Y(){et(),Yt(),Nt()}function ct(t,i){n.querySelector("#"+t).addEventListener("click",()=>{e.bathTemp=i,n.querySelector("#tl-bath-temp-slider").value=i,Y()})}function yt(t){n.querySelectorAll(".tl-tab-btn").forEach(i=>{i.classList.toggle("active",i.getAttribute("data-tl-tab")===t)}),n.querySelectorAll(".tl-tab-content").forEach(i=>{i.classList.toggle("active",i.id==="tl-tab-"+t)}),n.querySelectorAll(".tl-live-tab").forEach(i=>{i.classList.toggle("active",i.id==="tl-live-"+t)}),e.thermometerType=t}function _t(){var f,o,c,p;n.querySelectorAll(".tl-tab-btn").forEach(s=>{s.addEventListener("click",()=>{yt(s.getAttribute("data-tl-tab")),Y()})}),n.querySelector("#tl-btn-toggle-labels").addEventListener("click",()=>{e.showLabels=!e.showLabels,n.querySelector("#tl-lbl-toggle-labels").textContent=e.showLabels?u("tools.thermometerLab.labels.hide"):u("tools.thermometerLab.labels.show")}),n.querySelector("#tl-bath-temp-slider").addEventListener("input",s=>{e.bathTemp=parseFloat(s.target.value),Y()}),ct("tl-btn-preset-ice",0),ct("tl-btn-preset-room",25),ct("tl-btn-preset-steam",100),ct("tl-btn-preset-oil",150),n.querySelector("#tl-card-mercury").addEventListener("click",()=>{e.liquidType="mercury",n.querySelector("#tl-card-mercury").className="tl-seg-btn active-mercury",n.querySelector("#tl-card-alcohol").className="tl-seg-btn",Y()}),n.querySelector("#tl-card-alcohol").addEventListener("click",()=>{e.liquidType="alcohol",n.querySelector("#tl-card-mercury").className="tl-seg-btn",n.querySelector("#tl-card-alcohol").className="tl-seg-btn active-alcohol",Y()}),P(n.querySelector("#tl-slider-bulb-vol"),n.querySelector("#tl-input-bulb-vol"),{min:10,max:1e3,step:10,decimals:0,onUpdate:s=>{e.bulbVolume=s}}),P(n.querySelector("#tl-slider-wall-thick"),n.querySelector("#tl-input-wall-thick"),{min:.05,max:3,step:.05,decimals:2,onUpdate:s=>{e.wallThickness=s}}),P(n.querySelector("#tl-slider-capillary-bore"),n.querySelector("#tl-input-capillary-bore"),{min:.05,max:2,step:.05,decimals:2,onUpdate:s=>{e.capillaryBore=s}}),P(n.querySelector("#tl-slider-liquid-l0"),n.querySelector("#tl-input-liquid-l0"),{min:.5,max:15,step:.1,decimals:1,onUpdate:s=>{e.liquidL0=s,Y()}}),P(n.querySelector("#tl-slider-liquid-l100"),n.querySelector("#tl-input-liquid-l100"),{min:5,max:30,step:.1,decimals:1,onUpdate:s=>{e.liquidL100=s,Y()}}),P(n.querySelector("#tl-slider-resistance-r0"),n.querySelector("#tl-input-resistance-r0"),{min:.5,max:20,step:.1,decimals:1,onUpdate:s=>{e.resistanceR0=s,n.querySelector("#tl-spec-resistance-r0").textContent=s.toFixed(1)+" Ω",Y()}}),P(n.querySelector("#tl-slider-resistance-r100"),n.querySelector("#tl-input-resistance-r100"),{min:2,max:30,step:.1,decimals:1,onUpdate:s=>{e.resistanceR100=s,n.querySelector("#tl-spec-resistance-r100").textContent=s.toFixed(1)+" Ω",Y()}}),P(n.querySelector("#tl-slider-thermistor-r25"),n.querySelector("#tl-input-thermistor-r25"),{min:.5,max:50,step:.1,decimals:1,onUpdate:s=>{e.thermistorR25=s,n.querySelector("#tl-spec-thermistor-r25").textContent=s.toFixed(1)+" kΩ",Y()}}),P(n.querySelector("#tl-slider-thermistor-beta"),n.querySelector("#tl-input-thermistor-beta"),{min:1e3,max:8e3,step:50,decimals:0,onUpdate:s=>{e.thermistorBeta=s,n.querySelector("#tl-spec-thermistor-beta").textContent=s+" K",Y()}});const l=n.querySelector("#tl-btn-solve-q10a"),a=n.querySelector("#tl-btn-solve-q10b");l&&a&&(l.addEventListener("click",()=>{l.classList.add("active"),a.classList.remove("active"),n.querySelector("#tl-pane-q10a").classList.add("active"),n.querySelector("#tl-pane-q10b").classList.remove("active"),et()}),a.addEventListener("click",()=>{l.classList.remove("active"),a.classList.add("active"),n.querySelector("#tl-pane-q10a").classList.remove("active"),n.querySelector("#tl-pane-q10b").classList.add("active"),et()})),(f=n.querySelector("#tl-input-faulty-cf"))==null||f.addEventListener("input",et),(o=n.querySelector("#tl-input-faulty-cu"))==null||o.addEventListener("input",et),(c=n.querySelector("#tl-input-q10a-cm"))==null||c.addEventListener("input",et),(p=n.querySelector("#tl-input-q10b-t"))==null||p.addEventListener("input",et);const r=n.querySelector("#tl-input-t-to-l");r&&r.addEventListener("input",Y);const d=n.querySelector("#tl-input-t-to-r");d&&d.addEventListener("input",Y)}if(g.type){const t=n.querySelector(".tl-tabs-container");t&&(t.style.display="none")}yt(U),Ct(),_t(),Y();const vt=n.querySelector(".tl-dash"),xt=n.querySelector(".tl-controls"),wt=n.querySelector("#tl-controls-toggle"),Xt=n.querySelector("#tl-controls-drag"),Dt=n.querySelector(".tl-controls-float-bar");return vt&&xt&&wt&&St({container:vt,panel:xt,toggleBtn:wt,dragHandle:Xt,dragSurface:Dt,storageKey:`s3phy-thermo-${U}`,breakpoint:1024,getToggleTitle:t=>u(t?"tools.floatingControls.showParams":"tools.floatingControls.hideParams"),onLayoutChange:()=>bt()}),dt=requestAnimationFrame(ht),n._thermometerLabCleanup=()=>{dt&&cancelAnimationFrame(dt)},n}function Ut(u){kt();const g=document.createElement("div");g.className="tl-wrap tl-wrap--faulty-cal",g.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${u("tools.faultyCalibration.title")}</h2>
      <div class="tl-sub">${u("tools.faultyCalibration.subtitle")}</div>
    </div>
    <div class="tl-dash tl-dash--faulty">
      <section class="tl-faulty-hero">
        <div class="tl-info-card" style="margin:0">
          <div class="tl-info-label">${u("tools.faultyCalibration.formulaTitle")}</div>
          <p style="margin:0;font-size:0.82rem">T / 100 = (C − C<sub>f</sub>) / (C<sub>u</sub> − C<sub>f</sub>)</p>
        </div>
        <div class="tl-info-label" style="font-size:0.78rem;color:var(--tl-muted);margin:0;">${u("tools.thermometerLab.faulty.dualScale")}</div>
        <div id="fsc-faulty-svg-container" class="tl-faulty-hero-viz"></div>
      </section>

      <section class="tl-faulty-live">
        <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-cyan)">${u("tools.faultyCalibration.liveLabel")}</div>
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
          <button type="button" class="tl-controls-drag-handle" id="fsc-controls-drag" aria-label="${u("tools.floatingControls.dragHint")}" title="${u("tools.floatingControls.dragHint")}">⋮⋮</button>
          <button type="button" class="tl-controls-toggle" id="fsc-controls-toggle" aria-expanded="false">
            <span data-float-chevron>▾</span>
            <span>${u("tools.thermometerLab.paramSettings")}</span>
          </button>
        </div>
        <div class="tl-controls-body">
          <p style="font-size:0.75rem;color:var(--tl-muted);margin:0 0 8px">${u("tools.faultyCalibration.intro")}</p>
          <div class="tl-faulty-cal">
            <div class="tl-calc-inputs">
              <span>${u("tools.faultyCalibration.iceReading")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-faulty-cf" value="-1.5" step="0.1" class="tl-calc-input" aria-label="Ice point faulty reading">
                <span class="tl-unit">°C</span>
              </div>
            </div>
            <div class="tl-calc-inputs">
              <span>${u("tools.faultyCalibration.steamReading")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-faulty-cu" value="105" step="0.1" class="tl-calc-input" aria-label="Steam point faulty reading">
                <span class="tl-unit">°C</span>
              </div>
            </div>
          </div>
          <div class="tl-faulty-interval">
            <span>${u("tools.faultyCalibration.interval")}</span>
            <b id="fsc-val-faulty-interval">106.5 °C</b>
          </div>
          <div class="tl-solver-tabs">
            <button class="tl-solver-tab-btn active" id="fsc-btn-solve-q10a">${u("tools.faultyCalibration.findTrueTemp")}</button>
            <button class="tl-solver-tab-btn" id="fsc-btn-solve-q10b">${u("tools.faultyCalibration.findFaultyReading")}</button>
          </div>
          <div id="fsc-input-pane-q10a" class="tl-solver-pane active">
            <div class="tl-calc-inputs">
              <span>${u("tools.faultyCalibration.faultyReadingC")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-q10a-cm" value="25.0" step="0.5" class="tl-calc-input">
                <span class="tl-unit">°C</span>
              </div>
            </div>
            <p class="tl-solver-error" id="fsc-faulty-error-a" hidden></p>
          </div>
          <div id="fsc-input-pane-q10b" class="tl-solver-pane">
            <div class="tl-calc-inputs">
              <span>${u("tools.faultyCalibration.trueTempT")}</span>
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
  `;function U(k){const S=Math.round(k*100)/100;return S>=0?S.toFixed(1):`(${S.toFixed(1)})`}function j(){const k=parseFloat(g.querySelector("#fsc-input-faulty-cf").value),S=parseFloat(g.querySelector("#fsc-input-faulty-cu").value),C=Number.isFinite(k)?k:-1.5,$=Number.isFinite(S)?S:105,w=$-C;return{cf:C,cu:$,interval:w}}function D(){const k=g.querySelector("#fsc-faulty-svg-container");if(!k)return;const{cf:S,cu:C,interval:$}=j(),w=parseFloat(g.querySelector("#fsc-input-q10a-cm").value)||0,q=parseFloat(g.querySelector("#fsc-input-q10b-t").value)||0,H=g.querySelector("#fsc-input-pane-q10a").classList.contains("active"),E=H?(w-S)/$*100:q,W=H?w:q/100*$+S,F=V=>130-V/100*80,T=Number.isFinite(E)?F(E):130;k.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <g transform="translate(0, 0)">
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <rect x="84" y="${T}" width="4" height="${144-T}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>
          <text x="65" y="${T+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${Number.isFinite(E)?E.toFixed(1):"—"}°C</text>
          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${u("tools.thermometerLab.faulty.trueScale")}</text>
        </g>
        <g transform="translate(130, 0)">
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <rect x="104" y="${T}" width="4" height="${144-T}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${S.toFixed(1)}°C</tspan></text>
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${C.toFixed(1)}°C</tspan></text>
          <text x="125" y="${T+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${Number.isFinite(W)?W.toFixed(1):"—"}°C</text>
          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${u("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>
        <line x1="86" y1="${T}" x2="236" y2="${T}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${T}" r="3" fill="#34d399" />
        <circle cx="236" cy="${T}" r="3" fill="#34d399" />
      </svg>
    `}function n(k){const S=k==="a";g.querySelector("#fsc-btn-solve-q10a").classList.toggle("active",S),g.querySelector("#fsc-btn-solve-q10b").classList.toggle("active",!S),g.querySelector("#fsc-input-pane-q10a").classList.toggle("active",S),g.querySelector("#fsc-input-pane-q10b").classList.toggle("active",!S),g.querySelector("#fsc-pane-q10a").classList.toggle("active",S),g.querySelector("#fsc-pane-q10b").classList.toggle("active",!S),e()}function e(){const{cf:k,cu:S,interval:C}=j(),$=g.querySelector("#fsc-val-faulty-interval"),w=g.querySelector("#fsc-faulty-error-a"),q=g.querySelector("#fsc-faulty-error-b"),H=g.querySelector("#fsc-svg-formula-faulty-a"),E=g.querySelector("#fsc-svg-formula-faulty-b"),W=Math.abs(C)<.01,F=u("tools.faultyCalibration.invalidInterval");if($.textContent=C.toFixed(1)+" °C",W){w.hidden=!1,w.textContent=F,q.hidden=!1,q.textContent=F,H&&(H.innerHTML=""),E&&(E.innerHTML=""),D();return}w.hidden=!0,q.hidden=!0;const T=parseFloat(g.querySelector("#fsc-input-q10a-cm").value)||0,V=parseFloat(g.querySelector("#fsc-input-q10b-t").value)||0,rt=(T-k)/C*100,it=V/100*C+k;H&&(H.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${T.toFixed(1)} - ${U(k)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${S.toFixed(1)} - ${U(k)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${rt.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),E&&(E.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${V.toFixed(1)} &times; ${C.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${U(k)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${it.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),D()}g.querySelector("#fsc-btn-solve-q10a").addEventListener("click",()=>n("a")),g.querySelector("#fsc-btn-solve-q10b").addEventListener("click",()=>n("b")),g.querySelector("#fsc-input-faulty-cf").addEventListener("input",e),g.querySelector("#fsc-input-faulty-cu").addEventListener("input",e),g.querySelector("#fsc-input-q10a-cm").addEventListener("input",e),g.querySelector("#fsc-input-q10b-t").addEventListener("input",e);const O=g.querySelector(".tl-dash--faulty"),lt=g.querySelector(".tl-controls"),P=g.querySelector("#fsc-controls-toggle"),Q=g.querySelector("#fsc-controls-drag"),at=g.querySelector(".tl-controls-float-bar");return O&&lt&&P&&St({container:O,panel:lt,toggleBtn:P,dragHandle:Q,dragSurface:at,storageKey:"s3phy-faulty-calibration",breakpoint:1024,getToggleTitle:k=>u(k?"tools.floatingControls.showParams":"tools.floatingControls.hideParams")}),e(),g._thermometerLabCleanup=()=>{},g}export{Ut as createFaultyScaleCalibrationLab,Vt as createThermometerLab};
