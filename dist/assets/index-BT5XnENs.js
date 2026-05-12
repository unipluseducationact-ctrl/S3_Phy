(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const k of d.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&e(k)}).observe(document,{childList:!0,subtree:!0});function o(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function e(a){if(a.ep)return;a.ep=!0;const d=o(a);fetch(a.href,d)}})();const B={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"Light and waves — S3 focus","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.reflection.title":"Plane mirror — reflection","tools.reflection.angle":"Angle of incidence (deg)","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (Δθ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 × θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},le={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"光與波動 — 中三重點","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.tir":"全反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.reflection.title":"平面鏡 — 反射","tools.reflection.angle":"入射觔（度）","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},re="s3phy.lang",ie={en:B,"zh-Hant":le};let Z="en";function ce(){try{const t=localStorage.getItem(re);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function ue(){Z=ce()}function de(t){if(ie[t]){Z=t;try{localStorage.setItem(re,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function O(){return Z}function s(t){const n=ie[Z]||B;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:Object.prototype.hasOwnProperty.call(B,t)?B[t]:t}const U=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],G=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],Y=t=>t*180/Math.PI,V=t=>t*Math.PI/180;function fe(t,n,o){return Math.max(n,Math.min(o,t))}function se(t,n,o){const e=t/o*Math.sin(n);return e>1+1e-9||e<-1-1e-9?null:Math.asin(fe(e,-1,1))}function me(t,n){if(t<=n)return null;const o=n/t;return o>1?null:Math.asin(o)}function pe(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480" aria-label="${t("tools.reflection.title")}"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.reflection.angle")}</label>
        <input type="range" min="5" max="85" value="35" data-i />
        <input type="number" min="5" max="85" value="35" data-i-num />
      </div>
    </div>
  `;const o=n.querySelector("canvas"),e=o.getContext("2d"),a=n.querySelector("[data-i]"),d=n.querySelector("[data-i-num]");function k(S){const p=E(S?a.value:d.value);a.value=String(p),d.value=String(p),v(p)}function E(S){const p=Number(S);return Number.isNaN(p)?35:Math.max(5,Math.min(85,p))}a.addEventListener("input",()=>k(!0)),d.addEventListener("change",()=>k(!1));function v(S){const p=o.width,f=o.height;e.clearRect(0,0,p,f),e.fillStyle="#0b0f14",e.fillRect(0,0,p,f);const i=f*.55,l=p*.45,m=320;e.strokeStyle="#9aa8b8",e.lineWidth=3,e.beginPath(),e.moveTo(l,i-m/2),e.lineTo(l,i+m/2),e.stroke(),e.fillStyle="#cbd5e1",e.font="14px system-ui",e.fillText("Mirror",l+8,i-m/2+16);const c=V(S),h=220,w=l-h*Math.cos(c),P=i-h*Math.sin(c);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(w,P),e.lineTo(l,i),e.stroke();const z=l+h*Math.cos(c),N=i-h*Math.sin(c);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(l,i),e.lineTo(z,N),e.stroke(),e.setLineDash([6,6]),e.strokeStyle="#64748b",e.lineWidth=1,e.beginPath(),e.moveTo(l-120,i),e.lineTo(l+120,i),e.stroke(),e.setLineDash([]),e.fillStyle="#e8eef5",e.font="16px system-ui",e.fillText(`i = r = ${S.toFixed(0)} deg`,16,28)}return k(!0),n}const Q="s3phy-rotating-mirror-lab-css",he=`
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
`;function ge(){if(document.getElementById(Q))return;const t=document.createElement("style");t.id=Q,t.textContent=he,document.head.appendChild(t)}function be(t){ge();const n=document.createElement("div");n.className="rml",n.innerHTML=`
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
  `;const o=n.querySelector(".rml-canvas"),e=o.getContext("2d"),a=n.querySelector("[data-rml-rot]"),d=n.querySelector("[data-rml-inc]"),k=n.querySelector('[data-rml-disp="rot"]'),E=n.querySelector('[data-rml-disp="inc"]'),v=n.querySelector('[data-rml-val="i"]'),S=n.querySelector('[data-rml-val="r"]'),p=n.querySelector('[data-rml-val="shift"]'),f=350,i=380,l=300,m="#22d3ee",c="bold 17px system-ui, sans-serif";let h=0,w=-140,P=!0,z=!0,N=!0,R=!0;function T(g){return g*Math.PI/180}function F(g,b,x,L,q,M=2,H=!1){e.beginPath(),e.lineWidth=M,e.strokeStyle=q,e.setLineDash(H?[6,6]:[]);const A=g+Math.cos(T(x))*L,C=b+Math.sin(T(x))*L;return e.moveTo(g,b),e.lineTo(A,C),e.stroke(),e.setLineDash([]),{x:A,y:C}}function _(g,b,x,L,q,M=14){const H=x-g,A=L-b,C=Math.hypot(H,A);if(C<1e-6)return;const D=H/C,I=A/C,W=x-D*M,$=L-I*M,j=.45*M;e.beginPath(),e.fillStyle=q,e.moveTo(x,L),e.lineTo(W-I*j,$+D*j),e.lineTo(W+I*j,$-D*j),e.closePath(),e.fill()}function r(g,b,x,L,q,M=25){e.beginPath(),e.strokeStyle=L,e.lineWidth=2;const H=Math.min(g,b),A=Math.max(g,b);if(e.arc(f,i,x,T(H),T(A),!1),e.stroke(),q){const C=(H+A)/2,D=f+Math.cos(T(C))*(x+M),I=i+Math.sin(T(C))*(x+M);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle=L,e.fillText(q,D,I),e.restore()}}function u(g,b,x,L,q){e.clearRect(0,0,o.width,o.height),e.beginPath(),e.setLineDash([10,6]),e.strokeStyle="rgba(255, 204, 0, 0.45)",e.lineWidth=3,e.lineCap="round",e.moveTo(f-200,i),e.lineTo(f+200,i),e.stroke(),e.setLineDash([]),e.lineCap="butt";const M=f+Math.cos(T(g))*l,H=i+Math.sin(T(g))*l;e.beginPath(),e.lineWidth=3,e.strokeStyle="#fff",e.moveTo(M,H),e.lineTo(f,i),e.stroke();const A=(M+f)*.5,C=(H+i)*.5,D=Math.hypot(f-M,i-H)||1,I=(f-M)/D,W=(i-H)/D;if(_(A-I*28,C-W*28,A,C,"#fff",16),e.save(),e.font=c,e.textAlign="center",e.textBaseline="bottom",e.fillStyle="#fff",e.fillText(t("tools.rotatingMirror.canvas.incident"),M,H-12),e.restore(),P){const $=F(f,i,-90,l-60,"#00e676",1,!0);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="left",e.textBaseline="bottom",e.fillStyle="#00e676",e.fillText(t("tools.rotatingMirror.canvas.n"),$.x+6,$.y-4),e.restore()}if(z){const $=F(f,i,L,l,"#00e676",2,!1);_(f,i,$.x,$.y,"#00e676",16),e.save(),e.font=c,e.textAlign="center",e.textBaseline="bottom",e.fillStyle="#00e676",e.fillText(t("tools.rotatingMirror.canvas.originalReflected"),$.x,$.y-14),e.restore()}e.save(),e.translate(f,i),e.rotate(T(h)),e.beginPath(),e.lineWidth=6,e.strokeStyle="#ffcc00",e.lineCap="round",e.moveTo(-200,0),e.lineTo(200,0),e.stroke(),e.beginPath(),e.lineWidth=1,e.strokeStyle="#666";for(let $=-190;$<200;$+=15)e.moveTo($,0),e.lineTo($-5,8);if(e.stroke(),e.restore(),N){const $=F(f,i,b,l-40,m,2,!0);e.save(),e.font="bold 14px system-ui, sans-serif",e.textAlign="left",e.textBaseline="bottom",e.fillStyle=m,e.fillText(t("tools.rotatingMirror.canvas.nPrime"),$.x+6,$.y-4),e.restore()}if(R){const $=F(f,i,x,l,m,4);_(f,i,$.x,$.y,m,16),Math.abs(h)>.5&&(e.save(),e.font=c,e.textAlign="center",e.textBaseline="bottom",e.fillStyle=m,e.fillText(t("tools.rotatingMirror.canvas.newReflected"),$.x,$.y-14),e.restore())}if(N&&r(g,b,100,"#ffcc00",`i=${q.toFixed(0)}°`,25),N&&R&&r(b,x,100,m,`r=${q.toFixed(0)}°`,25),P&&N&&Math.abs(h)>.5&&r(-90,b,50,"#ffcc00",`θ=${Math.abs(h)}°`,20),z&&R&&Math.abs(h)>.5){const $=x-L;r(L,x,260,"#ff5252",`${t("tools.rotatingMirror.canvas.shift")}=${$.toFixed(0)}°`,40)}}function y(){h=parseFloat(a.value),w=parseFloat(d.value);const g=h>0?"+":"";k.textContent=`${g}${h}°`,E.textContent=`${w}°`;const b=-90,x=Math.abs(w-b),L=b+x,q=-90+h,M=Math.abs(w-q),H=q+M,A=H-L;v.textContent=`${M.toFixed(1)}°`,S.textContent=`${M.toFixed(1)}°`;const C=A>0?"+":"";p.textContent=`${C}${A.toFixed(1)}°`,u(w,q,H,L,M)}return n.querySelectorAll("[data-rml-toggle]").forEach(g=>{g.addEventListener("click",()=>{const b=g.getAttribute("data-rml-toggle");b==="orig-norm"&&(P=!P),b==="orig-ray"&&(z=!z),b==="new-norm"&&(N=!N),b==="new-ray"&&(R=!R),g.classList.toggle("active"),y()})}),n.querySelector("[data-rml-reset]").addEventListener("click",()=>{a.value="0",y()}),a.addEventListener("input",y),d.addEventListener("input",y),y(),n}function ve(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const o=n.querySelector("canvas"),e=o.getContext("2d"),a=(v,S,p,f,i)=>{const l=n.querySelector(v),m=n.querySelector(S),c=h=>{let w=Number(h?l.value:m.value);Number.isNaN(w)&&(w=p),w=Math.max(p,Math.min(f,w)),l.value=String(w),m.value=String(w),i()};return l.addEventListener("input",()=>c(!0)),m.addEventListener("change",()=>c(!1)),()=>Number(n.querySelector(v).value)},d=a("[data-n1]","[data-n1n]",1,2.5,E),k=a("[data-n2]","[data-n2n]",1,2.5,E);a("[data-ang]","[data-angn]",5,80,E);function E(){const v=d(),S=k(),p=Number(n.querySelector("[data-ang]").value),f=V(p),i=o.width,l=o.height;e.clearRect(0,0,i,l),e.fillStyle="#0b0f14",e.fillRect(0,0,i,l);const m=l*.55,c=i*.48;e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(c,40),e.lineTo(c,l-40),e.stroke(),e.fillStyle="#1e293b",e.fillRect(0,40,c,l-80),e.fillStyle="#0f172a",e.fillRect(c,40,i-c,l-80),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`n1 = ${v.toFixed(2)}`,16,64),e.fillText(`n2 = ${S.toFixed(2)}`,c+12,64);const h=260,w=c-h*Math.cos(f),P=m-h*Math.sin(f);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(w,P),e.lineTo(c,m),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(c-140,m),e.lineTo(c+220,m),e.stroke(),e.setLineDash([]);const z=se(v,f,S);if(z==null)e.fillStyle="#f87171",e.fillText("TIR from this side is not physical for n1 <= n2 here",16,28);else{const R=c+280*Math.cos(z),T=m-280*Math.sin(z);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(c,m),e.lineTo(R,T),e.stroke(),e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${p.toFixed(1)} deg, r = ${Y(z).toFixed(1)} deg`,16,28)}}return E(),n}function ye(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const o=n.querySelector("canvas"),e=o.getContext("2d"),a=n.querySelector("[data-status]"),d=(v,S,p,f)=>{const i=n.querySelector(v),l=n.querySelector(S),m=c=>{let h=Number(c?i.value:l.value);Number.isNaN(h)&&(h=p),h=Math.max(p,Math.min(f,h)),i.value=String(h),l.value=String(h),E()};return i.addEventListener("input",()=>m(!0)),l.addEventListener("change",()=>m(!1)),()=>Number(n.querySelector(v).value)},k=d("[data-n1]","[data-n1n]",1.1,2.5);d("[data-n2]","[data-n2n]",1,1.49),d("[data-ang]","[data-angn]",5,89);function E(){const v=k(),S=Number(n.querySelector("[data-n2]").value),p=Number(n.querySelector("[data-ang]").value),f=V(p),i=o.width,l=o.height;e.clearRect(0,0,i,l),e.fillStyle="#0b0f14",e.fillRect(0,0,i,l);const m=l*.55,c=i*.48;e.fillStyle="#1e293b",e.fillRect(0,40,c,l-80),e.fillStyle="#0f172a",e.fillRect(c,40,i-c,l-80),e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(c,40),e.lineTo(c,l-40),e.stroke(),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`dense n = ${v.toFixed(2)} (left)`,16,64),e.fillText(`rare n = ${S.toFixed(2)} (right)`,c+12,64);const h=me(v,S),w=h==null?null:Y(h),P=260,z=c-P*Math.cos(f),N=m-P*Math.sin(f);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(z,N),e.lineTo(c,m),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(c-160,m),e.lineTo(c+220,m),e.stroke(),e.setLineDash([]);const R=se(v,f,S);if(R==null){const F=c-260*Math.cos(f),_=m-260*Math.sin(f);e.strokeStyle="#a78bfa",e.lineWidth=2,e.beginPath(),e.moveTo(c,m),e.lineTo(F,_),e.stroke(),a.textContent=`${t("tools.tir.critical")}: ${w==null?"—":`${w.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.full")}`}else{const F=c+300*Math.cos(R),_=m-300*Math.sin(R);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(c,m),e.lineTo(F,_),e.stroke(),a.textContent=`${t("tools.tir.critical")}: ${w==null?"—":`${w.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.partial")} 뿯½ r = ${Y(R).toFixed(1)} deg`}e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${p.toFixed(1)} deg (in dense medium)`,16,28)}return E(),n}function J(t,n={}){const o=n.defaultKind==="concave"?"concave":"convex",e=o==="concave"?"tools.concaveLens.title":"tools.convexLens.title",a=document.createElement("div");a.className="tool-lens-simulator";const d=document.createElement("iframe"),k="./",E=k.endsWith("/")?k:`${k}/`;return d.src=`${E}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(o)}`,d.title=t(e),d.setAttribute("loading","lazy"),d.referrerPolicy="strict-origin-when-cross-origin",a.appendChild(d),a}const ee=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function X(t){return Math.log(t)/Math.LN10}function xe(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${t("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const o=n.querySelector("canvas"),e=n.querySelector("[data-detail]"),a=o.getContext("2d"),d=X(1e4),k=X(1e22);function E(p){const f={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},i=O()==="zh-Hant",l=f[p];return l?i?l.zh:l.en:p}function v(p){const f={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},i={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return O()==="zh-Hant"?i[p]:f[p]}function S(){const p=o.width,f=o.height;a.clearRect(0,0,p,f),a.fillStyle="#0b0f14",a.fillRect(0,0,p,f);const i=24,l=f*.45,m=36;ee.forEach((c,h)=>{const w=i+(X(c.minHz)-d)/(k-d)*(p-i*2),P=i+(X(c.maxHz)-d)/(k-d)*(p-i*2);a.fillStyle=c.color,a.fillRect(w,l,Math.max(6,P-w),m)}),a.fillStyle="#cbd5e1",a.font="13px system-ui",a.fillText("10^4 Hz",i,l+m+26),a.fillText("10^22 Hz",p-i-60,l+m+26)}return o.addEventListener("click",p=>{const f=o.getBoundingClientRect(),i=(p.clientX-f.left)/f.width*o.width,l=24,m=(i-l)/(o.width-l*2),c=10**(d+m*(k-d)),h=ee.find(w=>c>=w.minHz&&c<=w.maxHz);h&&(e.innerHTML=`<h3 style="margin:0 0 6px">${E(h.id)}</h3><p style="margin:0;color:#9aa8b8">${v(h.id)}</p>`)}),S(),n}const we=["topics","notes","tools","worksheets","flashcards","summary"],ke=["reflection","rotatingMirror","refraction","tir","convexLens","concaveLens","em"],Se={reflection:t=>pe(t),rotatingMirror:t=>be(t),refraction:t=>ve(t),tir:t=>ye(t),convexLens:t=>J(t,{defaultKind:"convex"}),concaveLens:t=>J(t,{defaultKind:"concave"}),em:t=>xe(t)};function Me(t){return s({reflection:"tools.reflection.title",rotatingMirror:"tools.rotatingMirror.title",refraction:"tools.refraction.title",tir:"tools.tir.title",convexLens:"tools.convexLens.title",concaveLens:"tools.concaveLens.title",em:"tools.em.title"}[t]||t)}function K(){return O()==="zh-Hant"?"zhHant":"en"}async function $e(t){const n=`./notes/${t}`;try{return(await fetch(n,{method:"HEAD"})).ok}catch{return!1}}function te(t){const n=t.slice();for(let o=n.length-1;o>0;o-=1){const e=Math.floor(Math.random()*(o+1));[n[o],n[e]]=[n[e],n[o]]}return n}function Le(t){let n="topics",o="reflection",e=0,a="all",d=!1,k=[],E=!1;const v={};function S(){t.innerHTML=`
      <header class="site-header">
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
      <nav class="main-nav" data-nav></nav>
      <main data-main></main>
      <footer class="site-footer no-print">${s("footer.conventions")}</footer>
    `,v.lang=t.querySelector("[data-lang]"),v.nav=t.querySelector("[data-nav]"),v.main=t.querySelector("[data-main]"),v.lang.innerHTML=`
      <button type="button" data-set-lang="en" class="${O()==="en"?"active":""}">${s("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${O()==="zh-Hant"?"active":""}">${s("lang.zhHant")}</button>
    `,v.lang.querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{de(r.getAttribute("data-set-lang")),S()})}),v.nav.innerHTML=we.map(r=>`<button type="button" class="${n===r?"active":""}" data-sec="${r}">${s({topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"}[r])}</button>`).join(""),v.nav.querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{n=r.getAttribute("data-sec"),S()})}),n==="topics"?v.main.innerHTML=p():n==="notes"?v.main.innerHTML=i():n==="tools"?v.main.innerHTML=m():n==="worksheets"?v.main.innerHTML=w():n==="flashcards"?v.main.innerHTML=N():n==="summary"&&(v.main.innerHTML=_()),n==="notes"&&l(),n==="tools"&&c(),n==="worksheets"&&P(),n==="flashcards"&&F()}function p(){const r=[["reflection","topic.reflection"],["rotatingMirror","topic.rotatingMirror"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${s("topics.title")}</h2>
        <p class="lead">${s("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${r.map(([u,y])=>{const g=u==="convex"?"convexLens":u==="concave"?"concaveLens":u==="em"?"em":u;return`
            <div class="card">
              <h3>${s(y)}</h3>
              <p>${u==="convex"||u==="concave"?s("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${g}">${s("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function f(r){const u=r.target.closest("[data-go-tool]");u&&(n="tools",o=u.getAttribute("data-go-tool"),S())}function i(){const r=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${s("notes.title")}</h2>
        <p class="lead">${s("notes.intro")}</p>
        <p class="lead">${s("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${r.map(u=>{const y=s(`notes.card.${u.key}`);return`
            <div class="card" data-note-card="${u.key}">
              <h3>${y}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function l(){const r=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],u=K();for(const y of r){const g=t.querySelector(`[data-note-card="${y.key}"]`);if(!g)continue;const b=g.querySelector("[data-note-body]"),x=u==="zhHant"?y.fileZh:y.fileEn,L=await $e(x),q=`./notes/${x}`;L?b.innerHTML=`
          <iframe class="notes-grid" title="${s(`notes.card.${y.key}`)}" src="${q}"></iframe>
          <p style="margin-top:8px"><a href="${q}" target="_blank" rel="noopener">${s("notes.openPdf")}</a></p>`:b.innerHTML=`<p class="lead">${s("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function m(){return`
      <section class="panel">
        <h2>${s("tools.title")}</h2>
        <p class="lead">${s("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${ke.map(r=>`<button type="button" data-tool="${r}" class="${o===r?"active":""}">${Me(r)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function c(){const r=t.querySelector("[data-tool-list]"),u=t.querySelector("[data-tool-stage]");!r||!u||(r.querySelectorAll("button").forEach(y=>{y.addEventListener("click",()=>{o=y.getAttribute("data-tool"),r.querySelectorAll("button").forEach(g=>g.classList.toggle("active",g.getAttribute("data-tool")===o)),h(u)})}),h(u))}function h(r){r.innerHTML="";const u=Se[o];if(!u)return;const y=u(s);r.appendChild(y)}function w(){const r=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
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
          ${r.map(([u,y])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${u}" checked />
            <span>${s(y)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${s("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${s("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${s("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${s("worksheets.empty")}</p></div>
      </section>`}function P(){const r=t.querySelector("[data-ws-gen]"),u=t.querySelector("[data-ws-print-p]"),y=t.querySelector("[data-ws-print-a]"),g=t.querySelector("[data-ws-out]");!r||!g||(r.addEventListener("click",()=>{const b=Number(t.querySelector("[data-ws-count]").value),x=[...t.querySelectorAll("[data-ws-topic]")].filter(M=>M.checked).map(M=>M.getAttribute("data-ws-topic")),L=U.filter(M=>{const H=M.topic;return!!(x.includes(H)||H==="convex"&&(x.includes("convex")||x.includes("concave")))}),q=te(L).slice(0,Math.min(b,L.length||1));k=q.length?q:te(U).slice(0,Math.min(b,U.length)),E=!1,z(g)}),u.addEventListener("click",()=>{E=!1,z(g),window.print()}),y.addEventListener("click",()=>{E=!0,z(g),window.print()}))}function z(r){const u=K();if(!k.length){r.innerHTML=`<p class="lead">${s("worksheets.empty")}</p>`;return}r.innerHTML=k.map((y,g)=>{const b=y[u]||y.en,x=["A","B","C","D"],L=b.choices.map((M,H)=>`<li><strong>${x[H]}.</strong> ${M}</li>`).join(""),q=E?`<p><em>${b.exp}</em></p><p><strong>Answer:</strong> ${x[b.a]}</p>`:"";return`<div class="q"><h4>Q${g+1}</h4><p>${b.q}</p><ol style="margin:0;padding-left:18px">${L}</ol>${q}</div>`}).join("")}function N(){return`
      <section class="panel">
        <h2>${s("flashcards.title")}</h2>
        <p class="lead">${s("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${s("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${s("flashcards.all")}</option>
            <option value="reflection">${s("topic.reflection")}</option>
            <option value="refraction">${s("topic.refraction")}</option>
            <option value="tir">${s("topic.tir")}</option>
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
      </section>`}function R(){let r=G.slice();return a==="all"?r:(a==="convex"||a==="concave"?r=r.filter(u=>u.topic==="convex"||u.topic==="concave"):r=r.filter(u=>u.topic===a),r.length?r:G)}function T(){const r=R();e=Math.max(0,Math.min(e,r.length-1));const u=r[e],y=K(),g=u[y]||u.en,b=t.querySelector("[data-flash-front]"),x=t.querySelector("[data-flip-card]");!b||!x||(d?(x.querySelector(".label").textContent=s("flashcards.answer"),b.textContent=g.a):(x.querySelector(".label").textContent=s("flashcards.question"),b.textContent=g.q))}function F(){const r=t.querySelector("[data-flash-deck]");r.value=a,r.addEventListener("change",()=>{a=r.value,e=0,d=!1,T()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{d=!d,T()}),t.querySelector("[data-flash-flip]").addEventListener("click",u=>{u.stopPropagation(),d=!d,T()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const u=R();e=(e-1+u.length)%u.length,d=!1,T()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const u=R();e=(e+1)%u.length,d=!1,T()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const u=R();e=Math.floor(Math.random()*u.length),d=!1,T()}),T()}function _(){const r=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${s("summary.title")}</h2>
        <p class="lead">${s("summary.intro")}</p>
        <div class="grid cols-2">
          ${r.map(u=>{const y=`./summary/${u.file}`;return`
            <div class="card">
              <h3>${s(u.key)}</h3>
              <img class="summary-thumb" alt="" src="${y}" />
              <p style="margin-top:10px"><a download href="${y}">${s("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}window.addEventListener("s3phy:lang",()=>S()),t.addEventListener("click",f),S()}const ne={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};ue();const ae="s3phy_splash_seen";function Ee(){return"./images/uniplus-logo.png"}function Te(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${Ee()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${s("splash.start")}</button>
      </div>
    </div>
  `,t}function qe(t,n){const o=[...ne.en,...ne.zhHant],e=()=>{if(!t.parentElement)return;const a=document.createElement("div");a.className="splash-danmaku-item",a.textContent=o[Math.floor(Math.random()*o.length)];const d=Math.random()*85+5,k=Math.random()*.8+.9,E=Math.random()*12+10;a.style.top=`${d}%`,a.style.fontSize=`${k}rem`,a.style.animationDuration=`${E}s`,n.appendChild(a),a.addEventListener("animationend",()=>a.remove()),window.setTimeout(e,1500+Math.random()*1e3)};for(let a=0;a<4;a+=1)window.setTimeout(e,a*1e3)}function He(t){const n=t.querySelector("#splashLogoWrap"),o=t.querySelector("#splashDanmaku"),e=t.querySelector("#splashStartWrap");window.setTimeout(()=>n==null?void 0:n.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{o==null||o.classList.add("splash-danmaku--visible"),e==null||e.classList.add("splash-start-wrap--in"),o&&qe(t,o)},1600)}function oe(){const t=document.getElementById("app");t&&Le(t)}function ze(){let t=!1;try{t=sessionStorage.getItem(ae)==="1"}catch{}if(t){oe();return}const n=Te();document.body.insertBefore(n,document.body.firstChild),He(n);const o=n.querySelector("#splashStart"),e=()=>{n.remove(),oe()};o.addEventListener("click",()=>{try{sessionStorage.setItem(ae,"1")}catch{}n.classList.add("splash--hide"),n.addEventListener("transitionend",e,{once:!0}),window.setTimeout(e,480)})}ze();
