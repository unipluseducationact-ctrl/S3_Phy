import{t as r,g as M,s as D,_ as z}from"./index-B8gW9J-J.js";function F(){return M()==="zh-Hant"?"zhHant":"en"}async function R(t,s){const o=`./${t}/${s}`;try{return(await fetch(o,{method:"HEAD"})).ok}catch{return!1}}async function O(t){return R("notes",t)}async function ut(t,s){const o=F();await Promise.all(s.map(async i=>{const u=t.querySelector(`[data-note-card="${i.key}"]`);if(!u)return;const e=u.querySelector("[data-note-body]"),l=o==="zhHant"?i.fileZh:i.fileEn,a=await O(l),h=`./notes/${l}`;a?e.innerHTML=`
          <iframe class="notes-grid" title="${r(`notes.card.${i.key}`)}" src="${h}" loading="lazy"></iframe>
          <p style="margin-top:8px"><a href="${h}" target="_blank" rel="noopener">${r("notes.openPdf")}</a></p>`:e.innerHTML=`<p class="lead">${r("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}))}async function ft(t,s,{version:o=""}={}){const i=F(),u=o?`?v=${o}`:"";await Promise.all(s.map(async e=>{const l=t.querySelector(`[data-summary-card="${e.key}"]`);if(!l)return;const a=l.querySelector("[data-summary-body]");if(e.type==="image"){const k=e.fileEn&&e.fileZh?i==="zhHant"?e.fileZh:e.fileEn:e.file,b=await R("summary",k),d=`${`./summary/${k}`}${u}`;b?a.innerHTML=`
          <img class="summary-thumb" src="${d}" alt="${r(`summary.item.${e.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${d}" target="_blank" rel="noopener">${r("summary.viewImage")}</a></p>`:a.innerHTML=`<p class="lead">${r("summary.missing")}</p>`;return}const h=i==="zhHant"?e.fileZh:e.fileEn,m=await R("summary-pdfs",h),g=`./summary-pdfs/${h}`;m?a.innerHTML=`
          <iframe class="notes-grid" title="${r(`summary.item.${e.key}`)}" src="${g}" loading="lazy"></iframe>
          <p style="margin-top:8px"><a href="${g}" target="_blank" rel="noopener">${r("summary.download")}</a></p>`:a.innerHTML=`<p class="lead">${r("summary.missing")}</p>`}))}const U=["topics","notes","tools","worksheets","flashcards","summary"],W={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function pt(t,{subtitleKey:s,activeSection:o,onSection:i,onLang:u}){t.innerHTML=`
    <header class="site-header">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${r("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${r(s)}</p>
        </div>
      </div>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${r("strand.back")}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <nav class="main-nav" data-nav></nav>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${r("footer.conventions")}</footer>
  `;const e=t.querySelector("[data-main]"),l=t.querySelector("[data-nav]"),a=t.querySelector("[data-lang]"),h=t.querySelector("[data-strand-back]");let m=o;function g(d){m=d,l.innerHTML=U.map(v=>`<button type="button" class="${d===v?"active":""}" data-sec="${v}">${r(W[v])}</button>`).join(""),l.querySelectorAll("button").forEach(v=>{v.addEventListener("click",()=>i(v.getAttribute("data-sec")))})}function k(){a.innerHTML=`
      <button type="button" data-set-lang="en" class="${M()==="en"?"active":""}">${r("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${M()==="zh-Hant"?"active":""}">${r("lang.zhHant")}</button>
    `,a.querySelectorAll("button").forEach(d=>{d.addEventListener("click",()=>{D(d.getAttribute("data-set-lang")),u()})})}function b(){t.querySelector("[data-hub-subtitle]").textContent=r(s),h.textContent=r("strand.back"),t.querySelector("[data-hub-footer]").textContent=r("footer.conventions"),t.querySelector(".site-title").textContent=r("app.title")}const x=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return h.addEventListener("click",x),g(o),k(),{main:e,updateSection(d){g(d)},refreshLabels(){b(),g(m),k()},destroy(){h.removeEventListener("click",x)}}}const P="s3phy:tool-picker-collapsed",K=820;function mt({toolOrder:t,toolId:s,getLabel:o,t:i}){const u=t.map(e=>`<button type="button" data-tool="${e}" class="${s===e?"active":""}">${o(e)}</button>`).join("");return`
      <section class="panel panel--tools" data-tools-panel>
        <div class="tools-panel-head">
          <div class="tools-panel-head__text">
            <h2>${i("tools.title")}</h2>
            <p class="tools-active-lab" data-tool-active-label hidden>${o(s)}</p>
          </div>
          <button type="button" class="tool-picker-toggle" data-tool-picker-toggle aria-expanded="true">
            <span data-tool-picker-chevron aria-hidden="true">&#9650;</span>
            <span data-tool-picker-toggle-label>${i("tools.hideLabList")}</span>
          </button>
        </div>
        <div class="tools-layout">
          <aside class="tool-picker" data-tool-picker>
            <p class="lead">${i("tools.pick")}</p>
            <div class="tool-list" data-tool-list>${u}</div>
          </aside>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function gt(t,{getLabel:s,t:o,onSelectTool:i,mountTool:u,getActiveToolId:e}){const l=t.querySelector("[data-tools-panel]"),a=t.querySelector("[data-tool-picker]"),h=t.querySelector("[data-tool-list]"),m=t.querySelector("[data-tool-stage]"),g=t.querySelector("[data-tool-picker-toggle]"),k=t.querySelector("[data-tool-picker-toggle-label]"),b=t.querySelector("[data-tool-picker-chevron]"),x=t.querySelector("[data-tool-active-label]");if(!l||!a||!h||!m||!g)return;let d=sessionStorage.getItem(P)==="true";const v=()=>{x&&(x.textContent=s(e()))},$=()=>{g.setAttribute("aria-expanded",d?"false":"true"),k&&(k.textContent=o(d?"tools.showLabList":"tools.hideLabList")),b&&(b.textContent=d?"▼":"▲"),x&&(x.hidden=!d)},L=C=>{d=C,l.classList.toggle("is-picker-collapsed",d),sessionStorage.setItem(P,d?"true":"false"),$()};l.classList.toggle("is-picker-collapsed",d),v(),$(),g.addEventListener("click",()=>{L(!d)}),h.querySelectorAll("button").forEach(C=>{C.addEventListener("click",()=>{const n=C.getAttribute("data-tool");n&&(i(n),h.querySelectorAll("button").forEach(f=>{f.classList.toggle("active",f.getAttribute("data-tool")===n)}),v(),u(m),window.innerWidth<=K&&L(!0))})}),u(m)}const j=1.7,Z=.7,I=1,Q=.1,V=3;function Y(t){const s=Math.floor(t),o=t-s;return s+(Math.random()<o?1:0)}function N(t){for(let s=t.length-1;s>0;s-=1){const o=Math.floor(Math.random()*(s+1));[t[s],t[o]]=[t[o],t[s]]}return t}function X(t){const s=new Map(t.map(e=>[e.id,e.copies])),o=[];let i=null;const u=t.reduce((e,l)=>e+l.copies,0);for(let e=0;e<u;e+=1){let l=[...s.entries()].filter(([m,g])=>g>0&&m!==i);l.length===0&&(l=[...s.entries()].filter(([,m])=>m>0)),l.sort((m,g)=>g[1]-m[1]);const[a,h]=l[0];o.push(a),s.set(a,h-1),i=a}return o}function J(t){const s=[];return t.forEach(({id:o,copies:i})=>{for(let u=0;u<i;u+=1)s.push(o)}),s}function tt(t){let s="sequence",o=1,i=[],u=[],e=0,l=!1,a=!1,h=!1;const m=new Map;function g(){return t()}function k(){return new Map(g().map(c=>[c.id,c]))}function b(){m.clear(),g().forEach(c=>{m.set(c.id,{nextRate:I,totalGotIt:0,roundAgain:0,roundGotIt:0,roundNeutral:0})})}function x(){const c=g();return o===1?c.map(y=>({id:y.id,copies:1})):c.map(y=>{var p;return{id:y.id,copies:Y(((p=m.get(y.id))==null?void 0:p.nextRate)??I)}}).filter(y=>y.copies>0)}function d(c){if(c.length===0)return[];if(o===1){const y=c.map(p=>p.id);return s==="random"?N([...y]):[...y].sort((p,S)=>p-S)}return s==="random"?N(J(c)):X(c)}function v(){if(a=!1,h=!1,i=x(),i.reduce((y,p)=>y+p.copies,0)===0){h=!0,a=!0,u=[],e=0;return}g().forEach(y=>{const p=m.get(y.id);p&&(p.roundAgain=0,p.roundGotIt=0,p.roundNeutral=0)}),u=d(i),e=0,l=!1}function $(){o=1,b(),v()}function L(){return u[e]??null}function C(){const c=L();return c==null?null:k().get(c)??null}function n(c){const y=L();if(y==null)return;const p=m.get(y);p&&(c==="again"?(p.nextRate=j,p.totalGotIt=0,p.roundAgain+=1):c==="gotit"?(p.totalGotIt+=1,p.roundGotIt+=1,p.nextRate=p.totalGotIt>=V?Q:Z):c==="neutral"&&(p.roundNeutral+=1,p.nextRate=I))}function f(){return l=!1,e<u.length-1?(e+=1,!1):(a=!0,!0)}return $(),{getMode:()=>s,setMode(c){s!==c&&(s=c,u=d(i),e=0,l=!1)},resetSession:$,getRoundNumber:()=>o,getProgress:()=>({index:u.length?e+1:0,total:u.length}),isFlipped:()=>l,flip(){l=!l},unflip(){l=!1},currentCard:C,prev(){return e>0?(e-=1,l=!1,!0):!1},nextNavigate(){return e<u.length-1?(e+=1,l=!1,!0):!1},rateAgain(){return l?(n("again"),f()):!1},rateGotIt(){return l?(n("gotit"),f()):!1},rateNeutral(){return l?(n("neutral"),f()):!1},isSummary:()=>a,isSessionComplete:()=>h,getRoundStats(){let c=0,y=0,p=0;return m.forEach(S=>{c+=S.roundAgain,y+=S.roundGotIt,p+=S.roundNeutral}),{again:c,gotIt:y,neutral:p}},nextRound(){o+=1,v()},restart(){$()}}}const et={thermometry:"flashcards.deck.thermometry",heatInternalEnergy:"flashcards.deck.heatInternalEnergy",changeOfState:"flashcards.deck.changeOfState",heatTransfer:"flashcards.deck.heatTransfer",reflection:"topic.reflection",refraction:"topic.refraction",tir:"topic.tir",rotatingMirror:"topic.reflection"};function at(t){const s=et[t]||`topic.${t}`,o=r(s);return o===s?t:o}function yt(t,{deckOptions:s,buildDeck:o,initialDeck:i="all"}){let u=i,e=null,l=null;t.innerHTML=`
    <section class="panel panel--flashcards">
      <h2>${r("flashcards.title")}</h2>
      <p class="lead">${r("flashcards.intro")}</p>
      <div class="fc-controls no-print">
        <div class="control">
          <label>${r("flashcards.deck")}</label>
          <select data-fc-deck>
            ${s.map(n=>`<option value="${n.value}">${n.label}</option>`).join("")}
          </select>
        </div>
        <div class="fc-controls-right">
          <div class="fc-mode-group">
            <span class="fc-mode-label">${r("flashcards.studyMode")}</span>
            <div class="fc-mode-toggle" data-fc-mode>
              <button type="button" data-mode="sequence" class="active">${r("flashcards.mode.sequence")}</button>
              <button type="button" data-mode="random">${r("flashcards.mode.random")}</button>
            </div>
          </div>
          <span class="fc-round-badge" data-fc-round></span>
          <div class="fc-progress-block">
            <span class="fc-progress-label">${r("flashcards.progressLabel")}</span>
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
                <p class="fc-flip-prompt" data-fc-flip-prompt>${r("flashcards.tapFlip")}</p>
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
            <span data-fc-prev-label>${r("flashcards.prev")}</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-again" data-fc-again title="${r("flashcards.again")}">
            <span class="material-symbols-outlined" aria-hidden="true">history</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-flip" data-fc-flip title="${r("flashcards.flip")}">
            <span class="material-symbols-outlined fc-flip-icon" aria-hidden="true">sync</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-gotit" data-fc-gotit title="${r("flashcards.gotIt")}">
            <span class="material-symbols-outlined" aria-hidden="true">check</span>
          </button>
          <button type="button" class="fc-btn-nav" data-fc-next>
            <span data-fc-next-label>${r("flashcards.next")}</span>
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
          <button class="btn primary" type="button" data-fc-next-round>${r("flashcards.summary.nextRound")}</button>
          <button class="btn" type="button" data-fc-restart>${r("flashcards.summary.restart")}</button>
        </div>
      </div>
    </section>`;const a={deck:t.querySelector("[data-fc-deck]"),mode:t.querySelector("[data-fc-mode]"),round:t.querySelector("[data-fc-round]"),progress:t.querySelector("[data-fc-progress]"),studyPanel:t.querySelector("[data-fc-study-panel]"),summaryPanel:t.querySelector("[data-fc-summary]"),cardWrap:t.querySelector("[data-fc-card-wrap]"),cardInner:t.querySelector("[data-fc-card-inner]"),subtopicPill:t.querySelector("[data-fc-subtopic-pill]"),subtopicPillBack:t.querySelector("[data-fc-subtopic-pill-back]"),cardCode:t.querySelector("[data-fc-card-code]"),cardCodeBack:t.querySelector("[data-fc-card-code-back]"),frontBody:t.querySelector("[data-fc-front-body]"),backBody:t.querySelector("[data-fc-back-body]"),flipPrompt:t.querySelector("[data-fc-flip-prompt]"),hint:t.querySelector("[data-fc-hint]"),prev:t.querySelector("[data-fc-prev]"),again:t.querySelector("[data-fc-again]"),flip:t.querySelector("[data-fc-flip]"),gotit:t.querySelector("[data-fc-gotit]"),next:t.querySelector("[data-fc-next]"),summaryTitle:t.querySelector("[data-fc-summary-title]"),summaryStats:t.querySelector("[data-fc-summary-stats]"),summaryKeep:t.querySelector("[data-fc-summary-keep]"),summaryConfident:t.querySelector("[data-fc-summary-confident]"),nextRound:t.querySelector("[data-fc-next-round]"),restart:t.querySelector("[data-fc-restart]")};async function h(){const n=await o(u);e=tt(()=>n)}function m(n,f){const c=!f;a.prev.disabled=c,a.again.disabled=c||!n,a.gotit.disabled=c||!n,a.flip.disabled=c,a.next.disabled=c}function g(n,f,c=!1){var H;n.classList.remove("fc-card-text-long","fc-card-text-compact");const y=document.createElement("div");y.innerHTML=f||"";const p=(y.textContent||"").trim(),S=p.split(`
`).filter(Boolean).length,q=((H=(f||"").match(/<br\s*\/?>/gi))==null?void 0:H.length)??0,_=Math.max(S,q>0?q+1:0),B=p.length;c||_>=5||B>220?n.classList.add("fc-card-text-compact"):(_>=4||B>130)&&n.classList.add("fc-card-text-long")}function k(n,f,c){const y=(c||"").replace(/"/g,"&quot;"),p=(c||r("flashcards.question")).replace(/</g,"&lt;");n.innerHTML=`<img src="${f}" alt="${y}" loading="lazy" class="fc-card-img" data-fc-img /><p class="fc-img-fallback muted" data-fc-img-fallback hidden>${p}</p>`;const S=n.querySelector("[data-fc-img]"),q=n.querySelector("[data-fc-img-fallback]");S&&q&&(S.onerror=()=>{S.hidden=!0,q.hidden=!1},S.onload=()=>{S.hidden=!1,q.hidden=!0})}function b(){const n=e.currentCard(),f=e.isFlipped();if(a.cardInner.classList.toggle("fc-flipped",f),!n){a.subtopicPill.textContent="",a.subtopicPillBack.textContent="",a.cardCode.textContent="",a.cardCodeBack.textContent="",a.frontBody.innerHTML="",a.backBody.innerHTML="",a.flipPrompt.hidden=!0,a.cardWrap.classList.remove("fc-card-container--image"),m(!1,!1),a.hint.textContent="";return}const c=at(n.subtopic),y=r("flashcards.cardCode").replace("{id}",String(n.id));a.subtopicPill.textContent=c,a.subtopicPillBack.textContent=c,a.cardCode.textContent=y,a.cardCodeBack.textContent=y,n.isImage?(a.cardWrap.classList.add("fc-card-container--image"),a.flipPrompt.hidden=!0,k(a.frontBody,n.frontImage,n.alt),n.backImage&&n.backImage!==n.frontImage?k(a.backBody,n.backImage,n.alt):a.backBody.innerHTML=a.frontBody.innerHTML):(a.cardWrap.classList.remove("fc-card-container--image"),a.flipPrompt.hidden=f,a.frontBody.innerHTML=n.front,a.backBody.innerHTML=n.back,g(a.frontBody,n.front,n.compactFront),g(a.backBody,n.back,n.compactBack)),m(f,!0),a.hint.textContent=f?r("flashcards.hint.rated"):r("flashcards.flipFirst"),a.hint.classList.toggle("fc-rating-hint--action",!f)}function x(){const n=e.getRoundStats(),{total:f}=e.getProgress();e.isSessionComplete()?(a.summaryTitle.textContent=r("flashcards.summary.complete"),a.summaryStats.textContent=r("flashcards.summary.completeStats"),a.nextRound.hidden=!0):(a.summaryTitle.textContent=r("flashcards.summary.title").replace("{round}",String(e.getRoundNumber())),a.summaryStats.textContent=r("flashcards.summary.stats").replace("{total}",String(f)).replace("{again}",String(n.again)).replace("{gotIt}",String(n.gotIt)).replace("{neutral}",String(n.neutral)),a.nextRound.hidden=!1),a.summaryKeep.textContent=r("flashcards.summary.keep").replace("{count}",String(n.again)),a.summaryConfident.textContent=r("flashcards.summary.confident").replace("{count}",String(n.gotIt))}function d(){const{index:n,total:f}=e.getProgress();a.round.textContent=r("flashcards.round").replace("{round}",String(e.getRoundNumber())).replace("{total}",String(f)),a.progress.textContent=f?`${n} / ${f}`:"—";const c=e.isSummary();a.studyPanel.hidden=c,a.summaryPanel.hidden=!c,c?x():b()}function v(){const n=e.getMode();a.mode.querySelectorAll("button").forEach(f=>{f.classList.toggle("active",f.dataset.mode===n)})}function $(){e.currentCard()&&(e.flip(),b())}function L(){t.querySelector("h2").textContent=r("flashcards.title"),t.querySelector(".lead").textContent=r("flashcards.intro"),t.querySelector("[data-fc-deck]").previousElementSibling.textContent=r("flashcards.deck"),t.querySelector(".fc-mode-label").textContent=r("flashcards.studyMode"),t.querySelector(".fc-progress-label").textContent=r("flashcards.progressLabel"),a.mode.querySelector('[data-mode="sequence"]').textContent=r("flashcards.mode.sequence"),a.mode.querySelector('[data-mode="random"]').textContent=r("flashcards.mode.random"),a.flipPrompt.textContent=r("flashcards.tapFlip"),t.querySelector("[data-fc-prev-label]").textContent=r("flashcards.prev"),t.querySelector("[data-fc-next-label]").textContent=r("flashcards.next"),a.nextRound.textContent=r("flashcards.summary.nextRound"),a.restart.textContent=r("flashcards.summary.restart"),d()}a.deck.value=u,a.deck.addEventListener("change",()=>{u=a.deck.value,h().then(()=>{v(),d()})}),a.mode.querySelectorAll("button").forEach(n=>{n.addEventListener("click",()=>{e.setMode(n.dataset.mode),v(),d()})}),a.cardWrap.addEventListener("click",n=>{n.target.closest("button")||$()}),a.flip.addEventListener("click",n=>{n.stopPropagation(),$()}),a.prev.addEventListener("click",()=>{e.prev(),d()}),a.again.addEventListener("click",()=>{e.rateAgain()?d():b()}),a.gotit.addEventListener("click",()=>{e.rateGotIt()?d():b()}),a.next.addEventListener("click",()=>{e.isFlipped()?e.rateNeutral()?d():b():e.nextNavigate()&&d()}),a.nextRound.addEventListener("click",()=>{e.nextRound(),d()}),a.restart.addEventListener("click",()=>{e.restart(),d()}),l=n=>{var c;if(!t.isConnected)return;const f=(c=n.target)==null?void 0:c.tagName;if(!(f==="INPUT"||f==="SELECT"||f==="TEXTAREA")){if(n.code==="Space"){n.preventDefault(),$();return}if(n.key==="ArrowLeft"){e.isFlipped()?e.rateAgain()?d():b():(e.prev(),d());return}if(n.key==="ArrowRight"||n.key==="1"){e.isFlipped()?e.rateGotIt()?d():b():e.nextNavigate()&&d();return}n.key==="2"&&e.isFlipped()&&(e.rateAgain()?d():b())}},window.addEventListener("keydown",l);const C=()=>{h().then(()=>{v(),L()})};return window.addEventListener("s3phy:lang",C),h().then(()=>{v(),d()}),()=>{window.removeEventListener("keydown",l),window.removeEventListener("s3phy:lang",C),e==null||e.restart(),t.innerHTML=""}}function nt(t){const s=String(t).replace(/^\.\//,""),o=window.location.origin,i=window.location.pathname,u=i.match(/^(.*\/dist)\/?/);if(u)return`${o}${u[1]}/${s}`;let e="./";e.endsWith("/")||(e+="/");const l=i.endsWith("/")?i:i.replace(/\/[^/]*$/,"/")||"/";return new URL(`${e}${s}`,`${o}${l}`).href}let T=null,w=null;function st(){return T||(T=z(()=>import("./flashcards-light-ch3-Cmbo5pjW.js"),[],import.meta.url).then(t=>t.default)),T}function rt(){return w||(w=z(()=>import("./flashcards-heat-ch1-DBrwHTm1.js"),[],import.meta.url).then(t=>t.default)),w}function ot(t){return t==="zh-Hant"?"zhHant":"en"}function E(t){return nt(t)}function A(t,s){return t.filter(o=>o.topic===s)}function ct(t,s,o,i){var l,a,h;const u=ot(s);if((l=t==null?void 0:t.en)!=null&&l.front||(a=t==null?void 0:t.zhHant)!=null&&a.front){const m=(h=t[u])!=null&&h.front?t[u]:t.en||t.zhHant,g=E(m.front),k=m.back?E(m.back):g;return{id:o,subtopic:t.topic||i,front:"",back:"",frontImage:g,backImage:k,alt:t.alt||t.title||"",isImage:!0}}if(t!=null&&t.front){const m=E(t.front),g=t.back?E(t.back):m;return{id:o,subtopic:t.topic||i,front:"",back:"",frontImage:m,backImage:g,alt:t.alt||t.title||"",isImage:!0}}const e=t[u]||t.en;return{id:o,subtopic:t.topic||i,front:(e==null?void 0:e.q)||"",back:(e==null?void 0:e.a)||"",isImage:!1,compactFront:!!t.compactFront,compactBack:!!t.compactBack}}function G(t,s,o="General"){let i=1;return t.map(u=>{const e=ct(u,s,i,u.topic||o);return i+=1,e})}async function lt(t){const s=await st(),o=t==="rotatingMirror"?"reflection":t;return o==="all"?s.slice():o==="reflection"?A(s,"reflection"):o==="refractionTir"?[...A(s,"refraction"),...A(s,"tir")]:s.slice()}async function it(t){const s=await rt();return t==="all"?s.slice():s.filter(o=>o.topic===t)}async function ht(t,s){return G(await lt(t),s)}async function bt(t,s){return G(await it(t),s)}export{yt as a,ut as b,ft as c,ht as d,R as e,bt as f,gt as h,F as l,pt as m,O as n,mt as r};
