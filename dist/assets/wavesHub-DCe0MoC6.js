import{t as n}from"./index-BI1C76fM.js";import{m as h}from"./hubShell-DKVXu1Aj.js";import{h as m}from"./hubHelpers-EhcI4ZdB.js";const r=[{id:"waveMotion",titleKey:"topic.waveMotion",fileEn:"wave-motion-en.pdf",fileZh:"wave-motion-zhHant.pdf"},{id:"waveProperties",titleKey:"topic.waveProperties",fileEn:"wave-properties-en.pdf",fileZh:"wave-properties-zhHant.pdf"},{id:"stationaryWave",titleKey:"topic.stationaryWave",fileEn:"stationary-wave-en.pdf",fileZh:"stationary-wave-zhHant.pdf"},{id:"lightWave",titleKey:"topic.lightWave",fileEn:"light-wave-en.pdf",fileZh:"light-wave-zhHant.pdf"},{id:"soundWave",titleKey:"topic.soundWave",fileEn:"sound-wave-en.pdf",fileZh:"sound-wave-zhHant.pdf"}];function w(s){let i=sessionStorage.getItem("s3phy.waves.section")||"topics",e=null,o={main:null};function d(){o.main&&(i==="topics"?o.main.innerHTML=v():i==="notes"?o.main.innerHTML=f():o.main.innerHTML=`
        <section class="panel">
          <h2>${n(`nav.${i}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${n("waves.comingSoon")}</p>
          </div>
        </section>
      `,i==="notes"&&u())}function l(){e==null||e.refreshLabels(),d()}function p(){e==null||e.destroy(),e=h(s,{subtitleKey:"strand.waves.subtitle",activeSection:i,onSection:t=>{i=t,sessionStorage.setItem("s3phy.waves.section",t),e.updateSection(i),d()},onLang:l}),o.main=e.main,e.updateSection(i),d()}function v(){return`
      <section class="panel panel--topic-hub">
        <h2>${n("topics.title")}</h2>
        <p class="lead">${n("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${r.map(t=>`
            <div class="card">
              <h3>${n(t.titleKey)}</h3>
              <button class="btn primary" type="button" disabled>${n("topic.openTool")}</button>
            </div>
          `).join("")}
        </div>
      </section>
    `}function f(){return`
      <section class="panel">
        <h2>${n("notes.title")}</h2>
        <p class="lead">${n("notes.intro")}</p>
        <p class="lead">${n("notes.embedHint")}</p>
        <div class="grid cols-3" data-notes-grid>
          ${r.map(t=>`
            <div class="card" data-note-card="${t.id}">
              <h3>${n(`notes.card.${t.id}`)}</h3>
              <div data-note-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function u(){const t=r.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await m(s,t)}s.addEventListener("click",c);function c(t){const a=t.target.closest("[data-go-section]");(a==null?void 0:a.getAttribute("data-go-section"))==="notes"&&(i="notes",sessionStorage.setItem("s3phy.waves.section","notes"),e.updateSection(i),d())}return p(),()=>{s.removeEventListener("click",c),e==null||e.destroy()}}export{w as mountWavesHub};
