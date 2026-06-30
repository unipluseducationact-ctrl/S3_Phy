const Tt="s3phy-thermometer-lab-css";const At=`
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
`;function It(){if(document.getElementById(Tt))return;const b=document.createElement("style");b.id=Tt,b.textContent=At,document.head.appendChild(b)}function Wt(b){const K={x:12,y:12},j=200,{container:A,panel:a,toggleBtn:e,dragHandle:W,dragSurface:it,storageKey:X,onLayoutChange:Y,breakpoint:U=1024,collapsedClass:J="controls-collapsed",floatingClass:H="controls-floating"}=b,x=it||W;if(!A||!a||!e)return null;let w=sessionStorage.getItem(X)!=="false",T=(()=>{try{const C=localStorage.getItem(X+":pos");if(!C)return{...K};const v=JSON.parse(C);if(typeof v.x=="number"&&typeof v.y=="number")return v}catch{}return{...K}})(),M=null,ot=null;const _=()=>window.innerWidth>=U,Q=(C,v)=>{const at=A.getBoundingClientRect(),st=a.getBoundingClientRect(),pt=Math.max(0,at.width-st.width),ft=Math.max(0,at.height-st.height);return{x:Math.min(Math.max(0,C),pt),y:Math.min(Math.max(0,v),ft)}},I=()=>{a.style.left=T.x+"px",a.style.top=T.y+"px",a.style.right="auto",a.style.bottom="auto"},et=()=>{typeof Y=="function"&&(clearTimeout(ot),ot=setTimeout(Y,j))},Z=()=>{e.setAttribute("aria-expanded",w?"false":"true"),b.getToggleTitle&&(e.title=b.getToggleTitle(w));const C=e.querySelector("[data-float-chevron]");C&&(C.textContent=w?"v":"^")},P=()=>{_()&&(T=Q(T.x,T.y),I())},tt=C=>{w=C,a.classList.toggle(J,w),sessionStorage.setItem(X,w?"true":"false"),Z(),et(),requestAnimationFrame(P),setTimeout(P,260)},O=()=>{A.classList.add(H),a.classList.add("lab-controls-float"),T=Q(T.x,T.y),I(),W&&(W.style.display="")},$=()=>{A.classList.remove(H),a.classList.remove("lab-controls-float"),a.style.left="",a.style.top="",a.style.right="",a.style.bottom="",W&&(W.style.display="none")},lt=()=>{_()?(O(),T=Q(T.x,T.y),I()):$(),et()};if(a.classList.toggle(J,w),Z(),lt(),e.addEventListener("click",C=>{C.stopPropagation(),tt(!w)}),x){x.addEventListener("pointerdown",v=>{_()&&(e.contains(v.target)||(v.preventDefault(),M={pointerId:v.pointerId,startX:v.clientX,startY:v.clientY,originX:T.x,originY:T.y},x.setPointerCapture(v.pointerId),x.classList.add("is-dragging")))}),x.addEventListener("pointermove",v=>{!M||M.pointerId!==v.pointerId||(T=Q(M.originX+v.clientX-M.startX,M.originY+v.clientY-M.startY),I())});const C=v=>{if(!(!M||M.pointerId!==v.pointerId)){x.releasePointerCapture(v.pointerId),x.classList.remove("is-dragging");try{localStorage.setItem(X+":pos",JSON.stringify(T))}catch{}M=null,et()}};x.addEventListener("pointerup",C),x.addEventListener("pointercancel",C)}return window.addEventListener("resize",lt),{setCollapsed:tt,refreshMode:lt,isCollapsed:()=>w}}function Yt(b,V={}){It();const K=V.type||"liquid";let j=b("tools.thermometerLab.title"),A=b("tools.thermometerLab.subtitle");V.type==="liquid"?(j=b("tools.thermometerLab.liquid.title"),A=b("tools.thermometerLab.liquid.subtitle")||b("tools.thermometerLab.subtitle")):V.type==="resistance"?(j=b("tools.thermometerLab.resistance.title"),A=b("tools.thermometerLab.resistance.subtitle")||b("tools.thermometerLab.subtitle")):V.type==="thermistor"&&(j=b("tools.thermometerLab.thermistor.title"),A=b("tools.thermometerLab.thermistor.subtitle")||b("tools.thermometerLab.subtitle"));const a=document.createElement("div");a.className="tl-wrap",a.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${j}</h2>
      <div class="tl-sub">${A}</div>
    </div>
    <div class="tl-dash">
      <!-- TOP ROW LEFT: THERMOMETER VIEW -->
      <div class="tl-viz-phys" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;">
        <canvas class="tl-canvas-phys" id="tl-thermometerCanvas" width="460" height="340"></canvas>
        <button class="tl-btn" id="tl-btn-toggle-labels" style="margin-top:4px;width:100%;display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.75rem;padding:6px 10px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <span id="tl-lbl-toggle-labels">${b("tools.thermometerLab.labels.hide")}</span>
        </button>
      </div>

      <!-- TOP ROW RIGHT: GRAPH -->
      <div class="tl-viz-graph" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;width:100%">
        <canvas class="tl-canvas-graph" id="tl-graphCanvas" width="800" height="560"></canvas>
        
        <!-- Interactive Temperature Slider aligned directly under the Graph -->
        <div class="tl-bath-bar tl-bath-bar--under-graph">
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
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-green)">${b("tools.thermometerLab.thermistor.liveBetaLabel")}</div>
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
          <button type="button" class="tl-controls-drag-handle" id="tl-controls-drag" aria-label="${b("tools.floatingControls.dragHint")}" title="${b("tools.floatingControls.dragHint")}">⋮⋮</button>
          <button type="button" class="tl-controls-toggle" id="tl-controls-toggle" aria-expanded="false">
            <span data-float-chevron>▾</span>
            <span>${b("tools.thermometerLab.paramSettings")}</span>
          </button>
        </div>
        <div class="tl-controls-body">

        <!-- TAB 1: LIQUID-IN-GLASS -->
        <div class="tl-tab-content active" id="tl-tab-liquid">
          <details class="tl-details">
            <summary>${b("tools.thermometerLab.paramSettings")}</summary>
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
            <summary>${b("tools.thermometerLab.faultySolver")}</summary>
            <div class="tl-details-body">
              <p style="font-size:0.75rem;color:var(--tl-muted);margin:0">Set faulty readings at ice (0°C) and steam (100°C), then solve for T or C.</p>
              <div class="tl-info-card" style="margin-bottom:4px">
                <div class="tl-info-label">Faulty scale calibration</div>
                <p style="margin:0;font-size:0.75rem">T / 100 = (C − C<sub>f</sub>) / (C<sub>u</sub> − C<sub>f</sub>)</p>
              </div>
              <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-muted);margin-top:4px;">${b("tools.thermometerLab.faulty.dualScale")}</div>
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
            <summary>${b("tools.thermometerLab.paramSettings")}</summary>
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
            <summary>${b("tools.thermometerLab.resistanceSolver")}</summary>
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
            <summary>${b("tools.thermometerLab.paramSettings")}</summary>
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
  `;const e={liquidType:"mercury",thermometerType:K,bulbVolume:200,wallThickness:.5,capillaryBore:.3,liquidL0:3,liquidL100:13,resistanceR0:5,resistanceR100:6.2,thermistorR25:10,thermistorBeta:3500,bathTemp:25,thermometerTemp:25,bubbles:[],iceCubes:[],heatWaves:[],steamParticles:[],currentLength:5.5,currentResistance:5.3,currentThermistorR:10,lastTimestamp:0,showLabels:!0},W=460,it=340,X=80,Y=800,U=560;function J(){const t={left:110,top:48,right:30,bottom:65};return{gx:t.left,gy:t.top,gw:Y-t.left-t.right,gh:U-t.top-t.bottom,tickFont:`bold ${Math.round(Y*.024)}px Arial`,axisFont:`bold ${Math.round(Y*.026)}px Arial`,dotR:8,yLabelX:t.left-75,xLabelY:U-t.bottom+32}}function H(){return{minT:0,maxT:200,tickStep:25}}function x(t,l,i,o,r){return o+(t-l)/(i-l)*r}function w(t,l,i,o,r){return o+r-(t-l)/(i-l)*r}function T(t,l,i,o,r,m,n=null){const{gx:s,gy:d,gw:c,gh:p,tickFont:h,axisFont:g,yLabelX:f,xLabelY:S}=l;t.strokeStyle="#1e1e24",t.lineWidth=1;for(const u of m){const y=w(u.value,u.min,u.max,d,p);t.beginPath(),t.moveTo(s,y),t.lineTo(s+c,y),t.stroke()}for(let u=i;u<=o+.01;u+=r){const y=x(u,i,o,s,c);t.beginPath(),t.moveTo(y,d),t.lineTo(y,d+p),t.stroke()}t.strokeStyle="#4b5563",t.lineWidth=2.5,t.beginPath(),t.moveTo(s,d),t.lineTo(s,d+p),t.lineTo(s+c,d+p),t.stroke(),t.fillStyle="#e4e4e7",t.font=h,t.textAlign="right",t.textBaseline="middle";for(const u of m){const y=w(u.value,u.min,u.max,d,p);t.fillText(u.label,s-15,y)}t.textAlign="center",t.textBaseline="top";for(let u=i;u<=o+.01;u+=r){if(n!=null&&Math.abs(u-n)<.25)continue;const y=x(u,i,o,s,c);t.fillText(`${Math.round(u)}`,y,d+p+10)}return{gx:s,gy:d,gw:c,gh:p,axisFont:g,yLabelX:f,xLabelY:S}}function M(t,l){const i=l-t,o=i<=8?1:i<=14?2:5,r=[],m=Math.ceil(t/o)*o;for(let n=m;n<=l+.001;n+=o)r.push({value:n,label:n%1===0?`${n.toFixed(0)}`:`${n.toFixed(1)}`,min:t,max:l});return r}function ot(){const{maxT:t}=H(),l=_(0),i=_(t),o=i-l,r=Math.max(1,o*.1),m=Math.max(0,Math.round((l-r)*10)/10),n=Math.round((i+r)*10)/10;return{minL:m,maxL:n}}function _(t){return e.liquidL0+(e.liquidL100-e.liquidL0)/100*t}function Q(){const{maxT:t}=H(),l=I(0),i=I(t),o=i-l,r=Math.max(.2,o*.1),m=Math.max(0,l-r),n=i+r,s=o<=2?.5:o<=4?1:2,d=[],c=Math.ceil(m/s)*s;for(let p=c;p<=n+.001;p+=s)d.push({value:p,label:p.toFixed(1),min:m,max:n});return{minR:m,maxR:n,ticks:d}}function I(t){return e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*t}function et(t){const{maxT:l}=t;let i=e.thermistorR25;for(let n=0;n<=l;n+=5){const s=n+273.15,d=e.thermistorR25*Math.exp(e.thermistorBeta*(1/s-1/298.15));i=Math.max(i,d)}i=Math.ceil(i*1.08*10)/10;const o=0,r=i<=12?2:4,m=[];for(let n=0;n<=i+.001;n+=r)m.push({value:n,label:n.toFixed(0),min:o,max:i});return{minR:o,maxR:i,ticks:m}}const Z=a.querySelector("#tl-thermometerCanvas"),P=Z.getContext("2d"),tt=a.querySelector("#tl-graphCanvas"),O=tt.getContext("2d"),$=window.devicePixelRatio||1;Z.width=W*$,Z.height=it*$,P.scale($,$),tt.width=Y*$,tt.height=U*$,O.scale($,$);function lt(){e.iceCubes=[];for(let t=0;t<5;t++)e.iceCubes.push({x:60+Math.random()*120,y:200+Math.random()*15,size:12+Math.random()*8,angle:Math.random()*Math.PI,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.15});e.bubbles=[];for(let t=0;t<20;t++)e.bubbles.push({x:60+Math.random()*120,y:190+Math.random()*70,r:1+Math.random()*3.5,speedY:.8+Math.random()*1.5,phase:Math.random()*Math.PI*2,wobbleSpeed:.08+Math.random()*.08});e.heatWaves=[];for(let t=0;t<8;t++)e.heatWaves.push({x:65+Math.random()*110,y:190+Math.random()*60,length:15+Math.random()*15,speedY:.5+Math.random()*.6,opacity:.15+Math.random()*.25});e.steamParticles=[];for(let t=0;t<12;t++)e.steamParticles.push({x:60+Math.random()*120,y:175+Math.random()*10,r:2+Math.random()*4,vx:(Math.random()-.5)*.3,vy:-.4-Math.random()*.6,alpha:.2+Math.random()*.4})}const C=200,v=11;function at(){const t=Math.pow(e.bulbVolume/C,.3333333333333333);return v*t}function st(){if(e.thermometerType==="resistance"||e.thermometerType==="thermistor")return .35;const t=e.liquidType==="mercury"?1:8,l=.2+e.wallThickness*1.5,i=.4+e.bulbVolume*.003,o=1.35-e.capillaryBore*.45;return Math.max(.1,l*i*o*t*.15)}function pt(t){e.bathTemp<=8&&e.iceCubes.forEach(l=>{l.x+=l.speedX,l.y+=l.speedY,(l.x<65||l.x>175)&&(l.speedX*=-1),(l.y<195||l.y>210)&&(l.speedY*=-1)}),e.bathTemp>35&&e.heatWaves.forEach(l=>{l.y-=l.speedY*(1+e.bathTemp/100),l.y<185&&(l.y=265,l.x=65+Math.random()*110)}),e.bathTemp>=80&&e.bubbles.forEach(l=>{l.y-=l.speedY*(1+(e.bathTemp-80)/40),l.phase+=l.wobbleSpeed,l.x+=Math.sin(l.phase)*.3,l.y<185&&(l.y=260+Math.random()*10,l.x=60+Math.random()*120)}),e.bathTemp>=95&&e.steamParticles.forEach(l=>{l.x+=l.vx,l.y+=l.vy,l.alpha-=.005,(l.alpha<=0||l.y<130)&&(l.x=60+Math.random()*120,l.y=175+Math.random()*5,l.alpha=.2+Math.random()*.4)})}function ft(t){let n=59,s=130,d=246;if(e.bathTemp<25){const f=e.bathTemp/25;n=Math.round(180-f*121),s=Math.round(210-f*80),d=Math.round(250-f*4)}else{const f=Math.min(1,(e.bathTemp-25)/125);n=Math.round(59+f*180),s=Math.round(130-f*100),d=Math.round(246-f*190)}if(e.bathTemp>40){const f=Math.min(1,(e.bathTemp-40)/100),S=Date.now()*.02;t.fillStyle=`rgba(239, 68, 68, ${f*.25})`,t.beginPath(),t.roundRect(45,284,150,10,4),t.fill(),t.fillStyle="rgba(249, 115, 22, 0.85)",t.beginPath(),t.moveTo(55+130/2-25,284);for(let u=-25;u<=25;u+=6){const y=f*(12+Math.sin(u*.4+S)*5);t.lineTo(55+130/2+u,284-y)}t.lineTo(55+130/2+25,284),t.closePath(),t.fill()}t.strokeStyle="#4b5563",t.lineWidth=2,t.fillStyle="#121214",t.beginPath(),t.roundRect(55,180,130,100,[0,0,10,10]),t.fill();const c=t.createLinearGradient(55,190,55,280);c.addColorStop(0,`rgba(${n}, ${s}, ${d}, 0.25)`),c.addColorStop(1,`rgba(${n}, ${s}, ${d}, 0.55)`),t.fillStyle=c,t.beginPath(),t.moveTo(55,190);const p=e.bathTemp>=80?2:.5,h=e.bathTemp>=80?.09:.03,g=Date.now()*h;for(let f=55;f<=185;f+=5){const S=190+Math.sin(f*.15+g)*p;t.lineTo(f,S)}t.lineTo(185,280),t.lineTo(55,280),t.closePath(),t.fill(),e.bathTemp>35&&(t.strokeStyle=`rgba(239, 68, 68, ${Math.min(.5,(e.bathTemp-35)/120)})`,t.lineWidth=1.2,e.heatWaves.forEach(f=>{t.beginPath(),t.moveTo(f.x,f.y),t.quadraticCurveTo(f.x+Math.sin(f.y*.06)*5,f.y-f.length/2,f.x,f.y-f.length),t.stroke()})),e.bathTemp<=8&&(t.fillStyle="rgba(224, 242, 254, 0.55)",t.strokeStyle="rgba(186, 230, 253, 0.8)",t.lineWidth=1,e.iceCubes.forEach(f=>{t.save(),t.translate(f.x,f.y),t.rotate(f.angle),t.beginPath(),t.roundRect(-f.size/2,-f.size/2,f.size,f.size,3),t.fill(),t.stroke(),t.restore()})),e.bathTemp>=80&&(t.fillStyle="rgba(255, 255, 255, 0.4)",t.strokeStyle="rgba(255, 255, 255, 0.65)",t.lineWidth=.6,e.bubbles.forEach(f=>{t.beginPath(),t.arc(f.x,f.y,f.r,0,Math.PI*2),t.fill(),t.stroke()})),e.bathTemp>=95&&e.steamParticles.forEach(f=>{t.fillStyle=`rgba(255, 255, 255, ${f.alpha})`,t.beginPath(),t.arc(f.x,f.y,f.r,0,Math.PI*2),t.fill()}),t.strokeStyle="#9ca3af",t.lineWidth=3.5,t.beginPath(),t.moveTo(54,180),t.lineTo(54,272),t.arcTo(54,281,65,281,8),t.lineTo(175,281),t.arcTo(186,281,186,272,8),t.lineTo(186,180),t.stroke(),t.strokeStyle="rgba(255, 255, 255, 0.4)",t.lineWidth=1.5,t.beginPath(),t.moveTo(59,190),t.lineTo(59,270),t.stroke()}function D(t,l,i,o,r,m,n="left"){if(!e.showLabels)return;t.strokeStyle="rgba(6, 182, 212, 0.7)",t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.moveTo(l,i),t.lineTo(o,r),t.stroke(),t.setLineDash([]),t.fillStyle="#06b6d4",t.beginPath(),t.arc(l,i,3,0,Math.PI*2),t.fill(),t.font="bold 9px system-ui, sans-serif";const d=t.measureText(m).width+10,c=16,p=n==="left"?o:o-d,h=r-c/2;t.fillStyle="rgba(21, 21, 24, 0.9)",t.strokeStyle="#06b6d4",t.lineWidth=1,t.beginPath(),t.roundRect(p,h,d,c,4),t.fill(),t.stroke(),t.fillStyle="#f4f4f5",t.textAlign="center",t.textBaseline="middle",t.fillText(m,p+d/2,h+c/2+.5)}function St(t){const o=at(),r=250+Math.max(0,o-v)*.35,m=r-o-1,n=10+e.wallThickness*8,s=120-n/2,d=120+n/2,c=t.createLinearGradient(s,20,d,20);c.addColorStop(0,"rgba(209, 213, 219, 0.85)"),c.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),c.addColorStop(.5,"rgba(243, 244, 246, 0.15)"),c.addColorStop(.8,"rgba(255, 255, 255, 0.95)"),c.addColorStop(1,"rgba(156, 163, 175, 0.9)"),t.fillStyle=c,t.strokeStyle="rgba(156, 163, 175, 0.8)",t.lineWidth=1,t.beginPath(),t.moveTo(s,m),t.lineTo(s,25),t.arcTo(s,20,s+5,20,5),t.arcTo(d,20,d,25,5),t.lineTo(d,m),t.closePath(),t.fill(),t.stroke();const p=t.createRadialGradient(120-o*.2,r-o*.2,o*.1,120,r,o);p.addColorStop(0,"rgba(255, 255, 255, 0.8)"),p.addColorStop(1,"rgba(156, 163, 175, 0.35)"),t.fillStyle=p,t.strokeStyle="#6b7280",t.lineWidth=.8+e.wallThickness*.6,t.beginPath(),t.arc(120,r,o+.5+e.wallThickness*.5,0,Math.PI*2),t.fill(),t.stroke();const h=Math.min(n*.72,.8+e.capillaryBore*4.5);t.fillStyle="#0a0a0c",t.fillRect(120-h/2,28,h,m-20-8);const g=e.liquidType==="mercury",f=g?"#a1a1aa":"#ef4444",S=g?"#f4f4f5":"#fee2e2",u=210,y=220,F=(u-40)/y,L=u-Math.min(y,e.thermometerTemp)*F;t.fillStyle=f,t.fillRect(120-h/2,L,h,m-L),t.beginPath(),t.ellipse(120,L,h/2,1.5,0,0,Math.PI*2),t.fill(),t.fillStyle=S,t.fillRect(120-h/6,L,h/3,m-L);const q=o*.9,k=t.createRadialGradient(120-q*.2,r-q*.2,q*.1,120,r,q);g?(k.addColorStop(0,"#f4f4f5"),k.addColorStop(.3,"#d4d4d8"),k.addColorStop(.8,"#71717a"),k.addColorStop(1,"#3f3f46")):(k.addColorStop(0,"#fee2e2"),k.addColorStop(.2,"#fca5a5"),k.addColorStop(.7,"#ef4444"),k.addColorStop(1,"#991b1b")),t.fillStyle=k,t.beginPath(),t.arc(120,r,q,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(161, 161, 170, 0.6)",t.lineWidth=.5,t.font="6.5px Arial",t.fillStyle="#a1a1aa",t.textAlign="right",t.textBaseline="middle";for(let z=0;z<=200;z+=50){const G=u-z*F;t.beginPath(),t.moveTo(s,G),t.lineTo(s+4,G),t.stroke(),t.fillText(`${z}°C`,s-22,G+2.5)}e.showLabels&&(D(t,s+1,80,10,50,b("tools.thermometerLab.labels.thinWall"),"left"),D(t,120,L,230,L-15,b("tools.thermometerLab.labels.meniscus"),"left"),D(t,120-h/2,130,10,130,b("tools.thermometerLab.labels.narrowBore"),"left"),D(t,120,r,230,r+15,b("tools.thermometerLab.labels.largeBulb"),"left"))}function kt(t){const n=t.createLinearGradient(115,20,125,20);n.addColorStop(0,"#71717a"),n.addColorStop(.3,"#f4f4f5"),n.addColorStop(.7,"#d4d4d8"),n.addColorStop(1,"#3f3f46"),t.fillStyle=n,t.strokeStyle="#4b5563",t.lineWidth=1,t.beginPath(),t.roundRect(115,20,10,225,[0,0,4,4]),t.fill(),t.stroke(),t.fillStyle="rgba(21, 21, 24, 0.8)",t.fillRect(117,200,6,40),t.strokeStyle="#e2e8f0",t.lineWidth=1.2,t.beginPath();let s=205;t.moveTo(118,s);for(let g=0;g<8;g++)s+=4,t.lineTo(122,s),s+=4,t.lineTo(118,s);t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(118,20),t.bezierCurveTo(110,5,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(122,20),t.bezierCurveTo(130,8,210,45,245,75),t.stroke();const d=245,c=40,p=135,h=90;t.fillStyle="#18181b",t.strokeStyle="#6366f1",t.lineWidth=2.5,t.beginPath(),t.roundRect(d,c,p,h,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(d+10,c+12,p-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#10b981",t.textAlign="right",t.fillText(e.currentResistance.toFixed(2)+" Ω",d+p-16,c+34),t.font="6px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText("PLATINUM RTD METER",d+14,c+21),e.showLabels&&(D(t,116,100,10,70,b("tools.thermometerLab.labels.metalSheath"),"left"),D(t,120,225,230,205,b("tools.thermometerLab.labels.platinumCoil"),"left"))}function Ct(t){t.strokeStyle="#111827",t.lineWidth=1.2,t.beginPath(),t.moveTo(118,20),t.lineTo(118,245),t.stroke(),t.beginPath(),t.moveTo(122,20),t.lineTo(122,245),t.stroke();const r=20,m=225,n=12,s=120-n/2,d=t.createLinearGradient(s,r,s+n,r);d.addColorStop(0,"rgba(229, 231, 235, 0.4)"),d.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),d.addColorStop(.7,"rgba(243, 244, 246, 0.5)"),d.addColorStop(1,"rgba(209, 213, 219, 0.6)"),t.fillStyle=d,t.strokeStyle="rgba(156, 163, 175, 0.6)",t.lineWidth=.8,t.beginPath(),t.roundRect(s,r,n,m-r,[0,0,3,3]),t.fill(),t.stroke();const c=7,p=t.createRadialGradient(120-c*.2,245-c*.2,c*.1,120,245,c);p.addColorStop(0,"#6b7280"),p.addColorStop(.7,"#1f2937"),p.addColorStop(1,"#09090b"),t.fillStyle=p,t.strokeStyle="#030712",t.lineWidth=1.2,t.beginPath(),t.arc(120,245,c,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(118,20),t.bezierCurveTo(110,5,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(122,20),t.bezierCurveTo(130,8,210,45,245,75),t.stroke();const h=245,g=40,f=135,S=90;t.fillStyle="#18181b",t.strokeStyle="#10b981",t.lineWidth=2.5,t.beginPath(),t.roundRect(h,g,f,S,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(h+10,g+12,f-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#34d399",t.textAlign="right",t.fillText(e.currentThermistorR.toFixed(2)+" kΩ",h+f-16,g+34),t.font="5px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText(b("tools.thermometerLab.thermistor.meterLabelLine1"),h+14,g+52),t.fillText(b("tools.thermometerLab.thermistor.meterLabelLine2"),h+14,g+59),e.showLabels&&(D(t,118,120,10,90,b("tools.thermometerLab.labels.leads"),"left"),D(t,120,245,230,225,b("tools.thermometerLab.labels.semiconductorBead"),"left"))}function ct(t,l,i,o,r,m,n,s,d){const{gx:c,gy:p,gw:h,gh:g,tickFont:f}=l;t.strokeStyle="rgba(255, 255, 255, 0.2)",t.lineWidth=1,t.setLineDash([4,4]),t.beginPath(),t.moveTo(i,o),t.lineTo(i,p+g),t.stroke(),t.beginPath(),t.moveTo(i,o),t.lineTo(c,o),t.stroke(),t.setLineDash([]);const S=p+g+10;t.font=f,t.textAlign="center",t.textBaseline="top";const u=`${r.toFixed(1)}${n}`,y=t.measureText(u).width+10,E=18;t.fillStyle=d,t.beginPath(),t.roundRect(i-y/2,S-2,y,E,3),t.fill(),t.fillStyle="#000",t.fillText(u,i,S),t.textAlign="right",t.textBaseline="middle";const F=`${m.toFixed(2)} ${s}`,L=t.measureText(F).width+10;t.fillStyle=d,t.beginPath(),t.roundRect(c-L-2,o-7,L,15,3),t.fill(),t.fillStyle="#000",t.fillText(F,c-7,o)}function Lt(t){const l=J(),{minL:i,maxL:o}=ot(),{minT:r,maxT:m,tickStep:n}=H(),s=M(i,o),d=T(t,l,r,m,n,s,e.thermometerTemp),{gx:c,gy:p,gw:h,gh:g,axisFont:f,yLabelX:S,xLabelY:u,dotR:y}={...l,...d};t.save(),t.translate(S,p+g/2),t.rotate(-Math.PI/2),t.font=f,t.fillStyle="#e4e4e7",t.fillText("Length of liquid column / cm",0,0),t.restore(),t.font=f,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",c+h/2,u);const E=m,F=x(0,r,m,c,h),L=w(_(0),i,o,p,g),q=x(E,r,m,c,h),k=w(_(E),i,o,p,g);t.strokeStyle="#ef4444",t.lineWidth=3,t.beginPath(),t.moveTo(F,L),t.lineTo(q,k),t.stroke();const z=e.thermometerTemp,G=e.currentLength;if(z>=r&&z<=m){const B=x(z,r,m,c,h),rt=w(G,i,o,p,g);ct(t,l,B,rt,z,G,"°C","cm","#ef4444"),t.shadowColor="#ef4444",t.shadowBlur=10,t.fillStyle="#ef4444",t.beginPath(),t.arc(B,rt,y,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function qt(t){const l=J(),{minR:i,maxR:o,ticks:r}=Q(),m=H(),n=T(t,l,m.minT,m.maxT,m.tickStep,r,e.thermometerTemp),{gx:s,gy:d,gw:c,gh:p,axisFont:h,yLabelX:g,xLabelY:f,dotR:S}={...l,...n};t.save(),t.translate(g,d+p/2),t.rotate(-Math.PI/2),t.font=h,t.fillStyle="#e4e4e7",t.fillText("Resistance of platinum / Ω",0,0),t.restore(),t.font=h,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",s+c/2,f);const{minT:u,maxT:y}=m,E=y,F=x(0,u,y,s,c),L=w(I(0),i,o,d,p),q=x(E,u,y,s,c),k=w(I(E),i,o,d,p);t.strokeStyle="#6366f1",t.lineWidth=3,t.beginPath(),t.moveTo(F,L),t.lineTo(q,k),t.stroke();const z=e.thermometerTemp,G=e.currentResistance;if(z>=u&&z<=y){const B=x(z,u,y,s,c),rt=w(G,i,o,d,p);ct(t,l,B,rt,z,G,"°C","Ω","#6366f1"),t.shadowColor="#6366f1",t.shadowBlur=10,t.fillStyle="#6366f1",t.beginPath(),t.arc(B,rt,S,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function zt(t){const l=J(),i=H(),{minR:o,maxR:r,ticks:m}=et(i),n=T(t,l,i.minT,i.maxT,i.tickStep,m,e.thermometerTemp),{gx:s,gy:d,gw:c,gh:p,axisFont:h,yLabelX:g,xLabelY:f,dotR:S}={...l,...n},{minT:u,maxT:y}=i;t.save(),t.translate(g,d+p/2),t.rotate(-Math.PI/2),t.font=h,t.fillStyle="#e4e4e7",t.fillText("Resistance of thermistor / kΩ",0,0),t.restore(),t.font=h,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",s+c/2,f),t.strokeStyle="#10b981",t.lineWidth=3,t.beginPath();let E=!1;for(let q=u;q<=y;q+=1){const k=q+273.15,z=e.thermistorR25*Math.exp(e.thermistorBeta*(1/k-1/298.15)),G=x(q,u,y,s,c),B=w(Math.min(r,z),o,r,d,p);B>=d&&B<=d+p&&(E?t.lineTo(G,B):(t.moveTo(G,B),E=!0))}t.stroke();const F=e.thermometerTemp,L=e.currentThermistorR;if(F>=u&&F<=y){const q=x(F,u,y,s,c),k=w(Math.min(r,L),o,r,d,p);ct(t,l,q,k,F,L,"°C","kΩ","#10b981"),t.shadowColor="#10b981",t.shadowBlur=10,t.fillStyle="#10b981",t.beginPath(),t.arc(q,k,S,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function bt(){P.clearRect(0,0,W,it),O.clearRect(0,0,Y,U),P.save(),P.translate(X,0),ft(P),e.thermometerType==="liquid"?St(P):e.thermometerType==="resistance"?kt(P):Ct(P),P.restore(),e.thermometerType==="liquid"?Lt(O):e.thermometerType==="resistance"?qt(O):zt(O)}function Rt(){const t=a.querySelector("#tl-svg-formula-liquid");t&&(t.innerHTML=`
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
      `);const l=a.querySelector("#tl-svg-formula-liquid-sub");if(l){const n=e.liquidL100-e.liquidL0,s=e.currentLength-e.liquidL0;l.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${e.liquidL100.toFixed(1)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${e.currentLength.toFixed(2)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">T - 0</text>

          <!-- Step 2: Simplify Ratio -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for T</text>
          <line x1="120" y1="80" x2="200" y2="80" stroke="#fff" stroke-width="1.2" />
          <text x="160" y="72" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${s.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${n.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const i=a.querySelector("#tl-svg-formula-resistance");i&&(i.innerHTML=`
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
      `);const o=a.querySelector("#tl-svg-formula-resistance-sub");if(o){const n=e.resistanceR100-e.resistanceR0,s=e.currentResistance-e.resistanceR0;o.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${e.currentResistance.toFixed(2)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">T - 0</text>

          <!-- Step 2: Simplify Ratio -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for T</text>
          <line x1="120" y1="80" x2="200" y2="80" stroke="#fff" stroke-width="1.2" />
          <text x="160" y="72" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${s.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${n.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const r=a.querySelector("#tl-svg-formula-thermistor");r&&(r.innerHTML=`
        <svg height="50" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="23" x2="220" y2="23" stroke="#fff" stroke-width="1.5" />
          <text x="130" y="15" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">1</text>
          <text x="130" y="38" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">(1/&beta;) &bull; ln(R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2">/R</tspan><tspan dy="2" font-size="8">25</tspan><tspan dy="-2">) + 1/298.15</tspan></text>
          <text x="230" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">- 273.15</text>
        </svg>
      `);const m=a.querySelector("#tl-svg-formula-thermistor-sub");if(m){const n=e.thermometerTemp+273.15;m.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            T<tspan dy="3" font-size="10">K</tspan><tspan dy="-3" fill="#10b981" font-weight="bold"> = ${n.toFixed(2)} K</tspan>
            <tspan fill="#fff"> &rArr; T = </tspan>
            <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${e.thermometerTemp.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `}}function Ft(){const t=a.querySelector("#tl-faulty-svg-container");if(!t)return;const{cf:l,cu:i,interval:o}=ht(),r=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,m=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,n=a.querySelector("#tl-pane-q10a").classList.contains("active"),s=n?(r-l)/o*100:m,d=n?r:m/100*o+l,p=(h=>130-h/100*80)(s);t.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <!-- Left Scale: True Scale -->
        <g transform="translate(0, 0)">
          <!-- Glass Tube -->
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="84" y="${p}" width="4" height="${144-p}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          
          <!-- Ticks -->
          <!-- Ice Point 0°C -->
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          
          <!-- Steam Point 100°C -->
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>

          <!-- Current Point -->
          <text x="65" y="${p+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${s.toFixed(1)}°C</text>

          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${b("tools.thermometerLab.faulty.trueScale")}</text>
        </g>

        <!-- Right Scale: Faulty Scale -->
        <g transform="translate(130, 0)">
          <!-- Glass Tube -->
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="104" y="${p}" width="4" height="${144-p}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          
          <!-- Ticks -->
          <!-- Faulty Ice Point Cf -->
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${l.toFixed(1)}°C</tspan></text>
          
          <!-- Faulty Steam Point Cu -->
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${i.toFixed(1)}°C</tspan></text>

          <!-- Current Faulty Point -->
          <text x="125" y="${p+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${d.toFixed(1)}°C</text>

          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${b("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>

        <!-- Connecting Ratio Indicator Line -->
        <line x1="86" y1="${p}" x2="236" y2="${p}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${p}" r="3" fill="#34d399" />
        <circle cx="236" cy="${p}" r="3" fill="#34d399" />
      </svg>
    `}function Mt(t){a.querySelector("#tl-bath-temp-display").innerHTML=e.bathTemp.toFixed(1)+"°C",a.querySelector("#tl-val-bath-temp").innerHTML=e.bathTemp.toFixed(1)+" °C";const l=a.querySelector("#tl-bath-state");e.bathTemp<=0?l.textContent="Melting Ice Bath":e.bathTemp>=100?l.textContent="Boiling Water/Steam":e.bathTemp===150?l.textContent="Hot Cooking Oil":l.textContent="Liquid Water",a.querySelector("#tl-val-response-time").textContent=t.toFixed(2)+" s";const i=a.querySelector("#tl-alcohol-boiling-warning");e.thermometerType==="liquid"&&e.liquidType==="alcohol"&&e.bathTemp>=78?i.style.display="block":i.style.display="none",e.thermometerType==="liquid"?(a.querySelector("#tl-live-liquid-lt").textContent=e.currentLength.toFixed(2)+" cm",a.querySelector("#tl-live-liquid-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):e.thermometerType==="resistance"?(a.querySelector("#tl-live-resistance-rt").textContent=e.currentResistance.toFixed(2)+" Ω",a.querySelector("#tl-live-resistance-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):a.querySelector("#tl-live-thermistor-rt").textContent=e.currentThermistorR.toFixed(2)+" kΩ",Rt()}let nt=null;function ut(t){e.lastTimestamp||(e.lastTimestamp=t);const l=(t-e.lastTimestamp)/1e3;e.lastTimestamp=t;const i=Math.min(l,.1),o=st(),r=i/o*(e.bathTemp-e.thermometerTemp);e.thermometerTemp+=r,e.currentLength=e.liquidL0+(e.liquidL100-e.liquidL0)/100*e.thermometerTemp,e.currentResistance=e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*e.thermometerTemp;const m=e.thermometerTemp+273.15;e.currentThermistorR=e.thermistorR25*Math.exp(e.thermistorBeta*(1/m-1/298.15)),pt(),bt(),Mt(o),nt=requestAnimationFrame(ut)}function ht(){const t=parseFloat(a.querySelector("#tl-input-faulty-cf").value),l=parseFloat(a.querySelector("#tl-input-faulty-cu").value),i=Number.isFinite(t)?t:-1.5,o=Number.isFinite(l)?l:105,r=o-i;return{cf:i,cu:o,interval:r}}function mt(t){const l=Math.round(t*100)/100;return l>=0?l.toFixed(1):`(${l.toFixed(1)})`}function N(){const{cf:t,cu:l,interval:i}=ht(),o=a.querySelector("#tl-val-faulty-interval"),r=a.querySelector("#tl-faulty-error-a"),m=a.querySelector("#tl-faulty-error-b"),n=Math.abs(i)<.01;o.textContent=i.toFixed(1)+" °C";const s=a.querySelector("#tl-svg-formula-faulty-a"),d=a.querySelector("#tl-svg-formula-faulty-b");if(n){r.hidden=!1,r.textContent="C_u must differ from C_f (interval cannot be zero).",m.hidden=!1,m.textContent=r.textContent,s&&(s.innerHTML=""),d&&(d.innerHTML="");return}r.hidden=!0,m.hidden=!0;const c=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,p=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,h=(c-t)/i*100,g=p/100*i+t;s&&(s.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${c.toFixed(1)} - ${mt(t)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${l.toFixed(1)} - ${mt(t)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${h.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),d&&(d.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${p.toFixed(1)} &times; ${i.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${mt(t)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${g.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),Ft()}function gt(){const t=parseFloat(a.querySelector("#tl-input-q11-r").value)||0,l=(t-e.resistanceR0)/(e.resistanceR100-e.resistanceR0)*100,i=a.querySelector("#tl-svg-formula-resistance-solver");i&&(i.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">&theta; =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="13" text-anchor="middle">${t.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${l.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `)}function Pt(){const t=e.thermometerTemp,l=e.liquidL100-e.liquidL0,i=e.liquidL0+l/100*t,o=a.querySelector("#tl-svg-formula-t-to-l");o&&(o.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${e.liquidL100.toFixed(1)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${e.liquidL0.toFixed(1)}</tspan></text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${t.toFixed(1)} - 0</text>

          <!-- Step 2: Solve for L_T -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"></tspan></text>
          <text x="10" y="103" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${e.liquidL0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${l.toFixed(1)} / 100)</tspan> &times; ${t.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${i.toFixed(2)} cm</tspan>
          </text>
        </svg>
      `)}function Gt(){const t=e.thermometerTemp,l=e.resistanceR100-e.resistanceR0,i=e.resistanceR0+l/100*t,o=a.querySelector("#tl-svg-formula-t-to-r");o&&(o.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${e.resistanceR0.toFixed(1)}</tspan></text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${t.toFixed(1)} - 0</text>

          <!-- Step 2: Solve for R_T -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"></tspan></text>
          <text x="10" y="103" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${e.resistanceR0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${l.toFixed(1)} / 100)</tspan> &times; ${t.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${i.toFixed(2)} Ω</tspan>
          </text>
        </svg>
      `)}function R(){N(),gt(),Pt(),Gt()}function dt(t,l){a.querySelector("#"+t).addEventListener("click",()=>{e.bathTemp=l,a.querySelector("#tl-bath-temp-slider").value=l,R()})}function yt(t){a.querySelectorAll(".tl-tab-btn").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tl-tab")===t)}),a.querySelectorAll(".tl-tab-content").forEach(l=>{l.classList.toggle("active",l.id==="tl-tab-"+t)}),a.querySelectorAll(".tl-live-tab").forEach(l=>{l.classList.toggle("active",l.id==="tl-live-"+t)}),e.thermometerType=t}function Et(){a.querySelectorAll(".tl-tab-btn").forEach(r=>{r.addEventListener("click",()=>{yt(r.getAttribute("data-tl-tab")),R()})}),a.querySelector("#tl-btn-toggle-labels").addEventListener("click",()=>{e.showLabels=!e.showLabels,a.querySelector("#tl-lbl-toggle-labels").textContent=e.showLabels?b("tools.thermometerLab.labels.hide"):b("tools.thermometerLab.labels.show")}),a.querySelector("#tl-bath-temp-slider").addEventListener("input",r=>{e.bathTemp=parseFloat(r.target.value),R()}),dt("tl-btn-preset-ice",0),dt("tl-btn-preset-room",25),dt("tl-btn-preset-steam",100),dt("tl-btn-preset-oil",150),a.querySelector("#tl-card-mercury").addEventListener("click",()=>{e.liquidType="mercury",a.querySelector("#tl-card-mercury").className="tl-seg-btn active-mercury",a.querySelector("#tl-card-alcohol").className="tl-seg-btn",R()}),a.querySelector("#tl-card-alcohol").addEventListener("click",()=>{e.liquidType="alcohol",a.querySelector("#tl-card-mercury").className="tl-seg-btn",a.querySelector("#tl-card-alcohol").className="tl-seg-btn active-alcohol",R()}),a.querySelector("#tl-slider-bulb-vol").addEventListener("input",r=>{e.bulbVolume=parseFloat(r.target.value),a.querySelector("#tl-val-bulb-vol").textContent=e.bulbVolume+" mm³"}),a.querySelector("#tl-slider-wall-thick").addEventListener("input",r=>{e.wallThickness=parseFloat(r.target.value),a.querySelector("#tl-val-wall-thickness").textContent=e.wallThickness.toFixed(1)+" mm"}),a.querySelector("#tl-slider-capillary-bore").addEventListener("input",r=>{e.capillaryBore=parseFloat(r.target.value),a.querySelector("#tl-val-capillary-bore").textContent=e.capillaryBore.toFixed(2)+" mm"}),a.querySelector("#tl-slider-liquid-l0").addEventListener("input",r=>{e.liquidL0=parseFloat(r.target.value),a.querySelector("#tl-val-liquid-l0").textContent=e.liquidL0.toFixed(1)+" cm",R()}),a.querySelector("#tl-slider-liquid-l100").addEventListener("input",r=>{e.liquidL100=parseFloat(r.target.value),a.querySelector("#tl-val-liquid-l100").textContent=e.liquidL100.toFixed(1)+" cm",R()}),a.querySelector("#tl-slider-resistance-r0").addEventListener("input",r=>{e.resistanceR0=parseFloat(r.target.value),a.querySelector("#tl-val-resistance-r0").textContent=e.resistanceR0.toFixed(1)+" Ω",a.querySelector("#tl-spec-resistance-r0").textContent=e.resistanceR0.toFixed(1)+" Ω",R()}),a.querySelector("#tl-slider-resistance-r100").addEventListener("input",r=>{e.resistanceR100=parseFloat(r.target.value),a.querySelector("#tl-val-resistance-r100").textContent=e.resistanceR100.toFixed(1)+" Ω",a.querySelector("#tl-spec-resistance-r100").textContent=e.resistanceR100.toFixed(1)+" Ω",R()}),a.querySelector("#tl-slider-thermistor-r25").addEventListener("input",r=>{e.thermistorR25=parseFloat(r.target.value),a.querySelector("#tl-val-thermistor-r25").textContent=e.thermistorR25.toFixed(1)+" kΩ",a.querySelector("#tl-spec-thermistor-r25").textContent=e.thermistorR25.toFixed(1)+" kΩ",R()}),a.querySelector("#tl-slider-thermistor-beta").addEventListener("input",r=>{e.thermistorBeta=parseFloat(r.target.value),a.querySelector("#tl-val-thermistor-beta").textContent=e.thermistorBeta+" K",a.querySelector("#tl-spec-thermistor-beta").textContent=e.thermistorBeta+" K",R()}),a.querySelector("#tl-btn-solve-q10a").addEventListener("click",()=>{a.querySelector("#tl-btn-solve-q10a").classList.add("active"),a.querySelector("#tl-btn-solve-q10b").classList.remove("active"),a.querySelector("#tl-pane-q10a").classList.add("active"),a.querySelector("#tl-pane-q10b").classList.remove("active"),N()}),a.querySelector("#tl-btn-solve-q10b").addEventListener("click",()=>{a.querySelector("#tl-btn-solve-q10a").classList.remove("active"),a.querySelector("#tl-btn-solve-q10b").classList.add("active"),a.querySelector("#tl-pane-q10a").classList.remove("active"),a.querySelector("#tl-pane-q10b").classList.add("active"),N()}),a.querySelector("#tl-input-faulty-cf").addEventListener("input",N),a.querySelector("#tl-input-faulty-cu").addEventListener("input",N),a.querySelector("#tl-input-q10a-cm").addEventListener("input",N),a.querySelector("#tl-input-q10b-t").addEventListener("input",N),a.querySelector("#tl-input-q11-r").addEventListener("input",gt);const i=a.querySelector("#tl-input-t-to-l");i&&i.addEventListener("input",R);const o=a.querySelector("#tl-input-t-to-r");o&&o.addEventListener("input",R)}if(V.type){const t=a.querySelector(".tl-tabs-container");t&&(t.style.display="none")}yt(K),lt(),Et(),R();const vt=a.querySelector(".tl-dash"),xt=a.querySelector(".tl-controls"),wt=a.querySelector("#tl-controls-toggle"),$t=a.querySelector("#tl-controls-drag"),Bt=a.querySelector(".tl-controls-float-bar");return vt&&xt&&wt&&Wt({container:vt,panel:xt,toggleBtn:wt,dragHandle:$t,dragSurface:Bt,storageKey:`s3phy-thermo-${K}`,breakpoint:1024,getToggleTitle:t=>b(t?"tools.floatingControls.showParams":"tools.floatingControls.hideParams"),onLayoutChange:()=>bt()}),nt=requestAnimationFrame(ut),a._thermometerLabCleanup=()=>{nt&&cancelAnimationFrame(nt)},a}export{Yt as createThermometerLab};
