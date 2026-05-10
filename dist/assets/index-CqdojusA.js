(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const f of n)if(f.type==="childList")for(const S of f.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&e(S)}).observe(document,{childList:!0,subtree:!0});function o(n){const f={};return n.integrity&&(f.integrity=n.integrity),n.referrerPolicy&&(f.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?f.credentials="include":n.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function e(n){if(n.ep)return;n.ep=!0;const f=o(n);fetch(n.href,f)}})();const N={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"Light and waves — S3 focus","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.reflection.title":"Plane mirror — reflection","tools.reflection.angle":"Angle of incidence (deg)","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},ee={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"光與波動 — 中三重點","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.refraction":"折射","topic.tir":"全反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.reflection.title":"平面鏡 — 反射","tools.reflection.angle":"入射觔（度）","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},G="s3phy.lang",Q={en:N,"zh-Hant":ee};let _="en";function te(){try{const t=localStorage.getItem(G);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function ne(){_=te()}function ae(t){if(Q[t]){_=t;try{localStorage.setItem(G,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function R(){return _}function l(t){const a=Q[_]||N;return Object.prototype.hasOwnProperty.call(a,t)?a[t]:Object.prototype.hasOwnProperty.call(N,t)?N[t]:t}const O=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],j=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],W=t=>t*180/Math.PI,I=t=>t*Math.PI/180;function oe(t,a,o){return Math.max(a,Math.min(o,t))}function J(t,a,o){const e=t/o*Math.sin(a);return e>1+1e-9||e<-1-1e-9?null:Math.asin(oe(e,-1,1))}function se(t,a){if(t<=a)return null;const o=a/t;return o>1?null:Math.asin(o)}function ie(t){const a=document.createElement("div");a.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480" aria-label="${t("tools.reflection.title")}"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.reflection.angle")}</label>
        <input type="range" min="5" max="85" value="35" data-i />
        <input type="number" min="5" max="85" value="35" data-i-num />
      </div>
    </div>
  `;const o=a.querySelector("canvas"),e=o.getContext("2d"),n=a.querySelector("[data-i]"),f=a.querySelector("[data-i-num]");function S(w){const d=$(w?n.value:f.value);n.value=String(d),f.value=String(d),g(d)}function $(w){const d=Number(w);return Number.isNaN(d)?35:Math.max(5,Math.min(85,d))}n.addEventListener("input",()=>S(!0)),f.addEventListener("change",()=>S(!1));function g(w){const d=o.width,v=o.height;e.clearRect(0,0,d,v),e.fillStyle="#0b0f14",e.fillRect(0,0,d,v);const s=v*.55,r=d*.45,h=320;e.strokeStyle="#9aa8b8",e.lineWidth=3,e.beginPath(),e.moveTo(r,s-h/2),e.lineTo(r,s+h/2),e.stroke(),e.fillStyle="#cbd5e1",e.font="14px system-ui",e.fillText("Mirror",r+8,s-h/2+16);const u=I(w),p=220,y=r-p*Math.cos(u),b=s-p*Math.sin(u);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(y,b),e.lineTo(r,s),e.stroke();const m=r+p*Math.cos(u),E=s-p*Math.sin(u);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(r,s),e.lineTo(m,E),e.stroke(),e.setLineDash([6,6]),e.strokeStyle="#64748b",e.lineWidth=1,e.beginPath(),e.moveTo(r-120,s),e.lineTo(r+120,s),e.stroke(),e.setLineDash([]),e.fillStyle="#e8eef5",e.font="16px system-ui",e.fillText(`i = r = ${w.toFixed(0)} deg`,16,28)}return S(!0),a}function ce(t){const a=document.createElement("div");a.innerHTML=`
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
  `;const o=a.querySelector("canvas"),e=o.getContext("2d"),n=(g,w,d,v,s)=>{const r=a.querySelector(g),h=a.querySelector(w),u=p=>{let y=Number(p?r.value:h.value);Number.isNaN(y)&&(y=d),y=Math.max(d,Math.min(v,y)),r.value=String(y),h.value=String(y),s()};return r.addEventListener("input",()=>u(!0)),h.addEventListener("change",()=>u(!1)),()=>Number(a.querySelector(g).value)},f=n("[data-n1]","[data-n1n]",1,2.5,$),S=n("[data-n2]","[data-n2n]",1,2.5,$);n("[data-ang]","[data-angn]",5,80,$);function $(){const g=f(),w=S(),d=Number(a.querySelector("[data-ang]").value),v=I(d),s=o.width,r=o.height;e.clearRect(0,0,s,r),e.fillStyle="#0b0f14",e.fillRect(0,0,s,r);const h=r*.55,u=s*.48;e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(u,40),e.lineTo(u,r-40),e.stroke(),e.fillStyle="#1e293b",e.fillRect(0,40,u,r-80),e.fillStyle="#0f172a",e.fillRect(u,40,s-u,r-80),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`n1 = ${g.toFixed(2)}`,16,64),e.fillText(`n2 = ${w.toFixed(2)}`,u+12,64);const p=260,y=u-p*Math.cos(v),b=h-p*Math.sin(v);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(y,b),e.lineTo(u,h),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(u-140,h),e.lineTo(u+220,h),e.stroke(),e.setLineDash([]);const m=J(g,v,w);if(m==null)e.fillStyle="#f87171",e.fillText("TIR from this side is not physical for n1 <= n2 here",16,28);else{const M=u+280*Math.cos(m),k=h-280*Math.sin(m);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(u,h),e.lineTo(M,k),e.stroke(),e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${d.toFixed(1)} deg, r = ${W(m).toFixed(1)} deg`,16,28)}}return $(),a}function le(t){const a=document.createElement("div");a.innerHTML=`
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
  `;const o=a.querySelector("canvas"),e=o.getContext("2d"),n=a.querySelector("[data-status]"),f=(g,w,d,v)=>{const s=a.querySelector(g),r=a.querySelector(w),h=u=>{let p=Number(u?s.value:r.value);Number.isNaN(p)&&(p=d),p=Math.max(d,Math.min(v,p)),s.value=String(p),r.value=String(p),$()};return s.addEventListener("input",()=>h(!0)),r.addEventListener("change",()=>h(!1)),()=>Number(a.querySelector(g).value)},S=f("[data-n1]","[data-n1n]",1.1,2.5);f("[data-n2]","[data-n2n]",1,1.49),f("[data-ang]","[data-angn]",5,89);function $(){const g=S(),w=Number(a.querySelector("[data-n2]").value),d=Number(a.querySelector("[data-ang]").value),v=I(d),s=o.width,r=o.height;e.clearRect(0,0,s,r),e.fillStyle="#0b0f14",e.fillRect(0,0,s,r);const h=r*.55,u=s*.48;e.fillStyle="#1e293b",e.fillRect(0,40,u,r-80),e.fillStyle="#0f172a",e.fillRect(u,40,s-u,r-80),e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(u,40),e.lineTo(u,r-40),e.stroke(),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`dense n = ${g.toFixed(2)} (left)`,16,64),e.fillText(`rare n = ${w.toFixed(2)} (right)`,u+12,64);const p=se(g,w),y=p==null?null:W(p),b=260,m=u-b*Math.cos(v),E=h-b*Math.sin(v);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(m,E),e.lineTo(u,h),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(u-160,h),e.lineTo(u+220,h),e.stroke(),e.setLineDash([]);const M=J(g,v,w);if(M==null){const T=u-260*Math.cos(v),z=h-260*Math.sin(v);e.strokeStyle="#a78bfa",e.lineWidth=2,e.beginPath(),e.moveTo(u,h),e.lineTo(T,z),e.stroke(),n.textContent=`${t("tools.tir.critical")}: ${y==null?"—":`${y.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.full")}`}else{const T=u+300*Math.cos(M),z=h-300*Math.sin(M);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(u,h),e.lineTo(T,z),e.stroke(),n.textContent=`${t("tools.tir.critical")}: ${y==null?"—":`${y.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.partial")} 뿯½ r = ${W(M).toFixed(1)} deg`}e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${d.toFixed(1)} deg (in dense medium)`,16,28)}return $(),a}function Z(t,a={}){const o=document.createElement("div");o.innerHTML=`
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
  `;const e=o.querySelector("canvas"),n=e.getContext("2d"),f=o.querySelector("[data-lens]");(a.defaultKind==="convex"||a.defaultKind==="concave")&&(f.value=a.defaultKind);const S=(s,r,h,u)=>{const p=o.querySelector(s),y=o.querySelector(r),b=m=>{let E=Number(m?p.value:y.value);Number.isNaN(E)&&(E=h),E=Math.max(h,Math.min(u,E)),p.value=String(E),y.value=String(E),v()};return p.addEventListener("input",()=>b(!0)),y.addEventListener("change",()=>b(!1)),()=>Number(o.querySelector(s).value)},$=S("[data-u]","[data-un]",120,420),g=S("[data-f]","[data-fn]",60,200),w=S("[data-h]","[data-hn]",20,90);f.addEventListener("change",v);function d(s,r,h,u,p,y,b=2,m=[]){s.setLineDash(m),s.strokeStyle=y,s.lineWidth=b,s.beginPath(),s.moveTo(r,h),s.lineTo(u,p),s.stroke(),s.setLineDash([])}function v(){const s=f.value,r=$(),h=g(),u=w(),p=e.width,y=e.height;n.clearRect(0,0,p,y),n.fillStyle="#0b0f14",n.fillRect(0,0,p,y);const b=p*.52,m=y*.55,E=s==="convex"?h:-h;d(n,40,m,p-40,m,"#334155",1),n.strokeStyle="#94a3b8",n.lineWidth=4,n.beginPath(),s==="convex"?(n.moveTo(b,m-140),n.quadraticCurveTo(b-18,m,b,m+140),n.quadraticCurveTo(b+18,m,b,m-140)):(n.moveTo(b-18,m-140),n.quadraticCurveTo(b,m,b-18,m+140),n.moveTo(b+18,m-140),n.quadraticCurveTo(b,m,b+18,m+140)),n.stroke();const M=b-r,k=M,T=m-u;d(n,M,m,k,T,"#fbbf24",3),n.fillStyle="#fbbf24",n.beginPath(),n.moveTo(k,T),n.lineTo(k-6,T+12),n.lineTo(k+6,T+12),n.closePath(),n.fill();const z={x:b-Math.abs(E),y:m},i={x:b+Math.abs(E),y:m};n.fillStyle="#64748b";for(const c of[z,i])n.beginPath(),n.arc(c.x,c.y,4,0,Math.PI*2),n.fill();if(s==="convex"){const c=b,x=T;d(n,k,T,c,x,"#fbbf24",2,[4,4]),d(n,c,x,i.x+220,i.y,"#6ee7b7",2);const L=(T-m)/(k-b),q=p-60,H=m+L*(q-b);d(n,k,T,q,H,"#93c5fd",2),d(n,k,T,z.x,z.y,"#fca5a5",2,[3,6]),d(n,z.x,z.y,p-80,T,"#fca5a5",2)}else{const c=b,x=T;d(n,k,T,c,x,"#fbbf24",2,[4,4]),d(n,c,x,z.x-200,m-I(8)*40,"#6ee7b7",2),d(n,k,T,p-100,m+30,"#93c5fd",2,[3,5])}n.fillStyle="#e8eef5",n.font="14px system-ui",n.fillText(`u = ${r.toFixed(0)} px, |f| = ${h.toFixed(0)} px, lens = ${s}`,16,28)}return v(),o}const K=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function D(t){return Math.log(t)/Math.LN10}function re(t){const a=document.createElement("div");a.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${t("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const o=a.querySelector("canvas"),e=a.querySelector("[data-detail]"),n=o.getContext("2d"),f=D(1e4),S=D(1e22);function $(d){const v={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},s=R()==="zh-Hant",r=v[d];return r?s?r.zh:r.en:d}function g(d){const v={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},s={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return R()==="zh-Hant"?s[d]:v[d]}function w(){const d=o.width,v=o.height;n.clearRect(0,0,d,v),n.fillStyle="#0b0f14",n.fillRect(0,0,d,v);const s=24,r=v*.45,h=36;K.forEach((u,p)=>{const y=s+(D(u.minHz)-f)/(S-f)*(d-s*2),b=s+(D(u.maxHz)-f)/(S-f)*(d-s*2);n.fillStyle=u.color,n.fillRect(y,r,Math.max(6,b-y),h)}),n.fillStyle="#cbd5e1",n.font="13px system-ui",n.fillText("10^4 Hz",s,r+h+26),n.fillText("10^22 Hz",d-s-60,r+h+26)}return o.addEventListener("click",d=>{const v=o.getBoundingClientRect(),s=(d.clientX-v.left)/v.width*o.width,r=24,h=(s-r)/(o.width-r*2),u=10**(f+h*(S-f)),p=K.find(y=>u>=y.minHz&&u<=y.maxHz);p&&(e.innerHTML=`<h3 style="margin:0 0 6px">${$(p.id)}</h3><p style="margin:0;color:#9aa8b8">${g(p.id)}</p>`)}),w(),a}const ue=["topics","notes","tools","worksheets","flashcards","summary"],de=["reflection","refraction","tir","convexLens","concaveLens","em"],fe={reflection:t=>ie(t),refraction:t=>ce(t),tir:t=>le(t),convexLens:t=>Z(t,{defaultKind:"convex"}),concaveLens:t=>Z(t,{defaultKind:"concave"}),em:t=>re(t)};function he(t){return l({reflection:"tools.reflection.title",refraction:"tools.refraction.title",tir:"tools.tir.title",convexLens:"tools.convexLens.title",concaveLens:"tools.concaveLens.title",em:"tools.em.title"}[t]||t)}function X(){return R()==="zh-Hant"?"zhHant":"en"}async function pe(t){const a=`./notes/${t}`;try{return(await fetch(a,{method:"HEAD"})).ok}catch{return!1}}function U(t){const a=t.slice();for(let o=a.length-1;o>0;o-=1){const e=Math.floor(Math.random()*(o+1));[a[o],a[e]]=[a[e],a[o]]}return a}function me(t){let a="topics",o="reflection",e=0,n="all",f=!1,S=[],$=!1;const g={};function w(){t.innerHTML=`
      <header class="site-header">
        <div class="site-header__brand">
          <div class="brand-logo-wrap" aria-hidden="true">
            <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
          </div>
          <div class="brand-text-block">
            <h1 class="site-title">${l("app.title")}</h1>
            <p class="site-subtitle">${l("app.subtitle")}</p>
          </div>
        </div>
        <div class="site-header__actions">
          <div class="lang-toggle" data-lang></div>
        </div>
      </header>
      <nav class="main-nav" data-nav></nav>
      <main data-main></main>
      <footer class="site-footer no-print">${l("footer.conventions")}</footer>
    `,g.lang=t.querySelector("[data-lang]"),g.nav=t.querySelector("[data-nav]"),g.main=t.querySelector("[data-main]"),g.lang.innerHTML=`
      <button type="button" data-set-lang="en" class="${R()==="en"?"active":""}">${l("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${R()==="zh-Hant"?"active":""}">${l("lang.zhHant")}</button>
    `,g.lang.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{ae(i.getAttribute("data-set-lang")),w()})}),g.nav.innerHTML=ue.map(i=>`<button type="button" class="${a===i?"active":""}" data-sec="${i}">${l({topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"}[i])}</button>`).join(""),g.nav.querySelectorAll("button").forEach(i=>{i.addEventListener("click",()=>{a=i.getAttribute("data-sec"),w()})}),a==="topics"?g.main.innerHTML=d():a==="notes"?g.main.innerHTML=s():a==="tools"?g.main.innerHTML=h():a==="worksheets"?g.main.innerHTML=y():a==="flashcards"?g.main.innerHTML=E():a==="summary"&&(g.main.innerHTML=z()),a==="notes"&&r(),a==="tools"&&u(),a==="worksheets"&&b(),a==="flashcards"&&T()}function d(){const i=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${l("topics.title")}</h2>
        <p class="lead">${l("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${i.map(([c,x])=>{const L=c==="convex"?"convexLens":c==="concave"?"concaveLens":c==="em"?"em":c;return`
            <div class="card">
              <h3>${l(x)}</h3>
              <p>${c==="convex"||c==="concave"?l("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${L}">${l("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function v(i){const c=i.target.closest("[data-go-tool]");c&&(a="tools",o=c.getAttribute("data-go-tool"),w())}function s(){const i=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${l("notes.title")}</h2>
        <p class="lead">${l("notes.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${i.map(c=>{const x=l(`notes.card.${c.key}`);return`
            <div class="card" data-note-card="${c.key}">
              <h3>${x}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function r(){const i=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],c=X();for(const x of i){const L=t.querySelector(`[data-note-card="${x.key}"]`);if(!L)continue;const q=L.querySelector("[data-note-body]"),H=c==="zhHant"?x.fileZh:x.fileEn,F=await pe(H),P=`./notes/${H}`;F?q.innerHTML=`
          <iframe class="notes-grid" title="${l(`notes.card.${x.key}`)}" src="${P}"></iframe>
          <p style="margin-top:8px"><a href="${P}" target="_blank" rel="noopener">${l("notes.openPdf")}</a></p>`:q.innerHTML=`<p class="lead">${l("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function h(){return`
      <section class="panel">
        <h2>${l("tools.title")}</h2>
        <p class="lead">${l("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${de.map(i=>`<button type="button" data-tool="${i}" class="${o===i?"active":""}">${he(i)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function u(){const i=t.querySelector("[data-tool-list]"),c=t.querySelector("[data-tool-stage]");!i||!c||(i.querySelectorAll("button").forEach(x=>{x.addEventListener("click",()=>{o=x.getAttribute("data-tool"),i.querySelectorAll("button").forEach(L=>L.classList.toggle("active",L.getAttribute("data-tool")===o)),p(c)})}),p(c))}function p(i){i.innerHTML="";const c=fe[o];if(!c)return;const x=c(l);i.appendChild(x)}function y(){const i=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel">
        <h2>${l("worksheets.title")}</h2>
        <p class="lead">${l("worksheets.intro")}</p>
        <div class="controls">
          <div class="control">
            <label>${l("worksheets.count")}</label>
            <select data-ws-count>
              <option>5</option><option>10</option><option>15</option>
            </select>
          </div>
        </div>
        <p class="lead" style="margin-top:10px">${l("worksheets.topics")}</p>
        <div class="grid cols-2" data-ws-topics>
          ${i.map(([c,x])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${c}" checked />
            <span>${l(x)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${l("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${l("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${l("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${l("worksheets.empty")}</p></div>
      </section>`}function b(){const i=t.querySelector("[data-ws-gen]"),c=t.querySelector("[data-ws-print-p]"),x=t.querySelector("[data-ws-print-a]"),L=t.querySelector("[data-ws-out]");!i||!L||(i.addEventListener("click",()=>{const q=Number(t.querySelector("[data-ws-count]").value),H=[...t.querySelectorAll("[data-ws-topic]")].filter(A=>A.checked).map(A=>A.getAttribute("data-ws-topic")),F=O.filter(A=>{const C=A.topic;return!!(H.includes(C)||C==="convex"&&(H.includes("convex")||H.includes("concave")))}),P=U(F).slice(0,Math.min(q,F.length||1));S=P.length?P:U(O).slice(0,Math.min(q,O.length)),$=!1,m(L)}),c.addEventListener("click",()=>{$=!1,m(L),window.print()}),x.addEventListener("click",()=>{$=!0,m(L),window.print()}))}function m(i){const c=X();if(!S.length){i.innerHTML=`<p class="lead">${l("worksheets.empty")}</p>`;return}i.innerHTML=S.map((x,L)=>{const q=x[c]||x.en,H=["A","B","C","D"],F=q.choices.map((A,C)=>`<li><strong>${H[C]}.</strong> ${A}</li>`).join(""),P=$?`<p><em>${q.exp}</em></p><p><strong>Answer:</strong> ${H[q.a]}</p>`:"";return`<div class="q"><h4>Q${L+1}</h4><p>${q.q}</p><ol style="margin:0;padding-left:18px">${F}</ol>${P}</div>`}).join("")}function E(){return`
      <section class="panel">
        <h2>${l("flashcards.title")}</h2>
        <p class="lead">${l("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${l("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${l("flashcards.all")}</option>
            <option value="reflection">${l("topic.reflection")}</option>
            <option value="refraction">${l("topic.refraction")}</option>
            <option value="tir">${l("topic.tir")}</option>
            <option value="convex">${l("topic.convex")}</option>
            <option value="concave">${l("topic.concave")}</option>
            <option value="em">${l("topic.em")}</option>
          </select>
        </div>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-flip-card>
            <div class="label">${l("flashcards.question")}</div>
            <div class="body" data-flash-front></div>
          </div>
          <div class="flash-toolbar no-print">
            <button class="btn" type="button" data-flash-prev>${l("flashcards.prev")}</button>
            <button class="btn primary" type="button" data-flash-flip>${l("flashcards.flip")}</button>
            <button class="btn" type="button" data-flash-next>${l("flashcards.next")}</button>
            <button class="btn" type="button" data-flash-shuf>${l("flashcards.shuffle")}</button>
          </div>
        </div>
      </section>`}function M(){let i=j.slice();return n==="all"?i:(n==="convex"||n==="concave"?i=i.filter(c=>c.topic==="convex"||c.topic==="concave"):i=i.filter(c=>c.topic===n),i.length?i:j)}function k(){const i=M();e=Math.max(0,Math.min(e,i.length-1));const c=i[e],x=X(),L=c[x]||c.en,q=t.querySelector("[data-flash-front]"),H=t.querySelector("[data-flip-card]");!q||!H||(f?(H.querySelector(".label").textContent=l("flashcards.answer"),q.textContent=L.a):(H.querySelector(".label").textContent=l("flashcards.question"),q.textContent=L.q))}function T(){const i=t.querySelector("[data-flash-deck]");i.value=n,i.addEventListener("change",()=>{n=i.value,e=0,f=!1,k()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{f=!f,k()}),t.querySelector("[data-flash-flip]").addEventListener("click",c=>{c.stopPropagation(),f=!f,k()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const c=M();e=(e-1+c.length)%c.length,f=!1,k()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const c=M();e=(e+1)%c.length,f=!1,k()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const c=M();e=Math.floor(Math.random()*c.length),f=!1,k()}),k()}function z(){const i=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${l("summary.title")}</h2>
        <p class="lead">${l("summary.intro")}</p>
        <div class="grid cols-2">
          ${i.map(c=>{const x=`./summary/${c.file}`;return`
            <div class="card">
              <h3>${l(c.key)}</h3>
              <img class="summary-thumb" alt="" src="${x}" />
              <p style="margin-top:10px"><a download href="${x}">${l("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}window.addEventListener("s3phy:lang",()=>w()),t.addEventListener("click",v),w()}const V={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};ne();const Y="s3phy_splash_seen";function ve(){return"./images/uniplus-logo.png"}function be(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${ve()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${l("splash.start")}</button>
      </div>
    </div>
  `,t}function ye(t,a){const o=[...V.en,...V.zhHant],e=()=>{if(!t.parentElement)return;const n=document.createElement("div");n.className="splash-danmaku-item",n.textContent=o[Math.floor(Math.random()*o.length)];const f=Math.random()*85+5,S=Math.random()*.8+.9,$=Math.random()*12+10;n.style.top=`${f}%`,n.style.fontSize=`${S}rem`,n.style.animationDuration=`${$}s`,a.appendChild(n),n.addEventListener("animationend",()=>n.remove()),window.setTimeout(e,1500+Math.random()*1e3)};for(let n=0;n<4;n+=1)window.setTimeout(e,n*1e3)}function ge(t){const a=t.querySelector("#splashLogoWrap"),o=t.querySelector("#splashDanmaku"),e=t.querySelector("#splashStartWrap");window.setTimeout(()=>a==null?void 0:a.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{o==null||o.classList.add("splash-danmaku--visible"),e==null||e.classList.add("splash-start-wrap--in"),o&&ye(t,o)},1600)}function B(){const t=document.getElementById("app");t&&me(t)}function xe(){let t=!1;try{t=sessionStorage.getItem(Y)==="1"}catch{}if(t){B();return}const a=be();document.body.insertBefore(a,document.body.firstChild),ge(a);const o=a.querySelector("#splashStart"),e=()=>{a.remove(),B()};o.addEventListener("click",()=>{try{sessionStorage.setItem(Y,"1")}catch{}a.classList.add("splash--hide"),a.addEventListener("transitionend",e,{once:!0}),window.setTimeout(e,480)})}xe();
