const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./opticsLightLensWorksheet-D_P-nE73.js","./index-Bez-aKBG.js","./index-DW_w-y7s.css","./opticsCh4EmWorksheet-B-KVWVt2.js","./planeMirrorLab-CyZlN-ER.js","./tirEscapeLab-BfRI3ESS.js","./lensLab-By9jEftf.js","./emLab-Gb0tkgM7.js","./opticsCh3Quiz-DNEngX_q.js"])))=>i.map(i=>d[i]);
import{t as i,_ as p,g as P}from"./index-Bez-aKBG.js";import{m as K,c as Z,r as V,a as W,h as N,b as q,d as j,e as Q}from"./flashcardDeck-BVrXeIly.js";const U=["rotatingMirror","planeMirrorLab","refractionTir","lens","rgbMixer","em"],Y=["lightLens","emWave"],B="20260627-em-v2",g=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],k=[{key:"reflection",type:"image",fileEn:"reflection-en.webp",fileZh:"reflection-zhHant.webp"},{key:"refraction",type:"image",fileEn:"refraction-en.webp",fileZh:"refraction-zhHant.webp"},{key:"tir",type:"image",fileEn:"tir-en.webp",fileZh:"tir-zhHant.webp"},{key:"convex",type:"image",fileEn:"convex-en.webp",fileZh:"convex-zhHant.webp"},{key:"concave",type:"image",fileEn:"concave-en.webp",fileZh:"concave-zhHant.webp"},{key:"em",type:"image",fileEn:"em-en.webp",fileZh:"em-zhHant.webp"}],T={lightLens:()=>p(()=>import("./opticsLightLensWorksheet-D_P-nE73.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.createOpticsLightLensWorksheet),emWave:()=>p(()=>import("./opticsCh4EmWorksheet-B-KVWVt2.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(t=>t.createOpticsCh4EmWorksheet)},G={rotatingMirror:()=>p(()=>import("./rotatingMirrorLab-DSNus32N.js"),[],import.meta.url).then(t=>t.createRotatingMirrorLab),planeMirrorLab:()=>p(()=>import("./planeMirrorLab-CyZlN-ER.js"),__vite__mapDeps([4,1,2]),import.meta.url).then(t=>t.createPlaneMirrorLab),refractionTir:()=>p(()=>import("./tirEscapeLab-BfRI3ESS.js"),__vite__mapDeps([5,1,2]),import.meta.url).then(t=>t.createTirEscapeLab),lens:()=>p(()=>import("./lensLab-By9jEftf.js"),__vite__mapDeps([6,1,2]),import.meta.url).then(t=>t.createLensLab),rgbMixer:()=>p(()=>import("./rgbColorMixerLab-C0qCJ8Ey.js"),[],import.meta.url).then(t=>t.createRgbColorMixerLab),em:()=>p(()=>import("./emLab-Gb0tkgM7.js"),__vite__mapDeps([7,1,2]),import.meta.url).then(t=>t.createEmLab)};function w(t){return i({rotatingMirror:"tools.rotatingMirror.title",planeMirrorLab:"tools.planeMirror.title",refractionTir:"tools.refractionTir.title",lens:"tools.lens.title",rgbMixer:"tools.rgbMixer.title",em:"tools.em.title"}[t]||t)}function J(t){return i({lightLens:"worksheets.opticsLightLensTitle",emWave:"worksheets.opticsEmWaveTitle"}[t]||t)}function ee(t){let o="topics",m="rotatingMirror",v="lightLens",_="convex",a=null,s={main:null},h=null,d=null,l=null;const O=[{value:"all",labelKey:"flashcards.all"},{value:"reflection",labelKey:"topic.reflection"},{value:"refractionTir",labelKey:"flashcards.deck.refractionTir"},{value:"convex",labelKey:"topic.convex"},{value:"concave",labelKey:"topic.concave"},{value:"em",labelKey:"topic.em"}];function b(){Z(h),h=null}async function S(e){e.innerHTML="",b();const n=G[m];if(!n)return;const c=await n(),r=m==="lens"?c(i,{defaultKind:_}):c(i);h=r,e.appendChild(r)}async function M(e){if(!e)return;l==null||l(),l=null,e.innerHTML="";const n=T[v];if(!n)return;const r=(await n())(i);e.appendChild(r),l=r._opticsLightLensWorksheetCleanup||r._opticsCh4EmWorksheetCleanup||null}async function $(e){const{createOpticsCh3Quiz:n}=await p(async()=>{const{createOpticsCh3Quiz:r}=await import("./opticsCh3Quiz-DNEngX_q.js");return{createOpticsCh3Quiz:r}},__vite__mapDeps([8,1,2]),import.meta.url),c=n(i);e.appendChild(c),l=c._opticsCh3QuizCleanup||null}function H(){const e=Y.map(n=>`<button type="button" data-worksheet="${n}" class="${v===n?"active":""}">${J(n)}</button>`).join("");return`
      <section class="panel panel--worksheets-embed">
        <div class="worksheet-picker">
          <p class="lead">${i("worksheets.pick")}</p>
          <div class="tool-list" data-worksheet-list>${e}</div>
        </div>
        <div class="worksheet-stage" data-worksheet-stage></div>
      </section>`}function f(){if(s.main){if(d==null||d(),d=null,l==null||l(),l=null,o==="topics")s.main.innerHTML=R();else if(o==="notes")s.main.innerHTML=C();else if(o==="tools")s.main.innerHTML=V({toolOrder:U,toolId:m,getLabel:w,t:i});else if(o==="worksheets")s.main.innerHTML=H(),M(s.main.querySelector("[data-worksheet-stage]"));else if(o==="quiz"){s.main.innerHTML='<section class="panel panel--quiz-embed"></section>';const e=s.main.querySelector(".panel--quiz-embed");$(e)}else o==="flashcards"?d=W(s.main,{deckOptions:O.map(e=>({value:e.value,label:i(e.labelKey)})),buildDeck:e=>Q(e,P())}):o==="summary"&&(s.main.innerHTML=I());o==="notes"&&z(),o==="tools"&&N(t,{getLabel:w,t:i,getActiveToolId:()=>m,onSelectTool:e=>{m=e},mountTool:e=>{S(e)}}),o==="summary"&&D()}}function L(){a==null||a.refreshLabels(),f()}function x(){a==null||a.destroy(),a=K(t,{subtitleKey:"strand.optics.subtitle",activeSection:o,onSection:e=>{o==="tools"&&e!=="tools"&&b(),o=e,a.updateSection(o),f()},onLang:L}),s.main=a.main,a.updateSection(o),f()}function R(){const e=[["planeMirrorLab","topic.reflection"],["refraction","topic.refractionSnell"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${i("topics.title")}</h2>
        <p class="lead">${i("topics.intro")}</p>
        <div class="grid cols-3x2 topic-hub-grid">
          ${e.map(([n,c])=>{const r=n==="convex"||n==="concave"?"lens":n==="refraction"||n==="tir"?"refractionTir":n==="em"?"em":n,u=n==="convex"?"convex":n==="concave"?"concave":"";return`
            <div class="card">
              <h3>${i(c)}</h3>
              <button class="btn primary" type="button" data-go-tool="${r}"${u?` data-lens-kind="${u}"`:""}>${i("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function A(e){const n=e.target.closest("[data-worksheet]");if(n&&o==="worksheets"){const u=n.getAttribute("data-worksheet");u&&u!==v&&T[u]&&(v=u,f());return}const c=e.target.closest("[data-go-tool]");if(!c)return;o="tools",m=c.getAttribute("data-go-tool");const r=c.getAttribute("data-lens-kind");(r==="convex"||r==="concave")&&(_=r),a.updateSection(o),f()}function C(){return`
      <section class="panel">
        <h2>${i("notes.title")}</h2>
        <p class="lead">${i("notes.intro")}</p>
        <p class="lead">${i("notes.embedHint")}</p>
        <div class="grid cols-3x2" data-notes-grid>
          ${g.map(e=>{const n=i(`notes.card.${e.key}`);return`
            <div class="card" data-note-card="${e.key}">
              <h3>${n}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function z(){await q(t,g)}function I(){return`
      <section class="panel">
        <h2>${i("summary.title")}</h2>
        <p class="lead">${i("summary.intro")}</p>
        <p class="lead">${i("notes.embedHint")}</p>
        <div class="grid cols-3x2" data-summary-grid>
          ${k.map(e=>{const n=i(`summary.item.${e.key}`);return`
            <div class="card" data-summary-card="${e.key}">
              <h3>${n}</h3>
              <div data-summary-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function D(){await j(t,k,{version:B})}const y=L,E=e=>A(e);return window.addEventListener("s3phy:lang",y),t.addEventListener("click",E),x(),()=>{window.removeEventListener("s3phy:lang",y),t.removeEventListener("click",E),d==null||d(),l==null||l(),b(),a==null||a.destroy()}}export{ee as mountOpticsHub};
