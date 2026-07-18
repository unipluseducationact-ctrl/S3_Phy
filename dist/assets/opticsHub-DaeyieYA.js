const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./opticsLightLensWorksheet-BqvrX3Zm.js","./index-CYuwRdqn.js","./index-DUBb6UJf.css","./opticsCh4EmWorksheet-Cc_iZqh3.js","./rotatingMirrorLab-KUFtJPNa.js","./createLabIframe-B9kfZR6M.js","./planeMirrorLab-DIVxgS-j.js","./refractionLab-BgQh4kYU.js","./tirEscapeLab-CAR5D0Bd.js","./lensLab-DSvl0gUk.js","./rgbColorMixerLab-CXSPF-tS.js","./emLab-CLA4DaQc.js","./opticsCh3Quiz-TJIgexNh.js"])))=>i.map(i=>d[i]);
import{t as i,_ as p,g as P}from"./index-CYuwRdqn.js";import{c as K,h as Z,a as V}from"./hubHelpers-4eFggBU0.js";import{m as W}from"./hubShell-CxE4ZStM.js";import{r as N,m as q,h as j,b as Q}from"./flashcardDeck-s9iBE9UN.js";const U=["rotatingMirror","planeMirrorLab","refraction","refractionTir","lens","rgbMixer","em"],Y=["lightLens","emWave"],B="20260627-em-v2",E=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],k=[{key:"reflection",type:"image",fileEn:"reflection-en.webp",fileZh:"reflection-zhHant.webp"},{key:"refraction",type:"image",fileEn:"refraction-en.webp",fileZh:"refraction-zhHant.webp"},{key:"tir",type:"image",fileEn:"tir-en.webp",fileZh:"tir-zhHant.webp"},{key:"convex",type:"image",fileEn:"convex-en.webp",fileZh:"convex-zhHant.webp"},{key:"concave",type:"image",fileEn:"concave-en.webp",fileZh:"concave-zhHant.webp"},{key:"em",type:"image",fileEn:"em-en.webp",fileZh:"em-zhHant.webp"}],T={lightLens:()=>p(()=>import("./opticsLightLensWorksheet-BqvrX3Zm.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.createOpticsLightLensWorksheet),emWave:()=>p(()=>import("./opticsCh4EmWorksheet-Cc_iZqh3.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(t=>t.createOpticsCh4EmWorksheet)},G={rotatingMirror:()=>p(()=>import("./rotatingMirrorLab-KUFtJPNa.js"),__vite__mapDeps([4,5,1,2]),import.meta.url).then(t=>t.createRotatingMirrorLab),planeMirrorLab:()=>p(()=>import("./planeMirrorLab-DIVxgS-j.js"),__vite__mapDeps([6,5,1,2]),import.meta.url).then(t=>t.createPlaneMirrorLab),refraction:()=>p(()=>import("./refractionLab-BgQh4kYU.js"),__vite__mapDeps([7,5,1,2]),import.meta.url).then(t=>t.createRefractionLab),refractionTir:()=>p(()=>import("./tirEscapeLab-CAR5D0Bd.js"),__vite__mapDeps([8,5,1,2]),import.meta.url).then(t=>t.createTirEscapeLab),lens:()=>p(()=>import("./lensLab-DSvl0gUk.js"),__vite__mapDeps([9,5,1,2]),import.meta.url).then(t=>t.createLensLab),rgbMixer:()=>p(()=>import("./rgbColorMixerLab-CXSPF-tS.js"),__vite__mapDeps([10,5,1,2]),import.meta.url).then(t=>t.createRgbColorMixerLab),em:()=>p(()=>import("./emLab-CLA4DaQc.js"),__vite__mapDeps([11,5,1,2]),import.meta.url).then(t=>t.createEmLab)};function w(t){return i({rotatingMirror:"tools.rotatingMirror.title",planeMirrorLab:"tools.planeMirror.title",refraction:"tools.refraction.title",refractionTir:"tools.refractionTir.title",lens:"tools.lens.title",rgbMixer:"tools.rgbMixer.title",em:"tools.em.title"}[t]||t)}function J(t){return i({lightLens:"worksheets.opticsLightLensTitle",emWave:"worksheets.opticsEmWaveTitle"}[t]||t)}function ne(t){let o=sessionStorage.getItem("s3phy.optics.section")||"topics",d="rotatingMirror",v="lightLens",_="convex",a=null,s={main:null},h=null,m=null,c=null;const O=[{value:"all",labelKey:"flashcards.all"},{value:"reflection",labelKey:"topic.reflection"},{value:"refractionTir",labelKey:"flashcards.deck.refractionTir"},{value:"convex",labelKey:"topic.convex"},{value:"concave",labelKey:"topic.concave"},{value:"em",labelKey:"topic.em"}];function b(){K(h),h=null}async function S(e){e.innerHTML="",b();const n=G[d];if(!n)return;const l=await n(),r=d==="lens"?l(i,{defaultKind:_}):l(i);h=r,e.appendChild(r)}async function M(e){if(!e)return;c==null||c(),c=null,e.innerHTML="";const n=T[v];if(!n)return;const r=(await n())(i);e.appendChild(r),c=r._opticsLightLensWorksheetCleanup||r._opticsCh4EmWorksheetCleanup||null}async function $(e){const{createOpticsCh3Quiz:n}=await p(async()=>{const{createOpticsCh3Quiz:r}=await import("./opticsCh3Quiz-TJIgexNh.js");return{createOpticsCh3Quiz:r}},__vite__mapDeps([12,1,2]),import.meta.url),l=n(i);e.appendChild(l),c=l._opticsCh3QuizCleanup||null}function H(){const e=Y.map(n=>`<button type="button" data-worksheet="${n}" class="${v===n?"active":""}">${J(n)}</button>`).join("");return`
      <section class="panel panel--worksheets-embed">
        <div class="worksheet-picker">
          <p class="lead">${i("worksheets.pick")}</p>
          <div class="tool-list" data-worksheet-list>${e}</div>
        </div>
        <div class="worksheet-stage" data-worksheet-stage></div>
      </section>`}function f(){if(s.main){if(m==null||m(),m=null,c==null||c(),c=null,o==="topics")s.main.innerHTML=x();else if(o==="notes")s.main.innerHTML=A();else if(o==="tools")s.main.innerHTML=N({toolOrder:U,toolId:d,getLabel:w,t:i});else if(o==="worksheets")s.main.innerHTML=H(),M(s.main.querySelector("[data-worksheet-stage]"));else if(o==="quiz"){s.main.innerHTML='<section class="panel panel--quiz-embed"></section>';const e=s.main.querySelector(".panel--quiz-embed");$(e)}else o==="flashcards"?m=q(s.main,{deckOptions:O.map(e=>({value:e.value,label:i(e.labelKey)})),buildDeck:e=>Q(e,P())}):o==="summary"&&(s.main.innerHTML=z());o==="notes"&&C(),o==="tools"&&j(t,{getLabel:w,t:i,getActiveToolId:()=>d,onSelectTool:e=>{d=e},mountTool:e=>{S(e)}}),o==="summary"&&D()}}function y(){a==null||a.refreshLabels(),f()}function R(){a==null||a.destroy(),a=W(t,{subtitleKey:"strand.optics.subtitle",activeSection:o,onSection:e=>{o==="tools"&&e!=="tools"&&b(),o=e,sessionStorage.setItem("s3phy.optics.section",e),a.updateSection(o),f()},onLang:y}),s.main=a.main,a.updateSection(o),f()}function x(){const e=[["planeMirrorLab","topic.reflection"],["refraction","topic.refractionSnell"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${i("topics.title")}</h2>
        <p class="lead">${i("topics.intro")}</p>
        <div class="grid cols-3x2 topic-hub-grid">
          ${e.map(([n,l])=>{const r=n==="convex"||n==="concave"?"lens":n==="refraction"?"refraction":n==="tir"?"refractionTir":n==="em"?"em":n,u=n==="convex"?"convex":n==="concave"?"concave":"";return`
            <div class="card">
              <h3>${i(l)}</h3>
              <button class="btn primary" type="button" data-go-tool="${r}"${u?` data-lens-kind="${u}"`:""}>${i("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function I(e){const n=e.target.closest("[data-worksheet]");if(n&&o==="worksheets"){const u=n.getAttribute("data-worksheet");u&&u!==v&&T[u]&&(v=u,f());return}const l=e.target.closest("[data-go-tool]");if(!l)return;o="tools",sessionStorage.setItem("s3phy.optics.section","tools"),d=l.getAttribute("data-go-tool");const r=l.getAttribute("data-lens-kind");(r==="convex"||r==="concave")&&(_=r),a.updateSection(o),f()}function A(){return`
      <section class="panel">
        <h2>${i("notes.title")}</h2>
        <p class="lead">${i("notes.intro")}</p>
        <p class="lead">${i("notes.embedHint")}</p>
        <div class="grid cols-3x2" data-notes-grid>
          ${E.map(e=>{const n=i(`notes.card.${e.key}`);return`
            <div class="card" data-note-card="${e.key}">
              <h3>${n}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function C(){await Z(t,E)}function z(){return`
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
      </section>`}async function D(){await V(t,k,{version:B})}const L=y,g=e=>I(e);return window.addEventListener("s3phy:lang",L),t.addEventListener("click",g),R(),()=>{window.removeEventListener("s3phy:lang",L),t.removeEventListener("click",g),m==null||m(),c==null||c(),b(),a==null||a.destroy()}}export{ne as mountOpticsHub};
