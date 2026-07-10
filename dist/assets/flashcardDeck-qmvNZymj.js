import{t as o,g as H,s as Z,a as Y,_ as z}from"./index-5_btlkhv.js";const $=new Map;function K(){return H()==="zh-Hant"?"zhHant":"en"}function we(e){if(e)for(const t of Object.keys(e))t.endsWith("Cleanup")&&typeof e[t]=="function"&&e[t]()}async function P(e,t){const s=`./${e}/${t}`;if($.has(s))return $.get(s);try{const i=(await fetch(s,{method:"HEAD"})).ok;return $.set(s,i),i}catch{return $.set(s,!1),!1}}async function Q(e){return P("notes",e)}function X(e){return`${String(e).split("#")[0]}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}function j(e,t,s){const c=X(t);return`
    <div class="note-preview-wrap">
      <iframe class="note-preview" title="${e.replace(/"/g,"&quot;")}" src="${c}" loading="lazy"></iframe>
    </div>
    <p class="note-preview-link"><a href="${t}" target="_blank" rel="noopener">${s}</a></p>`}async function Ce(e,t){const s=K();await Promise.all(t.map(async c=>{const i=e.querySelector(`[data-note-card="${c.key}"]`);if(!i)return;const n=i.querySelector("[data-note-body]"),l=s==="zhHant"?c.fileZh:c.fileEn,a=await Q(l),u=`./notes/${l}`;a?n.innerHTML=j(o(`notes.card.${c.key}`),u,o("notes.openPdf")):n.innerHTML=`<p class="lead">${o("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}))}async function Ee(e,t,{version:s=""}={}){const c=K(),i=s?`?v=${s}`:"";await Promise.all(t.map(async n=>{const l=e.querySelector(`[data-summary-card="${n.key}"]`);if(!l)return;const a=l.querySelector("[data-summary-body]");if(n.type==="image"){const g=n.fileEn&&n.fileZh?c==="zhHant"?n.fileZh:n.fileEn:n.file,h=await P("summary",g),p=`${`./summary/${g}`}${i}`;h?a.innerHTML=`
          <img class="summary-thumb" src="${p}" alt="${o(`summary.item.${n.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${p}" target="_blank" rel="noopener">${o("summary.viewImage")}</a></p>`:a.innerHTML=`<p class="lead">${o("summary.missing")}</p>`;return}const u=c==="zhHant"?n.fileZh:n.fileEn,m=await P("summary-pdfs",u),f=`./summary-pdfs/${u}`;m?a.innerHTML=j(o(`summary.item.${n.key}`),f,o("summary.download")):a.innerHTML=`<p class="lead">${o("summary.missing")}</p>`}))}const J=16;function ee(e){if(!e)return{check(){},cleanup(){}};const t=e.querySelector(".main-nav");let s=0;function c(a){const u=e.querySelector(".site-header__brand"),m=e.querySelector(".site-header__actions"),f=u==null?void 0:u.querySelector(".brand-logo-wrap"),g=u==null?void 0:u.querySelector(".brand-text-block");let h=(u==null?void 0:u.offsetWidth)??0;a&&g&&(h=((f==null?void 0:f.offsetWidth)??0)+10);const L=(t==null?void 0:t.scrollWidth)??0,p=(m==null?void 0:m.offsetWidth)??0;return h+L+p+J*3}function i(){Z(),e.classList.remove("nav-hide-brand-text","nav-compact-pills"),e.offsetWidth;const a=e.clientWidth;let u=c(!1);u>a&&(e.classList.add("nav-hide-brand-text"),e.offsetWidth,u=c(!0)),(u>a||t&&t.scrollWidth>t.clientWidth+2)&&e.classList.add("nav-compact-pills")}function n(){window.clearTimeout(s),s=window.setTimeout(i,60)}i(),window.addEventListener("resize",n);let l;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(n),l.observe(e),t&&l.observe(t)),{check:i,cleanup(){window.clearTimeout(s),window.removeEventListener("resize",n),l==null||l.disconnect(),e.classList.remove("nav-hide-brand-text","nav-compact-pills")}}}const te=["topics","notes","tools","worksheets","quiz","flashcards","summary"],ae={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",quiz:"nav.quiz",flashcards:"nav.flashcards",summary:"nav.summary"};function $e(e,{subtitleKey:t,activeSection:s,onSection:c,onLang:i}){e.innerHTML=`
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
  `;const n=e.querySelector("[data-main]"),l=e.querySelector("[data-nav]"),a=e.querySelector("[data-lang]"),u=e.querySelector("[data-strand-back]");let m=s;const f=e.querySelector(".site-header--hub"),g=ee(f);function h(S){m=S,l.innerHTML=te.map((x,w)=>{const r=S===x?"active":"",y=`${w+1}. ${o(ae[x])}`;return`<button type="button" class="${r}" data-sec="${x}">${y}</button>`}).join(""),l.querySelectorAll("button").forEach(x=>{x.addEventListener("click",()=>c(x.getAttribute("data-sec")))}),requestAnimationFrame(()=>g.check())}function L(){a.innerHTML=`
      <button type="button" data-set-lang="en" class="${H()==="en"?"active":""}">${o("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${H()==="zh-Hant"?"active":""}">${o("lang.zhHant")}</button>
    `,a.querySelectorAll("button").forEach(S=>{S.addEventListener("click",()=>{Y(S.getAttribute("data-set-lang")),i()})})}function p(){e.querySelector("[data-hub-subtitle]").textContent=o(t),u.textContent=o("strand.back"),e.querySelector("[data-hub-footer]").textContent=o("footer.conventions"),e.querySelector(".site-title").textContent=o("app.title")}const k=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return u.addEventListener("click",k),h(s),L(),{main:n,updateSection(S){h(S)},refreshLabels(){p(),h(m),L()},destroy(){u.removeEventListener("click",k),g.cleanup()}}}const D=1e5;function ne(){const e=document.createElement("div");return!!(e.requestFullscreen||e.webkitRequestFullscreen||document.fullscreenEnabled||document.webkitFullscreenEnabled)}function T(e){return(document.fullscreenElement||document.webkitFullscreenElement)===e}function I(e){window.dispatchEvent(new Event("resize")),e==null||e.querySelectorAll("iframe").forEach(t=>{var s;try{(s=t.contentWindow)==null||s.dispatchEvent(new Event("resize"))}catch{}})}function se({app:e,stage:t,button:s,t:c,setCollapsed:i,getCollapsed:n}){let l=!1,a=!1,u=null;const m=s.querySelector(".material-symbols-outlined"),f=s.querySelector("[data-tool-fullscreen-label]"),g=x=>{s.setAttribute("aria-pressed",x?"true":"false"),m&&(m.textContent=x?"fullscreen_exit":"fullscreen"),f&&(f.textContent=c(x?"tools.exitFullscreen":"tools.fullscreen")),s.title=(f==null?void 0:f.textContent)||""},h=()=>{u&&(u.remove(),u=null),t.classList.remove("tool-stage--overlay-fullscreen"),document.body.style.overflow="",l=!1},L=async()=>{if(l){h(),e==null||e.classList.remove("is-lab-fullscreen"),i(a),g(!1);return}if(T(t))try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen&&await document.webkitExitFullscreen()}catch{}},p=()=>{a=n(),i(!0),e==null||e.classList.add("is-lab-fullscreen"),u=document.createElement("div"),u.className="tool-stage-overlay-backdrop",u.style.cssText="position:fixed;inset:0;z-index:"+D+";background:rgba(15,23,42,0.45);",document.body.appendChild(u),document.body.style.overflow="hidden",t.classList.add("tool-stage--overlay-fullscreen"),t.style.position="fixed",t.style.inset="0",t.style.zIndex=String(D+1),t.style.width="100dvw",t.style.height="100dvh",t.style.margin="0",l=!0,g(!0),requestAnimationFrame(()=>I(t)),u.addEventListener("click",()=>{L()})},k=async()=>{if(a=n(),i(!0),e==null||e.classList.add("is-lab-fullscreen"),!ne()){p();return}try{if(t.requestFullscreen)await t.requestFullscreen();else if(t.webkitRequestFullscreen)await t.webkitRequestFullscreen();else{p();return}g(!0),requestAnimationFrame(()=>I(t))}catch{e==null||e.classList.remove("is-lab-fullscreen"),i(a),p()}},S=()=>{const x=T(t)||l;x||(e==null||e.classList.remove("is-lab-fullscreen"),l&&h(),i(a),t.style.position="",t.style.inset="",t.style.zIndex="",t.style.width="",t.style.height="",t.style.margin=""),g(x),x&&requestAnimationFrame(()=>I(t))};return s.addEventListener("click",()=>{T(t)||l?L():k()}),document.addEventListener("fullscreenchange",S),document.addEventListener("webkitfullscreenchange",S),g(!1),()=>{document.removeEventListener("fullscreenchange",S),document.removeEventListener("webkitfullscreenchange",S),L()}}const G="s3phy:tool-picker-collapsed",re=768;function Te({toolOrder:e,toolId:t,getLabel:s,t:c}){const i=e.map(n=>`<button type="button" data-tool="${n}" class="${t===n?"active":""}">${s(n)}</button>`).join("");return`
      <section class="panel panel--tools" data-tools-panel>
        <div class="tools-panel-head">
          <div class="tools-panel-head__text">
            <h2>${c("tools.title")}</h2>
            <p class="tools-active-lab" data-tool-active-label hidden>${s(t)}</p>
          </div>
          <div class="tools-panel-head__actions">
            <button type="button" class="tool-picker-toggle tool-fullscreen-btn" data-tool-fullscreen aria-pressed="false">
              <span class="material-symbols-outlined" aria-hidden="true">fullscreen</span>
              <span data-tool-fullscreen-label>${c("tools.fullscreen")}</span>
            </button>
            <button type="button" class="tool-picker-toggle" data-tool-picker-toggle aria-expanded="true">
              <span data-tool-picker-chevron aria-hidden="true">&#9650;</span>
              <span data-tool-picker-toggle-label>${c("tools.hideLabList")}</span>
            </button>
          </div>
        </div>
        <div class="tools-layout">
          <aside class="tool-picker" data-tool-picker>
            <p class="lead">${c("tools.pick")}</p>
            <div class="tool-list" data-tool-list>${i}</div>
          </aside>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function Ie(e,{getLabel:t,t:s,onSelectTool:c,mountTool:i,getActiveToolId:n}){const l=e.querySelector("[data-tools-panel]"),a=e.querySelector("[data-tool-picker]"),u=e.querySelector("[data-tool-list]"),m=e.querySelector("[data-tool-stage]"),f=e.querySelector("[data-tool-picker-toggle]"),g=e.querySelector("[data-tool-fullscreen]"),h=e.querySelector("[data-tool-picker-toggle-label]"),L=e.querySelector("[data-tool-picker-chevron]"),p=e.querySelector("[data-tool-active-label]");if(!l||!a||!u||!m||!f||!g)return;let k=sessionStorage.getItem(G)==="true";const S=()=>{p&&(p.textContent=t(n()))},x=()=>{f.setAttribute("aria-expanded",k?"false":"true"),h&&(h.textContent=s(k?"tools.showLabList":"tools.hideLabList")),L&&(L.textContent=k?"▼":"▲"),p&&(p.hidden=!k)},w=r=>{k=r,l.classList.toggle("is-picker-collapsed",k),sessionStorage.setItem(G,k?"true":"false"),x()};l.classList.toggle("is-picker-collapsed",k),S(),x(),f.addEventListener("click",()=>{w(!k)}),u.querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{const y=r.getAttribute("data-tool");y&&(c(y),u.querySelectorAll("button").forEach(d=>{d.classList.toggle("active",d.getAttribute("data-tool")===y)}),S(),i(m),window.innerWidth<=re&&w(!0))})}),i(m),se({app:document.getElementById("app"),stage:m,button:g,t:s,setCollapsed:w,getCollapsed:()=>k})}const oe=1.7,ce=.7,A=1,le=.1,ie=3;function de(e){const t=Math.floor(e),s=e-t;return t+(Math.random()<s?1:0)}function U(e){for(let t=e.length-1;t>0;t-=1){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function ue(e){const t=new Map(e.map(n=>[n.id,n.copies])),s=[];let c=null;const i=e.reduce((n,l)=>n+l.copies,0);for(let n=0;n<i;n+=1){let l=[...t.entries()].filter(([m,f])=>f>0&&m!==c);l.length===0&&(l=[...t.entries()].filter(([,m])=>m>0)),l.sort((m,f)=>f[1]-m[1]);const[a,u]=l[0];s.push(a),t.set(a,u-1),c=a}return s}function fe(e){const t=[];return e.forEach(({id:s,copies:c})=>{for(let i=0;i<c;i+=1)t.push(s)}),t}function me(e){let t="sequence",s=1,c=[],i=[],n=0,l=!1,a=!1,u=!1;const m=new Map;function f(){return e()}function g(){return new Map(f().map(d=>[d.id,d]))}function h(){m.clear(),f().forEach(d=>{m.set(d.id,{nextRate:A,totalGotIt:0,roundAgain:0,roundGotIt:0,roundNeutral:0})})}function L(){const d=f();return s===1?d.map(v=>({id:v.id,copies:1})):d.map(v=>{var b;return{id:v.id,copies:de(((b=m.get(v.id))==null?void 0:b.nextRate)??A)}}).filter(v=>v.copies>0)}function p(d){if(d.length===0)return[];if(s===1){const v=d.map(b=>b.id);return t==="random"?U([...v]):[...v].sort((b,q)=>b-q)}return t==="random"?U(fe(d)):ue(d)}function k(){if(a=!1,u=!1,c=L(),c.reduce((v,b)=>v+b.copies,0)===0){u=!0,a=!0,i=[],n=0;return}f().forEach(v=>{const b=m.get(v.id);b&&(b.roundAgain=0,b.roundGotIt=0,b.roundNeutral=0)}),i=p(c),n=0,l=!1}function S(){s=1,h(),k()}function x(){return i[n]??null}function w(){const d=x();return d==null?null:g().get(d)??null}function r(d){const v=x();if(v==null)return;const b=m.get(v);b&&(d==="again"?(b.nextRate=oe,b.totalGotIt=0,b.roundAgain+=1):d==="gotit"?(b.totalGotIt+=1,b.roundGotIt+=1,b.nextRate=b.totalGotIt>=ie?le:ce):d==="neutral"&&(b.roundNeutral+=1,b.nextRate=A))}function y(){return l=!1,n<i.length-1?(n+=1,!1):(a=!0,!0)}return S(),{getMode:()=>t,setMode(d){t!==d&&(t=d,i=p(c),n=0,l=!1)},resetSession:S,getRoundNumber:()=>s,getProgress:()=>({index:i.length?n+1:0,total:i.length}),isFlipped:()=>l,flip(){l=!l},unflip(){l=!1},currentCard:w,prev(){return n>0?(n-=1,l=!1,!0):!1},nextNavigate(){return n<i.length-1?(n+=1,l=!1,!0):!1},rateAgain(){return l?(r("again"),y()):!1},rateGotIt(){return l?(r("gotit"),y()):!1},rateNeutral(){return l?(r("neutral"),y()):!1},isSummary:()=>a,isSessionComplete:()=>u,getRoundStats(){let d=0,v=0,b=0;return m.forEach(q=>{d+=q.roundAgain,v+=q.roundGotIt,b+=q.roundNeutral}),{again:d,gotIt:v,neutral:b}},nextRound(){s+=1,k()},restart(){S()}}}const pe={thermometry:"flashcards.deck.thermometry",heatInternalEnergy:"flashcards.deck.heatInternalEnergy",changeOfState:"flashcards.deck.changeOfState",heatTransfer:"flashcards.deck.heatTransfer",reflection:"topic.reflection",refraction:"topic.refraction",tir:"topic.tir",convex:"topic.convex",concave:"topic.concave",em:"topic.em",rotatingMirror:"topic.reflection"};function ye(e){const t=pe[e]||`topic.${e}`,s=o(t);return s===t?e:s}function Ae(e,{deckOptions:t,buildDeck:s,initialDeck:c="all"}){let i=c,n=null,l=null;e.innerHTML=`
    <section class="panel panel--flashcards">
      <h2>${o("flashcards.title")}</h2>
      <p class="lead">${o("flashcards.intro")}</p>
      <div class="fc-controls no-print">
        <div class="control">
          <label>${o("flashcards.deck")}</label>
          <select data-fc-deck>
            ${t.map(r=>`<option value="${r.value}">${r.label}</option>`).join("")}
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
    </section>`;const a={deck:e.querySelector("[data-fc-deck]"),mode:e.querySelector("[data-fc-mode]"),round:e.querySelector("[data-fc-round]"),progress:e.querySelector("[data-fc-progress]"),studyPanel:e.querySelector("[data-fc-study-panel]"),summaryPanel:e.querySelector("[data-fc-summary]"),cardWrap:e.querySelector("[data-fc-card-wrap]"),cardInner:e.querySelector("[data-fc-card-inner]"),subtopicPill:e.querySelector("[data-fc-subtopic-pill]"),subtopicPillBack:e.querySelector("[data-fc-subtopic-pill-back]"),cardCode:e.querySelector("[data-fc-card-code]"),cardCodeBack:e.querySelector("[data-fc-card-code-back]"),frontBody:e.querySelector("[data-fc-front-body]"),backBody:e.querySelector("[data-fc-back-body]"),flipPrompt:e.querySelector("[data-fc-flip-prompt]"),hint:e.querySelector("[data-fc-hint]"),prev:e.querySelector("[data-fc-prev]"),again:e.querySelector("[data-fc-again]"),flip:e.querySelector("[data-fc-flip]"),gotit:e.querySelector("[data-fc-gotit]"),next:e.querySelector("[data-fc-next]"),summaryTitle:e.querySelector("[data-fc-summary-title]"),summaryStats:e.querySelector("[data-fc-summary-stats]"),summaryKeep:e.querySelector("[data-fc-summary-keep]"),summaryConfident:e.querySelector("[data-fc-summary-confident]"),nextRound:e.querySelector("[data-fc-next-round]"),restart:e.querySelector("[data-fc-restart]")};async function u(){const r=await s(i);n=me(()=>r)}function m(r,y){const d=!y;a.prev.disabled=d,a.again.disabled=d||!r,a.gotit.disabled=d||!r,a.flip.disabled=d,a.next.disabled=d}function f(r,y,d=!1){var O;r.classList.remove("fc-card-text-long","fc-card-text-compact");const v=document.createElement("div");v.innerHTML=y||"";const b=(v.textContent||"").trim(),q=b.split(`
`).filter(Boolean).length,C=((O=(y||"").match(/<br\s*\/?>/gi))==null?void 0:O.length)??0,N=Math.max(q,C>0?C+1:0),W=b.length;d||N>=5||W>220?r.classList.add("fc-card-text-compact"):(N>=4||W>130)&&r.classList.add("fc-card-text-long")}function g(r,y,d){const v=(d||"").replace(/"/g,"&quot;"),b=(d||o("flashcards.question")).replace(/</g,"&lt;");r.innerHTML=`<img src="${y}" alt="${v}" loading="lazy" class="fc-card-img" data-fc-img /><p class="fc-img-fallback muted" data-fc-img-fallback hidden>${b}</p>`;const q=r.querySelector("[data-fc-img]"),C=r.querySelector("[data-fc-img-fallback]");q&&C&&(q.onerror=()=>{q.hidden=!0,C.hidden=!1},q.onload=()=>{q.hidden=!1,C.hidden=!0})}function h(){const r=n.currentCard(),y=n.isFlipped();if(a.cardInner.classList.toggle("fc-flipped",y),!r){a.subtopicPill.textContent="",a.subtopicPillBack.textContent="",a.cardCode.textContent="",a.cardCodeBack.textContent="",a.frontBody.innerHTML="",a.backBody.innerHTML="",a.flipPrompt.hidden=!0,a.cardWrap.classList.remove("fc-card-container--image"),m(!1,!1),a.hint.textContent="";return}const d=ye(r.subtopic),v=o("flashcards.cardCode").replace("{id}",String(r.id));if(a.subtopicPill.textContent=d,a.subtopicPillBack.textContent=d,a.cardCode.textContent=v,a.cardCodeBack.textContent=v,r.isImage)a.cardWrap.classList.add("fc-card-container--image"),a.flipPrompt.hidden=!0,g(a.frontBody,r.frontImage,r.alt),r.backImage&&r.backImage!==r.frontImage?g(a.backBody,r.backImage,r.alt):a.backBody.innerHTML=a.frontBody.innerHTML;else{if(a.cardWrap.classList.remove("fc-card-container--image"),a.flipPrompt.hidden=y,a.frontBody.innerHTML=r.front,r.backImage){const b=r.imageAlt||"";a.backBody.innerHTML=`${r.back}<img class="fc-card-back-img" src="${r.backImage}" alt="${b}" />`}else a.backBody.innerHTML=r.back;f(a.frontBody,r.front,r.compactFront),f(a.backBody,r.back,r.compactBack)}m(y,!0),a.hint.textContent=y?o("flashcards.hint.rated"):o("flashcards.flipFirst"),a.hint.classList.toggle("fc-rating-hint--action",!y)}function L(){const r=n.getRoundStats(),{total:y}=n.getProgress();n.isSessionComplete()?(a.summaryTitle.textContent=o("flashcards.summary.complete"),a.summaryStats.textContent=o("flashcards.summary.completeStats"),a.nextRound.hidden=!0):(a.summaryTitle.textContent=o("flashcards.summary.title").replace("{round}",String(n.getRoundNumber())),a.summaryStats.textContent=o("flashcards.summary.stats").replace("{total}",String(y)).replace("{again}",String(r.again)).replace("{gotIt}",String(r.gotIt)).replace("{neutral}",String(r.neutral)),a.nextRound.hidden=!1),a.summaryKeep.textContent=o("flashcards.summary.keep").replace("{count}",String(r.again)),a.summaryConfident.textContent=o("flashcards.summary.confident").replace("{count}",String(r.gotIt))}function p(){const{index:r,total:y}=n.getProgress();a.round.textContent=o("flashcards.round").replace("{round}",String(n.getRoundNumber())).replace("{total}",String(y)),a.progress.textContent=y?`${r} / ${y}`:"—";const d=n.isSummary();a.studyPanel.hidden=d,a.summaryPanel.hidden=!d,d?L():h()}function k(){const r=n.getMode();a.mode.querySelectorAll("button").forEach(y=>{y.classList.toggle("active",y.dataset.mode===r)})}function S(){n.currentCard()&&(n.flip(),h())}function x(){e.querySelector("h2").textContent=o("flashcards.title"),e.querySelector(".lead").textContent=o("flashcards.intro"),e.querySelector("[data-fc-deck]").previousElementSibling.textContent=o("flashcards.deck"),e.querySelector(".fc-mode-label").textContent=o("flashcards.studyMode"),e.querySelector(".fc-progress-label").textContent=o("flashcards.progressLabel"),a.mode.querySelector('[data-mode="sequence"]').textContent=o("flashcards.mode.sequence"),a.mode.querySelector('[data-mode="random"]').textContent=o("flashcards.mode.random"),a.flipPrompt.textContent=o("flashcards.tapFlip"),e.querySelector("[data-fc-prev-label]").textContent=o("flashcards.prev"),e.querySelector("[data-fc-next-label]").textContent=o("flashcards.next"),a.nextRound.textContent=o("flashcards.summary.nextRound"),a.restart.textContent=o("flashcards.summary.restart"),p()}a.deck.value=i,a.deck.addEventListener("change",()=>{i=a.deck.value,u().then(()=>{k(),p()})}),a.mode.querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{n.setMode(r.dataset.mode),k(),p()})}),a.cardWrap.addEventListener("click",r=>{r.target.closest("button")||S()}),a.flip.addEventListener("click",r=>{r.stopPropagation(),S()}),a.prev.addEventListener("click",()=>{n.prev(),p()}),a.again.addEventListener("click",()=>{n.rateAgain()?p():h()}),a.gotit.addEventListener("click",()=>{n.rateGotIt()?p():h()}),a.next.addEventListener("click",()=>{n.isFlipped()?n.rateNeutral()?p():h():n.nextNavigate()&&p()}),a.nextRound.addEventListener("click",()=>{n.nextRound(),p()}),a.restart.addEventListener("click",()=>{n.restart(),p()}),l=r=>{var d;if(!e.isConnected)return;const y=(d=r.target)==null?void 0:d.tagName;if(!(y==="INPUT"||y==="SELECT"||y==="TEXTAREA")){if(r.code==="Space"){r.preventDefault(),S();return}if(r.key==="ArrowLeft"){n.isFlipped()?n.rateAgain()?p():h():(n.prev(),p());return}if(r.key==="ArrowRight"||r.key==="1"){n.isFlipped()?n.rateGotIt()?p():h():n.nextNavigate()&&p();return}r.key==="2"&&n.isFlipped()&&(n.rateAgain()?p():h())}},window.addEventListener("keydown",l);const w=()=>{u().then(()=>{k(),x()})};return window.addEventListener("s3phy:lang",w),u().then(()=>{k(),p()}),()=>{window.removeEventListener("keydown",l),window.removeEventListener("s3phy:lang",w),n==null||n.restart(),e.innerHTML=""}}function be(e){const t=String(e).replace(/^\.\//,""),s=window.location.origin,c=window.location.pathname,i=c.match(/^(.*\/dist)\/?/);if(i)return`${s}${i[1]}/${t}`;let n="./";n.endsWith("/")||(n+="/");const l=c.endsWith("/")?c:c.replace(/\/[^/]*$/,"/")||"/";return new URL(`${n}${t}`,`${s}${l}`).href}let _=null,R=null,B=null;function he(){return _||(_=z(()=>import("./flashcards-light-ch3-Cmbo5pjW.js"),[],import.meta.url).then(e=>e.default)),_}function ve(){return R||(R=z(()=>import("./flashcards-optics-definitions-DEVNO4HU.js"),[],import.meta.url).then(e=>e.default)),R}function ge(){return B||(B=z(()=>import("./flashcards-heat-ch1-DBrwHTm1.js"),[],import.meta.url).then(e=>e.default)),B}function ke(e){return e==="zh-Hant"?"zhHant":"en"}function E(e){return be(e)}function M(e,t){return e.filter(s=>s.topic===t)}function Se(e,t,s,c){var a,u,m;const i=ke(t);if((a=e==null?void 0:e.en)!=null&&a.front||(u=e==null?void 0:e.zhHant)!=null&&u.front){const f=(m=e[i])!=null&&m.front?e[i]:e.en||e.zhHant,g=E(f.front),h=f.back?E(f.back):g;return{id:s,subtopic:e.topic||c,front:"",back:"",frontImage:g,backImage:h,alt:e.alt||e.title||"",isImage:!0}}if(e!=null&&e.front){const f=E(e.front),g=e.back?E(e.back):f;return{id:s,subtopic:e.topic||c,front:"",back:"",frontImage:f,backImage:g,alt:e.alt||e.title||"",isImage:!0}}const n=e[i]||e.en,l={id:s,subtopic:e.topic||c,front:(n==null?void 0:n.q)||"",back:(n==null?void 0:n.a)||"",isImage:!1,compactFront:!!e.compactFront,compactBack:!!e.compactBack};return e.backImage&&(l.backImage=E(e.backImage),l.imageAlt=e.imageAlt||""),l}function V(e,t,s="General"){let c=1;return e.map(i=>{const n=Se(i,t,c,i.topic||s);return c+=1,n})}function F(e,t){return e.filter(s=>s.topic===t)}async function xe(e){const t=await he(),s=await ve(),c=e==="rotatingMirror"?"reflection":e;return c==="all"?[...t,...s]:c==="reflection"?M(t,"reflection"):c==="refractionTir"?[...M(t,"refraction"),...M(t,"tir")]:c==="definitions"?s.slice():c==="convex"?F(s,"convex"):c==="concave"?F(s,"concave"):c==="em"?F(s,"em"):t.slice()}async function Le(e){const t=await ge();return e==="all"?t.slice():t.filter(s=>s.topic===e)}async function _e(e,t){return V(await xe(e),t)}async function Re(e,t){return V(await Le(e),t)}export{Ae as a,Ce as b,we as c,Ee as d,_e as e,Re as f,Ie as h,$e as m,Te as r};
