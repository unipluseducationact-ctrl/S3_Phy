/* thermometerLab.js - Ported high-fidelity Thermometer Simulation Lab */

const STYLE_ID = 's3phy-thermometer-lab-css';
const THERM_FLOAT_BREAKPOINT = 900;

const CSS = `
.tl-wrap {
  --tl-bg: #09090b;
  --tl-panel: #151518;
  --tl-border: #27272a;
  --tl-green: #10b981;
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
  max-width: 460px;
  height: auto;
  aspect-ratio: 460 / 340;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.tl-wrap .tl-canvas-graph {
  background: #0d0d10;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  height: auto;
  aspect-ratio: 800 / 560;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.03);
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
.tl-wrap .tl-controls-drag-handle {
  display: none;
  cursor: grab;
  touch-action: none;
  color: var(--tl-muted);
  padding: 4px 6px;
  border-radius: 6px;
  background: none;
  border: 1px solid transparent;
  font-size: 0.85rem;
  line-height: 1;
  flex-shrink: 0;
}
.tl-wrap .tl-controls-drag-handle.is-dragging { cursor: grabbing; }
.tl-wrap .tl-controls-drag-handle:hover { color: var(--tl-text); border-color: var(--tl-border); }
.tl-wrap .tl-controls-float .tl-controls-drag-handle { display: inline-flex; align-items: center; }
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
  .tl-wrap .tl-bath-bar {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px 16px;
  }
  .tl-wrap .tl-bath-bar-top {
    flex: 1 1 auto;
  }
  .tl-wrap .tl-btn-group {
    flex: 1 1 300px;
    max-width: none;
  }
}
@media (min-width: 900px) {
  .tl-wrap .tl-dash {
    display: grid;
    grid-template-columns: minmax(0, 460px) 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
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
    border: 2px solid #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
  }
  .tl-wrap .tl-viz-graph {
    grid-column: 2;
    grid-row: 1;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #10b981;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
  }
  .tl-wrap .tl-live-calculations {
    grid-row: 2;
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
  .tl-wrap .tl-btn-group {
    grid-template-columns: repeat(4, 1fr);
    flex: 1 1 auto;
    max-width: none;
  }
  .tl-wrap .tl-bath-slider-wrap {
    flex: 1 1 260px;
    max-width: 360px;
  }
  .tl-wrap .tl-worked-solution {
    padding: 14px 20px;
    font-size: 0.9rem;
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
  padding: 16px;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
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
  font-size: 1.1rem;
  color: #fff;
  background-color: rgba(0,0,0,0.25);
  padding: 10px;
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
`;

function ensureStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

function initFloatingControlsPanel(options) {
  const FLOAT_BREAKPOINT = 1024;
  const DEFAULT_POS = { x: 12, y: 12 };
  const LAYOUT_DEBOUNCE_MS = 200;
  const {
    container,
    panel,
    toggleBtn,
    dragHandle,
    storageKey,
    onLayoutChange,
    breakpoint = FLOAT_BREAKPOINT,
    collapsedClass = 'controls-collapsed',
    floatingClass = 'controls-floating',
  } = options;

  if (!container || !panel || !toggleBtn) return null;

  let collapsed = sessionStorage.getItem(storageKey) !== 'false';
  let pos = (() => {
    try {
      const raw = localStorage.getItem(storageKey + ':pos');
      if (!raw) return { ...DEFAULT_POS };
      const parsed = JSON.parse(raw);
      if (typeof parsed.x === 'number' && typeof parsed.y === 'number') return parsed;
    } catch (e) { void e; }
    return { ...DEFAULT_POS };
  })();
  let dragState = null;
  let layoutTimer = null;

  const isFloatingEnabled = () => window.innerWidth >= breakpoint;

  const clampPosition = (x, y) => {
    const cRect = container.getBoundingClientRect();
    const pRect = panel.getBoundingClientRect();
    const maxX = Math.max(0, cRect.width - pRect.width);
    const maxY = Math.max(0, cRect.height - pRect.height);
    return { x: Math.min(Math.max(0, x), maxX), y: Math.min(Math.max(0, y), maxY) };
  };

  const applyPosition = () => {
    panel.style.left = pos.x + 'px';
    panel.style.top = pos.y + 'px';
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
  };

  const scheduleLayoutChange = () => {
    if (typeof onLayoutChange !== 'function') return;
    clearTimeout(layoutTimer);
    layoutTimer = setTimeout(onLayoutChange, LAYOUT_DEBOUNCE_MS);
  };

  const updateToggleUi = () => {
    toggleBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    if (options.getToggleTitle) toggleBtn.title = options.getToggleTitle(collapsed);
    const icon = toggleBtn.querySelector('[data-float-chevron]');
    if (icon) icon.textContent = collapsed ? 'v' : '^';
  };

  const setCollapsed = (next) => {
    collapsed = next;
    panel.classList.toggle(collapsedClass, collapsed);
    sessionStorage.setItem(storageKey, collapsed ? 'true' : 'false');
    updateToggleUi();
    scheduleLayoutChange();
  };

  const enableFloating = () => {
    container.classList.add(floatingClass);
    panel.classList.add('lab-controls-float');
    pos = clampPosition(pos.x, pos.y);
    applyPosition();
    if (dragHandle) dragHandle.style.display = '';
  };

  const disableFloating = () => {
    container.classList.remove(floatingClass);
    panel.classList.remove('lab-controls-float');
    panel.style.left = '';
    panel.style.top = '';
    panel.style.right = '';
    panel.style.bottom = '';
    if (dragHandle) dragHandle.style.display = 'none';
  };

  const refreshMode = () => {
    if (isFloatingEnabled()) {
      enableFloating();
      pos = clampPosition(pos.x, pos.y);
      applyPosition();
    } else {
      disableFloating();
    }
    scheduleLayoutChange();
  };

  panel.classList.toggle(collapsedClass, collapsed);
  updateToggleUi();
  refreshMode();

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setCollapsed(!collapsed);
  });

  if (dragHandle) {
    dragHandle.addEventListener('pointerdown', (e) => {
      if (!isFloatingEnabled()) return;
      e.preventDefault();
      dragState = { pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, originX: pos.x, originY: pos.y };
      dragHandle.setPointerCapture(e.pointerId);
      dragHandle.classList.add('is-dragging');
    });
    dragHandle.addEventListener('pointermove', (e) => {
      if (!dragState || dragState.pointerId !== e.pointerId) return;
      pos = clampPosition(dragState.originX + e.clientX - dragState.startX, dragState.originY + e.clientY - dragState.startY);
      applyPosition();
    });
    const endDrag = (e) => {
      if (!dragState || dragState.pointerId !== e.pointerId) return;
      dragHandle.releasePointerCapture(e.pointerId);
      dragHandle.classList.remove('is-dragging');
      try { localStorage.setItem(storageKey + ':pos', JSON.stringify(pos)); } catch (err) { void err; }
      dragState = null;
      scheduleLayoutChange();
    };
    dragHandle.addEventListener('pointerup', endDrag);
    dragHandle.addEventListener('pointercancel', endDrag);
  }

  window.addEventListener('resize', refreshMode);
  return { setCollapsed, refreshMode, isCollapsed: () => collapsed };
}

