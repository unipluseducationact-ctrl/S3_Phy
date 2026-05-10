(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))e(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const T of p.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&e(T)}).observe(document,{childList:!0,subtree:!0});function d(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function e(f){if(f.ep)return;f.ep=!0;const p=d(f);fetch(f.href,p)}})();const C={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"Light and waves — S3 focus","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.lenses":"Thin lenses","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.reflection.title":"Plane mirror — reflection","tools.reflection.angle":"Angle of incidence (deg)","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.lens.title":"Thin lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},B={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"光與波動 — 中三重點","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.refraction":"折射","topic.tir":"全反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.lenses":"薄透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.reflection.title":"平面鏡 — 反射","tools.reflection.angle":"入射觔（度）","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.lens.title":"薄透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},U="s3phy.lang",G={en:C,"zh-Hant":B};let _="en";function V(){try{const t=localStorage.getItem(U);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function Q(){_=V()}function J(t){if(G[t]){_=t;try{localStorage.setItem(U,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function N(){return _}function l(t){const n=G[_]||C;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:Object.prototype.hasOwnProperty.call(C,t)?C[t]:t}const I=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],W=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],j=t=>t*180/Math.PI,O=t=>t*Math.PI/180;function ee(t,n,d){return Math.max(n,Math.min(d,t))}function K(t,n,d){const e=t/d*Math.sin(n);return e>1+1e-9||e<-1-1e-9?null:Math.asin(ee(e,-1,1))}function te(t,n){if(t<=n)return null;const d=n/t;return d>1?null:Math.asin(d)}function ne(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480" aria-label="${t("tools.reflection.title")}"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.reflection.angle")}</label>
        <input type="range" min="5" max="85" value="35" data-i />
        <input type="number" min="5" max="85" value="35" data-i-num />
      </div>
    </div>
  `;const d=n.querySelector("canvas"),e=d.getContext("2d"),f=n.querySelector("[data-i]"),p=n.querySelector("[data-i-num]");function T(b){const h=q(b?f.value:p.value);f.value=String(h),p.value=String(h),g(h)}function q(b){const h=Number(b);return Number.isNaN(h)?35:Math.max(5,Math.min(85,h))}f.addEventListener("input",()=>T(!0)),p.addEventListener("change",()=>T(!1));function g(b){const h=d.width,c=d.height;e.clearRect(0,0,h,c),e.fillStyle="#0b0f14",e.fillRect(0,0,h,c);const r=c*.55,i=h*.45,m=320;e.strokeStyle="#9aa8b8",e.lineWidth=3,e.beginPath(),e.moveTo(i,r-m/2),e.lineTo(i,r+m/2),e.stroke(),e.fillStyle="#cbd5e1",e.font="14px system-ui",e.fillText("Mirror",i+8,r-m/2+16);const o=O(b),v=220,u=i-v*Math.cos(o),y=r-v*Math.sin(o);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(u,y),e.lineTo(i,r),e.stroke();const $=i+v*Math.cos(o),M=r-v*Math.sin(o);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(i,r),e.lineTo($,M),e.stroke(),e.setLineDash([6,6]),e.strokeStyle="#64748b",e.lineWidth=1,e.beginPath(),e.moveTo(i-120,r),e.lineTo(i+120,r),e.stroke(),e.setLineDash([]),e.fillStyle="#e8eef5",e.font="16px system-ui",e.fillText(`i = r = ${b.toFixed(0)} deg`,16,28)}return T(!0),n}function ae(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const d=n.querySelector("canvas"),e=d.getContext("2d"),f=(g,b,h,c,r)=>{const i=n.querySelector(g),m=n.querySelector(b),o=v=>{let u=Number(v?i.value:m.value);Number.isNaN(u)&&(u=h),u=Math.max(h,Math.min(c,u)),i.value=String(u),m.value=String(u),r()};return i.addEventListener("input",()=>o(!0)),m.addEventListener("change",()=>o(!1)),()=>Number(n.querySelector(g).value)},p=f("[data-n1]","[data-n1n]",1,2.5,q),T=f("[data-n2]","[data-n2n]",1,2.5,q);f("[data-ang]","[data-angn]",5,80,q);function q(){const g=p(),b=T(),h=Number(n.querySelector("[data-ang]").value),c=O(h),r=d.width,i=d.height;e.clearRect(0,0,r,i),e.fillStyle="#0b0f14",e.fillRect(0,0,r,i);const m=i*.55,o=r*.48;e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(o,40),e.lineTo(o,i-40),e.stroke(),e.fillStyle="#1e293b",e.fillRect(0,40,o,i-80),e.fillStyle="#0f172a",e.fillRect(o,40,r-o,i-80),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`n1 = ${g.toFixed(2)}`,16,64),e.fillText(`n2 = ${b.toFixed(2)}`,o+12,64);const v=260,u=o-v*Math.cos(c),y=m-v*Math.sin(c);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(u,y),e.lineTo(o,m),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(o-140,m),e.lineTo(o+220,m),e.stroke(),e.setLineDash([]);const $=K(g,c,b);if($==null)e.fillStyle="#f87171",e.fillText("TIR from this side is not physical for n1 <= n2 here",16,28);else{const S=o+280*Math.cos($),w=m-280*Math.sin($);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(o,m),e.lineTo(S,w),e.stroke(),e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${h.toFixed(1)} deg, r = ${j($).toFixed(1)} deg`,16,28)}}return q(),n}function oe(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const d=n.querySelector("canvas"),e=d.getContext("2d"),f=n.querySelector("[data-status]"),p=(g,b,h,c)=>{const r=n.querySelector(g),i=n.querySelector(b),m=o=>{let v=Number(o?r.value:i.value);Number.isNaN(v)&&(v=h),v=Math.max(h,Math.min(c,v)),r.value=String(v),i.value=String(v),q()};return r.addEventListener("input",()=>m(!0)),i.addEventListener("change",()=>m(!1)),()=>Number(n.querySelector(g).value)},T=p("[data-n1]","[data-n1n]",1.1,2.5);p("[data-n2]","[data-n2n]",1,1.49),p("[data-ang]","[data-angn]",5,89);function q(){const g=T(),b=Number(n.querySelector("[data-n2]").value),h=Number(n.querySelector("[data-ang]").value),c=O(h),r=d.width,i=d.height;e.clearRect(0,0,r,i),e.fillStyle="#0b0f14",e.fillRect(0,0,r,i);const m=i*.55,o=r*.48;e.fillStyle="#1e293b",e.fillRect(0,40,o,i-80),e.fillStyle="#0f172a",e.fillRect(o,40,r-o,i-80),e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(o,40),e.lineTo(o,i-40),e.stroke(),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`dense n = ${g.toFixed(2)} (left)`,16,64),e.fillText(`rare n = ${b.toFixed(2)} (right)`,o+12,64);const v=te(g,b),u=v==null?null:j(v),y=260,$=o-y*Math.cos(c),M=m-y*Math.sin(c);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo($,M),e.lineTo(o,m),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(o-160,m),e.lineTo(o+220,m),e.stroke(),e.setLineDash([]);const S=K(g,c,b);if(S==null){const E=o-260*Math.cos(c),z=m-260*Math.sin(c);e.strokeStyle="#a78bfa",e.lineWidth=2,e.beginPath(),e.moveTo(o,m),e.lineTo(E,z),e.stroke(),f.textContent=`${t("tools.tir.critical")}: ${u==null?"—":`${u.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.full")}`}else{const E=o+300*Math.cos(S),z=m-300*Math.sin(S);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(o,m),e.lineTo(E,z),e.stroke(),f.textContent=`${t("tools.tir.critical")}: ${u==null?"—":`${u.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.partial")} 뿯½ r = ${j(S).toFixed(1)} deg`}e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${h.toFixed(1)} deg (in dense medium)`,16,28)}return q(),n}function se(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const d=n.querySelector("canvas"),e=d.getContext("2d"),f=n.querySelector("[data-lens]"),p=(c,r,i,m)=>{const o=n.querySelector(c),v=n.querySelector(r),u=y=>{let $=Number(y?o.value:v.value);Number.isNaN($)&&($=i),$=Math.max(i,Math.min(m,$)),o.value=String($),v.value=String($),h()};return o.addEventListener("input",()=>u(!0)),v.addEventListener("change",()=>u(!1)),()=>Number(n.querySelector(c).value)},T=p("[data-u]","[data-un]",120,420),q=p("[data-f]","[data-fn]",60,200),g=p("[data-h]","[data-hn]",20,90);f.addEventListener("change",h);function b(c,r,i,m,o,v,u=2,y=[]){c.setLineDash(y),c.strokeStyle=v,c.lineWidth=u,c.beginPath(),c.moveTo(r,i),c.lineTo(m,o),c.stroke(),c.setLineDash([])}function h(){const c=f.value,r=T(),i=q(),m=g(),o=d.width,v=d.height;e.clearRect(0,0,o,v),e.fillStyle="#0b0f14",e.fillRect(0,0,o,v);const u=o*.52,y=v*.55,$=c==="convex"?i:-i;b(e,40,y,o-40,y,"#334155",1),e.strokeStyle="#94a3b8",e.lineWidth=4,e.beginPath(),c==="convex"?(e.moveTo(u,y-140),e.quadraticCurveTo(u-18,y,u,y+140),e.quadraticCurveTo(u+18,y,u,y-140)):(e.moveTo(u-18,y-140),e.quadraticCurveTo(u,y,u-18,y+140),e.moveTo(u+18,y-140),e.quadraticCurveTo(u,y,u+18,y+140)),e.stroke();const M=u-r,S=M,w=y-m;b(e,M,y,S,w,"#fbbf24",3),e.fillStyle="#fbbf24",e.beginPath(),e.moveTo(S,w),e.lineTo(S-6,w+12),e.lineTo(S+6,w+12),e.closePath(),e.fill();const E={x:u-Math.abs($),y},z={x:u+Math.abs($),y};e.fillStyle="#64748b";for(const a of[E,z])e.beginPath(),e.arc(a.x,a.y,4,0,Math.PI*2),e.fill();if(c==="convex"){const a=u,s=w;b(e,S,w,a,s,"#fbbf24",2,[4,4]),b(e,a,s,z.x+220,z.y,"#6ee7b7",2);const x=(w-y)/(S-u),k=o-60,H=y+x*(k-u);b(e,S,w,k,H,"#93c5fd",2),b(e,S,w,E.x,E.y,"#fca5a5",2,[3,6]),b(e,E.x,E.y,o-80,w,"#fca5a5",2)}else{const a=u,s=w;b(e,S,w,a,s,"#fbbf24",2,[4,4]),b(e,a,s,E.x-200,y-O(8)*40,"#6ee7b7",2),b(e,S,w,o-100,y+30,"#93c5fd",2,[3,5])}e.fillStyle="#e8eef5",e.font="14px system-ui",e.fillText(`u = ${r.toFixed(0)} px, |f| = ${i.toFixed(0)} px, lens = ${c}`,16,28)}return h(),n}const Z=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function D(t){return Math.log(t)/Math.LN10}function ie(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${t("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const d=n.querySelector("canvas"),e=n.querySelector("[data-detail]"),f=d.getContext("2d"),p=D(1e4),T=D(1e22);function q(h){const c={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},r=N()==="zh-Hant",i=c[h];return i?r?i.zh:i.en:h}function g(h){const c={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},r={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return N()==="zh-Hant"?r[h]:c[h]}function b(){const h=d.width,c=d.height;f.clearRect(0,0,h,c),f.fillStyle="#0b0f14",f.fillRect(0,0,h,c);const r=24,i=c*.45,m=36;Z.forEach((o,v)=>{const u=r+(D(o.minHz)-p)/(T-p)*(h-r*2),y=r+(D(o.maxHz)-p)/(T-p)*(h-r*2);f.fillStyle=o.color,f.fillRect(u,i,Math.max(6,y-u),m)}),f.fillStyle="#cbd5e1",f.font="13px system-ui",f.fillText("10^4 Hz",r,i+m+26),f.fillText("10^22 Hz",h-r-60,i+m+26)}return d.addEventListener("click",h=>{const c=d.getBoundingClientRect(),r=(h.clientX-c.left)/c.width*d.width,i=24,m=(r-i)/(d.width-i*2),o=10**(p+m*(T-p)),v=Z.find(u=>o>=u.minHz&&o<=u.maxHz);v&&(e.innerHTML=`<h3 style="margin:0 0 6px">${q(v.id)}</h3><p style="margin:0;color:#9aa8b8">${g(v.id)}</p>`)}),b(),n}const le=["topics","notes","tools","worksheets","flashcards","summary"],ce=["reflection","refraction","tir","lens","em"],re={reflection:t=>ne(t),refraction:t=>ae(t),tir:t=>oe(t),lens:t=>se(t),em:t=>ie(t)};function ue(t){return l({reflection:"tools.reflection.title",refraction:"tools.refraction.title",tir:"tools.tir.title",lens:"tools.lens.title",em:"tools.em.title"}[t]||t)}function X(){return N()==="zh-Hant"?"zhHant":"en"}async function de(t){const n=`/S3_PHY/notes/${t}`;try{return(await fetch(n,{method:"HEAD"})).ok}catch{return!1}}function Y(t){const n=t.slice();for(let d=n.length-1;d>0;d-=1){const e=Math.floor(Math.random()*(d+1));[n[d],n[e]]=[n[e],n[d]]}return n}function fe(t){let n="topics",d="reflection",e=0,f="all",p=!1,T=[],q=!1;const g={};function b(){t.innerHTML=`
      <header class="site-header">
        <div class="brand">
          <h1>${l("app.title")}</h1>
          <p>${l("app.subtitle")}</p>
        </div>
        <div class="lang-toggle" data-lang></div>
      </header>
      <nav class="main-nav" data-nav></nav>
      <main data-main></main>
      <footer class="site-footer no-print">${l("footer.conventions")}</footer>
    `,g.lang=t.querySelector("[data-lang]"),g.nav=t.querySelector("[data-nav]"),g.main=t.querySelector("[data-main]"),g.lang.innerHTML=`
      <button type="button" data-set-lang="en" class="${N()==="en"?"active":""}">${l("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${N()==="zh-Hant"?"active":""}">${l("lang.zhHant")}</button>
    `,g.lang.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{J(a.getAttribute("data-set-lang")),b()})}),g.nav.innerHTML=le.map((a,s)=>{const x={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};return`<button type="button" class="${n===a?"active":""}" data-sec="${a}"><span class="num">${s+1}</span>${l(x[a])}</button>`}).join(""),g.nav.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{n=a.getAttribute("data-sec"),b()})}),n==="topics"?g.main.innerHTML=h():n==="notes"?g.main.innerHTML=r():n==="tools"?g.main.innerHTML=m():n==="worksheets"?g.main.innerHTML=u():n==="flashcards"?g.main.innerHTML=M():n==="summary"&&(g.main.innerHTML=z()),n==="notes"&&i(),n==="tools"&&o(),n==="worksheets"&&y(),n==="flashcards"&&E()}function h(){const a=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel">
        <h2>${l("topics.title")}</h2>
        <p class="lead">${l("topics.intro")}</p>
        <div class="grid cols-2">
          ${a.map(([s,x])=>{const k=s==="convex"||s==="concave"?"lens":s==="em"?"em":s;return`
            <div class="card">
              <h3>${l(x)}</h3>
              <p>${s==="convex"||s==="concave"?l("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${k}" data-lens="${s==="concave"?"concave":"convex"}">${l("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function c(a){const s=a.target.closest("[data-go-tool]");if(!s)return;n="tools",d=s.getAttribute("data-go-tool");const x=s.getAttribute("data-lens");if(b(),d==="lens"&&x==="concave"){const k=t.querySelector("[data-lens]");k&&(k.value="concave")}}function r(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"lenses",fileEn:"lenses-en.pdf",fileZh:"lenses-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${l("notes.title")}</h2>
        <p class="lead">${l("notes.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${a.map(s=>{const x=l(`notes.card.${s.key}`);return`
            <div class="card" data-note-card="${s.key}">
              <h3>${x}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function i(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"lenses",fileEn:"lenses-en.pdf",fileZh:"lenses-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],s=X();for(const x of a){const k=t.querySelector(`[data-note-card="${x.key}"]`);if(!k)continue;const H=k.querySelector("[data-note-body]"),L=s==="zhHant"?x.fileZh:x.fileEn,R=await de(L),P=`/S3_PHY/notes/${L}`;R?H.innerHTML=`
          <iframe class="notes-grid" title="${l(`notes.card.${x.key}`)}" src="${P}"></iframe>
          <p style="margin-top:8px"><a href="${P}" target="_blank" rel="noopener">${l("notes.openPdf")}</a></p>`:H.innerHTML=`<p class="lead">${l("notes.missing")}</p>
          <p><a class="btn" href="/S3_PHY/notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function m(){return`
      <section class="panel">
        <h2>${l("tools.title")}</h2>
        <p class="lead">${l("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${ce.map(a=>`<button type="button" data-tool="${a}" class="${d===a?"active":""}">${ue(a)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function o(){const a=t.querySelector("[data-tool-list]"),s=t.querySelector("[data-tool-stage]");!a||!s||(a.querySelectorAll("button").forEach(x=>{x.addEventListener("click",()=>{d=x.getAttribute("data-tool"),a.querySelectorAll("button").forEach(k=>k.classList.toggle("active",k.getAttribute("data-tool")===d)),v(s)})}),v(s))}function v(a){a.innerHTML="";const s=re[d];if(!s)return;const x=s(l);a.appendChild(x)}function u(){const a=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
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
          ${a.map(([s,x])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${s}" checked />
            <span>${l(x)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${l("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${l("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${l("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${l("worksheets.empty")}</p></div>
      </section>`}function y(){const a=t.querySelector("[data-ws-gen]"),s=t.querySelector("[data-ws-print-p]"),x=t.querySelector("[data-ws-print-a]"),k=t.querySelector("[data-ws-out]");!a||!k||(a.addEventListener("click",()=>{const H=Number(t.querySelector("[data-ws-count]").value),L=[...t.querySelectorAll("[data-ws-topic]")].filter(F=>F.checked).map(F=>F.getAttribute("data-ws-topic")),R=I.filter(F=>{const A=F.topic;return!!(L.includes(A)||A==="convex"&&(L.includes("convex")||L.includes("concave")))}),P=Y(R).slice(0,Math.min(H,R.length||1));T=P.length?P:Y(I).slice(0,Math.min(H,I.length)),q=!1,$(k)}),s.addEventListener("click",()=>{q=!1,$(k),window.print()}),x.addEventListener("click",()=>{q=!0,$(k),window.print()}))}function $(a){const s=X();if(!T.length){a.innerHTML=`<p class="lead">${l("worksheets.empty")}</p>`;return}a.innerHTML=T.map((x,k)=>{const H=x[s]||x.en,L=["A","B","C","D"],R=H.choices.map((F,A)=>`<li><strong>${L[A]}.</strong> ${F}</li>`).join(""),P=q?`<p><em>${H.exp}</em></p><p><strong>Answer:</strong> ${L[H.a]}</p>`:"";return`<div class="q"><h4>Q${k+1}</h4><p>${H.q}</p><ol style="margin:0;padding-left:18px">${R}</ol>${P}</div>`}).join("")}function M(){return`
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
      </section>`}function S(){let a=W.slice();return f==="all"?a:(f==="convex"||f==="concave"?a=a.filter(s=>s.topic==="convex"||s.topic==="concave"):a=a.filter(s=>s.topic===f),a.length?a:W)}function w(){const a=S();e=Math.max(0,Math.min(e,a.length-1));const s=a[e],x=X(),k=s[x]||s.en,H=t.querySelector("[data-flash-front]"),L=t.querySelector("[data-flip-card]");!H||!L||(p?(L.querySelector(".label").textContent=l("flashcards.answer"),H.textContent=k.a):(L.querySelector(".label").textContent=l("flashcards.question"),H.textContent=k.q))}function E(){const a=t.querySelector("[data-flash-deck]");a.value=f,a.addEventListener("change",()=>{f=a.value,e=0,p=!1,w()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{p=!p,w()}),t.querySelector("[data-flash-flip]").addEventListener("click",s=>{s.stopPropagation(),p=!p,w()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const s=S();e=(e-1+s.length)%s.length,p=!1,w()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const s=S();e=(e+1)%s.length,p=!1,w()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const s=S();e=Math.floor(Math.random()*s.length),p=!1,w()}),w()}function z(){const a=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${l("summary.title")}</h2>
        <p class="lead">${l("summary.intro")}</p>
        <div class="grid cols-2">
          ${a.map(s=>{const x=`/S3_PHY/summary/${s.file}`;return`
            <div class="card">
              <h3>${l(s.key)}</h3>
              <img class="summary-thumb" alt="" src="${x}" />
              <p style="margin-top:10px"><a download href="${x}">${l("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}window.addEventListener("s3phy:lang",()=>b()),t.addEventListener("click",c),b()}Q();fe(document.getElementById("app"));
