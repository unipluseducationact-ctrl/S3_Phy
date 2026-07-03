import{t as r,g as M,s as O,_ as z}from"./index-C6lJ1V9B.js";function F(){return M()==="zh-Hant"?"zhHant":"en"}async function R(t,n){const o=`./${t}/${n}`;try{return(await fetch(o,{method:"HEAD"})).ok}catch{return!1}}async function U(t){return R("notes",t)}function W(t){return`${String(t).split("#")[0]}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}function G(t,n,o){const l=W(n);return`
    <div class="note-preview-wrap">
      <iframe class="note-preview" title="${t.replace(/"/g,"&quot;")}" src="${l}" loading="lazy"></iframe>
    </div>
    <p class="note-preview-link"><a href="${n}" target="_blank" rel="noopener">${o}</a></p>`}async function pt(t,n){const o=F();await Promise.all(n.map(async l=>{const d=t.querySelector(`[data-note-card="${l.key}"]`);if(!d)return;const e=d.querySelector("[data-note-body]"),i=o==="zhHant"?l.fileZh:l.fileEn,a=await U(i),y=`./notes/${i}`;a?e.innerHTML=G(r(`notes.card.${l.key}`),y,r("notes.openPdf")):e.innerHTML=`<p class="lead">${r("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}))}async function mt(t,n,{version:o=""}={}){const l=F(),d=o?`?v=${o}`:"";await Promise.all(n.map(async e=>{const i=t.querySelector(`[data-summary-card="${e.key}"]`);if(!i)return;const a=i.querySelector("[data-summary-body]");if(e.type==="image"){const k=e.fileEn&&e.fileZh?l==="zhHant"?e.fileZh:e.fileEn:e.file,b=await R("summary",k),u=`${`./summary/${k}`}${d}`;b?a.innerHTML=`
          <img class="summary-thumb" src="${u}" alt="${r(`summary.item.${e.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${u}" target="_blank" rel="noopener">${r("summary.viewImage")}</a></p>`:a.innerHTML=`<p class="lead">${r("summary.missing")}</p>`;return}const y=l==="zhHant"?e.fileZh:e.fileEn,m=await R("summary-pdfs",y),h=`./summary-pdfs/${y}`;m?a.innerHTML=G(r(`summary.item.${e.key}`),h,r("summary.download")):a.innerHTML=`<p class="lead">${r("summary.missing")}</p>`}))}const K=["topics","notes","tools","worksheets","quiz","flashcards","summary"],j={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",quiz:"nav.quiz",flashcards:"nav.flashcards",summary:"nav.summary"};function gt(t,{subtitleKey:n,activeSection:o,onSection:l,onLang:d}){t.innerHTML=`
    <header class="site-header">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${r("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${r(n)}</p>
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
  `;const e=t.querySelector("[data-main]"),i=t.querySelector("[data-nav]"),a=t.querySelector("[data-lang]"),y=t.querySelector("[data-strand-back]");let m=o;function h(u){m=u,i.innerHTML=K.map(v=>`<button type="button" class="${u===v?"active":""}" data-sec="${v}">${r(j[v])}</button>`).join(""),i.querySelectorAll("button").forEach(v=>{v.addEventListener("click",()=>l(v.getAttribute("data-sec")))})}function k(){a.innerHTML=`
      <button type="button" data-set-lang="en" class="${M()==="en"?"active":""}">${r("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${M()==="zh-Hant"?"active":""}">${r("lang.zhHant")}</button>
    `,a.querySelectorAll("button").forEach(u=>{u.addEventListener("click",()=>{O(u.getAttribute("data-set-lang")),d()})})}function b(){t.querySelector("[data-hub-subtitle]").textContent=r(n),y.textContent=r("strand.back"),t.querySelector("[data-hub-footer]").textContent=r("footer.conventions"),t.querySelector(".site-title").textContent=r("app.title")}const x=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return y.addEventListener("click",x),h(o),k(),{main:e,updateSection(u){h(u)},refreshLabels(){b(),h(m),k()},destroy(){y.removeEventListener("click",x)}}}const P="s3phy:tool-picker-collapsed",Z=820;function ht({toolOrder:t,toolId:n,getLabel:o,t:l}){const d=t.map(e=>`<button type="button" data-tool="${e}" class="${n===e?"active":""}">${o(e)}</button>`).join("");return`
      <section class="panel panel--tools" data-tools-panel>
        <div class="tools-panel-head">
          <div class="tools-panel-head__text">
            <h2>${l("tools.title")}</h2>
            <p class="tools-active-lab" data-tool-active-label hidden>${o(n)}</p>
          </div>
          <button type="button" class="tool-picker-toggle" data-tool-picker-toggle aria-expanded="true">
            <span data-tool-picker-chevron aria-hidden="true">&#9650;</span>
            <span data-tool-picker-toggle-label>${l("tools.hideLabList")}</span>
          </button>
        </div>
        <div class="tools-layout">
          <aside class="tool-picker" data-tool-picker>
            <p class="lead">${l("tools.pick")}</p>
            <div class="tool-list" data-tool-list>${d}</div>
          </aside>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function yt(t,{getLabel:n,t:o,onSelectTool:l,mountTool:d,getActiveToolId:e}){const i=t.querySelector("[data-tools-panel]"),a=t.querySelector("[data-tool-picker]"),y=t.querySelector("[data-tool-list]"),m=t.querySelector("[data-tool-stage]"),h=t.querySelector("[data-tool-picker-toggle]"),k=t.querySelector("[data-tool-picker-toggle-label]"),b=t.querySelector("[data-tool-picker-chevron]"),x=t.querySelector("[data-tool-active-label]");if(!i||!a||!y||!m||!h)return;let u=sessionStorage.getItem(P)==="true";const v=()=>{x&&(x.textContent=n(e()))},C=()=>{h.setAttribute("aria-expanded",u?"false":"true"),k&&(k.textContent=o(u?"tools.showLabList":"tools.hideLabList")),b&&(b.textContent=u?"▼":"▲"),x&&(x.hidden=!u)},$=L=>{u=L,i.classList.toggle("is-picker-collapsed",u),sessionStorage.setItem(P,u?"true":"false"),C()};i.classList.toggle("is-picker-collapsed",u),v(),C(),h.addEventListener("click",()=>{$(!u)}),y.querySelectorAll("button").forEach(L=>{L.addEventListener("click",()=>{const s=L.getAttribute("data-tool");s&&(l(s),y.querySelectorAll("button").forEach(f=>{f.classList.toggle("active",f.getAttribute("data-tool")===s)}),v(),d(m),window.innerWidth<=Z&&$(!0))})}),d(m)}const Q=1.7,V=.7,w=1,Y=.1,X=3;function J(t){const n=Math.floor(t),o=t-n;return n+(Math.random()<o?1:0)}function N(t){for(let n=t.length-1;n>0;n-=1){const o=Math.floor(Math.random()*(n+1));[t[n],t[o]]=[t[o],t[n]]}return t}function tt(t){const n=new Map(t.map(e=>[e.id,e.copies])),o=[];let l=null;const d=t.reduce((e,i)=>e+i.copies,0);for(let e=0;e<d;e+=1){let i=[...n.entries()].filter(([m,h])=>h>0&&m!==l);i.length===0&&(i=[...n.entries()].filter(([,m])=>m>0)),i.sort((m,h)=>h[1]-m[1]);const[a,y]=i[0];o.push(a),n.set(a,y-1),l=a}return o}function et(t){const n=[];return t.forEach(({id:o,copies:l})=>{for(let d=0;d<l;d+=1)n.push(o)}),n}function at(t){let n="sequence",o=1,l=[],d=[],e=0,i=!1,a=!1,y=!1;const m=new Map;function h(){return t()}function k(){return new Map(h().map(c=>[c.id,c]))}function b(){m.clear(),h().forEach(c=>{m.set(c.id,{nextRate:w,totalGotIt:0,roundAgain:0,roundGotIt:0,roundNeutral:0})})}function x(){const c=h();return o===1?c.map(g=>({id:g.id,copies:1})):c.map(g=>{var p;return{id:g.id,copies:J(((p=m.get(g.id))==null?void 0:p.nextRate)??w)}}).filter(g=>g.copies>0)}function u(c){if(c.length===0)return[];if(o===1){const g=c.map(p=>p.id);return n==="random"?N([...g]):[...g].sort((p,S)=>p-S)}return n==="random"?N(et(c)):tt(c)}function v(){if(a=!1,y=!1,l=x(),l.reduce((g,p)=>g+p.copies,0)===0){y=!0,a=!0,d=[],e=0;return}h().forEach(g=>{const p=m.get(g.id);p&&(p.roundAgain=0,p.roundGotIt=0,p.roundNeutral=0)}),d=u(l),e=0,i=!1}function C(){o=1,b(),v()}function $(){return d[e]??null}function L(){const c=$();return c==null?null:k().get(c)??null}function s(c){const g=$();if(g==null)return;const p=m.get(g);p&&(c==="again"?(p.nextRate=Q,p.totalGotIt=0,p.roundAgain+=1):c==="gotit"?(p.totalGotIt+=1,p.roundGotIt+=1,p.nextRate=p.totalGotIt>=X?Y:V):c==="neutral"&&(p.roundNeutral+=1,p.nextRate=w))}function f(){return i=!1,e<d.length-1?(e+=1,!1):(a=!0,!0)}return C(),{getMode:()=>n,setMode(c){n!==c&&(n=c,d=u(l),e=0,i=!1)},resetSession:C,getRoundNumber:()=>o,getProgress:()=>({index:d.length?e+1:0,total:d.length}),isFlipped:()=>i,flip(){i=!i},unflip(){i=!1},currentCard:L,prev(){return e>0?(e-=1,i=!1,!0):!1},nextNavigate(){return e<d.length-1?(e+=1,i=!1,!0):!1},rateAgain(){return i?(s("again"),f()):!1},rateGotIt(){return i?(s("gotit"),f()):!1},rateNeutral(){return i?(s("neutral"),f()):!1},isSummary:()=>a,isSessionComplete:()=>y,getRoundStats(){let c=0,g=0,p=0;return m.forEach(S=>{c+=S.roundAgain,g+=S.roundGotIt,p+=S.roundNeutral}),{again:c,gotIt:g,neutral:p}},nextRound(){o+=1,v()},restart(){C()}}}const nt={thermometry:"flashcards.deck.thermometry",heatInternalEnergy:"flashcards.deck.heatInternalEnergy",changeOfState:"flashcards.deck.changeOfState",heatTransfer:"flashcards.deck.heatTransfer",reflection:"topic.reflection",refraction:"topic.refraction",tir:"topic.tir",rotatingMirror:"topic.reflection"};function st(t){const n=nt[t]||`topic.${t}`,o=r(n);return o===n?t:o}function bt(t,{deckOptions:n,buildDeck:o,initialDeck:l="all"}){let d=l,e=null,i=null;t.innerHTML=`
    <section class="panel panel--flashcards">
      <h2>${r("flashcards.title")}</h2>
      <p class="lead">${r("flashcards.intro")}</p>
      <div class="fc-controls no-print">
        <div class="control">
          <label>${r("flashcards.deck")}</label>
          <select data-fc-deck>
            ${n.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
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
    </section>`;const a={deck:t.querySelector("[data-fc-deck]"),mode:t.querySelector("[data-fc-mode]"),round:t.querySelector("[data-fc-round]"),progress:t.querySelector("[data-fc-progress]"),studyPanel:t.querySelector("[data-fc-study-panel]"),summaryPanel:t.querySelector("[data-fc-summary]"),cardWrap:t.querySelector("[data-fc-card-wrap]"),cardInner:t.querySelector("[data-fc-card-inner]"),subtopicPill:t.querySelector("[data-fc-subtopic-pill]"),subtopicPillBack:t.querySelector("[data-fc-subtopic-pill-back]"),cardCode:t.querySelector("[data-fc-card-code]"),cardCodeBack:t.querySelector("[data-fc-card-code-back]"),frontBody:t.querySelector("[data-fc-front-body]"),backBody:t.querySelector("[data-fc-back-body]"),flipPrompt:t.querySelector("[data-fc-flip-prompt]"),hint:t.querySelector("[data-fc-hint]"),prev:t.querySelector("[data-fc-prev]"),again:t.querySelector("[data-fc-again]"),flip:t.querySelector("[data-fc-flip]"),gotit:t.querySelector("[data-fc-gotit]"),next:t.querySelector("[data-fc-next]"),summaryTitle:t.querySelector("[data-fc-summary-title]"),summaryStats:t.querySelector("[data-fc-summary-stats]"),summaryKeep:t.querySelector("[data-fc-summary-keep]"),summaryConfident:t.querySelector("[data-fc-summary-confident]"),nextRound:t.querySelector("[data-fc-next-round]"),restart:t.querySelector("[data-fc-restart]")};async function y(){const s=await o(d);e=at(()=>s)}function m(s,f){const c=!f;a.prev.disabled=c,a.again.disabled=c||!s,a.gotit.disabled=c||!s,a.flip.disabled=c,a.next.disabled=c}function h(s,f,c=!1){var H;s.classList.remove("fc-card-text-long","fc-card-text-compact");const g=document.createElement("div");g.innerHTML=f||"";const p=(g.textContent||"").trim(),S=p.split(`
`).filter(Boolean).length,q=((H=(f||"").match(/<br\s*\/?>/gi))==null?void 0:H.length)??0,B=Math.max(S,q>0?q+1:0),_=p.length;c||B>=5||_>220?s.classList.add("fc-card-text-compact"):(B>=4||_>130)&&s.classList.add("fc-card-text-long")}function k(s,f,c){const g=(c||"").replace(/"/g,"&quot;"),p=(c||r("flashcards.question")).replace(/</g,"&lt;");s.innerHTML=`<img src="${f}" alt="${g}" loading="lazy" class="fc-card-img" data-fc-img /><p class="fc-img-fallback muted" data-fc-img-fallback hidden>${p}</p>`;const S=s.querySelector("[data-fc-img]"),q=s.querySelector("[data-fc-img-fallback]");S&&q&&(S.onerror=()=>{S.hidden=!0,q.hidden=!1},S.onload=()=>{S.hidden=!1,q.hidden=!0})}function b(){const s=e.currentCard(),f=e.isFlipped();if(a.cardInner.classList.toggle("fc-flipped",f),!s){a.subtopicPill.textContent="",a.subtopicPillBack.textContent="",a.cardCode.textContent="",a.cardCodeBack.textContent="",a.frontBody.innerHTML="",a.backBody.innerHTML="",a.flipPrompt.hidden=!0,a.cardWrap.classList.remove("fc-card-container--image"),m(!1,!1),a.hint.textContent="";return}const c=st(s.subtopic),g=r("flashcards.cardCode").replace("{id}",String(s.id));a.subtopicPill.textContent=c,a.subtopicPillBack.textContent=c,a.cardCode.textContent=g,a.cardCodeBack.textContent=g,s.isImage?(a.cardWrap.classList.add("fc-card-container--image"),a.flipPrompt.hidden=!0,k(a.frontBody,s.frontImage,s.alt),s.backImage&&s.backImage!==s.frontImage?k(a.backBody,s.backImage,s.alt):a.backBody.innerHTML=a.frontBody.innerHTML):(a.cardWrap.classList.remove("fc-card-container--image"),a.flipPrompt.hidden=f,a.frontBody.innerHTML=s.front,a.backBody.innerHTML=s.back,h(a.frontBody,s.front,s.compactFront),h(a.backBody,s.back,s.compactBack)),m(f,!0),a.hint.textContent=f?r("flashcards.hint.rated"):r("flashcards.flipFirst"),a.hint.classList.toggle("fc-rating-hint--action",!f)}function x(){const s=e.getRoundStats(),{total:f}=e.getProgress();e.isSessionComplete()?(a.summaryTitle.textContent=r("flashcards.summary.complete"),a.summaryStats.textContent=r("flashcards.summary.completeStats"),a.nextRound.hidden=!0):(a.summaryTitle.textContent=r("flashcards.summary.title").replace("{round}",String(e.getRoundNumber())),a.summaryStats.textContent=r("flashcards.summary.stats").replace("{total}",String(f)).replace("{again}",String(s.again)).replace("{gotIt}",String(s.gotIt)).replace("{neutral}",String(s.neutral)),a.nextRound.hidden=!1),a.summaryKeep.textContent=r("flashcards.summary.keep").replace("{count}",String(s.again)),a.summaryConfident.textContent=r("flashcards.summary.confident").replace("{count}",String(s.gotIt))}function u(){const{index:s,total:f}=e.getProgress();a.round.textContent=r("flashcards.round").replace("{round}",String(e.getRoundNumber())).replace("{total}",String(f)),a.progress.textContent=f?`${s} / ${f}`:"—";const c=e.isSummary();a.studyPanel.hidden=c,a.summaryPanel.hidden=!c,c?x():b()}function v(){const s=e.getMode();a.mode.querySelectorAll("button").forEach(f=>{f.classList.toggle("active",f.dataset.mode===s)})}function C(){e.currentCard()&&(e.flip(),b())}function $(){t.querySelector("h2").textContent=r("flashcards.title"),t.querySelector(".lead").textContent=r("flashcards.intro"),t.querySelector("[data-fc-deck]").previousElementSibling.textContent=r("flashcards.deck"),t.querySelector(".fc-mode-label").textContent=r("flashcards.studyMode"),t.querySelector(".fc-progress-label").textContent=r("flashcards.progressLabel"),a.mode.querySelector('[data-mode="sequence"]').textContent=r("flashcards.mode.sequence"),a.mode.querySelector('[data-mode="random"]').textContent=r("flashcards.mode.random"),a.flipPrompt.textContent=r("flashcards.tapFlip"),t.querySelector("[data-fc-prev-label]").textContent=r("flashcards.prev"),t.querySelector("[data-fc-next-label]").textContent=r("flashcards.next"),a.nextRound.textContent=r("flashcards.summary.nextRound"),a.restart.textContent=r("flashcards.summary.restart"),u()}a.deck.value=d,a.deck.addEventListener("change",()=>{d=a.deck.value,y().then(()=>{v(),u()})}),a.mode.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{e.setMode(s.dataset.mode),v(),u()})}),a.cardWrap.addEventListener("click",s=>{s.target.closest("button")||C()}),a.flip.addEventListener("click",s=>{s.stopPropagation(),C()}),a.prev.addEventListener("click",()=>{e.prev(),u()}),a.again.addEventListener("click",()=>{e.rateAgain()?u():b()}),a.gotit.addEventListener("click",()=>{e.rateGotIt()?u():b()}),a.next.addEventListener("click",()=>{e.isFlipped()?e.rateNeutral()?u():b():e.nextNavigate()&&u()}),a.nextRound.addEventListener("click",()=>{e.nextRound(),u()}),a.restart.addEventListener("click",()=>{e.restart(),u()}),i=s=>{var c;if(!t.isConnected)return;const f=(c=s.target)==null?void 0:c.tagName;if(!(f==="INPUT"||f==="SELECT"||f==="TEXTAREA")){if(s.code==="Space"){s.preventDefault(),C();return}if(s.key==="ArrowLeft"){e.isFlipped()?e.rateAgain()?u():b():(e.prev(),u());return}if(s.key==="ArrowRight"||s.key==="1"){e.isFlipped()?e.rateGotIt()?u():b():e.nextNavigate()&&u();return}s.key==="2"&&e.isFlipped()&&(e.rateAgain()?u():b())}},window.addEventListener("keydown",i);const L=()=>{y().then(()=>{v(),$()})};return window.addEventListener("s3phy:lang",L),y().then(()=>{v(),u()}),()=>{window.removeEventListener("keydown",i),window.removeEventListener("s3phy:lang",L),e==null||e.restart(),t.innerHTML=""}}function rt(t){const n=String(t).replace(/^\.\//,""),o=window.location.origin,l=window.location.pathname,d=l.match(/^(.*\/dist)\/?/);if(d)return`${o}${d[1]}/${n}`;let e="./";e.endsWith("/")||(e+="/");const i=l.endsWith("/")?l:l.replace(/\/[^/]*$/,"/")||"/";return new URL(`${e}${n}`,`${o}${i}`).href}let T=null,I=null;function ot(){return T||(T=z(()=>import("./flashcards-light-ch3-Cmbo5pjW.js"),[],import.meta.url).then(t=>t.default)),T}function ct(){return I||(I=z(()=>import("./flashcards-heat-ch1-DBrwHTm1.js"),[],import.meta.url).then(t=>t.default)),I}function lt(t){return t==="zh-Hant"?"zhHant":"en"}function E(t){return rt(t)}function A(t,n){return t.filter(o=>o.topic===n)}function it(t,n,o,l){var i,a,y;const d=lt(n);if((i=t==null?void 0:t.en)!=null&&i.front||(a=t==null?void 0:t.zhHant)!=null&&a.front){const m=(y=t[d])!=null&&y.front?t[d]:t.en||t.zhHant,h=E(m.front),k=m.back?E(m.back):h;return{id:o,subtopic:t.topic||l,front:"",back:"",frontImage:h,backImage:k,alt:t.alt||t.title||"",isImage:!0}}if(t!=null&&t.front){const m=E(t.front),h=t.back?E(t.back):m;return{id:o,subtopic:t.topic||l,front:"",back:"",frontImage:m,backImage:h,alt:t.alt||t.title||"",isImage:!0}}const e=t[d]||t.en;return{id:o,subtopic:t.topic||l,front:(e==null?void 0:e.q)||"",back:(e==null?void 0:e.a)||"",isImage:!1,compactFront:!!t.compactFront,compactBack:!!t.compactBack}}function D(t,n,o="General"){let l=1;return t.map(d=>{const e=it(d,n,l,d.topic||o);return l+=1,e})}async function dt(t){const n=await ot(),o=t==="rotatingMirror"?"reflection":t;return o==="all"?n.slice():o==="reflection"?A(n,"reflection"):o==="refractionTir"?[...A(n,"refraction"),...A(n,"tir")]:n.slice()}async function ut(t){const n=await ct();return t==="all"?n.slice():n.filter(o=>o.topic===t)}async function vt(t,n){return D(await dt(t),n)}async function kt(t,n){return D(await ut(t),n)}export{bt as a,pt as b,mt as c,vt as d,R as e,G as f,kt as g,yt as h,F as l,gt as m,U as n,ht as r};
