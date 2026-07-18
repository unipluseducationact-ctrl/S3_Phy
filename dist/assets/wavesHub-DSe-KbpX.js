import{t as i}from"./index-CThOP4Fy.js";import{m as p}from"./hubShell-tv6atre-.js";const v=[{id:"waveMotion",titleKey:"topic.waveMotion"},{id:"waveProperties",titleKey:"topic.waveProperties"},{id:"stationaryWave",titleKey:"topic.stationaryWave"},{id:"lightWave",titleKey:"topic.lightWave"},{id:"soundWave",titleKey:"topic.soundWave"}];function y(a){let t="topics",e=null,n={main:null};function r(){n.main&&(t==="topics"?n.main.innerHTML=l():n.main.innerHTML=`
        <section class="panel">
          <h2>${i(`nav.${t}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${i("waves.comingSoon")}</p>
          </div>
        </section>
      `)}function s(){e==null||e.refreshLabels(),r()}function d(){e==null||e.destroy(),e=p(a,{subtitleKey:"strand.waves.subtitle",activeSection:t,onSection:o=>{t=o,e.updateSection(t),r()},onLang:s}),n.main=e.main,e.updateSection(t),r()}function l(){return`
      <section class="panel panel--topic-hub">
        <h2>${i("topics.title")}</h2>
        <p class="lead">${i("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${v.map(o=>`
            <div class="card">
              <h3>${i(o.titleKey)}</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${i("waves.section.empty")}</p>
            </div>
          `).join("")}
        </div>
      </section>
    `}a.addEventListener("click",c);function c(o){}return d(),()=>{a.removeEventListener("click",c),e==null||e.destroy()}}export{y as mountWavesHub};
