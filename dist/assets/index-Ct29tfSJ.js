(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&t(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();const K={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"S3 Physics — Optics & Heat","strands.title":"Choose a strand","strands.intro":"Select Optics or Heat to open that learning hub.","strand.optics.title":"Optics","strand.optics.desc":"Light and waves: reflection, refraction, lenses, and electromagnetic waves.","strand.optics.subtitle":"Optics — light and waves","strand.heat.title":"Heat","strand.heat.desc":"Temperature, heat transfer, and thermal physics (content in progress).","strand.heat.subtitle":"Heat — temperature and energy transfer","strand.open":"Open strand","strand.back":"All strands","heat.section.empty":"Heat strand content is coming soon. Check back for notes, labs, and practice.","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.refractionTir":"Refraction, Snell’s law & total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (Δθ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 × θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refractionTir.title":"Prison Break lab — refraction, Snell & TIR","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","flashcards.deck.refractionTir":"Refraction & TIR","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},ft={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"中三物理 — 光與熱","strands.title":"選擇單元","strands.intro":"選擇光學或熱學，進入該學習中心。","strand.optics.title":"光學","strand.optics.desc":"光與波動：反射、折射、透鏡與電磁波。","strand.optics.subtitle":"光學 — 光與波動","strand.heat.title":"熱學","strand.heat.desc":"溫度、熱傳入與熱力學（內容建置中）。","strand.heat.subtitle":"熱學 — 溫度與熱傳入","strand.open":"進入單元","strand.back":"全部單元","heat.section.empty":"熱學單元內容建置中，敬請關注筆記、實驗與練習。","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.tir":"全反射","topic.refractionTir":"折射、司乃耳定律與全內反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refractionTir.title":"逃獄遊戲 — 折射、司乃耳與全內反射","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","flashcards.deck.refractionTir":"折射與全內反射","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},rt="s3phy.lang",st={en:K,"zh-Hant":ft};let U="en";function pt(){try{const e=localStorage.getItem(rt);if(e==="zh-Hant"||e==="en")return e}catch{}return"en"}function mt(){U=pt()}function it(e){if(st[e]){U=e;try{localStorage.setItem(rt,e)}catch{}document.documentElement.lang=e==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function O(){return U}function s(e){const n=st[U]||K;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:Object.prototype.hasOwnProperty.call(K,e)?K[e]:e}const ht=[{id:"optics",titleKey:"strand.optics.title",descKey:"strand.optics.desc"},{id:"heat",titleKey:"strand.heat.title",descKey:"strand.heat.desc"}];function bt(e){function n(){e.innerHTML=`
      <header class="site-header site-header--strand-picker">
        <div class="site-header__brand">
          <div class="brand-logo-wrap" aria-hidden="true">
            <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
          </div>
          <div class="brand-text-block">
            <h1 class="site-title">${s("app.title")}</h1>
            <p class="site-subtitle">${s("app.subtitle")}</p>
          </div>
        </div>
        <div class="site-header__actions">
          <div class="lang-toggle" data-lang></div>
        </div>
      </header>
      <section class="panel panel--topic-hub panel--strand-hub">
        <h2>${s("strands.title")}</h2>
        <p class="lead">${s("strands.intro")}</p>
        <div class="grid cols-2 topic-hub-grid strand-hub-grid">
          ${ht.map(({id:o,titleKey:l,descKey:h})=>`
            <div class="card">
              <h3>${s(l)}</h3>
              <p>${s(h)}</p>
              <button class="btn primary" type="button" data-strand="${o}">${s("strand.open")}</button>
            </div>`).join("")}
        </div>
      </section>
    `;const t=e.querySelector("[data-lang]");t.innerHTML=`
      <button type="button" data-set-lang="en" class="${O()==="en"?"active":""}">${s("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${O()==="zh-Hant"?"active":""}">${s("lang.zhHant")}</button>
    `,t.querySelectorAll("button").forEach(o=>{o.addEventListener("click",()=>{it(o.getAttribute("data-set-lang")),n()})}),e.querySelectorAll("[data-strand]").forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-strand");window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:l}))})})}const i=()=>n();return window.addEventListener("s3phy:lang",i),n(),()=>{window.removeEventListener("s3phy:lang",i)}}const V=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],G=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],Q="s3phy-rotating-mirror-lab-css",gt=`
.rml {
  --rml-bg: #0d0d10;
  --rml-panel: #18181b;
  --rml-border: #27272a;
  --rml-green: #00e676;
  --rml-cyan: #22d3ee;
  --rml-yellow: #ffcc00;
  --rml-red: #ff5252;
  --rml-text: #e4e4e7;
  --rml-muted: #a1a1aa;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--rml-text);
  background: var(--rml-bg);
  border-radius: 12px;
  padding: 12px;
  max-width: 100%;
  box-sizing: border-box;
}
.rml * { box-sizing: border-box; }
.rml .rml-head { text-align: center; margin: 0 0 14px; }
.rml .rml-title {
  margin: 0;
  font-weight: 800;
  font-size: 1.35rem;
  background: linear-gradient(90deg, #4db8ff, #00e676);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.rml .rml-sub { color: var(--rml-muted); font-size: 0.82rem; margin-top: 4px; }
.rml .rml-dash {
  display: flex;
  flex-direction: row;
  gap: 14px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.rml .rml-viz {
  flex: 2;
  min-width: min(100%, 320px);
  background: var(--rml-panel);
  padding: 10px;
  border-radius: 16px;
  border: 1px solid var(--rml-border);
  display: flex;
  justify-content: center;
  align-items: center;
}
.rml .rml-canvas {
  background: #121214;
  border-radius: 12px;
  width: 100%;
  max-width: 700px;
  height: auto;
  display: block;
}
.rml .rml-controls {
  flex: 1;
  min-width: min(100%, 280px);
  max-width: 420px;
  background: var(--rml-panel);
  border-radius: 16px;
  padding: 18px;
  border: 1px solid var(--rml-border);
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.rml .rml-toggles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rml-border);
}
.rml .rml-toggle {
  background: #27272a;
  color: var(--rml-muted);
  border: 1px solid transparent;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}
.rml .rml-toggle:hover { background: #3f3f46; color: #fff; }
.rml .rml-ind { width: 6px; height: 6px; border-radius: 50%; background: #52525b; flex-shrink: 0; }
.rml .rml-btn-green.active { background: rgba(0, 230, 118, 0.1); color: var(--rml-green); border-color: rgba(0, 230, 118, 0.3); }
.rml .rml-btn-green.active .rml-ind { background: var(--rml-green); box-shadow: 0 0 6px var(--rml-green); }
.rml .rml-btn-cyan.active { background: rgba(34, 211, 238, 0.12); color: var(--rml-cyan); border-color: rgba(34, 211, 238, 0.35); }
.rml .rml-btn-cyan.active .rml-ind { background: var(--rml-cyan); box-shadow: 0 0 6px var(--rml-cyan); }
.rml .rml-cg { display: flex; flex-direction: column; gap: 8px; }
.rml .rml-lr { display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; font-weight: 600; }
.rml .rml-badge {
  background: #27272a;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 0.78rem;
}
.rml input[type="range"] { -webkit-appearance: none; width: 100%; background: transparent; margin: 4px 0; }
.rml input[type="range"]:focus { outline: none; }
.rml input[type="range"]::-webkit-slider-runnable-track {
  width: 100%; height: 6px; cursor: pointer; background: #3f3f46; border-radius: 3px;
}
.rml input[type="range"]::-webkit-slider-thumb {
  height: 18px; width: 18px; border-radius: 50%; background: #fff; cursor: pointer;
  -webkit-appearance: none; margin-top: -6px; box-shadow: 0 2px 5px rgba(0,0,0,0.5);
}
.rml input[data-rml-rot]::-webkit-slider-thumb { background: var(--rml-yellow); border: 2px solid #fff; }
.rml .rml-ticks { display: flex; justify-content: space-between; font-size: 0.68rem; color: #52525b; }
.rml .rml-stats {
  background: rgba(0,0,0,0.2);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.rml .rml-sr {
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px solid #27272a; padding-bottom: 6px;
}
.rml .rml-sr:last-child { border-bottom: none; padding-bottom: 0; }
.rml .rml-sl { font-size: 0.78rem; color: var(--rml-muted); }
.rml .rml-sv { font-family: ui-monospace, monospace; font-weight: bold; font-size: 0.95rem; }
.rml .rml-shift {
  background: rgba(255, 82, 82, 0.1);
  border: 1px solid rgba(255, 82, 82, 0.3);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rml .rml-shv { color: var(--rml-red); font-size: 1.1rem; font-weight: bold; font-family: ui-monospace, monospace; }
.rml .rml-logic {
  font-size: 0.68rem;
  background: rgba(255, 82, 82, 0.2);
  color: #ff8a80;
  padding: 3px 8px;
  border-radius: 10px;
}
.rml .rml-reset {
  background: transparent;
  border: 1px solid #3f3f46;
  color: var(--rml-muted);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.82rem;
  width: 100%;
}
.rml .rml-reset:hover { background: #27272a; color: #fff; border-color: #52525b; }
`;function vt(){if(document.getElementById(Q))return;const e=document.createElement("style");e.id=Q,e.textContent=gt,document.head.appendChild(e)}function yt(e){vt();const n=document.createElement("div");n.className="rml",n.innerHTML=`
    <div class="rml-head">
      <h2 class="rml-title">${e("tools.rotatingMirror.title")}</h2>
      <div class="rml-sub">${e("tools.rotatingMirror.subtitle")}</div>
    </div>
    <div class="rml-dash">
      <div class="rml-viz">
        <canvas class="rml-canvas" width="700" height="420" aria-label="${e("tools.rotatingMirror.title")}"></canvas>
      </div>
      <div class="rml-controls">
        <div class="rml-toggles">
          <button type="button" class="rml-toggle rml-btn-green active" data-rml-toggle="orig-norm">
            <span class="rml-ind"></span> ${e("tools.rotatingMirror.toggle.origNormal")}
          </button>
          <button type="button" class="rml-toggle rml-btn-green active" data-rml-toggle="orig-ray">
            <span class="rml-ind"></span> ${e("tools.rotatingMirror.toggle.origRay")}
          </button>
          <button type="button" class="rml-toggle rml-btn-cyan active" data-rml-toggle="new-norm">
            <span class="rml-ind"></span> ${e("tools.rotatingMirror.toggle.newNormal")}
          </button>
          <button type="button" class="rml-toggle rml-btn-cyan active" data-rml-toggle="new-ray">
            <span class="rml-ind"></span> ${e("tools.rotatingMirror.toggle.newRay")}
          </button>
        </div>
        <div class="rml-cg">
          <div class="rml-lr">
            <span>${e("tools.rotatingMirror.incidentAngle")}</span>
            <span class="rml-badge" data-rml-disp="inc">-140°</span>
          </div>
          <input type="range" data-rml-inc min="-170" max="-100" step="1" value="-140" />
        </div>
        <div class="rml-cg">
          <div class="rml-lr">
            <span style="color:var(--rml-yellow)">${e("tools.rotatingMirror.mirrorRotation")}</span>
            <span class="rml-badge" data-rml-disp="rot" style="color:var(--rml-yellow);background:rgba(255,204,0,0.15)">0°</span>
          </div>
          <input type="range" data-rml-rot min="-45" max="45" step="1" value="0" />
          <div class="rml-ticks">
            <span>-45°</span><span>0°</span><span>+45°</span>
          </div>
        </div>
        <div class="rml-stats">
          <div class="rml-sr">
            <span class="rml-sl">${e("tools.rotatingMirror.statIncidence")}</span>
            <span class="rml-sv" style="color:var(--rml-yellow)" data-rml-val="i">50.0°</span>
          </div>
          <div class="rml-sr">
            <span class="rml-sl">${e("tools.rotatingMirror.statReflection")}</span>
            <span class="rml-sv" style="color:var(--rml-cyan)" data-rml-val="r">50.0°</span>
          </div>
        </div>
        <div class="rml-shift">
          <div>
            <div class="rml-sl" style="color:#ff8a80;margin-bottom:2px">${e("tools.rotatingMirror.rayShift")}</div>
            <div class="rml-shv" data-rml-val="shift">0.0°</div>
          </div>
          <div class="rml-logic">${e("tools.rotatingMirror.logicBadge")}</div>
        </div>
        <button type="button" class="rml-reset" data-rml-reset>${e("tools.rotatingMirror.reset")}</button>
      </div>
    </div>
  `;const i=n.querySelector(".rml-canvas"),t=i.getContext("2d"),o=n.querySelector("[data-rml-rot]"),l=n.querySelector("[data-rml-inc]"),h=n.querySelector('[data-rml-disp="rot"]'),M=n.querySelector('[data-rml-disp="inc"]'),S=n.querySelector('[data-rml-val="i"]'),H=n.querySelector('[data-rml-val="r"]'),g=n.querySelector('[data-rml-val="shift"]'),u=350,f=380,v=300,y="#22d3ee",$="bold 17px system-ui, sans-serif";let L=0,q=-140,C=!0,N=!0,P=!0,A=!0;function z(x){return x*Math.PI/180}function _(x,a,r,c,m,d=2,p=!1){t.beginPath(),t.lineWidth=d,t.strokeStyle=m,t.setLineDash(p?[6,6]:[]);const k=x+Math.cos(z(r))*c,w=a+Math.sin(z(r))*c;return t.moveTo(x,a),t.lineTo(k,w),t.stroke(),t.setLineDash([]),{x:k,y:w}}function R(x,a,r,c,m,d=14){const p=r-x,k=c-a,w=Math.hypot(p,k);if(w<1e-6)return;const E=p/w,T=k/w,B=r-E*d,b=c-T*d,W=.45*d;t.beginPath(),t.fillStyle=m,t.moveTo(r,c),t.lineTo(B-T*W,b+E*W),t.lineTo(B+T*W,b-E*W),t.closePath(),t.fill()}function F(x,a,r,c,m,d=25){t.beginPath(),t.strokeStyle=c,t.lineWidth=2;const p=Math.min(x,a),k=Math.max(x,a);if(t.arc(u,f,r,z(p),z(k),!1),t.stroke(),m){const w=(p+k)/2,E=u+Math.cos(z(w))*(r+d),T=f+Math.sin(z(w))*(r+d);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle=c,t.fillText(m,E,T),t.restore()}}function Z(x,a,r,c,m){t.clearRect(0,0,i.width,i.height),t.beginPath(),t.setLineDash([10,6]),t.strokeStyle="rgba(255, 204, 0, 0.45)",t.lineWidth=3,t.lineCap="round",t.moveTo(u-200,f),t.lineTo(u+200,f),t.stroke(),t.setLineDash([]),t.lineCap="butt";const d=u+Math.cos(z(x))*v,p=f+Math.sin(z(x))*v;t.beginPath(),t.lineWidth=3,t.strokeStyle="#fff",t.moveTo(d,p),t.lineTo(u,f),t.stroke();const k=(d+u)*.5,w=(p+f)*.5,E=Math.hypot(u-d,f-p)||1,T=(u-d)/E,B=(f-p)/E;if(R(k-T*28,w-B*28,k,w,"#fff",16),t.save(),t.font=$,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#fff",t.fillText(e("tools.rotatingMirror.canvas.incident"),d,p-12),t.restore(),C){const b=_(u,f,-90,v-60,"#00e676",1,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.n"),b.x+6,b.y-4),t.restore()}if(N){const b=_(u,f,c,v,"#00e676",2,!1);R(u,f,b.x,b.y,"#00e676",16),t.save(),t.font=$,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.originalReflected"),b.x,b.y-14),t.restore()}t.save(),t.translate(u,f),t.rotate(z(L)),t.beginPath(),t.lineWidth=6,t.strokeStyle="#ffcc00",t.lineCap="round",t.moveTo(-200,0),t.lineTo(200,0),t.stroke(),t.beginPath(),t.lineWidth=1,t.strokeStyle="#666";for(let b=-190;b<200;b+=15)t.moveTo(b,0),t.lineTo(b-5,8);if(t.stroke(),t.restore(),P){const b=_(u,f,a,v-40,y,2,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle=y,t.fillText(e("tools.rotatingMirror.canvas.nPrime"),b.x+6,b.y-4),t.restore()}if(A){const b=_(u,f,r,v,y,4);R(u,f,b.x,b.y,y,16),Math.abs(L)>.5&&(t.save(),t.font=$,t.textAlign="center",t.textBaseline="bottom",t.fillStyle=y,t.fillText(e("tools.rotatingMirror.canvas.newReflected"),b.x,b.y-14),t.restore())}if(P&&F(x,a,100,"#ffcc00",`i=${m.toFixed(0)}°`,25),P&&A&&F(a,r,100,y,`r=${m.toFixed(0)}°`,25),C&&P&&Math.abs(L)>.5&&F(-90,a,50,"#ffcc00",`θ=${Math.abs(L)}°`,20),N&&A&&Math.abs(L)>.5){const b=r-c;F(c,r,260,"#ff5252",`${e("tools.rotatingMirror.canvas.shift")}=${b.toFixed(0)}°`,40)}}function I(){L=parseFloat(o.value),q=parseFloat(l.value);const x=L>0?"+":"";h.textContent=`${x}${L}°`,M.textContent=`${q}°`;const a=-90,r=Math.abs(q-a),c=a+r,m=-90+L,d=Math.abs(q-m),p=m+d,k=p-c;S.textContent=`${d.toFixed(1)}°`,H.textContent=`${d.toFixed(1)}°`;const w=k>0?"+":"";g.textContent=`${w}${k.toFixed(1)}°`,Z(q,m,p,c,d)}return n.querySelectorAll("[data-rml-toggle]").forEach(x=>{x.addEventListener("click",()=>{const a=x.getAttribute("data-rml-toggle");a==="orig-norm"&&(C=!C),a==="orig-ray"&&(N=!N),a==="new-norm"&&(P=!P),a==="new-ray"&&(A=!A),x.classList.toggle("active"),I()})}),n.querySelector("[data-rml-reset]").addEventListener("click",()=>{o.value="0",I()}),o.addEventListener("input",I),l.addEventListener("input",I),I(),n}function xt(e){const n=document.createElement("div");n.className="tool-tir-escape";const i=document.createElement("iframe"),t="./",o=t.endsWith("/")?t:`${t}/`;return i.src=`${o}tir-escape/index.html`,i.title=e("tools.refractionTir.title"),i.setAttribute("loading","lazy"),i.referrerPolicy="strict-origin-when-cross-origin",n.appendChild(i),n}function J(e,n={}){const i=n.defaultKind==="concave"?"concave":"convex",t=i==="concave"?"tools.concaveLens.title":"tools.convexLens.title",o=document.createElement("div");o.className="tool-lens-simulator";const l=document.createElement("iframe"),h="./",M=h.endsWith("/")?h:`${h}/`;return l.src=`${M}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(i)}`,l.title=e(t),l.setAttribute("loading","lazy"),l.referrerPolicy="strict-origin-when-cross-origin",o.appendChild(l),o}const tt=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function X(e){return Math.log(e)/Math.LN10}function wt(e){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${e("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const i=n.querySelector("canvas"),t=n.querySelector("[data-detail]"),o=i.getContext("2d"),l=X(1e4),h=X(1e22);function M(g){const u={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},f=O()==="zh-Hant",v=u[g];return v?f?v.zh:v.en:g}function S(g){const u={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},f={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return O()==="zh-Hant"?f[g]:u[g]}function H(){const g=i.width,u=i.height;o.clearRect(0,0,g,u),o.fillStyle="#0b0f14",o.fillRect(0,0,g,u);const f=24,v=u*.45,y=36;tt.forEach(($,L)=>{const q=f+(X($.minHz)-l)/(h-l)*(g-f*2),C=f+(X($.maxHz)-l)/(h-l)*(g-f*2);o.fillStyle=$.color,o.fillRect(q,v,Math.max(6,C-q),y)}),o.fillStyle="#cbd5e1",o.font="13px system-ui",o.fillText("10^4 Hz",f,v+y+26),o.fillText("10^22 Hz",g-f-60,v+y+26)}return i.addEventListener("click",g=>{const u=i.getBoundingClientRect(),f=(g.clientX-u.left)/u.width*i.width,v=24,y=(f-v)/(i.width-v*2),$=10**(l+y*(h-l)),L=tt.find(q=>$>=q.minHz&&$<=q.maxHz);L&&(t.innerHTML=`<h3 style="margin:0 0 6px">${M(L.id)}</h3><p style="margin:0;color:#9aa8b8">${S(L.id)}</p>`)}),H(),n}const kt=["topics","notes","tools","worksheets","flashcards","summary"],St={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function lt(e,{subtitleKey:n,activeSection:i,onSection:t,onLang:o}){e.innerHTML=`
    <header class="site-header">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${s("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${s(n)}</p>
        </div>
      </div>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${s("strand.back")}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <nav class="main-nav" data-nav></nav>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${s("footer.conventions")}</footer>
  `;const l=e.querySelector("[data-main]"),h=e.querySelector("[data-nav]"),M=e.querySelector("[data-lang]"),S=e.querySelector("[data-strand-back]");let H=i;function g(y){H=y,h.innerHTML=kt.map($=>`<button type="button" class="${y===$?"active":""}" data-sec="${$}">${s(St[$])}</button>`).join(""),h.querySelectorAll("button").forEach($=>{$.addEventListener("click",()=>t($.getAttribute("data-sec")))})}function u(){M.innerHTML=`
      <button type="button" data-set-lang="en" class="${O()==="en"?"active":""}">${s("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${O()==="zh-Hant"?"active":""}">${s("lang.zhHant")}</button>
    `,M.querySelectorAll("button").forEach(y=>{y.addEventListener("click",()=>{it(y.getAttribute("data-set-lang")),o()})})}function f(){e.querySelector("[data-hub-subtitle]").textContent=s(n),S.textContent=s("strand.back"),e.querySelector("[data-hub-footer]").textContent=s("footer.conventions"),e.querySelector(".site-title").textContent=s("app.title")}const v=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return S.addEventListener("click",v),g(i),u(),{main:l,updateSection(y){g(y)},refreshLabels(){f(),g(H),u()},destroy(){S.removeEventListener("click",v)}}}const $t=["rotatingMirror","refractionTir","convexLens","concaveLens","em"],Mt={rotatingMirror:e=>yt(e),refractionTir:e=>xt(e),convexLens:e=>J(e,{defaultKind:"convex"}),concaveLens:e=>J(e,{defaultKind:"concave"}),em:e=>wt(e)};function Lt(e){return s({rotatingMirror:"tools.rotatingMirror.title",refractionTir:"tools.refractionTir.title",convexLens:"tools.convexLens.title",concaveLens:"tools.concaveLens.title",em:"tools.em.title"}[e]||e)}function Y(){return O()==="zh-Hant"?"zhHant":"en"}async function Et(e){const n=`./notes/${e}`;try{return(await fetch(n,{method:"HEAD"})).ok}catch{return!1}}function et(e){const n=e.slice();for(let i=n.length-1;i>0;i-=1){const t=Math.floor(Math.random()*(i+1));[n[i],n[t]]=[n[t],n[i]]}return n}function Ht(e){let n="topics",i="rotatingMirror",t=0,o="all",l=!1,h=[],M=!1,S=null,H={main:null};function g(){H.main&&(n==="topics"?H.main.innerHTML=f():n==="notes"?H.main.innerHTML=y():n==="tools"?H.main.innerHTML=L():n==="worksheets"?H.main.innerHTML=N():n==="flashcards"?H.main.innerHTML=z():n==="summary"&&(H.main.innerHTML=Z()),n==="notes"&&$(),n==="tools"&&q(),n==="worksheets"&&P(),n==="flashcards"&&F())}function u(){S==null||S.destroy(),S=lt(e,{subtitleKey:"strand.optics.subtitle",activeSection:n,onSection:a=>{n=a,S.updateSection(n),g()},onLang:()=>u()}),H.main=S.main,S.updateSection(n),g()}function f(){const a=[["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${s("topics.title")}</h2>
        <p class="lead">${s("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${a.map(([r,c])=>{const m=r==="convex"?"convexLens":r==="concave"?"concaveLens":r==="em"?"em":r;return`
            <div class="card">
              <h3>${s(c)}</h3>
              <p>${r==="convex"||r==="concave"?s("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${m}">${s("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function v(a){const r=a.target.closest("[data-go-tool]");r&&(n="tools",i=r.getAttribute("data-go-tool"),S.updateSection(n),g())}function y(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${s("notes.title")}</h2>
        <p class="lead">${s("notes.intro")}</p>
        <p class="lead">${s("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${a.map(r=>{const c=s(`notes.card.${r.key}`);return`
            <div class="card" data-note-card="${r.key}">
              <h3>${c}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function $(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],r=Y();for(const c of a){const m=e.querySelector(`[data-note-card="${c.key}"]`);if(!m)continue;const d=m.querySelector("[data-note-body]"),p=r==="zhHant"?c.fileZh:c.fileEn,k=await Et(p),w=`./notes/${p}`;k?d.innerHTML=`
          <iframe class="notes-grid" title="${s(`notes.card.${c.key}`)}" src="${w}"></iframe>
          <p style="margin-top:8px"><a href="${w}" target="_blank" rel="noopener">${s("notes.openPdf")}</a></p>`:d.innerHTML=`<p class="lead">${s("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function L(){return`
      <section class="panel">
        <h2>${s("tools.title")}</h2>
        <p class="lead">${s("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${$t.map(a=>`<button type="button" data-tool="${a}" class="${i===a?"active":""}">${Lt(a)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function q(){const a=e.querySelector("[data-tool-list]"),r=e.querySelector("[data-tool-stage]");!a||!r||(a.querySelectorAll("button").forEach(c=>{c.addEventListener("click",()=>{i=c.getAttribute("data-tool"),a.querySelectorAll("button").forEach(m=>m.classList.toggle("active",m.getAttribute("data-tool")===i)),C(r)})}),C(r))}function C(a){a.innerHTML="";const r=Mt[i];if(!r)return;const c=r(s);a.appendChild(c)}function N(){const a=[["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel">
        <h2>${s("worksheets.title")}</h2>
        <p class="lead">${s("worksheets.intro")}</p>
        <div class="controls">
          <div class="control">
            <label>${s("worksheets.count")}</label>
            <select data-ws-count>
              <option>5</option><option>10</option><option>15</option>
            </select>
          </div>
        </div>
        <p class="lead" style="margin-top:10px">${s("worksheets.topics")}</p>
        <div class="grid cols-2" data-ws-topics>
          ${a.map(([r,c])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${r}" checked />
            <span>${s(c)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${s("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${s("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${s("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${s("worksheets.empty")}</p></div>
      </section>`}function P(){const a=e.querySelector("[data-ws-gen]"),r=e.querySelector("[data-ws-print-p]"),c=e.querySelector("[data-ws-print-a]"),m=e.querySelector("[data-ws-out]");!a||!m||(a.addEventListener("click",()=>{const d=Number(e.querySelector("[data-ws-count]").value),p=[...e.querySelectorAll("[data-ws-topic]")].filter(E=>E.checked).map(E=>E.getAttribute("data-ws-topic")),k=V.filter(E=>{const T=E.topic;return!!(p.includes(T)||p.includes("rotatingMirror")&&T==="reflection"||p.includes("refractionTir")&&(T==="refraction"||T==="tir")||T==="convex"&&(p.includes("convex")||p.includes("concave")))}),w=et(k).slice(0,Math.min(d,k.length||1));h=w.length?w:et(V).slice(0,Math.min(d,V.length)),M=!1,A(m)}),r.addEventListener("click",()=>{M=!1,A(m),window.print()}),c.addEventListener("click",()=>{M=!0,A(m),window.print()}))}function A(a){const r=Y();if(!h.length){a.innerHTML=`<p class="lead">${s("worksheets.empty")}</p>`;return}a.innerHTML=h.map((c,m)=>{const d=c[r]||c.en,p=["A","B","C","D"],k=d.choices.map((E,T)=>`<li><strong>${p[T]}.</strong> ${E}</li>`).join(""),w=M?`<p><em>${d.exp}</em></p><p><strong>Answer:</strong> ${p[d.a]}</p>`:"";return`<div class="q"><h4>Q${m+1}</h4><p>${d.q}</p><ol style="margin:0;padding-left:18px">${k}</ol>${w}</div>`}).join("")}function z(){return`
      <section class="panel">
        <h2>${s("flashcards.title")}</h2>
        <p class="lead">${s("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${s("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${s("flashcards.all")}</option>
            <option value="rotatingMirror">${s("topic.rotatingMirror")}</option>
            <option value="refractionTir">${s("flashcards.deck.refractionTir")}</option>
            <option value="convex">${s("topic.convex")}</option>
            <option value="concave">${s("topic.concave")}</option>
            <option value="em">${s("topic.em")}</option>
          </select>
        </div>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-flip-card>
            <div class="label">${s("flashcards.question")}</div>
            <div class="body" data-flash-front></div>
          </div>
          <div class="flash-toolbar no-print">
            <button class="btn" type="button" data-flash-prev>${s("flashcards.prev")}</button>
            <button class="btn primary" type="button" data-flash-flip>${s("flashcards.flip")}</button>
            <button class="btn" type="button" data-flash-next>${s("flashcards.next")}</button>
            <button class="btn" type="button" data-flash-shuf>${s("flashcards.shuffle")}</button>
          </div>
        </div>
      </section>`}function _(){let a=G.slice();return o==="all"?a:(o==="convex"||o==="concave"?a=a.filter(r=>r.topic==="convex"||r.topic==="concave"):o==="refractionTir"?a=a.filter(r=>r.topic==="refraction"||r.topic==="tir"):o==="rotatingMirror"?a=a.filter(r=>r.topic==="reflection"):a=a.filter(r=>r.topic===o),a.length?a:G)}function R(){const a=_();t=Math.max(0,Math.min(t,a.length-1));const r=a[t],c=Y(),m=r[c]||r.en,d=e.querySelector("[data-flash-front]"),p=e.querySelector("[data-flip-card]");!d||!p||(l?(p.querySelector(".label").textContent=s("flashcards.answer"),d.textContent=m.a):(p.querySelector(".label").textContent=s("flashcards.question"),d.textContent=m.q))}function F(){const a=e.querySelector("[data-flash-deck]");a.value=o,a.addEventListener("change",()=>{o=a.value,t=0,l=!1,R()}),e.querySelector("[data-flip-card]").addEventListener("click",()=>{l=!l,R()}),e.querySelector("[data-flash-flip]").addEventListener("click",r=>{r.stopPropagation(),l=!l,R()}),e.querySelector("[data-flash-prev]").addEventListener("click",()=>{const r=_();t=(t-1+r.length)%r.length,l=!1,R()}),e.querySelector("[data-flash-next]").addEventListener("click",()=>{const r=_();t=(t+1)%r.length,l=!1,R()}),e.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const r=_();t=Math.floor(Math.random()*r.length),l=!1,R()}),R()}function Z(){const a=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${s("summary.title")}</h2>
        <p class="lead">${s("summary.intro")}</p>
        <div class="grid cols-2">
          ${a.map(r=>{const c=`./summary/${r.file}`;return`
            <div class="card">
              <h3>${s(r.key)}</h3>
              <img class="summary-thumb" alt="" src="${c}" />
              <p style="margin-top:10px"><a download href="${c}">${s("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}const I=()=>u(),x=a=>v(a);return window.addEventListener("s3phy:lang",I),e.addEventListener("click",x),u(),()=>{window.removeEventListener("s3phy:lang",I),e.removeEventListener("click",x),S==null||S.destroy()}}const Tt={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function qt(e){let n="topics",i=null,t={main:null};function o(){t.main&&(t.main.innerHTML=`
      <section class="panel panel--empty-strand">
        <h2>${s(Tt[n])}</h2>
        <p class="lead">${s("heat.section.empty")}</p>
      </section>`)}function l(){i==null||i.destroy(),i=lt(e,{subtitleKey:"strand.heat.subtitle",activeSection:n,onSection:M=>{n=M,i.updateSection(n),o()},onLang:()=>l()}),t.main=i.main,i.updateSection(n),o()}const h=()=>l();return window.addEventListener("s3phy:lang",h),l(),()=>{window.removeEventListener("s3phy:lang",h),i==null||i.destroy()}}const nt={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};mt();const at="s3phy_splash_seen",ct={optics:Ht,heat:qt};let D=null,j=null;function zt(){const e=location.hash.match(/^#\/(\w+)/),n=e==null?void 0:e[1];return n&&Object.prototype.hasOwnProperty.call(ct,n)?n:null}function Rt(){const e=`${location.pathname}${location.search}`;history.replaceState(null,"",e)}function ut(e){D==null||D(),D=null,j==null||j(),j=null;const n=document.getElementById("app");if(!n)return;if(n.innerHTML="",!e){location.hash&&Rt(),j=bt(n);return}const i=`#/${e}`;if(location.hash!==i){location.hash=i;return}D=ct[e](n)??null}function dt(){ut(zt())}function Ct(){return"./images/uniplus-logo.png"}function At(){const e=document.createElement("div");return e.id="splash",e.className="splash",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Uni+"),e.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${Ct()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${s("splash.start")}</button>
      </div>
    </div>
  `,e}function _t(e,n){const i=[...nt.en,...nt.zhHant],t=()=>{if(!e.parentElement)return;const o=document.createElement("div");o.className="splash-danmaku-item",o.textContent=i[Math.floor(Math.random()*i.length)];const l=Math.random()*85+5,h=Math.random()*.8+.9,M=Math.random()*12+10;o.style.top=`${l}%`,o.style.fontSize=`${h}rem`,o.style.animationDuration=`${M}s`,n.appendChild(o),o.addEventListener("animationend",()=>o.remove()),window.setTimeout(t,1500+Math.random()*1e3)};for(let o=0;o<4;o+=1)window.setTimeout(t,o*1e3)}function Pt(e){const n=e.querySelector("#splashLogoWrap"),i=e.querySelector("#splashDanmaku"),t=e.querySelector("#splashStartWrap");window.setTimeout(()=>n==null?void 0:n.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{i==null||i.classList.add("splash-danmaku--visible"),t==null||t.classList.add("splash-start-wrap--in"),i&&_t(e,i)},1600)}function ot(){dt()}function It(){let e=!1;try{e=sessionStorage.getItem(at)==="1"}catch{}if(e){ot();return}const n=At();document.body.insertBefore(n,document.body.firstChild),Pt(n);const i=n.querySelector("#splashStart"),t=()=>{n.remove(),ot()};i.addEventListener("click",()=>{try{sessionStorage.setItem(at,"1")}catch{}n.classList.add("splash--hide"),n.addEventListener("transitionend",t,{once:!0}),window.setTimeout(t,480)})}window.addEventListener("hashchange",dt);window.addEventListener("s3phy:strand",e=>{ut(e.detail??null)});It();
