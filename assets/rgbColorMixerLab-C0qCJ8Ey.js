function L(a){const e=document.createElement("div");e.className="rgb-mixer",e.innerHTML=`
    <p class="lead rgb-mixer-lead">${a("tools.rgbMixer.intro")}</p>
    <div class="rgb-mixer-body">
      <div class="rgb-mixer-stage">
        <canvas class="rgb-mixer-canvas" aria-label="${a("tools.rgbMixer.canvas")}"></canvas>
        <div class="rgb-mixer-labels" aria-hidden="true">
          <span class="lbl-r">${a("tools.rgbMixer.red")}</span>
          <span class="lbl-g">${a("tools.rgbMixer.green")}</span>
          <span class="lbl-b">${a("tools.rgbMixer.blue")}</span>
        </div>
      </div>
      <aside class="rgb-mixer-controls" aria-label="${a("tools.rgbMixer.controls")}">
        <div class="rgb-channel red">
          <label>
            <span class="name-red">${a("tools.rgbMixer.red")}</span>
            <span data-r-val>128</span>
          </label>
          <input type="range" min="0" max="255" value="128" data-r>
          <div class="rgb-channel-bar"><span data-r-bar style="width:50%"></span></div>
        </div>
        <div class="rgb-channel green">
          <label>
            <span class="name-green">${a("tools.rgbMixer.green")}</span>
            <span data-g-val>128</span>
          </label>
          <input type="range" min="0" max="255" value="128" data-g>
          <div class="rgb-channel-bar"><span data-g-bar style="width:50%"></span></div>
        </div>
        <div class="rgb-channel blue">
          <label>
            <span class="name-blue">${a("tools.rgbMixer.blue")}</span>
            <span data-b-val>128</span>
          </label>
          <input type="range" min="0" max="255" value="128" data-b>
          <div class="rgb-channel-bar"><span data-b-bar style="width:50%"></span></div>
        </div>
        <div class="rgb-preview">
          <div data-swatch class="rgb-swatch" role="img"></div>
          <div class="rgb-values" aria-live="polite">
            <p data-rgb-text>rgb(128, 128, 128)</p>
            <p data-hex-text>#808080</p>
          </div>
        </div>
        <div class="rgb-presets" aria-label="${a("tools.rgbMixer.presets")}">
          <button type="button" data-r="255" data-g="0" data-b="0">${a("tools.rgbMixer.presetRed")}</button>
          <button type="button" data-r="0" data-g="255" data-b="0">${a("tools.rgbMixer.presetGreen")}</button>
          <button type="button" data-r="0" data-g="0" data-b="255">${a("tools.rgbMixer.presetBlue")}</button>
          <button type="button" data-r="255" data-g="255" data-b="0">${a("tools.rgbMixer.presetYellow")}</button>
          <button type="button" data-r="0" data-g="255" data-b="255">${a("tools.rgbMixer.presetCyan")}</button>
          <button type="button" data-r="255" data-g="0" data-b="255">${a("tools.rgbMixer.presetMagenta")}</button>
          <button type="button" data-r="255" data-g="255" data-b="255">${a("tools.rgbMixer.presetWhite")}</button>
          <button type="button" data-r="0" data-g="0" data-b="0">${a("tools.rgbMixer.presetBlack")}</button>
        </div>
      </aside>
    </div>
  `;const c=e.querySelector("[data-r]"),g=e.querySelector("[data-g]"),u=e.querySelector("[data-b]"),i=e.querySelector(".rgb-mixer-canvas"),f=e.querySelector(".rgb-mixer-stage"),o=i.getContext("2d");function h(t){return t.toString(16).padStart(2,"0")}function C(t,r,s){const n=i.width/(window.devicePixelRatio||1),b=i.height/(window.devicePixelRatio||1),d=n/2,w=b/2,M=Math.min(n,b)*.34,p=M*.5,R=Math.sqrt(3)/2;o.clearRect(0,0,n,b),o.fillStyle="#000",o.fillRect(0,0,n,b);const E=[{x:d,y:w-p,rgb:[255,0,0],val:t},{x:d-p*R,y:w+p*.5,rgb:[0,255,0],val:r},{x:d+p*R,y:w+p*.5,rgb:[0,0,255],val:s}];o.globalCompositeOperation="lighter",E.forEach(l=>{if(l.val<=0)return;const S=l.val/255,[x,y,$]=l.rgb,v=o.createRadialGradient(l.x,l.y,0,l.x,l.y,M);v.addColorStop(0,`rgba(${x},${y},${$},${S})`),v.addColorStop(.65,`rgba(${x},${y},${$},${S})`),v.addColorStop(.85,`rgba(${x},${y},${$},${S*.5})`),v.addColorStop(1,`rgba(${x},${y},${$},0)`),o.fillStyle=v,o.beginPath(),o.arc(l.x,l.y,M,0,Math.PI*2),o.fill()}),o.globalCompositeOperation="source-over"}function q(){const t=f.getBoundingClientRect(),r=Math.max(200,Math.min(t.width-8,t.height-8,720)),s=window.devicePixelRatio||1;i.width=r*s,i.height=r*s,i.style.width=`${r}px`,i.style.height=`${r}px`,o.setTransform(s,0,0,s,0,0),C(+c.value,+g.value,+u.value)}function m(){const t=+c.value,r=+g.value,s=+u.value,n=`rgb(${t}, ${r}, ${s})`,b=`#${h(t)}${h(r)}${h(s)}`;e.querySelector("[data-r-val]").textContent=t,e.querySelector("[data-g-val]").textContent=r,e.querySelector("[data-b-val]").textContent=s,e.querySelector("[data-r-bar]").style.width=`${t/255*100}%`,e.querySelector("[data-g-bar]").style.width=`${r/255*100}%`,e.querySelector("[data-b-bar]").style.width=`${s/255*100}%`,c.style.setProperty("--fill",`${t/255*100}%`),g.style.setProperty("--fill",`${r/255*100}%`),u.style.setProperty("--fill",`${s/255*100}%`);const d=e.querySelector("[data-swatch]");d.style.backgroundColor=n,d.setAttribute("aria-label",`${a("tools.rgbMixer.preview")}: ${n}`),e.querySelector("[data-rgb-text]").textContent=n,e.querySelector("[data-hex-text]").textContent=b,C(t,r,s)}function P(t,r,s){c.value=t,g.value=r,u.value=s,m()}return[c,g,u].forEach(t=>t.addEventListener("input",m)),e.querySelectorAll(".rgb-presets button").forEach(t=>{t.addEventListener("click",()=>{P(+t.dataset.r,+t.dataset.g,+t.dataset.b)})}),new ResizeObserver(()=>q()).observe(f),requestAnimationFrame(()=>{q(),m()}),e}export{L as createRgbColorMixerLab};
