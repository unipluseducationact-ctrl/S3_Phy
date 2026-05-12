(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const h of n)if(h.type==="childList")for(const L of h.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&e(L)}).observe(document,{childList:!0,subtree:!0});function r(n){const h={};return n.integrity&&(h.integrity=n.integrity),n.referrerPolicy&&(h.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?h.credentials="include":n.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function e(n){if(n.ep)return;n.ep=!0;const h=r(n);fetch(n.href,h)}})();const B={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"Light and waves — S3 focus","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.reflection.title":"Plane mirror — reflection","tools.reflection.angle":"Angle of incidence (deg)","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (Δθ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 × θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},le={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"光與波動 — 中三重點","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.tir":"全反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.reflection.title":"平面鏡 — 反射","tools.reflection.angle":"入射觔（度）","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},re="s3phy.lang",ie={en:B,"zh-Hant":le};let Z="en";function ce(){try{const t=localStorage.getItem(re);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function ue(){Z=ce()}function de(t){if(ie[t]){Z=t;try{localStorage.setItem(re,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function O(){return Z}function u(t){const a=ie[Z]||B;return Object.prototype.hasOwnProperty.call(a,t)?a[t]:Object.prototype.hasOwnProperty.call(B,t)?B[t]:t}const Y=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],G=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],V=t=>t*180/Math.PI,U=t=>t*Math.PI/180;function fe(t,a,r){return Math.max(a,Math.min(r,t))}function se(t,a,r){const e=t/r*Math.sin(a);return e>1+1e-9||e<-1-1e-9?null:Math.asin(fe(e,-1,1))}function me(t,a){if(t<=a)return null;const r=a/t;return r>1?null:Math.asin(r)}function pe(t){const a=document.createElement("div");a.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480" aria-label="${t("tools.reflection.title")}"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.reflection.angle")}</label>
        <input type="range" min="5" max="85" value="35" data-i />
        <input type="number" min="5" max="85" value="35" data-i-num />
      </div>
    </div>
  `;const r=a.querySelector("canvas"),e=r.getContext("2d"),n=a.querySelector("[data-i]"),h=a.querySelector("[data-i-num]");function L($){const d=R($?n.value:h.value);n.value=String(d),h.value=String(d),k(d)}function R($){const d=Number($);return Number.isNaN(d)?35:Math.max(5,Math.min(85,d))}n.addEventListener("input",()=>L(!0)),h.addEventListener("change",()=>L(!1));function k($){const d=r.width,f=r.height;e.clearRect(0,0,d,f),e.fillStyle="#0b0f14",e.fillRect(0,0,d,f);const o=f*.55,s=d*.45,p=320;e.strokeStyle="#9aa8b8",e.lineWidth=3,e.beginPath(),e.moveTo(s,o-p/2),e.lineTo(s,o+p/2),e.stroke(),e.fillStyle="#cbd5e1",e.font="14px system-ui",e.fillText("Mirror",s+8,o-p/2+16);const c=U($),m=220,g=s-m*Math.cos(c),y=o-m*Math.sin(c);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(g,y),e.lineTo(s,o),e.stroke();const v=s+m*Math.cos(c),H=o-m*Math.sin(c);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(s,o),e.lineTo(v,H),e.stroke(),e.setLineDash([6,6]),e.strokeStyle="#64748b",e.lineWidth=1,e.beginPath(),e.moveTo(s-120,o),e.lineTo(s+120,o),e.stroke(),e.setLineDash([]),e.fillStyle="#e8eef5",e.font="16px system-ui",e.fillText(`i = r = ${$.toFixed(0)} deg`,16,28)}return L(!0),a}const Q="s3phy-rotating-mirror-lab-css",he=`
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
`;function ve(){if(document.getElementById(Q))return;const t=document.createElement("style");t.id=Q,t.textContent=he,document.head.appendChild(t)}function be(t){ve();const a=document.createElement("div");a.className="rml",a.innerHTML=`
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
  `;const r=a.querySelector(".rml-canvas"),e=r.getContext("2d"),n=a.querySelector("[data-rml-rot]"),h=a.querySelector("[data-rml-inc]"),L=a.querySelector('[data-rml-disp="rot"]'),R=a.querySelector('[data-rml-disp="inc"]'),k=a.querySelector('[data-rml-val="i"]'),$=a.querySelector('[data-rml-val="r"]'),d=a.querySelector('[data-rml-val="shift"]'),f=350,o=380,s=300,p="#22d3ee",c="bold 17px system-ui, sans-serif";let m=0,g=-140,y=!0,v=!0,H=!0,C=!0;function M(b){return b*Math.PI/180}function q(b,w,S,z,P,T=2,N=!1){e.beginPath(),e.lineWidth=T,e.strokeStyle=P,e.setLineDash(N?[6,6]:[]);const F=b+Math.cos(M(S))*z,_=w+Math.sin(M(S))*z;return e.moveTo(b,w),e.lineTo(F,_),e.stroke(),e.setLineDash([]),{x:F,y:_}}function A(b,w,S,z,P,T=14){const N=S-b,F=z-w,_=Math.hypot(N,F);if(_<1e-6)return;const D=N/_,I=F/_,W=S-D*T,E=z-I*T,j=.45*T;e.beginPath(),e.fillStyle=P,e.moveTo(S,z),e.lineTo(W-I*j,E+D*j),e.lineTo(W+I*j,E-D*j),e.closePath(),e.fill()}function i(b,w,S,z,P,T=25){e.beginPath(),e.strokeStyle=z,e.lineWidth=2;const N=Math.min(b,w),F=Math.max(b,w);if(e.arc(f,o,S,M(N),M(F),!1),e.stroke(),P){const _=(N+F)/2,D=f+Math.cos(M(_))*(S+T),I=o+Math.sin(M(_))*(S+T);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle=z,e.fillText(P,D,I),e.restore()}}function l(b,w,S,z,P){e.clearRect(0,0,r.width,r.height),e.beginPath(),e.setLineDash([10,6]),e.strokeStyle="rgba(255, 204, 0, 0.45)",e.lineWidth=3,e.lineCap="round",e.moveTo(f-200,o),e.lineTo(f+200,o),e.stroke(),e.setLineDash([]),e.lineCap="butt";const T=f+Math.cos(M(b))*s,N=o+Math.sin(M(b))*s;e.beginPath(),e.lineWidth=3,e.strokeStyle="#fff",e.moveTo(T,N),e.lineTo(f,o),e.stroke();const F=(T+f)*.5,_=(N+o)*.5,D=Math.hypot(f-T,o-N)||1,I=(f-T)/D,W=(o-N)/D;if(A(F-I*28,_-W*28,F,_,"#fff",16),e.save(),e.font=c,e.textAlign="center",e.textBaseline="bottom",e.fillStyle="#fff",e.fillText(t("tools.rotatingMirror.canvas.incident"),T,N-12),e.restore(),y){const E=q(f,o,-90,s-60,"#00e676",1,!0);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="left",e.textBaseline="bottom",e.fillStyle="#00e676",e.fillText(t("tools.rotatingMirror.canvas.n"),E.x+6,E.y-4),e.restore()}if(v){const E=q(f,o,z,s,"#00e676",2,!1);A(f,o,E.x,E.y,"#00e676",16),e.save(),e.font=c,e.textAlign="center",e.textBaseline="bottom",e.fillStyle="#00e676",e.fillText(t("tools.rotatingMirror.canvas.originalReflected"),E.x,E.y-14),e.restore()}e.save(),e.translate(f,o),e.rotate(M(m)),e.beginPath(),e.lineWidth=6,e.strokeStyle="#ffcc00",e.lineCap="round",e.moveTo(-200,0),e.lineTo(200,0),e.stroke(),e.beginPath(),e.lineWidth=1,e.strokeStyle="#666";for(let E=-190;E<200;E+=15)e.moveTo(E,0),e.lineTo(E-5,8);if(e.stroke(),e.restore(),H){const E=q(f,o,w,s-40,p,2,!0);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="left",e.textBaseline="bottom",e.fillStyle=p,e.fillText(t("tools.rotatingMirror.canvas.nPrime"),E.x+6,E.y-4),e.restore()}if(C){const E=q(f,o,S,s,p,4);A(f,o,E.x,E.y,p,16),Math.abs(m)>.5&&(e.save(),e.font=c,e.textAlign="center",e.textBaseline="bottom",e.fillStyle=p,e.fillText(t("tools.rotatingMirror.canvas.newReflected"),E.x,E.y-14),e.restore())}if(H&&i(b,w,100,"#ffcc00",`i=${P.toFixed(0)}°`,25),H&&C&&i(w,S,100,p,`r=${P.toFixed(0)}°`,25),y&&H&&Math.abs(m)>.5&&i(-90,w,50,"#ffcc00",`θ=${Math.abs(m)}°`,20),v&&C&&Math.abs(m)>.5){const E=S-z;i(z,S,260,"#ff5252",`${t("tools.rotatingMirror.canvas.shift")}=${E.toFixed(0)}°`,40)}}function x(){m=parseFloat(n.value),g=parseFloat(h.value);const b=m>0?"+":"";L.textContent=`${b}${m}°`,R.textContent=`${g}°`;const w=-90,S=Math.abs(g-w),z=w+S,P=-90+m,T=Math.abs(g-P),N=P+T,F=N-z;k.textContent=`${T.toFixed(1)}°`,$.textContent=`${T.toFixed(1)}°`;const _=F>0?"+":"";d.textContent=`${_}${F.toFixed(1)}°`,l(g,P,N,z,T)}return a.querySelectorAll("[data-rml-toggle]").forEach(b=>{b.addEventListener("click",()=>{const w=b.getAttribute("data-rml-toggle");w==="orig-norm"&&(y=!y),w==="orig-ray"&&(v=!v),w==="new-norm"&&(H=!H),w==="new-ray"&&(C=!C),b.classList.toggle("active"),x()})}),a.querySelector("[data-rml-reset]").addEventListener("click",()=>{n.value="0",x()}),n.addEventListener("input",x),h.addEventListener("input",x),x(),a}function ge(t){const a=document.createElement("div");a.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.refraction.n1")}</label>
        <input type="range" min="1" max="2.5" step="0.01" value="1.00" data-n1 />
        <input type="number" min="1" max="2.5" step="0.01" value="1.00" data-n1n />
      </div>
      <div class="control">
        <label>${t("tools.refraction.n2")}</label>
        <input type="range" min="1" max="2.5" step="0.01" value="1.50" data-n2 />
        <input type="number" min="1" max="2.5" step="0.01" value="1.50" data-n2n />
      </div>
      <div class="control">
        <label>${t("tools.refraction.angle")}</label>
        <input type="range" min="5" max="80" value="40" data-ang />
        <input type="number" min="5" max="80" value="40" data-angn />
      </div>
    </div>
  `;const r=a.querySelector("canvas"),e=r.getContext("2d"),n=(k,$,d,f,o)=>{const s=a.querySelector(k),p=a.querySelector($),c=m=>{let g=Number(m?s.value:p.value);Number.isNaN(g)&&(g=d),g=Math.max(d,Math.min(f,g)),s.value=String(g),p.value=String(g),o()};return s.addEventListener("input",()=>c(!0)),p.addEventListener("change",()=>c(!1)),()=>Number(a.querySelector(k).value)},h=n("[data-n1]","[data-n1n]",1,2.5,R),L=n("[data-n2]","[data-n2n]",1,2.5,R);n("[data-ang]","[data-angn]",5,80,R);function R(){const k=h(),$=L(),d=Number(a.querySelector("[data-ang]").value),f=U(d),o=r.width,s=r.height;e.clearRect(0,0,o,s),e.fillStyle="#0b0f14",e.fillRect(0,0,o,s);const p=s*.55,c=o*.48;e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(c,40),e.lineTo(c,s-40),e.stroke(),e.fillStyle="#1e293b",e.fillRect(0,40,c,s-80),e.fillStyle="#0f172a",e.fillRect(c,40,o-c,s-80),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`n1 = ${k.toFixed(2)}`,16,64),e.fillText(`n2 = ${$.toFixed(2)}`,c+12,64);const m=260,g=c-m*Math.cos(f),y=p-m*Math.sin(f);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(g,y),e.lineTo(c,p),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(c-140,p),e.lineTo(c+220,p),e.stroke(),e.setLineDash([]);const v=se(k,f,$);if(v==null)e.fillStyle="#f87171",e.fillText("TIR from this side is not physical for n1 <= n2 here",16,28);else{const C=c+280*Math.cos(v),M=p-280*Math.sin(v);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(c,p),e.lineTo(C,M),e.stroke(),e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${d.toFixed(1)} deg, r = ${V(v).toFixed(1)} deg`,16,28)}}return R(),a}function ye(t){const a=document.createElement("div");a.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.tir.n1")}</label>
        <input type="range" min="1.1" max="2.5" step="0.01" value="1.50" data-n1 />
        <input type="number" min="1.1" max="2.5" step="0.01" value="1.50" data-n1n />
      </div>
      <div class="control">
        <label>${t("tools.tir.n2")}</label>
        <input type="range" min="1" max="1.49" step="0.01" value="1.00" data-n2 />
        <input type="number" min="1" max="1.49" step="0.01" value="1.00" data-n2n />
      </div>
      <div class="control">
        <label>${t("tools.tir.angle")}</label>
        <input type="range" min="5" max="89" value="45" data-ang />
        <input type="number" min="5" max="89" value="45" data-angn />
      </div>
    </div>
    <p class="lead" data-status style="margin-top:8px;color:#9aa8b8;font-size:0.95rem"></p>
  `;const r=a.querySelector("canvas"),e=r.getContext("2d"),n=a.querySelector("[data-status]"),h=(k,$,d,f)=>{const o=a.querySelector(k),s=a.querySelector($),p=c=>{let m=Number(c?o.value:s.value);Number.isNaN(m)&&(m=d),m=Math.max(d,Math.min(f,m)),o.value=String(m),s.value=String(m),R()};return o.addEventListener("input",()=>p(!0)),s.addEventListener("change",()=>p(!1)),()=>Number(a.querySelector(k).value)},L=h("[data-n1]","[data-n1n]",1.1,2.5);h("[data-n2]","[data-n2n]",1,1.49),h("[data-ang]","[data-angn]",5,89);function R(){const k=L(),$=Number(a.querySelector("[data-n2]").value),d=Number(a.querySelector("[data-ang]").value),f=U(d),o=r.width,s=r.height;e.clearRect(0,0,o,s),e.fillStyle="#0b0f14",e.fillRect(0,0,o,s);const p=s*.55,c=o*.48;e.fillStyle="#1e293b",e.fillRect(0,40,c,s-80),e.fillStyle="#0f172a",e.fillRect(c,40,o-c,s-80),e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(c,40),e.lineTo(c,s-40),e.stroke(),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`dense n = ${k.toFixed(2)} (left)`,16,64),e.fillText(`rare n = ${$.toFixed(2)} (right)`,c+12,64);const m=me(k,$),g=m==null?null:V(m),y=260,v=c-y*Math.cos(f),H=p-y*Math.sin(f);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(v,H),e.lineTo(c,p),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(c-160,p),e.lineTo(c+220,p),e.stroke(),e.setLineDash([]);const C=se(k,f,$);if(C==null){const q=c-260*Math.cos(f),A=p-260*Math.sin(f);e.strokeStyle="#a78bfa",e.lineWidth=2,e.beginPath(),e.moveTo(c,p),e.lineTo(q,A),e.stroke(),n.textContent=`${t("tools.tir.critical")}: ${g==null?"—":`${g.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.full")}`}else{const q=c+300*Math.cos(C),A=p-300*Math.sin(C);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(c,p),e.lineTo(q,A),e.stroke(),n.textContent=`${t("tools.tir.critical")}: ${g==null?"—":`${g.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.partial")} 뿯½ r = ${V(C).toFixed(1)} deg`}e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${d.toFixed(1)} deg (in dense medium)`,16,28)}return R(),a}function J(t,a={}){const r=document.createElement("div");r.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.lens.type")}</label>
        <select data-lens>
          <option value="convex">${t("tools.lens.convex")}</option>
          <option value="concave">${t("tools.lens.concave")}</option>
        </select>
      </div>
      <div class="control">
        <label>${t("tools.lens.u")}</label>
        <input type="range" min="120" max="420" value="260" data-u />
        <input type="number" min="120" max="420" value="260" data-un />
      </div>
      <div class="control">
        <label>${t("tools.lens.f")}</label>
        <input type="range" min="60" max="200" value="120" data-f />
        <input type="number" min="60" max="200" value="120" data-fn />
      </div>
      <div class="control">
        <label>${t("tools.lens.h")}</label>
        <input type="range" min="20" max="90" value="50" data-h />
        <input type="number" min="20" max="90" value="50" data-hn />
      </div>
    </div>
    <p class="lead" style="margin-top:10px;color:#9aa8b8;font-size:0.92rem">${t("tools.lens.note")}</p>
  `;const e=r.querySelector("canvas"),n=e.getContext("2d"),h=r.querySelector("[data-lens]");(a.defaultKind==="convex"||a.defaultKind==="concave")&&(h.value=a.defaultKind);const L=(o,s,p,c)=>{const m=r.querySelector(o),g=r.querySelector(s),y=v=>{let H=Number(v?m.value:g.value);Number.isNaN(H)&&(H=p),H=Math.max(p,Math.min(c,H)),m.value=String(H),g.value=String(H),f()};return m.addEventListener("input",()=>y(!0)),g.addEventListener("change",()=>y(!1)),()=>Number(r.querySelector(o).value)},R=L("[data-u]","[data-un]",120,420),k=L("[data-f]","[data-fn]",60,200),$=L("[data-h]","[data-hn]",20,90);h.addEventListener("change",f);function d(o,s,p,c,m,g,y=2,v=[]){o.setLineDash(v),o.strokeStyle=g,o.lineWidth=y,o.beginPath(),o.moveTo(s,p),o.lineTo(c,m),o.stroke(),o.setLineDash([])}function f(){const o=h.value,s=R(),p=k(),c=$(),m=e.width,g=e.height;n.clearRect(0,0,m,g),n.fillStyle="#0b0f14",n.fillRect(0,0,m,g);const y=m*.52,v=g*.55,H=o==="convex"?p:-p;d(n,40,v,m-40,v,"#334155",1),n.strokeStyle="#94a3b8",n.lineWidth=4,n.beginPath(),o==="convex"?(n.moveTo(y,v-140),n.quadraticCurveTo(y-18,v,y,v+140),n.quadraticCurveTo(y+18,v,y,v-140)):(n.moveTo(y-18,v-140),n.quadraticCurveTo(y,v,y-18,v+140),n.moveTo(y+18,v-140),n.quadraticCurveTo(y,v,y+18,v+140)),n.stroke();const C=y-s,M=C,q=v-c;d(n,C,v,M,q,"#fbbf24",3),n.fillStyle="#fbbf24",n.beginPath(),n.moveTo(M,q),n.lineTo(M-6,q+12),n.lineTo(M+6,q+12),n.closePath(),n.fill();const A={x:y-Math.abs(H),y:v},i={x:y+Math.abs(H),y:v};n.fillStyle="#64748b";for(const l of[A,i])n.beginPath(),n.arc(l.x,l.y,4,0,Math.PI*2),n.fill();if(o==="convex"){const l=y,x=q;d(n,M,q,l,x,"#fbbf24",2,[4,4]),d(n,l,x,i.x+220,i.y,"#6ee7b7",2);const b=(q-v)/(M-y),w=m-60,S=v+b*(w-y);d(n,M,q,w,S,"#93c5fd",2),d(n,M,q,A.x,A.y,"#fca5a5",2,[3,6]),d(n,A.x,A.y,m-80,q,"#fca5a5",2)}else{const l=y,x=q;d(n,M,q,l,x,"#fbbf24",2,[4,4]),d(n,l,x,A.x-200,v-U(8)*40,"#6ee7b7",2),d(n,M,q,m-100,v+30,"#93c5fd",2,[3,5])}n.fillStyle="#e8eef5",n.font="14px system-ui",n.fillText(`u = ${s.toFixed(0)} px, |f| = ${p.toFixed(0)} px, lens = ${o}`,16,28)}return f(),r}const ee=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function X(t){return Math.log(t)/Math.LN10}function xe(t){const a=document.createElement("div");a.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${t("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const r=a.querySelector("canvas"),e=a.querySelector("[data-detail]"),n=r.getContext("2d"),h=X(1e4),L=X(1e22);function R(d){const f={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},o=O()==="zh-Hant",s=f[d];return s?o?s.zh:s.en:d}function k(d){const f={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},o={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return O()==="zh-Hant"?o[d]:f[d]}function $(){const d=r.width,f=r.height;n.clearRect(0,0,d,f),n.fillStyle="#0b0f14",n.fillRect(0,0,d,f);const o=24,s=f*.45,p=36;ee.forEach((c,m)=>{const g=o+(X(c.minHz)-h)/(L-h)*(d-o*2),y=o+(X(c.maxHz)-h)/(L-h)*(d-o*2);n.fillStyle=c.color,n.fillRect(g,s,Math.max(6,y-g),p)}),n.fillStyle="#cbd5e1",n.font="13px system-ui",n.fillText("10^4 Hz",o,s+p+26),n.fillText("10^22 Hz",d-o-60,s+p+26)}return r.addEventListener("click",d=>{const f=r.getBoundingClientRect(),o=(d.clientX-f.left)/f.width*r.width,s=24,p=(o-s)/(r.width-s*2),c=10**(h+p*(L-h)),m=ee.find(g=>c>=g.minHz&&c<=g.maxHz);m&&(e.innerHTML=`<h3 style="margin:0 0 6px">${R(m.id)}</h3><p style="margin:0;color:#9aa8b8">${k(m.id)}</p>`)}),$(),a}const we=["topics","notes","tools","worksheets","flashcards","summary"],ke=["reflection","rotatingMirror","refraction","tir","convexLens","concaveLens","em"],Se={reflection:t=>pe(t),rotatingMirror:t=>be(t),refraction:t=>ge(t),tir:t=>ye(t),convexLens:t=>J(t,{defaultKind:"convex"}),concaveLens:t=>J(t,{defaultKind:"concave"}),em:t=>xe(t)};function Me(t){return u({reflection:"tools.reflection.title",rotatingMirror:"tools.rotatingMirror.title",refraction:"tools.refraction.title",tir:"tools.tir.title",convexLens:"tools.convexLens.title",concaveLens:"tools.concaveLens.title",em:"tools.em.title"}[t]||t)}function K(){return O()==="zh-Hant"?"zhHant":"en"}async function $e(t){const a=`./notes/${t}`;try{return(await fetch(a,{method:"HEAD"})).ok}catch{return!1}}function te(t){const a=t.slice();for(let r=a.length-1;r>0;r-=1){const e=Math.floor(Math.random()*(r+1));[a[r],a[e]]=[a[e],a[r]]}return a}function Le(t){let a="topics",r="reflection",e=0,n="all",h=!1,L=[],R=!1;const k={};function $(){t.innerHTML=`
      <header class="site-header">
        <div class="site-header__brand">
          <div class="brand-logo-wrap" aria-hidden="true">
            <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
          </div>
          <div class="brand-text-block">
            <h1 class="site-title">${u("app.title")}</h1>
            <p class="site-subtitle">${u("app.subtitle")}</p>
          </div>
        </div>
        <div class="site-header__actions">
          <div class="lang-toggle" data-lang></div>
        </div>
      </header>
      <nav class="main-nav" data-nav></nav>
      <main data-main></main>
      <footer class="site-footer no-print">${u("footer.conventions")}</footer>
    `,k.lang=t.querySelector("[data-lang]"),k.nav=t.querySelector("[data-nav]"),k.main=t.querySelector("[data-main]"),k.lang.innerHTML=`
      <button type="button" data-set-lang="en" class="${O()==="en"?"active":""}">${u("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${O()==="zh-Hant"?"active":""}">${u("lang.zhHant")}</button>
    `,k.lang.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{de(i.getAttribute("data-set-lang")),$()})}),k.nav.innerHTML=we.map(i=>`<button type="button" class="${a===i?"active":""}" data-sec="${i}">${u({topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"}[i])}</button>`).join(""),k.nav.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{a=i.getAttribute("data-sec"),$()})}),a==="topics"?k.main.innerHTML=d():a==="notes"?k.main.innerHTML=o():a==="tools"?k.main.innerHTML=p():a==="worksheets"?k.main.innerHTML=g():a==="flashcards"?k.main.innerHTML=H():a==="summary"&&(k.main.innerHTML=A()),a==="notes"&&s(),a==="tools"&&c(),a==="worksheets"&&y(),a==="flashcards"&&q()}function d(){const i=[["reflection","topic.reflection"],["rotatingMirror","topic.rotatingMirror"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${u("topics.title")}</h2>
        <p class="lead">${u("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${i.map(([l,x])=>{const b=l==="convex"?"convexLens":l==="concave"?"concaveLens":l==="em"?"em":l;return`
            <div class="card">
              <h3>${u(x)}</h3>
              <p>${l==="convex"||l==="concave"?u("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${b}">${u("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function f(i){const l=i.target.closest("[data-go-tool]");l&&(a="tools",r=l.getAttribute("data-go-tool"),$())}function o(){const i=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${u("notes.title")}</h2>
        <p class="lead">${u("notes.intro")}</p>
        <p class="lead">${u("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${i.map(l=>{const x=u(`notes.card.${l.key}`);return`
            <div class="card" data-note-card="${l.key}">
              <h3>${x}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function s(){const i=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],l=K();for(const x of i){const b=t.querySelector(`[data-note-card="${x.key}"]`);if(!b)continue;const w=b.querySelector("[data-note-body]"),S=l==="zhHant"?x.fileZh:x.fileEn,z=await $e(S),P=`./notes/${S}`;z?w.innerHTML=`
          <iframe class="notes-grid" title="${u(`notes.card.${x.key}`)}" src="${P}"></iframe>
          <p style="margin-top:8px"><a href="${P}" target="_blank" rel="noopener">${u("notes.openPdf")}</a></p>`:w.innerHTML=`<p class="lead">${u("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function p(){return`
      <section class="panel">
        <h2>${u("tools.title")}</h2>
        <p class="lead">${u("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${ke.map(i=>`<button type="button" data-tool="${i}" class="${r===i?"active":""}">${Me(i)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function c(){const i=t.querySelector("[data-tool-list]"),l=t.querySelector("[data-tool-stage]");!i||!l||(i.querySelectorAll("button").forEach(x=>{x.addEventListener("click",()=>{r=x.getAttribute("data-tool"),i.querySelectorAll("button").forEach(b=>b.classList.toggle("active",b.getAttribute("data-tool")===r)),m(l)})}),m(l))}function m(i){i.innerHTML="";const l=Se[r];if(!l)return;const x=l(u);i.appendChild(x)}function g(){const i=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel">
        <h2>${u("worksheets.title")}</h2>
        <p class="lead">${u("worksheets.intro")}</p>
        <div class="controls">
          <div class="control">
            <label>${u("worksheets.count")}</label>
            <select data-ws-count>
              <option>5</option><option>10</option><option>15</option>
            </select>
          </div>
        </div>
        <p class="lead" style="margin-top:10px">${u("worksheets.topics")}</p>
        <div class="grid cols-2" data-ws-topics>
          ${i.map(([l,x])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${l}" checked />
            <span>${u(x)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${u("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${u("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${u("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${u("worksheets.empty")}</p></div>
      </section>`}function y(){const i=t.querySelector("[data-ws-gen]"),l=t.querySelector("[data-ws-print-p]"),x=t.querySelector("[data-ws-print-a]"),b=t.querySelector("[data-ws-out]");!i||!b||(i.addEventListener("click",()=>{const w=Number(t.querySelector("[data-ws-count]").value),S=[...t.querySelectorAll("[data-ws-topic]")].filter(T=>T.checked).map(T=>T.getAttribute("data-ws-topic")),z=Y.filter(T=>{const N=T.topic;return!!(S.includes(N)||N==="convex"&&(S.includes("convex")||S.includes("concave")))}),P=te(z).slice(0,Math.min(w,z.length||1));L=P.length?P:te(Y).slice(0,Math.min(w,Y.length)),R=!1,v(b)}),l.addEventListener("click",()=>{R=!1,v(b),window.print()}),x.addEventListener("click",()=>{R=!0,v(b),window.print()}))}function v(i){const l=K();if(!L.length){i.innerHTML=`<p class="lead">${u("worksheets.empty")}</p>`;return}i.innerHTML=L.map((x,b)=>{const w=x[l]||x.en,S=["A","B","C","D"],z=w.choices.map((T,N)=>`<li><strong>${S[N]}.</strong> ${T}</li>`).join(""),P=R?`<p><em>${w.exp}</em></p><p><strong>Answer:</strong> ${S[w.a]}</p>`:"";return`<div class="q"><h4>Q${b+1}</h4><p>${w.q}</p><ol style="margin:0;padding-left:18px">${z}</ol>${P}</div>`}).join("")}function H(){return`
      <section class="panel">
        <h2>${u("flashcards.title")}</h2>
        <p class="lead">${u("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${u("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${u("flashcards.all")}</option>
            <option value="reflection">${u("topic.reflection")}</option>
            <option value="refraction">${u("topic.refraction")}</option>
            <option value="tir">${u("topic.tir")}</option>
            <option value="convex">${u("topic.convex")}</option>
            <option value="concave">${u("topic.concave")}</option>
            <option value="em">${u("topic.em")}</option>
          </select>
        </div>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-flip-card>
            <div class="label">${u("flashcards.question")}</div>
            <div class="body" data-flash-front></div>
          </div>
          <div class="flash-toolbar no-print">
            <button class="btn" type="button" data-flash-prev>${u("flashcards.prev")}</button>
            <button class="btn primary" type="button" data-flash-flip>${u("flashcards.flip")}</button>
            <button class="btn" type="button" data-flash-next>${u("flashcards.next")}</button>
            <button class="btn" type="button" data-flash-shuf>${u("flashcards.shuffle")}</button>
          </div>
        </div>
      </section>`}function C(){let i=G.slice();return n==="all"?i:(n==="convex"||n==="concave"?i=i.filter(l=>l.topic==="convex"||l.topic==="concave"):i=i.filter(l=>l.topic===n),i.length?i:G)}function M(){const i=C();e=Math.max(0,Math.min(e,i.length-1));const l=i[e],x=K(),b=l[x]||l.en,w=t.querySelector("[data-flash-front]"),S=t.querySelector("[data-flip-card]");!w||!S||(h?(S.querySelector(".label").textContent=u("flashcards.answer"),w.textContent=b.a):(S.querySelector(".label").textContent=u("flashcards.question"),w.textContent=b.q))}function q(){const i=t.querySelector("[data-flash-deck]");i.value=n,i.addEventListener("change",()=>{n=i.value,e=0,h=!1,M()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{h=!h,M()}),t.querySelector("[data-flash-flip]").addEventListener("click",l=>{l.stopPropagation(),h=!h,M()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const l=C();e=(e-1+l.length)%l.length,h=!1,M()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const l=C();e=(e+1)%l.length,h=!1,M()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const l=C();e=Math.floor(Math.random()*l.length),h=!1,M()}),M()}function A(){const i=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${u("summary.title")}</h2>
        <p class="lead">${u("summary.intro")}</p>
        <div class="grid cols-2">
          ${i.map(l=>{const x=`./summary/${l.file}`;return`
            <div class="card">
              <h3>${u(l.key)}</h3>
              <img class="summary-thumb" alt="" src="${x}" />
              <p style="margin-top:10px"><a download href="${x}">${u("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}window.addEventListener("s3phy:lang",()=>$()),t.addEventListener("click",f),$()}const ne={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};ue();const ae="s3phy_splash_seen";function Te(){return"./images/uniplus-logo.png"}function Ee(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${Te()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${u("splash.start")}</button>
      </div>
    </div>
  `,t}function qe(t,a){const r=[...ne.en,...ne.zhHant],e=()=>{if(!t.parentElement)return;const n=document.createElement("div");n.className="splash-danmaku-item",n.textContent=r[Math.floor(Math.random()*r.length)];const h=Math.random()*85+5,L=Math.random()*.8+.9,R=Math.random()*12+10;n.style.top=`${h}%`,n.style.fontSize=`${L}rem`,n.style.animationDuration=`${R}s`,a.appendChild(n),n.addEventListener("animationend",()=>n.remove()),window.setTimeout(e,1500+Math.random()*1e3)};for(let n=0;n<4;n+=1)window.setTimeout(e,n*1e3)}function He(t){const a=t.querySelector("#splashLogoWrap"),r=t.querySelector("#splashDanmaku"),e=t.querySelector("#splashStartWrap");window.setTimeout(()=>a==null?void 0:a.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{r==null||r.classList.add("splash-danmaku--visible"),e==null||e.classList.add("splash-start-wrap--in"),r&&qe(t,r)},1600)}function oe(){const t=document.getElementById("app");t&&Le(t)}function ze(){let t=!1;try{t=sessionStorage.getItem(ae)==="1"}catch{}if(t){oe();return}const a=Ee();document.body.insertBefore(a,document.body.firstChild),He(a);const r=a.querySelector("#splashStart"),e=()=>{a.remove(),oe()};r.addEventListener("click",()=>{try{sessionStorage.setItem(ae,"1")}catch{}a.classList.add("splash--hide"),a.addEventListener("transitionend",e,{once:!0}),window.setTimeout(e,480)})}ze();
