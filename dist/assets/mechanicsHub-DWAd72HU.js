import{t as e}from"./index-BUYD4sT7.js";import{h as g,a as S}from"./hubHelpers-BUPWlGcI.js";import{m as M}from"./hubShell-C0rnUC5o.js";const c=[{id:"positionDisplacement",titleKey:"topic.positionDisplacement",fileEn:"position-displacement-en.pdf",fileZh:"position-displacement-zhHant.pdf"},{id:"speedVelocity",titleKey:"topic.speedVelocity",fileEn:"speed-velocity-en.pdf",fileZh:"speed-velocity-zhHant.pdf"},{id:"acceleration",titleKey:"topic.acceleration",fileEn:"acceleration-en.pdf",fileZh:"acceleration-zhHant.pdf"},{id:"forceMotion",titleKey:"topic.forceMotion",fileEn:"force-motion-en.pdf",fileZh:"force-motion-zhHant.pdf"}],b={positionDisplacement:"position-displacement",speedVelocity:"speed-velocity",acceleration:"acceleration",forceMotion:"force-motion"},H=c.map(s=>{const i=b[s.id];return{key:s.id,type:"image",fileEn:`${i}-en.webp`,fileZh:`${i}-zhHant.webp`}});function T(s){let i="topics",t=null,o={main:null};function l(){o.main&&(i==="topics"?o.main.innerHTML=f():i==="notes"?o.main.innerHTML=u():i==="tools"?o.main.innerHTML=`
        <section class="panel">
          <h2>${e("tools.title")}</h2>
          <p class="lead">${e("tools.comingSoon")}</p>
        </section>
      `:i==="worksheets"?o.main.innerHTML=`
        <section class="panel">
          <h2>${e("worksheets.practiceTitle")}</h2>
          <p class="lead">${e("worksheets.comingSoon")}</p>
        </section>
      `:i==="quiz"?o.main.innerHTML=`
        <section class="panel">
          <h2>${e("quiz.practiceTitle")}</h2>
          <p class="lead">${e("quiz.comingSoon")}</p>
        </section>
      `:i==="flashcards"?o.main.innerHTML=`
        <section class="panel">
          <h2>${e("flashcards.title")}</h2>
          <p class="lead">${e("flashcards.comingSoon")}</p>
        </section>
      `:i==="summary"&&(o.main.innerHTML=v()),i==="notes"&&y(),i==="summary"&&$())}function d(){t==null||t.refreshLabels(),l()}function m(){t==null||t.destroy(),t=M(s,{subtitleKey:"strand.mechanics.subtitle",activeSection:i,onSection:n=>{i=n,t.updateSection(i),l()},onLang:d}),o.main=t.main,t.updateSection(i),l()}function f(){return`
      <section class="panel panel--topic-hub">
        <h2>${e("topics.title")}</h2>
        <p class="lead">${e("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${c.map(n=>`
            <div class="card">
              <h3>${e(n.titleKey)}</h3>
              <button class="btn primary" type="button" data-go-section="notes">${e("topic.viewNotes")}</button>
            </div>
          `).join("")}
        </div>
      </section>`}function h(n){const a=n.target.closest("[data-go-section]");(a==null?void 0:a.getAttribute("data-go-section"))==="notes"&&(i="notes",t.updateSection(i),l())}function u(){return`
      <section class="panel">
        <h2>${e("notes.title")}</h2>
        <p class="lead">${e("notes.intro")}</p>
        <p class="lead">${e("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${c.map(n=>`
            <div class="card" data-note-card="${n.id}">
              <h3>${e(`notes.card.${n.id}`)}</h3>
              <div data-note-body></div>
            </div>
          `).join("")}
        </div>
      </section>`}async function y(){const n=c.map(a=>({key:a.id,fileEn:a.fileEn,fileZh:a.fileZh}));await g(s,n)}function v(){return`
      <section class="panel">
        <h2>${e("summary.title")}</h2>
        <p class="lead">${e("summary.intro")}</p>
        <p class="lead">${e("notes.embedHint")}</p>
        <div class="grid cols-4" data-summary-grid>
          ${c.map(n=>`
            <div class="card" data-summary-card="${n.id}">
              <h3>${e(`summary.item.${n.id}`)}</h3>
              <div data-summary-body></div>
            </div>
          `).join("")}
        </div>
      </section>`}async function $(){await S(s,H)}const r=d,p=n=>h(n);return window.addEventListener("s3phy:lang",r),s.addEventListener("click",p),m(),()=>{window.removeEventListener("s3phy:lang",r),s.removeEventListener("click",p),t==null||t.destroy()}}export{T as mountMechanicsHub};
