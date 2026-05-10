(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))e(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const T of p.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&e(T)}).observe(document,{childList:!0,subtree:!0});function c(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function e(f){if(f.ep)return;f.ep=!0;const p=c(f);fetch(f.href,p)}})();const C={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"Light and waves — S3 focus","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.lenses":"Thin lenses","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.reflection.title":"Plane mirror — reflection","tools.reflection.angle":"Angle of incidence (deg)","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.lens.title":"Thin lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},Q={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"光與波動 — 中三重點","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.refraction":"折射","topic.tir":"全反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.lenses":"薄透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.reflection.title":"平面鏡 — 反射","tools.reflection.angle":"入射觔（度）","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.lens.title":"薄透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},B="s3phy.lang",G={en:C,"zh-Hant":Q};let _="en";function J(){try{const t=localStorage.getItem(B);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function ee(){_=J()}function te(t){if(G[t]){_=t;try{localStorage.setItem(B,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function F(){return _}function i(t){const n=G[_]||C;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:Object.prototype.hasOwnProperty.call(C,t)?C[t]:t}const O=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],W=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],j=t=>t*180/Math.PI,I=t=>t*Math.PI/180;function ne(t,n,c){return Math.max(n,Math.min(c,t))}function V(t,n,c){const e=t/c*Math.sin(n);return e>1+1e-9||e<-1-1e-9?null:Math.asin(ne(e,-1,1))}function ae(t,n){if(t<=n)return null;const c=n/t;return c>1?null:Math.asin(c)}function se(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480" aria-label="${t("tools.reflection.title")}"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.reflection.angle")}</label>
        <input type="range" min="5" max="85" value="35" data-i />
        <input type="number" min="5" max="85" value="35" data-i-num />
      </div>
    </div>
  `;const c=n.querySelector("canvas"),e=c.getContext("2d"),f=n.querySelector("[data-i]"),p=n.querySelector("[data-i-num]");function T(b){const h=q(b?f.value:p.value);f.value=String(h),p.value=String(h),g(h)}function q(b){const h=Number(b);return Number.isNaN(h)?35:Math.max(5,Math.min(85,h))}f.addEventListener("input",()=>T(!0)),p.addEventListener("change",()=>T(!1));function g(b){const h=c.width,r=c.height;e.clearRect(0,0,h,r),e.fillStyle="#0b0f14",e.fillRect(0,0,h,r);const u=r*.55,l=h*.45,m=320;e.strokeStyle="#9aa8b8",e.lineWidth=3,e.beginPath(),e.moveTo(l,u-m/2),e.lineTo(l,u+m/2),e.stroke(),e.fillStyle="#cbd5e1",e.font="14px system-ui",e.fillText("Mirror",l+8,u-m/2+16);const s=I(b),v=220,d=l-v*Math.cos(s),y=u-v*Math.sin(s);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(d,y),e.lineTo(l,u),e.stroke();const S=l+v*Math.cos(s),M=u-v*Math.sin(s);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(l,u),e.lineTo(S,M),e.stroke(),e.setLineDash([6,6]),e.strokeStyle="#64748b",e.lineWidth=1,e.beginPath(),e.moveTo(l-120,u),e.lineTo(l+120,u),e.stroke(),e.setLineDash([]),e.fillStyle="#e8eef5",e.font="16px system-ui",e.fillText(`i = r = ${b.toFixed(0)} deg`,16,28)}return T(!0),n}function oe(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const c=n.querySelector("canvas"),e=c.getContext("2d"),f=(g,b,h,r,u)=>{const l=n.querySelector(g),m=n.querySelector(b),s=v=>{let d=Number(v?l.value:m.value);Number.isNaN(d)&&(d=h),d=Math.max(h,Math.min(r,d)),l.value=String(d),m.value=String(d),u()};return l.addEventListener("input",()=>s(!0)),m.addEventListener("change",()=>s(!1)),()=>Number(n.querySelector(g).value)},p=f("[data-n1]","[data-n1n]",1,2.5,q),T=f("[data-n2]","[data-n2n]",1,2.5,q);f("[data-ang]","[data-angn]",5,80,q);function q(){const g=p(),b=T(),h=Number(n.querySelector("[data-ang]").value),r=I(h),u=c.width,l=c.height;e.clearRect(0,0,u,l),e.fillStyle="#0b0f14",e.fillRect(0,0,u,l);const m=l*.55,s=u*.48;e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(s,40),e.lineTo(s,l-40),e.stroke(),e.fillStyle="#1e293b",e.fillRect(0,40,s,l-80),e.fillStyle="#0f172a",e.fillRect(s,40,u-s,l-80),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`n1 = ${g.toFixed(2)}`,16,64),e.fillText(`n2 = ${b.toFixed(2)}`,s+12,64);const v=260,d=s-v*Math.cos(r),y=m-v*Math.sin(r);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(d,y),e.lineTo(s,m),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(s-140,m),e.lineTo(s+220,m),e.stroke(),e.setLineDash([]);const S=V(g,r,b);if(S==null)e.fillStyle="#f87171",e.fillText("TIR from this side is not physical for n1 <= n2 here",16,28);else{const $=s+280*Math.cos(S),w=m-280*Math.sin(S);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(s,m),e.lineTo($,w),e.stroke(),e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${h.toFixed(1)} deg, r = ${j(S).toFixed(1)} deg`,16,28)}}return q(),n}function ie(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const c=n.querySelector("canvas"),e=c.getContext("2d"),f=n.querySelector("[data-status]"),p=(g,b,h,r)=>{const u=n.querySelector(g),l=n.querySelector(b),m=s=>{let v=Number(s?u.value:l.value);Number.isNaN(v)&&(v=h),v=Math.max(h,Math.min(r,v)),u.value=String(v),l.value=String(v),q()};return u.addEventListener("input",()=>m(!0)),l.addEventListener("change",()=>m(!1)),()=>Number(n.querySelector(g).value)},T=p("[data-n1]","[data-n1n]",1.1,2.5);p("[data-n2]","[data-n2n]",1,1.49),p("[data-ang]","[data-angn]",5,89);function q(){const g=T(),b=Number(n.querySelector("[data-n2]").value),h=Number(n.querySelector("[data-ang]").value),r=I(h),u=c.width,l=c.height;e.clearRect(0,0,u,l),e.fillStyle="#0b0f14",e.fillRect(0,0,u,l);const m=l*.55,s=u*.48;e.fillStyle="#1e293b",e.fillRect(0,40,s,l-80),e.fillStyle="#0f172a",e.fillRect(s,40,u-s,l-80),e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(s,40),e.lineTo(s,l-40),e.stroke(),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`dense n = ${g.toFixed(2)} (left)`,16,64),e.fillText(`rare n = ${b.toFixed(2)} (right)`,s+12,64);const v=ae(g,b),d=v==null?null:j(v),y=260,S=s-y*Math.cos(r),M=m-y*Math.sin(r);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(S,M),e.lineTo(s,m),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(s-160,m),e.lineTo(s+220,m),e.stroke(),e.setLineDash([]);const $=V(g,r,b);if($==null){const E=s-260*Math.cos(r),z=m-260*Math.sin(r);e.strokeStyle="#a78bfa",e.lineWidth=2,e.beginPath(),e.moveTo(s,m),e.lineTo(E,z),e.stroke(),f.textContent=`${t("tools.tir.critical")}: ${d==null?"—":`${d.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.full")}`}else{const E=s+300*Math.cos($),z=m-300*Math.sin($);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(s,m),e.lineTo(E,z),e.stroke(),f.textContent=`${t("tools.tir.critical")}: ${d==null?"—":`${d.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.partial")} 뿯½ r = ${j($).toFixed(1)} deg`}e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${h.toFixed(1)} deg (in dense medium)`,16,28)}return q(),n}function le(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const c=n.querySelector("canvas"),e=c.getContext("2d"),f=n.querySelector("[data-lens]"),p=(r,u,l,m)=>{const s=n.querySelector(r),v=n.querySelector(u),d=y=>{let S=Number(y?s.value:v.value);Number.isNaN(S)&&(S=l),S=Math.max(l,Math.min(m,S)),s.value=String(S),v.value=String(S),h()};return s.addEventListener("input",()=>d(!0)),v.addEventListener("change",()=>d(!1)),()=>Number(n.querySelector(r).value)},T=p("[data-u]","[data-un]",120,420),q=p("[data-f]","[data-fn]",60,200),g=p("[data-h]","[data-hn]",20,90);f.addEventListener("change",h);function b(r,u,l,m,s,v,d=2,y=[]){r.setLineDash(y),r.strokeStyle=v,r.lineWidth=d,r.beginPath(),r.moveTo(u,l),r.lineTo(m,s),r.stroke(),r.setLineDash([])}function h(){const r=f.value,u=T(),l=q(),m=g(),s=c.width,v=c.height;e.clearRect(0,0,s,v),e.fillStyle="#0b0f14",e.fillRect(0,0,s,v);const d=s*.52,y=v*.55,S=r==="convex"?l:-l;b(e,40,y,s-40,y,"#334155",1),e.strokeStyle="#94a3b8",e.lineWidth=4,e.beginPath(),r==="convex"?(e.moveTo(d,y-140),e.quadraticCurveTo(d-18,y,d,y+140),e.quadraticCurveTo(d+18,y,d,y-140)):(e.moveTo(d-18,y-140),e.quadraticCurveTo(d,y,d-18,y+140),e.moveTo(d+18,y-140),e.quadraticCurveTo(d,y,d+18,y+140)),e.stroke();const M=d-u,$=M,w=y-m;b(e,M,y,$,w,"#fbbf24",3),e.fillStyle="#fbbf24",e.beginPath(),e.moveTo($,w),e.lineTo($-6,w+12),e.lineTo($+6,w+12),e.closePath(),e.fill();const E={x:d-Math.abs(S),y},z={x:d+Math.abs(S),y};e.fillStyle="#64748b";for(const a of[E,z])e.beginPath(),e.arc(a.x,a.y,4,0,Math.PI*2),e.fill();if(r==="convex"){const a=d,o=w;b(e,$,w,a,o,"#fbbf24",2,[4,4]),b(e,a,o,z.x+220,z.y,"#6ee7b7",2);const x=(w-y)/($-d),k=s-60,L=y+x*(k-d);b(e,$,w,k,L,"#93c5fd",2),b(e,$,w,E.x,E.y,"#fca5a5",2,[3,6]),b(e,E.x,E.y,s-80,w,"#fca5a5",2)}else{const a=d,o=w;b(e,$,w,a,o,"#fbbf24",2,[4,4]),b(e,a,o,E.x-200,y-I(8)*40,"#6ee7b7",2),b(e,$,w,s-100,y+30,"#93c5fd",2,[3,5])}e.fillStyle="#e8eef5",e.font="14px system-ui",e.fillText(`u = ${u.toFixed(0)} px, |f| = ${l.toFixed(0)} px, lens = ${r}`,16,28)}return h(),n}const Z=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function D(t){return Math.log(t)/Math.LN10}function ce(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${t("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const c=n.querySelector("canvas"),e=n.querySelector("[data-detail]"),f=c.getContext("2d"),p=D(1e4),T=D(1e22);function q(h){const r={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},u=F()==="zh-Hant",l=r[h];return l?u?l.zh:l.en:h}function g(h){const r={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},u={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return F()==="zh-Hant"?u[h]:r[h]}function b(){const h=c.width,r=c.height;f.clearRect(0,0,h,r),f.fillStyle="#0b0f14",f.fillRect(0,0,h,r);const u=24,l=r*.45,m=36;Z.forEach((s,v)=>{const d=u+(D(s.minHz)-p)/(T-p)*(h-u*2),y=u+(D(s.maxHz)-p)/(T-p)*(h-u*2);f.fillStyle=s.color,f.fillRect(d,l,Math.max(6,y-d),m)}),f.fillStyle="#cbd5e1",f.font="13px system-ui",f.fillText("10^4 Hz",u,l+m+26),f.fillText("10^22 Hz",h-u-60,l+m+26)}return c.addEventListener("click",h=>{const r=c.getBoundingClientRect(),u=(h.clientX-r.left)/r.width*c.width,l=24,m=(u-l)/(c.width-l*2),s=10**(p+m*(T-p)),v=Z.find(d=>s>=d.minHz&&s<=d.maxHz);v&&(e.innerHTML=`<h3 style="margin:0 0 6px">${q(v.id)}</h3><p style="margin:0;color:#9aa8b8">${g(v.id)}</p>`)}),b(),n}const re=["topics","notes","tools","worksheets","flashcards","summary"],ue=["reflection","refraction","tir","lens","em"],de={reflection:t=>se(t),refraction:t=>oe(t),tir:t=>ie(t),lens:t=>le(t),em:t=>ce(t)};function fe(t){return i({reflection:"tools.reflection.title",refraction:"tools.refraction.title",tir:"tools.tir.title",lens:"tools.lens.title",em:"tools.em.title"}[t]||t)}function X(){return F()==="zh-Hant"?"zhHant":"en"}async function pe(t){const n=`./notes/${t}`;try{return(await fetch(n,{method:"HEAD"})).ok}catch{return!1}}function U(t){const n=t.slice();for(let c=n.length-1;c>0;c-=1){const e=Math.floor(Math.random()*(c+1));[n[c],n[e]]=[n[e],n[c]]}return n}function he(t){let n="topics",c="reflection",e=0,f="all",p=!1,T=[],q=!1;const g={};function b(){t.innerHTML=`
      <header class="site-header">
        <div class="site-header__brand">
          <div class="brand-mark-mini" aria-hidden="true">
            <span class="brand-uni-gradient">Uni</span>
            <span class="brand-edu-orange">${i("splash.unitEducation")}</span>
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
    `,g.lang=t.querySelector("[data-lang]"),g.nav=t.querySelector("[data-nav]"),g.main=t.querySelector("[data-main]"),g.lang.innerHTML=`
      <button type="button" data-set-lang="en" class="${F()==="en"?"active":""}">${i("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${F()==="zh-Hant"?"active":""}">${i("lang.zhHant")}</button>
    `,g.lang.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{te(a.getAttribute("data-set-lang")),b()})}),g.nav.innerHTML=re.map((a,o)=>{const x={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};return`<button type="button" class="${n===a?"active":""}" data-sec="${a}"><span class="num">${o+1}</span>${i(x[a])}</button>`}).join(""),g.nav.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{n=a.getAttribute("data-sec"),b()})}),n==="topics"?g.main.innerHTML=h():n==="notes"?g.main.innerHTML=u():n==="tools"?g.main.innerHTML=m():n==="worksheets"?g.main.innerHTML=d():n==="flashcards"?g.main.innerHTML=M():n==="summary"&&(g.main.innerHTML=z()),n==="notes"&&l(),n==="tools"&&s(),n==="worksheets"&&y(),n==="flashcards"&&E()}function h(){const a=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel">
        <h2>${i("topics.title")}</h2>
        <p class="lead">${i("topics.intro")}</p>
        <div class="grid cols-2">
          ${a.map(([o,x])=>{const k=o==="convex"||o==="concave"?"lens":o==="em"?"em":o;return`
            <div class="card">
              <h3>${i(x)}</h3>
              <p>${o==="convex"||o==="concave"?i("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${k}" data-lens="${o==="concave"?"concave":"convex"}">${i("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function r(a){const o=a.target.closest("[data-go-tool]");if(!o)return;n="tools",c=o.getAttribute("data-go-tool");const x=o.getAttribute("data-lens");if(b(),c==="lens"&&x==="concave"){const k=t.querySelector("[data-lens]");k&&(k.value="concave")}}function u(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"lenses",fileEn:"lenses-en.pdf",fileZh:"lenses-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${i("notes.title")}</h2>
        <p class="lead">${i("notes.intro")}</p>
        <p class="lead">${i("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${a.map(o=>{const x=i(`notes.card.${o.key}`);return`
            <div class="card" data-note-card="${o.key}">
              <h3>${x}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function l(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"lenses",fileEn:"lenses-en.pdf",fileZh:"lenses-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],o=X();for(const x of a){const k=t.querySelector(`[data-note-card="${x.key}"]`);if(!k)continue;const L=k.querySelector("[data-note-body]"),H=o==="zhHant"?x.fileZh:x.fileEn,R=await pe(H),P=`./notes/${H}`;R?L.innerHTML=`
          <iframe class="notes-grid" title="${i(`notes.card.${x.key}`)}" src="${P}"></iframe>
          <p style="margin-top:8px"><a href="${P}" target="_blank" rel="noopener">${i("notes.openPdf")}</a></p>`:L.innerHTML=`<p class="lead">${i("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function m(){return`
      <section class="panel">
        <h2>${i("tools.title")}</h2>
        <p class="lead">${i("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${ue.map(a=>`<button type="button" data-tool="${a}" class="${c===a?"active":""}">${fe(a)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function s(){const a=t.querySelector("[data-tool-list]"),o=t.querySelector("[data-tool-stage]");!a||!o||(a.querySelectorAll("button").forEach(x=>{x.addEventListener("click",()=>{c=x.getAttribute("data-tool"),a.querySelectorAll("button").forEach(k=>k.classList.toggle("active",k.getAttribute("data-tool")===c)),v(o)})}),v(o))}function v(a){a.innerHTML="";const o=de[c];if(!o)return;const x=o(i);a.appendChild(x)}function d(){const a=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
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
          ${a.map(([o,x])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${o}" checked />
            <span>${i(x)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${i("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${i("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${i("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${i("worksheets.empty")}</p></div>
      </section>`}function y(){const a=t.querySelector("[data-ws-gen]"),o=t.querySelector("[data-ws-print-p]"),x=t.querySelector("[data-ws-print-a]"),k=t.querySelector("[data-ws-out]");!a||!k||(a.addEventListener("click",()=>{const L=Number(t.querySelector("[data-ws-count]").value),H=[...t.querySelectorAll("[data-ws-topic]")].filter(A=>A.checked).map(A=>A.getAttribute("data-ws-topic")),R=O.filter(A=>{const N=A.topic;return!!(H.includes(N)||N==="convex"&&(H.includes("convex")||H.includes("concave")))}),P=U(R).slice(0,Math.min(L,R.length||1));T=P.length?P:U(O).slice(0,Math.min(L,O.length)),q=!1,S(k)}),o.addEventListener("click",()=>{q=!1,S(k),window.print()}),x.addEventListener("click",()=>{q=!0,S(k),window.print()}))}function S(a){const o=X();if(!T.length){a.innerHTML=`<p class="lead">${i("worksheets.empty")}</p>`;return}a.innerHTML=T.map((x,k)=>{const L=x[o]||x.en,H=["A","B","C","D"],R=L.choices.map((A,N)=>`<li><strong>${H[N]}.</strong> ${A}</li>`).join(""),P=q?`<p><em>${L.exp}</em></p><p><strong>Answer:</strong> ${H[L.a]}</p>`:"";return`<div class="q"><h4>Q${k+1}</h4><p>${L.q}</p><ol style="margin:0;padding-left:18px">${R}</ol>${P}</div>`}).join("")}function M(){return`
      <section class="panel">
        <h2>${i("flashcards.title")}</h2>
        <p class="lead">${i("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${i("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${i("flashcards.all")}</option>
            <option value="reflection">${i("topic.reflection")}</option>
            <option value="refraction">${i("topic.refraction")}</option>
            <option value="tir">${i("topic.tir")}</option>
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
      </section>`}function $(){let a=W.slice();return f==="all"?a:(f==="convex"||f==="concave"?a=a.filter(o=>o.topic==="convex"||o.topic==="concave"):a=a.filter(o=>o.topic===f),a.length?a:W)}function w(){const a=$();e=Math.max(0,Math.min(e,a.length-1));const o=a[e],x=X(),k=o[x]||o.en,L=t.querySelector("[data-flash-front]"),H=t.querySelector("[data-flip-card]");!L||!H||(p?(H.querySelector(".label").textContent=i("flashcards.answer"),L.textContent=k.a):(H.querySelector(".label").textContent=i("flashcards.question"),L.textContent=k.q))}function E(){const a=t.querySelector("[data-flash-deck]");a.value=f,a.addEventListener("change",()=>{f=a.value,e=0,p=!1,w()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{p=!p,w()}),t.querySelector("[data-flash-flip]").addEventListener("click",o=>{o.stopPropagation(),p=!p,w()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const o=$();e=(e-1+o.length)%o.length,p=!1,w()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const o=$();e=(e+1)%o.length,p=!1,w()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const o=$();e=Math.floor(Math.random()*o.length),p=!1,w()}),w()}function z(){const a=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${i("summary.title")}</h2>
        <p class="lead">${i("summary.intro")}</p>
        <div class="grid cols-2">
          ${a.map(o=>{const x=`./summary/${o.file}`;return`
            <div class="card">
              <h3>${i(o.key)}</h3>
              <img class="summary-thumb" alt="" src="${x}" />
              <p style="margin-top:10px"><a download href="${x}">${i("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}window.addEventListener("s3phy:lang",()=>b()),t.addEventListener("click",r),b()}ee();const K="s3phy_splash_seen";function me(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-formulas" aria-hidden="true">
      <span style="top:8%;left:5%;transform:rotate(-11deg)">v = fλ</span>
      <span style="top:16%;right:8%;transform:rotate(7deg)">E = hf</span>
      <span style="top:40%;left:3%;transform:rotate(5deg)">n₁ sin θ₁ = n₂ sin θ₂</span>
      <span style="top:26%;left:36%;transform:rotate(-5deg)">c = fλ</span>
      <span style="bottom:20%;right:5%;transform:rotate(-9deg)">TIR</span>
      <span style="bottom:14%;left:14%;transform:rotate(12deg)">λ / c</span>
      <span style="top:58%;right:20%;transform:rotate(4deg)">v = fλ</span>
      <span style="bottom:36%;left:40%;transform:rotate(-7deg)">E = hf</span>
    </div>
    <div class="splash-inner">
      <div class="splash-brand-mark">
        <span class="splash-brand-uni">Uni</span>
        <span class="splash-brand-edu">${i("splash.unitEducation")}</span>
      </div>
      <h1 class="splash-title">Uni+</h1>
      <button type="button" class="btn-splash-start" id="splashStart">${i("splash.start")}</button>
    </div>
  `,t}function Y(){const t=document.getElementById("app");t&&he(t)}function ve(){let t=!1;try{t=sessionStorage.getItem(K)==="1"}catch{}if(t){Y();return}const n=me();document.body.insertBefore(n,document.body.firstChild);const c=n.querySelector("#splashStart"),e=()=>{n.remove(),Y()};c.addEventListener("click",()=>{try{sessionStorage.setItem(K,"1")}catch{}n.classList.add("splash--hide"),n.addEventListener("transitionend",e,{once:!0}),window.setTimeout(e,480)})}ve();
