const F="s3phy-rotating-mirror-lab-css",O=`
.rml {
  --rml-bg: #0d0d10;
  --rml-panel: #18181b;
  --rml-border: #27272a;
  --rml-green: #00e676;
  --rml-cyan: #22d3ee;
  --rml-yellow: #ffcc00;
  --rml-red: #ff5252;
  --rml-text: #e4e4e7;
  --rml-muted: #a1a1aa;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--rml-text);
  background: var(--rml-bg);
  border-radius: 12px;
  padding: 12px;
  max-width: 100%;
  box-sizing: border-box;
}
.rml * { box-sizing: border-box; }
.rml .rml-head { text-align: center; margin: 0 0 14px; }
.rml .rml-title {
  margin: 0;
  font-weight: 800;
  font-size: 1.35rem;
  background: linear-gradient(90deg, #4db8ff, #00e676);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.rml .rml-sub { color: var(--rml-muted); font-size: 0.82rem; margin-top: 4px; }
.rml .rml-dash {
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
.rml .rml-viz {
  flex: 2;
  min-width: min(100%, 320px);
  background: var(--rml-panel);
  padding: 10px;
  border-radius: 16px;
  border: 1px solid var(--rml-border);
  display: flex;
  justify-content: center;
  align-items: center;
}
.rml .rml-canvas {
  background: #121214;
  border-radius: 12px;
  width: 100%;
  max-width: min(100%, 960px);
  height: auto;
  display: block;
}
.rml .rml-controls {
  flex: 1;
  min-width: min(100%, 280px);
  max-width: min(360px, calc(100% - 24px));
  background: var(--rml-panel);
  border-radius: 16px;
  padding: 18px;
  border: 1px solid var(--rml-border);
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.rml .rml-toggles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rml-border);
}
.rml .rml-toggle {
  background: #27272a;
  color: var(--rml-muted);
  border: 1px solid transparent;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}
.rml .rml-toggle:hover { background: #3f3f46; color: #fff; }
.rml .rml-ind { width: 6px; height: 6px; border-radius: 50%; background: #52525b; flex-shrink: 0; }
.rml .rml-btn-green.active { background: rgba(0, 230, 118, 0.1); color: var(--rml-green); border-color: rgba(0, 230, 118, 0.3); }
.rml .rml-btn-green.active .rml-ind { background: var(--rml-green); box-shadow: 0 0 6px var(--rml-green); }
.rml .rml-btn-cyan.active { background: rgba(34, 211, 238, 0.12); color: var(--rml-cyan); border-color: rgba(34, 211, 238, 0.35); }
.rml .rml-btn-cyan.active .rml-ind { background: var(--rml-cyan); box-shadow: 0 0 6px var(--rml-cyan); }
.rml .rml-cg { display: flex; flex-direction: column; gap: 8px; }
.rml .rml-lr { display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; font-weight: 600; }
.rml .rml-badge {
  background: #27272a;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 0.78rem;
}
.rml input[type="range"] { -webkit-appearance: none; width: 100%; background: transparent; margin: 4px 0; }
.rml input[type="range"]:focus { outline: none; }
.rml input[type="range"]::-webkit-slider-runnable-track {
  width: 100%; height: 6px; cursor: pointer; background: #3f3f46; border-radius: 3px;
}
.rml input[type="range"]::-webkit-slider-thumb {
  height: 18px; width: 18px; border-radius: 50%; background: #fff; cursor: pointer;
  -webkit-appearance: none; margin-top: -6px; box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}
.rml input[data-rml-rot]::-webkit-slider-thumb { background: var(--rml-yellow); border: 2px solid #fff; }
.rml .rml-ticks { display: flex; justify-content: space-between; font-size: 0.68rem; color: #52525b; }
.rml .rml-stats {
  background: rgba(0,0,0,0.2);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.rml .rml-sr {
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px solid #27272a; padding-bottom: 6px;
}
.rml .rml-sr:last-child { border-bottom: none; padding-bottom: 0; }
.rml .rml-sl { font-size: 0.78rem; color: var(--rml-muted); }
.rml .rml-sv { font-family: ui-monospace, monospace; font-weight: bold; font-size: 0.95rem; }
.rml .rml-shift {
  background: rgba(255, 82, 82, 0.1);
  border: 1px solid rgba(255, 82, 82, 0.3);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rml .rml-shv { color: var(--rml-red); font-size: 1.1rem; font-weight: bold; font-family: ui-monospace, monospace; }
.rml .rml-logic {
  font-size: 0.68rem;
  background: rgba(255, 82, 82, 0.2);
  color: #ff8a80;
  padding: 3px 8px;
  border-radius: 10px;
}
.rml .rml-reset {
  background: transparent;
  border: 1px solid #3f3f46;
  color: var(--rml-muted);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.82rem;
  width: 100%;
}
.rml .rml-reset:hover { background: #27272a; color: #fff; border-color: #52525b; }
`;function D(){if(document.getElementById(F))return;const e=document.createElement("style");e.id=F,e.textContent=O,document.head.appendChild(e)}function U(e){D();const g=document.createElement("div");g.className="rml",g.innerHTML=`
    <div class="rml-head">
      <h2 class="rml-title">${e("tools.rotatingMirror.title")}</h2>
      <div class="rml-sub">${e("tools.rotatingMirror.subtitle")}</div>
    </div>
    <div class="rml-dash">
      <div class="rml-viz">
        <canvas class="rml-canvas" width="700" height="420" aria-label="${e("tools.rotatingMirror.title")}"></canvas>
      </div>
      <div class="rml-controls">
        <div class="rml-toggles">
          <button type="button" class="rml-toggle rml-btn-green active" data-rml-toggle="orig-norm">
            <span class="rml-ind"></span> ${e("tools.rotatingMirror.toggle.origNormal")}
          </button>
          <button type="button" class="rml-toggle rml-btn-green active" data-rml-toggle="orig-ray">
            <span class="rml-ind"></span> ${e("tools.rotatingMirror.toggle.origRay")}
          </button>
          <button type="button" class="rml-toggle rml-btn-cyan active" data-rml-toggle="new-norm">
            <span class="rml-ind"></span> ${e("tools.rotatingMirror.toggle.newNormal")}
          </button>
          <button type="button" class="rml-toggle rml-btn-cyan active" data-rml-toggle="new-ray">
            <span class="rml-ind"></span> ${e("tools.rotatingMirror.toggle.newRay")}
          </button>
        </div>
        <div class="rml-cg">
          <div class="rml-lr">
            <span>${e("tools.rotatingMirror.incidentAngle")}</span>
            <span class="rml-badge" data-rml-disp="inc">-140°</span>
          </div>
          <input type="range" data-rml-inc min="-170" max="-100" step="1" value="-140" />
        </div>
        <div class="rml-cg">
          <div class="rml-lr">
            <span style="color:var(--rml-yellow)">${e("tools.rotatingMirror.mirrorRotation")}</span>
            <span class="rml-badge" data-rml-disp="rot" style="color:var(--rml-yellow);background:rgba(255,204,0,0.15)">0°</span>
          </div>
          <input type="range" data-rml-rot min="-45" max="45" step="1" value="0" />
          <div class="rml-ticks">
            <span>-45°</span><span>0°</span><span>+45°</span>
          </div>
        </div>
        <div class="rml-stats">
          <div class="rml-sr">
            <span class="rml-sl">${e("tools.rotatingMirror.statIncidence")}</span>
            <span class="rml-sv" style="color:var(--rml-yellow)" data-rml-val="i">50.0°</span>
          </div>
          <div class="rml-sr">
            <span class="rml-sl">${e("tools.rotatingMirror.statReflection")}</span>
            <span class="rml-sv" style="color:var(--rml-cyan)" data-rml-val="r">50.0°</span>
          </div>
        </div>
        <div class="rml-shift">
          <div>
            <div class="rml-sl" style="color:#ff8a80;margin-bottom:2px">${e("tools.rotatingMirror.rayShift")}</div>
            <div class="rml-shv" data-rml-val="shift">0.0°</div>
          </div>
          <div class="rml-logic">${e("tools.rotatingMirror.logicBadge")}</div>
        </div>
        <button type="button" class="rml-reset" data-rml-reset>${e("tools.rotatingMirror.reset")}</button>
      </div>
    </div>
  `;const z=g.querySelector(".rml-canvas"),t=z.getContext("2d"),N=g.querySelector("[data-rml-rot]"),P=g.querySelector("[data-rml-inc]"),I=g.querySelector('[data-rml-disp="rot"]'),j=g.querySelector('[data-rml-disp="inc"]'),A=g.querySelector('[data-rml-val="i"]'),W=g.querySelector('[data-rml-val="r"]'),_=g.querySelector('[data-rml-val="shift"]'),i=350,s=380,y=300,h="#22d3ee",q="bold 17px system-ui, sans-serif";let b=0,k=-140,$=!0,T=!0,w=!0,M=!0;function u(l){return l*Math.PI/180}function L(l,o,n,d,f,a=2,c=!1){t.beginPath(),t.lineWidth=a,t.strokeStyle=f,t.setLineDash(c?[6,6]:[]);const m=l+Math.cos(u(n))*d,p=o+Math.sin(u(n))*d;return t.moveTo(l,o),t.lineTo(m,p),t.stroke(),t.setLineDash([]),{x:m,y:p}}function B(l,o,n,d,f,a=14){const c=n-l,m=d-o,p=Math.hypot(c,m);if(p<1e-6)return;const x=c/p,v=m/p,E=n-x*a,r=d-v*a,C=.45*a;t.beginPath(),t.fillStyle=f,t.moveTo(n,d),t.lineTo(E-v*C,r+x*C),t.lineTo(E+v*C,r-x*C),t.closePath(),t.fill()}function R(l,o,n,d,f,a=25){t.beginPath(),t.strokeStyle=d,t.lineWidth=2;const c=Math.min(l,o),m=Math.max(l,o);if(t.arc(i,s,n,u(c),u(m),!1),t.stroke(),f){const p=(c+m)/2,x=i+Math.cos(u(p))*(n+a),v=s+Math.sin(u(p))*(n+a);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle=d,t.fillText(f,x,v),t.restore()}}function Y(l,o,n,d,f){t.clearRect(0,0,z.width,z.height),t.beginPath(),t.setLineDash([10,6]),t.strokeStyle="rgba(255, 204, 0, 0.45)",t.lineWidth=3,t.lineCap="round",t.moveTo(i-200,s),t.lineTo(i+200,s),t.stroke(),t.setLineDash([]),t.lineCap="butt";const a=i+Math.cos(u(l))*y,c=s+Math.sin(u(l))*y;t.beginPath(),t.lineWidth=3,t.strokeStyle="#fff",t.moveTo(a,c),t.lineTo(i,s),t.stroke();const m=(a+i)*.5,p=(c+s)*.5,x=Math.hypot(i-a,s-c)||1,v=(i-a)/x,E=(s-c)/x;if(B(m-v*28,p-E*28,m,p,"#fff",16),t.save(),t.font=q,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#fff",t.fillText(e("tools.rotatingMirror.canvas.incident"),a,c-12),t.restore(),$){const r=L(i,s,-90,y-60,"#00e676",1,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.n"),r.x+6,r.y-4),t.restore()}if(T){const r=L(i,s,d,y,"#00e676",2,!1);B(i,s,r.x,r.y,"#00e676",16),t.save(),t.font=q,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.originalReflected"),r.x,r.y-14),t.restore()}t.save(),t.translate(i,s),t.rotate(u(b)),t.beginPath(),t.lineWidth=6,t.strokeStyle="#ffcc00",t.lineCap="round",t.moveTo(-200,0),t.lineTo(200,0),t.stroke(),t.beginPath(),t.lineWidth=1,t.strokeStyle="#666";for(let r=-190;r<200;r+=15)t.moveTo(r,0),t.lineTo(r-5,8);if(t.stroke(),t.restore(),w){const r=L(i,s,o,y-40,h,2,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle=h,t.fillText(e("tools.rotatingMirror.canvas.nPrime"),r.x+6,r.y-4),t.restore()}if(M){const r=L(i,s,n,y,h,4);B(i,s,r.x,r.y,h,16),Math.abs(b)>.5&&(t.save(),t.font=q,t.textAlign="center",t.textBaseline="bottom",t.fillStyle=h,t.fillText(e("tools.rotatingMirror.canvas.newReflected"),r.x,r.y-14),t.restore())}if(w&&R(l,o,100,"#ffcc00",`i=${f.toFixed(0)}°`,25),w&&M&&R(o,n,100,h,`r=${f.toFixed(0)}°`,25),$&&w&&Math.abs(b)>.5&&R(-90,o,50,"#ffcc00",`θ=${Math.abs(b)}°`,20),T&&M&&Math.abs(b)>.5){const r=n-d;R(d,n,260,"#ff5252",`${e("tools.rotatingMirror.canvas.shift")}=${r.toFixed(0)}°`,40)}}function S(){b=parseFloat(N.value),k=parseFloat(P.value);const l=b>0?"+":"";I.textContent=`${l}${b}°`,j.textContent=`${k}°`;const o=-90,n=Math.abs(k-o),d=o+n,f=-90+b,a=Math.abs(k-f),c=f+a,m=c-d;A.textContent=`${a.toFixed(1)}°`,W.textContent=`${a.toFixed(1)}°`;const p=m>0?"+":"";_.textContent=`${p}${m.toFixed(1)}°`,Y(k,f,c,d,a)}return g.querySelectorAll("[data-rml-toggle]").forEach(l=>{l.addEventListener("click",()=>{const o=l.getAttribute("data-rml-toggle");o==="orig-norm"&&($=!$),o==="orig-ray"&&(T=!T),o==="new-norm"&&(w=!w),o==="new-ray"&&(M=!M),l.classList.toggle("active"),S()})}),g.querySelector("[data-rml-reset]").addEventListener("click",()=>{N.value="0",S()}),N.addEventListener("input",S),P.addEventListener("input",S),S(),g}export{U as createRotatingMirrorLab};
