import{t as a,g as $,s as z,a as x}from"./index-CrmRTGbQ.js";const b=new Map;function w(){return $()==="zh-Hant"?"zhHant":"en"}function N(e){if(e)for(const t of Object.keys(e))t.endsWith("Cleanup")&&typeof e[t]=="function"&&e[t]()}async function g(e,t){const i=`./${e}/${t}`;if(b.has(i))return b.get(i);try{const r=(await fetch(i,{method:"HEAD"})).ok;return b.set(i,r),r}catch{return b.set(i,!1),!1}}async function T(e){return g("notes",e)}function E(e){return`${String(e).split("#")[0]}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}function S(e,t,i){const o=E(t);return`
    <div class="note-preview-wrap">
      <iframe class="note-preview" title="${e.replace(/"/g,"&quot;")}" src="${o}" loading="lazy"></iframe>
    </div>
    <p class="note-preview-link"><a href="${t}" target="_blank" rel="noopener">${i}</a></p>`}async function P(e,t){const i=w();await Promise.all(t.map(async o=>{const r=e.querySelector(`[data-note-card="${o.key}"]`);if(!r)return;const s=r.querySelector("[data-note-body]"),c=i==="zhHant"?o.fileZh:o.fileEn,l=await T(c),n=`./notes/${c}`;l?s.innerHTML=S(a(`notes.card.${o.key}`),n,a("notes.openPdf")):s.innerHTML=`<p class="lead">${a("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}))}async function R(e,t,{version:i=""}={}){const o=w(),r=i?`?v=${i}`:"";await Promise.all(t.map(async s=>{const c=e.querySelector(`[data-summary-card="${s.key}"]`);if(!c)return;const l=c.querySelector("[data-summary-body]");if(s.type==="image"){const m=s.fileEn&&s.fileZh?o==="zhHant"?s.fileZh:s.fileEn:s.file,d=await g("summary",m),y=`${`./summary/${m}`}${r}`;d?l.innerHTML=`
          <img class="summary-thumb" src="${y}" alt="${a(`summary.item.${s.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${y}" target="_blank" rel="noopener">${a("summary.viewImage")}</a></p>`:l.innerHTML=`<p class="lead">${a("summary.missing")}</p>`;return}const n=o==="zhHant"?s.fileZh:s.fileEn,u=await g("summary-pdfs",n),f=`./summary-pdfs/${n}`;u?l.innerHTML=S(a(`summary.item.${s.key}`),f,a("summary.download")):l.innerHTML=`<p class="lead">${a("summary.missing")}</p>`}))}const W=16;function _(e){if(!e)return{check(){},cleanup(){}};const t=e.querySelector(".main-nav");let i=0;function o(l){const n=e.querySelector(".site-header__brand"),u=e.querySelector(".site-header__actions"),f=n==null?void 0:n.querySelector(".brand-logo-wrap"),m=n==null?void 0:n.querySelector(".brand-text-block");let d=(n==null?void 0:n.offsetWidth)??0;l&&m&&(d=((f==null?void 0:f.offsetWidth)??0)+10);const h=(t==null?void 0:t.scrollWidth)??0,y=(u==null?void 0:u.offsetWidth)??0;return d+h+y+W*3}function r(){z(),e.classList.remove("nav-hide-brand-text","nav-compact-pills"),e.offsetWidth;const l=e.clientWidth;let n=o(!1);n>l&&(e.classList.add("nav-hide-brand-text"),e.offsetWidth,n=o(!0)),(n>l||t&&t.scrollWidth>t.clientWidth+2)&&e.classList.add("nav-compact-pills")}function s(){window.clearTimeout(i),i=window.setTimeout(r,60)}r(),window.addEventListener("resize",s);let c;return typeof ResizeObserver<"u"&&(c=new ResizeObserver(s),c.observe(e),t&&c.observe(t)),{check:r,cleanup(){window.clearTimeout(i),window.removeEventListener("resize",s),c==null||c.disconnect(),e.classList.remove("nav-hide-brand-text","nav-compact-pills")}}}const A=["topics","notes","tools","worksheets","quiz","flashcards","summary"],M={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",quiz:"nav.quiz",flashcards:"nav.flashcards",summary:"nav.summary"};function B(e,{subtitleKey:t,activeSection:i,onSection:o,onLang:r}){e.innerHTML=`
    <header class="site-header site-header--hub">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${a("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${a(t)}</p>
        </div>
      </div>
      <nav class="main-nav" data-nav aria-label="${a("app.title")}"></nav>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${a("strand.back")}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${a("footer.conventions")}</footer>
  `;const s=e.querySelector("[data-main]"),c=e.querySelector("[data-nav]"),l=e.querySelector("[data-lang]"),n=e.querySelector("[data-strand-back]");let u=i;const f=e.querySelector(".site-header--hub"),m=_(f);function d(p){u=p,c.innerHTML=A.map((v,L)=>{const q=p===v?"active":"",H=`${L+1}. ${a(M[v])}`;return`<button type="button" class="${q}" data-sec="${v}">${H}</button>`}).join(""),c.querySelectorAll("button").forEach(v=>{v.addEventListener("click",()=>o(v.getAttribute("data-sec")))}),requestAnimationFrame(()=>m.check())}function h(){l.innerHTML=`
      <button type="button" data-set-lang="en" class="${$()==="en"?"active":""}">${a("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${$()==="zh-Hant"?"active":""}">${a("lang.zhHant")}</button>
    `,l.querySelectorAll("button").forEach(p=>{p.addEventListener("click",()=>{x(p.getAttribute("data-set-lang")),r()})})}function y(){e.querySelector("[data-hub-subtitle]").textContent=a(t),n.textContent=a("strand.back"),e.querySelector("[data-hub-footer]").textContent=a("footer.conventions"),e.querySelector(".site-title").textContent=a("app.title")}const k=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return n.addEventListener("click",k),d(i),h(),{main:s,updateSection(p){d(p)},refreshLabels(){y(),d(u),h()},destroy(){n.removeEventListener("click",k),m.cleanup()}}}export{R as a,N as c,P as h,B as m};
