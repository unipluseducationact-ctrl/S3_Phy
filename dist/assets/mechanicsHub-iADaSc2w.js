import{t as e}from"./index-zQGyD5wR.js";import{h as M,a as $}from"./hubHelpers-j-XRXzmY.js";import{m as w}from"./hubShell-G2I7KnJr.js";const c=[{id:"positionMovement",titleKey:"topic.positionMovement",fileEn:"position-movement-en.pdf",fileZh:"position-movement-zhHant.pdf"},{id:"motionGraph",titleKey:"topic.motionGraph",fileEn:"motion-graph-en.pdf",fileZh:"motion-graph-zhHant.pdf"},{id:"equationOfMotion",titleKey:"topic.equationOfMotion",fileEn:"equation-of-motion-en.pdf",fileZh:"equation-of-motion-zhHant.pdf"},{id:"verticalMotion",titleKey:"topic.verticalMotion",fileEn:"vertical-motion-en.pdf",fileZh:"vertical-motion-zhHant.pdf"},{id:"projectileMotion",titleKey:"topic.projectileMotion",fileEn:"projectile-motion-en.pdf",fileZh:"projectile-motion-zhHant.pdf"},{id:"force",titleKey:"topic.force",fileEn:"force-en.pdf",fileZh:"force-zhHant.pdf"},{id:"moment",titleKey:"topic.moment",fileEn:"moment-en.pdf",fileZh:"moment-zhHant.pdf"},{id:"workEnergyPower",titleKey:"topic.workEnergyPower",fileEn:"work-energy-power-en.pdf",fileZh:"work-energy-power-zhHant.pdf"},{id:"momentum",titleKey:"topic.momentum",fileEn:"momentum-en.pdf",fileZh:"momentum-zhHant.pdf"},{id:"circularMotion",titleKey:"topic.circularMotion",fileEn:"circular-motion-en.pdf",fileZh:"circular-motion-zhHant.pdf"},{id:"gravitationalForce",titleKey:"topic.gravitationalForce",fileEn:"gravitational-force-en.pdf",fileZh:"gravitational-force-zhHant.pdf"}],E={positionMovement:"position-movement",motionGraph:"motion-graph",equationOfMotion:"equation-of-motion",verticalMotion:"vertical-motion",projectileMotion:"projectile-motion",force:"force",moment:"moment",workEnergyPower:"work-energy-power",momentum:"momentum",circularMotion:"circular-motion",gravitationalForce:"gravitational-force"},H=c.map(a=>{const i=E[a.id];return{key:a.id,type:"image",fileEn:`${i}-en.webp`,fileZh:`${i}-zhHant.webp`}});function z(a){let i=sessionStorage.getItem("s3phy.mechanics.section")||"topics",n=null,o={main:null};function r(){o.main&&(i==="topics"?o.main.innerHTML=f():i==="notes"?o.main.innerHTML=u():i==="tools"?o.main.innerHTML=`
        <section class="panel">
          <h2>${e("tools.title")}</h2>
          <p class="lead">${e("tools.comingSoon")}</p>
        </section>
      `:i==="worksheets"?o.main.innerHTML=`
        <section class="panel">
          <h2>${e("worksheets.practiceTitle")}</h2>
          <p class="lead">${e("worksheets.comingSoon")}</p>
        </section>
      `:i==="quiz"?o.main.innerHTML=`
        <section class="panel">
          <h2>${e("quiz.practiceTitle")}</h2>
          <p class="lead">${e("quiz.comingSoon")}</p>
        </section>
      `:i==="flashcards"?o.main.innerHTML=`
        <section class="panel">
          <h2>${e("flashcards.title")}</h2>
          <p class="lead">${e("flashcards.comingSoon")}</p>
        </section>
      `:i==="summary"&&(o.main.innerHTML=v()),i==="notes"&&y(),i==="summary"&&g())}function l(){n==null||n.refreshLabels(),r()}function p(){n==null||n.destroy(),n=w(a,{subtitleKey:"strand.mechanics.subtitle",activeSection:i,onSection:t=>{i=t,sessionStorage.setItem("s3phy.mechanics.section",t),n.updateSection(i),r()},onLang:l}),o.main=n.main,n.updateSection(i),r()}function f(){return`
      <section class="panel panel--topic-hub">
        <h2>${e("topics.title")}</h2>
        <p class="lead">${e("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${c.map(t=>`
            <div class="card">
              <h3>${e(t.titleKey)}</h3>
              <button class="btn primary" type="button" data-go-section="notes">${e("topic.viewNotes")}</button>
            </div>
          `).join("")}
        </div>
      </section>`}function h(t){const s=t.target.closest("[data-go-section]");(s==null?void 0:s.getAttribute("data-go-section"))==="notes"&&(i="notes",sessionStorage.setItem("s3phy.mechanics.section","notes"),n.updateSection(i),r())}function u(){return`
      <section class="panel">
        <h2>${e("notes.title")}</h2>
        <p class="lead">${e("notes.intro")}</p>
        <p class="lead">${e("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${c.map(t=>`
            <div class="card" data-note-card="${t.id}">
              <h3>${e(`notes.card.${t.id}`)}</h3>
              <div data-note-body></div>
            </div>
          `).join("")}
        </div>
      </section>`}async function y(){const t=c.map(s=>({key:s.id,fileEn:s.fileEn,fileZh:s.fileZh}));await M(a,t)}function v(){return`
      <section class="panel">
        <h2>${e("summary.title")}</h2>
        <p class="lead">${e("summary.intro")}</p>
        <p class="lead">${e("notes.embedHint")}</p>
        <div class="grid cols-4" data-summary-grid>
          ${c.map(t=>`
            <div class="card" data-summary-card="${t.id}">
              <h3>${e(`summary.item.${t.id}`)}</h3>
              <div data-summary-body></div>
            </div>
          `).join("")}
        </div>
      </section>`}async function g(){await $(a,H)}const m=l,d=t=>h(t);return window.addEventListener("s3phy:lang",m),a.addEventListener("click",d),p(),()=>{window.removeEventListener("s3phy:lang",m),a.removeEventListener("click",d),n==null||n.destroy()}}export{z as mountMechanicsHub};
