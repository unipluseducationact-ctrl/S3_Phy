(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();const X={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"S3 Physics — Optics & Heat","strands.title":"Choose a strand","strands.intro":"Select Optics or Heat to open that learning hub.","strand.optics.title":"Optics","strand.optics.desc":"Light and waves: reflection, refraction, lenses, and electromagnetic waves.","strand.optics.subtitle":"Optics — light and waves","strand.heat.title":"Heat","strand.heat.desc":"Temperature, heat transfer, and thermal physics (content in progress).","strand.heat.subtitle":"Heat — temperature and energy transfer","strand.open":"Open strand","strand.back":"All strands","heat.section.empty":"Heat strand content is coming soon. Check back for notes, labs, and practice.","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.refractionSnell":"Refraction and Snell’s law","topic.tir":"Total internal reflection","topic.refractionTir":"Refraction, Snell’s law & total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (?θ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 ? θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refractionTir.title":"Prison Break lab — refraction, Snell & TIR","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.lens.title":"Lens ray sketch","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.rgbMixer.title":"RGB colour mixer","tools.rgbMixer.intro":"Additive mixing: red, green and blue light combine on screens. Drag sliders or use presets.","tools.rgbMixer.canvas":"RGB light overlap diagram","tools.rgbMixer.controls":"Colour controls","tools.rgbMixer.red":"Red","tools.rgbMixer.green":"Green","tools.rgbMixer.blue":"Blue","tools.rgbMixer.preview":"Mixed colour preview","tools.rgbMixer.presets":"Presets","tools.rgbMixer.presetRed":"Red","tools.rgbMixer.presetGreen":"Green","tools.rgbMixer.presetBlue":"Blue","tools.rgbMixer.presetYellow":"Yellow","tools.rgbMixer.presetCyan":"Cyan","tools.rgbMixer.presetMagenta":"Magenta","tools.rgbMixer.presetWhite":"White","tools.rgbMixer.presetBlack":"Black","topic.rgbMixer":"RGB colour mixing","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Explore wavelength, frequency, and simulation labs","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","flashcards.deck.refractionTir":"Refraction & TIR","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},ce={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"中三物理 — 光與熱","strands.title":"選擇單元","strands.intro":"選擇光學或熱學，進入該學習中心。","strand.optics.title":"光學","strand.optics.desc":"光與波動：反射、折射、透鏡與電磁波。","strand.optics.subtitle":"光學 — 光與波動","strand.heat.title":"熱學","strand.heat.desc":"溫度、熱傳入與熱力學（內容建置中）。","strand.heat.subtitle":"熱學 — 溫度與熱傳入","strand.open":"進入單元","strand.back":"全部單元","heat.section.empty":"熱學單元內容建置中，敬請關注筆記、實驗與練習。","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.refractionSnell":"折射與司乃耳定律","topic.tir":"全反射","topic.refractionTir":"折射、司乃耳定律與全內反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refractionTir.title":"逃獄遊戲 — 折射、司乃耳與全內反射","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.lens.title":"透鏡 — 光線示意","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.rgbMixer.title":"RGB 顏色混合","tools.rgbMixer.intro":"加法混色：紅、綠、藍光在蟻幕上疊加。拖動滑棒或使用預設。","tools.rgbMixer.canvas":"RGB 光線疊加示意圖","tools.rgbMixer.controls":"顏色控制","tools.rgbMixer.red":"紅","tools.rgbMixer.green":"綠","tools.rgbMixer.blue":"藍","tools.rgbMixer.preview":"混合顏色預覽","tools.rgbMixer.presets":"預設","tools.rgbMixer.presetRed":"紅","tools.rgbMixer.presetGreen":"綠","tools.rgbMixer.presetBlue":"藍","tools.rgbMixer.presetYellow":"黃","tools.rgbMixer.presetCyan":"青","tools.rgbMixer.presetMagenta":"品紅","tools.rgbMixer.presetWhite":"白","tools.rgbMixer.presetBlack":"黑","topic.rgbMixer":"RGB 顏色混合","tools.em.title":"電磁波譜","tools.em.pick":"探索波長、頻率與模擬實驗","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","flashcards.deck.refractionTir":"折射與全內反射","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},ae="s3phy.lang",ne={en:X,"zh-Hant":ce};let G="en";function ue(){try{const e=localStorage.getItem(ae);if(e==="zh-Hant"||e==="en")return e}catch{}return"en"}function de(){G=ue()}function re(e){if(ne[e]){G=e;try{localStorage.setItem(ae,e)}catch{}document.documentElement.lang=e==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function D(){return G}function i(e){const a=ne[G]||X;return Object.prototype.hasOwnProperty.call(a,e)?a[e]:Object.prototype.hasOwnProperty.call(X,e)?X[e]:e}const fe=[{id:"optics",titleKey:"strand.optics.title",descKey:"strand.optics.desc"},{id:"heat",titleKey:"strand.heat.title",descKey:"strand.heat.desc"}];function pe(e){function a(){e.innerHTML=`
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
          ${fe.map(({id:s,titleKey:l,descKey:f})=>`
            <div class="card">
              <h3>${i(l)}</h3>
              <p>${i(f)}</p>
              <button class="btn primary" type="button" data-strand="${s}">${i("strand.open")}</button>
            </div>`).join("")}
        </div>
      </section>
    `;const t=e.querySelector("[data-lang]");t.innerHTML=`
      <button type="button" data-set-lang="en" class="${D()==="en"?"active":""}">${i("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${D()==="zh-Hant"?"active":""}">${i("lang.zhHant")}</button>
    `,t.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{re(s.getAttribute("data-set-lang")),a()})}),e.querySelectorAll("[data-strand]").forEach(s=>{s.addEventListener("click",()=>{const l=s.getAttribute("data-strand");window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:l}))})})}const o=()=>a();return window.addEventListener("s3phy:lang",o),a(),()=>{window.removeEventListener("s3phy:lang",o)}}const U=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],Y=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],V="s3phy-rotating-mirror-lab-css",me=`
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
  max-width: min(100%, 960px);
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
`;function be(){if(document.getElementById(V))return;const e=document.createElement("style");e.id=V,e.textContent=me,document.head.appendChild(e)}function ge(e){be();const a=document.createElement("div");a.className="rml",a.innerHTML=`
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
  `;const o=a.querySelector(".rml-canvas"),t=o.getContext("2d"),s=a.querySelector("[data-rml-rot]"),l=a.querySelector("[data-rml-inc]"),f=a.querySelector('[data-rml-disp="rot"]'),b=a.querySelector('[data-rml-disp="inc"]'),H=a.querySelector('[data-rml-val="i"]'),S=a.querySelector('[data-rml-val="r"]'),L=a.querySelector('[data-rml-val="shift"]'),y=350,M=380,z=300,u="#22d3ee",g="bold 17px system-ui, sans-serif";let h=0,q=-140,A=!0,C=!0,P=!0,O=!0;function E(x){return x*Math.PI/180}function F(x,v,n,r,c,d=2,p=!1){t.beginPath(),t.lineWidth=d,t.strokeStyle=c,t.setLineDash(p?[6,6]:[]);const m=x+Math.cos(E(n))*r,k=v+Math.sin(E(n))*r;return t.moveTo(x,v),t.lineTo(m,k),t.stroke(),t.setLineDash([]),{x:m,y:k}}function N(x,v,n,r,c,d=14){const p=n-x,m=r-v,k=Math.hypot(p,m);if(k<1e-6)return;const T=p/k,R=m/k,I=n-T*d,w=r-R*d,K=.45*d;t.beginPath(),t.fillStyle=c,t.moveTo(n,r),t.lineTo(I-R*K,w+T*K),t.lineTo(I+R*K,w-T*K),t.closePath(),t.fill()}function $(x,v,n,r,c,d=25){t.beginPath(),t.strokeStyle=r,t.lineWidth=2;const p=Math.min(x,v),m=Math.max(x,v);if(t.arc(y,M,n,E(p),E(m),!1),t.stroke(),c){const k=(p+m)/2,T=y+Math.cos(E(k))*(n+d),R=M+Math.sin(E(k))*(n+d);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle=r,t.fillText(c,T,R),t.restore()}}function B(x,v,n,r,c){t.clearRect(0,0,o.width,o.height),t.beginPath(),t.setLineDash([10,6]),t.strokeStyle="rgba(255, 204, 0, 0.45)",t.lineWidth=3,t.lineCap="round",t.moveTo(y-200,M),t.lineTo(y+200,M),t.stroke(),t.setLineDash([]),t.lineCap="butt";const d=y+Math.cos(E(x))*z,p=M+Math.sin(E(x))*z;t.beginPath(),t.lineWidth=3,t.strokeStyle="#fff",t.moveTo(d,p),t.lineTo(y,M),t.stroke();const m=(d+y)*.5,k=(p+M)*.5,T=Math.hypot(y-d,M-p)||1,R=(y-d)/T,I=(M-p)/T;if(N(m-R*28,k-I*28,m,k,"#fff",16),t.save(),t.font=g,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#fff",t.fillText(e("tools.rotatingMirror.canvas.incident"),d,p-12),t.restore(),A){const w=F(y,M,-90,z-60,"#00e676",1,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.n"),w.x+6,w.y-4),t.restore()}if(C){const w=F(y,M,r,z,"#00e676",2,!1);N(y,M,w.x,w.y,"#00e676",16),t.save(),t.font=g,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.originalReflected"),w.x,w.y-14),t.restore()}t.save(),t.translate(y,M),t.rotate(E(h)),t.beginPath(),t.lineWidth=6,t.strokeStyle="#ffcc00",t.lineCap="round",t.moveTo(-200,0),t.lineTo(200,0),t.stroke(),t.beginPath(),t.lineWidth=1,t.strokeStyle="#666";for(let w=-190;w<200;w+=15)t.moveTo(w,0),t.lineTo(w-5,8);if(t.stroke(),t.restore(),P){const w=F(y,M,v,z-40,u,2,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle=u,t.fillText(e("tools.rotatingMirror.canvas.nPrime"),w.x+6,w.y-4),t.restore()}if(O){const w=F(y,M,n,z,u,4);N(y,M,w.x,w.y,u,16),Math.abs(h)>.5&&(t.save(),t.font=g,t.textAlign="center",t.textBaseline="bottom",t.fillStyle=u,t.fillText(e("tools.rotatingMirror.canvas.newReflected"),w.x,w.y-14),t.restore())}if(P&&$(x,v,100,"#ffcc00",`i=${c.toFixed(0)}°`,25),P&&O&&$(v,n,100,u,`r=${c.toFixed(0)}°`,25),A&&P&&Math.abs(h)>.5&&$(-90,v,50,"#ffcc00",`θ=${Math.abs(h)}°`,20),C&&O&&Math.abs(h)>.5){const w=n-r;$(r,n,260,"#ff5252",`${e("tools.rotatingMirror.canvas.shift")}=${w.toFixed(0)}°`,40)}}function _(){h=parseFloat(s.value),q=parseFloat(l.value);const x=h>0?"+":"";f.textContent=`${x}${h}°`,b.textContent=`${q}°`;const v=-90,n=Math.abs(q-v),r=v+n,c=-90+h,d=Math.abs(q-c),p=c+d,m=p-r;H.textContent=`${d.toFixed(1)}°`,S.textContent=`${d.toFixed(1)}°`;const k=m>0?"+":"";L.textContent=`${k}${m.toFixed(1)}°`,B(q,c,p,r,d)}return a.querySelectorAll("[data-rml-toggle]").forEach(x=>{x.addEventListener("click",()=>{const v=x.getAttribute("data-rml-toggle");v==="orig-norm"&&(A=!A),v==="orig-ray"&&(C=!C),v==="new-norm"&&(P=!P),v==="new-ray"&&(O=!O),x.classList.toggle("active"),_()})}),a.querySelector("[data-rml-reset]").addEventListener("click",()=>{s.value="0",_()}),s.addEventListener("input",_),l.addEventListener("input",_),_(),a}function he(e){const a=document.createElement("div");a.className="tool-tir-escape";const o=document.createElement("iframe"),t="./",s=t.endsWith("/")?t:`${t}/`;return o.src=`${s}tir-escape/index.html?embed=1`,o.title=e("tools.refractionTir.title"),o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin",a.appendChild(o),a}function ve(e,a={}){const o=a.defaultKind==="concave"?"concave":"convex",t="tools.lens.title",s=document.createElement("div");s.className="tool-lens-simulator";const l=document.createElement("iframe"),f="./",b=f.endsWith("/")?f:`${f}/`;return l.src=`${b}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(o)}`,l.title=e(t),l.setAttribute("loading","lazy"),l.referrerPolicy="strict-origin-when-cross-origin",s.appendChild(l),s}function ye(e){const a=document.createElement("div");a.className="tool-em-spectrum";const o=document.createElement("iframe"),t="./",s=t.endsWith("/")?t:`${t}/`;function l(){return`${s}em-spectrum/index.html?lang=${encodeURIComponent(D())}`}o.src=l(),o.title=e("tools.em.title"),o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin";const f=()=>{var b;try{(b=o.contentWindow)==null||b.postMessage({type:"s3phy:lang",lang:D()},"*")}catch{o.src=l()}};return window.addEventListener("s3phy:lang",f),a._emLabCleanup=()=>window.removeEventListener("s3phy:lang",f),a.appendChild(o),a}function xe(e){const a=document.createElement("div");a.className="rgb-mixer",a.innerHTML=`
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
  `;const o=a.querySelector("[data-r]"),t=a.querySelector("[data-g]"),s=a.querySelector("[data-b]"),l=a.querySelector(".rgb-mixer-canvas"),f=a.querySelector(".rgb-mixer-stage"),b=l.getContext("2d");function H(u){return u.toString(16).padStart(2,"0")}function S(u,g,h){const q=l.width/(window.devicePixelRatio||1),A=l.height/(window.devicePixelRatio||1),C=q/2,P=A/2,O=Math.min(q,A)*.34,E=O*.5,F=Math.sqrt(3)/2;b.clearRect(0,0,q,A),b.fillStyle="#000",b.fillRect(0,0,q,A);const N=[{x:C,y:P-E,rgb:[255,0,0],val:u},{x:C-E*F,y:P+E*.5,rgb:[0,255,0],val:g},{x:C+E*F,y:P+E*.5,rgb:[0,0,255],val:h}];b.globalCompositeOperation="lighter",N.forEach($=>{if($.val<=0)return;const B=$.val/255,[_,x,v]=$.rgb,n=b.createRadialGradient($.x,$.y,0,$.x,$.y,O);n.addColorStop(0,`rgba(${_},${x},${v},${B})`),n.addColorStop(.65,`rgba(${_},${x},${v},${B})`),n.addColorStop(.85,`rgba(${_},${x},${v},${B*.5})`),n.addColorStop(1,`rgba(${_},${x},${v},0)`),b.fillStyle=n,b.beginPath(),b.arc($.x,$.y,O,0,Math.PI*2),b.fill()}),b.globalCompositeOperation="source-over"}function L(){const u=f.getBoundingClientRect(),g=Math.max(200,Math.min(u.width-8,u.height-8,720)),h=window.devicePixelRatio||1;l.width=g*h,l.height=g*h,l.style.width=`${g}px`,l.style.height=`${g}px`,b.setTransform(h,0,0,h,0,0),S(+o.value,+t.value,+s.value)}function y(){const u=+o.value,g=+t.value,h=+s.value,q=`rgb(${u}, ${g}, ${h})`,A=`#${H(u)}${H(g)}${H(h)}`;a.querySelector("[data-r-val]").textContent=u,a.querySelector("[data-g-val]").textContent=g,a.querySelector("[data-b-val]").textContent=h,a.querySelector("[data-r-bar]").style.width=`${u/255*100}%`,a.querySelector("[data-g-bar]").style.width=`${g/255*100}%`,a.querySelector("[data-b-bar]").style.width=`${h/255*100}%`,o.style.setProperty("--fill",`${u/255*100}%`),t.style.setProperty("--fill",`${g/255*100}%`),s.style.setProperty("--fill",`${h/255*100}%`);const C=a.querySelector("[data-swatch]");C.style.backgroundColor=q,C.setAttribute("aria-label",`${e("tools.rgbMixer.preview")}: ${q}`),a.querySelector("[data-rgb-text]").textContent=q,a.querySelector("[data-hex-text]").textContent=A,S(u,g,h)}function M(u,g,h){o.value=u,t.value=g,s.value=h,y()}return[o,t,s].forEach(u=>u.addEventListener("input",y)),a.querySelectorAll(".rgb-presets button").forEach(u=>{u.addEventListener("click",()=>{M(+u.dataset.r,+u.dataset.g,+u.dataset.b)})}),new ResizeObserver(()=>L()).observe(f),requestAnimationFrame(()=>{L(),y()}),a}const we=["topics","notes","tools","worksheets","flashcards","summary"],Me={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function oe(e,{subtitleKey:a,activeSection:o,onSection:t,onLang:s}){e.innerHTML=`
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
  `;const l=e.querySelector("[data-main]"),f=e.querySelector("[data-nav]"),b=e.querySelector("[data-lang]"),H=e.querySelector("[data-strand-back]");let S=o;function L(u){S=u,f.innerHTML=we.map(g=>`<button type="button" class="${u===g?"active":""}" data-sec="${g}">${i(Me[g])}</button>`).join(""),f.querySelectorAll("button").forEach(g=>{g.addEventListener("click",()=>t(g.getAttribute("data-sec")))})}function y(){b.innerHTML=`
      <button type="button" data-set-lang="en" class="${D()==="en"?"active":""}">${i("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${D()==="zh-Hant"?"active":""}">${i("lang.zhHant")}</button>
    `,b.querySelectorAll("button").forEach(u=>{u.addEventListener("click",()=>{re(u.getAttribute("data-set-lang")),s()})})}function M(){e.querySelector("[data-hub-subtitle]").textContent=i(a),H.textContent=i("strand.back"),e.querySelector("[data-hub-footer]").textContent=i("footer.conventions"),e.querySelector(".site-title").textContent=i("app.title")}const z=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return H.addEventListener("click",z),L(o),y(),{main:l,updateSection(u){L(u)},refreshLabels(){M(),L(S),y()},destroy(){H.removeEventListener("click",z)}}}const $e=["rotatingMirror","refractionTir","lens","rgbMixer","em"],ke={rotatingMirror:e=>ge(e),refractionTir:e=>he(e),lens:(e,a)=>ve(e,{defaultKind:a}),rgbMixer:e=>xe(e),em:e=>ye(e)};function Se(e){return i({rotatingMirror:"tools.rotatingMirror.title",refractionTir:"tools.refractionTir.title",lens:"tools.lens.title",rgbMixer:"tools.rgbMixer.title",em:"tools.em.title"}[e]||e)}function Z(){return D()==="zh-Hant"?"zhHant":"en"}async function Ee(e){const a=`./notes/${e}`;try{return(await fetch(a,{method:"HEAD"})).ok}catch{return!1}}function Q(e){const a=e.slice();for(let o=a.length-1;o>0;o-=1){const t=Math.floor(Math.random()*(o+1));[a[o],a[t]]=[a[t],a[o]]}return a}function Le(e){let a="topics",o="rotatingMirror",t="convex",s=0,l="all",f=!1,b=[],H=!1,S=null,L={main:null};function y(){L.main&&(a==="topics"?L.main.innerHTML=z():a==="notes"?L.main.innerHTML=g():a==="tools"?L.main.innerHTML=q():a==="worksheets"?L.main.innerHTML=P():a==="flashcards"?L.main.innerHTML=F():a==="summary"&&(L.main.innerHTML=_()),a==="notes"&&h(),a==="tools"&&A(),a==="worksheets"&&O(),a==="flashcards"&&B())}function M(){S==null||S.destroy(),S=oe(e,{subtitleKey:"strand.optics.subtitle",activeSection:a,onSection:n=>{a=n,S.updateSection(a),y()},onLang:()=>M()}),L.main=S.main,S.updateSection(a),y()}function z(){const n=[["rotatingMirror","topic.reflection"],["refraction","topic.refractionSnell"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${i("topics.title")}</h2>
        <p class="lead">${i("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${n.map(([r,c])=>{const d=r==="convex"||r==="concave"?"lens":r==="refraction"||r==="tir"?"refractionTir":r==="em"?"em":r,p=r==="convex"?"convex":r==="concave"?"concave":"";return`
            <div class="card">
              <h3>${i(c)}</h3>
              <button class="btn primary" type="button" data-go-tool="${d}"${p?` data-lens-kind="${p}"`:""}>${i("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function u(n){const r=n.target.closest("[data-go-tool]");if(!r)return;a="tools",o=r.getAttribute("data-go-tool");const c=r.getAttribute("data-lens-kind");(c==="convex"||c==="concave")&&(t=c),S.updateSection(a),y()}function g(){const n=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${i("notes.title")}</h2>
        <p class="lead">${i("notes.intro")}</p>
        <p class="lead">${i("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${n.map(r=>{const c=i(`notes.card.${r.key}`);return`
            <div class="card" data-note-card="${r.key}">
              <h3>${c}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function h(){const n=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],r=Z();for(const c of n){const d=e.querySelector(`[data-note-card="${c.key}"]`);if(!d)continue;const p=d.querySelector("[data-note-body]"),m=r==="zhHant"?c.fileZh:c.fileEn,k=await Ee(m),T=`./notes/${m}`;k?p.innerHTML=`
          <iframe class="notes-grid" title="${i(`notes.card.${c.key}`)}" src="${T}"></iframe>
          <p style="margin-top:8px"><a href="${T}" target="_blank" rel="noopener">${i("notes.openPdf")}</a></p>`:p.innerHTML=`<p class="lead">${i("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function q(){return`
      <section class="panel panel--tools">
        <h2>${i("tools.title")}</h2>
        <p class="lead">${i("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${$e.map(n=>`<button type="button" data-tool="${n}" class="${o===n?"active":""}">${Se(n)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function A(){const n=e.querySelector("[data-tool-list]"),r=e.querySelector("[data-tool-stage]");!n||!r||(n.querySelectorAll("button").forEach(c=>{c.addEventListener("click",()=>{o=c.getAttribute("data-tool"),n.querySelectorAll("button").forEach(d=>d.classList.toggle("active",d.getAttribute("data-tool")===o)),C(r)})}),C(r))}function C(n){n.innerHTML="";const r=ke[o];if(!r)return;const c=o==="lens"?r(i,t):r(i);n.appendChild(c)}function P(){const n=[["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
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
          ${n.map(([r,c])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${r}" checked />
            <span>${i(c)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${i("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${i("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${i("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${i("worksheets.empty")}</p></div>
      </section>`}function O(){const n=e.querySelector("[data-ws-gen]"),r=e.querySelector("[data-ws-print-p]"),c=e.querySelector("[data-ws-print-a]"),d=e.querySelector("[data-ws-out]");!n||!d||(n.addEventListener("click",()=>{const p=Number(e.querySelector("[data-ws-count]").value),m=[...e.querySelectorAll("[data-ws-topic]")].filter(R=>R.checked).map(R=>R.getAttribute("data-ws-topic")),k=U.filter(R=>{const I=R.topic;return!!(m.includes(I)||m.includes("rotatingMirror")&&I==="reflection"||m.includes("refractionTir")&&(I==="refraction"||I==="tir")||I==="convex"&&(m.includes("convex")||m.includes("concave")))}),T=Q(k).slice(0,Math.min(p,k.length||1));b=T.length?T:Q(U).slice(0,Math.min(p,U.length)),H=!1,E(d)}),r.addEventListener("click",()=>{H=!1,E(d),window.print()}),c.addEventListener("click",()=>{H=!0,E(d),window.print()}))}function E(n){const r=Z();if(!b.length){n.innerHTML=`<p class="lead">${i("worksheets.empty")}</p>`;return}n.innerHTML=b.map((c,d)=>{const p=c[r]||c.en,m=["A","B","C","D"],k=p.choices.map((R,I)=>`<li><strong>${m[I]}.</strong> ${R}</li>`).join(""),T=H?`<p><em>${p.exp}</em></p><p><strong>Answer:</strong> ${m[p.a]}</p>`:"";return`<div class="q"><h4>Q${d+1}</h4><p>${p.q}</p><ol style="margin:0;padding-left:18px">${k}</ol>${T}</div>`}).join("")}function F(){return`
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
      </section>`}function N(){let n=Y.slice();return l==="all"?n:(l==="convex"||l==="concave"?n=n.filter(r=>r.topic==="convex"||r.topic==="concave"):l==="refractionTir"?n=n.filter(r=>r.topic==="refraction"||r.topic==="tir"):l==="rotatingMirror"?n=n.filter(r=>r.topic==="reflection"):n=n.filter(r=>r.topic===l),n.length?n:Y)}function $(){const n=N();s=Math.max(0,Math.min(s,n.length-1));const r=n[s],c=Z(),d=r[c]||r.en,p=e.querySelector("[data-flash-front]"),m=e.querySelector("[data-flip-card]");!p||!m||(f?(m.querySelector(".label").textContent=i("flashcards.answer"),p.textContent=d.a):(m.querySelector(".label").textContent=i("flashcards.question"),p.textContent=d.q))}function B(){const n=e.querySelector("[data-flash-deck]");n.value=l,n.addEventListener("change",()=>{l=n.value,s=0,f=!1,$()}),e.querySelector("[data-flip-card]").addEventListener("click",()=>{f=!f,$()}),e.querySelector("[data-flash-flip]").addEventListener("click",r=>{r.stopPropagation(),f=!f,$()}),e.querySelector("[data-flash-prev]").addEventListener("click",()=>{const r=N();s=(s-1+r.length)%r.length,f=!1,$()}),e.querySelector("[data-flash-next]").addEventListener("click",()=>{const r=N();s=(s+1)%r.length,f=!1,$()}),e.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const r=N();s=Math.floor(Math.random()*r.length),f=!1,$()}),$()}function _(){const n=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${i("summary.title")}</h2>
        <p class="lead">${i("summary.intro")}</p>
        <div class="grid cols-2">
          ${n.map(r=>{const c=`./summary/${r.file}`;return`
            <div class="card">
              <h3>${i(r.key)}</h3>
              <img class="summary-thumb" alt="" src="${c}" />
              <p style="margin-top:10px"><a download href="${c}">${i("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}const x=()=>M(),v=n=>u(n);return window.addEventListener("s3phy:lang",x),e.addEventListener("click",v),M(),()=>{window.removeEventListener("s3phy:lang",x),e.removeEventListener("click",v),S==null||S.destroy()}}const qe={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function Te(e){let a="topics",o=null,t={main:null};function s(){t.main&&(t.main.innerHTML=`
      <section class="panel panel--empty-strand">
        <h2>${i(qe[a])}</h2>
        <p class="lead">${i("heat.section.empty")}</p>
      </section>`)}function l(){o==null||o.destroy(),o=oe(e,{subtitleKey:"strand.heat.subtitle",activeSection:a,onSection:b=>{a=b,o.updateSection(a),s()},onLang:()=>l()}),t.main=o.main,o.updateSection(a),s()}const f=()=>l();return window.addEventListener("s3phy:lang",f),l(),()=>{window.removeEventListener("s3phy:lang",f),o==null||o.destroy()}}const J={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};de();const ee="s3phy_splash_seen",se={optics:Le,heat:Te};let j=null,W=null;function Re(){const e=location.hash.match(/^#\/(\w+)/),a=e==null?void 0:e[1];return a&&Object.prototype.hasOwnProperty.call(se,a)?a:null}function He(){const e=`${location.pathname}${location.search}`;history.replaceState(null,"",e)}function ie(e){j==null||j(),j=null,W==null||W(),W=null;const a=document.getElementById("app");if(!a)return;if(a.innerHTML="",!e){location.hash&&He(),W=pe(a);return}const o=`#/${e}`;if(location.hash!==o){location.hash=o;return}j=se[e](a)??null}function le(){ie(Re())}function Ce(){return"./images/uniplus-logo.png"}function Ae(){const e=document.createElement("div");return e.id="splash",e.className="splash",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Uni+"),e.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${Ce()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${i("splash.start")}</button>
      </div>
    </div>
  `,e}function ze(e,a){const o=[...J.en,...J.zhHant],t=()=>{if(!e.parentElement)return;const s=document.createElement("div");s.className="splash-danmaku-item",s.textContent=o[Math.floor(Math.random()*o.length)];const l=Math.random()*85+5,f=Math.random()*.8+.9,b=Math.random()*12+10;s.style.top=`${l}%`,s.style.fontSize=`${f}rem`,s.style.animationDuration=`${b}s`,a.appendChild(s),s.addEventListener("animationend",()=>s.remove()),window.setTimeout(t,1500+Math.random()*1e3)};for(let s=0;s<4;s+=1)window.setTimeout(t,s*1e3)}function Pe(e){const a=e.querySelector("#splashLogoWrap"),o=e.querySelector("#splashDanmaku"),t=e.querySelector("#splashStartWrap");window.setTimeout(()=>a==null?void 0:a.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{o==null||o.classList.add("splash-danmaku--visible"),t==null||t.classList.add("splash-start-wrap--in"),o&&ze(e,o)},1600)}function te(){le()}function _e(){let e=!1;try{e=sessionStorage.getItem(ee)==="1"}catch{}if(e){te();return}const a=Ae();document.body.insertBefore(a,document.body.firstChild),Pe(a);const o=a.querySelector("#splashStart"),t=()=>{a.remove(),te()};o.addEventListener("click",()=>{try{sessionStorage.setItem(ee,"1")}catch{}a.classList.add("splash--hide"),a.addEventListener("transitionend",t,{once:!0}),window.setTimeout(t,480)})}window.addEventListener("hashchange",le);window.addEventListener("s3phy:strand",e=>{ie(e.detail??null)});_e();
