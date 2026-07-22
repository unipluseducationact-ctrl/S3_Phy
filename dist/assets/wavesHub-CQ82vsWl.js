const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./waveMotionLab-CsB4Ut3G.js","./createLabIframe-Bjtwc5Q4.js","./index-BO13wmso.js","./index-D16P_DNl.css","./longitudinalWaveLab-D5lZ_bFM.js","./waveInterferenceLab-BEVA1G85.js","./thinFilmInterferenceLab-BrT_Ds3A.js","./soundRefractionShadowLab-BON_3C06.js"])))=>i.map(i=>d[i]);
import{t as n,_ as d}from"./index-BO13wmso.js";import{m as S}from"./hubShell-Bw3qmRXQ.js";import{h as E,c as T}from"./hubHelpers-DumcRL7N.js";import{r as $,h as M}from"./toolsShell-C-Th6Ujm.js";const m=[{id:"waveMotion",titleKey:"topic.waveMotion",fileEn:"wave-motion-en.pdf",fileZh:"wave-motion-zhHant.pdf",tool:"waveMotion"},{id:"waveProperties",titleKey:"topic.waveProperties",fileEn:"wave-properties-en.pdf",fileZh:"wave-properties-zhHant.pdf",tool:"waveInterference"},{id:"stationaryWave",titleKey:"topic.stationaryWave",fileEn:"stationary-wave-en.pdf",fileZh:"stationary-wave-zhHant.pdf"},{id:"lightWave",titleKey:"topic.lightWave",fileEn:"light-wave-en.pdf",fileZh:"light-wave-zhHant.pdf",tool:"thinFilmInterference"},{id:"soundWave",titleKey:"topic.soundWave",fileEn:"sound-wave-en.pdf",fileZh:"sound-wave-zhHant.pdf",tool:"soundRefractionShadow"}],w=["waveMotion","longitudinalWave","waveInterference","thinFilmInterference","soundRefractionShadow"],W={waveMotion:()=>d(()=>import("./waveMotionLab-CsB4Ut3G.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.createWaveMotionLab),longitudinalWave:()=>d(()=>import("./longitudinalWaveLab-D5lZ_bFM.js"),__vite__mapDeps([4,1,2,3]),import.meta.url).then(t=>t.createLongitudinalWaveLab),waveInterference:()=>d(()=>import("./waveInterferenceLab-BEVA1G85.js"),__vite__mapDeps([5,1,2,3]),import.meta.url).then(t=>t.createWaveInterferenceLab),thinFilmInterference:()=>d(()=>import("./thinFilmInterferenceLab-BrT_Ds3A.js"),__vite__mapDeps([6,1,2,3]),import.meta.url).then(t=>t.createThinFilmInterferenceLab),soundRefractionShadow:()=>d(()=>import("./soundRefractionShadowLab-BON_3C06.js"),__vite__mapDeps([7,1,2,3]),import.meta.url).then(t=>t.createSoundRefractionShadowLab)};function g(t){return n({waveMotion:"tools.waveMotion.title",longitudinalWave:"tools.longitudinalWave.title",waveInterference:"tools.waveInterference.title",thinFilmInterference:"tools.thinFilmInterference.title",soundRefractionShadow:"tools.soundRefractionShadow.title"}[t]||t)}function P(t){let i=sessionStorage.getItem("s3phy.waves.section")||"topics",s="waveMotion",o=null,r={main:null},v=null;function u(){T(v),v=null}async function b(e){e.innerHTML="",u();const a=W[s];if(!a)return;const c=(await a())(n);v=c,e.appendChild(c)}function l(){r.main&&(i==="topics"?r.main.innerHTML=L():i==="notes"?(r.main.innerHTML=_(),I()):i==="tools"?(r.main.innerHTML=$({toolOrder:w,toolId:s,getLabel:g,t:n}),M(t,{getLabel:g,t:n,getActiveToolId:()=>s,onSelectTool:e=>{s=e},mountTool:e=>{b(e)}})):r.main.innerHTML=`
        <section class="panel">
          <h2>${n(`nav.${i}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${n("waves.comingSoon")}</p>
          </div>
        </section>
      `)}function f(){o==null||o.refreshLabels(),l()}function y(){o==null||o.destroy(),o=S(t,{subtitleKey:"strand.waves.subtitle",activeSection:i,onSection:e=>{i==="tools"&&e!=="tools"&&u(),i=e,sessionStorage.setItem("s3phy.waves.section",e),o.updateSection(i),l()},onLang:f}),r.main=o.main,o.updateSection(i),l()}function L(){return`
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
    `}function _(){return`
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
      </section>`}async function I(){const e=m.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await E(t,e)}function h(e){const a=e.target.closest("[data-go-tool]");if(a){const c=a.getAttribute("data-go-tool");w.includes(c)&&(s=c),i="tools",sessionStorage.setItem("s3phy.waves.section","tools"),o.updateSection(i),l();return}const p=e.target.closest("[data-go-section]");(p==null?void 0:p.getAttribute("data-go-section"))==="notes"&&(i="notes",sessionStorage.setItem("s3phy.waves.section","notes"),o.updateSection(i),l())}return t.addEventListener("click",h),window.addEventListener("s3phy:lang",f),y(),()=>{t.removeEventListener("click",h),window.removeEventListener("s3phy:lang",f),u(),o==null||o.destroy()}}export{P as mountWavesHub};
