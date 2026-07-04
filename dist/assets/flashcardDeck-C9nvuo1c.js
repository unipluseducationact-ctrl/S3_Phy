import{t as o,g as F,s as Z,_ as P}from"./index-AxE4BcBl.js";function W(){return F()==="zh-Hant"?"zhHant":"en"}async function H(e,t){const r=`./${e}/${t}`;try{return(await fetch(r,{method:"HEAD"})).ok}catch{return!1}}async function j(e){return H("notes",e)}function Q(e){return`${String(e).split("#")[0]}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}function K(e,t,r){const l=Q(t);return`
    <div class="note-preview-wrap">
      <iframe class="note-preview" title="${e.replace(/"/g,"&quot;")}" src="${l}" loading="lazy"></iframe>
    </div>
    <p class="note-preview-link"><a href="${t}" target="_blank" rel="noopener">${r}</a></p>`}async function Se(e,t){const r=W();await Promise.all(t.map(async l=>{const d=e.querySelector(`[data-note-card="${l.key}"]`);if(!d)return;const n=d.querySelector("[data-note-body]"),i=r==="zhHant"?l.fileZh:l.fileEn,a=await j(i),f=`./notes/${i}`;a?n.innerHTML=K(o(`notes.card.${l.key}`),f,o("notes.openPdf")):n.innerHTML=`<p class="lead">${o("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}))}async function xe(e,t,{version:r=""}={}){const l=W(),d=r?`?v=${r}`:"";await Promise.all(t.map(async n=>{const i=e.querySelector(`[data-summary-card="${n.key}"]`);if(!i)return;const a=i.querySelector("[data-summary-body]");if(n.type==="image"){const v=n.fileEn&&n.fileZh?l==="zhHant"?n.fileZh:n.fileEn:n.file,k=await H("summary",v),u=`${`./summary/${v}`}${d}`;k?a.innerHTML=`
          <img class="summary-thumb" src="${u}" alt="${o(`summary.item.${n.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${u}" target="_blank" rel="noopener">${o("summary.viewImage")}</a></p>`:a.innerHTML=`<p class="lead">${o("summary.missing")}</p>`;return}const f=l==="zhHant"?n.fileZh:n.fileEn,b=await H("summary-pdfs",f),m=`./summary-pdfs/${f}`;b?a.innerHTML=K(o(`summary.item.${n.key}`),m,o("summary.download")):a.innerHTML=`<p class="lead">${o("summary.missing")}</p>`}))}const Y=["topics","notes","tools","worksheets","quiz","flashcards","summary"],X={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",quiz:"nav.quiz",flashcards:"nav.flashcards",summary:"nav.summary"};function Le(e,{subtitleKey:t,activeSection:r,onSection:l,onLang:d}){e.innerHTML=`
    <header class="site-header site-header--hub">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${o("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${o(t)}</p>
        </div>
      </div>
      <nav class="main-nav" data-nav aria-label="${o("app.title")}"></nav>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${o("strand.back")}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${o("footer.conventions")}</footer>
  `;const n=e.querySelector("[data-main]"),i=e.querySelector("[data-nav]"),a=e.querySelector("[data-lang]"),f=e.querySelector("[data-strand-back]");let b=r;function m(u){b=u,i.innerHTML=Y.map((h,S)=>{const x=u===h?"active":"",q=`${S+1}. ${o(X[h])}`;return`<button type="button" class="${x}" data-sec="${h}">${q}</button>`}).join(""),i.querySelectorAll("button").forEach(h=>{h.addEventListener("click",()=>l(h.getAttribute("data-sec")))})}function v(){a.innerHTML=`
      <button type="button" data-set-lang="en" class="${F()==="en"?"active":""}">${o("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${F()==="zh-Hant"?"active":""}">${o("lang.zhHant")}</button>
    `,a.querySelectorAll("button").forEach(u=>{u.addEventListener("click",()=>{Z(u.getAttribute("data-set-lang")),d()})})}function k(){e.querySelector("[data-hub-subtitle]").textContent=o(t),f.textContent=o("strand.back"),e.querySelector("[data-hub-footer]").textContent=o("footer.conventions"),e.querySelector(".site-title").textContent=o("app.title")}const L=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return f.addEventListener("click",L),m(r),v(),{main:n,updateSection(u){m(u)},refreshLabels(){k(),m(b),v()},destroy(){f.removeEventListener("click",L)}}}const O=1e5;function J(){const e=document.createElement("div");return!!(e.requestFullscreen||e.webkitRequestFullscreen||document.fullscreenEnabled||document.webkitFullscreenEnabled)}function w(e){return(document.fullscreenElement||document.webkitFullscreenElement)===e}function I(e){window.dispatchEvent(new Event("resize")),e==null||e.querySelectorAll("iframe").forEach(t=>{var r;try{(r=t.contentWindow)==null||r.dispatchEvent(new Event("resize"))}catch{}})}function ee({app:e,stage:t,button:r,t:l,setCollapsed:d,getCollapsed:n}){let i=!1,a=!1,f=null;const b=r.querySelector(".material-symbols-outlined"),m=r.querySelector("[data-tool-fullscreen-label]"),v=x=>{r.setAttribute("aria-pressed",x?"true":"false"),b&&(b.textContent=x?"fullscreen_exit":"fullscreen"),m&&(m.textContent=l(x?"tools.exitFullscreen":"tools.fullscreen")),r.title=(m==null?void 0:m.textContent)||""},k=()=>{f&&(f.remove(),f=null),t.classList.remove("tool-stage--overlay-fullscreen"),document.body.style.overflow="",i=!1},L=async()=>{if(i){k(),e==null||e.classList.remove("is-lab-fullscreen"),d(a),v(!1);return}if(w(t))try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen&&await document.webkitExitFullscreen()}catch{}},u=()=>{a=n(),d(!0),e==null||e.classList.add("is-lab-fullscreen"),f=document.createElement("div"),f.className="tool-stage-overlay-backdrop",f.style.cssText="position:fixed;inset:0;z-index:"+O+";background:rgba(15,23,42,0.45);",document.body.appendChild(f),document.body.style.overflow="hidden",t.classList.add("tool-stage--overlay-fullscreen"),t.style.position="fixed",t.style.inset="0",t.style.zIndex=String(O+1),t.style.width="100dvw",t.style.height="100dvh",t.style.margin="0",i=!0,v(!0),requestAnimationFrame(()=>I(t)),f.addEventListener("click",()=>{L()})},h=async()=>{if(a=n(),d(!0),e==null||e.classList.add("is-lab-fullscreen"),!J()){u();return}try{if(t.requestFullscreen)await t.requestFullscreen();else if(t.webkitRequestFullscreen)await t.webkitRequestFullscreen();else{u();return}v(!0),requestAnimationFrame(()=>I(t))}catch{e==null||e.classList.remove("is-lab-fullscreen"),d(a),u()}},S=()=>{const x=w(t)||i;x||(e==null||e.classList.remove("is-lab-fullscreen"),i&&k(),d(a),t.style.position="",t.style.inset="",t.style.zIndex="",t.style.width="",t.style.height="",t.style.margin=""),v(x),x&&requestAnimationFrame(()=>I(t))};return r.addEventListener("click",()=>{w(t)||i?L():h()}),document.addEventListener("fullscreenchange",S),document.addEventListener("webkitfullscreenchange",S),v(!1),()=>{document.removeEventListener("fullscreenchange",S),document.removeEventListener("webkitfullscreenchange",S),L()}}const G="s3phy:tool-picker-collapsed",te=820;function Ee({toolOrder:e,toolId:t,getLabel:r,t:l}){const d=e.map(n=>`<button type="button" data-tool="${n}" class="${t===n?"active":""}">${r(n)}</button>`).join("");return`
      <section class="panel panel--tools" data-tools-panel>
        <div class="tools-panel-head">
          <div class="tools-panel-head__text">
            <h2>${l("tools.title")}</h2>
            <p class="tools-active-lab" data-tool-active-label hidden>${r(t)}</p>
          </div>
          <div class="tools-panel-head__actions">
            <button type="button" class="tool-picker-toggle tool-fullscreen-btn" data-tool-fullscreen aria-pressed="false">
              <span class="material-symbols-outlined" aria-hidden="true">fullscreen</span>
              <span data-tool-fullscreen-label>${l("tools.fullscreen")}</span>
            </button>
            <button type="button" class="tool-picker-toggle" data-tool-picker-toggle aria-expanded="true">
              <span data-tool-picker-chevron aria-hidden="true">&#9650;</span>
              <span data-tool-picker-toggle-label>${l("tools.hideLabList")}</span>
            </button>
          </div>
        </div>
        <div class="tools-layout">
          <aside class="tool-picker" data-tool-picker>
            <p class="lead">${l("tools.pick")}</p>
            <div class="tool-list" data-tool-list>${d}</div>
          </aside>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function qe(e,{getLabel:t,t:r,onSelectTool:l,mountTool:d,getActiveToolId:n}){const i=e.querySelector("[data-tools-panel]"),a=e.querySelector("[data-tool-picker]"),f=e.querySelector("[data-tool-list]"),b=e.querySelector("[data-tool-stage]"),m=e.querySelector("[data-tool-picker-toggle]"),v=e.querySelector("[data-tool-fullscreen]"),k=e.querySelector("[data-tool-picker-toggle-label]"),L=e.querySelector("[data-tool-picker-chevron]"),u=e.querySelector("[data-tool-active-label]");if(!i||!a||!f||!b||!m||!v)return;let h=sessionStorage.getItem(G)==="true";const S=()=>{u&&(u.textContent=t(n()))},x=()=>{m.setAttribute("aria-expanded",h?"false":"true"),k&&(k.textContent=r(h?"tools.showLabList":"tools.hideLabList")),L&&(L.textContent=h?"▼":"▲"),u&&(u.hidden=!h)},q=s=>{h=s,i.classList.toggle("is-picker-collapsed",h),sessionStorage.setItem(G,h?"true":"false"),x()};i.classList.toggle("is-picker-collapsed",h),S(),x(),m.addEventListener("click",()=>{q(!h)}),f.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{const y=s.getAttribute("data-tool");y&&(l(y),f.querySelectorAll("button").forEach(c=>{c.classList.toggle("active",c.getAttribute("data-tool")===y)}),S(),d(b),window.innerWidth<=te&&q(!0))})}),d(b),ee({app:document.getElementById("app"),stage:b,button:v,t:r,setCollapsed:q,getCollapsed:()=>h})}const ae=1.7,ne=.7,T=1,se=.1,re=3;function oe(e){const t=Math.floor(e),r=e-t;return t+(Math.random()<r?1:0)}function U(e){for(let t=e.length-1;t>0;t-=1){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function le(e){const t=new Map(e.map(n=>[n.id,n.copies])),r=[];let l=null;const d=e.reduce((n,i)=>n+i.copies,0);for(let n=0;n<d;n+=1){let i=[...t.entries()].filter(([b,m])=>m>0&&b!==l);i.length===0&&(i=[...t.entries()].filter(([,b])=>b>0)),i.sort((b,m)=>m[1]-b[1]);const[a,f]=i[0];r.push(a),t.set(a,f-1),l=a}return r}function ce(e){const t=[];return e.forEach(({id:r,copies:l})=>{for(let d=0;d<l;d+=1)t.push(r)}),t}function ie(e){let t="sequence",r=1,l=[],d=[],n=0,i=!1,a=!1,f=!1;const b=new Map;function m(){return e()}function v(){return new Map(m().map(c=>[c.id,c]))}function k(){b.clear(),m().forEach(c=>{b.set(c.id,{nextRate:T,totalGotIt:0,roundAgain:0,roundGotIt:0,roundNeutral:0})})}function L(){const c=m();return r===1?c.map(g=>({id:g.id,copies:1})):c.map(g=>{var p;return{id:g.id,copies:oe(((p=b.get(g.id))==null?void 0:p.nextRate)??T)}}).filter(g=>g.copies>0)}function u(c){if(c.length===0)return[];if(r===1){const g=c.map(p=>p.id);return t==="random"?U([...g]):[...g].sort((p,E)=>p-E)}return t==="random"?U(ce(c)):le(c)}function h(){if(a=!1,f=!1,l=L(),l.reduce((g,p)=>g+p.copies,0)===0){f=!0,a=!0,d=[],n=0;return}m().forEach(g=>{const p=b.get(g.id);p&&(p.roundAgain=0,p.roundGotIt=0,p.roundNeutral=0)}),d=u(l),n=0,i=!1}function S(){r=1,k(),h()}function x(){return d[n]??null}function q(){const c=x();return c==null?null:v().get(c)??null}function s(c){const g=x();if(g==null)return;const p=b.get(g);p&&(c==="again"?(p.nextRate=ae,p.totalGotIt=0,p.roundAgain+=1):c==="gotit"?(p.totalGotIt+=1,p.roundGotIt+=1,p.nextRate=p.totalGotIt>=re?se:ne):c==="neutral"&&(p.roundNeutral+=1,p.nextRate=T))}function y(){return i=!1,n<d.length-1?(n+=1,!1):(a=!0,!0)}return S(),{getMode:()=>t,setMode(c){t!==c&&(t=c,d=u(l),n=0,i=!1)},resetSession:S,getRoundNumber:()=>r,getProgress:()=>({index:d.length?n+1:0,total:d.length}),isFlipped:()=>i,flip(){i=!i},unflip(){i=!1},currentCard:q,prev(){return n>0?(n-=1,i=!1,!0):!1},nextNavigate(){return n<d.length-1?(n+=1,i=!1,!0):!1},rateAgain(){return i?(s("again"),y()):!1},rateGotIt(){return i?(s("gotit"),y()):!1},rateNeutral(){return i?(s("neutral"),y()):!1},isSummary:()=>a,isSessionComplete:()=>f,getRoundStats(){let c=0,g=0,p=0;return b.forEach(E=>{c+=E.roundAgain,g+=E.roundGotIt,p+=E.roundNeutral}),{again:c,gotIt:g,neutral:p}},nextRound(){r+=1,h()},restart(){S()}}}const de={thermometry:"flashcards.deck.thermometry",heatInternalEnergy:"flashcards.deck.heatInternalEnergy",changeOfState:"flashcards.deck.changeOfState",heatTransfer:"flashcards.deck.heatTransfer",reflection:"topic.reflection",refraction:"topic.refraction",tir:"topic.tir",convex:"topic.convex",concave:"topic.concave",em:"topic.em",rotatingMirror:"topic.reflection"};function ue(e){const t=de[e]||`topic.${e}`,r=o(t);return r===t?e:r}function $e(e,{deckOptions:t,buildDeck:r,initialDeck:l="all"}){let d=l,n=null,i=null;e.innerHTML=`
    <section class="panel panel--flashcards">
      <h2>${o("flashcards.title")}</h2>
      <p class="lead">${o("flashcards.intro")}</p>
      <div class="fc-controls no-print">
        <div class="control">
          <label>${o("flashcards.deck")}</label>
          <select data-fc-deck>
            ${t.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
          </select>
        </div>
        <div class="fc-controls-right">
          <div class="fc-mode-group">
            <span class="fc-mode-label">${o("flashcards.studyMode")}</span>
            <div class="fc-mode-toggle" data-fc-mode>
              <button type="button" data-mode="sequence" class="active">${o("flashcards.mode.sequence")}</button>
              <button type="button" data-mode="random">${o("flashcards.mode.random")}</button>
            </div>
          </div>
          <span class="fc-round-badge" data-fc-round></span>
          <div class="fc-progress-block">
            <span class="fc-progress-label">${o("flashcards.progressLabel")}</span>
            <span class="fc-progress-num" data-fc-progress></span>
          </div>
        </div>
      </div>
      <div data-fc-study-panel>
        <div class="fc-study-stage">
          <div class="fc-card-layer fc-card-layer-back" aria-hidden="true"></div>
          <div class="fc-card-layer fc-card-layer-mid" aria-hidden="true"></div>
          <div class="fc-card-container" data-fc-card-wrap>
            <div class="fc-card-inner" data-fc-card-inner>
              <div class="fc-card-face fc-card-face-front">
                <div class="fc-card-top">
                  <span class="fc-subtopic-pill" data-fc-subtopic-pill></span>
                  <span class="fc-card-code" data-fc-card-code></span>
                </div>
                <div class="fc-card-body-scroll">
                  <div class="fc-card-text" data-fc-front-body></div>
                </div>
                <p class="fc-flip-prompt" data-fc-flip-prompt>${o("flashcards.tapFlip")}</p>
              </div>
              <div class="fc-card-face fc-card-face-back">
                <div class="fc-card-top">
                  <span class="fc-subtopic-pill" data-fc-subtopic-pill-back></span>
                  <span class="fc-card-code" data-fc-card-code-back></span>
                </div>
                <div class="fc-card-body-scroll">
                  <div class="fc-card-text" data-fc-back-body></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="fc-rating-hint" data-fc-hint></p>
        <div class="fc-toolbar no-print">
          <button type="button" class="fc-btn-nav" data-fc-prev>
            <span class="material-symbols-outlined" aria-hidden="true">chevron_left</span>
            <span data-fc-prev-label>${o("flashcards.prev")}</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-again" data-fc-again title="${o("flashcards.again")}">
            <span class="material-symbols-outlined" aria-hidden="true">history</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-flip" data-fc-flip title="${o("flashcards.flip")}">
            <span class="material-symbols-outlined fc-flip-icon" aria-hidden="true">sync</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-gotit" data-fc-gotit title="${o("flashcards.gotIt")}">
            <span class="material-symbols-outlined" aria-hidden="true">check</span>
          </button>
          <button type="button" class="fc-btn-nav" data-fc-next>
            <span data-fc-next-label>${o("flashcards.next")}</span>
            <span class="material-symbols-outlined" aria-hidden="true">chevron_right</span>
          </button>
        </div>
      </div>
      <div class="fc-summary-panel" data-fc-summary hidden>
        <h3 data-fc-summary-title></h3>
        <p class="muted" data-fc-summary-stats></p>
        <div class="fc-summary-counts">
          <span data-fc-summary-keep></span>
          <span data-fc-summary-confident></span>
        </div>
        <div class="fc-toolbar no-print">
          <button class="btn primary" type="button" data-fc-next-round>${o("flashcards.summary.nextRound")}</button>
          <button class="btn" type="button" data-fc-restart>${o("flashcards.summary.restart")}</button>
        </div>
      </div>
    </section>`;const a={deck:e.querySelector("[data-fc-deck]"),mode:e.querySelector("[data-fc-mode]"),round:e.querySelector("[data-fc-round]"),progress:e.querySelector("[data-fc-progress]"),studyPanel:e.querySelector("[data-fc-study-panel]"),summaryPanel:e.querySelector("[data-fc-summary]"),cardWrap:e.querySelector("[data-fc-card-wrap]"),cardInner:e.querySelector("[data-fc-card-inner]"),subtopicPill:e.querySelector("[data-fc-subtopic-pill]"),subtopicPillBack:e.querySelector("[data-fc-subtopic-pill-back]"),cardCode:e.querySelector("[data-fc-card-code]"),cardCodeBack:e.querySelector("[data-fc-card-code-back]"),frontBody:e.querySelector("[data-fc-front-body]"),backBody:e.querySelector("[data-fc-back-body]"),flipPrompt:e.querySelector("[data-fc-flip-prompt]"),hint:e.querySelector("[data-fc-hint]"),prev:e.querySelector("[data-fc-prev]"),again:e.querySelector("[data-fc-again]"),flip:e.querySelector("[data-fc-flip]"),gotit:e.querySelector("[data-fc-gotit]"),next:e.querySelector("[data-fc-next]"),summaryTitle:e.querySelector("[data-fc-summary-title]"),summaryStats:e.querySelector("[data-fc-summary-stats]"),summaryKeep:e.querySelector("[data-fc-summary-keep]"),summaryConfident:e.querySelector("[data-fc-summary-confident]"),nextRound:e.querySelector("[data-fc-next-round]"),restart:e.querySelector("[data-fc-restart]")};async function f(){const s=await r(d);n=ie(()=>s)}function b(s,y){const c=!y;a.prev.disabled=c,a.again.disabled=c||!s,a.gotit.disabled=c||!s,a.flip.disabled=c,a.next.disabled=c}function m(s,y,c=!1){var D;s.classList.remove("fc-card-text-long","fc-card-text-compact");const g=document.createElement("div");g.innerHTML=y||"";const p=(g.textContent||"").trim(),E=p.split(`
`).filter(Boolean).length,$=((D=(y||"").match(/<br\s*\/?>/gi))==null?void 0:D.length)??0,z=Math.max(E,$>0?$+1:0),N=p.length;c||z>=5||N>220?s.classList.add("fc-card-text-compact"):(z>=4||N>130)&&s.classList.add("fc-card-text-long")}function v(s,y,c){const g=(c||"").replace(/"/g,"&quot;"),p=(c||o("flashcards.question")).replace(/</g,"&lt;");s.innerHTML=`<img src="${y}" alt="${g}" loading="lazy" class="fc-card-img" data-fc-img /><p class="fc-img-fallback muted" data-fc-img-fallback hidden>${p}</p>`;const E=s.querySelector("[data-fc-img]"),$=s.querySelector("[data-fc-img-fallback]");E&&$&&(E.onerror=()=>{E.hidden=!0,$.hidden=!1},E.onload=()=>{E.hidden=!1,$.hidden=!0})}function k(){const s=n.currentCard(),y=n.isFlipped();if(a.cardInner.classList.toggle("fc-flipped",y),!s){a.subtopicPill.textContent="",a.subtopicPillBack.textContent="",a.cardCode.textContent="",a.cardCodeBack.textContent="",a.frontBody.innerHTML="",a.backBody.innerHTML="",a.flipPrompt.hidden=!0,a.cardWrap.classList.remove("fc-card-container--image"),b(!1,!1),a.hint.textContent="";return}const c=ue(s.subtopic),g=o("flashcards.cardCode").replace("{id}",String(s.id));if(a.subtopicPill.textContent=c,a.subtopicPillBack.textContent=c,a.cardCode.textContent=g,a.cardCodeBack.textContent=g,s.isImage)a.cardWrap.classList.add("fc-card-container--image"),a.flipPrompt.hidden=!0,v(a.frontBody,s.frontImage,s.alt),s.backImage&&s.backImage!==s.frontImage?v(a.backBody,s.backImage,s.alt):a.backBody.innerHTML=a.frontBody.innerHTML;else{if(a.cardWrap.classList.remove("fc-card-container--image"),a.flipPrompt.hidden=y,a.frontBody.innerHTML=s.front,s.backImage){const p=s.imageAlt||"";a.backBody.innerHTML=`${s.back}<img class="fc-card-back-img" src="${s.backImage}" alt="${p}" />`}else a.backBody.innerHTML=s.back;m(a.frontBody,s.front,s.compactFront),m(a.backBody,s.back,s.compactBack)}b(y,!0),a.hint.textContent=y?o("flashcards.hint.rated"):o("flashcards.flipFirst"),a.hint.classList.toggle("fc-rating-hint--action",!y)}function L(){const s=n.getRoundStats(),{total:y}=n.getProgress();n.isSessionComplete()?(a.summaryTitle.textContent=o("flashcards.summary.complete"),a.summaryStats.textContent=o("flashcards.summary.completeStats"),a.nextRound.hidden=!0):(a.summaryTitle.textContent=o("flashcards.summary.title").replace("{round}",String(n.getRoundNumber())),a.summaryStats.textContent=o("flashcards.summary.stats").replace("{total}",String(y)).replace("{again}",String(s.again)).replace("{gotIt}",String(s.gotIt)).replace("{neutral}",String(s.neutral)),a.nextRound.hidden=!1),a.summaryKeep.textContent=o("flashcards.summary.keep").replace("{count}",String(s.again)),a.summaryConfident.textContent=o("flashcards.summary.confident").replace("{count}",String(s.gotIt))}function u(){const{index:s,total:y}=n.getProgress();a.round.textContent=o("flashcards.round").replace("{round}",String(n.getRoundNumber())).replace("{total}",String(y)),a.progress.textContent=y?`${s} / ${y}`:"—";const c=n.isSummary();a.studyPanel.hidden=c,a.summaryPanel.hidden=!c,c?L():k()}function h(){const s=n.getMode();a.mode.querySelectorAll("button").forEach(y=>{y.classList.toggle("active",y.dataset.mode===s)})}function S(){n.currentCard()&&(n.flip(),k())}function x(){e.querySelector("h2").textContent=o("flashcards.title"),e.querySelector(".lead").textContent=o("flashcards.intro"),e.querySelector("[data-fc-deck]").previousElementSibling.textContent=o("flashcards.deck"),e.querySelector(".fc-mode-label").textContent=o("flashcards.studyMode"),e.querySelector(".fc-progress-label").textContent=o("flashcards.progressLabel"),a.mode.querySelector('[data-mode="sequence"]').textContent=o("flashcards.mode.sequence"),a.mode.querySelector('[data-mode="random"]').textContent=o("flashcards.mode.random"),a.flipPrompt.textContent=o("flashcards.tapFlip"),e.querySelector("[data-fc-prev-label]").textContent=o("flashcards.prev"),e.querySelector("[data-fc-next-label]").textContent=o("flashcards.next"),a.nextRound.textContent=o("flashcards.summary.nextRound"),a.restart.textContent=o("flashcards.summary.restart"),u()}a.deck.value=d,a.deck.addEventListener("change",()=>{d=a.deck.value,f().then(()=>{h(),u()})}),a.mode.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{n.setMode(s.dataset.mode),h(),u()})}),a.cardWrap.addEventListener("click",s=>{s.target.closest("button")||S()}),a.flip.addEventListener("click",s=>{s.stopPropagation(),S()}),a.prev.addEventListener("click",()=>{n.prev(),u()}),a.again.addEventListener("click",()=>{n.rateAgain()?u():k()}),a.gotit.addEventListener("click",()=>{n.rateGotIt()?u():k()}),a.next.addEventListener("click",()=>{n.isFlipped()?n.rateNeutral()?u():k():n.nextNavigate()&&u()}),a.nextRound.addEventListener("click",()=>{n.nextRound(),u()}),a.restart.addEventListener("click",()=>{n.restart(),u()}),i=s=>{var c;if(!e.isConnected)return;const y=(c=s.target)==null?void 0:c.tagName;if(!(y==="INPUT"||y==="SELECT"||y==="TEXTAREA")){if(s.code==="Space"){s.preventDefault(),S();return}if(s.key==="ArrowLeft"){n.isFlipped()?n.rateAgain()?u():k():(n.prev(),u());return}if(s.key==="ArrowRight"||s.key==="1"){n.isFlipped()?n.rateGotIt()?u():k():n.nextNavigate()&&u();return}s.key==="2"&&n.isFlipped()&&(n.rateAgain()?u():k())}},window.addEventListener("keydown",i);const q=()=>{f().then(()=>{h(),x()})};return window.addEventListener("s3phy:lang",q),f().then(()=>{h(),u()}),()=>{window.removeEventListener("keydown",i),window.removeEventListener("s3phy:lang",q),n==null||n.restart(),e.innerHTML=""}}function fe(e){const t=String(e).replace(/^\.\//,""),r=window.location.origin,l=window.location.pathname,d=l.match(/^(.*\/dist)\/?/);if(d)return`${r}${d[1]}/${t}`;let n="./";n.endsWith("/")||(n+="/");const i=l.endsWith("/")?l:l.replace(/\/[^/]*$/,"/")||"/";return new URL(`${n}${t}`,`${r}${i}`).href}let A=null,_=null,B=null;function me(){return A||(A=P(()=>import("./flashcards-light-ch3-Cmbo5pjW.js"),[],import.meta.url).then(e=>e.default)),A}function pe(){return _||(_=P(()=>import("./flashcards-optics-definitions-BL7jdBfk.js"),[],import.meta.url).then(e=>e.default)),_}function ye(){return B||(B=P(()=>import("./flashcards-heat-ch1-DBrwHTm1.js"),[],import.meta.url).then(e=>e.default)),B}function be(e){return e==="zh-Hant"?"zhHant":"en"}function C(e){return fe(e)}function R(e,t){return e.filter(r=>r.topic===t)}function he(e,t,r,l){var a,f,b;const d=be(t);if((a=e==null?void 0:e.en)!=null&&a.front||(f=e==null?void 0:e.zhHant)!=null&&f.front){const m=(b=e[d])!=null&&b.front?e[d]:e.en||e.zhHant,v=C(m.front),k=m.back?C(m.back):v;return{id:r,subtopic:e.topic||l,front:"",back:"",frontImage:v,backImage:k,alt:e.alt||e.title||"",isImage:!0}}if(e!=null&&e.front){const m=C(e.front),v=e.back?C(e.back):m;return{id:r,subtopic:e.topic||l,front:"",back:"",frontImage:m,backImage:v,alt:e.alt||e.title||"",isImage:!0}}const n=e[d]||e.en,i={id:r,subtopic:e.topic||l,front:(n==null?void 0:n.q)||"",back:(n==null?void 0:n.a)||"",isImage:!1,compactFront:!!e.compactFront,compactBack:!!e.compactBack};return e.backImage&&(i.backImage=C(e.backImage),i.imageAlt=e.imageAlt||""),i}function V(e,t,r="General"){let l=1;return e.map(d=>{const n=he(d,t,l,d.topic||r);return l+=1,n})}function M(e,t){return e.filter(r=>r.topic===t)}async function ge(e){const t=await me(),r=await pe(),l=e==="rotatingMirror"?"reflection":e;return l==="all"?[...t,...r]:l==="reflection"?R(t,"reflection"):l==="refractionTir"?[...R(t,"refraction"),...R(t,"tir")]:l==="definitions"?r.slice():l==="convex"?M(r,"convex"):l==="concave"?M(r,"concave"):l==="em"?M(r,"em"):t.slice()}async function ve(e){const t=await ye();return e==="all"?t.slice():t.filter(r=>r.topic===e)}async function Ce(e,t){return V(await ge(e),t)}async function we(e,t){return V(await ve(e),t)}export{$e as a,Se as b,xe as c,Ce as d,H as e,K as f,we as g,qe as h,W as l,Le as m,j as n,Ee as r};
