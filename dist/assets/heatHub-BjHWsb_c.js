const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./specificHeatLab-cQPlYOTZ.js","./index-B8gW9J-J.js","./index-H66OrNOQ.css","./thermalMixingLab-DlbdwO40.js","./changeOfStateLab-lxmqfy1Z.js","./heatTransferLab-hpO4yFsm.js"])))=>i.map(i=>d[i]);
import{g as O,t,_ as u}from"./index-B8gW9J-J.js";import{m as D,r as I,a as V,h as Z,b as N,e as W,n as j,l as B,f as Y}from"./flashcardDeck-BNxjerCB.js";function F(a){const n=document.createElement("div");n.className="tool-heat-final-exam-quiz";const o=document.createElement("iframe"),l="./",s=l.endsWith("/")?l:`${l}/`;function r(){return`${s}f3-heat-final-exam/quiz.html?embed=1`}o.src=r(),o.title=a("worksheets.practiceTitle"),o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin";const c=()=>{var d;try{(d=o.contentWindow)==null||d.postMessage({type:"s3phy:lang",lang:O()},"*")}catch{o.src=r()}};return window.addEventListener("s3phy:lang",c),n._heatFinalExamWorksheetCleanup=()=>window.removeEventListener("s3phy:lang",c),n.appendChild(o),n}const p=[{id:"thermometer",titleKey:"topic.thermometer",fileEn:"thermometer-en.pdf",fileZh:"thermometer-zhHant.pdf",tool:"liquid"},{id:"heatInternalEnergy",titleKey:"topic.heatInternalEnergy",fileEn:"heat-internal-energy-en.pdf",fileZh:"heat-internal-energy-zhHant.pdf",tool:"specificHeat"},{id:"changeOfState",titleKey:"topic.changeOfState",fileEn:"change-of-state-en.pdf",fileZh:"change-of-state-zhHant.pdf",tool:"changeOfState"},{id:"heatTransfer",titleKey:"topic.heatTransfer",fileEn:"heat-transfer-en.pdf",fileZh:"heat-transfer-zhHant.pdf",tool:"heatTransfer"}],S=["liquid","resistance","thermistor","specificHeat","thermalMixing","changeOfState","heatTransfer"],U={liquid:()=>u(()=>import("./thermometerLab-1AVb4yM1.js"),[],import.meta.url).then(a=>a.createThermometerLab),resistance:()=>u(()=>import("./thermometerLab-1AVb4yM1.js"),[],import.meta.url).then(a=>a.createThermometerLab),thermistor:()=>u(()=>import("./thermometerLab-1AVb4yM1.js"),[],import.meta.url).then(a=>a.createThermometerLab),specificHeat:()=>u(()=>import("./specificHeatLab-cQPlYOTZ.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(a=>a.createSpecificHeatLab),thermalMixing:()=>u(()=>import("./thermalMixingLab-DlbdwO40.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(a=>a.createThermalMixingLab),changeOfState:()=>u(()=>import("./changeOfStateLab-lxmqfy1Z.js"),__vite__mapDeps([4,1,2]),import.meta.url).then(a=>a.createChangeOfStateLab),heatTransfer:()=>u(()=>import("./heatTransferLab-hpO4yFsm.js"),__vite__mapDeps([5,1,2]),import.meta.url).then(a=>a.createHeatTransferLab)};function H(a){return t({liquid:"tools.thermometerLab.liquid.title",resistance:"tools.thermometerLab.resistance.title",thermistor:"tools.thermometerLab.thermistor.title",specificHeat:"tools.specificHeat.title",thermalMixing:"tools.thermalMixing.title",changeOfState:"tools.changeOfState.title",heatTransfer:"tools.heatTransfer.title"}[a]||a)}function Q(a){let n="topics",o="liquid",l=null,s={main:null},r=null,c=null,d=null;const w=[{value:"all",labelKey:"flashcards.all"},{value:"thermometry",labelKey:"flashcards.deck.thermometry"},{value:"heatInternalEnergy",labelKey:"flashcards.deck.heatInternalEnergy"},{value:"changeOfState",labelKey:"flashcards.deck.changeOfState"},{value:"heatTransfer",labelKey:"flashcards.deck.heatTransfer"}],b={liquid:"liquid",resistance:"resistance",thermistor:"thermistor"};async function k(e){e.innerHTML="",r!=null&&r._thermometerLabCleanup&&r._thermometerLabCleanup();const i=U[o];if(!i)return;const m=await i();b[o]?r=m(t,{type:b[o]}):r=m(t),e.appendChild(r)}function f(){if(s.main){if(c==null||c(),c=null,d==null||d(),d=null,n==="topics")s.main.innerHTML=M();else if(n==="notes")s.main.innerHTML=C();else if(n==="tools")s.main.innerHTML=I({toolOrder:S,toolId:o,getLabel:H,t});else if(n==="worksheets"){s.main.innerHTML='<section class="panel panel--worksheets-embed"></section>';const e=s.main.querySelector(".panel--worksheets-embed"),i=F(t);e.appendChild(i),d=i._heatFinalExamWorksheetCleanup||null}else n==="flashcards"?c=V(s.main,{deckOptions:w.map(e=>({value:e.value,label:t(e.labelKey)})),buildDeck:e=>Y(e,O())}):n==="summary"&&(s.main.innerHTML=q());n==="notes"&&x(),n==="tools"&&Z(a,{getLabel:H,t,getActiveToolId:()=>o,onSelectTool:e=>{o=e},mountTool:e=>{k(e)}}),n==="summary"&&P()}}function y(){l==null||l.destroy(),l=D(a,{subtitleKey:"strand.heat.subtitle",activeSection:n,onSection:e=>{n==="tools"&&e!=="tools"&&r!=null&&r._thermometerLabCleanup&&(r._thermometerLabCleanup(),r=null),n=e,l.updateSection(n),f()},onLang:()=>y()}),s.main=l.main,l.updateSection(n),f()}function M(){return`
      <section class="panel panel--topic-hub">
        <h2>${t("topics.title")}</h2>
        <p class="lead">${t("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${p.map(e=>{const i=e.tool?`<button class="btn primary" type="button" data-go-tool="${e.tool}">${t("topic.openTool")}</button>`:`<button class="btn primary" type="button" data-go-section="notes">${t("topic.viewNotes")}</button>`;return`
            <div class="card">
              <h3>${t(e.titleKey)}</h3>
              ${i}
            </div>`}).join("")}
        </div>
      </section>`}function A(e){const i=e.target.closest("[data-go-tool]");if(i){const h=i.getAttribute("data-go-tool");S.includes(h)?o=h:o="liquid",n="tools",l.updateSection(n),f();return}const m=e.target.closest("[data-go-section]");(m==null?void 0:m.getAttribute("data-go-section"))==="notes"&&(n="notes",l.updateSection(n),f())}function C(){return`
      <section class="panel">
        <h2>${t("notes.title")}</h2>
        <p class="lead">${t("notes.intro")}</p>
        <p class="lead">${t("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${p.map(e=>`
            <div class="card" data-note-card="${e.id}">
              <h3>${t(`notes.card.${e.id}`)}</h3>
              <div data-note-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function x(){const e=p.map(i=>({key:i.id,fileEn:i.fileEn,fileZh:i.fileZh}));await N(a,e)}function q(){return`
      <section class="panel">
        <h2>${t("summary.title")}</h2>
        <p class="lead">${t("summary.intro")}</p>
        <p class="lead">${t("notes.embedHint")}</p>
        <div class="grid cols-2" data-summary-grid>
          ${p.map(e=>`
            <div class="card" data-summary-card="${e.id}">
              <h3>${t(`summary.item.${e.id}`)}</h3>
              <div data-summary-body></div>
            </div>`).join("")}
        </div>
      </section>`}const K={thermometer:"thermometer",heatInternalEnergy:"heat-internal-energy",changeOfState:"change-of-state",heatTransfer:"heat-transfer"};async function P(){const e=B();await Promise.all(p.map(async i=>{const m=a.querySelector(`[data-summary-card="${i.id}"]`);if(!m)return;const h=m.querySelector("[data-summary-body]"),g=K[i.id];if(g){const v=e==="zhHant"?`${g}-zhHant.webp`:`${g}-en.webp`,z=await W("summary",v),$=`./summary/${v}`;z?h.innerHTML=`
          <img class="summary-thumb" src="${$}" alt="${t(`summary.item.${i.id}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${$}" target="_blank" rel="noopener">${t("summary.viewImage")}</a></p>`:h.innerHTML=`<p class="lead">${t("summary.missing")}</p>`;return}const E=e==="zhHant"?i.fileZh:i.fileEn,R=await j(E),L=`./notes/${E}`;R?h.innerHTML=`
          <iframe class="notes-grid" title="${t(`summary.item.${i.id}`)}" src="${L}" loading="lazy"></iframe>
          <p style="margin-top:8px"><a href="${L}" target="_blank" rel="noopener">${t("summary.download")}</a></p>`:h.innerHTML=`<p class="lead">${t("summary.missing")}</p>`}))}const _=()=>y(),T=e=>A(e);return window.addEventListener("s3phy:lang",_),a.addEventListener("click",T),y(),()=>{window.removeEventListener("s3phy:lang",_),a.removeEventListener("click",T),c==null||c(),r!=null&&r._thermometerLabCleanup&&r._thermometerLabCleanup(),l==null||l.destroy()}}export{Q as mountHeatHub};
