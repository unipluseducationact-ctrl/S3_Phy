const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./waveMotionLab-CondwoLC.js","./createLabIframe-DJItaxfO.js","./index-bTMDOelk.js","./index-D16P_DNl.css","./waveInterferenceLab-CIAt1ZDK.js","./thinFilmInterferenceLab-Bo-D6K3y.js"])))=>i.map(i=>d[i]);
import{t as n,_ as u}from"./index-bTMDOelk.js";import{m as _}from"./hubShell-BYVxMQf7.js";import{h as E,c as S}from"./hubHelpers-b2PlJHLI.js";import{r as $,h as M}from"./toolsShell-C-Th6Ujm.js";const m=[{id:"waveMotion",titleKey:"topic.waveMotion",fileEn:"wave-motion-en.pdf",fileZh:"wave-motion-zhHant.pdf",tool:"waveMotion"},{id:"waveProperties",titleKey:"topic.waveProperties",fileEn:"wave-properties-en.pdf",fileZh:"wave-properties-zhHant.pdf",tool:"waveInterference"},{id:"stationaryWave",titleKey:"topic.stationaryWave",fileEn:"stationary-wave-en.pdf",fileZh:"stationary-wave-zhHant.pdf"},{id:"lightWave",titleKey:"topic.lightWave",fileEn:"light-wave-en.pdf",fileZh:"light-wave-zhHant.pdf",tool:"thinFilmInterference"},{id:"soundWave",titleKey:"topic.soundWave",fileEn:"sound-wave-en.pdf",fileZh:"sound-wave-zhHant.pdf"}],w=["waveMotion","waveInterference","thinFilmInterference"],H={waveMotion:()=>u(()=>import("./waveMotionLab-CondwoLC.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(o=>o.createWaveMotionLab),waveInterference:()=>u(()=>import("./waveInterferenceLab-CIAt1ZDK.js"),__vite__mapDeps([4,1,2,3]),import.meta.url).then(o=>o.createWaveInterferenceLab),thinFilmInterference:()=>u(()=>import("./thinFilmInterferenceLab-Bo-D6K3y.js"),__vite__mapDeps([5,1,2,3]),import.meta.url).then(o=>o.createThinFilmInterferenceLab)};function b(o){return n({waveMotion:"tools.waveMotion.title",waveInterference:"tools.waveInterference.title",thinFilmInterference:"tools.thinFilmInterference.title"}[o]||o)}function P(o){let i=sessionStorage.getItem("s3phy.waves.section")||"topics",r="waveMotion",t=null,s={main:null},p=null;function v(){S(p),p=null}async function g(e){e.innerHTML="",v();const a=H[r];if(!a)return;const c=(await a())(n);p=c,e.appendChild(c)}function l(){s.main&&(i==="topics"?s.main.innerHTML=L():i==="notes"?(s.main.innerHTML=I(),T()):i==="tools"?(s.main.innerHTML=$({toolOrder:w,toolId:r,getLabel:b,t:n}),M(o,{getLabel:b,t:n,getActiveToolId:()=>r,onSelectTool:e=>{r=e},mountTool:e=>{g(e)}})):s.main.innerHTML=`
        <section class="panel">
          <h2>${n(`nav.${i}`)}</h2>
          <div class="card" style="padding: 2rem; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border);">
            <p class="lead" style="margin-bottom: 0;">${n("waves.comingSoon")}</p>
          </div>
        </section>
      `)}function f(){t==null||t.refreshLabels(),l()}function y(){t==null||t.destroy(),t=_(o,{subtitleKey:"strand.waves.subtitle",activeSection:i,onSection:e=>{i==="tools"&&e!=="tools"&&v(),i=e,sessionStorage.setItem("s3phy.waves.section",e),t.updateSection(i),l()},onLang:f}),s.main=t.main,t.updateSection(i),l()}function L(){return`
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
    `}function I(){return`
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
      </section>`}async function T(){const e=m.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await E(o,e)}function h(e){const a=e.target.closest("[data-go-tool]");if(a){const c=a.getAttribute("data-go-tool");w.includes(c)&&(r=c),i="tools",sessionStorage.setItem("s3phy.waves.section","tools"),t.updateSection(i),l();return}const d=e.target.closest("[data-go-section]");(d==null?void 0:d.getAttribute("data-go-section"))==="notes"&&(i="notes",sessionStorage.setItem("s3phy.waves.section","notes"),t.updateSection(i),l())}return o.addEventListener("click",h),window.addEventListener("s3phy:lang",f),y(),()=>{o.removeEventListener("click",h),window.removeEventListener("s3phy:lang",f),v(),t==null||t.destroy()}}export{P as mountWavesHub};
