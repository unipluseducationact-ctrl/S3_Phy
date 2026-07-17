import{t}from"./index-5UWgsAi1.js";import{m as p}from"./hubShell-x3lyquCb.js";const m=[{id:"waveMotion",titleKey:"topic.waveMotion"},{id:"wavePhenomena",titleKey:"topic.wavePhenomena"},{id:"soundWaves",titleKey:"topic.soundWaves"}];function b(a){let n="topics",e=null,i={main:null};function r(){i.main&&(n==="topics"?i.main.innerHTML=l():i.main.innerHTML=`
        <section class="panel">
          <h2>${t(`nav.${n}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${t("waves.comingSoon")}</p>
          </div>
        </section>
      `)}function s(){e==null||e.refreshLabels(),r()}function d(){e==null||e.destroy(),e=p(a,{subtitleKey:"strand.waves.subtitle",activeSection:n,onSection:o=>{n=o,e.updateSection(n),r()},onLang:s}),i.main=e.main,e.updateSection(n),r()}function l(){return`
      <section class="panel panel--topic-hub">
        <h2>${t("topics.title")}</h2>
        <p class="lead">${t("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${m.map(o=>`
            <div class="card">
              <h3>${t(o.titleKey)}</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${t("waves.section.empty")}</p>
            </div>
          `).join("")}
        </div>
      </section>
    `}a.addEventListener("click",c);function c(o){}return d(),()=>{a.removeEventListener("click",c),e==null||e.destroy()}}export{b as mountWavesHub};
