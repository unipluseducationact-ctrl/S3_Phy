(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const y of l.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&e(y)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const B={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"Light and waves — S3 focus","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.refractionTir":"Refraction, Snell’s law & total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.reflection.title":"Plane mirror — reflection","tools.reflection.angle":"Angle of incidence (deg)","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (Δθ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 × θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refractionTir.title":"Prison Break lab — refraction, Snell & TIR","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","flashcards.deck.refractionTir":"Refraction & TIR","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},re={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"光與波動 — 中三重點","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.tir":"全反射","topic.refractionTir":"折射、司乃耳定律與全內反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.reflection.title":"平面鏡 — 反射","tools.reflection.angle":"入射觔（度）","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refractionTir.title":"逃獄遊戲 — 折射、司乃耳與全內反射","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","flashcards.deck.refractionTir":"折射與全內反射","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},oe="s3phy.lang",ae={en:B,"zh-Hant":re};let Z="en";function ie(){try{const t=localStorage.getItem(oe);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function se(){Z=ie()}function le(t){if(ae[t]){Z=t;try{localStorage.setItem(oe,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function O(){return Z}function i(t){const n=ae[Z]||B;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:Object.prototype.hasOwnProperty.call(B,t)?B[t]:t}const U=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],Y=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],ce=t=>t*Math.PI/180;function ue(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480" aria-label="${t("tools.reflection.title")}"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.reflection.angle")}</label>
        <input type="range" min="5" max="85" value="35" data-i />
        <input type="number" min="5" max="85" value="35" data-i-num />
      </div>
    </div>
  `;const s=n.querySelector("canvas"),e=s.getContext("2d"),o=n.querySelector("[data-i]"),l=n.querySelector("[data-i-num]");function y(T){const g=q(T?o.value:l.value);o.value=String(g),l.value=String(g),S(g)}function q(T){const g=Number(T);return Number.isNaN(g)?35:Math.max(5,Math.min(85,g))}o.addEventListener("input",()=>y(!0)),l.addEventListener("change",()=>y(!1));function S(T){const g=s.width,f=s.height;e.clearRect(0,0,g,f),e.fillStyle="#0b0f14",e.fillRect(0,0,g,f);const c=f*.55,h=g*.45,$=320;e.strokeStyle="#9aa8b8",e.lineWidth=3,e.beginPath(),e.moveTo(h,c-$/2),e.lineTo(h,c+$/2),e.stroke(),e.fillStyle="#cbd5e1",e.font="14px system-ui",e.fillText("Mirror",h+8,c-$/2+16);const L=ce(T),k=220,H=h-k*Math.cos(L),P=c-k*Math.sin(L);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(H,P),e.lineTo(h,c),e.stroke();const A=h+k*Math.cos(L),C=c-k*Math.sin(L);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(h,c),e.lineTo(A,C),e.stroke(),e.setLineDash([6,6]),e.strokeStyle="#64748b",e.lineWidth=1,e.beginPath(),e.moveTo(h-120,c),e.lineTo(h+120,c),e.stroke(),e.setLineDash([]),e.fillStyle="#e8eef5",e.font="16px system-ui",e.fillText(`i = r = ${T.toFixed(0)} deg`,16,28)}return y(!0),n}const V="s3phy-rotating-mirror-lab-css",de=`
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
`;function fe(){if(document.getElementById(V))return;const t=document.createElement("style");t.id=V,t.textContent=de,document.head.appendChild(t)}function me(t){fe();const n=document.createElement("div");n.className="rml",n.innerHTML=`
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
  `;const s=n.querySelector(".rml-canvas"),e=s.getContext("2d"),o=n.querySelector("[data-rml-rot]"),l=n.querySelector("[data-rml-inc]"),y=n.querySelector('[data-rml-disp="rot"]'),q=n.querySelector('[data-rml-disp="inc"]'),S=n.querySelector('[data-rml-val="i"]'),T=n.querySelector('[data-rml-val="r"]'),g=n.querySelector('[data-rml-val="shift"]'),f=350,c=380,h=300,$="#22d3ee",L="bold 17px system-ui, sans-serif";let k=0,H=-140,P=!0,A=!0,C=!0,_=!0;function E(u){return u*Math.PI/180}function F(u,d,p,x,M,b=2,w=!1){e.beginPath(),e.lineWidth=b,e.strokeStyle=M,e.setLineDash(w?[6,6]:[]);const z=u+Math.cos(E(p))*x,R=d+Math.sin(E(p))*x;return e.moveTo(u,d),e.lineTo(z,R),e.stroke(),e.setLineDash([]),{x:z,y:R}}function D(u,d,p,x,M,b=14){const w=p-u,z=x-d,R=Math.hypot(w,z);if(R<1e-6)return;const I=w/R,N=z/R,j=p-I*b,v=x-N*b,W=.45*b;e.beginPath(),e.fillStyle=M,e.moveTo(p,x),e.lineTo(j-N*W,v+I*W),e.lineTo(j+N*W,v-I*W),e.closePath(),e.fill()}function a(u,d,p,x,M,b=25){e.beginPath(),e.strokeStyle=x,e.lineWidth=2;const w=Math.min(u,d),z=Math.max(u,d);if(e.arc(f,c,p,E(w),E(z),!1),e.stroke(),M){const R=(w+z)/2,I=f+Math.cos(E(R))*(p+b),N=c+Math.sin(E(R))*(p+b);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle=x,e.fillText(M,I,N),e.restore()}}function r(u,d,p,x,M){e.clearRect(0,0,s.width,s.height),e.beginPath(),e.setLineDash([10,6]),e.strokeStyle="rgba(255, 204, 0, 0.45)",e.lineWidth=3,e.lineCap="round",e.moveTo(f-200,c),e.lineTo(f+200,c),e.stroke(),e.setLineDash([]),e.lineCap="butt";const b=f+Math.cos(E(u))*h,w=c+Math.sin(E(u))*h;e.beginPath(),e.lineWidth=3,e.strokeStyle="#fff",e.moveTo(b,w),e.lineTo(f,c),e.stroke();const z=(b+f)*.5,R=(w+c)*.5,I=Math.hypot(f-b,c-w)||1,N=(f-b)/I,j=(c-w)/I;if(D(z-N*28,R-j*28,z,R,"#fff",16),e.save(),e.font=L,e.textAlign="center",e.textBaseline="bottom",e.fillStyle="#fff",e.fillText(t("tools.rotatingMirror.canvas.incident"),b,w-12),e.restore(),P){const v=F(f,c,-90,h-60,"#00e676",1,!0);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="left",e.textBaseline="bottom",e.fillStyle="#00e676",e.fillText(t("tools.rotatingMirror.canvas.n"),v.x+6,v.y-4),e.restore()}if(A){const v=F(f,c,x,h,"#00e676",2,!1);D(f,c,v.x,v.y,"#00e676",16),e.save(),e.font=L,e.textAlign="center",e.textBaseline="bottom",e.fillStyle="#00e676",e.fillText(t("tools.rotatingMirror.canvas.originalReflected"),v.x,v.y-14),e.restore()}e.save(),e.translate(f,c),e.rotate(E(k)),e.beginPath(),e.lineWidth=6,e.strokeStyle="#ffcc00",e.lineCap="round",e.moveTo(-200,0),e.lineTo(200,0),e.stroke(),e.beginPath(),e.lineWidth=1,e.strokeStyle="#666";for(let v=-190;v<200;v+=15)e.moveTo(v,0),e.lineTo(v-5,8);if(e.stroke(),e.restore(),C){const v=F(f,c,d,h-40,$,2,!0);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="left",e.textBaseline="bottom",e.fillStyle=$,e.fillText(t("tools.rotatingMirror.canvas.nPrime"),v.x+6,v.y-4),e.restore()}if(_){const v=F(f,c,p,h,$,4);D(f,c,v.x,v.y,$,16),Math.abs(k)>.5&&(e.save(),e.font=L,e.textAlign="center",e.textBaseline="bottom",e.fillStyle=$,e.fillText(t("tools.rotatingMirror.canvas.newReflected"),v.x,v.y-14),e.restore())}if(C&&a(u,d,100,"#ffcc00",`i=${M.toFixed(0)}°`,25),C&&_&&a(d,p,100,$,`r=${M.toFixed(0)}°`,25),P&&C&&Math.abs(k)>.5&&a(-90,d,50,"#ffcc00",`θ=${Math.abs(k)}°`,20),A&&_&&Math.abs(k)>.5){const v=p-x;a(x,p,260,"#ff5252",`${t("tools.rotatingMirror.canvas.shift")}=${v.toFixed(0)}°`,40)}}function m(){k=parseFloat(o.value),H=parseFloat(l.value);const u=k>0?"+":"";y.textContent=`${u}${k}°`,q.textContent=`${H}°`;const d=-90,p=Math.abs(H-d),x=d+p,M=-90+k,b=Math.abs(H-M),w=M+b,z=w-x;S.textContent=`${b.toFixed(1)}°`,T.textContent=`${b.toFixed(1)}°`;const R=z>0?"+":"";g.textContent=`${R}${z.toFixed(1)}°`,r(H,M,w,x,b)}return n.querySelectorAll("[data-rml-toggle]").forEach(u=>{u.addEventListener("click",()=>{const d=u.getAttribute("data-rml-toggle");d==="orig-norm"&&(P=!P),d==="orig-ray"&&(A=!A),d==="new-norm"&&(C=!C),d==="new-ray"&&(_=!_),u.classList.toggle("active"),m()})}),n.querySelector("[data-rml-reset]").addEventListener("click",()=>{o.value="0",m()}),o.addEventListener("input",m),l.addEventListener("input",m),m(),n}function pe(t){const n=document.createElement("div");n.className="tool-tir-escape";const s=document.createElement("iframe"),e="./",o=e.endsWith("/")?e:`${e}/`;return s.src=`${o}tir-escape/index.html`,s.title=t("tools.refractionTir.title"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin",n.appendChild(s),n}function G(t,n={}){const s=n.defaultKind==="concave"?"concave":"convex",e=s==="concave"?"tools.concaveLens.title":"tools.convexLens.title",o=document.createElement("div");o.className="tool-lens-simulator";const l=document.createElement("iframe"),y="./",q=y.endsWith("/")?y:`${y}/`;return l.src=`${q}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(s)}`,l.title=t(e),l.setAttribute("loading","lazy"),l.referrerPolicy="strict-origin-when-cross-origin",o.appendChild(l),o}const Q=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function X(t){return Math.log(t)/Math.LN10}function he(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${t("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const s=n.querySelector("canvas"),e=n.querySelector("[data-detail]"),o=s.getContext("2d"),l=X(1e4),y=X(1e22);function q(g){const f={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},c=O()==="zh-Hant",h=f[g];return h?c?h.zh:h.en:g}function S(g){const f={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},c={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return O()==="zh-Hant"?c[g]:f[g]}function T(){const g=s.width,f=s.height;o.clearRect(0,0,g,f),o.fillStyle="#0b0f14",o.fillRect(0,0,g,f);const c=24,h=f*.45,$=36;Q.forEach((L,k)=>{const H=c+(X(L.minHz)-l)/(y-l)*(g-c*2),P=c+(X(L.maxHz)-l)/(y-l)*(g-c*2);o.fillStyle=L.color,o.fillRect(H,h,Math.max(6,P-H),$)}),o.fillStyle="#cbd5e1",o.font="13px system-ui",o.fillText("10^4 Hz",c,h+$+26),o.fillText("10^22 Hz",g-c-60,h+$+26)}return s.addEventListener("click",g=>{const f=s.getBoundingClientRect(),c=(g.clientX-f.left)/f.width*s.width,h=24,$=(c-h)/(s.width-h*2),L=10**(l+$*(y-l)),k=Q.find(H=>L>=H.minHz&&L<=H.maxHz);k&&(e.innerHTML=`<h3 style="margin:0 0 6px">${q(k.id)}</h3><p style="margin:0;color:#9aa8b8">${S(k.id)}</p>`)}),T(),n}const ge=["topics","notes","tools","worksheets","flashcards","summary"],be=["reflection","rotatingMirror","refractionTir","convexLens","concaveLens","em"],ve={reflection:t=>ue(t),rotatingMirror:t=>me(t),refractionTir:t=>pe(t),convexLens:t=>G(t,{defaultKind:"convex"}),concaveLens:t=>G(t,{defaultKind:"concave"}),em:t=>he(t)};function ye(t){return i({reflection:"tools.reflection.title",rotatingMirror:"tools.rotatingMirror.title",refractionTir:"tools.refractionTir.title",convexLens:"tools.convexLens.title",concaveLens:"tools.concaveLens.title",em:"tools.em.title"}[t]||t)}function K(){return O()==="zh-Hant"?"zhHant":"en"}async function xe(t){const n=`./notes/${t}`;try{return(await fetch(n,{method:"HEAD"})).ok}catch{return!1}}function J(t){const n=t.slice();for(let s=n.length-1;s>0;s-=1){const e=Math.floor(Math.random()*(s+1));[n[s],n[e]]=[n[e],n[s]]}return n}function we(t){let n="topics",s="reflection",e=0,o="all",l=!1,y=[],q=!1;const S={};function T(){t.innerHTML=`
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
    `,S.lang=t.querySelector("[data-lang]"),S.nav=t.querySelector("[data-nav]"),S.main=t.querySelector("[data-main]"),S.lang.innerHTML=`
      <button type="button" data-set-lang="en" class="${O()==="en"?"active":""}">${i("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${O()==="zh-Hant"?"active":""}">${i("lang.zhHant")}</button>
    `,S.lang.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{le(a.getAttribute("data-set-lang")),T()})}),S.nav.innerHTML=ge.map(a=>`<button type="button" class="${n===a?"active":""}" data-sec="${a}">${i({topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"}[a])}</button>`).join(""),S.nav.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{n=a.getAttribute("data-sec"),T()})}),n==="topics"?S.main.innerHTML=g():n==="notes"?S.main.innerHTML=c():n==="tools"?S.main.innerHTML=$():n==="worksheets"?S.main.innerHTML=H():n==="flashcards"?S.main.innerHTML=C():n==="summary"&&(S.main.innerHTML=D()),n==="notes"&&h(),n==="tools"&&L(),n==="worksheets"&&P(),n==="flashcards"&&F()}function g(){const a=[["reflection","topic.reflection"],["rotatingMirror","topic.rotatingMirror"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${i("topics.title")}</h2>
        <p class="lead">${i("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${a.map(([r,m])=>{const u=r==="convex"?"convexLens":r==="concave"?"concaveLens":r==="em"?"em":r;return`
            <div class="card">
              <h3>${i(m)}</h3>
              <p>${r==="convex"||r==="concave"?i("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${u}">${i("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function f(a){const r=a.target.closest("[data-go-tool]");r&&(n="tools",s=r.getAttribute("data-go-tool"),T())}function c(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${i("notes.title")}</h2>
        <p class="lead">${i("notes.intro")}</p>
        <p class="lead">${i("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${a.map(r=>{const m=i(`notes.card.${r.key}`);return`
            <div class="card" data-note-card="${r.key}">
              <h3>${m}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function h(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],r=K();for(const m of a){const u=t.querySelector(`[data-note-card="${m.key}"]`);if(!u)continue;const d=u.querySelector("[data-note-body]"),p=r==="zhHant"?m.fileZh:m.fileEn,x=await xe(p),M=`./notes/${p}`;x?d.innerHTML=`
          <iframe class="notes-grid" title="${i(`notes.card.${m.key}`)}" src="${M}"></iframe>
          <p style="margin-top:8px"><a href="${M}" target="_blank" rel="noopener">${i("notes.openPdf")}</a></p>`:d.innerHTML=`<p class="lead">${i("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function $(){return`
      <section class="panel">
        <h2>${i("tools.title")}</h2>
        <p class="lead">${i("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${be.map(a=>`<button type="button" data-tool="${a}" class="${s===a?"active":""}">${ye(a)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function L(){const a=t.querySelector("[data-tool-list]"),r=t.querySelector("[data-tool-stage]");!a||!r||(a.querySelectorAll("button").forEach(m=>{m.addEventListener("click",()=>{s=m.getAttribute("data-tool"),a.querySelectorAll("button").forEach(u=>u.classList.toggle("active",u.getAttribute("data-tool")===s)),k(r)})}),k(r))}function k(a){a.innerHTML="";const r=ve[s];if(!r)return;const m=r(i);a.appendChild(m)}function H(){const a=[["reflection","topic.reflection"],["refractionTir","topic.refractionTir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
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
          ${a.map(([r,m])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${r}" checked />
            <span>${i(m)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${i("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${i("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${i("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${i("worksheets.empty")}</p></div>
      </section>`}function P(){const a=t.querySelector("[data-ws-gen]"),r=t.querySelector("[data-ws-print-p]"),m=t.querySelector("[data-ws-print-a]"),u=t.querySelector("[data-ws-out]");!a||!u||(a.addEventListener("click",()=>{const d=Number(t.querySelector("[data-ws-count]").value),p=[...t.querySelectorAll("[data-ws-topic]")].filter(b=>b.checked).map(b=>b.getAttribute("data-ws-topic")),x=U.filter(b=>{const w=b.topic;return!!(p.includes(w)||p.includes("refractionTir")&&(w==="refraction"||w==="tir")||w==="convex"&&(p.includes("convex")||p.includes("concave")))}),M=J(x).slice(0,Math.min(d,x.length||1));y=M.length?M:J(U).slice(0,Math.min(d,U.length)),q=!1,A(u)}),r.addEventListener("click",()=>{q=!1,A(u),window.print()}),m.addEventListener("click",()=>{q=!0,A(u),window.print()}))}function A(a){const r=K();if(!y.length){a.innerHTML=`<p class="lead">${i("worksheets.empty")}</p>`;return}a.innerHTML=y.map((m,u)=>{const d=m[r]||m.en,p=["A","B","C","D"],x=d.choices.map((b,w)=>`<li><strong>${p[w]}.</strong> ${b}</li>`).join(""),M=q?`<p><em>${d.exp}</em></p><p><strong>Answer:</strong> ${p[d.a]}</p>`:"";return`<div class="q"><h4>Q${u+1}</h4><p>${d.q}</p><ol style="margin:0;padding-left:18px">${x}</ol>${M}</div>`}).join("")}function C(){return`
      <section class="panel">
        <h2>${i("flashcards.title")}</h2>
        <p class="lead">${i("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${i("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${i("flashcards.all")}</option>
            <option value="reflection">${i("topic.reflection")}</option>
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
      </section>`}function _(){let a=Y.slice();return o==="all"?a:(o==="convex"||o==="concave"?a=a.filter(r=>r.topic==="convex"||r.topic==="concave"):o==="refractionTir"?a=a.filter(r=>r.topic==="refraction"||r.topic==="tir"):a=a.filter(r=>r.topic===o),a.length?a:Y)}function E(){const a=_();e=Math.max(0,Math.min(e,a.length-1));const r=a[e],m=K(),u=r[m]||r.en,d=t.querySelector("[data-flash-front]"),p=t.querySelector("[data-flip-card]");!d||!p||(l?(p.querySelector(".label").textContent=i("flashcards.answer"),d.textContent=u.a):(p.querySelector(".label").textContent=i("flashcards.question"),d.textContent=u.q))}function F(){const a=t.querySelector("[data-flash-deck]");a.value=o,a.addEventListener("change",()=>{o=a.value,e=0,l=!1,E()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{l=!l,E()}),t.querySelector("[data-flash-flip]").addEventListener("click",r=>{r.stopPropagation(),l=!l,E()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const r=_();e=(e-1+r.length)%r.length,l=!1,E()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const r=_();e=(e+1)%r.length,l=!1,E()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const r=_();e=Math.floor(Math.random()*r.length),l=!1,E()}),E()}function D(){const a=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${i("summary.title")}</h2>
        <p class="lead">${i("summary.intro")}</p>
        <div class="grid cols-2">
          ${a.map(r=>{const m=`./summary/${r.file}`;return`
            <div class="card">
              <h3>${i(r.key)}</h3>
              <img class="summary-thumb" alt="" src="${m}" />
              <p style="margin-top:10px"><a download href="${m}">${i("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}window.addEventListener("s3phy:lang",()=>T()),t.addEventListener("click",f),T()}const ee={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};se();const te="s3phy_splash_seen";function ke(){return"./images/uniplus-logo.png"}function Me(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${ke()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${i("splash.start")}</button>
      </div>
    </div>
  `,t}function Se(t,n){const s=[...ee.en,...ee.zhHant],e=()=>{if(!t.parentElement)return;const o=document.createElement("div");o.className="splash-danmaku-item",o.textContent=s[Math.floor(Math.random()*s.length)];const l=Math.random()*85+5,y=Math.random()*.8+.9,q=Math.random()*12+10;o.style.top=`${l}%`,o.style.fontSize=`${y}rem`,o.style.animationDuration=`${q}s`,n.appendChild(o),o.addEventListener("animationend",()=>o.remove()),window.setTimeout(e,1500+Math.random()*1e3)};for(let o=0;o<4;o+=1)window.setTimeout(e,o*1e3)}function $e(t){const n=t.querySelector("#splashLogoWrap"),s=t.querySelector("#splashDanmaku"),e=t.querySelector("#splashStartWrap");window.setTimeout(()=>n==null?void 0:n.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{s==null||s.classList.add("splash-danmaku--visible"),e==null||e.classList.add("splash-start-wrap--in"),s&&Se(t,s)},1600)}function ne(){const t=document.getElementById("app");t&&we(t)}function Le(){let t=!1;try{t=sessionStorage.getItem(te)==="1"}catch{}if(t){ne();return}const n=Me();document.body.insertBefore(n,document.body.firstChild),$e(n);const s=n.querySelector("#splashStart"),e=()=>{n.remove(),ne()};s.addEventListener("click",()=>{try{sessionStorage.setItem(te,"1")}catch{}n.classList.add("splash--hide"),n.addEventListener("transitionend",e,{once:!0}),window.setTimeout(e,480)})}Le();
