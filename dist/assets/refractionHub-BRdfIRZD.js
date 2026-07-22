const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./opticsLightLensWorksheet-D9HL4-0x.js","./index-Cqbdhjve.js","./index-D16P_DNl.css","./refractionLab-DqfpcHJT.js","./createLabIframe-BqrlZoQU.js","./tirEscapeLab-BT5NZ61N.js"])))=>i.map(i=>d[i]);
import{t as e,_ as v,g as D}from"./index-Cqbdhjve.js";import{c as N,h as K,a as P}from"./hubHelpers-Bj38gKAG.js";import{m as j}from"./hubShell-CfDHxNaz.js";import{r as z,h as V}from"./toolsShell-C-Th6Ujm.js";import{m as Z,b as W}from"./flashcardDeck--On-X7Vz.js";const U=["refraction","refractionTir"],Y=["lightLens"],q="20260627-em-v2",g=[{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"}],T=[{key:"refraction",type:"image",fileEn:"refraction-en.webp",fileZh:"refraction-zhHant.webp"},{key:"tir",type:"image",fileEn:"tir-en.webp",fileZh:"tir-zhHant.webp"}],k={lightLens:()=>v(()=>import("./opticsLightLensWorksheet-D9HL4-0x.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(i=>i.createOpticsLightLensWorksheet)},x={refraction:()=>v(()=>import("./refractionLab-DqfpcHJT.js"),__vite__mapDeps([3,4,1,2]),import.meta.url).then(i=>i.createRefractionLab),refractionTir:()=>v(()=>import("./tirEscapeLab-BT5NZ61N.js"),__vite__mapDeps([5,4,1,2]),import.meta.url).then(i=>i.createTirEscapeLab)};function S(i){return e({refraction:"tools.refraction.title",refractionTir:"tools.refractionTir.title"}[i]||i)}function F(i){return e({lightLens:"worksheets.opticsLightLensTitle"}[i]||i)}function tt(i){let n=sessionStorage.getItem("s3phy.refraction.section")||"topics",u="refraction",f="lightLens",a=null,c={main:null},m=null,l=null,r=null;const _=[{value:"refractionTir",labelKey:"flashcards.deck.refractionTir"}];function h(){N(m),m=null}async function E(t){t.innerHTML="",h();const o=x[u];if(!o)return;const s=(await o())(e);m=s,t.appendChild(s)}async function w(t){if(!t)return;r==null||r(),r=null,t.innerHTML="";const o=k[f];if(!o)return;const s=(await o())(e);t.appendChild(s),r=s._opticsLightLensWorksheetCleanup||null}function O(){const t=Y.map(o=>`<button type="button" data-worksheet="${o}" class="${f===o?"active":""}">${F(o)}</button>`).join("");return`
      <section class="panel panel--worksheets-embed">
        <div class="worksheet-picker">
          <p class="lead">${e("worksheets.pick")}</p>
          <div class="tool-list" data-worksheet-list>${t}</div>
        </div>
        <div class="worksheet-stage" data-worksheet-stage></div>
      </section>`}function p(){c.main&&(l==null||l(),l=null,r==null||r(),r=null,n==="topics"?c.main.innerHTML=R():n==="notes"?c.main.innerHTML=H():n==="tools"?c.main.innerHTML=z({toolOrder:U,toolId:u,getLabel:S,t:e}):n==="worksheets"?(c.main.innerHTML=O(),w(c.main.querySelector("[data-worksheet-stage]"))):n==="flashcards"?l=Z(c.main,{deckOptions:_.map(t=>({value:t.value,label:e(t.labelKey)})),buildDeck:t=>W(t,D())}):n==="summary"&&(c.main.innerHTML=M()),n==="notes"&&I(),n==="tools"&&V(i,{getLabel:S,t:e,getActiveToolId:()=>u,onSelectTool:t=>{u=t},mountTool:t=>{E(t)}}),n==="summary"&&C())}function y(){a==null||a.refreshLabels(),p()}function $(){a==null||a.destroy(),a=j(i,{subtitleKey:"strand.refraction.subtitle",activeSection:n,onSection:t=>{n==="tools"&&t!=="tools"&&h(),n=t,sessionStorage.setItem("s3phy.refraction.section",t),a.updateSection(n),p()},onLang:y}),c.main=a.main,a.updateSection(n),p()}function R(){const t=[["refraction","topic.refractionSnell"],["refractionTir","topic.refractionTir"]];return`
      <section class="panel panel--topic-hub">
        <h2>${e("topics.title")}</h2>
        <p class="lead">${e("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${t.map(([o,d])=>`
            <div class="card">
              <h3>${e(d)}</h3>
              <button class="btn primary" type="button" data-go-tool="${o}">${e("topic.openTool")}</button>
            </div>`).join("")}
        </div>
      </section>`}function A(t){const o=t.target.closest("[data-worksheet]");if(o&&n==="worksheets"){const s=o.getAttribute("data-worksheet");s&&s!==f&&k[s]&&(f=s,p());return}const d=t.target.closest("[data-go-tool]");d&&(n="tools",sessionStorage.setItem("s3phy.refraction.section","tools"),u=d.getAttribute("data-go-tool"),a.updateSection(n),p())}function H(){return`
      <section class="panel">
        <h2>${e("notes.title")}</h2>
        <p class="lead">${e("notes.intro")}</p>
        <p class="lead">${e("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${g.map(t=>{const o=e(`notes.card.${t.key}`);return`
            <div class="card" data-note-card="${t.key}">
              <h3>${o}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function I(){await K(i,g)}function M(){return`
      <section class="panel">
        <h2>${e("summary.title")}</h2>
        <p class="lead">${e("summary.intro")}</p>
        <p class="lead">${e("notes.embedHint")}</p>
        <div class="grid cols-2" data-summary-grid>
          ${T.map(t=>{const o=e(`summary.item.${t.key}`);return`
            <div class="card" data-summary-card="${t.key}">
              <h3>${o}</h3>
              <div data-summary-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function C(){await P(i,T,{version:q})}const b=y,L=t=>A(t);return window.addEventListener("s3phy:lang",b),i.addEventListener("click",L),$(),()=>{window.removeEventListener("s3phy:lang",b),i.removeEventListener("click",L),l==null||l(),r==null||r(),h(),a==null||a.destroy()}}export{tt as mountRefractionHub};
