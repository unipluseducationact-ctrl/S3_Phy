import{t as i}from"./index-DgHiVPqD.js";import{m as l}from"./hubShell-BuvrnhH_.js";const m=[{id:"gasLaws",titleKey:"topic.gasLaws"},{id:"kineticTheory",titleKey:"topic.kineticTheory"},{id:"gasPressure",titleKey:"topic.gasPressure"}];function v(o){let t=sessionStorage.getItem("s3phy.gas.section")||"topics",e=null,s={main:null};function a(){s.main&&(t==="topics"?s.main.innerHTML=p():s.main.innerHTML=`
        <section class="panel">
          <h2>${i(`nav.${t}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${i("gas.comingSoon")}</p>
          </div>
        </section>
      `)}function c(){e==null||e.refreshLabels(),a()}function d(){e==null||e.destroy(),e=l(o,{subtitleKey:"strand.gas.subtitle",activeSection:t,onSection:n=>{t=n,sessionStorage.setItem("s3phy.gas.section",n),e.updateSection(t),a()},onLang:c}),s.main=e.main,e.updateSection(t),a()}function p(){return`
      <section class="panel panel--topic-hub">
        <h2>${i("topics.title")}</h2>
        <p class="lead">${i("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${m.map(n=>`
            <div class="card">
              <h3>${i(n.titleKey)}</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${i("gas.section.empty")}</p>
            </div>
          `).join("")}
        </div>
      </section>
    `}o.addEventListener("click",r);function r(n){}return d(),()=>{o.removeEventListener("click",r),e==null||e.destroy()}}export{v as mountGasHub};
