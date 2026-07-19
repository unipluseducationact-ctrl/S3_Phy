import{s as $,t as n,g as k,a as W}from"./index-BDfUEZcJ.js";const z=16;function x(t){if(!t)return{check(){},cleanup(){}};const a=t.querySelector(".main-nav");let c=0;function h(i){const e=t.querySelector(".site-header__brand"),r=t.querySelector(".site-header__actions"),v=e==null?void 0:e.querySelector(".brand-logo-wrap"),f=e==null?void 0:e.querySelector(".brand-text-block");let l=(e==null?void 0:e.offsetWidth)??0;i&&f&&(l=((v==null?void 0:v.offsetWidth)??0)+10);const p=(a==null?void 0:a.scrollWidth)??0,y=(r==null?void 0:r.offsetWidth)??0;return l+p+y+z*3}function u(){$(),t.classList.remove("nav-hide-brand-text","nav-compact-pills"),t.offsetWidth;const i=t.clientWidth;let e=h(!1);e>i&&(t.classList.add("nav-hide-brand-text"),t.offsetWidth,e=h(!0)),(e>i||a&&a.scrollWidth>a.clientWidth+2)&&t.classList.add("nav-compact-pills")}function b(){window.clearTimeout(c),c=window.setTimeout(u,60)}u(),window.addEventListener("resize",b);let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(b),s.observe(t),a&&s.observe(a)),{check:u,cleanup(){window.clearTimeout(c),window.removeEventListener("resize",b),s==null||s.disconnect(),t.classList.remove("nav-hide-brand-text","nav-compact-pills")}}}const _=["topics","notes","tools","worksheets","quiz","flashcards","summary"],H={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",quiz:"nav.quiz",flashcards:"nav.flashcards",summary:"nav.summary"};function T(t,{subtitleKey:a,activeSection:c,onSection:h,onLang:u}){var S;t.innerHTML=`
    <header class="site-header site-header--hub">
      <div class="site-header__brand">
        <button type="button" class="brand-logo-wrap" aria-label="${n("strand.back")}">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </button>
        <div class="brand-text-block" style="cursor: pointer;" data-brand-home>
          <h1 class="site-title">${n("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${n(a)}</p>
        </div>
      </div>
      <nav class="main-nav" data-nav aria-label="${n("app.title")}"></nav>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${n("strand.back")}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${n("footer.conventions")}</footer>
  `;const b=t.querySelector("[data-main]"),s=t.querySelector("[data-nav]"),i=t.querySelector("[data-lang]"),e=t.querySelector("[data-strand-back]");let r=c;const v=t.querySelector(".site-header--hub"),f=x(v);function l(o){r=o,s.innerHTML=_.map((d,L)=>{const q=o===d?"active":"",w=`${L+1}. ${n(H[d])}`;return`<button type="button" class="${q}" data-sec="${d}">${w}</button>`}).join(""),s.querySelectorAll("button").forEach(d=>{d.addEventListener("click",()=>h(d.getAttribute("data-sec")))}),requestAnimationFrame(()=>f.check())}function p(){i.innerHTML=`
      <button type="button" data-set-lang="en" class="${k()==="en"?"active":""}">${n("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${k()==="zh-Hant"?"active":""}">${n("lang.zhHant")}</button>
    `,i.querySelectorAll("button").forEach(o=>{o.addEventListener("click",()=>{W(o.getAttribute("data-set-lang")),u()})})}function y(){t.querySelector("[data-hub-subtitle]").textContent=n(a),e.textContent=n("strand.back"),t.querySelector("[data-hub-footer]").textContent=n("footer.conventions"),t.querySelector(".site-title").textContent=n("app.title")}const m=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};e.addEventListener("click",m);const g=t.querySelector(".brand-logo-wrap");return g&&g.addEventListener("click",m),(S=t.querySelector("[data-brand-home]"))==null||S.addEventListener("click",m),l(c),p(),{main:b,updateSection(o){l(o)},refreshLabels(){y(),l(r),p()},destroy(){e.removeEventListener("click",m),f.cleanup()}}}export{T as m};
