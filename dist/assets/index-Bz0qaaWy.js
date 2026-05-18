(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const v of l.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&t(v)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const K={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"S3 Physics — Optics & Heat","strands.title":"Choose a strand","strands.intro":"Select Optics or Heat to open that learning hub.","strand.optics.title":"Optics","strand.optics.desc":"Light and waves: reflection, refraction, lenses, and electromagnetic waves.","strand.optics.subtitle":"Optics — light and waves","strand.heat.title":"Heat","strand.heat.desc":"Temperature, heat transfer, and thermal physics (content in progress).","strand.heat.subtitle":"Heat — temperature and energy transfer","strand.open":"Open strand","strand.back":"All strands","heat.section.empty":"Heat strand content is coming soon. Check back for notes, labs, and practice.","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.refractionTir":"Refraction, Snell’s law & total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (Δθ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 × θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refractionTir.title":"Prison Break lab — refraction, Snell & TIR","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.rgbMixer.title":"RGB colour mixer","tools.rgbMixer.intro":"Additive mixing: red, green and blue light combine on screens. Drag sliders or use presets.","tools.rgbMixer.canvas":"RGB light overlap diagram","tools.rgbMixer.controls":"Colour controls","tools.rgbMixer.red":"Red","tools.rgbMixer.green":"Green","tools.rgbMixer.blue":"Blue","tools.rgbMixer.preview":"Mixed colour preview","tools.rgbMixer.presets":"Presets","tools.rgbMixer.presetRed":"Red","tools.rgbMixer.presetGreen":"Green","tools.rgbMixer.presetBlue":"Blue","tools.rgbMixer.presetYellow":"Yellow","tools.rgbMixer.presetCyan":"Cyan","tools.rgbMixer.presetMagenta":"Magenta","tools.rgbMixer.presetWhite":"White","tools.rgbMixer.presetBlack":"Black","topic.rgbMixer":"RGB colour mixing","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","flashcards.deck.refractionTir":"Refraction & TIR","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},fe={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"中三物理 — 光與熱","strands.title":"選擇單元","strands.intro":"選擇光學或熱學，進入該學習中心。","strand.optics.title":"光學","strand.optics.desc":"光與波動：反射、折射、透鏡與電磁波。","strand.optics.subtitle":"光學 — 光與波動","strand.heat.title":"熱學","strand.heat.desc":"溫度、熱傳入與熱力學（內容建置中）。","strand.heat.subtitle":"熱學 — 溫度與熱傳入","strand.open":"進入單元","strand.back":"全部單元","heat.section.empty":"熱學單元內容建置中，敬請關注筆記、實驗與練習。","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.tir":"全反射","topic.refractionTir":"折射、司乃耳定律與全內反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refractionTir.title":"逃獄遊戲 — 折射、司乃耳與全內反射","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.rgbMixer.title":"RGB 顏色混合","tools.rgbMixer.intro":"加法混色：紅、綠、藍光在蟻幕上疊加。拖動滑棒或使用預設。","tools.rgbMixer.canvas":"RGB 光線疊加示意圖","tools.rgbMixer.controls":"顏色控制","tools.rgbMixer.red":"紅","tools.rgbMixer.green":"綠","tools.rgbMixer.blue":"藍","tools.rgbMixer.preview":"混合顏色預覽","tools.rgbMixer.presets":"預設","tools.rgbMixer.presetRed":"紅","tools.rgbMixer.presetGreen":"綠","tools.rgbMixer.presetBlue":"藍","tools.rgbMixer.presetYellow":"黃","tools.rgbMixer.presetCyan":"青","tools.rgbMixer.presetMagenta":"品紅","tools.rgbMixer.presetWhite":"白","tools.rgbMixer.presetBlack":"黑","topic.rgbMixer":"RGB 顏色混合","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","flashcards.deck.refractionTir":"折射與全內反射","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},oe="s3phy.lang",se={en:K,"zh-Hant":fe};let U="en";function pe(){try{const e=localStorage.getItem(oe);if(e==="zh-Hant"||e==="en")return e}catch{}return"en"}function me(){U=pe()}function ie(e){if(se[e]){U=e;try{localStorage.setItem(oe,e)}catch{}document.documentElement.lang=e==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function F(){return U}function i(e){const a=se[U]||K;return Object.prototype.hasOwnProperty.call(a,e)?a[e]:Object.prototype.hasOwnProperty.call(K,e)?K[e]:e}const be=[{id:"optics",titleKey:"strand.optics.title",descKey:"strand.optics.desc"},{id:"heat",titleKey:"strand.heat.title",descKey:"strand.heat.desc"}];function ge(e){function a(){e.innerHTML=`
      <header class="site-header site-header--strand-picker">
        <div class="site-header__brand">
          <div class="brand-logo-wrap" aria-hidden="true">
            <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
          </div>
          <div class="brand-text-block">
            <h1 class="site-title">${i("app.title")}</h1>
            <p class="site-subtitle">${i("app.subtitle")}</p>
          </div>
        </div>
        <div class="site-header__actions">
          <div class="lang-toggle" data-lang></div>
        </div>
      </header>
      <section class="panel panel--topic-hub panel--strand-hub">
        <h2>${i("strands.title")}</h2>
        <p class="lead">${i("strands.intro")}</p>
        <div class="grid cols-2 topic-hub-grid strand-hub-grid">
          ${be.map(({id:r,titleKey:l,descKey:v})=>`
            <div class="card">
              <h3>${i(l)}</h3>
              <p>${i(v)}</p>
              <button class="btn primary" type="button" data-strand="${r}">${i("strand.open")}</button>
            </div>`).join("")}
        </div>
      </section>
    `;const t=e.querySelector("[data-lang]");t.innerHTML=`
      <button type="button" data-set-lang="en" class="${F()==="en"?"active":""}">${i("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${F()==="zh-Hant"?"active":""}">${i("lang.zhHant")}</button>
    `,t.querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{ie(r.getAttribute("data-set-lang")),a()})}),e.querySelectorAll("[data-strand]").forEach(r=>{r.addEventListener("click",()=>{const l=r.getAttribute("data-strand");window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:l}))})})}const s=()=>a();return window.addEventListener("s3phy:lang",s),a(),()=>{window.removeEventListener("s3phy:lang",s)}}const Z=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],V=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],Q="s3phy-rotating-mirror-lab-css",he=`
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
`;function ve(){if(document.getElementById(Q))return;const e=document.createElement("style");e.id=Q,e.textContent=he,document.head.appendChild(e)}function ye(e){ve();const a=document.createElement("div");a.className="rml",a.innerHTML=`
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
  `;const s=a.querySelector(".rml-canvas"),t=s.getContext("2d"),r=a.querySelector("[data-rml-rot]"),l=a.querySelector("[data-rml-inc]"),v=a.querySelector('[data-rml-disp="rot"]'),y=a.querySelector('[data-rml-disp="inc"]'),k=a.querySelector('[data-rml-val="i"]'),H=a.querySelector('[data-rml-val="r"]'),w=a.querySelector('[data-rml-val="shift"]'),d=350,f=380,$=300,c="#22d3ee",p="bold 17px system-ui, sans-serif";let b=0,S=-140,T=!0,A=!0,O=!0,P=!0;function q(x){return x*Math.PI/180}function N(x,n,o,u,h,m=2,g=!1){t.beginPath(),t.lineWidth=m,t.strokeStyle=h,t.setLineDash(g?[6,6]:[]);const E=x+Math.cos(q(o))*u,L=n+Math.sin(q(o))*u;return t.moveTo(x,n),t.lineTo(E,L),t.stroke(),t.setLineDash([]),{x:E,y:L}}function _(x,n,o,u,h,m=14){const g=o-x,E=u-n,L=Math.hypot(g,E);if(L<1e-6)return;const z=g/L,C=E/L,W=o-z*m,M=u-C*m,X=.45*m;t.beginPath(),t.fillStyle=h,t.moveTo(o,u),t.lineTo(W-C*X,M+z*X),t.lineTo(W+C*X,M-z*X),t.closePath(),t.fill()}function R(x,n,o,u,h,m=25){t.beginPath(),t.strokeStyle=u,t.lineWidth=2;const g=Math.min(x,n),E=Math.max(x,n);if(t.arc(d,f,o,q(g),q(E),!1),t.stroke(),h){const L=(g+E)/2,z=d+Math.cos(q(L))*(o+m),C=f+Math.sin(q(L))*(o+m);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle=u,t.fillText(h,z,C),t.restore()}}function B(x,n,o,u,h){t.clearRect(0,0,s.width,s.height),t.beginPath(),t.setLineDash([10,6]),t.strokeStyle="rgba(255, 204, 0, 0.45)",t.lineWidth=3,t.lineCap="round",t.moveTo(d-200,f),t.lineTo(d+200,f),t.stroke(),t.setLineDash([]),t.lineCap="butt";const m=d+Math.cos(q(x))*$,g=f+Math.sin(q(x))*$;t.beginPath(),t.lineWidth=3,t.strokeStyle="#fff",t.moveTo(m,g),t.lineTo(d,f),t.stroke();const E=(m+d)*.5,L=(g+f)*.5,z=Math.hypot(d-m,f-g)||1,C=(d-m)/z,W=(f-g)/z;if(_(E-C*28,L-W*28,E,L,"#fff",16),t.save(),t.font=p,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#fff",t.fillText(e("tools.rotatingMirror.canvas.incident"),m,g-12),t.restore(),T){const M=N(d,f,-90,$-60,"#00e676",1,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.n"),M.x+6,M.y-4),t.restore()}if(A){const M=N(d,f,u,$,"#00e676",2,!1);_(d,f,M.x,M.y,"#00e676",16),t.save(),t.font=p,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.originalReflected"),M.x,M.y-14),t.restore()}t.save(),t.translate(d,f),t.rotate(q(b)),t.beginPath(),t.lineWidth=6,t.strokeStyle="#ffcc00",t.lineCap="round",t.moveTo(-200,0),t.lineTo(200,0),t.stroke(),t.beginPath(),t.lineWidth=1,t.strokeStyle="#666";for(let M=-190;M<200;M+=15)t.moveTo(M,0),t.lineTo(M-5,8);if(t.stroke(),t.restore(),O){const M=N(d,f,n,$-40,c,2,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle=c,t.fillText(e("tools.rotatingMirror.canvas.nPrime"),M.x+6,M.y-4),t.restore()}if(P){const M=N(d,f,o,$,c,4);_(d,f,M.x,M.y,c,16),Math.abs(b)>.5&&(t.save(),t.font=p,t.textAlign="center",t.textBaseline="bottom",t.fillStyle=c,t.fillText(e("tools.rotatingMirror.canvas.newReflected"),M.x,M.y-14),t.restore())}if(O&&R(x,n,100,"#ffcc00",`i=${h.toFixed(0)}°`,25),O&&P&&R(n,o,100,c,`r=${h.toFixed(0)}°`,25),T&&O&&Math.abs(b)>.5&&R(-90,n,50,"#ffcc00",`θ=${Math.abs(b)}°`,20),A&&P&&Math.abs(b)>.5){const M=o-u;R(u,o,260,"#ff5252",`${e("tools.rotatingMirror.canvas.shift")}=${M.toFixed(0)}°`,40)}}function I(){b=parseFloat(r.value),S=parseFloat(l.value);const x=b>0?"+":"";v.textContent=`${x}${b}°`,y.textContent=`${S}°`;const n=-90,o=Math.abs(S-n),u=n+o,h=-90+b,m=Math.abs(S-h),g=h+m,E=g-u;k.textContent=`${m.toFixed(1)}°`,H.textContent=`${m.toFixed(1)}°`;const L=E>0?"+":"";w.textContent=`${L}${E.toFixed(1)}°`,B(S,h,g,u,m)}return a.querySelectorAll("[data-rml-toggle]").forEach(x=>{x.addEventListener("click",()=>{const n=x.getAttribute("data-rml-toggle");n==="orig-norm"&&(T=!T),n==="orig-ray"&&(A=!A),n==="new-norm"&&(O=!O),n==="new-ray"&&(P=!P),x.classList.toggle("active"),I()})}),a.querySelector("[data-rml-reset]").addEventListener("click",()=>{r.value="0",I()}),r.addEventListener("input",I),l.addEventListener("input",I),I(),a}function xe(e){const a=document.createElement("div");a.className="tool-tir-escape";const s=document.createElement("iframe"),t="./",r=t.endsWith("/")?t:`${t}/`;return s.src=`${r}tir-escape/index.html`,s.title=e("tools.refractionTir.title"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin",a.appendChild(s),a}function J(e,a={}){const s=a.defaultKind==="concave"?"concave":"convex",t=s==="concave"?"tools.concaveLens.title":"tools.convexLens.title",r=document.createElement("div");r.className="tool-lens-simulator";const l=document.createElement("iframe"),v="./",y=v.endsWith("/")?v:`${v}/`;return l.src=`${y}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(s)}`,l.title=e(t),l.setAttribute("loading","lazy"),l.referrerPolicy="strict-origin-when-cross-origin",r.appendChild(l),r}const ee=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function G(e){return Math.log(e)/Math.LN10}function we(e){const a=document.createElement("div");a.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${e("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const s=a.querySelector("canvas"),t=a.querySelector("[data-detail]"),r=s.getContext("2d"),l=G(1e4),v=G(1e22);function y(w){const d={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},f=F()==="zh-Hant",$=d[w];return $?f?$.zh:$.en:w}function k(w){const d={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},f={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return F()==="zh-Hant"?f[w]:d[w]}function H(){const w=s.width,d=s.height;r.clearRect(0,0,w,d),r.fillStyle="#0b0f14",r.fillRect(0,0,w,d);const f=24,$=d*.45,c=36;ee.forEach((p,b)=>{const S=f+(G(p.minHz)-l)/(v-l)*(w-f*2),T=f+(G(p.maxHz)-l)/(v-l)*(w-f*2);r.fillStyle=p.color,r.fillRect(S,$,Math.max(6,T-S),c)}),r.fillStyle="#cbd5e1",r.font="13px system-ui",r.fillText("10^4 Hz",f,$+c+26),r.fillText("10^22 Hz",w-f-60,$+c+26)}return s.addEventListener("click",w=>{const d=s.getBoundingClientRect(),f=(w.clientX-d.left)/d.width*s.width,$=24,c=(f-$)/(s.width-$*2),p=10**(l+c*(v-l)),b=ee.find(S=>p>=S.minHz&&p<=S.maxHz);b&&(t.innerHTML=`<h3 style="margin:0 0 6px">${y(b.id)}</h3><p style="margin:0;color:#9aa8b8">${k(b.id)}</p>`)}),H(),a}function Me(e){const a=document.createElement("div");a.className="rgb-mixer",a.innerHTML=`
    <p class="lead rgb-mixer-lead">${e("tools.rgbMixer.intro")}</p>
    <div class="rgb-mixer-body">
      <div class="rgb-mixer-stage">
        <canvas class="rgb-mixer-canvas" aria-label="${e("tools.rgbMixer.canvas")}"></canvas>
        <div class="rgb-mixer-labels" aria-hidden="true">
          <span class="lbl-r">${e("tools.rgbMixer.red")}</span>
          <span class="lbl-g">${e("tools.rgbMixer.green")}</span>
          <span class="lbl-b">${e("tools.rgbMixer.blue")}</span>
        </div>
      </div>
      <aside class="rgb-mixer-controls" aria-label="${e("tools.rgbMixer.controls")}">
        <div class="rgb-channel red">
          <label>
            <span class="name-red">${e("tools.rgbMixer.red")}</span>
            <span data-r-val>128</span>
          </label>
          <input type="range" min="0" max="255" value="128" data-r>
          <div class="rgb-channel-bar"><span data-r-bar style="width:50%"></span></div>
        </div>
        <div class="rgb-channel green">
          <label>
            <span class="name-green">${e("tools.rgbMixer.green")}</span>
            <span data-g-val>128</span>
          </label>
          <input type="range" min="0" max="255" value="128" data-g>
          <div class="rgb-channel-bar"><span data-g-bar style="width:50%"></span></div>
        </div>
        <div class="rgb-channel blue">
          <label>
            <span class="name-blue">${e("tools.rgbMixer.blue")}</span>
            <span data-b-val>128</span>
          </label>
          <input type="range" min="0" max="255" value="128" data-b>
          <div class="rgb-channel-bar"><span data-b-bar style="width:50%"></span></div>
        </div>
        <div class="rgb-preview">
          <div data-swatch class="rgb-swatch" role="img"></div>
          <div class="rgb-values" aria-live="polite">
            <p data-rgb-text>rgb(128, 128, 128)</p>
            <p data-hex-text>#808080</p>
          </div>
        </div>
        <div class="rgb-presets" aria-label="${e("tools.rgbMixer.presets")}">
          <button type="button" data-r="255" data-g="0" data-b="0">${e("tools.rgbMixer.presetRed")}</button>
          <button type="button" data-r="0" data-g="255" data-b="0">${e("tools.rgbMixer.presetGreen")}</button>
          <button type="button" data-r="0" data-g="0" data-b="255">${e("tools.rgbMixer.presetBlue")}</button>
          <button type="button" data-r="255" data-g="255" data-b="0">${e("tools.rgbMixer.presetYellow")}</button>
          <button type="button" data-r="0" data-g="255" data-b="255">${e("tools.rgbMixer.presetCyan")}</button>
          <button type="button" data-r="255" data-g="0" data-b="255">${e("tools.rgbMixer.presetMagenta")}</button>
          <button type="button" data-r="255" data-g="255" data-b="255">${e("tools.rgbMixer.presetWhite")}</button>
          <button type="button" data-r="0" data-g="0" data-b="0">${e("tools.rgbMixer.presetBlack")}</button>
        </div>
      </aside>
    </div>
  `;const s=a.querySelector("[data-r]"),t=a.querySelector("[data-g]"),r=a.querySelector("[data-b]"),l=a.querySelector(".rgb-mixer-canvas"),v=a.querySelector(".rgb-mixer-stage"),y=l.getContext("2d");function k(c){return c.toString(16).padStart(2,"0")}function H(c,p,b){const S=l.width/(window.devicePixelRatio||1),T=l.height/(window.devicePixelRatio||1),A=S/2,O=T/2,P=Math.min(S,T)*.34,q=P*.5,N=Math.sqrt(3)/2;y.clearRect(0,0,S,T),y.fillStyle="#000",y.fillRect(0,0,S,T);const _=[{x:A,y:O-q,rgb:[255,0,0],val:c},{x:A-q*N,y:O+q*.5,rgb:[0,255,0],val:p},{x:A+q*N,y:O+q*.5,rgb:[0,0,255],val:b}];y.globalCompositeOperation="lighter",_.forEach(R=>{if(R.val<=0)return;const B=R.val/255,[I,x,n]=R.rgb,o=y.createRadialGradient(R.x,R.y,0,R.x,R.y,P);o.addColorStop(0,`rgba(${I},${x},${n},${B})`),o.addColorStop(.65,`rgba(${I},${x},${n},${B})`),o.addColorStop(.85,`rgba(${I},${x},${n},${B*.5})`),o.addColorStop(1,`rgba(${I},${x},${n},0)`),y.fillStyle=o,y.beginPath(),y.arc(R.x,R.y,P,0,Math.PI*2),y.fill()}),y.globalCompositeOperation="source-over"}function w(){const c=v.getBoundingClientRect(),p=Math.max(200,Math.min(c.width-8,c.height-8,480)),b=window.devicePixelRatio||1;l.width=p*b,l.height=p*b,l.style.width=`${p}px`,l.style.height=`${p}px`,y.setTransform(b,0,0,b,0,0),H(+s.value,+t.value,+r.value)}function d(){const c=+s.value,p=+t.value,b=+r.value,S=`rgb(${c}, ${p}, ${b})`,T=`#${k(c)}${k(p)}${k(b)}`;a.querySelector("[data-r-val]").textContent=c,a.querySelector("[data-g-val]").textContent=p,a.querySelector("[data-b-val]").textContent=b,a.querySelector("[data-r-bar]").style.width=`${c/255*100}%`,a.querySelector("[data-g-bar]").style.width=`${p/255*100}%`,a.querySelector("[data-b-bar]").style.width=`${b/255*100}%`,s.style.setProperty("--fill",`${c/255*100}%`),t.style.setProperty("--fill",`${p/255*100}%`),r.style.setProperty("--fill",`${b/255*100}%`);const A=a.querySelector("[data-swatch]");A.style.backgroundColor=S,A.setAttribute("aria-label",`${e("tools.rgbMixer.preview")}: ${S}`),a.querySelector("[data-rgb-text]").textContent=S,a.querySelector("[data-hex-text]").textContent=T,H(c,p,b)}function f(c,p,b){s.value=c,t.value=p,r.value=b,d()}return[s,t,r].forEach(c=>c.addEventListener("input",d)),a.querySelectorAll(".rgb-presets button").forEach(c=>{c.addEventListener("click",()=>{f(+c.dataset.r,+c.dataset.g,+c.dataset.b)})}),new ResizeObserver(()=>w()).observe(v),requestAnimationFrame(()=>{w(),d()}),a}const $e=["topics","notes","tools","worksheets","flashcards","summary"],ke={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function le(e,{subtitleKey:a,activeSection:s,onSection:t,onLang:r}){e.innerHTML=`
    <header class="site-header">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${i("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${i(a)}</p>
        </div>
      </div>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${i("strand.back")}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <nav class="main-nav" data-nav></nav>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${i("footer.conventions")}</footer>
  `;const l=e.querySelector("[data-main]"),v=e.querySelector("[data-nav]"),y=e.querySelector("[data-lang]"),k=e.querySelector("[data-strand-back]");let H=s;function w(c){H=c,v.innerHTML=$e.map(p=>`<button type="button" class="${c===p?"active":""}" data-sec="${p}">${i(ke[p])}</button>`).join(""),v.querySelectorAll("button").forEach(p=>{p.addEventListener("click",()=>t(p.getAttribute("data-sec")))})}function d(){y.innerHTML=`
      <button type="button" data-set-lang="en" class="${F()==="en"?"active":""}">${i("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${F()==="zh-Hant"?"active":""}">${i("lang.zhHant")}</button>
    `,y.querySelectorAll("button").forEach(c=>{c.addEventListener("click",()=>{ie(c.getAttribute("data-set-lang")),r()})})}function f(){e.querySelector("[data-hub-subtitle]").textContent=i(a),k.textContent=i("strand.back"),e.querySelector("[data-hub-footer]").textContent=i("footer.conventions"),e.querySelector(".site-title").textContent=i("app.title")}const $=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return k.addEventListener("click",$),w(s),d(),{main:l,updateSection(c){w(c)},refreshLabels(){f(),w(H),d()},destroy(){k.removeEventListener("click",$)}}}const Se=["rotatingMirror","refractionTir","convexLens","concaveLens","rgbMixer","em"],Le={rotatingMirror:e=>ye(e),refractionTir:e=>xe(e),convexLens:e=>J(e,{defaultKind:"convex"}),concaveLens:e=>J(e,{defaultKind:"concave"}),rgbMixer:e=>Me(e),em:e=>we(e)};function Ee(e){return i({rotatingMirror:"tools.rotatingMirror.title",refractionTir:"tools.refractionTir.title",convexLens:"tools.convexLens.title",concaveLens:"tools.concaveLens.title",rgbMixer:"tools.rgbMixer.title",em:"tools.em.title"}[e]||e)}function Y(){return F()==="zh-Hant"?"zhHant":"en"}async function He(e){const a=`./notes/${e}`;try{return(await fetch(a,{method:"HEAD"})).ok}catch{return!1}}function te(e){const a=e.slice();for(let s=a.length-1;s>0;s-=1){const t=Math.floor(Math.random()*(s+1));[a[s],a[t]]=[a[t],a[s]]}return a}function qe(e){let a="topics",s="rotatingMirror",t=0,r="all",l=!1,v=[],y=!1,k=null,H={main:null};function w(){H.main&&(a==="topics"?H.main.innerHTML=f():a==="notes"?H.main.innerHTML=c():a==="tools"?H.main.innerHTML=b():a==="worksheets"?H.main.innerHTML=A():a==="flashcards"?H.main.innerHTML=q():a==="summary"&&(H.main.innerHTML=B()),a==="notes"&&p(),a==="tools"&&S(),a==="worksheets"&&O(),a==="flashcards"&&R())}function d(){k==null||k.destroy(),k=le(e,{subtitleKey:"strand.optics.subtitle",activeSection:a,onSection:n=>{a=n,k.updateSection(a),w()},onLang:()=>d()}),H.main=k.main,k.updateSection(a),w()}function f(){const n=[["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["rgbMixer","topic.rgbMixer"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${i("topics.title")}</h2>
        <p class="lead">${i("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${n.map(([o,u])=>{const h=o==="convex"?"convexLens":o==="concave"?"concaveLens":o==="em"?"em":o;return`
            <div class="card">
              <h3>${i(u)}</h3>
              <p>${o==="convex"||o==="concave"?i("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${h}">${i("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function $(n){const o=n.target.closest("[data-go-tool]");o&&(a="tools",s=o.getAttribute("data-go-tool"),k.updateSection(a),w())}function c(){const n=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${i("notes.title")}</h2>
        <p class="lead">${i("notes.intro")}</p>
        <p class="lead">${i("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${n.map(o=>{const u=i(`notes.card.${o.key}`);return`
            <div class="card" data-note-card="${o.key}">
              <h3>${u}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function p(){const n=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],o=Y();for(const u of n){const h=e.querySelector(`[data-note-card="${u.key}"]`);if(!h)continue;const m=h.querySelector("[data-note-body]"),g=o==="zhHant"?u.fileZh:u.fileEn,E=await He(g),L=`./notes/${g}`;E?m.innerHTML=`
          <iframe class="notes-grid" title="${i(`notes.card.${u.key}`)}" src="${L}"></iframe>
          <p style="margin-top:8px"><a href="${L}" target="_blank" rel="noopener">${i("notes.openPdf")}</a></p>`:m.innerHTML=`<p class="lead">${i("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function b(){return`
      <section class="panel">
        <h2>${i("tools.title")}</h2>
        <p class="lead">${i("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${Se.map(n=>`<button type="button" data-tool="${n}" class="${s===n?"active":""}">${Ee(n)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function S(){const n=e.querySelector("[data-tool-list]"),o=e.querySelector("[data-tool-stage]");!n||!o||(n.querySelectorAll("button").forEach(u=>{u.addEventListener("click",()=>{s=u.getAttribute("data-tool"),n.querySelectorAll("button").forEach(h=>h.classList.toggle("active",h.getAttribute("data-tool")===s)),T(o)})}),T(o))}function T(n){n.innerHTML="";const o=Le[s];if(!o)return;const u=o(i);n.appendChild(u)}function A(){const n=[["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel">
        <h2>${i("worksheets.title")}</h2>
        <p class="lead">${i("worksheets.intro")}</p>
        <div class="controls">
          <div class="control">
            <label>${i("worksheets.count")}</label>
            <select data-ws-count>
              <option>5</option><option>10</option><option>15</option>
            </select>
          </div>
        </div>
        <p class="lead" style="margin-top:10px">${i("worksheets.topics")}</p>
        <div class="grid cols-2" data-ws-topics>
          ${n.map(([o,u])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${o}" checked />
            <span>${i(u)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${i("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${i("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${i("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${i("worksheets.empty")}</p></div>
      </section>`}function O(){const n=e.querySelector("[data-ws-gen]"),o=e.querySelector("[data-ws-print-p]"),u=e.querySelector("[data-ws-print-a]"),h=e.querySelector("[data-ws-out]");!n||!h||(n.addEventListener("click",()=>{const m=Number(e.querySelector("[data-ws-count]").value),g=[...e.querySelectorAll("[data-ws-topic]")].filter(z=>z.checked).map(z=>z.getAttribute("data-ws-topic")),E=Z.filter(z=>{const C=z.topic;return!!(g.includes(C)||g.includes("rotatingMirror")&&C==="reflection"||g.includes("refractionTir")&&(C==="refraction"||C==="tir")||C==="convex"&&(g.includes("convex")||g.includes("concave")))}),L=te(E).slice(0,Math.min(m,E.length||1));v=L.length?L:te(Z).slice(0,Math.min(m,Z.length)),y=!1,P(h)}),o.addEventListener("click",()=>{y=!1,P(h),window.print()}),u.addEventListener("click",()=>{y=!0,P(h),window.print()}))}function P(n){const o=Y();if(!v.length){n.innerHTML=`<p class="lead">${i("worksheets.empty")}</p>`;return}n.innerHTML=v.map((u,h)=>{const m=u[o]||u.en,g=["A","B","C","D"],E=m.choices.map((z,C)=>`<li><strong>${g[C]}.</strong> ${z}</li>`).join(""),L=y?`<p><em>${m.exp}</em></p><p><strong>Answer:</strong> ${g[m.a]}</p>`:"";return`<div class="q"><h4>Q${h+1}</h4><p>${m.q}</p><ol style="margin:0;padding-left:18px">${E}</ol>${L}</div>`}).join("")}function q(){return`
      <section class="panel">
        <h2>${i("flashcards.title")}</h2>
        <p class="lead">${i("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${i("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${i("flashcards.all")}</option>
            <option value="rotatingMirror">${i("topic.rotatingMirror")}</option>
            <option value="refractionTir">${i("flashcards.deck.refractionTir")}</option>
            <option value="convex">${i("topic.convex")}</option>
            <option value="concave">${i("topic.concave")}</option>
            <option value="em">${i("topic.em")}</option>
          </select>
        </div>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-flip-card>
            <div class="label">${i("flashcards.question")}</div>
            <div class="body" data-flash-front></div>
          </div>
          <div class="flash-toolbar no-print">
            <button class="btn" type="button" data-flash-prev>${i("flashcards.prev")}</button>
            <button class="btn primary" type="button" data-flash-flip>${i("flashcards.flip")}</button>
            <button class="btn" type="button" data-flash-next>${i("flashcards.next")}</button>
            <button class="btn" type="button" data-flash-shuf>${i("flashcards.shuffle")}</button>
          </div>
        </div>
      </section>`}function N(){let n=V.slice();return r==="all"?n:(r==="convex"||r==="concave"?n=n.filter(o=>o.topic==="convex"||o.topic==="concave"):r==="refractionTir"?n=n.filter(o=>o.topic==="refraction"||o.topic==="tir"):r==="rotatingMirror"?n=n.filter(o=>o.topic==="reflection"):n=n.filter(o=>o.topic===r),n.length?n:V)}function _(){const n=N();t=Math.max(0,Math.min(t,n.length-1));const o=n[t],u=Y(),h=o[u]||o.en,m=e.querySelector("[data-flash-front]"),g=e.querySelector("[data-flip-card]");!m||!g||(l?(g.querySelector(".label").textContent=i("flashcards.answer"),m.textContent=h.a):(g.querySelector(".label").textContent=i("flashcards.question"),m.textContent=h.q))}function R(){const n=e.querySelector("[data-flash-deck]");n.value=r,n.addEventListener("change",()=>{r=n.value,t=0,l=!1,_()}),e.querySelector("[data-flip-card]").addEventListener("click",()=>{l=!l,_()}),e.querySelector("[data-flash-flip]").addEventListener("click",o=>{o.stopPropagation(),l=!l,_()}),e.querySelector("[data-flash-prev]").addEventListener("click",()=>{const o=N();t=(t-1+o.length)%o.length,l=!1,_()}),e.querySelector("[data-flash-next]").addEventListener("click",()=>{const o=N();t=(t+1)%o.length,l=!1,_()}),e.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const o=N();t=Math.floor(Math.random()*o.length),l=!1,_()}),_()}function B(){const n=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${i("summary.title")}</h2>
        <p class="lead">${i("summary.intro")}</p>
        <div class="grid cols-2">
          ${n.map(o=>{const u=`./summary/${o.file}`;return`
            <div class="card">
              <h3>${i(o.key)}</h3>
              <img class="summary-thumb" alt="" src="${u}" />
              <p style="margin-top:10px"><a download href="${u}">${i("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}const I=()=>d(),x=n=>$(n);return window.addEventListener("s3phy:lang",I),e.addEventListener("click",x),d(),()=>{window.removeEventListener("s3phy:lang",I),e.removeEventListener("click",x),k==null||k.destroy()}}const Te={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function Re(e){let a="topics",s=null,t={main:null};function r(){t.main&&(t.main.innerHTML=`
      <section class="panel panel--empty-strand">
        <h2>${i(Te[a])}</h2>
        <p class="lead">${i("heat.section.empty")}</p>
      </section>`)}function l(){s==null||s.destroy(),s=le(e,{subtitleKey:"strand.heat.subtitle",activeSection:a,onSection:y=>{a=y,s.updateSection(a),r()},onLang:()=>l()}),t.main=s.main,s.updateSection(a),r()}const v=()=>l();return window.addEventListener("s3phy:lang",v),l(),()=>{window.removeEventListener("s3phy:lang",v),s==null||s.destroy()}}const ae={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};me();const ne="s3phy_splash_seen",ce={optics:qe,heat:Re};let D=null,j=null;function ze(){const e=location.hash.match(/^#\/(\w+)/),a=e==null?void 0:e[1];return a&&Object.prototype.hasOwnProperty.call(ce,a)?a:null}function Ce(){const e=`${location.pathname}${location.search}`;history.replaceState(null,"",e)}function ue(e){D==null||D(),D=null,j==null||j(),j=null;const a=document.getElementById("app");if(!a)return;if(a.innerHTML="",!e){location.hash&&Ce(),j=ge(a);return}const s=`#/${e}`;if(location.hash!==s){location.hash=s;return}D=ce[e](a)??null}function de(){ue(ze())}function Ae(){return"./images/uniplus-logo.png"}function Pe(){const e=document.createElement("div");return e.id="splash",e.className="splash",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Uni+"),e.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${Ae()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${i("splash.start")}</button>
      </div>
    </div>
  `,e}function _e(e,a){const s=[...ae.en,...ae.zhHant],t=()=>{if(!e.parentElement)return;const r=document.createElement("div");r.className="splash-danmaku-item",r.textContent=s[Math.floor(Math.random()*s.length)];const l=Math.random()*85+5,v=Math.random()*.8+.9,y=Math.random()*12+10;r.style.top=`${l}%`,r.style.fontSize=`${v}rem`,r.style.animationDuration=`${y}s`,a.appendChild(r),r.addEventListener("animationend",()=>r.remove()),window.setTimeout(t,1500+Math.random()*1e3)};for(let r=0;r<4;r+=1)window.setTimeout(t,r*1e3)}function Ie(e){const a=e.querySelector("#splashLogoWrap"),s=e.querySelector("#splashDanmaku"),t=e.querySelector("#splashStartWrap");window.setTimeout(()=>a==null?void 0:a.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{s==null||s.classList.add("splash-danmaku--visible"),t==null||t.classList.add("splash-start-wrap--in"),s&&_e(e,s)},1600)}function re(){de()}function Oe(){let e=!1;try{e=sessionStorage.getItem(ne)==="1"}catch{}if(e){re();return}const a=Pe();document.body.insertBefore(a,document.body.firstChild),Ie(a);const s=a.querySelector("#splashStart"),t=()=>{a.remove(),re()};s.addEventListener("click",()=>{try{sessionStorage.setItem(ne,"1")}catch{}a.classList.add("splash--hide"),a.addEventListener("transitionend",t,{once:!0}),window.setTimeout(t,480)})}window.addEventListener("hashchange",de);window.addEventListener("s3phy:strand",e=>{ue(e.detail??null)});Oe();
