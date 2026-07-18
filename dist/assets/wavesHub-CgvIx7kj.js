import{t as n}from"./index-B2R-ri5O.js";import{m}from"./hubShell-BnClaoMx.js";import{h}from"./hubHelpers-rekNBNFF.js";const r=[{id:"waveMotion",titleKey:"topic.waveMotion",fileEn:"wave-motion-en.pdf",fileZh:"wave-motion-zhHant.pdf"},{id:"waveProperties",titleKey:"topic.waveProperties",fileEn:"wave-properties-en.pdf",fileZh:"wave-properties-zhHant.pdf"},{id:"stationaryWave",titleKey:"topic.stationaryWave"},{id:"lightWave",titleKey:"topic.lightWave"},{id:"soundWave",titleKey:"topic.soundWave"}];function $(s){let t="topics",e=null,a={main:null};function d(){a.main&&(t==="topics"?a.main.innerHTML=v():t==="notes"?a.main.innerHTML=u():a.main.innerHTML=`
        <section class="panel">
          <h2>${n(`nav.${t}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${n("waves.comingSoon")}</p>
          </div>
        </section>
      `,t==="notes"&&f())}function l(){e==null||e.refreshLabels(),d()}function p(){e==null||e.destroy(),e=m(s,{subtitleKey:"strand.waves.subtitle",activeSection:t,onSection:i=>{t=i,e.updateSection(t),d()},onLang:l}),a.main=e.main,e.updateSection(t),d()}function v(){return`
      <section class="panel panel--topic-hub">
        <h2>${n("topics.title")}</h2>
        <p class="lead">${n("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${r.map(i=>`
            <div class="card">
              <h3>${n(i.titleKey)}</h3>
              <button class="btn primary" type="button" disabled>${n("topic.openTool")}</button>
            </div>
          `).join("")}
        </div>
      </section>
    `}function u(){return`
      <section class="panel">
        <h2>${n("notes.title")}</h2>
        <p class="lead">${n("notes.intro")}</p>
        <p class="lead">${n("notes.embedHint")}</p>
        <div class="grid cols-3" data-notes-grid>
          ${r.map(i=>`
            <div class="card" data-note-card="${i.id}">
              <h3>${n(`notes.card.${i.id}`)}</h3>
              <div data-note-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function f(){const i=r.map(o=>({key:o.id,fileEn:o.fileEn,fileZh:o.fileZh}));await h(s,i)}s.addEventListener("click",c);function c(i){const o=i.target.closest("[data-go-section]");(o==null?void 0:o.getAttribute("data-go-section"))==="notes"&&(t="notes",e.updateSection(t),d())}return p(),()=>{s.removeEventListener("click",c),e==null||e.destroy()}}export{$ as mountWavesHub};
