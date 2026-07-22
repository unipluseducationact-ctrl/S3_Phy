const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./waveMotionLab-Bo_XEyb5.js","./createLabIframe-FyJV3TLa.js","./index-Dd0WVKmW.js","./index-D16P_DNl.css","./longitudinalWaveLab-BcfWHUya.js","./waveInterferenceLab-40CccGgJ.js","./thinFilmInterferenceLab-BkI7T_GZ.js","./diffractionGratingCompareLab-CcZ-gAby.js","./ultrasoundReflectionLab-DIV9Lfd9.js","./soundRefractionShadowLab-DMqz14_W.js"])))=>i.map(i=>d[i]);
import{t as n,_ as r}from"./index-Dd0WVKmW.js";import{m as I}from"./hubShell-CJtNHRk0.js";import{h as T,c as S}from"./hubHelpers-xZ-4CU-V.js";import{r as R,h as $}from"./toolsShell-C-Th6Ujm.js";const m=[{id:"waveMotion",titleKey:"topic.waveMotion",fileEn:"wave-motion-en.pdf",fileZh:"wave-motion-zhHant.pdf",tool:"waveMotion"},{id:"waveProperties",titleKey:"topic.waveProperties",fileEn:"wave-properties-en.pdf",fileZh:"wave-properties-zhHant.pdf",tool:"waveInterference"},{id:"stationaryWave",titleKey:"topic.stationaryWave",fileEn:"stationary-wave-en.pdf",fileZh:"stationary-wave-zhHant.pdf"},{id:"lightWave",titleKey:"topic.lightWave",fileEn:"light-wave-en.pdf",fileZh:"light-wave-zhHant.pdf",tool:"thinFilmInterference"},{id:"soundWave",titleKey:"topic.soundWave",fileEn:"sound-wave-en.pdf",fileZh:"sound-wave-zhHant.pdf",tool:"ultrasoundReflection"}],g=["waveMotion","longitudinalWave","waveInterference","thinFilmInterference","diffractionGratingCompare","ultrasoundReflection","soundRefractionShadow"],M={waveMotion:()=>r(()=>import("./waveMotionLab-Bo_XEyb5.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>e.createWaveMotionLab),longitudinalWave:()=>r(()=>import("./longitudinalWaveLab-BcfWHUya.js"),__vite__mapDeps([4,1,2,3]),import.meta.url).then(e=>e.createLongitudinalWaveLab),waveInterference:()=>r(()=>import("./waveInterferenceLab-40CccGgJ.js"),__vite__mapDeps([5,1,2,3]),import.meta.url).then(e=>e.createWaveInterferenceLab),thinFilmInterference:()=>r(()=>import("./thinFilmInterferenceLab-BkI7T_GZ.js"),__vite__mapDeps([6,1,2,3]),import.meta.url).then(e=>e.createThinFilmInterferenceLab),diffractionGratingCompare:()=>r(()=>import("./diffractionGratingCompareLab-CcZ-gAby.js"),__vite__mapDeps([7,1,2,3]),import.meta.url).then(e=>e.createDiffractionGratingCompareLab),ultrasoundReflection:()=>r(()=>import("./ultrasoundReflectionLab-DIV9Lfd9.js"),__vite__mapDeps([8,1,2,3]),import.meta.url).then(e=>e.createUltrasoundReflectionLab),soundRefractionShadow:()=>r(()=>import("./soundRefractionShadowLab-DMqz14_W.js"),__vite__mapDeps([9,1,2,3]),import.meta.url).then(e=>e.createSoundRefractionShadowLab)};function w(e){return n({waveMotion:"tools.waveMotion.title",longitudinalWave:"tools.longitudinalWave.title",waveInterference:"tools.waveInterference.title",thinFilmInterference:"tools.thinFilmInterference.title",diffractionGratingCompare:"tools.diffractionGratingCompare.title",ultrasoundReflection:"tools.ultrasoundReflection.title",soundRefractionShadow:"tools.soundRefractionShadow.title"}[e]||e)}function P(e){let i=sessionStorage.getItem("s3phy.waves.section")||"topics",s="waveMotion",o=null,l={main:null},u=null;function f(){S(u),u=null}async function _(t){t.innerHTML="",f();const a=M[s];if(!a)return;const d=(await a())(n);u=d,t.appendChild(d)}function c(){l.main&&(i==="topics"?l.main.innerHTML=L():i==="notes"?(l.main.innerHTML=y(),E()):i==="tools"?(l.main.innerHTML=R({toolOrder:g,toolId:s,getLabel:w,t:n}),$(e,{getLabel:w,t:n,getActiveToolId:()=>s,onSelectTool:t=>{s=t},mountTool:t=>{_(t)}})):l.main.innerHTML=`
        <section class="panel">
          <h2>${n(`nav.${i}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${n("waves.comingSoon")}</p>
          </div>
        </section>
      `)}function v(){o==null||o.refreshLabels(),c()}function b(){o==null||o.destroy(),o=I(e,{subtitleKey:"strand.waves.subtitle",activeSection:i,onSection:t=>{i==="tools"&&t!=="tools"&&f(),i=t,sessionStorage.setItem("s3phy.waves.section",t),o.updateSection(i),c()},onLang:v}),l.main=o.main,o.updateSection(i),c()}function L(){return`
      <section class="panel panel--topic-hub">
        <h2>${n("topics.title")}</h2>
        <p class="lead">${n("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${m.map(t=>{const a=t.tool?`<button class="btn primary" type="button" data-go-tool="${t.tool}">${n("topic.openTool")}</button>`:`<button class="btn primary" type="button" disabled>${n("topic.openTool")}</button>`;return`
            <div class="card">
              <h3>${n(t.titleKey)}</h3>
              ${a}
            </div>`}).join("")}
        </div>
      </section>
    `}function y(){return`
      <section class="panel">
        <h2>${n("notes.title")}</h2>
        <p class="lead">${n("notes.intro")}</p>
        <p class="lead">${n("notes.embedHint")}</p>
        <div class="grid cols-3" data-notes-grid>
          ${m.map(t=>`
            <div class="card" data-note-card="${t.id}">
              <h3>${n(`notes.card.${t.id}`)}</h3>
              <div data-note-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function E(){const t=m.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await T(e,t)}function h(t){const a=t.target.closest("[data-go-tool]");if(a){const d=a.getAttribute("data-go-tool");g.includes(d)&&(s=d),i="tools",sessionStorage.setItem("s3phy.waves.section","tools"),o.updateSection(i),c();return}const p=t.target.closest("[data-go-section]");(p==null?void 0:p.getAttribute("data-go-section"))==="notes"&&(i="notes",sessionStorage.setItem("s3phy.waves.section","notes"),o.updateSection(i),c())}return e.addEventListener("click",h),window.addEventListener("s3phy:lang",v),b(),()=>{e.removeEventListener("click",h),window.removeEventListener("s3phy:lang",v),f(),o==null||o.destroy()}}export{P as mountWavesHub};
