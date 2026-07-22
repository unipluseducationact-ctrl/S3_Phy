const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./projectileMotionLab-DDB6PFJj.js","./createLabIframe-DvnJOVCR.js","./index-BA6P-BC5.js","./index-D16P_DNl.css"])))=>i.map(i=>d[i]);
import{t as e,_ as H}from"./index-BA6P-BC5.js";import{l as O,s as g,c as _,r as j,h as z,a as k,b as I}from"./toolsShell-yAniuhfv.js";import{m as K}from"./hubShell-B8vEe4v5.js";const h="s3phy.mechanics.tool",d=[{id:"positionMovement",titleKey:"topic.positionMovement",fileEn:"position-movement-en.pdf",fileZh:"position-movement-zhHant.pdf"},{id:"motionGraph",titleKey:"topic.motionGraph",fileEn:"motion-graph-en.pdf",fileZh:"motion-graph-zhHant.pdf"},{id:"equationOfMotion",titleKey:"topic.equationOfMotion",fileEn:"equation-of-motion-en.pdf",fileZh:"equation-of-motion-zhHant.pdf"},{id:"verticalMotion",titleKey:"topic.verticalMotion",fileEn:"vertical-motion-en.pdf",fileZh:"vertical-motion-zhHant.pdf"},{id:"projectileMotion",titleKey:"topic.projectileMotion",fileEn:"projectile-motion-en.pdf",fileZh:"projectile-motion-zhHant.pdf",tool:"projectileMotion"},{id:"force",titleKey:"topic.force",fileEn:"force-en.pdf",fileZh:"force-zhHant.pdf"},{id:"moment",titleKey:"topic.moment",fileEn:"moment-en.pdf",fileZh:"moment-zhHant.pdf"},{id:"workEnergyPower",titleKey:"topic.workEnergyPower",fileEn:"work-energy-power-en.pdf",fileZh:"work-energy-power-zhHant.pdf"},{id:"momentum",titleKey:"topic.momentum",fileEn:"momentum-en.pdf",fileZh:"momentum-zhHant.pdf"},{id:"circularMotion",titleKey:"topic.circularMotion",fileEn:"circular-motion-en.pdf",fileZh:"circular-motion-zhHant.pdf"},{id:"gravitationalForce",titleKey:"topic.gravitationalForce",fileEn:"gravitational-force-en.pdf",fileZh:"gravitational-force-zhHant.pdf"}],Z={positionMovement:"position-movement",motionGraph:"motion-graph",equationOfMotion:"equation-of-motion",verticalMotion:"vertical-motion",projectileMotion:"projectile-motion",force:"force",moment:"moment",workEnergyPower:"work-energy-power",momentum:"momentum",circularMotion:"circular-motion",gravitationalForce:"gravitational-force"},A=d.map(n=>{const o=Z[n.id];return{key:n.id,type:"image",fileEn:`${o}-en.webp`,fileZh:`${o}-zhHant.webp`}}),y=["projectileMotion"],C={projectileMotion:()=>H(()=>import("./projectileMotionLab-DDB6PFJj.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(n=>n.createProjectileMotionLab)};function M(n){return e({projectileMotion:"tools.projectileMotion.title"}[n]||n)}function N(n){let o=sessionStorage.getItem("s3phy.mechanics.section")||"topics",c=O(h,y,"projectileMotion"),i=null,s={main:null},p=null;function f(){_(p),p=null}async function b(t){t.innerHTML="",f();const a=C[c];if(!a)return;const l=(await a())(e);p=l,t.appendChild(l)}function r(){s.main&&(o==="topics"?s.main.innerHTML=S():o==="notes"?s.main.innerHTML=$():o==="tools"?(s.main.innerHTML=j({toolOrder:y,toolId:c,getLabel:M,t:e}),z(n,{getLabel:M,t:e,getActiveToolId:()=>c,onSelectTool:t=>{c=t,g(h,c)},mountTool:t=>{b(t)}})):o==="worksheets"?s.main.innerHTML=`
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
      `:o==="summary"&&(s.main.innerHTML=L()),o==="notes"&&T(),o==="summary"&&w())}function u(){i==null||i.refreshLabels(),r()}function E(){i==null||i.destroy(),i=K(n,{subtitleKey:"strand.mechanics.subtitle",activeSection:o,onSection:t=>{o==="tools"&&t!=="tools"&&f(),o=t,sessionStorage.setItem("s3phy.mechanics.section",t),i.updateSection(o),r()},onLang:u}),s.main=i.main,i.updateSection(o),r()}function S(){return`
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
      </section>`}function v(t){const a=t.target.closest("[data-go-tool]");if(a){const l=a.getAttribute("data-go-tool");y.includes(l)&&(c=l,g(h,c)),o="tools",sessionStorage.setItem("s3phy.mechanics.section","tools"),i.updateSection(o),r();return}const m=t.target.closest("[data-go-section]");(m==null?void 0:m.getAttribute("data-go-section"))==="notes"&&(o="notes",sessionStorage.setItem("s3phy.mechanics.section","notes"),i.updateSection(o),r())}function $(){return`
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
      </section>`}async function T(){const t=d.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await k(n,t)}function L(){return`
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
      </section>`}async function w(){await I(n,A)}return window.addEventListener("s3phy:lang",u),n.addEventListener("click",v),E(),()=>{window.removeEventListener("s3phy:lang",u),n.removeEventListener("click",v),f(),i==null||i.destroy()}}export{N as mountMechanicsHub};
