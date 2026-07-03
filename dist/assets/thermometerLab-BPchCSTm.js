const Tt="s3phy-thermometer-lab-css";const Ht=`
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
`;function St(){if(document.getElementById(Tt))return;const f=document.createElement("style");f.id=Tt,f.textContent=Ht,document.head.appendChild(f)}function kt(f){const V={x:12,y:12},U=200,{container:H,panel:a,toggleBtn:e,dragHandle:N,dragSurface:et,storageKey:Q,onLayoutChange:K,breakpoint:J=1024,collapsedClass:k="controls-collapsed",floatingClass:w="controls-floating"}=f,y=et||N;if(!H||!a||!e)return null;let T=sessionStorage.getItem(Q)!=="false",S=(()=>{try{const M=localStorage.getItem(Q+":pos");if(!M)return{...V};const C=JSON.parse(M);if(typeof C.x=="number"&&typeof C.y=="number")return C}catch{}return{...V}})(),L=null,W=null;const z=()=>window.innerWidth>=J,O=(M,C)=>{const it=H.getBoundingClientRect(),st=a.getBoundingClientRect(),ft=Math.max(0,it.width-st.width),ct=Math.max(0,it.height-st.height);return{x:Math.min(Math.max(0,M),ft),y:Math.min(Math.max(0,C),ct)}},E=()=>{a.style.left=S.x+"px",a.style.top=S.y+"px",a.style.right="auto",a.style.bottom="auto"},q=()=>{typeof K=="function"&&(clearTimeout(W),W=setTimeout(K,U))},_=()=>{e.setAttribute("aria-expanded",T?"false":"true"),f.getToggleTitle&&(e.title=f.getToggleTitle(T));const M=e.querySelector("[data-float-chevron]");M&&(M.textContent=T?"v":"^")},B=()=>{z()&&(S=O(S.x,S.y),E())},Z=M=>{T=M,a.classList.toggle(k,T),sessionStorage.setItem(Q,T?"true":"false"),_(),q(),requestAnimationFrame(B),setTimeout(B,260)},lt=()=>{H.classList.add(w),a.classList.add("lab-controls-float"),S=O(S.x,S.y),E(),N&&(N.style.display="")},j=()=>{H.classList.remove(w),a.classList.remove("lab-controls-float"),a.style.left="",a.style.top="",a.style.right="",a.style.bottom="",N&&(N.style.display="none")},rt=()=>{z()?(lt(),S=O(S.x,S.y),E()):j(),q()};if(a.classList.toggle(k,T),_(),rt(),e.addEventListener("click",M=>{M.stopPropagation(),Z(!T)}),y){y.addEventListener("pointerdown",C=>{z()&&(e.contains(C.target)||(C.preventDefault(),L={pointerId:C.pointerId,startX:C.clientX,startY:C.clientY,originX:S.x,originY:S.y},y.setPointerCapture(C.pointerId),y.classList.add("is-dragging")))}),y.addEventListener("pointermove",C=>{!L||L.pointerId!==C.pointerId||(S=O(L.originX+C.clientX-L.startX,L.originY+C.clientY-L.startY),E())});const M=C=>{if(!(!L||L.pointerId!==C.pointerId)){y.releasePointerCapture(C.pointerId),y.classList.remove("is-dragging");try{localStorage.setItem(Q+":pos",JSON.stringify(S))}catch{}L=null,q()}};y.addEventListener("pointerup",M),y.addEventListener("pointercancel",M)}return window.addEventListener("resize",rt),{setCollapsed:Z,refreshMode:rt,isCollapsed:()=>T}}function Wt(f,h={}){St();const V=h.type||"liquid";let U=f("tools.thermometerLab.title"),H=f("tools.thermometerLab.subtitle");h.type==="liquid"?(U=f("tools.thermometerLab.liquid.title"),H=f("tools.thermometerLab.liquid.subtitle")||f("tools.thermometerLab.subtitle")):h.type==="resistance"?(U=f("tools.thermometerLab.resistance.title"),H=f("tools.thermometerLab.resistance.subtitle")||f("tools.thermometerLab.subtitle")):h.type==="thermistor"&&(U=f("tools.thermometerLab.thermistor.title"),H=f("tools.thermometerLab.thermistor.subtitle")||f("tools.thermometerLab.subtitle"));const a=document.createElement("div");a.className="tl-wrap",a.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${U}</h2>
      <div class="tl-sub">${H}</div>
    </div>
    <div class="tl-dash">
      <!-- TOP ROW LEFT: THERMOMETER VIEW -->
      <div class="tl-viz-phys" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;">
        <canvas class="tl-canvas-phys" id="tl-thermometerCanvas" width="460" height="340"></canvas>
        <button class="tl-btn" id="tl-btn-toggle-labels" style="margin-top:4px;width:100%;display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.75rem;padding:6px 10px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <span id="tl-lbl-toggle-labels">${f("tools.thermometerLab.labels.hide")}</span>
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
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
            <div class="tl-worked-solution tl-dual-direction">
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction A: Length to Temperature (L<sub>T</sub> &rarr; T)</div>
                <div id="tl-svg-formula-liquid" class="tl-math-formula" style="min-height:55px; margin:4px 0"></div>
                <p style="margin:2px 0; font-size:0.95rem">Substitute current reading <b class="tl-live-value" id="tl-live-liquid-lt">5.50 cm</b>:</p>
                <div id="tl-svg-formula-liquid-sub" class="tl-math-formula" style="min-height:90px; margin:4px 0"></div>
              </div>
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Length (T &rarr; L<sub>T</sub>)</div>
                <p style="margin:2px 0; font-size:0.95rem">Substitute current bath temperature <b class="tl-live-value" id="tl-live-liquid-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-l" class="tl-math-formula" style="min-height:100px; margin:4px 0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tl-live-tab" id="tl-live-resistance">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
            <div class="tl-worked-solution tl-dual-direction">
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction A: Resistance to Temperature (R<sub>T</sub> &rarr; T)</div>
                <div id="tl-svg-formula-resistance" class="tl-math-formula" style="min-height:55px; margin:4px 0"></div>
                <p style="margin:2px 0; font-size:0.95rem">Substitute current resistance <b class="tl-live-value" id="tl-live-resistance-rt">5.30 Ω</b>:</p>
                <div id="tl-svg-formula-resistance-sub" class="tl-math-formula" style="min-height:90px; margin:4px 0"></div>
              </div>
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Resistance (T &rarr; R<sub>T</sub>)</div>
                <p style="margin:2px 0; font-size:0.95rem">Substitute current bath temperature <b class="tl-live-value" id="tl-live-resistance-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-r" class="tl-math-formula" style="min-height:100px; margin:4px 0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tl-live-tab" id="tl-live-thermistor">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-green)">${f("tools.thermometerLab.thermistor.liveBetaLabel")}</div>
            <div class="tl-worked-solution" style="background-color:rgba(16,185,129,0.05);border-left-color:var(--tl-green)">
              <div id="tl-svg-formula-thermistor" class="tl-math-formula"></div>
              <p style="font-size:0.95rem">Substitute current resistance <b class="tl-live-value" id="tl-live-thermistor-rt">10.00 kΩ</b>:</p>
              <div id="tl-svg-formula-thermistor-sub" class="tl-math-formula"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- FLOATING CONTROLS & SOLVERS -->
      <div class="tl-controls controls-collapsed">
        <div class="tl-controls-float-bar">
          <button type="button" class="tl-controls-drag-handle" id="tl-controls-drag" aria-label="${f("tools.floatingControls.dragHint")}" title="${f("tools.floatingControls.dragHint")}">⋮⋮</button>
          <button type="button" class="tl-controls-toggle" id="tl-controls-toggle" aria-expanded="false">
            <span data-float-chevron>▾</span>
            <span>${f("tools.thermometerLab.paramSettings")}</span>
          </button>
        </div>
        <div class="tl-controls-body">

        <!-- TAB 1: LIQUID-IN-GLASS -->
        <div class="tl-tab-content active" id="tl-tab-liquid">
          <details class="tl-details">
            <summary>${f("tools.thermometerLab.paramSettings")}</summary>
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
                    <span>Bulb Volume (V<sub>b</sub>)</span>
                    <span class="tl-badge" id="tl-val-bulb-vol">200 mm³</span>
                  </div>
                  <input type="range" id="tl-slider-bulb-vol" min="10" max="1000" step="10" value="200">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Wall Thickness (w)</span>
                    <span class="tl-badge" id="tl-val-wall-thickness">0.5 mm</span>
                  </div>
                  <input type="range" id="tl-slider-wall-thick" min="0.05" max="3.0" step="0.05" value="0.5">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Capillary Bore Diameter (d)</span>
                    <span class="tl-badge" id="tl-val-capillary-bore">0.3 mm</span>
                  </div>
                  <input type="range" id="tl-slider-capillary-bore" min="0.05" max="2.0" step="0.05" value="0.3">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Ice Point Column Length (L<sub>0</sub>)</span>
                    <span class="tl-badge" id="tl-val-liquid-l0">3.0 cm</span>
                  </div>
                  <input type="range" id="tl-slider-liquid-l0" min="0.5" max="15.0" step="0.1" value="3.0">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Steam Point Column Length (L<sub>100</sub>)</span>
                    <span class="tl-badge" id="tl-val-liquid-l100">13.0 cm</span>
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
            <summary>${f("tools.thermometerLab.paramSettings")}</summary>
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
                    <span>Ice Point Resistance (R<sub>0</sub>)</span>
                    <span class="tl-badge" id="tl-val-resistance-r0">5.0 Ω</span>
                  </div>
                  <input type="range" id="tl-slider-resistance-r0" min="0.5" max="20.0" step="0.1" value="5.0">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Steam Point Resistance (R<sub>100</sub>)</span>
                    <span class="tl-badge" id="tl-val-resistance-r100">6.2 Ω</span>
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

          <details class="tl-details">
            <summary>${f("tools.thermometerLab.resistanceSolver")}</summary>
            <div class="tl-details-body">
              <div class="tl-calc-inputs">
                <span>Measured Resistance (R):</span>
                <div class="tl-input-with-unit">
                  <input type="number" id="tl-input-q11-r" value="7.7" step="0.1" class="tl-calc-input">
                  <span class="tl-unit">Ω</span>
                </div>
              </div>
              <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
                <div id="tl-svg-formula-resistance-solver" class="tl-math-formula" style="font-size:0.85rem"></div>
              </div>
            </div>
          </details>
        </div>

        <!-- TAB 3: THERMISTOR -->
        <div class="tl-tab-content" id="tl-tab-thermistor">
          <details class="tl-details">
            <summary>${f("tools.thermometerLab.paramSettings")}</summary>
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
                    <span>Resistance at 25°C (R<sub>25</sub>)</span>
                    <span class="tl-badge" id="tl-val-thermistor-r25">10.0 kΩ</span>
                  </div>
                  <input type="range" id="tl-slider-thermistor-r25" min="0.5" max="50.0" step="0.1" value="10.0">
                </div>
                <div class="tl-cg">
                  <div class="tl-lr">
                    <span>Beta Parameter (β)</span>
                    <span class="tl-badge" id="tl-val-thermistor-beta">3500 K</span>
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
  `;const e={liquidType:"mercury",thermometerType:V,bulbVolume:200,wallThickness:.5,capillaryBore:.3,liquidL0:3,liquidL100:13,resistanceR0:5,resistanceR100:6.2,thermistorR25:10,thermistorBeta:3500,bathTemp:25,thermometerTemp:25,bubbles:[],iceCubes:[],heatWaves:[],steamParticles:[],currentLength:5.5,currentResistance:5.3,currentThermistorR:10,lastTimestamp:0,showLabels:!0},N=460,et=340,Q=40,K=640,J=420;function k(){const t={left:110,top:48,right:30,bottom:65};return{gx:t.left,gy:t.top,gw:K-t.left-t.right,gh:J-t.top-t.bottom,tickFont:`bold ${Math.round(K*.024)}px Arial`,axisFont:`bold ${Math.round(K*.026)}px Arial`,dotR:8,yLabelX:t.left-75,xLabelY:J-t.bottom+32}}function w(){return{minT:0,maxT:200,tickStep:25}}function y(t,l,r,o,s){return o+(t-l)/(r-l)*s}function T(t,l,r,o,s){return o+s-(t-l)/(r-l)*s}function S(t,l,r,o,s,b,d=null){const{gx:n,gy:c,gw:u,gh:i,tickFont:g,axisFont:x,yLabelX:p,xLabelY:F}=l;t.strokeStyle="#1e1e24",t.lineWidth=1;for(const m of b){const v=T(m.value,m.min,m.max,c,i);t.beginPath(),t.moveTo(n,v),t.lineTo(n+u,v),t.stroke()}for(let m=r;m<=o+.01;m+=s){const v=y(m,r,o,n,u);t.beginPath(),t.moveTo(v,c),t.lineTo(v,c+i),t.stroke()}t.strokeStyle="#4b5563",t.lineWidth=2.5,t.beginPath(),t.moveTo(n,c),t.lineTo(n,c+i),t.lineTo(n+u,c+i),t.stroke(),t.fillStyle="#e4e4e7",t.font=g,t.textAlign="right",t.textBaseline="middle";for(const m of b){const v=T(m.value,m.min,m.max,c,i);t.fillText(m.label,n-15,v)}t.textAlign="center",t.textBaseline="top";for(let m=r;m<=o+.01;m+=s){if(d!=null&&Math.abs(m-d)<.25)continue;const v=y(m,r,o,n,u);t.fillText(`${Math.round(m)}`,v,c+i+10)}return{gx:n,gy:c,gw:u,gh:i,axisFont:x,yLabelX:p,xLabelY:F}}function L(t,l){const r=l-t,o=r<=8?1:r<=14?2:5,s=[],b=Math.ceil(t/o)*o;for(let d=b;d<=l+.001;d+=o)s.push({value:d,label:d%1===0?`${d.toFixed(0)}`:`${d.toFixed(1)}`,min:t,max:l});return s}function W(){const{maxT:t}=w(),l=z(0),r=z(t),o=r-l,s=Math.max(1,o*.1),b=Math.max(0,Math.round((l-s)*10)/10),d=Math.round((r+s)*10)/10;return{minL:b,maxL:d}}function z(t){return e.liquidL0+(e.liquidL100-e.liquidL0)/100*t}function O(){const{maxT:t}=w(),l=E(0),r=E(t),o=r-l,s=Math.max(.2,o*.1),b=Math.max(0,l-s),d=r+s,n=o<=2?.5:o<=4?1:2,c=[],u=Math.ceil(b/n)*n;for(let i=u;i<=d+.001;i+=n)c.push({value:i,label:i.toFixed(1),min:b,max:d});return{minR:b,maxR:d,ticks:c}}function E(t){return e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*t}function q(t){const{maxT:l}=t;let r=e.thermistorR25;for(let d=0;d<=l;d+=5){const n=d+273.15,c=e.thermistorR25*Math.exp(e.thermistorBeta*(1/n-1/298.15));r=Math.max(r,c)}r=Math.ceil(r*1.08*10)/10;const o=0,s=r<=12?2:4,b=[];for(let d=0;d<=r+.001;d+=s)b.push({value:d,label:d.toFixed(0),min:o,max:r});return{minR:o,maxR:r,ticks:b}}const _=a.querySelector("#tl-thermometerCanvas"),B=_.getContext("2d"),Z=a.querySelector("#tl-graphCanvas"),lt=Z.getContext("2d"),j=window.devicePixelRatio||1;_.width=N*j,_.height=et*j,B.scale(j,j),Z.width=K*j,Z.height=J*j,lt.scale(j,j);function rt(){e.iceCubes=[];for(let t=0;t<5;t++)e.iceCubes.push({x:60+Math.random()*120,y:200+Math.random()*15,size:12+Math.random()*8,angle:Math.random()*Math.PI,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.15});e.bubbles=[];for(let t=0;t<20;t++)e.bubbles.push({x:60+Math.random()*120,y:190+Math.random()*70,r:1+Math.random()*3.5,speedY:.8+Math.random()*1.5,phase:Math.random()*Math.PI*2,wobbleSpeed:.08+Math.random()*.08});e.heatWaves=[];for(let t=0;t<8;t++)e.heatWaves.push({x:65+Math.random()*110,y:190+Math.random()*60,length:15+Math.random()*15,speedY:.5+Math.random()*.6,opacity:.15+Math.random()*.25});e.steamParticles=[];for(let t=0;t<12;t++)e.steamParticles.push({x:60+Math.random()*120,y:175+Math.random()*10,r:2+Math.random()*4,vx:(Math.random()-.5)*.3,vy:-.4-Math.random()*.6,alpha:.2+Math.random()*.4})}const M=200,C=11;function it(){const t=Math.pow(e.bulbVolume/M,.3333333333333333);return C*t}function st(){if(e.thermometerType==="resistance"||e.thermometerType==="thermistor")return .35;const t=e.liquidType==="mercury"?1:8,l=.2+e.wallThickness*1.5,r=.4+e.bulbVolume*.003,o=1.35-e.capillaryBore*.45;return Math.max(.1,l*r*o*t*.15)}function ft(t){e.bathTemp<=8&&e.iceCubes.forEach(l=>{l.x+=l.speedX,l.y+=l.speedY,(l.x<65||l.x>175)&&(l.speedX*=-1),(l.y<195||l.y>210)&&(l.speedY*=-1)}),e.bathTemp>35&&e.heatWaves.forEach(l=>{l.y-=l.speedY*(1+e.bathTemp/100),l.y<185&&(l.y=265,l.x=65+Math.random()*110)}),e.bathTemp>=80&&e.bubbles.forEach(l=>{l.y-=l.speedY*(1+(e.bathTemp-80)/40),l.phase+=l.wobbleSpeed,l.x+=Math.sin(l.phase)*.3,l.y<185&&(l.y=260+Math.random()*10,l.x=60+Math.random()*120)}),e.bathTemp>=95&&e.steamParticles.forEach(l=>{l.x+=l.vx,l.y+=l.vy,l.alpha-=.005,(l.alpha<=0||l.y<130)&&(l.x=60+Math.random()*120,l.y=175+Math.random()*5,l.alpha=.2+Math.random()*.4)})}function ct(t){let d=59,n=130,c=246;if(e.bathTemp<25){const p=e.bathTemp/25;d=Math.round(180-p*121),n=Math.round(210-p*80),c=Math.round(250-p*4)}else{const p=Math.min(1,(e.bathTemp-25)/125);d=Math.round(59+p*180),n=Math.round(130-p*100),c=Math.round(246-p*190)}if(e.bathTemp>40){const p=Math.min(1,(e.bathTemp-40)/100),F=Date.now()*.02;t.fillStyle=`rgba(239, 68, 68, ${p*.25})`,t.beginPath(),t.roundRect(45,284,150,10,4),t.fill(),t.fillStyle="rgba(249, 115, 22, 0.85)",t.beginPath(),t.moveTo(55+130/2-25,284);for(let m=-25;m<=25;m+=6){const v=p*(12+Math.sin(m*.4+F)*5);t.lineTo(55+130/2+m,284-v)}t.lineTo(55+130/2+25,284),t.closePath(),t.fill()}t.strokeStyle="#4b5563",t.lineWidth=2,t.fillStyle="#121214",t.beginPath(),t.roundRect(55,180,130,100,[0,0,10,10]),t.fill();const u=t.createLinearGradient(55,190,55,280);u.addColorStop(0,`rgba(${d}, ${n}, ${c}, 0.25)`),u.addColorStop(1,`rgba(${d}, ${n}, ${c}, 0.55)`),t.fillStyle=u,t.beginPath(),t.moveTo(55,190);const i=e.bathTemp>=80?2:.5,g=e.bathTemp>=80?.09:.03,x=Date.now()*g;for(let p=55;p<=185;p+=5){const F=190+Math.sin(p*.15+x)*i;t.lineTo(p,F)}t.lineTo(185,280),t.lineTo(55,280),t.closePath(),t.fill(),e.bathTemp>35&&(t.strokeStyle=`rgba(239, 68, 68, ${Math.min(.5,(e.bathTemp-35)/120)})`,t.lineWidth=1.2,e.heatWaves.forEach(p=>{t.beginPath(),t.moveTo(p.x,p.y),t.quadraticCurveTo(p.x+Math.sin(p.y*.06)*5,p.y-p.length/2,p.x,p.y-p.length),t.stroke()})),e.bathTemp<=8&&(t.fillStyle="rgba(224, 242, 254, 0.55)",t.strokeStyle="rgba(186, 230, 253, 0.8)",t.lineWidth=1,e.iceCubes.forEach(p=>{t.save(),t.translate(p.x,p.y),t.rotate(p.angle),t.beginPath(),t.roundRect(-p.size/2,-p.size/2,p.size,p.size,3),t.fill(),t.stroke(),t.restore()})),e.bathTemp>=80&&(t.fillStyle="rgba(255, 255, 255, 0.4)",t.strokeStyle="rgba(255, 255, 255, 0.65)",t.lineWidth=.6,e.bubbles.forEach(p=>{t.beginPath(),t.arc(p.x,p.y,p.r,0,Math.PI*2),t.fill(),t.stroke()})),e.bathTemp>=95&&e.steamParticles.forEach(p=>{t.fillStyle=`rgba(255, 255, 255, ${p.alpha})`,t.beginPath(),t.arc(p.x,p.y,p.r,0,Math.PI*2),t.fill()}),t.strokeStyle="#9ca3af",t.lineWidth=3.5,t.beginPath(),t.moveTo(54,180),t.lineTo(54,272),t.arcTo(54,281,65,281,8),t.lineTo(175,281),t.arcTo(186,281,186,272,8),t.lineTo(186,180),t.stroke(),t.strokeStyle="rgba(255, 255, 255, 0.4)",t.lineWidth=1.5,t.beginPath(),t.moveTo(59,190),t.lineTo(59,270),t.stroke()}function tt(t,l,r,o,s,b,d="left"){if(!e.showLabels)return;t.strokeStyle="rgba(6, 182, 212, 0.7)",t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.moveTo(l,r),t.lineTo(o,s),t.stroke(),t.setLineDash([]),t.fillStyle="#06b6d4",t.beginPath(),t.arc(l,r,3,0,Math.PI*2),t.fill(),t.font="bold 9px system-ui, sans-serif";const c=t.measureText(b).width+10,u=16,i=d==="left"?o:o-c,g=s-u/2;t.fillStyle="rgba(21, 21, 24, 0.9)",t.strokeStyle="#06b6d4",t.lineWidth=1,t.beginPath(),t.roundRect(i,g,c,u,4),t.fill(),t.stroke(),t.fillStyle="#f4f4f5",t.textAlign="center",t.textBaseline="middle",t.fillText(b,i+c/2,g+u/2+.5)}function Ct(t){const o=it(),s=250+Math.max(0,o-C)*.35,b=s-o-1,d=10+e.wallThickness*8,n=120-d/2,c=120+d/2,u=t.createLinearGradient(n,20,c,20);u.addColorStop(0,"rgba(209, 213, 219, 0.85)"),u.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),u.addColorStop(.5,"rgba(243, 244, 246, 0.15)"),u.addColorStop(.8,"rgba(255, 255, 255, 0.95)"),u.addColorStop(1,"rgba(156, 163, 175, 0.9)"),t.fillStyle=u,t.strokeStyle="rgba(156, 163, 175, 0.8)",t.lineWidth=1,t.beginPath(),t.moveTo(n,b),t.lineTo(n,25),t.arcTo(n,20,n+5,20,5),t.arcTo(c,20,c,25,5),t.lineTo(c,b),t.closePath(),t.fill(),t.stroke();const i=t.createRadialGradient(120-o*.2,s-o*.2,o*.1,120,s,o);i.addColorStop(0,"rgba(255, 255, 255, 0.8)"),i.addColorStop(1,"rgba(156, 163, 175, 0.35)"),t.fillStyle=i,t.strokeStyle="#6b7280",t.lineWidth=.8+e.wallThickness*.6,t.beginPath(),t.arc(120,s,o+.5+e.wallThickness*.5,0,Math.PI*2),t.fill(),t.stroke();const g=Math.min(d*.72,.8+e.capillaryBore*4.5);t.fillStyle="#0a0a0c",t.fillRect(120-g/2,28,g,b-20-8);const x=e.liquidType==="mercury",p=x?"#a1a1aa":"#ef4444",F=x?"#f4f4f5":"#fee2e2",m=210,v=220,I=(m-40)/v,$=m-Math.min(v,e.thermometerTemp)*I;t.fillStyle=p,t.fillRect(120-g/2,$,g,b-$),t.beginPath(),t.ellipse(120,$,g/2,1.5,0,0,Math.PI*2),t.fill(),t.fillStyle=F,t.fillRect(120-g/6,$,g/3,b-$);const P=o*.9,R=t.createRadialGradient(120-P*.2,s-P*.2,P*.1,120,s,P);x?(R.addColorStop(0,"#f4f4f5"),R.addColorStop(.3,"#d4d4d8"),R.addColorStop(.8,"#71717a"),R.addColorStop(1,"#3f3f46")):(R.addColorStop(0,"#fee2e2"),R.addColorStop(.2,"#fca5a5"),R.addColorStop(.7,"#ef4444"),R.addColorStop(1,"#991b1b")),t.fillStyle=R,t.beginPath(),t.arc(120,s,P,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(161, 161, 170, 0.6)",t.lineWidth=.5,t.font="6.5px Arial",t.fillStyle="#a1a1aa",t.textAlign="right",t.textBaseline="middle";for(let G=0;G<=200;G+=50){const Y=m-G*I;t.beginPath(),t.moveTo(n,Y),t.lineTo(n+4,Y),t.stroke(),t.fillText(`${G}°C`,n-22,Y+2.5)}e.showLabels&&(tt(t,n+1,80,10,50,f("tools.thermometerLab.labels.thinWall"),"left"),tt(t,120,$,230,$-15,f("tools.thermometerLab.labels.meniscus"),"left"),tt(t,120-g/2,130,10,130,f("tools.thermometerLab.labels.narrowBore"),"left"),tt(t,120,s,230,s+15,f("tools.thermometerLab.labels.largeBulb"),"left"))}function Lt(t){const d=t.createLinearGradient(115,20,125,20);d.addColorStop(0,"#71717a"),d.addColorStop(.3,"#f4f4f5"),d.addColorStop(.7,"#d4d4d8"),d.addColorStop(1,"#3f3f46"),t.fillStyle=d,t.strokeStyle="#4b5563",t.lineWidth=1,t.beginPath(),t.roundRect(115,20,10,225,[0,0,4,4]),t.fill(),t.stroke(),t.fillStyle="rgba(21, 21, 24, 0.8)",t.fillRect(117,200,6,40),t.strokeStyle="#e2e8f0",t.lineWidth=1.2,t.beginPath();let n=205;t.moveTo(118,n);for(let x=0;x<8;x++)n+=4,t.lineTo(122,n),n+=4,t.lineTo(118,n);t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(118,20),t.bezierCurveTo(110,5,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(122,20),t.bezierCurveTo(130,8,210,45,245,75),t.stroke();const c=245,u=40,i=135,g=90;t.fillStyle="#18181b",t.strokeStyle="#6366f1",t.lineWidth=2.5,t.beginPath(),t.roundRect(c,u,i,g,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(c+10,u+12,i-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#10b981",t.textAlign="right",t.fillText(e.currentResistance.toFixed(2)+" Ω",c+i-16,u+34),t.font="6px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText("PLATINUM RTD METER",c+14,u+21),e.showLabels&&(tt(t,116,100,10,70,f("tools.thermometerLab.labels.metalSheath"),"left"),tt(t,120,225,230,205,f("tools.thermometerLab.labels.platinumCoil"),"left"))}function qt(t){t.strokeStyle="#111827",t.lineWidth=1.2,t.beginPath(),t.moveTo(118,20),t.lineTo(118,245),t.stroke(),t.beginPath(),t.moveTo(122,20),t.lineTo(122,245),t.stroke();const s=20,b=225,d=12,n=120-d/2,c=t.createLinearGradient(n,s,n+d,s);c.addColorStop(0,"rgba(229, 231, 235, 0.4)"),c.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),c.addColorStop(.7,"rgba(243, 244, 246, 0.5)"),c.addColorStop(1,"rgba(209, 213, 219, 0.6)"),t.fillStyle=c,t.strokeStyle="rgba(156, 163, 175, 0.6)",t.lineWidth=.8,t.beginPath(),t.roundRect(n,s,d,b-s,[0,0,3,3]),t.fill(),t.stroke();const u=7,i=t.createRadialGradient(120-u*.2,245-u*.2,u*.1,120,245,u);i.addColorStop(0,"#6b7280"),i.addColorStop(.7,"#1f2937"),i.addColorStop(1,"#09090b"),t.fillStyle=i,t.strokeStyle="#030712",t.lineWidth=1.2,t.beginPath(),t.arc(120,245,u,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(118,20),t.bezierCurveTo(110,5,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(122,20),t.bezierCurveTo(130,8,210,45,245,75),t.stroke();const g=245,x=40,p=135,F=90;t.fillStyle="#18181b",t.strokeStyle="#10b981",t.lineWidth=2.5,t.beginPath(),t.roundRect(g,x,p,F,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(g+10,x+12,p-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#34d399",t.textAlign="right",t.fillText(e.currentThermistorR.toFixed(2)+" kΩ",g+p-16,x+34),t.font="5px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText(f("tools.thermometerLab.thermistor.meterLabelLine1"),g+14,x+52),t.fillText(f("tools.thermometerLab.thermistor.meterLabelLine2"),g+14,x+59),e.showLabels&&(tt(t,118,120,10,90,f("tools.thermometerLab.labels.leads"),"left"),tt(t,120,245,230,225,f("tools.thermometerLab.labels.semiconductorBead"),"left"))}function pt(t,l,r,o,s,b,d,n,c){const{gx:u,gy:i,gw:g,gh:x,tickFont:p}=l;t.strokeStyle="rgba(255, 255, 255, 0.2)",t.lineWidth=1,t.setLineDash([4,4]),t.beginPath(),t.moveTo(r,o),t.lineTo(r,i+x),t.stroke(),t.beginPath(),t.moveTo(r,o),t.lineTo(u,o),t.stroke(),t.setLineDash([]);const F=i+x+10;t.font=p,t.textAlign="center",t.textBaseline="top";const m=`${s.toFixed(1)}${d}`,v=t.measureText(m).width+10,D=18;t.fillStyle=c,t.beginPath(),t.roundRect(r-v/2,F-2,v,D,3),t.fill(),t.fillStyle="#000",t.fillText(m,r,F),t.textAlign="right",t.textBaseline="middle";const I=`${b.toFixed(2)} ${n}`,$=t.measureText(I).width+10;t.fillStyle=c,t.beginPath(),t.roundRect(u-$-2,o-7,$,15,3),t.fill(),t.fillStyle="#000",t.fillText(I,u-7,o)}function zt(t){const l=k(),{minL:r,maxL:o}=W(),{minT:s,maxT:b,tickStep:d}=w(),n=L(r,o),c=S(t,l,s,b,d,n,e.thermometerTemp),{gx:u,gy:i,gw:g,gh:x,axisFont:p,yLabelX:F,xLabelY:m,dotR:v}={...l,...c};t.save(),t.translate(F,i+x/2),t.rotate(-Math.PI/2),t.font=p,t.fillStyle="#e4e4e7",t.fillText("Length of liquid column / cm",0,0),t.restore(),t.font=p,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",u+g/2,m);const D=b,I=y(0,s,b,u,g),$=T(z(0),r,o,i,x),P=y(D,s,b,u,g),R=T(z(D),r,o,i,x);t.strokeStyle="#ef4444",t.lineWidth=3,t.beginPath(),t.moveTo(I,$),t.lineTo(P,R),t.stroke();const G=e.thermometerTemp,Y=e.currentLength;if(G>=s&&G<=b){const X=y(G,s,b,u,g),ot=T(Y,r,o,i,x);pt(t,l,X,ot,G,Y,"°C","cm","#ef4444"),t.shadowColor="#ef4444",t.shadowBlur=10,t.fillStyle="#ef4444",t.beginPath(),t.arc(X,ot,v,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function Ft(t){const l=k(),{minR:r,maxR:o,ticks:s}=O(),b=w(),d=S(t,l,b.minT,b.maxT,b.tickStep,s,e.thermometerTemp),{gx:n,gy:c,gw:u,gh:i,axisFont:g,yLabelX:x,xLabelY:p,dotR:F}={...l,...d};t.save(),t.translate(x,c+i/2),t.rotate(-Math.PI/2),t.font=g,t.fillStyle="#e4e4e7",t.fillText("Resistance of platinum / Ω",0,0),t.restore(),t.font=g,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",n+u/2,p);const{minT:m,maxT:v}=b,D=v,I=y(0,m,v,n,u),$=T(E(0),r,o,c,i),P=y(D,m,v,n,u),R=T(E(D),r,o,c,i);t.strokeStyle="#6366f1",t.lineWidth=3,t.beginPath(),t.moveTo(I,$),t.lineTo(P,R),t.stroke();const G=e.thermometerTemp,Y=e.currentResistance;if(G>=m&&G<=v){const X=y(G,m,v,n,u),ot=T(Y,r,o,c,i);pt(t,l,X,ot,G,Y,"°C","Ω","#6366f1"),t.shadowColor="#6366f1",t.shadowBlur=10,t.fillStyle="#6366f1",t.beginPath(),t.arc(X,ot,F,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function Rt(t){const l=k(),r=w(),{minR:o,maxR:s,ticks:b}=q(r),d=S(t,l,r.minT,r.maxT,r.tickStep,b,e.thermometerTemp),{gx:n,gy:c,gw:u,gh:i,axisFont:g,yLabelX:x,xLabelY:p,dotR:F}={...l,...d},{minT:m,maxT:v}=r;t.save(),t.translate(x,c+i/2),t.rotate(-Math.PI/2),t.font=g,t.fillStyle="#e4e4e7",t.fillText("Resistance of thermistor / kΩ",0,0),t.restore(),t.font=g,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",n+u/2,p),t.strokeStyle="#10b981",t.lineWidth=3,t.beginPath();let D=!1;for(let P=m;P<=v;P+=1){const R=P+273.15,G=e.thermistorR25*Math.exp(e.thermistorBeta*(1/R-1/298.15)),Y=y(P,m,v,n,u),X=T(Math.min(s,G),o,s,c,i);X>=c&&X<=c+i&&(D?t.lineTo(Y,X):(t.moveTo(Y,X),D=!0))}t.stroke();const I=e.thermometerTemp,$=e.currentThermistorR;if(I>=m&&I<=v){const P=y(I,m,v,n,u),R=T(Math.min(s,$),o,s,c,i);pt(t,l,P,R,I,$,"°C","kΩ","#10b981"),t.shadowColor="#10b981",t.shadowBlur=10,t.fillStyle="#10b981",t.beginPath(),t.arc(P,R,F,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function bt(){B.clearRect(0,0,N,et),lt.clearRect(0,0,K,J),B.save(),B.translate(Q,0),ct(B),e.thermometerType==="liquid"?Ct(B):e.thermometerType==="resistance"?Lt(B):qt(B),B.restore(),e.thermometerType==="liquid"?zt(lt):e.thermometerType==="resistance"?Ft(lt):Rt(lt)}function Mt(){const t=a.querySelector("#tl-svg-formula-liquid");t&&(t.innerHTML=`
        <svg height="55" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">Slope Equation:</text>
          <line x1="120" y1="26" x2="210" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="165" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">L<tspan dy="2" font-size="8">100</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="8">0</tspan><tspan dy="-2"></tspan></text>
          <text x="165" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100 - 0</text>
          
          <text x="220" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">=</text>
          
          <line x1="240" y1="26" x2="330" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="285" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="8">0</tspan><tspan dy="-2"></tspan></text>
          <text x="285" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">T - 0</text>
        </svg>
      `);const l=a.querySelector("#tl-svg-formula-liquid-sub");if(l){const d=e.liquidL100-e.liquidL0,n=e.currentLength-e.liquidL0;l.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${e.liquidL100.toFixed(1)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${e.currentLength.toFixed(2)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">T - 0</text>

          <line x1="10" y1="68" x2="90" y2="68" stroke="#fff" stroke-width="1.2" />
          <text x="50" y="60" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${n.toFixed(2)} &times; 100</text>
          <text x="50" y="82" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${d.toFixed(1)}</text>
          
          <text x="105" y="73" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="16" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const r=a.querySelector("#tl-svg-formula-resistance");r&&(r.innerHTML=`
        <svg height="55" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">Slope Equation:</text>
          <line x1="120" y1="26" x2="210" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="165" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">R<tspan dy="2" font-size="8">100</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="8">0</tspan><tspan dy="-2"></tspan></text>
          <text x="165" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100 - 0</text>
          
          <text x="220" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">=</text>
          
          <line x1="240" y1="26" x2="330" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="285" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="8">0</tspan><tspan dy="-2"></tspan></text>
          <text x="285" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">T - 0</text>
        </svg>
      `);const o=a.querySelector("#tl-svg-formula-resistance-sub");if(o){const d=e.resistanceR100-e.resistanceR0,n=e.currentResistance-e.resistanceR0;o.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${e.currentResistance.toFixed(2)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">T - 0</text>

          <line x1="10" y1="68" x2="90" y2="68" stroke="#fff" stroke-width="1.2" />
          <text x="50" y="60" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${n.toFixed(2)} &times; 100</text>
          <text x="50" y="82" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${d.toFixed(1)}</text>
          
          <text x="105" y="73" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="16" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const s=a.querySelector("#tl-svg-formula-thermistor");s&&(s.innerHTML=`
        <svg height="50" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="23" x2="220" y2="23" stroke="#fff" stroke-width="1.5" />
          <text x="130" y="15" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">1</text>
          <text x="130" y="38" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">(1/&beta;) &bull; ln(R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2">/R</tspan><tspan dy="2" font-size="8">25</tspan><tspan dy="-2">) + 1/298.15</tspan></text>
          <text x="230" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">- 273.15</text>
        </svg>
      `);const b=a.querySelector("#tl-svg-formula-thermistor-sub");if(b){const d=e.thermometerTemp+273.15;b.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            T<tspan dy="3" font-size="10">K</tspan><tspan dy="-3" fill="#10b981" font-weight="bold"> = ${d.toFixed(2)} K</tspan>
            <tspan fill="#fff"> &rArr; T = </tspan>
            <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${e.thermometerTemp.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `}}function $t(){const t=a.querySelector("#tl-faulty-svg-container");if(!t)return;const{cf:l,cu:r,interval:o}=ht(),s=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,b=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,d=a.querySelector("#tl-pane-q10a").classList.contains("active"),n=d?(s-l)/o*100:b,c=d?s:b/100*o+l,i=(g=>130-g/100*80)(n);t.innerHTML=`
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
          <text x="65" y="${i+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${n.toFixed(1)}°C</text>

          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${f("tools.thermometerLab.faulty.trueScale")}</text>
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
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${r.toFixed(1)}°C</tspan></text>

          <!-- Current Faulty Point -->
          <text x="125" y="${i+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${c.toFixed(1)}°C</text>

          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${f("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>

        <!-- Connecting Ratio Indicator Line -->
        <line x1="86" y1="${i}" x2="236" y2="${i}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${i}" r="3" fill="#34d399" />
        <circle cx="236" cy="${i}" r="3" fill="#34d399" />
      </svg>
    `}function Pt(t){a.querySelector("#tl-bath-temp-display").innerHTML=e.bathTemp.toFixed(1)+"°C",a.querySelector("#tl-val-bath-temp").innerHTML=e.bathTemp.toFixed(1)+" °C";const l=a.querySelector("#tl-bath-state");e.bathTemp<=0?l.textContent="Melting Ice Bath":e.bathTemp>=100?l.textContent="Boiling Water/Steam":e.bathTemp===150?l.textContent="Hot Cooking Oil":l.textContent="Liquid Water",a.querySelector("#tl-val-response-time").textContent=t.toFixed(2)+" s";const r=a.querySelector("#tl-alcohol-boiling-warning");e.thermometerType==="liquid"&&e.liquidType==="alcohol"&&e.bathTemp>=78?r.style.display="block":r.style.display="none",e.thermometerType==="liquid"?(a.querySelector("#tl-live-liquid-lt").textContent=e.currentLength.toFixed(2)+" cm",a.querySelector("#tl-live-liquid-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):e.thermometerType==="resistance"?(a.querySelector("#tl-live-resistance-rt").textContent=e.currentResistance.toFixed(2)+" Ω",a.querySelector("#tl-live-resistance-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):a.querySelector("#tl-live-thermistor-rt").textContent=e.currentThermistorR.toFixed(2)+" kΩ",Mt()}let nt=null;function mt(t){e.lastTimestamp||(e.lastTimestamp=t);const l=(t-e.lastTimestamp)/1e3;e.lastTimestamp=t;const r=Math.min(l,.1),o=st(),s=r/o*(e.bathTemp-e.thermometerTemp);e.thermometerTemp+=s,e.currentLength=e.liquidL0+(e.liquidL100-e.liquidL0)/100*e.thermometerTemp,e.currentResistance=e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*e.thermometerTemp;const b=e.thermometerTemp+273.15;e.currentThermistorR=e.thermistorR25*Math.exp(e.thermistorBeta*(1/b-1/298.15)),ft(),bt(),Pt(o),nt=requestAnimationFrame(mt)}function ht(){const t=parseFloat(a.querySelector("#tl-input-faulty-cf").value),l=parseFloat(a.querySelector("#tl-input-faulty-cu").value),r=Number.isFinite(t)?t:-1.5,o=Number.isFinite(l)?l:105,s=o-r;return{cf:r,cu:o,interval:s}}function ut(t){const l=Math.round(t*100)/100;return l>=0?l.toFixed(1):`(${l.toFixed(1)})`}function at(){if(!a.querySelector("#tl-input-faulty-cf"))return;const{cf:t,cu:l,interval:r}=ht(),o=a.querySelector("#tl-val-faulty-interval"),s=a.querySelector("#tl-faulty-error-a"),b=a.querySelector("#tl-faulty-error-b"),d=Math.abs(r)<.01;o.textContent=r.toFixed(1)+" °C";const n=a.querySelector("#tl-svg-formula-faulty-a"),c=a.querySelector("#tl-svg-formula-faulty-b");if(d){s.hidden=!1,s.textContent="C_u must differ from C_f (interval cannot be zero).",b.hidden=!1,b.textContent=s.textContent,n&&(n.innerHTML=""),c&&(c.innerHTML="");return}s.hidden=!0,b.hidden=!0;const u=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,i=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,g=(u-t)/r*100,x=i/100*r+t;n&&(n.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${u.toFixed(1)} - ${ut(t)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${l.toFixed(1)} - ${ut(t)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${g.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),c&&(c.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${i.toFixed(1)} &times; ${r.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${ut(t)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${x.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),$t()}function gt(){const t=parseFloat(a.querySelector("#tl-input-q11-r").value)||0,l=(t-e.resistanceR0)/(e.resistanceR100-e.resistanceR0)*100,r=a.querySelector("#tl-svg-formula-resistance-solver");r&&(r.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">&theta; =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="13" text-anchor="middle">${t.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${l.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `)}function Gt(){const t=e.thermometerTemp,l=e.liquidL100-e.liquidL0,r=e.liquidL0+l/100*t,o=a.querySelector("#tl-svg-formula-t-to-l");o&&(o.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${e.liquidL100.toFixed(1)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${e.liquidL0.toFixed(1)}</tspan></text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${t.toFixed(1)} - 0</text>

          <text x="10" y="73" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${e.liquidL0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${l.toFixed(1)} / 100)</tspan> &times; ${t.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${r.toFixed(2)} cm</tspan>
          </text>
        </svg>
      `)}function Et(){const t=e.thermometerTemp,l=e.resistanceR100-e.resistanceR0,r=e.resistanceR0+l/100*t,o=a.querySelector("#tl-svg-formula-t-to-r");o&&(o.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${e.resistanceR0.toFixed(1)}</tspan></text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${t.toFixed(1)} - 0</text>

          <text x="10" y="73" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${e.resistanceR0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${l.toFixed(1)} / 100)</tspan> &times; ${t.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${r.toFixed(2)} Ω</tspan>
          </text>
        </svg>
      `)}function A(){at(),gt(),Gt(),Et()}function dt(t,l){a.querySelector("#"+t).addEventListener("click",()=>{e.bathTemp=l,a.querySelector("#tl-bath-temp-slider").value=l,A()})}function yt(t){a.querySelectorAll(".tl-tab-btn").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tl-tab")===t)}),a.querySelectorAll(".tl-tab-content").forEach(l=>{l.classList.toggle("active",l.id==="tl-tab-"+t)}),a.querySelectorAll(".tl-live-tab").forEach(l=>{l.classList.toggle("active",l.id==="tl-live-"+t)}),e.thermometerType=t}function Bt(){var d,n,c,u;a.querySelectorAll(".tl-tab-btn").forEach(i=>{i.addEventListener("click",()=>{yt(i.getAttribute("data-tl-tab")),A()})}),a.querySelector("#tl-btn-toggle-labels").addEventListener("click",()=>{e.showLabels=!e.showLabels,a.querySelector("#tl-lbl-toggle-labels").textContent=e.showLabels?f("tools.thermometerLab.labels.hide"):f("tools.thermometerLab.labels.show")}),a.querySelector("#tl-bath-temp-slider").addEventListener("input",i=>{e.bathTemp=parseFloat(i.target.value),A()}),dt("tl-btn-preset-ice",0),dt("tl-btn-preset-room",25),dt("tl-btn-preset-steam",100),dt("tl-btn-preset-oil",150),a.querySelector("#tl-card-mercury").addEventListener("click",()=>{e.liquidType="mercury",a.querySelector("#tl-card-mercury").className="tl-seg-btn active-mercury",a.querySelector("#tl-card-alcohol").className="tl-seg-btn",A()}),a.querySelector("#tl-card-alcohol").addEventListener("click",()=>{e.liquidType="alcohol",a.querySelector("#tl-card-mercury").className="tl-seg-btn",a.querySelector("#tl-card-alcohol").className="tl-seg-btn active-alcohol",A()}),a.querySelector("#tl-slider-bulb-vol").addEventListener("input",i=>{e.bulbVolume=parseFloat(i.target.value),a.querySelector("#tl-val-bulb-vol").textContent=e.bulbVolume+" mm³"}),a.querySelector("#tl-slider-wall-thick").addEventListener("input",i=>{e.wallThickness=parseFloat(i.target.value),a.querySelector("#tl-val-wall-thickness").textContent=e.wallThickness.toFixed(1)+" mm"}),a.querySelector("#tl-slider-capillary-bore").addEventListener("input",i=>{e.capillaryBore=parseFloat(i.target.value),a.querySelector("#tl-val-capillary-bore").textContent=e.capillaryBore.toFixed(2)+" mm"}),a.querySelector("#tl-slider-liquid-l0").addEventListener("input",i=>{e.liquidL0=parseFloat(i.target.value),a.querySelector("#tl-val-liquid-l0").textContent=e.liquidL0.toFixed(1)+" cm",A()}),a.querySelector("#tl-slider-liquid-l100").addEventListener("input",i=>{e.liquidL100=parseFloat(i.target.value),a.querySelector("#tl-val-liquid-l100").textContent=e.liquidL100.toFixed(1)+" cm",A()}),a.querySelector("#tl-slider-resistance-r0").addEventListener("input",i=>{e.resistanceR0=parseFloat(i.target.value),a.querySelector("#tl-val-resistance-r0").textContent=e.resistanceR0.toFixed(1)+" Ω",a.querySelector("#tl-spec-resistance-r0").textContent=e.resistanceR0.toFixed(1)+" Ω",A()}),a.querySelector("#tl-slider-resistance-r100").addEventListener("input",i=>{e.resistanceR100=parseFloat(i.target.value),a.querySelector("#tl-val-resistance-r100").textContent=e.resistanceR100.toFixed(1)+" Ω",a.querySelector("#tl-spec-resistance-r100").textContent=e.resistanceR100.toFixed(1)+" Ω",A()}),a.querySelector("#tl-slider-thermistor-r25").addEventListener("input",i=>{e.thermistorR25=parseFloat(i.target.value),a.querySelector("#tl-val-thermistor-r25").textContent=e.thermistorR25.toFixed(1)+" kΩ",a.querySelector("#tl-spec-thermistor-r25").textContent=e.thermistorR25.toFixed(1)+" kΩ",A()}),a.querySelector("#tl-slider-thermistor-beta").addEventListener("input",i=>{e.thermistorBeta=parseFloat(i.target.value),a.querySelector("#tl-val-thermistor-beta").textContent=e.thermistorBeta+" K",a.querySelector("#tl-spec-thermistor-beta").textContent=e.thermistorBeta+" K",A()});const r=a.querySelector("#tl-btn-solve-q10a"),o=a.querySelector("#tl-btn-solve-q10b");r&&o&&(r.addEventListener("click",()=>{r.classList.add("active"),o.classList.remove("active"),a.querySelector("#tl-pane-q10a").classList.add("active"),a.querySelector("#tl-pane-q10b").classList.remove("active"),at()}),o.addEventListener("click",()=>{r.classList.remove("active"),o.classList.add("active"),a.querySelector("#tl-pane-q10a").classList.remove("active"),a.querySelector("#tl-pane-q10b").classList.add("active"),at()})),(d=a.querySelector("#tl-input-faulty-cf"))==null||d.addEventListener("input",at),(n=a.querySelector("#tl-input-faulty-cu"))==null||n.addEventListener("input",at),(c=a.querySelector("#tl-input-q10a-cm"))==null||c.addEventListener("input",at),(u=a.querySelector("#tl-input-q10b-t"))==null||u.addEventListener("input",at),a.querySelector("#tl-input-q11-r").addEventListener("input",gt);const s=a.querySelector("#tl-input-t-to-l");s&&s.addEventListener("input",A);const b=a.querySelector("#tl-input-t-to-r");b&&b.addEventListener("input",A)}if(h.type){const t=a.querySelector(".tl-tabs-container");t&&(t.style.display="none")}yt(V),rt(),Bt(),A();const xt=a.querySelector(".tl-dash"),vt=a.querySelector(".tl-controls"),wt=a.querySelector("#tl-controls-toggle"),At=a.querySelector("#tl-controls-drag"),It=a.querySelector(".tl-controls-float-bar");return xt&&vt&&wt&&kt({container:xt,panel:vt,toggleBtn:wt,dragHandle:At,dragSurface:It,storageKey:`s3phy-thermo-${V}`,breakpoint:1024,getToggleTitle:t=>f(t?"tools.floatingControls.showParams":"tools.floatingControls.hideParams"),onLayoutChange:()=>bt()}),nt=requestAnimationFrame(mt),a._thermometerLabCleanup=()=>{nt&&cancelAnimationFrame(nt)},a}function Yt(f){St();const h=document.createElement("div");h.className="tl-wrap tl-wrap--faulty-cal",h.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${f("tools.faultyCalibration.title")}</h2>
      <div class="tl-sub">${f("tools.faultyCalibration.subtitle")}</div>
    </div>
    <div class="tl-dash tl-dash--faulty">
      <section class="tl-faulty-hero">
        <div class="tl-info-card" style="margin:0">
          <div class="tl-info-label">${f("tools.faultyCalibration.formulaTitle")}</div>
          <p style="margin:0;font-size:0.82rem">T / 100 = (C − C<sub>f</sub>) / (C<sub>u</sub> − C<sub>f</sub>)</p>
        </div>
        <div class="tl-info-label" style="font-size:0.78rem;color:var(--tl-muted);margin:0;">${f("tools.thermometerLab.faulty.dualScale")}</div>
        <div id="fsc-faulty-svg-container" class="tl-faulty-hero-viz"></div>
      </section>

      <section class="tl-faulty-live">
        <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-cyan)">${f("tools.faultyCalibration.liveLabel")}</div>
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
          <button type="button" class="tl-controls-drag-handle" id="fsc-controls-drag" aria-label="${f("tools.floatingControls.dragHint")}" title="${f("tools.floatingControls.dragHint")}">⋮⋮</button>
          <button type="button" class="tl-controls-toggle" id="fsc-controls-toggle" aria-expanded="false">
            <span data-float-chevron>▾</span>
            <span>${f("tools.thermometerLab.paramSettings")}</span>
          </button>
        </div>
        <div class="tl-controls-body">
          <p style="font-size:0.75rem;color:var(--tl-muted);margin:0 0 8px">${f("tools.faultyCalibration.intro")}</p>
          <div class="tl-faulty-cal">
            <div class="tl-calc-inputs">
              <span>${f("tools.faultyCalibration.iceReading")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-faulty-cf" value="-1.5" step="0.1" class="tl-calc-input" aria-label="Ice point faulty reading">
                <span class="tl-unit">°C</span>
              </div>
            </div>
            <div class="tl-calc-inputs">
              <span>${f("tools.faultyCalibration.steamReading")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-faulty-cu" value="105" step="0.1" class="tl-calc-input" aria-label="Steam point faulty reading">
                <span class="tl-unit">°C</span>
              </div>
            </div>
          </div>
          <div class="tl-faulty-interval">
            <span>${f("tools.faultyCalibration.interval")}</span>
            <b id="fsc-val-faulty-interval">106.5 °C</b>
          </div>
          <div class="tl-solver-tabs">
            <button class="tl-solver-tab-btn active" id="fsc-btn-solve-q10a">${f("tools.faultyCalibration.findTrueTemp")}</button>
            <button class="tl-solver-tab-btn" id="fsc-btn-solve-q10b">${f("tools.faultyCalibration.findFaultyReading")}</button>
          </div>
          <div id="fsc-input-pane-q10a" class="tl-solver-pane active">
            <div class="tl-calc-inputs">
              <span>${f("tools.faultyCalibration.faultyReadingC")}</span>
              <div class="tl-input-with-unit">
                <input type="number" id="fsc-input-q10a-cm" value="25.0" step="0.5" class="tl-calc-input">
                <span class="tl-unit">°C</span>
              </div>
            </div>
            <p class="tl-solver-error" id="fsc-faulty-error-a" hidden></p>
          </div>
          <div id="fsc-input-pane-q10b" class="tl-solver-pane">
            <div class="tl-calc-inputs">
              <span>${f("tools.faultyCalibration.trueTempT")}</span>
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
  `;function V(k){const w=Math.round(k*100)/100;return w>=0?w.toFixed(1):`(${w.toFixed(1)})`}function U(){const k=parseFloat(h.querySelector("#fsc-input-faulty-cf").value),w=parseFloat(h.querySelector("#fsc-input-faulty-cu").value),y=Number.isFinite(k)?k:-1.5,T=Number.isFinite(w)?w:105,S=T-y;return{cf:y,cu:T,interval:S}}function H(){const k=h.querySelector("#fsc-faulty-svg-container");if(!k)return;const{cf:w,cu:y,interval:T}=U(),S=parseFloat(h.querySelector("#fsc-input-q10a-cm").value)||0,L=parseFloat(h.querySelector("#fsc-input-q10b-t").value)||0,W=h.querySelector("#fsc-input-pane-q10a").classList.contains("active"),z=W?(S-w)/T*100:L,O=W?S:L/100*T+w,E=_=>130-_/100*80,q=Number.isFinite(z)?E(z):130;k.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <g transform="translate(0, 0)">
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <rect x="84" y="${q}" width="4" height="${144-q}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>
          <text x="65" y="${q+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${Number.isFinite(z)?z.toFixed(1):"—"}°C</text>
          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${f("tools.thermometerLab.faulty.trueScale")}</text>
        </g>
        <g transform="translate(130, 0)">
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <rect x="104" y="${q}" width="4" height="${144-q}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${w.toFixed(1)}°C</tspan></text>
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${y.toFixed(1)}°C</tspan></text>
          <text x="125" y="${q+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${Number.isFinite(O)?O.toFixed(1):"—"}°C</text>
          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${f("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>
        <line x1="86" y1="${q}" x2="236" y2="${q}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${q}" r="3" fill="#34d399" />
        <circle cx="236" cy="${q}" r="3" fill="#34d399" />
      </svg>
    `}function a(k){const w=k==="a";h.querySelector("#fsc-btn-solve-q10a").classList.toggle("active",w),h.querySelector("#fsc-btn-solve-q10b").classList.toggle("active",!w),h.querySelector("#fsc-input-pane-q10a").classList.toggle("active",w),h.querySelector("#fsc-input-pane-q10b").classList.toggle("active",!w),h.querySelector("#fsc-pane-q10a").classList.toggle("active",w),h.querySelector("#fsc-pane-q10b").classList.toggle("active",!w),e()}function e(){const{cf:k,cu:w,interval:y}=U(),T=h.querySelector("#fsc-val-faulty-interval"),S=h.querySelector("#fsc-faulty-error-a"),L=h.querySelector("#fsc-faulty-error-b"),W=h.querySelector("#fsc-svg-formula-faulty-a"),z=h.querySelector("#fsc-svg-formula-faulty-b"),O=Math.abs(y)<.01,E=f("tools.faultyCalibration.invalidInterval");if(T.textContent=y.toFixed(1)+" °C",O){S.hidden=!1,S.textContent=E,L.hidden=!1,L.textContent=E,W&&(W.innerHTML=""),z&&(z.innerHTML=""),H();return}S.hidden=!0,L.hidden=!0;const q=parseFloat(h.querySelector("#fsc-input-q10a-cm").value)||0,_=parseFloat(h.querySelector("#fsc-input-q10b-t").value)||0,B=(q-k)/y*100,Z=_/100*y+k;W&&(W.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${q.toFixed(1)} - ${V(k)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${w.toFixed(1)} - ${V(k)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${B.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),z&&(z.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${_.toFixed(1)} &times; ${y.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${V(k)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${Z.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),H()}h.querySelector("#fsc-btn-solve-q10a").addEventListener("click",()=>a("a")),h.querySelector("#fsc-btn-solve-q10b").addEventListener("click",()=>a("b")),h.querySelector("#fsc-input-faulty-cf").addEventListener("input",e),h.querySelector("#fsc-input-faulty-cu").addEventListener("input",e),h.querySelector("#fsc-input-q10a-cm").addEventListener("input",e),h.querySelector("#fsc-input-q10b-t").addEventListener("input",e);const N=h.querySelector(".tl-dash--faulty"),et=h.querySelector(".tl-controls"),Q=h.querySelector("#fsc-controls-toggle"),K=h.querySelector("#fsc-controls-drag"),J=h.querySelector(".tl-controls-float-bar");return N&&et&&Q&&kt({container:N,panel:et,toggleBtn:Q,dragHandle:K,dragSurface:J,storageKey:"s3phy-faulty-calibration",breakpoint:1024,getToggleTitle:k=>f(k?"tools.floatingControls.showParams":"tools.floatingControls.hideParams")}),e(),h._thermometerLabCleanup=()=>{},h}export{Yt as createFaultyScaleCalibrationLab,Wt as createThermometerLab};
