const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./waveMotionLab-C8iwZvaA.js","./createLabIframe-BqrlZoQU.js","./index-Cqbdhjve.js","./index-D16P_DNl.css","./longitudinalWaveLab-C85psKm2.js","./waveInterferenceLab-CNM4C-HH.js","./thinFilmInterferenceLab-DoDxBqCy.js","./ultrasoundReflectionLab-CfR3_J7J.js","./soundRefractionShadowLab-C0fm55u8.js"])))=>i.map(i=>d[i]);
import{t as n,_ as s}from"./index-Cqbdhjve.js";import{m as E}from"./hubShell-CfDHxNaz.js";import{h as S,c as T}from"./hubHelpers-Bj38gKAG.js";import{r as R,h as $}from"./toolsShell-C-Th6Ujm.js";const m=[{id:"waveMotion",titleKey:"topic.waveMotion",fileEn:"wave-motion-en.pdf",fileZh:"wave-motion-zhHant.pdf",tool:"waveMotion"},{id:"waveProperties",titleKey:"topic.waveProperties",fileEn:"wave-properties-en.pdf",fileZh:"wave-properties-zhHant.pdf",tool:"waveInterference"},{id:"stationaryWave",titleKey:"topic.stationaryWave",fileEn:"stationary-wave-en.pdf",fileZh:"stationary-wave-zhHant.pdf"},{id:"lightWave",titleKey:"topic.lightWave",fileEn:"light-wave-en.pdf",fileZh:"light-wave-zhHant.pdf",tool:"thinFilmInterference"},{id:"soundWave",titleKey:"topic.soundWave",fileEn:"sound-wave-en.pdf",fileZh:"sound-wave-zhHant.pdf",tool:"ultrasoundReflection"}],w=["waveMotion","longitudinalWave","waveInterference","thinFilmInterference","ultrasoundReflection","soundRefractionShadow"],M={waveMotion:()=>s(()=>import("./waveMotionLab-C8iwZvaA.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.createWaveMotionLab),longitudinalWave:()=>s(()=>import("./longitudinalWaveLab-C85psKm2.js"),__vite__mapDeps([4,1,2,3]),import.meta.url).then(t=>t.createLongitudinalWaveLab),waveInterference:()=>s(()=>import("./waveInterferenceLab-CNM4C-HH.js"),__vite__mapDeps([5,1,2,3]),import.meta.url).then(t=>t.createWaveInterferenceLab),thinFilmInterference:()=>s(()=>import("./thinFilmInterferenceLab-DoDxBqCy.js"),__vite__mapDeps([6,1,2,3]),import.meta.url).then(t=>t.createThinFilmInterferenceLab),ultrasoundReflection:()=>s(()=>import("./ultrasoundReflectionLab-CfR3_J7J.js"),__vite__mapDeps([7,1,2,3]),import.meta.url).then(t=>t.createUltrasoundReflectionLab),soundRefractionShadow:()=>s(()=>import("./soundRefractionShadowLab-C0fm55u8.js"),__vite__mapDeps([8,1,2,3]),import.meta.url).then(t=>t.createSoundRefractionShadowLab)};function g(t){return n({waveMotion:"tools.waveMotion.title",longitudinalWave:"tools.longitudinalWave.title",waveInterference:"tools.waveInterference.title",thinFilmInterference:"tools.thinFilmInterference.title",ultrasoundReflection:"tools.ultrasoundReflection.title",soundRefractionShadow:"tools.soundRefractionShadow.title"}[t]||t)}function P(t){let i=sessionStorage.getItem("s3phy.waves.section")||"topics",l="waveMotion",o=null,r={main:null},p=null;function v(){T(p),p=null}async function b(e){e.innerHTML="",v();const a=M[l];if(!a)return;const d=(await a())(n);p=d,e.appendChild(d)}function c(){r.main&&(i==="topics"?r.main.innerHTML=y():i==="notes"?(r.main.innerHTML=L(),I()):i==="tools"?(r.main.innerHTML=R({toolOrder:w,toolId:l,getLabel:g,t:n}),$(t,{getLabel:g,t:n,getActiveToolId:()=>l,onSelectTool:e=>{l=e},mountTool:e=>{b(e)}})):r.main.innerHTML=`
        <section class="panel">
          <h2>${n(`nav.${i}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${n("waves.comingSoon")}</p>
          </div>
        </section>
      `)}function f(){o==null||o.refreshLabels(),c()}function _(){o==null||o.destroy(),o=E(t,{subtitleKey:"strand.waves.subtitle",activeSection:i,onSection:e=>{i==="tools"&&e!=="tools"&&v(),i=e,sessionStorage.setItem("s3phy.waves.section",e),o.updateSection(i),c()},onLang:f}),r.main=o.main,o.updateSection(i),c()}function y(){return`
      <section class="panel panel--topic-hub">
        <h2>${n("topics.title")}</h2>
        <p class="lead">${n("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${m.map(e=>{const a=e.tool?`<button class="btn primary" type="button" data-go-tool="${e.tool}">${n("topic.openTool")}</button>`:`<button class="btn primary" type="button" disabled>${n("topic.openTool")}</button>`;return`
            <div class="card">
              <h3>${n(e.titleKey)}</h3>
              ${a}
            </div>`}).join("")}
        </div>
      </section>
    `}function L(){return`
      <section class="panel">
        <h2>${n("notes.title")}</h2>
        <p class="lead">${n("notes.intro")}</p>
        <p class="lead">${n("notes.embedHint")}</p>
        <div class="grid cols-3" data-notes-grid>
          ${m.map(e=>`
            <div class="card" data-note-card="${e.id}">
              <h3>${n(`notes.card.${e.id}`)}</h3>
              <div data-note-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function I(){const e=m.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await S(t,e)}function h(e){const a=e.target.closest("[data-go-tool]");if(a){const d=a.getAttribute("data-go-tool");w.includes(d)&&(l=d),i="tools",sessionStorage.setItem("s3phy.waves.section","tools"),o.updateSection(i),c();return}const u=e.target.closest("[data-go-section]");(u==null?void 0:u.getAttribute("data-go-section"))==="notes"&&(i="notes",sessionStorage.setItem("s3phy.waves.section","notes"),o.updateSection(i),c())}return t.addEventListener("click",h),window.addEventListener("s3phy:lang",f),_(),()=>{t.removeEventListener("click",h),window.removeEventListener("s3phy:lang",f),v(),o==null||o.destroy()}}export{P as mountWavesHub};
