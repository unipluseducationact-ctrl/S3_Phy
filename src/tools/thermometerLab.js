/* thermometerLab.js - Ported high-fidelity Thermometer Simulation Lab */

const STYLE_ID = 's3phy-thermometer-lab-css';

const CSS = `
.tl-wrap {
  --tl-bg: #0d0d10;
  --tl-panel: #18181b;
  --tl-border: #27272a;
  --tl-green: #10b981;
  --tl-cyan: #22d3ee;
  --tl-yellow: #ffcc00;
  --tl-red: #ef4444;
  --tl-text: #e4e4e7;
  --tl-muted: #a1a1aa;
  --tl-primary: #4f46e5;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--tl-text);
  background: var(--tl-bg);
  border-radius: 12px;
  padding: 12px;
  max-width: 100%;
  box-sizing: border-box;
}
.tl-wrap * { box-sizing: border-box; }
.tl-wrap .tl-head { text-align: center; margin: 0 0 14px; }
.tl-wrap .tl-title {
  margin: 0;
  font-weight: 800;
  font-size: 1.35rem;
  background: linear-gradient(90deg, #4db8ff, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.tl-wrap .tl-sub { color: var(--tl-muted); font-size: 0.82rem; margin-top: 4px; }
.tl-wrap .tl-dash {
  display: flex;
  flex-direction: row;
  gap: 14px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.tl-wrap .tl-viz {
  flex: 1.2;
  min-width: min(100%, 320px);
  background: var(--tl-panel);
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--tl-border);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.tl-wrap .tl-canvas-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  width: 100%;
}
.tl-wrap .tl-canvas {
  background: #121214;
  border-radius: 12px;
  width: 100%;
  max-width: 460px;
  height: auto;
  aspect-ratio: 460 / 300;
  display: block;
  margin: 0 auto;
}
.tl-wrap .tl-controls {
  flex: 1;
  min-width: min(100%, 280px);
  max-width: 460px;
  background: var(--tl-panel);
  border-radius: 16px;
  padding: 18px;
  border: 1px solid var(--tl-border);
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.tl-wrap .tl-tabs-container {
  display: flex;
  background-color: #27272a;
  border-radius: 8px;
  padding: 3px;
  gap: 3px;
}
.tl-wrap .tl-tab-btn {
  flex: 1;
  padding: 8px 4px;
  background: none;
  border: none;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--tl-muted);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  text-align: center;
}
.tl-wrap .tl-tab-btn:hover {
  color: #fff;
}
.tl-wrap .tl-tab-btn.active {
  color: var(--tl-primary);
  background-color: #fff;
}
.tl-wrap .tl-tab-content {
  display: none;
  flex-direction: column;
  gap: 14px;
}
.tl-wrap .tl-tab-content.active {
  display: flex;
}
.tl-wrap .tl-beaker-overlay {
  background-color: rgba(24, 24, 27, 0.9);
  border: 1px solid var(--tl-border);
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}
.tl-wrap .tl-temp-badge {
  font-size: 1rem;
  font-weight: 800;
  color: var(--tl-cyan);
}
.tl-wrap .tl-cg { display: flex; flex-direction: column; gap: 6px; }
.tl-wrap .tl-lr { display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; font-weight: 600; }
.tl-wrap .tl-badge {
  background: #27272a;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 0.78rem;
}
.tl-wrap input[type="range"] { -webkit-appearance: none; width: 100%; background: transparent; margin: 4px 0; }
.tl-wrap input[type="range"]:focus { outline: none; }
.tl-wrap input[type="range"]::-webkit-slider-runnable-track {
  width: 100%; height: 6px; cursor: pointer; background: #3f3f46; border-radius: 3px;
}
.tl-wrap input[type="range"]::-webkit-slider-thumb {
  height: 16px; width: 16px; border-radius: 50%; background: #fff; cursor: pointer;
  -webkit-appearance: none; margin-top: -5px; box-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
.tl-wrap .tl-btn-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.tl-wrap .tl-btn {
  background-color: #27272a;
  border: 1px solid var(--tl-border);
  color: var(--tl-text);
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s;
}
.tl-wrap .tl-btn:hover {
  background-color: #3f3f46;
}
.tl-wrap .tl-btn.primary {
  background-color: var(--tl-primary);
  border-color: var(--tl-primary);
}
.tl-wrap .tl-btn.primary:hover {
  background-color: #4338ca;
}
.tl-wrap .tl-radio-cards {
  display: flex;
  gap: 10px;
}
.tl-wrap .tl-radio-card {
  flex: 1;
  border: 1px solid var(--tl-border);
  background-color: #27272a;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s;
}
.tl-wrap .tl-radio-card h4 {
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0 0 4px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.tl-wrap .tl-radio-card p {
  font-size: 0.7rem;
  color: var(--tl-muted);
  margin: 0;
  line-height: 1.2;
}
.tl-wrap .tl-radio-card.active-mercury {
  border-color: var(--tl-muted);
  background-color: #3f3f46;
}
.tl-wrap .tl-radio-card.active-alcohol {
  border-color: var(--tl-red);
  background-color: rgba(239, 68, 68, 0.15);
}
.tl-wrap .tl-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
}
.tl-wrap .tl-dot.mercury { background-color: var(--tl-muted); }
.tl-wrap .tl-dot.alcohol { background-color: var(--tl-red); }
.tl-wrap .tl-warning-banner {
  background-color: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-left: 4px solid var(--tl-yellow);
  padding: 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  color: #f59e0b;
  line-height: 1.3;
  display: none;
}
.tl-wrap .tl-info-card {
  background-color: rgba(255,255,255,0.03);
  border: 1px dashed var(--tl-border);
  border-radius: 8px;
  padding: 10px;
}
.tl-wrap .tl-info-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--tl-cyan);
  margin-bottom: 2px;
}
.tl-wrap .tl-info-card p {
  margin: 0;
  font-size: 0.72rem;
  color: var(--tl-muted);
  line-height: 1.3;
}
.tl-wrap .tl-worked-solution {
  background-color: rgba(79, 70, 229, 0.08);
  border-left: 4px solid var(--tl-primary);
  border-radius: 0 8px 8px 0;
  padding: 10px 12px;
  font-size: 0.78rem;
  line-height: 1.4;
}
.tl-wrap .tl-solution-header {
  font-weight: 800;
  color: var(--tl-cyan);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}
.tl-wrap .tl-worked-solution p {
  margin: 4px 0;
}
.tl-wrap .tl-math-formula {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
  font-family: 'Cambria', 'Georgia', serif;
  font-size: 0.88rem;
  color: #fff;
  background-color: rgba(0,0,0,0.2);
  padding: 6px;
  border-radius: 6px;
}
.tl-wrap .tl-math-fraction {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  padding: 0 4px;
}
.tl-wrap .tl-math-num {
  border-bottom: 1px solid #fff;
  text-align: center;
  width: 100%;
  padding-bottom: 1px;
}
.tl-wrap .tl-math-den {
  text-align: center;
  width: 100%;
  padding-top: 1px;
}
.tl-wrap .tl-math-symbol {
  font-size: 1rem;
  padding: 0 4px;
}
.tl-wrap .tl-final-ans {
  color: var(--tl-green);
  font-size: 0.95rem;
  font-weight: 800;
  background-color: rgba(16, 185, 129, 0.15);
  padding: 2px 6px;
  border-radius: 4px;
}
.tl-wrap .tl-solver-tabs {
  display: flex;
  background-color: #27272a;
  border-radius: 6px;
  padding: 2px;
  gap: 2px;
  margin-bottom: 10px;
}
.tl-wrap .tl-solver-tab-btn {
  flex: 1;
  background: none;
  border: none;
  padding: 6px;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--tl-muted);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  text-align: center;
}
.tl-wrap .tl-solver-tab-btn.active {
  background-color: #3f3f46;
  color: #fff;
}
.tl-wrap .tl-solver-pane {
  display: none;
  flex-direction: column;
  gap: 10px;
}
.tl-wrap .tl-solver-pane.active {
  display: flex;
}
.tl-wrap .tl-calc-inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255,255,255,0.02);
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid var(--tl-border);
}
.tl-wrap .tl-calc-inputs span {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--tl-muted);
}
.tl-wrap .tl-input-with-unit {
  display: flex;
  align-items: center;
  background-color: #121214;
  border: 1px solid var(--tl-border);
  border-radius: 4px;
  padding-right: 6px;
}
.tl-wrap .tl-calc-input {
  width: 60px;
  padding: 4px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  outline: none;
}
.tl-wrap .tl-input-with-unit .tl-unit {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--tl-muted);
}
.tl-wrap .tl-probe-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.tl-wrap .tl-spec-tile {
  background-color: rgba(255,255,255,0.02);
  border: 1px solid var(--tl-border);
  border-radius: 8px;
  padding: 8px;
  text-align: center;
}
.tl-wrap .tl-tile-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--tl-muted);
}
.tl-wrap .tl-tile-val {
  font-size: 1rem;
  font-weight: 800;
  color: var(--tl-cyan);
  margin-top: 2px;
}
.tl-wrap .tl-help-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
`;

function ensureStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function createThermometerLab(t) {
  ensureStyles();

  const wrap = document.createElement('div');
  wrap.className = 'tl-wrap';
  wrap.innerHTML = `
    <div class="tl-head">
      <h2 class="tl-title">${t('tools.thermometerLab.title')}</h2>
      <div class="tl-sub">${t('tools.thermometerLab.subtitle')}</div>
    </div>
    <div class="tl-dash">
      <!-- LEFT PANEL: VISUALIZATIONS -->
      <div class="tl-viz">
        <div class="tl-beaker-overlay">
          <span>Beaker Liquid: <b id="tl-bath-state">Water</b></span>
          <span>Temp: <b class="tl-temp-badge" id="tl-bath-temp-display">25.0°C</b></span>
        </div>
        <div class="tl-canvas-container">
          <canvas class="tl-canvas" id="tl-thermometerCanvas" width="460" height="300"></canvas>
          <canvas class="tl-canvas" id="tl-graphCanvas" width="460" height="300"></canvas>
        </div>
        <div class="tl-cg">
          <div class="tl-lr">
            <span>Adjust Beaker Temperature (T<sub>bath</sub>):</span>
            <span class="tl-badge" id="tl-val-bath-temp" style="color:var(--tl-cyan)">25.0 °C</span>
          </div>
          <input type="range" id="tl-bath-temp-slider" min="0" max="250" step="0.5" value="25.0">
        </div>
        <div class="tl-btn-group">
          <button class="tl-btn" id="tl-btn-preset-ice">Melting Ice (0°C)</button>
          <button class="tl-btn" id="tl-btn-preset-room">Room Temp (25°C)</button>
          <button class="tl-btn" id="tl-btn-preset-steam">Steam Bath (100°C)</button>
          <button class="tl-btn" id="tl-btn-preset-oil">Hot Oil (150°C)</button>
        </div>
      </div>

      <!-- RIGHT PANEL: CONTROLS & SOLVERS -->
      <div class="tl-controls">
        <nav class="tl-tabs-container">
          <button class="tl-tab-btn active" data-tl-tab="liquid">Liquid-in-Glass</button>
          <button class="tl-tab-btn" data-tl-tab="resistance">Platinum Resistance</button>
          <button class="tl-tab-btn" data-tl-tab="thermistor">Thermistor (NTC)</button>
        </nav>

        <!-- TAB 1: LIQUID-IN-GLASS -->
        <div class="tl-tab-content active" id="tl-tab-liquid">
          <div class="tl-cg">
            <span class="tl-lr" style="font-size:0.75rem;color:var(--tl-muted)">Select Thermometric Liquid:</span>
            <div class="tl-radio-cards">
              <div class="tl-radio-card active-mercury" id="tl-card-mercury">
                <h4><span class="tl-dot mercury"></span> Mercury</h4>
                <p>Boils at 356.7°C. Ideal for high temps.</p>
              </div>
              <div class="tl-radio-card" id="tl-card-alcohol">
                <h4><span class="tl-dot alcohol"></span> Alcohol</h4>
                <p>Boils at 78.4°C. Vaporizes at high temps.</p>
              </div>
            </div>
          </div>

          <div class="tl-warning-banner" id="tl-alcohol-boiling-warning">
            <strong>CRITICAL PHYSICS ALERT!</strong> Alcohol boils at 78.4°C. Dipping it into this temperature vaporizes the liquid, creating extreme pressure and breaking the thermometer. This is why alcohol <b>cannot</b> be used to measure hot oil (150°C)!
          </div>

          <div class="tl-help-grid">
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Bulb Volume (V<sub>b</sub>):</span>
                <span class="tl-badge" id="tl-val-bulb-vol">200 mm³</span>
              </div>
              <input type="range" id="tl-slider-bulb-vol" min="50" max="500" step="10" value="200">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Wall Thickness (w):</span>
                <span class="tl-badge" id="tl-val-wall-thickness">0.5 mm</span>
              </div>
              <input type="range" id="tl-slider-wall-thick" min="0.1" max="2.0" step="0.1" value="0.5">
            </div>
          </div>

          <div class="tl-help-grid" style="border-top:1px solid var(--tl-border);padding-top:10px">
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Ice Pt Length (L<sub>0</sub>):</span>
                <span class="tl-badge" id="tl-val-liquid-l0">3.0 cm</span>
              </div>
              <input type="range" id="tl-slider-liquid-l0" min="1.0" max="10.0" step="0.1" value="3.0">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Steam Pt (L<sub>100</sub>):</span>
                <span class="tl-badge" id="tl-val-liquid-l100">13.0 cm</span>
              </div>
              <input type="range" id="tl-slider-liquid-l100" min="10.0" max="25.0" step="0.1" value="13.0">
            </div>
          </div>

          <div class="tl-info-card">
            <div class="tl-info-label">Thin Wall Advantage</div>
            <p>Current Response Time: <b id="tl-val-response-time">0.65 s</b>. Thin bulb walls allow rapid heat conduction for a fast response.</p>
          </div>

          <!-- Live Calibration -->
          <div class="tl-worked-solution">
            <div class="tl-solution-header">Live Calibration Formula:</div>
            <div class="tl-math-formula">
              T = <div class="tl-math-fraction">
                <div class="tl-math-num">L<sub>T</sub> - L<sub>0</sub></div>
                <div class="tl-math-den">L<sub>100</sub> - L<sub>0</sub></div>
              </div>
              &times; 100°C
            </div>
            <p>Substitute current reading <b id="tl-live-liquid-lt">5.50 cm</b>:</p>
            <div class="tl-math-formula">
              T = <div class="tl-math-fraction">
                <div class="tl-math-num" id="tl-live-liquid-sub-num">5.50 - 3.0</div>
                <div class="tl-math-den" id="tl-live-liquid-sub-den">13.0 - 3.0</div>
              </div>
              &times; 100°C <span class="tl-math-symbol">=</span> <b class="tl-final-ans" id="tl-live-liquid-ans">25.0°C</b>
            </div>
          </div>

          <!-- Faulty Thermometer Solver -->
          <div class="tl-cg" style="border-top:1px solid var(--tl-border);padding-top:10px">
            <span class="tl-lr" style="font-weight:bold;color:#fff">Faulty Thermometer Solver (Q10)</span>
            <p style="font-size:0.7rem;color:var(--tl-muted);margin:0">Reads -1.5°C in ice (C<sub>f</sub>) and 105°C in steam (C<sub>u</sub>).</p>
            <div class="tl-solver-tabs">
              <button class="tl-solver-tab-btn active" id="tl-btn-solve-q10a">Find True Temp (T)</button>
              <button class="tl-solver-tab-btn" id="tl-btn-solve-q10b">Find Faulty Reading (C)</button>
            </div>
            <div id="tl-pane-q10a" class="tl-solver-pane active">
              <div class="tl-calc-inputs">
                <span>Faulty Reading (C<sub>measured</sub>):</span>
                <div class="tl-input-with-unit">
                  <input type="number" id="tl-input-q10a-cm" value="25.0" step="0.5" class="tl-calc-input">
                  <span class="tl-unit">°C</span>
                </div>
              </div>
              <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
                <div class="tl-math-formula" style="font-size:0.8rem">
                  T = <div class="tl-math-fraction">
                    <div class="tl-math-num">C + 1.5</div>
                    <div class="tl-math-den">106.5</div>
                  </div>
                  &times; 100 <span class="tl-math-symbol">=</span> <b class="tl-final-ans" id="tl-ans-q10a">24.9 °C</b>
                </div>
              </div>
            </div>
            <div id="tl-pane-q10b" class="tl-solver-pane">
              <div class="tl-calc-inputs">
                <span>True Temperature (T):</span>
                <div class="tl-input-with-unit">
                  <input type="number" id="tl-input-q10b-t" value="70.0" step="1.0" class="tl-calc-input">
                  <span class="tl-unit">°C</span>
                </div>
              </div>
              <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
                <div class="tl-math-formula" style="font-size:0.8rem">
                  C = <div class="tl-math-fraction">
                    <div class="tl-math-num">T &times; 106.5</div>
                    <div class="tl-math-den">100</div>
                  </div>
                  - 1.5 <span class="tl-math-symbol">=</span> <b class="tl-final-ans" id="tl-ans-q10b">73.05 °C</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 2: PLATINUM RESISTANCE -->
        <div class="tl-tab-content" id="tl-tab-resistance">
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

          <div class="tl-help-grid">
            <div class="tl-cg">
              <div class="tl-lr">
                <span>R<sub>0</sub> Calibration:</span>
                <span class="tl-badge" id="tl-val-resistance-r0">5.0 Ω</span>
              </div>
              <input type="range" id="tl-slider-resistance-r0" min="1.0" max="10.0" step="0.1" value="5.0">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>R<sub>100</sub> Calibration:</span>
                <span class="tl-badge" id="tl-val-resistance-r100">6.2 Ω</span>
              </div>
              <input type="range" id="tl-slider-resistance-r100" min="5.0" max="15.0" step="0.1" value="6.2">
            </div>
          </div>

          <div class="tl-info-card" style="border-color:rgba(245,158,11,0.3)">
            <div class="tl-info-label" style="color:#f59e0b">Fundamental Assumption</div>
            <p>To calculate temperature using linear calibration, it is <b>fundamentally assumed that electrical resistance varies linearly with temperature</b>.</p>
          </div>

          <!-- Live Calibration -->
          <div class="tl-worked-solution">
            <div class="tl-solution-header">Live Calibration Formula:</div>
            <div class="tl-math-formula">
              T = <div class="tl-math-fraction">
                <div class="tl-math-num">R<sub>T</sub> - R<sub>0</sub></div>
                <div class="tl-math-den">R<sub>100</sub> - R<sub>0</sub></div>
              </div>
              &times; 100°C
            </div>
            <p>Substitute current resistance <b id="tl-live-resistance-rt">5.30 Ω</b>:</p>
            <div class="tl-math-formula">
              T = <div class="tl-math-fraction">
                <div class="tl-math-num" id="tl-live-resistance-sub-num">5.30 - 5.0</div>
                <div class="tl-math-den" id="tl-live-resistance-sub-den">6.2 - 5.0</div>
              </div>
              &times; 100°C <span class="tl-math-symbol">=</span> <b class="tl-final-ans" id="tl-live-resistance-ans">25.0°C</b>
            </div>
          </div>

          <!-- Resistance Solver -->
          <div class="tl-cg" style="border-top:1px solid var(--tl-border);padding-top:10px">
            <span class="tl-lr" style="font-weight:bold;color:#fff">Resistance-to-Temperature Solver (Q11)</span>
            <div class="tl-calc-inputs">
              <span>Measured Resistance (R):</span>
              <div class="tl-input-with-unit">
                <input type="number" id="tl-input-q11-r" value="7.7" step="0.1" class="tl-calc-input">
                <span class="tl-unit">Ω</span>
              </div>
            </div>
            <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
              <div class="tl-math-formula" style="font-size:0.8rem">
                &theta; = <div class="tl-math-fraction">
                  <div class="tl-math-num"><span id="tl-formula-q11-rsub">7.7</span> - R<sub>0</sub></div>
                  <div class="tl-math-den">R<sub>100</sub> - R<sub>0</sub></div>
                </div>
                &times; 100 <span class="tl-math-symbol">=</span> <b class="tl-final-ans" id="tl-ans-q11">225.0 °C</b>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 3: THERMISTOR -->
        <div class="tl-tab-content" id="tl-tab-thermistor">
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

          <div class="tl-help-grid">
            <div class="tl-cg">
              <div class="tl-lr">
                <span>R<sub>25</sub> Calibration:</span>
                <span class="tl-badge" id="tl-val-thermistor-r25">10.0 kΩ</span>
              </div>
              <input type="range" id="tl-slider-thermistor-r25" min="1.0" max="20.0" step="0.1" value="10.0">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Beta β:</span>
                <span class="tl-badge" id="tl-val-thermistor-beta">3500 K</span>
              </div>
              <input type="range" id="tl-slider-thermistor-beta" min="2000" max="5000" step="50" value="3500">
            </div>
          </div>

          <!-- Live Calibration -->
          <div class="tl-worked-solution" style="background-color:rgba(16,185,129,0.05);border-left-color:var(--tl-green)">
            <div class="tl-solution-header" style="color:var(--tl-green)">Live NTC Beta Calculation:</div>
            <div class="tl-math-formula" style="font-size:0.75rem">
              T = <div class="tl-math-fraction">
                <div class="tl-math-num">1</div>
                <div class="tl-math-den">
                  (1/&beta;) &bull; ln(R<sub>T</sub>/R<sub>25</sub>) + 1/298.15
                </div>
              </div>
              - 273.15
            </div>
            <p>Substitute current resistance <b id="tl-live-thermistor-rt">10.00 kΩ</b>:</p>
            <div class="tl-math-formula" style="font-size:0.75rem">
              T<sub>K</sub> = <span id="tl-live-thermistor-calc-tk">298.15</span> K <span class="tl-math-symbol">&rArr;</span> T = <b class="tl-final-ans" id="tl-live-thermistor-ans">25.0°C</b>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  // --- STATE MANAGEMENT ---
  const state = {
    liquidType: 'mercury',
    thermometerType: 'liquid',
    bulbVolume: 200,
    wallThickness: 0.5,
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

    currentLength: 5.5,
    currentResistance: 5.3,
    currentThermistorR: 10.0,

    lastTimestamp: 0
  };

  const PHYS_WIDTH = 460;
  const PHYS_HEIGHT = 300;
  const GRAPH_WIDTH = 460;
  const GRAPH_HEIGHT = 300;

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
    for (let i = 0; i < 4; i++) {
      state.iceCubes.push({
        x: 60 + Math.random() * 120,
        y: 200 + Math.random() * 15,
        size: 10 + Math.random() * 8,
        angle: Math.random() * Math.PI,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15
      });
    }
    state.bubbles = [];
    for (let i = 0; i < 15; i++) {
      state.bubbles.push({
        x: 60 + Math.random() * 120,
        y: 190 + Math.random() * 70,
        r: 1 + Math.random() * 3,
        speedY: 0.6 + Math.random() * 1.2,
        phase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.08 + Math.random() * 0.08
      });
    }
    state.heatWaves = [];
    for (let i = 0; i < 6; i++) {
      state.heatWaves.push({
        x: 65 + Math.random() * 110,
        y: 190 + Math.random() * 60,
        length: 12 + Math.random() * 15,
        speedY: 0.4 + Math.random() * 0.5,
        opacity: 0.1 + Math.random() * 0.25
      });
    }
  }

  function getResponseTimeConstant() {
    if (state.thermometerType === 'resistance' || state.thermometerType === 'thermistor') {
      return 0.35;
    }
    const conductivityFactor = state.liquidType === 'mercury' ? 1.0 : 8.0;
    const thicknessFactor = 0.2 + state.wallThickness * 1.5;
    const volumeFactor = 0.4 + state.bulbVolume * 0.003;
    return Math.max(0.1, thicknessFactor * volumeFactor * conductivityFactor * 0.15);
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
        bubble.x += Math.sin(bubble.phase) * 0.2;
        if (bubble.y < 185) {
          bubble.y = 260 + Math.random() * 10;
          bubble.x = 60 + Math.random() * 120;
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

    if (state.bathTemp > 40) {
      const intensity = Math.min(1.0, (state.bathTemp - 40) / 100);
      const t = Date.now() * 0.02;
      ctx.fillStyle = 'rgba(249, 115, 22, 0.85)';
      ctx.beginPath();
      ctx.moveTo(bx + bw/2 - 20, by + bh + 4);
      for (let dx = -20; dx <= 20; dx += 8) {
        const fHeight = intensity * (10 + Math.sin(dx * 0.3 + t) * 4);
        ctx.lineTo(bx + bw/2 + dx, by + bh + 4 - fHeight);
      }
      ctx.lineTo(bx + bw/2 + 20, by + bh + 4);
      ctx.closePath();
      ctx.fill();
    }

    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#1f1f23';
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, [0, 0, 10, 10]);
    ctx.fill();

    const waterGrad = ctx.createLinearGradient(bx, waterY, bx, by + bh);
    waterGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.3)`);
    waterGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.6)`);
    ctx.fillStyle = waterGrad;
    ctx.beginPath();
    ctx.moveTo(bx, waterY);
    const waveAmp = state.bathTemp >= 80 ? 1.5 : 0.4;
    const waveFreq = state.bathTemp >= 80 ? 0.08 : 0.03;
    const t = Date.now() * waveFreq;
    for (let x = bx; x <= bx + bw; x += 5) {
      const y = waterY + Math.sin(x * 0.15 + t) * waveAmp;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(bx + bw, by + bh);
    ctx.lineTo(bx, by + bh);
    ctx.closePath();
    ctx.fill();

    if (state.bathTemp > 35) {
      ctx.strokeStyle = `rgba(239, 68, 68, ${Math.min(0.4, (state.bathTemp-35)/120)})`;
      ctx.lineWidth = 1;
      state.heatWaves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(wave.x, wave.y);
        ctx.quadraticCurveTo(wave.x + Math.sin(wave.y*0.06)*4, wave.y - wave.length/2, wave.x, wave.y - wave.length);
        ctx.stroke();
      });
    }

    if (state.bathTemp <= 8) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.strokeStyle = 'rgba(147, 197, 253, 0.8)';
      ctx.lineWidth = 0.8;
      state.iceCubes.forEach(ice => {
        ctx.save();
        ctx.translate(ice.x, ice.y);
        ctx.rotate(ice.angle);
        ctx.beginPath();
        ctx.roundRect(-ice.size/2, -ice.size/2, ice.size, ice.size, 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });
    }

    if (state.bathTemp >= 80) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 0.5;
      state.bubbles.forEach(bubble => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }

    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(bx - 1, by);
    ctx.lineTo(bx - 1, by + bh - 8);
    ctx.arcTo(bx - 1, by + bh + 1, bx + 10, by + bh + 1, 8);
    ctx.lineTo(bx + bw - 10, by + bh + 1);
    ctx.arcTo(bx + bw + 1, by + bh + 1, bx + bw + 1, by + bh - 8, 8);
    ctx.lineTo(bx + bw + 1, by);
    ctx.stroke();
  }

  function drawLiquidThermometer(ctx) {
    const x = 120;
    const stemTop = 20;
    const stemBottom = 230;
    const bulbCenterY = 250;
    const bulbRadius = 11;
    const glassWidth = 12;
    const leftX = x - glassWidth / 2;
    const rightX = x + glassWidth / 2;

    const glassGrad = ctx.createLinearGradient(leftX, stemTop, rightX, stemTop);
    glassGrad.addColorStop(0, 'rgba(209, 213, 219, 0.85)');
    glassGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.95)');
    glassGrad.addColorStop(0.5, 'rgba(243, 244, 246, 0.2)');
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

    const bulbGrad = ctx.createRadialGradient(
      x - bulbRadius*0.2, bulbCenterY - bulbRadius*0.2, bulbRadius*0.1,
      x, bulbCenterY, bulbRadius
    );
    bulbGrad.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
    bulbGrad.addColorStop(1, 'rgba(156, 163, 175, 0.3)');
    ctx.fillStyle = bulbGrad;
    ctx.strokeStyle = '#6b7280';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(x, bulbCenterY, bulbRadius + 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const boreWidth = 1.5;
    ctx.fillStyle = '#111827';
    ctx.fillRect(x - boreWidth / 2, stemTop + 8, boreWidth, stemBottom - stemTop - 8);

    const isMercury = state.liquidType === 'mercury';
    const color = isMercury ? '#9ca3af' : '#ef4444';
    const reflectionColor = isMercury ? '#f3f4f6' : '#fecaca';

    const zeroY = 210;
    const maxC = 220;
    const maxCY = 40;
    const pixelsPerC = (zeroY - maxCY) / maxC;
    const currentY = zeroY - Math.min(maxC, state.thermometerTemp) * pixelsPerC;

    ctx.fillStyle = color;
    ctx.fillRect(x - boreWidth/2, currentY, boreWidth, stemBottom - currentY);
    ctx.fillStyle = reflectionColor;
    ctx.fillRect(x - boreWidth/6, currentY, boreWidth/3, stemBottom - currentY);

    const bulbCoreRadius = bulbRadius * 0.9;
    const liquidBulbGrad = ctx.createRadialGradient(
      x - bulbCoreRadius*0.2, bulbCenterY - bulbCoreRadius*0.2, bulbCoreRadius*0.1,
      x, bulbCenterY, bulbCoreRadius
    );
    if (isMercury) {
      liquidBulbGrad.addColorStop(0, '#f3f4f6');
      liquidBulbGrad.addColorStop(0.3, '#d1d5db');
      liquidBulbGrad.addColorStop(0.8, '#9ca3af');
      liquidBulbGrad.addColorStop(1, '#4b5563');
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

    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 0.5;
    ctx.font = '6.5px Arial';
    ctx.fillStyle = '#a1a1aa';
    for (let tVal = 0; tVal <= 200; tVal += 50) {
      const yTick = zeroY - tVal * pixelsPerC;
      ctx.beginPath();
      ctx.moveTo(leftX, yTick);
      ctx.lineTo(leftX + 4, yTick);
      ctx.stroke();
      ctx.fillText(`${tVal}°C`, leftX - 22, yTick + 2.5);
    }
  }

  function drawResistanceProbe(ctx) {
    const x = 120;
    const probeTop = 20;
    const probeBottom = 245;
    const width = 8;
    const rx = x - width / 2;

    const probeGrad = ctx.createLinearGradient(rx, probeTop, rx + width, probeTop);
    probeGrad.addColorStop(0, '#9ca3af');
    probeGrad.addColorStop(0.3, '#f3f4f6');
    probeGrad.addColorStop(0.7, '#d1d5db');
    probeGrad.addColorStop(1, '#6b7280');

    ctx.fillStyle = probeGrad;
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(rx, probeTop, width, probeBottom - probeTop, [0, 0, 3, 3]);
    ctx.fill();
    ctx.stroke();

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

    const ox = 245;
    const oy = 40;
    const ow = 135;
    const oh = 90;

    ctx.fillStyle = '#1e1b4b';
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(ox, oy, ow, oh, 10);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#022c22';
    ctx.beginPath();
    ctx.roundRect(ox + 10, oy + 12, ow - 20, 34, 4);
    ctx.fill();

    ctx.font = 'bold 14px "Courier New"';
    ctx.fillStyle = '#34d399';
    ctx.textAlign = 'right';
    ctx.fillText(state.currentResistance.toFixed(2) + ' Ω', ox + ow - 16, oy + 34);

    ctx.font = '6px Arial';
    ctx.fillStyle = '#a7f3d0';
    ctx.textAlign = 'left';
    ctx.fillText('PLATINUM RTD METER', ox + 14, oy + 21);
  }

  function drawThermistorProbe(ctx) {
    const x = 120;
    const probeTop = 20;
    const beadY = 245;

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

    const tubeTop = 20;
    const tubeBottom = 225;
    const tubeWidth = 10;
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
    ctx.roundRect(tx, tubeTop, tubeWidth, tubeBottom - tubeTop, [0, 0, 2, 2]);
    ctx.fill();
    ctx.stroke();

    const beadRadius = 6;
    const beadGrad = ctx.createRadialGradient(
      x - beadRadius * 0.2, beadY - beadRadius * 0.2, beadRadius * 0.1,
      x, beadY, beadRadius
    );
    beadGrad.addColorStop(0, '#4b5563');
    beadGrad.addColorStop(0.7, '#1f2937');
    beadGrad.addColorStop(1, '#111827');

    ctx.fillStyle = beadGrad;
    ctx.strokeStyle = '#030712';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, beadY, beadRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

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

    const ox = 245;
    const oy = 40;
    const ow = 135;
    const oh = 90;

    ctx.fillStyle = '#111827';
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

    ctx.font = 'bold 14px "Courier New"';
    ctx.fillStyle = '#34d399';
    ctx.textAlign = 'right';
    ctx.fillText(state.currentThermistorR.toFixed(2) + ' kΩ', ox + ow - 16, oy + 34);

    ctx.font = '6px Arial';
    ctx.fillStyle = '#a7f3d0';
    ctx.textAlign = 'left';
    ctx.fillText('NTC THERMISTOR METER', ox + 14, oy + 21);
  }

  function drawLiquidGraph(ctx) {
    const gx = 50;
    const gy = 30;
    const gw = 380;
    const gh = 230;

    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.lineTo(gx, gy + gh);
    ctx.lineTo(gx + gw, gy + gh);
    ctx.stroke();

    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 0.5;
    ctx.fillStyle = '#a1a1aa';
    ctx.font = '7px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    const maxL = 25;
    const maxT = 200;

    for (let l = 0; l <= maxL; l += 5) {
      const yGrid = gy + gh - (l / maxL) * gh;
      ctx.beginPath();
      ctx.moveTo(gx, yGrid);
      ctx.lineTo(gx + gw, yGrid);
      ctx.stroke();
      ctx.fillText(`${l.toFixed(1)}`, gx - 6, yGrid);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let tVal = 0; tVal <= maxT; tVal += 40) {
      const xGrid = gx + (tVal / maxT) * gw;
      ctx.beginPath();
      ctx.moveTo(xGrid, gy);
      ctx.lineTo(xGrid, gy + gh);
      ctx.stroke();
      ctx.fillText(`${tVal}`, xGrid, gy + gh + 4);
    }

    ctx.save();
    ctx.translate(gx - 26, gy + gh / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.font = 'bold 8px Arial';
    ctx.fillStyle = '#e4e4e7';
    ctx.fillText('Length of liquid column / cm', 0, 0);
    ctx.restore();

    ctx.font = 'bold 8px Arial';
    ctx.fillText('temperature / °C', gx + gw / 2, gy + gh + 14);

    const py0 = gy + gh - (state.liquidL0 / maxL) * gh;
    const pyMax = gy + gh - ((state.liquidL0 + ((state.liquidL100 - state.liquidL0) / 100) * maxT) / maxL) * gh;

    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(gx, py0);
    ctx.lineTo(gx + gw, pyMax);
    ctx.stroke();

    const currentT = state.thermometerTemp;
    const currentL = state.currentLength;
    if (currentT >= 0 && currentT <= maxT) {
      const px = gx + (currentT / maxT) * gw;
      const py = gy + gh - (currentL / maxL) * gh;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawResistanceGraph(ctx) {
    const gx = 50;
    const gy = 30;
    const gw = 380;
    const gh = 230;

    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.lineTo(gx, gy + gh);
    ctx.lineTo(gx + gw, gy + gh);
    ctx.stroke();

    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 0.5;
    ctx.fillStyle = '#a1a1aa';
    ctx.font = '7px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    const maxR = 10;
    const maxT = 200;

    for (let r = 0; r <= maxR; r += 2) {
      const yGrid = gy + gh - (r / maxR) * gh;
      ctx.beginPath();
      ctx.moveTo(gx, yGrid);
      ctx.lineTo(gx + gw, yGrid);
      ctx.stroke();
      ctx.fillText(`${r.toFixed(1)}`, gx - 6, yGrid);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let tVal = 0; tVal <= maxT; tVal += 40) {
      const xGrid = gx + (tVal / maxT) * gw;
      ctx.beginPath();
      ctx.moveTo(xGrid, gy);
      ctx.lineTo(xGrid, gy + gh);
      ctx.stroke();
      ctx.fillText(`${tVal}`, xGrid, gy + gh + 4);
    }

    ctx.save();
    ctx.translate(gx - 26, gy + gh / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.font = 'bold 8px Arial';
    ctx.fillStyle = '#e4e4e7';
    ctx.fillText('Resistance of platinum / Ω', 0, 0);
    ctx.restore();

    ctx.font = 'bold 8px Arial';
    ctx.fillText('temperature / °C', gx + gw / 2, gy + gh + 14);

    const py0 = gy + gh - (state.resistanceR0 / maxR) * gh;
    const pyMax = gy + gh - ((state.resistanceR0 + ((state.resistanceR100 - state.resistanceR0) / 100) * maxT) / maxR) * gh;

    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(gx, py0);
    ctx.lineTo(gx + gw, pyMax);
    ctx.stroke();

    const currentT = state.thermometerTemp;
    const currentR = state.currentResistance;
    if (currentT >= 0 && currentT <= maxT) {
      const px = gx + (currentT / maxT) * gw;
      const py = gy + gh - (currentR / maxR) * gh;
      ctx.fillStyle = '#4f46e5';
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawThermistorGraph(ctx) {
    const gx = 50;
    const gy = 30;
    const gw = 380;
    const gh = 230;

    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.lineTo(gx, gy + gh);
    ctx.lineTo(gx + gw, gy + gh);
    ctx.stroke();

    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 0.5;
    ctx.fillStyle = '#a1a1aa';
    ctx.font = '7px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    const maxR = 20;
    const maxT = 200;

    for (let r = 0; r <= maxR; r += 4) {
      const yGrid = gy + gh - (r / maxR) * gh;
      ctx.beginPath();
      ctx.moveTo(gx, yGrid);
      ctx.lineTo(gx + gw, yGrid);
      ctx.stroke();
      ctx.fillText(`${r.toFixed(1)}`, gx - 6, yGrid);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let tVal = 0; tVal <= maxT; tVal += 40) {
      const xGrid = gx + (tVal / maxT) * gw;
      ctx.beginPath();
      ctx.moveTo(xGrid, gy);
      ctx.lineTo(xGrid, gy + gh);
      ctx.stroke();
      ctx.fillText(`${tVal}`, xGrid, gy + gh + 4);
    }

    ctx.save();
    ctx.translate(gx - 26, gy + gh / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.font = 'bold 8px Arial';
    ctx.fillStyle = '#e4e4e7';
    ctx.fillText('Resistance of thermistor / kΩ', 0, 0);
    ctx.restore();

    ctx.font = 'bold 8px Arial';
    ctx.fillText('temperature / °C', gx + gw / 2, gy + gh + 14);

    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    let started = false;
    for (let tVal = 0; tVal <= maxT; tVal += 2) {
      const tempK = tVal + 273.15;
      const r = state.thermistorR25 * Math.exp(state.thermistorBeta * (1 / tempK - 1 / 298.15));
      const px = gx + (tVal / maxT) * gw;
      const py = gy + gh - (Math.min(maxR, r) / maxR) * gh;
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
    if (currentT >= 0 && currentT <= maxT) {
      const px = gx + (currentT / maxT) * gw;
      const py = gy + gh - (Math.min(maxR, currentR) / maxR) * gh;
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawVisuals() {
    physCtx.clearRect(0, 0, PHYS_WIDTH, PHYS_HEIGHT);
    graphCtx.clearRect(0, 0, GRAPH_WIDTH, GRAPH_HEIGHT);

    drawBeaker(physCtx);

    if (state.thermometerType === 'liquid') {
      drawLiquidThermometer(physCtx);
      drawLiquidGraph(graphCtx);
    } else if (state.thermometerType === 'resistance') {
      drawResistanceProbe(physCtx);
      drawResistanceGraph(graphCtx);
    } else {
      drawThermistorProbe(physCtx);
      drawThermistorGraph(graphCtx);
    }
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
      wrap.querySelector('#tl-live-liquid-sub-num').textContent = `${state.currentLength.toFixed(2)} - ${state.liquidL0.toFixed(1)}`;
      wrap.querySelector('#tl-live-liquid-sub-den').textContent = `${state.liquidL100.toFixed(1)} - ${state.liquidL0.toFixed(1)}`;
      wrap.querySelector('#tl-live-liquid-ans').textContent = state.thermometerTemp.toFixed(1) + '°C';
    } else if (state.thermometerType === 'resistance') {
      wrap.querySelector('#tl-live-resistance-rt').textContent = state.currentResistance.toFixed(2) + ' Ω';
      wrap.querySelector('#tl-live-resistance-sub-num').textContent = `${state.currentResistance.toFixed(2)} - ${state.resistanceR0.toFixed(1)}`;
      wrap.querySelector('#tl-live-resistance-sub-den').textContent = `${state.resistanceR100.toFixed(1)} - ${state.resistanceR0.toFixed(1)}`;
      wrap.querySelector('#tl-live-resistance-ans').textContent = state.thermometerTemp.toFixed(1) + '°C';
    } else {
      wrap.querySelector('#tl-live-thermistor-rt').textContent = state.currentThermistorR.toFixed(2) + ' kΩ';
      const tempK = state.thermometerTemp + 273.15;
      wrap.querySelector('#tl-live-thermistor-calc-tk').textContent = tempK.toFixed(2);
      wrap.querySelector('#tl-live-thermistor-ans').textContent = state.thermometerTemp.toFixed(1) + '°C';
    }
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

  function calculateQ10a() {
    const cm = parseFloat(wrap.querySelector('#tl-input-q10a-cm').value) || 0;
    const trueT = ((cm - (-1.5)) / 106.5) * 100;
    wrap.querySelector('#tl-ans-q10a').textContent = trueT.toFixed(1) + ' °C';
  }

  function calculateQ10b() {
    const tVal = parseFloat(wrap.querySelector('#tl-input-q10b-t').value) || 0;
    const faultyC = (tVal / 100) * 106.5 - 1.5;
    wrap.querySelector('#tl-ans-q10b').textContent = faultyC.toFixed(2) + ' °C';
  }

  function calculateQ11() {
    const r = parseFloat(wrap.querySelector('#tl-input-q11-r').value) || 0;
    const theta = ((r - state.resistanceR0) / (state.resistanceR100 - state.resistanceR0)) * 100;
    wrap.querySelector('#tl-formula-q11-rsub').textContent = r.toFixed(1);
    wrap.querySelector('#tl-ans-q11').textContent = theta.toFixed(1) + ' °C';
  }

  function updateCalculations() {
    calculateQ10a();
    calculateQ10b();
    calculateQ11();
  }

  function setupPreset(btnId, temp) {
    wrap.querySelector('#' + btnId).addEventListener('click', () => {
      state.bathTemp = temp;
      wrap.querySelector('#tl-bath-temp-slider').value = temp;
      updateCalculations();
    });
  }

  // Event Listeners
  function setupEventListeners() {
    wrap.querySelectorAll('.tl-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        wrap.querySelectorAll('.tl-tab-btn').forEach(b => b.classList.remove('active'));
        wrap.querySelectorAll('.tl-tab-content').forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tl-tab');
        wrap.querySelector('#tl-tab-' + tabId).classList.add('active');

        state.thermometerType = tabId;
        updateCalculations();
      });
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
      wrap.querySelector('#tl-card-mercury').className = 'tl-radio-card active-mercury';
      wrap.querySelector('#tl-card-alcohol').className = 'tl-radio-card';
      updateCalculations();
    });

    wrap.querySelector('#tl-card-alcohol').addEventListener('click', () => {
      state.liquidType = 'alcohol';
      wrap.querySelector('#tl-card-mercury').className = 'tl-radio-card';
      wrap.querySelector('#tl-card-alcohol').className = 'tl-radio-card active-alcohol';
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
    });

    wrap.querySelector('#tl-btn-solve-q10b').addEventListener('click', () => {
      wrap.querySelector('#tl-btn-solve-q10a').classList.remove('active');
      wrap.querySelector('#tl-btn-solve-q10b').classList.add('active');
      wrap.querySelector('#tl-pane-q10a').classList.remove('active');
      wrap.querySelector('#tl-pane-q10b').classList.add('active');
    });

    wrap.querySelector('#tl-input-q10a-cm').addEventListener('input', calculateQ10a);
    wrap.querySelector('#tl-input-q10b-t').addEventListener('input', calculateQ10b);
    wrap.querySelector('#tl-input-q11-r').addEventListener('input', calculateQ11);
  }

  initParticles();
  setupEventListeners();
  updateCalculations();

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
