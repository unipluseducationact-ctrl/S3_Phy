import{t as l,g as M,s as K,_ as O}from"./index-a4zsJ_Ts.js";function D(){return M()==="zh-Hant"?"zhHant":"en"}async function _(t,e){const r=`./${t}/${e}`;try{return(await fetch(r,{method:"HEAD"})).ok}catch{return!1}}async function Z(t){return _("notes",t)}function j(t){return`${String(t).split("#")[0]}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}function U(t,e,r){const i=j(e);return`
    <div class="note-preview-wrap">
      <iframe class="note-preview" title="${t.replace(/"/g,"&quot;")}" src="${i}" loading="lazy"></iframe>
    </div>
    <p class="note-preview-link"><a href="${e}" target="_blank" rel="noopener">${r}</a></p>`}async function gt(t,e){const r=D();await Promise.all(e.map(async i=>{const d=t.querySelector(`[data-note-card="${i.key}"]`);if(!d)return;const n=d.querySelector("[data-note-body]"),c=r==="zhHant"?i.fileZh:i.fileEn,a=await Z(c),p=`./notes/${c}`;a?n.innerHTML=U(l(`notes.card.${i.key}`),p,l("notes.openPdf")):n.innerHTML=`<p class="lead">${l("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}))}async function vt(t,e,{version:r=""}={}){const i=D(),d=r?`?v=${r}`:"";await Promise.all(e.map(async n=>{const c=t.querySelector(`[data-summary-card="${n.key}"]`);if(!c)return;const a=c.querySelector("[data-summary-body]");if(n.type==="image"){const v=n.fileEn&&n.fileZh?i==="zhHant"?n.fileZh:n.fileEn:n.file,k=await _("summary",v),u=`${`./summary/${v}`}${d}`;k?a.innerHTML=`
          <img class="summary-thumb" src="${u}" alt="${l(`summary.item.${n.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${u}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:a.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;return}const p=i==="zhHant"?n.fileZh:n.fileEn,f=await _("summary-pdfs",p),y=`./summary-pdfs/${p}`;f?a.innerHTML=U(l(`summary.item.${n.key}`),y,l("summary.download")):a.innerHTML=`<p class="lead">${l("summary.missing")}</p>`}))}const V=["topics","notes","tools","worksheets","quiz","flashcards","summary"],Q={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",quiz:"nav.quiz",flashcards:"nav.flashcards",summary:"nav.summary"};function kt(t,{subtitleKey:e,activeSection:r,onSection:i,onLang:d}){t.innerHTML=`
    <header class="site-header site-header--hub">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${l("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${l(e)}</p>
        </div>
      </div>
      <nav class="main-nav" data-nav aria-label="${l("app.title")}"></nav>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${l("strand.back")}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${l("footer.conventions")}</footer>
  `;const n=t.querySelector("[data-main]"),c=t.querySelector("[data-nav]"),a=t.querySelector("[data-lang]"),p=t.querySelector("[data-strand-back]");let f=r;function y(u){f=u,c.innerHTML=V.map((b,S)=>{const x=u===b?"active":"",q=`${S+1}. ${l(Q[b])}`;return`<button type="button" class="${x}" data-sec="${b}">${q}</button>`}).join(""),c.querySelectorAll("button").forEach(b=>{b.addEventListener("click",()=>i(b.getAttribute("data-sec")))})}function v(){a.innerHTML=`
      <button type="button" data-set-lang="en" class="${M()==="en"?"active":""}">${l("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${M()==="zh-Hant"?"active":""}">${l("lang.zhHant")}</button>
    `,a.querySelectorAll("button").forEach(u=>{u.addEventListener("click",()=>{K(u.getAttribute("data-set-lang")),d()})})}function k(){t.querySelector("[data-hub-subtitle]").textContent=l(e),p.textContent=l("strand.back"),t.querySelector("[data-hub-footer]").textContent=l("footer.conventions"),t.querySelector(".site-title").textContent=l("app.title")}const L=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return p.addEventListener("click",L),y(r),v(),{main:n,updateSection(u){y(u)},refreshLabels(){k(),y(f),v()},destroy(){p.removeEventListener("click",L)}}}const z=1e5;function Y(){const t=document.createElement("div");return!!(t.requestFullscreen||t.webkitRequestFullscreen||document.fullscreenEnabled||document.webkitFullscreenEnabled)}function w(t){return(document.fullscreenElement||document.webkitFullscreenElement)===t}function I(t){window.dispatchEvent(new Event("resize")),t==null||t.querySelectorAll("iframe").forEach(e=>{var r;try{(r=e.contentWindow)==null||r.dispatchEvent(new Event("resize"))}catch{}})}function X({app:t,stage:e,button:r,t:i,setCollapsed:d,getCollapsed:n}){let c=!1,a=!1,p=null;const f=r.querySelector(".material-symbols-outlined"),y=r.querySelector("[data-tool-fullscreen-label]"),v=x=>{r.setAttribute("aria-pressed",x?"true":"false"),f&&(f.textContent=x?"fullscreen_exit":"fullscreen"),y&&(y.textContent=i(x?"tools.exitFullscreen":"tools.fullscreen")),r.title=(y==null?void 0:y.textContent)||""},k=()=>{p&&(p.remove(),p=null),e.classList.remove("tool-stage--overlay-fullscreen"),document.body.style.overflow="",c=!1},L=async()=>{if(c){k(),t==null||t.classList.remove("is-lab-fullscreen"),d(a),v(!1);return}if(w(e))try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen&&await document.webkitExitFullscreen()}catch{}},u=()=>{a=n(),d(!0),t==null||t.classList.add("is-lab-fullscreen"),p=document.createElement("div"),p.className="tool-stage-overlay-backdrop",p.style.cssText="position:fixed;inset:0;z-index:"+z+";background:rgba(15,23,42,0.45);",document.body.appendChild(p),document.body.style.overflow="hidden",e.classList.add("tool-stage--overlay-fullscreen"),e.style.position="fixed",e.style.inset="0",e.style.zIndex=String(z+1),e.style.width="100dvw",e.style.height="100dvh",e.style.margin="0",c=!0,v(!0),requestAnimationFrame(()=>I(e)),p.addEventListener("click",()=>{L()})},b=async()=>{if(a=n(),d(!0),t==null||t.classList.add("is-lab-fullscreen"),!Y()){u();return}try{if(e.requestFullscreen)await e.requestFullscreen();else if(e.webkitRequestFullscreen)await e.webkitRequestFullscreen();else{u();return}v(!0),requestAnimationFrame(()=>I(e))}catch{t==null||t.classList.remove("is-lab-fullscreen"),d(a),u()}},S=()=>{const x=w(e)||c;x||(t==null||t.classList.remove("is-lab-fullscreen"),c&&k(),d(a),e.style.position="",e.style.inset="",e.style.zIndex="",e.style.width="",e.style.height="",e.style.margin=""),v(x),x&&requestAnimationFrame(()=>I(e))};return r.addEventListener("click",()=>{w(e)||c?L():b()}),document.addEventListener("fullscreenchange",S),document.addEventListener("webkitfullscreenchange",S),v(!1),()=>{document.removeEventListener("fullscreenchange",S),document.removeEventListener("webkitfullscreenchange",S),L()}}const N="s3phy:tool-picker-collapsed",J=820;function St({toolOrder:t,toolId:e,getLabel:r,t:i}){const d=t.map(n=>`<button type="button" data-tool="${n}" class="${e===n?"active":""}">${r(n)}</button>`).join("");return`
      <section class="panel panel--tools" data-tools-panel>
        <div class="tools-panel-head">
          <div class="tools-panel-head__text">
            <h2>${i("tools.title")}</h2>
            <p class="tools-active-lab" data-tool-active-label hidden>${r(e)}</p>
          </div>
          <div class="tools-panel-head__actions">
            <button type="button" class="tool-picker-toggle tool-fullscreen-btn" data-tool-fullscreen aria-pressed="false">
              <span class="material-symbols-outlined" aria-hidden="true">fullscreen</span>
              <span data-tool-fullscreen-label>${i("tools.fullscreen")}</span>
            </button>
            <button type="button" class="tool-picker-toggle" data-tool-picker-toggle aria-expanded="true">
              <span data-tool-picker-chevron aria-hidden="true">&#9650;</span>
              <span data-tool-picker-toggle-label>${i("tools.hideLabList")}</span>
            </button>
          </div>
        </div>
        <div class="tools-layout">
          <aside class="tool-picker" data-tool-picker>
            <p class="lead">${i("tools.pick")}</p>
            <div class="tool-list" data-tool-list>${d}</div>
          </aside>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function xt(t,{getLabel:e,t:r,onSelectTool:i,mountTool:d,getActiveToolId:n}){const c=t.querySelector("[data-tools-panel]"),a=t.querySelector("[data-tool-picker]"),p=t.querySelector("[data-tool-list]"),f=t.querySelector("[data-tool-stage]"),y=t.querySelector("[data-tool-picker-toggle]"),v=t.querySelector("[data-tool-fullscreen]"),k=t.querySelector("[data-tool-picker-toggle-label]"),L=t.querySelector("[data-tool-picker-chevron]"),u=t.querySelector("[data-tool-active-label]");if(!c||!a||!p||!f||!y||!v)return;let b=sessionStorage.getItem(N)==="true";const S=()=>{u&&(u.textContent=e(n()))},x=()=>{y.setAttribute("aria-expanded",b?"false":"true"),k&&(k.textContent=r(b?"tools.showLabList":"tools.hideLabList")),L&&(L.textContent=b?"▼":"▲"),u&&(u.hidden=!b)},q=s=>{b=s,c.classList.toggle("is-picker-collapsed",b),sessionStorage.setItem(N,b?"true":"false"),x()};c.classList.toggle("is-picker-collapsed",b),S(),x(),y.addEventListener("click",()=>{q(!b)}),p.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{const m=s.getAttribute("data-tool");m&&(i(m),p.querySelectorAll("button").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-tool")===m)}),S(),d(f),window.innerWidth<=J&&q(!0))})}),d(f),X({app:document.getElementById("app"),stage:f,button:v,t:r,setCollapsed:q,getCollapsed:()=>b})}const tt=1.7,et=.7,T=1,at=.1,nt=3;function st(t){const e=Math.floor(t),r=t-e;return e+(Math.random()<r?1:0)}function G(t){for(let e=t.length-1;e>0;e-=1){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}function rt(t){const e=new Map(t.map(n=>[n.id,n.copies])),r=[];let i=null;const d=t.reduce((n,c)=>n+c.copies,0);for(let n=0;n<d;n+=1){let c=[...e.entries()].filter(([f,y])=>y>0&&f!==i);c.length===0&&(c=[...e.entries()].filter(([,f])=>f>0)),c.sort((f,y)=>y[1]-f[1]);const[a,p]=c[0];r.push(a),e.set(a,p-1),i=a}return r}function lt(t){const e=[];return t.forEach(({id:r,copies:i})=>{for(let d=0;d<i;d+=1)e.push(r)}),e}function ot(t){let e="sequence",r=1,i=[],d=[],n=0,c=!1,a=!1,p=!1;const f=new Map;function y(){return t()}function v(){return new Map(y().map(o=>[o.id,o]))}function k(){f.clear(),y().forEach(o=>{f.set(o.id,{nextRate:T,totalGotIt:0,roundAgain:0,roundGotIt:0,roundNeutral:0})})}function L(){const o=y();return r===1?o.map(g=>({id:g.id,copies:1})):o.map(g=>{var h;return{id:g.id,copies:st(((h=f.get(g.id))==null?void 0:h.nextRate)??T)}}).filter(g=>g.copies>0)}function u(o){if(o.length===0)return[];if(r===1){const g=o.map(h=>h.id);return e==="random"?G([...g]):[...g].sort((h,E)=>h-E)}return e==="random"?G(lt(o)):rt(o)}function b(){if(a=!1,p=!1,i=L(),i.reduce((g,h)=>g+h.copies,0)===0){p=!0,a=!0,d=[],n=0;return}y().forEach(g=>{const h=f.get(g.id);h&&(h.roundAgain=0,h.roundGotIt=0,h.roundNeutral=0)}),d=u(i),n=0,c=!1}function S(){r=1,k(),b()}function x(){return d[n]??null}function q(){const o=x();return o==null?null:v().get(o)??null}function s(o){const g=x();if(g==null)return;const h=f.get(g);h&&(o==="again"?(h.nextRate=tt,h.totalGotIt=0,h.roundAgain+=1):o==="gotit"?(h.totalGotIt+=1,h.roundGotIt+=1,h.nextRate=h.totalGotIt>=nt?at:et):o==="neutral"&&(h.roundNeutral+=1,h.nextRate=T))}function m(){return c=!1,n<d.length-1?(n+=1,!1):(a=!0,!0)}return S(),{getMode:()=>e,setMode(o){e!==o&&(e=o,d=u(i),n=0,c=!1)},resetSession:S,getRoundNumber:()=>r,getProgress:()=>({index:d.length?n+1:0,total:d.length}),isFlipped:()=>c,flip(){c=!c},unflip(){c=!1},currentCard:q,prev(){return n>0?(n-=1,c=!1,!0):!1},nextNavigate(){return n<d.length-1?(n+=1,c=!1,!0):!1},rateAgain(){return c?(s("again"),m()):!1},rateGotIt(){return c?(s("gotit"),m()):!1},rateNeutral(){return c?(s("neutral"),m()):!1},isSummary:()=>a,isSessionComplete:()=>p,getRoundStats(){let o=0,g=0,h=0;return f.forEach(E=>{o+=E.roundAgain,g+=E.roundGotIt,h+=E.roundNeutral}),{again:o,gotIt:g,neutral:h}},nextRound(){r+=1,b()},restart(){S()}}}const ct={thermometry:"flashcards.deck.thermometry",heatInternalEnergy:"flashcards.deck.heatInternalEnergy",changeOfState:"flashcards.deck.changeOfState",heatTransfer:"flashcards.deck.heatTransfer",reflection:"topic.reflection",refraction:"topic.refraction",tir:"topic.tir",rotatingMirror:"topic.reflection"};function it(t){const e=ct[t]||`topic.${t}`,r=l(e);return r===e?t:r}function Lt(t,{deckOptions:e,buildDeck:r,initialDeck:i="all"}){let d=i,n=null,c=null;t.innerHTML=`
    <section class="panel panel--flashcards">
      <h2>${l("flashcards.title")}</h2>
      <p class="lead">${l("flashcards.intro")}</p>
      <div class="fc-controls no-print">
        <div class="control">
          <label>${l("flashcards.deck")}</label>
          <select data-fc-deck>
            ${e.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
          </select>
        </div>
        <div class="fc-controls-right">
          <div class="fc-mode-group">
            <span class="fc-mode-label">${l("flashcards.studyMode")}</span>
            <div class="fc-mode-toggle" data-fc-mode>
              <button type="button" data-mode="sequence" class="active">${l("flashcards.mode.sequence")}</button>
              <button type="button" data-mode="random">${l("flashcards.mode.random")}</button>
            </div>
          </div>
          <span class="fc-round-badge" data-fc-round></span>
          <div class="fc-progress-block">
            <span class="fc-progress-label">${l("flashcards.progressLabel")}</span>
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
                <p class="fc-flip-prompt" data-fc-flip-prompt>${l("flashcards.tapFlip")}</p>
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
            <span data-fc-prev-label>${l("flashcards.prev")}</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-again" data-fc-again title="${l("flashcards.again")}">
            <span class="material-symbols-outlined" aria-hidden="true">history</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-flip" data-fc-flip title="${l("flashcards.flip")}">
            <span class="material-symbols-outlined fc-flip-icon" aria-hidden="true">sync</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-gotit" data-fc-gotit title="${l("flashcards.gotIt")}">
            <span class="material-symbols-outlined" aria-hidden="true">check</span>
          </button>
          <button type="button" class="fc-btn-nav" data-fc-next>
            <span data-fc-next-label>${l("flashcards.next")}</span>
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
          <button class="btn primary" type="button" data-fc-next-round>${l("flashcards.summary.nextRound")}</button>
          <button class="btn" type="button" data-fc-restart>${l("flashcards.summary.restart")}</button>
        </div>
      </div>
    </section>`;const a={deck:t.querySelector("[data-fc-deck]"),mode:t.querySelector("[data-fc-mode]"),round:t.querySelector("[data-fc-round]"),progress:t.querySelector("[data-fc-progress]"),studyPanel:t.querySelector("[data-fc-study-panel]"),summaryPanel:t.querySelector("[data-fc-summary]"),cardWrap:t.querySelector("[data-fc-card-wrap]"),cardInner:t.querySelector("[data-fc-card-inner]"),subtopicPill:t.querySelector("[data-fc-subtopic-pill]"),subtopicPillBack:t.querySelector("[data-fc-subtopic-pill-back]"),cardCode:t.querySelector("[data-fc-card-code]"),cardCodeBack:t.querySelector("[data-fc-card-code-back]"),frontBody:t.querySelector("[data-fc-front-body]"),backBody:t.querySelector("[data-fc-back-body]"),flipPrompt:t.querySelector("[data-fc-flip-prompt]"),hint:t.querySelector("[data-fc-hint]"),prev:t.querySelector("[data-fc-prev]"),again:t.querySelector("[data-fc-again]"),flip:t.querySelector("[data-fc-flip]"),gotit:t.querySelector("[data-fc-gotit]"),next:t.querySelector("[data-fc-next]"),summaryTitle:t.querySelector("[data-fc-summary-title]"),summaryStats:t.querySelector("[data-fc-summary-stats]"),summaryKeep:t.querySelector("[data-fc-summary-keep]"),summaryConfident:t.querySelector("[data-fc-summary-confident]"),nextRound:t.querySelector("[data-fc-next-round]"),restart:t.querySelector("[data-fc-restart]")};async function p(){const s=await r(d);n=ot(()=>s)}function f(s,m){const o=!m;a.prev.disabled=o,a.again.disabled=o||!s,a.gotit.disabled=o||!s,a.flip.disabled=o,a.next.disabled=o}function y(s,m,o=!1){var P;s.classList.remove("fc-card-text-long","fc-card-text-compact");const g=document.createElement("div");g.innerHTML=m||"";const h=(g.textContent||"").trim(),E=h.split(`
`).filter(Boolean).length,$=((P=(m||"").match(/<br\s*\/?>/gi))==null?void 0:P.length)??0,F=Math.max(E,$>0?$+1:0),H=h.length;o||F>=5||H>220?s.classList.add("fc-card-text-compact"):(F>=4||H>130)&&s.classList.add("fc-card-text-long")}function v(s,m,o){const g=(o||"").replace(/"/g,"&quot;"),h=(o||l("flashcards.question")).replace(/</g,"&lt;");s.innerHTML=`<img src="${m}" alt="${g}" loading="lazy" class="fc-card-img" data-fc-img /><p class="fc-img-fallback muted" data-fc-img-fallback hidden>${h}</p>`;const E=s.querySelector("[data-fc-img]"),$=s.querySelector("[data-fc-img-fallback]");E&&$&&(E.onerror=()=>{E.hidden=!0,$.hidden=!1},E.onload=()=>{E.hidden=!1,$.hidden=!0})}function k(){const s=n.currentCard(),m=n.isFlipped();if(a.cardInner.classList.toggle("fc-flipped",m),!s){a.subtopicPill.textContent="",a.subtopicPillBack.textContent="",a.cardCode.textContent="",a.cardCodeBack.textContent="",a.frontBody.innerHTML="",a.backBody.innerHTML="",a.flipPrompt.hidden=!0,a.cardWrap.classList.remove("fc-card-container--image"),f(!1,!1),a.hint.textContent="";return}const o=it(s.subtopic),g=l("flashcards.cardCode").replace("{id}",String(s.id));a.subtopicPill.textContent=o,a.subtopicPillBack.textContent=o,a.cardCode.textContent=g,a.cardCodeBack.textContent=g,s.isImage?(a.cardWrap.classList.add("fc-card-container--image"),a.flipPrompt.hidden=!0,v(a.frontBody,s.frontImage,s.alt),s.backImage&&s.backImage!==s.frontImage?v(a.backBody,s.backImage,s.alt):a.backBody.innerHTML=a.frontBody.innerHTML):(a.cardWrap.classList.remove("fc-card-container--image"),a.flipPrompt.hidden=m,a.frontBody.innerHTML=s.front,a.backBody.innerHTML=s.back,y(a.frontBody,s.front,s.compactFront),y(a.backBody,s.back,s.compactBack)),f(m,!0),a.hint.textContent=m?l("flashcards.hint.rated"):l("flashcards.flipFirst"),a.hint.classList.toggle("fc-rating-hint--action",!m)}function L(){const s=n.getRoundStats(),{total:m}=n.getProgress();n.isSessionComplete()?(a.summaryTitle.textContent=l("flashcards.summary.complete"),a.summaryStats.textContent=l("flashcards.summary.completeStats"),a.nextRound.hidden=!0):(a.summaryTitle.textContent=l("flashcards.summary.title").replace("{round}",String(n.getRoundNumber())),a.summaryStats.textContent=l("flashcards.summary.stats").replace("{total}",String(m)).replace("{again}",String(s.again)).replace("{gotIt}",String(s.gotIt)).replace("{neutral}",String(s.neutral)),a.nextRound.hidden=!1),a.summaryKeep.textContent=l("flashcards.summary.keep").replace("{count}",String(s.again)),a.summaryConfident.textContent=l("flashcards.summary.confident").replace("{count}",String(s.gotIt))}function u(){const{index:s,total:m}=n.getProgress();a.round.textContent=l("flashcards.round").replace("{round}",String(n.getRoundNumber())).replace("{total}",String(m)),a.progress.textContent=m?`${s} / ${m}`:"—";const o=n.isSummary();a.studyPanel.hidden=o,a.summaryPanel.hidden=!o,o?L():k()}function b(){const s=n.getMode();a.mode.querySelectorAll("button").forEach(m=>{m.classList.toggle("active",m.dataset.mode===s)})}function S(){n.currentCard()&&(n.flip(),k())}function x(){t.querySelector("h2").textContent=l("flashcards.title"),t.querySelector(".lead").textContent=l("flashcards.intro"),t.querySelector("[data-fc-deck]").previousElementSibling.textContent=l("flashcards.deck"),t.querySelector(".fc-mode-label").textContent=l("flashcards.studyMode"),t.querySelector(".fc-progress-label").textContent=l("flashcards.progressLabel"),a.mode.querySelector('[data-mode="sequence"]').textContent=l("flashcards.mode.sequence"),a.mode.querySelector('[data-mode="random"]').textContent=l("flashcards.mode.random"),a.flipPrompt.textContent=l("flashcards.tapFlip"),t.querySelector("[data-fc-prev-label]").textContent=l("flashcards.prev"),t.querySelector("[data-fc-next-label]").textContent=l("flashcards.next"),a.nextRound.textContent=l("flashcards.summary.nextRound"),a.restart.textContent=l("flashcards.summary.restart"),u()}a.deck.value=d,a.deck.addEventListener("change",()=>{d=a.deck.value,p().then(()=>{b(),u()})}),a.mode.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{n.setMode(s.dataset.mode),b(),u()})}),a.cardWrap.addEventListener("click",s=>{s.target.closest("button")||S()}),a.flip.addEventListener("click",s=>{s.stopPropagation(),S()}),a.prev.addEventListener("click",()=>{n.prev(),u()}),a.again.addEventListener("click",()=>{n.rateAgain()?u():k()}),a.gotit.addEventListener("click",()=>{n.rateGotIt()?u():k()}),a.next.addEventListener("click",()=>{n.isFlipped()?n.rateNeutral()?u():k():n.nextNavigate()&&u()}),a.nextRound.addEventListener("click",()=>{n.nextRound(),u()}),a.restart.addEventListener("click",()=>{n.restart(),u()}),c=s=>{var o;if(!t.isConnected)return;const m=(o=s.target)==null?void 0:o.tagName;if(!(m==="INPUT"||m==="SELECT"||m==="TEXTAREA")){if(s.code==="Space"){s.preventDefault(),S();return}if(s.key==="ArrowLeft"){n.isFlipped()?n.rateAgain()?u():k():(n.prev(),u());return}if(s.key==="ArrowRight"||s.key==="1"){n.isFlipped()?n.rateGotIt()?u():k():n.nextNavigate()&&u();return}s.key==="2"&&n.isFlipped()&&(n.rateAgain()?u():k())}},window.addEventListener("keydown",c);const q=()=>{p().then(()=>{b(),x()})};return window.addEventListener("s3phy:lang",q),p().then(()=>{b(),u()}),()=>{window.removeEventListener("keydown",c),window.removeEventListener("s3phy:lang",q),n==null||n.restart(),t.innerHTML=""}}function dt(t){const e=String(t).replace(/^\.\//,""),r=window.location.origin,i=window.location.pathname,d=i.match(/^(.*\/dist)\/?/);if(d)return`${r}${d[1]}/${e}`;let n="./";n.endsWith("/")||(n+="/");const c=i.endsWith("/")?i:i.replace(/\/[^/]*$/,"/")||"/";return new URL(`${n}${e}`,`${r}${c}`).href}let A=null,R=null;function ut(){return A||(A=O(()=>import("./flashcards-light-ch3-Cmbo5pjW.js"),[],import.meta.url).then(t=>t.default)),A}function ft(){return R||(R=O(()=>import("./flashcards-heat-ch1-DBrwHTm1.js"),[],import.meta.url).then(t=>t.default)),R}function pt(t){return t==="zh-Hant"?"zhHant":"en"}function C(t){return dt(t)}function B(t,e){return t.filter(r=>r.topic===e)}function mt(t,e,r,i){var c,a,p;const d=pt(e);if((c=t==null?void 0:t.en)!=null&&c.front||(a=t==null?void 0:t.zhHant)!=null&&a.front){const f=(p=t[d])!=null&&p.front?t[d]:t.en||t.zhHant,y=C(f.front),v=f.back?C(f.back):y;return{id:r,subtopic:t.topic||i,front:"",back:"",frontImage:y,backImage:v,alt:t.alt||t.title||"",isImage:!0}}if(t!=null&&t.front){const f=C(t.front),y=t.back?C(t.back):f;return{id:r,subtopic:t.topic||i,front:"",back:"",frontImage:f,backImage:y,alt:t.alt||t.title||"",isImage:!0}}const n=t[d]||t.en;return{id:r,subtopic:t.topic||i,front:(n==null?void 0:n.q)||"",back:(n==null?void 0:n.a)||"",isImage:!1,compactFront:!!t.compactFront,compactBack:!!t.compactBack}}function W(t,e,r="General"){let i=1;return t.map(d=>{const n=mt(d,e,i,d.topic||r);return i+=1,n})}async function yt(t){const e=await ut(),r=t==="rotatingMirror"?"reflection":t;return r==="all"?e.slice():r==="reflection"?B(e,"reflection"):r==="refractionTir"?[...B(e,"refraction"),...B(e,"tir")]:e.slice()}async function ht(t){const e=await ft();return t==="all"?e.slice():e.filter(r=>r.topic===t)}async function Et(t,e){return W(await yt(t),e)}async function qt(t,e){return W(await ht(t),e)}export{Lt as a,gt as b,vt as c,Et as d,_ as e,U as f,qt as g,xt as h,D as l,kt as m,Z as n,St as r};
