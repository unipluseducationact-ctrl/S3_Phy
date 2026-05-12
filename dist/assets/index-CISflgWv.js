(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const w of l.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&e(w)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();const B={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"Light and waves — S3 focus","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.refractionTir":"Refraction, Snell’s law & total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (Δθ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 × θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refractionTir.title":"Prison Break lab — refraction, Snell & TIR","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","flashcards.deck.refractionTir":"Refraction & TIR","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},re={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"光與波動 — 中三重點","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.tir":"全反射","topic.refractionTir":"折射、司乃耳定律與全內反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refractionTir.title":"逃獄遊戲 — 折射、司乃耳與全內反射","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","flashcards.deck.refractionTir":"折射與全內反射","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},oe="s3phy.lang",ae={en:B,"zh-Hant":re};let Z="en";function ie(){try{const t=localStorage.getItem(oe);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function se(){Z=ie()}function le(t){if(ae[t]){Z=t;try{localStorage.setItem(oe,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function O(){return Z}function i(t){const n=ae[Z]||B;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:Object.prototype.hasOwnProperty.call(B,t)?B[t]:t}const U=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],Y=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],V="s3phy-rotating-mirror-lab-css",ce=`
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
`;function ue(){if(document.getElementById(V))return;const t=document.createElement("style");t.id=V,t.textContent=ce,document.head.appendChild(t)}function de(t){ue();const n=document.createElement("div");n.className="rml",n.innerHTML=`
    <div class="rml-head">
      <h2 class="rml-title">${t("tools.rotatingMirror.title")}</h2>
      <div class="rml-sub">${t("tools.rotatingMirror.subtitle")}</div>
    </div>
    <div class="rml-dash">
      <div class="rml-viz">
        <canvas class="rml-canvas" width="700" height="420" aria-label="${t("tools.rotatingMirror.title")}"></canvas>
      </div>
      <div class="rml-controls">
        <div class="rml-toggles">
          <button type="button" class="rml-toggle rml-btn-green active" data-rml-toggle="orig-norm">
            <span class="rml-ind"></span> ${t("tools.rotatingMirror.toggle.origNormal")}
          </button>
          <button type="button" class="rml-toggle rml-btn-green active" data-rml-toggle="orig-ray">
            <span class="rml-ind"></span> ${t("tools.rotatingMirror.toggle.origRay")}
          </button>
          <button type="button" class="rml-toggle rml-btn-cyan active" data-rml-toggle="new-norm">
            <span class="rml-ind"></span> ${t("tools.rotatingMirror.toggle.newNormal")}
          </button>
          <button type="button" class="rml-toggle rml-btn-cyan active" data-rml-toggle="new-ray">
            <span class="rml-ind"></span> ${t("tools.rotatingMirror.toggle.newRay")}
          </button>
        </div>
        <div class="rml-cg">
          <div class="rml-lr">
            <span>${t("tools.rotatingMirror.incidentAngle")}</span>
            <span class="rml-badge" data-rml-disp="inc">-140°</span>
          </div>
          <input type="range" data-rml-inc min="-170" max="-100" step="1" value="-140" />
        </div>
        <div class="rml-cg">
          <div class="rml-lr">
            <span style="color:var(--rml-yellow)">${t("tools.rotatingMirror.mirrorRotation")}</span>
            <span class="rml-badge" data-rml-disp="rot" style="color:var(--rml-yellow);background:rgba(255,204,0,0.15)">0°</span>
          </div>
          <input type="range" data-rml-rot min="-45" max="45" step="1" value="0" />
          <div class="rml-ticks">
            <span>-45°</span><span>0°</span><span>+45°</span>
          </div>
        </div>
        <div class="rml-stats">
          <div class="rml-sr">
            <span class="rml-sl">${t("tools.rotatingMirror.statIncidence")}</span>
            <span class="rml-sv" style="color:var(--rml-yellow)" data-rml-val="i">50.0°</span>
          </div>
          <div class="rml-sr">
            <span class="rml-sl">${t("tools.rotatingMirror.statReflection")}</span>
            <span class="rml-sv" style="color:var(--rml-cyan)" data-rml-val="r">50.0°</span>
          </div>
        </div>
        <div class="rml-shift">
          <div>
            <div class="rml-sl" style="color:#ff8a80;margin-bottom:2px">${t("tools.rotatingMirror.rayShift")}</div>
            <div class="rml-shv" data-rml-val="shift">0.0°</div>
          </div>
          <div class="rml-logic">${t("tools.rotatingMirror.logicBadge")}</div>
        </div>
        <button type="button" class="rml-reset" data-rml-reset>${t("tools.rotatingMirror.reset")}</button>
      </div>
    </div>
  `;const s=n.querySelector(".rml-canvas"),e=s.getContext("2d"),a=n.querySelector("[data-rml-rot]"),l=n.querySelector("[data-rml-inc]"),w=n.querySelector('[data-rml-disp="rot"]'),z=n.querySelector('[data-rml-disp="inc"]'),k=n.querySelector('[data-rml-val="i"]'),A=n.querySelector('[data-rml-val="r"]'),M=n.querySelector('[data-rml-val="shift"]'),p=350,m=380,x=300,L="#22d3ee",q="bold 17px system-ui, sans-serif";let $=0,H=-140,C=!0,P=!0,_=!0,R=!0;function S(c){return c*Math.PI/180}function D(c,u,d,v,y,h=2,b=!1){e.beginPath(),e.lineWidth=h,e.strokeStyle=y,e.setLineDash(b?[6,6]:[]);const E=c+Math.cos(S(d))*v,T=u+Math.sin(S(d))*v;return e.moveTo(c,u),e.lineTo(E,T),e.stroke(),e.setLineDash([]),{x:E,y:T}}function N(c,u,d,v,y,h=14){const b=d-c,E=v-u,T=Math.hypot(b,E);if(T<1e-6)return;const I=b/T,F=E/T,j=d-I*h,g=v-F*h,W=.45*h;e.beginPath(),e.fillStyle=y,e.moveTo(d,v),e.lineTo(j-F*W,g+I*W),e.lineTo(j+F*W,g-I*W),e.closePath(),e.fill()}function o(c,u,d,v,y,h=25){e.beginPath(),e.strokeStyle=v,e.lineWidth=2;const b=Math.min(c,u),E=Math.max(c,u);if(e.arc(p,m,d,S(b),S(E),!1),e.stroke(),y){const T=(b+E)/2,I=p+Math.cos(S(T))*(d+h),F=m+Math.sin(S(T))*(d+h);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle=v,e.fillText(y,I,F),e.restore()}}function r(c,u,d,v,y){e.clearRect(0,0,s.width,s.height),e.beginPath(),e.setLineDash([10,6]),e.strokeStyle="rgba(255, 204, 0, 0.45)",e.lineWidth=3,e.lineCap="round",e.moveTo(p-200,m),e.lineTo(p+200,m),e.stroke(),e.setLineDash([]),e.lineCap="butt";const h=p+Math.cos(S(c))*x,b=m+Math.sin(S(c))*x;e.beginPath(),e.lineWidth=3,e.strokeStyle="#fff",e.moveTo(h,b),e.lineTo(p,m),e.stroke();const E=(h+p)*.5,T=(b+m)*.5,I=Math.hypot(p-h,m-b)||1,F=(p-h)/I,j=(m-b)/I;if(N(E-F*28,T-j*28,E,T,"#fff",16),e.save(),e.font=q,e.textAlign="center",e.textBaseline="bottom",e.fillStyle="#fff",e.fillText(t("tools.rotatingMirror.canvas.incident"),h,b-12),e.restore(),C){const g=D(p,m,-90,x-60,"#00e676",1,!0);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="left",e.textBaseline="bottom",e.fillStyle="#00e676",e.fillText(t("tools.rotatingMirror.canvas.n"),g.x+6,g.y-4),e.restore()}if(P){const g=D(p,m,v,x,"#00e676",2,!1);N(p,m,g.x,g.y,"#00e676",16),e.save(),e.font=q,e.textAlign="center",e.textBaseline="bottom",e.fillStyle="#00e676",e.fillText(t("tools.rotatingMirror.canvas.originalReflected"),g.x,g.y-14),e.restore()}e.save(),e.translate(p,m),e.rotate(S($)),e.beginPath(),e.lineWidth=6,e.strokeStyle="#ffcc00",e.lineCap="round",e.moveTo(-200,0),e.lineTo(200,0),e.stroke(),e.beginPath(),e.lineWidth=1,e.strokeStyle="#666";for(let g=-190;g<200;g+=15)e.moveTo(g,0),e.lineTo(g-5,8);if(e.stroke(),e.restore(),_){const g=D(p,m,u,x-40,L,2,!0);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="left",e.textBaseline="bottom",e.fillStyle=L,e.fillText(t("tools.rotatingMirror.canvas.nPrime"),g.x+6,g.y-4),e.restore()}if(R){const g=D(p,m,d,x,L,4);N(p,m,g.x,g.y,L,16),Math.abs($)>.5&&(e.save(),e.font=q,e.textAlign="center",e.textBaseline="bottom",e.fillStyle=L,e.fillText(t("tools.rotatingMirror.canvas.newReflected"),g.x,g.y-14),e.restore())}if(_&&o(c,u,100,"#ffcc00",`i=${y.toFixed(0)}°`,25),_&&R&&o(u,d,100,L,`r=${y.toFixed(0)}°`,25),C&&_&&Math.abs($)>.5&&o(-90,u,50,"#ffcc00",`θ=${Math.abs($)}°`,20),P&&R&&Math.abs($)>.5){const g=d-v;o(v,d,260,"#ff5252",`${t("tools.rotatingMirror.canvas.shift")}=${g.toFixed(0)}°`,40)}}function f(){$=parseFloat(a.value),H=parseFloat(l.value);const c=$>0?"+":"";w.textContent=`${c}${$}°`,z.textContent=`${H}°`;const u=-90,d=Math.abs(H-u),v=u+d,y=-90+$,h=Math.abs(H-y),b=y+h,E=b-v;k.textContent=`${h.toFixed(1)}°`,A.textContent=`${h.toFixed(1)}°`;const T=E>0?"+":"";M.textContent=`${T}${E.toFixed(1)}°`,r(H,y,b,v,h)}return n.querySelectorAll("[data-rml-toggle]").forEach(c=>{c.addEventListener("click",()=>{const u=c.getAttribute("data-rml-toggle");u==="orig-norm"&&(C=!C),u==="orig-ray"&&(P=!P),u==="new-norm"&&(_=!_),u==="new-ray"&&(R=!R),c.classList.toggle("active"),f()})}),n.querySelector("[data-rml-reset]").addEventListener("click",()=>{a.value="0",f()}),a.addEventListener("input",f),l.addEventListener("input",f),f(),n}function fe(t){const n=document.createElement("div");n.className="tool-tir-escape";const s=document.createElement("iframe"),e="./",a=e.endsWith("/")?e:`${e}/`;return s.src=`${a}tir-escape/index.html`,s.title=t("tools.refractionTir.title"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin",n.appendChild(s),n}function G(t,n={}){const s=n.defaultKind==="concave"?"concave":"convex",e=s==="concave"?"tools.concaveLens.title":"tools.convexLens.title",a=document.createElement("div");a.className="tool-lens-simulator";const l=document.createElement("iframe"),w="./",z=w.endsWith("/")?w:`${w}/`;return l.src=`${z}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(s)}`,l.title=t(e),l.setAttribute("loading","lazy"),l.referrerPolicy="strict-origin-when-cross-origin",a.appendChild(l),a}const Q=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function X(t){return Math.log(t)/Math.LN10}function me(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${t("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const s=n.querySelector("canvas"),e=n.querySelector("[data-detail]"),a=s.getContext("2d"),l=X(1e4),w=X(1e22);function z(M){const p={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},m=O()==="zh-Hant",x=p[M];return x?m?x.zh:x.en:M}function k(M){const p={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},m={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return O()==="zh-Hant"?m[M]:p[M]}function A(){const M=s.width,p=s.height;a.clearRect(0,0,M,p),a.fillStyle="#0b0f14",a.fillRect(0,0,M,p);const m=24,x=p*.45,L=36;Q.forEach((q,$)=>{const H=m+(X(q.minHz)-l)/(w-l)*(M-m*2),C=m+(X(q.maxHz)-l)/(w-l)*(M-m*2);a.fillStyle=q.color,a.fillRect(H,x,Math.max(6,C-H),L)}),a.fillStyle="#cbd5e1",a.font="13px system-ui",a.fillText("10^4 Hz",m,x+L+26),a.fillText("10^22 Hz",M-m-60,x+L+26)}return s.addEventListener("click",M=>{const p=s.getBoundingClientRect(),m=(M.clientX-p.left)/p.width*s.width,x=24,L=(m-x)/(s.width-x*2),q=10**(l+L*(w-l)),$=Q.find(H=>q>=H.minHz&&q<=H.maxHz);$&&(e.innerHTML=`<h3 style="margin:0 0 6px">${z($.id)}</h3><p style="margin:0;color:#9aa8b8">${k($.id)}</p>`)}),A(),n}const pe=["topics","notes","tools","worksheets","flashcards","summary"],he=["rotatingMirror","refractionTir","convexLens","concaveLens","em"],ge={rotatingMirror:t=>de(t),refractionTir:t=>fe(t),convexLens:t=>G(t,{defaultKind:"convex"}),concaveLens:t=>G(t,{defaultKind:"concave"}),em:t=>me(t)};function be(t){return i({rotatingMirror:"tools.rotatingMirror.title",refractionTir:"tools.refractionTir.title",convexLens:"tools.convexLens.title",concaveLens:"tools.concaveLens.title",em:"tools.em.title"}[t]||t)}function K(){return O()==="zh-Hant"?"zhHant":"en"}async function ve(t){const n=`./notes/${t}`;try{return(await fetch(n,{method:"HEAD"})).ok}catch{return!1}}function J(t){const n=t.slice();for(let s=n.length-1;s>0;s-=1){const e=Math.floor(Math.random()*(s+1));[n[s],n[e]]=[n[e],n[s]]}return n}function ye(t){let n="topics",s="rotatingMirror",e=0,a="all",l=!1,w=[],z=!1;const k={};function A(){t.innerHTML=`
      <header class="site-header">
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
      <nav class="main-nav" data-nav></nav>
      <main data-main></main>
      <footer class="site-footer no-print">${i("footer.conventions")}</footer>
    `,k.lang=t.querySelector("[data-lang]"),k.nav=t.querySelector("[data-nav]"),k.main=t.querySelector("[data-main]"),k.lang.innerHTML=`
      <button type="button" data-set-lang="en" class="${O()==="en"?"active":""}">${i("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${O()==="zh-Hant"?"active":""}">${i("lang.zhHant")}</button>
    `,k.lang.querySelectorAll("button").forEach(o=>{o.addEventListener("click",()=>{le(o.getAttribute("data-set-lang")),A()})}),k.nav.innerHTML=pe.map(o=>`<button type="button" class="${n===o?"active":""}" data-sec="${o}">${i({topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"}[o])}</button>`).join(""),k.nav.querySelectorAll("button").forEach(o=>{o.addEventListener("click",()=>{n=o.getAttribute("data-sec"),A()})}),n==="topics"?k.main.innerHTML=M():n==="notes"?k.main.innerHTML=m():n==="tools"?k.main.innerHTML=L():n==="worksheets"?k.main.innerHTML=H():n==="flashcards"?k.main.innerHTML=_():n==="summary"&&(k.main.innerHTML=N()),n==="notes"&&x(),n==="tools"&&q(),n==="worksheets"&&C(),n==="flashcards"&&D()}function M(){const o=[["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${i("topics.title")}</h2>
        <p class="lead">${i("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${o.map(([r,f])=>{const c=r==="convex"?"convexLens":r==="concave"?"concaveLens":r==="em"?"em":r;return`
            <div class="card">
              <h3>${i(f)}</h3>
              <p>${r==="convex"||r==="concave"?i("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${c}">${i("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function p(o){const r=o.target.closest("[data-go-tool]");r&&(n="tools",s=r.getAttribute("data-go-tool"),A())}function m(){const o=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${i("notes.title")}</h2>
        <p class="lead">${i("notes.intro")}</p>
        <p class="lead">${i("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${o.map(r=>{const f=i(`notes.card.${r.key}`);return`
            <div class="card" data-note-card="${r.key}">
              <h3>${f}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function x(){const o=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],r=K();for(const f of o){const c=t.querySelector(`[data-note-card="${f.key}"]`);if(!c)continue;const u=c.querySelector("[data-note-body]"),d=r==="zhHant"?f.fileZh:f.fileEn,v=await ve(d),y=`./notes/${d}`;v?u.innerHTML=`
          <iframe class="notes-grid" title="${i(`notes.card.${f.key}`)}" src="${y}"></iframe>
          <p style="margin-top:8px"><a href="${y}" target="_blank" rel="noopener">${i("notes.openPdf")}</a></p>`:u.innerHTML=`<p class="lead">${i("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function L(){return`
      <section class="panel">
        <h2>${i("tools.title")}</h2>
        <p class="lead">${i("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${he.map(o=>`<button type="button" data-tool="${o}" class="${s===o?"active":""}">${be(o)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function q(){const o=t.querySelector("[data-tool-list]"),r=t.querySelector("[data-tool-stage]");!o||!r||(o.querySelectorAll("button").forEach(f=>{f.addEventListener("click",()=>{s=f.getAttribute("data-tool"),o.querySelectorAll("button").forEach(c=>c.classList.toggle("active",c.getAttribute("data-tool")===s)),$(r)})}),$(r))}function $(o){o.innerHTML="";const r=ge[s];if(!r)return;const f=r(i);o.appendChild(f)}function H(){const o=[["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
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
          ${o.map(([r,f])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${r}" checked />
            <span>${i(f)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${i("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${i("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${i("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${i("worksheets.empty")}</p></div>
      </section>`}function C(){const o=t.querySelector("[data-ws-gen]"),r=t.querySelector("[data-ws-print-p]"),f=t.querySelector("[data-ws-print-a]"),c=t.querySelector("[data-ws-out]");!o||!c||(o.addEventListener("click",()=>{const u=Number(t.querySelector("[data-ws-count]").value),d=[...t.querySelectorAll("[data-ws-topic]")].filter(h=>h.checked).map(h=>h.getAttribute("data-ws-topic")),v=U.filter(h=>{const b=h.topic;return!!(d.includes(b)||d.includes("rotatingMirror")&&b==="reflection"||d.includes("refractionTir")&&(b==="refraction"||b==="tir")||b==="convex"&&(d.includes("convex")||d.includes("concave")))}),y=J(v).slice(0,Math.min(u,v.length||1));w=y.length?y:J(U).slice(0,Math.min(u,U.length)),z=!1,P(c)}),r.addEventListener("click",()=>{z=!1,P(c),window.print()}),f.addEventListener("click",()=>{z=!0,P(c),window.print()}))}function P(o){const r=K();if(!w.length){o.innerHTML=`<p class="lead">${i("worksheets.empty")}</p>`;return}o.innerHTML=w.map((f,c)=>{const u=f[r]||f.en,d=["A","B","C","D"],v=u.choices.map((h,b)=>`<li><strong>${d[b]}.</strong> ${h}</li>`).join(""),y=z?`<p><em>${u.exp}</em></p><p><strong>Answer:</strong> ${d[u.a]}</p>`:"";return`<div class="q"><h4>Q${c+1}</h4><p>${u.q}</p><ol style="margin:0;padding-left:18px">${v}</ol>${y}</div>`}).join("")}function _(){return`
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
      </section>`}function R(){let o=Y.slice();return a==="all"?o:(a==="convex"||a==="concave"?o=o.filter(r=>r.topic==="convex"||r.topic==="concave"):a==="refractionTir"?o=o.filter(r=>r.topic==="refraction"||r.topic==="tir"):a==="rotatingMirror"?o=o.filter(r=>r.topic==="reflection"):o=o.filter(r=>r.topic===a),o.length?o:Y)}function S(){const o=R();e=Math.max(0,Math.min(e,o.length-1));const r=o[e],f=K(),c=r[f]||r.en,u=t.querySelector("[data-flash-front]"),d=t.querySelector("[data-flip-card]");!u||!d||(l?(d.querySelector(".label").textContent=i("flashcards.answer"),u.textContent=c.a):(d.querySelector(".label").textContent=i("flashcards.question"),u.textContent=c.q))}function D(){const o=t.querySelector("[data-flash-deck]");o.value=a,o.addEventListener("change",()=>{a=o.value,e=0,l=!1,S()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{l=!l,S()}),t.querySelector("[data-flash-flip]").addEventListener("click",r=>{r.stopPropagation(),l=!l,S()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const r=R();e=(e-1+r.length)%r.length,l=!1,S()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const r=R();e=(e+1)%r.length,l=!1,S()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const r=R();e=Math.floor(Math.random()*r.length),l=!1,S()}),S()}function N(){const o=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${i("summary.title")}</h2>
        <p class="lead">${i("summary.intro")}</p>
        <div class="grid cols-2">
          ${o.map(r=>{const f=`./summary/${r.file}`;return`
            <div class="card">
              <h3>${i(r.key)}</h3>
              <img class="summary-thumb" alt="" src="${f}" />
              <p style="margin-top:10px"><a download href="${f}">${i("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}window.addEventListener("s3phy:lang",()=>A()),t.addEventListener("click",p),A()}const ee={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};se();const te="s3phy_splash_seen";function xe(){return"./images/uniplus-logo.png"}function we(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${xe()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${i("splash.start")}</button>
      </div>
    </div>
  `,t}function ke(t,n){const s=[...ee.en,...ee.zhHant],e=()=>{if(!t.parentElement)return;const a=document.createElement("div");a.className="splash-danmaku-item",a.textContent=s[Math.floor(Math.random()*s.length)];const l=Math.random()*85+5,w=Math.random()*.8+.9,z=Math.random()*12+10;a.style.top=`${l}%`,a.style.fontSize=`${w}rem`,a.style.animationDuration=`${z}s`,n.appendChild(a),a.addEventListener("animationend",()=>a.remove()),window.setTimeout(e,1500+Math.random()*1e3)};for(let a=0;a<4;a+=1)window.setTimeout(e,a*1e3)}function Me(t){const n=t.querySelector("#splashLogoWrap"),s=t.querySelector("#splashDanmaku"),e=t.querySelector("#splashStartWrap");window.setTimeout(()=>n==null?void 0:n.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{s==null||s.classList.add("splash-danmaku--visible"),e==null||e.classList.add("splash-start-wrap--in"),s&&ke(t,s)},1600)}function ne(){const t=document.getElementById("app");t&&ye(t)}function $e(){let t=!1;try{t=sessionStorage.getItem(te)==="1"}catch{}if(t){ne();return}const n=we();document.body.insertBefore(n,document.body.firstChild),Me(n);const s=n.querySelector("#splashStart"),e=()=>{n.remove(),ne()};s.addEventListener("click",()=>{try{sessionStorage.setItem(te,"1")}catch{}n.classList.add("splash--hide"),n.addEventListener("transitionend",e,{once:!0}),window.setTimeout(e,480)})}$e();
