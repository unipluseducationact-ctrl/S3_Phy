const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./opticsLightLensWorksheet-BBu9QkA9.js","./index-CjISFCpI.js","./index-D16P_DNl.css","./refractionLab-17-jnwL-.js","./createLabIframe-DH_1jPXM.js","./tirEscapeLab-COx1efsT.js","./mirageLab-BH-I2RPB.js"])))=>i.map(i=>d[i]);
import{t as n,_ as f,g as P}from"./index-CjISFCpI.js";import{l as V,m as j,c as z,s as T,h as Z,a as W}from"./hubShell-0QQx37Iq.js";import{r as Y,h as U}from"./toolsShell-C-Th6Ujm.js";import{m as q,b as x}from"./flashcardDeck-C_EQoDxe.js";const _=["refraction","refractionTir","mirage"],g="s3phy.refraction.tool",F=["lightLens"],G="20260627-em-v2",E=[{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"}],k=[{key:"refraction",type:"image",fileEn:"refraction-en.webp",fileZh:"refraction-zhHant.webp"},{key:"tir",type:"image",fileEn:"tir-en.webp",fileZh:"tir-zhHant.webp"}],S={lightLens:()=>f(()=>import("./opticsLightLensWorksheet-BBu9QkA9.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.createOpticsLightLensWorksheet)},B={refraction:()=>f(()=>import("./refractionLab-17-jnwL-.js"),__vite__mapDeps([3,4,1,2]),import.meta.url).then(e=>e.createRefractionLab),refractionTir:()=>f(()=>import("./tirEscapeLab-COx1efsT.js"),__vite__mapDeps([5,4,1,2]),import.meta.url).then(e=>e.createTirEscapeLab),mirage:()=>f(()=>import("./mirageLab-BH-I2RPB.js"),__vite__mapDeps([6,4,1,2]),import.meta.url).then(e=>e.createMirageLab)};function O(e){return n({refraction:"tools.refraction.title",refractionTir:"tools.refractionTir.title",mirage:"tools.mirage.title"}[e]||e)}function J(e){return n({lightLens:"worksheets.opticsLightLensTitle"}[e]||e)}function nt(e){let i=sessionStorage.getItem("s3phy.refraction.section")||"topics",d=V(g,_,"refraction"),p="lightLens",a=null,c={main:null},h=null,l=null,r=null;const w=[{value:"refractionTir",labelKey:"flashcards.deck.refractionTir"}];function v(){z(h),h=null}async function R(t){t.innerHTML="",v();const o=B[d];if(!o)return;const s=(await o())(n);h=s,t.appendChild(s)}async function $(t){if(!t)return;r==null||r(),r=null,t.innerHTML="";const o=S[p];if(!o)return;const s=(await o())(n);t.appendChild(s),r=s._opticsLightLensWorksheetCleanup||null}function A(){const t=F.map(o=>`<button type="button" data-worksheet="${o}" class="${p===o?"active":""}">${J(o)}</button>`).join("");return`
      <section class="panel panel--worksheets-embed">
        <div class="worksheet-picker">
          <p class="lead">${n("worksheets.pick")}</p>
          <div class="tool-list" data-worksheet-list>${t}</div>
        </div>
        <div class="worksheet-stage" data-worksheet-stage></div>
      </section>`}function m(){c.main&&(l==null||l(),l=null,r==null||r(),r=null,i==="topics"?c.main.innerHTML=H():i==="notes"?c.main.innerHTML=C():i==="tools"?c.main.innerHTML=Y({toolOrder:_,toolId:d,getLabel:O,t:n}):i==="worksheets"?(c.main.innerHTML=A(),$(c.main.querySelector("[data-worksheet-stage]"))):i==="flashcards"?l=q(c.main,{deckOptions:w.map(t=>({value:t.value,label:n(t.labelKey)})),buildDeck:t=>x(t,P())}):i==="summary"&&(c.main.innerHTML=N()),i==="notes"&&D(),i==="tools"&&U(e,{getLabel:O,t:n,getActiveToolId:()=>d,onSelectTool:t=>{d=t,T(g,d)},mountTool:t=>{R(t)}}),i==="summary"&&K())}function L(){a==null||a.refreshLabels(),m()}function I(){a==null||a.destroy(),a=j(e,{subtitleKey:"strand.refraction.subtitle",activeSection:i,onSection:t=>{i==="tools"&&t!=="tools"&&v(),i=t,sessionStorage.setItem("s3phy.refraction.section",t),a.updateSection(i),m()},onLang:L}),c.main=a.main,a.updateSection(i),m()}function H(){const t=[["refraction","topic.refractionSnell"],["refractionTir","topic.refractionTir"],["mirage","topic.mirage"]];return`
      <section class="panel panel--topic-hub">
        <h2>${n("topics.title")}</h2>
        <p class="lead">${n("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${t.map(([o,u])=>`
            <div class="card">
              <h3>${n(u)}</h3>
              <button class="btn primary" type="button" data-go-tool="${o}">${n("topic.openTool")}</button>
            </div>`).join("")}
        </div>
      </section>`}function M(t){const o=t.target.closest("[data-worksheet]");if(o&&i==="worksheets"){const s=o.getAttribute("data-worksheet");s&&s!==p&&S[s]&&(p=s,m());return}const u=t.target.closest("[data-go-tool]");u&&(i="tools",sessionStorage.setItem("s3phy.refraction.section","tools"),d=u.getAttribute("data-go-tool"),T(g,d),a.updateSection(i),m())}function C(){return`
      <section class="panel">
        <h2>${n("notes.title")}</h2>
        <p class="lead">${n("notes.intro")}</p>
        <p class="lead">${n("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${E.map(t=>{const o=n(`notes.card.${t.key}`);return`
            <div class="card" data-note-card="${t.key}">
              <h3>${o}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function D(){await Z(e,E)}function N(){return`
      <section class="panel">
        <h2>${n("summary.title")}</h2>
        <p class="lead">${n("summary.intro")}</p>
        <p class="lead">${n("notes.embedHint")}</p>
        <div class="grid cols-2" data-summary-grid>
          ${k.map(t=>{const o=n(`summary.item.${t.key}`);return`
            <div class="card" data-summary-card="${t.key}">
              <h3>${o}</h3>
              <div data-summary-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function K(){await W(e,k,{version:G})}const y=L,b=t=>M(t);return window.addEventListener("s3phy:lang",y),e.addEventListener("click",b),I(),()=>{window.removeEventListener("s3phy:lang",y),e.removeEventListener("click",b),l==null||l(),r==null||r(),v(),a==null||a.destroy()}}export{nt as mountRefractionHub};
