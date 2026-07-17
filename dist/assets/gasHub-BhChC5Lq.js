import{t}from"./index-5UWgsAi1.js";import{m as p}from"./hubShell-x3lyquCb.js";const u=[{id:"gasLaws",titleKey:"topic.gasLaws"},{id:"kineticTheory",titleKey:"topic.kineticTheory"},{id:"gasPressure",titleKey:"topic.gasPressure"}];function v(r){let i="topics",e=null,n={main:null};function a(){n.main&&(i==="topics"?n.main.innerHTML=l():n.main.innerHTML=`
        <section class="panel">
          <h2>${t(`nav.${i}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${t("gas.comingSoon")}</p>
          </div>
        </section>
      `)}function c(){e==null||e.refreshLabels(),a()}function d(){e==null||e.destroy(),e=p(r,{subtitleKey:"strand.gas.subtitle",activeSection:i,onSection:o=>{i=o,e.updateSection(i),a()},onLang:c}),n.main=e.main,e.updateSection(i),a()}function l(){return`
      <section class="panel panel--topic-hub">
        <h2>${t("topics.title")}</h2>
        <p class="lead">${t("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${u.map(o=>`
            <div class="card">
              <h3>${t(o.titleKey)}</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${t("gas.section.empty")}</p>
            </div>
          `).join("")}
        </div>
      </section>
    `}r.addEventListener("click",s);function s(o){}return d(),()=>{r.removeEventListener("click",s),e==null||e.destroy()}}export{v as mountGasHub};
