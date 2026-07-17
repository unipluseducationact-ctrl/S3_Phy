import{s as L,t as n,g as y,a as q}from"./index-BUYD4sT7.js";const $=16;function W(t){if(!t)return{check(){},cleanup(){}};const a=t.querySelector(".main-nav");let c=0;function h(i){const e=t.querySelector(".site-header__brand"),r=t.querySelector(".site-header__actions"),b=e==null?void 0:e.querySelector(".brand-logo-wrap"),f=e==null?void 0:e.querySelector(".brand-text-block");let l=(e==null?void 0:e.offsetWidth)??0;i&&f&&(l=((b==null?void 0:b.offsetWidth)??0)+10);const p=(a==null?void 0:a.scrollWidth)??0,m=(r==null?void 0:r.offsetWidth)??0;return l+p+m+$*3}function u(){L(),t.classList.remove("nav-hide-brand-text","nav-compact-pills"),t.offsetWidth;const i=t.clientWidth;let e=h(!1);e>i&&(t.classList.add("nav-hide-brand-text"),t.offsetWidth,e=h(!0)),(e>i||a&&a.scrollWidth>a.clientWidth+2)&&t.classList.add("nav-compact-pills")}function v(){window.clearTimeout(c),c=window.setTimeout(u,60)}u(),window.addEventListener("resize",v);let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(v),s.observe(t),a&&s.observe(a)),{check:u,cleanup(){window.clearTimeout(c),window.removeEventListener("resize",v),s==null||s.disconnect(),t.classList.remove("nav-hide-brand-text","nav-compact-pills")}}}const z=["topics","notes","tools","worksheets","quiz","flashcards","summary"],x={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",quiz:"nav.quiz",flashcards:"nav.flashcards",summary:"nav.summary"};function H(t,{subtitleKey:a,activeSection:c,onSection:h,onLang:u}){t.innerHTML=`
    <header class="site-header site-header--hub">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
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
  `;const v=t.querySelector("[data-main]"),s=t.querySelector("[data-nav]"),i=t.querySelector("[data-lang]"),e=t.querySelector("[data-strand-back]");let r=c;const b=t.querySelector(".site-header--hub"),f=W(b);function l(o){r=o,s.innerHTML=z.map((d,S)=>{const k=o===d?"active":"",w=`${S+1}. ${n(x[d])}`;return`<button type="button" class="${k}" data-sec="${d}">${w}</button>`}).join(""),s.querySelectorAll("button").forEach(d=>{d.addEventListener("click",()=>h(d.getAttribute("data-sec")))}),requestAnimationFrame(()=>f.check())}function p(){i.innerHTML=`
      <button type="button" data-set-lang="en" class="${y()==="en"?"active":""}">${n("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${y()==="zh-Hant"?"active":""}">${n("lang.zhHant")}</button>
    `,i.querySelectorAll("button").forEach(o=>{o.addEventListener("click",()=>{q(o.getAttribute("data-set-lang")),u()})})}function m(){t.querySelector("[data-hub-subtitle]").textContent=n(a),e.textContent=n("strand.back"),t.querySelector("[data-hub-footer]").textContent=n("footer.conventions"),t.querySelector(".site-title").textContent=n("app.title")}const g=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return e.addEventListener("click",g),l(c),p(),{main:v,updateSection(o){l(o)},refreshLabels(){m(),l(r),p()},destroy(){e.removeEventListener("click",g),f.cleanup()}}}export{H as m};
