const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vectorToolLab-CinIfylq.js","./createLabIframe-D9WRbysz.js","./index-Cq_3law7.js","./index-D16P_DNl.css","./projectileMotionLab-CtvIw4ee.js"])))=>i.map(i=>d[i]);
import{t,_ as g}from"./index-Cq_3law7.js";import{l as w,s as M,m as _,c as O,h as z,a as j}from"./hubShell-DCcW1W4k.js";import{r as K,h as Z}from"./toolsShell-C-Th6Ujm.js";const h="s3phy.mechanics.tool",d=[{id:"positionMovement",titleKey:"topic.positionMovement",fileEn:"position-movement-en.pdf",fileZh:"position-movement-zhHant.pdf"},{id:"equationOfMotion",titleKey:"topic.equationOfMotion",fileEn:"equation-of-motion-en.pdf",fileZh:"equation-of-motion-zhHant.pdf"},{id:"verticalMotion",titleKey:"topic.verticalMotion",fileEn:"vertical-motion-en.pdf",fileZh:"vertical-motion-zhHant.pdf"},{id:"motionGraph",titleKey:"topic.motionGraph",fileEn:"motion-graph-en.pdf",fileZh:"motion-graph-zhHant.pdf"},{id:"forceI",titleKey:"topic.forceI",fileEn:"force-i-en.pdf",fileZh:"force-i-zhHant.pdf"},{id:"forceII",titleKey:"topic.forceII",fileEn:"force-ii-en.pdf",fileZh:"force-ii-zhHant.pdf"},{id:"forceIII",titleKey:"topic.forceIII",fileEn:"force-iii-en.pdf",fileZh:"force-iii-zhHant.pdf"},{id:"moment",titleKey:"topic.moment",fileEn:"moment-en.pdf",fileZh:"moment-zhHant.pdf"},{id:"workEnergyPower",titleKey:"topic.workEnergyPower",fileEn:"work-energy-power-en.pdf",fileZh:"work-energy-power-zhHant.pdf"},{id:"momentum",titleKey:"topic.momentum",fileEn:"momentum-en.pdf",fileZh:"momentum-zhHant.pdf"},{id:"projectileMotion",titleKey:"topic.projectileMotion",fileEn:"projectile-motion-en.pdf",fileZh:"projectile-motion-zhHant.pdf",tool:"projectileMotion"},{id:"circularMotion",titleKey:"topic.circularMotion",fileEn:"circular-motion-en.pdf",fileZh:"circular-motion-zhHant.pdf"},{id:"gravitationalForce",titleKey:"topic.gravitationalForce",fileEn:"gravitational-force-en.pdf",fileZh:"gravitational-force-zhHant.pdf"}],k={positionMovement:"position-movement",equationOfMotion:"equation-of-motion",verticalMotion:"vertical-motion",motionGraph:"motion-graph",forceI:"force-i",forceII:"force-ii",forceIII:"force-iii",moment:"moment",workEnergyPower:"work-energy-power",momentum:"momentum",projectileMotion:"projectile-motion",circularMotion:"circular-motion",gravitationalForce:"gravitational-force"},A=d.map(i=>{const o=k[i.id];return{key:i.id,type:"image",fileEn:`${o}-en.webp`,fileZh:`${o}-zhHant.webp`}}),y=["vectorTool","projectileMotion"],C={vectorTool:()=>g(()=>import("./vectorToolLab-CinIfylq.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(i=>i.createVectorToolLab),projectileMotion:()=>g(()=>import("./projectileMotionLab-CtvIw4ee.js"),__vite__mapDeps([4,1,2,3]),import.meta.url).then(i=>i.createProjectileMotionLab)};function E(i){return t({vectorTool:"tools.vectorTool.title",projectileMotion:"tools.projectileMotion.title"}[i]||i)}function N(i){let o=sessionStorage.getItem("s3phy.mechanics.section")||"topics",r=w(h,y,"projectileMotion"),n=null,c={main:null},m=null;function f(){O(m),m=null}async function T(e){e.innerHTML="",f();const a=C[r];if(!a)return;const s=(await a())(t);m=s,e.appendChild(s)}function l(){c.main&&(o==="topics"?c.main.innerHTML=b():o==="notes"?c.main.innerHTML=S():o==="tools"?(c.main.innerHTML=K({toolOrder:y,toolId:r,getLabel:E,t}),Z(i,{getLabel:E,t,getActiveToolId:()=>r,onSelectTool:e=>{r=e,M(h,r)},mountTool:e=>{T(e)}})):o==="worksheets"?c.main.innerHTML=`
        <section class="panel">
          <h2>${t("worksheets.practiceTitle")}</h2>
          <p class="lead">${t("worksheets.comingSoon")}</p>
        </section>
      `:o==="quiz"?c.main.innerHTML=`
        <section class="panel">
          <h2>${t("quiz.practiceTitle")}</h2>
          <p class="lead">${t("quiz.comingSoon")}</p>
        </section>
      `:o==="flashcards"?c.main.innerHTML=`
        <section class="panel">
          <h2>${t("flashcards.title")}</h2>
          <p class="lead">${t("flashcards.comingSoon")}</p>
        </section>
      `:o==="summary"&&(c.main.innerHTML=L()),o==="notes"&&$(),o==="summary"&&H())}function u(){n==null||n.refreshLabels(),l()}function I(){n==null||n.destroy(),n=_(i,{subtitleKey:"strand.mechanics.subtitle",activeSection:o,onSection:e=>{o==="tools"&&e!=="tools"&&f(),o=e,sessionStorage.setItem("s3phy.mechanics.section",e),n.updateSection(o),l()},onLang:u}),c.main=n.main,n.updateSection(o),l()}function b(){return`
      <section class="panel panel--topic-hub">
        <h2>${t("topics.title")}</h2>
        <p class="lead">${t("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${d.map(e=>{const a=e.tool?`<button class="btn primary" type="button" data-go-tool="${e.tool}">${t("topic.openTool")}</button>`:`<button class="btn primary" type="button" data-go-section="notes">${t("topic.viewNotes")}</button>`;return`
            <div class="card">
              <h3>${t(e.titleKey)}</h3>
              ${a}
            </div>`}).join("")}
        </div>
      </section>`}function v(e){const a=e.target.closest("[data-go-tool]");if(a){const s=a.getAttribute("data-go-tool");y.includes(s)&&(r=s,M(h,r)),o="tools",sessionStorage.setItem("s3phy.mechanics.section","tools"),n.updateSection(o),l();return}const p=e.target.closest("[data-go-section]");(p==null?void 0:p.getAttribute("data-go-section"))==="notes"&&(o="notes",sessionStorage.setItem("s3phy.mechanics.section","notes"),n.updateSection(o),l())}function S(){return`
      <section class="panel">
        <h2>${t("notes.title")}</h2>
        <p class="lead">${t("notes.intro")}</p>
        <p class="lead">${t("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${d.map(e=>`
            <div class="card" data-note-card="${e.id}">
              <h3>${t(`notes.card.${e.id}`)}</h3>
              <div data-note-body></div>
            </div>
          `).join("")}
        </div>
      </section>`}async function $(){const e=d.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await z(i,e)}function L(){return`
      <section class="panel">
        <h2>${t("summary.title")}</h2>
        <p class="lead">${t("summary.intro")}</p>
        <p class="lead">${t("notes.embedHint")}</p>
        <div class="grid cols-4" data-summary-grid>
          ${d.map(e=>`
            <div class="card" data-summary-card="${e.id}">
              <h3>${t(`summary.item.${e.id}`)}</h3>
              <div data-summary-body></div>
            </div>
          `).join("")}
        </div>
      </section>`}async function H(){await j(i,A)}return window.addEventListener("s3phy:lang",u),i.addEventListener("click",v),I(),()=>{window.removeEventListener("s3phy:lang",u),i.removeEventListener("click",v),f(),n==null||n.destroy()}}export{N as mountMechanicsHub};
