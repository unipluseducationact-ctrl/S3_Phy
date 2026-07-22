const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./waveMotionLab-SvOi-ZkF.js","./createLabIframe-BBM0YeRk.js","./index-DbT5iX8r.js","./index-D16P_DNl.css","./longitudinalWaveLab-CsT17G2v.js","./waveInterferenceLab-AonlM8xt.js","./thinFilmInterferenceLab-BgQ_VFIk.js","./diffractionGratingCompareLab-CjT4hZju.js","./spectralOverlapLab-BitjdCrc.js","./ultrasoundReflectionLab-CApZEUs1.js","./soundRefractionShadowLab-57G15Tiq.js"])))=>i.map(i=>d[i]);
import{t as n,_ as r}from"./index-DbT5iX8r.js";import{m as S}from"./hubShell-cz22lFAJ.js";import{l as O,s as w,h as R,c as $}from"./hubHelpers-CEQIRGz0.js";import{r as A,h as M}from"./toolsShell-C-Th6Ujm.js";const m="s3phy.waves.tool",h=[{id:"waveMotion",titleKey:"topic.waveMotion",fileEn:"wave-motion-en.pdf",fileZh:"wave-motion-zhHant.pdf",tool:"waveMotion"},{id:"waveProperties",titleKey:"topic.waveProperties",fileEn:"wave-properties-en.pdf",fileZh:"wave-properties-zhHant.pdf",tool:"waveInterference"},{id:"stationaryWave",titleKey:"topic.stationaryWave",fileEn:"stationary-wave-en.pdf",fileZh:"stationary-wave-zhHant.pdf"},{id:"lightWave",titleKey:"topic.lightWave",fileEn:"light-wave-en.pdf",fileZh:"light-wave-zhHant.pdf",tool:"thinFilmInterference"},{id:"soundWave",titleKey:"topic.soundWave",fileEn:"sound-wave-en.pdf",fileZh:"sound-wave-zhHant.pdf",tool:"ultrasoundReflection"}],_=["waveMotion","longitudinalWave","waveInterference","thinFilmInterference","diffractionGratingCompare","spectralOverlap","ultrasoundReflection","soundRefractionShadow"],W={waveMotion:()=>r(()=>import("./waveMotionLab-SvOi-ZkF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>e.createWaveMotionLab),longitudinalWave:()=>r(()=>import("./longitudinalWaveLab-CsT17G2v.js"),__vite__mapDeps([4,1,2,3]),import.meta.url).then(e=>e.createLongitudinalWaveLab),waveInterference:()=>r(()=>import("./waveInterferenceLab-AonlM8xt.js"),__vite__mapDeps([5,1,2,3]),import.meta.url).then(e=>e.createWaveInterferenceLab),thinFilmInterference:()=>r(()=>import("./thinFilmInterferenceLab-BgQ_VFIk.js"),__vite__mapDeps([6,1,2,3]),import.meta.url).then(e=>e.createThinFilmInterferenceLab),diffractionGratingCompare:()=>r(()=>import("./diffractionGratingCompareLab-CjT4hZju.js"),__vite__mapDeps([7,1,2,3]),import.meta.url).then(e=>e.createDiffractionGratingCompareLab),spectralOverlap:()=>r(()=>import("./spectralOverlapLab-BitjdCrc.js"),__vite__mapDeps([8,1,2,3]),import.meta.url).then(e=>e.createSpectralOverlapLab),ultrasoundReflection:()=>r(()=>import("./ultrasoundReflectionLab-CApZEUs1.js"),__vite__mapDeps([9,1,2,3]),import.meta.url).then(e=>e.createUltrasoundReflectionLab),soundRefractionShadow:()=>r(()=>import("./soundRefractionShadowLab-57G15Tiq.js"),__vite__mapDeps([10,1,2,3]),import.meta.url).then(e=>e.createSoundRefractionShadowLab)};function b(e){return n({waveMotion:"tools.waveMotion.title",longitudinalWave:"tools.longitudinalWave.title",waveInterference:"tools.waveInterference.title",thinFilmInterference:"tools.thinFilmInterference.title",diffractionGratingCompare:"tools.diffractionGratingCompare.title",spectralOverlap:"tools.spectralOverlap.title",ultrasoundReflection:"tools.ultrasoundReflection.title",soundRefractionShadow:"tools.soundRefractionShadow.title"}[e]||e)}function V(e){let i=sessionStorage.getItem("s3phy.waves.section")||"topics",l=O(m,_,"waveMotion"),o=null,s={main:null},u=null;function v(){$(u),u=null}async function L(t){t.innerHTML="",v();const a=W[l];if(!a)return;const d=(await a())(n);u=d,t.appendChild(d)}function c(){s.main&&(i==="topics"?s.main.innerHTML=E():i==="notes"?(s.main.innerHTML=I(),T()):i==="tools"?(s.main.innerHTML=A({toolOrder:_,toolId:l,getLabel:b,t:n}),M(e,{getLabel:b,t:n,getActiveToolId:()=>l,onSelectTool:t=>{l=t,w(m,l)},mountTool:t=>{L(t)}})):s.main.innerHTML=`
        <section class="panel">
          <h2>${n(`nav.${i}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${n("waves.comingSoon")}</p>
          </div>
        </section>
      `)}function f(){o==null||o.refreshLabels(),c()}function y(){o==null||o.destroy(),o=S(e,{subtitleKey:"strand.waves.subtitle",activeSection:i,onSection:t=>{i==="tools"&&t!=="tools"&&v(),i=t,sessionStorage.setItem("s3phy.waves.section",t),o.updateSection(i),c()},onLang:f}),s.main=o.main,o.updateSection(i),c()}function E(){return`
      <section class="panel panel--topic-hub">
        <h2>${n("topics.title")}</h2>
        <p class="lead">${n("topics.intro")}</p>
        <div class="grid cols-3 topic-hub-grid">
          ${h.map(t=>{const a=t.tool?`<button class="btn primary" type="button" data-go-tool="${t.tool}">${n("topic.openTool")}</button>`:`<button class="btn primary" type="button" disabled>${n("topic.openTool")}</button>`;return`
            <div class="card">
              <h3>${n(t.titleKey)}</h3>
              ${a}
            </div>`}).join("")}
        </div>
      </section>
    `}function I(){return`
      <section class="panel">
        <h2>${n("notes.title")}</h2>
        <p class="lead">${n("notes.intro")}</p>
        <p class="lead">${n("notes.embedHint")}</p>
        <div class="grid cols-3" data-notes-grid>
          ${h.map(t=>`
            <div class="card" data-note-card="${t.id}">
              <h3>${n(`notes.card.${t.id}`)}</h3>
              <div data-note-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function T(){const t=h.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await R(e,t)}function g(t){const a=t.target.closest("[data-go-tool]");if(a){const d=a.getAttribute("data-go-tool");_.includes(d)&&(l=d,w(m,l)),i="tools",sessionStorage.setItem("s3phy.waves.section","tools"),o.updateSection(i),c();return}const p=t.target.closest("[data-go-section]");(p==null?void 0:p.getAttribute("data-go-section"))==="notes"&&(i="notes",sessionStorage.setItem("s3phy.waves.section","notes"),o.updateSection(i),c())}return e.addEventListener("click",g),window.addEventListener("s3phy:lang",f),y(),()=>{e.removeEventListener("click",g),window.removeEventListener("s3phy:lang",f),v(),o==null||o.destroy()}}export{V as mountWavesHub};
