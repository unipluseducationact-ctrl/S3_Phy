(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const r of u)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(u){const r={};return u.integrity&&(r.integrity=u.integrity),u.referrerPolicy&&(r.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?r.credentials="include":u.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(u){if(u.ep)return;u.ep=!0;const r=s(u);fetch(u.href,r)}})();const Ie={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"S3 Physics — Optics & Heat","strands.title":"Choose a strand","strands.intro":"Select Optics or Heat to open that learning hub.","strand.optics.title":"Optics","strand.optics.desc":"Light and waves: reflection, refraction, lenses, and electromagnetic waves.","strand.optics.subtitle":"Optics — light and waves","strand.heat.title":"Heat","strand.heat.desc":"Temperature, heat transfer, and thermal physics (interactive labs, worksheets, flashcards).","strand.heat.subtitle":"Heat — temperature and energy transfer","strand.open":"Open strand","strand.back":"All strands","heat.section.empty":"Heat strand content.","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.refractionSnell":"Refraction and Snell’s law","topic.tir":"Total internal reflection","topic.refractionTir":"Refraction, Snell’s law & total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (?θ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 ? θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refractionTir.title":"Prison Break lab — refraction, Snell & TIR","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.lens.title":"Lens ray sketch","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.rgbMixer.title":"RGB colour mixer","tools.rgbMixer.intro":"Additive mixing: red, green and blue light combine on screens. Drag sliders or use presets.","tools.rgbMixer.canvas":"RGB light overlap diagram","tools.rgbMixer.controls":"Colour controls","tools.rgbMixer.red":"Red","tools.rgbMixer.green":"Green","tools.rgbMixer.blue":"Blue","tools.rgbMixer.preview":"Mixed colour preview","tools.rgbMixer.presets":"Presets","tools.rgbMixer.presetRed":"Red","tools.rgbMixer.presetGreen":"Green","tools.rgbMixer.presetBlue":"Blue","tools.rgbMixer.presetYellow":"Yellow","tools.rgbMixer.presetCyan":"Cyan","tools.rgbMixer.presetMagenta":"Magenta","tools.rgbMixer.presetWhite":"White","tools.rgbMixer.presetBlack":"Black","topic.rgbMixer":"RGB colour mixing","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Explore wavelength, frequency, and simulation labs","worksheets.title":"Worksheet generator","worksheets.intro":"Generate practice worksheets with online checking, hints, and export.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","worksheets.tabPractice":"Practice","worksheets.tabAnswer":"Answer key","worksheets.paperTitle":"S3 Optics — Multiple choice worksheet","worksheets.score":"Score","worksheets.hint":"Hint","worksheets.answer":"Answer","worksheets.today":"Today","worksheets.date":"Date","worksheets.exportWord":"Download Word","worksheets.exportWordAnswers":"Download answers (Word)","worksheets.sessionSummary":"Session summary","worksheets.firstTry":"Correct on first try","worksheets.revisionSuggestions":"Revision suggestions","worksheets.revisionExcellent":"Excellent — keep revising with flashcards.","worksheets.revisionGood":"Good progress — review any missed sections.","worksheets.revisionFair":"Fair — revisit summary notes for weak topics.","worksheets.revisionLow":"Needs work — study summaries and try again.","worksheets.weakSections":"Sections to review","flashcards.title":"Flashcards","flashcards.intro":"Flip cards to revise key terms. Reflection, Refraction, TIR, EM waves, Convex lens, and Concave lens use picture cards from your flashcard sets.","flashcards.progress":"Card {current} of {total}","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.shuffle":"Shuffle","flashcards.all":"All topics","flashcards.deck.refractionTir":"Refraction & TIR","summary.title":"Topic summaries","summary.intro":"HKDSE summary sheets (PDF or image). Preview below or open in a new tab.","summary.viewImage":"Open full image","summary.download":"Open / download PDF","summary.missing":"Summary PDF not found.","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection","summary.item.refraction":"Refraction and Snell’s law","summary.item.tir":"Total internal reflection","summary.item.convex":"Convex lens","summary.item.concave":"Concave lens","summary.item.em":"Electromagnetic waves","topic.thermometer":"Thermometer","topic.heatInternalEnergy":"Heat and internal energy","topic.changeOfState":"Change of state","topic.heatTransfer":"Heat transfer","topic.thermometerLab":"Thermometry & Calibration Lab","topic.viewNotes":"View notes","notes.card.thermometer":"Ch.1.1 Thermometer","notes.card.heatInternalEnergy":"Ch.1.2 Heat and internal energy","notes.card.changeOfState":"Ch.1.3 Change of state","notes.card.heatTransfer":"Ch.1.4 Heat transfer process","summary.item.thermometer":"Thermometer","summary.item.heatInternalEnergy":"Heat and internal energy","summary.item.changeOfState":"Change of state","summary.item.heatTransfer":"Heat transfer","flashcards.deck.thermometry":"Thermometry (all types)","flashcards.deck.heatInternalEnergy":"Heat and internal energy","flashcards.deck.changeOfState":"Change of state","flashcards.deck.heatTransfer":"Heat transfer","tools.thermometerLab.title":"Thermometry & Calibration Lab","tools.specificHeat.title":"Specific Heat Capacity Lab","tools.thermalMixing.title":"Thermal Mixing Lab","tools.changeOfState.title":"Change of State Lab","tools.heatTransfer.title":"Heat Transfer Laboratory","tools.thermometerLab.subtitle":"Interactive study companion for liquid-in-glass, platinum resistance, and thermistor thermometers.","tools.thermometerLab.liquid.title":"Liquid-in-Glass Thermometer","tools.thermometerLab.liquid.subtitle":"Explore the effects of bulb volume, capillary bore, and liquid type on sensitivity and response time.","tools.thermometerLab.resistance.title":"Platinum Resistance Thermometer","tools.thermometerLab.resistance.subtitle":"Investigate how platinum resistance varies linearly with temperature and solve calibration problems.","tools.thermometerLab.thermistor.title":"NTC Thermistor","tools.thermometerLab.thermistor.subtitle":"Study the non-linear resistance-temperature relationship of NTC thermistors and live beta calculations.","tools.thermometerLab.labels.show":"Show Structure Labels","tools.thermometerLab.labels.hide":"Hide Structure Labels","tools.thermometerLab.labels.thinWall":"Thin glass wall (fast heat transfer)","tools.thermometerLab.labels.largeBulb":"Large bulb (contains more liquid, increases sensitivity)","tools.thermometerLab.labels.narrowBore":"Narrow capillary bore (liquid rises higher, increases sensitivity)","tools.thermometerLab.labels.meniscus":"Meniscus (reading point)","tools.thermometerLab.labels.platinumCoil":"Platinum coil (resistance increases linearly with temp)","tools.thermometerLab.labels.metalSheath":"Metal sheath (protects & conducts heat quickly)","tools.thermometerLab.labels.semiconductorBead":"Semiconductor bead (resistance decreases exponentially with temp)","tools.thermometerLab.labels.leads":"Connecting leads","tools.thermometerLab.faulty.dualScale":"Dual-Scale Comparison Diagram","tools.thermometerLab.faulty.trueScale":"True Scale (°C)","tools.thermometerLab.faulty.faultyScale":"Faulty Scale (°C)","worksheets.paperTitleHeat":"S3 Heat — Multiple choice worksheet"},wt={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"中三物理 — 光與熱","strands.title":"選擇單元","strands.intro":"選擇光學或熱學，進入該學習中心。","strand.optics.title":"光學","strand.optics.desc":"光與波動：反射、折射、透鏡與電磁波。","strand.optics.subtitle":"光學 — 光與波動","strand.heat.title":"熱學","strand.heat.desc":"溫度、熱傳入與熱力學（互動實驗室。工作紙、閃卡）。","strand.heat.subtitle":"熱學 — 溫度與熱傳入","strand.open":"進入單元","strand.back":"全部單元","heat.section.empty":"熱學單元內容。","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.refractionSnell":"折射與司乃耳定律","topic.tir":"全反射","topic.refractionTir":"折射、司乃耳定律與全內反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refractionTir.title":"逃獄遊戲 — 折射、司乃耳與全內反射","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.lens.title":"透鏡 — 光線示意","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.rgbMixer.title":"RGB 顏色混合","tools.rgbMixer.intro":"加法混色：紅、綠、藍光在蟻幕上疊加。拖動滑棒或使用預設。","tools.rgbMixer.canvas":"RGB 光線疊加示意圖","tools.rgbMixer.controls":"顏色控制","tools.rgbMixer.red":"紅","tools.rgbMixer.green":"綠","tools.rgbMixer.blue":"藍","tools.rgbMixer.preview":"混合顏色預覽","tools.rgbMixer.presets":"預設","tools.rgbMixer.presetRed":"紅","tools.rgbMixer.presetGreen":"綠","tools.rgbMixer.presetBlue":"藍","tools.rgbMixer.presetYellow":"黃","tools.rgbMixer.presetCyan":"青","tools.rgbMixer.presetMagenta":"品紅","tools.rgbMixer.presetWhite":"白","tools.rgbMixer.presetBlack":"黑","topic.rgbMixer":"RGB 顏色混合","tools.em.title":"電磁波譜","tools.em.pick":"探索波長、頻率與模擬實驗","worksheets.title":"工作紙產生器","worksheets.intro":"產生練習工作紙，支援線上核對、提示與匯出。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","worksheets.tabPractice":"練習模式","worksheets.tabAnswer":"答案","worksheets.paperTitle":"S3 光學 — 多項選擇題工作紙","worksheets.score":"得分","worksheets.hint":"提示","worksheets.answer":"答案","worksheets.today":"今日","worksheets.date":"日期","worksheets.exportWord":"下載 Word","worksheets.exportWordAnswers":"下載答案（Word）","worksheets.sessionSummary":"本次練習摘要","worksheets.firstTry":"首次即答對","worksheets.revisionSuggestions":"複習建議","worksheets.revisionExcellent":"優秀 — 繼續用閃卡複習。","worksheets.revisionGood":"良好 — 重溫錯題所屬節。","worksheets.revisionFair":"一般 — 回顧總結針對弱項。","worksheets.revisionLow":"需努力 — 先温習總結再試。","worksheets.weakSections":"建議複習節次","flashcards.title":"閃卡","flashcards.intro":"翻卡複習重要詞彙。反射、折射、全內反射、電磁波、凸透鏡與凹透鏡課題使用圖片閃卡。","flashcards.progress":"第 {current} 張，共 {total} 張","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.shuffle":"洗牌","flashcards.all":"全部課題","flashcards.deck.refractionTir":"折射與全內反射","summary.title":"課題總結","summary.intro":"HKDSE 總結表（PDF 或圖片）。可於下方預覽，或新分頁開啟。","summary.viewImage":"開啟完整圖片","summary.download":"開啟 / 下載 PDF","summary.missing":"找不到總結 PDF。","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射","summary.item.refraction":"折射與司乃耳定律","summary.item.tir":"全內反射","summary.item.convex":"凸透鏡","summary.item.concave":"凹透鏡","summary.item.em":"電磁波","topic.thermometer":"溫度計","topic.heatInternalEnergy":"熱與內能","topic.changeOfState":"物態變化","topic.heatTransfer":"熱傳入","topic.thermometerLab":"溫度計與校準實驗室","topic.viewNotes":"查閱筆記","notes.card.thermometer":"Ch.1.1 溫度計","notes.card.heatInternalEnergy":"Ch.1.2 熱與內能","notes.card.changeOfState":"Ch.1.3 物態變化","notes.card.heatTransfer":"Ch.1.4 熱傳入","summary.item.thermometer":"溫度計","summary.item.heatInternalEnergy":"熱與內能","summary.item.changeOfState":"物態變化","summary.item.heatTransfer":"熱傳入","flashcards.deck.thermometry":"溫度計（各類）","flashcards.deck.heatInternalEnergy":"熱與內能","flashcards.deck.changeOfState":"物態變化","flashcards.deck.heatTransfer":"熱傳入","tools.thermometerLab.title":"溫度計與校準實驗室","tools.specificHeat.title":"比熱容量實驗室","tools.thermalMixing.title":"熱混合實驗室","tools.changeOfState.title":"物態變化實驗室","tools.heatTransfer.title":"熱的轉移實驗室","tools.thermometerLab.subtitle":"液體玻璃、鈐電阻及熱敏電阻溫度計的互動學習伴侶。","tools.thermometerLab.liquid.title":"液體玻璃溫度計","tools.thermometerLab.liquid.subtitle":"探索玻璃泡容積、毛細管內外徑和液體種類對靉敏度及反應時間的影響。","tools.thermometerLab.resistance.title":"鈐電阻溫度計","tools.thermometerLab.resistance.subtitle":"研究鈐電阻如何隨溫度呈線性變化，並解決溫度校準問題。","tools.thermometerLab.thermistor.title":"NTC 熱敏電阻溫度計","tools.thermometerLab.thermistor.subtitle":"學習負溫度係數（NTC）熱敏電阻的非線性電阻-溫度關係，並進行實時 Beta 計算。","tools.thermometerLab.labels.show":"顯示結構標註","tools.thermometerLab.labels.hide":"隱藏結構標註","tools.thermometerLab.labels.thinWall":"薄玻璃壁 (快速傳熱)","tools.thermometerLab.labels.largeBulb":"大玻璃泡 (容納更多液體，提高靉敏度)","tools.thermometerLab.labels.narrowBore":"細毛細管 (液柱升得更高，提高靉敏度)","tools.thermometerLab.labels.meniscus":"彎月面 (讀數位置)","tools.thermometerLab.labels.platinumCoil":"鈐絲線圈 (電阻隨溫度線性增加)","tools.thermometerLab.labels.metalSheath":"金屬保護套 (保護並快速導熱)","tools.thermometerLab.labels.semiconductorBead":"半導體小珠 (電阻隨溫度指數級減少)","tools.thermometerLab.labels.leads":"連接導線","tools.thermometerLab.faulty.dualScale":"雙刻度對比示意圖","tools.thermometerLab.faulty.trueScale":"標準溫標 (°C)","tools.thermometerLab.faulty.faultyScale":"偏差溫標 (°C)","worksheets.paperTitleHeat":"S3 熱學 — 多項選擇題工作紙"},lt="s3phy.lang",ct={en:Ie,"zh-Hant":wt};let We="en";function xt(){try{const t=localStorage.getItem(lt);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function kt(){We=xt()}function dt(t){if(ct[t]){We=t;try{localStorage.setItem(lt,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function de(){return We}function l(t){const i=ct[We]||Ie;return Object.prototype.hasOwnProperty.call(i,t)?i[t]:Object.prototype.hasOwnProperty.call(Ie,t)?Ie[t]:t}const qt=[{id:"optics",titleKey:"strand.optics.title",descKey:"strand.optics.desc"},{id:"heat",titleKey:"strand.heat.title",descKey:"strand.heat.desc"}];function St(t){function i(){t.innerHTML=`
      <header class="site-header site-header--strand-picker">
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
      <section class="panel panel--topic-hub panel--strand-hub">
        <h2>${l("strands.title")}</h2>
        <p class="lead">${l("strands.intro")}</p>
        <div class="grid cols-2 topic-hub-grid strand-hub-grid">
          ${qt.map(({id:u,titleKey:r,descKey:a})=>`
            <div class="card">
              <h3>${l(r)}</h3>
              <p>${l(a)}</p>
              <button class="btn primary" type="button" data-strand="${u}">${l("strand.open")}</button>
            </div>`).join("")}
        </div>
      </section>
    `;const n=t.querySelector("[data-lang]");n.innerHTML=`
      <button type="button" data-set-lang="en" class="${de()==="en"?"active":""}">${l("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${de()==="zh-Hant"?"active":""}">${l("lang.zhHant")}</button>
    `,n.querySelectorAll("button").forEach(u=>{u.addEventListener("click",()=>{dt(u.getAttribute("data-set-lang")),i()})}),t.querySelectorAll("[data-strand]").forEach(u=>{u.addEventListener("click",()=>{const r=u.getAttribute("data-strand");window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:r}))})})}const s=()=>i();return window.addEventListener("s3phy:lang",s),i(),()=>{window.removeEventListener("s3phy:lang",s)}}const ut=JSON.parse(`[{"topic":"reflection","section":"1.1 Law of reflection","en":{"q":"According to the law of reflection, the angle of incidence and the angle of reflection are ____.","choices":["equal","complementary","supplementary","unrelated"],"a":0,"exp":"Summary: i = r for all reflection.","hint":"Summary: i = r for all reflection."},"zhHant":{"q":"根據反射定律，入射角與反射角的關係是____。","choices":["相等","互餘","互補","無關"],"a":0,"exp":"總結：入射角 = 反射角。","hint":"總結：入射角 = 反射角。"}},{"topic":"reflection","section":"1.1 Angles from normal","en":{"q":"The angle of incidence is measured between the incident ray and the ____.","choices":["mirror surface","normal","reflected ray","principal axis"],"a":1,"exp":"Angles are measured from the normal, not the surface.","hint":"Angles are measured from the normal, not the surface."},"zhHant":{"q":"入射角是入射光線與哪一條線的夾角？","choices":["鏡面","法線","反射光線","主軸"],"a":1,"exp":"角度應與法線量度，不是與鏡面。","hint":"角度應與法線量度，不是與鏡面。"}},{"topic":"reflection","section":"2.1 Regular reflection","en":{"q":"Regular (specular) reflection occurs mainly on a ____ surface.","choices":["rough","smooth and flat","curved only","black"],"a":1,"exp":"Smooth polished surfaces give parallel reflected rays and clear images.","hint":"Smooth polished surfaces give parallel reflected rays and clear images."},"zhHant":{"q":"規則反射主要發生在____表面。","choices":["粗糙","光滑平坦","只有曲面","黑色"],"a":1,"exp":"光滑表面反射光線互相平行，可形成清晰像。","hint":"光滑表面反射光線互相平行，可形成清晰像。"}},{"topic":"reflection","section":"2.2 Diffuse reflection","en":{"q":"Diffuse reflection occurs on a ____ surface and does not form a clear image.","choices":["smooth","rough","silvered","underwater"],"a":1,"exp":"Rough surfaces scatter reflected rays in many directions.","hint":"Rough surfaces scatter reflected rays in many directions."},"zhHant":{"q":"漫反射發生在____表面，不能形成清晰像。","choices":["光滑","粗糙","鍍銀","水中"],"a":1,"exp":"粗糙表面使反射光向各方向散射。","hint":"粗糙表面使反射光向各方向散射。"}},{"topic":"reflection","section":"3 Plane mirror — virtual image","en":{"q":"The image formed by a plane mirror is always ____.","choices":["real","virtual","inverted","enlarged"],"a":1,"exp":"Plane mirror images are virtual; rays only appear to meet behind the mirror.","hint":"Plane mirror images are virtual."},"zhHant":{"q":"平面鏡所成的像必定是____。","choices":["實像","虛像","倒立","放大"],"a":1,"exp":"平面鏡成虛像，光線延長線在鏡後相交。","hint":"平面鏡成虛像，光線延長線在鏡後相交。"}},{"topic":"reflection","section":"3 Plane mirror — size and orientation","en":{"q":"A plane mirror image is ____ the object and is laterally inverted.","choices":["smaller than","the same size as","larger than","at infinity from"],"a":1,"exp":"Image height equals object height; left and right appear swapped.","hint":"Image height equals object height."},"zhHant":{"q":"平面鏡像與物體比較，大小____，且左右倒轉。","choices":["較小","相同","較大","在無窮遠"],"a":1,"exp":"像高與物高相同，並有左右倒轉。","hint":"像高與物高相同，並有左右倒轉。"}},{"topic":"reflection","section":"3 Object and image distance","en":{"q":"For a plane mirror, the object distance u and the image distance v satisfy ____.","choices":["v = 2u","v = u","v = u/2","v = 0"],"a":1,"exp":"The image is as far behind the mirror as the object is in front.","hint":"The image is as far behind the mirror as the object is in front."},"zhHant":{"q":"平面鏡的物距 u 與像距 v 滿足____。","choices":["v = 2u","v = u","v = u/2","v = 0"],"a":1,"exp":"像距等於物距（虛像在鏡後）。","hint":"像距等於物距（虛像在鏡後）。"}},{"topic":"reflection","section":"Minimum mirror length","en":{"q":"The minimum length of a plane mirror for a person to see their full height is about ____ of their height.","choices":["one quarter","one half","three quarters","the full"],"a":1,"exp":"Summary: minimum mirror length ≈ ½ × height (eyes to feet).","hint":"Summary: minimum mirror length ≈ ½ × height (eyes to feet)."},"zhHant":{"q":"要看見全身，平面鏡的最小長度約為身高的____。","choices":["四分之一","二分之一","四分之三","與身高相同"],"a":1,"exp":"總結：最小鏡長約為身高的一半。","hint":"總結：最小鏡長約為身高的一半。"}},{"topic":"reflection","section":"Light rays","en":{"q":"Light from a very distant object is usually treated as ____ rays.","choices":["converging","diverging","parallel","random"],"a":2,"exp":"Far-away rays arriving at the eye are nearly parallel.","hint":"Far-away rays arriving at the eye are nearly parallel."},"zhHant":{"q":"很遠的物體發出的光線通常可視為____。","choices":["會聚","發散","平行","雜亂"],"a":2,"exp":"遠距離光線接近平行。","hint":"遠距離光線接近平行。"}},{"topic":"reflection","section":"Rotating mirror","en":{"q":"If a plane mirror rotates through angle θ (incident ray fixed), the reflected ray turns through ____.","choices":["θ","2θ","θ/2","90° − θ"],"a":1,"exp":"Mirror rotation θ changes the reflected direction by 2θ.","hint":"Mirror rotation θ changes the reflected direction by 2θ."},"zhHant":{"q":"平面鏡轉動 θ（入射光線不變），反射光線方向改變____。","choices":["θ","2θ","θ/2","90° − θ"],"a":1,"exp":"鏡面轉 θ，反射光偏轉 2θ。","hint":"鏡面轉 θ，反射光偏轉 2θ。"}},{"topic":"refraction","section":"Snell's law","en":{"q":"Snell's law is written as ____.","choices":["n1 sin i = n2 sin r","n1 cos i = n2 cos r","sin i = sin r","i = r"],"a":0,"exp":"n1 sin i = n2 sin r relates angles and refractive indices.","hint":"n1 sin i = n2 sin r relates angles and refractive indices."},"zhHant":{"q":"司乃耳定律的公式是____。","choices":["n1 sin i = n2 sin r","n1 cos i = n2 cos r","sin i = sin r","i = r"],"a":0,"exp":"n1 sin i = n2 sin r 連結折射率與角度。","hint":"n1 sin i = n2 sin r 連結折射率與角度。"}},{"topic":"refraction","section":"Bending toward normal","en":{"q":"When light enters an optically denser medium (n2 > n1), it bends ____ the normal.","choices":["away from","toward","along","parallel to"],"a":1,"exp":"In a denser medium the ray is closer to the normal.","hint":"In a denser medium the ray is closer to the normal."},"zhHant":{"q":"光進入光密介質（n2 > n1）時，向法線哪方偏折？","choices":["遠離","靠近","沿法線","平行法線"],"a":1,"exp":"進入光密介質時光線較靠近法線。","hint":"進入光密介質時光線較靠近法線。"}},{"topic":"refraction","section":"Refractive index","en":{"q":"The refractive index n of a medium is defined as n = ____.","choices":["v/c","c/v","sin r/sin i","i/r"],"a":1,"exp":"n = speed of light in vacuum / speed in the medium.","hint":"n = speed of light in vacuum / speed in the medium."},"zhHant":{"q":"折射率 n 的定義為 n = ____。","choices":["v/c","c/v","sin r/sin i","i/r"],"a":1,"exp":"n = 真空光速 / 介質中光速。","hint":"n = 真空光速 / 介質中光速。"}},{"topic":"refraction","section":"Apparent depth","en":{"q":"When viewing an object under water from above, it appears ____ than its real depth.","choices":["deeper","shallower","at the same depth","inverted"],"a":1,"exp":"Refraction at the surface makes the image appear closer (apparent depth < real depth).","hint":"Refraction at the surface makes the image appear closer (apparent depth < real depth)."},"zhHant":{"q":"從水上俯視水底物體，它看起來比實際深度____。","choices":["更深","較淺","相同","倒立"],"a":1,"exp":"折射使視深小於實深。","hint":"折射使視深小於實深。"}},{"topic":"refraction","section":"Speed in medium","en":{"q":"In a medium with higher refractive index, light travels ____.","choices":["faster","slower","at the same speed as in vacuum","only as transverse waves"],"a":1,"exp":"Larger n means smaller speed v = c/n.","hint":"Larger n means smaller speed v = c/n."},"zhHant":{"q":"折射率較大的介質中，光速____。","choices":["較快","較慢","與真空中相同","只有橫波"],"a":1,"exp":"n 越大，v = c/n 越小。","hint":"n 越大，v = c/n 越小。"}},{"topic":"refraction","section":"Normal incidence","en":{"q":"If light strikes a boundary at normal incidence (i = 0°), it ____.","choices":["undergoes TIR","passes straight through without bending","is fully absorbed","doubles its speed"],"a":1,"exp":"At i = 0°, the refracted ray continues along the normal.","hint":"At i = 0°, the refracted ray continues along the normal."},"zhHant":{"q":"光垂直入射介面（i = 0°）時，____。","choices":["發生全內反射","不偏折直穿過","完全被吸收","速度加倍"],"a":1,"exp":"i = 0° 時折射光沿法線方向。","hint":"i = 0° 時折射光沿法線方向。"}},{"topic":"refraction","section":"Less dense medium","en":{"q":"When light passes from a denser to a less dense medium, it bends ____ the normal.","choices":["toward","away from","along","not at all"],"a":1,"exp":"Leaving a denser medium, the ray moves away from the normal.","hint":"Leaving a denser medium, the ray moves away from the normal."},"zhHant":{"q":"光由光密進入光疏介質時，向法線____偏折。","choices":["靠近","遠離","沿法線","不偏折"],"a":1,"exp":"進入光疏介質時光線遠離法線。","hint":"進入光疏介質時光線遠離法線。"}},{"topic":"refraction","section":"Reversibility","en":{"q":"If the direction of light along a refracted path is reversed, the ray ____.","choices":["follows a different path","retraces the same path","always reflects","stops"],"a":1,"exp":"Refraction obeys reversibility of light rays.","hint":"Refraction obeys reversibility of light rays."},"zhHant":{"q":"沿折射光路反向傳播時，光線____。","choices":["走另一條路","沿原路返回","必定反射","停止"],"a":1,"exp":"折射符合光路可逆性。","hint":"折射符合光路可逆性。"}},{"topic":"refraction","section":"n of air","en":{"q":"For most calculations in air, the refractive index is taken as approximately ____.","choices":["0","1","1.5","2.4"],"a":1,"exp":"Air ≈ 1; glass and water have n > 1.","hint":"Air ≈ 1; glass and water have n > 1."},"zhHant":{"q":"在空氣中的計算通常取折射率約為____。","choices":["0","1","1.5","2.4"],"a":1,"exp":"空氣 n ≈ 1。","hint":"空氣 n ≈ 1。"}},{"topic":"refraction","section":"Angle increases in rarer medium","en":{"q":"When light enters a rarer medium from a denser one, the angle in the rarer medium is ____ the angle of incidence in the denser medium.","choices":["smaller than","equal to","larger than","always zero"],"a":2,"exp":"From Snell's law, sin r > sin i when n2 < n1.","hint":"From Snell's law, sin r > sin i when n2 < n1."},"zhHant":{"q":"光由光密進入光疏時，光疏中的折射角與光密中的入射角相比____。","choices":["較小","相等","較大","恆為零"],"a":2,"exp":"n2 < n1 時 sin r > sin i。","hint":"n2 < n1 時 sin r > sin i。"}},{"topic":"tir","section":"Condition for TIR","en":{"q":"Total internal reflection can occur when light travels from ____ to ____.","choices":["rare to dense","dense to rare","air to air","vacuum to vacuum"],"a":1,"exp":"TIR needs light incident in the optically denser medium.","hint":"TIR needs light incident in the optically denser medium."},"zhHant":{"q":"全內反射發生時，光由____進入____。","choices":["光疏到光密","光密到光疏","空氣到空氣","真空到真空"],"a":1,"exp":"須從光密介質射向光疏介質。","hint":"須從光密介質射向光疏介質。"}},{"topic":"tir","section":"Critical angle formula","en":{"q":"The critical angle C when light goes from medium 1 (denser) to medium 2 (rarer) satisfies sin C = ____.","choices":["n1/n2","n2/n1","n1 + n2","1"],"a":1,"exp":"sin C = n_rare / n_dense (second medium / first).","hint":"sin C = n_rare / n_dense (second medium / first)."},"zhHant":{"q":"光由介質 1（光密）到介質 2（光疏）的臨界角 C 滿足 sin C = ____。","choices":["n1/n2","n2/n1","n1 + n2","1"],"a":1,"exp":"sin C = n疏 / n密。","hint":"sin C = n疏 / n密。"}},{"topic":"tir","section":"Angle for TIR","en":{"q":"TIR occurs when the angle of incidence in the denser medium is ____ the critical angle.","choices":["less than","equal to","greater than","unrelated to"],"a":2,"exp":"i > C gives total internal reflection.","hint":"i > C gives total internal reflection."},"zhHant":{"q":"當光密中的入射角____臨界角時發生全內反射。","choices":["小於","等於","大於","與…無關"],"a":2,"exp":"i > C 時全內反射。","hint":"i > C 時全內反射。"}},{"topic":"tir","section":"At critical angle","en":{"q":"At the critical angle, the refracted ray along the boundary has an angle of refraction of ____.","choices":["0°","45°","90°","180°"],"a":2,"exp":"At C the refracted ray grazes the surface (r = 90°).","hint":"At C the refracted ray grazes the surface (r = 90°)."},"zhHant":{"q":"在臨界角時，折射光線沿界面的折射角為____。","choices":["0°","45°","90°","180°"],"a":2,"exp":"臨界角時 r = 90°。","hint":"臨界角時 r = 90°。"}},{"topic":"tir","section":"Optical fibre","en":{"q":"Optical fibres use repeated ____ to keep light inside the core.","choices":["diffraction","total internal reflection","polarization","dispersion only"],"a":1,"exp":"Core-cladding TIR guides light along the fibre.","hint":"Core-cladding TIR guides light along the fibre."},"zhHant":{"q":"光纖利用重複的____使光在芯內傳播。","choices":["繞射","全內反射","偏振","只有色散"],"a":1,"exp":"芯與包層間的全內反射導光。","hint":"芯與包層間的全內反射導光。"}},{"topic":"tir","section":"Diamond brilliance","en":{"q":"Diamonds sparkle partly because their high refractive index gives a ____ critical angle.","choices":["large","small","zero","infinite"],"a":1,"exp":"Small C means more TIR inside the gem.","hint":"Small C means more TIR inside the gem."},"zhHant":{"q":"鑽石耀眼，部分原因是高折射率使臨界角____。","choices":["大","小","零","無窮"],"a":1,"exp":"臨界角小，內部全內反射多。","hint":"臨界角小，內部全內反射多。"}},{"topic":"tir","section":"No TIR rare to dense","en":{"q":"When light travels from a rarer to a denser medium, total internal reflection ____.","choices":["always occurs","never occurs","occurs at 45° only","replaces refraction"],"a":1,"exp":"TIR requires dense-to-rare incidence.","hint":"TIR requires dense-to-rare incidence."},"zhHant":{"q":"光由光疏進入光密時，全內反射____。","choices":["一定發生","不會發生","只在 45° 發生","取代折射"],"a":1,"exp":"全內反射需光密→光疏。","hint":"全內反射需光密→光疏。"}},{"topic":"tir","section":"Partial vs total","en":{"q":"If i < C (dense to rare), both reflection and ____ occur at the boundary.","choices":["absorption only","refraction","diffraction","polarization"],"a":1,"exp":"Below C there is partial reflection and refraction.","hint":"Below C there is partial reflection and refraction."},"zhHant":{"q":"光密→光疏且 i < C 時，界面上同時有反射和____。","choices":["只有吸收","折射","繞射","偏振"],"a":1,"exp":"i < C 時為部分反射與折射。","hint":"i < C 時為部分反射與折射。"}},{"topic":"tir","section":"Periscope mirrors","en":{"q":"A periscope using plane mirrors relies on ____ at each mirror.","choices":["refraction only","reflection","TIR in glass only","diffraction"],"a":1,"exp":"Standard periscopes use reflection, not TIR.","hint":"Standard periscopes use reflection, not TIR."},"zhHant":{"q":"用平面鏡的潛望鏡在每面鏡上依靠____。","choices":["只有折射","反射","只在玻璃內全內反射","繞射"],"a":1,"exp":"一般潛望鏡用反射。","hint":"一般潛望鏡用反射。"}},{"topic":"tir","section":"Water-air C","en":{"q":"For light from water (n ≈ 1.33) to air (n ≈ 1), sin C is approximately ____.","choices":["1.33","1/1.33","0","2.33"],"a":1,"exp":"sin C = n_air / n_water ≈ 1/1.33.","hint":"sin C = n_air / n_water ≈ 1/1.33."},"zhHant":{"q":"光由水（n ≈ 1.33）到空氣（n ≈ 1），sin C 約為____。","choices":["1.33","1/1.33","0","2.33"],"a":1,"exp":"sin C = n空氣 / n水。","hint":"sin C = n空氣 / n水。"}},{"topic":"convex","section":"Definition","en":{"q":"A convex lens is also called a ____ lens.","choices":["diverging","converging","neutral","polarizing"],"a":1,"exp":"Convex lenses converge parallel rays toward a focus.","hint":"Convex lenses converge parallel rays toward a focus."},"zhHant":{"q":"凸透鏡又稱____透鏡。","choices":["發散","會聚","中性","偏振"],"a":1,"exp":"凸透鏡使平行光會聚。","hint":"凸透鏡使平行光會聚。"}},{"topic":"convex","section":"Rule 1","en":{"q":"For a convex lens, a ray parallel to the principal axis refracts through ____.","choices":["the optical centre only","the focal point F","infinity","the object"],"a":1,"exp":"Rule 1: parallel in, focus out.","hint":"Rule 1: parallel in, focus out."},"zhHant":{"q":"凸透鏡：平行於主軸的光線折射後通過____。","choices":["只有光心","焦點 F","無窮遠","物體"],"a":1,"exp":"規則一：平行入、焦點出。","hint":"規則一：平行入、焦點出。"}},{"topic":"convex","section":"Rule 2","en":{"q":"A ray through the focus F of a convex lens emerges ____ to the principal axis.","choices":["perpendicular","parallel","at 45°","backward"],"a":1,"exp":"Rule 2: focus in, parallel out.","hint":"Rule 2: focus in, parallel out."},"zhHant":{"q":"通過凸透鏡焦點 F 的光線折射後與主軸____。","choices":["垂直","平行","成 45°","反向"],"a":1,"exp":"規則二：焦點入、平行出。","hint":"規則二：焦點入、平行出。"}},{"topic":"convex","section":"Rule 3","en":{"q":"A ray through the optical centre C of a thin lens ____.","choices":["always stops","continues straight without deviation","must reflect","doubles in speed"],"a":1,"exp":"Rule 3: C in, C out — undeviated.","hint":"Rule 3: C in, C out — undeviated."},"zhHant":{"q":"通過薄透鏡光心 C 的光線____。","choices":["必定停止","直線通過不偏折","必定反射","速度加倍"],"a":1,"exp":"規則三：光心入、光心出。","hint":"規則三：光心入、光心出。"}},{"topic":"convex","section":"u > 2f image","en":{"q":"A real object beyond 2f from a convex lens forms a real image that is ____.","choices":["enlarged","inverted and diminished between f and 2f","virtual and upright","at the object"],"a":1,"exp":"u > 2f: real, inverted, diminished image between f and 2f.","hint":"u > 2f: real, inverted, diminished image between f and 2f."},"zhHant":{"q":"實物在凸透鏡 2f 以外時，像為____。","choices":["放大","倒立縮小且在 f 與 2f 之間","虛像正立","在物體處"],"a":1,"exp":"u > 2f：實像、倒立、縮小。","hint":"u > 2f：實像、倒立、縮小。"}},{"topic":"convex","section":"u = 2f","en":{"q":"When u = 2f for a convex lens, the image is formed at ____.","choices":["f","2f on the other side","infinity","inside the lens"],"a":1,"exp":"u = 2f gives v = 2f, same size inverted real image.","hint":"u = 2f gives v = 2f, same size inverted real image."},"zhHant":{"q":"凸透鏡 u = 2f 時，像成在____。","choices":["f","另一側 2f","無窮遠","鏡內"],"a":1,"exp":"u = v = 2f，等大倒立實像。","hint":"u = v = 2f，等大倒立實像。"}},{"topic":"convex","section":"u between f and 2f","en":{"q":"When f < u < 2f for a convex lens, the image is real, inverted and ____.","choices":["diminished","enlarged","same size","virtual"],"a":1,"exp":"f < u < 2f gives enlarged real image beyond 2f.","hint":"f < u < 2f gives enlarged real image beyond 2f."},"zhHant":{"q":"凸透鏡 f < u < 2f 時，像為實像、倒立且____。","choices":["縮小","放大","等大","虛像"],"a":1,"exp":"f < u < 2f：放大實像。","hint":"f < u < 2f：放大實像。"}},{"topic":"convex","section":"u < f","en":{"q":"When the object is inside the focal length of a convex lens (u < f), the image is ____.","choices":["real and inverted","virtual, upright and enlarged","at 2f","absent"],"a":1,"exp":"u < f: virtual magnifying-glass image.","hint":"u < f: virtual magnifying-glass image."},"zhHant":{"q":"物在凸透鏡焦距內（u < f）時，像為____。","choices":["實像倒立","虛像正立放大","在 2f","不存在"],"a":1,"exp":"u < f：虛像、正立、放大（放大鏡）。","hint":"u < f：虛像、正立、放大（放大鏡）。"}},{"topic":"convex","section":"Sign of f","en":{"q":"In the usual thin-lens sign convention, the focal length of a convex lens is ____.","choices":["negative","positive","zero","imaginary"],"a":1,"exp":"Convex converging lenses have f > 0.","hint":"Convex converging lenses have f > 0."},"zhHant":{"q":"薄透鏡符號規定中，凸透鏡的焦距為____。","choices":["負","正","零","虛數"],"a":1,"exp":"凸透鏡 f > 0。","hint":"凸透鏡 f > 0。"}},{"topic":"convex","section":"Camera","en":{"q":"A camera uses a convex lens to form a ____ image on the sensor.","choices":["virtual upright","real inverted","virtual enlarged","no"],"a":1,"exp":"Objects are usually beyond 2f → real inverted image.","hint":"Objects are usually beyond 2f → real inverted image."},"zhHant":{"q":"相機用凸透鏡在感光元件上成____。","choices":["虛像正立","實像倒立","虛像放大","無像"],"a":1,"exp":"物通常在 2f 外→實像倒立。","hint":"物通常在 2f 外→實像倒立。"}},{"topic":"concave","section":"Definition","en":{"q":"A concave lens is a ____ lens.","choices":["converging","diverging","converging only for virtual objects","polarizing"],"a":1,"exp":"Concave lenses spread out parallel rays.","hint":"Concave lenses spread out parallel rays."},"zhHant":{"q":"凹透鏡是____透鏡。","choices":["會聚","發散","只對虛物會聚","偏振"],"a":1,"exp":"凹透鏡使平行光發散。","hint":"凹透鏡使平行光發散。"}},{"topic":"concave","section":"Image for real object","en":{"q":"For a real object, a concave lens always forms a ____ image.","choices":["real inverted","virtual upright diminished","real enlarged","at F"],"a":1,"exp":"Diverging lens → virtual, upright, smaller image.","hint":"Diverging lens → virtual, upright, smaller image."},"zhHant":{"q":"凹透鏡對實物總是成____。","choices":["實像倒立","虛像正立縮小","實像放大","在 F"],"a":1,"exp":"發散透鏡→虛像、正立、縮小。","hint":"發散透鏡→虛像、正立、縮小。"}},{"topic":"concave","section":"Sign of f","en":{"q":"The focal length of a concave lens in the usual convention is ____.","choices":["positive","negative","infinite","equal to u"],"a":1,"exp":"Concave diverging lenses have f < 0.","hint":"Concave diverging lenses have f < 0."},"zhHant":{"q":"凹透鏡的焦距在慣用符號下為____。","choices":["正","負","無窮","等於 u"],"a":1,"exp":"凹透鏡 f < 0。","hint":"凹透鏡 f < 0。"}},{"topic":"concave","section":"Parallel ray","en":{"q":"After a concave lens, a ray parallel to the axis appears to come from ____.","choices":["2F on the object side","the focal point F on the same side as the object","infinity behind","the centre of Earth"],"a":1,"exp":"Parallel in, diverges as if from F.","hint":"Parallel in, diverges as if from F."},"zhHant":{"q":"凹透鏡：平行主軸的光線折射後好像來自____。","choices":["物方 2F","物方焦點 F","鏡後無窮遠","地心"],"a":1,"exp":"平行入、發散似從 F 出發。","hint":"平行入、發散似從 F 出發。"}},{"topic":"concave","section":"Myopia correction","en":{"q":"Concave lenses are used in spectacles to correct ____.","choices":["long-sightedness (hyperopia)","short-sightedness (myopia)","colour blindness","TIR"],"a":1,"exp":"Myopia needs diverging lenses to move the focus onto the retina.","hint":"Myopia needs diverging lenses to move the focus onto the retina."},"zhHant":{"q":"凹透鏡眼鏡用於矯正____。","choices":["遠視","近視","色盲","全內反射"],"a":1,"exp":"近視需發散透鏡使焦點後移到視網膜。","hint":"近視需發散透鏡使焦點後移到視網膜。"}},{"topic":"concave","section":"Image position","en":{"q":"The virtual image from a concave lens is always on the ____ side as the object.","choices":["opposite","same","only left","only at C"],"a":1,"exp":"Virtual image lies between F and the lens on the object side.","hint":"Virtual image lies between F and the lens on the object side."},"zhHant":{"q":"凹透鏡的虛像總是在物的____側。","choices":["對","同","只在左","只在 C"],"a":1,"exp":"虛像在物與透鏡之間。","hint":"虛像在物與透鏡之間。"}},{"topic":"concave","section":"Thickness","en":{"q":"A concave lens is thinner at the ____ and thicker at the edges.","choices":["edges","middle","focus only","top only"],"a":1,"exp":"Diverging lenses are thinner in the centre.","hint":"Diverging lenses are thinner in the centre."},"zhHant":{"q":"凹透鏡____較薄，邊緣較厚。","choices":["邊緣","中央","只有焦點處","只有上方"],"a":1,"exp":"凹透鏡中間薄、邊緣厚。","hint":"凹透鏡中間薄、邊緣厚。"}},{"topic":"concave","section":"Cannot form real image","en":{"q":"Can a concave lens alone form a real image of a real object on a screen?","choices":["Yes, always","No","Only if u < f","Only in vacuum"],"a":1,"exp":"Real objects always give virtual images with a diverging lens.","hint":"Real objects always give virtual images with a diverging lens."},"zhHant":{"q":"凹透鏡能否單獨把實物的實像成在屏幕上？","choices":["能，總是","不能","只有 u < f 能","只在真空中能"],"a":1,"exp":"實物經凹透鏡只能成虛像。","hint":"實物經凹透鏡只能成虛像。"}},{"topic":"concave","section":"Galilean telescope component","en":{"q":"In a simple Galilean telescope, the eyepiece is often a ____ lens.","choices":["convex","concave","cylindrical only","none"],"a":1,"exp":"Galilean design uses concave eyepiece with convex objective.","hint":"Galilean design uses concave eyepiece with convex objective."},"zhHant":{"q":"簡單伽利略望遠鏡的目鏡通常是____透鏡。","choices":["凸","凹","只有柱面","無"],"a":1,"exp":"伽利略式：凸物鏡 + 凹目鏡。","hint":"伽利略式：凸物鏡 + 凹目鏡。"}},{"topic":"concave","section":"Power","en":{"q":"A lens with a more negative focal length has ____ diverging power.","choices":["less","greater","no","infinite converging"],"a":1,"exp":"Smaller (more negative) f means stronger divergence.","hint":"Smaller (more negative) f means stronger divergence."},"zhHant":{"q":"焦距越負（絕對值越大）的凹透鏡，發散能力____。","choices":["越弱","越強","無","變會聚"],"a":1,"exp":"f 越負，發散越強。","hint":"f 越負，發散越強。"}},{"topic":"em","section":"Transverse waves","en":{"q":"Electromagnetic waves are transverse waves that can travel in ____.","choices":["solids only","vacuum","liquids only","wires only"],"a":1,"exp":"EM waves do not need a medium; they travel in vacuum.","hint":"EM waves do not need a medium."},"zhHant":{"q":"電磁波是橫波，可在____中傳播。","choices":["只有固體","真空","只有液體","只有金屬線"],"a":1,"exp":"電磁波不需介質，可在真空傳播。","hint":"電磁波不需介質，可在真空傳播。"}},{"topic":"em","section":"Spectrum order frequency","en":{"q":"Which order shows increasing frequency?","choices":["radio → microwave → IR → visible → UV → X-ray → gamma","gamma → X-ray → radio","visible → radio → gamma","IR → radio → UV only"],"a":0,"exp":"Standard EM spectrum from low to high frequency.","hint":"Standard EM spectrum from low to high frequency."},"zhHant":{"q":"下列哪個次序為頻率遞增？","choices":["無線電→微波→紅外→可見→紫外→X→γ","γ→X→無線電","可見→無線電→γ","只有紅外→無線電→紫外"],"a":0,"exp":"電磁波譜由低頻到高頻的標準次序。","hint":"電磁波譜由低頻到高頻的標準次序。"}},{"topic":"em","section":"Wavelength and frequency","en":{"q":"For electromagnetic waves, when frequency increases, wavelength ____ (in the same medium).","choices":["increases","decreases","stays the same","doubles always"],"a":1,"exp":"c = fλ; higher f means shorter λ.","hint":"c = fλ; higher f means shorter λ."},"zhHant":{"q":"電磁波頻率增加時，波長在同一介質中____。","choices":["增加","減少","不變","總是加倍"],"a":1,"exp":"c = fλ，f 大則 λ 小。","hint":"c = fλ，f 大則 λ 小。"}},{"topic":"em","section":"Visible range","en":{"q":"The visible spectrum is roughly between ____ nm in wavelength.","choices":["400–700","10–100","1–10","700–1000 only"],"a":0,"exp":"Visible light ≈ 400 nm (violet) to 700 nm (red).","hint":"Visible light ≈ 400 nm (violet) to 700 nm (red)."},"zhHant":{"q":"可見光波長大約在____ nm 之間。","choices":["400–700","10–100","1–10","只有 700–1000"],"a":0,"exp":"可見光約 400–700 nm。","hint":"可見光約 400–700 nm。"}},{"topic":"em","section":"Microwave use","en":{"q":"Microwaves are commonly used for ____.","choices":["cable TV only","satellite communication and microwave ovens","gamma therapy","periscopes"],"a":1,"exp":"Summary lists communications and heating applications.","hint":"Summary lists communications and heating applications."},"zhHant":{"q":"微波常用於____。","choices":["只有有線電視","衛星通訊與微波爐","γ 治療","潛望鏡"],"a":1,"exp":"通訊與加熱是微波常見用途。","hint":"通訊與加熱是微波常見用途。"}},{"topic":"em","section":"UV hazard","en":{"q":"Excessive ultraviolet radiation can cause ____.","choices":["only heating","skin damage and eye harm","only radio interference","TIR"],"a":1,"exp":"UV can damage skin and eyes; use protection.","hint":"UV can damage skin and eyes."},"zhHant":{"q":"過量紫外輻射可導致____。","choices":["只有加熱","皮膚與眼睛損傷","只有無線電干擾","全內反射"],"a":1,"exp":"紫外線可損害皮膚和眼睛。","hint":"紫外線可損害皮膚和眼睛。"}},{"topic":"em","section":"X-ray use","en":{"q":"X-rays are used medically mainly because they ____.","choices":["are visible","penetrate soft tissue and affect photographic film","only reflect","have the longest wavelength"],"a":1,"exp":"X-rays pass through flesh but are absorbed more by bone.","hint":"X-rays pass through flesh but are absorbed more by bone."},"zhHant":{"q":"X 射線在醫學上主要因為它們____。","choices":["是可見光","能穿透軟組織並使底片感光","只反射","波長最長"],"a":1,"exp":"X 射線可穿透軟組織，骨頭吸收較多。","hint":"X 射線可穿透軟組織，骨頭吸收較多。"}},{"topic":"em","section":"Additive colour","en":{"q":"In additive colour mixing on screens, red + green + blue gives ____.","choices":["black","white","cyan only","magenta only"],"a":1,"exp":"RGB additive mixing: full red, green and blue → white.","hint":"RGB additive mixing: full red, green and blue → white."},"zhHant":{"q":"螢幕上加法混色：紅 + 綠 + 藍 = ____。","choices":["黑","白","只有青","只有品紅"],"a":1,"exp":"RGB 全亮→白色。","hint":"RGB 全亮→白色。"}},{"topic":"em","section":"Speed in vacuum","en":{"q":"All electromagnetic waves travel at speed c ≈ 3×10⁸ m s⁻¹ in ____.","choices":["water only","vacuum","glass only","copper wire only"],"a":1,"exp":"In vacuum all EM waves share the same speed c.","hint":"In vacuum all EM waves share the same speed c."},"zhHant":{"q":"所有電磁波在____中速率約為 c ≈ 3×10⁸ m s⁻¹。","choices":["只有水","真空","只有玻璃","只有銅線"],"a":1,"exp":"真空中各種電磁波速率均為 c。","hint":"真空中各種電磁波速率均為 c。"}},{"topic":"em","section":"Infrared","en":{"q":"Infrared radiation is strongly associated with ____.","choices":["nuclear decay only","thermal emission from warm objects","only gamma rays","only reflection in mirrors"],"a":1,"exp":"Warm bodies emit IR; used in thermal imaging and heaters.","hint":"Warm bodies emit IR."},"zhHant":{"q":"紅外輻射與____關係密切。","choices":["只有核衰變","暖物體的熱輻射","只有 γ 射線","只有鏡面反射"],"a":1,"exp":"暖物體發出紅外線；用於熱成像等。","hint":"暖物體發出紅外線；用於熱成像等。"}},{"topic":"liquidThermometer","section":"Thermometric Liquid","en":{"q":"Why is mercury preferred over alcohol to measure hot cooking oil at 150°C?","choices":["Mercury is cheaper","Mercury has a higher boiling point (356.7°C) than alcohol (78.4°C)","Mercury is non-toxic","Mercury is transparent"],"a":1,"exp":"Alcohol boils at 78.4°C and would vaporize under high pressure, whereas mercury boils at 356.7°C.","hint":"Compare their boiling points."},"zhHant":{"q":"為什麼在測量 150°C 的熱食油時，水銀比酒精更適合用作溫度計液體？","choices":["水銀較便宜","水銀的沸點 (356.7°C) 比酒精 (78.4°C) 高","水銀無毒","水銀是透明的"],"a":1,"exp":"酒精在 78.4°C 沸騰並會汽化產生高壓，而水銀的沸點高達 356.7°C。","hint":"比較兩者的沸點。"}},{"topic":"faultyThermometer","section":"Faulty Scale Correction","en":{"q":"A faulty thermometer reads -1.5°C in melting ice and 105°C in steam. What is the true temperature when it reads 25.0°C?","choices":["23.5°C","24.9°C","26.5°C","25.0°C"],"a":1,"exp":"T = ((C - C_f)/(C_u - C_f)) * 100 = ((25.0 - (-1.5))/(105 - (-1.5))) * 100 = (26.5 / 106.5) * 100 ≈ 24.9°C.","hint":"Apply the proportional interval formula."},"zhHant":{"q":"某有誤差的溫度計在熔冰中讀數為 -1.5°C，在蒸汽中讀數為 105°C。當讀數為 25.0°C 時，實際溫度是多少？","choices":["23.5°C","24.9°C","26.5°C","25.0°C"],"a":1,"exp":"T = ((25.0 - (-1.5)) / (105 - (-1.5))) * 100 = (26.5 / 106.5) * 100 ≈ 24.9°C。","hint":"應用等比例區間公式。"}},{"topic":"resistanceThermometer","section":"Platinum Resistance Assumption","en":{"q":"What is the fundamental physical assumption when using a platinum resistance thermometer?","choices":["The resistance varies exponentially with temperature","The resistance varies linearly with temperature","The resistance is independent of temperature","The resistance drops to zero at 0°C"],"a":1,"exp":"Using the formula theta = ((R - R0)/(R100 - R0)) * 100 assumes a linear relationship between resistance and temperature.","hint":"Think about the calibration formula."},"zhHant":{"q":"使用鉑電阻溫度計時，最基本的物理假設是什麼？","choices":["電阻隨溫度呈指數變化","電阻隨溫度呈線性變化","電阻與溫度無關","電阻在 0°C 時降至零"],"a":1,"exp":"使用公式 theta = ((R - R0) / (R100 - R0)) * 100 假設了電阻與溫度之間存在線性關係。","hint":"思考校準公式。"}},{"topic":"thermistor","section":"NTC Thermistor","en":{"q":"What does NTC stand for in thermistors, and how does its resistance change as temperature increases?","choices":["Neutral Temperature Coefficient; resistance stays constant","Negative Temperature Coefficient; resistance decreases","Normal Thermal Conduction; resistance increases","Negative Thermal Conduction; resistance increases"],"a":1,"exp":"NTC stands for Negative Temperature Coefficient. Its resistance decreases exponentially as temperature increases.","hint":"Negative coefficient means opposite direction."},"zhHant":{"q":"熱敏電阻中的 NTC 代表什麼？當溫度升高時，其電阻如何變化？","choices":["中性溫度係數；電阻保持不變","負溫度係數；電阻減少","正常熱傳導；電阻增加","負熱傳導；電阻增加"],"a":1,"exp":"NTC 代表負溫度係數（Negative Temperature Coefficient）。隨著溫度升高，其電阻會呈指數級減少。","hint":"負係數意味著相反的變化方向。"}}]`),ft=JSON.parse(`[{"topic":"refraction","en":{"q":"What is refraction?","a":"Definition of Refraction Refraction is the bending of light when passing from one medium to another Light changes speed and direction Frequency remains constant Wavelength changes"},"zhHant":{"q":"什麼是光的折射？","a":"光從一種介質進入另一種介質時 光速改變，導致光線改變方向 發生在兩種介質的交界面"}},{"topic":"refraction","en":{"q":"What happens when light enters denser medium?","a":"Light Entering Denser Medium Light slows down Light bends towards normal Angle of refraction < Angle of incidence ( ) r<i Examples: Air → Water, Air → Glass"},"zhHant":{"q":"折射率的定義公式是什麼？","a":"n= vc ：真空中的光速（ m/s） c 3×108 ：光在介質中的速度 v 折射率越大，光速越慢"}},{"topic":"refraction","en":{"q":"What happens when light enters less dense medium?","a":"Light Entering Less Dense Medium Light speeds up Light bends away from normal Angle of refraction > Angle of incidence ( ) r>i Examples: Water → Air, Glass → Air Q: When does light NOT bend? A: Q: What is refractive index? A: Q: What are common refractive indices? A:"},"zhHant":{"q":"斯涅爾定律的公式是什麼？","a":"n sinθ =1 1 n sinθ 2 2 sini=nsinr 問題： 折射定律的內容是什麼？ 答案： 問題： 什麼是光密介質和光疏介質？ 答案： 問題： 光線什麼時候向法線靠攏？什麼時候遠離法線？ 答案： 問題： 折射率與光速有什麼關係？ 答案："}},{"topic":"refraction","en":{"q":"When does light NOT bend?","a":"No Refraction Cases Normal incidence: Light hits at 90° (along normal)1. Same medium: No boundary crossed2. Direction unchanged in both cases"},"zhHant":{"q":"折射定律的內容是什麼？","a":"法線、入射光線和折射光線都在同一平面上1. （斯涅爾定律） 2. =sinrsini 常數"}},{"topic":"refraction","en":{"q":"What is refractive index?","a":"Refractive Index Definition n= vc = refractive index (no unit) n = speed of light in vacuum ( m s ) c 3×108 −1 = speed of light in medium v always n≥1"},"zhHant":{"q":"什麼是光密介質和光疏介質？","a":"光密介質：折射率較大的介質 光疏介質：折射率較小的介質 例如：玻璃（光密）、空氣（光疏）"}},{"topic":"refraction","en":{"q":"What are common refractive indices?","a":"Common Refractive Indices Higher → Optically denser Q: What is Snell's Law? A: Q: Snell's Law when light enters from air? A: Since : Vacuum: 1.00 (exactly) Air: 1.00 (≈ 1.0003) Water: 1.33 Glass: 1.50 (typical) Diamond: 2.42 n"},"zhHant":{"q":"光線什麼時候向法線靠攏？什麼時候遠離法線？","a":"向法線靠攏：從光疏介質進入光密介質 例如：空氣 → 水、空氣 → 玻璃 遠離法線：從光密介質進入光疏介質 例如：水 → 空氣、玻璃 → 空氣"}},{"topic":"refraction","en":{"q":"What is Snell's Law?","a":"Snell's Law n sini=1 n sinr2 = refractive index of first medium n 1 = angle of incidence i = refractive index of second medium n 2 = angle of refraction r"},"zhHant":{"q":"折射率與光速有什麼關係？","a":"問題： 當光線垂直入射（沿法線入射）時會發生什麼？ 答案： 問題： 視深的公式是什麼？ 答案： 或 物體看起來比實際位置淺 問題： 水的折射率 = 1.33，實際深度 = 4 m，視深是多少？ 答案： 折射率越大 → 光速越慢 折射率越小 → 光速越快 所有介質的折射率 （除空氣外） n>1"}},{"topic":"refraction","en":{"q":"Snell's Law when light enters from air?","a":"Snell's Law - Air Entry n ≈air 1 or Simplifies calculations Q: What is the apparent depth formula? A: or Q: Why does apparent depth occur? A: sini=nsinr n= sinrsini"},"zhHant":{"q":"當光線垂直入射（沿法線入射）時會發生什麼？","a":"光線不改變方向 但光速仍會改變 入射角 = 0°，折射角 = 0°"}},{"topic":"refraction","en":{"q":"What is the apparent depth formula?","a":"Real vs Apparent Depth n= Apparent depth Real depth Apparent depth= n Real depth Object underwater appears shallower than actual For water ( ): Apparent ≈ 0.75 × Real n=1.33"},"zhHant":{"q":"視深的公式是什麼？","a":"n= 視深 實際深度 視深= n 實際深度"}},{"topic":"refraction","en":{"q":"Why does apparent depth occur?","a":"Apparent Depth Phenomenon Light from underwater object refracts at water-air boundary Light bends away from normal (entering less dense) Eyes trace refracted rays back as straight lines Object appears closer to surface than it really is Q: What is dispersion of light? A: Q: Order of colors in dispersion (least to most deviated)? A: Red → Orange → Yellow → Green → Blue → Indigo → Violet Mnemonic: ROY G BIV Q: How do refractive indices compare for different colors? A:"},"zhHant":{"q":"水的折射率 = 1.33，實際深度 = 4 m，視深是多少？","a":"視深= =1.334 3 m 物體看起來只有 3 m 深 問題： 什麼是光的色散？ 答案： 問題： 不同顏色光的折射率大小順序是什麼？ 答案： 問題： 不同顏色光在介質中的速度大小順序是什麼？ 答案："}},{"topic":"refraction","en":{"q":"What is dispersion of light?","a":"Dispersion Definition Dispersion is separation of white light into component colors Different wavelengths have different refractive indices Shorter wavelength → Higher → Bends more n Longer wavelength → Lower → Bends less n"},"zhHant":{"q":"什麼是光的色散？","a":"白光通過三棱鏡被分解成不同顏色 不同顏色的光有不同的折射率 光譜順序：紅橙黃綠藍靛紫"}},{"topic":"refraction","en":{"q":"Order of colors in dispersion (least to most deviated)?","a":"Dispersion Color Order Red: Lowest , bends least n Violet: Highest , bends most n"},"zhHant":{"q":"不同顏色光的折射率大小順序是什麼？","a":"n >紫 n >藍 n >綠 n >黃 n >橙 n 紅 紫光折射率最大 紅光折射率最小"}},{"topic":"refraction","en":{"q":"How do refractive indices compare for different colors?","a":"Refractive Index and Color Q: How do optical fibers use refraction? A: Q: What are examples of atmospheric refraction? A: Q: Steps to draw refraction ray diagram? A: n <red n <orange n <yellow n <green n <blue n violet Violet has highest refractive index Red has lowest refractive index Violet bends most in prism"},"zhHant":{"q":"不同顏色光在介質中的速度大小順序是什麼？","a":"v >紅 v >橙 v >黃 v >綠 v >藍 v 紫 紅光速度最快 紫光速度最慢 在空氣中所有顏色光速相同！ 問題： 哪種顏色的光偏折最多？哪種最少？ 答案： 問題： 入射角 = 30°，折射率 = 1.5，折射角是多少？ 答案： 問題： 入射角 = 60°，折射角 = 40°，折射率是多少？ 答案： 問題： 如何從光線的偏折判斷介質的光學密度？ 答案："}},{"topic":"refraction","en":{"q":"How do optical fibers use refraction?","a":"Optical Fibers Use total internal reflection (special refraction case) Light trapped inside fiber core Transmits signals over long distances Applications: Telecommunications, internet, medical endoscopes"},"zhHant":{"q":"哪種顏色的光偏折最多？哪種最少？","a":"紫光偏折最多（彎曲最大） 紅光偏折最少（彎曲最小） 折射率越大，偏折越多"}},{"topic":"refraction","en":{"q":"What are examples of atmospheric refraction?","a":"Atmospheric Refraction Sunrise/Sunset: Sun visible before rising/after setting Twinkling stars: Light refracted by moving air Mirages: Hot air near ground causes refraction Due to varying air density"},"zhHant":{"q":"入射角 = 30°，折射率 = 1.5，折射角是多少？","a":"sin30°=1.5×sinr 0.5=1.5×sinr sinr=0.333 r=19.5°"}},{"topic":"refraction","en":{"q":"Steps to draw refraction ray diagram?","a":"Ray Diagram Steps Draw normal at boundary1. Draw incident ray to boundary2. Q: Steps for Snell's Law calculations? A: Tip: Calculator in degree mode! Q: Relationship between speed and refractive index? A: Determine: Denser or less dense?3. Bend towards (denser) or away (less dense) from normal4. Measure angles from normal5."},"zhHant":{"q":"入射角 = 60°，折射角 = 40°，折射率是多少？","a":"n= =sin40°sin60° =0.6430.866 1.35"}},{"topic":"refraction","en":{"q":"Steps for Snell's Law calculations?","a":"Snell's Law Calculation Steps Identify: , , , 1. n 1 n 2 i r Write: 2. n sini=1 n sinr2 Substitute known values3. Solve for unknown4. Check: Denser → smaller angle5."},"zhHant":{"q":"如何從光線的偏折判斷介質的光學密度？","a":"光線向法線靠攏 → 進入光密介質 光線遠離法線 → 進入光疏介質 問題： 光發生折射時，什麼保持不變？ 答案： 問題： 如何用實驗驗證斯涅爾定律？ 答案： 問題： 記住這些常見介質的折射率 答案： 不偏折 → 垂直入射或相同介質"}},{"topic":"refraction","en":{"q":"Relationship between speed and refractive index?","a":"Speed and Refractive Index n= vc Higher n Q: How does wavelength change during refraction? A: Q: Does frequency change during refraction? A: ✅ No! Q: Does light always bend when crossing boundary? A: ❌ Wrong! → Lower speed (denser medium) Lower → Higher speed (less dense medium) n Inverse relationship"},"zhHant":{"q":"光發生折射時，什麼保持不變？","a":"頻率 (f) 保持不變 速度會改變 波長會改變 方向會改變（除垂直入射外）"}},{"topic":"refraction","en":{"q":"How does wavelength change during refraction?","a":"Wavelength Change =λ 2 λ 1 n 1 n 2 Entering denser medium → Wavelength decreases Entering less dense medium → Wavelength increases Frequency remains constant"},"zhHant":{"q":"如何用實驗驗證斯涅爾定律？","a":"使用半圓形玻璃磚1. 測量不同入射角和對應的折射角2. 繪製 對 的圖表 3. sini sinr 結果：通過原點的直線，斜率 = 折射率4."}},{"topic":"refraction","en":{"q":"Does frequency change during refraction?","a":"Frequency During Refraction Frequency remains constant Determined by source, not medium Only speed and wavelength change"},"zhHant":{"q":"記住這些常見介質的折射率","a":"空氣： n≈1.00 問題： 玻璃的折射率 = 1.5，光在玻璃中的速度是多少？ 答案： 問題： 光通過多層不同介質時，如何應用斯涅爾定律？ 答案： 問題： 光線與界面成 40° 角，入射角是多少？ 答案： 水： n≈1.33 玻璃： n≈1.5 鑽石： n≈2.42"}},{"topic":"refraction","en":{"q":"Does light always bend when crossing boundary?","a":"Common Misconception (1) Light does not bend at normal incidence (along normal) Q: Does light bend towards normal entering less dense? A: ❌ Wrong! Q: Can refractive index be less than 1? A: ❌ Wrong! Q: Does frequency change during refraction? A: ❌ Wrong! Also no bending if staying in same medium"},"zhHant":{"q":"玻璃的折射率 = 1.5，光在玻璃中的速度是多少？","a":"n= vc v= =nc =1.53×108 2×10 m/s8"}},{"topic":"refraction","en":{"q":"Does light bend towards normal entering less dense?","a":"Common Misconception (2) Light bends away from normal when entering less dense Towards normal only when entering denser"},"zhHant":{"q":"光通過多層不同介質時，如何應用斯涅爾定律？","a":"在每個交界面分別應用斯涅爾定律 n sinθ =1 1 n sinθ =2 2 n sinθ 3 3 如果最後回到原介質，出射角 = 入射角"}},{"topic":"refraction","en":{"q":"Can refractive index be less than 1?","a":"Common Misconception (3) Refractive index always n≥1 Vacuum has minimum n=1 All materials have n>1"},"zhHant":{"q":"光線與界面成 40° 角，入射角是多少？","a":"入射角 = 90° - 40° = 50° 問題： 為什麼從空氣中看水底的物體會變淺？ 答案： 問題： 什麼情況下會發生色散？ 答案： ✅ 記憶口訣： ✅ 常見錯誤： 記住：入射角是與法線的夾角 法線垂直於界面"}},{"topic":"refraction","en":{"q":"Does frequency change during refraction?","a":"Common Misconception (4) Frequency remains constant Only speed and wavelength change Q: Does red light have higher n than violet? A: ❌ Wrong! Q: What are main applications of refraction? A: Q: What must be remembered for HKDSE exam? A: Frequency determined by source"},"zhHant":{"q":"為什麼從空氣中看水底的物體會變淺？","a":"光從水射出到空氣時發生折射 折射光線遠離法線 眼睛沿直線反向延伸 看到的影像位置比實際位置高"}},{"topic":"refraction","en":{"q":"Does red light have higher n than violet?","a":"Common Misconception (5) Violet has higher than red n Violet bends more than red n >violet n red"},"zhHant":{"q":"什麼情況下會發生色散？","a":"白光通過三棱鏡 白光以非垂直角度進入介質 不會發生：垂直入射矩形玻璃磚 原因：不同顏色光的折射率不同 學習小貼士 「密靠疏離」：進入光密介質向法線靠攏，進入光疏介質遠離法線 「紫慢紅快」：紫光速度最慢，紅光速度最快 「大折小速」：折射率大，光速小 ❌ 把入射角當作與界面的夾角 ✅ 入射角是與法線的夾角 ✅ 考試技巧： ✅ 公式速記： ❌ 認為所有顏色光在空氣中速度不同 ✅ 在空氣中所有顏色光速度相同 先畫法線（虛線，垂直於界面） 判斷光密或光疏介質 使用 n sinθ =1 1 n sinθ 2 2 計算時注意角度單位（度或弧度） 檢查答案是否合理（折射角應小於 90°） 折射率： n= vc 斯涅爾定律： n sinθ =1 1 n sinθ 2 2 視深： 視深= n 實際深度"}},{"topic":"refraction","en":{"q":"What are main applications of refraction?","a":"Applications Summary Lenses: Camera, eyeglasses, microscope Optical fibers: Telecommunications Prism: Dispersion, spectroscopy Atmospheric effects: Sunrise, mirages Everyday: Bent straw, shallow pool"}},{"topic":"refraction","en":{"q":"What must be remembered for HKDSE exam?","a":"HKDSE Must Remember Denser → Towards normal, slows1. Less dense → Away from normal, speeds up2. Q: Tips for refraction exam questions? A: Q: Mnemonic for refraction direction? A: To denser, towards normal To less dense, away from normal Slow down, bend in Speed up, bend out , 3. n= vc n≥1 Snell's Law: 4. n sini=1 n sinr2 Apparent depth: 5. n= ApparentReal Dispersion: Red least, violet most6."}},{"topic":"refraction","en":{"q":"Tips for refraction exam questions?","a":"Exam Tips Measure angles from normal Calculator in degree mode Draw neat diagrams with ruler Label: Normal, rays, angles State: Towards/away from normal Show all working"}},{"topic":"refraction","en":{"q":"Mnemonic for refraction direction?","a":"Memory Mnemonic - Direction Q: Mnemonics for key formulas? A: Snell's Law: n ₁ sin i = n ₂ sin r Refractive Index: n = c over v Higher n, slower speed Apparent Depth: n equals real over apparent Looks shallower than it is Dispersion: ROY G BIV Red bends least, violet most"}},{"topic":"refraction","en":{"q":"Mnemonics for key formulas?","a":"Memory Mnemonic - Formulas"}},{"topic":"tir","en":{"q":"What is Total Internal Reflection (TIR)?","a":"Definition of TIR Light traveling in denser medium hits boundary with less dense medium At angle greater than critical angle All light reflected back into denser medium No refraction occurs"},"zhHant":{"q":"什麼是全內反射？","a":"光線在介質交界面完全被反射回原介質 沒有折射光線產生 所有光能量都被反射"}},{"topic":"tir","en":{"q":"What are the TWO conditions for TIR to occur?","a":"Two Conditions for TIR ✅ Light travels from denser to less dense ( ) 1. n >1 n 2 ✅ Angle of incidence > critical angle ( ) 2. i>c"},"zhHant":{"q":"全內反射發生的兩個必要條件是什麼？","a":"光必須從光密介質進入光疏介質1. 入射角 (i) > 臨界角 (c)2."}},{"topic":"tir","en":{"q":"What is the critical angle?","a":"Critical Angle Definition Critical angle (c) is angle of incidence in denser medium For which angle of refraction = 90° (along boundary) Defines boundary between refraction and TIR Depends on refractive indices of both media Q: What is the critical angle formula? A: For medium to air ( ): or Q: What are common critical angles? A:"},"zhHant":{"q":"臨界角的公式是什麼？","a":"sinc= n 1 c=sin −1(n 1) n 問題： 什麼是臨界角？ 答案： 問題： 折射率和臨界角有什麼關係？ 答案： 問題： i < c、i = c、i > c 時分別發生什麼？ 答案： 問題： 記住這些常見介質的臨界角 答案："}},{"topic":"tir","en":{"q":"What is the critical angle formula?","a":"Critical Angle Formula sinc= n 1 n 2 n =2 1 sinc= n 1 c=sin −1(n1)"},"zhHant":{"q":"什麼是臨界角？","a":"當光從光密介質進入光疏介質時 折射角剛好等於 90° 時的入射角 此時折射光線沿著交界面傳播"}},{"topic":"tir","en":{"q":"What are common critical angles?","a":"Common Critical Angles Water → Air ( ): n=1.33 c≈49° Glass → Air ( ): n=1.50 c≈42° Diamond → Air ( ): n=2.42 Higher n → Smaller c Q: What happens when ? A: Q: What happens when ? A: Q: What happens when c≈24°"},"zhHant":{"q":"折射率和臨界角有什麼關係？","a":"折射率越大 → 臨界角越小 折射率越小 → 臨界角越大 例如：鑽石 (n=2.42, c≈24°)、水 (n=1.33, c≈49°)"}},{"topic":"tir","en":{"q":"What happens when","a":"Case 1 - i < c i<c Most light refracted into less dense medium Refracted ray bends away from normal Small amount reflected (partial reflection) Normal refraction occurs"},"zhHant":{"q":"i < c、i = c、i > c 時分別發生什麼？","a":"i < c：同時有反射和折射（折射較強） i = c：折射角 = 90°，折射光沿界面 i > c：只有反射，沒有折射（全內反射）"}},{"topic":"tir","en":{"q":"What happens when","a":"Case 2 - i = c i=c Refracted ray travels along boundary ( ) r=90° Angle of refraction exactly 90° This is the critical condition Defines the critical angle"},"zhHant":{"q":"記住這些常見介質的臨界角","a":"水 (n=1.33)：c ≈ 49° 玻璃 (n=1.5)：c ≈ 42° 問題： 玻璃的折射率 = 1.5，臨界角是多少？ 答案： 問題： 水的折射率 = 1.33，入射角 = 50°，是否發生全內反射？ 答案： 問題： 從玻璃 (n=1.5) 到水 (n=1.33) 的臨界角公式是什麼？ 答案： 通用公式： 鑽石 (n=2.42)：c ≈ 24° 塑膠 (n=1.6)：c ≈ 39°"}},{"topic":"tir","en":{"q":"What happens when","a":"Case 3 - i > c i>c ? A: Q: How does TIR compare to ordinary reflection? A: TIR: Ordinary Reflection: TIR is more efficient! Q: What is the structure of optical fiber? A: All light reflected back into denser medium No refraction (no light escapes) Total Internal Reflection occurs Follows law of reflection: i=r"},"zhHant":{"q":"玻璃的折射率 = 1.5，臨界角是多少？","a":"sinc= =1.51 0.667 c=sin (0.667)=−1 42°"}},{"topic":"tir","en":{"q":"How does TIR compare to ordinary reflection?","a":"TIR vs Ordinary Reflection 100% reflection (no loss) Very bright, clear Requires specific conditions Some light absorbed May be dim Works on any surface"},"zhHant":{"q":"水的折射率 = 1.33，入射角 = 50°，是否發生全內反射？","a":"臨界角：1. c=sin ( )=−1 1.33 1 48.8° 入射角 (50°) > 臨界角 (48.8°)2. 會發生全內反射3."}},{"topic":"tir","en":{"q":"What is the structure of optical fiber?","a":"Optical Fibers - Structure Core: High refractive index (carries light) Cladding: Lower refractive index (surrounds core) Light trapped by TIR at core-cladding boundary Minimal light loss over long distances Q: How do optical fibers use TIR? A: Q: How do prisms use TIR? A: 45°-45°-90° Prism: Applications: Periscope, binoculars, SLR cameras Q: Why are prisms better than mirrors? A: Prisms (using TIR):"},"zhHant":{"q":"從玻璃 (n=1.5) 到水 (n=1.33) 的臨界角公式是什麼？","a":"sinc= =n 1 n 2 =1.5 1.33 0.887 c=62.5° sinc= n 密 n 疏 問題： 為什麼魚在水中只能在圓錐範圍內看到水面上的景物？ 答案： 問題： 潛水員在水面下 3 m，水的 n=1.33，水面可見圓形範圍的半徑是多少？ 答案： 問題： 海市蜃樓（沙漠或路面上的「水面」）是如何形成的？ 答案："}},{"topic":"tir","en":{"q":"How do optical fibers use TIR?","a":"Optical Fibers - How It Works Light enters fiber at small angle1. Hits core-cladding boundary at 2. i>c TIR keeps light trapped in core3. Light travels long distances with minimal loss4. Used in telecommunications, internet, medical endoscopes5."},"zhHant":{"q":"為什麼魚在水中只能在圓錐範圍內看到水面上的景物？","a":"圓錐的半角 = 臨界角（約 49°） 超過臨界角的光線發生全內反射 圓錐外的水面看起來像鏡子 無法看到水面上的景物"}},{"topic":"tir","en":{"q":"How do prisms use TIR?","a":"Prisms in Optical Instruments Light enters at 90° (no refraction) Hits internal surface at 45° For glass ( ): 45° > 42°, TIR occurs c≈42° Reflects light by 90° or 180°"},"zhHant":{"q":"潛水員在水面下 3 m，水的 n=1.33，水面可見圓形範圍的半徑是多少？","a":"臨界角：1. c=48.8° 2. r=d×tanc=3×tan48.8°=3.42 m"}},{"topic":"tir","en":{"q":"Why are prisms better than mirrors?","a":"Prisms vs Mirrors Mirrors: Q: Why do diamonds sparkle so much? A: Q: How do mirages form on hot days? A: No silvering needed 100% reflection (brighter) More durable No degradation Silvering degrades Some light absorbed Less efficient"},"zhHant":{"q":"海市蜃樓（沙漠或路面上的「水面」）是如何形成的？","a":"路面附近的熱空氣折射率較小 光線逐漸向上折射（遠離法線） 入射角逐漸增大 當 i > c 時，發生全內反射 看到的是天空的反射影像 問題： 光纖的結構是什麼？ 答案： 問題： 光纖相比銅線有哪些優點？ 答案： 問題： 反射棱鏡相比平面鏡有哪些優點？ 答案： 問題： 反射棱鏡有哪些應用？"}},{"topic":"tir","en":{"q":"Why do diamonds sparkle so much?","a":"Why Diamonds Sparkle Very high refractive index ( ) n=2.42 Very small critical angle ( ) c≈24° Light easily undergoes TIR inside Multiple internal reflections Creates brilliance and \\"fire\\" Cut design maximizes TIR"},"zhHant":{"q":"光纖的結構是什麼？","a":"內核：折射率較大 外層包層：折射率較小 光在內核和包層交界面發生全內反射 光線在光纖內部不斷反射前進"}},{"topic":"tir","en":{"q":"How do mirages form on hot days?","a":"Mirages - Hot Day Hot air near ground has lower density (lower ) n Q: What does a fish see looking up from water? A: Q: Steps to determine if TIR occurs? A: Light from sky bends away from normal through layers Eventually , TIR occurs i>c Reflected light appears to come from ground Creates illusion of water on road"},"zhHant":{"q":"光纖相比銅線有哪些優點？","a":"訊號傳輸損失少 重量輕、體積小 可傳輸更多資訊 不受電磁干擾"}},{"topic":"tir","en":{"q":"What does a fish see looking up from water?","a":"Fish Eye View Light enters water within cone (angle ≈ 98° for water) Cone angle determined by critical angle Inside cone: Sees above-water world (compressed) Outside cone: TIR occurs, sees underwater reflections Entire above-water world compressed into cone"},"zhHant":{"q":"反射棱鏡相比平面鏡有哪些優點？","a":"不產生多重影像 影像更明亮清晰 反射率接近 100% 不會氧化或褪色"}},{"topic":"tir","en":{"q":"Steps to determine if TIR occurs?","a":"Determining if TIR Occurs Check: Denser to less dense? ( ) 1. n >1 n 2 Calculate: 2. sinc= n 1 n 2 Compare: Is ? 3. i>c If YES: TIR occurs4. If NO: Normal refraction5. Q: How to calculate critical angle from refractive index? A: Given , find : Example: Q: How to calculate refractive index from critical angle? A: Given , find :"},"zhHant":{"q":"反射棱鏡有哪些應用？","a":"答案： 問題： 為什麼鑽石會閃耀？ 答案： 問題： 為什麼鑽石在水中看起來較不閃耀？ 答案： 雙筒望遠鏡 潛望鏡 單反相機 光學儀器"}},{"topic":"tir","en":{"q":"How to calculate critical angle from refractive index?","a":"Calculate Critical Angle n c Use (for medium to air) 1. sinc= n 1 Calculate 2. c=sin −1(n 1) Check calculator in degree mode3. n=1.5 c=sin (1/1.5)≈−1 42°"},"zhHant":{"q":"為什麼鑽石會閃耀？","a":"鑽石的折射率很大（n = 2.42） 臨界角很小（約 24°） 光線容易發生全內反射 光線在鑽石內部多次反射 從不同角度射出，產生閃耀效果"}},{"topic":"tir","en":{"q":"How to calculate refractive index from critical angle?","a":"Calculate Refractive Index c n n= sinc 1 Example: Check: ✓ Q: Why does TIR only work denser → less dense? A: Q: How are refractive index and critical angle related? A: c=42° n= ≈sin42°1 1.5 n>1"},"zhHant":{"q":"為什麼鑽石在水中看起來較不閃耀？","a":"水的折射率（1.33）比空氣（1.00）大 從鑽石到水的臨界角變大 ， sinc= =2.421.33 0.55 c≈33° 較難發生全內反射 閃耀效果減弱 問題： 全內反射和普通反射有什麼分別？ 答案： 問題： 什麼情況下存在臨界角？ 答案： 問題： 全內反射時能量損失多少？ 答案： 問題： 如何用半圓形玻璃磚觀察全內反射？ 答案："}},{"topic":"tir","en":{"q":"Why does TIR only work denser → less dense?","a":"Why TIR Only Works One Way TIR requires i>c Critical angle only exists for denser → less dense Light from less dense → denser: Always refracts (bends towards normal) Cannot have in less dense medium i>90° TIR is one-way phenomenon"},"zhHant":{"q":"全內反射和普通反射有什麼分別？","a":"全內反射：光密→光疏，i > c，無折射，反射率≈100% 普通反射：任何界面，有折射，反射率通常<10%"}},{"topic":"tir","en":{"q":"How are refractive index and critical angle related?","a":"Relationship Between n and c n= sinc1 Higher n → Smaller c → Easier TIR Lower n → Larger c → Harder TIR Diamond (high ) sparkles more than glass (lower n Q: What happens to energy in TIR? A: Q: Can TIR occur from less dense to denser? A: ❌ Wrong! Q: Does TIR occur at any angle? A: ❌ Wrong! ) n"},"zhHant":{"q":"什麼情況下存在臨界角？","a":"✅ 光從光密介質到光疏介質：有臨界角 ❌ 光從光疏介質到光密介質：無臨界角 ❌ 兩種相同介質：無臨界角"}},{"topic":"tir","en":{"q":"What happens to energy in TIR?","a":"Energy in TIR Ordinary reflection: Some energy absorbed TIR: No energy loss (100% reflected) Makes TIR very efficient Basis for optical fiber technology Energy conservation: All reflected"},"zhHant":{"q":"全內反射時能量損失多少？","a":"能量損失幾乎為零 反射率接近 100% 所有光能量都被反射回原介質 這是光纖傳輸效率高的原因"}},{"topic":"tir","en":{"q":"Can TIR occur from less dense to denser?","a":"Common Misconception (1) TIR only occurs denser → less dense Light from less dense → denser always refracts Critical angle doesn't exist for this direction"},"zhHant":{"q":"如何用半圓形玻璃磚觀察全內反射？","a":"光線從圓心沿半徑方向射入（垂直入射）1. 在平面處改變入射角2. 問題： 潛水員越深，水面可見圓形範圍會變大還是變小？ 答案： 問題： 如果玻璃的臨界角 = 42°，玻璃的折射率是多少？ 答案： ✅ 記憶口訣： 觀察反射和折射光線的變化3. 找出臨界角（折射光線消失時的入射角）4."}},{"topic":"tir","en":{"q":"Does TIR occur at any angle?","a":"Common Misconception (2) TIR only when i>c Q: Is critical angle same for all materials? A: ❌ Wrong! Q: Does some light refract during TIR? A: ❌ Wrong! Q: Do optical fibers use ordinary reflection? If : Normal refraction occurs i≤c Must exceed critical angle"},"zhHant":{"q":"潛水員越深，水面可見圓形範圍會變大還是變小？","a":"會變大 臨界角不隨深度改變（仍是 48.8°） 但 r=d×tanc 深度 越大，半徑 越大 d r"}},{"topic":"tir","en":{"q":"Is critical angle same for all materials?","a":"Common Misconception (3) Critical angle depends on refractive index Higher → Smaller n c Each material has different c"},"zhHant":{"q":"如果玻璃的臨界角 = 42°，玻璃的折射率是多少？","a":"sinc= n 1 sin42°= n1 n= =sin42°1 =0.6691 1.49≈1.5 學習小貼士 「密疏大臨」：光密到光疏，入射角大於臨界角 「折率大臨小」：折射率大，臨界角小 ✅ 常見錯誤： ✅ 考試技巧： ✅ 公式速記： ✅ 應用記憶： 「全反無折」：全內反射時，無折射光線 ❌ 從光疏介質到光密介質也會發生全內反射 ✅ 只有從光密到光疏才可能發生全內反射 ❌ 入射角小於臨界角就會發生全內反射 ✅ 入射角必須大於臨界角 先判斷光線傳播方向（光密→光疏？） 計算臨界角： 或 sinc= n 1 sinc= n 1 n 2 比較入射角和臨界角 記住常見介質的臨界角（水≈49°，玻璃≈42°） 魚眼視野問題用 r=d×tanc 臨界角（空氣）： sinc= n 1 臨界角（兩介質）： sinc= n 密 n 疏 魚眼視野半徑： r=d×tanc 光纖 = 全內反射傳輸訊號 反射棱鏡 = 全內反射改變光路 鑽石閃耀 = 臨界角小，易全內反射 魚眼視野 = 圓錐半角 = 臨界角 海市蜃樓 = 熱空氣層全內反射"}},{"topic":"tir","en":{"q":"Does some light refract during TIR?","a":"Common Misconception (4) In TIR, all light reflected (100%) No refraction occurs No light escapes into less dense medium"}},{"topic":"tir","en":{"q":"Do optical fibers use ordinary reflection?","a":"Common Misconception (5) A: ❌ Wrong! Q: Quick summary of three cases? A: Q: What must be remembered for HKDSE exam? A: Optical fibers use Total Internal Reflection More efficient (no light loss) Brighter signal over long distances"}},{"topic":"tir","en":{"q":"Quick summary of three cases?","a":"Three Cases Summary : Refraction (most light escapes) i<c : Critical (light along boundary) i=c : TIR (all light reflected) i>c"}},{"topic":"tir","en":{"q":"What must be remembered for HKDSE exam?","a":"HKDSE Must Remember Two conditions: AND 1. n >1 n 2 i>c (medium to air) 2. sinc= n1 Three cases: , , 3. i<c i=c Q: Tips for TIR exam questions? A: Q: Mnemonic for TIR conditions? A: Dense to less, that's condition one Angle greater than critical, then it's done i>c TIR is 100% efficient4. Applications: Fibers, prisms, diamonds, mirages5. Higher → Smaller 6. n c"}},{"topic":"tir","en":{"q":"Tips for TIR exam questions?","a":"Exam Tips Check both conditions for TIR Calculate first c Draw neat diagrams with normal Label: Denser, less dense, angles State: TIR occurs or not Show all working Calculator in degree mode"}},{"topic":"tir","en":{"q":"Mnemonic for TIR conditions?","a":"Memory Mnemonic - Conditions Q: Mnemonic for critical angle formula? A: sin c equals one over n Higher n, smaller c, remember when Q: Mnemonic for three cases? A: Less than c, light refracts Equal to c, along boundary acts Greater than c, total reflection, that's the facts Q: Mnemonic for TIR applications? A: Fibers carry light so far Prisms in binoculars are Diamonds sparkle like a star Mirages on roads from afar"}},{"topic":"tir","en":{"q":"Mnemonic for critical angle formula?","a":"Memory Mnemonic - Formula"}},{"topic":"tir","en":{"q":"Mnemonic for three cases?","a":"Memory Mnemonic - Three Cases"}},{"topic":"tir","en":{"q":"Mnemonic for TIR applications?","a":"Memory Mnemonic - Applications Q: Mnemonic for TIR advantages? A: No light loss, hundred percent Brighter image, that's the intent Better than mirrors, no lament"}},{"topic":"tir","en":{"q":"Mnemonic for TIR advantages?","a":"Memory Mnemonic - Advantages"}},{"topic":"convex","en":{"q":"What is a convex lens?","a":"Definition of Convex Lens Convex lens = Converging lens Parallel rays to principal axis converge at focus after refraction Thicker in the middle, thinner at edges"},"zhHant":{"q":"什麼是凸透鏡？","a":"中間厚、邊緣薄的透鏡 又稱會聚透鏡（Converging lens） 使平行光線會聚於焦點 符號： ⚬ < ⚬"}},{"topic":"convex","en":{"q":"What is Rule 1 for convex lens?","a":"Three Principal Rays - Rule 1 Parallel in, Focus out Ray parallel to principal axis passes through focus F on opposite side after refraction"},"zhHant":{"q":"畫凸透鏡光線圖的三條規則是什麼？","a":"平行入，焦點出：平行主軸的光線通過焦點1. 焦點入，平行出：通過焦點的光線平行射出2. 直入直出：通過光心的光線方向不變3."}},{"topic":"convex","en":{"q":"What is Rule 2 for convex lens?","a":"Three Principal Rays - Rule 2 Focus in, Parallel out Ray passing through focus F emerges parallel to principal axis after refraction"},"zhHant":{"q":"透鏡公式是什麼？","a":"=f1 +u1 v1 ：焦距 f ：物距 u ：像距 v 問題： 透鏡公式中的符號約定是什麼？ 答案： 問題： 放大率的公式是什麼？ 答案： 問題： 凸透鏡成像的六種情況是什麼？"}},{"topic":"convex","en":{"q":"What is Rule 3 for convex lens?","a":"Three Principal Rays - Rule 3 C in C out, Straight through Ray passing through optical center C travels straight through without changing direction Q: Image characteristics when object is beyond 2F? A: Q: Image characteristics when object is at 2F? A: Q: Image characteristics when object is between F and 2F? A: Q: Image characteristics when object is at F? A:"},"zhHant":{"q":"透鏡公式中的符號約定是什麼？","a":"：物距（永遠為正） u ：像距（實像為正，虛像為負） v ：焦距（凸透鏡為正，凹透鏡為負） f"}},{"topic":"convex","en":{"q":"Image characteristics when object is beyond 2F?","a":"Object Beyond 2F Position: Between F and 2F (opposite side) Nature: Real, inverted, diminished Application: Camera, human eye"},"zhHant":{"q":"放大率的公式是什麼？","a":"M= =uv h o h i ：放大率 M ：像距 v ：物距 u ：像的高度 h i ：物體的高度 h o"}},{"topic":"convex","en":{"q":"Image characteristics when object is at 2F?","a":"Object at 2F Position: At 2F (opposite side) Nature: Real, inverted, same size Application: Copying machine"},"zhHant":{"q":"凸透鏡成像的六種情況是什麼？","a":"答案： 問題： 物體在 2F 以外（ ）時，像的性質是什麼？ 答案： 問題： 物體在 2F 處（ ）時，像的性質是什麼？ 答案： ：像在 F，實、倒、極小 1. u=∞ ：像在 F~2F，實、倒、縮小（照相機） 2. u>2f ：像在 2F，實、倒、等大 3. u=2f ：像在 2F 外，實、倒、放大（投影機） 4. f <u<2f ：無法成像 5. u=f ：虛像、正立、放大（放大鏡） 6. u<f"}},{"topic":"convex","en":{"q":"Image characteristics when object is between F and 2F?","a":"Object Between F and 2F Position: Beyond 2F (opposite side) Nature: Real, inverted, magnified Application: Projector, slide projector"},"zhHant":{"q":"物體在 2F 以外（","a":"u>2f 像的位置：F 和 2F 之間 實像、倒立、縮小 應用：照相機"}},{"topic":"convex","en":{"q":"Image characteristics when object is at F?","a":"Object at F Position: At infinity Q: Image characteristics when object is inside F? A: Q: Image characteristics when object is at infinity? A: Q: What is the lens formula? Sign convention? A: Sign Convention: Nature: No image formed (parallel rays) Application: Searchlight, flashlight"},"zhHant":{"q":"物體在 2F 處（","a":"u=2f 像的位置：另一側的 2F 處 問題： 物體在 F 和 2F 之間（ ）時，像的性質是什麼？ 答案： 問題： 物體在焦點內（ ）時，像的性質是什麼？ 答案： 實像、倒立、等大（ ） M=1 物像距離： u+v=4f 這是實像的最小距離"}},{"topic":"convex","en":{"q":"Image characteristics when object is inside F?","a":"Object Inside F Position: Same side as object Nature: Virtual, erect, magnified Application: Magnifying glass, reading glass"},"zhHant":{"q":"物體在 F 和 2F 之間（","a":"f <u<2f 像的位置：2F 以外 實像、倒立、放大 應用：投影機、幻燈機"}},{"topic":"convex","en":{"q":"Image characteristics when object is at infinity?","a":"Object at Infinity Position: At focus F Nature: Real, inverted, highly diminished (point) Application: Telescope objective lens"},"zhHant":{"q":"物體在焦點內（","a":"u<f 像的位置：物體同側 虛像、正立、放大 應用：放大鏡 像距為負值 問題： ， ，求像距 答案： 問題： ， ，求放大率 答案： 影像是物體的 3 倍大 問題： ， ，求像距"}},{"topic":"convex","en":{"q":"What is the lens formula? Sign convention?","a":"Lens Formula =f1 +u1 v1 = focal length (convex lens: +ve) f = object distance (always +ve) u Q: What is the magnification formula? A: Interpretation: Q: What are the characteristics of a real image? A: = image distance (real: +ve; virtual: -ve) v"},"zhHant":{"q":"，","a":"u=30 cm f =10 cm v =10 1 +30 1 v 1 =v 1 −10 1 =30 1 30 2 v=15 cm"}},{"topic":"convex","en":{"q":"What is the magnification formula?","a":"Magnification Formula M= =uv h o h i : Magnified ∣M∣>1 : Same size ∣M∣=1 : Diminished ∣M∣<1 : Erect (virtual) M>0 : Inverted (real) M<0"},"zhHant":{"q":"，","a":"u=20 cm v=60 cm M= =uv =20 60 3"}},{"topic":"convex","en":{"q":"What are the characteristics of a real image?","a":"Real Image Formation: Actual convergence of light rays Can be projected: Yes, on screen Position: Opposite side of lens Orientation: Inverted Examples: Camera, projector Q: What are the characteristics of a virtual image? A: Q: How does a camera use convex lens? A: Q: How does a projector use convex lens? A: Q: How does a magnifying glass use convex lens? A:"},"zhHant":{"q":"，","a":"u=6 cm f =12 cm 答案： 負號表示虛像 問題： 實像和虛像有什麼分別？ 答案： 問題： 凸透鏡成實像時，物像的最小距離是多少？ 答案： 問題： 什麼是光的可逆性？ 答案： =12 1 +6 1 v 1 =v1 −121 =61 − 121 v=−12 cm"}},{"topic":"convex","en":{"q":"What are the characteristics of a virtual image?","a":"Virtual Image Formation: Extensions of rays intersect Can be projected: No, cannot display on screen Position: Same side as object Orientation: Erect Examples: Magnifying glass"},"zhHant":{"q":"實像和虛像有什麼分別？","a":"實像：倒立，可投影在屏幕上，像距為正 虛像：正立，不能投影在屏幕上，像距為負"}},{"topic":"convex","en":{"q":"How does a camera use convex lens?","a":"Camera Application Object beyond 2F Lens forms real, inverted, diminished image Image between F and 2F on film/sensor"},"zhHant":{"q":"凸透鏡成實像時，物像的最小距離是多少？","a":"當物體在 2F 處時 u=v=2f 物像距離 = u+v=4f 這是實像的最小距離"}},{"topic":"convex","en":{"q":"How does a projector use convex lens?","a":"Projector Application Object between F and 2F Lens forms real, inverted, magnified image Image beyond 2F on screen"},"zhHant":{"q":"什麼是光的可逆性？","a":"實像的物體和影像位置可以互換 問題： 如果遮蓋透鏡的一部分，影像會怎樣？ 答案： 問題： 什麼因素影響透鏡的焦距？ 答案： 問題： 放大鏡如何工作？ 答案： 如果 ， u =1 10 cm v =1 40 cm 則 ， u =2 40 cm v =2 10 cm"}},{"topic":"convex","en":{"q":"How does a magnifying glass use convex lens?","a":"Magnifying Glass Application Q: What is the power of a lens? A: Q: How do object and image positions relate? A: Q: What are the sign conventions for convex lens? A: Object inside F Lens forms virtual, erect, magnified image Image on same side as object"},"zhHant":{"q":"如果遮蓋透鏡的一部分，影像會怎樣？","a":"完整影像仍然形成 但影像會變暗（亮度降低） 原因：部分光線被阻擋，到達影像的光量減少"}},{"topic":"convex","en":{"q":"What is the power of a lens?","a":"Power of Lens P = f 1 = power (unit: dioptre, D) P = focal length (unit: meter, m) f Shorter → Higher power → Stronger converging f"},"zhHant":{"q":"什麼因素影響透鏡的焦距？","a":"曲率越大（越彎曲）→ 焦距越短 折射率越大 → 焦距越短 焦距越短 → 會聚能力越強"}},{"topic":"convex","en":{"q":"How do object and image positions relate?","a":"Object-Image Movement Object moves closer → Image moves away Object moves away → Image moves closer Object at 2F → Image at 2F (symmetry)"},"zhHant":{"q":"放大鏡如何工作？","a":"問題： 照相機使用凸透鏡的哪種成像情況？ 答案： 問題： 投影機使用凸透鏡的哪種成像情況？ 答案： 物體放在焦點內（ ） u<f 成像：虛像、正立、放大 像在物體同側 用於觀察細小物體"}},{"topic":"convex","en":{"q":"What are the sign conventions for convex lens?","a":"Sign Convention Checklist Q: Does convex lens always form real image? A: ❌ Wrong! Q: Is virtual image always smaller? A: ❌ Wrong! Q: Is image at 2F always magnified? Convex lens : positive f Object distance : always positive u Real image : positive (opposite side) v Virtual image : negative (same side) v"},"zhHant":{"q":"照相機使用凸透鏡的哪種成像情況？","a":"物體在 2F 以外（ ） u>2f 成像：實像、倒立、縮小 像在 F 和 2F 之間 用於拍攝照片"}},{"topic":"convex","en":{"q":"Does convex lens always form real image?","a":"Common Misconception (1) Convex lens forms virtual image when object is inside F Virtual image is erect and magnified"},"zhHant":{"q":"投影機使用凸透鏡的哪種成像情況？","a":"物體在 F 和 2F 之間（ ） f <u<2f 成像：實像、倒立、放大 像在 2F 以外 用於投影影像到屏幕 問題： 凸透鏡有哪些應用？ 答案： 問題： 如何判斷凸透鏡成的像是實像還是虛像？ 答案： 問題： 當物體從遠處逐漸接近凸透鏡時，像如何變化？ 答案："}},{"topic":"convex","en":{"q":"Is virtual image always smaller?","a":"Common Misconception (2) Virtual image formed by convex lens (object inside F) is magnified Example: Magnifying glass"},"zhHant":{"q":"凸透鏡有哪些應用？","a":"放大鏡： ，虛像、正立、放大 1. u<f 照相機： ，實像、倒立、縮小 2. u>2f 投影機： ，實像、倒立、放大 3. f <u<2f 矯正遠視眼鏡：使光線會聚4."}},{"topic":"convex","en":{"q":"Is image at 2F always magnified?","a":"Common Misconception (3) A: ❌ Wrong! Q: How to draw ray diagram for convex lens? A: Q: Steps for lens formula calculations? A: Image at 2F is same size as object Not magnified, not diminished"},"zhHant":{"q":"如何判斷凸透鏡成的像是實像還是虛像？","a":"如果像可以投影在屏幕上 → 實像 如果像不能投影在屏幕上 → 虛像 或： → 實像， → 虛像 v>0 v<0"}},{"topic":"convex","en":{"q":"How to draw ray diagram for convex lens?","a":"Ray Diagram Method Draw at least two principal rays1. Real image: Rays actually intersect2. Virtual image: Ray extensions intersect3. Measure distances and heights4."},"zhHant":{"q":"當物體從遠處逐漸接近凸透鏡時，像如何變化？","a":"物體從無限遠移向 2F：像從 F 移向 2F，變大 問題： 相同物距，不同焦距的凸透鏡成像有什麼分別？ 答案： ✅ 記憶口訣： ✅ 常見錯誤： ✅ 考試技巧： 物體從 2F 移向 F：像從 2F 移向無限遠，變大 物體移過 F：像從實像變虛像，從倒立變正立 物體在焦點內：像變大且遠離透鏡"}},{"topic":"convex","en":{"q":"Steps for lens formula calculations?","a":"Calculation Method Identify given: , , or 1. u f v Apply: 2. =f 1 +u 1 v 1 Check sign conventions3. Calculate if needed 4. M= uv Q: Quick summary of six image formation cases? A: Q: Quick comparison of real and virtual images? A: Real: Virtual: Q: What must be remembered for HKDSE exam? A:"},"zhHant":{"q":"相同物距，不同焦距的凸透鏡成像有什麼分別？","a":"接收相同的光量 焦距短 → 像小但亮 焦距長 → 像大但暗 光量分布在不同大小的像上 學習小貼士 「平焦入、焦平出、直入直出」：三條主要光線 「一焦虛、二焦等、遠焦小」：成像規律 「u 正 v 實正虛負 f 凸正凹負」：符號約定 ❌ 認為凸透鏡只能成實像 ✅ 物體在焦點內時成虛像 ❌ 認為凸透鏡只能成放大像 ✅ 可以成放大、等大或縮小像 ❌ 虛像的像距用正值 ✅ 虛像的像距為負值 先判斷物體位置（相對於 F 和 2F） 使用透鏡公式： =f 1 +u 1 v 1 ✅ 公式速記： ✅ 成像記憶表： 注意符號： 永遠正， 實正虛負 u v 畫光線圖時至少畫兩條光線 檢查答案是否合理（實像 ，虛像 ） v>0 v<0 透鏡公式： =f1 +u1 v1 放大率： M= =uv h o h i 物像最小距離： （當 ） 4f u=2f 物距 像距 性質 應用 u>2f F~2F 實、倒、小 照相機 u=2f 2F 實、倒、等 - f <u<2f >2F 實、倒、大 投影機 u<f 同側 虛、正、大 放大鏡"}},{"topic":"convex","en":{"q":"Quick summary of six image formation cases?","a":"Quick Summary - Six Cases Beyond 2F → Small real1. At 2F → Same size real2. Between F & 2F → Large real3. At F → No image4. Inside F → Large virtual5. At infinity → Point at F6."}},{"topic":"convex","en":{"q":"Quick comparison of real and virtual images?","a":"Real vs Virtual Quick Check Can project ✓ Inverted Opposite side Cannot project ✗ Erect Same side"}},{"topic":"convex","en":{"q":"What must be remembered for HKDSE exam?","a":"HKDSE Must Remember Three principal rays1. Q: Tips for convex lens exam questions? A: Q: Memory mnemonics for convex lens? A: Three rays: Parallel in, Focus out Focus in, Parallel out C in C out, Straight through Real vs Virtual: Real: Can project, inverted, opposite Six image formation cases2. Lens formula: 3. =f 1 +u 1 v 1 Magnification: 4. M= uv Sign conventions5. Applications: Camera, projector, magnifier6."}},{"topic":"convex","en":{"q":"Tips for convex lens exam questions?","a":"Exam Tips Always check sign conventions first Draw neat diagrams with ruler Label: F, 2F, C, object, image State clearly: real/virtual, erect/inverted, magnified/diminished"}},{"topic":"convex","en":{"q":"Memory mnemonics for convex lens?","a":"Memory Mnemonics Virtual: Cannot project, erect, same side"}},{"topic":"concave","en":{"q":"What is a concave lens?","a":"Definition of Concave Lens Concave lens = Diverging lens Parallel rays to principal axis diverge after refraction Extended lines of refracted rays pass through focus"},"zhHant":{"q":"光線會聚在視網膜前方","a":"凹透鏡 = 發散透鏡（Diverging Lens） 平行於主軸的光線經折射後會發散 折射光線的延長線通過焦點"}},{"topic":"concave","en":{"q":"What are the differences between concave and convex lenses?","a":"Concave vs Convex Lens Property Convex Lens Concave Lens Type Converging Diverging Focal length Positive (+ve) Negative (-ve) Light rays Converge Diverge"},"zhHant":{"q":"凹透鏡 vs 凸透鏡","a":"特性 凸透鏡 凹透鏡 類型 會聚透鏡 發散透鏡 焦距 正值 (+ve) 負值 (-ve) 光線 會聚 發散"}},{"topic":"concave","en":{"q":"What is Rule 1?","a":"Three Principal Rays - Rule 1 Parallel in, Focus out Ray parallel to principal axis diverges after refraction Extension passes through focus F on same side"},"zhHant":{"q":"三條主要光線 - Rule 1","a":"平行入，焦點出 平行於主軸的光線，折射後發散 延長線通過同側焦點 F"}},{"topic":"concave","en":{"q":"What is Rule 2?","a":"Three Principal Rays - Rule 2 A: Q: What is Rule 3? A: Q: What are the characteristics of images formed by concave lens? A: Images formed by concave lens are always: Memory: Virtual, erect, diminished - never changes Q: What is the lens formula? Sign convention? A: Focus in, Parallel out Ray directed towards focus F' on opposite side Emerges parallel to principal axis after refraction"},"zhHant":{"q":"三條主要光線 - Rule 2","a":"答： 問：Rule 3 是什麼？ 答： 問：凹透鏡成像有什麼特性？ 答： 凹透鏡的像永遠是： 記憶口訣：虛正縮，不會變 問：透鏡公式是什麼？符號約定？ 答： 焦點入，平行出 指向對側焦點 F‘ 的光線 折射後平行於主軸射出"}},{"topic":"concave","en":{"q":"What is Rule 3?","a":"Three Principal Rays - Rule 3 C in C out, Straight through Ray passing through optical center C Direction unchanged, travels straight through"},"zhHant":{"q":"三條主要光線 - Rule 3","a":"C 入 C 出，直入直出 通過透鏡光心 C 的光線 方向不變，直線通過"}},{"topic":"concave","en":{"q":"What are the characteristics of images formed by concave lens?","a":"Image Properties of Concave Lens ✅ Virtual - Cannot be projected on screen ✅ Erect - Same orientation as object ✅ Diminished - Smaller than object ✅ Position - Between lens and object"},"zhHant":{"q":"凹透鏡成像性質","a":"✅ 虛像（Virtual） - 不能投影在屏幕上 ✅ 正立（Erect） - 與物體方向相同 ✅ 縮小（Diminished） - 比物體小 ✅ 位置 - 在透鏡與物體之間"}},{"topic":"concave","en":{"q":"What is the lens formula? Sign convention?","a":"Lens Formula =f1 +u1 v1 Sign Convention: Q: What is the magnification formula? A: Concave lens characteristics: Q: How does a peep-hole lens work? A: Q: How does concave lens correct myopia? = focal length (concave lens: -ve) f = object distance (always +ve) u = image distance (virtual image: -ve) v"},"zhHant":{"q":"透鏡公式","a":"=f1 +u1 v1 符號約定： 問：放大率公式是什麼？ 答： 凹透鏡特點： 問：門眼透鏡如何運作？ 答： 問：凹透鏡如何矯正近視？ = 焦距（凹透鏡：-ve） f = 物距（永遠 +ve） u = 像距（虛像：-ve） v"}},{"topic":"concave","en":{"q":"What is the magnification formula?","a":"Linear Magnification M= =uv h o h i is negative (virtual image) v (diminished) ∣M∣<1"},"zhHant":{"q":"線性放大率","a":"M= =uv h o h i 是負值（虛像） v （縮小） ∣M∣<1"}},{"topic":"concave","en":{"q":"How does a peep-hole lens work?","a":"Applications (1) Uses concave lens to form diminished, erect virtual image Can see wider field of view outside door Provides wide-angle vision"},"zhHant":{"q":"凹透鏡的應用（一）","a":"利用凹透鏡成縮小正立虛像 可以看到門外較大範圍的景象 提供廣角視野"}},{"topic":"concave","en":{"q":"How does concave lens correct myopia?","a":"Applications (2) A: Q: Where is the image formed by concave lens? A: Q: When object is at focus, is image at infinity? A: ❌ Wrong! Q: Can concave lens form real image? A: ❌ Wrong! Myopia problem: Light converges in front of retina Concave lens action: Diverges light Effect: Moves focus back to retina Allows distant objects to be seen clearly"},"zhHant":{"q":"凹透鏡的應用（二）","a":"答： 問：凹透鏡成像的位置在哪裡？ 答： 問：物體在焦點時，像在無窮遠？ 答： ❌ 錯誤！ 問：凹透鏡可能成實像嗎？ 答： ❌ 錯誤！ 近視問題：光線會聚在視網膜前方 凹透鏡作用：使光線發散 效果：將焦點後移至視網膜上 使遠處物體能清晰成像"}},{"topic":"concave","en":{"q":"Where is the image formed by concave lens?","a":"Image Position Always between lens and object Located between C and F Never on opposite side of lens Never at infinity"},"zhHant":{"q":"像的位置","a":"永遠在透鏡與物體之間 位於 C 和 F 之間 不會在透鏡的另一側 不會在無窮遠"}},{"topic":"concave","en":{"q":"When object is at focus, is image at infinity?","a":"Common Misconception (1) Image of concave lens is always between lens and object Never at infinity Image nature unchanged regardless of object distance"},"zhHant":{"q":"常見誤解（一）","a":"凹透鏡的像永遠在透鏡與物體之間 不會在無窮遠 無論物距多少，成像性質不變"}},{"topic":"concave","en":{"q":"Can concave lens form real image?","a":"Common Misconception (2) Image of concave lens is always virtual Q: Can concave lens form magnified image? A: ❌ Wrong! Q: What to note when using lens formula for concave lens? A: Example: cm, cm Cannot be displayed on screen Same regardless of object position"},"zhHant":{"q":"常見誤解（二）","a":"凹透鏡的像永遠是虛像 問：凹透鏡可能成放大的像嗎？ 答： ❌ 錯誤！ 問：使用透鏡公式計算凹透鏡時要注意什麼？ 答： 例： cm, cm 不能在屏幕上顯示 無論物體位置如何都一樣"}},{"topic":"concave","en":{"q":"Can concave lens form magnified image?","a":"Common Misconception (3) Image of concave lens is always diminished ∣M∣<1 Same regardless of object distance"},"zhHant":{"q":"常見誤解（三）","a":"凹透鏡的像永遠是縮小的 ∣M∣<1 無論物距多少都一樣"}},{"topic":"concave","en":{"q":"What to note when using lens formula for concave lens?","a":"Calculation Tips Focal length substitute negative value (concave lens) 1. f Image distance result is negative (virtual image) 2. v Magnification take absolute value to judge size 3. M f =−10 u=20 =−10 1 +20 1 v 1 cm (negative = virtual image) Q: What to note when drawing concave lens ray diagrams? A: Q: Memory mnemonic for concave lens imaging? A: Concave lens, light diverges Virtual, erect, diminished - never changes Image between object and lens Short-sighted eyes, use it to correct Q: What must be remembered for exam about concave lens? A: v=−6.67"},"zhHant":{"q":"計算技巧","a":"焦距 代入負值（凹透鏡） 1. f 像距 結果是負值（虛像） 2. v 放大率 取絕對值判斷大小 3. M f =−10 u=20 =−10 1 +20 1 v 1 cm（負值 = 虛像） 問：畫凹透鏡光路圖要注意什麼？ 答： 問：凹透鏡成像的記憶口訣？ 答： 凹透鏡，散光線 虛正縮，不會變 像在中，物鏡間 近視眼，用它矯 問：考試必須記住的凹透鏡重點？ 答： v=−6.67"}},{"topic":"concave","en":{"q":"What to note when drawing concave lens ray diagrams?","a":"Ray Diagram Points Draw at least two rays to locate image1. Virtual image use dotted lines2. Refraction occurs at lens3. Distinguish incident and refracted rays clearly4."},"zhHant":{"q":"作圖要點","a":"至少畫兩條光線定位像1. 虛像用虛線（dotted line）表示2. 光線在透鏡處發生折射3. 入射與折射光線要清楚區分4."}},{"topic":"concave","en":{"q":"Memory mnemonic for concave lens imaging?","a":"Quick Memory Mnemonic"},"zhHant":{"q":"快速記憶口訣","a":""}},{"topic":"concave","en":{"q":"What must be remembered for exam about concave lens?","a":"HKDSE Key Points Concave lens = Diverging lens1. Image nature: Virtual, erect, diminished2. Focal length sign: Negative (-ve)3. Image distance sign: Negative (-ve)4. Applications: Peep-hole lens, myopia correction5. Q: Why is concave lens called diverging lens? A: Q: How to quickly determine convex or concave lens? A: Observe imaging: Observe light rays: Observe applications:"},"zhHant":{"q":"HKDSE 必記重點","a":"凹透鏡 = 發散透鏡1. 像的性質：虛像、正立、縮小2. 焦距符號：負值 (-ve)3. 像距符號：負值 (-ve)4. 應用：門眼透鏡、近視矯正5. 問：為什麼凹透鏡叫發散透鏡？ 答： 問：如何快速判斷是凸透鏡還是凹透鏡？ 答： 觀察成像： 觀察光線： 觀察應用："}},{"topic":"concave","en":{"q":"Why is concave lens called diverging lens?","a":"Diverging Light Characteristics Parallel rays spread outward after refraction by concave lens Refracted rays do not actually intersect Extended lines intersect at focus behind All parallel incident rays' extensions pass through focus on focal plane"},"zhHant":{"q":"發散光線的特性","a":"平行光線經凹透鏡折射後會向外散開 折射光線不會實際相交 延長線向後交於焦點 所有平行入射光線的延長線都通過焦平面上的焦點"}},{"topic":"concave","en":{"q":"How to quickly determine convex or concave lens?","a":"Comprehensive Comparison Can form real image → Convex lens Only forms virtual image → Concave lens Rays converge → Convex lens Rays diverge → Concave lens Magnifying glass, camera → Convex lens Myopia glasses, peep-hole → Concave lens"},"zhHant":{"q":"綜合比較","a":"能成實像 → 凸透鏡 只成虛像 → 凹透鏡 光線會聚 → 凸透鏡 光線發散 → 凹透鏡 放大鏡、相機 → 凸透鏡 近視眼鏡、門眼 → 凹透鏡"}},{"topic":"em","en":{"q":"What is the visible spectrum?","a":"Visible Spectrum Color spectrum formed when white light disperses through a prism Order (wavelength long to short): Red, Orange, Yellow, Green, Blue, Indigo, Violet Mnemonic: ROY G BIV"},"zhHant":{"q":"可見光譜","a":"白光通過三棱鏡分散成的色譜 順序（波長由長到短）：紅、橙、黃、綠、藍、靛、紫 記憶口訣：紅橙黃綠藍靛紫"}},{"topic":"em","en":{"q":"What are the three primary colors of light?","a":"Primary Colors 🔴 Red 🟢 Green 🔵 Blue"},"zhHant":{"q":"三原色","a":"🔴 紅色（Red） 🟢 綠色（Green） 🔵 藍色（Blue）"}},{"topic":"em","en":{"q":"How are secondary colors of light produced?","a":"Secondary Colors Red + Green = 🟡 Yellow Green + Blue = 🔵 Cyan Blue + Red = 🟣 Magenta Q: How is the color of an object determined? A: Determined by the colors of light it reflects: Example: Red object in green light appears black (absorbs green, no red to reflect) Q: What is the order of EM spectrum? (wavelength long to short) A: Memory Mnemonic: R M I V U X G Q: Properties and applications of radio waves? A:"},"zhHant":{"q":"二次色","a":"紅 + 綠 = 🟡 黃色（Yellow） 綠 + 藍 = 🔵 青色（Cyan） 藍 + 紅 = 🟣 洋紅色（Magenta）"}},{"topic":"em","en":{"q":"How is the color of an object determined?","a":"Color of Objects White object → Reflects all colors Colored object → Only reflects its own color, absorbs others Black object → Absorbs all colors"},"zhHant":{"q":"物體的顏色","a":"答： 由反射的光的顏色決定： 例： 紅色物體在綠光下看起來是黑色（因為吸收綠光，無紅光可反射） 問：電磁波譜的順序是什麼？（波長由長到短） 答： 記憶口訣：無微紅可紫 X 伽 問：無線電波的特性與應用？ 答： 白色物體 → 反射所有顏色 彩色物體 → 只反射自己的顏色，吸收其他顏色 黑色物體 → 吸收所有顏色"}},{"topic":"em","en":{"q":"What is the order of EM spectrum? (wavelength long to short)","a":"EM Spectrum Order Radio waves1. Microwaves2. Infrared3. Visible light4. Ultraviolet5. X-rays6. Gamma rays7."},"zhHant":{"q":"電磁波譜順序","a":"無線電波（Radio waves）1. 微波（Microwaves）2. 紅外線（Infrared）3. 可見光（Visible light）4. 紫外線（Ultraviolet）5. X 射線（X-rays）6. 伽馬射線（Gamma rays）7."}},{"topic":"em","en":{"q":"Properties and applications of radio waves?","a":"Radio Waves Wavelength range: – 10−1 Q: Properties and applications of microwaves? A: Q: Properties and applications of infrared? A: m (longest) 104 Applications: Radio/TV broadcasting Mobile phone communication"},"zhHant":{"q":"無線電波","a":"波長範圍： – m（最長） 10−1 104 應用： 無線電/電視廣播 問：微波的特性與應用？ 答： 問：紅外線的特性與應用？ 答： 手機通訊"}},{"topic":"em","en":{"q":"Properties and applications of microwaves?","a":"Microwaves Wavelength range: – m 10−3 10−1 Applications: Microwave oven Satellite communication Radar"},"zhHant":{"q":"微波","a":"波長範圍： – m 10−3 10−1 應用： 微波爐 衛星通訊 雷達（Radar）"}},{"topic":"em","en":{"q":"Properties and applications of infrared?","a":"Infrared Wavelength range: – m 10−6 10−3 Source: All objects above 0 K Applications: TV remote control Q: Properties of visible light? A: Q: Properties and applications of ultraviolet? A: Camera auto-focus Infrared thermometer Night vision camera"},"zhHant":{"q":"紅外線","a":"波長範圍： – m 10−6 10−3 來源：所有溫度高於 0 K 的物體 應用： 電視遙控器 相機自動對焦 紅外線溫度計 夜視攝影機 問：可見光的特性？ 答： 問：紫外線的特性與應用？ 答： 問：X 射線的特性與應用？ 答："}},{"topic":"em","en":{"q":"Properties of visible light?","a":"Visible Light Wavelength range: – m 4×10−7 7×10−7 Detector: Human eye Applications: Lighting, vision Only part of EM spectrum visible to human eye"},"zhHant":{"q":"可見光","a":"波長範圍： – m 4×10−7 7×10−7 探測器：人眼 應用：照明、視覺 是電磁波譜中唯一人眼可見的部分"}},{"topic":"em","en":{"q":"Properties and applications of ultraviolet?","a":"Ultraviolet Wavelength range: – m 10−9 10−8 Applications: Sterilizing drinking water Checking banknotes Producing Vitamin D in skin Danger: ⚠ Over-exposure may cause skin cancer Q: Properties and applications of X-rays? A: Q: Properties and applications of gamma rays? A: Q: What are the common properties of all EM waves? A:"},"zhHant":{"q":"紫外線","a":"波長範圍： – m 10−9 10−8 應用： 消毒飲用水 檢查鈔票真偽 促進皮膚產生維生素 D 危險： ⚠ 過度曝曬可能導致皮膚癌"}},{"topic":"em","en":{"q":"Properties and applications of X-rays?","a":"X-rays Wavelength range: m 10−10 Applications: See-through images (human body or luggage) CT scan Medical diagnosis Property: Highly penetrating"},"zhHant":{"q":"X 射線","a":"問：伽馬射線的特性與應用？ 答： 問：所有電磁波的共同特性是什麼？ 答： 波長範圍： m 10−10 應用： 透視成像（人體或行李） CT 掃描 醫學診斷 特性：高度穿透性"}},{"topic":"em","en":{"q":"Properties and applications of gamma rays?","a":"Gamma Rays Wavelength range: m (shortest) 10−12 Source: Radioactive substances Applications: Sterilization (food disinfection) Radiotherapy (killing cancer cells) Medical uses"},"zhHant":{"q":"伽馬射線","a":"波長範圍： m（最短） 10−12 來源：放射性物質 應用： 殺菌（食物消毒） 放射治療（殺死癌細胞） 醫療用途"}},{"topic":"em","en":{"q":"What are the common properties of all EM waves?","a":"Common Properties of EM Waves (1) ✅ Transverse waves - Vibration perpendicular to propagation1. Q: What wave equation do EM waves obey? A: Where: All EM waves exhibit: Reflection, refraction, diffraction, interference Q: What is the relationship between wavelength and frequency? A: Inverse relationship: ✅ Carry energy2. ✅ Travel in vacuum - Do not require medium3. ✅ Same speed in vacuum - 4. c=3×10 m s8 −1"},"zhHant":{"q":"電磁波的共同特性（一）","a":"✅ 橫波 - 振動方向垂直於傳播方向1. ✅ 攜帶能量2. ✅ 可在真空中傳播 - 不需要介質3. ✅ 在真空中速度相同 - 4. c=3×10 m s8 −1 問：電磁波遵守什麼波動公式？ 答： 其中： 所有電磁波都會表現出： 反射、折射、繞射、干涉 問：波長與頻率有什麼關係？ 答： 反比關係： 例："}},{"topic":"em","en":{"q":"What wave equation do EM waves obey?","a":"Common Properties of EM Waves (2) v=fλ = wave speed (in vacuum: ) v c=3×10 m s8 −1 = frequency (Hz) f = wavelength (m) λ"},"zhHant":{"q":"電磁波的共同特性（二）","a":"v=fλ = 波速（在真空中為 ） v c=3×10 m s8 −1 = 頻率（Hz） f = 波長（m） λ"}},{"topic":"em","en":{"q":"What is the relationship between wavelength and frequency?","a":"Wavelength-Frequency Relationship f = λc Longer wavelength → Lower frequency Shorter wavelength → Higher frequency Example: Q: Arrange EM waves by wavelength (long to short)? A: Radio waves > Microwaves > Infrared > Visible light > Ultraviolet > X-rays > Gamma rays Memory Mnemonic: R M I V U X G Q: Arrange EM waves by frequency (low to high)? A: Radio waves < Microwaves < Infrared < Visible light < Ultraviolet < X-rays < Gamma rays Remember: Frequency order is opposite to wavelength order Q: What is the speed of EM waves in vacuum? A: Important properties: Radio waves: Longest wavelength, lowest frequency Gamma rays: Shortest wavelength, highest frequency"},"zhHant":{"q":"波長與頻率的關係","a":"f = λc 波長越長 → 頻率越低 波長越短 → 頻率越高 無線電波：波長最長，頻率最低 伽馬射線：波長最短，頻率最高 問：電磁波按波長由長到短排列？ 答： 無線電波 > 微波 > 紅外線 > 可見光 > 紫外線 > X 射線 > 伽馬射線 記憶口訣：無微紅可紫 X 伽 問：電磁波按頻率由低到高排列？ 答： 無線電波 < 微波 < 紅外線 < 可見光 < 紫外線 < X 射線 < 伽馬射線 記住： 頻率順序與波長順序相反 問：電磁波在真空中的速度是多少？ 答： 重要特性： 問：什麼證據顯示光是電磁波？"}},{"topic":"em","en":{"q":"Arrange EM waves by wavelength (long to short)?","a":"EM Spectrum Ordering (Wavelength)"},"zhHant":{"q":"電磁波譜排序（波長）","a":""}},{"topic":"em","en":{"q":"Arrange EM waves by frequency (low to high)?","a":"EM Spectrum Ordering (Frequency)"},"zhHant":{"q":"電磁波譜排序（頻率）","a":""}},{"topic":"em","en":{"q":"What is the speed of EM waves in vacuum?","a":"Speed in Vacuum c=3×10 m s8 −1 All EM waves have the same speed in vacuum Q: What evidence shows light is an electromagnetic wave? A: Q: What are the main applications of these EM waves? A: Q: What are the main applications of these EM waves? A: This is the universal speed limit Speed decreases in materials"},"zhHant":{"q":"真空中的速度","a":"c=3×10 m s8 −1 所有電磁波在真空中速度相同 這是宇宙中的速度上限 在介質中速度會變慢"}},{"topic":"em","en":{"q":"What evidence shows light is an electromagnetic wave?","a":"Evidence Light is EM Wave ✅ Light can travel in vacuum (from Sun to Earth)1. ✅ Light is a transverse wave2. ✅ Light speed equals EM wave speed ( ) 3. 3×10 m s8 −1"},"zhHant":{"q":"光是電磁波的證據","a":"答： 問：以下電磁波的主要應用是什麼？ 答： 問：以下電磁波的主要應用是什麼？ 答： 問：為什麼不應過度使用紫外燈？ 答： ⚠ 過度曝曬紫外線可能導致皮膚癌 原因： ✅ 光可以在真空中傳播（從太陽到地球）1. ✅ 光是橫波2. ✅ 光的速度等於電磁波速度（ ） 3. 3×10 m s8 −1"}},{"topic":"em","en":{"q":"What are the main applications of these EM waves?","a":"Application Matching (1) Microwaves → Microwave oven, satellite communication, radar Infrared → Remote control, auto-focus, thermometer, night vision Ultraviolet → Sterilization, checking banknotes, Vitamin D"},"zhHant":{"q":"應用配對（一）","a":"微波 → 微波爐、衛星通訊、雷達 紅外線 → 遙控器、自動對焦、溫度計、夜視 紫外線 → 消毒、檢查鈔票、維生素 D"}},{"topic":"em","en":{"q":"What are the main applications of these EM waves?","a":"Application Matching (2) X-rays → See-through imaging, CT scan Gamma rays → Sterilization, radiotherapy Radio waves → Broadcasting, mobile communication Q: Why should UV lamps not be over-used? A: ⚠ Over-exposure to UV may cause skin cancer Reasons: ✅ Moderate exposure promotes Vitamin D production Q: Order of colors within visible light by wavelength? A: Wavelength (long to short): Red > Orange > Yellow > Green > Blue > Indigo > Violet Frequency (low to high): Red < Orange < Yellow < Green < Blue < Indigo < Violet Mnemonic: ROY G BIV Q: How to use for calculations? A: Formula:"},"zhHant":{"q":"應用配對（二）","a":"X 射線 → 透視成像、CT 掃描 伽馬射線 → 殺菌、放射治療 無線電波 → 廣播、手機通訊"}},{"topic":"em","en":{"q":"Why should UV lamps not be over-used?","a":"UV Danger UV has higher energy Damages skin cells Long-term over-exposure increases cancer risk"},"zhHant":{"q":"紫外線的危險","a":"紫外線能量較高 會損害皮膚細胞 ✅ 適度曝曬可促進維生素 D 產生 問：可見光內各顏色的波長順序？ 答： 波長由長到短： 紅 > 橙 > 黃 > 綠 > 藍 > 靛 > 紫 頻率由低到高： 紅 < 橙 < 黃 < 綠 < 藍 < 靛 < 紫 記憶口訣：紅橙黃綠藍靛紫 問：如何使用 計算？ 答： 公式： 在真空中： ，其中 例題： 波長 m 的光，頻率是多少？ 長期過度曝曬增加癌症風險"}},{"topic":"em","en":{"q":"Order of colors within visible light by wavelength?","a":"Visible Light Order"},"zhHant":{"q":"可見光內的順序","a":""}},{"topic":"em","en":{"q":"How to use","a":"Calculation Technique v=fλ v=fλ In vacuum: , where Example: Light with wavelength m, what is frequency? Solution: Q: Which of the following applications are incorrect? A: ❌ Wrong pairings: ✅ Correct memory: Q: Memory mnemonics for EM waves? A: EM Spectrum Order: c=fλ c=3×10 m s8 −1 λ=6×10−7 f = =λc =6×10−7 3×108 5×10 Hz14"},"zhHant":{"q":"計算技巧","a":"v=fλ v=fλ c=fλ c=3×10 m s8 −1 λ=6×10−7 解： 問：以下哪個應用是錯誤的？ 答： ❌ 錯誤配對： ✅ 正確記憶： 問：電磁波的記憶口訣？ 答： 電磁波譜順序： 無微紅可紫 X 伽 電磁波特性： 橫波能量真空行 速度相同三億整 反射折射繞射干 波動公式 v = fλ f = =λc =6×10−73×108 5×10 Hz14"}},{"topic":"em","en":{"q":"Which of the following applications are incorrect?","a":"Common Wrong Applications Microwaves → Thermometer (should be infrared) Infrared → Laser pointer (should be visible light) UV → Camera auto-focus (should be infrared) Thermometer → Infrared Remote control → Infrared Sterilization → Ultraviolet Radar → Microwaves"},"zhHant":{"q":"常見錯誤應用","a":"微波 → 溫度計（應該是紅外線） 紅外線 → 雷射筆（應該是可見光） 紫外線 → 相機自動對焦（應該是紅外線） 溫度計 → 紅外線 遙控器 → 紅外線 消毒 → 紫外線 雷達 → 微波"}},{"topic":"em","en":{"q":"Memory mnemonics for EM waves?","a":"Quick Memory Mnemonics R M I V U X G EM Wave Properties: Transverse waves carry energy through space Same speed three hundred million Reflect, refract, diffract, interfere Wave equation v = fλ Secondary Colors: Red plus Green makes Yellow Green plus Blue makes Cyan Blue plus Red makes Magenta Q: What must be remembered for exam about EM waves? A:"},"zhHant":{"q":"快速記憶口訣","a":"二次色： 紅加綠，變成黃 綠加藍，變成青 藍加紅，變洋紅 問：考試必須記住的電磁波重點？ 答： 問：電磁波題目的解題技巧？ 答："}},{"topic":"em","en":{"q":"What must be remembered for exam about EM waves?","a":"HKDSE Key Points EM spectrum order (wavelength long to short)1. Primary colors: Red, Green, Blue2. Speed in vacuum: 3. c=3×10 m s8 −1 Wave equation: 4. v=fλ Applications of various EM waves5. Wavelength and frequency inversely related6. Q: Problem-solving tips for EM wave questions? A: Q: How to remember wavelength ranges of various EM waves? A: Remember one reference point: Visible light ≈ m Relative relationships:"},"zhHant":{"q":"HKDSE 必記重點","a":"電磁波譜順序（波長由長到短）1. 三原色：紅、綠、藍2. 真空中速度：3. c=3×10 m s8 −1 波動公式：4. v=fλ 各種電磁波的應用5. 波長與頻率反比6."}},{"topic":"em","en":{"q":"Problem-solving tips for EM wave questions?","a":"Problem-Solving Tips Ordering questions → Remember mnemonic \\"R M I V U X G\\"1. Wavelength & frequency → Inverse relationship, long wavelength = low frequency2. Speed → All EM waves same speed in vacuum3. Application questions → Remember keywords (microwave oven, remote, sterilization, see-through) 4. Calculation questions → Use , pay attention to units 5. v=fλ"},"zhHant":{"q":"解題技巧","a":"排序題 → 記住口訣「無微紅可紫 X 伽」1. 波長與頻率 → 反比關係，波長長則頻率低2. 速度 → 真空中所有電磁波速度相同3. 應用題 → 記住關鍵字（微波爐、遙控器、消毒、透視）4. 計算題 → 使用 ，注意單位 5. v=fλ 問：如何記住各種電磁波的波長範圍？ 答： 記住一個參考點： 可見光約 m 相對關係："}},{"topic":"em","en":{"q":"How to remember wavelength ranges of various EM waves?","a":"Wavelength Range Reference 10−7 Radio waves: – m (much longer than visible) 10−1 104 Microwaves: – m 10−3 10−1 Infrared: – 10−6 Q: How to quickly determine which EM wave to use? A: Choose based on function: m 10−3 Visible light: m (reference point) 10−7 Ultraviolet: – m 10−9 10−8 X-rays: m 10−10 Gamma rays: m (shortest) 10−12"},"zhHant":{"q":"波長範圍參考","a":"10−7 無線電波： – m（比可見光長很多） 10−1 104 微波： – m 10−3 10−1 紅外線： – m 10−6 10−3 可見光： m（參考點） 10−7 紫外線： – m 10−9 10−8 X 射線： m 10−10 問：如何快速判斷使用哪種電磁波？ 答： 根據功能選擇： 伽馬射線： m（最短） 10−12"}},{"topic":"em","en":{"q":"How to quickly determine which EM wave to use?","a":"Comprehensive Application Communication → Radio waves, microwaves Heating → Microwaves, infrared Remote control → Infrared Sterilization → Ultraviolet, gamma rays See-through imaging → X-rays Cancer treatment → Gamma rays Temperature measurement → Infrared"},"zhHant":{"q":"綜合應用","a":"通訊 → 無線電波、微波 加熱 → 微波、紅外線 遙控 → 紅外線 消毒 → 紫外線、伽馬射線 透視 → X 射線 治療癌症 → 伽馬射線 測溫 → 紅外線"}},{"topic":"liquidThermometer","en":{"q":"What is the boiling point of mercury and alcohol?","a":"Mercury: 356.7°C (high boiling point, suitable for measuring hot oil)\\nAlcohol: 78.4°C (low boiling point, vaporizes under high temperature/pressure)"},"zhHant":{"q":"水銀和酒精的沸點分別是多少？","a":"水銀：356.7°C（沸點高，適合測量高溫熱油）\\n酒精：78.4°C（沸點低，高溫下易汽化產生高壓）"}},{"topic":"faultyThermometer","en":{"q":"What is the proportional interval formula for a faulty thermometer?","a":"T / 100 = (C_measured - C_f) / (C_u - C_f)\\nWhere C_f is ice point reading, C_u is steam point reading, and C_measured is the faulty reading."},"zhHant":{"q":"有誤差溫度計的等比例區間公式是什麼？","a":"T / 100 = (C_measured - C_f) / (C_u - C_f)\\n其中 C_f 是冰點讀數，C_u 是蒸汽點讀數，C_measured 是測量讀數。"}},{"topic":"resistanceThermometer","en":{"q":"What is the platinum resistance temperature formula?","a":"theta = ((R - R0) / (R100 - R0)) * 100\\nAssumes resistance varies linearly with temperature."},"zhHant":{"q":"鉑電阻溫度計的溫度計算公式是什麼？","a":"theta = ((R - R0) / (R100 - R0)) * 100\\n假設電阻隨溫度線性變化。"}},{"topic":"thermistor","en":{"q":"How does NTC thermistor resistance change with temperature?","a":"Negative Temperature Coefficient: resistance decreases exponentially as temperature increases."},"zhHant":{"q":"NTC 熱敏電阻的電阻如何隨溫度變化？","a":"負溫度係數：電阻隨溫度升高而呈指數級減少。"}}]`),Be=[{id:1,topic:"reflection",title:"Law of Reflection",front:"./flashcards/reflection/01-front.webp",alt:"Flashcard 1 - Law of Reflection",back:"./flashcards/reflection/01-back.webp"},{id:2,topic:"reflection",title:"Angle Definitions",front:"./flashcards/reflection/02-front.webp",alt:"Flashcard 2 - Angle Definitions",back:"./flashcards/reflection/02-back.webp"},{id:3,topic:"reflection",title:"Ray Diagram Construction",front:"./flashcards/reflection/03-front.webp",alt:"Flashcard 3 - Ray Diagram Construction",back:"./flashcards/reflection/03-back.webp"},{id:4,topic:"reflection",title:"Image Properties",front:"./flashcards/reflection/04-front.webp",alt:"Flashcard 4 - Image Properties",back:"./flashcards/reflection/04-back.webp"},{id:5,topic:"reflection",title:"Object-Image Distance",front:"./flashcards/reflection/05-front.webp",alt:"Flashcard 5 - Object-Image Distance",back:"./flashcards/reflection/05-back.webp"},{id:6,topic:"reflection",title:"Visibility Condition",front:"./flashcards/reflection/06-front.webp",alt:"Flashcard 6 - Visibility Condition",back:"./flashcards/reflection/06-back.webp"},{id:7,topic:"reflection",title:"Reversibility of Light",front:"./flashcards/reflection/07-front.webp",alt:"Flashcard 7 - Reversibility of Light",back:"./flashcards/reflection/07-back.webp"},{id:8,topic:"reflection",title:"Lateral Inversion",front:"./flashcards/reflection/08-front.webp",alt:"Flashcard 8 - Lateral Inversion",back:"./flashcards/reflection/08-back.webp"},{id:9,topic:"reflection",title:"Applications",front:"./flashcards/reflection/09-front.webp",alt:"Flashcard 9 - Applications",back:"./flashcards/reflection/09-back.webp"}],Qe=[{id:1,topic:"refraction",title:"What is Refraction",front:"./flashcards/refraction/01-front.webp",alt:"Flashcard 1 - What is Refraction",back:"./flashcards/refraction/01-back.webp"},{id:2,topic:"refraction",title:"Denser vs Less Dense",front:"./flashcards/refraction/02-front.webp",alt:"Flashcard 2 - Denser vs Less Dense",back:"./flashcards/refraction/02-back.webp"},{id:3,topic:"refraction",title:"Less Dense to Denser",front:"./flashcards/refraction/03-front.webp",alt:"Flashcard 3 - Less Dense to Denser",back:"./flashcards/refraction/03-back.webp"},{id:4,topic:"refraction",title:"Denser to Less Dense",front:"./flashcards/refraction/04-front.webp",alt:"Flashcard 4 - Denser to Less Dense",back:"./flashcards/refraction/04-back.webp"},{id:5,topic:"refraction",title:"Laws of Refraction",front:"./flashcards/refraction/05-front.webp",alt:"Flashcard 5 - Laws of Refraction",back:"./flashcards/refraction/05-back.webp"},{id:6,topic:"refraction",title:"Snell's Law",front:"./flashcards/refraction/06-front.webp",alt:"Flashcard 6 - Snell's Law",back:"./flashcards/refraction/06-back.webp"},{id:7,topic:"refraction",title:"Refractive Index",front:"./flashcards/refraction/07-front.webp",alt:"Flashcard 7 - Refractive Index",back:"./flashcards/refraction/07-back.webp"},{id:8,topic:"refraction",title:"Normal Incidence",front:"./flashcards/refraction/08-front.webp",alt:"Flashcard 8 - Normal Incidence",back:"./flashcards/refraction/08-back.webp"},{id:9,topic:"refraction",title:"Apparent Depth",front:"./flashcards/refraction/09-front.webp",alt:"Flashcard 9 - Apparent Depth",back:"./flashcards/refraction/09-back.webp"},{id:10,topic:"refraction",title:"Experiment Graph",front:"./flashcards/refraction/10-front.webp",alt:"Flashcard 10 - Experiment Graph",back:"./flashcards/refraction/10-back.webp"},{id:11,topic:"refraction",title:"Dispersion",front:"./flashcards/refraction/11-front.webp",alt:"Flashcard 11 - Dispersion",back:"./flashcards/refraction/11-back.webp"},{id:12,topic:"refraction",title:"Red vs Violet",front:"./flashcards/refraction/12-front.webp",alt:"Flashcard 12 - Red vs Violet",back:"./flashcards/refraction/12-back.webp"}],Ne=[{id:1,topic:"tir",title:"What is TIR",front:"./flashcards/tir/01-front.webp",alt:"Flashcard 1 - What is TIR",back:"./flashcards/tir/01-back.webp"},{id:2,topic:"tir",title:"Two Conditions",front:"./flashcards/tir/02-front.webp",alt:"Flashcard 2 - Two Conditions",back:"./flashcards/tir/02-back.webp"},{id:3,topic:"tir",title:"Critical Angle",front:"./flashcards/tir/03-front.webp",alt:"Flashcard 3 - Critical Angle",back:"./flashcards/tir/03-back.webp"},{id:4,topic:"tir",title:"Three Scenarios",front:"./flashcards/tir/04-front.webp",alt:"Flashcard 4 - Three Scenarios",back:"./flashcards/tir/04-back.webp"},{id:5,topic:"tir",title:"Fish Eye View",front:"./flashcards/tir/05-front.webp",alt:"Flashcard 5 - Fish Eye View",back:"./flashcards/tir/05-back.webp"},{id:6,topic:"tir",title:"Mirage",front:"./flashcards/tir/06-front.webp",alt:"Flashcard 6 - Mirage",back:"./flashcards/tir/06-back.webp"},{id:7,topic:"tir",title:"Reflecting Prisms",front:"./flashcards/tir/07-front.webp",alt:"Flashcard 7 - Reflecting Prisms",back:"./flashcards/tir/07-back.webp"},{id:8,topic:"tir",title:"Optical Fibres",front:"./flashcards/tir/08-front.webp",alt:"Flashcard 8 - Optical Fibres",back:"./flashcards/tir/08-back.webp"},{id:9,topic:"tir",title:"Advantages",front:"./flashcards/tir/09-front.webp",alt:"Flashcard 9 - Advantages",back:"./flashcards/tir/09-back.webp"}],Ve=[{id:1,topic:"em",title:"EM Spectrum Order",front:"./flashcards/em/01-front.webp",alt:"Flashcard 1 - EM Spectrum Order",back:"./flashcards/em/01-back.webp"},{id:2,topic:"em",title:"Common Properties",front:"./flashcards/em/02-front.webp",alt:"Flashcard 2 - Common Properties",back:"./flashcards/em/02-back.webp"},{id:3,topic:"em",title:"Speed & Equation",front:"./flashcards/em/03-front.webp",alt:"Flashcard 3 - Speed & Equation",back:"./flashcards/em/03-back.webp"},{id:4,topic:"em",title:"Radio Waves & Microwaves",front:"./flashcards/em/04-front.webp",alt:"Flashcard 4 - Radio Waves & Microwaves",back:"./flashcards/em/04-back.webp"},{id:5,topic:"em",title:"Infrared",front:"./flashcards/em/05-front.webp",alt:"Flashcard 5 - Infrared",back:"./flashcards/em/05-back.webp"},{id:6,topic:"em",title:"Visible Light & Ultraviolet",front:"./flashcards/em/06-front.webp",alt:"Flashcard 6 - Visible Light & Ultraviolet",back:"./flashcards/em/06-back.webp"},{id:7,topic:"em",title:"X-rays & Gamma Rays",front:"./flashcards/em/07-front.webp",alt:"Flashcard 7 - X-rays & Gamma Rays",back:"./flashcards/em/07-back.webp"},{id:8,topic:"em",title:"White Light & Spectrum",front:"./flashcards/em/08-front.webp",alt:"Flashcard 8 - White Light & Spectrum",back:"./flashcards/em/08-back.webp"},{id:9,topic:"em",title:"Primary Colours",front:"./flashcards/em/09-front.webp",alt:"Flashcard 9 - Primary Colours",back:"./flashcards/em/09-back.webp"},{id:10,topic:"em",title:"Secondary Colours",front:"./flashcards/em/10-front.webp",alt:"Flashcard 10 - Secondary Colours",back:"./flashcards/em/10-back.webp"},{id:11,topic:"em",title:"Object Colours",front:"./flashcards/em/11-front.webp",alt:"Flashcard 11 - Object Colours",back:"./flashcards/em/11-back.webp"},{id:12,topic:"em",title:"Wavelength & Frequency",front:"./flashcards/em/12-front.webp",alt:"Flashcard 12 - Wavelength & Frequency",back:"./flashcards/em/12-back.webp"}],Ue=[{id:1,topic:"convex",title:"Ray Rule 1",front:"./flashcards/convex/01-front.webp",alt:"Flashcard 1 - Ray Rule 1",back:"./flashcards/convex/01-back.webp"},{id:2,topic:"convex",title:"Ray Rule 2",front:"./flashcards/convex/02-front.webp",alt:"Flashcard 2 - Ray Rule 2",back:"./flashcards/convex/02-back.webp"},{id:3,topic:"convex",title:"Ray Rule 3",front:"./flashcards/convex/03-front.webp",alt:"Flashcard 3 - Ray Rule 3",back:"./flashcards/convex/03-back.webp"},{id:4,topic:"convex",title:"Object at Infinity",front:"./flashcards/convex/04-front.webp",alt:"Flashcard 4 - Object at Infinity",back:"./flashcards/convex/04-back.webp"},{id:5,topic:"convex",title:"Object beyond 2F",front:"./flashcards/convex/05-front.webp",alt:"Flashcard 5 - Object beyond 2F",back:"./flashcards/convex/05-back.webp"},{id:6,topic:"convex",title:"Object at 2F",front:"./flashcards/convex/06-front.webp",alt:"Flashcard 6 - Object at 2F",back:"./flashcards/convex/06-back.webp"},{id:7,topic:"convex",title:"Object between F-2F",front:"./flashcards/convex/07-front.webp",alt:"Flashcard 7 - Object between F-2F",back:"./flashcards/convex/07-back.webp"},{id:8,topic:"convex",title:"Object between Lens-F",front:"./flashcards/convex/08-front.webp",alt:"Flashcard 8 - Object between Lens-F",back:"./flashcards/convex/08-back.webp"},{id:9,topic:"convex",title:"Object at F",front:"./flashcards/convex/09-front.webp",alt:"Flashcard 9 - Object at F",back:"./flashcards/convex/09-back.webp"},{id:10,topic:"convex",title:"Lens Formula",front:"./flashcards/convex/10-front.webp",alt:"Flashcard 10 - Lens Formula",back:"./flashcards/convex/10-back.webp"},{id:11,topic:"convex",title:"Key Remarks",front:"./flashcards/convex/11-front.webp",alt:"Flashcard 11 - Key Remarks",back:"./flashcards/convex/11-back.webp"},{id:12,topic:"convex",title:"Applications",front:"./flashcards/convex/12-front.webp",alt:"Flashcard 12 - Applications",back:"./flashcards/convex/12-back.webp"}],Ye=[{id:1,topic:"concave",title:"Ray Rule 1",alt:"Flashcard 1 - Concave Ray Rule 1",en:{front:"./flashcards/concave/01-en-front.webp",back:"./flashcards/concave/01-en-back.webp"},zhHant:{front:"./flashcards/concave/01-zh-front.webp",back:"./flashcards/concave/01-zh-back.webp"}},{id:2,topic:"concave",title:"Ray Rule 2",alt:"Flashcard 2 - Concave Ray Rule 2",en:{front:"./flashcards/concave/02-en-front.webp",back:"./flashcards/concave/02-en-back.webp"},zhHant:{front:"./flashcards/concave/02-zh-front.webp",back:"./flashcards/concave/02-zh-back.webp"}},{id:3,topic:"concave",title:"Ray Rule 3",alt:"Flashcard 3 - Concave Ray Rule 3",en:{front:"./flashcards/concave/03-en-front.webp",back:"./flashcards/concave/03-en-back.webp"},zhHant:{front:"./flashcards/concave/03-zh-front.webp",back:"./flashcards/concave/03-zh-back.webp"}},{id:4,topic:"concave",title:"Image Formation",alt:"Flashcard 4 - Concave Image Formation",en:{front:"./flashcards/concave/04-en-front.webp",back:"./flashcards/concave/04-en-back.webp"},zhHant:{front:"./flashcards/concave/04-zh-front.webp",back:"./flashcards/concave/04-zh-back.webp"}},{id:5,topic:"concave",title:"Formula",alt:"Flashcard 5 - Concave Formula",en:{front:"./flashcards/concave/05-en-front.webp",back:"./flashcards/concave/05-en-back.webp"},zhHant:{front:"./flashcards/concave/05-zh-front.webp",back:"./flashcards/concave/05-zh-back.webp"}},{id:6,topic:"concave",title:"Key Remarks",alt:"Flashcard 6 - Concave Key Remarks",en:{front:"./flashcards/concave/06-en-front.webp",back:"./flashcards/concave/06-en-back.webp"},zhHant:{front:"./flashcards/concave/06-zh-front.webp",back:"./flashcards/concave/06-zh-back.webp"}}],Ke="s3phy-rotating-mirror-lab-css",Tt=`
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
`;function Ct(){if(document.getElementById(Ke))return;const t=document.createElement("style");t.id=Ke,t.textContent=Tt,document.head.appendChild(t)}function Lt(t){Ct();const i=document.createElement("div");i.className="rml",i.innerHTML=`
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
  `;const s=i.querySelector(".rml-canvas"),n=s.getContext("2d"),u=i.querySelector("[data-rml-rot]"),r=i.querySelector("[data-rml-inc]"),a=i.querySelector('[data-rml-disp="rot"]'),x=i.querySelector('[data-rml-disp="inc"]'),E=i.querySelector('[data-rml-val="i"]'),J=i.querySelector('[data-rml-val="r"]'),P=i.querySelector('[data-rml-val="shift"]'),$=350,G=380,Z=300,M="#22d3ee",F="bold 17px system-ui, sans-serif";let A=0,B=-140,te=!0,K=!0,ee=!0,ae=!0;function V(D){return D*Math.PI/180}function U(D,m,o,d,h,z=2,R=!1){n.beginPath(),n.lineWidth=z,n.strokeStyle=h,n.setLineDash(R?[6,6]:[]);const b=D+Math.cos(V(o))*d,y=m+Math.sin(V(o))*d;return n.moveTo(D,m),n.lineTo(b,y),n.stroke(),n.setLineDash([]),{x:b,y}}function N(D,m,o,d,h,z=14){const R=o-D,b=d-m,y=Math.hypot(R,b);if(y<1e-6)return;const _=R/y,k=b/y,I=o-_*z,H=d-k*z,se=.45*z;n.beginPath(),n.fillStyle=h,n.moveTo(o,d),n.lineTo(I-k*se,H+_*se),n.lineTo(I+k*se,H-_*se),n.closePath(),n.fill()}function X(D,m,o,d,h,z=25){n.beginPath(),n.strokeStyle=d,n.lineWidth=2;const R=Math.min(D,m),b=Math.max(D,m);if(n.arc($,G,o,V(R),V(b),!1),n.stroke(),h){const y=(R+b)/2,_=$+Math.cos(V(y))*(o+z),k=G+Math.sin(V(y))*(o+z);n.save(),n.font="bold 14px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle=d,n.fillText(h,_,k),n.restore()}}function ne(D,m,o,d,h){n.clearRect(0,0,s.width,s.height),n.beginPath(),n.setLineDash([10,6]),n.strokeStyle="rgba(255, 204, 0, 0.45)",n.lineWidth=3,n.lineCap="round",n.moveTo($-200,G),n.lineTo($+200,G),n.stroke(),n.setLineDash([]),n.lineCap="butt";const z=$+Math.cos(V(D))*Z,R=G+Math.sin(V(D))*Z;n.beginPath(),n.lineWidth=3,n.strokeStyle="#fff",n.moveTo(z,R),n.lineTo($,G),n.stroke();const b=(z+$)*.5,y=(R+G)*.5,_=Math.hypot($-z,G-R)||1,k=($-z)/_,I=(G-R)/_;if(N(b-k*28,y-I*28,b,y,"#fff",16),n.save(),n.font=F,n.textAlign="center",n.textBaseline="bottom",n.fillStyle="#fff",n.fillText(t("tools.rotatingMirror.canvas.incident"),z,R-12),n.restore(),te){const H=U($,G,-90,Z-60,"#00e676",1,!0);n.save(),n.font="bold 14px system-ui, sans-serif",n.textAlign="left",n.textBaseline="bottom",n.fillStyle="#00e676",n.fillText(t("tools.rotatingMirror.canvas.n"),H.x+6,H.y-4),n.restore()}if(K){const H=U($,G,d,Z,"#00e676",2,!1);N($,G,H.x,H.y,"#00e676",16),n.save(),n.font=F,n.textAlign="center",n.textBaseline="bottom",n.fillStyle="#00e676",n.fillText(t("tools.rotatingMirror.canvas.originalReflected"),H.x,H.y-14),n.restore()}n.save(),n.translate($,G),n.rotate(V(A)),n.beginPath(),n.lineWidth=6,n.strokeStyle="#ffcc00",n.lineCap="round",n.moveTo(-200,0),n.lineTo(200,0),n.stroke(),n.beginPath(),n.lineWidth=1,n.strokeStyle="#666";for(let H=-190;H<200;H+=15)n.moveTo(H,0),n.lineTo(H-5,8);if(n.stroke(),n.restore(),ee){const H=U($,G,m,Z-40,M,2,!0);n.save(),n.font="bold 14px system-ui, sans-serif",n.textAlign="left",n.textBaseline="bottom",n.fillStyle=M,n.fillText(t("tools.rotatingMirror.canvas.nPrime"),H.x+6,H.y-4),n.restore()}if(ae){const H=U($,G,o,Z,M,4);N($,G,H.x,H.y,M,16),Math.abs(A)>.5&&(n.save(),n.font=F,n.textAlign="center",n.textBaseline="bottom",n.fillStyle=M,n.fillText(t("tools.rotatingMirror.canvas.newReflected"),H.x,H.y-14),n.restore())}if(ee&&X(D,m,100,"#ffcc00",`i=${h.toFixed(0)}°`,25),ee&&ae&&X(m,o,100,M,`r=${h.toFixed(0)}°`,25),te&&ee&&Math.abs(A)>.5&&X(-90,m,50,"#ffcc00",`θ=${Math.abs(A)}°`,20),K&&ae&&Math.abs(A)>.5){const H=o-d;X(d,o,260,"#ff5252",`${t("tools.rotatingMirror.canvas.shift")}=${H.toFixed(0)}°`,40)}}function Y(){A=parseFloat(u.value),B=parseFloat(r.value);const D=A>0?"+":"";a.textContent=`${D}${A}°`,x.textContent=`${B}°`;const m=-90,o=Math.abs(B-m),d=m+o,h=-90+A,z=Math.abs(B-h),R=h+z,b=R-d;E.textContent=`${z.toFixed(1)}°`,J.textContent=`${z.toFixed(1)}°`;const y=b>0?"+":"";P.textContent=`${y}${b.toFixed(1)}°`,ne(B,h,R,d,z)}return i.querySelectorAll("[data-rml-toggle]").forEach(D=>{D.addEventListener("click",()=>{const m=D.getAttribute("data-rml-toggle");m==="orig-norm"&&(te=!te),m==="orig-ray"&&(K=!K),m==="new-norm"&&(ee=!ee),m==="new-ray"&&(ae=!ae),D.classList.toggle("active"),Y()})}),i.querySelector("[data-rml-reset]").addEventListener("click",()=>{u.value="0",Y()}),u.addEventListener("input",Y),r.addEventListener("input",Y),Y(),i}function Mt(t){const i=document.createElement("div");i.className="tool-tir-escape";const s=document.createElement("iframe"),n="./",u=n.endsWith("/")?n:`${n}/`;return s.src=`${u}tir-escape/index.html?embed=1`,s.title=t("tools.refractionTir.title"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin",i.appendChild(s),i}function Rt(t,i={}){const s=i.defaultKind==="concave"?"concave":"convex",n="tools.lens.title",u=document.createElement("div");u.className="tool-lens-simulator";const r=document.createElement("iframe"),a="./",x=a.endsWith("/")?a:`${a}/`;return r.src=`${x}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(s)}`,r.title=t(n),r.setAttribute("loading","lazy"),r.referrerPolicy="strict-origin-when-cross-origin",u.appendChild(r),u}function _t(t){const i=document.createElement("div");i.className="tool-em-spectrum";const s=document.createElement("iframe"),n="./",u=n.endsWith("/")?n:`${n}/`;function r(){return`${u}em-spectrum/index.html?lang=${encodeURIComponent(de())}`}s.src=r(),s.title=t("tools.em.title"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const a=()=>{var x;try{(x=s.contentWindow)==null||x.postMessage({type:"s3phy:lang",lang:de()},"*")}catch{s.src=r()}};return window.addEventListener("s3phy:lang",a),i._emLabCleanup=()=>window.removeEventListener("s3phy:lang",a),i.appendChild(s),i}function zt(t){const i=document.createElement("div");i.className="rgb-mixer",i.innerHTML=`
    <p class="lead rgb-mixer-lead">${t("tools.rgbMixer.intro")}</p>
    <div class="rgb-mixer-body">
      <div class="rgb-mixer-stage">
        <canvas class="rgb-mixer-canvas" aria-label="${t("tools.rgbMixer.canvas")}"></canvas>
        <div class="rgb-mixer-labels" aria-hidden="true">
          <span class="lbl-r">${t("tools.rgbMixer.red")}</span>
          <span class="lbl-g">${t("tools.rgbMixer.green")}</span>
          <span class="lbl-b">${t("tools.rgbMixer.blue")}</span>
        </div>
      </div>
      <aside class="rgb-mixer-controls" aria-label="${t("tools.rgbMixer.controls")}">
        <div class="rgb-channel red">
          <label>
            <span class="name-red">${t("tools.rgbMixer.red")}</span>
            <span data-r-val>128</span>
          </label>
          <input type="range" min="0" max="255" value="128" data-r>
          <div class="rgb-channel-bar"><span data-r-bar style="width:50%"></span></div>
        </div>
        <div class="rgb-channel green">
          <label>
            <span class="name-green">${t("tools.rgbMixer.green")}</span>
            <span data-g-val>128</span>
          </label>
          <input type="range" min="0" max="255" value="128" data-g>
          <div class="rgb-channel-bar"><span data-g-bar style="width:50%"></span></div>
        </div>
        <div class="rgb-channel blue">
          <label>
            <span class="name-blue">${t("tools.rgbMixer.blue")}</span>
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
        <div class="rgb-presets" aria-label="${t("tools.rgbMixer.presets")}">
          <button type="button" data-r="255" data-g="0" data-b="0">${t("tools.rgbMixer.presetRed")}</button>
          <button type="button" data-r="0" data-g="255" data-b="0">${t("tools.rgbMixer.presetGreen")}</button>
          <button type="button" data-r="0" data-g="0" data-b="255">${t("tools.rgbMixer.presetBlue")}</button>
          <button type="button" data-r="255" data-g="255" data-b="0">${t("tools.rgbMixer.presetYellow")}</button>
          <button type="button" data-r="0" data-g="255" data-b="255">${t("tools.rgbMixer.presetCyan")}</button>
          <button type="button" data-r="255" data-g="0" data-b="255">${t("tools.rgbMixer.presetMagenta")}</button>
          <button type="button" data-r="255" data-g="255" data-b="255">${t("tools.rgbMixer.presetWhite")}</button>
          <button type="button" data-r="0" data-g="0" data-b="0">${t("tools.rgbMixer.presetBlack")}</button>
        </div>
      </aside>
    </div>
  `;const s=i.querySelector("[data-r]"),n=i.querySelector("[data-g]"),u=i.querySelector("[data-b]"),r=i.querySelector(".rgb-mixer-canvas"),a=i.querySelector(".rgb-mixer-stage"),x=r.getContext("2d");function E(M){return M.toString(16).padStart(2,"0")}function J(M,F,A){const B=r.width/(window.devicePixelRatio||1),te=r.height/(window.devicePixelRatio||1),K=B/2,ee=te/2,ae=Math.min(B,te)*.34,V=ae*.5,U=Math.sqrt(3)/2;x.clearRect(0,0,B,te),x.fillStyle="#000",x.fillRect(0,0,B,te);const N=[{x:K,y:ee-V,rgb:[255,0,0],val:M},{x:K-V*U,y:ee+V*.5,rgb:[0,255,0],val:F},{x:K+V*U,y:ee+V*.5,rgb:[0,0,255],val:A}];x.globalCompositeOperation="lighter",N.forEach(X=>{if(X.val<=0)return;const ne=X.val/255,[Y,D,m]=X.rgb,o=x.createRadialGradient(X.x,X.y,0,X.x,X.y,ae);o.addColorStop(0,`rgba(${Y},${D},${m},${ne})`),o.addColorStop(.65,`rgba(${Y},${D},${m},${ne})`),o.addColorStop(.85,`rgba(${Y},${D},${m},${ne*.5})`),o.addColorStop(1,`rgba(${Y},${D},${m},0)`),x.fillStyle=o,x.beginPath(),x.arc(X.x,X.y,ae,0,Math.PI*2),x.fill()}),x.globalCompositeOperation="source-over"}function P(){const M=a.getBoundingClientRect(),F=Math.max(200,Math.min(M.width-8,M.height-8,720)),A=window.devicePixelRatio||1;r.width=F*A,r.height=F*A,r.style.width=`${F}px`,r.style.height=`${F}px`,x.setTransform(A,0,0,A,0,0),J(+s.value,+n.value,+u.value)}function $(){const M=+s.value,F=+n.value,A=+u.value,B=`rgb(${M}, ${F}, ${A})`,te=`#${E(M)}${E(F)}${E(A)}`;i.querySelector("[data-r-val]").textContent=M,i.querySelector("[data-g-val]").textContent=F,i.querySelector("[data-b-val]").textContent=A,i.querySelector("[data-r-bar]").style.width=`${M/255*100}%`,i.querySelector("[data-g-bar]").style.width=`${F/255*100}%`,i.querySelector("[data-b-bar]").style.width=`${A/255*100}%`,s.style.setProperty("--fill",`${M/255*100}%`),n.style.setProperty("--fill",`${F/255*100}%`),u.style.setProperty("--fill",`${A/255*100}%`);const K=i.querySelector("[data-swatch]");K.style.backgroundColor=B,K.setAttribute("aria-label",`${t("tools.rgbMixer.preview")}: ${B}`),i.querySelector("[data-rgb-text]").textContent=B,i.querySelector("[data-hex-text]").textContent=te,J(M,F,A)}function G(M,F,A){s.value=M,n.value=F,u.value=A,$()}return[s,n,u].forEach(M=>M.addEventListener("input",$)),i.querySelectorAll(".rgb-presets button").forEach(M=>{M.addEventListener("click",()=>{G(+M.dataset.r,+M.dataset.g,+M.dataset.b)})}),new ResizeObserver(()=>P()).observe(a),requestAnimationFrame(()=>{P(),$()}),i}const Ft=["topics","notes","tools","worksheets","flashcards","summary"],Ht={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function ht(t,{subtitleKey:i,activeSection:s,onSection:n,onLang:u}){t.innerHTML=`
    <header class="site-header">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${l("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${l(i)}</p>
        </div>
      </div>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${l("strand.back")}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <nav class="main-nav" data-nav></nav>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${l("footer.conventions")}</footer>
  `;const r=t.querySelector("[data-main]"),a=t.querySelector("[data-nav]"),x=t.querySelector("[data-lang]"),E=t.querySelector("[data-strand-back]");let J=s;function P(M){J=M,a.innerHTML=Ft.map(F=>`<button type="button" class="${M===F?"active":""}" data-sec="${F}">${l(Ht[F])}</button>`).join(""),a.querySelectorAll("button").forEach(F=>{F.addEventListener("click",()=>n(F.getAttribute("data-sec")))})}function $(){x.innerHTML=`
      <button type="button" data-set-lang="en" class="${de()==="en"?"active":""}">${l("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${de()==="zh-Hant"?"active":""}">${l("lang.zhHant")}</button>
    `,x.querySelectorAll("button").forEach(M=>{M.addEventListener("click",()=>{dt(M.getAttribute("data-set-lang")),u()})})}function G(){t.querySelector("[data-hub-subtitle]").textContent=l(i),E.textContent=l("strand.back"),t.querySelector("[data-hub-footer]").textContent=l("footer.conventions"),t.querySelector(".site-title").textContent=l("app.title")}const Z=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return E.addEventListener("click",Z),P(s),$(),{main:r,updateSection(M){P(M)},refreshLabels(){G(),P(J),$()},destroy(){E.removeEventListener("click",Z)}}}const Pe=["A","B","C","D"];function Xe(t){const i=t.slice();for(let s=i.length-1;s>0;s-=1){const n=Math.floor(Math.random()*(s+1));[i[s],i[n]]=[i[n],i[s]]}return i}function $t(t,i,s){return t.filter(n=>{if(s)return s(n,i);const u=n.topic;return!!(i.includes(u)||i.includes("rotatingMirror")&&u==="reflection"||i.includes("refraction")&&u==="refraction"||i.includes("tir")&&u==="tir"||u==="convex"&&i.includes("convex")||u==="concave"&&i.includes("concave"))})}function Et(){return new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}function xe(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function pt(t,i={}){const s=i.topics??[["rotatingMirror","topic.rotatingMirror"],["refraction","topic.refractionSnell"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]],n=i.paperTitleKey??"worksheets.paperTitle";return`
    <section class="panel panel--worksheets">
      <h2>${t("worksheets.title")}</h2>
      <p class="lead">${t("worksheets.intro")}</p>
      <div class="ws-controls no-print">
        <div class="controls">
          <div class="control">
            <label>${t("worksheets.count")}</label>
            <select data-ws-count>
              <option>5</option><option>10</option><option>15</option>
            </select>
          </div>
        </div>
        <p class="lead" style="margin-top:10px">${t("worksheets.topics")}</p>
        <div class="grid cols-2" data-ws-topics>
          ${s.map(([u,r])=>`<label class="card ws-topic-card">
            <input type="checkbox" data-ws-topic="${u}" checked />
            <span>${t(r)}</span>
          </label>`).join("")}
        </div>
        <p class="ws-action-row">
          <button class="btn primary" type="button" data-ws-gen>${t("worksheets.generate")}</button>
        </p>
      </div>
      <div class="ws-preview-area" data-ws-preview-area hidden>
        <div class="preview-tabs no-print" data-ws-tabs>
          <button type="button" class="preview-tab active" data-ws-tab="practice">${t("worksheets.tabPractice")}</button>
          <button type="button" class="preview-tab" data-ws-tab="answer">${t("worksheets.tabAnswer")}</button>
        </div>
        <div class="worksheet-paper practice-mode" data-ws-paper>
          <div class="worksheet-header">
            <div class="header-top">
              <h3>${t(n)}</h3>
              <div class="ws-date-row no-print" data-ws-date-row>
                <span data-ws-date-label></span>
                <button type="button" class="btn btn-sm" data-ws-date-today>${t("worksheets.today")}</button>
              </div>
            </div>
            <p class="ws-date-print" data-ws-date-print hidden></p>
          </div>
          <div class="worksheet-body" data-ws-body></div>
        </div>
        <div class="practice-actions no-print" data-ws-practice-actions>
          <div class="score-display" data-ws-score hidden>
            <span class="score-label">${t("worksheets.score")}</span>
            <span class="score-value" data-ws-score-val>0/0</span>
          </div>
        </div>
        <div class="ws-session-summary no-print" data-ws-summary hidden></div>
        <div class="export-buttons no-print" data-ws-export>
          <button type="button" class="export-btn" data-ws-word-p>${t("worksheets.exportWord")}</button>
          <button type="button" class="export-btn" data-ws-word-a>${t("worksheets.exportWordAnswers")}</button>
          <button type="button" class="export-btn" data-ws-print-p>${t("worksheets.printPractice")}</button>
          <button type="button" class="export-btn" data-ws-print-a>${t("worksheets.printAnswers")}</button>
        </div>
      </div>
      <div class="worksheet-output" data-ws-out><p class="lead">${t("worksheets.empty")}</p></div>
    </section>`}function mt(t,i,s,n,u={}){var d,h,z,R;const r={items:[],tab:"practice",dateStr:"",userAnswers:{},wrongAttempts:{},resolved:{}},a=t.querySelector("[data-ws-gen]"),x=t.querySelector("[data-ws-preview-area]"),E=t.querySelector("[data-ws-out]"),J=t.querySelector("[data-ws-body]"),P=t.querySelector("[data-ws-paper]"),$=t.querySelector("[data-ws-tabs]"),G=t.querySelector("[data-ws-practice-actions]"),Z=t.querySelector("[data-ws-score]"),M=t.querySelector("[data-ws-score-val]"),F=t.querySelector("[data-ws-summary]"),A=t.querySelector("[data-ws-date-row]"),B=t.querySelector("[data-ws-date-print]"),te=t.querySelector("[data-ws-date-today]"),K=t.querySelector("[data-ws-date-label]");if(!a||!J)return;function ee(){return n()}function ae(){r.userAnswers={},r.wrongAttempts={},r.resolved={},Z.hidden=!0,F.hidden=!0}function V(){return r.items.length>0&&r.items.every((b,y)=>r.resolved[y])}function U(){let b=0;r.items.forEach((_,k)=>{if(!r.resolved[k])return;const I=_[ee()]||_.en;r.userAnswers[k]===I.a&&(b+=1)}),Object.keys(r.resolved).length>0&&(M.textContent=`${b}/${r.items.length}`,Z.hidden=!1)}function N(b){r.tab=b,$==null||$.querySelectorAll("[data-ws-tab]").forEach(y=>{y.classList.toggle("active",y.getAttribute("data-ws-tab")===b)}),G&&(G.hidden=b!=="practice"),A&&(A.hidden=b!=="practice"),B&&(B.hidden=!r.dateStr,B.textContent=r.dateStr?`${s("worksheets.date")}: ${r.dateStr}`:""),P==null||P.classList.toggle("practice-mode",b==="practice"),ne()}function X(b,y,_){const k=b[ee()]||b.en,I=Pe,H=y+1,se=b.section?`<span class="q-section">${xe(b.section)}</span>`:"";if(_==="answer"){const me=k.choices.map((ye,Te)=>`<li class="${Te===k.a?"choice-correct":""}"><strong>${I[Te]}.</strong> ${xe(ye)}</li>`).join("");return`<div class="question-row question-row--answer">
        <h4>Q${H} ${se}</h4>
        <p>${xe(k.q)}</p>
        <ol class="choice-list">${me}</ol>
        <p class="q-exp"><strong>${s("worksheets.answer")}:</strong> ${I[k.a]}</p>
        <p class="q-exp"><em>${xe(k.exp)}</em></p>
      </div>`}const le=r.userAnswers[y],he=r.wrongAttempts[y]||0,ge=r.resolved[y],Se=ge&&le===k.a,ke=ge&&le!==k.a;let qe="";he===1&&!ge?qe=`<p class="q-hint"><strong>${s("worksheets.hint")}:</strong> ${xe(k.hint||k.exp)}</p>`:ke&&(qe=`<p class="q-exp"><strong>${s("worksheets.answer")}:</strong> ${I[k.a]}</p>
        <p class="q-exp q-summary"><em>${xe(k.exp)}</em></p>`);const Fe=Se?"correct":ke?"incorrect":"",He=k.choices.map((me,ye)=>`<li>
          <label class="choice-radio">
            <input type="radio" name="ws-q-${y}" value="${ye}" data-ws-q="${y}" data-ws-choice="${ye}"${le===ye?" checked":""}${ge?" disabled":""} />
            <span class="choice-circle choice-circle--print"></span>
            <strong>${I[ye]}.</strong> ${xe(me)}
          </label>
        </li>`).join("");return`<div class="question-row ${Fe}" data-ws-row="${y}">
      <div class="q-header"><h4>Q${H} ${se}</h4>${Se?'<span class="result-icon">✓</span>':ke?'<span class="result-icon">✗</span>':""}</div>
      <p>${xe(k.q)}</p>
      <ol class="choice-list choice-list--radio">${He}</ol>
      ${qe}
    </div>`}function ne(){r.items.length&&(J.innerHTML=r.items.map((b,y)=>X(b,y,r.tab)).join(""),Y())}function Y(){r.tab==="practice"&&J.querySelectorAll("[data-ws-choice]").forEach(b=>{b.addEventListener("change",()=>{const y=Number(b.getAttribute("data-ws-q"));if(r.resolved[y])return;const _=Number(b.getAttribute("data-ws-choice")),k=r.items[y][ee()]||r.items[y].en;r.userAnswers[y]=_,_===k.a?r.resolved[y]=!0:(r.wrongAttempts[y]=(r.wrongAttempts[y]||0)+1,r.wrongAttempts[y]>=2&&(r.resolved[y]=!0)),U(),V()&&D(),ne()})})}function D(){const b=r.items.length;let y=0,_=0;const k={};r.items.forEach((le,he)=>{const ge=le[ee()]||le.en;if(r.userAnswers[he]===ge.a)y+=1,(r.wrongAttempts[he]||0)===0&&(_+=1);else if(r.resolved[he]){const ke=le.section||le.topic;k[ke]=(k[ke]||0)+1}});const I=b?Math.round(y/b*100):0;let H=s("worksheets.revisionFair");I>=90?H=s("worksheets.revisionExcellent"):I>=70?H=s("worksheets.revisionGood"):I<50&&(H=s("worksheets.revisionLow"));const se=Object.entries(k).sort((le,he)=>he[1]-le[1]).map(([le,he])=>`<li>${xe(le)} (${he})</li>`).join("");F.innerHTML=`
      <h4>${s("worksheets.sessionSummary")}</h4>
      <p>${s("worksheets.score")}: <strong>${y}/${b}</strong> (${I}%)</p>
      <p>${s("worksheets.firstTry")}: <strong>${_}/${b}</strong></p>
      <p>${s("worksheets.revisionSuggestions")}: ${H}</p>
      ${se?`<p>${s("worksheets.weakSections")}:</p><ul>${se}</ul>`:""}`,F.hidden=!1}function m(b){const y=ee(),_=r.items.map((k,I)=>{const H=k[y]||k.en,se=H.choices.map((he,ge)=>`${Pe[ge]}. ${he}`).join("<br/>"),le=b?`<p><b>${s("worksheets.answer")}:</b> ${Pe[H.a]}<br/><i>${H.exp}</i></p>`:"";return`<div style="page-break-inside:avoid;margin-bottom:16px"><b>Q${I+1}.</b> ${H.q}<br/>${se}${le}</div>`}).join("");return`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
<head><meta charset="utf-8"><title>${s("worksheets.paperTitle")}</title></head>
<body><h2>${s("worksheets.paperTitle")}</h2>
${r.dateStr&&!b?`<p>${s("worksheets.date")}: ${r.dateStr}</p>`:""}
${_}</body></html>`}function o(b){const y=m(b),_=new Blob(["\uFEFF",y],{type:"application/msword"}),k=document.createElement("a");k.href=URL.createObjectURL(_),k.download=b?"worksheet-answers.doc":"worksheet.doc",k.click(),URL.revokeObjectURL(k.href)}a.addEventListener("click",()=>{const b=Number(t.querySelector("[data-ws-count]").value),y=[...t.querySelectorAll("[data-ws-topic]")].filter(I=>I.checked).map(I=>I.getAttribute("data-ws-topic")),_=$t(i,y,u.topicFilter),k=Xe(_).slice(0,Math.min(b,_.length||1));r.items=k.length?k:Xe(i).slice(0,Math.min(b,i.length)),ae(),r.tab="practice",r.dateStr="",x.hidden=!1,E.hidden=!0,$==null||$.querySelectorAll("[data-ws-tab]").forEach(I=>{I.classList.toggle("active",I.getAttribute("data-ws-tab")==="practice")}),G&&(G.hidden=!1),A&&(A.hidden=!1),B&&(B.hidden=!0),K.textContent="",P==null||P.classList.add("practice-mode"),ne()}),$==null||$.addEventListener("click",b=>{const y=b.target.closest("[data-ws-tab]");!y||!r.items.length||N(y.getAttribute("data-ws-tab"))}),te==null||te.addEventListener("click",()=>{r.dateStr?(r.dateStr="",K.textContent=""):(r.dateStr=Et(),K.textContent=`${s("worksheets.date")}: ${r.dateStr}`),B&&(B.hidden=!r.dateStr,B.textContent=r.dateStr?`${s("worksheets.date")}: ${r.dateStr}`:"")}),(d=t.querySelector("[data-ws-word-p]"))==null||d.addEventListener("click",()=>o(!1)),(h=t.querySelector("[data-ws-word-a]"))==null||h.addEventListener("click",()=>o(!0)),(z=t.querySelector("[data-ws-print-p]"))==null||z.addEventListener("click",()=>{N("practice"),P==null||P.classList.add("ws-print-blank");const b=()=>P==null?void 0:P.classList.remove("ws-print-blank");window.addEventListener("afterprint",b,{once:!0}),window.print()}),(R=t.querySelector("[data-ws-print-a]"))==null||R.addEventListener("click",()=>{N("answer"),window.print()})}const At=["rotatingMirror","refractionTir","lens","rgbMixer","em"],It={rotatingMirror:t=>Lt(t),refractionTir:t=>Mt(t),lens:(t,i)=>Rt(t,{defaultKind:i}),rgbMixer:t=>zt(t),em:t=>_t(t)};function Wt(t){return l({rotatingMirror:"tools.rotatingMirror.title",refractionTir:"tools.refractionTir.title",lens:"tools.lens.title",rgbMixer:"tools.rgbMixer.title",em:"tools.em.title"}[t]||t)}function Le(){return de()==="zh-Hant"?"zhHant":"en"}async function Ge(t,i){const s=`./${t}/${i}`;try{return(await fetch(s,{method:"HEAD"})).ok}catch{return!1}}async function Pt(t){return Ge("notes",t)}function Dt(t){let i="topics",s="rotatingMirror",n="convex",u=0,r="all",a=!1,x=null,E={main:null};function J(){E.main&&(i==="topics"?E.main.innerHTML=$():i==="notes"?E.main.innerHTML=Z():i==="tools"?E.main.innerHTML=F():i==="worksheets"?E.main.innerHTML=pt(l):i==="flashcards"?E.main.innerHTML=te():i==="summary"&&(E.main.innerHTML=ne()),i==="notes"&&M(),i==="tools"&&A(),i==="worksheets"&&mt(t,ut,l,Le),i==="flashcards"&&X(),i==="summary"&&Y())}function P(){x==null||x.destroy(),x=ht(t,{subtitleKey:"strand.optics.subtitle",activeSection:i,onSection:o=>{i=o,x.updateSection(i),J()},onLang:()=>P()}),E.main=x.main,x.updateSection(i),J()}function $(){const o=[["rotatingMirror","topic.reflection"],["refraction","topic.refractionSnell"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${l("topics.title")}</h2>
        <p class="lead">${l("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${o.map(([d,h])=>{const z=d==="convex"||d==="concave"?"lens":d==="refraction"||d==="tir"?"refractionTir":d==="em"?"em":d,R=d==="convex"?"convex":d==="concave"?"concave":"";return`
            <div class="card">
              <h3>${l(h)}</h3>
              <button class="btn primary" type="button" data-go-tool="${z}"${R?` data-lens-kind="${R}"`:""}>${l("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function G(o){const d=o.target.closest("[data-go-tool]");if(!d)return;i="tools",s=d.getAttribute("data-go-tool");const h=d.getAttribute("data-lens-kind");(h==="convex"||h==="concave")&&(n=h),x.updateSection(i),J()}function Z(){const o=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${l("notes.title")}</h2>
        <p class="lead">${l("notes.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${o.map(d=>{const h=l(`notes.card.${d.key}`);return`
            <div class="card" data-note-card="${d.key}">
              <h3>${h}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function M(){const o=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],d=Le();for(const h of o){const z=t.querySelector(`[data-note-card="${h.key}"]`);if(!z)continue;const R=z.querySelector("[data-note-body]"),b=d==="zhHant"?h.fileZh:h.fileEn,y=await Pt(b),_=`./notes/${b}`;y?R.innerHTML=`
          <iframe class="notes-grid" title="${l(`notes.card.${h.key}`)}" src="${_}"></iframe>
          <p style="margin-top:8px"><a href="${_}" target="_blank" rel="noopener">${l("notes.openPdf")}</a></p>`:R.innerHTML=`<p class="lead">${l("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function F(){return`
      <section class="panel panel--tools">
        <h2>${l("tools.title")}</h2>
        <p class="lead">${l("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${At.map(o=>`<button type="button" data-tool="${o}" class="${s===o?"active":""}">${Wt(o)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function A(){const o=t.querySelector("[data-tool-list]"),d=t.querySelector("[data-tool-stage]");!o||!d||(o.querySelectorAll("button").forEach(h=>{h.addEventListener("click",()=>{s=h.getAttribute("data-tool"),o.querySelectorAll("button").forEach(z=>z.classList.toggle("active",z.getAttribute("data-tool")===s)),B(d)})}),B(d))}function B(o){o.innerHTML="";const d=It[s];if(!d)return;const h=s==="lens"?d(l,n):d(l);o.appendChild(h)}function te(){return`
      <section class="panel">
        <h2>${l("flashcards.title")}</h2>
        <p class="lead">${l("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${l("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${l("flashcards.all")}</option>
            <option value="reflection">${l("topic.reflection")}</option>
            <option value="refractionTir">${l("flashcards.deck.refractionTir")}</option>
            <option value="convex">${l("topic.convex")}</option>
            <option value="concave">${l("topic.concave")}</option>
            <option value="em">${l("topic.em")}</option>
          </select>
        </div>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-flip-card>
            <div class="label" data-flash-label>${l("flashcards.question")}</div>
            <div class="body" data-flash-front></div>
          </div>
          <p class="flashcard-progress muted" data-flash-progress hidden></p>
          <div class="flash-toolbar no-print">
            <button class="btn" type="button" data-flash-prev>${l("flashcards.prev")}</button>
            <button class="btn primary" type="button" data-flash-flip>${l("flashcards.flip")}</button>
            <button class="btn" type="button" data-flash-next>${l("flashcards.next")}</button>
            <button class="btn" type="button" data-flash-shuf>${l("flashcards.shuffle")}</button>
          </div>
        </div>
      </section>`}function K(o){var d,h;return!!(o!=null&&o.front||(d=o==null?void 0:o.en)!=null&&d.front||(h=o==null?void 0:o.zhHant)!=null&&h.front)}function ee(o){var h;const d=Le();return(h=o==null?void 0:o[d])!=null&&h.front?o[d]:o!=null&&o.front?o:(o==null?void 0:o.en)||(o==null?void 0:o.zhHant)||{}}function ae(o){return`./${String(o).replace(/^\.\//,"")}`}function V(){return ft.slice()}function U(){const o=V(),d=r==="rotatingMirror"?"reflection":r;if(d==="all"){const z=o.filter(R=>R.topic!=="convex"&&R.topic!=="concave"&&R.topic!=="refraction"&&R.topic!=="tir"&&R.topic!=="em");return[...Be,...Qe,...Ne,...Ve,...Ue,...Ye,...z]}if(d==="reflection")return Be.slice();if(d==="convex")return Ue.slice();if(d==="concave")return Ye.slice();if(d==="refractionTir")return[...Qe,...Ne];if(d==="em")return Ve.slice();const h=o.filter(z=>z.topic===d);return h.length?h:o}function N(){const o=U(),d=t.querySelector("[data-flash-progress]");if(!o.length){u=0;const k=t.querySelector("[data-flash-front]"),I=t.querySelector("[data-flip-card]");k&&(k.textContent=""),I&&I.classList.remove("flashcard-surface--image"),d&&(d.hidden=!0,d.textContent="");return}u=Math.max(0,Math.min(u,o.length-1));const h=o[u],z=t.querySelector("[data-flash-front]"),R=t.querySelector("[data-flip-card]"),b=t.querySelector("[data-flash-label]");if(!z||!R)return;if(d&&(d.hidden=!1,d.textContent=l("flashcards.progress").replace("{current}",String(u+1)).replace("{total}",String(o.length))),K(h)){const k=ee(h),I=k.back&&k.back!==k.front;R.classList.add("flashcard-surface--image"),b&&(I?(b.hidden=!1,b.textContent=l(a?"flashcards.answer":"flashcards.question")):b.hidden=!0);const H=a&&k.back?k.back:k.front,se=h.alt||h.title||"";z.innerHTML=`<img src="${ae(H)}" alt="${se.replace(/"/g,"&quot;")}" loading="lazy" />`;return}R.classList.remove("flashcard-surface--image");const y=Le(),_=h[y]||h.en;b&&(b.hidden=!1,b.textContent=l(a?"flashcards.answer":"flashcards.question")),z.textContent=a?_.a:_.q}function X(){r==="rotatingMirror"&&(r="reflection");const o=t.querySelector("[data-flash-deck]");o.value=r,o.addEventListener("change",()=>{r=o.value,u=0,a=!1,N()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{a=!a,N()}),t.querySelector("[data-flash-flip]").addEventListener("click",d=>{d.stopPropagation(),a=!a,N()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const d=U();u=(u-1+d.length)%d.length,a=!1,N()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const d=U();u=(u+1)%d.length,a=!1,N()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const d=U();u=Math.floor(Math.random()*d.length),a=!1,N()}),N()}function ne(){const o=[{key:"reflection",type:"image",file:"reflection.webp"},{key:"refraction",type:"image",file:"refraction.webp"},{key:"tir",type:"image",file:"tir.webp"},{key:"convex",type:"image",file:"convex.webp"},{key:"concave",type:"image",fileEn:"concave-en.webp",fileZh:"concave-zhHant.webp"},{key:"em",type:"image",file:"em.webp"}];return`
      <section class="panel">
        <h2>${l("summary.title")}</h2>
        <p class="lead">${l("summary.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-summary-grid>
          ${o.map(d=>{const h=l(`summary.item.${d.key}`);return`
            <div class="card" data-summary-card="${d.key}">
              <h3>${h}</h3>
              <div data-summary-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function Y(){const o=[{key:"reflection",type:"image",file:"reflection.webp"},{key:"refraction",type:"image",file:"refraction.webp"},{key:"tir",type:"image",file:"tir.webp"},{key:"convex",type:"image",file:"convex.webp"},{key:"concave",type:"image",fileEn:"concave-en.webp",fileZh:"concave-zhHant.webp"},{key:"em",type:"image",file:"em.webp"}],d=Le();for(const h of o){const z=t.querySelector(`[data-summary-card="${h.key}"]`);if(!z)continue;const R=z.querySelector("[data-summary-body]");if(h.type==="image"){const k=h.fileEn&&h.fileZh?d==="zhHant"?h.fileZh:h.fileEn:h.file,I=await Ge("summary",k),H=`./summary/${k}`;I?R.innerHTML=`
          <img class="summary-thumb" src="${H}" alt="${l(`summary.item.${h.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${H}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:R.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}const b=d==="zhHant"?h.fileZh:h.fileEn,y=await Ge("summary-pdfs",b),_=`./summary-pdfs/${b}`;y?R.innerHTML=`
          <iframe class="notes-grid" title="${l(`summary.item.${h.key}`)}" src="${_}"></iframe>
          <p style="margin-top:8px"><a href="${_}" target="_blank" rel="noopener">${l("summary.download")}</a></p>`:R.innerHTML=`<p class="lead">${l("summary.missing")}</p>`}}const D=()=>P(),m=o=>G(o);return window.addEventListener("s3phy:lang",D),t.addEventListener("click",m),P(),()=>{window.removeEventListener("s3phy:lang",D),t.removeEventListener("click",m),x==null||x.destroy()}}const Ze=[{id:1,topic:"thermometer",title:"What is Temperature?",front:"./flashcards/thermometer/01-front.webp",alt:"Flashcard 1 - What is Temperature?",back:"./flashcards/thermometer/01-back.webp"},{id:2,topic:"thermometer",title:"Celsius Scale & Fixed Points",front:"./flashcards/thermometer/02-front.webp",alt:"Flashcard 2 - Celsius Scale & Fixed Points",back:"./flashcards/thermometer/02-back.webp"},{id:3,topic:"thermometer",title:"Calibration of Unmarked Thermometer",front:"./flashcards/thermometer/03-front.webp",alt:"Flashcard 3 - Calibration of Unmarked Thermometer",back:"./flashcards/thermometer/03-back.webp"},{id:4,topic:"thermometer",title:"Liquid-in-Glass Thermometer",front:"./flashcards/thermometer/04-front.webp",alt:"Flashcard 4 - Liquid-in-Glass Thermometer",back:"./flashcards/thermometer/04-back.webp"},{id:5,topic:"thermometer",title:"Mercury vs Alcohol Thermometer",front:"./flashcards/thermometer/05-front.webp",alt:"Flashcard 5 - Mercury vs Alcohol Thermometer",back:"./flashcards/thermometer/05-back.webp"},{id:6,topic:"thermometer",title:"Types of Thermometers",front:"./flashcards/thermometer/06-front.webp",alt:"Flashcard 6 - Types of Thermometers",back:"./flashcards/thermometer/06-back.webp"},{id:7,topic:"thermometer",title:"Temperature-Dependent Properties",front:"./flashcards/thermometer/07-front.webp",alt:"Flashcard 7 - Temperature-Dependent Properties",back:"./flashcards/thermometer/07-back.webp"},{id:8,topic:"thermometer",title:"Sensitivity of Thermometer",front:"./flashcards/thermometer/08-front.webp",alt:"Flashcard 8 - Sensitivity of Thermometer",back:"./flashcards/thermometer/08-back.webp"},{id:9,topic:"thermometer",title:"Calibration Calculation",front:"./flashcards/thermometer/09-front.webp",alt:"Flashcard 9 - Calibration Calculation",back:"./flashcards/thermometer/09-back.webp"},{id:10,topic:"thermometer",title:"Faulty Thermometer Correction",front:"./flashcards/thermometer/10-front.webp",alt:"Flashcard 10 - Faulty Thermometer Correction",back:"./flashcards/thermometer/10-back.webp"}],Je=[{id:1,topic:"heatInternalEnergy",title:"What is Heat?",front:"./flashcards/heat-internal-energy/01-front.webp",alt:"Flashcard 1 - What is Heat?",back:"./flashcards/heat-internal-energy/01-back.webp"},{id:2,topic:"heatInternalEnergy",title:"Define Specific Heat Capacity",front:"./flashcards/heat-internal-energy/02-front.webp",alt:"Flashcard 2 - Define Specific Heat Capacity",back:"./flashcards/heat-internal-energy/02-back.webp"},{id:3,topic:"heatInternalEnergy",title:"E = mcΔT Formula",front:"./flashcards/heat-internal-energy/03-front.webp",alt:"Flashcard 3 - E = mcΔT Formula",back:"./flashcards/heat-internal-energy/03-back.webp"},{id:4,topic:"heatInternalEnergy",title:"Energy from Power",front:"./flashcards/heat-internal-energy/04-front.webp",alt:"Flashcard 4 - Energy from Power",back:"./flashcards/heat-internal-energy/04-back.webp"},{id:5,topic:"heatInternalEnergy",title:"Simple SHC Calculation",front:"./flashcards/heat-internal-energy/05-front.webp",alt:"Flashcard 5 - Simple SHC Calculation",back:"./flashcards/heat-internal-energy/05-back.webp"},{id:6,topic:"heatInternalEnergy",title:"Power-Heater Calculation",front:"./flashcards/heat-internal-energy/06-front.webp",alt:"Flashcard 6 - Power-Heater Calculation",back:"./flashcards/heat-internal-energy/06-back.webp"},{id:7,topic:"heatInternalEnergy",title:"Conservation of Energy Mixture",front:"./flashcards/heat-internal-energy/07-front.webp",alt:"Flashcard 7 - Conservation of Energy Mixture",back:"./flashcards/heat-internal-energy/07-back.webp"},{id:8,topic:"heatInternalEnergy",title:"Heat Capacity vs Specific Heat Capacity",front:"./flashcards/heat-internal-energy/08-front.webp",alt:"Flashcard 8 - Heat Capacity vs Specific Heat Capacity",back:"./flashcards/heat-internal-energy/08-back.webp"},{id:9,topic:"heatInternalEnergy",title:"Factors Affecting Temperature Change",front:"./flashcards/heat-internal-energy/09-front.webp",alt:"Flashcard 9 - Factors Affecting Temperature Change",back:"./flashcards/heat-internal-energy/09-back.webp"},{id:10,topic:"heatInternalEnergy",title:"Key Applications & Assumptions",front:"./flashcards/heat-internal-energy/10-front.webp",alt:"Flashcard 10 - Key Applications & Assumptions",back:"./flashcards/heat-internal-energy/10-back.webp"}],et=[{id:1,topic:"changeOfState",title:"What is Latent Heat?",front:"./flashcards/change-of-state/01-front.webp",alt:"Flashcard 1 - What is Latent Heat?",back:"./flashcards/change-of-state/01-back.webp"},{id:2,topic:"changeOfState",title:"Fusion & Freezing",front:"./flashcards/change-of-state/02-front.webp",alt:"Flashcard 2 - Fusion & Freezing",back:"./flashcards/change-of-state/02-back.webp"},{id:3,topic:"changeOfState",title:"Vaporization & Condensation",front:"./flashcards/change-of-state/03-front.webp",alt:"Flashcard 3 - Vaporization & Condensation",back:"./flashcards/change-of-state/03-back.webp"},{id:4,topic:"changeOfState",title:"Internal Energy",front:"./flashcards/change-of-state/04-front.webp",alt:"Flashcard 4 - Internal Energy",back:"./flashcards/change-of-state/04-back.webp"},{id:5,topic:"changeOfState",title:"Heating Curve",front:"./flashcards/change-of-state/05-front.webp",alt:"Flashcard 5 - Heating Curve",back:"./flashcards/change-of-state/05-back.webp"},{id:6,topic:"changeOfState",title:"Cooling Curve",front:"./flashcards/change-of-state/06-front.webp",alt:"Flashcard 6 - Cooling Curve",back:"./flashcards/change-of-state/06-back.webp"},{id:7,topic:"changeOfState",title:"Evaporation vs Boiling",front:"./flashcards/change-of-state/07-front.webp",alt:"Flashcard 7 - Evaporation vs Boiling",back:"./flashcards/change-of-state/07-back.webp"},{id:8,topic:"changeOfState",title:"Evaporation Factors",front:"./flashcards/change-of-state/08-front.webp",alt:"Flashcard 8 - Evaporation Factors",back:"./flashcards/change-of-state/08-back.webp"},{id:9,topic:"changeOfState",title:"Energy Formula E=ml",front:"./flashcards/change-of-state/09-front.webp",alt:"Flashcard 9 - Energy Formula E=ml",back:"./flashcards/change-of-state/09-back.webp"},{id:10,topic:"changeOfState",title:"Specific Latent Heat Values",front:"./flashcards/change-of-state/10-front.webp",alt:"Flashcard 10 - Specific Latent Heat Values",back:"./flashcards/change-of-state/10-back.webp"},{id:11,topic:"changeOfState",title:"Experiment: Latent Heat of Fusion",front:"./flashcards/change-of-state/11-front.webp",alt:"Flashcard 11 - Experiment: Latent Heat of Fusion",back:"./flashcards/change-of-state/11-back.webp"},{id:12,topic:"changeOfState",title:"Experiment: Latent Heat of Vaporization",front:"./flashcards/change-of-state/12-front.webp",alt:"Flashcard 12 - Experiment: Latent Heat of Vaporization",back:"./flashcards/change-of-state/12-back.webp"}],tt=[{id:1,topic:"heatTransfer",title:"What is Conduction?",front:"./flashcards/heat-transfer/01-front.webp",alt:"Flashcard 1 - What is Conduction?",back:"./flashcards/heat-transfer/01-back.webp"},{id:2,topic:"heatTransfer",title:"What is Convection?",front:"./flashcards/heat-transfer/02-front.webp",alt:"Flashcard 2 - What is Convection?",back:"./flashcards/heat-transfer/02-back.webp"},{id:3,topic:"heatTransfer",title:"What is Radiation?",front:"./flashcards/heat-transfer/03-front.webp",alt:"Flashcard 3 - What is Radiation?",back:"./flashcards/heat-transfer/03-back.webp"},{id:4,topic:"heatTransfer",title:"Conduction Mechanism",front:"./flashcards/heat-transfer/04-front.webp",alt:"Flashcard 4 - Conduction Mechanism",back:"./flashcards/heat-transfer/04-back.webp"},{id:5,topic:"heatTransfer",title:"Convection Mechanism",front:"./flashcards/heat-transfer/05-front.webp",alt:"Flashcard 5 - Convection Mechanism",back:"./flashcards/heat-transfer/05-back.webp"},{id:6,topic:"heatTransfer",title:"Conductors & Insulators",front:"./flashcards/heat-transfer/06-front.webp",alt:"Flashcard 6 - Conductors & Insulators",back:"./flashcards/heat-transfer/06-back.webp"},{id:7,topic:"heatTransfer",title:"Convection in Daily Life",front:"./flashcards/heat-transfer/07-front.webp",alt:"Flashcard 7 - Convection in Daily Life",back:"./flashcards/heat-transfer/07-back.webp"},{id:8,topic:"heatTransfer",title:"Sea Breeze & Land Breeze",front:"./flashcards/heat-transfer/08-front.webp",alt:"Flashcard 8 - Sea Breeze & Land Breeze",back:"./flashcards/heat-transfer/08-back.webp"},{id:9,topic:"heatTransfer",title:"Surface Properties & Radiation",front:"./flashcards/heat-transfer/09-front.webp",alt:"Flashcard 9 - Surface Properties & Radiation",back:"./flashcards/heat-transfer/09-back.webp"},{id:10,topic:"heatTransfer",title:"Vacuum Flask",front:"./flashcards/heat-transfer/10-front.webp",alt:"Flashcard 10 - Vacuum Flask",back:"./flashcards/heat-transfer/10-back.webp"},{id:11,topic:"heatTransfer",title:"Greenhouse Effect",front:"./flashcards/heat-transfer/11-front.webp",alt:"Flashcard 11 - Greenhouse Effect",back:"./flashcards/heat-transfer/11-back.webp"},{id:12,topic:"heatTransfer",title:"Three Methods Comparison",front:"./flashcards/heat-transfer/12-front.webp",alt:"Flashcard 12 - Three Methods Comparison",back:"./flashcards/heat-transfer/12-back.webp"},{id:13,topic:"heatTransfer",title:"Key Facts & Common Errors",front:"./flashcards/heat-transfer/13-front.webp",alt:"Flashcard 13 - Key Facts & Common Errors",back:"./flashcards/heat-transfer/13-back.webp"}],at="s3phy-thermometer-lab-css",Ot=`
.tl-wrap {
  --tl-bg: #09090b;
  --tl-panel: #151518;
  --tl-border: #27272a;
  --tl-green: #10b981;
  --tl-cyan: #06b6d4;
  --tl-yellow: #f59e0b;
  --tl-red: #ef4444;
  --tl-text: #f4f4f5;
  --tl-muted: #a1a1aa;
  --tl-primary: #6366f1;
  --tl-primary-hover: #4f46e5;
  --tl-glow-cyan: rgba(6, 182, 212, 0.15);
  --tl-glow-primary: rgba(99, 102, 241, 0.15);
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--tl-text);
  background: var(--tl-bg);
  border-radius: 16px;
  padding: 16px;
  max-width: 100%;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
.tl-wrap * { box-sizing: border-box; }
.tl-wrap .tl-head { text-align: center; margin: 0 0 20px; }
.tl-wrap .tl-title {
  margin: 0;
  font-weight: 850;
  font-size: 1.6rem;
  background: linear-gradient(135deg, #22d3ee, #6366f1, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}
.tl-wrap .tl-sub { color: var(--tl-muted); font-size: 0.88rem; margin-top: 6px; }
.tl-wrap .tl-dash {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: min(1400px, 100%);
  margin: 0 auto;
  align-items: stretch;
}
.tl-wrap .tl-viz-phys,
.tl-wrap .tl-viz-graph {
  min-width: 0;
  background: var(--tl-panel);
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--tl-border);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.tl-wrap .tl-canvas-phys {
  background: #0d0d10;
  border-radius: 12px;
  width: 100%;
  max-width: 460px;
  height: auto;
  aspect-ratio: 460 / 340;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.tl-wrap .tl-canvas-graph {
  background: #0d0d10;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  height: auto;
  aspect-ratio: 800 / 560;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.tl-wrap .tl-bath-bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 2px;
  padding: 12px 16px;
  background: var(--tl-panel);
  border: 1px solid var(--tl-border);
  border-radius: 14px;
  align-items: stretch;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.05);
}
.tl-wrap .tl-bath-bar-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 16px;
  font-size: 0.8rem;
  font-weight: 600;
}
.tl-wrap .tl-bath-bar-top .tl-beaker-overlay {
  flex: 1 1 auto;
  min-width: 150px;
  padding: 8px 12px;
  margin: 0;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.tl-wrap .tl-bath-slider-wrap {
  flex: 1 1 220px;
  min-width: 180px;
}
.tl-wrap .tl-bath-slider-wrap .tl-lr {
  font-size: 0.78rem;
  margin-bottom: 4px;
}
.tl-wrap .tl-controls {
  min-width: min(100%, 280px);
  background: var(--tl-panel);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid var(--tl-border);
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 0;
}
.tl-wrap .tl-controls-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-right: 2px;
  scrollbar-width: thin;
  scrollbar-color: #3f3f46 transparent;
}
.tl-wrap .tl-controls-scroll::-webkit-scrollbar { width: 6px; }
.tl-wrap .tl-controls-scroll::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 3px;
}
.tl-wrap .tl-details {
  border: 1px solid var(--tl-border);
  border-radius: 10px;
  background: rgba(255,255,255,0.01);
}
.tl-wrap .tl-details summary {
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--tl-cyan);
  padding: 10px 12px;
  list-style: none;
  user-select: none;
}
.tl-wrap .tl-details summary::-webkit-details-marker { display: none; }
.tl-wrap .tl-details summary::before {
  content: "▸ ";
  color: var(--tl-muted);
}
.tl-wrap .tl-details[open] summary::before { content: "▾ "; }
.tl-wrap .tl-details-body {
  padding: 0 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (min-width: 700px) {
  .tl-wrap .tl-btn-group {
    grid-template-columns: repeat(4, 1fr);
  }
  .tl-wrap .tl-bath-bar {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px 16px;
  }
  .tl-wrap .tl-bath-bar-top {
    flex: 1 1 auto;
  }
  .tl-wrap .tl-btn-group {
    flex: 1 1 300px;
    max-width: none;
  }
}
@media (min-width: 900px) {
  .tl-wrap .tl-dash {
    display: grid;
    grid-template-columns: minmax(0, 460px) 1fr;
    grid-template-rows: auto auto auto;
    gap: 20px;
    align-items: stretch;
  }
  .tl-wrap .tl-viz-phys {
    grid-column: 1;
    grid-row: 1;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #3b82f6; /* Highlight physical view */
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
  }
  .tl-wrap .tl-viz-graph {
    grid-column: 2;
    grid-row: 1;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #10b981; /* Highlight graph view */
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
  }
  .tl-wrap .tl-controls {
    grid-column: 1 / -1;
    grid-row: 2;
    max-height: none;
    min-height: 0;
    overflow: visible;
    border: 1px solid #3f3f46;
    background: #0f0f12;
  }
  .tl-wrap .tl-controls-scroll {
    flex: none;
    overflow-y: visible;
    max-height: none;
  }
  .tl-wrap .tl-bath-bar {
    grid-column: 1 / -1;
    grid-row: 3;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px 16px;
    margin-top: 0;
  }
  .tl-wrap .tl-canvas-phys,
  .tl-wrap .tl-canvas-graph {
    max-width: 100%;
    width: 100%;
  }
  .tl-wrap .tl-btn-group {
    grid-template-columns: repeat(4, 1fr);
    flex: 1 1 auto;
    max-width: none;
  }
  .tl-wrap .tl-bath-slider-wrap {
    flex: 1 1 260px;
    max-width: 360px;
  }
  .tl-wrap .tl-worked-solution {
    padding: 14px 20px;
    font-size: 0.9rem;
    border-radius: 10px;
    border-left-width: 6px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
}
.tl-wrap .tl-tabs-container {
  display: flex;
  background-color: #1f1f23;
  border-radius: 10px;
  padding: 4px;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
  border: 1px solid var(--tl-border);
}
.tl-wrap .tl-tabs-container::-webkit-scrollbar { display: none; }
.tl-wrap .tl-tab-btn {
  flex: 1;
  min-width: 0;
  padding: 8px 6px;
  background: none;
  border: none;
  font-size: 0.78rem;
  line-height: 1.2;
  font-weight: 700;
  color: var(--tl-muted);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-align: center;
  white-space: nowrap;
}
.tl-wrap .tl-tab-btn:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.03);
}
.tl-wrap .tl-tab-btn.active {
  color: #fff;
  background-color: var(--tl-primary);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
}
.tl-wrap .tl-tab-content {
  display: none;
  flex-direction: column;
  gap: 10px;
}
.tl-wrap .tl-tab-content.active {
  display: flex;
}
.tl-wrap .tl-beaker-overlay {
  background-color: rgba(20, 20, 23, 0.95);
  border: 1px solid var(--tl-border);
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tl-wrap .tl-temp-badge {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--tl-cyan);
  text-shadow: 0 0 10px var(--tl-glow-cyan);
}
.tl-wrap .tl-cg { display: flex; flex-direction: column; gap: 6px; }
.tl-wrap .tl-lr { display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; font-weight: 600; }
.tl-wrap .tl-section-label {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--tl-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 4px 0 2px;
}
.tl-wrap .tl-param-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.tl-wrap .tl-param-grid .tl-cg { min-width: 0; }
.tl-wrap .tl-param-grid input[type="range"] { margin: 2px 0; }
.tl-wrap .tl-badge {
  background: #27272a;
  padding: 3px 10px;
  border-radius: 6px;
  font-family: ui-monospace, monospace;
  font-size: 0.82rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.tl-wrap input[type="range"] { -webkit-appearance: none; width: 100%; background: transparent; margin: 6px 0; }
.tl-wrap input[type="range"]:focus { outline: none; }
.tl-wrap input[type="range"]::-webkit-slider-runnable-track {
  width: 100%; height: 6px; cursor: pointer; background: #27272a; border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.tl-wrap input[type="range"]::-webkit-slider-thumb {
  height: 16px; width: 16px; border-radius: 50%; background: #fff; cursor: pointer;
  -webkit-appearance: none; margin-top: -5px; box-shadow: 0 0 8px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.5);
  transition: transform 0.1s;
}
.tl-wrap input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
.tl-wrap .tl-btn-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.tl-wrap .tl-btn {
  background-color: #1f1f23;
  border: 1px solid var(--tl-border);
  color: var(--tl-text);
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 650;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
.tl-wrap .tl-btn:hover {
  background-color: #27272a;
  border-color: #3f3f46;
  transform: translateY(-1px);
}
.tl-wrap .tl-btn.primary {
  background-color: var(--tl-primary);
  border-color: var(--tl-primary);
}
.tl-wrap .tl-btn.primary:hover {
  background-color: var(--tl-primary-hover);
  box-shadow: 0 4px 12px var(--tl-glow-primary);
}
.tl-wrap .tl-seg {
  display: flex;
  background-color: #1f1f23;
  border-radius: 10px;
  padding: 4px;
  gap: 4px;
  border: 1px solid var(--tl-border);
}
.tl-wrap .tl-seg-btn {
  flex: 1;
  border: 1px solid transparent;
  background: none;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--tl-muted);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
}
.tl-wrap .tl-seg-btn:hover { color: #fff; background-color: rgba(255, 255, 255, 0.02); }
.tl-wrap .tl-seg-btn.active-mercury {
  color: #fff;
  background-color: #27272a;
  border-color: var(--tl-muted);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
.tl-wrap .tl-seg-btn.active-alcohol {
  color: #fff;
  background-color: rgba(239, 68, 68, 0.15);
  border-color: var(--tl-red);
  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.1);
}
.tl-wrap .tl-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}
.tl-wrap .tl-dot.mercury { background-color: var(--tl-muted); box-shadow: 0 0 6px var(--tl-muted); }
.tl-wrap .tl-dot.alcohol { background-color: var(--tl-red); box-shadow: 0 0 6px var(--tl-red); }
.tl-wrap .tl-warning-banner {
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-left: 4px solid var(--tl-red);
  padding: 12px;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #fca5a5;
  line-height: 1.4;
  display: none;
  animation: tl-pulse 2s infinite alternate;
}
@keyframes tl-pulse {
  0% { box-shadow: 0 0 4px rgba(239, 68, 68, 0.1); }
  100% { box-shadow: 0 0 12px rgba(239, 68, 68, 0.3); }
}
.tl-wrap .tl-info-card {
  background-color: rgba(255,255,255,0.02);
  border: 1px dashed var(--tl-border);
  border-radius: 10px;
  padding: 8px 12px;
}
.tl-wrap .tl-info-card--compact {
  font-size: 0.78rem;
  color: var(--tl-muted);
  line-height: 1.4;
}
.tl-wrap .tl-info-card--compact b { color: var(--tl-cyan); }
.tl-wrap .tl-info-label {
  font-size: 0.85rem;
  font-weight: 750;
  color: var(--tl-cyan);
  margin-bottom: 4px;
}
.tl-wrap .tl-info-card p {
  margin: 0;
  font-size: 0.78rem;
  color: var(--tl-muted);
  line-height: 1.4;
}
.tl-wrap .tl-worked-solution {
  background-color: rgba(99, 102, 241, 0.05);
  border-left: 6px solid var(--tl-primary);
  border-radius: 0 10px 10px 0;
  padding: 12px 16px;
  font-size: 0.88rem;
  line-height: 1.5;
}
.tl-wrap .tl-solution-header {
  font-weight: 800;
  color: var(--tl-cyan);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}
.tl-wrap .tl-worked-solution p {
  margin: 6px 0;
}
.tl-wrap .tl-math-formula {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  font-size: 1.1rem;
  color: #fff;
  background-color: rgba(0,0,0,0.25);
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.tl-wrap .tl-final-ans {
  color: var(--tl-green);
  font-size: 1.05rem;
  font-weight: 850;
  background-color: rgba(16, 185, 129, 0.15);
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  text-shadow: 0 0 8px rgba(16, 185, 129, 0.3);
}
.tl-wrap .tl-solver-tabs {
  display: flex;
  background-color: #1f1f23;
  border-radius: 8px;
  padding: 3px;
  gap: 3px;
  margin-bottom: 12px;
  border: 1px solid var(--tl-border);
}
.tl-wrap .tl-solver-tab-btn {
  flex: 1;
  background: none;
  border: none;
  padding: 8px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--tl-muted);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-align: center;
}
.tl-wrap .tl-solver-tab-btn.active {
  background-color: #27272a;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}
.tl-wrap .tl-solver-pane {
  display: none;
  flex-direction: column;
  gap: 12px;
}
.tl-wrap .tl-solver-pane.active {
  display: flex;
}
.tl-wrap .tl-calc-inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255,255,255,0.01);
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--tl-border);
}
.tl-wrap .tl-calc-inputs span {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--tl-muted);
}
.tl-wrap .tl-input-with-unit {
  display: flex;
  align-items: center;
  background-color: #0d0d10;
  border: 1px solid var(--tl-border);
  border-radius: 6px;
  padding-right: 8px;
}
.tl-wrap .tl-calc-input {
  width: 70px;
  padding: 6px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 700;
  text-align: center;
  outline: none;
}
.tl-wrap .tl-input-with-unit .tl-unit {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--tl-muted);
}
.tl-wrap .tl-probe-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.tl-wrap .tl-spec-tile {
  background-color: rgba(255,255,255,0.01);
  border: 1px solid var(--tl-border);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
.tl-wrap .tl-tile-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--tl-muted);
}
.tl-wrap .tl-tile-val {
  font-size: 1.1rem;
  font-weight: 850;
  color: var(--tl-cyan);
  margin-top: 4px;
}
.tl-wrap .tl-faulty-cal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 4px;
}
.tl-wrap .tl-faulty-cal .tl-calc-inputs {
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
}
.tl-wrap .tl-faulty-cal .tl-input-with-unit {
  width: 100%;
  justify-content: space-between;
}
.tl-wrap .tl-faulty-cal .tl-calc-input {
  width: 100%;
  text-align: right;
}
.tl-wrap .tl-faulty-interval {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--tl-muted);
  padding: 8px 12px;
  background: rgba(255,255,255,0.02);
  border-radius: 10px;
  border: 1px dashed var(--tl-border);
  margin-bottom: 10px;
}
.tl-wrap .tl-faulty-interval b {
  color: var(--tl-cyan);
  font-family: ui-monospace, monospace;
}
.tl-wrap .tl-solver-error {
  font-size: 0.78rem;
  color: var(--tl-red);
  font-weight: 600;
  margin: 0;
}
`;function Gt(){if(document.getElementById(at))return;const t=document.createElement("style");t.id=at,t.textContent=Ot,document.head.appendChild(t)}function De(t,i={}){Gt();const s=i.type||"liquid";let n=t("tools.thermometerLab.title"),u=t("tools.thermometerLab.subtitle");i.type==="liquid"?(n=t("tools.thermometerLab.liquid.title"),u=t("tools.thermometerLab.liquid.subtitle")||t("tools.thermometerLab.subtitle")):i.type==="resistance"?(n=t("tools.thermometerLab.resistance.title"),u=t("tools.thermometerLab.resistance.subtitle")||t("tools.thermometerLab.subtitle")):i.type==="thermistor"&&(n=t("tools.thermometerLab.thermistor.title"),u=t("tools.thermometerLab.thermistor.subtitle")||t("tools.thermometerLab.subtitle"));const r=document.createElement("div");r.className="tl-wrap",r.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${n}</h2>
      <div class="tl-sub">${u}</div>
    </div>
    <div class="tl-dash">
      <!-- TOP ROW LEFT: THERMOMETER VIEW -->
      <div class="tl-viz-phys" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;">
        <canvas class="tl-canvas-phys" id="tl-thermometerCanvas" width="460" height="340"></canvas>
        <button class="tl-btn" id="tl-btn-toggle-labels" style="margin-top:4px;width:100%;display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.75rem;padding:6px 10px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <span id="tl-lbl-toggle-labels">${t("tools.thermometerLab.labels.hide")}</span>
        </button>
      </div>

      <!-- TOP ROW RIGHT: GRAPH -->
      <div class="tl-viz-graph" style="display:flex;flex-direction:column;gap:8px;align-items:stretch;width:100%">
        <canvas class="tl-canvas-graph" id="tl-graphCanvas" width="800" height="560"></canvas>
        
        <!-- Interactive Temperature Slider aligned directly under the Graph -->
        <div class="tl-bath-bar" style="margin-top:0;padding:8px 12px;background:rgba(255,255,255,0.02);border:1px solid var(--tl-border);border-radius:12px">
          <div class="tl-bath-bar-top" style="display:flex;align-items:center;justify-content:space-between;gap:12px">
            <div class="tl-beaker-overlay" style="padding:4px 8px;margin:0;font-size:0.75rem;background:transparent;border:none">
              <span>Liquid: <b id="tl-bath-state">Water</b></span>
              <span><b class="tl-temp-badge" id="tl-bath-temp-display" style="font-size:0.9rem">25.0°C</b></span>
            </div>
            <div class="tl-bath-slider-wrap" style="flex:1;display:flex;flex-direction:column;gap:2px">
              <div class="tl-lr" style="font-size:0.72rem">
                <span>T<sub>bath</sub></span>
                <span class="tl-badge" id="tl-val-bath-temp" style="color:var(--tl-cyan);font-size:0.75rem">25.0 °C</span>
              </div>
              <input type="range" id="tl-bath-temp-slider" min="0" max="200" step="0.5" value="25.0" style="margin:0">
            </div>
          </div>
          <div class="tl-btn-group" style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:6px">
            <button class="tl-btn" id="tl-btn-preset-ice" style="padding:4px;font-size:0.7rem">Ice 0°C</button>
            <button class="tl-btn" id="tl-btn-preset-room" style="padding:4px;font-size:0.7rem">Room 25°C</button>
            <button class="tl-btn" id="tl-btn-preset-steam" style="padding:4px;font-size:0.7rem">Steam 100°C</button>
            <button class="tl-btn" id="tl-btn-preset-oil" style="padding:4px;font-size:0.7rem">Oil 150°C</button>
          </div>
        </div>
      </div>

      <!-- BOTTOM ROW: CONTROLS & SOLVERS -->
      <div class="tl-controls">

        <!-- TAB 1: LIQUID-IN-GLASS -->
        <div class="tl-tab-content active" id="tl-tab-liquid">
          <div class="tl-cg">
            <span class="tl-section-label">Thermometric liquid</span>
            <div class="tl-seg" role="group" aria-label="Thermometric liquid">
              <button type="button" class="tl-seg-btn active-mercury" id="tl-card-mercury" title="Mercury — boils at 356.7°C; suitable for high temperatures">
                <span class="tl-dot mercury"></span> Hg
              </button>
              <button type="button" class="tl-seg-btn" id="tl-card-alcohol" title="Alcohol — boils at 78.4°C; vaporizes at high temperatures">
                <span class="tl-dot alcohol"></span> Alcohol
              </button>
            </div>
          </div>

          <div class="tl-warning-banner" id="tl-alcohol-boiling-warning">
            <strong>CRITICAL PHYSICS ALERT!</strong> Alcohol boils at 78.4°C. Dipping it into this temperature vaporizes the liquid, creating extreme pressure and breaking the thermometer. This is why alcohol <b>cannot</b> be used to measure hot oil (150°C)!
          </div>

          <div class="tl-param-grid">
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Bulb Volume (V<sub>b</sub>)</span>
                <span class="tl-badge" id="tl-val-bulb-vol">200 mm³</span>
              </div>
              <input type="range" id="tl-slider-bulb-vol" min="10" max="1000" step="10" value="200">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Wall Thickness (w)</span>
                <span class="tl-badge" id="tl-val-wall-thickness">0.5 mm</span>
              </div>
              <input type="range" id="tl-slider-wall-thick" min="0.05" max="3.0" step="0.05" value="0.5">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Capillary Bore Diameter (d)</span>
                <span class="tl-badge" id="tl-val-capillary-bore">0.3 mm</span>
              </div>
              <input type="range" id="tl-slider-capillary-bore" min="0.05" max="2.0" step="0.05" value="0.3">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Ice Point Column Length (L<sub>0</sub>)</span>
                <span class="tl-badge" id="tl-val-liquid-l0">3.0 cm</span>
              </div>
              <input type="range" id="tl-slider-liquid-l0" min="0.5" max="15.0" step="0.1" value="3.0">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Steam Point Column Length (L<sub>100</sub>)</span>
                <span class="tl-badge" id="tl-val-liquid-l100">13.0 cm</span>
              </div>
              <input type="range" id="tl-slider-liquid-l100" min="5.0" max="30.0" step="0.1" value="13.0">
            </div>
          </div>

          <div class="tl-info-card tl-info-card--compact">
            τ = <b id="tl-val-response-time">0.65 s</b> · larger V<sub>b</sub> → slower equilibration
          </div>

          <!-- Live calibration formula -->
          <div class="tl-info-label" style="margin-top:10px;font-size:0.8rem;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
          <div class="tl-worked-solution" style="margin-bottom:10px; display:flex; flex-direction:column; gap:12px">
            <!-- Direction A: Length to Temperature -->
            <div style="border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:10px">
              <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction A: Length to Temperature (L<sub>T</sub> &rarr; T)</div>
              <div id="tl-svg-formula-liquid" class="tl-math-formula" style="height:45px; margin:4px 0">
                <!-- Inline SVG for beautiful LaTeX-like formula rendering -->
              </div>
              <p style="margin:2px 0; font-size:0.75rem">Substitute current reading <b id="tl-live-liquid-lt">5.50 cm</b>:</p>
              <div id="tl-svg-formula-liquid-sub" class="tl-math-formula" style="height:100px; margin:4px 0">
                <!-- Substituted numbers formula -->
              </div>
            </div>

            <!-- Direction B: Temperature to Length -->
            <div>
              <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Length (T &rarr; L<sub>T</sub>)</div>
              <p style="margin:2px 0; font-size:0.75rem">Substitute current bath temperature <b id="tl-live-liquid-t-sub">25.0°C</b>:</p>
              <div id="tl-svg-formula-t-to-l" class="tl-math-formula" style="font-size:0.85rem;height:110px; margin:4px 0">
                <!-- T to L Formula -->
              </div>
            </div>
          </div>

          <!-- Faulty thermometer solver -->
          <div class="tl-info-label" style="margin-top:10px;font-size:0.8rem;color:var(--tl-cyan)">Faulty thermometer solver</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <p style="font-size:0.7rem;color:var(--tl-muted);margin:0">Set faulty readings at ice (0°C) and steam (100°C), then solve for T or C.</p>
            <div class="tl-info-card" style="margin-bottom:4px">
              <div class="tl-info-label">Faulty scale calibration</div>
              <p style="margin:0;font-size:0.68rem">T / 100 = (C − C<sub>f</sub>) / (C<sub>u</sub> − C<sub>f</sub>)</p>
            </div>
            
            <!-- Dual-Scale Diagram Container -->
            <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-muted);margin-top:4px;">${t("tools.thermometerLab.faulty.dualScale")}</div>
            <div id="tl-faulty-svg-container" style="width:100%; height:190px; margin:4px 0; background:rgba(0,0,0,0.25); border-radius:10px; border:1px solid var(--tl-border); display:flex; justify-content:center; align-items:center; padding:8px;"></div>

            <div class="tl-faulty-cal">
              <div class="tl-calc-inputs">
                <span>Ice reading C<sub>f</sub> (true 0°C)</span>
                <div class="tl-input-with-unit">
                  <input type="number" id="tl-input-faulty-cf" value="-1.5" step="0.1" class="tl-calc-input" aria-label="Ice point faulty reading">
                  <span class="tl-unit">°C</span>
                </div>
              </div>
              <div class="tl-calc-inputs">
                <span>Steam reading C<sub>u</sub> (true 100°C)</span>
                <div class="tl-input-with-unit">
                  <input type="number" id="tl-input-faulty-cu" value="105" step="0.1" class="tl-calc-input" aria-label="Steam point faulty reading">
                  <span class="tl-unit">°C</span>
                </div>
              </div>
            </div>
            <div class="tl-faulty-interval">
              <span>Proportional interval (C<sub>u</sub> − C<sub>f</sub>)</span>
              <b id="tl-val-faulty-interval">106.5 °C</b>
            </div>
            <div class="tl-solver-tabs">
              <button class="tl-solver-tab-btn active" id="tl-btn-solve-q10a">Find True Temp (T)</button>
              <button class="tl-solver-tab-btn" id="tl-btn-solve-q10b">Find Faulty Reading (C)</button>
            </div>
            <div id="tl-pane-q10a" class="tl-solver-pane active">
              <div class="tl-calc-inputs">
                <span>Faulty reading C</span>
                <div class="tl-input-with-unit">
                  <input type="number" id="tl-input-q10a-cm" value="25.0" step="0.5" class="tl-calc-input">
                  <span class="tl-unit">°C</span>
                </div>
              </div>
              <p class="tl-solver-error" id="tl-faulty-error-a" hidden></p>
              <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
                <div id="tl-svg-formula-faulty-a" class="tl-math-formula" style="font-size:0.85rem">
                  <!-- Formula A -->
                </div>
              </div>
            </div>
            <div id="tl-pane-q10b" class="tl-solver-pane">
              <div class="tl-calc-inputs">
                <span>True temperature T</span>
                <div class="tl-input-with-unit">
                  <input type="number" id="tl-input-q10b-t" value="70.0" step="1.0" class="tl-calc-input">
                  <span class="tl-unit">°C</span>
                </div>
              </div>
              <p class="tl-solver-error" id="tl-faulty-error-b" hidden></p>
              <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
                <div id="tl-svg-formula-faulty-b" class="tl-math-formula" style="font-size:0.85rem">
                  <!-- Formula B -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 2: PLATINUM RESISTANCE -->
        <div class="tl-tab-content" id="tl-tab-resistance">
          <div class="tl-probe-specs">
            <div class="tl-spec-tile">
              <span class="tl-tile-label">Ice Point Resistance (R<sub>0</sub>)</span>
              <span class="tl-tile-val" id="tl-spec-resistance-r0">5.0 Ω</span>
            </div>
            <div class="tl-spec-tile">
              <span class="tl-tile-label">Steam Point Resistance (R<sub>100</sub>)</span>
              <span class="tl-tile-val" id="tl-spec-resistance-r100">6.2 Ω</span>
            </div>
          </div>

          <div class="tl-param-grid">
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Ice Point Resistance (R<sub>0</sub>)</span>
                <span class="tl-badge" id="tl-val-resistance-r0">5.0 Ω</span>
              </div>
              <input type="range" id="tl-slider-resistance-r0" min="0.5" max="20.0" step="0.1" value="5.0">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Steam Point Resistance (R<sub>100</sub>)</span>
                <span class="tl-badge" id="tl-val-resistance-r100">6.2 Ω</span>
              </div>
              <input type="range" id="tl-slider-resistance-r100" min="2.0" max="30.0" step="0.1" value="6.2">
            </div>
          </div>

          <div class="tl-info-card" style="border-color:rgba(245,158,11,0.3)">
            <div class="tl-info-label" style="color:#f59e0b">Fundamental Assumption</div>
            <p>To calculate temperature using linear calibration, it is <b>fundamentally assumed that electrical resistance varies linearly with temperature</b>.</p>
          </div>

          <!-- Live calibration formula -->
          <div class="tl-info-label" style="margin-top:10px;font-size:0.8rem;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
          <div class="tl-worked-solution" style="margin-bottom:10px; display:flex; flex-direction:column; gap:12px">
            <!-- Direction A: Resistance to Temperature -->
            <div style="border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:10px">
              <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction A: Resistance to Temperature (R<sub>T</sub> &rarr; T)</div>
              <div id="tl-svg-formula-resistance" class="tl-math-formula" style="height:45px; margin:4px 0">
                <!-- Resistance formula -->
              </div>
              <p style="margin:2px 0; font-size:0.75rem">Substitute current resistance <b id="tl-live-resistance-rt">5.30 Ω</b>:</p>
              <div id="tl-svg-formula-resistance-sub" class="tl-math-formula" style="height:100px; margin:4px 0">
                <!-- Resistance sub formula -->
              </div>
            </div>

            <!-- Direction B: Temperature to Resistance -->
            <div>
              <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Resistance (T &rarr; R<sub>T</sub>)</div>
              <p style="margin:2px 0; font-size:0.75rem">Substitute current bath temperature <b id="tl-live-resistance-t-sub">25.0°C</b>:</p>
              <div id="tl-svg-formula-t-to-r" class="tl-math-formula" style="font-size:0.85rem;height:110px; margin:4px 0">
                <!-- T to R Formula -->
              </div>
            </div>
          </div>

          <!-- Resistance-to-temperature solver -->
          <div class="tl-info-label" style="margin-top:10px;font-size:0.8rem;color:var(--tl-cyan)">Resistance-to-temperature solver</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div class="tl-calc-inputs">
              <span>Measured Resistance (R):</span>
              <div class="tl-input-with-unit">
                <input type="number" id="tl-input-q11-r" value="7.7" step="0.1" class="tl-calc-input">
                <span class="tl-unit">Ω</span>
              </div>
            </div>
            <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
              <div id="tl-svg-formula-resistance-solver" class="tl-math-formula" style="font-size:0.85rem">
                <!-- Solver formula -->
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 3: THERMISTOR -->
        <div class="tl-tab-content" id="tl-tab-thermistor">
          <div class="tl-probe-specs">
            <div class="tl-spec-tile">
              <span class="tl-tile-label">Resistance at 25°C (R<sub>25</sub>)</span>
              <span class="tl-tile-val" id="tl-spec-thermistor-r25">10.0 kΩ</span>
            </div>
            <div class="tl-spec-tile">
              <span class="tl-tile-label">Beta Parameter (β)</span>
              <span class="tl-tile-val" id="tl-spec-thermistor-beta">3500 K</span>
            </div>
          </div>

          <div class="tl-param-grid">
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Resistance at 25°C (R<sub>25</sub>)</span>
                <span class="tl-badge" id="tl-val-thermistor-r25">10.0 kΩ</span>
              </div>
              <input type="range" id="tl-slider-thermistor-r25" min="0.5" max="50.0" step="0.1" value="10.0">
            </div>
            <div class="tl-cg">
              <div class="tl-lr">
                <span>Beta Parameter (β)</span>
                <span class="tl-badge" id="tl-val-thermistor-beta">3500 K</span>
              </div>
              <input type="range" id="tl-slider-thermistor-beta" min="1000" max="8000" step="50" value="3500">
            </div>
          </div>

          <!-- Live NTC beta calculation -->
          <div class="tl-info-label" style="margin-top:10px;font-size:0.8rem;color:var(--tl-green)">Live NTC beta calculation</div>
          <div class="tl-worked-solution" style="background-color:rgba(16,185,129,0.05);border-left-color:var(--tl-green)">
            <div id="tl-svg-formula-thermistor" class="tl-math-formula" style="font-size:0.85rem">
              <!-- Thermistor formula -->
            </div>
            <p>Substitute current resistance <b id="tl-live-thermistor-rt">10.00 kΩ</b>:</p>
            <div id="tl-svg-formula-thermistor-sub" class="tl-math-formula" style="font-size:0.85rem">
              <!-- Thermistor sub formula -->
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  `;const a={liquidType:"mercury",thermometerType:s,bulbVolume:200,wallThickness:.5,capillaryBore:.3,liquidL0:3,liquidL100:13,resistanceR0:5,resistanceR100:6.2,thermistorR25:10,thermistorBeta:3500,bathTemp:25,thermometerTemp:25,bubbles:[],iceCubes:[],heatWaves:[],steamParticles:[],currentLength:5.5,currentResistance:5.3,currentThermistorR:10,lastTimestamp:0,showLabels:!0},x=460,E=340,J=80,P=800,$=560;function G(){const e={left:110,top:48,right:30,bottom:65};return{gx:e.left,gy:e.top,gw:P-e.left-e.right,gh:$-e.top-e.bottom,tickFont:`bold ${Math.round(P*.024)}px Arial`,axisFont:`bold ${Math.round(P*.026)}px Arial`,dotR:8,yLabelX:e.left-75,xLabelY:$-e.bottom+32}}function Z(){let c=100;const p=Math.max(a.bathTemp,a.thermometerTemp,100);p>120&&(c=150),p>145&&(c=200);const g=c<=100?20:25;return{minT:0,maxT:c,tickStep:g}}function M(e,c,p,g,f){return g+(e-c)/(p-c)*f}function F(e,c,p,g,f){return g+f-(e-c)/(p-c)*f}function A(e,c,p,g,f,T){const{gx:v,gy:w,gw:S,gh:C,tickFont:L,axisFont:W,yLabelX:Q,xLabelY:q}=c;e.strokeStyle="#1e1e24",e.lineWidth=1;for(const O of T){const j=F(O.value,O.min,O.max,w,C);e.beginPath(),e.moveTo(v,j),e.lineTo(v+S,j),e.stroke()}for(let O=p;O<=g+.01;O+=f){const j=M(O,p,g,v,S);e.beginPath(),e.moveTo(j,w),e.lineTo(j,w+C),e.stroke()}e.strokeStyle="#4b5563",e.lineWidth=2.5,e.beginPath(),e.moveTo(v,w),e.lineTo(v,w+C),e.lineTo(v+S,w+C),e.stroke(),e.fillStyle="#e4e4e7",e.font=L,e.textAlign="right",e.textBaseline="middle";for(const O of T){const j=F(O.value,O.min,O.max,w,C);e.fillText(O.label,v-15,j)}e.textAlign="center",e.textBaseline="top";for(let O=p;O<=g+.01;O+=f){const j=M(O,p,g,v,S);e.fillText(`${Math.round(O)}`,j,w+C+10)}return{gx:v,gy:w,gw:S,gh:C,axisFont:W,yLabelX:Q,xLabelY:q}}function B(e,c){const p=c-e,g=p<=8?1:p<=14?2:5,f=[],T=Math.ceil(e/g)*g;for(let v=T;v<=c+.001;v+=g)f.push({value:v,label:v%1===0?`${v.toFixed(0)}`:`${v.toFixed(1)}`,min:e,max:c});return f}function te(){const{maxT:e}=Z(),c=K(0),p=K(e),g=p-c,f=Math.max(1,g*.1),T=Math.max(0,Math.round((c-f)*10)/10),v=Math.round((p+f)*10)/10;return{minL:T,maxL:v}}function K(e){return a.liquidL0+(a.liquidL100-a.liquidL0)/100*e}function ee(){const{maxT:e}=Z(),c=ae(0),p=ae(e),g=p-c,f=Math.max(.2,g*.1),T=Math.max(0,c-f),v=p+f,w=g<=2?.5:g<=4?1:2,S=[],C=Math.ceil(T/w)*w;for(let L=C;L<=v+.001;L+=w)S.push({value:L,label:L.toFixed(1),min:T,max:v});return{minR:T,maxR:v,ticks:S}}function ae(e){return a.resistanceR0+(a.resistanceR100-a.resistanceR0)/100*e}function V(e){const{maxT:c}=e;let p=a.thermistorR25;for(let v=0;v<=c;v+=5){const w=v+273.15,S=a.thermistorR25*Math.exp(a.thermistorBeta*(1/w-1/298.15));p=Math.max(p,S)}p=Math.ceil(p*1.08*10)/10;const g=0,f=p<=12?2:4,T=[];for(let v=0;v<=p+.001;v+=f)T.push({value:v,label:v.toFixed(0),min:g,max:p});return{minR:g,maxR:p,ticks:T}}const U=r.querySelector("#tl-thermometerCanvas"),N=U.getContext("2d"),X=r.querySelector("#tl-graphCanvas"),ne=X.getContext("2d"),Y=window.devicePixelRatio||1;U.width=x*Y,U.height=E*Y,N.scale(Y,Y),X.width=P*Y,X.height=$*Y,ne.scale(Y,Y);function D(){a.iceCubes=[];for(let e=0;e<5;e++)a.iceCubes.push({x:60+Math.random()*120,y:200+Math.random()*15,size:12+Math.random()*8,angle:Math.random()*Math.PI,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.15});a.bubbles=[];for(let e=0;e<20;e++)a.bubbles.push({x:60+Math.random()*120,y:190+Math.random()*70,r:1+Math.random()*3.5,speedY:.8+Math.random()*1.5,phase:Math.random()*Math.PI*2,wobbleSpeed:.08+Math.random()*.08});a.heatWaves=[];for(let e=0;e<8;e++)a.heatWaves.push({x:65+Math.random()*110,y:190+Math.random()*60,length:15+Math.random()*15,speedY:.5+Math.random()*.6,opacity:.15+Math.random()*.25});a.steamParticles=[];for(let e=0;e<12;e++)a.steamParticles.push({x:60+Math.random()*120,y:175+Math.random()*10,r:2+Math.random()*4,vx:(Math.random()-.5)*.3,vy:-.4-Math.random()*.6,alpha:.2+Math.random()*.4})}const m=200,o=11;function d(){const e=Math.pow(a.bulbVolume/m,.3333333333333333);return o*e}function h(){if(a.thermometerType==="resistance"||a.thermometerType==="thermistor")return .35;const e=a.liquidType==="mercury"?1:8,c=.2+a.wallThickness*1.5,p=.4+a.bulbVolume*.003,g=1.35-a.capillaryBore*.45;return Math.max(.1,c*p*g*e*.15)}function z(e){a.bathTemp<=8&&a.iceCubes.forEach(c=>{c.x+=c.speedX,c.y+=c.speedY,(c.x<65||c.x>175)&&(c.speedX*=-1),(c.y<195||c.y>210)&&(c.speedY*=-1)}),a.bathTemp>35&&a.heatWaves.forEach(c=>{c.y-=c.speedY*(1+a.bathTemp/100),c.y<185&&(c.y=265,c.x=65+Math.random()*110)}),a.bathTemp>=80&&a.bubbles.forEach(c=>{c.y-=c.speedY*(1+(a.bathTemp-80)/40),c.phase+=c.wobbleSpeed,c.x+=Math.sin(c.phase)*.3,c.y<185&&(c.y=260+Math.random()*10,c.x=60+Math.random()*120)}),a.bathTemp>=95&&a.steamParticles.forEach(c=>{c.x+=c.vx,c.y+=c.vy,c.alpha-=.005,(c.alpha<=0||c.y<130)&&(c.x=60+Math.random()*120,c.y=175+Math.random()*5,c.alpha=.2+Math.random()*.4)})}function R(e){let v=59,w=130,S=246;if(a.bathTemp<25){const q=a.bathTemp/25;v=Math.round(180-q*121),w=Math.round(210-q*80),S=Math.round(250-q*4)}else{const q=Math.min(1,(a.bathTemp-25)/125);v=Math.round(59+q*180),w=Math.round(130-q*100),S=Math.round(246-q*190)}if(a.bathTemp>40){const q=Math.min(1,(a.bathTemp-40)/100),O=Date.now()*.02;e.fillStyle=`rgba(239, 68, 68, ${q*.25})`,e.beginPath(),e.roundRect(45,284,150,10,4),e.fill(),e.fillStyle="rgba(249, 115, 22, 0.85)",e.beginPath(),e.moveTo(55+130/2-25,284);for(let j=-25;j<=25;j+=6){const re=q*(12+Math.sin(j*.4+O)*5);e.lineTo(55+130/2+j,284-re)}e.lineTo(55+130/2+25,284),e.closePath(),e.fill()}e.strokeStyle="#4b5563",e.lineWidth=2,e.fillStyle="#121214",e.beginPath(),e.roundRect(55,180,130,100,[0,0,10,10]),e.fill();const C=e.createLinearGradient(55,190,55,280);C.addColorStop(0,`rgba(${v}, ${w}, ${S}, 0.25)`),C.addColorStop(1,`rgba(${v}, ${w}, ${S}, 0.55)`),e.fillStyle=C,e.beginPath(),e.moveTo(55,190);const L=a.bathTemp>=80?2:.5,W=a.bathTemp>=80?.09:.03,Q=Date.now()*W;for(let q=55;q<=185;q+=5){const O=190+Math.sin(q*.15+Q)*L;e.lineTo(q,O)}e.lineTo(185,280),e.lineTo(55,280),e.closePath(),e.fill(),a.bathTemp>35&&(e.strokeStyle=`rgba(239, 68, 68, ${Math.min(.5,(a.bathTemp-35)/120)})`,e.lineWidth=1.2,a.heatWaves.forEach(q=>{e.beginPath(),e.moveTo(q.x,q.y),e.quadraticCurveTo(q.x+Math.sin(q.y*.06)*5,q.y-q.length/2,q.x,q.y-q.length),e.stroke()})),a.bathTemp<=8&&(e.fillStyle="rgba(224, 242, 254, 0.55)",e.strokeStyle="rgba(186, 230, 253, 0.8)",e.lineWidth=1,a.iceCubes.forEach(q=>{e.save(),e.translate(q.x,q.y),e.rotate(q.angle),e.beginPath(),e.roundRect(-q.size/2,-q.size/2,q.size,q.size,3),e.fill(),e.stroke(),e.restore()})),a.bathTemp>=80&&(e.fillStyle="rgba(255, 255, 255, 0.4)",e.strokeStyle="rgba(255, 255, 255, 0.65)",e.lineWidth=.6,a.bubbles.forEach(q=>{e.beginPath(),e.arc(q.x,q.y,q.r,0,Math.PI*2),e.fill(),e.stroke()})),a.bathTemp>=95&&a.steamParticles.forEach(q=>{e.fillStyle=`rgba(255, 255, 255, ${q.alpha})`,e.beginPath(),e.arc(q.x,q.y,q.r,0,Math.PI*2),e.fill()}),e.strokeStyle="#9ca3af",e.lineWidth=3.5,e.beginPath(),e.moveTo(54,180),e.lineTo(54,272),e.arcTo(54,281,65,281,8),e.lineTo(175,281),e.arcTo(186,281,186,272,8),e.lineTo(186,180),e.stroke(),e.strokeStyle="rgba(255, 255, 255, 0.4)",e.lineWidth=1.5,e.beginPath(),e.moveTo(59,190),e.lineTo(59,270),e.stroke()}function b(e,c,p,g,f,T,v="left"){if(!a.showLabels)return;e.strokeStyle="rgba(6, 182, 212, 0.7)",e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(c,p),e.lineTo(g,f),e.stroke(),e.setLineDash([]),e.fillStyle="#06b6d4",e.beginPath(),e.arc(c,p,3,0,Math.PI*2),e.fill(),e.font="bold 9px system-ui, sans-serif";const S=e.measureText(T).width+10,C=16,L=v==="left"?g:g-S,W=f-C/2;e.fillStyle="rgba(21, 21, 24, 0.9)",e.strokeStyle="#06b6d4",e.lineWidth=1,e.beginPath(),e.roundRect(L,W,S,C,4),e.fill(),e.stroke(),e.fillStyle="#f4f4f5",e.textAlign="center",e.textBaseline="middle",e.fillText(T,L+S/2,W+C/2+.5)}function y(e){const g=d(),f=250+Math.max(0,g-o)*.35,T=f-g-1,v=10+a.wallThickness*8,w=120-v/2,S=120+v/2,C=e.createLinearGradient(w,20,S,20);C.addColorStop(0,"rgba(209, 213, 219, 0.85)"),C.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),C.addColorStop(.5,"rgba(243, 244, 246, 0.15)"),C.addColorStop(.8,"rgba(255, 255, 255, 0.95)"),C.addColorStop(1,"rgba(156, 163, 175, 0.9)"),e.fillStyle=C,e.strokeStyle="rgba(156, 163, 175, 0.8)",e.lineWidth=1,e.beginPath(),e.moveTo(w,T),e.lineTo(w,25),e.arcTo(w,20,w+5,20,5),e.arcTo(S,20,S,25,5),e.lineTo(S,T),e.closePath(),e.fill(),e.stroke();const L=e.createRadialGradient(120-g*.2,f-g*.2,g*.1,120,f,g);L.addColorStop(0,"rgba(255, 255, 255, 0.8)"),L.addColorStop(1,"rgba(156, 163, 175, 0.35)"),e.fillStyle=L,e.strokeStyle="#6b7280",e.lineWidth=.8+a.wallThickness*.6,e.beginPath(),e.arc(120,f,g+.5+a.wallThickness*.5,0,Math.PI*2),e.fill(),e.stroke();const W=Math.min(v*.72,.8+a.capillaryBore*4.5);e.fillStyle="#0a0a0c",e.fillRect(120-W/2,28,W,T-20-8);const Q=a.liquidType==="mercury",q=Q?"#a1a1aa":"#ef4444",O=Q?"#f4f4f5":"#fee2e2",j=210,re=220,be=(j-40)/re,fe=j-Math.min(re,a.thermometerTemp)*be;e.fillStyle=q,e.fillRect(120-W/2,fe,W,T-fe),e.beginPath(),e.ellipse(120,fe,W/2,1.5,0,0,Math.PI*2),e.fill(),e.fillStyle=O,e.fillRect(120-W/6,fe,W/3,T-fe);const oe=g*.9,ie=e.createRadialGradient(120-oe*.2,f-oe*.2,oe*.1,120,f,oe);Q?(ie.addColorStop(0,"#f4f4f5"),ie.addColorStop(.3,"#d4d4d8"),ie.addColorStop(.8,"#71717a"),ie.addColorStop(1,"#3f3f46")):(ie.addColorStop(0,"#fee2e2"),ie.addColorStop(.2,"#fca5a5"),ie.addColorStop(.7,"#ef4444"),ie.addColorStop(1,"#991b1b")),e.fillStyle=ie,e.beginPath(),e.arc(120,f,oe,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(161, 161, 170, 0.6)",e.lineWidth=.5,e.font="6.5px Arial",e.fillStyle="#a1a1aa",e.textAlign="right",e.textBaseline="middle";for(let ce=0;ce<=200;ce+=50){const pe=j-ce*be;e.beginPath(),e.moveTo(w,pe),e.lineTo(w+4,pe),e.stroke(),e.fillText(`${ce}°C`,w-22,pe+2.5)}a.showLabels&&(b(e,w+1,80,10,50,t("tools.thermometerLab.labels.thinWall"),"left"),b(e,120,fe,230,fe-15,t("tools.thermometerLab.labels.meniscus"),"left"),b(e,120-W/2,130,10,130,t("tools.thermometerLab.labels.narrowBore"),"left"),b(e,120,f,230,f+15,t("tools.thermometerLab.labels.largeBulb"),"left"))}function _(e){const v=e.createLinearGradient(115,20,125,20);v.addColorStop(0,"#71717a"),v.addColorStop(.3,"#f4f4f5"),v.addColorStop(.7,"#d4d4d8"),v.addColorStop(1,"#3f3f46"),e.fillStyle=v,e.strokeStyle="#4b5563",e.lineWidth=1,e.beginPath(),e.roundRect(115,20,10,225,[0,0,4,4]),e.fill(),e.stroke(),e.fillStyle="rgba(21, 21, 24, 0.8)",e.fillRect(117,200,6,40),e.strokeStyle="#e2e8f0",e.lineWidth=1.2,e.beginPath();let w=205;e.moveTo(118,w);for(let Q=0;Q<8;Q++)w+=4,e.lineTo(122,w),w+=4,e.lineTo(118,w);e.stroke(),e.lineWidth=1.5,e.strokeStyle="#ef4444",e.beginPath(),e.moveTo(118,20),e.bezierCurveTo(110,5,200,30,245,60),e.stroke(),e.strokeStyle="#111827",e.beginPath(),e.moveTo(122,20),e.bezierCurveTo(130,8,210,45,245,75),e.stroke();const S=245,C=40,L=135,W=90;e.fillStyle="#18181b",e.strokeStyle="#6366f1",e.lineWidth=2.5,e.beginPath(),e.roundRect(S,C,L,W,10),e.fill(),e.stroke(),e.fillStyle="#022c22",e.beginPath(),e.roundRect(S+10,C+12,L-20,34,4),e.fill(),e.font='bold 14px "Courier New"',e.fillStyle="#10b981",e.textAlign="right",e.fillText(a.currentResistance.toFixed(2)+" Ω",S+L-16,C+34),e.font="6px Arial",e.fillStyle="#a7f3d0",e.textAlign="left",e.fillText("PLATINUM RTD METER",S+14,C+21),a.showLabels&&(b(e,116,100,10,70,t("tools.thermometerLab.labels.metalSheath"),"left"),b(e,120,225,230,205,t("tools.thermometerLab.labels.platinumCoil"),"left"))}function k(e){e.strokeStyle="#111827",e.lineWidth=1.2,e.beginPath(),e.moveTo(118,20),e.lineTo(118,245),e.stroke(),e.beginPath(),e.moveTo(122,20),e.lineTo(122,245),e.stroke();const f=20,T=225,v=12,w=120-v/2,S=e.createLinearGradient(w,f,w+v,f);S.addColorStop(0,"rgba(229, 231, 235, 0.4)"),S.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),S.addColorStop(.7,"rgba(243, 244, 246, 0.5)"),S.addColorStop(1,"rgba(209, 213, 219, 0.6)"),e.fillStyle=S,e.strokeStyle="rgba(156, 163, 175, 0.6)",e.lineWidth=.8,e.beginPath(),e.roundRect(w,f,v,T-f,[0,0,3,3]),e.fill(),e.stroke();const C=7,L=e.createRadialGradient(120-C*.2,245-C*.2,C*.1,120,245,C);L.addColorStop(0,"#6b7280"),L.addColorStop(.7,"#1f2937"),L.addColorStop(1,"#09090b"),e.fillStyle=L,e.strokeStyle="#030712",e.lineWidth=1.2,e.beginPath(),e.arc(120,245,C,0,Math.PI*2),e.fill(),e.stroke(),e.lineWidth=1.5,e.strokeStyle="#ef4444",e.beginPath(),e.moveTo(118,20),e.bezierCurveTo(110,5,200,30,245,60),e.stroke(),e.strokeStyle="#111827",e.beginPath(),e.moveTo(122,20),e.bezierCurveTo(130,8,210,45,245,75),e.stroke();const W=245,Q=40,q=135,O=90;e.fillStyle="#18181b",e.strokeStyle="#10b981",e.lineWidth=2.5,e.beginPath(),e.roundRect(W,Q,q,O,10),e.fill(),e.stroke(),e.fillStyle="#022c22",e.beginPath(),e.roundRect(W+10,Q+12,q-20,34,4),e.fill(),e.font='bold 14px "Courier New"',e.fillStyle="#34d399",e.textAlign="right",e.fillText(a.currentThermistorR.toFixed(2)+" kΩ",W+q-16,Q+34),e.font="6px Arial",e.fillStyle="#a7f3d0",e.textAlign="left",e.fillText("NTC THERMISTOR METER",W+14,Q+21),a.showLabels&&(b(e,118,120,10,90,t("tools.thermometerLab.labels.leads"),"left"),b(e,120,245,230,225,t("tools.thermometerLab.labels.semiconductorBead"),"left"))}function I(e,c,p,g,f,T,v,w,S){const{gx:C,gy:L,gw:W,gh:Q}=c;e.strokeStyle="rgba(255, 255, 255, 0.2)",e.lineWidth=1,e.setLineDash([4,4]),e.beginPath(),e.moveTo(p,g),e.lineTo(p,L+Q),e.stroke(),e.beginPath(),e.moveTo(p,g),e.lineTo(C,g),e.stroke(),e.setLineDash([]),e.font="bold 11px Arial",e.textAlign="center",e.textBaseline="top";const q=`${f.toFixed(1)}${v}`,O=e.measureText(q).width+10;e.fillStyle=S,e.beginPath(),e.roundRect(p-O/2,L+Q+2,O,15,3),e.fill(),e.fillStyle="#000",e.fillText(q,p,L+Q+4),e.textAlign="right",e.textBaseline="middle";const j=`${T.toFixed(2)} ${w}`,re=e.measureText(j).width+10;e.fillStyle=S,e.beginPath(),e.roundRect(C-re-2,g-7,re,15,3),e.fill(),e.fillStyle="#000",e.fillText(j,C-7,g)}function H(e){const c=G(),{minL:p,maxL:g}=te(),{minT:f,maxT:T,tickStep:v}=Z(),w=B(p,g),S=A(e,c,f,T,v,w),{gx:C,gy:L,gw:W,gh:Q,axisFont:q,yLabelX:O,xLabelY:j,dotR:re}={...c,...S};e.save(),e.translate(O,L+Q/2),e.rotate(-Math.PI/2),e.font=q,e.fillStyle="#e4e4e7",e.fillText("Length of liquid column / cm",0,0),e.restore(),e.font=q,e.fillStyle="#e4e4e7",e.textAlign="center",e.fillText("temperature / °C",C+W/2,j);const we=T,be=M(0,f,T,C,W),fe=F(K(0),p,g,L,Q),oe=M(we,f,T,C,W),ie=F(K(we),p,g,L,Q);e.strokeStyle="#ef4444",e.lineWidth=3,e.beginPath(),e.moveTo(be,fe),e.lineTo(oe,ie),e.stroke();const ce=a.thermometerTemp,pe=a.currentLength;if(ce>=f&&ce<=T){const ve=M(ce,f,T,C,W),Ce=F(pe,p,g,L,Q);I(e,c,ve,Ce,ce,pe,"°C","cm","#ef4444"),e.shadowColor="#ef4444",e.shadowBlur=10,e.fillStyle="#ef4444",e.beginPath(),e.arc(ve,Ce,re,0,Math.PI*2),e.fill(),e.shadowBlur=0}}function se(e){const c=G(),{minR:p,maxR:g,ticks:f}=ee(),T=Z(),v=A(e,c,T.minT,T.maxT,T.tickStep,f),{gx:w,gy:S,gw:C,gh:L,axisFont:W,yLabelX:Q,xLabelY:q,dotR:O}={...c,...v};e.save(),e.translate(Q,S+L/2),e.rotate(-Math.PI/2),e.font=W,e.fillStyle="#e4e4e7",e.fillText("Resistance of platinum / Ω",0,0),e.restore(),e.font=W,e.fillStyle="#e4e4e7",e.textAlign="center",e.fillText("temperature / °C",w+C/2,q);const{minT:j,maxT:re}=T,we=re,be=M(0,j,re,w,C),fe=F(ae(0),p,g,S,L),oe=M(we,j,re,w,C),ie=F(ae(we),p,g,S,L);e.strokeStyle="#6366f1",e.lineWidth=3,e.beginPath(),e.moveTo(be,fe),e.lineTo(oe,ie),e.stroke();const ce=a.thermometerTemp,pe=a.currentResistance;if(ce>=j&&ce<=re){const ve=M(ce,j,re,w,C),Ce=F(pe,p,g,S,L);I(e,c,ve,Ce,ce,pe,"°C","Ω","#6366f1"),e.shadowColor="#6366f1",e.shadowBlur=10,e.fillStyle="#6366f1",e.beginPath(),e.arc(ve,Ce,O,0,Math.PI*2),e.fill(),e.shadowBlur=0}}function le(e){const c=G(),p=Z(),{minR:g,maxR:f,ticks:T}=V(p),v=A(e,c,p.minT,p.maxT,p.tickStep,T),{gx:w,gy:S,gw:C,gh:L,axisFont:W,yLabelX:Q,xLabelY:q,dotR:O}={...c,...v},{minT:j,maxT:re}=p;e.save(),e.translate(Q,S+L/2),e.rotate(-Math.PI/2),e.font=W,e.fillStyle="#e4e4e7",e.fillText("Resistance of thermistor / kΩ",0,0),e.restore(),e.font=W,e.fillStyle="#e4e4e7",e.textAlign="center",e.fillText("temperature / °C",w+C/2,q),e.strokeStyle="#10b981",e.lineWidth=3,e.beginPath();let we=!1;for(let oe=j;oe<=re;oe+=1){const ie=oe+273.15,ce=a.thermistorR25*Math.exp(a.thermistorBeta*(1/ie-1/298.15)),pe=M(oe,j,re,w,C),ve=F(Math.min(f,ce),g,f,S,L);ve>=S&&ve<=S+L&&(we?e.lineTo(pe,ve):(e.moveTo(pe,ve),we=!0))}e.stroke();const be=a.thermometerTemp,fe=a.currentThermistorR;if(be>=j&&be<=re){const oe=M(be,j,re,w,C),ie=F(Math.min(f,fe),g,f,S,L);I(e,c,oe,ie,be,fe,"°C","kΩ","#10b981"),e.shadowColor="#10b981",e.shadowBlur=10,e.fillStyle="#10b981",e.beginPath(),e.arc(oe,ie,O,0,Math.PI*2),e.fill(),e.shadowBlur=0}}function he(){N.clearRect(0,0,x,E),ne.clearRect(0,0,P,$),N.save(),N.translate(J,0),R(N),a.thermometerType==="liquid"?y(N):a.thermometerType==="resistance"?_(N):k(N),N.restore(),a.thermometerType==="liquid"?H(ne):a.thermometerType==="resistance"?se(ne):le(ne)}function ge(){const e=r.querySelector("#tl-svg-formula-liquid");e&&(e.innerHTML=`
        <svg height="55" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">Slope Equation:</text>
          <line x1="120" y1="26" x2="210" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="165" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">L<tspan dy="2" font-size="8">100</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="8">0</tspan><tspan dy="-2"></tspan></text>
          <text x="165" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100 - 0</text>
          
          <text x="220" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">=</text>
          
          <line x1="240" y1="26" x2="330" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="285" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - L</tspan><tspan dy="2" font-size="8">0</tspan><tspan dy="-2"></tspan></text>
          <text x="285" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">T - 0</text>
        </svg>
      `);const c=r.querySelector("#tl-svg-formula-liquid-sub");if(c){const v=a.liquidL100-a.liquidL0,w=a.currentLength-a.liquidL0;c.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${a.liquidL100.toFixed(1)} - ${a.liquidL0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${a.currentLength.toFixed(2)} - ${a.liquidL0.toFixed(1)}</text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">T - 0</text>

          <!-- Step 2: Simplify Ratio -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for T</text>
          <line x1="120" y1="80" x2="200" y2="80" stroke="#fff" stroke-width="1.2" />
          <text x="160" y="72" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${w.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${v.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${a.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const p=r.querySelector("#tl-svg-formula-resistance");p&&(p.innerHTML=`
        <svg height="55" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">Slope Equation:</text>
          <line x1="120" y1="26" x2="210" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="165" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">R<tspan dy="2" font-size="8">100</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="8">0</tspan><tspan dy="-2"></tspan></text>
          <text x="165" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100 - 0</text>
          
          <text x="220" y="31" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">=</text>
          
          <line x1="240" y1="26" x2="330" y2="26" stroke="#fff" stroke-width="1.5" />
          <text x="285" y="18" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - R</tspan><tspan dy="2" font-size="8">0</tspan><tspan dy="-2"></tspan></text>
          <text x="285" y="41" fill="#fff" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">T - 0</text>
        </svg>
      `);const g=r.querySelector("#tl-svg-formula-resistance-sub");if(g){const v=a.resistanceR100-a.resistanceR0,w=a.currentResistance-a.resistanceR0;g.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${a.resistanceR100.toFixed(1)} - ${a.resistanceR0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${a.currentResistance.toFixed(2)} - ${a.resistanceR0.toFixed(1)}</text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">T - 0</text>

          <!-- Step 2: Simplify Ratio -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for T</text>
          <line x1="120" y1="80" x2="200" y2="80" stroke="#fff" stroke-width="1.2" />
          <text x="160" y="72" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${w.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${v.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${a.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const f=r.querySelector("#tl-svg-formula-thermistor");f&&(f.innerHTML=`
        <svg height="50" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="23" x2="220" y2="23" stroke="#fff" stroke-width="1.5" />
          <text x="130" y="15" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">1</text>
          <text x="130" y="38" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">(1/&beta;) &bull; ln(R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2">/R</tspan><tspan dy="2" font-size="8">25</tspan><tspan dy="-2">) + 1/298.15</tspan></text>
          <text x="230" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">- 273.15</text>
        </svg>
      `);const T=r.querySelector("#tl-svg-formula-thermistor-sub");if(T){const v=a.thermometerTemp+273.15;T.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            T<tspan dy="3" font-size="10">K</tspan><tspan dy="-3" fill="#10b981" font-weight="bold"> = ${v.toFixed(2)} K</tspan>
            <tspan fill="#fff"> &rArr; T = </tspan>
            <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${a.thermometerTemp.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `}}function Se(){const e=r.querySelector("#tl-faulty-svg-container");if(!e)return;const{cf:c,cu:p,interval:g}=He(),f=parseFloat(r.querySelector("#tl-input-q10a-cm").value)||0,T=parseFloat(r.querySelector("#tl-input-q10b-t").value)||0,v=r.querySelector("#tl-pane-q10a").classList.contains("active"),w=v?(f-c)/g*100:T,S=v?f:T/100*g+c,L=(W=>130-W/100*80)(w);e.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <!-- Left Scale: True Scale -->
        <g transform="translate(0, 0)">
          <!-- Glass Tube -->
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="84" y="${L}" width="4" height="${144-L}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          
          <!-- Ticks -->
          <!-- Ice Point 0°C -->
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          
          <!-- Steam Point 100°C -->
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>

          <!-- Current Point -->
          <text x="65" y="${L+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${w.toFixed(1)}°C</text>

          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${t("tools.thermometerLab.faulty.trueScale")}</text>
        </g>

        <!-- Right Scale: Faulty Scale -->
        <g transform="translate(130, 0)">
          <!-- Glass Tube -->
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="104" y="${L}" width="4" height="${144-L}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          
          <!-- Ticks -->
          <!-- Faulty Ice Point Cf -->
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${c.toFixed(1)}°C</tspan></text>
          
          <!-- Faulty Steam Point Cu -->
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${p.toFixed(1)}°C</tspan></text>

          <!-- Current Faulty Point -->
          <text x="125" y="${L+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${S.toFixed(1)}°C</text>

          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${t("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>

        <!-- Connecting Ratio Indicator Line -->
        <line x1="86" y1="${L}" x2="236" y2="${L}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${L}" r="3" fill="#34d399" />
        <circle cx="236" cy="${L}" r="3" fill="#34d399" />
      </svg>
    `}function ke(e){r.querySelector("#tl-bath-temp-display").innerHTML=a.bathTemp.toFixed(1)+"°C",r.querySelector("#tl-val-bath-temp").innerHTML=a.bathTemp.toFixed(1)+" °C";const c=r.querySelector("#tl-bath-state");a.bathTemp<=0?c.textContent="Melting Ice Bath":a.bathTemp>=100?c.textContent="Boiling Water/Steam":a.bathTemp===150?c.textContent="Hot Cooking Oil":c.textContent="Liquid Water",r.querySelector("#tl-val-response-time").textContent=e.toFixed(2)+" s";const p=r.querySelector("#tl-alcohol-boiling-warning");a.thermometerType==="liquid"&&a.liquidType==="alcohol"&&a.bathTemp>=78?p.style.display="block":p.style.display="none",a.thermometerType==="liquid"?(r.querySelector("#tl-live-liquid-lt").textContent=a.currentLength.toFixed(2)+" cm",r.querySelector("#tl-live-liquid-t-sub").textContent=a.thermometerTemp.toFixed(1)+"°C"):a.thermometerType==="resistance"?(r.querySelector("#tl-live-resistance-rt").textContent=a.currentResistance.toFixed(2)+" Ω",r.querySelector("#tl-live-resistance-t-sub").textContent=a.thermometerTemp.toFixed(1)+"°C"):r.querySelector("#tl-live-thermistor-rt").textContent=a.currentThermistorR.toFixed(2)+" kΩ",ge()}let qe=null;function Fe(e){a.lastTimestamp||(a.lastTimestamp=e);const c=(e-a.lastTimestamp)/1e3;a.lastTimestamp=e;const p=Math.min(c,.1),g=h(),f=p/g*(a.bathTemp-a.thermometerTemp);a.thermometerTemp+=f,a.currentLength=a.liquidL0+(a.liquidL100-a.liquidL0)/100*a.thermometerTemp,a.currentResistance=a.resistanceR0+(a.resistanceR100-a.resistanceR0)/100*a.thermometerTemp;const T=a.thermometerTemp+273.15;a.currentThermistorR=a.thermistorR25*Math.exp(a.thermistorBeta*(1/T-1/298.15)),z(),he(),ke(g),qe=requestAnimationFrame(Fe)}function He(){const e=parseFloat(r.querySelector("#tl-input-faulty-cf").value),c=parseFloat(r.querySelector("#tl-input-faulty-cu").value),p=Number.isFinite(e)?e:-1.5,g=Number.isFinite(c)?c:105,f=g-p;return{cf:p,cu:g,interval:f}}function $e(e){const c=Math.round(e*100)/100;return c>=0?c.toFixed(1):`(${c.toFixed(1)})`}function me(){const{cf:e,cu:c,interval:p}=He(),g=r.querySelector("#tl-val-faulty-interval"),f=r.querySelector("#tl-faulty-error-a"),T=r.querySelector("#tl-faulty-error-b"),v=Math.abs(p)<.01;g.textContent=p.toFixed(1)+" °C";const w=r.querySelector("#tl-svg-formula-faulty-a"),S=r.querySelector("#tl-svg-formula-faulty-b");if(v){f.hidden=!1,f.textContent="C_u must differ from C_f (interval cannot be zero).",T.hidden=!1,T.textContent=f.textContent,w&&(w.innerHTML=""),S&&(S.innerHTML="");return}f.hidden=!0,T.hidden=!0;const C=parseFloat(r.querySelector("#tl-input-q10a-cm").value)||0,L=parseFloat(r.querySelector("#tl-input-q10b-t").value)||0,W=(C-e)/p*100,Q=L/100*p+e;w&&(w.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${C.toFixed(1)} - ${$e(e)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${c.toFixed(1)} - ${$e(e)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${W.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),S&&(S.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${L.toFixed(1)} &times; ${p.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${$e(e)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${Q.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),Se()}function ye(){const e=parseFloat(r.querySelector("#tl-input-q11-r").value)||0,c=(e-a.resistanceR0)/(a.resistanceR100-a.resistanceR0)*100,p=r.querySelector("#tl-svg-formula-resistance-solver");p&&(p.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">&theta; =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="13" text-anchor="middle">${e.toFixed(1)} - ${a.resistanceR0.toFixed(1)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">${a.resistanceR100.toFixed(1)} - ${a.resistanceR0.toFixed(1)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${c.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `)}function Te(){const e=a.thermometerTemp,c=a.liquidL100-a.liquidL0,p=a.liquidL0+c/100*e,g=r.querySelector("#tl-svg-formula-t-to-l");g&&(g.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${a.liquidL100.toFixed(1)} - ${a.liquidL0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${a.liquidL0.toFixed(1)}</tspan></text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${e.toFixed(1)} - 0</text>

          <!-- Step 2: Solve for L_T -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"></tspan></text>
          <text x="10" y="103" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${a.liquidL0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${c.toFixed(1)} / 100)</tspan> &times; ${e.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${p.toFixed(2)} cm</tspan>
          </text>
        </svg>
      `)}function je(){const e=a.thermometerTemp,c=a.resistanceR100-a.resistanceR0,p=a.resistanceR0+c/100*e,g=r.querySelector("#tl-svg-formula-t-to-r");g&&(g.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${a.resistanceR100.toFixed(1)} - ${a.resistanceR0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${a.resistanceR0.toFixed(1)}</tspan></text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${e.toFixed(1)} - 0</text>

          <!-- Step 2: Solve for R_T -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"></tspan></text>
          <text x="10" y="103" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${a.resistanceR0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${c.toFixed(1)} / 100)</tspan> &times; ${e.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${p.toFixed(2)} Ω</tspan>
          </text>
        </svg>
      `)}function ue(){me(),ye(),Te(),je()}function Ee(e,c){r.querySelector("#"+e).addEventListener("click",()=>{a.bathTemp=c,r.querySelector("#tl-bath-temp-slider").value=c,ue()})}function yt(){r.querySelectorAll(".tl-tab-btn").forEach(f=>{f.addEventListener("click",()=>{r.querySelectorAll(".tl-tab-btn").forEach(v=>v.classList.remove("active")),r.querySelectorAll(".tl-tab-content").forEach(v=>v.classList.remove("active")),f.classList.add("active");const T=f.getAttribute("data-tl-tab");r.querySelector("#tl-tab-"+T).classList.add("active"),a.thermometerType=T,ue()})}),r.querySelector("#tl-btn-toggle-labels").addEventListener("click",()=>{a.showLabels=!a.showLabels,r.querySelector("#tl-lbl-toggle-labels").textContent=a.showLabels?t("tools.thermometerLab.labels.hide"):t("tools.thermometerLab.labels.show")}),r.querySelector("#tl-bath-temp-slider").addEventListener("input",f=>{a.bathTemp=parseFloat(f.target.value),ue()}),Ee("tl-btn-preset-ice",0),Ee("tl-btn-preset-room",25),Ee("tl-btn-preset-steam",100),Ee("tl-btn-preset-oil",150),r.querySelector("#tl-card-mercury").addEventListener("click",()=>{a.liquidType="mercury",r.querySelector("#tl-card-mercury").className="tl-seg-btn active-mercury",r.querySelector("#tl-card-alcohol").className="tl-seg-btn",ue()}),r.querySelector("#tl-card-alcohol").addEventListener("click",()=>{a.liquidType="alcohol",r.querySelector("#tl-card-mercury").className="tl-seg-btn",r.querySelector("#tl-card-alcohol").className="tl-seg-btn active-alcohol",ue()}),r.querySelector("#tl-slider-bulb-vol").addEventListener("input",f=>{a.bulbVolume=parseFloat(f.target.value),r.querySelector("#tl-val-bulb-vol").textContent=a.bulbVolume+" mm³"}),r.querySelector("#tl-slider-wall-thick").addEventListener("input",f=>{a.wallThickness=parseFloat(f.target.value),r.querySelector("#tl-val-wall-thickness").textContent=a.wallThickness.toFixed(1)+" mm"}),r.querySelector("#tl-slider-capillary-bore").addEventListener("input",f=>{a.capillaryBore=parseFloat(f.target.value),r.querySelector("#tl-val-capillary-bore").textContent=a.capillaryBore.toFixed(2)+" mm"}),r.querySelector("#tl-slider-liquid-l0").addEventListener("input",f=>{a.liquidL0=parseFloat(f.target.value),r.querySelector("#tl-val-liquid-l0").textContent=a.liquidL0.toFixed(1)+" cm",ue()}),r.querySelector("#tl-slider-liquid-l100").addEventListener("input",f=>{a.liquidL100=parseFloat(f.target.value),r.querySelector("#tl-val-liquid-l100").textContent=a.liquidL100.toFixed(1)+" cm",ue()}),r.querySelector("#tl-slider-resistance-r0").addEventListener("input",f=>{a.resistanceR0=parseFloat(f.target.value),r.querySelector("#tl-val-resistance-r0").textContent=a.resistanceR0.toFixed(1)+" Ω",r.querySelector("#tl-spec-resistance-r0").textContent=a.resistanceR0.toFixed(1)+" Ω",ue()}),r.querySelector("#tl-slider-resistance-r100").addEventListener("input",f=>{a.resistanceR100=parseFloat(f.target.value),r.querySelector("#tl-val-resistance-r100").textContent=a.resistanceR100.toFixed(1)+" Ω",r.querySelector("#tl-spec-resistance-r100").textContent=a.resistanceR100.toFixed(1)+" Ω",ue()}),r.querySelector("#tl-slider-thermistor-r25").addEventListener("input",f=>{a.thermistorR25=parseFloat(f.target.value),r.querySelector("#tl-val-thermistor-r25").textContent=a.thermistorR25.toFixed(1)+" kΩ",r.querySelector("#tl-spec-thermistor-r25").textContent=a.thermistorR25.toFixed(1)+" kΩ",ue()}),r.querySelector("#tl-slider-thermistor-beta").addEventListener("input",f=>{a.thermistorBeta=parseFloat(f.target.value),r.querySelector("#tl-val-thermistor-beta").textContent=a.thermistorBeta+" K",r.querySelector("#tl-spec-thermistor-beta").textContent=a.thermistorBeta+" K",ue()}),r.querySelector("#tl-btn-solve-q10a").addEventListener("click",()=>{r.querySelector("#tl-btn-solve-q10a").classList.add("active"),r.querySelector("#tl-btn-solve-q10b").classList.remove("active"),r.querySelector("#tl-pane-q10a").classList.add("active"),r.querySelector("#tl-pane-q10b").classList.remove("active"),me()}),r.querySelector("#tl-btn-solve-q10b").addEventListener("click",()=>{r.querySelector("#tl-btn-solve-q10a").classList.remove("active"),r.querySelector("#tl-btn-solve-q10b").classList.add("active"),r.querySelector("#tl-pane-q10a").classList.remove("active"),r.querySelector("#tl-pane-q10b").classList.add("active"),me()}),r.querySelector("#tl-input-faulty-cf").addEventListener("input",me),r.querySelector("#tl-input-faulty-cu").addEventListener("input",me),r.querySelector("#tl-input-q10a-cm").addEventListener("input",me),r.querySelector("#tl-input-q10b-t").addEventListener("input",me),r.querySelector("#tl-input-q11-r").addEventListener("input",ye);const p=r.querySelector("#tl-input-t-to-l");p&&p.addEventListener("input",ue);const g=r.querySelector("#tl-input-t-to-r");g&&g.addEventListener("input",ue)}if(i.type){const e=r.querySelector(".tl-tabs-container");e&&(e.style.display="none")}return r.querySelectorAll(".tl-tab-btn").forEach(e=>{e.getAttribute("data-tl-tab")===s?e.classList.add("active"):e.classList.remove("active")}),r.querySelectorAll(".tl-tab-content").forEach(e=>{e.id.replace("tl-tab-","")===s?e.classList.add("active"):e.classList.remove("active")}),D(),yt(),ue(),qe=requestAnimationFrame(Fe),r._thermometerLabCleanup=()=>{qe&&cancelAnimationFrame(qe)},r}function jt(t){const i=document.createElement("div");i.className="tool-specific-heat";const s=document.createElement("iframe"),n="./",u=n.endsWith("/")?n:n+"/";function r(){return u+"specific-heat/index.html?lang="+encodeURIComponent(de())}s.src=r(),s.title=t("tools.specificHeat.title")||"Specific Heat Capacity Lab",s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const a=()=>{var x;try{(x=s.contentWindow)==null||x.postMessage({type:"s3phy:lang",lang:de()},"*")}catch{s.src=r()}};return window.addEventListener("s3phy:lang",a),i._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",a),i.appendChild(s),i}function Bt(t){const i=document.createElement("div");i.className="tool-thermal-mixing";const s=document.createElement("iframe"),n="./",u=n.endsWith("/")?n:n+"/";function r(){return u+"thermal-mixing/index.html?lang="+encodeURIComponent(de())}s.src=r(),s.title=t("tools.thermalMixing.title")||"Thermal Mixing Lab",s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const a=()=>{var x;try{(x=s.contentWindow)==null||x.postMessage({type:"s3phy:lang",lang:de()},"*")}catch{s.src=r()}};return window.addEventListener("s3phy:lang",a),i._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",a),i.appendChild(s),i}function Qt(t){const i=document.createElement("div");i.className="tool-change-of-state";const s=document.createElement("iframe"),n="./",u=n.endsWith("/")?n:n+"/";function r(){return u+"change-of-state/index.html?lang="+encodeURIComponent(de())}s.src=r(),s.title=t("tools.changeOfState.title")||"Change of State Lab",s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const a=()=>{var x;try{(x=s.contentWindow)==null||x.postMessage({type:"s3phy:lang",lang:de()},"*")}catch{s.src=r()}};return window.addEventListener("s3phy:lang",a),i._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",a),i.appendChild(s),i}function Nt(t){const i=document.createElement("div");i.className="tool-heat-transfer";const s=document.createElement("iframe"),n="./",u=n.endsWith("/")?n:n+"/";function r(){return u+"heat-transfer/index.html?embed=1&lang="+encodeURIComponent(de())}s.src=r(),s.title=t("tools.heatTransfer.title")||"Heat Transfer Laboratory",s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const a=()=>{var x;try{(x=s.contentWindow)==null||x.postMessage({type:"s3phy:lang",lang:de()},"*")}catch{s.src=r()}};return window.addEventListener("s3phy:lang",a),i._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",a),i.appendChild(s),i}const Me=[{id:"thermometer",titleKey:"topic.thermometer",fileEn:"thermometer-en.pdf",fileZh:"thermometer-zhHant.pdf",tool:"liquid"},{id:"heatInternalEnergy",titleKey:"topic.heatInternalEnergy",fileEn:"heat-internal-energy-en.pdf",fileZh:"heat-internal-energy-zhHant.pdf",tool:"specificHeat"},{id:"changeOfState",titleKey:"topic.changeOfState",fileEn:"change-of-state-en.pdf",fileZh:"change-of-state-zhHant.pdf",tool:"changeOfState"},{id:"heatTransfer",titleKey:"topic.heatTransfer",fileEn:"heat-transfer-en.pdf",fileZh:"heat-transfer-zhHant.pdf",tool:"heatTransfer"}],Oe=["liquidThermometer","faultyThermometer","resistanceThermometer","thermistor"],Vt=[["thermometer","topic.thermometer"]],rt=["liquid","resistance","thermistor","specificHeat","thermalMixing","changeOfState","heatTransfer"],Ut={liquid:t=>De(t,{type:"liquid"}),resistance:t=>De(t,{type:"resistance"}),thermistor:t=>De(t,{type:"thermistor"}),specificHeat:t=>jt(t),thermalMixing:t=>Bt(t),changeOfState:t=>Qt(t),heatTransfer:t=>Nt(t)};function Yt(t){return l({liquid:"tools.thermometerLab.liquid.title",resistance:"tools.thermometerLab.resistance.title",thermistor:"tools.thermometerLab.thermistor.title",specificHeat:"tools.specificHeat.title",thermalMixing:"tools.thermalMixing.title",changeOfState:"tools.changeOfState.title",heatTransfer:"tools.heatTransfer.title"}[t]||t)}function Ae(){return de()==="zh-Hant"?"zhHant":"en"}async function ze(t,i){const s=`./${t}/${i}`;try{return(await fetch(s,{method:"HEAD"})).ok}catch{return!1}}async function nt(t){return ze("notes",t)}function Kt(t){let i="topics",s="liquid",n=0,u="all",r=!1,a=null,x={main:null},E=null;function J(){if(x.main){if(i==="topics"?x.main.innerHTML=$():i==="notes"?x.main.innerHTML=Z():i==="tools"?x.main.innerHTML=F():i==="worksheets"?x.main.innerHTML=pt(l,{topics:Vt,paperTitleKey:"worksheets.paperTitleHeat"}):i==="flashcards"?x.main.innerHTML=te():i==="summary"&&(x.main.innerHTML=X()),i==="notes"&&M(),i==="tools"&&A(),i==="worksheets"){const m=ut.filter(o=>Oe.includes(o.topic));mt(t,m,l,Ae,{topicFilter:(o,d)=>d.includes("thermometer")?Oe.includes(o.topic):d.includes(o.topic)})}i==="flashcards"&&N(),i==="summary"&&ne()}}function P(){a==null||a.destroy(),a=ht(t,{subtitleKey:"strand.heat.subtitle",activeSection:i,onSection:m=>{i==="tools"&&m!=="tools"&&E!=null&&E._thermometerLabCleanup&&(E._thermometerLabCleanup(),E=null),i=m,a.updateSection(i),J()},onLang:()=>P()}),x.main=a.main,a.updateSection(i),J()}function $(){return`
      <section class="panel panel--topic-hub">
        <h2>${l("topics.title")}</h2>
        <p class="lead">${l("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${Me.map(m=>{const o=m.tool?`<button class="btn primary" type="button" data-go-tool="${m.tool}">${l("topic.openTool")}</button>`:`<button class="btn primary" type="button" data-go-section="notes">${l("topic.viewNotes")}</button>`;return`
            <div class="card">
              <h3>${l(m.titleKey)}</h3>
              ${o}
            </div>`}).join("")}
        </div>
      </section>`}function G(m){const o=m.target.closest("[data-go-tool]");if(o){const h=o.getAttribute("data-go-tool");rt.includes(h)?s=h:s="liquid",i="tools",a.updateSection(i),J();return}const d=m.target.closest("[data-go-section]");(d==null?void 0:d.getAttribute("data-go-section"))==="notes"&&(i="notes",a.updateSection(i),J())}function Z(){return`
      <section class="panel">
        <h2>${l("notes.title")}</h2>
        <p class="lead">${l("notes.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${Me.map(m=>`
            <div class="card" data-note-card="${m.id}">
              <h3>${l(`notes.card.${m.id}`)}</h3>
              <div data-note-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function M(){const m=Ae();for(const o of Me){const d=t.querySelector(`[data-note-card="${o.id}"]`);if(!d)continue;const h=d.querySelector("[data-note-body]"),z=m==="zhHant"?o.fileZh:o.fileEn,R=await nt(z),b=`./notes/${z}`;R?h.innerHTML=`
          <iframe class="notes-grid" title="${l(`notes.card.${o.id}`)}" src="${b}"></iframe>
          <p style="margin-top:8px"><a href="${b}" target="_blank" rel="noopener">${l("notes.openPdf")}</a></p>`:h.innerHTML=`<p class="lead">${l("notes.missing")}</p>`}}function F(){return`
      <section class="panel panel--tools">
        <h2>${l("tools.title")}</h2>
        <p class="lead">${l("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${rt.map(m=>`<button type="button" data-tool="${m}" class="${s===m?"active":""}">${Yt(m)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function A(){const m=t.querySelector("[data-tool-list]"),o=t.querySelector("[data-tool-stage]");!m||!o||(m.querySelectorAll("button").forEach(d=>{d.addEventListener("click",()=>{s=d.getAttribute("data-tool"),m.querySelectorAll("button").forEach(h=>h.classList.toggle("active",h.getAttribute("data-tool")===s)),B(o)})}),B(o))}function B(m){m.innerHTML="",E!=null&&E._thermometerLabCleanup&&E._thermometerLabCleanup();const o=Ut[s];o&&(E=o(l),m.appendChild(E))}function te(){return`
      <section class="panel">
        <h2>${l("flashcards.title")}</h2>
        <p class="lead">${l("flashcards.intro")}</p>
        <div class="control" style="margin-bottom:10px">
          <label>${l("flashcards.deck")}</label>
          <select data-flash-deck>
            <option value="all">${l("flashcards.all")}</option>
            <option value="thermometry">${l("flashcards.deck.thermometry")}</option>
            <option value="heatInternalEnergy">${l("flashcards.deck.heatInternalEnergy")}</option>
            <option value="changeOfState">${l("flashcards.deck.changeOfState")}</option>
            <option value="heatTransfer">${l("flashcards.deck.heatTransfer")}</option>
          </select>
        </div>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-flip-card>
            <div class="label" data-flash-label>${l("flashcards.question")}</div>
            <div class="body" data-flash-front></div>
          </div>
          <p class="flashcard-progress muted" data-flash-progress hidden></p>
          <div class="flash-toolbar no-print">
            <button class="btn" type="button" data-flash-prev>${l("flashcards.prev")}</button>
            <button class="btn primary" type="button" data-flash-flip>${l("flashcards.flip")}</button>
            <button class="btn" type="button" data-flash-next>${l("flashcards.next")}</button>
            <button class="btn" type="button" data-flash-shuf>${l("flashcards.shuffle")}</button>
          </div>
        </div>
      </section>`}function K(){return ft.filter(m=>Oe.includes(m.topic))}function ee(m){return!!(m!=null&&m.front)}function ae(m){return`./${String(m).replace(/^\.\//,"")}`}function V(){if(u==="all")return[...Ze,...Je,...et,...tt];if(u==="thermometry")return Ze.slice();if(u==="heatInternalEnergy")return Je.slice();if(u==="changeOfState")return et.slice();if(u==="heatTransfer")return tt.slice();const m=K().filter(o=>o.topic===u);return m.length?m:K()}function U(){const m=V(),o=t.querySelector("[data-flash-progress]");if(!m.length){n=0;const _=t.querySelector("[data-flash-front]"),k=t.querySelector("[data-flip-card]");_&&(_.textContent=""),k&&k.classList.remove("flashcard-surface--image"),o&&(o.hidden=!0,o.textContent="");return}n=Math.max(0,Math.min(n,m.length-1));const d=m[n],h=t.querySelector("[data-flash-front]"),z=t.querySelector("[data-flip-card]"),R=t.querySelector("[data-flash-label]");if(!h||!z)return;if(o&&(o.hidden=!1,o.textContent=l("flashcards.progress").replace("{current}",String(n+1)).replace("{total}",String(m.length))),ee(d)){const _=d.back&&d.back!==d.front;z.classList.add("flashcard-surface--image"),R&&(_?(R.hidden=!1,R.textContent=l(r?"flashcards.answer":"flashcards.question")):R.hidden=!0);const k=r&&d.back?d.back:d.front,I=d.alt||d.title||"";h.innerHTML=`<img src="${ae(k)}" alt="${I.replace(/"/g,"&quot;")}" loading="lazy" />`;return}z.classList.remove("flashcard-surface--image");const b=Ae(),y=d[b]||d.en;R&&(R.hidden=!1,R.textContent=l(r?"flashcards.answer":"flashcards.question")),h.textContent=r?y.a:y.q}function N(){const m=t.querySelector("[data-flash-deck]");m.value=u,m.addEventListener("change",()=>{u=m.value,n=0,r=!1,U()}),t.querySelector("[data-flip-card]").addEventListener("click",()=>{r=!r,U()}),t.querySelector("[data-flash-flip]").addEventListener("click",o=>{o.stopPropagation(),r=!r,U()}),t.querySelector("[data-flash-prev]").addEventListener("click",()=>{const o=V();n=(n-1+o.length)%o.length,r=!1,U()}),t.querySelector("[data-flash-next]").addEventListener("click",()=>{const o=V();n=(n+1)%o.length,r=!1,U()}),t.querySelector("[data-flash-shuf]").addEventListener("click",()=>{const o=V();n=Math.floor(Math.random()*o.length),r=!1,U()}),U()}function X(){return`
      <section class="panel">
        <h2>${l("summary.title")}</h2>
        <p class="lead">${l("summary.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-summary-grid>
          ${Me.map(m=>`
            <div class="card" data-summary-card="${m.id}">
              <h3>${l(`summary.item.${m.id}`)}</h3>
              <div data-summary-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function ne(){const m=Ae();for(const o of Me){const d=t.querySelector(`[data-summary-card="${o.id}"]`);if(!d)continue;const h=d.querySelector("[data-summary-body]");if(o.id==="thermometer"){const y=await ze("summary","thermometer.webp"),_="./summary/thermometer.webp";y?h.innerHTML=`
          <img class="summary-thumb" src="${_}" alt="${l("summary.item.thermometer")}" loading="lazy" />
          <p style="margin-top:8px"><a href="${_}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:h.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}if(o.id==="heatInternalEnergy"){const y=await ze("summary","heat-internal-energy.webp"),_="./summary/heat-internal-energy.webp";y?h.innerHTML=`
          <img class="summary-thumb" src="${_}" alt="${l("summary.item.heatInternalEnergy")}" loading="lazy" />
          <p style="margin-top:8px"><a href="${_}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:h.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}if(o.id==="changeOfState"){const y=await ze("summary","change-of-state.webp"),_="./summary/change-of-state.webp";y?h.innerHTML=`
          <img class="summary-thumb" src="${_}" alt="${l("summary.item.changeOfState")}" loading="lazy" />
          <p style="margin-top:8px"><a href="${_}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:h.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}if(o.id==="heatTransfer"){const y=await ze("summary","heat-transfer.webp"),_="./summary/heat-transfer.webp";y?h.innerHTML=`
          <img class="summary-thumb" src="${_}" alt="${l("summary.item.heatTransfer")}" loading="lazy" />
          <p style="margin-top:8px"><a href="${_}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:h.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}const z=m==="zhHant"?o.fileZh:o.fileEn,R=await nt(z),b=`./notes/${z}`;R?h.innerHTML=`
          <iframe class="notes-grid" title="${l(`summary.item.${o.id}`)}" src="${b}"></iframe>
          <p style="margin-top:8px"><a href="${b}" target="_blank" rel="noopener">${l("summary.download")}</a></p>`:h.innerHTML=`<p class="lead">${l("summary.missing")}</p>`}}const Y=()=>P(),D=m=>G(m);return window.addEventListener("s3phy:lang",Y),t.addEventListener("click",D),P(),()=>{window.removeEventListener("s3phy:lang",Y),t.removeEventListener("click",D),E!=null&&E._thermometerLabCleanup&&E._thermometerLabCleanup(),a==null||a.destroy()}}const it={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};kt();const ot="s3phy_splash_seen",bt={optics:Dt,heat:Kt};let Re=null,_e=null;function Xt(){const t=location.hash.match(/^#\/(\w+)/),i=t==null?void 0:t[1];return i&&Object.prototype.hasOwnProperty.call(bt,i)?i:null}function Zt(){const t=`${location.pathname}${location.search}`;history.replaceState(null,"",t)}function gt(t){Re==null||Re(),Re=null,_e==null||_e(),_e=null;const i=document.getElementById("app");if(!i)return;if(i.innerHTML="",!t){location.hash&&Zt(),_e=St(i);return}const s=`#/${t}`;if(location.hash!==s){location.hash=s;return}Re=bt[t](i)??null}function vt(){gt(Xt())}function Jt(){return"./images/uniplus-logo.png"}function ea(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${Jt()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${l("splash.start")}</button>
      </div>
    </div>
  `,t}function ta(t,i){const s=[...it.en,...it.zhHant],n=()=>{if(!t.parentElement)return;const u=document.createElement("div");u.className="splash-danmaku-item",u.textContent=s[Math.floor(Math.random()*s.length)];const r=Math.random()*85+5,a=Math.random()*.8+.9,x=Math.random()*12+10;u.style.top=`${r}%`,u.style.fontSize=`${a}rem`,u.style.animationDuration=`${x}s`,i.appendChild(u),u.addEventListener("animationend",()=>u.remove()),window.setTimeout(n,1500+Math.random()*1e3)};for(let u=0;u<4;u+=1)window.setTimeout(n,u*1e3)}function aa(t){const i=t.querySelector("#splashLogoWrap"),s=t.querySelector("#splashDanmaku"),n=t.querySelector("#splashStartWrap");window.setTimeout(()=>i==null?void 0:i.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{s==null||s.classList.add("splash-danmaku--visible"),n==null||n.classList.add("splash-start-wrap--in"),s&&ta(t,s)},1600)}function st(){vt()}function ra(){let t=!1;try{t=sessionStorage.getItem(ot)==="1"}catch{}if(t){st();return}const i=ea();document.body.insertBefore(i,document.body.firstChild),aa(i);const s=i.querySelector("#splashStart"),n=()=>{i.remove(),st()};s.addEventListener("click",()=>{try{sessionStorage.setItem(ot,"1")}catch{}i.classList.add("splash--hide"),i.addEventListener("transitionend",n,{once:!0}),window.setTimeout(n,480)})}window.addEventListener("hashchange",vt);window.addEventListener("s3phy:strand",t=>{gt(t.detail??null)});ra();
