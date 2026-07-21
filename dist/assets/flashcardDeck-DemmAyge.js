import{t as i,_ as M}from"./index-BI1C76fM.js";const z=1e5;function W(){const e=document.createElement("div");return!!(e.requestFullscreen||e.webkitRequestFullscreen||document.fullscreenEnabled||document.webkitFullscreenEnabled)}function w(e){return(document.fullscreenElement||document.webkitFullscreenElement)===e}function T(e){window.dispatchEvent(new Event("resize")),e==null||e.querySelectorAll("iframe").forEach(a=>{var s;try{(s=a.contentWindow)==null||s.dispatchEvent(new Event("resize"))}catch{}})}function U({app:e,stage:a,button:s,t:o,setCollapsed:d,getCollapsed:n}){let c=!1,t=!1,h=null;const b=s.querySelector(".material-symbols-outlined"),m=s.querySelector("[data-tool-fullscreen-label]"),v=x=>{s.setAttribute("aria-pressed",x?"true":"false"),b&&(b.textContent=x?"fullscreen_exit":"fullscreen"),m&&(m.textContent=o(x?"tools.exitFullscreen":"tools.fullscreen")),s.title=(m==null?void 0:m.textContent)||""},k=()=>{h&&(h.remove(),h=null),a.classList.remove("tool-stage--overlay-fullscreen"),document.body.style.overflow="",c=!1},C=async()=>{if(c){k(),e==null||e.classList.remove("is-lab-fullscreen"),d(t),v(!1);return}if(w(a))try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen&&await document.webkitExitFullscreen()}catch{}},p=()=>{t=n(),d(!0),e==null||e.classList.add("is-lab-fullscreen"),h=document.createElement("div"),h.className="tool-stage-overlay-backdrop",h.style.cssText="position:fixed;inset:0;z-index:"+z+";background:rgba(15,23,42,0.45);",document.body.appendChild(h),document.body.style.overflow="hidden",a.classList.add("tool-stage--overlay-fullscreen"),a.style.position="fixed",a.style.inset="0",a.style.zIndex=String(z+1),a.style.width="100dvw",a.style.height="100dvh",a.style.margin="0",c=!0,v(!0),requestAnimationFrame(()=>T(a)),h.addEventListener("click",()=>{C()})},g=async()=>{if(t=n(),d(!0),e==null||e.classList.add("is-lab-fullscreen"),!W()){p();return}try{if(a.requestFullscreen)await a.requestFullscreen();else if(a.webkitRequestFullscreen)await a.webkitRequestFullscreen();else{p();return}v(!0),requestAnimationFrame(()=>T(a))}catch{e==null||e.classList.remove("is-lab-fullscreen"),d(t),p()}},S=()=>{const x=w(a)||c;x||(e==null||e.classList.remove("is-lab-fullscreen"),c&&k(),d(t),a.style.position="",a.style.inset="",a.style.zIndex="",a.style.width="",a.style.height="",a.style.margin=""),v(x),x&&requestAnimationFrame(()=>T(a))};return s.addEventListener("click",()=>{w(a)||c?C():g()}),document.addEventListener("fullscreenchange",S),document.addEventListener("webkitfullscreenchange",S),v(!1),()=>{document.removeEventListener("fullscreenchange",S),document.removeEventListener("webkitfullscreenchange",S),C()}}const G="s3phy:tool-picker-collapsed",K=768;function fe({toolOrder:e,toolId:a,getLabel:s,t:o}){const d=e.map(n=>`<button type="button" data-tool="${n}" class="${a===n?"active":""}">${s(n)}</button>`).join("");return`
      <section class="panel panel--tools" data-tools-panel>
        <div class="tools-panel-head">
          <div class="tools-panel-head__text">
            <h2>${o("tools.title")}</h2>
            <p class="tools-active-lab" data-tool-active-label hidden>${s(a)}</p>
          </div>
          <div class="tools-panel-head__actions">
            <button type="button" class="tool-picker-toggle tool-fullscreen-btn" data-tool-fullscreen aria-pressed="false">
              <span class="material-symbols-outlined" aria-hidden="true">fullscreen</span>
              <span data-tool-fullscreen-label>${o("tools.fullscreen")}</span>
            </button>
            <button type="button" class="tool-picker-toggle" data-tool-picker-toggle aria-expanded="true">
              <span data-tool-picker-chevron aria-hidden="true">&#9650;</span>
              <span data-tool-picker-toggle-label>${o("tools.hideLabList")}</span>
            </button>
          </div>
        </div>
        <div class="tools-layout">
          <aside class="tool-picker" data-tool-picker>
            <p class="lead">${o("tools.pick")}</p>
            <div class="tool-list" data-tool-list>${d}</div>
          </aside>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function me(e,{getLabel:a,t:s,onSelectTool:o,mountTool:d,getActiveToolId:n}){const c=e.querySelector("[data-tools-panel]"),t=e.querySelector("[data-tool-picker]"),h=e.querySelector("[data-tool-list]"),b=e.querySelector("[data-tool-stage]"),m=e.querySelector("[data-tool-picker-toggle]"),v=e.querySelector("[data-tool-fullscreen]"),k=e.querySelector("[data-tool-picker-toggle-label]"),C=e.querySelector("[data-tool-picker-chevron]"),p=e.querySelector("[data-tool-active-label]");if(!c||!t||!h||!b||!m||!v)return;let g=sessionStorage.getItem(G)==="true";const S=()=>{p&&(p.textContent=a(n()))},x=()=>{m.setAttribute("aria-expanded",g?"false":"true"),k&&(k.textContent=s(g?"tools.showLabList":"tools.hideLabList")),C&&(C.textContent=g?"▼":"▲"),p&&(p.hidden=!g)},E=r=>{g=r,c.classList.toggle("is-picker-collapsed",g),sessionStorage.setItem(G,g?"true":"false"),x()};c.classList.toggle("is-picker-collapsed",g),S(),x(),m.addEventListener("click",()=>{E(!g)}),h.querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{const f=r.getAttribute("data-tool");f&&(o(f),h.querySelectorAll("button").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tool")===f)}),S(),d(b),window.innerWidth<=K&&E(!0))})}),d(b),U({app:document.getElementById("app"),stage:b,button:v,t:s,setCollapsed:E,getCollapsed:()=>g})}const V=1.7,j=.7,A=1,Q=.1,Y=3;function X(e){const a=Math.floor(e),s=e-a;return a+(Math.random()<s?1:0)}function O(e){for(let a=e.length-1;a>0;a-=1){const s=Math.floor(Math.random()*(a+1));[e[a],e[s]]=[e[s],e[a]]}return e}function Z(e){const a=new Map(e.map(n=>[n.id,n.copies])),s=[];let o=null;const d=e.reduce((n,c)=>n+c.copies,0);for(let n=0;n<d;n+=1){let c=[...a.entries()].filter(([b,m])=>m>0&&b!==o);c.length===0&&(c=[...a.entries()].filter(([,b])=>b>0)),c.sort((b,m)=>m[1]-b[1]);const[t,h]=c[0];s.push(t),a.set(t,h-1),o=t}return s}function J(e){const a=[];return e.forEach(({id:s,copies:o})=>{for(let d=0;d<o;d+=1)a.push(s)}),a}function ee(e){let a="sequence",s=1,o=[],d=[],n=0,c=!1,t=!1,h=!1;const b=new Map;function m(){return e()}function v(){return new Map(m().map(l=>[l.id,l]))}function k(){b.clear(),m().forEach(l=>{b.set(l.id,{nextRate:A,totalGotIt:0,roundAgain:0,roundGotIt:0,roundNeutral:0})})}function C(){const l=m();return s===1?l.map(y=>({id:y.id,copies:1})):l.map(y=>{var u;return{id:y.id,copies:X(((u=b.get(y.id))==null?void 0:u.nextRate)??A)}}).filter(y=>y.copies>0)}function p(l){if(l.length===0)return[];if(s===1){const y=l.map(u=>u.id);return a==="random"?O([...y]):[...y].sort((u,L)=>u-L)}return a==="random"?O(J(l)):Z(l)}function g(){if(t=!1,h=!1,o=C(),o.reduce((y,u)=>y+u.copies,0)===0){h=!0,t=!0,d=[],n=0;return}m().forEach(y=>{const u=b.get(y.id);u&&(u.roundAgain=0,u.roundGotIt=0,u.roundNeutral=0)}),d=p(o),n=0,c=!1}function S(){s=1,k(),g()}function x(){return d[n]??null}function E(){const l=x();return l==null?null:v().get(l)??null}function r(l){const y=x();if(y==null)return;const u=b.get(y);u&&(l==="again"?(u.nextRate=V,u.totalGotIt=0,u.roundAgain+=1):l==="gotit"?(u.totalGotIt+=1,u.roundGotIt+=1,u.nextRate=u.totalGotIt>=Y?Q:j):l==="neutral"&&(u.roundNeutral+=1,u.nextRate=A))}function f(){return c=!1,n<d.length-1?(n+=1,!1):(t=!0,!0)}return S(),{getMode:()=>a,setMode(l){a!==l&&(a=l,d=p(o),n=0,c=!1)},resetSession:S,getRoundNumber:()=>s,getProgress:()=>({index:d.length?n+1:0,total:d.length}),isFlipped:()=>c,flip(){c=!c},unflip(){c=!1},currentCard:E,prev(){return n>0?(n-=1,c=!1,!0):!1},nextNavigate(){return n<d.length-1?(n+=1,c=!1,!0):!1},rateAgain(){return c?(r("again"),f()):!1},rateGotIt(){return c?(r("gotit"),f()):!1},rateNeutral(){return c?(r("neutral"),f()):!1},isSummary:()=>t,isSessionComplete:()=>h,getRoundStats(){let l=0,y=0,u=0;return b.forEach(L=>{l+=L.roundAgain,y+=L.roundGotIt,u+=L.roundNeutral}),{again:l,gotIt:y,neutral:u}},nextRound(){s+=1,g()},restart(){S()}}}const te={thermometry:"flashcards.deck.thermometry",heatInternalEnergy:"flashcards.deck.heatInternalEnergy",changeOfState:"flashcards.deck.changeOfState",heatTransfer:"flashcards.deck.heatTransfer",reflection:"topic.reflection",refraction:"topic.refraction",tir:"topic.tir",convex:"topic.convex",concave:"topic.concave",em:"topic.em",rotatingMirror:"topic.reflection"};function ae(e){const a=te[e]||`topic.${e}`,s=i(a);return s===a?e:s}function pe(e,{deckOptions:a,buildDeck:s,initialDeck:o="all"}){let d=o,n=null,c=null;e.innerHTML=`
    <section class="panel panel--flashcards">
      <h2>${i("flashcards.title")}</h2>
      <p class="lead">${i("flashcards.intro")}</p>
      <div class="fc-controls no-print">
        <div class="control">
          <label>${i("flashcards.deck")}</label>
          <select data-fc-deck>
            ${a.map(r=>`<option value="${r.value}">${r.label}</option>`).join("")}
          </select>
        </div>
        <div class="fc-controls-right">
          <div class="fc-mode-group">
            <span class="fc-mode-label">${i("flashcards.studyMode")}</span>
            <div class="fc-mode-toggle" data-fc-mode>
              <button type="button" data-mode="sequence" class="active">${i("flashcards.mode.sequence")}</button>
              <button type="button" data-mode="random">${i("flashcards.mode.random")}</button>
            </div>
          </div>
          <span class="fc-round-badge" data-fc-round></span>
          <div class="fc-progress-block">
            <span class="fc-progress-label">${i("flashcards.progressLabel")}</span>
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
                <p class="fc-flip-prompt" data-fc-flip-prompt>${i("flashcards.tapFlip")}</p>
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
            <span data-fc-prev-label>${i("flashcards.prev")}</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-again" data-fc-again title="${i("flashcards.again")}">
            <span class="material-symbols-outlined" aria-hidden="true">history</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-flip" data-fc-flip title="${i("flashcards.flip")}">
            <span class="material-symbols-outlined fc-flip-icon" aria-hidden="true">sync</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-gotit" data-fc-gotit title="${i("flashcards.gotIt")}">
            <span class="material-symbols-outlined" aria-hidden="true">check</span>
          </button>
          <button type="button" class="fc-btn-nav" data-fc-next>
            <span data-fc-next-label>${i("flashcards.next")}</span>
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
          <button class="btn primary" type="button" data-fc-next-round>${i("flashcards.summary.nextRound")}</button>
          <button class="btn" type="button" data-fc-restart>${i("flashcards.summary.restart")}</button>
        </div>
      </div>
    </section>`;const t={deck:e.querySelector("[data-fc-deck]"),mode:e.querySelector("[data-fc-mode]"),round:e.querySelector("[data-fc-round]"),progress:e.querySelector("[data-fc-progress]"),studyPanel:e.querySelector("[data-fc-study-panel]"),summaryPanel:e.querySelector("[data-fc-summary]"),cardWrap:e.querySelector("[data-fc-card-wrap]"),cardInner:e.querySelector("[data-fc-card-inner]"),subtopicPill:e.querySelector("[data-fc-subtopic-pill]"),subtopicPillBack:e.querySelector("[data-fc-subtopic-pill-back]"),cardCode:e.querySelector("[data-fc-card-code]"),cardCodeBack:e.querySelector("[data-fc-card-code-back]"),frontBody:e.querySelector("[data-fc-front-body]"),backBody:e.querySelector("[data-fc-back-body]"),flipPrompt:e.querySelector("[data-fc-flip-prompt]"),hint:e.querySelector("[data-fc-hint]"),prev:e.querySelector("[data-fc-prev]"),again:e.querySelector("[data-fc-again]"),flip:e.querySelector("[data-fc-flip]"),gotit:e.querySelector("[data-fc-gotit]"),next:e.querySelector("[data-fc-next]"),summaryTitle:e.querySelector("[data-fc-summary-title]"),summaryStats:e.querySelector("[data-fc-summary-stats]"),summaryKeep:e.querySelector("[data-fc-summary-keep]"),summaryConfident:e.querySelector("[data-fc-summary-confident]"),nextRound:e.querySelector("[data-fc-next-round]"),restart:e.querySelector("[data-fc-restart]")};async function h(){const r=await s(d);n=ee(()=>r)}function b(r,f){const l=!f;t.prev.disabled=l,t.again.disabled=l||!r,t.gotit.disabled=l||!r,t.flip.disabled=l,t.next.disabled=l}function m(r,f,l=!1){var H;r.classList.remove("fc-card-text-long","fc-card-text-compact");const y=document.createElement("div");y.innerHTML=f||"";const u=(y.textContent||"").trim(),L=u.split(`
`).filter(Boolean).length,q=((H=(f||"").match(/<br\s*\/?>/gi))==null?void 0:H.length)??0,P=Math.max(L,q>0?q+1:0),N=u.length;l||P>=5||N>220?r.classList.add("fc-card-text-compact"):(P>=4||N>130)&&r.classList.add("fc-card-text-long")}function v(r,f,l){const y=(l||"").replace(/"/g,"&quot;"),u=(l||i("flashcards.question")).replace(/</g,"&lt;");r.innerHTML=`<img src="${f}" alt="${y}" loading="lazy" class="fc-card-img" data-fc-img /><p class="fc-img-fallback muted" data-fc-img-fallback hidden>${u}</p>`;const L=r.querySelector("[data-fc-img]"),q=r.querySelector("[data-fc-img-fallback]");L&&q&&(L.onerror=()=>{L.hidden=!0,q.hidden=!1},L.onload=()=>{L.hidden=!1,q.hidden=!0})}function k(){const r=n.currentCard(),f=n.isFlipped();if(t.cardInner.classList.toggle("fc-flipped",f),!r){t.subtopicPill.textContent="",t.subtopicPillBack.textContent="",t.cardCode.textContent="",t.cardCodeBack.textContent="",t.frontBody.innerHTML="",t.backBody.innerHTML="",t.flipPrompt.hidden=!0,t.cardWrap.classList.remove("fc-card-container--image"),b(!1,!1),t.hint.textContent="";return}const l=ae(r.subtopic),y=i("flashcards.cardCode").replace("{id}",String(r.id));if(t.subtopicPill.textContent=l,t.subtopicPillBack.textContent=l,t.cardCode.textContent=y,t.cardCodeBack.textContent=y,r.isImage)t.cardWrap.classList.add("fc-card-container--image"),t.flipPrompt.hidden=!0,v(t.frontBody,r.frontImage,r.alt),r.backImage&&r.backImage!==r.frontImage?v(t.backBody,r.backImage,r.alt):t.backBody.innerHTML=t.frontBody.innerHTML;else{if(t.cardWrap.classList.remove("fc-card-container--image"),t.flipPrompt.hidden=f,t.frontBody.innerHTML=r.front,r.backImage){const u=r.imageAlt||"";t.backBody.innerHTML=`${r.back}<img class="fc-card-back-img" src="${r.backImage}" alt="${u}" />`}else t.backBody.innerHTML=r.back;m(t.frontBody,r.front,r.compactFront),m(t.backBody,r.back,r.compactBack)}b(f,!0),t.hint.textContent=f?i("flashcards.hint.rated"):i("flashcards.flipFirst"),t.hint.classList.toggle("fc-rating-hint--action",!f)}function C(){const r=n.getRoundStats(),{total:f}=n.getProgress();n.isSessionComplete()?(t.summaryTitle.textContent=i("flashcards.summary.complete"),t.summaryStats.textContent=i("flashcards.summary.completeStats"),t.nextRound.hidden=!0):(t.summaryTitle.textContent=i("flashcards.summary.title").replace("{round}",String(n.getRoundNumber())),t.summaryStats.textContent=i("flashcards.summary.stats").replace("{total}",String(f)).replace("{again}",String(r.again)).replace("{gotIt}",String(r.gotIt)).replace("{neutral}",String(r.neutral)),t.nextRound.hidden=!1),t.summaryKeep.textContent=i("flashcards.summary.keep").replace("{count}",String(r.again)),t.summaryConfident.textContent=i("flashcards.summary.confident").replace("{count}",String(r.gotIt))}function p(){const{index:r,total:f}=n.getProgress();t.round.textContent=i("flashcards.round").replace("{round}",String(n.getRoundNumber())).replace("{total}",String(f)),t.progress.textContent=f?`${r} / ${f}`:"—";const l=n.isSummary();t.studyPanel.hidden=l,t.summaryPanel.hidden=!l,l?C():k()}function g(){const r=n.getMode();t.mode.querySelectorAll("button").forEach(f=>{f.classList.toggle("active",f.dataset.mode===r)})}function S(){n.currentCard()&&(n.flip(),k())}function x(){e.querySelector("h2").textContent=i("flashcards.title"),e.querySelector(".lead").textContent=i("flashcards.intro"),e.querySelector("[data-fc-deck]").previousElementSibling.textContent=i("flashcards.deck"),e.querySelector(".fc-mode-label").textContent=i("flashcards.studyMode"),e.querySelector(".fc-progress-label").textContent=i("flashcards.progressLabel"),t.mode.querySelector('[data-mode="sequence"]').textContent=i("flashcards.mode.sequence"),t.mode.querySelector('[data-mode="random"]').textContent=i("flashcards.mode.random"),t.flipPrompt.textContent=i("flashcards.tapFlip"),e.querySelector("[data-fc-prev-label]").textContent=i("flashcards.prev"),e.querySelector("[data-fc-next-label]").textContent=i("flashcards.next"),t.nextRound.textContent=i("flashcards.summary.nextRound"),t.restart.textContent=i("flashcards.summary.restart"),p()}t.deck.value=d,t.deck.addEventListener("change",()=>{d=t.deck.value,h().then(()=>{g(),p()})}),t.mode.querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{n.setMode(r.dataset.mode),g(),p()})}),t.cardWrap.addEventListener("click",r=>{r.target.closest("button")||S()}),t.flip.addEventListener("click",r=>{r.stopPropagation(),S()}),t.prev.addEventListener("click",()=>{n.prev(),p()}),t.again.addEventListener("click",()=>{n.rateAgain()?p():k()}),t.gotit.addEventListener("click",()=>{n.rateGotIt()?p():k()}),t.next.addEventListener("click",()=>{n.isFlipped()?n.rateNeutral()?p():k():n.nextNavigate()&&p()}),t.nextRound.addEventListener("click",()=>{n.nextRound(),p()}),t.restart.addEventListener("click",()=>{n.restart(),p()}),c=r=>{var l;if(!e.isConnected)return;const f=(l=r.target)==null?void 0:l.tagName;if(!(f==="INPUT"||f==="SELECT"||f==="TEXTAREA")){if(r.code==="Space"){r.preventDefault(),S();return}if(r.key==="ArrowLeft"){n.isFlipped()?n.rateAgain()?p():k():(n.prev(),p());return}if(r.key==="ArrowRight"||r.key==="1"){n.isFlipped()?n.rateGotIt()?p():k():n.nextNavigate()&&p();return}r.key==="2"&&n.isFlipped()&&(n.rateAgain()?p():k())}},window.addEventListener("keydown",c);const E=()=>{h().then(()=>{g(),x()})};return window.addEventListener("s3phy:lang",E),h().then(()=>{g(),p()}),()=>{window.removeEventListener("keydown",c),window.removeEventListener("s3phy:lang",E),n==null||n.restart(),e.innerHTML=""}}function ne(e){const a=String(e).replace(/^\.\//,""),s=window.location.origin,o=window.location.pathname,d=o.match(/^(.*\/dist)\/?/);if(d)return`${s}${d[1]}/${a}`;let n="./";n.endsWith("/")||(n+="/");const c=o.endsWith("/")?o:o.replace(/\/[^/]*$/,"/")||"/";return new URL(`${n}${a}`,`${s}${c}`).href}let R=null,$=null,B=null;function re(){return R||(R=M(()=>import("./flashcards-light-ch3-Cmbo5pjW.js"),[],import.meta.url).then(e=>e.default)),R}function se(){return $||($=M(()=>import("./flashcards-optics-definitions-DEVNO4HU.js"),[],import.meta.url).then(e=>e.default)),$}function le(){return B||(B=M(()=>import("./flashcards-heat-ch1-DBrwHTm1.js"),[],import.meta.url).then(e=>e.default)),B}function oe(e){return e==="zh-Hant"?"zhHant":"en"}function I(e){return ne(e)}function F(e,a){return e.filter(s=>s.topic===a)}function ce(e,a,s,o){var t,h,b;const d=oe(a);if((t=e==null?void 0:e.en)!=null&&t.front||(h=e==null?void 0:e.zhHant)!=null&&h.front){const m=(b=e[d])!=null&&b.front?e[d]:e.en||e.zhHant,v=I(m.front),k=m.back?I(m.back):v;return{id:s,subtopic:e.topic||o,front:"",back:"",frontImage:v,backImage:k,alt:e.alt||e.title||"",isImage:!0}}if(e!=null&&e.front){const m=I(e.front),v=e.back?I(e.back):m;return{id:s,subtopic:e.topic||o,front:"",back:"",frontImage:m,backImage:v,alt:e.alt||e.title||"",isImage:!0}}const n=e[d]||e.en,c={id:s,subtopic:e.topic||o,front:(n==null?void 0:n.q)||"",back:(n==null?void 0:n.a)||"",isImage:!1,compactFront:!!e.compactFront,compactBack:!!e.compactBack};return e.backImage&&(c.backImage=I(e.backImage),c.imageAlt=e.imageAlt||""),c}function D(e,a,s="General"){let o=1;return e.map(d=>{const n=ce(d,a,o,d.topic||s);return o+=1,n})}function _(e,a){return e.filter(s=>s.topic===a)}async function ie(e){const a=await re(),s=await se(),o=e==="rotatingMirror"?"reflection":e;return o==="all"?[...a,...s]:o==="reflection"?F(a,"reflection"):o==="refractionTir"?[...F(a,"refraction"),...F(a,"tir")]:o==="definitions"?s.slice():o==="convex"?_(s,"convex"):o==="concave"?_(s,"concave"):o==="em"?_(s,"em"):a.slice()}async function de(e){const a=await le();return e==="all"?a.slice():a.filter(s=>s.topic===e)}async function ye(e,a){return D(await ie(e),a)}async function be(e,a){return D(await de(e),a)}export{be as a,ye as b,me as h,pe as m,fe as r};
