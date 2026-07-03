import{t as l,g as R,s as W,_ as G}from"./index-DdMC-iVV.js";function O(){return R()==="zh-Hant"?"zhHant":"en"}async function M(t,n){const r=`./${t}/${n}`;try{return(await fetch(r,{method:"HEAD"})).ok}catch{return!1}}async function K(t){return M("notes",t)}function Z(t){return`${String(t).split("#")[0]}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}function D(t,n,r){const i=Z(n);return`
    <div class="note-preview-wrap">
      <iframe class="note-preview" title="${t.replace(/"/g,"&quot;")}" src="${i}" loading="lazy"></iframe>
    </div>
    <p class="note-preview-link"><a href="${n}" target="_blank" rel="noopener">${r}</a></p>`}async function ht(t,n){const r=O();await Promise.all(n.map(async i=>{const d=t.querySelector(`[data-note-card="${i.key}"]`);if(!d)return;const a=d.querySelector("[data-note-body]"),c=r==="zhHant"?i.fileZh:i.fileEn,e=await K(c),p=`./notes/${c}`;e?a.innerHTML=D(l(`notes.card.${i.key}`),p,l("notes.openPdf")):a.innerHTML=`<p class="lead">${l("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}))}async function gt(t,n,{version:r=""}={}){const i=O(),d=r?`?v=${r}`:"";await Promise.all(n.map(async a=>{const c=t.querySelector(`[data-summary-card="${a.key}"]`);if(!c)return;const e=c.querySelector("[data-summary-body]");if(a.type==="image"){const v=a.fileEn&&a.fileZh?i==="zhHant"?a.fileZh:a.fileEn:a.file,k=await M("summary",v),u=`${`./summary/${v}`}${d}`;k?e.innerHTML=`
          <img class="summary-thumb" src="${u}" alt="${l(`summary.item.${a.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${u}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:e.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;return}const p=i==="zhHant"?a.fileZh:a.fileEn,f=await M("summary-pdfs",p),y=`./summary-pdfs/${p}`;f?e.innerHTML=D(l(`summary.item.${a.key}`),y,l("summary.download")):e.innerHTML=`<p class="lead">${l("summary.missing")}</p>`}))}const j=["topics","notes","tools","worksheets","quiz","flashcards","summary"],V={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",quiz:"nav.quiz",flashcards:"nav.flashcards",summary:"nav.summary"};function vt(t,{subtitleKey:n,activeSection:r,onSection:i,onLang:d}){t.innerHTML=`
    <header class="site-header site-header--hub">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${l("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${l(n)}</p>
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
  `;const a=t.querySelector("[data-main]"),c=t.querySelector("[data-nav]"),e=t.querySelector("[data-lang]"),p=t.querySelector("[data-strand-back]");let f=r;function y(u){f=u,c.innerHTML=j.map((h,S)=>{const x=u===h?"active":"",q=`${S+1}. ${l(V[h])}`;return`<button type="button" class="${x}" data-sec="${h}">${q}</button>`}).join(""),c.querySelectorAll("button").forEach(h=>{h.addEventListener("click",()=>i(h.getAttribute("data-sec")))})}function v(){e.innerHTML=`
      <button type="button" data-set-lang="en" class="${R()==="en"?"active":""}">${l("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${R()==="zh-Hant"?"active":""}">${l("lang.zhHant")}</button>
    `,e.querySelectorAll("button").forEach(u=>{u.addEventListener("click",()=>{W(u.getAttribute("data-set-lang")),d()})})}function k(){t.querySelector("[data-hub-subtitle]").textContent=l(n),p.textContent=l("strand.back"),t.querySelector("[data-hub-footer]").textContent=l("footer.conventions"),t.querySelector(".site-title").textContent=l("app.title")}const L=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return p.addEventListener("click",L),y(r),v(),{main:a,updateSection(u){y(u)},refreshLabels(){k(),y(f),v()},destroy(){p.removeEventListener("click",L)}}}const P=1e5;function Q(){const t=document.createElement("div");return!!(t.requestFullscreen||t.webkitRequestFullscreen||document.fullscreenEnabled||document.webkitFullscreenEnabled)}function w(t){return(document.fullscreenElement||document.webkitFullscreenElement)===t}function Y({app:t,stage:n,button:r,t:i,setCollapsed:d,getCollapsed:a}){let c=!1,e=!1,p=null;const f=r.querySelector(".material-symbols-outlined"),y=r.querySelector("[data-tool-fullscreen-label]"),v=x=>{r.setAttribute("aria-pressed",x?"true":"false"),f&&(f.textContent=x?"fullscreen_exit":"fullscreen"),y&&(y.textContent=i(x?"tools.exitFullscreen":"tools.fullscreen")),r.title=(y==null?void 0:y.textContent)||""},k=()=>{p&&(p.remove(),p=null),n.classList.remove("tool-stage--overlay-fullscreen"),document.body.style.overflow="",c=!1},L=async()=>{if(c){k(),t==null||t.classList.remove("is-lab-fullscreen"),d(e),v(!1);return}if(w(n))try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen&&await document.webkitExitFullscreen()}catch{}},u=()=>{e=a(),d(!0),t==null||t.classList.add("is-lab-fullscreen"),p=document.createElement("div"),p.className="tool-stage-overlay-backdrop",p.style.cssText="position:fixed;inset:0;z-index:"+P+";background:rgba(15,23,42,0.45);",document.body.appendChild(p),document.body.style.overflow="hidden",n.classList.add("tool-stage--overlay-fullscreen"),n.style.position="fixed",n.style.inset="0",n.style.zIndex=String(P+1),n.style.width="100dvw",n.style.height="100dvh",n.style.margin="0",c=!0,v(!0),p.addEventListener("click",()=>{L()})},h=async()=>{if(e=a(),d(!0),t==null||t.classList.add("is-lab-fullscreen"),!Q()){u();return}try{if(n.requestFullscreen)await n.requestFullscreen();else if(n.webkitRequestFullscreen)await n.webkitRequestFullscreen();else{u();return}v(!0)}catch{t==null||t.classList.remove("is-lab-fullscreen"),d(e),u()}},S=()=>{const x=w(n)||c;x||(t==null||t.classList.remove("is-lab-fullscreen"),c&&k(),d(e),n.style.position="",n.style.inset="",n.style.zIndex="",n.style.width="",n.style.height="",n.style.margin=""),v(x)};return r.addEventListener("click",()=>{w(n)||c?L():h()}),document.addEventListener("fullscreenchange",S),document.addEventListener("webkitfullscreenchange",S),v(!1),()=>{document.removeEventListener("fullscreenchange",S),document.removeEventListener("webkitfullscreenchange",S),L()}}const z="s3phy:tool-picker-collapsed",X=820;function kt({toolOrder:t,toolId:n,getLabel:r,t:i}){const d=t.map(a=>`<button type="button" data-tool="${a}" class="${n===a?"active":""}">${r(a)}</button>`).join("");return`
      <section class="panel panel--tools" data-tools-panel>
        <div class="tools-panel-head">
          <div class="tools-panel-head__text">
            <h2>${i("tools.title")}</h2>
            <p class="tools-active-lab" data-tool-active-label hidden>${r(n)}</p>
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
      </section>`}function St(t,{getLabel:n,t:r,onSelectTool:i,mountTool:d,getActiveToolId:a}){const c=t.querySelector("[data-tools-panel]"),e=t.querySelector("[data-tool-picker]"),p=t.querySelector("[data-tool-list]"),f=t.querySelector("[data-tool-stage]"),y=t.querySelector("[data-tool-picker-toggle]"),v=t.querySelector("[data-tool-fullscreen]"),k=t.querySelector("[data-tool-picker-toggle-label]"),L=t.querySelector("[data-tool-picker-chevron]"),u=t.querySelector("[data-tool-active-label]");if(!c||!e||!p||!f||!y||!v)return;let h=sessionStorage.getItem(z)==="true";const S=()=>{u&&(u.textContent=n(a()))},x=()=>{y.setAttribute("aria-expanded",h?"false":"true"),k&&(k.textContent=r(h?"tools.showLabList":"tools.hideLabList")),L&&(L.textContent=h?"▼":"▲"),u&&(u.hidden=!h)},q=s=>{h=s,c.classList.toggle("is-picker-collapsed",h),sessionStorage.setItem(z,h?"true":"false"),x()};c.classList.toggle("is-picker-collapsed",h),S(),x(),y.addEventListener("click",()=>{q(!h)}),p.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{const m=s.getAttribute("data-tool");m&&(i(m),p.querySelectorAll("button").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-tool")===m)}),S(),d(f),window.innerWidth<=X&&q(!0))})}),d(f),Y({app:document.getElementById("app"),stage:f,button:v,t:r,setCollapsed:q,getCollapsed:()=>h})}const J=1.7,tt=.7,I=1,et=.1,at=3;function nt(t){const n=Math.floor(t),r=t-n;return n+(Math.random()<r?1:0)}function N(t){for(let n=t.length-1;n>0;n-=1){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}function st(t){const n=new Map(t.map(a=>[a.id,a.copies])),r=[];let i=null;const d=t.reduce((a,c)=>a+c.copies,0);for(let a=0;a<d;a+=1){let c=[...n.entries()].filter(([f,y])=>y>0&&f!==i);c.length===0&&(c=[...n.entries()].filter(([,f])=>f>0)),c.sort((f,y)=>y[1]-f[1]);const[e,p]=c[0];r.push(e),n.set(e,p-1),i=e}return r}function rt(t){const n=[];return t.forEach(({id:r,copies:i})=>{for(let d=0;d<i;d+=1)n.push(r)}),n}function lt(t){let n="sequence",r=1,i=[],d=[],a=0,c=!1,e=!1,p=!1;const f=new Map;function y(){return t()}function v(){return new Map(y().map(o=>[o.id,o]))}function k(){f.clear(),y().forEach(o=>{f.set(o.id,{nextRate:I,totalGotIt:0,roundAgain:0,roundGotIt:0,roundNeutral:0})})}function L(){const o=y();return r===1?o.map(g=>({id:g.id,copies:1})):o.map(g=>{var b;return{id:g.id,copies:nt(((b=f.get(g.id))==null?void 0:b.nextRate)??I)}}).filter(g=>g.copies>0)}function u(o){if(o.length===0)return[];if(r===1){const g=o.map(b=>b.id);return n==="random"?N([...g]):[...g].sort((b,E)=>b-E)}return n==="random"?N(rt(o)):st(o)}function h(){if(e=!1,p=!1,i=L(),i.reduce((g,b)=>g+b.copies,0)===0){p=!0,e=!0,d=[],a=0;return}y().forEach(g=>{const b=f.get(g.id);b&&(b.roundAgain=0,b.roundGotIt=0,b.roundNeutral=0)}),d=u(i),a=0,c=!1}function S(){r=1,k(),h()}function x(){return d[a]??null}function q(){const o=x();return o==null?null:v().get(o)??null}function s(o){const g=x();if(g==null)return;const b=f.get(g);b&&(o==="again"?(b.nextRate=J,b.totalGotIt=0,b.roundAgain+=1):o==="gotit"?(b.totalGotIt+=1,b.roundGotIt+=1,b.nextRate=b.totalGotIt>=at?et:tt):o==="neutral"&&(b.roundNeutral+=1,b.nextRate=I))}function m(){return c=!1,a<d.length-1?(a+=1,!1):(e=!0,!0)}return S(),{getMode:()=>n,setMode(o){n!==o&&(n=o,d=u(i),a=0,c=!1)},resetSession:S,getRoundNumber:()=>r,getProgress:()=>({index:d.length?a+1:0,total:d.length}),isFlipped:()=>c,flip(){c=!c},unflip(){c=!1},currentCard:q,prev(){return a>0?(a-=1,c=!1,!0):!1},nextNavigate(){return a<d.length-1?(a+=1,c=!1,!0):!1},rateAgain(){return c?(s("again"),m()):!1},rateGotIt(){return c?(s("gotit"),m()):!1},rateNeutral(){return c?(s("neutral"),m()):!1},isSummary:()=>e,isSessionComplete:()=>p,getRoundStats(){let o=0,g=0,b=0;return f.forEach(E=>{o+=E.roundAgain,g+=E.roundGotIt,b+=E.roundNeutral}),{again:o,gotIt:g,neutral:b}},nextRound(){r+=1,h()},restart(){S()}}}const ot={thermometry:"flashcards.deck.thermometry",heatInternalEnergy:"flashcards.deck.heatInternalEnergy",changeOfState:"flashcards.deck.changeOfState",heatTransfer:"flashcards.deck.heatTransfer",reflection:"topic.reflection",refraction:"topic.refraction",tir:"topic.tir",rotatingMirror:"topic.reflection"};function ct(t){const n=ot[t]||`topic.${t}`,r=l(n);return r===n?t:r}function xt(t,{deckOptions:n,buildDeck:r,initialDeck:i="all"}){let d=i,a=null,c=null;t.innerHTML=`
    <section class="panel panel--flashcards">
      <h2>${l("flashcards.title")}</h2>
      <p class="lead">${l("flashcards.intro")}</p>
      <div class="fc-controls no-print">
        <div class="control">
          <label>${l("flashcards.deck")}</label>
          <select data-fc-deck>
            ${n.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
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
    </section>`;const e={deck:t.querySelector("[data-fc-deck]"),mode:t.querySelector("[data-fc-mode]"),round:t.querySelector("[data-fc-round]"),progress:t.querySelector("[data-fc-progress]"),studyPanel:t.querySelector("[data-fc-study-panel]"),summaryPanel:t.querySelector("[data-fc-summary]"),cardWrap:t.querySelector("[data-fc-card-wrap]"),cardInner:t.querySelector("[data-fc-card-inner]"),subtopicPill:t.querySelector("[data-fc-subtopic-pill]"),subtopicPillBack:t.querySelector("[data-fc-subtopic-pill-back]"),cardCode:t.querySelector("[data-fc-card-code]"),cardCodeBack:t.querySelector("[data-fc-card-code-back]"),frontBody:t.querySelector("[data-fc-front-body]"),backBody:t.querySelector("[data-fc-back-body]"),flipPrompt:t.querySelector("[data-fc-flip-prompt]"),hint:t.querySelector("[data-fc-hint]"),prev:t.querySelector("[data-fc-prev]"),again:t.querySelector("[data-fc-again]"),flip:t.querySelector("[data-fc-flip]"),gotit:t.querySelector("[data-fc-gotit]"),next:t.querySelector("[data-fc-next]"),summaryTitle:t.querySelector("[data-fc-summary-title]"),summaryStats:t.querySelector("[data-fc-summary-stats]"),summaryKeep:t.querySelector("[data-fc-summary-keep]"),summaryConfident:t.querySelector("[data-fc-summary-confident]"),nextRound:t.querySelector("[data-fc-next-round]"),restart:t.querySelector("[data-fc-restart]")};async function p(){const s=await r(d);a=lt(()=>s)}function f(s,m){const o=!m;e.prev.disabled=o,e.again.disabled=o||!s,e.gotit.disabled=o||!s,e.flip.disabled=o,e.next.disabled=o}function y(s,m,o=!1){var F;s.classList.remove("fc-card-text-long","fc-card-text-compact");const g=document.createElement("div");g.innerHTML=m||"";const b=(g.textContent||"").trim(),E=b.split(`
`).filter(Boolean).length,$=((F=(m||"").match(/<br\s*\/?>/gi))==null?void 0:F.length)??0,_=Math.max(E,$>0?$+1:0),H=b.length;o||_>=5||H>220?s.classList.add("fc-card-text-compact"):(_>=4||H>130)&&s.classList.add("fc-card-text-long")}function v(s,m,o){const g=(o||"").replace(/"/g,"&quot;"),b=(o||l("flashcards.question")).replace(/</g,"&lt;");s.innerHTML=`<img src="${m}" alt="${g}" loading="lazy" class="fc-card-img" data-fc-img /><p class="fc-img-fallback muted" data-fc-img-fallback hidden>${b}</p>`;const E=s.querySelector("[data-fc-img]"),$=s.querySelector("[data-fc-img-fallback]");E&&$&&(E.onerror=()=>{E.hidden=!0,$.hidden=!1},E.onload=()=>{E.hidden=!1,$.hidden=!0})}function k(){const s=a.currentCard(),m=a.isFlipped();if(e.cardInner.classList.toggle("fc-flipped",m),!s){e.subtopicPill.textContent="",e.subtopicPillBack.textContent="",e.cardCode.textContent="",e.cardCodeBack.textContent="",e.frontBody.innerHTML="",e.backBody.innerHTML="",e.flipPrompt.hidden=!0,e.cardWrap.classList.remove("fc-card-container--image"),f(!1,!1),e.hint.textContent="";return}const o=ct(s.subtopic),g=l("flashcards.cardCode").replace("{id}",String(s.id));e.subtopicPill.textContent=o,e.subtopicPillBack.textContent=o,e.cardCode.textContent=g,e.cardCodeBack.textContent=g,s.isImage?(e.cardWrap.classList.add("fc-card-container--image"),e.flipPrompt.hidden=!0,v(e.frontBody,s.frontImage,s.alt),s.backImage&&s.backImage!==s.frontImage?v(e.backBody,s.backImage,s.alt):e.backBody.innerHTML=e.frontBody.innerHTML):(e.cardWrap.classList.remove("fc-card-container--image"),e.flipPrompt.hidden=m,e.frontBody.innerHTML=s.front,e.backBody.innerHTML=s.back,y(e.frontBody,s.front,s.compactFront),y(e.backBody,s.back,s.compactBack)),f(m,!0),e.hint.textContent=m?l("flashcards.hint.rated"):l("flashcards.flipFirst"),e.hint.classList.toggle("fc-rating-hint--action",!m)}function L(){const s=a.getRoundStats(),{total:m}=a.getProgress();a.isSessionComplete()?(e.summaryTitle.textContent=l("flashcards.summary.complete"),e.summaryStats.textContent=l("flashcards.summary.completeStats"),e.nextRound.hidden=!0):(e.summaryTitle.textContent=l("flashcards.summary.title").replace("{round}",String(a.getRoundNumber())),e.summaryStats.textContent=l("flashcards.summary.stats").replace("{total}",String(m)).replace("{again}",String(s.again)).replace("{gotIt}",String(s.gotIt)).replace("{neutral}",String(s.neutral)),e.nextRound.hidden=!1),e.summaryKeep.textContent=l("flashcards.summary.keep").replace("{count}",String(s.again)),e.summaryConfident.textContent=l("flashcards.summary.confident").replace("{count}",String(s.gotIt))}function u(){const{index:s,total:m}=a.getProgress();e.round.textContent=l("flashcards.round").replace("{round}",String(a.getRoundNumber())).replace("{total}",String(m)),e.progress.textContent=m?`${s} / ${m}`:"—";const o=a.isSummary();e.studyPanel.hidden=o,e.summaryPanel.hidden=!o,o?L():k()}function h(){const s=a.getMode();e.mode.querySelectorAll("button").forEach(m=>{m.classList.toggle("active",m.dataset.mode===s)})}function S(){a.currentCard()&&(a.flip(),k())}function x(){t.querySelector("h2").textContent=l("flashcards.title"),t.querySelector(".lead").textContent=l("flashcards.intro"),t.querySelector("[data-fc-deck]").previousElementSibling.textContent=l("flashcards.deck"),t.querySelector(".fc-mode-label").textContent=l("flashcards.studyMode"),t.querySelector(".fc-progress-label").textContent=l("flashcards.progressLabel"),e.mode.querySelector('[data-mode="sequence"]').textContent=l("flashcards.mode.sequence"),e.mode.querySelector('[data-mode="random"]').textContent=l("flashcards.mode.random"),e.flipPrompt.textContent=l("flashcards.tapFlip"),t.querySelector("[data-fc-prev-label]").textContent=l("flashcards.prev"),t.querySelector("[data-fc-next-label]").textContent=l("flashcards.next"),e.nextRound.textContent=l("flashcards.summary.nextRound"),e.restart.textContent=l("flashcards.summary.restart"),u()}e.deck.value=d,e.deck.addEventListener("change",()=>{d=e.deck.value,p().then(()=>{h(),u()})}),e.mode.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{a.setMode(s.dataset.mode),h(),u()})}),e.cardWrap.addEventListener("click",s=>{s.target.closest("button")||S()}),e.flip.addEventListener("click",s=>{s.stopPropagation(),S()}),e.prev.addEventListener("click",()=>{a.prev(),u()}),e.again.addEventListener("click",()=>{a.rateAgain()?u():k()}),e.gotit.addEventListener("click",()=>{a.rateGotIt()?u():k()}),e.next.addEventListener("click",()=>{a.isFlipped()?a.rateNeutral()?u():k():a.nextNavigate()&&u()}),e.nextRound.addEventListener("click",()=>{a.nextRound(),u()}),e.restart.addEventListener("click",()=>{a.restart(),u()}),c=s=>{var o;if(!t.isConnected)return;const m=(o=s.target)==null?void 0:o.tagName;if(!(m==="INPUT"||m==="SELECT"||m==="TEXTAREA")){if(s.code==="Space"){s.preventDefault(),S();return}if(s.key==="ArrowLeft"){a.isFlipped()?a.rateAgain()?u():k():(a.prev(),u());return}if(s.key==="ArrowRight"||s.key==="1"){a.isFlipped()?a.rateGotIt()?u():k():a.nextNavigate()&&u();return}s.key==="2"&&a.isFlipped()&&(a.rateAgain()?u():k())}},window.addEventListener("keydown",c);const q=()=>{p().then(()=>{h(),x()})};return window.addEventListener("s3phy:lang",q),p().then(()=>{h(),u()}),()=>{window.removeEventListener("keydown",c),window.removeEventListener("s3phy:lang",q),a==null||a.restart(),t.innerHTML=""}}function it(t){const n=String(t).replace(/^\.\//,""),r=window.location.origin,i=window.location.pathname,d=i.match(/^(.*\/dist)\/?/);if(d)return`${r}${d[1]}/${n}`;let a="./";a.endsWith("/")||(a+="/");const c=i.endsWith("/")?i:i.replace(/\/[^/]*$/,"/")||"/";return new URL(`${a}${n}`,`${r}${c}`).href}let T=null,A=null;function dt(){return T||(T=G(()=>import("./flashcards-light-ch3-Cmbo5pjW.js"),[],import.meta.url).then(t=>t.default)),T}function ut(){return A||(A=G(()=>import("./flashcards-heat-ch1-DBrwHTm1.js"),[],import.meta.url).then(t=>t.default)),A}function ft(t){return t==="zh-Hant"?"zhHant":"en"}function C(t){return it(t)}function B(t,n){return t.filter(r=>r.topic===n)}function pt(t,n,r,i){var c,e,p;const d=ft(n);if((c=t==null?void 0:t.en)!=null&&c.front||(e=t==null?void 0:t.zhHant)!=null&&e.front){const f=(p=t[d])!=null&&p.front?t[d]:t.en||t.zhHant,y=C(f.front),v=f.back?C(f.back):y;return{id:r,subtopic:t.topic||i,front:"",back:"",frontImage:y,backImage:v,alt:t.alt||t.title||"",isImage:!0}}if(t!=null&&t.front){const f=C(t.front),y=t.back?C(t.back):f;return{id:r,subtopic:t.topic||i,front:"",back:"",frontImage:f,backImage:y,alt:t.alt||t.title||"",isImage:!0}}const a=t[d]||t.en;return{id:r,subtopic:t.topic||i,front:(a==null?void 0:a.q)||"",back:(a==null?void 0:a.a)||"",isImage:!1,compactFront:!!t.compactFront,compactBack:!!t.compactBack}}function U(t,n,r="General"){let i=1;return t.map(d=>{const a=pt(d,n,i,d.topic||r);return i+=1,a})}async function mt(t){const n=await dt(),r=t==="rotatingMirror"?"reflection":t;return r==="all"?n.slice():r==="reflection"?B(n,"reflection"):r==="refractionTir"?[...B(n,"refraction"),...B(n,"tir")]:n.slice()}async function yt(t){const n=await ut();return t==="all"?n.slice():n.filter(r=>r.topic===t)}async function Lt(t,n){return U(await mt(t),n)}async function Et(t,n){return U(await yt(t),n)}export{xt as a,ht as b,gt as c,Lt as d,M as e,D as f,Et as g,St as h,O as l,vt as m,K as n,kt as r};
