(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const b of l.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&t(b)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}})();const G={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"S3 Physics ??Optics & Heat","strands.title":"Choose a strand","strands.intro":"Select Optics or Heat to open that learning hub.","strand.optics.title":"Optics","strand.optics.desc":"Light and waves: reflection, refraction, lenses, and electromagnetic waves.","strand.optics.subtitle":"Optics ??light and waves","strand.heat.title":"Heat","strand.heat.desc":"Temperature, heat transfer, and thermal physics (content in progress).","strand.heat.subtitle":"Heat ??temperature and energy transfer","strand.open":"Open strand","strand.back":"All strands","heat.section.empty":"Heat strand content is coming soon. Check back for notes, labs, and practice.","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.refractionTir":"Refraction, Snell’s law & total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (?θ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 ? θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refractionTir.title":"Prison Break lab ??refraction, Snell & TIR","tools.refraction.title":"Refraction ??Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.convexLens.title":"Convex lens ??ray sketch","tools.concaveLens.title":"Concave lens ??ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.rgbMixer.title":"RGB colour mixer","tools.rgbMixer.intro":"Additive mixing: red, green and blue light combine on screens. Drag sliders or use presets.","tools.rgbMixer.canvas":"RGB light overlap diagram","tools.rgbMixer.controls":"Colour controls","tools.rgbMixer.red":"Red","tools.rgbMixer.green":"Green","tools.rgbMixer.blue":"Blue","tools.rgbMixer.preview":"Mixed colour preview","tools.rgbMixer.presets":"Presets","tools.rgbMixer.presetRed":"Red","tools.rgbMixer.presetGreen":"Green","tools.rgbMixer.presetBlue":"Blue","tools.rgbMixer.presetYellow":"Yellow","tools.rgbMixer.presetCyan":"Cyan","tools.rgbMixer.presetMagenta":"Magenta","tools.rgbMixer.presetWhite":"White","tools.rgbMixer.presetBlack":"Black","topic.rgbMixer":"RGB colour mixing","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Explore wavelength, frequency, and simulation labs","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","flashcards.deck.refractionTir":"Refraction & TIR","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},ue={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"中三物理 — 光與熱","strands.title":"選擇單元","strands.intro":"選擇光學或熱學，進入該學習中心。","strand.optics.title":"光學","strand.optics.desc":"光與波動：反射、折射、透鏡與電磁波。","strand.optics.subtitle":"光學 — 光與波動","strand.heat.title":"熱學","strand.heat.desc":"溫度、熱傳入與熱力學（內容建置中）。","strand.heat.subtitle":"熱學 — 溫度與熱傳入","strand.open":"進入單元","strand.back":"全部單元","heat.section.empty":"熱學單元內容建置中，敬請關注筆記、實驗與練習。","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.tir":"全反射","topic.refractionTir":"折射、司乃耳定律與全內反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refractionTir.title":"逃獄遊戲 — 折射、司乃耳與全內反射","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.rgbMixer.title":"RGB 顏色混合","tools.rgbMixer.intro":"加法混色：紅、綠、藍光在蟻幕上疊加。拖動滑棒或使用預設。","tools.rgbMixer.canvas":"RGB 光線疊加示意圖","tools.rgbMixer.controls":"顏色控制","tools.rgbMixer.red":"紅","tools.rgbMixer.green":"綠","tools.rgbMixer.blue":"藍","tools.rgbMixer.preview":"混合顏色預覽","tools.rgbMixer.presets":"預設","tools.rgbMixer.presetRed":"紅","tools.rgbMixer.presetGreen":"綠","tools.rgbMixer.presetBlue":"藍","tools.rgbMixer.presetYellow":"黃","tools.rgbMixer.presetCyan":"青","tools.rgbMixer.presetMagenta":"品紅","tools.rgbMixer.presetWhite":"白","tools.rgbMixer.presetBlack":"黑","topic.rgbMixer":"RGB 顏色混合","tools.em.title":"電磁波譜","tools.em.pick":"探索波長、頻率與模擬實驗","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","flashcards.deck.refractionTir":"折射與全內反射","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},ne="s3phy.lang",re={en:G,"zh-Hant":ue};let K="en";function de(){try{const e=localStorage.getItem(ne);if(e==="zh-Hant"||e==="en")return e}catch{}return"en"}function fe(){K=de()}function oe(e){if(re[e]){K=e;try{localStorage.setItem(ne,e)}catch{}document.documentElement.lang=e==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function B(){return K}function s(e){const a=re[K]||G;return Object.prototype.hasOwnProperty.call(a,e)?a[e]:Object.prototype.hasOwnProperty.call(G,e)?G[e]:e}const pe=[{id:"optics",titleKey:"strand.optics.title",descKey:"strand.optics.desc"},{id:"heat",titleKey:"strand.heat.title",descKey:"strand.heat.desc"}];function me(e){function a(){e.innerHTML=`
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
          ${pe.map(({id:i,titleKey:l,descKey:b})=>`
            <div class="card">
              <h3>${s(l)}</h3>
              <p>${s(b)}</p>
              <button class="btn primary" type="button" data-strand="${i}">${s("strand.open")}</button>
            </div>`).join("")}
        </div>
      </section>
    `;const t=e.querySelector("[data-lang]");t.innerHTML=`
      <button type="button" data-set-lang="en" class="${B()==="en"?"active":""}">${s("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${B()==="zh-Hant"?"active":""}">${s("lang.zhHant")}</button>
    `,t.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{oe(i.getAttribute("data-set-lang")),a()})}),e.querySelectorAll("[data-strand]").forEach(i=>{i.addEventListener("click",()=>{const l=i.getAttribute("data-strand");window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:l}))})})}const o=()=>a();return window.addEventListener("s3phy:lang",o),a(),()=>{window.removeEventListener("s3phy:lang",o)}}const U=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],Y=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],V="s3phy-rotating-mirror-lab-css",be=`
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
`;function ge(){if(document.getElementById(V))return;const e=document.createElement("style");e.id=V,e.textContent=be,document.head.appendChild(e)}function he(e){ge();const a=document.createElement("div");a.className="rml",a.innerHTML=`
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
  `;const o=a.querySelector(".rml-canvas"),t=o.getContext("2d"),i=a.querySelector("[data-rml-rot]"),l=a.querySelector("[data-rml-inc]"),b=a.querySelector('[data-rml-disp="rot"]'),m=a.querySelector('[data-rml-disp="inc"]'),$=a.querySelector('[data-rml-val="i"]'),E=a.querySelector('[data-rml-val="r"]'),_=a.querySelector('[data-rml-val="shift"]'),v=350,w=380,I=300,u="#22d3ee",g="bold 17px system-ui, sans-serif";let h=0,L=-140,H=!0,C=!0,O=!0,A=!0;function S(y){return y*Math.PI/180}function N(y,n,r,c,p,d=2,f=!1){t.beginPath(),t.lineWidth=d,t.strokeStyle=p,t.setLineDash(f?[6,6]:[]);const k=y+Math.cos(S(r))*c,M=n+Math.sin(S(r))*c;return t.moveTo(y,n),t.lineTo(k,M),t.stroke(),t.setLineDash([]),{x:k,y:M}}function z(y,n,r,c,p,d=14){const f=r-y,k=c-n,M=Math.hypot(f,k);if(M<1e-6)return;const T=f/M,R=k/M,W=r-T*d,x=c-R*d,X=.45*d;t.beginPath(),t.fillStyle=p,t.moveTo(r,c),t.lineTo(W-R*X,x+T*X),t.lineTo(W+R*X,x-T*X),t.closePath(),t.fill()}function q(y,n,r,c,p,d=25){t.beginPath(),t.strokeStyle=c,t.lineWidth=2;const f=Math.min(y,n),k=Math.max(y,n);if(t.arc(v,w,r,S(f),S(k),!1),t.stroke(),p){const M=(f+k)/2,T=v+Math.cos(S(M))*(r+d),R=w+Math.sin(S(M))*(r+d);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle=c,t.fillText(p,T,R),t.restore()}}function F(y,n,r,c,p){t.clearRect(0,0,o.width,o.height),t.beginPath(),t.setLineDash([10,6]),t.strokeStyle="rgba(255, 204, 0, 0.45)",t.lineWidth=3,t.lineCap="round",t.moveTo(v-200,w),t.lineTo(v+200,w),t.stroke(),t.setLineDash([]),t.lineCap="butt";const d=v+Math.cos(S(y))*I,f=w+Math.sin(S(y))*I;t.beginPath(),t.lineWidth=3,t.strokeStyle="#fff",t.moveTo(d,f),t.lineTo(v,w),t.stroke();const k=(d+v)*.5,M=(f+w)*.5,T=Math.hypot(v-d,w-f)||1,R=(v-d)/T,W=(w-f)/T;if(z(k-R*28,M-W*28,k,M,"#fff",16),t.save(),t.font=g,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#fff",t.fillText(e("tools.rotatingMirror.canvas.incident"),d,f-12),t.restore(),H){const x=N(v,w,-90,I-60,"#00e676",1,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.n"),x.x+6,x.y-4),t.restore()}if(C){const x=N(v,w,c,I,"#00e676",2,!1);z(v,w,x.x,x.y,"#00e676",16),t.save(),t.font=g,t.textAlign="center",t.textBaseline="bottom",t.fillStyle="#00e676",t.fillText(e("tools.rotatingMirror.canvas.originalReflected"),x.x,x.y-14),t.restore()}t.save(),t.translate(v,w),t.rotate(S(h)),t.beginPath(),t.lineWidth=6,t.strokeStyle="#ffcc00",t.lineCap="round",t.moveTo(-200,0),t.lineTo(200,0),t.stroke(),t.beginPath(),t.lineWidth=1,t.strokeStyle="#666";for(let x=-190;x<200;x+=15)t.moveTo(x,0),t.lineTo(x-5,8);if(t.stroke(),t.restore(),O){const x=N(v,w,n,I-40,u,2,!0);t.save(),t.font="bold 14px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillStyle=u,t.fillText(e("tools.rotatingMirror.canvas.nPrime"),x.x+6,x.y-4),t.restore()}if(A){const x=N(v,w,r,I,u,4);z(v,w,x.x,x.y,u,16),Math.abs(h)>.5&&(t.save(),t.font=g,t.textAlign="center",t.textBaseline="bottom",t.fillStyle=u,t.fillText(e("tools.rotatingMirror.canvas.newReflected"),x.x,x.y-14),t.restore())}if(O&&q(y,n,100,"#ffcc00",`i=${p.toFixed(0)}°`,25),O&&A&&q(n,r,100,u,`r=${p.toFixed(0)}°`,25),H&&O&&Math.abs(h)>.5&&q(-90,n,50,"#ffcc00",`θ=${Math.abs(h)}°`,20),C&&A&&Math.abs(h)>.5){const x=r-c;q(c,r,260,"#ff5252",`${e("tools.rotatingMirror.canvas.shift")}=${x.toFixed(0)}°`,40)}}function P(){h=parseFloat(i.value),L=parseFloat(l.value);const y=h>0?"+":"";b.textContent=`${y}${h}°`,m.textContent=`${L}°`;const n=-90,r=Math.abs(L-n),c=n+r,p=-90+h,d=Math.abs(L-p),f=p+d,k=f-c;$.textContent=`${d.toFixed(1)}°`,E.textContent=`${d.toFixed(1)}°`;const M=k>0?"+":"";_.textContent=`${M}${k.toFixed(1)}°`,F(L,p,f,c,d)}return a.querySelectorAll("[data-rml-toggle]").forEach(y=>{y.addEventListener("click",()=>{const n=y.getAttribute("data-rml-toggle");n==="orig-norm"&&(H=!H),n==="orig-ray"&&(C=!C),n==="new-norm"&&(O=!O),n==="new-ray"&&(A=!A),y.classList.toggle("active"),P()})}),a.querySelector("[data-rml-reset]").addEventListener("click",()=>{i.value="0",P()}),i.addEventListener("input",P),l.addEventListener("input",P),P(),a}function ve(e){const a=document.createElement("div");a.className="tool-tir-escape";const o=document.createElement("iframe"),t="./",i=t.endsWith("/")?t:`${t}/`;return o.src=`${i}tir-escape/index.html`,o.title=e("tools.refractionTir.title"),o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin",a.appendChild(o),a}function Q(e,a={}){const o=a.defaultKind==="concave"?"concave":"convex",t=o==="concave"?"tools.concaveLens.title":"tools.convexLens.title",i=document.createElement("div");i.className="tool-lens-simulator";const l=document.createElement("iframe"),b="./",m=b.endsWith("/")?b:`${b}/`;return l.src=`${m}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(o)}`,l.title=e(t),l.setAttribute("loading","lazy"),l.referrerPolicy="strict-origin-when-cross-origin",i.appendChild(l),i}function ye(e){const a=document.createElement("div");a.className="tool-em-spectrum";const o=document.createElement("iframe"),t="./",i=t.endsWith("/")?t:`${t}/`;function l(){return`${i}em-spectrum/index.html?lang=${encodeURIComponent(B())}`}o.src=l(),o.title=e("tools.em.title"),o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin";const b=()=>{var m;try{(m=o.contentWindow)==null||m.postMessage({type:"s3phy:lang",lang:B()},"*")}catch{o.src=l()}};return window.addEventListener("s3phy:lang",b),a._emLabCleanup=()=>window.removeEventListener("s3phy:lang",b),a.appendChild(o),a}function xe(e){const a=document.createElement("div");a.className="rgb-mixer",a.innerHTML=`
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
  `;const o=a.querySelector("[data-r]"),t=a.querySelector("[data-g]"),i=a.querySelector("[data-b]"),l=a.querySelector(".rgb-mixer-canvas"),b=a.querySelector(".rgb-mixer-stage"),m=l.getContext("2d");function $(u){return u.toString(16).padStart(2,"0")}function E(u,g,h){const L=l.width/(window.devicePixelRatio||1),H=l.height/(window.devicePixelRatio||1),C=L/2,O=H/2,A=Math.min(L,H)*.34,S=A*.5,N=Math.sqrt(3)/2;m.clearRect(0,0,L,H),m.fillStyle="#000",m.fillRect(0,0,L,H);const z=[{x:C,y:O-S,rgb:[255,0,0],val:u},{x:C-S*N,y:O+S*.5,rgb:[0,255,0],val:g},{x:C+S*N,y:O+S*.5,rgb:[0,0,255],val:h}];m.globalCompositeOperation="lighter",z.forEach(q=>{if(q.val<=0)return;const F=q.val/255,[P,y,n]=q.rgb,r=m.createRadialGradient(q.x,q.y,0,q.x,q.y,A);r.addColorStop(0,`rgba(${P},${y},${n},${F})`),r.addColorStop(.65,`rgba(${P},${y},${n},${F})`),r.addColorStop(.85,`rgba(${P},${y},${n},${F*.5})`),r.addColorStop(1,`rgba(${P},${y},${n},0)`),m.fillStyle=r,m.beginPath(),m.arc(q.x,q.y,A,0,Math.PI*2),m.fill()}),m.globalCompositeOperation="source-over"}function _(){const u=b.getBoundingClientRect(),g=Math.max(200,Math.min(u.width-8,u.height-8,720)),h=window.devicePixelRatio||1;l.width=g*h,l.height=g*h,l.style.width=`${g}px`,l.style.height=`${g}px`,m.setTransform(h,0,0,h,0,0),E(+o.value,+t.value,+i.value)}function v(){const u=+o.value,g=+t.value,h=+i.value,L=`rgb(${u}, ${g}, ${h})`,H=`#${$(u)}${$(g)}${$(h)}`;a.querySelector("[data-r-val]").textContent=u,a.querySelector("[data-g-val]").textContent=g,a.querySelector("[data-b-val]").textContent=h,a.querySelector("[data-r-bar]").style.width=`${u/255*100}%`,a.querySelector("[data-g-bar]").style.width=`${g/255*100}%`,a.querySelector("[data-b-bar]").style.width=`${h/255*100}%`,o.style.setProperty("--fill",`${u/255*100}%`),t.style.setProperty("--fill",`${g/255*100}%`),i.style.setProperty("--fill",`${h/255*100}%`);const C=a.querySelector("[data-swatch]");C.style.backgroundColor=L,C.setAttribute("aria-label",`${e("tools.rgbMixer.preview")}: ${L}`),a.querySelector("[data-rgb-text]").textContent=L,a.querySelector("[data-hex-text]").textContent=H,E(u,g,h)}function w(u,g,h){o.value=u,t.value=g,i.value=h,v()}return[o,t,i].forEach(u=>u.addEventListener("input",v)),a.querySelectorAll(".rgb-presets button").forEach(u=>{u.addEventListener("click",()=>{w(+u.dataset.r,+u.dataset.g,+u.dataset.b)})}),new ResizeObserver(()=>_()).observe(b),requestAnimationFrame(()=>{_(),v()}),a}const we=["topics","notes","tools","worksheets","flashcards","summary"],Me={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function se(e,{subtitleKey:a,activeSection:o,onSection:t,onLang:i}){e.innerHTML=`
    <header class="site-header">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${s("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${s(a)}</p>
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
  `;const l=e.querySelector("[data-main]"),b=e.querySelector("[data-nav]"),m=e.querySelector("[data-lang]"),$=e.querySelector("[data-strand-back]");let E=o;function _(u){E=u,b.innerHTML=we.map(g=>`<button type="button" class="${u===g?"active":""}" data-sec="${g}">${s(Me[g])}</button>`).join(""),b.querySelectorAll("button").forEach(g=>{g.addEventListener("click",()=>t(g.getAttribute("data-sec")))})}function v(){m.innerHTML=`
      <button type="button" data-set-lang="en" class="${B()==="en"?"active":""}">${s("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${B()==="zh-Hant"?"active":""}">${s("lang.zhHant")}</button>
    `,m.querySelectorAll("button").forEach(u=>{u.addEventListener("click",()=>{oe(u.getAttribute("data-set-lang")),i()})})}function w(){e.querySelector("[data-hub-subtitle]").textContent=s(a),$.textContent=s("strand.back"),e.querySelector("[data-hub-footer]").textContent=s("footer.conventions"),e.querySelector(".site-title").textContent=s("app.title")}const I=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return $.addEventListener("click",I),_(o),v(),{main:l,updateSection(u){_(u)},refreshLabels(){w(),_(E),v()},destroy(){$.removeEventListener("click",I)}}}const $e=["rotatingMirror","refractionTir","convexLens","concaveLens","rgbMixer","em"],ke={rotatingMirror:e=>he(e),refractionTir:e=>ve(e),convexLens:e=>Q(e,{defaultKind:"convex"}),concaveLens:e=>Q(e,{defaultKind:"concave"}),rgbMixer:e=>xe(e),em:e=>ye(e)};function Se(e){return s({rotatingMirror:"tools.rotatingMirror.title",refractionTir:"tools.refractionTir.title",convexLens:"tools.convexLens.title",concaveLens:"tools.concaveLens.title",rgbMixer:"tools.rgbMixer.title",em:"tools.em.title"}[e]||e)}function Z(){return B()==="zh-Hant"?"zhHant":"en"}async function Ee(e){const a=`./notes/${e}`;try{return(await fetch(a,{method:"HEAD"})).ok}catch{return!1}}function J(e){const a=e.slice();for(let o=a.length-1;o>0;o-=1){const t=Math.floor(Math.random()*(o+1));[a[o],a[t]]=[a[t],a[o]]}return a}function Le(e){let a="topics",o="rotatingMirror",t=0,i="all",l=!1,b=[],m=!1,$=null,E={main:null};function _(){E.main&&(a==="topics"?E.main.innerHTML=w():a==="notes"?E.main.innerHTML=u():a==="tools"?E.main.innerHTML=h():a==="worksheets"?E.main.innerHTML=C():a==="flashcards"?E.main.innerHTML=S():a==="summary"&&(E.main.innerHTML=F()),a==="notes"&&g(),a==="tools"&&L(),a==="worksheets"&&O(),a==="flashcards"&&q())}function v(){$==null||$.destroy(),$=se(e,{subtitleKey:"strand.optics.subtitle",activeSection:a,onSection:n=>{a=n,$.updateSection(a),_()},onLang:()=>v()}),E.main=$.main,$.updateSection(a),_()}function w(){const n=[["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["rgbMixer","topic.rgbMixer"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${s("topics.title")}</h2>
        <p class="lead">${s("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${n.map(([r,c])=>{const p=r==="convex"?"convexLens":r==="concave"?"concaveLens":r==="em"?"em":r;return`
            <div class="card">
              <h3>${s(c)}</h3>
              <p>${r==="convex"||r==="concave"?s("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${p}">${s("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function I(n){const r=n.target.closest("[data-go-tool]");r&&(a="tools",o=r.getAttribute("data-go-tool"),$.updateSection(a),_())}function u(){const n=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${s("notes.title")}</h2>
        <p class="lead">${s("notes.intro")}</p>
        <p class="lead">${s("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${n.map(r=>{const c=s(`notes.card.${r.key}`);return`
            <div class="card" data-note-card="${r.key}">
              <h3>${c}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function g(){const n=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],r=Z();for(const c of n){const p=e.querySelector(`[data-note-card="${c.key}"]`);if(!p)continue;const d=p.querySelector("[data-note-body]"),f=r==="zhHant"?c.fileZh:c.fileEn,k=await Ee(f),M=`./notes/${f}`;k?d.innerHTML=`
          <iframe class="notes-grid" title="${s(`notes.card.${c.key}`)}" src="${M}"></iframe>
          <p style="margin-top:8px"><a href="${M}" target="_blank" rel="noopener">${s("notes.openPdf")}</a></p>`:d.innerHTML=`<p class="lead">${s("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function h(){return`
      <section class="panel panel--tools">
        <h2>${s("tools.title")}</h2>
        <p class="lead">${s("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${$e.map(n=>`<button type="button" data-tool="${n}" class="${o===n?"active":""}">${Se(n)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function L(){const n=e.querySelector("[data-tool-list]"),r=e.querySelector("[data-tool-stage]");!n||!r||(n.querySelectorAll("button").forEach(c=>{c.addEventListener("click",()=>{o=c.getAttribute("data-tool"),n.querySelectorAll("button").forEach(p=>p.classList.toggle("active",p.getAttribute("data-tool")===o)),H(r)})}),H(r))}function H(n){n.innerHTML="";const r=ke[o];if(!r)return;const c=r(s);n.appendChild(c)}function C(){const n=[["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
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
          ${n.map(([r,c])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
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
      </section>`}function O(){const n=e.querySelector("[data-ws-gen]"),r=e.querySelector("[data-ws-print-p]"),c=e.querySelector("[data-ws-print-a]"),p=e.querySelector("[data-ws-out]");!n||!p||(n.addEventListener("click",()=>{const d=Number(e.querySelector("[data-ws-count]").value),f=[...e.querySelectorAll("[data-ws-topic]")].filter(T=>T.checked).map(T=>T.getAttribute("data-ws-topic")),k=U.filter(T=>{const R=T.topic;return!!(f.includes(R)||f.includes("rotatingMirror")&&R==="reflection"||f.includes("refractionTir")&&(R==="refraction"||R==="tir")||R==="convex"&&(f.includes("convex")||f.includes("concave")))}),M=J(k).slice(0,Math.min(d,k.length||1));b=M.length?M:J(U).slice(0,Math.min(d,U.length)),m=!1,A(p)}),r.addEventListener("click",()=>{m=!1,A(p),window.print()}),c.addEventListener("click",()=>{m=!0,A(p),window.print()}))}function A(n){const r=Z();if(!b.length){n.innerHTML=`<p class="lead">${s("worksheets.empty")}</p>`;return}n.innerHTML=b.map((c,p)=>{const d=c[r]||c.en,f=["A","B","C","D"],k=d.choices.map((T,R)=>`<li><strong>${f[R]}.</strong> ${T}</li>`).join(""),M=m?`<p><em>${d.exp}</em></p><p><strong>Answer:</strong> ${f[d.a]}</p>`:"";return`<div class="q"><h4>Q${p+1}</h4><p>${d.q}</p><ol style="margin:0;padding-left:18px">${k}</ol>${M}</div>`}).join("")}function S(){return`
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
      </section>`}function N(){let n=Y.slice();return i==="all"?n:(i==="convex"||i==="concave"?n=n.filter(r=>r.topic==="convex"||r.topic==="concave"):i==="refractionTir"?n=n.filter(r=>r.topic==="refraction"||r.topic==="tir"):i==="rotatingMirror"?n=n.filter(r=>r.topic==="reflection"):n=n.filter(r=>r.topic===i),n.length?n:Y)}function z(){const n=N();t=Math.max(0,Math.min(t,n.length-1));const r=n[t],c=Z(),p=r[c]||r.en,d=e.querySelector("[data-flash-front]"),f=e.querySelector("[data-flip-card]");!d||!f||(l?(f.querySelector(".label").textContent=s("flashcards.answer"),d.textContent=p.a):(f.querySelector(".label").textContent=s("flashcards.question"),d.textContent=p.q))}function q(){const n=e.querySelector("[data-flash-deck]");n.value=i,n.addEventListener("change",()=>{i=n.value,t=0,l=!1,z()}),e.querySelector("[data-flip-card]").addEventListener("click",()=>{l=!l,z()}),e.querySelector("[data-flash-flip]").addEventListener("click",r=>{r.stopPropagation(),l=!l,z()}),e.querySelector("[data-flash-prev]").addEventListener("click",()=>{const r=N();t=(t-1+r.length)%r.length,l=!1,z()}),e.querySelector("[data-flash-next]").addEventListener("click",()=>{const r=N();t=(t+1)%r.length,l=!1,z()}),e.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const r=N();t=Math.floor(Math.random()*r.length),l=!1,z()}),z()}function F(){const n=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${s("summary.title")}</h2>
        <p class="lead">${s("summary.intro")}</p>
        <div class="grid cols-2">
          ${n.map(r=>{const c=`./summary/${r.file}`;return`
            <div class="card">
              <h3>${s(r.key)}</h3>
              <img class="summary-thumb" alt="" src="${c}" />
              <p style="margin-top:10px"><a download href="${c}">${s("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}const P=()=>v(),y=n=>I(n);return window.addEventListener("s3phy:lang",P),e.addEventListener("click",y),v(),()=>{window.removeEventListener("s3phy:lang",P),e.removeEventListener("click",y),$==null||$.destroy()}}const qe={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function Te(e){let a="topics",o=null,t={main:null};function i(){t.main&&(t.main.innerHTML=`
      <section class="panel panel--empty-strand">
        <h2>${s(qe[a])}</h2>
        <p class="lead">${s("heat.section.empty")}</p>
      </section>`)}function l(){o==null||o.destroy(),o=se(e,{subtitleKey:"strand.heat.subtitle",activeSection:a,onSection:m=>{a=m,o.updateSection(a),i()},onLang:()=>l()}),t.main=o.main,o.updateSection(a),i()}const b=()=>l();return window.addEventListener("s3phy:lang",b),l(),()=>{window.removeEventListener("s3phy:lang",b),o==null||o.destroy()}}const ee={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};fe();const te="s3phy_splash_seen",ie={optics:Le,heat:Te};let D=null,j=null;function Re(){const e=location.hash.match(/^#\/(\w+)/),a=e==null?void 0:e[1];return a&&Object.prototype.hasOwnProperty.call(ie,a)?a:null}function He(){const e=`${location.pathname}${location.search}`;history.replaceState(null,"",e)}function le(e){D==null||D(),D=null,j==null||j(),j=null;const a=document.getElementById("app");if(!a)return;if(a.innerHTML="",!e){location.hash&&He(),j=me(a);return}const o=`#/${e}`;if(location.hash!==o){location.hash=o;return}D=ie[e](a)??null}function ce(){le(Re())}function Ce(){return"./images/uniplus-logo.png"}function Ae(){const e=document.createElement("div");return e.id="splash",e.className="splash",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Uni+"),e.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${Ce()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${s("splash.start")}</button>
      </div>
    </div>
  `,e}function ze(e,a){const o=[...ee.en,...ee.zhHant],t=()=>{if(!e.parentElement)return;const i=document.createElement("div");i.className="splash-danmaku-item",i.textContent=o[Math.floor(Math.random()*o.length)];const l=Math.random()*85+5,b=Math.random()*.8+.9,m=Math.random()*12+10;i.style.top=`${l}%`,i.style.fontSize=`${b}rem`,i.style.animationDuration=`${m}s`,a.appendChild(i),i.addEventListener("animationend",()=>i.remove()),window.setTimeout(t,1500+Math.random()*1e3)};for(let i=0;i<4;i+=1)window.setTimeout(t,i*1e3)}function Pe(e){const a=e.querySelector("#splashLogoWrap"),o=e.querySelector("#splashDanmaku"),t=e.querySelector("#splashStartWrap");window.setTimeout(()=>a==null?void 0:a.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{o==null||o.classList.add("splash-danmaku--visible"),t==null||t.classList.add("splash-start-wrap--in"),o&&ze(e,o)},1600)}function ae(){ce()}function _e(){let e=!1;try{e=sessionStorage.getItem(te)==="1"}catch{}if(e){ae();return}const a=Ae();document.body.insertBefore(a,document.body.firstChild),Pe(a);const o=a.querySelector("#splashStart"),t=()=>{a.remove(),ae()};o.addEventListener("click",()=>{try{sessionStorage.setItem(te,"1")}catch{}a.classList.add("splash--hide"),a.addEventListener("transitionend",t,{once:!0}),window.setTimeout(t,480)})}window.addEventListener("hashchange",ce);window.addEventListener("s3phy:strand",e=>{le(e.detail??null)});_e();