export function createThermometerLab(t, options = {}) {
  ensureStyles();

  const defaultType = options.type || 'liquid';
  let title = t('tools.thermometerLab.title');
  let subtitle = t('tools.thermometerLab.subtitle');
  if (options.type === 'liquid') {
    title = t('tools.thermometerLab.liquid.title');
    subtitle = t('tools.thermometerLab.liquid.subtitle') || t('tools.thermometerLab.subtitle');
  } else if (options.type === 'resistance') {
    title = t('tools.thermometerLab.resistance.title');
    subtitle = t('tools.thermometerLab.resistance.subtitle') || t('tools.thermometerLab.subtitle');
  } else if (options.type === 'thermistor') {
    title = t('tools.thermometerLab.thermistor.title');
    subtitle = t('tools.thermometerLab.thermistor.subtitle') || t('tools.thermometerLab.subtitle');
  }

  const wrap = document.createElement('div');
  wrap.className = 'tl-wrap';
  wrap.innerHTML = `
    <div class="tl-head">
      <h2 class="tl-title">${title}</h2>
      <div class="tl-sub">${subtitle}</div>
    </div>
    <div class="tl-dash">
      <!-- TOP ROW LEFT: THERMOMETER VIEW -->
      <div class="tl-viz-phys" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;">
        <canvas class="tl-canvas-phys" id="tl-thermometerCanvas" width="460" height="340"></canvas>
        <button class="tl-btn" id="tl-btn-toggle-labels" style="margin-top:4px;width:100%;display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.75rem;padding:6px 10px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <span id="tl-lbl-toggle-labels">${t('tools.thermometerLab.labels.hide')}</span>
        </button>
      </div>

      <!-- TOP ROW RIGHT: GRAPH -->
      <div class="tl-viz-graph" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;width:100%">
        <canvas class="tl-canvas-graph" id="tl-graphCanvas" width="800" height="560"></canvas>
        
        <!-- Interactive Temperature Slider aligned directly under the Graph -->
        <div class="tl-bath-bar" style="margin-top:0;padding:8px 12px;background:rgba(255,255,255,0.02);border:1px solid var(--tl-border);border-radius:12px">
          <div class="tl-bath-bar-top" style="display:flex;align-items:center;justify-content:space-between;gap:12px">
            <div class="tl-beaker-overlay" style="padding:4px 8px;margin:0;font-size:0.75rem;background:transparent;border:none">
              <span>Liquid: <b id="tl-bath-state">Water</b></span>
              <span><b class="tl-temp-badge" id="tl-bath-temp-display">25.0°C</b></span>
            </div>
            <div class="tl-bath-slider-wrap" style="flex:1;display:flex;flex-direction:column;gap:2px">
              <div class="tl-lr">
                <span>T<sub>bath</sub></span>
                <span class="tl-badge tl-lr-value" id="tl-val-bath-temp" style="color:var(--tl-cyan)">25.0 °C</span>
              </div>
              <input type="range" id="tl-bath-temp-slider" min="0" max="200" step="0.5" value="25.0" style="margin:0">
            </div>
          </div>
          <div class="tl-btn-group" style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px">
            <button class="tl-btn" id="tl-btn-preset-ice" style="padding:4px;font-size:0.7rem">Ice 0°C</button>
            <button class="tl-btn" id="tl-btn-preset-room" style="padding:4px;font-size:0.7rem">Room 25°C</button>
            <button class="tl-btn" id="tl-btn-preset-steam" style="padding:4px;font-size:0.7rem">Steam 100°C</button>
            <button class="tl-btn" id="tl-btn-preset-oil" style="padding:4px;font-size:0.7rem">Oil 150°C</button>
          </div>
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
                <div id="tl-svg-formula-liquid" class="tl-math-formula" style="height:45px; margin:4px 0"></div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current reading <b class="tl-live-value" id="tl-live-liquid-lt">5.50 cm</b>:</p>
                <div id="tl-svg-formula-liquid-sub" class="tl-math-formula" style="height:100px; margin:4px 0"></div>
              </div>
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Length (T &rarr; L<sub>T</sub>)</div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current bath temperature <b class="tl-live-value" id="tl-live-liquid-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-l" class="tl-math-formula" style="font-size:0.85rem;height:110px; margin:4px 0"></div>
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
                <div id="tl-svg-formula-resistance" class="tl-math-formula" style="height:45px; margin:4px 0"></div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current resistance <b class="tl-live-value" id="tl-live-resistance-rt">5.30 Ω</b>:</p>
                <div id="tl-svg-formula-resistance-sub" class="tl-math-formula" style="height:100px; margin:4px 0"></div>
              </div>
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Resistance (T &rarr; R<sub>T</sub>)</div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current bath temperature <b class="tl-live-value" id="tl-live-resistance-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-r" class="tl-math-formula" style="font-size:0.85rem;height:110px; margin:4px 0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tl-live-tab" id="tl-live-thermistor">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-green)">Live NTC beta calculation</div>
            <div class="tl-worked-solution" style="background-color:rgba(16,185,129,0.05);border-left-color:var(--tl-green)">
              <div id="tl-svg-formula-thermistor" class="tl-math-formula" style="font-size:0.85rem"></div>
              <p style="font-size:0.85rem">Substitute current resistance <b class="tl-live-value" id="tl-live-thermistor-rt">10.00 kΩ</b>:</p>
              <div id="tl-svg-formula-thermistor-sub" class="tl-math-formula" style="font-size:0.85rem"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- FLOATING CONTROLS & SOLVERS -->
      <div class="tl-controls controls-collapsed">
        <div class="tl-controls-float-bar">
          <button type="button" class="tl-controls-drag-handle" id="tl-controls-drag" aria-label="${t('tools.floatingControls.dragHint')}" title="${t('tools.floatingControls.dragHint')}">⋮⋮</button>
          <button type="button" class="tl-controls-toggle" id="tl-controls-toggle" aria-expanded="false">
            <span data-float-chevron>▾</span>
            <span>${t('tools.thermometerLab.paramSettings')}</span>
          </button>
        </div>
        <div class="tl-controls-body">

        <!-- TAB 1: LIQUID-IN-GLASS -->
        <div class="tl-tab-content active" id="tl-tab-liquid">
          <details class="tl-details">
            <summary>${t('tools.thermometerLab.paramSettings')}</summary>
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

          <details class="tl-details">
            <summary>${t('tools.thermometerLab.faultySolver')}</summary>
            <div class="tl-details-body">
              <p style="font-size:0.75rem;color:var(--tl-muted);margin:0">Set faulty readings at ice (0°C) and steam (100°C), then solve for T or C.</p>
              <div class="tl-info-card" style="margin-bottom:4px">
                <div class="tl-info-label">Faulty scale calibration</div>
                <p style="margin:0;font-size:0.75rem">T / 100 = (C − C<sub>f</sub>) / (C<sub>u</sub> − C<sub>f</sub>)</p>
              </div>
              <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-muted);margin-top:4px;">${t('tools.thermometerLab.faulty.dualScale')}</div>
              <div id="tl-faulty-svg-container" style="width:100%; height:190px; margin:4px 0; background:rgba(0,0,0,0.25); border-radius:10px; border:1px solid var(--tl-border); display:flex; justify-content:center; align-items:center; padding:8px;"></div>
              <div class="tl-faulty-cal">
                <div class="tl-calc-inputs">
                  <span>Ice reading C<sub>f</sub> (true 0°C)</span>
                  <div class="tl-input-with-unit">
                    <input type="number" id="tl-input-faulty-cf" value="-1.5" step="0.1" class="tl-calc-input" aria-label="Ice point faulty reading">
                    <span class="tl-unit">°C</span>
                  </div>
                </div>
                <div class="tl-calc-inputs">
                  <span>Steam reading C<sub>u</sub> (true 100°C)</span>
                  <div class="tl-input-with-unit">
                    <input type="number" id="tl-input-faulty-cu" value="105" step="0.1" class="tl-calc-input" aria-label="Steam point faulty reading">
                    <span class="tl-unit">°C</span>
                  </div>
                </div>
              </div>
              <div class="tl-faulty-interval">
                <span>Proportional interval (C<sub>u</sub> − C<sub>f</sub>)</span>
                <b id="tl-val-faulty-interval">106.5 °C</b>
              </div>
              <div class="tl-solver-tabs">
                <button class="tl-solver-tab-btn active" id="tl-btn-solve-q10a">Find True Temp (T)</button>
                <button class="tl-solver-tab-btn" id="tl-btn-solve-q10b">Find Faulty Reading (C)</button>
              </div>
              <div id="tl-pane-q10a" class="tl-solver-pane active">
                <div class="tl-calc-inputs">
                  <span>Faulty reading C</span>
                  <div class="tl-input-with-unit">
                    <input type="number" id="tl-input-q10a-cm" value="25.0" step="0.5" class="tl-calc-input">
                    <span class="tl-unit">°C</span>
                  </div>
                </div>
                <p class="tl-solver-error" id="tl-faulty-error-a" hidden></p>
                <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
                  <div id="tl-svg-formula-faulty-a" class="tl-math-formula" style="font-size:0.85rem"></div>
                </div>
              </div>
              <div id="tl-pane-q10b" class="tl-solver-pane">
                <div class="tl-calc-inputs">
                  <span>True temperature T</span>
                  <div class="tl-input-with-unit">
                    <input type="number" id="tl-input-q10b-t" value="70.0" step="1.0" class="tl-calc-input">
                    <span class="tl-unit">°C</span>
                  </div>
                </div>
                <p class="tl-solver-error" id="tl-faulty-error-b" hidden></p>
                <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
                  <div id="tl-svg-formula-faulty-b" class="tl-math-formula" style="font-size:0.85rem"></div>
                </div>
              </div>
            </div>
          </details>
        </div>

        <!-- TAB 2: PLATINUM RESISTANCE -->
        <div class="tl-tab-content" id="tl-tab-resistance">
          <details class="tl-details">
            <summary>${t('tools.thermometerLab.paramSettings')}</summary>
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
            <summary>${t('tools.thermometerLab.resistanceSolver')}</summary>
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
            <summary>${t('tools.thermometerLab.paramSettings')}</summary>
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
  `;

  // --- STATE MANAGEMENT ---
  const state = {
    liquidType: 'mercury',
    thermometerType: defaultType,
    bulbVolume: 200,
    wallThickness: 0.5,
    capillaryBore: 0.3,
    liquidL0: 3.0,
    liquidL100: 13.0,
    resistanceR0: 5.0,
    resistanceR100: 6.2,
    thermistorR25: 10.0,
    thermistorBeta: 3500,

    bathTemp: 25.0,
    thermometerTemp: 25.0,

    bubbles: [],
    iceCubes: [],
    heatWaves: [],
    steamParticles: [],

    currentLength: 5.5,
    currentResistance: 5.3,
    currentThermistorR: 10.0,

    lastTimestamp: 0,
    showLabels: true
  };

  const PHYS_WIDTH = 460;
  const PHYS_HEIGHT = 340;
  const PHYS_SCENE_OFFSET_X = 80;
  const GRAPH_WIDTH = 800;
  const GRAPH_HEIGHT = 560;

  function getGraphLayout() {
    const margin = { left: 110, top: 48, right: 30, bottom: 65 };
    return {
      gx: margin.left,
      gy: margin.top,
      gw: GRAPH_WIDTH - margin.left - margin.right,
      gh: GRAPH_HEIGHT - margin.top - margin.bottom,
      tickFont: `bold ${Math.round(GRAPH_WIDTH * 0.024)}px Arial`,
      axisFont: `bold ${Math.round(GRAPH_WIDTH * 0.026)}px Arial`,
      dotR: 8,
      yLabelX: margin.left - 75,
      xLabelY: GRAPH_HEIGHT - margin.bottom + 32,
    };
  }

  function getTempAxisScale() {
    const minT = 0;
    let maxT = 100;
    const peak = Math.max(state.bathTemp, state.thermometerTemp, 100);
    if (peak > 120) maxT = 150;
    if (peak > 145) maxT = 200;
    const tickStep = maxT <= 100 ? 20 : 25;
    return { minT, maxT, tickStep };
  }

  function mapGraphX(t, minT, maxT, gx, gw) {
    return gx + ((t - minT) / (maxT - minT)) * gw;
  }

  function mapGraphY(v, minV, maxV, gy, gh) {
    return gy + gh - ((v - minV) / (maxV - minV)) * gh;
  }

  function drawGraphAxes(ctx, layout, minT, maxT, tStep, yTicks) {
    const { gx, gy, gw, gh, tickFont, axisFont, yLabelX, xLabelY } = layout;

    // Grid lines background
    ctx.strokeStyle = '#1e1e24';
    ctx.lineWidth = 1.0;
    for (const tick of yTicks) {
      const yGrid = mapGraphY(tick.value, tick.min, tick.max, gy, gh);
      ctx.beginPath();
      ctx.moveTo(gx, yGrid);
      ctx.lineTo(gx + gw, yGrid);
      ctx.stroke();
    }
    for (let tVal = minT; tVal <= maxT + 0.01; tVal += tStep) {
      const xGrid = mapGraphX(tVal, minT, maxT, gx, gw);
      ctx.beginPath();
      ctx.moveTo(xGrid, gy);
      ctx.lineTo(xGrid, gy + gh);
      ctx.stroke();
    }

    // Main Axes
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.lineTo(gx, gy + gh);
    ctx.lineTo(gx + gw, gy + gh);
    ctx.stroke();

    ctx.fillStyle = '#e4e4e7';
    ctx.font = tickFont;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    for (const tick of yTicks) {
      const yGrid = mapGraphY(tick.value, tick.min, tick.max, gy, gh);
      ctx.fillText(tick.label, gx - 15, yGrid);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let tVal = minT; tVal <= maxT + 0.01; tVal += tStep) {
      const xGrid = mapGraphX(tVal, minT, maxT, gx, gw);
      ctx.fillText(`${Math.round(tVal)}`, xGrid, gy + gh + 10);
    }

    return { gx, gy, gw, gh, axisFont, yLabelX, xLabelY };
  }

  function buildLengthTicks(minL, maxL) {
    const span = maxL - minL;
    const step = span <= 8 ? 1 : span <= 14 ? 2 : 5;
    const ticks = [];
    const start = Math.ceil(minL / step) * step;
    for (let l = start; l <= maxL + 0.001; l += step) {
      ticks.push({
        value: l,
        label: l % 1 === 0 ? `${l.toFixed(0)}` : `${l.toFixed(1)}`,
        min: minL,
        max: maxL,
      });
    }
    return ticks;
  }

  function getLiquidLengthBounds() {
    const { maxT } = getTempAxisScale();
    const lMin = liquidLengthAtTemp(0);
    const lMax = liquidLengthAtTemp(maxT);
    const span = lMax - lMin;
    const pad = Math.max(1, span * 0.1);
    const minL = Math.max(0, Math.round((lMin - pad) * 10) / 10);
    const maxL = Math.round((lMax + pad) * 10) / 10;
    return { minL, maxL };
  }

  function liquidLengthAtTemp(t) {
    return state.liquidL0 + ((state.liquidL100 - state.liquidL0) / 100) * t;
  }

  function getResistanceBounds() {
    const { maxT } = getTempAxisScale();
    const rMin = resistanceAtTemp(0);
    const rMax = resistanceAtTemp(maxT);
    const span = rMax - rMin;
    const pad = Math.max(0.2, span * 0.1);
    const minR = Math.max(0, rMin - pad);
    const maxR = rMax + pad;
    const step = span <= 2 ? 0.5 : span <= 4 ? 1 : 2;
    const ticks = [];
    const start = Math.ceil(minR / step) * step;
    for (let r = start; r <= maxR + 0.001; r += step) {
      ticks.push({
        value: r,
        label: r.toFixed(1),
        min: minR,
        max: maxR,
      });
    }
    return { minR, maxR, ticks };
  }

  function resistanceAtTemp(t) {
    return state.resistanceR0 + ((state.resistanceR100 - state.resistanceR0) / 100) * t;
  }

  function getThermistorBounds(tempScale) {
    const { maxT } = tempScale;
    let maxR = state.thermistorR25;
    for (let tVal = 0; tVal <= maxT; tVal += 5) {
      const tempK = tVal + 273.15;
      const r = state.thermistorR25 * Math.exp(state.thermistorBeta * (1 / tempK - 1 / 298.15));
      maxR = Math.max(maxR, r);
    }
    maxR = Math.ceil(maxR * 1.08 * 10) / 10;
    const minR = 0;
    const step = maxR <= 12 ? 2 : 4;
    const ticks = [];
    for (let r = 0; r <= maxR + 0.001; r += step) {
      ticks.push({
        value: r,
        label: r.toFixed(0),
        min: minR,
        max: maxR,
      });
    }
    return { minR, maxR, ticks };
  }

  const physCanvas = wrap.querySelector('#tl-thermometerCanvas');
  const physCtx = physCanvas.getContext('2d');
  const graphCanvas = wrap.querySelector('#tl-graphCanvas');
  const graphCtx = graphCanvas.getContext('2d');

  // DPI setup
  const dpr = window.devicePixelRatio || 1;
  physCanvas.width = PHYS_WIDTH * dpr;
  physCanvas.height = PHYS_HEIGHT * dpr;
  physCtx.scale(dpr, dpr);

  graphCanvas.width = GRAPH_WIDTH * dpr;
  graphCanvas.height = GRAPH_HEIGHT * dpr;
  graphCtx.scale(dpr, dpr);

  // Particles
  function initParticles() {
    state.iceCubes = [];
    for (let i = 0; i < 5; i++) {
      state.iceCubes.push({
        x: 60 + Math.random() * 120,
        y: 200 + Math.random() * 15,
        size: 12 + Math.random() * 8,
        angle: Math.random() * Math.PI,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15
      });
    }
    state.bubbles = [];
    for (let i = 0; i < 20; i++) {
      state.bubbles.push({
        x: 60 + Math.random() * 120,
        y: 190 + Math.random() * 70,
        r: 1 + Math.random() * 3.5,
        speedY: 0.8 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.08 + Math.random() * 0.08
      });
    }
    state.heatWaves = [];
    for (let i = 0; i < 8; i++) {
      state.heatWaves.push({
        x: 65 + Math.random() * 110,
        y: 190 + Math.random() * 60,
        length: 15 + Math.random() * 15,
        speedY: 0.5 + Math.random() * 0.6,
        opacity: 0.15 + Math.random() * 0.25
      });
    }
    state.steamParticles = [];
    for (let i = 0; i < 12; i++) {
      state.steamParticles.push({
        x: 60 + Math.random() * 120,
        y: 175 + Math.random() * 10,
        r: 2 + Math.random() * 4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.4 - Math.random() * 0.6,
        alpha: 0.2 + Math.random() * 0.4
      });
    }
  }

  const BULB_VOLUME_REF = 200;
  const BULB_RADIUS_REF = 11;

  function getBulbVisualRadius() {
    const scale = Math.pow(state.bulbVolume / BULB_VOLUME_REF, 1 / 3);
    return BULB_RADIUS_REF * scale;
  }

  function getResponseTimeConstant() {
    if (state.thermometerType === 'resistance' || state.thermometerType === 'thermistor') {
      return 0.35;
    }
    const conductivityFactor = state.liquidType === 'mercury' ? 1.0 : 8.0;
    const thicknessFactor = 0.2 + state.wallThickness * 1.5;
    const volumeFactor = 0.4 + state.bulbVolume * 0.003;
    const capillaryFactor = 1.35 - state.capillaryBore * 0.45;
    return Math.max(0.1, thicknessFactor * volumeFactor * capillaryFactor * conductivityFactor * 0.15);
  }

  function updateParticles(dt) {
    if (state.bathTemp <= 8) {
      state.iceCubes.forEach(ice => {
        ice.x += ice.speedX;
        ice.y += ice.speedY;
        if (ice.x < 65 || ice.x > 175) ice.speedX *= -1;
        if (ice.y < 195 || ice.y > 210) ice.speedY *= -1;
      });
    }
    if (state.bathTemp > 35) {
      state.heatWaves.forEach(wave => {
        wave.y -= wave.speedY * (1.0 + state.bathTemp / 100);
        if (wave.y < 185) {
          wave.y = 265;
          wave.x = 65 + Math.random() * 110;
        }
      });
    }
    if (state.bathTemp >= 80) {
      state.bubbles.forEach(bubble => {
        bubble.y -= bubble.speedY * (1.0 + (state.bathTemp - 80) / 40);
        bubble.phase += bubble.wobbleSpeed;
        bubble.x += Math.sin(bubble.phase) * 0.3;
        if (bubble.y < 185) {
          bubble.y = 260 + Math.random() * 10;
          bubble.x = 60 + Math.random() * 120;
        }
      });
    }
    if (state.bathTemp >= 95) {
      state.steamParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.005;
        if (p.alpha <= 0 || p.y < 130) {
          p.x = 60 + Math.random() * 120;
          p.y = 175 + Math.random() * 5;
          p.alpha = 0.2 + Math.random() * 0.4;
        }
      });
    }
  }

  function drawBeaker(ctx) {
    const bx = 55;
    const by = 180;
    const bw = 130;
    const bh = 100;
    const waterY = 190;

    let r = 59, g = 130, b = 246;
    if (state.bathTemp < 25) {
      const ratio = state.bathTemp / 25;
      r = Math.round(180 - ratio * 121);
      g = Math.round(210 - ratio * 80);
      b = Math.round(250 - ratio * 4);
    } else {
      const ratio = Math.min(1.0, (state.bathTemp - 25) / 125);
      r = Math.round(59 + ratio * 180);
      g = Math.round(130 - ratio * 100);
      b = Math.round(246 - ratio * 190);
    }

    // Glowing heating element at the bottom (burner)
    if (state.bathTemp > 40) {
      const intensity = Math.min(1.0, (state.bathTemp - 40) / 100);
      const t = Date.now() * 0.02;
      
      // Draw glowing burner base
      ctx.fillStyle = `rgba(239, 68, 68, ${intensity * 0.25})`;
      ctx.beginPath();
      ctx.roundRect(bx - 10, by + bh + 4, bw + 20, 10, 4);
      ctx.fill();

      ctx.fillStyle = 'rgba(249, 115, 22, 0.85)';
      ctx.beginPath();
      ctx.moveTo(bx + bw/2 - 25, by + bh + 4);
      for (let dx = -25; dx <= 25; dx += 6) {
        const fHeight = intensity * (12 + Math.sin(dx * 0.4 + t) * 5);
        ctx.lineTo(bx + bw/2 + dx, by + bh + 4 - fHeight);
      }
      ctx.lineTo(bx + bw/2 + 25, by + bh + 4);
      ctx.closePath();
      ctx.fill();
    }

    // Beaker shadow/background
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#121214';
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, [0, 0, 10, 10]);
    ctx.fill();

    // Water/Liquid
    const waterGrad = ctx.createLinearGradient(bx, waterY, bx, by + bh);
    waterGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.25)`);
    waterGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.55)`);
    ctx.fillStyle = waterGrad;
    ctx.beginPath();
    ctx.moveTo(bx, waterY);
    const waveAmp = state.bathTemp >= 80 ? 2.0 : 0.5;
    const waveFreq = state.bathTemp >= 80 ? 0.09 : 0.03;
    const t = Date.now() * waveFreq;
    for (let x = bx; x <= bx + bw; x += 5) {
      const y = waterY + Math.sin(x * 0.15 + t) * waveAmp;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(bx + bw, by + bh);
    ctx.lineTo(bx, by + bh);
    ctx.closePath();
    ctx.fill();

    // Heat waves
    if (state.bathTemp > 35) {
      ctx.strokeStyle = `rgba(239, 68, 68, ${Math.min(0.5, (state.bathTemp-35)/120)})`;
      ctx.lineWidth = 1.2;
      state.heatWaves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(wave.x, wave.y);
        ctx.quadraticCurveTo(wave.x + Math.sin(wave.y*0.06)*5, wave.y - wave.length/2, wave.x, wave.y - wave.length);
        ctx.stroke();
      });
    }

    // Floating Ice Cubes
    if (state.bathTemp <= 8) {
      ctx.fillStyle = 'rgba(224, 242, 254, 0.55)';
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.8)';
      ctx.lineWidth = 1.0;
      state.iceCubes.forEach(ice => {
        ctx.save();
        ctx.translate(ice.x, ice.y);
        ctx.rotate(ice.angle);
        ctx.beginPath();
        ctx.roundRect(-ice.size/2, -ice.size/2, ice.size, ice.size, 3);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });
    }

    // Boiling Bubbles
    if (state.bathTemp >= 80) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = 0.6;
      state.bubbles.forEach(bubble => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }

    // Steam particles rising above the beaker
    if (state.bathTemp >= 95) {
      state.steamParticles.forEach(p => {
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Beaker Glass Outline (High Fidelity)
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(bx - 1, by);
    ctx.lineTo(bx - 1, by + bh - 8);
    ctx.arcTo(bx - 1, by + bh + 1, bx + 10, by + bh + 1, 8);
    ctx.lineTo(bx + bw - 10, by + bh + 1);
    ctx.arcTo(bx + bw + 1, by + bh + 1, bx + bw + 1, by + bh - 8, 8);
    ctx.lineTo(bx + bw + 1, by);
    ctx.stroke();

    // Glass reflection highlights
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(bx + 4, by + 10);
    ctx.lineTo(bx + 4, by + bh - 10);
    ctx.stroke();
  }

  function drawLabelLine(ctx, startX, startY, endX, endY, text, align = 'left') {
    if (!state.showLabels) return;
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.7)';
    ctx.lineWidth = 1.0;
    ctx.setLineDash([3, 3]);
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw glowing anchor dot
    ctx.fillStyle = '#06b6d4';
    ctx.beginPath();
    ctx.arc(startX, startY, 3, 0, Math.PI * 2);
    ctx.fill();

    // Draw label text background box
    ctx.font = 'bold 9px system-ui, sans-serif';
    const textWidth = ctx.measureText(text).width;
    const boxW = textWidth + 10;
    const boxH = 16;
    const bx = align === 'left' ? endX : endX - boxW;
    const by = endY - boxH / 2;

    ctx.fillStyle = 'rgba(21, 21, 24, 0.9)';
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.roundRect(bx, by, boxW, boxH, 4);
    ctx.fill();
    ctx.stroke();

    // Draw text
    ctx.fillStyle = '#f4f4f5';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, bx + boxW / 2, by + boxH / 2 + 0.5);
  }

  function drawLiquidThermometer(ctx) {
    const x = 120;
    const stemTop = 20;
    const bulbRadius = getBulbVisualRadius();
    const bulbCenterY = 250 + Math.max(0, bulbRadius - BULB_RADIUS_REF) * 0.35;
    const stemBottom = bulbCenterY - bulbRadius - 1;
    const glassWidth = 10 + state.wallThickness * 8;
    const leftX = x - glassWidth / 2;
    const rightX = x + glassWidth / 2;

    // Glass Stem Shading (3D effect)
    const glassGrad = ctx.createLinearGradient(leftX, stemTop, rightX, stemTop);
    glassGrad.addColorStop(0, 'rgba(209, 213, 219, 0.85)');
    glassGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.95)');
    glassGrad.addColorStop(0.5, 'rgba(243, 244, 246, 0.15)');
    glassGrad.addColorStop(0.8, 'rgba(255, 255, 255, 0.95)');
    glassGrad.addColorStop(1, 'rgba(156, 163, 175, 0.9)');

    ctx.fillStyle = glassGrad;
    ctx.strokeStyle = 'rgba(156, 163, 175, 0.8)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftX, stemBottom);
    ctx.lineTo(leftX, stemTop + 5);
    ctx.arcTo(leftX, stemTop, leftX + 5, stemTop, 5);
    ctx.arcTo(rightX, stemTop, rightX, stemTop + 5, 5);
    ctx.lineTo(rightX, stemBottom);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Bulb Glass Shell
    const bulbGrad = ctx.createRadialGradient(
      x - bulbRadius*0.2, bulbCenterY - bulbRadius*0.2, bulbRadius*0.1,
      x, bulbCenterY, bulbRadius
    );
    bulbGrad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    bulbGrad.addColorStop(1, 'rgba(156, 163, 175, 0.35)');
    ctx.fillStyle = bulbGrad;
    ctx.strokeStyle = '#6b7280';
    ctx.lineWidth = 0.8 + state.wallThickness * 0.6;
    ctx.beginPath();
    ctx.arc(x, bulbCenterY, bulbRadius + 0.5 + state.wallThickness * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Capillary Bore (Dark inner channel)
    const boreWidth = Math.min(glassWidth * 0.72, 0.8 + state.capillaryBore * 4.5);
    ctx.fillStyle = '#0a0a0c';
    ctx.fillRect(x - boreWidth / 2, stemTop + 8, boreWidth, stemBottom - stemTop - 8);

    const isMercury = state.liquidType === 'mercury';
    const color = isMercury ? '#a1a1aa' : '#ef4444';
    const reflectionColor = isMercury ? '#f4f4f5' : '#fee2e2';

    const zeroY = 210;
    const maxC = 220;
    const maxCY = 40;
    const pixelsPerC = (zeroY - maxCY) / maxC;
    const currentY = zeroY - Math.min(maxC, state.thermometerTemp) * pixelsPerC;

    // Draw Liquid column inside capillary
    ctx.fillStyle = color;
    ctx.fillRect(x - boreWidth/2, currentY, boreWidth, stemBottom - currentY);
    
    // Draw liquid meniscus (curved top)
    ctx.beginPath();
    ctx.ellipse(x, currentY, boreWidth/2, 1.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Liquid reflection highlight
    ctx.fillStyle = reflectionColor;
    ctx.fillRect(x - boreWidth/6, currentY, boreWidth/3, stemBottom - currentY);

    // Liquid in Bulb
    const bulbCoreRadius = bulbRadius * 0.9;
    const liquidBulbGrad = ctx.createRadialGradient(
      x - bulbCoreRadius*0.2, bulbCenterY - bulbCoreRadius*0.2, bulbCoreRadius*0.1,
      x, bulbCenterY, bulbCoreRadius
    );
    if (isMercury) {
      liquidBulbGrad.addColorStop(0, '#f4f4f5');
      liquidBulbGrad.addColorStop(0.3, '#d4d4d8');
      liquidBulbGrad.addColorStop(0.8, '#71717a');
      liquidBulbGrad.addColorStop(1, '#3f3f46');
    } else {
      liquidBulbGrad.addColorStop(0, '#fee2e2');
      liquidBulbGrad.addColorStop(0.2, '#fca5a5');
      liquidBulbGrad.addColorStop(0.7, '#ef4444');
      liquidBulbGrad.addColorStop(1, '#991b1b');
    }
    ctx.fillStyle = liquidBulbGrad;
    ctx.beginPath();
    ctx.arc(x, bulbCenterY, bulbCoreRadius, 0, Math.PI * 2);
    ctx.fill();

    // Scale markings
    ctx.strokeStyle = 'rgba(161, 161, 170, 0.6)';
    ctx.lineWidth = 0.5;
    ctx.font = '6.5px Arial';
    ctx.fillStyle = '#a1a1aa';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let tVal = 0; tVal <= 200; tVal += 50) {
      const yTick = zeroY - tVal * pixelsPerC;
      ctx.beginPath();
      ctx.moveTo(leftX, yTick);
      ctx.lineTo(leftX + 4, yTick);
      ctx.stroke();
      ctx.fillText(`${tVal}°C`, leftX - 22, yTick + 2.5);
    }

    // Structure Labels
    if (state.showLabels) {
      drawLabelLine(ctx, leftX + 1, stemTop + 60, 10, stemTop + 30, t('tools.thermometerLab.labels.thinWall'), 'left');
      drawLabelLine(ctx, x, currentY, 230, currentY - 15, t('tools.thermometerLab.labels.meniscus'), 'left');
      drawLabelLine(ctx, x - boreWidth/2, stemTop + 110, 10, stemTop + 110, t('tools.thermometerLab.labels.narrowBore'), 'left');
      drawLabelLine(ctx, x, bulbCenterY, 230, bulbCenterY + 15, t('tools.thermometerLab.labels.largeBulb'), 'left');
    }
  }

  function drawResistanceProbe(ctx) {
    const x = 120;
    const probeTop = 20;
    const probeBottom = 245;
    const width = 10;
    const rx = x - width / 2;

    // Metallic probe sheath
    const probeGrad = ctx.createLinearGradient(rx, probeTop, rx + width, probeTop);
    probeGrad.addColorStop(0, '#71717a');
    probeGrad.addColorStop(0.3, '#f4f4f5');
    probeGrad.addColorStop(0.7, '#d4d4d8');
    probeGrad.addColorStop(1, '#3f3f46');

    ctx.fillStyle = probeGrad;
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(rx, probeTop, width, probeBottom - probeTop, [0, 0, 4, 4]);
    ctx.fill();
    ctx.stroke();

    // Platinum Coil Cutaway (Schematic view inside the tip)
    ctx.fillStyle = 'rgba(21, 21, 24, 0.8)';
    ctx.fillRect(rx + 2, probeBottom - 45, width - 4, 40);
    
    // Draw platinum coil wire
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    let cy = probeBottom - 40;
    ctx.moveTo(x - 2, cy);
    for (let i = 0; i < 8; i++) {
      cy += 4;
      ctx.lineTo(x + 2, cy);
      cy += 4;
      ctx.lineTo(x - 2, cy);
    }
    ctx.stroke();

    // Connecting wires from probe top to meter
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(x - 2, probeTop);
    ctx.bezierCurveTo(x - 10, probeTop - 15, 200, 30, 245, 60);
    ctx.stroke();

    ctx.strokeStyle = '#111827';
    ctx.beginPath();
    ctx.moveTo(x + 2, probeTop);
    ctx.bezierCurveTo(x + 10, probeTop - 12, 210, 45, 245, 75);
    ctx.stroke();

    // Digital Meter
    const ox = 245;
    const oy = 40;
    const ow = 135;
    const oh = 90;

    ctx.fillStyle = '#18181b';
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(ox, oy, ow, oh, 10);
    ctx.fill();
    ctx.stroke();

    // Meter screen
    ctx.fillStyle = '#022c22';
    ctx.beginPath();
    ctx.roundRect(ox + 10, oy + 12, ow - 20, 34, 4);
    ctx.fill();

    // Glowing resistance display
    ctx.font = 'bold 17px "Courier New"';
    ctx.fillStyle = '#10b981';
    ctx.textAlign = 'right';
    ctx.fillText(state.currentResistance.toFixed(2) + ' Ω', ox + ow - 16, oy + 34);

    ctx.font = '6px Arial';
    ctx.fillStyle = '#a7f3d0';
    ctx.textAlign = 'left';
    ctx.fillText('PLATINUM RTD METER', ox + 14, oy + 21);

    // Structure Labels
    if (state.showLabels) {
      drawLabelLine(ctx, rx + 1, probeTop + 80, 10, probeTop + 50, t('tools.thermometerLab.labels.metalSheath'), 'left');
      drawLabelLine(ctx, x, probeBottom - 20, 230, probeBottom - 40, t('tools.thermometerLab.labels.platinumCoil'), 'left');
    }
  }

  function drawThermistorProbe(ctx) {
    const x = 120;
    const probeTop = 20;
    const beadY = 245;

    // Fine wires
    ctx.strokeStyle = '#111827';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x - 2, probeTop);
    ctx.lineTo(x - 2, beadY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + 2, probeTop);
    ctx.lineTo(x + 2, beadY);
    ctx.stroke();

    // Glass tube sheath
    const tubeTop = 20;
    const tubeBottom = 225;
    const tubeWidth = 12;
    const tx = x - tubeWidth / 2;

    const tubeGrad = ctx.createLinearGradient(tx, tubeTop, tx + tubeWidth, tubeTop);
    tubeGrad.addColorStop(0, 'rgba(229, 231, 235, 0.4)');
    tubeGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
    tubeGrad.addColorStop(0.7, 'rgba(243, 244, 246, 0.5)');
    tubeGrad.addColorStop(1, 'rgba(209, 213, 219, 0.6)');

    ctx.fillStyle = tubeGrad;
    ctx.strokeStyle = 'rgba(156, 163, 175, 0.6)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.roundRect(tx, tubeTop, tubeWidth, tubeBottom - tubeTop, [0, 0, 3, 3]);
    ctx.fill();
    ctx.stroke();

    // Semiconductor Bead (3D Radial Gradient)
    const beadRadius = 7;
    const beadGrad = ctx.createRadialGradient(
      x - beadRadius * 0.2, beadY - beadRadius * 0.2, beadRadius * 0.1,
      x, beadY, beadRadius
    );
    beadGrad.addColorStop(0, '#6b7280');
    beadGrad.addColorStop(0.7, '#1f2937');
    beadGrad.addColorStop(1, '#09090b');

    ctx.fillStyle = beadGrad;
    ctx.strokeStyle = '#030712';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(x, beadY, beadRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Leads to meter
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(x - 2, probeTop);
    ctx.bezierCurveTo(x - 10, probeTop - 15, 200, 30, 245, 60);
    ctx.stroke();

    ctx.strokeStyle = '#111827';
    ctx.beginPath();
    ctx.moveTo(x + 2, probeTop);
    ctx.bezierCurveTo(x + 10, probeTop - 12, 210, 45, 245, 75);
    ctx.stroke();

    // Digital Meter
    const ox = 245;
    const oy = 40;
    const ow = 135;
    const oh = 90;

    ctx.fillStyle = '#18181b';
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(ox, oy, ow, oh, 10);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#022c22';
    ctx.beginPath();
    ctx.roundRect(ox + 10, oy + 12, ow - 20, 34, 4);
    ctx.fill();

    ctx.font = 'bold 17px "Courier New"';
    ctx.fillStyle = '#34d399';
    ctx.textAlign = 'right';
    ctx.fillText(state.currentThermistorR.toFixed(2) + ' kΩ', ox + ow - 16, oy + 34);

    ctx.font = '6px Arial';
    ctx.fillStyle = '#a7f3d0';
    ctx.textAlign = 'left';
    ctx.fillText('NTC THERMISTOR METER', ox + 14, oy + 21);

    // Structure Labels
    if (state.showLabels) {
      drawLabelLine(ctx, x - 2, probeTop + 100, 10, probeTop + 70, t('tools.thermometerLab.labels.leads'), 'left');
      drawLabelLine(ctx, x, beadY, 230, beadY - 20, t('tools.thermometerLab.labels.semiconductorBead'), 'left');
    }
  }

  function drawGraphCrosshair(ctx, layout, px, py, xVal, yVal, xUnit, yUnit, color) {
    const { gx, gy, gw, gh } = layout;
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.0;
    ctx.setLineDash([4, 4]);

    // Projection to X-axis
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px, gy + gh);
    ctx.stroke();

    // Projection to Y-axis
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(gx, py);
    ctx.stroke();
    ctx.setLineDash([]);

    // Glowing labels on axes
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const xText = `${xVal.toFixed(1)}${xUnit}`;
    const xTextW = ctx.measureText(xText).width + 10;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(px - xTextW/2, gy + gh + 2, xTextW, 15, 3);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillText(xText, px, gy + gh + 4);

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    const yText = `${yVal.toFixed(2)} ${yUnit}`;
    const yTextW = ctx.measureText(yText).width + 10;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(gx - yTextW - 2, py - 7, yTextW, 15, 3);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillText(yText, gx - 7, py);
  }

  function drawLiquidGraph(ctx) {
    const layout = getGraphLayout();
    const { minL, maxL } = getLiquidLengthBounds();
    const { minT, maxT, tickStep } = getTempAxisScale();
    const yTicks = buildLengthTicks(minL, maxL);
    const axis = drawGraphAxes(ctx, layout, minT, maxT, tickStep, yTicks);
    const { gx, gy, gw, gh, axisFont, yLabelX, xLabelY, dotR } = { ...layout, ...axis };

    ctx.save();
    ctx.translate(yLabelX, gy + gh / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.font = axisFont;
    ctx.fillStyle = '#e4e4e7';
    ctx.fillText('Length of liquid column / cm', 0, 0);
    ctx.restore();

    ctx.font = axisFont;
    ctx.fillStyle = '#e4e4e7';
    ctx.textAlign = 'center';
    ctx.fillText('temperature / °C', gx + gw / 2, xLabelY);

    const tLineEnd = maxT;
    const px0 = mapGraphX(0, minT, maxT, gx, gw);
    const py0 = mapGraphY(liquidLengthAtTemp(0), minL, maxL, gy, gh);
    const pxEnd = mapGraphX(tLineEnd, minT, maxT, gx, gw);
    const pyEnd = mapGraphY(liquidLengthAtTemp(tLineEnd), minL, maxL, gy, gh);

    // Linear line
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(px0, py0);
    ctx.lineTo(pxEnd, pyEnd);
    ctx.stroke();

    const currentT = state.thermometerTemp;
    const currentL = state.currentLength;
    if (currentT >= minT && currentT <= maxT) {
      const px = mapGraphX(currentT, minT, maxT, gx, gw);
      const py = mapGraphY(currentL, minL, maxL, gy, gh);

      // Draw crosshair projection
      drawGraphCrosshair(ctx, layout, px, py, currentT, currentL, '°C', 'cm', '#ef4444');

      // Glowing dot
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(px, py, dotR, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // Reset
    }
  }

  function drawResistanceGraph(ctx) {
    const layout = getGraphLayout();
    const { minR, maxR, ticks } = getResistanceBounds();
    const tempScale = getTempAxisScale();
    const axis = drawGraphAxes(ctx, layout, tempScale.minT, tempScale.maxT, tempScale.tickStep, ticks);
    const { gx, gy, gw, gh, axisFont, yLabelX, xLabelY, dotR } = { ...layout, ...axis };

    ctx.save();
    ctx.translate(yLabelX, gy + gh / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.font = axisFont;
    ctx.fillStyle = '#e4e4e7';
    ctx.fillText('Resistance of platinum / Ω', 0, 0);
    ctx.restore();

    ctx.font = axisFont;
    ctx.fillStyle = '#e4e4e7';
    ctx.textAlign = 'center';
    ctx.fillText('temperature / °C', gx + gw / 2, xLabelY);

    const { minT, maxT } = tempScale;
    const tEnd = maxT;
    const px0 = mapGraphX(0, minT, maxT, gx, gw);
    const py0 = mapGraphY(resistanceAtTemp(0), minR, maxR, gy, gh);
    const pxEnd = mapGraphX(tEnd, minT, maxT, gx, gw);
    const pyEnd = mapGraphY(resistanceAtTemp(tEnd), minR, maxR, gy, gh);

    // Linear line
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(px0, py0);
    ctx.lineTo(pxEnd, pyEnd);
    ctx.stroke();

    const currentT = state.thermometerTemp;
    const currentR = state.currentResistance;
    if (currentT >= minT && currentT <= maxT) {
      const px = mapGraphX(currentT, minT, maxT, gx, gw);
      const py = mapGraphY(currentR, minR, maxR, gy, gh);

      // Draw crosshair projection
      drawGraphCrosshair(ctx, layout, px, py, currentT, currentR, '°C', 'Ω', '#6366f1');

      // Glowing dot
      ctx.shadowColor = '#6366f1';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#6366f1';
      ctx.beginPath();
      ctx.arc(px, py, dotR, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function drawThermistorGraph(ctx) {
    const layout = getGraphLayout();
    const tempScale = getTempAxisScale();
    const { minR, maxR, ticks } = getThermistorBounds(tempScale);
    const axis = drawGraphAxes(ctx, layout, tempScale.minT, tempScale.maxT, tempScale.tickStep, ticks);
    const { gx, gy, gw, gh, axisFont, yLabelX, xLabelY, dotR } = { ...layout, ...axis };
    const { minT, maxT } = tempScale;

    ctx.save();
    ctx.translate(yLabelX, gy + gh / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.font = axisFont;
    ctx.fillStyle = '#e4e4e7';
    ctx.fillText('Resistance of thermistor / kΩ', 0, 0);
    ctx.restore();

    ctx.font = axisFont;
    ctx.fillStyle = '#e4e4e7';
    ctx.textAlign = 'center';
    ctx.fillText('temperature / °C', gx + gw / 2, xLabelY);

    // Exponential curve
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    let started = false;
    for (let tVal = minT; tVal <= maxT; tVal += 1) {
      const tempK = tVal + 273.15;
      const r = state.thermistorR25 * Math.exp(state.thermistorBeta * (1 / tempK - 1 / 298.15));
      const px = mapGraphX(tVal, minT, maxT, gx, gw);
      const py = mapGraphY(Math.min(maxR, r), minR, maxR, gy, gh);
      if (py >= gy && py <= gy + gh) {
        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
    }
    ctx.stroke();

    const currentT = state.thermometerTemp;
    const currentR = state.currentThermistorR;
    if (currentT >= minT && currentT <= maxT) {
      const px = mapGraphX(currentT, minT, maxT, gx, gw);
      const py = mapGraphY(Math.min(maxR, currentR), minR, maxR, gy, gh);

      // Draw crosshair projection
      drawGraphCrosshair(ctx, layout, px, py, currentT, currentR, '°C', 'kΩ', '#10b981');

      // Glowing dot
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(px, py, dotR, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function drawVisuals() {
    physCtx.clearRect(0, 0, PHYS_WIDTH, PHYS_HEIGHT);
    graphCtx.clearRect(0, 0, GRAPH_WIDTH, GRAPH_HEIGHT);

    physCtx.save();
    physCtx.translate(PHYS_SCENE_OFFSET_X, 0);
    drawBeaker(physCtx);
    if (state.thermometerType === 'liquid') {
      drawLiquidThermometer(physCtx);
    } else if (state.thermometerType === 'resistance') {
      drawResistanceProbe(physCtx);
    } else {
      drawThermistorProbe(physCtx);
    }
    physCtx.restore();

    if (state.thermometerType === 'liquid') {
      drawLiquidGraph(graphCtx);
    } else if (state.thermometerType === 'resistance') {
      drawResistanceGraph(graphCtx);
    } else {
      drawThermistorGraph(graphCtx);
    }
  }

  // Generate beautiful inline SVGs for LaTeX-like math equations
  function renderSVGFormulas() {
    const liquidFormula = wrap.querySelector('#tl-svg-formula-liquid');
    if (liquidFormula) {
      liquidFormula.innerHTML = `
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
      `;
    }

    const liquidFormulaSub = wrap.querySelector('#tl-svg-formula-liquid-sub');
    if (liquidFormulaSub) {
      const l100_l0 = state.liquidL100 - state.liquidL0;
      const lt_l0 = state.currentLength - state.liquidL0;
      liquidFormulaSub.innerHTML = `
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${state.liquidL100.toFixed(1)} - ${state.liquidL0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${state.currentLength.toFixed(2)} - ${state.liquidL0.toFixed(1)}</text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">T - 0</text>

          <!-- Step 2: Simplify Ratio -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for T</text>
          <line x1="120" y1="80" x2="200" y2="80" stroke="#fff" stroke-width="1.2" />
          <text x="160" y="72" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${lt_l0.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${l100_l0.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${state.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `;
    }

    const resistanceFormula = wrap.querySelector('#tl-svg-formula-resistance');
    if (resistanceFormula) {
      resistanceFormula.innerHTML = `
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
      `;
    }

    const resistanceFormulaSub = wrap.querySelector('#tl-svg-formula-resistance-sub');
    if (resistanceFormulaSub) {
      const r100_r0 = state.resistanceR100 - state.resistanceR0;
      const rt_r0 = state.currentResistance - state.resistanceR0;
      resistanceFormulaSub.innerHTML = `
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${state.resistanceR100.toFixed(1)} - ${state.resistanceR0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${state.currentResistance.toFixed(2)} - ${state.resistanceR0.toFixed(1)}</text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">T - 0</text>

          <!-- Step 2: Simplify Ratio -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for T</text>
          <line x1="120" y1="80" x2="200" y2="80" stroke="#fff" stroke-width="1.2" />
          <text x="160" y="72" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${rt_r0.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${r100_r0.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${state.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `;
    }

    const thermistorFormula = wrap.querySelector('#tl-svg-formula-thermistor');
    if (thermistorFormula) {
      thermistorFormula.innerHTML = `
        <svg height="50" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="23" x2="220" y2="23" stroke="#fff" stroke-width="1.5" />
          <text x="130" y="15" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">1</text>
          <text x="130" y="38" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">(1/&beta;) &bull; ln(R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2">/R</tspan><tspan dy="2" font-size="8">25</tspan><tspan dy="-2">) + 1/298.15</tspan></text>
          <text x="230" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">- 273.15</text>
        </svg>
      `;
    }

    const thermistorFormulaSub = wrap.querySelector('#tl-svg-formula-thermistor-sub');
    if (thermistorFormulaSub) {
      const tempK = state.thermometerTemp + 273.15;
      thermistorFormulaSub.innerHTML = `
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            T<tspan dy="3" font-size="10">K</tspan><tspan dy="-3" fill="#10b981" font-weight="bold"> = ${tempK.toFixed(2)} K</tspan>
            <tspan fill="#fff"> &rArr; T = </tspan>
            <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${state.thermometerTemp.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `;
    }
  }

  // Draw interactive dual-scale comparison for faulty thermometer solver
  function drawDualScaleSVG() {
    const container = wrap.querySelector('#tl-faulty-svg-container');
    if (!container) return;

    const { cf, cu, interval } = getFaultyCalibration();
    const cm = parseFloat(wrap.querySelector('#tl-input-q10a-cm').value) || 0;
    const tVal = parseFloat(wrap.querySelector('#tl-input-q10b-t').value) || 0;

    // Determine current active solver pane
    const isPaneA = wrap.querySelector('#tl-pane-q10a').classList.contains('active');
    const displayT = isPaneA ? ((cm - cf) / interval) * 100 : tVal;
    const displayC = isPaneA ? cm : (tVal / 100) * interval + cf;

    // Map temperature to Y position (height is 120px, from y=30 to y=150)
    // 0°C -> y=130, 100°C -> y=50
    const mapY = (t) => 130 - (t / 100) * 80;
    const currentY = mapY(displayT);

    container.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <!-- Left Scale: True Scale -->
        <g transform="translate(0, 0)">
          <!-- Glass Tube -->
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="84" y="${currentY}" width="4" height="${144 - currentY}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          
          <!-- Ticks -->
          <!-- Ice Point 0°C -->
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          
          <!-- Steam Point 100°C -->
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>

          <!-- Current Point -->
          <text x="65" y="${currentY + 3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${displayT.toFixed(1)}°C</text>

          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${t('tools.thermometerLab.faulty.trueScale')}</text>
        </g>

        <!-- Right Scale: Faulty Scale -->
        <g transform="translate(130, 0)">
          <!-- Glass Tube -->
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="104" y="${currentY}" width="4" height="${144 - currentY}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          
          <!-- Ticks -->
          <!-- Faulty Ice Point Cf -->
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${cf.toFixed(1)}°C</tspan></text>
          
          <!-- Faulty Steam Point Cu -->
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${cu.toFixed(1)}°C</tspan></text>

          <!-- Current Faulty Point -->
          <text x="125" y="${currentY + 3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${displayC.toFixed(1)}°C</text>

          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${t('tools.thermometerLab.faulty.faultyScale')}</text>
        </g>

        <!-- Connecting Ratio Indicator Line -->
        <line x1="86" y1="${currentY}" x2="236" y2="${currentY}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${currentY}" r="3" fill="#34d399" />
        <circle cx="236" cy="${currentY}" r="3" fill="#34d399" />
      </svg>
    `;
  }

  function updateHTMLDisplays(tau) {
    wrap.querySelector('#tl-bath-temp-display').innerHTML = state.bathTemp.toFixed(1) + '°C';
    wrap.querySelector('#tl-val-bath-temp').innerHTML = state.bathTemp.toFixed(1) + ' °C';

    const stateEl = wrap.querySelector('#tl-bath-state');
    if (state.bathTemp <= 0) {
      stateEl.textContent = 'Melting Ice Bath';
    } else if (state.bathTemp >= 100) {
      stateEl.textContent = 'Boiling Water/Steam';
    } else if (state.bathTemp === 150) {
      stateEl.textContent = 'Hot Cooking Oil';
    } else {
      stateEl.textContent = 'Liquid Water';
    }

    wrap.querySelector('#tl-val-response-time').textContent = tau.toFixed(2) + ' s';

    const warnBanner = wrap.querySelector('#tl-alcohol-boiling-warning');
    if (state.thermometerType === 'liquid' && state.liquidType === 'alcohol' && state.bathTemp >= 78) {
      warnBanner.style.display = 'block';
    } else {
      warnBanner.style.display = 'none';
    }

    if (state.thermometerType === 'liquid') {
      wrap.querySelector('#tl-live-liquid-lt').textContent = state.currentLength.toFixed(2) + ' cm';
      wrap.querySelector('#tl-live-liquid-t-sub').textContent = state.thermometerTemp.toFixed(1) + '°C';
    } else if (state.thermometerType === 'resistance') {
      wrap.querySelector('#tl-live-resistance-rt').textContent = state.currentResistance.toFixed(2) + ' Ω';
      wrap.querySelector('#tl-live-resistance-t-sub').textContent = state.thermometerTemp.toFixed(1) + '°C';
    } else {
      wrap.querySelector('#tl-live-thermistor-rt').textContent = state.currentThermistorR.toFixed(2) + ' kΩ';
    }

    renderSVGFormulas();
  }

  let animationFrameId = null;
  function simulationLoop(timestamp) {
    if (!state.lastTimestamp) state.lastTimestamp = timestamp;
    const dt = (timestamp - state.lastTimestamp) / 1000;
    state.lastTimestamp = timestamp;

    const clampedDt = Math.min(dt, 0.1);
    const tau = getResponseTimeConstant();

    const dTemp = (clampedDt / tau) * (state.bathTemp - state.thermometerTemp);
    state.thermometerTemp += dTemp;

    state.currentLength = state.liquidL0 + ((state.liquidL100 - state.liquidL0) / 100) * state.thermometerTemp;
    state.currentResistance = state.resistanceR0 + ((state.resistanceR100 - state.resistanceR0) / 100) * state.thermometerTemp;
    const tempK = state.thermometerTemp + 273.15;
    state.currentThermistorR = state.thermistorR25 * Math.exp(state.thermistorBeta * (1 / tempK - 1 / 298.15));

    updateParticles(clampedDt);
    drawVisuals();
    updateHTMLDisplays(tau);

    animationFrameId = requestAnimationFrame(simulationLoop);
  }

  function getFaultyCalibration() {
    const cf = parseFloat(wrap.querySelector('#tl-input-faulty-cf').value);
    const cu = parseFloat(wrap.querySelector('#tl-input-faulty-cu').value);
    const cfVal = Number.isFinite(cf) ? cf : -1.5;
    const cuVal = Number.isFinite(cu) ? cu : 105;
    const interval = cuVal - cfVal;
    return { cf: cfVal, cu: cuVal, interval };
  }

  function formatFaultyNum(n) {
    const rounded = Math.round(n * 100) / 100;
    return rounded >= 0 ? rounded.toFixed(1) : `(${rounded.toFixed(1)})`;
  }

  function updateFaultySolver() {
    const { cf, cu, interval } = getFaultyCalibration();
    const intervalEl = wrap.querySelector('#tl-val-faulty-interval');
    const errA = wrap.querySelector('#tl-faulty-error-a');
    const errB = wrap.querySelector('#tl-faulty-error-b');
    const invalid = Math.abs(interval) < 0.01;

    intervalEl.textContent = interval.toFixed(1) + ' °C';

    const formulaPaneA = wrap.querySelector('#tl-svg-formula-faulty-a');
    const formulaPaneB = wrap.querySelector('#tl-svg-formula-faulty-b');

    if (invalid) {
      errA.hidden = false;
      errA.textContent = 'C_u must differ from C_f (interval cannot be zero).';
      errB.hidden = false;
      errB.textContent = errA.textContent;
      if (formulaPaneA) formulaPaneA.innerHTML = '';
      if (formulaPaneB) formulaPaneB.innerHTML = '';
      return;
    }
    errA.hidden = true;
    errB.hidden = true;

    const cm = parseFloat(wrap.querySelector('#tl-input-q10a-cm').value) || 0;
    const tVal = parseFloat(wrap.querySelector('#tl-input-q10b-t').value) || 0;
    const trueT = ((cm - cf) / interval) * 100;
    const faultyC = (tVal / 100) * interval + cf;

    if (formulaPaneA) {
      formulaPaneA.innerHTML = `
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${cm.toFixed(1)} - ${formatFaultyNum(cf)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${cu.toFixed(1)} - ${formatFaultyNum(cf)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${trueT.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `;
    }

    if (formulaPaneB) {
      formulaPaneB.innerHTML = `
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${tVal.toFixed(1)} &times; ${interval.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${formatFaultyNum(cf)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${faultyC.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `;
    }

    drawDualScaleSVG();
  }

  function calculateQ11() {
    const r = parseFloat(wrap.querySelector('#tl-input-q11-r').value) || 0;
    const theta = ((r - state.resistanceR0) / (state.resistanceR100 - state.resistanceR0)) * 100;
    
    const formulaPane = wrap.querySelector('#tl-svg-formula-resistance-solver');
    if (formulaPane) {
      formulaPane.innerHTML = `
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">&theta; =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="13" text-anchor="middle">${r.toFixed(1)} - ${state.resistanceR0.toFixed(1)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">${state.resistanceR100.toFixed(1)} - ${state.resistanceR0.toFixed(1)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${theta.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `;
    }
  }

  function calculateTtoL() {
    // Direction B: Given current bath temperature, find corresponding length
    const tInput = state.thermometerTemp; 
    const l100_l0 = state.liquidL100 - state.liquidL0;
    const length = state.liquidL0 + (l100_l0 / 100) * tInput;
    
    const formulaPane = wrap.querySelector('#tl-svg-formula-t-to-l');
    if (formulaPane) {
      formulaPane.innerHTML = `
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${state.liquidL100.toFixed(1)} - ${state.liquidL0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${state.liquidL0.toFixed(1)}</tspan></text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${tInput.toFixed(1)} - 0</text>

          <!-- Step 2: Solve for L_T -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"></tspan></text>
          <text x="10" y="103" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${state.liquidL0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${l100_l0.toFixed(1)} / 100)</tspan> &times; ${tInput.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${length.toFixed(2)} cm</tspan>
          </text>
        </svg>
      `;
    }
  }

  function calculateTtoR() {
    // Direction B: Given current bath temperature, find corresponding resistance
    const tInput = state.thermometerTemp;
    const r100_r0 = state.resistanceR100 - state.resistanceR0;
    const resistance = state.resistanceR0 + (r100_r0 / 100) * tInput;
    
    const formulaPane = wrap.querySelector('#tl-svg-formula-t-to-r');
    if (formulaPane) {
      formulaPane.innerHTML = `
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${state.resistanceR100.toFixed(1)} - ${state.resistanceR0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${state.resistanceR0.toFixed(1)}</tspan></text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${tInput.toFixed(1)} - 0</text>

          <!-- Step 2: Solve for R_T -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"></tspan></text>
          <text x="10" y="103" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${state.resistanceR0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${r100_r0.toFixed(1)} / 100)</tspan> &times; ${tInput.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${resistance.toFixed(2)} Ω</tspan>
          </text>
        </svg>
      `;
    }
  }

  function updateCalculations() {
    updateFaultySolver();
    calculateQ11();
    calculateTtoL();
    calculateTtoR();
  }

  function setupPreset(btnId, temp) {
    wrap.querySelector('#' + btnId).addEventListener('click', () => {
      state.bathTemp = temp;
      wrap.querySelector('#tl-bath-temp-slider').value = temp;
      updateCalculations();
    });
  }

  function setActiveTab(tabId) {
    wrap.querySelectorAll('.tl-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tl-tab') === tabId);
    });
    wrap.querySelectorAll('.tl-tab-content').forEach(content => {
      content.classList.toggle('active', content.id === 'tl-tab-' + tabId);
    });
    wrap.querySelectorAll('.tl-live-tab').forEach(panel => {
      panel.classList.toggle('active', panel.id === 'tl-live-' + tabId);
    });
    state.thermometerType = tabId;
  }

  // Event Listeners
  function setupEventListeners() {
    wrap.querySelectorAll('.tl-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setActiveTab(btn.getAttribute('data-tl-tab'));
        updateCalculations();
      });
    });

    // Structure labels toggle button
    const toggleLabelsBtn = wrap.querySelector('#tl-btn-toggle-labels');
    toggleLabelsBtn.addEventListener('click', () => {
      state.showLabels = !state.showLabels;
      wrap.querySelector('#tl-lbl-toggle-labels').textContent = state.showLabels 
        ? t('tools.thermometerLab.labels.hide') 
        : t('tools.thermometerLab.labels.show');
    });

    const tempSlider = wrap.querySelector('#tl-bath-temp-slider');
    tempSlider.addEventListener('input', (e) => {
      state.bathTemp = parseFloat(e.target.value);
      updateCalculations();
    });

    setupPreset('tl-btn-preset-ice', 0.0);
    setupPreset('tl-btn-preset-room', 25.0);
    setupPreset('tl-btn-preset-steam', 100.0);
    setupPreset('tl-btn-preset-oil', 150.0);

    wrap.querySelector('#tl-card-mercury').addEventListener('click', () => {
      state.liquidType = 'mercury';
      wrap.querySelector('#tl-card-mercury').className = 'tl-seg-btn active-mercury';
      wrap.querySelector('#tl-card-alcohol').className = 'tl-seg-btn';
      updateCalculations();
    });

    wrap.querySelector('#tl-card-alcohol').addEventListener('click', () => {
      state.liquidType = 'alcohol';
      wrap.querySelector('#tl-card-mercury').className = 'tl-seg-btn';
      wrap.querySelector('#tl-card-alcohol').className = 'tl-seg-btn active-alcohol';
      updateCalculations();
    });

    wrap.querySelector('#tl-slider-bulb-vol').addEventListener('input', (e) => {
      state.bulbVolume = parseFloat(e.target.value);
      wrap.querySelector('#tl-val-bulb-vol').textContent = state.bulbVolume + ' mm³';
    });

    wrap.querySelector('#tl-slider-wall-thick').addEventListener('input', (e) => {
      state.wallThickness = parseFloat(e.target.value);
      wrap.querySelector('#tl-val-wall-thickness').textContent = state.wallThickness.toFixed(1) + ' mm';
    });

    wrap.querySelector('#tl-slider-capillary-bore').addEventListener('input', (e) => {
      state.capillaryBore = parseFloat(e.target.value);
      wrap.querySelector('#tl-val-capillary-bore').textContent = state.capillaryBore.toFixed(2) + ' mm';
    });

    wrap.querySelector('#tl-slider-liquid-l0').addEventListener('input', (e) => {
      state.liquidL0 = parseFloat(e.target.value);
      wrap.querySelector('#tl-val-liquid-l0').textContent = state.liquidL0.toFixed(1) + ' cm';
      updateCalculations();
    });

    wrap.querySelector('#tl-slider-liquid-l100').addEventListener('input', (e) => {
      state.liquidL100 = parseFloat(e.target.value);
      wrap.querySelector('#tl-val-liquid-l100').textContent = state.liquidL100.toFixed(1) + ' cm';
      updateCalculations();
    });

    wrap.querySelector('#tl-slider-resistance-r0').addEventListener('input', (e) => {
      state.resistanceR0 = parseFloat(e.target.value);
      wrap.querySelector('#tl-val-resistance-r0').textContent = state.resistanceR0.toFixed(1) + ' Ω';
      wrap.querySelector('#tl-spec-resistance-r0').textContent = state.resistanceR0.toFixed(1) + ' Ω';
      updateCalculations();
    });

    wrap.querySelector('#tl-slider-resistance-r100').addEventListener('input', (e) => {
      state.resistanceR100 = parseFloat(e.target.value);
      wrap.querySelector('#tl-val-resistance-r100').textContent = state.resistanceR100.toFixed(1) + ' Ω';
      wrap.querySelector('#tl-spec-resistance-r100').textContent = state.resistanceR100.toFixed(1) + ' Ω';
      updateCalculations();
    });

    wrap.querySelector('#tl-slider-thermistor-r25').addEventListener('input', (e) => {
      state.thermistorR25 = parseFloat(e.target.value);
      wrap.querySelector('#tl-val-thermistor-r25').textContent = state.thermistorR25.toFixed(1) + ' kΩ';
      wrap.querySelector('#tl-spec-thermistor-r25').textContent = state.thermistorR25.toFixed(1) + ' kΩ';
      updateCalculations();
    });

    wrap.querySelector('#tl-slider-thermistor-beta').addEventListener('input', (e) => {
      state.thermistorBeta = parseFloat(e.target.value);
      wrap.querySelector('#tl-val-thermistor-beta').textContent = state.thermistorBeta + ' K';
      wrap.querySelector('#tl-spec-thermistor-beta').textContent = state.thermistorBeta + ' K';
      updateCalculations();
    });

    wrap.querySelector('#tl-btn-solve-q10a').addEventListener('click', () => {
      wrap.querySelector('#tl-btn-solve-q10a').classList.add('active');
      wrap.querySelector('#tl-btn-solve-q10b').classList.remove('active');
      wrap.querySelector('#tl-pane-q10a').classList.add('active');
      wrap.querySelector('#tl-pane-q10b').classList.remove('active');
      updateFaultySolver();
    });

    wrap.querySelector('#tl-btn-solve-q10b').addEventListener('click', () => {
      wrap.querySelector('#tl-btn-solve-q10a').classList.remove('active');
      wrap.querySelector('#tl-btn-solve-q10b').classList.add('active');
      wrap.querySelector('#tl-pane-q10a').classList.remove('active');
      wrap.querySelector('#tl-pane-q10b').classList.add('active');
      updateFaultySolver();
    });

    wrap.querySelector('#tl-input-faulty-cf').addEventListener('input', updateFaultySolver);
    wrap.querySelector('#tl-input-faulty-cu').addEventListener('input', updateFaultySolver);
    wrap.querySelector('#tl-input-q10a-cm').addEventListener('input', updateFaultySolver);
    wrap.querySelector('#tl-input-q10b-t').addEventListener('input', updateFaultySolver);
    wrap.querySelector('#tl-input-q11-r').addEventListener('input', calculateQ11);
    
    // T to L and T to R solvers
    const inputTtoL = wrap.querySelector('#tl-input-t-to-l');
    if (inputTtoL) {
      inputTtoL.addEventListener('input', updateCalculations);
    }
    const inputTtoR = wrap.querySelector('#tl-input-t-to-r');
    if (inputTtoR) {
      inputTtoR.addEventListener('input', updateCalculations);
    }
  }

  // Programmatic tab activation based on defaultType
  if (options.type) {
    const tabsContainer = wrap.querySelector('.tl-tabs-container');
    if (tabsContainer) {
      tabsContainer.style.display = 'none';
    }
  }

  setActiveTab(defaultType);

  initParticles();
  setupEventListeners();
  updateCalculations();

  const dash = wrap.querySelector('.tl-dash');
  const controlsPanel = wrap.querySelector('.tl-controls');
  const toggleBtn = wrap.querySelector('#tl-controls-toggle');
  const dragHandle = wrap.querySelector('#tl-controls-drag');
  if (dash && controlsPanel && toggleBtn) {
    initFloatingControlsPanel({
      container: dash,
      panel: controlsPanel,
      toggleBtn,
      dragHandle,
      storageKey: `s3phy-thermo-${defaultType}`,
      breakpoint: THERM_FLOAT_BREAKPOINT,
      getToggleTitle: (collapsed) => collapsed
        ? t('tools.floatingControls.showParams')
        : t('tools.floatingControls.hideParams'),
      onLayoutChange: () => drawVisuals(),
    });
  }

  // Start loop
  animationFrameId = requestAnimationFrame(simulationLoop);

  // Cleanup handler
  wrap._thermometerLabCleanup = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };

  return wrap;
}
