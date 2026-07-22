const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vectorToolLab-SAkJXFRc.js","./createLabIframe-CiAi7m-k.js","./index-CcIw56mm.js","./index-D16P_DNl.css","./projectileMotionLab-DJTXB67T.js"])))=>i.map(i=>d[i]);
import{t as e,_ as g}from"./index-CcIw56mm.js";import{l as _,s as M,c as O,r as j,h as z,a as I,b as k}from"./toolsShell-2BzgwcjH.js";import{m as A}from"./hubShell-Byx82bhe.js";const h="s3phy.mechanics.tool",d=[{id:"positionMovement",titleKey:"topic.positionMovement",fileEn:"position-movement-en.pdf",fileZh:"position-movement-zhHant.pdf"},{id:"motionGraph",titleKey:"topic.motionGraph",fileEn:"motion-graph-en.pdf",fileZh:"motion-graph-zhHant.pdf"},{id:"equationOfMotion",titleKey:"topic.equationOfMotion",fileEn:"equation-of-motion-en.pdf",fileZh:"equation-of-motion-zhHant.pdf"},{id:"verticalMotion",titleKey:"topic.verticalMotion",fileEn:"vertical-motion-en.pdf",fileZh:"vertical-motion-zhHant.pdf"},{id:"projectileMotion",titleKey:"topic.projectileMotion",fileEn:"projectile-motion-en.pdf",fileZh:"projectile-motion-zhHant.pdf",tool:"projectileMotion"},{id:"force",titleKey:"topic.force",fileEn:"force-en.pdf",fileZh:"force-zhHant.pdf"},{id:"moment",titleKey:"topic.moment",fileEn:"moment-en.pdf",fileZh:"moment-zhHant.pdf"},{id:"workEnergyPower",titleKey:"topic.workEnergyPower",fileEn:"work-energy-power-en.pdf",fileZh:"work-energy-power-zhHant.pdf"},{id:"momentum",titleKey:"topic.momentum",fileEn:"momentum-en.pdf",fileZh:"momentum-zhHant.pdf"},{id:"circularMotion",titleKey:"topic.circularMotion",fileEn:"circular-motion-en.pdf",fileZh:"circular-motion-zhHant.pdf"},{id:"gravitationalForce",titleKey:"topic.gravitationalForce",fileEn:"gravitational-force-en.pdf",fileZh:"gravitational-force-zhHant.pdf"}],K={positionMovement:"position-movement",motionGraph:"motion-graph",equationOfMotion:"equation-of-motion",verticalMotion:"vertical-motion",projectileMotion:"projectile-motion",force:"force",moment:"moment",workEnergyPower:"work-energy-power",momentum:"momentum",circularMotion:"circular-motion",gravitationalForce:"gravitational-force"},Z=d.map(i=>{const o=K[i.id];return{key:i.id,type:"image",fileEn:`${o}-en.webp`,fileZh:`${o}-zhHant.webp`}}),y=["vectorTool","projectileMotion"],C={vectorTool:()=>g(()=>import("./vectorToolLab-SAkJXFRc.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(i=>i.createVectorToolLab),projectileMotion:()=>g(()=>import("./projectileMotionLab-DJTXB67T.js"),__vite__mapDeps([4,1,2,3]),import.meta.url).then(i=>i.createProjectileMotionLab)};function T(i){return e({vectorTool:"tools.vectorTool.title",projectileMotion:"tools.projectileMotion.title"}[i]||i)}function N(i){let o=sessionStorage.getItem("s3phy.mechanics.section")||"topics",c=_(h,y,"projectileMotion"),n=null,s={main:null},p=null;function f(){O(p),p=null}async function b(t){t.innerHTML="",f();const a=C[c];if(!a)return;const l=(await a())(e);p=l,t.appendChild(l)}function r(){s.main&&(o==="topics"?s.main.innerHTML=S():o==="notes"?s.main.innerHTML=$():o==="tools"?(s.main.innerHTML=j({toolOrder:y,toolId:c,getLabel:T,t:e}),z(i,{getLabel:T,t:e,getActiveToolId:()=>c,onSelectTool:t=>{c=t,M(h,c)},mountTool:t=>{b(t)}})):o==="worksheets"?s.main.innerHTML=`
        <section class="panel">
          <h2>${e("worksheets.practiceTitle")}</h2>
          <p class="lead">${e("worksheets.comingSoon")}</p>
        </section>
      `:o==="quiz"?s.main.innerHTML=`
        <section class="panel">
          <h2>${e("quiz.practiceTitle")}</h2>
          <p class="lead">${e("quiz.comingSoon")}</p>
        </section>
      `:o==="flashcards"?s.main.innerHTML=`
        <section class="panel">
          <h2>${e("flashcards.title")}</h2>
          <p class="lead">${e("flashcards.comingSoon")}</p>
        </section>
      `:o==="summary"&&(s.main.innerHTML=w()),o==="notes"&&L(),o==="summary"&&H())}function u(){n==null||n.refreshLabels(),r()}function E(){n==null||n.destroy(),n=A(i,{subtitleKey:"strand.mechanics.subtitle",activeSection:o,onSection:t=>{o==="tools"&&t!=="tools"&&f(),o=t,sessionStorage.setItem("s3phy.mechanics.section",t),n.updateSection(o),r()},onLang:u}),s.main=n.main,n.updateSection(o),r()}function S(){return`
      <section class="panel panel--topic-hub">
        <h2>${e("topics.title")}</h2>
        <p class="lead">${e("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${d.map(t=>{const a=t.tool?`<button class="btn primary" type="button" data-go-tool="${t.tool}">${e("topic.openTool")}</button>`:`<button class="btn primary" type="button" data-go-section="notes">${e("topic.viewNotes")}</button>`;return`
            <div class="card">
              <h3>${e(t.titleKey)}</h3>
              ${a}
            </div>`}).join("")}
        </div>
      </section>`}function v(t){const a=t.target.closest("[data-go-tool]");if(a){const l=a.getAttribute("data-go-tool");y.includes(l)&&(c=l,M(h,c)),o="tools",sessionStorage.setItem("s3phy.mechanics.section","tools"),n.updateSection(o),r();return}const m=t.target.closest("[data-go-section]");(m==null?void 0:m.getAttribute("data-go-section"))==="notes"&&(o="notes",sessionStorage.setItem("s3phy.mechanics.section","notes"),n.updateSection(o),r())}function $(){return`
      <section class="panel">
        <h2>${e("notes.title")}</h2>
        <p class="lead">${e("notes.intro")}</p>
        <p class="lead">${e("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${d.map(t=>`
            <div class="card" data-note-card="${t.id}">
              <h3>${e(`notes.card.${t.id}`)}</h3>
              <div data-note-body></div>
            </div>
          `).join("")}
        </div>
      </section>`}async function L(){const t=d.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await I(i,t)}function w(){return`
      <section class="panel">
        <h2>${e("summary.title")}</h2>
        <p class="lead">${e("summary.intro")}</p>
        <p class="lead">${e("notes.embedHint")}</p>
        <div class="grid cols-4" data-summary-grid>
          ${d.map(t=>`
            <div class="card" data-summary-card="${t.id}">
              <h3>${e(`summary.item.${t.id}`)}</h3>
              <div data-summary-body></div>
            </div>
          `).join("")}
        </div>
      </section>`}async function H(){await k(i,Z)}return window.addEventListener("s3phy:lang",u),i.addEventListener("click",v),E(),()=>{window.removeEventListener("s3phy:lang",u),i.removeEventListener("click",v),f(),n==null||n.destroy()}}export{N as mountMechanicsHub};
