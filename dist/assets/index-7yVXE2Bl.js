(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const p of s)if(p.type==="childList")for(const k of p.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&e(k)}).observe(document,{childList:!0,subtree:!0});function i(s){const p={};return s.integrity&&(p.integrity=s.integrity),s.referrerPolicy&&(p.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?p.credentials="include":s.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function e(s){if(s.ep)return;s.ep=!0;const p=i(s);fetch(s.href,p)}})();const C={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"Light and waves — S3 focus","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.refraction":"Refraction","topic.tir":"Total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.lenses":"Thin lenses","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.reflection.title":"Plane mirror — reflection","tools.reflection.angle":"Angle of incidence (deg)","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.lens.title":"Thin lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Tap a band","worksheets.title":"Worksheet generator","worksheets.intro":"Generate printable practice. Pick topics and number of questions.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms.","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","summary.title":"Summary and visuals","summary.intro":"Download or print summary graphics. Replace files in public/summary/ when final art is ready.","summary.download":"Download","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection basics","summary.item.refraction":"Refraction and Snell","summary.item.lenses":"Convex and concave lenses","summary.item.em":"Electromagnetic spectrum"},J={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"光與波動 — 中三重點","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.refraction":"折射","topic.tir":"全反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.lenses":"薄透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.reflection.title":"平面鏡 — 反射","tools.reflection.angle":"入射觔（度）","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.lens.title":"薄透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.em.title":"電磁波譜","tools.em.pick":"點選波段","worksheets.title":"工作紙產生器","worksheets.intro":"產生可列印練習。選擇題數與課題。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","summary.title":"總結與圖像","summary.intro":"下載或列印總結圖。完成設計後可替換 public/summary/ 內檔案。","summary.download":"下載","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射基礎","summary.item.refraction":"折射與司乃耳","summary.item.lenses":"凸與凹透鏡","summary.item.em":"電磁波譜"},B="s3phy.lang",G={en:C,"zh-Hant":J};let _="en";function ee(){try{const t=localStorage.getItem(B);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function te(){_=ee()}function ne(t){if(G[t]){_=t;try{localStorage.setItem(B,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function R(){return _}function r(t){const n=G[_]||C;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:Object.prototype.hasOwnProperty.call(C,t)?C[t]:t}const O=[{topic:"reflection",en:{q:"For a plane mirror, the angle of incidence equals the angle of ____.",choices:["refraction","reflection","rotation","deflection"],a:1,exp:"The law of reflection states i = r for a plane mirror."},zhHant:{q:"平面鏡上，入射觔等於哪個觔？",choices:["折射觔","反射觔","轉動觔","偏轉觔"],a:1,exp:"反射定律：入射觔 = 反射觔。"}},{topic:"refraction",en:{q:"Snell law connects n1, sin i and n2, sin r. If n2 > n1, the ray usually bends ____ the normal.",choices:["away from","along","toward","parallel to"],a:2,exp:"When entering a denser medium, the ray bends toward the normal (smaller angle in the denser side if measured from normal)."},zhHant:{q:"司乃耳定律連繫 n1 sin i 與 n2 sin r。若 n2 > n1，光線通常向法線哪方彎曲？",choices:["遠離","貼著","靠近","平行"],a:2,exp:"進入較密介質時，光線較靠近法線。"}},{topic:"tir",en:{q:"Total internal reflection can occur when light travels from a ____ medium to a ____ medium.",choices:["rare to dense","dense to rare","same to same","opaque to clear"],a:1,exp:"TIR requires the incident medium to be optically denser than the second medium, and the angle of incidence exceeds the critical angle."},zhHant:{q:"全內反射發生時，光由哪類型介質進入哪類型介質？",choices:["疏到密","密到疏","相同到相同","不透明到透明"],a:1,exp:"光必須從光密進入光疏，且入射觔大於臨界觔。"}},{topic:"convex",en:{q:"A real object outside 2f for a convex lens forms an image that is ____.",choices:["virtual and enlarged","real and inverted between f and 2f","real at infinity","virtual at the focal point"],a:1,exp:"For u > 2f with a convex lens, the real image lies between f and 2f on the opposite side (qualitative HKDSE level)."},zhHant:{q:"實物置於凸透鏡 2f 外時，像的性質為？",choices:["虛像放大","實像倒立位於 f 與 2f 之間","實像在無窮遠","虛像在焦點"],a:1,exp:"u > 2f 時，實像約在另一側 f 到 2f 之間（定性認識）。"}},{topic:"concave",en:{q:"For a concave (diverging) lens, a real object always forms a ____ image.",choices:["real inverted","virtual upright","real upright","no image"],a:1,exp:"A diverging lens always forms a virtual upright diminished image for a real object."},zhHant:{q:"對凹透鏡（發散），實物的像必為？",choices:["實像倒立","虛像正立","實像正立","無像"],a:1,exp:"發散透鏡對實物總成虛像正立縮小。"}},{topic:"em",en:{q:"Arrange by increasing wavelength: visible, X-ray, radio.",choices:["X-ray, visible, radio","radio, visible, X-ray","visible, radio, X-ray","X-ray, radio, visible"],a:0,exp:"X-rays have much shorter wavelength than visible light; radio waves have the longest among these."},zhHant:{q:"按波長由短到長排序：可見光、X 射線、無線電。",choices:["X 射線、可見光、無線電","無線電、可見光、X 射線","可見光、無線電、X 射線","X 射線、無線電、可見光"],a:0,exp:"X 射線波長最短，無線電最長。"}}],j=[{topic:"reflection",en:{q:"Law of reflection",a:"Angle of incidence equals angle of reflection (i = r)."},zhHant:{q:"反射定律",a:"入射觔等於反射觔 (i = r)。"}},{topic:"refraction",en:{q:"Snell law (symbols)",a:"n1 sin i = n2 sin r."},zhHant:{q:"司乃耳定律",a:"n1 sin i = n2 sin r。"}},{topic:"tir",en:{q:"Critical angle formula",a:"sin C = n_rare / n_dense (light from dense to rare)."},zhHant:{q:"臨界觔公式",a:"sin C = n疏 / n密（光由密到疏）。"}},{topic:"convex",en:{q:"Convex lens sign of f",a:"Positive focal length for a thin convex lens in the usual convention."},zhHant:{q:"凸透鏡焦距符號",a:"薄透鏡常規下凸透鏡 f 為正。"}},{topic:"concave",en:{q:"Concave lens image type",a:"Virtual, upright, diminished for a real object."},zhHant:{q:"凹透鏡像的性質",a:"對實物成虛像正立縮小。"}},{topic:"em",en:{q:"Order of EM spectrum (frequency)",a:"Radio < microwaves < IR < visible < UV < X-ray < gamma (increasing frequency)."},zhHant:{q:"電磁波譜（頻率递增）",a:"無線電 < 微波 < 紅外 < 可見 < 紫外 < X 線 < 防射線。"}}],W=t=>t*180/Math.PI,I=t=>t*Math.PI/180;function ae(t,n,i){return Math.max(n,Math.min(i,t))}function Q(t,n,i){const e=t/i*Math.sin(n);return e>1+1e-9||e<-1-1e-9?null:Math.asin(ae(e,-1,1))}function oe(t,n){if(t<=n)return null;const i=n/t;return i>1?null:Math.asin(i)}function se(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="480" aria-label="${t("tools.reflection.title")}"></canvas>
    <div class="controls">
      <div class="control">
        <label>${t("tools.reflection.angle")}</label>
        <input type="range" min="5" max="85" value="35" data-i />
        <input type="number" min="5" max="85" value="35" data-i-num />
      </div>
    </div>
  `;const i=n.querySelector("canvas"),e=i.getContext("2d"),s=n.querySelector("[data-i]"),p=n.querySelector("[data-i-num]");function k(b){const h=L(b?s.value:p.value);s.value=String(h),p.value=String(h),g(h)}function L(b){const h=Number(b);return Number.isNaN(h)?35:Math.max(5,Math.min(85,h))}s.addEventListener("input",()=>k(!0)),p.addEventListener("change",()=>k(!1));function g(b){const h=i.width,u=i.height;e.clearRect(0,0,h,u),e.fillStyle="#0b0f14",e.fillRect(0,0,h,u);const d=u*.55,c=h*.45,m=320;e.strokeStyle="#9aa8b8",e.lineWidth=3,e.beginPath(),e.moveTo(c,d-m/2),e.lineTo(c,d+m/2),e.stroke(),e.fillStyle="#cbd5e1",e.font="14px system-ui",e.fillText("Mirror",c+8,d-m/2+16);const o=I(b),v=220,f=c-v*Math.cos(o),y=d-v*Math.sin(o);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(f,y),e.lineTo(c,d),e.stroke();const $=c+v*Math.cos(o),M=d-v*Math.sin(o);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(c,d),e.lineTo($,M),e.stroke(),e.setLineDash([6,6]),e.strokeStyle="#64748b",e.lineWidth=1,e.beginPath(),e.moveTo(c-120,d),e.lineTo(c+120,d),e.stroke(),e.setLineDash([]),e.fillStyle="#e8eef5",e.font="16px system-ui",e.fillText(`i = r = ${b.toFixed(0)} deg`,16,28)}return k(!0),n}function ie(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const i=n.querySelector("canvas"),e=i.getContext("2d"),s=(g,b,h,u,d)=>{const c=n.querySelector(g),m=n.querySelector(b),o=v=>{let f=Number(v?c.value:m.value);Number.isNaN(f)&&(f=h),f=Math.max(h,Math.min(u,f)),c.value=String(f),m.value=String(f),d()};return c.addEventListener("input",()=>o(!0)),m.addEventListener("change",()=>o(!1)),()=>Number(n.querySelector(g).value)},p=s("[data-n1]","[data-n1n]",1,2.5,L),k=s("[data-n2]","[data-n2n]",1,2.5,L);s("[data-ang]","[data-angn]",5,80,L);function L(){const g=p(),b=k(),h=Number(n.querySelector("[data-ang]").value),u=I(h),d=i.width,c=i.height;e.clearRect(0,0,d,c),e.fillStyle="#0b0f14",e.fillRect(0,0,d,c);const m=c*.55,o=d*.48;e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(o,40),e.lineTo(o,c-40),e.stroke(),e.fillStyle="#1e293b",e.fillRect(0,40,o,c-80),e.fillStyle="#0f172a",e.fillRect(o,40,d-o,c-80),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`n1 = ${g.toFixed(2)}`,16,64),e.fillText(`n2 = ${b.toFixed(2)}`,o+12,64);const v=260,f=o-v*Math.cos(u),y=m-v*Math.sin(u);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo(f,y),e.lineTo(o,m),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(o-140,m),e.lineTo(o+220,m),e.stroke(),e.setLineDash([]);const $=Q(g,u,b);if($==null)e.fillStyle="#f87171",e.fillText("TIR from this side is not physical for n1 <= n2 here",16,28);else{const T=o+280*Math.cos($),w=m-280*Math.sin($);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(o,m),e.lineTo(T,w),e.stroke(),e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${h.toFixed(1)} deg, r = ${W($).toFixed(1)} deg`,16,28)}}return L(),n}function le(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const i=n.querySelector("canvas"),e=i.getContext("2d"),s=n.querySelector("[data-status]"),p=(g,b,h,u)=>{const d=n.querySelector(g),c=n.querySelector(b),m=o=>{let v=Number(o?d.value:c.value);Number.isNaN(v)&&(v=h),v=Math.max(h,Math.min(u,v)),d.value=String(v),c.value=String(v),L()};return d.addEventListener("input",()=>m(!0)),c.addEventListener("change",()=>m(!1)),()=>Number(n.querySelector(g).value)},k=p("[data-n1]","[data-n1n]",1.1,2.5);p("[data-n2]","[data-n2n]",1,1.49),p("[data-ang]","[data-angn]",5,89);function L(){const g=k(),b=Number(n.querySelector("[data-n2]").value),h=Number(n.querySelector("[data-ang]").value),u=I(h),d=i.width,c=i.height;e.clearRect(0,0,d,c),e.fillStyle="#0b0f14",e.fillRect(0,0,d,c);const m=c*.55,o=d*.48;e.fillStyle="#1e293b",e.fillRect(0,40,o,c-80),e.fillStyle="#0f172a",e.fillRect(o,40,d-o,c-80),e.strokeStyle="#334155",e.lineWidth=2,e.beginPath(),e.moveTo(o,40),e.lineTo(o,c-40),e.stroke(),e.fillStyle="#94a3b8",e.font="13px system-ui",e.fillText(`dense n = ${g.toFixed(2)} (left)`,16,64),e.fillText(`rare n = ${b.toFixed(2)} (right)`,o+12,64);const v=oe(g,b),f=v==null?null:W(v),y=260,$=o-y*Math.cos(u),M=m-y*Math.sin(u);e.strokeStyle="#fbbf24",e.lineWidth=2,e.beginPath(),e.moveTo($,M),e.lineTo(o,m),e.stroke(),e.setLineDash([5,5]),e.strokeStyle="#64748b",e.beginPath(),e.moveTo(o-160,m),e.lineTo(o+220,m),e.stroke(),e.setLineDash([]);const T=Q(g,u,b);if(T==null){const H=o-260*Math.cos(u),z=m-260*Math.sin(u);e.strokeStyle="#a78bfa",e.lineWidth=2,e.beginPath(),e.moveTo(o,m),e.lineTo(H,z),e.stroke(),s.textContent=`${t("tools.tir.critical")}: ${f==null?"—":`${f.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.full")}`}else{const H=o+300*Math.cos(T),z=m-300*Math.sin(T);e.strokeStyle="#6ee7b7",e.beginPath(),e.moveTo(o,m),e.lineTo(H,z),e.stroke(),s.textContent=`${t("tools.tir.critical")}: ${f==null?"—":`${f.toFixed(1)} deg`} 뿯½ ${t("tools.tir.state")}: ${t("tools.tir.partial")} 뿯½ r = ${W(T).toFixed(1)} deg`}e.fillStyle="#e8eef5",e.font="15px system-ui",e.fillText(`i = ${h.toFixed(1)} deg (in dense medium)`,16,28)}return L(),n}function ce(t){const n=document.createElement("div");n.innerHTML=`
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
  `;const i=n.querySelector("canvas"),e=i.getContext("2d"),s=n.querySelector("[data-lens]"),p=(u,d,c,m)=>{const o=n.querySelector(u),v=n.querySelector(d),f=y=>{let $=Number(y?o.value:v.value);Number.isNaN($)&&($=c),$=Math.max(c,Math.min(m,$)),o.value=String($),v.value=String($),h()};return o.addEventListener("input",()=>f(!0)),v.addEventListener("change",()=>f(!1)),()=>Number(n.querySelector(u).value)},k=p("[data-u]","[data-un]",120,420),L=p("[data-f]","[data-fn]",60,200),g=p("[data-h]","[data-hn]",20,90);s.addEventListener("change",h);function b(u,d,c,m,o,v,f=2,y=[]){u.setLineDash(y),u.strokeStyle=v,u.lineWidth=f,u.beginPath(),u.moveTo(d,c),u.lineTo(m,o),u.stroke(),u.setLineDash([])}function h(){const u=s.value,d=k(),c=L(),m=g(),o=i.width,v=i.height;e.clearRect(0,0,o,v),e.fillStyle="#0b0f14",e.fillRect(0,0,o,v);const f=o*.52,y=v*.55,$=u==="convex"?c:-c;b(e,40,y,o-40,y,"#334155",1),e.strokeStyle="#94a3b8",e.lineWidth=4,e.beginPath(),u==="convex"?(e.moveTo(f,y-140),e.quadraticCurveTo(f-18,y,f,y+140),e.quadraticCurveTo(f+18,y,f,y-140)):(e.moveTo(f-18,y-140),e.quadraticCurveTo(f,y,f-18,y+140),e.moveTo(f+18,y-140),e.quadraticCurveTo(f,y,f+18,y+140)),e.stroke();const M=f-d,T=M,w=y-m;b(e,M,y,T,w,"#fbbf24",3),e.fillStyle="#fbbf24",e.beginPath(),e.moveTo(T,w),e.lineTo(T-6,w+12),e.lineTo(T+6,w+12),e.closePath(),e.fill();const H={x:f-Math.abs($),y},z={x:f+Math.abs($),y};e.fillStyle="#64748b";for(const a of[H,z])e.beginPath(),e.arc(a.x,a.y,4,0,Math.PI*2),e.fill();if(u==="convex"){const a=f,l=w;b(e,T,w,a,l,"#fbbf24",2,[4,4]),b(e,a,l,z.x+220,z.y,"#6ee7b7",2);const x=(w-y)/(T-f),S=o-60,q=y+x*(S-f);b(e,T,w,S,q,"#93c5fd",2),b(e,T,w,H.x,H.y,"#fca5a5",2,[3,6]),b(e,H.x,H.y,o-80,w,"#fca5a5",2)}else{const a=f,l=w;b(e,T,w,a,l,"#fbbf24",2,[4,4]),b(e,a,l,H.x-200,y-I(8)*40,"#6ee7b7",2),b(e,T,w,o-100,y+30,"#93c5fd",2,[3,5])}e.fillStyle="#e8eef5",e.font="14px system-ui",e.fillText(`u = ${d.toFixed(0)} px, |f| = ${c.toFixed(0)} px, lens = ${u}`,16,28)}return h(),n}const Z=[{id:"gamma",minHz:1e19,maxHz:1e22,color:"#7c3aed"},{id:"xray",minHz:1e16,maxHz:1e19,color:"#6366f1"},{id:"uv",minHz:75e13,maxHz:1e16,color:"#3b82f6"},{id:"visible",minHz:4e14,maxHz:75e13,color:"#22c55e"},{id:"ir",minHz:3e11,maxHz:4e14,color:"#f97316"},{id:"micro",minHz:1e8,maxHz:3e11,color:"#eab308"},{id:"radio",minHz:1e4,maxHz:1e8,color:"#a855f7"}];function N(t){return Math.log(t)/Math.LN10}function re(t){const n=document.createElement("div");n.innerHTML=`
    <canvas class="lab-canvas" width="900" height="220"></canvas>
    <p class="lead" style="margin-top:8px">${t("tools.em.pick")}</p>
    <div data-detail class="card" style="margin-top:10px"></div>
  `;const i=n.querySelector("canvas"),e=n.querySelector("[data-detail]"),s=i.getContext("2d"),p=N(1e4),k=N(1e22);function L(h){const u={gamma:{en:"Gamma rays",zh:"伽瑣射線"},xray:{en:"X-rays",zh:"X 射線"},uv:{en:"Ultraviolet",zh:"紫外線"},visible:{en:"Visible light",zh:"可見光"},ir:{en:"Infrared",zh:"紅外線"},micro:{en:"Microwaves",zh:"微波"},radio:{en:"Radio waves",zh:"無線電"}},d=R()==="zh-Hant",c=u[h];return c?d?c.zh:c.en:h}function g(h){const u={gamma:"Highest energy; used in medicine and astronomy.",xray:"Penetrates soft tissue; used in imaging.",uv:"Ionising at high doses; causes sunburn.",visible:"Detected by human eyes; ROYGBIV colours.",ir:"Heat radiation; remote controls and fibre optics.",micro:"Used in communications and heating food.",radio:"Longest wavelengths for broadcast and radar."},d={gamma:"高能量；醫學與天文應用。",xray:"穿透軟組織；用於顯像。",uv:"高功率時有電離效應；曬傷。",visible:"人眼可見；紅橙黃綠藍靛紫。",ir:"熱輻射；遠控與光纖通訊。",micro:"通訊與微波爐加熱。",radio:"最長波長；廣播與雷達。"};return R()==="zh-Hant"?d[h]:u[h]}function b(){const h=i.width,u=i.height;s.clearRect(0,0,h,u),s.fillStyle="#0b0f14",s.fillRect(0,0,h,u);const d=24,c=u*.45,m=36;Z.forEach((o,v)=>{const f=d+(N(o.minHz)-p)/(k-p)*(h-d*2),y=d+(N(o.maxHz)-p)/(k-p)*(h-d*2);s.fillStyle=o.color,s.fillRect(f,c,Math.max(6,y-f),m)}),s.fillStyle="#cbd5e1",s.font="13px system-ui",s.fillText("10^4 Hz",d,c+m+26),s.fillText("10^22 Hz",h-d-60,c+m+26)}return i.addEventListener("click",h=>{const u=i.getBoundingClientRect(),d=(h.clientX-u.left)/u.width*i.width,c=24,m=(d-c)/(i.width-c*2),o=10**(p+m*(k-p)),v=Z.find(f=>o>=f.minHz&&o<=f.maxHz);v&&(e.innerHTML=`<h3 style="margin:0 0 6px">${L(v.id)}</h3><p style="margin:0;color:#9aa8b8">${g(v.id)}</p>`)}),b(),n}const ue=["topics","notes","tools","worksheets","flashcards","summary"],de=["reflection","refraction","tir","lens","em"],fe={reflection:t=>se(t),refraction:t=>ie(t),tir:t=>le(t),lens:t=>ce(t),em:t=>re(t)};function pe(t){return r({reflection:"tools.reflection.title",refraction:"tools.refraction.title",tir:"tools.tir.title",lens:"tools.lens.title",em:"tools.em.title"}[t]||t)}function X(){return R()==="zh-Hant"?"zhHant":"en"}async function he(t){const n=`./notes/${t}`;try{return(await fetch(n,{method:"HEAD"})).ok}catch{return!1}}function U(t){const n=t.slice();for(let i=n.length-1;i>0;i-=1){const e=Math.floor(Math.random()*(i+1));[n[i],n[e]]=[n[e],n[i]]}return n}function me(t){let n="topics",i="reflection",e=0,s="all",p=!1,k=[],L=!1;const g={};function b(){t.innerHTML=`
      <header class="site-header">
        <div class="site-header__brand">
          <div class="brand-logo-wrap" aria-hidden="true">
            <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
          </div>
          <div class="brand-text-block">
            <h1 class="site-title">${r("app.title")}</h1>
            <p class="site-subtitle">${r("app.subtitle")}</p>
          </div>
        </div>
        <div class="site-header__actions">
          <div class="lang-toggle" data-lang></div>
        </div>
      </header>
      <nav class="main-nav" data-nav></nav>
      <main data-main></main>
      <footer class="site-footer no-print">${r("footer.conventions")}</footer>
    `,g.lang=t.querySelector("[data-lang]"),g.nav=t.querySelector("[data-nav]"),g.main=t.querySelector("[data-main]"),g.lang.innerHTML=`
      <button type="button" data-set-lang="en" class="${R()==="en"?"active":""}">${r("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${R()==="zh-Hant"?"active":""}">${r("lang.zhHant")}</button>
    `,g.lang.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{ne(a.getAttribute("data-set-lang")),b()})}),g.nav.innerHTML=ue.map((a,l)=>{const x={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};return`<button type="button" class="${n===a?"active":""}" data-sec="${a}"><span class="num">${l+1}</span>${r(x[a])}</button>`}).join(""),g.nav.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{n=a.getAttribute("data-sec"),b()})}),n==="topics"?g.main.innerHTML=h():n==="notes"?g.main.innerHTML=d():n==="tools"?g.main.innerHTML=m():n==="worksheets"?g.main.innerHTML=f():n==="flashcards"?g.main.innerHTML=M():n==="summary"&&(g.main.innerHTML=z()),n==="notes"&&c(),n==="tools"&&o(),n==="worksheets"&&y(),n==="flashcards"&&H()}function h(){const a=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${r("topics.title")}</h2>
        <p class="lead">${r("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${a.map(([l,x])=>{const S=l==="convex"||l==="concave"?"lens":l==="em"?"em":l;return`
            <div class="card">
              <h3>${r(x)}</h3>
              <p>${l==="convex"||l==="concave"?r("tools.lens.note"):""}</p>
              <button class="btn primary" type="button" data-go-tool="${S}" data-lens="${l==="concave"?"concave":"convex"}">${r("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function u(a){const l=a.target.closest("[data-go-tool]");if(!l)return;n="tools",i=l.getAttribute("data-go-tool");const x=l.getAttribute("data-lens");if(b(),i==="lens"&&x==="concave"){const S=t.querySelector("[data-lens]");S&&(S.value="concave")}}function d(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"lenses",fileEn:"lenses-en.pdf",fileZh:"lenses-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${r("notes.title")}</h2>
        <p class="lead">${r("notes.intro")}</p>
        <p class="lead">${r("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${a.map(l=>{const x=r(`notes.card.${l.key}`);return`
            <div class="card" data-note-card="${l.key}">
              <h3>${x}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function c(){const a=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"lenses",fileEn:"lenses-en.pdf",fileZh:"lenses-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],l=X();for(const x of a){const S=t.querySelector(`[data-note-card="${x.key}"]`);if(!S)continue;const q=S.querySelector("[data-note-body]"),E=l==="zhHant"?x.fileZh:x.fileEn,F=await he(E),P=`./notes/${E}`;F?q.innerHTML=`
          <iframe class="notes-grid" title="${r(`notes.card.${x.key}`)}" src="${P}"></iframe>
          <p style="margin-top:8px"><a href="${P}" target="_blank" rel="noopener">${r("notes.openPdf")}</a></p>`:q.innerHTML=`<p class="lead">${r("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function m(){return`
      <section class="panel">
        <h2>${r("tools.title")}</h2>
        <p class="lead">${r("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${de.map(a=>`<button type="button" data-tool="${a}" class="${i===a?"active":""}">${pe(a)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function o(){const a=t.querySelector("[data-tool-list]"),l=t.querySelector("[data-tool-stage]");!a||!l||(a.querySelectorAll("button").forEach(x=>{x.addEventListener("click",()=>{i=x.getAttribute("data-tool"),a.querySelectorAll("button").forEach(S=>S.classList.toggle("active",S.getAttribute("data-tool")===i)),v(l)})}),v(l))}function v(a){a.innerHTML="";const l=fe[i];if(!l)return;const x=l(r);a.appendChild(x)}function f(){const a=[["reflection","topic.reflection"],["refraction","topic.refraction"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel">
        <h2>${r("worksheets.title")}</h2>
        <p class="lead">${r("worksheets.intro")}</p>
        <div class="controls">
          <div class="control">
            <label>${r("worksheets.count")}</label>
            <select data-ws-count>
              <option>5</option><option>10</option><option>15</option>
            </select>
          </div>
        </div>
        <p class="lead" style="margin-top:10px">${r("worksheets.topics")}</p>
        <div class="grid cols-2" data-ws-topics>
          ${a.map(([l,x])=>`<label class="card" style="cursor:pointer;display:flex;gap:10px;align-items:center">
            <input type="checkbox" data-ws-topic="${l}" checked />
            <span>${r(x)}</span>
          </label>`).join("")}
        </div>
        <p style="margin-top:14px">
          <button class="btn primary" type="button" data-ws-gen>${r("worksheets.generate")}</button>
          <button class="btn" type="button" data-ws-print-p>${r("worksheets.printPractice")}</button>
          <button class="btn" type="button" data-ws-print-a>${r("worksheets.printAnswers")}</button>
        </p>
        <div class="worksheet-output" data-ws-out><p class="lead">${r("worksheets.empty")}</p></div>
      </section>`}function y(){const a=t.querySelector("[data-ws-gen]"),l=t.querySelector("[data-ws-print-p]"),x=t.querySelector("[data-ws-print-a]"),S=t.querySelector("[data-ws-out]");!a||!S||(a.addEventListener("click",()=>{const q=Number(t.querySelector("[data-ws-count]").value),E=[...t.querySelectorAll("[data-ws-topic]")].filter(A=>A.checked).map(A=>A.getAttribute("data-ws-topic")),F=O.filter(A=>{const D=A.topic;return!!(E.includes(D)||D==="convex"&&(E.includes("convex")||E.includes("concave")))}),P=U(F).slice(0,Math.min(q,F.length||1));k=P.length?P:U(O).slice(0,Math.min(q,O.length)),L=!1,$(S)}),l.addEventListener("click",()=>{L=!1,$(S),window.print()}),x.addEventListener("click",()=>{L=!0,$(S),window.print()}))}function $(a){const l=X();if(!k.length){a.innerHTML=`<p class="lead">${r("worksheets.empty")}</p>`;return}a.innerHTML=k.map((x,S)=>{const q=x[l]||x.en,E=["A","B","C","D"],F=q.choices.map((A,D)=>`<li><strong>${E[D]}.</strong> ${A}</li>`).join(""),P=L?`<p><em>${q.exp}</em></p><p><strong>Answer:</strong> ${E[q.a]}</p>`:"";return`<div class="q"><h4>Q${S+1}</h4><p>${q.q}</p><ol style="margin:0;padding-left:18px">${F}</ol>${P}</div>`}).join("")}function M(){return`
      <section class="panel">
        <h2>${r("flashcards.title")}</h2>
        <p class="lead">${r("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${r("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${r("flashcards.all")}</option>
            <option value="reflection">${r("topic.reflection")}</option>
            <option value="refraction">${r("topic.refraction")}</option>
            <option value="tir">${r("topic.tir")}</option>
            <option value="convex">${r("topic.convex")}</option>
            <option value="concave">${r("topic.concave")}</option>
            <option value="em">${r("topic.em")}</option>
          </select>
        </div>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-flip-card>
            <div class="label">${r("flashcards.question")}</div>
            <div class="body" data-flash-front></div>
          </div>
          <div class="flash-toolbar no-print">
            <button class="btn" type="button" data-flash-prev>${r("flashcards.prev")}</button>
            <button class="btn primary" type="button" data-flash-flip>${r("flashcards.flip")}</button>
            <button class="btn" type="button" data-flash-next>${r("flashcards.next")}</button>
            <button class="btn" type="button" data-flash-shuf>${r("flashcards.shuffle")}</button>
          </div>
        </div>
      </section>`}function T(){let a=j.slice();return s==="all"?a:(s==="convex"||s==="concave"?a=a.filter(l=>l.topic==="convex"||l.topic==="concave"):a=a.filter(l=>l.topic===s),a.length?a:j)}function w(){const a=T();e=Math.max(0,Math.min(e,a.length-1));const l=a[e],x=X(),S=l[x]||l.en,q=t.querySelector("[data-flash-front]"),E=t.querySelector("[data-flip-card]");!q||!E||(p?(E.querySelector(".label").textContent=r("flashcards.answer"),q.textContent=S.a):(E.querySelector(".label").textContent=r("flashcards.question"),q.textContent=S.q))}function H(){const a=t.querySelector("[data-flash-deck]");a.value=s,a.addEventListener("change",()=>{s=a.value,e=0,p=!1,w()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{p=!p,w()}),t.querySelector("[data-flash-flip]").addEventListener("click",l=>{l.stopPropagation(),p=!p,w()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const l=T();e=(e-1+l.length)%l.length,p=!1,w()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const l=T();e=(e+1)%l.length,p=!1,w()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const l=T();e=Math.floor(Math.random()*l.length),p=!1,w()}),w()}function z(){const a=[{file:"reflection.svg",key:"summary.item.reflection"},{file:"refraction.svg",key:"summary.item.refraction"},{file:"lenses.svg",key:"summary.item.lenses"},{file:"emwaves.svg",key:"summary.item.em"}];return`
      <section class="panel">
        <h2>${r("summary.title")}</h2>
        <p class="lead">${r("summary.intro")}</p>
        <div class="grid cols-2">
          ${a.map(l=>{const x=`./summary/${l.file}`;return`
            <div class="card">
              <h3>${r(l.key)}</h3>
              <img class="summary-thumb" alt="" src="${x}" />
              <p style="margin-top:10px"><a download href="${x}">${r("summary.download")}</a></p>
            </div>`}).join("")}
        </div>
      </section>`}window.addEventListener("s3phy:lang",()=>b()),t.addEventListener("click",u),b()}const V={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};te();const K="s3phy_splash_seen";function ve(){return"./images/uniplus-logo.png"}function be(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${ve()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${r("splash.start")}</button>
      </div>
    </div>
  `,t}function ye(t,n){const i=[...V.en,...V.zhHant],e=()=>{if(!t.parentElement)return;const s=document.createElement("div");s.className="splash-danmaku-item",s.textContent=i[Math.floor(Math.random()*i.length)];const p=Math.random()*85+5,k=Math.random()*.8+.9,L=Math.random()*12+10;s.style.top=`${p}%`,s.style.fontSize=`${k}rem`,s.style.animationDuration=`${L}s`,n.appendChild(s),s.addEventListener("animationend",()=>s.remove()),window.setTimeout(e,1500+Math.random()*1e3)};for(let s=0;s<4;s+=1)window.setTimeout(e,s*1e3)}function ge(t){const n=t.querySelector("#splashLogoWrap"),i=t.querySelector("#splashDanmaku"),e=t.querySelector("#splashStartWrap");window.setTimeout(()=>n==null?void 0:n.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{i==null||i.classList.add("splash-danmaku--visible"),e==null||e.classList.add("splash-start-wrap--in"),i&&ye(t,i)},1600)}function Y(){const t=document.getElementById("app");t&&me(t)}function xe(){let t=!1;try{t=sessionStorage.getItem(K)==="1"}catch{}if(t){Y();return}const n=be();document.body.insertBefore(n,document.body.firstChild),ge(n);const i=n.querySelector("#splashStart"),e=()=>{n.remove(),Y()};i.addEventListener("click",()=>{try{sessionStorage.setItem(K,"1")}catch{}n.classList.add("splash--hide"),n.addEventListener("transitionend",e,{once:!0}),window.setTimeout(e,480)})}xe();
