const Tt="s3phy-thermometer-lab-css";const Nt=`
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
.tl-wrap .tl-live-solver {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
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
`;function St(){if(document.getElementById(Tt))return;const f=document.createElement("style");f.id=Tt,f.textContent=Nt,document.head.appendChild(f)}function kt(f){const V={x:12,y:12},K=200,{container:W,panel:a,toggleBtn:e,dragHandle:H,dragSurface:et,storageKey:M,onLayoutChange:J,breakpoint:lt=1024,collapsedClass:C="controls-collapsed",floatingClass:w="controls-floating"}=f,k=et||H;if(!W||!a||!e)return null;let q=sessionStorage.getItem(M)!=="false",x=(()=>{try{const z=localStorage.getItem(M+":pos");if(!z)return{...V};const S=JSON.parse(z);if(typeof S.x=="number"&&typeof S.y=="number")return S}catch{}return{...V}})(),T=null,$=null;const P=()=>window.innerWidth>=lt,N=(z,S)=>{const rt=W.getBoundingClientRect(),nt=a.getBoundingClientRect(),st=Math.max(0,rt.width-nt.width),ft=Math.max(0,rt.height-nt.height);return{x:Math.min(Math.max(0,z),st),y:Math.min(Math.max(0,S),ft)}},_=()=>{a.style.left=x.x+"px",a.style.top=x.y+"px",a.style.right="auto",a.style.bottom="auto"},L=()=>{typeof J=="function"&&(clearTimeout($),$=setTimeout(J,K))},j=()=>{e.setAttribute("aria-expanded",q?"false":"true"),f.getToggleTitle&&(e.title=f.getToggleTitle(q));const z=e.querySelector("[data-float-chevron]");z&&(z.textContent=q?"v":"^")},X=()=>{P()&&(x=N(x.x,x.y),_())},at=z=>{q=z,a.classList.toggle(C,q),sessionStorage.setItem(M,q?"true":"false"),j(),L(),requestAnimationFrame(X),setTimeout(X,260)},it=()=>{W.classList.add(w),a.classList.add("lab-controls-float"),x=N(x.x,x.y),_(),H&&(H.style.display="")},O=()=>{W.classList.remove(w),a.classList.remove("lab-controls-float"),a.style.left="",a.style.top="",a.style.right="",a.style.bottom="",H&&(H.style.display="none")},Z=()=>{P()?(it(),x=N(x.x,x.y),_()):O(),L()};if(a.classList.toggle(C,q),j(),Z(),e.addEventListener("click",z=>{z.stopPropagation(),at(!q)}),k){k.addEventListener("pointerdown",S=>{P()&&(e.contains(S.target)||(S.preventDefault(),T={pointerId:S.pointerId,startX:S.clientX,startY:S.clientY,originX:x.x,originY:x.y},k.setPointerCapture(S.pointerId),k.classList.add("is-dragging")))}),k.addEventListener("pointermove",S=>{!T||T.pointerId!==S.pointerId||(x=N(T.originX+S.clientX-T.startX,T.originY+S.clientY-T.startY),_())});const z=S=>{if(!(!T||T.pointerId!==S.pointerId)){k.releasePointerCapture(S.pointerId),k.classList.remove("is-dragging");try{localStorage.setItem(M+":pos",JSON.stringify(x))}catch{}T=null,L()}};k.addEventListener("pointerup",z),k.addEventListener("pointercancel",z)}return window.addEventListener("resize",Z),{setCollapsed:at,refreshMode:Z,isCollapsed:()=>q}}function _t(f,g={}){St();const V=g.type||"liquid";let K=f("tools.thermometerLab.title"),W=f("tools.thermometerLab.subtitle");g.type==="liquid"?(K=f("tools.thermometerLab.liquid.title"),W=f("tools.thermometerLab.liquid.subtitle")||f("tools.thermometerLab.subtitle")):g.type==="resistance"?(K=f("tools.thermometerLab.resistance.title"),W=f("tools.thermometerLab.resistance.subtitle")||f("tools.thermometerLab.subtitle")):g.type==="thermistor"&&(K=f("tools.thermometerLab.thermistor.title"),W=f("tools.thermometerLab.thermistor.subtitle")||f("tools.thermometerLab.subtitle"));const a=document.createElement("div");a.className="tl-wrap",a.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${K}</h2>
      <div class="tl-sub">${W}</div>
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
            <div class="tl-info-label" style="margin-top:0;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
            <div class="tl-worked-solution tl-dual-direction">
              <div class="tl-direction-col">
                <div class="tl-info-label tl-live-direction" style="color:var(--tl-cyan)">Direction A: Length to Temperature (L<sub>T</sub> &rarr; T)</div>
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
            <div class="tl-live-solver">
              <div class="tl-info-label">${f("tools.thermometerLab.resistanceSolver")}</div>
              <div class="tl-calc-inputs">
                <span>Measured Resistance (R):</span>
                <div class="tl-input-with-unit">
                  <input type="number" id="tl-input-q11-r" value="7.7" step="0.1" class="tl-calc-input">
                  <span class="tl-unit">Ω</span>
                </div>
              </div>
              <div id="tl-svg-formula-resistance-solver" class="tl-math-formula"></div>
            </div>
          </div>
        </div>
        <div class="tl-live-tab" id="tl-live-thermistor">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;color:var(--tl-green)">${f("tools.thermometerLab.thermistor.liveBetaLabel")}</div>
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
  `;const e={liquidType:"mercury",thermometerType:V,bulbVolume:200,wallThickness:.5,capillaryBore:.3,liquidL0:3,liquidL100:13,resistanceR0:5,resistanceR100:6.2,thermistorR25:10,thermistorBeta:3500,bathTemp:25,thermometerTemp:25,bubbles:[],iceCubes:[],heatWaves:[],steamParticles:[],currentLength:5.5,currentResistance:5.3,currentThermistorR:10,lastTimestamp:0,showLabels:!0},H={xs:11,sm:14,md:17,lg:18,sub:10};function et(t,l,o,n){let i=Math.min(o,Math.max(l,t));return n>0&&(i=Math.round(i/n)*n,i=Math.min(o,Math.max(l,parseFloat(i.toFixed(10))))),i}function M(t,l,{min:o,max:n,step:i,decimals:c,onUpdate:s}){function d(p){const u=Number.isFinite(p)?p:o,r=et(u,o,n,i);t.value=r,l.value=r.toFixed(c),s(r)}t.addEventListener("input",()=>d(parseFloat(t.value))),l.addEventListener("change",()=>d(parseFloat(l.value))),l.addEventListener("blur",()=>d(parseFloat(l.value)))}const J=460,lt=340,C=40,w=640,k=420;function q(){const t={left:110,top:48,right:30,bottom:65};return{gx:t.left,gy:t.top,gw:w-t.left-t.right,gh:k-t.top-t.bottom,tickFont:`bold ${Math.round(w*.024)}px Arial`,axisFont:`bold ${Math.round(w*.026)}px Arial`,dotR:8,yLabelX:t.left-75,xLabelY:k-t.bottom+32}}function x(){return{minT:0,maxT:200,tickStep:25}}function T(t,l,o,n,i){return n+(t-l)/(o-l)*i}function $(t,l,o,n,i){return n+i-(t-l)/(o-l)*i}function P(t,l,o,n,i,c,s=null){const{gx:d,gy:p,gw:u,gh:r,tickFont:b,axisFont:y,yLabelX:m,xLabelY:F}=l;t.strokeStyle="#1e1e24",t.lineWidth=1;for(const h of c){const v=$(h.value,h.min,h.max,p,r);t.beginPath(),t.moveTo(d,v),t.lineTo(d+u,v),t.stroke()}for(let h=o;h<=n+.01;h+=i){const v=T(h,o,n,d,u);t.beginPath(),t.moveTo(v,p),t.lineTo(v,p+r),t.stroke()}t.strokeStyle="#4b5563",t.lineWidth=2.5,t.beginPath(),t.moveTo(d,p),t.lineTo(d,p+r),t.lineTo(d+u,p+r),t.stroke(),t.fillStyle="#e4e4e7",t.font=b,t.textAlign="right",t.textBaseline="middle";for(const h of c){const v=$(h.value,h.min,h.max,p,r);t.fillText(h.label,d-15,v)}t.textAlign="center",t.textBaseline="top";for(let h=o;h<=n+.01;h+=i){if(s!=null&&Math.abs(h-s)<.25)continue;const v=T(h,o,n,d,u);t.fillText(`${Math.round(h)}`,v,p+r+10)}return{gx:d,gy:p,gw:u,gh:r,axisFont:y,yLabelX:m,xLabelY:F}}function N(t,l){const o=l-t,n=o<=8?1:o<=14?2:5,i=[],c=Math.ceil(t/n)*n;for(let s=c;s<=l+.001;s+=n)i.push({value:s,label:s%1===0?`${s.toFixed(0)}`:`${s.toFixed(1)}`,min:t,max:l});return i}function _(){const{maxT:t}=x(),l=L(0),o=L(t),n=o-l,i=Math.max(1,n*.1),c=Math.max(0,Math.round((l-i)*10)/10),s=Math.round((o+i)*10)/10;return{minL:c,maxL:s}}function L(t){return e.liquidL0+(e.liquidL100-e.liquidL0)/100*t}function j(){const{maxT:t}=x(),l=X(0),o=X(t),n=o-l,i=Math.max(.2,n*.1),c=Math.max(0,l-i),s=o+i,d=n<=2?.5:n<=4?1:2,p=[],u=Math.ceil(c/d)*d;for(let r=u;r<=s+.001;r+=d)p.push({value:r,label:r.toFixed(1),min:c,max:s});return{minR:c,maxR:s,ticks:p}}function X(t){return e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*t}function at(t){const{maxT:l}=t;let o=e.thermistorR25;for(let s=0;s<=l;s+=5){const d=s+273.15,p=e.thermistorR25*Math.exp(e.thermistorBeta*(1/d-1/298.15));o=Math.max(o,p)}o=Math.ceil(o*1.08*10)/10;const n=0,i=o<=12?2:4,c=[];for(let s=0;s<=o+.001;s+=i)c.push({value:s,label:s.toFixed(0),min:n,max:o});return{minR:n,maxR:o,ticks:c}}const it=a.querySelector("#tl-thermometerCanvas"),O=it.getContext("2d"),Z=a.querySelector("#tl-graphCanvas"),z=Z.getContext("2d"),S=window.devicePixelRatio||1;it.width=J*S,it.height=lt*S,O.scale(S,S),Z.width=w*S,Z.height=k*S,z.scale(S,S);function rt(){e.iceCubes=[];for(let t=0;t<5;t++)e.iceCubes.push({x:60+Math.random()*120,y:200+Math.random()*15,size:12+Math.random()*8,angle:Math.random()*Math.PI,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.15});e.bubbles=[];for(let t=0;t<20;t++)e.bubbles.push({x:60+Math.random()*120,y:190+Math.random()*70,r:1+Math.random()*3.5,speedY:.8+Math.random()*1.5,phase:Math.random()*Math.PI*2,wobbleSpeed:.08+Math.random()*.08});e.heatWaves=[];for(let t=0;t<8;t++)e.heatWaves.push({x:65+Math.random()*110,y:190+Math.random()*60,length:15+Math.random()*15,speedY:.5+Math.random()*.6,opacity:.15+Math.random()*.25});e.steamParticles=[];for(let t=0;t<12;t++)e.steamParticles.push({x:60+Math.random()*120,y:175+Math.random()*10,r:2+Math.random()*4,vx:(Math.random()-.5)*.3,vy:-.4-Math.random()*.6,alpha:.2+Math.random()*.4})}const nt=200,st=11;function ft(){const t=Math.pow(e.bulbVolume/nt,.3333333333333333);return st*t}function Ct(){if(e.thermometerType==="resistance"||e.thermometerType==="thermistor")return .35;const t=e.liquidType==="mercury"?1:8,l=.2+e.wallThickness*1.5,o=.4+e.bulbVolume*.003,n=1.35-e.capillaryBore*.45;return Math.max(.1,l*o*n*t*.15)}function Lt(t){e.bathTemp<=8&&e.iceCubes.forEach(l=>{l.x+=l.speedX,l.y+=l.speedY,(l.x<65||l.x>175)&&(l.speedX*=-1),(l.y<195||l.y>210)&&(l.speedY*=-1)}),e.bathTemp>35&&e.heatWaves.forEach(l=>{l.y-=l.speedY*(1+e.bathTemp/100),l.y<185&&(l.y=265,l.x=65+Math.random()*110)}),e.bathTemp>=80&&e.bubbles.forEach(l=>{l.y-=l.speedY*(1+(e.bathTemp-80)/40),l.phase+=l.wobbleSpeed,l.x+=Math.sin(l.phase)*.3,l.y<185&&(l.y=260+Math.random()*10,l.x=60+Math.random()*120)}),e.bathTemp>=95&&e.steamParticles.forEach(l=>{l.x+=l.vx,l.y+=l.vy,l.alpha-=.005,(l.alpha<=0||l.y<130)&&(l.x=60+Math.random()*120,l.y=175+Math.random()*5,l.alpha=.2+Math.random()*.4)})}function qt(t){let s=59,d=130,p=246;if(e.bathTemp<25){const m=e.bathTemp/25;s=Math.round(180-m*121),d=Math.round(210-m*80),p=Math.round(250-m*4)}else{const m=Math.min(1,(e.bathTemp-25)/125);s=Math.round(59+m*180),d=Math.round(130-m*100),p=Math.round(246-m*190)}if(e.bathTemp>40){const m=Math.min(1,(e.bathTemp-40)/100),F=Date.now()*.02;t.fillStyle=`rgba(239, 68, 68, ${m*.25})`,t.beginPath(),t.roundRect(45,284,150,10,4),t.fill(),t.fillStyle="rgba(249, 115, 22, 0.85)",t.beginPath(),t.moveTo(55+130/2-25,284);for(let h=-25;h<=25;h+=6){const v=m*(12+Math.sin(h*.4+F)*5);t.lineTo(55+130/2+h,284-v)}t.lineTo(55+130/2+25,284),t.closePath(),t.fill()}t.strokeStyle="#4b5563",t.lineWidth=2,t.fillStyle="#121214",t.beginPath(),t.roundRect(55,180,130,100,[0,0,10,10]),t.fill();const u=t.createLinearGradient(55,190,55,280);u.addColorStop(0,`rgba(${s}, ${d}, ${p}, 0.25)`),u.addColorStop(1,`rgba(${s}, ${d}, ${p}, 0.55)`),t.fillStyle=u,t.beginPath(),t.moveTo(55,190);const r=e.bathTemp>=80?2:.5,b=e.bathTemp>=80?.09:.03,y=Date.now()*b;for(let m=55;m<=185;m+=5){const F=190+Math.sin(m*.15+y)*r;t.lineTo(m,F)}t.lineTo(185,280),t.lineTo(55,280),t.closePath(),t.fill(),e.bathTemp>35&&(t.strokeStyle=`rgba(239, 68, 68, ${Math.min(.5,(e.bathTemp-35)/120)})`,t.lineWidth=1.2,e.heatWaves.forEach(m=>{t.beginPath(),t.moveTo(m.x,m.y),t.quadraticCurveTo(m.x+Math.sin(m.y*.06)*5,m.y-m.length/2,m.x,m.y-m.length),t.stroke()})),e.bathTemp<=8&&(t.fillStyle="rgba(224, 242, 254, 0.55)",t.strokeStyle="rgba(186, 230, 253, 0.8)",t.lineWidth=1,e.iceCubes.forEach(m=>{t.save(),t.translate(m.x,m.y),t.rotate(m.angle),t.beginPath(),t.roundRect(-m.size/2,-m.size/2,m.size,m.size,3),t.fill(),t.stroke(),t.restore()})),e.bathTemp>=80&&(t.fillStyle="rgba(255, 255, 255, 0.4)",t.strokeStyle="rgba(255, 255, 255, 0.65)",t.lineWidth=.6,e.bubbles.forEach(m=>{t.beginPath(),t.arc(m.x,m.y,m.r,0,Math.PI*2),t.fill(),t.stroke()})),e.bathTemp>=95&&e.steamParticles.forEach(m=>{t.fillStyle=`rgba(255, 255, 255, ${m.alpha})`,t.beginPath(),t.arc(m.x,m.y,m.r,0,Math.PI*2),t.fill()}),t.strokeStyle="#9ca3af",t.lineWidth=3.5,t.beginPath(),t.moveTo(54,180),t.lineTo(54,272),t.arcTo(54,281,65,281,8),t.lineTo(175,281),t.arcTo(186,281,186,272,8),t.lineTo(186,180),t.stroke(),t.strokeStyle="rgba(255, 255, 255, 0.4)",t.lineWidth=1.5,t.beginPath(),t.moveTo(59,190),t.lineTo(59,270),t.stroke()}function Q(t,l,o,n,i,c,s="left"){if(!e.showLabels)return;t.strokeStyle="rgba(6, 182, 212, 0.7)",t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.moveTo(l,o),t.lineTo(n,i),t.stroke(),t.setLineDash([]),t.fillStyle="#06b6d4",t.beginPath(),t.arc(l,o,3,0,Math.PI*2),t.fill(),t.font="bold 9px system-ui, sans-serif";const p=t.measureText(c).width+10,u=16,r=s==="left"?n:n-p,b=i-u/2;t.fillStyle="rgba(21, 21, 24, 0.9)",t.strokeStyle="#06b6d4",t.lineWidth=1,t.beginPath(),t.roundRect(r,b,p,u,4),t.fill(),t.stroke(),t.fillStyle="#f4f4f5",t.textAlign="center",t.textBaseline="middle",t.fillText(c,r+p/2,b+u/2+.5)}function $t(t){const n=ft(),i=250+Math.max(0,n-st)*.35,c=i-n-1,s=10+e.wallThickness*8,d=120-s/2,p=120+s/2,u=t.createLinearGradient(d,20,p,20);u.addColorStop(0,"rgba(209, 213, 219, 0.85)"),u.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),u.addColorStop(.5,"rgba(243, 244, 246, 0.15)"),u.addColorStop(.8,"rgba(255, 255, 255, 0.95)"),u.addColorStop(1,"rgba(156, 163, 175, 0.9)"),t.fillStyle=u,t.strokeStyle="rgba(156, 163, 175, 0.8)",t.lineWidth=1,t.beginPath(),t.moveTo(d,c),t.lineTo(d,25),t.arcTo(d,20,d+5,20,5),t.arcTo(p,20,p,25,5),t.lineTo(p,c),t.closePath(),t.fill(),t.stroke();const r=t.createRadialGradient(120-n*.2,i-n*.2,n*.1,120,i,n);r.addColorStop(0,"rgba(255, 255, 255, 0.8)"),r.addColorStop(1,"rgba(156, 163, 175, 0.35)"),t.fillStyle=r,t.strokeStyle="#6b7280",t.lineWidth=.8+e.wallThickness*.6,t.beginPath(),t.arc(120,i,n+.5+e.wallThickness*.5,0,Math.PI*2),t.fill(),t.stroke();const b=Math.min(s*.72,.8+e.capillaryBore*4.5);t.fillStyle="#0a0a0c",t.fillRect(120-b/2,28,b,c-20-8);const y=e.liquidType==="mercury",m=y?"#a1a1aa":"#ef4444",F=y?"#f4f4f5":"#fee2e2",h=210,v=220,I=(h-40)/v,G=h-Math.min(v,e.thermometerTemp)*I;t.fillStyle=m,t.fillRect(120-b/2,G,b,c-G),t.beginPath(),t.ellipse(120,G,b/2,1.5,0,0,Math.PI*2),t.fill(),t.fillStyle=F,t.fillRect(120-b/6,G,b/3,c-G);const E=n*.9,R=t.createRadialGradient(120-E*.2,i-E*.2,E*.1,120,i,E);y?(R.addColorStop(0,"#f4f4f5"),R.addColorStop(.3,"#d4d4d8"),R.addColorStop(.8,"#71717a"),R.addColorStop(1,"#3f3f46")):(R.addColorStop(0,"#fee2e2"),R.addColorStop(.2,"#fca5a5"),R.addColorStop(.7,"#ef4444"),R.addColorStop(1,"#991b1b")),t.fillStyle=R,t.beginPath(),t.arc(120,i,E,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(161, 161, 170, 0.6)",t.lineWidth=.5,t.font="6.5px Arial",t.fillStyle="#a1a1aa",t.textAlign="right",t.textBaseline="middle";for(let B=0;B<=200;B+=50){const Y=h-B*I;t.beginPath(),t.moveTo(d,Y),t.lineTo(d+4,Y),t.stroke(),t.fillText(`${B}°C`,d-22,Y+2.5)}e.showLabels&&(Q(t,d+1,80,10,50,f("tools.thermometerLab.labels.thinWall"),"left"),Q(t,120,G,230,G-15,f("tools.thermometerLab.labels.meniscus"),"left"),Q(t,120-b/2,130,10,130,f("tools.thermometerLab.labels.narrowBore"),"left"),Q(t,120,i,230,i+15,f("tools.thermometerLab.labels.largeBulb"),"left"))}function zt(t){const s=t.createLinearGradient(115,20,125,20);s.addColorStop(0,"#71717a"),s.addColorStop(.3,"#f4f4f5"),s.addColorStop(.7,"#d4d4d8"),s.addColorStop(1,"#3f3f46"),t.fillStyle=s,t.strokeStyle="#4b5563",t.lineWidth=1,t.beginPath(),t.roundRect(115,20,10,225,[0,0,4,4]),t.fill(),t.stroke(),t.fillStyle="rgba(21, 21, 24, 0.8)",t.fillRect(117,200,6,40),t.strokeStyle="#e2e8f0",t.lineWidth=1.2,t.beginPath();let d=205;t.moveTo(118,d);for(let y=0;y<8;y++)d+=4,t.lineTo(122,d),d+=4,t.lineTo(118,d);t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(118,20),t.bezierCurveTo(110,5,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(122,20),t.bezierCurveTo(130,8,210,45,245,75),t.stroke();const p=245,u=40,r=135,b=90;t.fillStyle="#18181b",t.strokeStyle="#6366f1",t.lineWidth=2.5,t.beginPath(),t.roundRect(p,u,r,b,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(p+10,u+12,r-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#10b981",t.textAlign="right",t.fillText(e.currentResistance.toFixed(2)+" Ω",p+r-16,u+34),t.font="6px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText("PLATINUM RTD METER",p+14,u+21),e.showLabels&&(Q(t,116,100,10,70,f("tools.thermometerLab.labels.metalSheath"),"left"),Q(t,120,225,230,205,f("tools.thermometerLab.labels.platinumCoil"),"left"))}function Ft(t){t.strokeStyle="#111827",t.lineWidth=1.2,t.beginPath(),t.moveTo(118,20),t.lineTo(118,245),t.stroke(),t.beginPath(),t.moveTo(122,20),t.lineTo(122,245),t.stroke();const i=20,c=225,s=12,d=120-s/2,p=t.createLinearGradient(d,i,d+s,i);p.addColorStop(0,"rgba(229, 231, 235, 0.4)"),p.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),p.addColorStop(.7,"rgba(243, 244, 246, 0.5)"),p.addColorStop(1,"rgba(209, 213, 219, 0.6)"),t.fillStyle=p,t.strokeStyle="rgba(156, 163, 175, 0.6)",t.lineWidth=.8,t.beginPath(),t.roundRect(d,i,s,c-i,[0,0,3,3]),t.fill(),t.stroke();const u=7,r=t.createRadialGradient(120-u*.2,245-u*.2,u*.1,120,245,u);r.addColorStop(0,"#6b7280"),r.addColorStop(.7,"#1f2937"),r.addColorStop(1,"#09090b"),t.fillStyle=r,t.strokeStyle="#030712",t.lineWidth=1.2,t.beginPath(),t.arc(120,245,u,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=1.5,t.strokeStyle="#ef4444",t.beginPath(),t.moveTo(118,20),t.bezierCurveTo(110,5,200,30,245,60),t.stroke(),t.strokeStyle="#111827",t.beginPath(),t.moveTo(122,20),t.bezierCurveTo(130,8,210,45,245,75),t.stroke();const b=245,y=40,m=135,F=90;t.fillStyle="#18181b",t.strokeStyle="#10b981",t.lineWidth=2.5,t.beginPath(),t.roundRect(b,y,m,F,10),t.fill(),t.stroke(),t.fillStyle="#022c22",t.beginPath(),t.roundRect(b+10,y+12,m-20,34,4),t.fill(),t.font='bold 17px "Courier New"',t.fillStyle="#34d399",t.textAlign="right",t.fillText(e.currentThermistorR.toFixed(2)+" kΩ",b+m-16,y+34),t.font="5px Arial",t.fillStyle="#a7f3d0",t.textAlign="left",t.fillText(f("tools.thermometerLab.thermistor.meterLabelLine1"),b+14,y+52),t.fillText(f("tools.thermometerLab.thermistor.meterLabelLine2"),b+14,y+59),e.showLabels&&(Q(t,118,120,10,90,f("tools.thermometerLab.labels.leads"),"left"),Q(t,120,245,230,225,f("tools.thermometerLab.labels.semiconductorBead"),"left"))}function ct(t,l,o,n,i,c,s,d,p){const{gx:u,gy:r,gw:b,gh:y,tickFont:m}=l;t.strokeStyle="rgba(255, 255, 255, 0.2)",t.lineWidth=1,t.setLineDash([4,4]),t.beginPath(),t.moveTo(o,n),t.lineTo(o,r+y),t.stroke(),t.beginPath(),t.moveTo(o,n),t.lineTo(u,n),t.stroke(),t.setLineDash([]);const F=r+y+10;t.font=m,t.textAlign="center",t.textBaseline="top";const h=`${i.toFixed(1)}${s}`,v=t.measureText(h).width+10,D=18;t.fillStyle=p,t.beginPath(),t.roundRect(o-v/2,F-2,v,D,3),t.fill(),t.fillStyle="#000",t.fillText(h,o,F),t.textAlign="right",t.textBaseline="middle";const I=`${c.toFixed(2)} ${d}`,G=t.measureText(I).width+10;t.fillStyle=p,t.beginPath(),t.roundRect(u-G-2,n-7,G,15,3),t.fill(),t.fillStyle="#000",t.fillText(I,u-7,n)}function Rt(t){const l=q(),{minL:o,maxL:n}=_(),{minT:i,maxT:c,tickStep:s}=x(),d=N(o,n),p=P(t,l,i,c,s,d,e.thermometerTemp),{gx:u,gy:r,gw:b,gh:y,axisFont:m,yLabelX:F,xLabelY:h,dotR:v}={...l,...p};t.save(),t.translate(F,r+y/2),t.rotate(-Math.PI/2),t.font=m,t.fillStyle="#e4e4e7",t.fillText("Length of liquid column / cm",0,0),t.restore(),t.font=m,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",u+b/2,h);const D=c,I=T(0,i,c,u,b),G=$(L(0),o,n,r,y),E=T(D,i,c,u,b),R=$(L(D),o,n,r,y);t.strokeStyle="#ef4444",t.lineWidth=3,t.beginPath(),t.moveTo(I,G),t.lineTo(E,R),t.stroke();const B=e.thermometerTemp,Y=e.currentLength;if(B>=i&&B<=c){const U=T(B,i,c,u,b),ot=$(Y,o,n,r,y);ct(t,l,U,ot,B,Y,"°C","cm","#ef4444"),t.shadowColor="#ef4444",t.shadowBlur=10,t.fillStyle="#ef4444",t.beginPath(),t.arc(U,ot,v,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function Mt(t){const l=q(),{minR:o,maxR:n,ticks:i}=j(),c=x(),s=P(t,l,c.minT,c.maxT,c.tickStep,i,e.thermometerTemp),{gx:d,gy:p,gw:u,gh:r,axisFont:b,yLabelX:y,xLabelY:m,dotR:F}={...l,...s};t.save(),t.translate(y,p+r/2),t.rotate(-Math.PI/2),t.font=b,t.fillStyle="#e4e4e7",t.fillText("Resistance of platinum / Ω",0,0),t.restore(),t.font=b,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",d+u/2,m);const{minT:h,maxT:v}=c,D=v,I=T(0,h,v,d,u),G=$(X(0),o,n,p,r),E=T(D,h,v,d,u),R=$(X(D),o,n,p,r);t.strokeStyle="#6366f1",t.lineWidth=3,t.beginPath(),t.moveTo(I,G),t.lineTo(E,R),t.stroke();const B=e.thermometerTemp,Y=e.currentResistance;if(B>=h&&B<=v){const U=T(B,h,v,d,u),ot=$(Y,o,n,p,r);ct(t,l,U,ot,B,Y,"°C","Ω","#6366f1"),t.shadowColor="#6366f1",t.shadowBlur=10,t.fillStyle="#6366f1",t.beginPath(),t.arc(U,ot,F,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function Pt(t){const l=q(),o=x(),{minR:n,maxR:i,ticks:c}=at(o),s=P(t,l,o.minT,o.maxT,o.tickStep,c,e.thermometerTemp),{gx:d,gy:p,gw:u,gh:r,axisFont:b,yLabelX:y,xLabelY:m,dotR:F}={...l,...s},{minT:h,maxT:v}=o;t.save(),t.translate(y,p+r/2),t.rotate(-Math.PI/2),t.font=b,t.fillStyle="#e4e4e7",t.fillText("Resistance of thermistor / kΩ",0,0),t.restore(),t.font=b,t.fillStyle="#e4e4e7",t.textAlign="center",t.fillText("temperature / °C",d+u/2,m),t.strokeStyle="#10b981",t.lineWidth=3,t.beginPath();let D=!1;for(let E=h;E<=v;E+=1){const R=E+273.15,B=e.thermistorR25*Math.exp(e.thermistorBeta*(1/R-1/298.15)),Y=T(E,h,v,d,u),U=$(Math.min(i,B),n,i,p,r);U>=p&&U<=p+r&&(D?t.lineTo(Y,U):(t.moveTo(Y,U),D=!0))}t.stroke();const I=e.thermometerTemp,G=e.currentThermistorR;if(I>=h&&I<=v){const E=T(I,h,v,d,u),R=$(Math.min(i,G),n,i,p,r);ct(t,l,E,R,I,G,"°C","kΩ","#10b981"),t.shadowColor="#10b981",t.shadowBlur=10,t.fillStyle="#10b981",t.beginPath(),t.arc(E,R,F,0,Math.PI*2),t.fill(),t.shadowBlur=0}}function mt(){O.clearRect(0,0,J,lt),z.clearRect(0,0,w,k),O.save(),O.translate(C,0),qt(O),e.thermometerType==="liquid"?$t(O):e.thermometerType==="resistance"?zt(O):Ft(O),O.restore(),e.thermometerType==="liquid"?Rt(z):e.thermometerType==="resistance"?Mt(z):Pt(z)}function Gt(){const{sm:t,md:l,lg:o,xs:n,sub:i}=H,c=a.querySelector("#tl-svg-formula-liquid");c&&(c.innerHTML=`
        <svg height="55" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">Slope Equation:</text>
          <line x1="120" y1="26" x2="210" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="165" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">L<tspan dy="2" font-size="${i}">100</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="${i}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="165" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="220" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="240" y1="26" x2="330" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="285" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">L<tspan dy="2" font-size="${i}">T</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="${i}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="285" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>
        </svg>
      `);const s=a.querySelector("#tl-svg-formula-liquid-sub");if(s){const b=e.liquidL100-e.liquidL0,y=e.currentLength-e.liquidL0;s.innerHTML=`
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
          <text x="50" y="82" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${b.toFixed(1)}</text>
          
          <text x="105" y="73" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="${o}" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const d=a.querySelector("#tl-svg-formula-resistance");d&&(d.innerHTML=`
        <svg height="55" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">Slope Equation:</text>
          <line x1="120" y1="26" x2="210" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="165" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">R<tspan dy="2" font-size="${i}">100</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="${i}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="165" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="220" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="240" y1="26" x2="330" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="285" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">R<tspan dy="2" font-size="${i}">T</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="${i}">0</tspan><tspan dy="-2"></tspan></text>
          <text x="285" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">T - 0</text>
        </svg>
      `);const p=a.querySelector("#tl-svg-formula-resistance-sub");if(p){const b=e.resistanceR100-e.resistanceR0,y=e.currentResistance-e.resistanceR0;p.innerHTML=`
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
          <text x="50" y="82" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${b.toFixed(1)}</text>
          
          <text x="105" y="73" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="${o}" class="tl-final-ans">&rArr; T = ${e.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const u=a.querySelector("#tl-svg-formula-thermistor");u&&(u.innerHTML=`
        <svg height="50" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">T =</text>
          <line x1="40" y1="23" x2="220" y2="23" stroke="#fff" stroke-width="1.5" />
          <text x="130" y="15" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">1</text>
          <text x="130" y="38" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${n}" text-anchor="middle">(1/&beta;) &bull; ln(R<tspan dy="2" font-size="${i}">T</tspan><tspan dy="-2">/R</tspan><tspan dy="2" font-size="${i}">25</tspan><tspan dy="-2">) + 1/298.15</tspan></text>
          <text x="230" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">- 273.15</text>
        </svg>
      `);const r=a.querySelector("#tl-svg-formula-thermistor-sub");if(r){const b=e.thermometerTemp+273.15;r.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">
            T<tspan dy="3" font-size="${i}">K</tspan><tspan dy="-3" fill="#10b981" font-weight="bold"> = ${b.toFixed(2)} K</tspan>
            <tspan fill="#fff"> &rArr; T = </tspan>
            <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${e.thermometerTemp.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `}}function Et(){const t=a.querySelector("#tl-faulty-svg-container");if(!t)return;const{cf:l,cu:o,interval:n}=ht(),i=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,c=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,s=a.querySelector("#tl-pane-q10a").classList.contains("active"),d=s?(i-l)/n*100:c,p=s?i:c/100*n+l,r=(b=>130-b/100*80)(d);t.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <!-- Left Scale: True Scale -->
        <g transform="translate(0, 0)">
          <!-- Glass Tube -->
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="84" y="${r}" width="4" height="${144-r}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          
          <!-- Ticks -->
          <!-- Ice Point 0°C -->
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          
          <!-- Steam Point 100°C -->
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>

          <!-- Current Point -->
          <text x="65" y="${r+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${d.toFixed(1)}°C</text>

          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${f("tools.thermometerLab.faulty.trueScale")}</text>
        </g>

        <!-- Right Scale: Faulty Scale -->
        <g transform="translate(130, 0)">
          <!-- Glass Tube -->
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="104" y="${r}" width="4" height="${144-r}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          
          <!-- Ticks -->
          <!-- Faulty Ice Point Cf -->
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${l.toFixed(1)}°C</tspan></text>
          
          <!-- Faulty Steam Point Cu -->
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${o.toFixed(1)}°C</tspan></text>

          <!-- Current Faulty Point -->
          <text x="125" y="${r+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${p.toFixed(1)}°C</text>

          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${f("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>

        <!-- Connecting Ratio Indicator Line -->
        <line x1="86" y1="${r}" x2="236" y2="${r}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${r}" r="3" fill="#34d399" />
        <circle cx="236" cy="${r}" r="3" fill="#34d399" />
      </svg>
    `}function Bt(t){a.querySelector("#tl-bath-temp-display").innerHTML=e.bathTemp.toFixed(1)+"°C",a.querySelector("#tl-val-bath-temp").innerHTML=e.bathTemp.toFixed(1)+" °C";const l=a.querySelector("#tl-bath-state");e.bathTemp<=0?l.textContent="Melting Ice Bath":e.bathTemp>=100?l.textContent="Boiling Water/Steam":e.bathTemp===150?l.textContent="Hot Cooking Oil":l.textContent="Liquid Water",a.querySelector("#tl-val-response-time").textContent=t.toFixed(2)+" s";const o=a.querySelector("#tl-alcohol-boiling-warning");e.thermometerType==="liquid"&&e.liquidType==="alcohol"&&e.bathTemp>=78?o.style.display="block":o.style.display="none",e.thermometerType==="liquid"?(a.querySelector("#tl-live-liquid-lt").textContent=e.currentLength.toFixed(2)+" cm",a.querySelector("#tl-live-liquid-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):e.thermometerType==="resistance"?(a.querySelector("#tl-live-resistance-rt").textContent=e.currentResistance.toFixed(2)+" Ω",a.querySelector("#tl-live-resistance-t-sub").textContent=e.thermometerTemp.toFixed(1)+"°C"):a.querySelector("#tl-live-thermistor-rt").textContent=e.currentThermistorR.toFixed(2)+" kΩ",Gt()}let dt=null;function bt(t){e.lastTimestamp||(e.lastTimestamp=t);const l=(t-e.lastTimestamp)/1e3;e.lastTimestamp=t;const o=Math.min(l,.1),n=Ct(),i=o/n*(e.bathTemp-e.thermometerTemp);e.thermometerTemp+=i,e.currentLength=e.liquidL0+(e.liquidL100-e.liquidL0)/100*e.thermometerTemp,e.currentResistance=e.resistanceR0+(e.resistanceR100-e.resistanceR0)/100*e.thermometerTemp;const c=e.thermometerTemp+273.15;e.currentThermistorR=e.thermistorR25*Math.exp(e.thermistorBeta*(1/c-1/298.15)),Lt(),mt(),Bt(n),dt=requestAnimationFrame(bt)}function ht(){const t=parseFloat(a.querySelector("#tl-input-faulty-cf").value),l=parseFloat(a.querySelector("#tl-input-faulty-cu").value),o=Number.isFinite(t)?t:-1.5,n=Number.isFinite(l)?l:105,i=n-o;return{cf:o,cu:n,interval:i}}function ut(t){const l=Math.round(t*100)/100;return l>=0?l.toFixed(1):`(${l.toFixed(1)})`}function tt(){if(!a.querySelector("#tl-input-faulty-cf"))return;const{cf:t,cu:l,interval:o}=ht(),n=a.querySelector("#tl-val-faulty-interval"),i=a.querySelector("#tl-faulty-error-a"),c=a.querySelector("#tl-faulty-error-b"),s=Math.abs(o)<.01;n.textContent=o.toFixed(1)+" °C";const d=a.querySelector("#tl-svg-formula-faulty-a"),p=a.querySelector("#tl-svg-formula-faulty-b");if(s){i.hidden=!1,i.textContent="C_u must differ from C_f (interval cannot be zero).",c.hidden=!1,c.textContent=i.textContent,d&&(d.innerHTML=""),p&&(p.innerHTML="");return}i.hidden=!0,c.hidden=!0;const u=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,r=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,b=(u-t)/o*100,y=r/100*o+t;d&&(d.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${u.toFixed(1)} - ${ut(t)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${l.toFixed(1)} - ${ut(t)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${b.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),p&&(p.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${r.toFixed(1)} &times; ${o.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${ut(t)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${y.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),Et()}function gt(){const{sm:t,md:l}=H,o=parseFloat(a.querySelector("#tl-input-q11-r").value)||0,n=(o-e.resistanceR0)/(e.resistanceR100-e.resistanceR0)*100,i=a.querySelector("#tl-svg-formula-resistance-solver");i&&(i.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">&theta; =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">${o.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${n.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `)}function At(){const{sm:t,md:l,sub:o}=H,n=e.thermometerTemp,i=e.liquidL100-e.liquidL0,c=e.liquidL0+i/100*n,s=a.querySelector("#tl-svg-formula-t-to-l");s&&(s.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.liquidL100.toFixed(1)} - ${e.liquidL0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">L<tspan dy="2" font-size="${o}">T</tspan><tspan dy="-2"> - ${e.liquidL0.toFixed(1)}</tspan></text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${n.toFixed(1)} - 0</text>

          <text x="10" y="73" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}">L<tspan dy="2" font-size="${o}">T</tspan><tspan dy="-2"> = ${e.liquidL0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${i.toFixed(1)} / 100)</tspan> &times; ${n.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${c.toFixed(2)} cm</tspan>
          </text>
        </svg>
      `)}function It(){const{sm:t,md:l,sub:o}=H,n=e.thermometerTemp,i=e.resistanceR100-e.resistanceR0,c=e.resistanceR0+i/100*n,s=a.querySelector("#tl-svg-formula-t-to-r");s&&(s.innerHTML=`
        <svg height="90" width="340" style="background:transparent; overflow:visible;">
          <line x1="10" y1="30" x2="100" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="21" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${e.resistanceR100.toFixed(1)} - ${e.resistanceR0.toFixed(1)}</text>
          <text x="55" y="43" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="35" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${l}">=</text>
          
          <line x1="130" y1="30" x2="220" y2="30" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="21" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="${t}" text-anchor="middle">R<tspan dy="2" font-size="${o}">T</tspan><tspan dy="-2"> - ${e.resistanceR0.toFixed(1)}</tspan></text>
          <text x="175" y="43" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}" text-anchor="middle">${n.toFixed(1)} - 0</text>

          <text x="10" y="73" fill="#fff" font-family="Cambria, Georgia, serif" font-size="${t}">R<tspan dy="2" font-size="${o}">T</tspan><tspan dy="-2"> = ${e.resistanceR0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${i.toFixed(1)} / 100)</tspan> &times; ${n.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${c.toFixed(2)} Ω</tspan>
          </text>
        </svg>
      `)}function A(){tt(),gt(),At(),It()}function pt(t,l){a.querySelector("#"+t).addEventListener("click",()=>{e.bathTemp=l,a.querySelector("#tl-bath-temp-slider").value=l,A()})}function yt(t){a.querySelectorAll(".tl-tab-btn").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tl-tab")===t)}),a.querySelectorAll(".tl-tab-content").forEach(l=>{l.classList.toggle("active",l.id==="tl-tab-"+t)}),a.querySelectorAll(".tl-live-tab").forEach(l=>{l.classList.toggle("active",l.id==="tl-live-"+t)}),e.thermometerType=t}function Ht(){var s,d,p,u;a.querySelectorAll(".tl-tab-btn").forEach(r=>{r.addEventListener("click",()=>{yt(r.getAttribute("data-tl-tab")),A()})}),a.querySelector("#tl-btn-toggle-labels").addEventListener("click",()=>{e.showLabels=!e.showLabels,a.querySelector("#tl-lbl-toggle-labels").textContent=e.showLabels?f("tools.thermometerLab.labels.hide"):f("tools.thermometerLab.labels.show")}),a.querySelector("#tl-bath-temp-slider").addEventListener("input",r=>{e.bathTemp=parseFloat(r.target.value),A()}),pt("tl-btn-preset-ice",0),pt("tl-btn-preset-room",25),pt("tl-btn-preset-steam",100),pt("tl-btn-preset-oil",150),a.querySelector("#tl-card-mercury").addEventListener("click",()=>{e.liquidType="mercury",a.querySelector("#tl-card-mercury").className="tl-seg-btn active-mercury",a.querySelector("#tl-card-alcohol").className="tl-seg-btn",A()}),a.querySelector("#tl-card-alcohol").addEventListener("click",()=>{e.liquidType="alcohol",a.querySelector("#tl-card-mercury").className="tl-seg-btn",a.querySelector("#tl-card-alcohol").className="tl-seg-btn active-alcohol",A()}),M(a.querySelector("#tl-slider-bulb-vol"),a.querySelector("#tl-input-bulb-vol"),{min:10,max:1e3,step:10,decimals:0,onUpdate:r=>{e.bulbVolume=r}}),M(a.querySelector("#tl-slider-wall-thick"),a.querySelector("#tl-input-wall-thick"),{min:.05,max:3,step:.05,decimals:2,onUpdate:r=>{e.wallThickness=r}}),M(a.querySelector("#tl-slider-capillary-bore"),a.querySelector("#tl-input-capillary-bore"),{min:.05,max:2,step:.05,decimals:2,onUpdate:r=>{e.capillaryBore=r}}),M(a.querySelector("#tl-slider-liquid-l0"),a.querySelector("#tl-input-liquid-l0"),{min:.5,max:15,step:.1,decimals:1,onUpdate:r=>{e.liquidL0=r,A()}}),M(a.querySelector("#tl-slider-liquid-l100"),a.querySelector("#tl-input-liquid-l100"),{min:5,max:30,step:.1,decimals:1,onUpdate:r=>{e.liquidL100=r,A()}}),M(a.querySelector("#tl-slider-resistance-r0"),a.querySelector("#tl-input-resistance-r0"),{min:.5,max:20,step:.1,decimals:1,onUpdate:r=>{e.resistanceR0=r,a.querySelector("#tl-spec-resistance-r0").textContent=r.toFixed(1)+" Ω",A()}}),M(a.querySelector("#tl-slider-resistance-r100"),a.querySelector("#tl-input-resistance-r100"),{min:2,max:30,step:.1,decimals:1,onUpdate:r=>{e.resistanceR100=r,a.querySelector("#tl-spec-resistance-r100").textContent=r.toFixed(1)+" Ω",A()}}),M(a.querySelector("#tl-slider-thermistor-r25"),a.querySelector("#tl-input-thermistor-r25"),{min:.5,max:50,step:.1,decimals:1,onUpdate:r=>{e.thermistorR25=r,a.querySelector("#tl-spec-thermistor-r25").textContent=r.toFixed(1)+" kΩ",A()}}),M(a.querySelector("#tl-slider-thermistor-beta"),a.querySelector("#tl-input-thermistor-beta"),{min:1e3,max:8e3,step:50,decimals:0,onUpdate:r=>{e.thermistorBeta=r,a.querySelector("#tl-spec-thermistor-beta").textContent=r+" K",A()}});const o=a.querySelector("#tl-btn-solve-q10a"),n=a.querySelector("#tl-btn-solve-q10b");o&&n&&(o.addEventListener("click",()=>{o.classList.add("active"),n.classList.remove("active"),a.querySelector("#tl-pane-q10a").classList.add("active"),a.querySelector("#tl-pane-q10b").classList.remove("active"),tt()}),n.addEventListener("click",()=>{o.classList.remove("active"),n.classList.add("active"),a.querySelector("#tl-pane-q10a").classList.remove("active"),a.querySelector("#tl-pane-q10b").classList.add("active"),tt()})),(s=a.querySelector("#tl-input-faulty-cf"))==null||s.addEventListener("input",tt),(d=a.querySelector("#tl-input-faulty-cu"))==null||d.addEventListener("input",tt),(p=a.querySelector("#tl-input-q10a-cm"))==null||p.addEventListener("input",tt),(u=a.querySelector("#tl-input-q10b-t"))==null||u.addEventListener("input",tt),a.querySelector("#tl-input-q11-r").addEventListener("input",gt);const i=a.querySelector("#tl-input-t-to-l");i&&i.addEventListener("input",A);const c=a.querySelector("#tl-input-t-to-r");c&&c.addEventListener("input",A)}if(g.type){const t=a.querySelector(".tl-tabs-container");t&&(t.style.display="none")}yt(V),rt(),Ht(),A();const xt=a.querySelector(".tl-dash"),vt=a.querySelector(".tl-controls"),wt=a.querySelector("#tl-controls-toggle"),Wt=a.querySelector("#tl-controls-drag"),Yt=a.querySelector(".tl-controls-float-bar");return xt&&vt&&wt&&kt({container:xt,panel:vt,toggleBtn:wt,dragHandle:Wt,dragSurface:Yt,storageKey:`s3phy-thermo-${V}`,breakpoint:1024,getToggleTitle:t=>f(t?"tools.floatingControls.showParams":"tools.floatingControls.hideParams"),onLayoutChange:()=>mt()}),dt=requestAnimationFrame(bt),a._thermometerLabCleanup=()=>{dt&&cancelAnimationFrame(dt)},a}function Ot(f){St();const g=document.createElement("div");g.className="tl-wrap tl-wrap--faulty-cal",g.innerHTML=`
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
  `;function V(C){const w=Math.round(C*100)/100;return w>=0?w.toFixed(1):`(${w.toFixed(1)})`}function K(){const C=parseFloat(g.querySelector("#fsc-input-faulty-cf").value),w=parseFloat(g.querySelector("#fsc-input-faulty-cu").value),k=Number.isFinite(C)?C:-1.5,q=Number.isFinite(w)?w:105,x=q-k;return{cf:k,cu:q,interval:x}}function W(){const C=g.querySelector("#fsc-faulty-svg-container");if(!C)return;const{cf:w,cu:k,interval:q}=K(),x=parseFloat(g.querySelector("#fsc-input-q10a-cm").value)||0,T=parseFloat(g.querySelector("#fsc-input-q10b-t").value)||0,$=g.querySelector("#fsc-input-pane-q10a").classList.contains("active"),P=$?(x-w)/q*100:T,N=$?x:T/100*q+w,_=j=>130-j/100*80,L=Number.isFinite(P)?_(P):130;C.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <g transform="translate(0, 0)">
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <rect x="84" y="${L}" width="4" height="${144-L}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>
          <text x="65" y="${L+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${Number.isFinite(P)?P.toFixed(1):"—"}°C</text>
          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${f("tools.thermometerLab.faulty.trueScale")}</text>
        </g>
        <g transform="translate(130, 0)">
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <rect x="104" y="${L}" width="4" height="${144-L}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${w.toFixed(1)}°C</tspan></text>
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${k.toFixed(1)}°C</tspan></text>
          <text x="125" y="${L+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${Number.isFinite(N)?N.toFixed(1):"—"}°C</text>
          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${f("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>
        <line x1="86" y1="${L}" x2="236" y2="${L}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${L}" r="3" fill="#34d399" />
        <circle cx="236" cy="${L}" r="3" fill="#34d399" />
      </svg>
    `}function a(C){const w=C==="a";g.querySelector("#fsc-btn-solve-q10a").classList.toggle("active",w),g.querySelector("#fsc-btn-solve-q10b").classList.toggle("active",!w),g.querySelector("#fsc-input-pane-q10a").classList.toggle("active",w),g.querySelector("#fsc-input-pane-q10b").classList.toggle("active",!w),g.querySelector("#fsc-pane-q10a").classList.toggle("active",w),g.querySelector("#fsc-pane-q10b").classList.toggle("active",!w),e()}function e(){const{cf:C,cu:w,interval:k}=K(),q=g.querySelector("#fsc-val-faulty-interval"),x=g.querySelector("#fsc-faulty-error-a"),T=g.querySelector("#fsc-faulty-error-b"),$=g.querySelector("#fsc-svg-formula-faulty-a"),P=g.querySelector("#fsc-svg-formula-faulty-b"),N=Math.abs(k)<.01,_=f("tools.faultyCalibration.invalidInterval");if(q.textContent=k.toFixed(1)+" °C",N){x.hidden=!1,x.textContent=_,T.hidden=!1,T.textContent=_,$&&($.innerHTML=""),P&&(P.innerHTML=""),W();return}x.hidden=!0,T.hidden=!0;const L=parseFloat(g.querySelector("#fsc-input-q10a-cm").value)||0,j=parseFloat(g.querySelector("#fsc-input-q10b-t").value)||0,X=(L-C)/k*100,at=j/100*k+C;$&&($.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${L.toFixed(1)} - ${V(C)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${w.toFixed(1)} - ${V(C)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${X.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),P&&(P.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${j.toFixed(1)} &times; ${k.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${V(C)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${at.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),W()}g.querySelector("#fsc-btn-solve-q10a").addEventListener("click",()=>a("a")),g.querySelector("#fsc-btn-solve-q10b").addEventListener("click",()=>a("b")),g.querySelector("#fsc-input-faulty-cf").addEventListener("input",e),g.querySelector("#fsc-input-faulty-cu").addEventListener("input",e),g.querySelector("#fsc-input-q10a-cm").addEventListener("input",e),g.querySelector("#fsc-input-q10b-t").addEventListener("input",e);const H=g.querySelector(".tl-dash--faulty"),et=g.querySelector(".tl-controls"),M=g.querySelector("#fsc-controls-toggle"),J=g.querySelector("#fsc-controls-drag"),lt=g.querySelector(".tl-controls-float-bar");return H&&et&&M&&kt({container:H,panel:et,toggleBtn:M,dragHandle:J,dragSurface:lt,storageKey:"s3phy-faulty-calibration",breakpoint:1024,getToggleTitle:C=>f(C?"tools.floatingControls.showParams":"tools.floatingControls.hideParams")}),e(),g._thermometerLabCleanup=()=>{},g}export{Ot as createFaultyScaleCalibrationLab,_t as createThermometerLab};
