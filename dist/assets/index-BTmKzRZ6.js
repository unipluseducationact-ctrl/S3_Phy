(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const $e={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"S3 Physics — Optics & Heat","strands.title":"Choose a strand","strands.intro":"Select Optics or Heat to open that learning hub.","strand.optics.title":"Optics","strand.optics.desc":"Light and waves: reflection, refraction, lenses, and electromagnetic waves.","strand.optics.subtitle":"Optics — light and waves","strand.heat.title":"Heat","strand.heat.desc":"Temperature, heat transfer, and thermal physics (interactive labs, worksheets, flashcards).","strand.heat.subtitle":"Heat — temperature and energy transfer","strand.open":"Open strand","strand.back":"All strands","heat.section.empty":"Heat strand content.","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.refractionSnell":"Refraction and Snell’s law","topic.tir":"Total internal reflection","topic.refractionTir":"Refraction, Snell’s law & total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (?θ_ray = 2θ_mirror).","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 ? θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refractionTir.title":"Prison Break lab — refraction, Snell & TIR","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.lens.title":"Lens ray sketch","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.rgbMixer.title":"RGB colour mixer","tools.rgbMixer.intro":"Additive mixing: red, green and blue light combine on screens. Drag sliders or use presets.","tools.rgbMixer.canvas":"RGB light overlap diagram","tools.rgbMixer.controls":"Colour controls","tools.rgbMixer.red":"Red","tools.rgbMixer.green":"Green","tools.rgbMixer.blue":"Blue","tools.rgbMixer.preview":"Mixed colour preview","tools.rgbMixer.presets":"Presets","tools.rgbMixer.presetRed":"Red","tools.rgbMixer.presetGreen":"Green","tools.rgbMixer.presetBlue":"Blue","tools.rgbMixer.presetYellow":"Yellow","tools.rgbMixer.presetCyan":"Cyan","tools.rgbMixer.presetMagenta":"Magenta","tools.rgbMixer.presetWhite":"White","tools.rgbMixer.presetBlack":"Black","topic.rgbMixer":"RGB colour mixing","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Explore wavelength, frequency, and simulation labs","worksheets.title":"Worksheet generator","worksheets.intro":"Generate practice worksheets with online checking, hints, and export.","worksheets.count":"Number of questions","worksheets.topics":"Topics","worksheets.generate":"Generate worksheet","worksheets.printPractice":"Print practice","worksheets.printAnswers":"Print answer key","worksheets.empty":"Click Generate to create questions.","worksheets.tabPractice":"Practice","worksheets.tabAnswer":"Answer key","worksheets.paperTitle":"S3 Optics — Multiple choice worksheet","worksheets.score":"Score","worksheets.hint":"Hint","worksheets.answer":"Answer","worksheets.today":"Today","worksheets.date":"Date","worksheets.exportWord":"Download Word","worksheets.exportWordAnswers":"Download answers (Word)","worksheets.sessionSummary":"Session summary","worksheets.firstTry":"Correct on first try","worksheets.revisionSuggestions":"Revision suggestions","worksheets.revisionExcellent":"Excellent — keep revising with flashcards.","worksheets.revisionGood":"Good progress — review any missed sections.","worksheets.revisionFair":"Fair — revisit summary notes for weak topics.","worksheets.revisionLow":"Needs work — study summaries and try again.","worksheets.weakSections":"Sections to review","flashcards.title":"Flashcards","flashcards.intro":"Study with spaced repetition — cards you find harder appear more often in later rounds. Picture decks for reflection, refraction, TIR, EM waves, and lenses.","flashcards.progress":"Card {current} of {total}","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.all":"All topics","flashcards.deck.refractionTir":"Refraction & TIR","flashcards.mode.sequence":"Sequence","flashcards.mode.random":"Random","flashcards.again":"Again","flashcards.gotIt":"Got it","flashcards.round":"Round {round} · {total} cards","flashcards.flipFirst":"Tap the card, press Space, or Flip to reveal the answer first.","flashcards.hint.rated":"← Again · Got it →  (or keys 1 / 2)","flashcards.summary.title":"Round {round} complete","flashcards.summary.stats":"{total} cards studied · Again {again} · Got it {gotIt} · Next {neutral}","flashcards.summary.keep":"{count} to keep practising","flashcards.summary.confident":"{count} confident","flashcards.summary.nextRound":"Next round","flashcards.summary.restart":"Restart session","flashcards.summary.complete":"Session complete","flashcards.summary.completeStats":"Great work — you have finished all scheduled copies.","summary.title":"Topic summaries","summary.intro":"HKDSE summary sheets (PDF or image). Preview below or open in a new tab.","summary.viewImage":"Open full image","summary.download":"Open / download PDF","summary.missing":"Summary PDF not found.","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection","summary.item.refraction":"Refraction and Snell’s law","summary.item.tir":"Total internal reflection","summary.item.convex":"Convex lens","summary.item.concave":"Concave lens","summary.item.em":"Electromagnetic waves","topic.thermometer":"Thermometer","topic.heatInternalEnergy":"Heat and internal energy","topic.changeOfState":"Change of state","topic.heatTransfer":"Heat transfer","topic.thermometerLab":"Thermometry & Calibration Lab","topic.viewNotes":"View notes","notes.card.thermometer":"Ch.1.1 Thermometer","notes.card.heatInternalEnergy":"Ch.1.2 Heat and internal energy","notes.card.changeOfState":"Ch.1.3 Change of state","notes.card.heatTransfer":"Ch.1.4 Heat transfer process","summary.item.thermometer":"Thermometer","summary.item.heatInternalEnergy":"Heat and internal energy","summary.item.changeOfState":"Change of state","summary.item.heatTransfer":"Heat transfer","flashcards.deck.thermometry":"Thermometry (all types)","flashcards.deck.heatInternalEnergy":"Heat and internal energy","flashcards.deck.changeOfState":"Change of state","flashcards.deck.heatTransfer":"Heat transfer","tools.thermometerLab.title":"Thermometry & Calibration Lab","tools.specificHeat.title":"Specific Heat Capacity Lab","tools.thermalMixing.title":"Thermal Mixing Lab","tools.changeOfState.title":"Change of State Lab","tools.heatTransfer.title":"Heat Transfer Laboratory","tools.thermometerLab.subtitle":"Interactive study companion for liquid-in-glass, platinum resistance, and thermistor thermometers.","tools.thermometerLab.liquid.title":"Liquid-in-Glass Thermometer","tools.thermometerLab.liquid.subtitle":"Explore the effects of bulb volume, capillary bore, and liquid type on sensitivity and response time.","tools.thermometerLab.resistance.title":"Platinum Resistance Thermometer","tools.thermometerLab.resistance.subtitle":"Investigate how platinum resistance varies linearly with temperature and solve calibration problems.","tools.thermometerLab.thermistor.title":"NTC Thermistor","tools.thermometerLab.thermistor.subtitle":"Study the non-linear resistance-temperature relationship of NTC thermistors and live beta calculations.","tools.thermometerLab.labels.show":"Show Structure Labels","tools.thermometerLab.labels.hide":"Hide Structure Labels","tools.thermometerLab.labels.thinWall":"Thin glass wall (fast heat transfer)","tools.thermometerLab.labels.largeBulb":"Large bulb (contains more liquid, increases sensitivity)","tools.thermometerLab.labels.narrowBore":"Narrow capillary bore (liquid rises higher, increases sensitivity)","tools.thermometerLab.labels.meniscus":"Meniscus (reading point)","tools.thermometerLab.labels.platinumCoil":"Platinum coil (resistance increases linearly with temp)","tools.thermometerLab.labels.metalSheath":"Metal sheath (protects & conducts heat quickly)","tools.thermometerLab.labels.semiconductorBead":"Semiconductor bead (resistance decreases exponentially with temp)","tools.thermometerLab.labels.leads":"Connecting leads","tools.thermometerLab.faulty.dualScale":"Dual-Scale Comparison Diagram","tools.thermometerLab.faulty.trueScale":"True Scale (°C)","tools.thermometerLab.faulty.faultyScale":"Faulty Scale (°C)","tools.thermometerLab.paramSettings":"Parameter settings","tools.thermometerLab.faultySolver":"Faulty thermometer solver","tools.thermometerLab.resistanceSolver":"Resistance-to-temperature solver","worksheets.paperTitleHeat":"S3 Heat — Multiple choice worksheet"},Tt={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"中三物理 — 光與熱","strands.title":"選擇單元","strands.intro":"選擇光學或熱學，進入該學習中心。","strand.optics.title":"光學","strand.optics.desc":"光與波動：反射、折射、透鏡與電磁波。","strand.optics.subtitle":"光學 — 光與波動","strand.heat.title":"熱學","strand.heat.desc":"溫度、熱傳入與熱力學（互動實驗室。工作紙、閃卡）。","strand.heat.subtitle":"熱學 — 溫度與熱傳入","strand.open":"進入單元","strand.back":"全部單元","heat.section.empty":"熱學單元內容。","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.refractionSnell":"折射與司乃耳定律","topic.tir":"全反射","topic.refractionTir":"折射、司乃耳定律與全內反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refractionTir.title":"逃獄遊戲 — 折射、司乃耳與全內反射","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.lens.title":"透鏡 — 光線示意","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.rgbMixer.title":"RGB 顏色混合","tools.rgbMixer.intro":"加法混色：紅、綠、藍光在蟻幕上疊加。拖動滑棒或使用預設。","tools.rgbMixer.canvas":"RGB 光線疊加示意圖","tools.rgbMixer.controls":"顏色控制","tools.rgbMixer.red":"紅","tools.rgbMixer.green":"綠","tools.rgbMixer.blue":"藍","tools.rgbMixer.preview":"混合顏色預覽","tools.rgbMixer.presets":"預設","tools.rgbMixer.presetRed":"紅","tools.rgbMixer.presetGreen":"綠","tools.rgbMixer.presetBlue":"藍","tools.rgbMixer.presetYellow":"黃","tools.rgbMixer.presetCyan":"青","tools.rgbMixer.presetMagenta":"品紅","tools.rgbMixer.presetWhite":"白","tools.rgbMixer.presetBlack":"黑","topic.rgbMixer":"RGB 顏色混合","tools.em.title":"電磁波譜","tools.em.pick":"探索波長、頻率與模擬實驗","worksheets.title":"工作紙產生器","worksheets.intro":"產生練習工作紙，支援線上核對、提示與匯出。","worksheets.count":"題數","worksheets.topics":"課題","worksheets.generate":"產生工作紙","worksheets.printPractice":"列印練習","worksheets.printAnswers":"列印答案","worksheets.empty":"按產生工作紙建立題目。","worksheets.tabPractice":"練習模式","worksheets.tabAnswer":"答案","worksheets.paperTitle":"S3 光學 — 多項選擇題工作紙","worksheets.score":"得分","worksheets.hint":"提示","worksheets.answer":"答案","worksheets.today":"今日","worksheets.date":"日期","worksheets.exportWord":"下載 Word","worksheets.exportWordAnswers":"下載答案（Word）","worksheets.sessionSummary":"本次練習摘要","worksheets.firstTry":"首次即答對","worksheets.revisionSuggestions":"複習建議","worksheets.revisionExcellent":"優秀 — 繼續用閃卡複習。","worksheets.revisionGood":"良好 — 重溫錯題所屬節。","worksheets.revisionFair":"一般 — 回顧總結針對弱項。","worksheets.revisionLow":"需努力 — 先温習總結再試。","worksheets.weakSections":"建議複習節次","flashcards.title":"閃卡","flashcards.intro":"使用間隔重複習—難記的卡片在下一輪會更頻繁出現。反射、折射、全內反射、電磁波、凸透鏡與凹透鏡課題使用圖片閃卡。","flashcards.progress":"第 {current} 張，共 {total} 張","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.all":"全部課題","flashcards.deck.refractionTir":"折射與全內反射","flashcards.mode.sequence":"順序","flashcards.mode.random":"隨機","flashcards.again":"再來","flashcards.gotIt":"懂了","flashcards.round":"第 {round} 輪 · {total} 張卡","flashcards.flipFirst":"請先點擊卡片、按空白鍵或翻面查看答案。","flashcards.hint.rated":"← 再來 · 懂了 →（或按 1 / 2）","flashcards.summary.title":"第 {round} 輪完成","flashcards.summary.stats":"共 {total} 張 · 再來 {again} · 懂了 {gotIt} · 下一張 {neutral}","flashcards.summary.keep":"{count} 張需繼續練習","flashcards.summary.confident":"{count} 張已掌握","flashcards.summary.nextRound":"下一輪","flashcards.summary.restart":"重新開始","flashcards.summary.complete":"練習完成","flashcards.summary.completeStats":"很好！你已完成所有排程的卡片。","summary.title":"課題總結","summary.intro":"HKDSE 總結表（PDF 或圖片）。可於下方預覽，或新分頁開啟。","summary.viewImage":"開啟完整圖片","summary.download":"開啟 / 下載 PDF","summary.missing":"找不到總結 PDF。","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射","summary.item.refraction":"折射與司乃耳定律","summary.item.tir":"全內反射","summary.item.convex":"凸透鏡","summary.item.concave":"凹透鏡","summary.item.em":"電磁波","topic.thermometer":"溫度計","topic.heatInternalEnergy":"熱與內能","topic.changeOfState":"物態變化","topic.heatTransfer":"熱傳入","topic.thermometerLab":"溫度計與校準實驗室","topic.viewNotes":"查閱筆記","notes.card.thermometer":"Ch.1.1 溫度計","notes.card.heatInternalEnergy":"Ch.1.2 熱與內能","notes.card.changeOfState":"Ch.1.3 物態變化","notes.card.heatTransfer":"Ch.1.4 熱傳入","summary.item.thermometer":"溫度計","summary.item.heatInternalEnergy":"熱與內能","summary.item.changeOfState":"物態變化","summary.item.heatTransfer":"熱傳入","flashcards.deck.thermometry":"溫度計（各類）","flashcards.deck.heatInternalEnergy":"熱與內能","flashcards.deck.changeOfState":"物態變化","flashcards.deck.heatTransfer":"熱傳入","tools.thermometerLab.title":"溫度計與校準實驗室","tools.specificHeat.title":"比熱容量實驗室","tools.thermalMixing.title":"熱混合實驗室","tools.changeOfState.title":"物態變化實驗室","tools.heatTransfer.title":"熱的轉移實驗室","tools.thermometerLab.subtitle":"液體玻璃、鈐電阻及熱敏電阻溫度計的互動學習伴侶。","tools.thermometerLab.liquid.title":"液體玻璃溫度計","tools.thermometerLab.liquid.subtitle":"探索玻璃泡容積、毛細管內外徑和液體種類對靉敏度及反應時間的影響。","tools.thermometerLab.resistance.title":"鈐電阻溫度計","tools.thermometerLab.resistance.subtitle":"研究鈐電阻如何隨溫度呈線性變化，並解決溫度校準問題。","tools.thermometerLab.thermistor.title":"NTC 熱敏電阻溫度計","tools.thermometerLab.thermistor.subtitle":"學習負溫度係數（NTC）熱敏電阻的非線性電阻-溫度關係，並進行實時 Beta 計算。","tools.thermometerLab.labels.show":"顯示結構標註","tools.thermometerLab.labels.hide":"隱藏結構標註","tools.thermometerLab.labels.thinWall":"薄玻璃壁 (快速傳熱)","tools.thermometerLab.labels.largeBulb":"大玻璃泡 (容納更多液體，提高靉敏度)","tools.thermometerLab.labels.narrowBore":"細毛細管 (液柱升得更高，提高靉敏度)","tools.thermometerLab.labels.meniscus":"彎月面 (讀數位置)","tools.thermometerLab.labels.platinumCoil":"鈐絲線圈 (電阻隨溫度線性增加)","tools.thermometerLab.labels.metalSheath":"金屬保護套 (保護並快速導熱)","tools.thermometerLab.labels.semiconductorBead":"半導體小珠 (電阻隨溫度指數級減少)","tools.thermometerLab.labels.leads":"連接導線","tools.thermometerLab.faulty.dualScale":"雙刻度對比示意圖","tools.thermometerLab.faulty.trueScale":"標準溫標 (°C)","tools.thermometerLab.faulty.faultyScale":"偏差溫標 (°C)","tools.thermometerLab.paramSettings":"參數設定","tools.thermometerLab.faultySolver":"故障溫度計求解器","tools.thermometerLab.resistanceSolver":"電阻求溫度求解器","worksheets.paperTitleHeat":"S3 熱學 — 多項選擇題工作紙"},ft="s3phy.lang",ht={en:$e,"zh-Hant":Tt};let Ie="en";function zt(){try{const t=localStorage.getItem(ft);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function Rt(){Ie=zt()}function pt(t){if(ht[t]){Ie=t;try{localStorage.setItem(ft,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function oe(){return Ie}function l(t){const n=ht[Ie]||$e;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:Object.prototype.hasOwnProperty.call($e,t)?$e[t]:t}const Lt=.78;function We(){const t=document.documentElement,n=window.innerWidth,o=Math.max(window.innerHeight,1),i=n/o;let s=1;if(n<=1360?s=.88:n<=1500&&(s=.94),n>1700&&i>1.7){const a=Math.min(.07,(i-1.7)*.09),r=Math.min(.05,(n-1700)/1800*.05);s-=a+r}o<=700&&(s=Math.min(s,.82)),s=Math.max(Lt,Math.min(1,s)),t.style.setProperty("--hub-scale",s.toFixed(3))}function Mt(){return We(),window.addEventListener("resize",We),()=>window.removeEventListener("resize",We)}const _t=[{id:"optics",titleKey:"strand.optics.title",descKey:"strand.optics.desc"},{id:"heat",titleKey:"strand.heat.title",descKey:"strand.heat.desc"}];function Ht(t){function n(){t.innerHTML=`
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
          ${_t.map(({id:s,titleKey:a,descKey:r})=>`
            <div class="card">
              <h3>${l(a)}</h3>
              <p>${l(r)}</p>
              <button class="btn primary" type="button" data-strand="${s}">${l("strand.open")}</button>
            </div>`).join("")}
        </div>
      </section>
    `;const i=t.querySelector("[data-lang]");i.innerHTML=`
      <button type="button" data-set-lang="en" class="${oe()==="en"?"active":""}">${l("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${oe()==="zh-Hant"?"active":""}">${l("lang.zhHant")}</button>
    `,i.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{pt(s.getAttribute("data-set-lang")),n()})}),t.querySelectorAll("[data-strand]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-strand");window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:a}))})})}const o=()=>n();return window.addEventListener("s3phy:lang",o),n(),()=>{window.removeEventListener("s3phy:lang",o)}}const mt=JSON.parse(`[{"topic":"reflection","section":"1.1 Law of reflection","en":{"q":"According to the law of reflection, the angle of incidence and the angle of reflection are ____.","choices":["equal","complementary","supplementary","unrelated"],"a":0,"exp":"Summary: i = r for all reflection.","hint":"Summary: i = r for all reflection."},"zhHant":{"q":"根據反射定律，入射角與反射角的關係是____。","choices":["相等","互餘","互補","無關"],"a":0,"exp":"總結：入射角 = 反射角。","hint":"總結：入射角 = 反射角。"}},{"topic":"reflection","section":"1.1 Angles from normal","en":{"q":"The angle of incidence is measured between the incident ray and the ____.","choices":["mirror surface","normal","reflected ray","principal axis"],"a":1,"exp":"Angles are measured from the normal, not the surface.","hint":"Angles are measured from the normal, not the surface."},"zhHant":{"q":"入射角是入射光線與哪一條線的夾角？","choices":["鏡面","法線","反射光線","主軸"],"a":1,"exp":"角度應與法線量度，不是與鏡面。","hint":"角度應與法線量度，不是與鏡面。"}},{"topic":"reflection","section":"2.1 Regular reflection","en":{"q":"Regular (specular) reflection occurs mainly on a ____ surface.","choices":["rough","smooth and flat","curved only","black"],"a":1,"exp":"Smooth polished surfaces give parallel reflected rays and clear images.","hint":"Smooth polished surfaces give parallel reflected rays and clear images."},"zhHant":{"q":"規則反射主要發生在____表面。","choices":["粗糙","光滑平坦","只有曲面","黑色"],"a":1,"exp":"光滑表面反射光線互相平行，可形成清晰像。","hint":"光滑表面反射光線互相平行，可形成清晰像。"}},{"topic":"reflection","section":"2.2 Diffuse reflection","en":{"q":"Diffuse reflection occurs on a ____ surface and does not form a clear image.","choices":["smooth","rough","silvered","underwater"],"a":1,"exp":"Rough surfaces scatter reflected rays in many directions.","hint":"Rough surfaces scatter reflected rays in many directions."},"zhHant":{"q":"漫反射發生在____表面，不能形成清晰像。","choices":["光滑","粗糙","鍍銀","水中"],"a":1,"exp":"粗糙表面使反射光向各方向散射。","hint":"粗糙表面使反射光向各方向散射。"}},{"topic":"reflection","section":"3 Plane mirror — virtual image","en":{"q":"The image formed by a plane mirror is always ____.","choices":["real","virtual","inverted","enlarged"],"a":1,"exp":"Plane mirror images are virtual; rays only appear to meet behind the mirror.","hint":"Plane mirror images are virtual."},"zhHant":{"q":"平面鏡所成的像必定是____。","choices":["實像","虛像","倒立","放大"],"a":1,"exp":"平面鏡成虛像，光線延長線在鏡後相交。","hint":"平面鏡成虛像，光線延長線在鏡後相交。"}},{"topic":"reflection","section":"3 Plane mirror — size and orientation","en":{"q":"A plane mirror image is ____ the object and is laterally inverted.","choices":["smaller than","the same size as","larger than","at infinity from"],"a":1,"exp":"Image height equals object height; left and right appear swapped.","hint":"Image height equals object height."},"zhHant":{"q":"平面鏡像與物體比較，大小____，且左右倒轉。","choices":["較小","相同","較大","在無窮遠"],"a":1,"exp":"像高與物高相同，並有左右倒轉。","hint":"像高與物高相同，並有左右倒轉。"}},{"topic":"reflection","section":"3 Object and image distance","en":{"q":"For a plane mirror, the object distance u and the image distance v satisfy ____.","choices":["v = 2u","v = u","v = u/2","v = 0"],"a":1,"exp":"The image is as far behind the mirror as the object is in front.","hint":"The image is as far behind the mirror as the object is in front."},"zhHant":{"q":"平面鏡的物距 u 與像距 v 滿足____。","choices":["v = 2u","v = u","v = u/2","v = 0"],"a":1,"exp":"像距等於物距（虛像在鏡後）。","hint":"像距等於物距（虛像在鏡後）。"}},{"topic":"reflection","section":"Minimum mirror length","en":{"q":"The minimum length of a plane mirror for a person to see their full height is about ____ of their height.","choices":["one quarter","one half","three quarters","the full"],"a":1,"exp":"Summary: minimum mirror length ≈ ½ × height (eyes to feet).","hint":"Summary: minimum mirror length ≈ ½ × height (eyes to feet)."},"zhHant":{"q":"要看見全身，平面鏡的最小長度約為身高的____。","choices":["四分之一","二分之一","四分之三","與身高相同"],"a":1,"exp":"總結：最小鏡長約為身高的一半。","hint":"總結：最小鏡長約為身高的一半。"}},{"topic":"reflection","section":"Light rays","en":{"q":"Light from a very distant object is usually treated as ____ rays.","choices":["converging","diverging","parallel","random"],"a":2,"exp":"Far-away rays arriving at the eye are nearly parallel.","hint":"Far-away rays arriving at the eye are nearly parallel."},"zhHant":{"q":"很遠的物體發出的光線通常可視為____。","choices":["會聚","發散","平行","雜亂"],"a":2,"exp":"遠距離光線接近平行。","hint":"遠距離光線接近平行。"}},{"topic":"reflection","section":"Rotating mirror","en":{"q":"If a plane mirror rotates through angle θ (incident ray fixed), the reflected ray turns through ____.","choices":["θ","2θ","θ/2","90° − θ"],"a":1,"exp":"Mirror rotation θ changes the reflected direction by 2θ.","hint":"Mirror rotation θ changes the reflected direction by 2θ."},"zhHant":{"q":"平面鏡轉動 θ（入射光線不變），反射光線方向改變____。","choices":["θ","2θ","θ/2","90° − θ"],"a":1,"exp":"鏡面轉 θ，反射光偏轉 2θ。","hint":"鏡面轉 θ，反射光偏轉 2θ。"}},{"topic":"refraction","section":"Snell's law","en":{"q":"Snell's law is written as ____.","choices":["n1 sin i = n2 sin r","n1 cos i = n2 cos r","sin i = sin r","i = r"],"a":0,"exp":"n1 sin i = n2 sin r relates angles and refractive indices.","hint":"n1 sin i = n2 sin r relates angles and refractive indices."},"zhHant":{"q":"司乃耳定律的公式是____。","choices":["n1 sin i = n2 sin r","n1 cos i = n2 cos r","sin i = sin r","i = r"],"a":0,"exp":"n1 sin i = n2 sin r 連結折射率與角度。","hint":"n1 sin i = n2 sin r 連結折射率與角度。"}},{"topic":"refraction","section":"Bending toward normal","en":{"q":"When light enters an optically denser medium (n2 > n1), it bends ____ the normal.","choices":["away from","toward","along","parallel to"],"a":1,"exp":"In a denser medium the ray is closer to the normal.","hint":"In a denser medium the ray is closer to the normal."},"zhHant":{"q":"光進入光密介質（n2 > n1）時，向法線哪方偏折？","choices":["遠離","靠近","沿法線","平行法線"],"a":1,"exp":"進入光密介質時光線較靠近法線。","hint":"進入光密介質時光線較靠近法線。"}},{"topic":"refraction","section":"Refractive index","en":{"q":"The refractive index n of a medium is defined as n = ____.","choices":["v/c","c/v","sin r/sin i","i/r"],"a":1,"exp":"n = speed of light in vacuum / speed in the medium.","hint":"n = speed of light in vacuum / speed in the medium."},"zhHant":{"q":"折射率 n 的定義為 n = ____。","choices":["v/c","c/v","sin r/sin i","i/r"],"a":1,"exp":"n = 真空光速 / 介質中光速。","hint":"n = 真空光速 / 介質中光速。"}},{"topic":"refraction","section":"Apparent depth","en":{"q":"When viewing an object under water from above, it appears ____ than its real depth.","choices":["deeper","shallower","at the same depth","inverted"],"a":1,"exp":"Refraction at the surface makes the image appear closer (apparent depth < real depth).","hint":"Refraction at the surface makes the image appear closer (apparent depth < real depth)."},"zhHant":{"q":"從水上俯視水底物體，它看起來比實際深度____。","choices":["更深","較淺","相同","倒立"],"a":1,"exp":"折射使視深小於實深。","hint":"折射使視深小於實深。"}},{"topic":"refraction","section":"Speed in medium","en":{"q":"In a medium with higher refractive index, light travels ____.","choices":["faster","slower","at the same speed as in vacuum","only as transverse waves"],"a":1,"exp":"Larger n means smaller speed v = c/n.","hint":"Larger n means smaller speed v = c/n."},"zhHant":{"q":"折射率較大的介質中，光速____。","choices":["較快","較慢","與真空中相同","只有橫波"],"a":1,"exp":"n 越大，v = c/n 越小。","hint":"n 越大，v = c/n 越小。"}},{"topic":"refraction","section":"Normal incidence","en":{"q":"If light strikes a boundary at normal incidence (i = 0°), it ____.","choices":["undergoes TIR","passes straight through without bending","is fully absorbed","doubles its speed"],"a":1,"exp":"At i = 0°, the refracted ray continues along the normal.","hint":"At i = 0°, the refracted ray continues along the normal."},"zhHant":{"q":"光垂直入射介面（i = 0°）時，____。","choices":["發生全內反射","不偏折直穿過","完全被吸收","速度加倍"],"a":1,"exp":"i = 0° 時折射光沿法線方向。","hint":"i = 0° 時折射光沿法線方向。"}},{"topic":"refraction","section":"Less dense medium","en":{"q":"When light passes from a denser to a less dense medium, it bends ____ the normal.","choices":["toward","away from","along","not at all"],"a":1,"exp":"Leaving a denser medium, the ray moves away from the normal.","hint":"Leaving a denser medium, the ray moves away from the normal."},"zhHant":{"q":"光由光密進入光疏介質時，向法線____偏折。","choices":["靠近","遠離","沿法線","不偏折"],"a":1,"exp":"進入光疏介質時光線遠離法線。","hint":"進入光疏介質時光線遠離法線。"}},{"topic":"refraction","section":"Reversibility","en":{"q":"If the direction of light along a refracted path is reversed, the ray ____.","choices":["follows a different path","retraces the same path","always reflects","stops"],"a":1,"exp":"Refraction obeys reversibility of light rays.","hint":"Refraction obeys reversibility of light rays."},"zhHant":{"q":"沿折射光路反向傳播時，光線____。","choices":["走另一條路","沿原路返回","必定反射","停止"],"a":1,"exp":"折射符合光路可逆性。","hint":"折射符合光路可逆性。"}},{"topic":"refraction","section":"n of air","en":{"q":"For most calculations in air, the refractive index is taken as approximately ____.","choices":["0","1","1.5","2.4"],"a":1,"exp":"Air ≈ 1; glass and water have n > 1.","hint":"Air ≈ 1; glass and water have n > 1."},"zhHant":{"q":"在空氣中的計算通常取折射率約為____。","choices":["0","1","1.5","2.4"],"a":1,"exp":"空氣 n ≈ 1。","hint":"空氣 n ≈ 1。"}},{"topic":"refraction","section":"Angle increases in rarer medium","en":{"q":"When light enters a rarer medium from a denser one, the angle in the rarer medium is ____ the angle of incidence in the denser medium.","choices":["smaller than","equal to","larger than","always zero"],"a":2,"exp":"From Snell's law, sin r > sin i when n2 < n1.","hint":"From Snell's law, sin r > sin i when n2 < n1."},"zhHant":{"q":"光由光密進入光疏時，光疏中的折射角與光密中的入射角相比____。","choices":["較小","相等","較大","恆為零"],"a":2,"exp":"n2 < n1 時 sin r > sin i。","hint":"n2 < n1 時 sin r > sin i。"}},{"topic":"tir","section":"Condition for TIR","en":{"q":"Total internal reflection can occur when light travels from ____ to ____.","choices":["rare to dense","dense to rare","air to air","vacuum to vacuum"],"a":1,"exp":"TIR needs light incident in the optically denser medium.","hint":"TIR needs light incident in the optically denser medium."},"zhHant":{"q":"全內反射發生時，光由____進入____。","choices":["光疏到光密","光密到光疏","空氣到空氣","真空到真空"],"a":1,"exp":"須從光密介質射向光疏介質。","hint":"須從光密介質射向光疏介質。"}},{"topic":"tir","section":"Critical angle formula","en":{"q":"The critical angle C when light goes from medium 1 (denser) to medium 2 (rarer) satisfies sin C = ____.","choices":["n1/n2","n2/n1","n1 + n2","1"],"a":1,"exp":"sin C = n_rare / n_dense (second medium / first).","hint":"sin C = n_rare / n_dense (second medium / first)."},"zhHant":{"q":"光由介質 1（光密）到介質 2（光疏）的臨界角 C 滿足 sin C = ____。","choices":["n1/n2","n2/n1","n1 + n2","1"],"a":1,"exp":"sin C = n疏 / n密。","hint":"sin C = n疏 / n密。"}},{"topic":"tir","section":"Angle for TIR","en":{"q":"TIR occurs when the angle of incidence in the denser medium is ____ the critical angle.","choices":["less than","equal to","greater than","unrelated to"],"a":2,"exp":"i > C gives total internal reflection.","hint":"i > C gives total internal reflection."},"zhHant":{"q":"當光密中的入射角____臨界角時發生全內反射。","choices":["小於","等於","大於","與…無關"],"a":2,"exp":"i > C 時全內反射。","hint":"i > C 時全內反射。"}},{"topic":"tir","section":"At critical angle","en":{"q":"At the critical angle, the refracted ray along the boundary has an angle of refraction of ____.","choices":["0°","45°","90°","180°"],"a":2,"exp":"At C the refracted ray grazes the surface (r = 90°).","hint":"At C the refracted ray grazes the surface (r = 90°)."},"zhHant":{"q":"在臨界角時，折射光線沿界面的折射角為____。","choices":["0°","45°","90°","180°"],"a":2,"exp":"臨界角時 r = 90°。","hint":"臨界角時 r = 90°。"}},{"topic":"tir","section":"Optical fibre","en":{"q":"Optical fibres use repeated ____ to keep light inside the core.","choices":["diffraction","total internal reflection","polarization","dispersion only"],"a":1,"exp":"Core-cladding TIR guides light along the fibre.","hint":"Core-cladding TIR guides light along the fibre."},"zhHant":{"q":"光纖利用重複的____使光在芯內傳播。","choices":["繞射","全內反射","偏振","只有色散"],"a":1,"exp":"芯與包層間的全內反射導光。","hint":"芯與包層間的全內反射導光。"}},{"topic":"tir","section":"Diamond brilliance","en":{"q":"Diamonds sparkle partly because their high refractive index gives a ____ critical angle.","choices":["large","small","zero","infinite"],"a":1,"exp":"Small C means more TIR inside the gem.","hint":"Small C means more TIR inside the gem."},"zhHant":{"q":"鑽石耀眼，部分原因是高折射率使臨界角____。","choices":["大","小","零","無窮"],"a":1,"exp":"臨界角小，內部全內反射多。","hint":"臨界角小，內部全內反射多。"}},{"topic":"tir","section":"No TIR rare to dense","en":{"q":"When light travels from a rarer to a denser medium, total internal reflection ____.","choices":["always occurs","never occurs","occurs at 45° only","replaces refraction"],"a":1,"exp":"TIR requires dense-to-rare incidence.","hint":"TIR requires dense-to-rare incidence."},"zhHant":{"q":"光由光疏進入光密時，全內反射____。","choices":["一定發生","不會發生","只在 45° 發生","取代折射"],"a":1,"exp":"全內反射需光密→光疏。","hint":"全內反射需光密→光疏。"}},{"topic":"tir","section":"Partial vs total","en":{"q":"If i < C (dense to rare), both reflection and ____ occur at the boundary.","choices":["absorption only","refraction","diffraction","polarization"],"a":1,"exp":"Below C there is partial reflection and refraction.","hint":"Below C there is partial reflection and refraction."},"zhHant":{"q":"光密→光疏且 i < C 時，界面上同時有反射和____。","choices":["只有吸收","折射","繞射","偏振"],"a":1,"exp":"i < C 時為部分反射與折射。","hint":"i < C 時為部分反射與折射。"}},{"topic":"tir","section":"Periscope mirrors","en":{"q":"A periscope using plane mirrors relies on ____ at each mirror.","choices":["refraction only","reflection","TIR in glass only","diffraction"],"a":1,"exp":"Standard periscopes use reflection, not TIR.","hint":"Standard periscopes use reflection, not TIR."},"zhHant":{"q":"用平面鏡的潛望鏡在每面鏡上依靠____。","choices":["只有折射","反射","只在玻璃內全內反射","繞射"],"a":1,"exp":"一般潛望鏡用反射。","hint":"一般潛望鏡用反射。"}},{"topic":"tir","section":"Water-air C","en":{"q":"For light from water (n ≈ 1.33) to air (n ≈ 1), sin C is approximately ____.","choices":["1.33","1/1.33","0","2.33"],"a":1,"exp":"sin C = n_air / n_water ≈ 1/1.33.","hint":"sin C = n_air / n_water ≈ 1/1.33."},"zhHant":{"q":"光由水（n ≈ 1.33）到空氣（n ≈ 1），sin C 約為____。","choices":["1.33","1/1.33","0","2.33"],"a":1,"exp":"sin C = n空氣 / n水。","hint":"sin C = n空氣 / n水。"}},{"topic":"convex","section":"Definition","en":{"q":"A convex lens is also called a ____ lens.","choices":["diverging","converging","neutral","polarizing"],"a":1,"exp":"Convex lenses converge parallel rays toward a focus.","hint":"Convex lenses converge parallel rays toward a focus."},"zhHant":{"q":"凸透鏡又稱____透鏡。","choices":["發散","會聚","中性","偏振"],"a":1,"exp":"凸透鏡使平行光會聚。","hint":"凸透鏡使平行光會聚。"}},{"topic":"convex","section":"Rule 1","en":{"q":"For a convex lens, a ray parallel to the principal axis refracts through ____.","choices":["the optical centre only","the focal point F","infinity","the object"],"a":1,"exp":"Rule 1: parallel in, focus out.","hint":"Rule 1: parallel in, focus out."},"zhHant":{"q":"凸透鏡：平行於主軸的光線折射後通過____。","choices":["只有光心","焦點 F","無窮遠","物體"],"a":1,"exp":"規則一：平行入、焦點出。","hint":"規則一：平行入、焦點出。"}},{"topic":"convex","section":"Rule 2","en":{"q":"A ray through the focus F of a convex lens emerges ____ to the principal axis.","choices":["perpendicular","parallel","at 45°","backward"],"a":1,"exp":"Rule 2: focus in, parallel out.","hint":"Rule 2: focus in, parallel out."},"zhHant":{"q":"通過凸透鏡焦點 F 的光線折射後與主軸____。","choices":["垂直","平行","成 45°","反向"],"a":1,"exp":"規則二：焦點入、平行出。","hint":"規則二：焦點入、平行出。"}},{"topic":"convex","section":"Rule 3","en":{"q":"A ray through the optical centre C of a thin lens ____.","choices":["always stops","continues straight without deviation","must reflect","doubles in speed"],"a":1,"exp":"Rule 3: C in, C out — undeviated.","hint":"Rule 3: C in, C out — undeviated."},"zhHant":{"q":"通過薄透鏡光心 C 的光線____。","choices":["必定停止","直線通過不偏折","必定反射","速度加倍"],"a":1,"exp":"規則三：光心入、光心出。","hint":"規則三：光心入、光心出。"}},{"topic":"convex","section":"u > 2f image","en":{"q":"A real object beyond 2f from a convex lens forms a real image that is ____.","choices":["enlarged","inverted and diminished between f and 2f","virtual and upright","at the object"],"a":1,"exp":"u > 2f: real, inverted, diminished image between f and 2f.","hint":"u > 2f: real, inverted, diminished image between f and 2f."},"zhHant":{"q":"實物在凸透鏡 2f 以外時，像為____。","choices":["放大","倒立縮小且在 f 與 2f 之間","虛像正立","在物體處"],"a":1,"exp":"u > 2f：實像、倒立、縮小。","hint":"u > 2f：實像、倒立、縮小。"}},{"topic":"convex","section":"u = 2f","en":{"q":"When u = 2f for a convex lens, the image is formed at ____.","choices":["f","2f on the other side","infinity","inside the lens"],"a":1,"exp":"u = 2f gives v = 2f, same size inverted real image.","hint":"u = 2f gives v = 2f, same size inverted real image."},"zhHant":{"q":"凸透鏡 u = 2f 時，像成在____。","choices":["f","另一側 2f","無窮遠","鏡內"],"a":1,"exp":"u = v = 2f，等大倒立實像。","hint":"u = v = 2f，等大倒立實像。"}},{"topic":"convex","section":"u between f and 2f","en":{"q":"When f < u < 2f for a convex lens, the image is real, inverted and ____.","choices":["diminished","enlarged","same size","virtual"],"a":1,"exp":"f < u < 2f gives enlarged real image beyond 2f.","hint":"f < u < 2f gives enlarged real image beyond 2f."},"zhHant":{"q":"凸透鏡 f < u < 2f 時，像為實像、倒立且____。","choices":["縮小","放大","等大","虛像"],"a":1,"exp":"f < u < 2f：放大實像。","hint":"f < u < 2f：放大實像。"}},{"topic":"convex","section":"u < f","en":{"q":"When the object is inside the focal length of a convex lens (u < f), the image is ____.","choices":["real and inverted","virtual, upright and enlarged","at 2f","absent"],"a":1,"exp":"u < f: virtual magnifying-glass image.","hint":"u < f: virtual magnifying-glass image."},"zhHant":{"q":"物在凸透鏡焦距內（u < f）時，像為____。","choices":["實像倒立","虛像正立放大","在 2f","不存在"],"a":1,"exp":"u < f：虛像、正立、放大（放大鏡）。","hint":"u < f：虛像、正立、放大（放大鏡）。"}},{"topic":"convex","section":"Sign of f","en":{"q":"In the usual thin-lens sign convention, the focal length of a convex lens is ____.","choices":["negative","positive","zero","imaginary"],"a":1,"exp":"Convex converging lenses have f > 0.","hint":"Convex converging lenses have f > 0."},"zhHant":{"q":"薄透鏡符號規定中，凸透鏡的焦距為____。","choices":["負","正","零","虛數"],"a":1,"exp":"凸透鏡 f > 0。","hint":"凸透鏡 f > 0。"}},{"topic":"convex","section":"Camera","en":{"q":"A camera uses a convex lens to form a ____ image on the sensor.","choices":["virtual upright","real inverted","virtual enlarged","no"],"a":1,"exp":"Objects are usually beyond 2f → real inverted image.","hint":"Objects are usually beyond 2f → real inverted image."},"zhHant":{"q":"相機用凸透鏡在感光元件上成____。","choices":["虛像正立","實像倒立","虛像放大","無像"],"a":1,"exp":"物通常在 2f 外→實像倒立。","hint":"物通常在 2f 外→實像倒立。"}},{"topic":"concave","section":"Definition","en":{"q":"A concave lens is a ____ lens.","choices":["converging","diverging","converging only for virtual objects","polarizing"],"a":1,"exp":"Concave lenses spread out parallel rays.","hint":"Concave lenses spread out parallel rays."},"zhHant":{"q":"凹透鏡是____透鏡。","choices":["會聚","發散","只對虛物會聚","偏振"],"a":1,"exp":"凹透鏡使平行光發散。","hint":"凹透鏡使平行光發散。"}},{"topic":"concave","section":"Image for real object","en":{"q":"For a real object, a concave lens always forms a ____ image.","choices":["real inverted","virtual upright diminished","real enlarged","at F"],"a":1,"exp":"Diverging lens → virtual, upright, smaller image.","hint":"Diverging lens → virtual, upright, smaller image."},"zhHant":{"q":"凹透鏡對實物總是成____。","choices":["實像倒立","虛像正立縮小","實像放大","在 F"],"a":1,"exp":"發散透鏡→虛像、正立、縮小。","hint":"發散透鏡→虛像、正立、縮小。"}},{"topic":"concave","section":"Sign of f","en":{"q":"The focal length of a concave lens in the usual convention is ____.","choices":["positive","negative","infinite","equal to u"],"a":1,"exp":"Concave diverging lenses have f < 0.","hint":"Concave diverging lenses have f < 0."},"zhHant":{"q":"凹透鏡的焦距在慣用符號下為____。","choices":["正","負","無窮","等於 u"],"a":1,"exp":"凹透鏡 f < 0。","hint":"凹透鏡 f < 0。"}},{"topic":"concave","section":"Parallel ray","en":{"q":"After a concave lens, a ray parallel to the axis appears to come from ____.","choices":["2F on the object side","the focal point F on the same side as the object","infinity behind","the centre of Earth"],"a":1,"exp":"Parallel in, diverges as if from F.","hint":"Parallel in, diverges as if from F."},"zhHant":{"q":"凹透鏡：平行主軸的光線折射後好像來自____。","choices":["物方 2F","物方焦點 F","鏡後無窮遠","地心"],"a":1,"exp":"平行入、發散似從 F 出發。","hint":"平行入、發散似從 F 出發。"}},{"topic":"concave","section":"Myopia correction","en":{"q":"Concave lenses are used in spectacles to correct ____.","choices":["long-sightedness (hyperopia)","short-sightedness (myopia)","colour blindness","TIR"],"a":1,"exp":"Myopia needs diverging lenses to move the focus onto the retina.","hint":"Myopia needs diverging lenses to move the focus onto the retina."},"zhHant":{"q":"凹透鏡眼鏡用於矯正____。","choices":["遠視","近視","色盲","全內反射"],"a":1,"exp":"近視需發散透鏡使焦點後移到視網膜。","hint":"近視需發散透鏡使焦點後移到視網膜。"}},{"topic":"concave","section":"Image position","en":{"q":"The virtual image from a concave lens is always on the ____ side as the object.","choices":["opposite","same","only left","only at C"],"a":1,"exp":"Virtual image lies between F and the lens on the object side.","hint":"Virtual image lies between F and the lens on the object side."},"zhHant":{"q":"凹透鏡的虛像總是在物的____側。","choices":["對","同","只在左","只在 C"],"a":1,"exp":"虛像在物與透鏡之間。","hint":"虛像在物與透鏡之間。"}},{"topic":"concave","section":"Thickness","en":{"q":"A concave lens is thinner at the ____ and thicker at the edges.","choices":["edges","middle","focus only","top only"],"a":1,"exp":"Diverging lenses are thinner in the centre.","hint":"Diverging lenses are thinner in the centre."},"zhHant":{"q":"凹透鏡____較薄，邊緣較厚。","choices":["邊緣","中央","只有焦點處","只有上方"],"a":1,"exp":"凹透鏡中間薄、邊緣厚。","hint":"凹透鏡中間薄、邊緣厚。"}},{"topic":"concave","section":"Cannot form real image","en":{"q":"Can a concave lens alone form a real image of a real object on a screen?","choices":["Yes, always","No","Only if u < f","Only in vacuum"],"a":1,"exp":"Real objects always give virtual images with a diverging lens.","hint":"Real objects always give virtual images with a diverging lens."},"zhHant":{"q":"凹透鏡能否單獨把實物的實像成在屏幕上？","choices":["能，總是","不能","只有 u < f 能","只在真空中能"],"a":1,"exp":"實物經凹透鏡只能成虛像。","hint":"實物經凹透鏡只能成虛像。"}},{"topic":"concave","section":"Galilean telescope component","en":{"q":"In a simple Galilean telescope, the eyepiece is often a ____ lens.","choices":["convex","concave","cylindrical only","none"],"a":1,"exp":"Galilean design uses concave eyepiece with convex objective.","hint":"Galilean design uses concave eyepiece with convex objective."},"zhHant":{"q":"簡單伽利略望遠鏡的目鏡通常是____透鏡。","choices":["凸","凹","只有柱面","無"],"a":1,"exp":"伽利略式：凸物鏡 + 凹目鏡。","hint":"伽利略式：凸物鏡 + 凹目鏡。"}},{"topic":"concave","section":"Power","en":{"q":"A lens with a more negative focal length has ____ diverging power.","choices":["less","greater","no","infinite converging"],"a":1,"exp":"Smaller (more negative) f means stronger divergence.","hint":"Smaller (more negative) f means stronger divergence."},"zhHant":{"q":"焦距越負（絕對值越大）的凹透鏡，發散能力____。","choices":["越弱","越強","無","變會聚"],"a":1,"exp":"f 越負，發散越強。","hint":"f 越負，發散越強。"}},{"topic":"em","section":"Transverse waves","en":{"q":"Electromagnetic waves are transverse waves that can travel in ____.","choices":["solids only","vacuum","liquids only","wires only"],"a":1,"exp":"EM waves do not need a medium; they travel in vacuum.","hint":"EM waves do not need a medium."},"zhHant":{"q":"電磁波是橫波，可在____中傳播。","choices":["只有固體","真空","只有液體","只有金屬線"],"a":1,"exp":"電磁波不需介質，可在真空傳播。","hint":"電磁波不需介質，可在真空傳播。"}},{"topic":"em","section":"Spectrum order frequency","en":{"q":"Which order shows increasing frequency?","choices":["radio → microwave → IR → visible → UV → X-ray → gamma","gamma → X-ray → radio","visible → radio → gamma","IR → radio → UV only"],"a":0,"exp":"Standard EM spectrum from low to high frequency.","hint":"Standard EM spectrum from low to high frequency."},"zhHant":{"q":"下列哪個次序為頻率遞增？","choices":["無線電→微波→紅外→可見→紫外→X→γ","γ→X→無線電","可見→無線電→γ","只有紅外→無線電→紫外"],"a":0,"exp":"電磁波譜由低頻到高頻的標準次序。","hint":"電磁波譜由低頻到高頻的標準次序。"}},{"topic":"em","section":"Wavelength and frequency","en":{"q":"For electromagnetic waves, when frequency increases, wavelength ____ (in the same medium).","choices":["increases","decreases","stays the same","doubles always"],"a":1,"exp":"c = fλ; higher f means shorter λ.","hint":"c = fλ; higher f means shorter λ."},"zhHant":{"q":"電磁波頻率增加時，波長在同一介質中____。","choices":["增加","減少","不變","總是加倍"],"a":1,"exp":"c = fλ，f 大則 λ 小。","hint":"c = fλ，f 大則 λ 小。"}},{"topic":"em","section":"Visible range","en":{"q":"The visible spectrum is roughly between ____ nm in wavelength.","choices":["400–700","10–100","1–10","700–1000 only"],"a":0,"exp":"Visible light ≈ 400 nm (violet) to 700 nm (red).","hint":"Visible light ≈ 400 nm (violet) to 700 nm (red)."},"zhHant":{"q":"可見光波長大約在____ nm 之間。","choices":["400–700","10–100","1–10","只有 700–1000"],"a":0,"exp":"可見光約 400–700 nm。","hint":"可見光約 400–700 nm。"}},{"topic":"em","section":"Microwave use","en":{"q":"Microwaves are commonly used for ____.","choices":["cable TV only","satellite communication and microwave ovens","gamma therapy","periscopes"],"a":1,"exp":"Summary lists communications and heating applications.","hint":"Summary lists communications and heating applications."},"zhHant":{"q":"微波常用於____。","choices":["只有有線電視","衛星通訊與微波爐","γ 治療","潛望鏡"],"a":1,"exp":"通訊與加熱是微波常見用途。","hint":"通訊與加熱是微波常見用途。"}},{"topic":"em","section":"UV hazard","en":{"q":"Excessive ultraviolet radiation can cause ____.","choices":["only heating","skin damage and eye harm","only radio interference","TIR"],"a":1,"exp":"UV can damage skin and eyes; use protection.","hint":"UV can damage skin and eyes."},"zhHant":{"q":"過量紫外輻射可導致____。","choices":["只有加熱","皮膚與眼睛損傷","只有無線電干擾","全內反射"],"a":1,"exp":"紫外線可損害皮膚和眼睛。","hint":"紫外線可損害皮膚和眼睛。"}},{"topic":"em","section":"X-ray use","en":{"q":"X-rays are used medically mainly because they ____.","choices":["are visible","penetrate soft tissue and affect photographic film","only reflect","have the longest wavelength"],"a":1,"exp":"X-rays pass through flesh but are absorbed more by bone.","hint":"X-rays pass through flesh but are absorbed more by bone."},"zhHant":{"q":"X 射線在醫學上主要因為它們____。","choices":["是可見光","能穿透軟組織並使底片感光","只反射","波長最長"],"a":1,"exp":"X 射線可穿透軟組織，骨頭吸收較多。","hint":"X 射線可穿透軟組織，骨頭吸收較多。"}},{"topic":"em","section":"Additive colour","en":{"q":"In additive colour mixing on screens, red + green + blue gives ____.","choices":["black","white","cyan only","magenta only"],"a":1,"exp":"RGB additive mixing: full red, green and blue → white.","hint":"RGB additive mixing: full red, green and blue → white."},"zhHant":{"q":"螢幕上加法混色：紅 + 綠 + 藍 = ____。","choices":["黑","白","只有青","只有品紅"],"a":1,"exp":"RGB 全亮→白色。","hint":"RGB 全亮→白色。"}},{"topic":"em","section":"Speed in vacuum","en":{"q":"All electromagnetic waves travel at speed c ≈ 3×10⁸ m s⁻¹ in ____.","choices":["water only","vacuum","glass only","copper wire only"],"a":1,"exp":"In vacuum all EM waves share the same speed c.","hint":"In vacuum all EM waves share the same speed c."},"zhHant":{"q":"所有電磁波在____中速率約為 c ≈ 3×10⁸ m s⁻¹。","choices":["只有水","真空","只有玻璃","只有銅線"],"a":1,"exp":"真空中各種電磁波速率均為 c。","hint":"真空中各種電磁波速率均為 c。"}},{"topic":"em","section":"Infrared","en":{"q":"Infrared radiation is strongly associated with ____.","choices":["nuclear decay only","thermal emission from warm objects","only gamma rays","only reflection in mirrors"],"a":1,"exp":"Warm bodies emit IR; used in thermal imaging and heaters.","hint":"Warm bodies emit IR."},"zhHant":{"q":"紅外輻射與____關係密切。","choices":["只有核衰變","暖物體的熱輻射","只有 γ 射線","只有鏡面反射"],"a":1,"exp":"暖物體發出紅外線；用於熱成像等。","hint":"暖物體發出紅外線；用於熱成像等。"}},{"topic":"liquidThermometer","section":"Thermometric Liquid","en":{"q":"Why is mercury preferred over alcohol to measure hot cooking oil at 150°C?","choices":["Mercury is cheaper","Mercury has a higher boiling point (356.7°C) than alcohol (78.4°C)","Mercury is non-toxic","Mercury is transparent"],"a":1,"exp":"Alcohol boils at 78.4°C and would vaporize under high pressure, whereas mercury boils at 356.7°C.","hint":"Compare their boiling points."},"zhHant":{"q":"為什麼在測量 150°C 的熱食油時，水銀比酒精更適合用作溫度計液體？","choices":["水銀較便宜","水銀的沸點 (356.7°C) 比酒精 (78.4°C) 高","水銀無毒","水銀是透明的"],"a":1,"exp":"酒精在 78.4°C 沸騰並會汽化產生高壓，而水銀的沸點高達 356.7°C。","hint":"比較兩者的沸點。"}},{"topic":"faultyThermometer","section":"Faulty Scale Correction","en":{"q":"A faulty thermometer reads -1.5°C in melting ice and 105°C in steam. What is the true temperature when it reads 25.0°C?","choices":["23.5°C","24.9°C","26.5°C","25.0°C"],"a":1,"exp":"T = ((C - C_f)/(C_u - C_f)) * 100 = ((25.0 - (-1.5))/(105 - (-1.5))) * 100 = (26.5 / 106.5) * 100 ≈ 24.9°C.","hint":"Apply the proportional interval formula."},"zhHant":{"q":"某有誤差的溫度計在熔冰中讀數為 -1.5°C，在蒸汽中讀數為 105°C。當讀數為 25.0°C 時，實際溫度是多少？","choices":["23.5°C","24.9°C","26.5°C","25.0°C"],"a":1,"exp":"T = ((25.0 - (-1.5)) / (105 - (-1.5))) * 100 = (26.5 / 106.5) * 100 ≈ 24.9°C。","hint":"應用等比例區間公式。"}},{"topic":"resistanceThermometer","section":"Platinum Resistance Assumption","en":{"q":"What is the fundamental physical assumption when using a platinum resistance thermometer?","choices":["The resistance varies exponentially with temperature","The resistance varies linearly with temperature","The resistance is independent of temperature","The resistance drops to zero at 0°C"],"a":1,"exp":"Using the formula theta = ((R - R0)/(R100 - R0)) * 100 assumes a linear relationship between resistance and temperature.","hint":"Think about the calibration formula."},"zhHant":{"q":"使用鉑電阻溫度計時，最基本的物理假設是什麼？","choices":["電阻隨溫度呈指數變化","電阻隨溫度呈線性變化","電阻與溫度無關","電阻在 0°C 時降至零"],"a":1,"exp":"使用公式 theta = ((R - R0) / (R100 - R0)) * 100 假設了電阻與溫度之間存在線性關係。","hint":"思考校準公式。"}},{"topic":"thermistor","section":"NTC Thermistor","en":{"q":"What does NTC stand for in thermistors, and how does its resistance change as temperature increases?","choices":["Neutral Temperature Coefficient; resistance stays constant","Negative Temperature Coefficient; resistance decreases","Normal Thermal Conduction; resistance increases","Negative Thermal Conduction; resistance increases"],"a":1,"exp":"NTC stands for Negative Temperature Coefficient. Its resistance decreases exponentially as temperature increases.","hint":"Negative coefficient means opposite direction."},"zhHant":{"q":"熱敏電阻中的 NTC 代表什麼？當溫度升高時，其電阻如何變化？","choices":["中性溫度係數；電阻保持不變","負溫度係數；電阻減少","正常熱傳導；電阻增加","負熱傳導；電阻增加"],"a":1,"exp":"NTC 代表負溫度係數（Negative Temperature Coefficient）。隨著溫度升高，其電阻會呈指數級減少。","hint":"負係數意味著相反的變化方向。"}}]`),Qe="s3phy-rotating-mirror-lab-css",Ft=`
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
`;function Et(){if(document.getElementById(Qe))return;const t=document.createElement("style");t.id=Qe,t.textContent=Ft,document.head.appendChild(t)}function At(t){Et();const n=document.createElement("div");n.className="rml",n.innerHTML=`
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
  `;const o=n.querySelector(".rml-canvas"),i=o.getContext("2d"),s=n.querySelector("[data-rml-rot]"),a=n.querySelector("[data-rml-inc]"),r=n.querySelector('[data-rml-disp="rot"]'),u=n.querySelector('[data-rml-disp="inc"]'),j=n.querySelector('[data-rml-val="i"]'),A=n.querySelector('[data-rml-val="r"]'),L=n.querySelector('[data-rml-val="shift"]'),H=350,M=380,K=300,x="#22d3ee",_="bold 17px system-ui, sans-serif";let F=0,g=-140,E=!0,$=!0,U=!0,d=!0;function f(P){return P*Math.PI/180}function h(P,I,V,ee,ne,te=2,ae=!1){i.beginPath(),i.lineWidth=te,i.strokeStyle=ne,i.setLineDash(ae?[6,6]:[]);const w=P+Math.cos(f(V))*ee,R=I+Math.sin(f(V))*ee;return i.moveTo(P,I),i.lineTo(w,R),i.stroke(),i.setLineDash([]),{x:w,y:R}}function k(P,I,V,ee,ne,te=14){const ae=V-P,w=ee-I,R=Math.hypot(ae,w);if(R<1e-6)return;const Z=ae/R,W=w/R,X=V-Z*te,D=ee-W*te,de=.45*te;i.beginPath(),i.fillStyle=ne,i.moveTo(V,ee),i.lineTo(X-W*de,D+Z*de),i.lineTo(X+W*de,D-Z*de),i.closePath(),i.fill()}function G(P,I,V,ee,ne,te=25){i.beginPath(),i.strokeStyle=ee,i.lineWidth=2;const ae=Math.min(P,I),w=Math.max(P,I);if(i.arc(H,M,V,f(ae),f(w),!1),i.stroke(),ne){const R=(ae+w)/2,Z=H+Math.cos(f(R))*(V+te),W=M+Math.sin(f(R))*(V+te);i.save(),i.font="bold 14px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle=ee,i.fillText(ne,Z,W),i.restore()}}function J(P,I,V,ee,ne){i.clearRect(0,0,o.width,o.height),i.beginPath(),i.setLineDash([10,6]),i.strokeStyle="rgba(255, 204, 0, 0.45)",i.lineWidth=3,i.lineCap="round",i.moveTo(H-200,M),i.lineTo(H+200,M),i.stroke(),i.setLineDash([]),i.lineCap="butt";const te=H+Math.cos(f(P))*K,ae=M+Math.sin(f(P))*K;i.beginPath(),i.lineWidth=3,i.strokeStyle="#fff",i.moveTo(te,ae),i.lineTo(H,M),i.stroke();const w=(te+H)*.5,R=(ae+M)*.5,Z=Math.hypot(H-te,M-ae)||1,W=(H-te)/Z,X=(M-ae)/Z;if(k(w-W*28,R-X*28,w,R,"#fff",16),i.save(),i.font=_,i.textAlign="center",i.textBaseline="bottom",i.fillStyle="#fff",i.fillText(t("tools.rotatingMirror.canvas.incident"),te,ae-12),i.restore(),E){const D=h(H,M,-90,K-60,"#00e676",1,!0);i.save(),i.font="bold 14px system-ui, sans-serif",i.textAlign="left",i.textBaseline="bottom",i.fillStyle="#00e676",i.fillText(t("tools.rotatingMirror.canvas.n"),D.x+6,D.y-4),i.restore()}if($){const D=h(H,M,ee,K,"#00e676",2,!1);k(H,M,D.x,D.y,"#00e676",16),i.save(),i.font=_,i.textAlign="center",i.textBaseline="bottom",i.fillStyle="#00e676",i.fillText(t("tools.rotatingMirror.canvas.originalReflected"),D.x,D.y-14),i.restore()}i.save(),i.translate(H,M),i.rotate(f(F)),i.beginPath(),i.lineWidth=6,i.strokeStyle="#ffcc00",i.lineCap="round",i.moveTo(-200,0),i.lineTo(200,0),i.stroke(),i.beginPath(),i.lineWidth=1,i.strokeStyle="#666";for(let D=-190;D<200;D+=15)i.moveTo(D,0),i.lineTo(D-5,8);if(i.stroke(),i.restore(),U){const D=h(H,M,I,K-40,x,2,!0);i.save(),i.font="bold 14px system-ui, sans-serif",i.textAlign="left",i.textBaseline="bottom",i.fillStyle=x,i.fillText(t("tools.rotatingMirror.canvas.nPrime"),D.x+6,D.y-4),i.restore()}if(d){const D=h(H,M,V,K,x,4);k(H,M,D.x,D.y,x,16),Math.abs(F)>.5&&(i.save(),i.font=_,i.textAlign="center",i.textBaseline="bottom",i.fillStyle=x,i.fillText(t("tools.rotatingMirror.canvas.newReflected"),D.x,D.y-14),i.restore())}if(U&&G(P,I,100,"#ffcc00",`i=${ne.toFixed(0)}°`,25),U&&d&&G(I,V,100,x,`r=${ne.toFixed(0)}°`,25),E&&U&&Math.abs(F)>.5&&G(-90,I,50,"#ffcc00",`θ=${Math.abs(F)}°`,20),$&&d&&Math.abs(F)>.5){const D=V-ee;G(ee,V,260,"#ff5252",`${t("tools.rotatingMirror.canvas.shift")}=${D.toFixed(0)}°`,40)}}function Q(){F=parseFloat(s.value),g=parseFloat(a.value);const P=F>0?"+":"";r.textContent=`${P}${F}°`,u.textContent=`${g}°`;const I=-90,V=Math.abs(g-I),ee=I+V,ne=-90+F,te=Math.abs(g-ne),ae=ne+te,w=ae-ee;j.textContent=`${te.toFixed(1)}°`,A.textContent=`${te.toFixed(1)}°`;const R=w>0?"+":"";L.textContent=`${R}${w.toFixed(1)}°`,J(g,ne,ae,ee,te)}return n.querySelectorAll("[data-rml-toggle]").forEach(P=>{P.addEventListener("click",()=>{const I=P.getAttribute("data-rml-toggle");I==="orig-norm"&&(E=!E),I==="orig-ray"&&($=!$),I==="new-norm"&&(U=!U),I==="new-ray"&&(d=!d),P.classList.toggle("active"),Q()})}),n.querySelector("[data-rml-reset]").addEventListener("click",()=>{s.value="0",Q()}),s.addEventListener("input",Q),a.addEventListener("input",Q),Q(),n}function $t(t){const n=document.createElement("div");n.className="tool-tir-escape";const o=document.createElement("iframe"),i="./",s=i.endsWith("/")?i:`${i}/`;return o.src=`${s}tir-escape/index.html?embed=1`,o.title=t("tools.refractionTir.title"),o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin",n.appendChild(o),n}function It(t,n={}){const o=n.defaultKind==="concave"?"concave":"convex",i="tools.lens.title",s=document.createElement("div");s.className="tool-lens-simulator";const a=document.createElement("iframe"),r="./",u=r.endsWith("/")?r:`${r}/`;return a.src=`${u}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(o)}`,a.title=t(i),a.setAttribute("loading","lazy"),a.referrerPolicy="strict-origin-when-cross-origin",s.appendChild(a),s}function Wt(t){const n=document.createElement("div");n.className="tool-em-spectrum";const o=document.createElement("iframe"),i="./",s=i.endsWith("/")?i:`${i}/`;function a(){return`${s}em-spectrum/index.html?lang=${encodeURIComponent(oe())}`}o.src=a(),o.title=t("tools.em.title"),o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var u;try{(u=o.contentWindow)==null||u.postMessage({type:"s3phy:lang",lang:oe()},"*")}catch{o.src=a()}};return window.addEventListener("s3phy:lang",r),n._emLabCleanup=()=>window.removeEventListener("s3phy:lang",r),n.appendChild(o),n}function Pt(t){const n=document.createElement("div");n.className="rgb-mixer",n.innerHTML=`
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
  `;const o=n.querySelector("[data-r]"),i=n.querySelector("[data-g]"),s=n.querySelector("[data-b]"),a=n.querySelector(".rgb-mixer-canvas"),r=n.querySelector(".rgb-mixer-stage"),u=a.getContext("2d");function j(x){return x.toString(16).padStart(2,"0")}function A(x,_,F){const g=a.width/(window.devicePixelRatio||1),E=a.height/(window.devicePixelRatio||1),$=g/2,U=E/2,d=Math.min(g,E)*.34,f=d*.5,h=Math.sqrt(3)/2;u.clearRect(0,0,g,E),u.fillStyle="#000",u.fillRect(0,0,g,E);const k=[{x:$,y:U-f,rgb:[255,0,0],val:x},{x:$-f*h,y:U+f*.5,rgb:[0,255,0],val:_},{x:$+f*h,y:U+f*.5,rgb:[0,0,255],val:F}];u.globalCompositeOperation="lighter",k.forEach(G=>{if(G.val<=0)return;const J=G.val/255,[Q,P,I]=G.rgb,V=u.createRadialGradient(G.x,G.y,0,G.x,G.y,d);V.addColorStop(0,`rgba(${Q},${P},${I},${J})`),V.addColorStop(.65,`rgba(${Q},${P},${I},${J})`),V.addColorStop(.85,`rgba(${Q},${P},${I},${J*.5})`),V.addColorStop(1,`rgba(${Q},${P},${I},0)`),u.fillStyle=V,u.beginPath(),u.arc(G.x,G.y,d,0,Math.PI*2),u.fill()}),u.globalCompositeOperation="source-over"}function L(){const x=r.getBoundingClientRect(),_=Math.max(200,Math.min(x.width-8,x.height-8,720)),F=window.devicePixelRatio||1;a.width=_*F,a.height=_*F,a.style.width=`${_}px`,a.style.height=`${_}px`,u.setTransform(F,0,0,F,0,0),A(+o.value,+i.value,+s.value)}function H(){const x=+o.value,_=+i.value,F=+s.value,g=`rgb(${x}, ${_}, ${F})`,E=`#${j(x)}${j(_)}${j(F)}`;n.querySelector("[data-r-val]").textContent=x,n.querySelector("[data-g-val]").textContent=_,n.querySelector("[data-b-val]").textContent=F,n.querySelector("[data-r-bar]").style.width=`${x/255*100}%`,n.querySelector("[data-g-bar]").style.width=`${_/255*100}%`,n.querySelector("[data-b-bar]").style.width=`${F/255*100}%`,o.style.setProperty("--fill",`${x/255*100}%`),i.style.setProperty("--fill",`${_/255*100}%`),s.style.setProperty("--fill",`${F/255*100}%`);const $=n.querySelector("[data-swatch]");$.style.backgroundColor=g,$.setAttribute("aria-label",`${t("tools.rgbMixer.preview")}: ${g}`),n.querySelector("[data-rgb-text]").textContent=g,n.querySelector("[data-hex-text]").textContent=E,A(x,_,F)}function M(x,_,F){o.value=x,i.value=_,s.value=F,H()}return[o,i,s].forEach(x=>x.addEventListener("input",H)),n.querySelectorAll(".rgb-presets button").forEach(x=>{x.addEventListener("click",()=>{M(+x.dataset.r,+x.dataset.g,+x.dataset.b)})}),new ResizeObserver(()=>L()).observe(r),requestAnimationFrame(()=>{L(),H()}),n}const Dt=["topics","notes","tools","worksheets","flashcards","summary"],Ot={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function bt(t,{subtitleKey:n,activeSection:o,onSection:i,onLang:s}){t.innerHTML=`
    <header class="site-header">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${l("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${l(n)}</p>
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
  `;const a=t.querySelector("[data-main]"),r=t.querySelector("[data-nav]"),u=t.querySelector("[data-lang]"),j=t.querySelector("[data-strand-back]");let A=o;function L(x){A=x,r.innerHTML=Dt.map(_=>`<button type="button" class="${x===_?"active":""}" data-sec="${_}">${l(Ot[_])}</button>`).join(""),r.querySelectorAll("button").forEach(_=>{_.addEventListener("click",()=>i(_.getAttribute("data-sec")))})}function H(){u.innerHTML=`
      <button type="button" data-set-lang="en" class="${oe()==="en"?"active":""}">${l("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${oe()==="zh-Hant"?"active":""}">${l("lang.zhHant")}</button>
    `,u.querySelectorAll("button").forEach(x=>{x.addEventListener("click",()=>{pt(x.getAttribute("data-set-lang")),s()})})}function M(){t.querySelector("[data-hub-subtitle]").textContent=l(n),j.textContent=l("strand.back"),t.querySelector("[data-hub-footer]").textContent=l("footer.conventions"),t.querySelector(".site-title").textContent=l("app.title")}const K=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return j.addEventListener("click",K),L(o),H(),{main:a,updateSection(x){L(x)},refreshLabels(){M(),L(A),H()},destroy(){j.removeEventListener("click",K)}}}const Pe=["A","B","C","D"];function Ve(t){const n=t.slice();for(let o=n.length-1;o>0;o-=1){const i=Math.floor(Math.random()*(o+1));[n[o],n[i]]=[n[i],n[o]]}return n}function Gt(t,n,o){return t.filter(i=>{if(o)return o(i,n);const s=i.topic;return!!(n.includes(s)||n.includes("rotatingMirror")&&s==="reflection"||n.includes("refraction")&&s==="refraction"||n.includes("tir")&&s==="tir"||s==="convex"&&n.includes("convex")||s==="concave"&&n.includes("concave"))})}function jt(){return new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}function xe(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function gt(t,n={}){const o=n.topics??[["rotatingMirror","topic.rotatingMirror"],["refraction","topic.refractionSnell"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]],i=n.paperTitleKey??"worksheets.paperTitle";return`
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
          ${o.map(([s,a])=>`<label class="card ws-topic-card">
            <input type="checkbox" data-ws-topic="${s}" checked />
            <span>${t(a)}</span>
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
              <h3>${t(i)}</h3>
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
    </section>`}function vt(t,n,o,i,s={}){var ee,ne,te,ae;const a={items:[],tab:"practice",dateStr:"",userAnswers:{},wrongAttempts:{},resolved:{}},r=t.querySelector("[data-ws-gen]"),u=t.querySelector("[data-ws-preview-area]"),j=t.querySelector("[data-ws-out]"),A=t.querySelector("[data-ws-body]"),L=t.querySelector("[data-ws-paper]"),H=t.querySelector("[data-ws-tabs]"),M=t.querySelector("[data-ws-practice-actions]"),K=t.querySelector("[data-ws-score]"),x=t.querySelector("[data-ws-score-val]"),_=t.querySelector("[data-ws-summary]"),F=t.querySelector("[data-ws-date-row]"),g=t.querySelector("[data-ws-date-print]"),E=t.querySelector("[data-ws-date-today]"),$=t.querySelector("[data-ws-date-label]");if(!r||!A)return;function U(){return i()}function d(){a.userAnswers={},a.wrongAttempts={},a.resolved={},K.hidden=!0,_.hidden=!0}function f(){return a.items.length>0&&a.items.every((w,R)=>a.resolved[R])}function h(){let w=0;a.items.forEach((Z,W)=>{if(!a.resolved[W])return;const X=Z[U()]||Z.en;a.userAnswers[W]===X.a&&(w+=1)}),Object.keys(a.resolved).length>0&&(x.textContent=`${w}/${a.items.length}`,K.hidden=!1)}function k(w){a.tab=w,H==null||H.querySelectorAll("[data-ws-tab]").forEach(R=>{R.classList.toggle("active",R.getAttribute("data-ws-tab")===w)}),M&&(M.hidden=w!=="practice"),F&&(F.hidden=w!=="practice"),g&&(g.hidden=!a.dateStr,g.textContent=a.dateStr?`${o("worksheets.date")}: ${a.dateStr}`:""),L==null||L.classList.toggle("practice-mode",w==="practice"),J()}function G(w,R,Z){const W=w[U()]||w.en,X=Pe,D=R+1,de=w.section?`<span class="q-section">${xe(w.section)}</span>`:"";if(Z==="answer"){const me=W.choices.map((ye,Ce)=>`<li class="${Ce===W.a?"choice-correct":""}"><strong>${X[Ce]}.</strong> ${xe(ye)}</li>`).join("");return`<div class="question-row question-row--answer">
        <h4>Q${D} ${de}</h4>
        <p>${xe(W.q)}</p>
        <ol class="choice-list">${me}</ol>
        <p class="q-exp"><strong>${o("worksheets.answer")}:</strong> ${X[W.a]}</p>
        <p class="q-exp"><em>${xe(W.exp)}</em></p>
      </div>`}const le=a.userAnswers[R],he=a.wrongAttempts[R]||0,ge=a.resolved[R],qe=ge&&le===W.a,ke=ge&&le!==W.a;let Se="";he===1&&!ge?Se=`<p class="q-hint"><strong>${o("worksheets.hint")}:</strong> ${xe(W.hint||W.exp)}</p>`:ke&&(Se=`<p class="q-exp"><strong>${o("worksheets.answer")}:</strong> ${X[W.a]}</p>
        <p class="q-exp q-summary"><em>${xe(W.exp)}</em></p>`);const _e=qe?"correct":ke?"incorrect":"",He=W.choices.map((me,ye)=>`<li>
          <label class="choice-radio">
            <input type="radio" name="ws-q-${R}" value="${ye}" data-ws-q="${R}" data-ws-choice="${ye}"${le===ye?" checked":""}${ge?" disabled":""} />
            <span class="choice-circle choice-circle--print"></span>
            <strong>${X[ye]}.</strong> ${xe(me)}
          </label>
        </li>`).join("");return`<div class="question-row ${_e}" data-ws-row="${R}">
      <div class="q-header"><h4>Q${D} ${de}</h4>${qe?'<span class="result-icon">✓</span>':ke?'<span class="result-icon">✗</span>':""}</div>
      <p>${xe(W.q)}</p>
      <ol class="choice-list choice-list--radio">${He}</ol>
      ${Se}
    </div>`}function J(){a.items.length&&(A.innerHTML=a.items.map((w,R)=>G(w,R,a.tab)).join(""),Q())}function Q(){a.tab==="practice"&&A.querySelectorAll("[data-ws-choice]").forEach(w=>{w.addEventListener("change",()=>{const R=Number(w.getAttribute("data-ws-q"));if(a.resolved[R])return;const Z=Number(w.getAttribute("data-ws-choice")),W=a.items[R][U()]||a.items[R].en;a.userAnswers[R]=Z,Z===W.a?a.resolved[R]=!0:(a.wrongAttempts[R]=(a.wrongAttempts[R]||0)+1,a.wrongAttempts[R]>=2&&(a.resolved[R]=!0)),h(),f()&&P(),J()})})}function P(){const w=a.items.length;let R=0,Z=0;const W={};a.items.forEach((le,he)=>{const ge=le[U()]||le.en;if(a.userAnswers[he]===ge.a)R+=1,(a.wrongAttempts[he]||0)===0&&(Z+=1);else if(a.resolved[he]){const ke=le.section||le.topic;W[ke]=(W[ke]||0)+1}});const X=w?Math.round(R/w*100):0;let D=o("worksheets.revisionFair");X>=90?D=o("worksheets.revisionExcellent"):X>=70?D=o("worksheets.revisionGood"):X<50&&(D=o("worksheets.revisionLow"));const de=Object.entries(W).sort((le,he)=>he[1]-le[1]).map(([le,he])=>`<li>${xe(le)} (${he})</li>`).join("");_.innerHTML=`
      <h4>${o("worksheets.sessionSummary")}</h4>
      <p>${o("worksheets.score")}: <strong>${R}/${w}</strong> (${X}%)</p>
      <p>${o("worksheets.firstTry")}: <strong>${Z}/${w}</strong></p>
      <p>${o("worksheets.revisionSuggestions")}: ${D}</p>
      ${de?`<p>${o("worksheets.weakSections")}:</p><ul>${de}</ul>`:""}`,_.hidden=!1}function I(w){const R=U(),Z=a.items.map((W,X)=>{const D=W[R]||W.en,de=D.choices.map((he,ge)=>`${Pe[ge]}. ${he}`).join("<br/>"),le=w?`<p><b>${o("worksheets.answer")}:</b> ${Pe[D.a]}<br/><i>${D.exp}</i></p>`:"";return`<div style="page-break-inside:avoid;margin-bottom:16px"><b>Q${X+1}.</b> ${D.q}<br/>${de}${le}</div>`}).join("");return`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
<head><meta charset="utf-8"><title>${o("worksheets.paperTitle")}</title></head>
<body><h2>${o("worksheets.paperTitle")}</h2>
${a.dateStr&&!w?`<p>${o("worksheets.date")}: ${a.dateStr}</p>`:""}
${Z}</body></html>`}function V(w){const R=I(w),Z=new Blob(["\uFEFF",R],{type:"application/msword"}),W=document.createElement("a");W.href=URL.createObjectURL(Z),W.download=w?"worksheet-answers.doc":"worksheet.doc",W.click(),URL.revokeObjectURL(W.href)}r.addEventListener("click",()=>{const w=Number(t.querySelector("[data-ws-count]").value),R=[...t.querySelectorAll("[data-ws-topic]")].filter(X=>X.checked).map(X=>X.getAttribute("data-ws-topic")),Z=Gt(n,R,s.topicFilter),W=Ve(Z).slice(0,Math.min(w,Z.length||1));a.items=W.length?W:Ve(n).slice(0,Math.min(w,n.length)),d(),a.tab="practice",a.dateStr="",u.hidden=!1,j.hidden=!0,H==null||H.querySelectorAll("[data-ws-tab]").forEach(X=>{X.classList.toggle("active",X.getAttribute("data-ws-tab")==="practice")}),M&&(M.hidden=!1),F&&(F.hidden=!1),g&&(g.hidden=!0),$.textContent="",L==null||L.classList.add("practice-mode"),J()}),H==null||H.addEventListener("click",w=>{const R=w.target.closest("[data-ws-tab]");!R||!a.items.length||k(R.getAttribute("data-ws-tab"))}),E==null||E.addEventListener("click",()=>{a.dateStr?(a.dateStr="",$.textContent=""):(a.dateStr=jt(),$.textContent=`${o("worksheets.date")}: ${a.dateStr}`),g&&(g.hidden=!a.dateStr,g.textContent=a.dateStr?`${o("worksheets.date")}: ${a.dateStr}`:"")}),(ee=t.querySelector("[data-ws-word-p]"))==null||ee.addEventListener("click",()=>V(!1)),(ne=t.querySelector("[data-ws-word-a]"))==null||ne.addEventListener("click",()=>V(!0)),(te=t.querySelector("[data-ws-print-p]"))==null||te.addEventListener("click",()=>{k("practice"),L==null||L.classList.add("ws-print-blank");const w=()=>L==null?void 0:L.classList.remove("ws-print-blank");window.addEventListener("afterprint",w,{once:!0}),window.print()}),(ae=t.querySelector("[data-ws-print-a]"))==null||ae.addEventListener("click",()=>{k("answer"),window.print()})}const Bt=1.7,Nt=.7,De=1,Qt=.1,Vt=3;function Kt(t){const n=Math.floor(t),o=t-n;return n+(Math.random()<o?1:0)}function Ke(t){for(let n=t.length-1;n>0;n-=1){const o=Math.floor(Math.random()*(n+1));[t[n],t[o]]=[t[o],t[n]]}return t}function Ut(t){const n=new Map(t.map(a=>[a.id,a.copies])),o=[];let i=null;const s=t.reduce((a,r)=>a+r.copies,0);for(let a=0;a<s;a+=1){let r=[...n.entries()].filter(([A,L])=>L>0&&A!==i);r.length===0&&(r=[...n.entries()].filter(([,A])=>A>0)),r.sort((A,L)=>L[1]-A[1]);const[u,j]=r[0];o.push(u),n.set(u,j-1),i=u}return o}function Yt(t){const n=[];return t.forEach(({id:o,copies:i})=>{for(let s=0;s<i;s+=1)n.push(o)}),n}function Xt(t){let n="sequence",o=1,i=[],s=[],a=0,r=!1,u=!1,j=!1;const A=new Map;function L(){return t()}function H(){return new Map(L().map(d=>[d.id,d]))}function M(){A.clear(),L().forEach(d=>{A.set(d.id,{nextRate:De,totalGotIt:0,roundAgain:0,roundGotIt:0,roundNeutral:0})})}function K(){const d=L();return o===1?d.map(f=>({id:f.id,copies:1})):d.map(f=>{var h;return{id:f.id,copies:Kt(((h=A.get(f.id))==null?void 0:h.nextRate)??De)}}).filter(f=>f.copies>0)}function x(d){if(d.length===0)return[];if(o===1){const f=d.map(h=>h.id);return n==="random"?Ke([...f]):[...f].sort((h,k)=>h-k)}return n==="random"?Ke(Yt(d)):Ut(d)}function _(){if(u=!1,j=!1,i=K(),i.reduce((f,h)=>f+h.copies,0)===0){j=!0,u=!0,s=[],a=0;return}L().forEach(f=>{const h=A.get(f.id);h&&(h.roundAgain=0,h.roundGotIt=0,h.roundNeutral=0)}),s=x(i),a=0,r=!1}function F(){o=1,M(),_()}function g(){return s[a]??null}function E(){const d=g();return d==null?null:H().get(d)??null}function $(d){const f=g();if(f==null)return;const h=A.get(f);h&&(d==="again"?(h.nextRate=Bt,h.totalGotIt=0,h.roundAgain+=1):d==="gotit"?(h.totalGotIt+=1,h.roundGotIt+=1,h.nextRate=h.totalGotIt>=Vt?Qt:Nt):d==="neutral"&&(h.roundNeutral+=1,h.nextRate=De))}function U(){return r=!1,a<s.length-1?(a+=1,!1):(u=!0,!0)}return F(),{getMode:()=>n,setMode(d){n!==d&&(n=d,s=x(i),a=0,r=!1)},resetSession:F,getRoundNumber:()=>o,getProgress:()=>({index:s.length?a+1:0,total:s.length}),isFlipped:()=>r,flip(){r=!r},unflip(){r=!1},currentCard:E,prev(){return a>0?(a-=1,r=!1,!0):!1},nextNavigate(){return a<s.length-1?(a+=1,r=!1,!0):!1},rateAgain(){return r?($("again"),U()):!1},rateGotIt(){return r?($("gotit"),U()):!1},rateNeutral(){return r?($("neutral"),U()):!1},isSummary:()=>u,isSessionComplete:()=>j,getRoundStats(){let d=0,f=0,h=0;return A.forEach(k=>{d+=k.roundAgain,f+=k.roundGotIt,h+=k.roundNeutral}),{again:d,gotIt:f,neutral:h}},nextRound(){o+=1,_()},restart(){F()}}}function yt(t,{deckOptions:n,buildDeck:o,initialDeck:i="all"}){let s=i,a=null,r=null;t.innerHTML=`
    <section class="panel panel--flashcards">
      <h2>${l("flashcards.title")}</h2>
      <p class="lead">${l("flashcards.intro")}</p>
      <div class="flash-study-controls no-print">
        <div class="control">
          <label>${l("flashcards.deck")}</label>
          <select data-fc-deck>
            ${n.map(g=>`<option value="${g.value}">${g.label}</option>`).join("")}
          </select>
        </div>
        <div class="flash-mode-toggle" data-fc-mode>
          <button type="button" data-mode="sequence" class="active">${l("flashcards.mode.sequence")}</button>
          <button type="button" data-mode="random">${l("flashcards.mode.random")}</button>
        </div>
      </div>
      <div class="flash-study-header no-print">
        <span class="flash-round-badge" data-fc-round></span>
        <span class="flashcard-progress muted" data-fc-progress></span>
      </div>
      <div data-fc-study-panel>
        <div class="flashcard-box">
          <div class="flashcard-surface" data-fc-card>
            <div class="label" data-fc-label>${l("flashcards.question")}</div>
            <div class="body" data-fc-body></div>
          </div>
          <p class="flash-rating-hint muted" data-fc-hint></p>
          <div class="flash-toolbar flash-rating-row no-print">
            <button class="btn" type="button" data-fc-prev>${l("flashcards.prev")}</button>
            <button class="btn danger" type="button" data-fc-again>${l("flashcards.again")}</button>
            <button class="btn primary" type="button" data-fc-flip>${l("flashcards.flip")}</button>
            <button class="btn success" type="button" data-fc-gotit>${l("flashcards.gotIt")}</button>
            <button class="btn" type="button" data-fc-next>${l("flashcards.next")}</button>
          </div>
        </div>
      </div>
      <div class="flash-summary-panel" data-fc-summary hidden>
        <h3 data-fc-summary-title></h3>
        <p class="muted" data-fc-summary-stats></p>
        <div class="flash-summary-counts">
          <span data-fc-summary-keep></span>
          <span data-fc-summary-confident></span>
        </div>
        <div class="flash-toolbar no-print">
          <button class="btn primary" type="button" data-fc-next-round>${l("flashcards.summary.nextRound")}</button>
          <button class="btn" type="button" data-fc-restart>${l("flashcards.summary.restart")}</button>
        </div>
      </div>
    </section>`;const u={deck:t.querySelector("[data-fc-deck]"),mode:t.querySelector("[data-fc-mode]"),round:t.querySelector("[data-fc-round]"),progress:t.querySelector("[data-fc-progress]"),studyPanel:t.querySelector("[data-fc-study-panel]"),summaryPanel:t.querySelector("[data-fc-summary]"),card:t.querySelector("[data-fc-card]"),label:t.querySelector("[data-fc-label]"),body:t.querySelector("[data-fc-body]"),hint:t.querySelector("[data-fc-hint]"),prev:t.querySelector("[data-fc-prev]"),again:t.querySelector("[data-fc-again]"),flip:t.querySelector("[data-fc-flip]"),gotit:t.querySelector("[data-fc-gotit]"),next:t.querySelector("[data-fc-next]"),summaryTitle:t.querySelector("[data-fc-summary-title]"),summaryStats:t.querySelector("[data-fc-summary-stats]"),summaryKeep:t.querySelector("[data-fc-summary-keep]"),summaryConfident:t.querySelector("[data-fc-summary-confident]"),nextRound:t.querySelector("[data-fc-next-round]"),restart:t.querySelector("[data-fc-restart]")};function j(){a=Xt(()=>o(s))}function A(g,E){const $=!E;u.prev.disabled=$,u.again.disabled=$||!g,u.gotit.disabled=$||!g,u.flip.disabled=$,u.next.disabled=$}function L(){const g=a.currentCard(),E=a.isFlipped();if(!g){u.label.hidden=!0,u.body.textContent="",u.card.classList.remove("flashcard-surface--image"),A(!1,!1),u.hint.textContent="";return}if(g.isImage){u.card.classList.add("flashcard-surface--image"),g.backImage&&g.backImage!==g.frontImage?(u.label.hidden=!1,u.label.textContent=l(E?"flashcards.answer":"flashcards.question")):u.label.hidden=!0;const U=E&&g.backImage?g.backImage:g.frontImage,d=(g.alt||"").replace(/"/g,"&quot;"),f=(g.alt||l("flashcards.question")).replace(/</g,"&lt;");u.body.innerHTML=`<img src="${U}" alt="${d}" loading="lazy" data-fc-img /><p class="flash-img-fallback muted" data-fc-img-fallback hidden>${f}</p>`;const h=u.body.querySelector("[data-fc-img]"),k=u.body.querySelector("[data-fc-img-fallback]");h&&k&&(h.onerror=()=>{h.hidden=!0,k.hidden=!1},h.onload=()=>{h.hidden=!1,k.hidden=!0})}else u.card.classList.remove("flashcard-surface--image"),u.label.hidden=!1,u.label.textContent=l(E?"flashcards.answer":"flashcards.question"),u.body.textContent=E?g.back:g.front;A(E,!0),u.hint.textContent=l(E?"flashcards.hint.rated":"flashcards.flipFirst")}function H(){const g=a.getRoundStats(),{total:E}=a.getProgress();a.isSessionComplete()?(u.summaryTitle.textContent=l("flashcards.summary.complete"),u.summaryStats.textContent=l("flashcards.summary.completeStats"),u.nextRound.hidden=!0):(u.summaryTitle.textContent=l("flashcards.summary.title").replace("{round}",String(a.getRoundNumber())),u.summaryStats.textContent=l("flashcards.summary.stats").replace("{total}",String(E)).replace("{again}",String(g.again)).replace("{gotIt}",String(g.gotIt)).replace("{neutral}",String(g.neutral)),u.nextRound.hidden=!1),u.summaryKeep.textContent=l("flashcards.summary.keep").replace("{count}",String(g.again)),u.summaryConfident.textContent=l("flashcards.summary.confident").replace("{count}",String(g.gotIt))}function M(){const{index:g,total:E}=a.getProgress();u.round.textContent=l("flashcards.round").replace("{round}",String(a.getRoundNumber())).replace("{total}",String(E)),u.progress.textContent=E?l("flashcards.progress").replace("{current}",String(g)).replace("{total}",String(E)):"";const $=a.isSummary();u.studyPanel.hidden=$,u.summaryPanel.hidden=!$,$?H():L()}function K(){const g=a.getMode();u.mode.querySelectorAll("button").forEach(E=>{E.classList.toggle("active",E.dataset.mode===g)})}function x(){a.currentCard()&&(a.flip(),L())}function _(){t.querySelector("h2").textContent=l("flashcards.title"),t.querySelector(".lead").textContent=l("flashcards.intro"),t.querySelector("[data-fc-deck]").previousElementSibling.textContent=l("flashcards.deck"),u.mode.querySelector('[data-mode="sequence"]').textContent=l("flashcards.mode.sequence"),u.mode.querySelector('[data-mode="random"]').textContent=l("flashcards.mode.random"),u.prev.textContent=l("flashcards.prev"),u.again.textContent=l("flashcards.again"),u.flip.textContent=l("flashcards.flip"),u.gotit.textContent=l("flashcards.gotIt"),u.next.textContent=l("flashcards.next"),u.nextRound.textContent=l("flashcards.summary.nextRound"),u.restart.textContent=l("flashcards.summary.restart"),M()}u.deck.value=s,u.deck.addEventListener("change",()=>{s=u.deck.value,j(),K(),M()}),u.mode.querySelectorAll("button").forEach(g=>{g.addEventListener("click",()=>{a.setMode(g.dataset.mode),K(),M()})}),u.card.addEventListener("click",g=>{g.target.closest("button")||x()}),u.flip.addEventListener("click",g=>{g.stopPropagation(),x()}),u.prev.addEventListener("click",()=>{a.prev(),M()}),u.again.addEventListener("click",()=>{a.rateAgain()?M():L()}),u.gotit.addEventListener("click",()=>{a.rateGotIt()?M():L()}),u.next.addEventListener("click",()=>{a.isFlipped()?a.rateNeutral()?M():L():a.nextNavigate()&&M()}),u.nextRound.addEventListener("click",()=>{a.nextRound(),M()}),u.restart.addEventListener("click",()=>{a.restart(),M()}),r=g=>{var $;if(!t.isConnected)return;const E=($=g.target)==null?void 0:$.tagName;if(!(E==="INPUT"||E==="SELECT"||E==="TEXTAREA")){if(g.code==="Space"){g.preventDefault(),x();return}if(g.key==="ArrowLeft"){a.isFlipped()?a.rateAgain()?M():L():(a.prev(),M());return}if(g.key==="ArrowRight"||g.key==="1"){a.isFlipped()?a.rateGotIt()?M():L():a.nextNavigate()&&M();return}g.key==="2"&&a.isFlipped()&&(a.rateAgain()?M():L())}},window.addEventListener("keydown",r);const F=()=>{j(),K(),_()};return window.addEventListener("s3phy:lang",F),j(),K(),M(),()=>{window.removeEventListener("keydown",r),window.removeEventListener("s3phy:lang",F),a==null||a.restart(),t.innerHTML=""}}function Zt(t){const n=String(t).replace(/^\.\//,""),o=window.location.origin,i=window.location.pathname,s=i.match(/^(.*\/dist)\/?/);if(s)return`${o}${s[1]}/${n}`;let a="./";a.endsWith("/")||(a+="/");const r=i.endsWith("/")?i:i.replace(/\/[^/]*$/,"/")||"/";return new URL(`${a}${n}`,`${o}${r}`).href}const wt=JSON.parse(`[{"topic":"refraction","en":{"q":"What is refraction?","a":"Definition of Refraction Refraction is the bending of light when passing from one medium to another Light changes speed and direction Frequency remains constant Wavelength changes"},"zhHant":{"q":"什麼是光的折射？","a":"光從一種介質進入另一種介質時 光速改變，導致光線改變方向 發生在兩種介質的交界面"}},{"topic":"refraction","en":{"q":"What happens when light enters denser medium?","a":"Light Entering Denser Medium Light slows down Light bends towards normal Angle of refraction < Angle of incidence ( ) r<i Examples: Air → Water, Air → Glass"},"zhHant":{"q":"折射率的定義公式是什麼？","a":"n= vc ：真空中的光速（ m/s） c 3×108 ：光在介質中的速度 v 折射率越大，光速越慢"}},{"topic":"refraction","en":{"q":"What happens when light enters less dense medium?","a":"Light Entering Less Dense Medium Light speeds up Light bends away from normal Angle of refraction > Angle of incidence ( ) r>i Examples: Water → Air, Glass → Air Q: When does light NOT bend? A: Q: What is refractive index? A: Q: What are common refractive indices? A:"},"zhHant":{"q":"斯涅爾定律的公式是什麼？","a":"n sinθ =1 1 n sinθ 2 2 sini=nsinr 問題： 折射定律的內容是什麼？ 答案： 問題： 什麼是光密介質和光疏介質？ 答案： 問題： 光線什麼時候向法線靠攏？什麼時候遠離法線？ 答案： 問題： 折射率與光速有什麼關係？ 答案："}},{"topic":"refraction","en":{"q":"When does light NOT bend?","a":"No Refraction Cases Normal incidence: Light hits at 90° (along normal)1. Same medium: No boundary crossed2. Direction unchanged in both cases"},"zhHant":{"q":"折射定律的內容是什麼？","a":"法線、入射光線和折射光線都在同一平面上1. （斯涅爾定律） 2. =sinrsini 常數"}},{"topic":"refraction","en":{"q":"What is refractive index?","a":"Refractive Index Definition n= vc = refractive index (no unit) n = speed of light in vacuum ( m s ) c 3×108 −1 = speed of light in medium v always n≥1"},"zhHant":{"q":"什麼是光密介質和光疏介質？","a":"光密介質：折射率較大的介質 光疏介質：折射率較小的介質 例如：玻璃（光密）、空氣（光疏）"}},{"topic":"refraction","en":{"q":"What are common refractive indices?","a":"Common Refractive Indices Higher → Optically denser Q: What is Snell's Law? A: Q: Snell's Law when light enters from air? A: Since : Vacuum: 1.00 (exactly) Air: 1.00 (≈ 1.0003) Water: 1.33 Glass: 1.50 (typical) Diamond: 2.42 n"},"zhHant":{"q":"光線什麼時候向法線靠攏？什麼時候遠離法線？","a":"向法線靠攏：從光疏介質進入光密介質 例如：空氣 → 水、空氣 → 玻璃 遠離法線：從光密介質進入光疏介質 例如：水 → 空氣、玻璃 → 空氣"}},{"topic":"refraction","en":{"q":"What is Snell's Law?","a":"Snell's Law n sini=1 n sinr2 = refractive index of first medium n 1 = angle of incidence i = refractive index of second medium n 2 = angle of refraction r"},"zhHant":{"q":"折射率與光速有什麼關係？","a":"問題： 當光線垂直入射（沿法線入射）時會發生什麼？ 答案： 問題： 視深的公式是什麼？ 答案： 或 物體看起來比實際位置淺 問題： 水的折射率 = 1.33，實際深度 = 4 m，視深是多少？ 答案： 折射率越大 → 光速越慢 折射率越小 → 光速越快 所有介質的折射率 （除空氣外） n>1"}},{"topic":"refraction","en":{"q":"Snell's Law when light enters from air?","a":"Snell's Law - Air Entry n ≈air 1 or Simplifies calculations Q: What is the apparent depth formula? A: or Q: Why does apparent depth occur? A: sini=nsinr n= sinrsini"},"zhHant":{"q":"當光線垂直入射（沿法線入射）時會發生什麼？","a":"光線不改變方向 但光速仍會改變 入射角 = 0°，折射角 = 0°"}},{"topic":"refraction","en":{"q":"What is the apparent depth formula?","a":"Real vs Apparent Depth n= Apparent depth Real depth Apparent depth= n Real depth Object underwater appears shallower than actual For water ( ): Apparent ≈ 0.75 × Real n=1.33"},"zhHant":{"q":"視深的公式是什麼？","a":"n= 視深 實際深度 視深= n 實際深度"}},{"topic":"refraction","en":{"q":"Why does apparent depth occur?","a":"Apparent Depth Phenomenon Light from underwater object refracts at water-air boundary Light bends away from normal (entering less dense) Eyes trace refracted rays back as straight lines Object appears closer to surface than it really is Q: What is dispersion of light? A: Q: Order of colors in dispersion (least to most deviated)? A: Red → Orange → Yellow → Green → Blue → Indigo → Violet Mnemonic: ROY G BIV Q: How do refractive indices compare for different colors? A:"},"zhHant":{"q":"水的折射率 = 1.33，實際深度 = 4 m，視深是多少？","a":"視深= =1.334 3 m 物體看起來只有 3 m 深 問題： 什麼是光的色散？ 答案： 問題： 不同顏色光的折射率大小順序是什麼？ 答案： 問題： 不同顏色光在介質中的速度大小順序是什麼？ 答案："}},{"topic":"refraction","en":{"q":"What is dispersion of light?","a":"Dispersion Definition Dispersion is separation of white light into component colors Different wavelengths have different refractive indices Shorter wavelength → Higher → Bends more n Longer wavelength → Lower → Bends less n"},"zhHant":{"q":"什麼是光的色散？","a":"白光通過三棱鏡被分解成不同顏色 不同顏色的光有不同的折射率 光譜順序：紅橙黃綠藍靛紫"}},{"topic":"refraction","en":{"q":"Order of colors in dispersion (least to most deviated)?","a":"Dispersion Color Order Red: Lowest , bends least n Violet: Highest , bends most n"},"zhHant":{"q":"不同顏色光的折射率大小順序是什麼？","a":"n >紫 n >藍 n >綠 n >黃 n >橙 n 紅 紫光折射率最大 紅光折射率最小"}},{"topic":"refraction","en":{"q":"How do refractive indices compare for different colors?","a":"Refractive Index and Color Q: How do optical fibers use refraction? A: Q: What are examples of atmospheric refraction? A: Q: Steps to draw refraction ray diagram? A: n <red n <orange n <yellow n <green n <blue n violet Violet has highest refractive index Red has lowest refractive index Violet bends most in prism"},"zhHant":{"q":"不同顏色光在介質中的速度大小順序是什麼？","a":"v >紅 v >橙 v >黃 v >綠 v >藍 v 紫 紅光速度最快 紫光速度最慢 在空氣中所有顏色光速相同！ 問題： 哪種顏色的光偏折最多？哪種最少？ 答案： 問題： 入射角 = 30°，折射率 = 1.5，折射角是多少？ 答案： 問題： 入射角 = 60°，折射角 = 40°，折射率是多少？ 答案： 問題： 如何從光線的偏折判斷介質的光學密度？ 答案："}},{"topic":"refraction","en":{"q":"How do optical fibers use refraction?","a":"Optical Fibers Use total internal reflection (special refraction case) Light trapped inside fiber core Transmits signals over long distances Applications: Telecommunications, internet, medical endoscopes"},"zhHant":{"q":"哪種顏色的光偏折最多？哪種最少？","a":"紫光偏折最多（彎曲最大） 紅光偏折最少（彎曲最小） 折射率越大，偏折越多"}},{"topic":"refraction","en":{"q":"What are examples of atmospheric refraction?","a":"Atmospheric Refraction Sunrise/Sunset: Sun visible before rising/after setting Twinkling stars: Light refracted by moving air Mirages: Hot air near ground causes refraction Due to varying air density"},"zhHant":{"q":"入射角 = 30°，折射率 = 1.5，折射角是多少？","a":"sin30°=1.5×sinr 0.5=1.5×sinr sinr=0.333 r=19.5°"}},{"topic":"refraction","en":{"q":"Steps to draw refraction ray diagram?","a":"Ray Diagram Steps Draw normal at boundary1. Draw incident ray to boundary2. Q: Steps for Snell's Law calculations? A: Tip: Calculator in degree mode! Q: Relationship between speed and refractive index? A: Determine: Denser or less dense?3. Bend towards (denser) or away (less dense) from normal4. Measure angles from normal5."},"zhHant":{"q":"入射角 = 60°，折射角 = 40°，折射率是多少？","a":"n= =sin40°sin60° =0.6430.866 1.35"}},{"topic":"refraction","en":{"q":"Steps for Snell's Law calculations?","a":"Snell's Law Calculation Steps Identify: , , , 1. n 1 n 2 i r Write: 2. n sini=1 n sinr2 Substitute known values3. Solve for unknown4. Check: Denser → smaller angle5."},"zhHant":{"q":"如何從光線的偏折判斷介質的光學密度？","a":"光線向法線靠攏 → 進入光密介質 光線遠離法線 → 進入光疏介質 問題： 光發生折射時，什麼保持不變？ 答案： 問題： 如何用實驗驗證斯涅爾定律？ 答案： 問題： 記住這些常見介質的折射率 答案： 不偏折 → 垂直入射或相同介質"}},{"topic":"refraction","en":{"q":"Relationship between speed and refractive index?","a":"Speed and Refractive Index n= vc Higher n Q: How does wavelength change during refraction? A: Q: Does frequency change during refraction? A: ✅ No! Q: Does light always bend when crossing boundary? A: ❌ Wrong! → Lower speed (denser medium) Lower → Higher speed (less dense medium) n Inverse relationship"},"zhHant":{"q":"光發生折射時，什麼保持不變？","a":"頻率 (f) 保持不變 速度會改變 波長會改變 方向會改變（除垂直入射外）"}},{"topic":"refraction","en":{"q":"How does wavelength change during refraction?","a":"Wavelength Change =λ 2 λ 1 n 1 n 2 Entering denser medium → Wavelength decreases Entering less dense medium → Wavelength increases Frequency remains constant"},"zhHant":{"q":"如何用實驗驗證斯涅爾定律？","a":"使用半圓形玻璃磚1. 測量不同入射角和對應的折射角2. 繪製 對 的圖表 3. sini sinr 結果：通過原點的直線，斜率 = 折射率4."}},{"topic":"refraction","en":{"q":"Does frequency change during refraction?","a":"Frequency During Refraction Frequency remains constant Determined by source, not medium Only speed and wavelength change"},"zhHant":{"q":"記住這些常見介質的折射率","a":"空氣： n≈1.00 問題： 玻璃的折射率 = 1.5，光在玻璃中的速度是多少？ 答案： 問題： 光通過多層不同介質時，如何應用斯涅爾定律？ 答案： 問題： 光線與界面成 40° 角，入射角是多少？ 答案： 水： n≈1.33 玻璃： n≈1.5 鑽石： n≈2.42"}},{"topic":"refraction","en":{"q":"Does light always bend when crossing boundary?","a":"Common Misconception (1) Light does not bend at normal incidence (along normal) Q: Does light bend towards normal entering less dense? A: ❌ Wrong! Q: Can refractive index be less than 1? A: ❌ Wrong! Q: Does frequency change during refraction? A: ❌ Wrong! Also no bending if staying in same medium"},"zhHant":{"q":"玻璃的折射率 = 1.5，光在玻璃中的速度是多少？","a":"n= vc v= =nc =1.53×108 2×10 m/s8"}},{"topic":"refraction","en":{"q":"Does light bend towards normal entering less dense?","a":"Common Misconception (2) Light bends away from normal when entering less dense Towards normal only when entering denser"},"zhHant":{"q":"光通過多層不同介質時，如何應用斯涅爾定律？","a":"在每個交界面分別應用斯涅爾定律 n sinθ =1 1 n sinθ =2 2 n sinθ 3 3 如果最後回到原介質，出射角 = 入射角"}},{"topic":"refraction","en":{"q":"Can refractive index be less than 1?","a":"Common Misconception (3) Refractive index always n≥1 Vacuum has minimum n=1 All materials have n>1"},"zhHant":{"q":"光線與界面成 40° 角，入射角是多少？","a":"入射角 = 90° - 40° = 50° 問題： 為什麼從空氣中看水底的物體會變淺？ 答案： 問題： 什麼情況下會發生色散？ 答案： ✅ 記憶口訣： ✅ 常見錯誤： 記住：入射角是與法線的夾角 法線垂直於界面"}},{"topic":"refraction","en":{"q":"Does frequency change during refraction?","a":"Common Misconception (4) Frequency remains constant Only speed and wavelength change Q: Does red light have higher n than violet? A: ❌ Wrong! Q: What are main applications of refraction? A: Q: What must be remembered for HKDSE exam? A: Frequency determined by source"},"zhHant":{"q":"為什麼從空氣中看水底的物體會變淺？","a":"光從水射出到空氣時發生折射 折射光線遠離法線 眼睛沿直線反向延伸 看到的影像位置比實際位置高"}},{"topic":"refraction","en":{"q":"Does red light have higher n than violet?","a":"Common Misconception (5) Violet has higher than red n Violet bends more than red n >violet n red"},"zhHant":{"q":"什麼情況下會發生色散？","a":"白光通過三棱鏡 白光以非垂直角度進入介質 不會發生：垂直入射矩形玻璃磚 原因：不同顏色光的折射率不同 學習小貼士 「密靠疏離」：進入光密介質向法線靠攏，進入光疏介質遠離法線 「紫慢紅快」：紫光速度最慢，紅光速度最快 「大折小速」：折射率大，光速小 ❌ 把入射角當作與界面的夾角 ✅ 入射角是與法線的夾角 ✅ 考試技巧： ✅ 公式速記： ❌ 認為所有顏色光在空氣中速度不同 ✅ 在空氣中所有顏色光速度相同 先畫法線（虛線，垂直於界面） 判斷光密或光疏介質 使用 n sinθ =1 1 n sinθ 2 2 計算時注意角度單位（度或弧度） 檢查答案是否合理（折射角應小於 90°） 折射率： n= vc 斯涅爾定律： n sinθ =1 1 n sinθ 2 2 視深： 視深= n 實際深度"}},{"topic":"refraction","en":{"q":"What are main applications of refraction?","a":"Applications Summary Lenses: Camera, eyeglasses, microscope Optical fibers: Telecommunications Prism: Dispersion, spectroscopy Atmospheric effects: Sunrise, mirages Everyday: Bent straw, shallow pool"}},{"topic":"refraction","en":{"q":"What must be remembered for HKDSE exam?","a":"HKDSE Must Remember Denser → Towards normal, slows1. Less dense → Away from normal, speeds up2. Q: Tips for refraction exam questions? A: Q: Mnemonic for refraction direction? A: To denser, towards normal To less dense, away from normal Slow down, bend in Speed up, bend out , 3. n= vc n≥1 Snell's Law: 4. n sini=1 n sinr2 Apparent depth: 5. n= ApparentReal Dispersion: Red least, violet most6."}},{"topic":"refraction","en":{"q":"Tips for refraction exam questions?","a":"Exam Tips Measure angles from normal Calculator in degree mode Draw neat diagrams with ruler Label: Normal, rays, angles State: Towards/away from normal Show all working"}},{"topic":"refraction","en":{"q":"Mnemonic for refraction direction?","a":"Memory Mnemonic - Direction Q: Mnemonics for key formulas? A: Snell's Law: n ₁ sin i = n ₂ sin r Refractive Index: n = c over v Higher n, slower speed Apparent Depth: n equals real over apparent Looks shallower than it is Dispersion: ROY G BIV Red bends least, violet most"}},{"topic":"refraction","en":{"q":"Mnemonics for key formulas?","a":"Memory Mnemonic - Formulas"}},{"topic":"tir","en":{"q":"What is Total Internal Reflection (TIR)?","a":"Definition of TIR Light traveling in denser medium hits boundary with less dense medium At angle greater than critical angle All light reflected back into denser medium No refraction occurs"},"zhHant":{"q":"什麼是全內反射？","a":"光線在介質交界面完全被反射回原介質 沒有折射光線產生 所有光能量都被反射"}},{"topic":"tir","en":{"q":"What are the TWO conditions for TIR to occur?","a":"Two Conditions for TIR ✅ Light travels from denser to less dense ( ) 1. n >1 n 2 ✅ Angle of incidence > critical angle ( ) 2. i>c"},"zhHant":{"q":"全內反射發生的兩個必要條件是什麼？","a":"光必須從光密介質進入光疏介質1. 入射角 (i) > 臨界角 (c)2."}},{"topic":"tir","en":{"q":"What is the critical angle?","a":"Critical Angle Definition Critical angle (c) is angle of incidence in denser medium For which angle of refraction = 90° (along boundary) Defines boundary between refraction and TIR Depends on refractive indices of both media Q: What is the critical angle formula? A: For medium to air ( ): or Q: What are common critical angles? A:"},"zhHant":{"q":"臨界角的公式是什麼？","a":"sinc= n 1 c=sin −1(n 1) n 問題： 什麼是臨界角？ 答案： 問題： 折射率和臨界角有什麼關係？ 答案： 問題： i < c、i = c、i > c 時分別發生什麼？ 答案： 問題： 記住這些常見介質的臨界角 答案："}},{"topic":"tir","en":{"q":"What is the critical angle formula?","a":"Critical Angle Formula sinc= n 1 n 2 n =2 1 sinc= n 1 c=sin −1(n1)"},"zhHant":{"q":"什麼是臨界角？","a":"當光從光密介質進入光疏介質時 折射角剛好等於 90° 時的入射角 此時折射光線沿著交界面傳播"}},{"topic":"tir","en":{"q":"What are common critical angles?","a":"Common Critical Angles Water → Air ( ): n=1.33 c≈49° Glass → Air ( ): n=1.50 c≈42° Diamond → Air ( ): n=2.42 Higher n → Smaller c Q: What happens when ? A: Q: What happens when ? A: Q: What happens when c≈24°"},"zhHant":{"q":"折射率和臨界角有什麼關係？","a":"折射率越大 → 臨界角越小 折射率越小 → 臨界角越大 例如：鑽石 (n=2.42, c≈24°)、水 (n=1.33, c≈49°)"}},{"topic":"tir","en":{"q":"What happens when","a":"Case 1 - i < c i<c Most light refracted into less dense medium Refracted ray bends away from normal Small amount reflected (partial reflection) Normal refraction occurs"},"zhHant":{"q":"i < c、i = c、i > c 時分別發生什麼？","a":"i < c：同時有反射和折射（折射較強） i = c：折射角 = 90°，折射光沿界面 i > c：只有反射，沒有折射（全內反射）"}},{"topic":"tir","en":{"q":"What happens when","a":"Case 2 - i = c i=c Refracted ray travels along boundary ( ) r=90° Angle of refraction exactly 90° This is the critical condition Defines the critical angle"},"zhHant":{"q":"記住這些常見介質的臨界角","a":"水 (n=1.33)：c ≈ 49° 玻璃 (n=1.5)：c ≈ 42° 問題： 玻璃的折射率 = 1.5，臨界角是多少？ 答案： 問題： 水的折射率 = 1.33，入射角 = 50°，是否發生全內反射？ 答案： 問題： 從玻璃 (n=1.5) 到水 (n=1.33) 的臨界角公式是什麼？ 答案： 通用公式： 鑽石 (n=2.42)：c ≈ 24° 塑膠 (n=1.6)：c ≈ 39°"}},{"topic":"tir","en":{"q":"What happens when","a":"Case 3 - i > c i>c ? A: Q: How does TIR compare to ordinary reflection? A: TIR: Ordinary Reflection: TIR is more efficient! Q: What is the structure of optical fiber? A: All light reflected back into denser medium No refraction (no light escapes) Total Internal Reflection occurs Follows law of reflection: i=r"},"zhHant":{"q":"玻璃的折射率 = 1.5，臨界角是多少？","a":"sinc= =1.51 0.667 c=sin (0.667)=−1 42°"}},{"topic":"tir","en":{"q":"How does TIR compare to ordinary reflection?","a":"TIR vs Ordinary Reflection 100% reflection (no loss) Very bright, clear Requires specific conditions Some light absorbed May be dim Works on any surface"},"zhHant":{"q":"水的折射率 = 1.33，入射角 = 50°，是否發生全內反射？","a":"臨界角：1. c=sin ( )=−1 1.33 1 48.8° 入射角 (50°) > 臨界角 (48.8°)2. 會發生全內反射3."}},{"topic":"tir","en":{"q":"What is the structure of optical fiber?","a":"Optical Fibers - Structure Core: High refractive index (carries light) Cladding: Lower refractive index (surrounds core) Light trapped by TIR at core-cladding boundary Minimal light loss over long distances Q: How do optical fibers use TIR? A: Q: How do prisms use TIR? A: 45°-45°-90° Prism: Applications: Periscope, binoculars, SLR cameras Q: Why are prisms better than mirrors? A: Prisms (using TIR):"},"zhHant":{"q":"從玻璃 (n=1.5) 到水 (n=1.33) 的臨界角公式是什麼？","a":"sinc= =n 1 n 2 =1.5 1.33 0.887 c=62.5° sinc= n 密 n 疏 問題： 為什麼魚在水中只能在圓錐範圍內看到水面上的景物？ 答案： 問題： 潛水員在水面下 3 m，水的 n=1.33，水面可見圓形範圍的半徑是多少？ 答案： 問題： 海市蜃樓（沙漠或路面上的「水面」）是如何形成的？ 答案："}},{"topic":"tir","en":{"q":"How do optical fibers use TIR?","a":"Optical Fibers - How It Works Light enters fiber at small angle1. Hits core-cladding boundary at 2. i>c TIR keeps light trapped in core3. Light travels long distances with minimal loss4. Used in telecommunications, internet, medical endoscopes5."},"zhHant":{"q":"為什麼魚在水中只能在圓錐範圍內看到水面上的景物？","a":"圓錐的半角 = 臨界角（約 49°） 超過臨界角的光線發生全內反射 圓錐外的水面看起來像鏡子 無法看到水面上的景物"}},{"topic":"tir","en":{"q":"How do prisms use TIR?","a":"Prisms in Optical Instruments Light enters at 90° (no refraction) Hits internal surface at 45° For glass ( ): 45° > 42°, TIR occurs c≈42° Reflects light by 90° or 180°"},"zhHant":{"q":"潛水員在水面下 3 m，水的 n=1.33，水面可見圓形範圍的半徑是多少？","a":"臨界角：1. c=48.8° 2. r=d×tanc=3×tan48.8°=3.42 m"}},{"topic":"tir","en":{"q":"Why are prisms better than mirrors?","a":"Prisms vs Mirrors Mirrors: Q: Why do diamonds sparkle so much? A: Q: How do mirages form on hot days? A: No silvering needed 100% reflection (brighter) More durable No degradation Silvering degrades Some light absorbed Less efficient"},"zhHant":{"q":"海市蜃樓（沙漠或路面上的「水面」）是如何形成的？","a":"路面附近的熱空氣折射率較小 光線逐漸向上折射（遠離法線） 入射角逐漸增大 當 i > c 時，發生全內反射 看到的是天空的反射影像 問題： 光纖的結構是什麼？ 答案： 問題： 光纖相比銅線有哪些優點？ 答案： 問題： 反射棱鏡相比平面鏡有哪些優點？ 答案： 問題： 反射棱鏡有哪些應用？"}},{"topic":"tir","en":{"q":"Why do diamonds sparkle so much?","a":"Why Diamonds Sparkle Very high refractive index ( ) n=2.42 Very small critical angle ( ) c≈24° Light easily undergoes TIR inside Multiple internal reflections Creates brilliance and \\"fire\\" Cut design maximizes TIR"},"zhHant":{"q":"光纖的結構是什麼？","a":"內核：折射率較大 外層包層：折射率較小 光在內核和包層交界面發生全內反射 光線在光纖內部不斷反射前進"}},{"topic":"tir","en":{"q":"How do mirages form on hot days?","a":"Mirages - Hot Day Hot air near ground has lower density (lower ) n Q: What does a fish see looking up from water? A: Q: Steps to determine if TIR occurs? A: Light from sky bends away from normal through layers Eventually , TIR occurs i>c Reflected light appears to come from ground Creates illusion of water on road"},"zhHant":{"q":"光纖相比銅線有哪些優點？","a":"訊號傳輸損失少 重量輕、體積小 可傳輸更多資訊 不受電磁干擾"}},{"topic":"tir","en":{"q":"What does a fish see looking up from water?","a":"Fish Eye View Light enters water within cone (angle ≈ 98° for water) Cone angle determined by critical angle Inside cone: Sees above-water world (compressed) Outside cone: TIR occurs, sees underwater reflections Entire above-water world compressed into cone"},"zhHant":{"q":"反射棱鏡相比平面鏡有哪些優點？","a":"不產生多重影像 影像更明亮清晰 反射率接近 100% 不會氧化或褪色"}},{"topic":"tir","en":{"q":"Steps to determine if TIR occurs?","a":"Determining if TIR Occurs Check: Denser to less dense? ( ) 1. n >1 n 2 Calculate: 2. sinc= n 1 n 2 Compare: Is ? 3. i>c If YES: TIR occurs4. If NO: Normal refraction5. Q: How to calculate critical angle from refractive index? A: Given , find : Example: Q: How to calculate refractive index from critical angle? A: Given , find :"},"zhHant":{"q":"反射棱鏡有哪些應用？","a":"答案： 問題： 為什麼鑽石會閃耀？ 答案： 問題： 為什麼鑽石在水中看起來較不閃耀？ 答案： 雙筒望遠鏡 潛望鏡 單反相機 光學儀器"}},{"topic":"tir","en":{"q":"How to calculate critical angle from refractive index?","a":"Calculate Critical Angle n c Use (for medium to air) 1. sinc= n 1 Calculate 2. c=sin −1(n 1) Check calculator in degree mode3. n=1.5 c=sin (1/1.5)≈−1 42°"},"zhHant":{"q":"為什麼鑽石會閃耀？","a":"鑽石的折射率很大（n = 2.42） 臨界角很小（約 24°） 光線容易發生全內反射 光線在鑽石內部多次反射 從不同角度射出，產生閃耀效果"}},{"topic":"tir","en":{"q":"How to calculate refractive index from critical angle?","a":"Calculate Refractive Index c n n= sinc 1 Example: Check: ✓ Q: Why does TIR only work denser → less dense? A: Q: How are refractive index and critical angle related? A: c=42° n= ≈sin42°1 1.5 n>1"},"zhHant":{"q":"為什麼鑽石在水中看起來較不閃耀？","a":"水的折射率（1.33）比空氣（1.00）大 從鑽石到水的臨界角變大 ， sinc= =2.421.33 0.55 c≈33° 較難發生全內反射 閃耀效果減弱 問題： 全內反射和普通反射有什麼分別？ 答案： 問題： 什麼情況下存在臨界角？ 答案： 問題： 全內反射時能量損失多少？ 答案： 問題： 如何用半圓形玻璃磚觀察全內反射？ 答案："}},{"topic":"tir","en":{"q":"Why does TIR only work denser → less dense?","a":"Why TIR Only Works One Way TIR requires i>c Critical angle only exists for denser → less dense Light from less dense → denser: Always refracts (bends towards normal) Cannot have in less dense medium i>90° TIR is one-way phenomenon"},"zhHant":{"q":"全內反射和普通反射有什麼分別？","a":"全內反射：光密→光疏，i > c，無折射，反射率≈100% 普通反射：任何界面，有折射，反射率通常<10%"}},{"topic":"tir","en":{"q":"How are refractive index and critical angle related?","a":"Relationship Between n and c n= sinc1 Higher n → Smaller c → Easier TIR Lower n → Larger c → Harder TIR Diamond (high ) sparkles more than glass (lower n Q: What happens to energy in TIR? A: Q: Can TIR occur from less dense to denser? A: ❌ Wrong! Q: Does TIR occur at any angle? A: ❌ Wrong! ) n"},"zhHant":{"q":"什麼情況下存在臨界角？","a":"✅ 光從光密介質到光疏介質：有臨界角 ❌ 光從光疏介質到光密介質：無臨界角 ❌ 兩種相同介質：無臨界角"}},{"topic":"tir","en":{"q":"What happens to energy in TIR?","a":"Energy in TIR Ordinary reflection: Some energy absorbed TIR: No energy loss (100% reflected) Makes TIR very efficient Basis for optical fiber technology Energy conservation: All reflected"},"zhHant":{"q":"全內反射時能量損失多少？","a":"能量損失幾乎為零 反射率接近 100% 所有光能量都被反射回原介質 這是光纖傳輸效率高的原因"}},{"topic":"tir","en":{"q":"Can TIR occur from less dense to denser?","a":"Common Misconception (1) TIR only occurs denser → less dense Light from less dense → denser always refracts Critical angle doesn't exist for this direction"},"zhHant":{"q":"如何用半圓形玻璃磚觀察全內反射？","a":"光線從圓心沿半徑方向射入（垂直入射）1. 在平面處改變入射角2. 問題： 潛水員越深，水面可見圓形範圍會變大還是變小？ 答案： 問題： 如果玻璃的臨界角 = 42°，玻璃的折射率是多少？ 答案： ✅ 記憶口訣： 觀察反射和折射光線的變化3. 找出臨界角（折射光線消失時的入射角）4."}},{"topic":"tir","en":{"q":"Does TIR occur at any angle?","a":"Common Misconception (2) TIR only when i>c Q: Is critical angle same for all materials? A: ❌ Wrong! Q: Does some light refract during TIR? A: ❌ Wrong! Q: Do optical fibers use ordinary reflection? If : Normal refraction occurs i≤c Must exceed critical angle"},"zhHant":{"q":"潛水員越深，水面可見圓形範圍會變大還是變小？","a":"會變大 臨界角不隨深度改變（仍是 48.8°） 但 r=d×tanc 深度 越大，半徑 越大 d r"}},{"topic":"tir","en":{"q":"Is critical angle same for all materials?","a":"Common Misconception (3) Critical angle depends on refractive index Higher → Smaller n c Each material has different c"},"zhHant":{"q":"如果玻璃的臨界角 = 42°，玻璃的折射率是多少？","a":"sinc= n 1 sin42°= n1 n= =sin42°1 =0.6691 1.49≈1.5 學習小貼士 「密疏大臨」：光密到光疏，入射角大於臨界角 「折率大臨小」：折射率大，臨界角小 ✅ 常見錯誤： ✅ 考試技巧： ✅ 公式速記： ✅ 應用記憶： 「全反無折」：全內反射時，無折射光線 ❌ 從光疏介質到光密介質也會發生全內反射 ✅ 只有從光密到光疏才可能發生全內反射 ❌ 入射角小於臨界角就會發生全內反射 ✅ 入射角必須大於臨界角 先判斷光線傳播方向（光密→光疏？） 計算臨界角： 或 sinc= n 1 sinc= n 1 n 2 比較入射角和臨界角 記住常見介質的臨界角（水≈49°，玻璃≈42°） 魚眼視野問題用 r=d×tanc 臨界角（空氣）： sinc= n 1 臨界角（兩介質）： sinc= n 密 n 疏 魚眼視野半徑： r=d×tanc 光纖 = 全內反射傳輸訊號 反射棱鏡 = 全內反射改變光路 鑽石閃耀 = 臨界角小，易全內反射 魚眼視野 = 圓錐半角 = 臨界角 海市蜃樓 = 熱空氣層全內反射"}},{"topic":"tir","en":{"q":"Does some light refract during TIR?","a":"Common Misconception (4) In TIR, all light reflected (100%) No refraction occurs No light escapes into less dense medium"}},{"topic":"tir","en":{"q":"Do optical fibers use ordinary reflection?","a":"Common Misconception (5) A: ❌ Wrong! Q: Quick summary of three cases? A: Q: What must be remembered for HKDSE exam? A: Optical fibers use Total Internal Reflection More efficient (no light loss) Brighter signal over long distances"}},{"topic":"tir","en":{"q":"Quick summary of three cases?","a":"Three Cases Summary : Refraction (most light escapes) i<c : Critical (light along boundary) i=c : TIR (all light reflected) i>c"}},{"topic":"tir","en":{"q":"What must be remembered for HKDSE exam?","a":"HKDSE Must Remember Two conditions: AND 1. n >1 n 2 i>c (medium to air) 2. sinc= n1 Three cases: , , 3. i<c i=c Q: Tips for TIR exam questions? A: Q: Mnemonic for TIR conditions? A: Dense to less, that's condition one Angle greater than critical, then it's done i>c TIR is 100% efficient4. Applications: Fibers, prisms, diamonds, mirages5. Higher → Smaller 6. n c"}},{"topic":"tir","en":{"q":"Tips for TIR exam questions?","a":"Exam Tips Check both conditions for TIR Calculate first c Draw neat diagrams with normal Label: Denser, less dense, angles State: TIR occurs or not Show all working Calculator in degree mode"}},{"topic":"tir","en":{"q":"Mnemonic for TIR conditions?","a":"Memory Mnemonic - Conditions Q: Mnemonic for critical angle formula? A: sin c equals one over n Higher n, smaller c, remember when Q: Mnemonic for three cases? A: Less than c, light refracts Equal to c, along boundary acts Greater than c, total reflection, that's the facts Q: Mnemonic for TIR applications? A: Fibers carry light so far Prisms in binoculars are Diamonds sparkle like a star Mirages on roads from afar"}},{"topic":"tir","en":{"q":"Mnemonic for critical angle formula?","a":"Memory Mnemonic - Formula"}},{"topic":"tir","en":{"q":"Mnemonic for three cases?","a":"Memory Mnemonic - Three Cases"}},{"topic":"tir","en":{"q":"Mnemonic for TIR applications?","a":"Memory Mnemonic - Applications Q: Mnemonic for TIR advantages? A: No light loss, hundred percent Brighter image, that's the intent Better than mirrors, no lament"}},{"topic":"tir","en":{"q":"Mnemonic for TIR advantages?","a":"Memory Mnemonic - Advantages"}},{"topic":"convex","en":{"q":"What is a convex lens?","a":"Definition of Convex Lens Convex lens = Converging lens Parallel rays to principal axis converge at focus after refraction Thicker in the middle, thinner at edges"},"zhHant":{"q":"什麼是凸透鏡？","a":"中間厚、邊緣薄的透鏡 又稱會聚透鏡（Converging lens） 使平行光線會聚於焦點 符號： ⚬ < ⚬"}},{"topic":"convex","en":{"q":"What is Rule 1 for convex lens?","a":"Three Principal Rays - Rule 1 Parallel in, Focus out Ray parallel to principal axis passes through focus F on opposite side after refraction"},"zhHant":{"q":"畫凸透鏡光線圖的三條規則是什麼？","a":"平行入，焦點出：平行主軸的光線通過焦點1. 焦點入，平行出：通過焦點的光線平行射出2. 直入直出：通過光心的光線方向不變3."}},{"topic":"convex","en":{"q":"What is Rule 2 for convex lens?","a":"Three Principal Rays - Rule 2 Focus in, Parallel out Ray passing through focus F emerges parallel to principal axis after refraction"},"zhHant":{"q":"透鏡公式是什麼？","a":"=f1 +u1 v1 ：焦距 f ：物距 u ：像距 v 問題： 透鏡公式中的符號約定是什麼？ 答案： 問題： 放大率的公式是什麼？ 答案： 問題： 凸透鏡成像的六種情況是什麼？"}},{"topic":"convex","en":{"q":"What is Rule 3 for convex lens?","a":"Three Principal Rays - Rule 3 C in C out, Straight through Ray passing through optical center C travels straight through without changing direction Q: Image characteristics when object is beyond 2F? A: Q: Image characteristics when object is at 2F? A: Q: Image characteristics when object is between F and 2F? A: Q: Image characteristics when object is at F? A:"},"zhHant":{"q":"透鏡公式中的符號約定是什麼？","a":"：物距（永遠為正） u ：像距（實像為正，虛像為負） v ：焦距（凸透鏡為正，凹透鏡為負） f"}},{"topic":"convex","en":{"q":"Image characteristics when object is beyond 2F?","a":"Object Beyond 2F Position: Between F and 2F (opposite side) Nature: Real, inverted, diminished Application: Camera, human eye"},"zhHant":{"q":"放大率的公式是什麼？","a":"M= =uv h o h i ：放大率 M ：像距 v ：物距 u ：像的高度 h i ：物體的高度 h o"}},{"topic":"convex","en":{"q":"Image characteristics when object is at 2F?","a":"Object at 2F Position: At 2F (opposite side) Nature: Real, inverted, same size Application: Copying machine"},"zhHant":{"q":"凸透鏡成像的六種情況是什麼？","a":"答案： 問題： 物體在 2F 以外（ ）時，像的性質是什麼？ 答案： 問題： 物體在 2F 處（ ）時，像的性質是什麼？ 答案： ：像在 F，實、倒、極小 1. u=∞ ：像在 F~2F，實、倒、縮小（照相機） 2. u>2f ：像在 2F，實、倒、等大 3. u=2f ：像在 2F 外，實、倒、放大（投影機） 4. f <u<2f ：無法成像 5. u=f ：虛像、正立、放大（放大鏡） 6. u<f"}},{"topic":"convex","en":{"q":"Image characteristics when object is between F and 2F?","a":"Object Between F and 2F Position: Beyond 2F (opposite side) Nature: Real, inverted, magnified Application: Projector, slide projector"},"zhHant":{"q":"物體在 2F 以外（","a":"u>2f 像的位置：F 和 2F 之間 實像、倒立、縮小 應用：照相機"}},{"topic":"convex","en":{"q":"Image characteristics when object is at F?","a":"Object at F Position: At infinity Q: Image characteristics when object is inside F? A: Q: Image characteristics when object is at infinity? A: Q: What is the lens formula? Sign convention? A: Sign Convention: Nature: No image formed (parallel rays) Application: Searchlight, flashlight"},"zhHant":{"q":"物體在 2F 處（","a":"u=2f 像的位置：另一側的 2F 處 問題： 物體在 F 和 2F 之間（ ）時，像的性質是什麼？ 答案： 問題： 物體在焦點內（ ）時，像的性質是什麼？ 答案： 實像、倒立、等大（ ） M=1 物像距離： u+v=4f 這是實像的最小距離"}},{"topic":"convex","en":{"q":"Image characteristics when object is inside F?","a":"Object Inside F Position: Same side as object Nature: Virtual, erect, magnified Application: Magnifying glass, reading glass"},"zhHant":{"q":"物體在 F 和 2F 之間（","a":"f <u<2f 像的位置：2F 以外 實像、倒立、放大 應用：投影機、幻燈機"}},{"topic":"convex","en":{"q":"Image characteristics when object is at infinity?","a":"Object at Infinity Position: At focus F Nature: Real, inverted, highly diminished (point) Application: Telescope objective lens"},"zhHant":{"q":"物體在焦點內（","a":"u<f 像的位置：物體同側 虛像、正立、放大 應用：放大鏡 像距為負值 問題： ， ，求像距 答案： 問題： ， ，求放大率 答案： 影像是物體的 3 倍大 問題： ， ，求像距"}},{"topic":"convex","en":{"q":"What is the lens formula? Sign convention?","a":"Lens Formula =f1 +u1 v1 = focal length (convex lens: +ve) f = object distance (always +ve) u Q: What is the magnification formula? A: Interpretation: Q: What are the characteristics of a real image? A: = image distance (real: +ve; virtual: -ve) v"},"zhHant":{"q":"，","a":"u=30 cm f =10 cm v =10 1 +30 1 v 1 =v 1 −10 1 =30 1 30 2 v=15 cm"}},{"topic":"convex","en":{"q":"What is the magnification formula?","a":"Magnification Formula M= =uv h o h i : Magnified ∣M∣>1 : Same size ∣M∣=1 : Diminished ∣M∣<1 : Erect (virtual) M>0 : Inverted (real) M<0"},"zhHant":{"q":"，","a":"u=20 cm v=60 cm M= =uv =20 60 3"}},{"topic":"convex","en":{"q":"What are the characteristics of a real image?","a":"Real Image Formation: Actual convergence of light rays Can be projected: Yes, on screen Position: Opposite side of lens Orientation: Inverted Examples: Camera, projector Q: What are the characteristics of a virtual image? A: Q: How does a camera use convex lens? A: Q: How does a projector use convex lens? A: Q: How does a magnifying glass use convex lens? A:"},"zhHant":{"q":"，","a":"u=6 cm f =12 cm 答案： 負號表示虛像 問題： 實像和虛像有什麼分別？ 答案： 問題： 凸透鏡成實像時，物像的最小距離是多少？ 答案： 問題： 什麼是光的可逆性？ 答案： =12 1 +6 1 v 1 =v1 −121 =61 − 121 v=−12 cm"}},{"topic":"convex","en":{"q":"What are the characteristics of a virtual image?","a":"Virtual Image Formation: Extensions of rays intersect Can be projected: No, cannot display on screen Position: Same side as object Orientation: Erect Examples: Magnifying glass"},"zhHant":{"q":"實像和虛像有什麼分別？","a":"實像：倒立，可投影在屏幕上，像距為正 虛像：正立，不能投影在屏幕上，像距為負"}},{"topic":"convex","en":{"q":"How does a camera use convex lens?","a":"Camera Application Object beyond 2F Lens forms real, inverted, diminished image Image between F and 2F on film/sensor"},"zhHant":{"q":"凸透鏡成實像時，物像的最小距離是多少？","a":"當物體在 2F 處時 u=v=2f 物像距離 = u+v=4f 這是實像的最小距離"}},{"topic":"convex","en":{"q":"How does a projector use convex lens?","a":"Projector Application Object between F and 2F Lens forms real, inverted, magnified image Image beyond 2F on screen"},"zhHant":{"q":"什麼是光的可逆性？","a":"實像的物體和影像位置可以互換 問題： 如果遮蓋透鏡的一部分，影像會怎樣？ 答案： 問題： 什麼因素影響透鏡的焦距？ 答案： 問題： 放大鏡如何工作？ 答案： 如果 ， u =1 10 cm v =1 40 cm 則 ， u =2 40 cm v =2 10 cm"}},{"topic":"convex","en":{"q":"How does a magnifying glass use convex lens?","a":"Magnifying Glass Application Q: What is the power of a lens? A: Q: How do object and image positions relate? A: Q: What are the sign conventions for convex lens? A: Object inside F Lens forms virtual, erect, magnified image Image on same side as object"},"zhHant":{"q":"如果遮蓋透鏡的一部分，影像會怎樣？","a":"完整影像仍然形成 但影像會變暗（亮度降低） 原因：部分光線被阻擋，到達影像的光量減少"}},{"topic":"convex","en":{"q":"What is the power of a lens?","a":"Power of Lens P = f 1 = power (unit: dioptre, D) P = focal length (unit: meter, m) f Shorter → Higher power → Stronger converging f"},"zhHant":{"q":"什麼因素影響透鏡的焦距？","a":"曲率越大（越彎曲）→ 焦距越短 折射率越大 → 焦距越短 焦距越短 → 會聚能力越強"}},{"topic":"convex","en":{"q":"How do object and image positions relate?","a":"Object-Image Movement Object moves closer → Image moves away Object moves away → Image moves closer Object at 2F → Image at 2F (symmetry)"},"zhHant":{"q":"放大鏡如何工作？","a":"問題： 照相機使用凸透鏡的哪種成像情況？ 答案： 問題： 投影機使用凸透鏡的哪種成像情況？ 答案： 物體放在焦點內（ ） u<f 成像：虛像、正立、放大 像在物體同側 用於觀察細小物體"}},{"topic":"convex","en":{"q":"What are the sign conventions for convex lens?","a":"Sign Convention Checklist Q: Does convex lens always form real image? A: ❌ Wrong! Q: Is virtual image always smaller? A: ❌ Wrong! Q: Is image at 2F always magnified? Convex lens : positive f Object distance : always positive u Real image : positive (opposite side) v Virtual image : negative (same side) v"},"zhHant":{"q":"照相機使用凸透鏡的哪種成像情況？","a":"物體在 2F 以外（ ） u>2f 成像：實像、倒立、縮小 像在 F 和 2F 之間 用於拍攝照片"}},{"topic":"convex","en":{"q":"Does convex lens always form real image?","a":"Common Misconception (1) Convex lens forms virtual image when object is inside F Virtual image is erect and magnified"},"zhHant":{"q":"投影機使用凸透鏡的哪種成像情況？","a":"物體在 F 和 2F 之間（ ） f <u<2f 成像：實像、倒立、放大 像在 2F 以外 用於投影影像到屏幕 問題： 凸透鏡有哪些應用？ 答案： 問題： 如何判斷凸透鏡成的像是實像還是虛像？ 答案： 問題： 當物體從遠處逐漸接近凸透鏡時，像如何變化？ 答案："}},{"topic":"convex","en":{"q":"Is virtual image always smaller?","a":"Common Misconception (2) Virtual image formed by convex lens (object inside F) is magnified Example: Magnifying glass"},"zhHant":{"q":"凸透鏡有哪些應用？","a":"放大鏡： ，虛像、正立、放大 1. u<f 照相機： ，實像、倒立、縮小 2. u>2f 投影機： ，實像、倒立、放大 3. f <u<2f 矯正遠視眼鏡：使光線會聚4."}},{"topic":"convex","en":{"q":"Is image at 2F always magnified?","a":"Common Misconception (3) A: ❌ Wrong! Q: How to draw ray diagram for convex lens? A: Q: Steps for lens formula calculations? A: Image at 2F is same size as object Not magnified, not diminished"},"zhHant":{"q":"如何判斷凸透鏡成的像是實像還是虛像？","a":"如果像可以投影在屏幕上 → 實像 如果像不能投影在屏幕上 → 虛像 或： → 實像， → 虛像 v>0 v<0"}},{"topic":"convex","en":{"q":"How to draw ray diagram for convex lens?","a":"Ray Diagram Method Draw at least two principal rays1. Real image: Rays actually intersect2. Virtual image: Ray extensions intersect3. Measure distances and heights4."},"zhHant":{"q":"當物體從遠處逐漸接近凸透鏡時，像如何變化？","a":"物體從無限遠移向 2F：像從 F 移向 2F，變大 問題： 相同物距，不同焦距的凸透鏡成像有什麼分別？ 答案： ✅ 記憶口訣： ✅ 常見錯誤： ✅ 考試技巧： 物體從 2F 移向 F：像從 2F 移向無限遠，變大 物體移過 F：像從實像變虛像，從倒立變正立 物體在焦點內：像變大且遠離透鏡"}},{"topic":"convex","en":{"q":"Steps for lens formula calculations?","a":"Calculation Method Identify given: , , or 1. u f v Apply: 2. =f 1 +u 1 v 1 Check sign conventions3. Calculate if needed 4. M= uv Q: Quick summary of six image formation cases? A: Q: Quick comparison of real and virtual images? A: Real: Virtual: Q: What must be remembered for HKDSE exam? A:"},"zhHant":{"q":"相同物距，不同焦距的凸透鏡成像有什麼分別？","a":"接收相同的光量 焦距短 → 像小但亮 焦距長 → 像大但暗 光量分布在不同大小的像上 學習小貼士 「平焦入、焦平出、直入直出」：三條主要光線 「一焦虛、二焦等、遠焦小」：成像規律 「u 正 v 實正虛負 f 凸正凹負」：符號約定 ❌ 認為凸透鏡只能成實像 ✅ 物體在焦點內時成虛像 ❌ 認為凸透鏡只能成放大像 ✅ 可以成放大、等大或縮小像 ❌ 虛像的像距用正值 ✅ 虛像的像距為負值 先判斷物體位置（相對於 F 和 2F） 使用透鏡公式： =f 1 +u 1 v 1 ✅ 公式速記： ✅ 成像記憶表： 注意符號： 永遠正， 實正虛負 u v 畫光線圖時至少畫兩條光線 檢查答案是否合理（實像 ，虛像 ） v>0 v<0 透鏡公式： =f1 +u1 v1 放大率： M= =uv h o h i 物像最小距離： （當 ） 4f u=2f 物距 像距 性質 應用 u>2f F~2F 實、倒、小 照相機 u=2f 2F 實、倒、等 - f <u<2f >2F 實、倒、大 投影機 u<f 同側 虛、正、大 放大鏡"}},{"topic":"convex","en":{"q":"Quick summary of six image formation cases?","a":"Quick Summary - Six Cases Beyond 2F → Small real1. At 2F → Same size real2. Between F & 2F → Large real3. At F → No image4. Inside F → Large virtual5. At infinity → Point at F6."}},{"topic":"convex","en":{"q":"Quick comparison of real and virtual images?","a":"Real vs Virtual Quick Check Can project ✓ Inverted Opposite side Cannot project ✗ Erect Same side"}},{"topic":"convex","en":{"q":"What must be remembered for HKDSE exam?","a":"HKDSE Must Remember Three principal rays1. Q: Tips for convex lens exam questions? A: Q: Memory mnemonics for convex lens? A: Three rays: Parallel in, Focus out Focus in, Parallel out C in C out, Straight through Real vs Virtual: Real: Can project, inverted, opposite Six image formation cases2. Lens formula: 3. =f 1 +u 1 v 1 Magnification: 4. M= uv Sign conventions5. Applications: Camera, projector, magnifier6."}},{"topic":"convex","en":{"q":"Tips for convex lens exam questions?","a":"Exam Tips Always check sign conventions first Draw neat diagrams with ruler Label: F, 2F, C, object, image State clearly: real/virtual, erect/inverted, magnified/diminished"}},{"topic":"convex","en":{"q":"Memory mnemonics for convex lens?","a":"Memory Mnemonics Virtual: Cannot project, erect, same side"}},{"topic":"concave","en":{"q":"What is a concave lens?","a":"Definition of Concave Lens Concave lens = Diverging lens Parallel rays to principal axis diverge after refraction Extended lines of refracted rays pass through focus"},"zhHant":{"q":"光線會聚在視網膜前方","a":"凹透鏡 = 發散透鏡（Diverging Lens） 平行於主軸的光線經折射後會發散 折射光線的延長線通過焦點"}},{"topic":"concave","en":{"q":"What are the differences between concave and convex lenses?","a":"Concave vs Convex Lens Property Convex Lens Concave Lens Type Converging Diverging Focal length Positive (+ve) Negative (-ve) Light rays Converge Diverge"},"zhHant":{"q":"凹透鏡 vs 凸透鏡","a":"特性 凸透鏡 凹透鏡 類型 會聚透鏡 發散透鏡 焦距 正值 (+ve) 負值 (-ve) 光線 會聚 發散"}},{"topic":"concave","en":{"q":"What is Rule 1?","a":"Three Principal Rays - Rule 1 Parallel in, Focus out Ray parallel to principal axis diverges after refraction Extension passes through focus F on same side"},"zhHant":{"q":"三條主要光線 - Rule 1","a":"平行入，焦點出 平行於主軸的光線，折射後發散 延長線通過同側焦點 F"}},{"topic":"concave","en":{"q":"What is Rule 2?","a":"Three Principal Rays - Rule 2 A: Q: What is Rule 3? A: Q: What are the characteristics of images formed by concave lens? A: Images formed by concave lens are always: Memory: Virtual, erect, diminished - never changes Q: What is the lens formula? Sign convention? A: Focus in, Parallel out Ray directed towards focus F' on opposite side Emerges parallel to principal axis after refraction"},"zhHant":{"q":"三條主要光線 - Rule 2","a":"答： 問：Rule 3 是什麼？ 答： 問：凹透鏡成像有什麼特性？ 答： 凹透鏡的像永遠是： 記憶口訣：虛正縮，不會變 問：透鏡公式是什麼？符號約定？ 答： 焦點入，平行出 指向對側焦點 F‘ 的光線 折射後平行於主軸射出"}},{"topic":"concave","en":{"q":"What is Rule 3?","a":"Three Principal Rays - Rule 3 C in C out, Straight through Ray passing through optical center C Direction unchanged, travels straight through"},"zhHant":{"q":"三條主要光線 - Rule 3","a":"C 入 C 出，直入直出 通過透鏡光心 C 的光線 方向不變，直線通過"}},{"topic":"concave","en":{"q":"What are the characteristics of images formed by concave lens?","a":"Image Properties of Concave Lens ✅ Virtual - Cannot be projected on screen ✅ Erect - Same orientation as object ✅ Diminished - Smaller than object ✅ Position - Between lens and object"},"zhHant":{"q":"凹透鏡成像性質","a":"✅ 虛像（Virtual） - 不能投影在屏幕上 ✅ 正立（Erect） - 與物體方向相同 ✅ 縮小（Diminished） - 比物體小 ✅ 位置 - 在透鏡與物體之間"}},{"topic":"concave","en":{"q":"What is the lens formula? Sign convention?","a":"Lens Formula =f1 +u1 v1 Sign Convention: Q: What is the magnification formula? A: Concave lens characteristics: Q: How does a peep-hole lens work? A: Q: How does concave lens correct myopia? = focal length (concave lens: -ve) f = object distance (always +ve) u = image distance (virtual image: -ve) v"},"zhHant":{"q":"透鏡公式","a":"=f1 +u1 v1 符號約定： 問：放大率公式是什麼？ 答： 凹透鏡特點： 問：門眼透鏡如何運作？ 答： 問：凹透鏡如何矯正近視？ = 焦距（凹透鏡：-ve） f = 物距（永遠 +ve） u = 像距（虛像：-ve） v"}},{"topic":"concave","en":{"q":"What is the magnification formula?","a":"Linear Magnification M= =uv h o h i is negative (virtual image) v (diminished) ∣M∣<1"},"zhHant":{"q":"線性放大率","a":"M= =uv h o h i 是負值（虛像） v （縮小） ∣M∣<1"}},{"topic":"concave","en":{"q":"How does a peep-hole lens work?","a":"Applications (1) Uses concave lens to form diminished, erect virtual image Can see wider field of view outside door Provides wide-angle vision"},"zhHant":{"q":"凹透鏡的應用（一）","a":"利用凹透鏡成縮小正立虛像 可以看到門外較大範圍的景象 提供廣角視野"}},{"topic":"concave","en":{"q":"How does concave lens correct myopia?","a":"Applications (2) A: Q: Where is the image formed by concave lens? A: Q: When object is at focus, is image at infinity? A: ❌ Wrong! Q: Can concave lens form real image? A: ❌ Wrong! Myopia problem: Light converges in front of retina Concave lens action: Diverges light Effect: Moves focus back to retina Allows distant objects to be seen clearly"},"zhHant":{"q":"凹透鏡的應用（二）","a":"答： 問：凹透鏡成像的位置在哪裡？ 答： 問：物體在焦點時，像在無窮遠？ 答： ❌ 錯誤！ 問：凹透鏡可能成實像嗎？ 答： ❌ 錯誤！ 近視問題：光線會聚在視網膜前方 凹透鏡作用：使光線發散 效果：將焦點後移至視網膜上 使遠處物體能清晰成像"}},{"topic":"concave","en":{"q":"Where is the image formed by concave lens?","a":"Image Position Always between lens and object Located between C and F Never on opposite side of lens Never at infinity"},"zhHant":{"q":"像的位置","a":"永遠在透鏡與物體之間 位於 C 和 F 之間 不會在透鏡的另一側 不會在無窮遠"}},{"topic":"concave","en":{"q":"When object is at focus, is image at infinity?","a":"Common Misconception (1) Image of concave lens is always between lens and object Never at infinity Image nature unchanged regardless of object distance"},"zhHant":{"q":"常見誤解（一）","a":"凹透鏡的像永遠在透鏡與物體之間 不會在無窮遠 無論物距多少，成像性質不變"}},{"topic":"concave","en":{"q":"Can concave lens form real image?","a":"Common Misconception (2) Image of concave lens is always virtual Q: Can concave lens form magnified image? A: ❌ Wrong! Q: What to note when using lens formula for concave lens? A: Example: cm, cm Cannot be displayed on screen Same regardless of object position"},"zhHant":{"q":"常見誤解（二）","a":"凹透鏡的像永遠是虛像 問：凹透鏡可能成放大的像嗎？ 答： ❌ 錯誤！ 問：使用透鏡公式計算凹透鏡時要注意什麼？ 答： 例： cm, cm 不能在屏幕上顯示 無論物體位置如何都一樣"}},{"topic":"concave","en":{"q":"Can concave lens form magnified image?","a":"Common Misconception (3) Image of concave lens is always diminished ∣M∣<1 Same regardless of object distance"},"zhHant":{"q":"常見誤解（三）","a":"凹透鏡的像永遠是縮小的 ∣M∣<1 無論物距多少都一樣"}},{"topic":"concave","en":{"q":"What to note when using lens formula for concave lens?","a":"Calculation Tips Focal length substitute negative value (concave lens) 1. f Image distance result is negative (virtual image) 2. v Magnification take absolute value to judge size 3. M f =−10 u=20 =−10 1 +20 1 v 1 cm (negative = virtual image) Q: What to note when drawing concave lens ray diagrams? A: Q: Memory mnemonic for concave lens imaging? A: Concave lens, light diverges Virtual, erect, diminished - never changes Image between object and lens Short-sighted eyes, use it to correct Q: What must be remembered for exam about concave lens? A: v=−6.67"},"zhHant":{"q":"計算技巧","a":"焦距 代入負值（凹透鏡） 1. f 像距 結果是負值（虛像） 2. v 放大率 取絕對值判斷大小 3. M f =−10 u=20 =−10 1 +20 1 v 1 cm（負值 = 虛像） 問：畫凹透鏡光路圖要注意什麼？ 答： 問：凹透鏡成像的記憶口訣？ 答： 凹透鏡，散光線 虛正縮，不會變 像在中，物鏡間 近視眼，用它矯 問：考試必須記住的凹透鏡重點？ 答： v=−6.67"}},{"topic":"concave","en":{"q":"What to note when drawing concave lens ray diagrams?","a":"Ray Diagram Points Draw at least two rays to locate image1. Virtual image use dotted lines2. Refraction occurs at lens3. Distinguish incident and refracted rays clearly4."},"zhHant":{"q":"作圖要點","a":"至少畫兩條光線定位像1. 虛像用虛線（dotted line）表示2. 光線在透鏡處發生折射3. 入射與折射光線要清楚區分4."}},{"topic":"concave","en":{"q":"Memory mnemonic for concave lens imaging?","a":"Quick Memory Mnemonic"},"zhHant":{"q":"快速記憶口訣","a":""}},{"topic":"concave","en":{"q":"What must be remembered for exam about concave lens?","a":"HKDSE Key Points Concave lens = Diverging lens1. Image nature: Virtual, erect, diminished2. Focal length sign: Negative (-ve)3. Image distance sign: Negative (-ve)4. Applications: Peep-hole lens, myopia correction5. Q: Why is concave lens called diverging lens? A: Q: How to quickly determine convex or concave lens? A: Observe imaging: Observe light rays: Observe applications:"},"zhHant":{"q":"HKDSE 必記重點","a":"凹透鏡 = 發散透鏡1. 像的性質：虛像、正立、縮小2. 焦距符號：負值 (-ve)3. 像距符號：負值 (-ve)4. 應用：門眼透鏡、近視矯正5. 問：為什麼凹透鏡叫發散透鏡？ 答： 問：如何快速判斷是凸透鏡還是凹透鏡？ 答： 觀察成像： 觀察光線： 觀察應用："}},{"topic":"concave","en":{"q":"Why is concave lens called diverging lens?","a":"Diverging Light Characteristics Parallel rays spread outward after refraction by concave lens Refracted rays do not actually intersect Extended lines intersect at focus behind All parallel incident rays' extensions pass through focus on focal plane"},"zhHant":{"q":"發散光線的特性","a":"平行光線經凹透鏡折射後會向外散開 折射光線不會實際相交 延長線向後交於焦點 所有平行入射光線的延長線都通過焦平面上的焦點"}},{"topic":"concave","en":{"q":"How to quickly determine convex or concave lens?","a":"Comprehensive Comparison Can form real image → Convex lens Only forms virtual image → Concave lens Rays converge → Convex lens Rays diverge → Concave lens Magnifying glass, camera → Convex lens Myopia glasses, peep-hole → Concave lens"},"zhHant":{"q":"綜合比較","a":"能成實像 → 凸透鏡 只成虛像 → 凹透鏡 光線會聚 → 凸透鏡 光線發散 → 凹透鏡 放大鏡、相機 → 凸透鏡 近視眼鏡、門眼 → 凹透鏡"}},{"topic":"em","en":{"q":"What is the visible spectrum?","a":"Visible Spectrum Color spectrum formed when white light disperses through a prism Order (wavelength long to short): Red, Orange, Yellow, Green, Blue, Indigo, Violet Mnemonic: ROY G BIV"},"zhHant":{"q":"可見光譜","a":"白光通過三棱鏡分散成的色譜 順序（波長由長到短）：紅、橙、黃、綠、藍、靛、紫 記憶口訣：紅橙黃綠藍靛紫"}},{"topic":"em","en":{"q":"What are the three primary colors of light?","a":"Primary Colors 🔴 Red 🟢 Green 🔵 Blue"},"zhHant":{"q":"三原色","a":"🔴 紅色（Red） 🟢 綠色（Green） 🔵 藍色（Blue）"}},{"topic":"em","en":{"q":"How are secondary colors of light produced?","a":"Secondary Colors Red + Green = 🟡 Yellow Green + Blue = 🔵 Cyan Blue + Red = 🟣 Magenta Q: How is the color of an object determined? A: Determined by the colors of light it reflects: Example: Red object in green light appears black (absorbs green, no red to reflect) Q: What is the order of EM spectrum? (wavelength long to short) A: Memory Mnemonic: R M I V U X G Q: Properties and applications of radio waves? A:"},"zhHant":{"q":"二次色","a":"紅 + 綠 = 🟡 黃色（Yellow） 綠 + 藍 = 🔵 青色（Cyan） 藍 + 紅 = 🟣 洋紅色（Magenta）"}},{"topic":"em","en":{"q":"How is the color of an object determined?","a":"Color of Objects White object → Reflects all colors Colored object → Only reflects its own color, absorbs others Black object → Absorbs all colors"},"zhHant":{"q":"物體的顏色","a":"答： 由反射的光的顏色決定： 例： 紅色物體在綠光下看起來是黑色（因為吸收綠光，無紅光可反射） 問：電磁波譜的順序是什麼？（波長由長到短） 答： 記憶口訣：無微紅可紫 X 伽 問：無線電波的特性與應用？ 答： 白色物體 → 反射所有顏色 彩色物體 → 只反射自己的顏色，吸收其他顏色 黑色物體 → 吸收所有顏色"}},{"topic":"em","en":{"q":"What is the order of EM spectrum? (wavelength long to short)","a":"EM Spectrum Order Radio waves1. Microwaves2. Infrared3. Visible light4. Ultraviolet5. X-rays6. Gamma rays7."},"zhHant":{"q":"電磁波譜順序","a":"無線電波（Radio waves）1. 微波（Microwaves）2. 紅外線（Infrared）3. 可見光（Visible light）4. 紫外線（Ultraviolet）5. X 射線（X-rays）6. 伽馬射線（Gamma rays）7."}},{"topic":"em","en":{"q":"Properties and applications of radio waves?","a":"Radio Waves Wavelength range: – 10−1 Q: Properties and applications of microwaves? A: Q: Properties and applications of infrared? A: m (longest) 104 Applications: Radio/TV broadcasting Mobile phone communication"},"zhHant":{"q":"無線電波","a":"波長範圍： – m（最長） 10−1 104 應用： 無線電/電視廣播 問：微波的特性與應用？ 答： 問：紅外線的特性與應用？ 答： 手機通訊"}},{"topic":"em","en":{"q":"Properties and applications of microwaves?","a":"Microwaves Wavelength range: – m 10−3 10−1 Applications: Microwave oven Satellite communication Radar"},"zhHant":{"q":"微波","a":"波長範圍： – m 10−3 10−1 應用： 微波爐 衛星通訊 雷達（Radar）"}},{"topic":"em","en":{"q":"Properties and applications of infrared?","a":"Infrared Wavelength range: – m 10−6 10−3 Source: All objects above 0 K Applications: TV remote control Q: Properties of visible light? A: Q: Properties and applications of ultraviolet? A: Camera auto-focus Infrared thermometer Night vision camera"},"zhHant":{"q":"紅外線","a":"波長範圍： – m 10−6 10−3 來源：所有溫度高於 0 K 的物體 應用： 電視遙控器 相機自動對焦 紅外線溫度計 夜視攝影機 問：可見光的特性？ 答： 問：紫外線的特性與應用？ 答： 問：X 射線的特性與應用？ 答："}},{"topic":"em","en":{"q":"Properties of visible light?","a":"Visible Light Wavelength range: – m 4×10−7 7×10−7 Detector: Human eye Applications: Lighting, vision Only part of EM spectrum visible to human eye"},"zhHant":{"q":"可見光","a":"波長範圍： – m 4×10−7 7×10−7 探測器：人眼 應用：照明、視覺 是電磁波譜中唯一人眼可見的部分"}},{"topic":"em","en":{"q":"Properties and applications of ultraviolet?","a":"Ultraviolet Wavelength range: – m 10−9 10−8 Applications: Sterilizing drinking water Checking banknotes Producing Vitamin D in skin Danger: ⚠ Over-exposure may cause skin cancer Q: Properties and applications of X-rays? A: Q: Properties and applications of gamma rays? A: Q: What are the common properties of all EM waves? A:"},"zhHant":{"q":"紫外線","a":"波長範圍： – m 10−9 10−8 應用： 消毒飲用水 檢查鈔票真偽 促進皮膚產生維生素 D 危險： ⚠ 過度曝曬可能導致皮膚癌"}},{"topic":"em","en":{"q":"Properties and applications of X-rays?","a":"X-rays Wavelength range: m 10−10 Applications: See-through images (human body or luggage) CT scan Medical diagnosis Property: Highly penetrating"},"zhHant":{"q":"X 射線","a":"問：伽馬射線的特性與應用？ 答： 問：所有電磁波的共同特性是什麼？ 答： 波長範圍： m 10−10 應用： 透視成像（人體或行李） CT 掃描 醫學診斷 特性：高度穿透性"}},{"topic":"em","en":{"q":"Properties and applications of gamma rays?","a":"Gamma Rays Wavelength range: m (shortest) 10−12 Source: Radioactive substances Applications: Sterilization (food disinfection) Radiotherapy (killing cancer cells) Medical uses"},"zhHant":{"q":"伽馬射線","a":"波長範圍： m（最短） 10−12 來源：放射性物質 應用： 殺菌（食物消毒） 放射治療（殺死癌細胞） 醫療用途"}},{"topic":"em","en":{"q":"What are the common properties of all EM waves?","a":"Common Properties of EM Waves (1) ✅ Transverse waves - Vibration perpendicular to propagation1. Q: What wave equation do EM waves obey? A: Where: All EM waves exhibit: Reflection, refraction, diffraction, interference Q: What is the relationship between wavelength and frequency? A: Inverse relationship: ✅ Carry energy2. ✅ Travel in vacuum - Do not require medium3. ✅ Same speed in vacuum - 4. c=3×10 m s8 −1"},"zhHant":{"q":"電磁波的共同特性（一）","a":"✅ 橫波 - 振動方向垂直於傳播方向1. ✅ 攜帶能量2. ✅ 可在真空中傳播 - 不需要介質3. ✅ 在真空中速度相同 - 4. c=3×10 m s8 −1 問：電磁波遵守什麼波動公式？ 答： 其中： 所有電磁波都會表現出： 反射、折射、繞射、干涉 問：波長與頻率有什麼關係？ 答： 反比關係： 例："}},{"topic":"em","en":{"q":"What wave equation do EM waves obey?","a":"Common Properties of EM Waves (2) v=fλ = wave speed (in vacuum: ) v c=3×10 m s8 −1 = frequency (Hz) f = wavelength (m) λ"},"zhHant":{"q":"電磁波的共同特性（二）","a":"v=fλ = 波速（在真空中為 ） v c=3×10 m s8 −1 = 頻率（Hz） f = 波長（m） λ"}},{"topic":"em","en":{"q":"What is the relationship between wavelength and frequency?","a":"Wavelength-Frequency Relationship f = λc Longer wavelength → Lower frequency Shorter wavelength → Higher frequency Example: Q: Arrange EM waves by wavelength (long to short)? A: Radio waves > Microwaves > Infrared > Visible light > Ultraviolet > X-rays > Gamma rays Memory Mnemonic: R M I V U X G Q: Arrange EM waves by frequency (low to high)? A: Radio waves < Microwaves < Infrared < Visible light < Ultraviolet < X-rays < Gamma rays Remember: Frequency order is opposite to wavelength order Q: What is the speed of EM waves in vacuum? A: Important properties: Radio waves: Longest wavelength, lowest frequency Gamma rays: Shortest wavelength, highest frequency"},"zhHant":{"q":"波長與頻率的關係","a":"f = λc 波長越長 → 頻率越低 波長越短 → 頻率越高 無線電波：波長最長，頻率最低 伽馬射線：波長最短，頻率最高 問：電磁波按波長由長到短排列？ 答： 無線電波 > 微波 > 紅外線 > 可見光 > 紫外線 > X 射線 > 伽馬射線 記憶口訣：無微紅可紫 X 伽 問：電磁波按頻率由低到高排列？ 答： 無線電波 < 微波 < 紅外線 < 可見光 < 紫外線 < X 射線 < 伽馬射線 記住： 頻率順序與波長順序相反 問：電磁波在真空中的速度是多少？ 答： 重要特性： 問：什麼證據顯示光是電磁波？"}},{"topic":"em","en":{"q":"Arrange EM waves by wavelength (long to short)?","a":"EM Spectrum Ordering (Wavelength)"},"zhHant":{"q":"電磁波譜排序（波長）","a":""}},{"topic":"em","en":{"q":"Arrange EM waves by frequency (low to high)?","a":"EM Spectrum Ordering (Frequency)"},"zhHant":{"q":"電磁波譜排序（頻率）","a":""}},{"topic":"em","en":{"q":"What is the speed of EM waves in vacuum?","a":"Speed in Vacuum c=3×10 m s8 −1 All EM waves have the same speed in vacuum Q: What evidence shows light is an electromagnetic wave? A: Q: What are the main applications of these EM waves? A: Q: What are the main applications of these EM waves? A: This is the universal speed limit Speed decreases in materials"},"zhHant":{"q":"真空中的速度","a":"c=3×10 m s8 −1 所有電磁波在真空中速度相同 這是宇宙中的速度上限 在介質中速度會變慢"}},{"topic":"em","en":{"q":"What evidence shows light is an electromagnetic wave?","a":"Evidence Light is EM Wave ✅ Light can travel in vacuum (from Sun to Earth)1. ✅ Light is a transverse wave2. ✅ Light speed equals EM wave speed ( ) 3. 3×10 m s8 −1"},"zhHant":{"q":"光是電磁波的證據","a":"答： 問：以下電磁波的主要應用是什麼？ 答： 問：以下電磁波的主要應用是什麼？ 答： 問：為什麼不應過度使用紫外燈？ 答： ⚠ 過度曝曬紫外線可能導致皮膚癌 原因： ✅ 光可以在真空中傳播（從太陽到地球）1. ✅ 光是橫波2. ✅ 光的速度等於電磁波速度（ ） 3. 3×10 m s8 −1"}},{"topic":"em","en":{"q":"What are the main applications of these EM waves?","a":"Application Matching (1) Microwaves → Microwave oven, satellite communication, radar Infrared → Remote control, auto-focus, thermometer, night vision Ultraviolet → Sterilization, checking banknotes, Vitamin D"},"zhHant":{"q":"應用配對（一）","a":"微波 → 微波爐、衛星通訊、雷達 紅外線 → 遙控器、自動對焦、溫度計、夜視 紫外線 → 消毒、檢查鈔票、維生素 D"}},{"topic":"em","en":{"q":"What are the main applications of these EM waves?","a":"Application Matching (2) X-rays → See-through imaging, CT scan Gamma rays → Sterilization, radiotherapy Radio waves → Broadcasting, mobile communication Q: Why should UV lamps not be over-used? A: ⚠ Over-exposure to UV may cause skin cancer Reasons: ✅ Moderate exposure promotes Vitamin D production Q: Order of colors within visible light by wavelength? A: Wavelength (long to short): Red > Orange > Yellow > Green > Blue > Indigo > Violet Frequency (low to high): Red < Orange < Yellow < Green < Blue < Indigo < Violet Mnemonic: ROY G BIV Q: How to use for calculations? A: Formula:"},"zhHant":{"q":"應用配對（二）","a":"X 射線 → 透視成像、CT 掃描 伽馬射線 → 殺菌、放射治療 無線電波 → 廣播、手機通訊"}},{"topic":"em","en":{"q":"Why should UV lamps not be over-used?","a":"UV Danger UV has higher energy Damages skin cells Long-term over-exposure increases cancer risk"},"zhHant":{"q":"紫外線的危險","a":"紫外線能量較高 會損害皮膚細胞 ✅ 適度曝曬可促進維生素 D 產生 問：可見光內各顏色的波長順序？ 答： 波長由長到短： 紅 > 橙 > 黃 > 綠 > 藍 > 靛 > 紫 頻率由低到高： 紅 < 橙 < 黃 < 綠 < 藍 < 靛 < 紫 記憶口訣：紅橙黃綠藍靛紫 問：如何使用 計算？ 答： 公式： 在真空中： ，其中 例題： 波長 m 的光，頻率是多少？ 長期過度曝曬增加癌症風險"}},{"topic":"em","en":{"q":"Order of colors within visible light by wavelength?","a":"Visible Light Order"},"zhHant":{"q":"可見光內的順序","a":""}},{"topic":"em","en":{"q":"How to use","a":"Calculation Technique v=fλ v=fλ In vacuum: , where Example: Light with wavelength m, what is frequency? Solution: Q: Which of the following applications are incorrect? A: ❌ Wrong pairings: ✅ Correct memory: Q: Memory mnemonics for EM waves? A: EM Spectrum Order: c=fλ c=3×10 m s8 −1 λ=6×10−7 f = =λc =6×10−7 3×108 5×10 Hz14"},"zhHant":{"q":"計算技巧","a":"v=fλ v=fλ c=fλ c=3×10 m s8 −1 λ=6×10−7 解： 問：以下哪個應用是錯誤的？ 答： ❌ 錯誤配對： ✅ 正確記憶： 問：電磁波的記憶口訣？ 答： 電磁波譜順序： 無微紅可紫 X 伽 電磁波特性： 橫波能量真空行 速度相同三億整 反射折射繞射干 波動公式 v = fλ f = =λc =6×10−73×108 5×10 Hz14"}},{"topic":"em","en":{"q":"Which of the following applications are incorrect?","a":"Common Wrong Applications Microwaves → Thermometer (should be infrared) Infrared → Laser pointer (should be visible light) UV → Camera auto-focus (should be infrared) Thermometer → Infrared Remote control → Infrared Sterilization → Ultraviolet Radar → Microwaves"},"zhHant":{"q":"常見錯誤應用","a":"微波 → 溫度計（應該是紅外線） 紅外線 → 雷射筆（應該是可見光） 紫外線 → 相機自動對焦（應該是紅外線） 溫度計 → 紅外線 遙控器 → 紅外線 消毒 → 紫外線 雷達 → 微波"}},{"topic":"em","en":{"q":"Memory mnemonics for EM waves?","a":"Quick Memory Mnemonics R M I V U X G EM Wave Properties: Transverse waves carry energy through space Same speed three hundred million Reflect, refract, diffract, interfere Wave equation v = fλ Secondary Colors: Red plus Green makes Yellow Green plus Blue makes Cyan Blue plus Red makes Magenta Q: What must be remembered for exam about EM waves? A:"},"zhHant":{"q":"快速記憶口訣","a":"二次色： 紅加綠，變成黃 綠加藍，變成青 藍加紅，變洋紅 問：考試必須記住的電磁波重點？ 答： 問：電磁波題目的解題技巧？ 答："}},{"topic":"em","en":{"q":"What must be remembered for exam about EM waves?","a":"HKDSE Key Points EM spectrum order (wavelength long to short)1. Primary colors: Red, Green, Blue2. Speed in vacuum: 3. c=3×10 m s8 −1 Wave equation: 4. v=fλ Applications of various EM waves5. Wavelength and frequency inversely related6. Q: Problem-solving tips for EM wave questions? A: Q: How to remember wavelength ranges of various EM waves? A: Remember one reference point: Visible light ≈ m Relative relationships:"},"zhHant":{"q":"HKDSE 必記重點","a":"電磁波譜順序（波長由長到短）1. 三原色：紅、綠、藍2. 真空中速度：3. c=3×10 m s8 −1 波動公式：4. v=fλ 各種電磁波的應用5. 波長與頻率反比6."}},{"topic":"em","en":{"q":"Problem-solving tips for EM wave questions?","a":"Problem-Solving Tips Ordering questions → Remember mnemonic \\"R M I V U X G\\"1. Wavelength & frequency → Inverse relationship, long wavelength = low frequency2. Speed → All EM waves same speed in vacuum3. Application questions → Remember keywords (microwave oven, remote, sterilization, see-through) 4. Calculation questions → Use , pay attention to units 5. v=fλ"},"zhHant":{"q":"解題技巧","a":"排序題 → 記住口訣「無微紅可紫 X 伽」1. 波長與頻率 → 反比關係，波長長則頻率低2. 速度 → 真空中所有電磁波速度相同3. 應用題 → 記住關鍵字（微波爐、遙控器、消毒、透視）4. 計算題 → 使用 ，注意單位 5. v=fλ 問：如何記住各種電磁波的波長範圍？ 答： 記住一個參考點： 可見光約 m 相對關係："}},{"topic":"em","en":{"q":"How to remember wavelength ranges of various EM waves?","a":"Wavelength Range Reference 10−7 Radio waves: – m (much longer than visible) 10−1 104 Microwaves: – m 10−3 10−1 Infrared: – 10−6 Q: How to quickly determine which EM wave to use? A: Choose based on function: m 10−3 Visible light: m (reference point) 10−7 Ultraviolet: – m 10−9 10−8 X-rays: m 10−10 Gamma rays: m (shortest) 10−12"},"zhHant":{"q":"波長範圍參考","a":"10−7 無線電波： – m（比可見光長很多） 10−1 104 微波： – m 10−3 10−1 紅外線： – m 10−6 10−3 可見光： m（參考點） 10−7 紫外線： – m 10−9 10−8 X 射線： m 10−10 問：如何快速判斷使用哪種電磁波？ 答： 根據功能選擇： 伽馬射線： m（最短） 10−12"}},{"topic":"em","en":{"q":"How to quickly determine which EM wave to use?","a":"Comprehensive Application Communication → Radio waves, microwaves Heating → Microwaves, infrared Remote control → Infrared Sterilization → Ultraviolet, gamma rays See-through imaging → X-rays Cancer treatment → Gamma rays Temperature measurement → Infrared"},"zhHant":{"q":"綜合應用","a":"通訊 → 無線電波、微波 加熱 → 微波、紅外線 遙控 → 紅外線 消毒 → 紫外線、伽馬射線 透視 → X 射線 治療癌症 → 伽馬射線 測溫 → 紅外線"}},{"topic":"liquidThermometer","en":{"q":"What is the boiling point of mercury and alcohol?","a":"Mercury: 356.7°C (high boiling point, suitable for measuring hot oil)\\nAlcohol: 78.4°C (low boiling point, vaporizes under high temperature/pressure)"},"zhHant":{"q":"水銀和酒精的沸點分別是多少？","a":"水銀：356.7°C（沸點高，適合測量高溫熱油）\\n酒精：78.4°C（沸點低，高溫下易汽化產生高壓）"}},{"topic":"faultyThermometer","en":{"q":"What is the proportional interval formula for a faulty thermometer?","a":"T / 100 = (C_measured - C_f) / (C_u - C_f)\\nWhere C_f is ice point reading, C_u is steam point reading, and C_measured is the faulty reading."},"zhHant":{"q":"有誤差溫度計的等比例區間公式是什麼？","a":"T / 100 = (C_measured - C_f) / (C_u - C_f)\\n其中 C_f 是冰點讀數，C_u 是蒸汽點讀數，C_measured 是測量讀數。"}},{"topic":"resistanceThermometer","en":{"q":"What is the platinum resistance temperature formula?","a":"theta = ((R - R0) / (R100 - R0)) * 100\\nAssumes resistance varies linearly with temperature."},"zhHant":{"q":"鉑電阻溫度計的溫度計算公式是什麼？","a":"theta = ((R - R0) / (R100 - R0)) * 100\\n假設電阻隨溫度線性變化。"}},{"topic":"thermistor","en":{"q":"How does NTC thermistor resistance change with temperature?","a":"Negative Temperature Coefficient: resistance decreases exponentially as temperature increases."},"zhHant":{"q":"NTC 熱敏電阻的電阻如何隨溫度變化？","a":"負溫度係數：電阻隨溫度升高而呈指數級減少。"}}]`),Ue=[{id:1,topic:"reflection",title:"Law of Reflection",alt:"Flashcard 1 - Law of Reflection",en:{front:"./flashcards/reflection/01-en-front.webp",back:"./flashcards/reflection/01-en-back.webp"},zhHant:{front:"./flashcards/reflection/01-zh-front.webp",back:"./flashcards/reflection/01-zh-back.webp"}},{id:2,topic:"reflection",title:"Angle Definitions",alt:"Flashcard 2 - Angle Definitions",en:{front:"./flashcards/reflection/02-en-front.webp",back:"./flashcards/reflection/02-en-back.webp"},zhHant:{front:"./flashcards/reflection/02-zh-front.webp",back:"./flashcards/reflection/02-zh-back.webp"}},{id:3,topic:"reflection",title:"Ray Diagram Construction",alt:"Flashcard 3 - Ray Diagram Construction",en:{front:"./flashcards/reflection/03-en-front.webp",back:"./flashcards/reflection/03-en-back.webp"},zhHant:{front:"./flashcards/reflection/03-zh-front.webp",back:"./flashcards/reflection/03-zh-back.webp"}},{id:4,topic:"reflection",title:"Image Properties",alt:"Flashcard 4 - Image Properties",en:{front:"./flashcards/reflection/04-en-front.webp",back:"./flashcards/reflection/04-en-back.webp"},zhHant:{front:"./flashcards/reflection/04-zh-front.webp",back:"./flashcards/reflection/04-zh-back.webp"}},{id:5,topic:"reflection",title:"Object-Image Distance",alt:"Flashcard 5 - Object-Image Distance",en:{front:"./flashcards/reflection/05-en-front.webp",back:"./flashcards/reflection/05-en-back.webp"},zhHant:{front:"./flashcards/reflection/05-zh-front.webp",back:"./flashcards/reflection/05-zh-back.webp"}},{id:6,topic:"reflection",title:"Visibility Condition",alt:"Flashcard 6 - Visibility Condition",en:{front:"./flashcards/reflection/06-en-front.webp",back:"./flashcards/reflection/06-en-back.webp"},zhHant:{front:"./flashcards/reflection/06-zh-front.webp",back:"./flashcards/reflection/06-zh-back.webp"}},{id:7,topic:"reflection",title:"Reversibility of Light",alt:"Flashcard 7 - Reversibility of Light",en:{front:"./flashcards/reflection/07-en-front.webp",back:"./flashcards/reflection/07-en-back.webp"},zhHant:{front:"./flashcards/reflection/07-zh-front.webp",back:"./flashcards/reflection/07-zh-back.webp"}},{id:8,topic:"reflection",title:"Lateral Inversion",alt:"Flashcard 8 - Lateral Inversion",en:{front:"./flashcards/reflection/08-en-front.webp",back:"./flashcards/reflection/08-en-back.webp"},zhHant:{front:"./flashcards/reflection/08-zh-front.webp",back:"./flashcards/reflection/08-zh-back.webp"}},{id:9,topic:"reflection",title:"Applications",alt:"Flashcard 9 - Applications",en:{front:"./flashcards/reflection/09-en-front.webp",back:"./flashcards/reflection/09-en-back.webp"},zhHant:{front:"./flashcards/reflection/09-zh-front.webp",back:"./flashcards/reflection/09-zh-back.webp"}}],Ye=[{id:1,topic:"refraction",title:"What is Refraction",alt:"Flashcard 1 - What is Refraction",en:{front:"./flashcards/refraction/01-en-front.webp",back:"./flashcards/refraction/01-en-back.webp"},zhHant:{front:"./flashcards/refraction/01-zh-front.webp",back:"./flashcards/refraction/01-zh-back.webp"}},{id:2,topic:"refraction",title:"Laws of Refraction",alt:"Flashcard 2 - Laws of Refraction",en:{front:"./flashcards/refraction/02-en-front.webp",back:"./flashcards/refraction/02-en-back.webp"},zhHant:{front:"./flashcards/refraction/02-zh-front.webp",back:"./flashcards/refraction/02-zh-back.webp"}},{id:3,topic:"refraction",title:"Snell's Law",alt:"Flashcard 3 - Snell's Law",en:{front:"./flashcards/refraction/03-en-front.webp",back:"./flashcards/refraction/03-en-back.webp"},zhHant:{front:"./flashcards/refraction/03-zh-front.webp",back:"./flashcards/refraction/03-zh-back.webp"}},{id:4,topic:"refraction",title:"Refractive Index",alt:"Flashcard 4 - Refractive Index",en:{front:"./flashcards/refraction/04-en-front.webp",back:"./flashcards/refraction/04-en-back.webp"},zhHant:{front:"./flashcards/refraction/04-zh-front.webp",back:"./flashcards/refraction/04-zh-back.webp"}},{id:5,topic:"refraction",title:"Normal Incidence",alt:"Flashcard 5 - Normal Incidence",en:{front:"./flashcards/refraction/05-en-front.webp",back:"./flashcards/refraction/05-en-back.webp"},zhHant:{front:"./flashcards/refraction/05-zh-front.webp",back:"./flashcards/refraction/05-zh-back.webp"}},{id:6,topic:"refraction",title:"Denser vs Less Dense",alt:"Flashcard 6 - Denser vs Less Dense",en:{front:"./flashcards/refraction/06-en-front.webp",back:"./flashcards/refraction/06-en-back.webp"},zhHant:{front:"./flashcards/refraction/06-zh-front.webp",back:"./flashcards/refraction/06-zh-back.webp"}},{id:7,topic:"refraction",title:"Less Dense to Denser",alt:"Flashcard 7 - Less Dense to Denser",en:{front:"./flashcards/refraction/07-en-front.webp",back:"./flashcards/refraction/07-en-back.webp"},zhHant:{front:"./flashcards/refraction/07-zh-front.webp",back:"./flashcards/refraction/07-zh-back.webp"}},{id:8,topic:"refraction",title:"Denser to Less Dense",alt:"Flashcard 8 - Denser to Less Dense",en:{front:"./flashcards/refraction/08-en-front.webp",back:"./flashcards/refraction/08-en-back.webp"},zhHant:{front:"./flashcards/refraction/08-zh-front.webp",back:"./flashcards/refraction/08-zh-back.webp"}},{id:9,topic:"refraction",title:"Apparent Depth",alt:"Flashcard 9 - Apparent Depth",en:{front:"./flashcards/refraction/09-en-front.webp",back:"./flashcards/refraction/09-en-back.webp"},zhHant:{front:"./flashcards/refraction/09-zh-front.webp",back:"./flashcards/refraction/09-zh-back.webp"}},{id:10,topic:"refraction",title:"Dispersion",alt:"Flashcard 10 - Dispersion",en:{front:"./flashcards/refraction/10-en-front.webp",back:"./flashcards/refraction/10-en-back.webp"},zhHant:{front:"./flashcards/refraction/10-zh-front.webp",back:"./flashcards/refraction/10-zh-back.webp"}},{id:11,topic:"refraction",title:"Red vs Violet",alt:"Flashcard 11 - Red vs Violet",en:{front:"./flashcards/refraction/11-en-front.webp",back:"./flashcards/refraction/11-en-back.webp"},zhHant:{front:"./flashcards/refraction/11-zh-front.webp",back:"./flashcards/refraction/11-zh-back.webp"}},{id:12,topic:"refraction",title:"Experiment Graph",alt:"Flashcard 12 - Experiment Graph",en:{front:"./flashcards/refraction/12-en-front.webp",back:"./flashcards/refraction/12-en-back.webp"},zhHant:{front:"./flashcards/refraction/12-zh-front.webp",back:"./flashcards/refraction/12-zh-back.webp"}}],Xe=[{id:1,topic:"tir",title:"What is TIR",alt:"Flashcard 1 - What is TIR",en:{front:"./flashcards/tir/01-en-front.webp",back:"./flashcards/tir/01-en-back.webp"},zhHant:{front:"./flashcards/tir/01-zh-front.webp",back:"./flashcards/tir/01-zh-back.webp"}},{id:2,topic:"tir",title:"Two Conditions",alt:"Flashcard 2 - Two Conditions",en:{front:"./flashcards/tir/02-en-front.webp",back:"./flashcards/tir/02-en-back.webp"},zhHant:{front:"./flashcards/tir/02-zh-front.webp",back:"./flashcards/tir/02-zh-back.webp"}},{id:3,topic:"tir",title:"Critical Angle",alt:"Flashcard 3 - Critical Angle",en:{front:"./flashcards/tir/03-en-front.webp",back:"./flashcards/tir/03-en-back.webp"},zhHant:{front:"./flashcards/tir/03-zh-front.webp",back:"./flashcards/tir/03-zh-back.webp"}},{id:4,topic:"tir",title:"Three Scenarios",alt:"Flashcard 4 - Three Scenarios",en:{front:"./flashcards/tir/04-en-front.webp",back:"./flashcards/tir/04-en-back.webp"},zhHant:{front:"./flashcards/tir/04-zh-front.webp",back:"./flashcards/tir/04-zh-back.webp"}},{id:5,topic:"tir",title:"Fish Eye View",alt:"Flashcard 5 - Fish Eye View",en:{front:"./flashcards/tir/05-en-front.webp",back:"./flashcards/tir/05-en-back.webp"},zhHant:{front:"./flashcards/tir/05-zh-front.webp",back:"./flashcards/tir/05-zh-back.webp"}},{id:6,topic:"tir",title:"Mirage",alt:"Flashcard 6 - Mirage",en:{front:"./flashcards/tir/06-en-front.webp",back:"./flashcards/tir/06-en-back.webp"},zhHant:{front:"./flashcards/tir/06-zh-front.webp",back:"./flashcards/tir/06-zh-back.webp"}},{id:7,topic:"tir",title:"Reflecting Prisms",alt:"Flashcard 7 - Reflecting Prisms",en:{front:"./flashcards/tir/07-en-front.webp",back:"./flashcards/tir/07-en-back.webp"},zhHant:{front:"./flashcards/tir/07-zh-front.webp",back:"./flashcards/tir/07-zh-back.webp"}},{id:8,topic:"tir",title:"Optical Fibres",alt:"Flashcard 8 - Optical Fibres",en:{front:"./flashcards/tir/08-en-front.webp",back:"./flashcards/tir/08-en-back.webp"},zhHant:{front:"./flashcards/tir/08-zh-front.webp",back:"./flashcards/tir/08-zh-back.webp"}},{id:9,topic:"tir",title:"Key Advantages",alt:"Flashcard 9 - Key Advantages",en:{front:"./flashcards/tir/09-en-front.webp",back:"./flashcards/tir/09-en-back.webp"},zhHant:{front:"./flashcards/tir/09-zh-front.webp",back:"./flashcards/tir/09-zh-back.webp"}}],Ze=[{id:1,topic:"em",title:"EM Spectrum Order",front:"./flashcards/em/01-front.webp",alt:"Flashcard 1 - EM Spectrum Order",back:"./flashcards/em/01-back.webp"},{id:2,topic:"em",title:"Common Properties",front:"./flashcards/em/02-front.webp",alt:"Flashcard 2 - Common Properties",back:"./flashcards/em/02-back.webp"},{id:3,topic:"em",title:"Speed & Equation",front:"./flashcards/em/03-front.webp",alt:"Flashcard 3 - Speed & Equation",back:"./flashcards/em/03-back.webp"},{id:4,topic:"em",title:"Radio Waves & Microwaves",front:"./flashcards/em/04-front.webp",alt:"Flashcard 4 - Radio Waves & Microwaves",back:"./flashcards/em/04-back.webp"},{id:5,topic:"em",title:"Infrared",front:"./flashcards/em/05-front.webp",alt:"Flashcard 5 - Infrared",back:"./flashcards/em/05-back.webp"},{id:6,topic:"em",title:"Visible Light & Ultraviolet",front:"./flashcards/em/06-front.webp",alt:"Flashcard 6 - Visible Light & Ultraviolet",back:"./flashcards/em/06-back.webp"},{id:7,topic:"em",title:"X-rays & Gamma Rays",front:"./flashcards/em/07-front.webp",alt:"Flashcard 7 - X-rays & Gamma Rays",back:"./flashcards/em/07-back.webp"},{id:8,topic:"em",title:"White Light & Spectrum",front:"./flashcards/em/08-front.webp",alt:"Flashcard 8 - White Light & Spectrum",back:"./flashcards/em/08-back.webp"},{id:9,topic:"em",title:"Primary Colours",front:"./flashcards/em/09-front.webp",alt:"Flashcard 9 - Primary Colours",back:"./flashcards/em/09-back.webp"},{id:10,topic:"em",title:"Secondary Colours",front:"./flashcards/em/10-front.webp",alt:"Flashcard 10 - Secondary Colours",back:"./flashcards/em/10-back.webp"},{id:11,topic:"em",title:"Object Colours",front:"./flashcards/em/11-front.webp",alt:"Flashcard 11 - Object Colours",back:"./flashcards/em/11-back.webp"},{id:12,topic:"em",title:"Wavelength & Frequency",front:"./flashcards/em/12-front.webp",alt:"Flashcard 12 - Wavelength & Frequency",back:"./flashcards/em/12-back.webp"}],Je=[{id:1,topic:"convex",title:"Ray Rule 1",alt:"Flashcard 1 - Ray Rule 1",en:{front:"./flashcards/convex/01-en-front.webp",back:"./flashcards/convex/01-en-back.webp"},zhHant:{front:"./flashcards/convex/01-zh-front.webp",back:"./flashcards/convex/01-zh-back.webp"}},{id:2,topic:"convex",title:"Ray Rule 2",alt:"Flashcard 2 - Ray Rule 2",en:{front:"./flashcards/convex/02-en-front.webp",back:"./flashcards/convex/02-en-back.webp"},zhHant:{front:"./flashcards/convex/02-zh-front.webp",back:"./flashcards/convex/02-zh-back.webp"}},{id:3,topic:"convex",title:"Ray Rule 3",alt:"Flashcard 3 - Ray Rule 3",en:{front:"./flashcards/convex/03-en-front.webp",back:"./flashcards/convex/03-en-back.webp"},zhHant:{front:"./flashcards/convex/03-zh-front.webp",back:"./flashcards/convex/03-zh-back.webp"}},{id:4,topic:"convex",title:"Object at Infinity",alt:"Flashcard 4 - Object at Infinity",en:{front:"./flashcards/convex/04-en-front.webp",back:"./flashcards/convex/04-en-back.webp"},zhHant:{front:"./flashcards/convex/04-zh-front.webp",back:"./flashcards/convex/04-zh-back.webp"}},{id:5,topic:"convex",title:"Object beyond 2F",alt:"Flashcard 5 - Object beyond 2F",en:{front:"./flashcards/convex/05-en-front.webp",back:"./flashcards/convex/05-en-back.webp"},zhHant:{front:"./flashcards/convex/05-zh-front.webp",back:"./flashcards/convex/05-zh-back.webp"}},{id:6,topic:"convex",title:"Object at 2F",alt:"Flashcard 6 - Object at 2F",en:{front:"./flashcards/convex/06-en-front.webp",back:"./flashcards/convex/06-en-back.webp"},zhHant:{front:"./flashcards/convex/06-zh-front.webp",back:"./flashcards/convex/06-zh-back.webp"}},{id:7,topic:"convex",title:"Object between F-2F",alt:"Flashcard 7 - Object between F-2F",en:{front:"./flashcards/convex/07-en-front.webp",back:"./flashcards/convex/07-en-back.webp"},zhHant:{front:"./flashcards/convex/07-zh-front.webp",back:"./flashcards/convex/07-zh-back.webp"}},{id:8,topic:"convex",title:"Object between Lens-F",alt:"Flashcard 8 - Object between Lens-F",en:{front:"./flashcards/convex/08-en-front.webp",back:"./flashcards/convex/08-en-back.webp"},zhHant:{front:"./flashcards/convex/08-zh-front.webp",back:"./flashcards/convex/08-zh-back.webp"}},{id:9,topic:"convex",title:"Object at F",alt:"Flashcard 9 - Object at F",en:{front:"./flashcards/convex/09-en-front.webp",back:"./flashcards/convex/09-en-back.webp"},zhHant:{front:"./flashcards/convex/09-zh-front.webp",back:"./flashcards/convex/09-zh-back.webp"}},{id:10,topic:"convex",title:"Lens Formula",alt:"Flashcard 10 - Lens Formula",en:{front:"./flashcards/convex/10-en-front.webp",back:"./flashcards/convex/10-en-back.webp"},zhHant:{front:"./flashcards/convex/10-zh-front.webp",back:"./flashcards/convex/10-zh-back.webp"}},{id:11,topic:"convex",title:"Key Remarks",alt:"Flashcard 11 - Key Remarks",en:{front:"./flashcards/convex/11-en-front.webp",back:"./flashcards/convex/11-en-back.webp"},zhHant:{front:"./flashcards/convex/11-zh-front.webp",back:"./flashcards/convex/11-zh-back.webp"}},{id:12,topic:"convex",title:"Applications",alt:"Flashcard 12 - Applications",en:{front:"./flashcards/convex/12-en-front.webp",back:"./flashcards/convex/12-en-back.webp"},zhHant:{front:"./flashcards/convex/12-zh-front.webp",back:"./flashcards/convex/12-zh-back.webp"}}],et=[{id:1,topic:"concave",title:"Ray Rule 1",alt:"Flashcard 1 - Concave Ray Rule 1",en:{front:"./flashcards/concave/01-en-front.webp",back:"./flashcards/concave/01-en-back.webp"},zhHant:{front:"./flashcards/concave/01-zh-front.webp",back:"./flashcards/concave/01-zh-back.webp"}},{id:2,topic:"concave",title:"Ray Rule 2",alt:"Flashcard 2 - Concave Ray Rule 2",en:{front:"./flashcards/concave/02-en-front.webp",back:"./flashcards/concave/02-en-back.webp"},zhHant:{front:"./flashcards/concave/02-zh-front.webp",back:"./flashcards/concave/02-zh-back.webp"}},{id:3,topic:"concave",title:"Ray Rule 3",alt:"Flashcard 3 - Concave Ray Rule 3",en:{front:"./flashcards/concave/03-en-front.webp",back:"./flashcards/concave/03-en-back.webp"},zhHant:{front:"./flashcards/concave/03-zh-front.webp",back:"./flashcards/concave/03-zh-back.webp"}},{id:4,topic:"concave",title:"Image Formation",alt:"Flashcard 4 - Concave Image Formation",en:{front:"./flashcards/concave/04-en-front.webp",back:"./flashcards/concave/04-en-back.webp"},zhHant:{front:"./flashcards/concave/04-zh-front.webp",back:"./flashcards/concave/04-zh-back.webp"}},{id:5,topic:"concave",title:"Formula",alt:"Flashcard 5 - Concave Formula",en:{front:"./flashcards/concave/05-en-front.webp",back:"./flashcards/concave/05-en-back.webp"},zhHant:{front:"./flashcards/concave/05-zh-front.webp",back:"./flashcards/concave/05-zh-back.webp"}},{id:6,topic:"concave",title:"Key Remarks",alt:"Flashcard 6 - Concave Key Remarks",en:{front:"./flashcards/concave/06-en-front.webp",back:"./flashcards/concave/06-en-back.webp"},zhHant:{front:"./flashcards/concave/06-zh-front.webp",back:"./flashcards/concave/06-zh-back.webp"}}],tt=[{id:1,topic:"thermometer",title:"What is Temperature?",front:"./flashcards/thermometer/01-front.webp",alt:"Flashcard 1 - What is Temperature?",back:"./flashcards/thermometer/01-back.webp"},{id:2,topic:"thermometer",title:"Celsius Scale & Fixed Points",front:"./flashcards/thermometer/02-front.webp",alt:"Flashcard 2 - Celsius Scale & Fixed Points",back:"./flashcards/thermometer/02-back.webp"},{id:3,topic:"thermometer",title:"Calibration of Unmarked Thermometer",front:"./flashcards/thermometer/03-front.webp",alt:"Flashcard 3 - Calibration of Unmarked Thermometer",back:"./flashcards/thermometer/03-back.webp"},{id:4,topic:"thermometer",title:"Liquid-in-Glass Thermometer",front:"./flashcards/thermometer/04-front.webp",alt:"Flashcard 4 - Liquid-in-Glass Thermometer",back:"./flashcards/thermometer/04-back.webp"},{id:5,topic:"thermometer",title:"Mercury vs Alcohol Thermometer",front:"./flashcards/thermometer/05-front.webp",alt:"Flashcard 5 - Mercury vs Alcohol Thermometer",back:"./flashcards/thermometer/05-back.webp"},{id:6,topic:"thermometer",title:"Types of Thermometers",front:"./flashcards/thermometer/06-front.webp",alt:"Flashcard 6 - Types of Thermometers",back:"./flashcards/thermometer/06-back.webp"},{id:7,topic:"thermometer",title:"Temperature-Dependent Properties",front:"./flashcards/thermometer/07-front.webp",alt:"Flashcard 7 - Temperature-Dependent Properties",back:"./flashcards/thermometer/07-back.webp"},{id:8,topic:"thermometer",title:"Sensitivity of Thermometer",front:"./flashcards/thermometer/08-front.webp",alt:"Flashcard 8 - Sensitivity of Thermometer",back:"./flashcards/thermometer/08-back.webp"},{id:9,topic:"thermometer",title:"Calibration Calculation",front:"./flashcards/thermometer/09-front.webp",alt:"Flashcard 9 - Calibration Calculation",back:"./flashcards/thermometer/09-back.webp"},{id:10,topic:"thermometer",title:"Faulty Thermometer Correction",front:"./flashcards/thermometer/10-front.webp",alt:"Flashcard 10 - Faulty Thermometer Correction",back:"./flashcards/thermometer/10-back.webp"}],at=[{id:1,topic:"heatInternalEnergy",title:"What is Heat?",front:"./flashcards/heat-internal-energy/01-front.webp",alt:"Flashcard 1 - What is Heat?",back:"./flashcards/heat-internal-energy/01-back.webp"},{id:2,topic:"heatInternalEnergy",title:"Define Specific Heat Capacity",front:"./flashcards/heat-internal-energy/02-front.webp",alt:"Flashcard 2 - Define Specific Heat Capacity",back:"./flashcards/heat-internal-energy/02-back.webp"},{id:3,topic:"heatInternalEnergy",title:"E = mcΔT Formula",front:"./flashcards/heat-internal-energy/03-front.webp",alt:"Flashcard 3 - E = mcΔT Formula",back:"./flashcards/heat-internal-energy/03-back.webp"},{id:4,topic:"heatInternalEnergy",title:"Energy from Power",front:"./flashcards/heat-internal-energy/04-front.webp",alt:"Flashcard 4 - Energy from Power",back:"./flashcards/heat-internal-energy/04-back.webp"},{id:5,topic:"heatInternalEnergy",title:"Simple SHC Calculation",front:"./flashcards/heat-internal-energy/05-front.webp",alt:"Flashcard 5 - Simple SHC Calculation",back:"./flashcards/heat-internal-energy/05-back.webp"},{id:6,topic:"heatInternalEnergy",title:"Power-Heater Calculation",front:"./flashcards/heat-internal-energy/06-front.webp",alt:"Flashcard 6 - Power-Heater Calculation",back:"./flashcards/heat-internal-energy/06-back.webp"},{id:7,topic:"heatInternalEnergy",title:"Conservation of Energy Mixture",front:"./flashcards/heat-internal-energy/07-front.webp",alt:"Flashcard 7 - Conservation of Energy Mixture",back:"./flashcards/heat-internal-energy/07-back.webp"},{id:8,topic:"heatInternalEnergy",title:"Heat Capacity vs Specific Heat Capacity",front:"./flashcards/heat-internal-energy/08-front.webp",alt:"Flashcard 8 - Heat Capacity vs Specific Heat Capacity",back:"./flashcards/heat-internal-energy/08-back.webp"},{id:9,topic:"heatInternalEnergy",title:"Factors Affecting Temperature Change",front:"./flashcards/heat-internal-energy/09-front.webp",alt:"Flashcard 9 - Factors Affecting Temperature Change",back:"./flashcards/heat-internal-energy/09-back.webp"},{id:10,topic:"heatInternalEnergy",title:"Key Applications & Assumptions",front:"./flashcards/heat-internal-energy/10-front.webp",alt:"Flashcard 10 - Key Applications & Assumptions",back:"./flashcards/heat-internal-energy/10-back.webp"}],rt=[{id:1,topic:"changeOfState",title:"What is Latent Heat?",front:"./flashcards/change-of-state/01-front.webp",alt:"Flashcard 1 - What is Latent Heat?",back:"./flashcards/change-of-state/01-back.webp"},{id:2,topic:"changeOfState",title:"Fusion & Freezing",front:"./flashcards/change-of-state/02-front.webp",alt:"Flashcard 2 - Fusion & Freezing",back:"./flashcards/change-of-state/02-back.webp"},{id:3,topic:"changeOfState",title:"Vaporization & Condensation",front:"./flashcards/change-of-state/03-front.webp",alt:"Flashcard 3 - Vaporization & Condensation",back:"./flashcards/change-of-state/03-back.webp"},{id:4,topic:"changeOfState",title:"Internal Energy",front:"./flashcards/change-of-state/04-front.webp",alt:"Flashcard 4 - Internal Energy",back:"./flashcards/change-of-state/04-back.webp"},{id:5,topic:"changeOfState",title:"Heating Curve",front:"./flashcards/change-of-state/05-front.webp",alt:"Flashcard 5 - Heating Curve",back:"./flashcards/change-of-state/05-back.webp"},{id:6,topic:"changeOfState",title:"Cooling Curve",front:"./flashcards/change-of-state/06-front.webp",alt:"Flashcard 6 - Cooling Curve",back:"./flashcards/change-of-state/06-back.webp"},{id:7,topic:"changeOfState",title:"Evaporation vs Boiling",front:"./flashcards/change-of-state/07-front.webp",alt:"Flashcard 7 - Evaporation vs Boiling",back:"./flashcards/change-of-state/07-back.webp"},{id:8,topic:"changeOfState",title:"Evaporation Factors",front:"./flashcards/change-of-state/08-front.webp",alt:"Flashcard 8 - Evaporation Factors",back:"./flashcards/change-of-state/08-back.webp"},{id:9,topic:"changeOfState",title:"Energy Formula E=ml",front:"./flashcards/change-of-state/09-front.webp",alt:"Flashcard 9 - Energy Formula E=ml",back:"./flashcards/change-of-state/09-back.webp"},{id:10,topic:"changeOfState",title:"Specific Latent Heat Values",front:"./flashcards/change-of-state/10-front.webp",alt:"Flashcard 10 - Specific Latent Heat Values",back:"./flashcards/change-of-state/10-back.webp"},{id:11,topic:"changeOfState",title:"Experiment: Latent Heat of Fusion",front:"./flashcards/change-of-state/11-front.webp",alt:"Flashcard 11 - Experiment: Latent Heat of Fusion",back:"./flashcards/change-of-state/11-back.webp"},{id:12,topic:"changeOfState",title:"Experiment: Latent Heat of Vaporization",front:"./flashcards/change-of-state/12-front.webp",alt:"Flashcard 12 - Experiment: Latent Heat of Vaporization",back:"./flashcards/change-of-state/12-back.webp"}],nt=[{id:1,topic:"heatTransfer",title:"What is Conduction?",front:"./flashcards/heat-transfer/01-front.webp",alt:"Flashcard 1 - What is Conduction?",back:"./flashcards/heat-transfer/01-back.webp"},{id:2,topic:"heatTransfer",title:"What is Convection?",front:"./flashcards/heat-transfer/02-front.webp",alt:"Flashcard 2 - What is Convection?",back:"./flashcards/heat-transfer/02-back.webp"},{id:3,topic:"heatTransfer",title:"What is Radiation?",front:"./flashcards/heat-transfer/03-front.webp",alt:"Flashcard 3 - What is Radiation?",back:"./flashcards/heat-transfer/03-back.webp"},{id:4,topic:"heatTransfer",title:"Conduction Mechanism",front:"./flashcards/heat-transfer/04-front.webp",alt:"Flashcard 4 - Conduction Mechanism",back:"./flashcards/heat-transfer/04-back.webp"},{id:5,topic:"heatTransfer",title:"Convection Mechanism",front:"./flashcards/heat-transfer/05-front.webp",alt:"Flashcard 5 - Convection Mechanism",back:"./flashcards/heat-transfer/05-back.webp"},{id:6,topic:"heatTransfer",title:"Conductors & Insulators",front:"./flashcards/heat-transfer/06-front.webp",alt:"Flashcard 6 - Conductors & Insulators",back:"./flashcards/heat-transfer/06-back.webp"},{id:7,topic:"heatTransfer",title:"Convection in Daily Life",front:"./flashcards/heat-transfer/07-front.webp",alt:"Flashcard 7 - Convection in Daily Life",back:"./flashcards/heat-transfer/07-back.webp"},{id:8,topic:"heatTransfer",title:"Sea Breeze & Land Breeze",front:"./flashcards/heat-transfer/08-front.webp",alt:"Flashcard 8 - Sea Breeze & Land Breeze",back:"./flashcards/heat-transfer/08-back.webp"},{id:9,topic:"heatTransfer",title:"Surface Properties & Radiation",front:"./flashcards/heat-transfer/09-front.webp",alt:"Flashcard 9 - Surface Properties & Radiation",back:"./flashcards/heat-transfer/09-back.webp"},{id:10,topic:"heatTransfer",title:"Vacuum Flask",front:"./flashcards/heat-transfer/10-front.webp",alt:"Flashcard 10 - Vacuum Flask",back:"./flashcards/heat-transfer/10-back.webp"},{id:11,topic:"heatTransfer",title:"Greenhouse Effect",front:"./flashcards/heat-transfer/11-front.webp",alt:"Flashcard 11 - Greenhouse Effect",back:"./flashcards/heat-transfer/11-back.webp"},{id:12,topic:"heatTransfer",title:"Three Methods Comparison",front:"./flashcards/heat-transfer/12-front.webp",alt:"Flashcard 12 - Three Methods Comparison",back:"./flashcards/heat-transfer/12-back.webp"},{id:13,topic:"heatTransfer",title:"Key Facts & Common Errors",front:"./flashcards/heat-transfer/13-front.webp",alt:"Flashcard 13 - Key Facts & Common Errors",back:"./flashcards/heat-transfer/13-back.webp"}],Jt=["liquidThermometer","faultyThermometer","resistanceThermometer","thermistor"];function ea(t){return t==="zh-Hant"?"zhHant":"en"}function Ae(t){return Zt(t)}function ta(t,n,o,i){var r,u,j;const s=ea(n);if((r=t==null?void 0:t.en)!=null&&r.front||(u=t==null?void 0:t.zhHant)!=null&&u.front){const A=(j=t[s])!=null&&j.front?t[s]:t.en||t.zhHant,L=Ae(A.front),H=A.back?Ae(A.back):L;return{id:o,subtopic:t.topic||i,front:"",back:"",frontImage:L,backImage:H,alt:t.alt||t.title||"",isImage:!0}}if(t!=null&&t.front){const A=Ae(t.front),L=t.back?Ae(t.back):A;return{id:o,subtopic:t.topic||i,front:"",back:"",frontImage:A,backImage:L,alt:t.alt||t.title||"",isImage:!0}}const a=t[s]||t.en;return{id:o,subtopic:t.topic||i,front:(a==null?void 0:a.q)||"",back:(a==null?void 0:a.a)||"",isImage:!1}}function xt(t,n,o="General"){let i=1;return t.map(s=>{const a=ta(s,n,i,s.topic||o);return i+=1,a})}function aa(t){const n=wt.slice(),o=t==="rotatingMirror"?"reflection":t;if(o==="all"){const s=n.filter(a=>a.topic!=="convex"&&a.topic!=="concave"&&a.topic!=="refraction"&&a.topic!=="tir"&&a.topic!=="em");return[...Ue,...Ye,...Xe,...Ze,...Je,...et,...s]}if(o==="reflection")return Ue.slice();if(o==="convex")return Je.slice();if(o==="concave")return et.slice();if(o==="refractionTir")return[...Ye,...Xe];if(o==="em")return Ze.slice();const i=n.filter(s=>s.topic===o);return i.length?i:n}function ra(t){if(t==="all")return[...tt,...at,...rt,...nt];if(t==="thermometry")return tt.slice();if(t==="heatInternalEnergy")return at.slice();if(t==="changeOfState")return rt.slice();if(t==="heatTransfer")return nt.slice();const n=wt.filter(i=>Jt.includes(i.topic)),o=n.filter(i=>i.topic===t);return o.length?o:n}function na(t,n){return xt(aa(t),n)}function ia(t,n){return xt(ra(t),n)}const oa=["rotatingMirror","refractionTir","lens","rgbMixer","em"],sa={rotatingMirror:t=>At(t),refractionTir:t=>$t(t),lens:(t,n)=>It(t,{defaultKind:n}),rgbMixer:t=>Pt(t),em:t=>Wt(t)};function la(t){return l({rotatingMirror:"tools.rotatingMirror.title",refractionTir:"tools.refractionTir.title",lens:"tools.lens.title",rgbMixer:"tools.rgbMixer.title",em:"tools.em.title"}[t]||t)}function Oe(){return oe()==="zh-Hant"?"zhHant":"en"}async function Be(t,n){const o=`./${t}/${n}`;try{return(await fetch(o,{method:"HEAD"})).ok}catch{return!1}}async function ca(t){return Be("notes",t)}function da(t){let n="topics",o="rotatingMirror",i="convex",s=null,a={main:null},r=null;const u=[{value:"all",labelKey:"flashcards.all"},{value:"reflection",labelKey:"topic.reflection"},{value:"refractionTir",labelKey:"flashcards.deck.refractionTir"},{value:"convex",labelKey:"topic.convex"},{value:"concave",labelKey:"topic.concave"},{value:"em",labelKey:"topic.em"}];function j(){a.main&&(r==null||r(),r=null,n==="topics"?a.main.innerHTML=L():n==="notes"?a.main.innerHTML=M():n==="tools"?a.main.innerHTML=x():n==="worksheets"?a.main.innerHTML=gt(l):n==="flashcards"?r=yt(a.main,{deckOptions:u.map(d=>({value:d.value,label:l(d.labelKey)})),buildDeck:d=>na(d,oe())}):n==="summary"&&(a.main.innerHTML=g()),n==="notes"&&K(),n==="tools"&&_(),n==="worksheets"&&vt(t,mt,l,Oe),n==="summary"&&E())}function A(){s==null||s.destroy(),s=bt(t,{subtitleKey:"strand.optics.subtitle",activeSection:n,onSection:d=>{n=d,s.updateSection(n),j()},onLang:()=>A()}),a.main=s.main,s.updateSection(n),j()}function L(){const d=[["rotatingMirror","topic.reflection"],["refraction","topic.refractionSnell"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${l("topics.title")}</h2>
        <p class="lead">${l("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${d.map(([f,h])=>{const k=f==="convex"||f==="concave"?"lens":f==="refraction"||f==="tir"?"refractionTir":f==="em"?"em":f,G=f==="convex"?"convex":f==="concave"?"concave":"";return`
            <div class="card">
              <h3>${l(h)}</h3>
              <button class="btn primary" type="button" data-go-tool="${k}"${G?` data-lens-kind="${G}"`:""}>${l("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function H(d){const f=d.target.closest("[data-go-tool]");if(!f)return;n="tools",o=f.getAttribute("data-go-tool");const h=f.getAttribute("data-lens-kind");(h==="convex"||h==="concave")&&(i=h),s.updateSection(n),j()}function M(){const d=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${l("notes.title")}</h2>
        <p class="lead">${l("notes.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${d.map(f=>{const h=l(`notes.card.${f.key}`);return`
            <div class="card" data-note-card="${f.key}">
              <h3>${h}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function K(){const d=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],f=Oe();for(const h of d){const k=t.querySelector(`[data-note-card="${h.key}"]`);if(!k)continue;const G=k.querySelector("[data-note-body]"),J=f==="zhHant"?h.fileZh:h.fileEn,Q=await ca(J),P=`./notes/${J}`;Q?G.innerHTML=`
          <iframe class="notes-grid" title="${l(`notes.card.${h.key}`)}" src="${P}"></iframe>
          <p style="margin-top:8px"><a href="${P}" target="_blank" rel="noopener">${l("notes.openPdf")}</a></p>`:G.innerHTML=`<p class="lead">${l("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function x(){return`
      <section class="panel panel--tools">
        <h2>${l("tools.title")}</h2>
        <p class="lead">${l("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${oa.map(d=>`<button type="button" data-tool="${d}" class="${o===d?"active":""}">${la(d)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function _(){const d=t.querySelector("[data-tool-list]"),f=t.querySelector("[data-tool-stage]");!d||!f||(d.querySelectorAll("button").forEach(h=>{h.addEventListener("click",()=>{o=h.getAttribute("data-tool"),d.querySelectorAll("button").forEach(k=>k.classList.toggle("active",k.getAttribute("data-tool")===o)),F(f)})}),F(f))}function F(d){d.innerHTML="";const f=sa[o];if(!f)return;const h=o==="lens"?f(l,i):f(l);d.appendChild(h)}function g(){const d=[{key:"reflection",type:"image",fileEn:"reflection-en.webp",fileZh:"reflection-zhHant.webp"},{key:"refraction",type:"image",fileEn:"refraction-en.webp",fileZh:"refraction-zhHant.webp"},{key:"tir",type:"image",fileEn:"tir-en.webp",fileZh:"tir-zhHant.webp"},{key:"convex",type:"image",fileEn:"convex-en.webp",fileZh:"convex-zhHant.webp"},{key:"concave",type:"image",fileEn:"concave-en.webp",fileZh:"concave-zhHant.webp"},{key:"em",type:"image",file:"em.webp"}];return`
      <section class="panel">
        <h2>${l("summary.title")}</h2>
        <p class="lead">${l("summary.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-summary-grid>
          ${d.map(f=>{const h=l(`summary.item.${f.key}`);return`
            <div class="card" data-summary-card="${f.key}">
              <h3>${h}</h3>
              <div data-summary-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function E(){const d=[{key:"reflection",type:"image",fileEn:"reflection-en.webp",fileZh:"reflection-zhHant.webp"},{key:"refraction",type:"image",fileEn:"refraction-en.webp",fileZh:"refraction-zhHant.webp"},{key:"tir",type:"image",fileEn:"tir-en.webp",fileZh:"tir-zhHant.webp"},{key:"convex",type:"image",fileEn:"convex-en.webp",fileZh:"convex-zhHant.webp"},{key:"concave",type:"image",fileEn:"concave-en.webp",fileZh:"concave-zhHant.webp"},{key:"em",type:"image",file:"em.webp"}],f=Oe();for(const h of d){const k=t.querySelector(`[data-summary-card="${h.key}"]`);if(!k)continue;const G=k.querySelector("[data-summary-body]");if(h.type==="image"){const I=h.fileEn&&h.fileZh?f==="zhHant"?h.fileZh:h.fileEn:h.file,V=await Be("summary",I),ee=`./summary/${I}`;V?G.innerHTML=`
          <img class="summary-thumb" src="${ee}" alt="${l(`summary.item.${h.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${ee}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:G.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}const J=f==="zhHant"?h.fileZh:h.fileEn,Q=await Be("summary-pdfs",J),P=`./summary-pdfs/${J}`;Q?G.innerHTML=`
          <iframe class="notes-grid" title="${l(`summary.item.${h.key}`)}" src="${P}"></iframe>
          <p style="margin-top:8px"><a href="${P}" target="_blank" rel="noopener">${l("summary.download")}</a></p>`:G.innerHTML=`<p class="lead">${l("summary.missing")}</p>`}}const $=()=>A(),U=d=>H(d);return window.addEventListener("s3phy:lang",$),t.addEventListener("click",U),A(),()=>{window.removeEventListener("s3phy:lang",$),t.removeEventListener("click",U),r==null||r(),s==null||s.destroy()}}const it="s3phy-thermometer-lab-css",ua=`
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
.tl-wrap .tl-controls-steps {
  order: -1;
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
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--tl-cyan);
  text-shadow: 0 0 10px var(--tl-glow-cyan);
}
.tl-wrap .tl-live-value {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--tl-cyan);
}
.tl-wrap .tl-lr-value {
  font-size: 1.1rem;
}
.tl-wrap .tl-bath-bar-top {
  font-size: 0.95rem;
}
.tl-wrap .tl-cg { display: flex; flex-direction: column; gap: 6px; }
.tl-wrap .tl-lr { display: flex; justify-content: space-between; align-items: center; font-size: 0.95rem; font-weight: 600; }
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
  font-size: 1rem;
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
`;function fa(){if(document.getElementById(it))return;const t=document.createElement("style");t.id=it,t.textContent=ua,document.head.appendChild(t)}function Ge(t,n={}){fa();const o=n.type||"liquid";let i=t("tools.thermometerLab.title"),s=t("tools.thermometerLab.subtitle");n.type==="liquid"?(i=t("tools.thermometerLab.liquid.title"),s=t("tools.thermometerLab.liquid.subtitle")||t("tools.thermometerLab.subtitle")):n.type==="resistance"?(i=t("tools.thermometerLab.resistance.title"),s=t("tools.thermometerLab.resistance.subtitle")||t("tools.thermometerLab.subtitle")):n.type==="thermistor"&&(i=t("tools.thermometerLab.thermistor.title"),s=t("tools.thermometerLab.thermistor.subtitle")||t("tools.thermometerLab.subtitle"));const a=document.createElement("div");a.className="tl-wrap",a.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${i}</h2>
      <div class="tl-sub">${s}</div>
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
              <span><b class="tl-temp-badge" id="tl-bath-temp-display">25.0°C</b></span>
            </div>
            <div class="tl-bath-slider-wrap" style="flex:1;display:flex;flex-direction:column;gap:2px">
              <div class="tl-lr">
                <span>T<sub>bath</sub></span>
                <span class="tl-badge tl-lr-value" id="tl-val-bath-temp" style="color:var(--tl-cyan)">25.0 °C</span>
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
          <!-- Live calibration formula (always visible) -->
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
            <div class="tl-worked-solution" style="margin-bottom:10px; display:flex; flex-direction:column; gap:12px">
              <div style="border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:10px">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction A: Length to Temperature (L<sub>T</sub> &rarr; T)</div>
                <div id="tl-svg-formula-liquid" class="tl-math-formula" style="height:45px; margin:4px 0"></div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current reading <b class="tl-live-value" id="tl-live-liquid-lt">5.50 cm</b>:</p>
                <div id="tl-svg-formula-liquid-sub" class="tl-math-formula" style="height:100px; margin:4px 0"></div>
              </div>
              <div>
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Length (T &rarr; L<sub>T</sub>)</div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current bath temperature <b class="tl-live-value" id="tl-live-liquid-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-l" class="tl-math-formula" style="font-size:0.85rem;height:110px; margin:4px 0"></div>
              </div>
            </div>
          </div>

          <details class="tl-details">
            <summary>${t("tools.thermometerLab.paramSettings")}</summary>
            <div class="tl-details-body">
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
            </div>
          </details>

          <details class="tl-details">
            <summary>${t("tools.thermometerLab.faultySolver")}</summary>
            <div class="tl-details-body">
              <p style="font-size:0.75rem;color:var(--tl-muted);margin:0">Set faulty readings at ice (0°C) and steam (100°C), then solve for T or C.</p>
              <div class="tl-info-card" style="margin-bottom:4px">
                <div class="tl-info-label">Faulty scale calibration</div>
                <p style="margin:0;font-size:0.75rem">T / 100 = (C − C<sub>f</sub>) / (C<sub>u</sub> − C<sub>f</sub>)</p>
              </div>
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
                  <div id="tl-svg-formula-faulty-a" class="tl-math-formula" style="font-size:0.85rem"></div>
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
                  <div id="tl-svg-formula-faulty-b" class="tl-math-formula" style="font-size:0.85rem"></div>
                </div>
              </div>
            </div>
          </details>
        </div>

        <!-- TAB 2: PLATINUM RESISTANCE -->
        <div class="tl-tab-content" id="tl-tab-resistance">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
            <div class="tl-worked-solution" style="margin-bottom:10px; display:flex; flex-direction:column; gap:12px">
              <div style="border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:10px">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction A: Resistance to Temperature (R<sub>T</sub> &rarr; T)</div>
                <div id="tl-svg-formula-resistance" class="tl-math-formula" style="height:45px; margin:4px 0"></div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current resistance <b class="tl-live-value" id="tl-live-resistance-rt">5.30 Ω</b>:</p>
                <div id="tl-svg-formula-resistance-sub" class="tl-math-formula" style="height:100px; margin:4px 0"></div>
              </div>
              <div>
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Resistance (T &rarr; R<sub>T</sub>)</div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current bath temperature <b class="tl-live-value" id="tl-live-resistance-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-r" class="tl-math-formula" style="font-size:0.85rem;height:110px; margin:4px 0"></div>
              </div>
            </div>
          </div>

          <details class="tl-details">
            <summary>${t("tools.thermometerLab.paramSettings")}</summary>
            <div class="tl-details-body">
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
            </div>
          </details>

          <details class="tl-details">
            <summary>${t("tools.thermometerLab.resistanceSolver")}</summary>
            <div class="tl-details-body">
              <div class="tl-calc-inputs">
                <span>Measured Resistance (R):</span>
                <div class="tl-input-with-unit">
                  <input type="number" id="tl-input-q11-r" value="7.7" step="0.1" class="tl-calc-input">
                  <span class="tl-unit">Ω</span>
                </div>
              </div>
              <div class="tl-worked-solution" style="background:rgba(0,0,0,0.15)">
                <div id="tl-svg-formula-resistance-solver" class="tl-math-formula" style="font-size:0.85rem"></div>
              </div>
            </div>
          </details>
        </div>

        <!-- TAB 3: THERMISTOR -->
        <div class="tl-tab-content" id="tl-tab-thermistor">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-green)">Live NTC beta calculation</div>
            <div class="tl-worked-solution" style="background-color:rgba(16,185,129,0.05);border-left-color:var(--tl-green)">
              <div id="tl-svg-formula-thermistor" class="tl-math-formula" style="font-size:0.85rem"></div>
              <p style="font-size:0.85rem">Substitute current resistance <b class="tl-live-value" id="tl-live-thermistor-rt">10.00 kΩ</b>:</p>
              <div id="tl-svg-formula-thermistor-sub" class="tl-math-formula" style="font-size:0.85rem"></div>
            </div>
          </div>

          <details class="tl-details">
            <summary>${t("tools.thermometerLab.paramSettings")}</summary>
            <div class="tl-details-body">
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
            </div>
          </details>
        </div>

        </div>
      </div>
    </div>
  `;const r={liquidType:"mercury",thermometerType:o,bulbVolume:200,wallThickness:.5,capillaryBore:.3,liquidL0:3,liquidL100:13,resistanceR0:5,resistanceR100:6.2,thermistorR25:10,thermistorBeta:3500,bathTemp:25,thermometerTemp:25,bubbles:[],iceCubes:[],heatWaves:[],steamParticles:[],currentLength:5.5,currentResistance:5.3,currentThermistorR:10,lastTimestamp:0,showLabels:!0},u=460,j=340,A=80,L=800,H=560;function M(){const e={left:110,top:48,right:30,bottom:65};return{gx:e.left,gy:e.top,gw:L-e.left-e.right,gh:H-e.top-e.bottom,tickFont:`bold ${Math.round(L*.024)}px Arial`,axisFont:`bold ${Math.round(L*.026)}px Arial`,dotR:8,yLabelX:e.left-75,xLabelY:H-e.bottom+32}}function K(){let c=100;const m=Math.max(r.bathTemp,r.thermometerTemp,100);m>120&&(c=150),m>145&&(c=200);const b=c<=100?20:25;return{minT:0,maxT:c,tickStep:b}}function x(e,c,m,b,p){return b+(e-c)/(m-c)*p}function _(e,c,m,b,p){return b+p-(e-c)/(m-c)*p}function F(e,c,m,b,p,C){const{gx:v,gy:y,gw:q,gh:T,tickFont:z,axisFont:O,yLabelX:Y,xLabelY:S}=c;e.strokeStyle="#1e1e24",e.lineWidth=1;for(const B of C){const N=_(B.value,B.min,B.max,y,T);e.beginPath(),e.moveTo(v,N),e.lineTo(v+q,N),e.stroke()}for(let B=m;B<=b+.01;B+=p){const N=x(B,m,b,v,q);e.beginPath(),e.moveTo(N,y),e.lineTo(N,y+T),e.stroke()}e.strokeStyle="#4b5563",e.lineWidth=2.5,e.beginPath(),e.moveTo(v,y),e.lineTo(v,y+T),e.lineTo(v+q,y+T),e.stroke(),e.fillStyle="#e4e4e7",e.font=z,e.textAlign="right",e.textBaseline="middle";for(const B of C){const N=_(B.value,B.min,B.max,y,T);e.fillText(B.label,v-15,N)}e.textAlign="center",e.textBaseline="top";for(let B=m;B<=b+.01;B+=p){const N=x(B,m,b,v,q);e.fillText(`${Math.round(B)}`,N,y+T+10)}return{gx:v,gy:y,gw:q,gh:T,axisFont:O,yLabelX:Y,xLabelY:S}}function g(e,c){const m=c-e,b=m<=8?1:m<=14?2:5,p=[],C=Math.ceil(e/b)*b;for(let v=C;v<=c+.001;v+=b)p.push({value:v,label:v%1===0?`${v.toFixed(0)}`:`${v.toFixed(1)}`,min:e,max:c});return p}function E(){const{maxT:e}=K(),c=$(0),m=$(e),b=m-c,p=Math.max(1,b*.1),C=Math.max(0,Math.round((c-p)*10)/10),v=Math.round((m+p)*10)/10;return{minL:C,maxL:v}}function $(e){return r.liquidL0+(r.liquidL100-r.liquidL0)/100*e}function U(){const{maxT:e}=K(),c=d(0),m=d(e),b=m-c,p=Math.max(.2,b*.1),C=Math.max(0,c-p),v=m+p,y=b<=2?.5:b<=4?1:2,q=[],T=Math.ceil(C/y)*y;for(let z=T;z<=v+.001;z+=y)q.push({value:z,label:z.toFixed(1),min:C,max:v});return{minR:C,maxR:v,ticks:q}}function d(e){return r.resistanceR0+(r.resistanceR100-r.resistanceR0)/100*e}function f(e){const{maxT:c}=e;let m=r.thermistorR25;for(let v=0;v<=c;v+=5){const y=v+273.15,q=r.thermistorR25*Math.exp(r.thermistorBeta*(1/y-1/298.15));m=Math.max(m,q)}m=Math.ceil(m*1.08*10)/10;const b=0,p=m<=12?2:4,C=[];for(let v=0;v<=m+.001;v+=p)C.push({value:v,label:v.toFixed(0),min:b,max:m});return{minR:b,maxR:m,ticks:C}}const h=a.querySelector("#tl-thermometerCanvas"),k=h.getContext("2d"),G=a.querySelector("#tl-graphCanvas"),J=G.getContext("2d"),Q=window.devicePixelRatio||1;h.width=u*Q,h.height=j*Q,k.scale(Q,Q),G.width=L*Q,G.height=H*Q,J.scale(Q,Q);function P(){r.iceCubes=[];for(let e=0;e<5;e++)r.iceCubes.push({x:60+Math.random()*120,y:200+Math.random()*15,size:12+Math.random()*8,angle:Math.random()*Math.PI,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.15});r.bubbles=[];for(let e=0;e<20;e++)r.bubbles.push({x:60+Math.random()*120,y:190+Math.random()*70,r:1+Math.random()*3.5,speedY:.8+Math.random()*1.5,phase:Math.random()*Math.PI*2,wobbleSpeed:.08+Math.random()*.08});r.heatWaves=[];for(let e=0;e<8;e++)r.heatWaves.push({x:65+Math.random()*110,y:190+Math.random()*60,length:15+Math.random()*15,speedY:.5+Math.random()*.6,opacity:.15+Math.random()*.25});r.steamParticles=[];for(let e=0;e<12;e++)r.steamParticles.push({x:60+Math.random()*120,y:175+Math.random()*10,r:2+Math.random()*4,vx:(Math.random()-.5)*.3,vy:-.4-Math.random()*.6,alpha:.2+Math.random()*.4})}const I=200,V=11;function ee(){const e=Math.pow(r.bulbVolume/I,.3333333333333333);return V*e}function ne(){if(r.thermometerType==="resistance"||r.thermometerType==="thermistor")return .35;const e=r.liquidType==="mercury"?1:8,c=.2+r.wallThickness*1.5,m=.4+r.bulbVolume*.003,b=1.35-r.capillaryBore*.45;return Math.max(.1,c*m*b*e*.15)}function te(e){r.bathTemp<=8&&r.iceCubes.forEach(c=>{c.x+=c.speedX,c.y+=c.speedY,(c.x<65||c.x>175)&&(c.speedX*=-1),(c.y<195||c.y>210)&&(c.speedY*=-1)}),r.bathTemp>35&&r.heatWaves.forEach(c=>{c.y-=c.speedY*(1+r.bathTemp/100),c.y<185&&(c.y=265,c.x=65+Math.random()*110)}),r.bathTemp>=80&&r.bubbles.forEach(c=>{c.y-=c.speedY*(1+(r.bathTemp-80)/40),c.phase+=c.wobbleSpeed,c.x+=Math.sin(c.phase)*.3,c.y<185&&(c.y=260+Math.random()*10,c.x=60+Math.random()*120)}),r.bathTemp>=95&&r.steamParticles.forEach(c=>{c.x+=c.vx,c.y+=c.vy,c.alpha-=.005,(c.alpha<=0||c.y<130)&&(c.x=60+Math.random()*120,c.y=175+Math.random()*5,c.alpha=.2+Math.random()*.4)})}function ae(e){let v=59,y=130,q=246;if(r.bathTemp<25){const S=r.bathTemp/25;v=Math.round(180-S*121),y=Math.round(210-S*80),q=Math.round(250-S*4)}else{const S=Math.min(1,(r.bathTemp-25)/125);v=Math.round(59+S*180),y=Math.round(130-S*100),q=Math.round(246-S*190)}if(r.bathTemp>40){const S=Math.min(1,(r.bathTemp-40)/100),B=Date.now()*.02;e.fillStyle=`rgba(239, 68, 68, ${S*.25})`,e.beginPath(),e.roundRect(45,284,150,10,4),e.fill(),e.fillStyle="rgba(249, 115, 22, 0.85)",e.beginPath(),e.moveTo(55+130/2-25,284);for(let N=-25;N<=25;N+=6){const re=S*(12+Math.sin(N*.4+B)*5);e.lineTo(55+130/2+N,284-re)}e.lineTo(55+130/2+25,284),e.closePath(),e.fill()}e.strokeStyle="#4b5563",e.lineWidth=2,e.fillStyle="#121214",e.beginPath(),e.roundRect(55,180,130,100,[0,0,10,10]),e.fill();const T=e.createLinearGradient(55,190,55,280);T.addColorStop(0,`rgba(${v}, ${y}, ${q}, 0.25)`),T.addColorStop(1,`rgba(${v}, ${y}, ${q}, 0.55)`),e.fillStyle=T,e.beginPath(),e.moveTo(55,190);const z=r.bathTemp>=80?2:.5,O=r.bathTemp>=80?.09:.03,Y=Date.now()*O;for(let S=55;S<=185;S+=5){const B=190+Math.sin(S*.15+Y)*z;e.lineTo(S,B)}e.lineTo(185,280),e.lineTo(55,280),e.closePath(),e.fill(),r.bathTemp>35&&(e.strokeStyle=`rgba(239, 68, 68, ${Math.min(.5,(r.bathTemp-35)/120)})`,e.lineWidth=1.2,r.heatWaves.forEach(S=>{e.beginPath(),e.moveTo(S.x,S.y),e.quadraticCurveTo(S.x+Math.sin(S.y*.06)*5,S.y-S.length/2,S.x,S.y-S.length),e.stroke()})),r.bathTemp<=8&&(e.fillStyle="rgba(224, 242, 254, 0.55)",e.strokeStyle="rgba(186, 230, 253, 0.8)",e.lineWidth=1,r.iceCubes.forEach(S=>{e.save(),e.translate(S.x,S.y),e.rotate(S.angle),e.beginPath(),e.roundRect(-S.size/2,-S.size/2,S.size,S.size,3),e.fill(),e.stroke(),e.restore()})),r.bathTemp>=80&&(e.fillStyle="rgba(255, 255, 255, 0.4)",e.strokeStyle="rgba(255, 255, 255, 0.65)",e.lineWidth=.6,r.bubbles.forEach(S=>{e.beginPath(),e.arc(S.x,S.y,S.r,0,Math.PI*2),e.fill(),e.stroke()})),r.bathTemp>=95&&r.steamParticles.forEach(S=>{e.fillStyle=`rgba(255, 255, 255, ${S.alpha})`,e.beginPath(),e.arc(S.x,S.y,S.r,0,Math.PI*2),e.fill()}),e.strokeStyle="#9ca3af",e.lineWidth=3.5,e.beginPath(),e.moveTo(54,180),e.lineTo(54,272),e.arcTo(54,281,65,281,8),e.lineTo(175,281),e.arcTo(186,281,186,272,8),e.lineTo(186,180),e.stroke(),e.strokeStyle="rgba(255, 255, 255, 0.4)",e.lineWidth=1.5,e.beginPath(),e.moveTo(59,190),e.lineTo(59,270),e.stroke()}function w(e,c,m,b,p,C,v="left"){if(!r.showLabels)return;e.strokeStyle="rgba(6, 182, 212, 0.7)",e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(c,m),e.lineTo(b,p),e.stroke(),e.setLineDash([]),e.fillStyle="#06b6d4",e.beginPath(),e.arc(c,m,3,0,Math.PI*2),e.fill(),e.font="bold 9px system-ui, sans-serif";const q=e.measureText(C).width+10,T=16,z=v==="left"?b:b-q,O=p-T/2;e.fillStyle="rgba(21, 21, 24, 0.9)",e.strokeStyle="#06b6d4",e.lineWidth=1,e.beginPath(),e.roundRect(z,O,q,T,4),e.fill(),e.stroke(),e.fillStyle="#f4f4f5",e.textAlign="center",e.textBaseline="middle",e.fillText(C,z+q/2,O+T/2+.5)}function R(e){const b=ee(),p=250+Math.max(0,b-V)*.35,C=p-b-1,v=10+r.wallThickness*8,y=120-v/2,q=120+v/2,T=e.createLinearGradient(y,20,q,20);T.addColorStop(0,"rgba(209, 213, 219, 0.85)"),T.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),T.addColorStop(.5,"rgba(243, 244, 246, 0.15)"),T.addColorStop(.8,"rgba(255, 255, 255, 0.95)"),T.addColorStop(1,"rgba(156, 163, 175, 0.9)"),e.fillStyle=T,e.strokeStyle="rgba(156, 163, 175, 0.8)",e.lineWidth=1,e.beginPath(),e.moveTo(y,C),e.lineTo(y,25),e.arcTo(y,20,y+5,20,5),e.arcTo(q,20,q,25,5),e.lineTo(q,C),e.closePath(),e.fill(),e.stroke();const z=e.createRadialGradient(120-b*.2,p-b*.2,b*.1,120,p,b);z.addColorStop(0,"rgba(255, 255, 255, 0.8)"),z.addColorStop(1,"rgba(156, 163, 175, 0.35)"),e.fillStyle=z,e.strokeStyle="#6b7280",e.lineWidth=.8+r.wallThickness*.6,e.beginPath(),e.arc(120,p,b+.5+r.wallThickness*.5,0,Math.PI*2),e.fill(),e.stroke();const O=Math.min(v*.72,.8+r.capillaryBore*4.5);e.fillStyle="#0a0a0c",e.fillRect(120-O/2,28,O,C-20-8);const Y=r.liquidType==="mercury",S=Y?"#a1a1aa":"#ef4444",B=Y?"#f4f4f5":"#fee2e2",N=210,re=220,be=(N-40)/re,fe=N-Math.min(re,r.thermometerTemp)*be;e.fillStyle=S,e.fillRect(120-O/2,fe,O,C-fe),e.beginPath(),e.ellipse(120,fe,O/2,1.5,0,0,Math.PI*2),e.fill(),e.fillStyle=B,e.fillRect(120-O/6,fe,O/3,C-fe);const se=b*.9,ie=e.createRadialGradient(120-se*.2,p-se*.2,se*.1,120,p,se);Y?(ie.addColorStop(0,"#f4f4f5"),ie.addColorStop(.3,"#d4d4d8"),ie.addColorStop(.8,"#71717a"),ie.addColorStop(1,"#3f3f46")):(ie.addColorStop(0,"#fee2e2"),ie.addColorStop(.2,"#fca5a5"),ie.addColorStop(.7,"#ef4444"),ie.addColorStop(1,"#991b1b")),e.fillStyle=ie,e.beginPath(),e.arc(120,p,se,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(161, 161, 170, 0.6)",e.lineWidth=.5,e.font="6.5px Arial",e.fillStyle="#a1a1aa",e.textAlign="right",e.textBaseline="middle";for(let ce=0;ce<=200;ce+=50){const pe=N-ce*be;e.beginPath(),e.moveTo(y,pe),e.lineTo(y+4,pe),e.stroke(),e.fillText(`${ce}°C`,y-22,pe+2.5)}r.showLabels&&(w(e,y+1,80,10,50,t("tools.thermometerLab.labels.thinWall"),"left"),w(e,120,fe,230,fe-15,t("tools.thermometerLab.labels.meniscus"),"left"),w(e,120-O/2,130,10,130,t("tools.thermometerLab.labels.narrowBore"),"left"),w(e,120,p,230,p+15,t("tools.thermometerLab.labels.largeBulb"),"left"))}function Z(e){const v=e.createLinearGradient(115,20,125,20);v.addColorStop(0,"#71717a"),v.addColorStop(.3,"#f4f4f5"),v.addColorStop(.7,"#d4d4d8"),v.addColorStop(1,"#3f3f46"),e.fillStyle=v,e.strokeStyle="#4b5563",e.lineWidth=1,e.beginPath(),e.roundRect(115,20,10,225,[0,0,4,4]),e.fill(),e.stroke(),e.fillStyle="rgba(21, 21, 24, 0.8)",e.fillRect(117,200,6,40),e.strokeStyle="#e2e8f0",e.lineWidth=1.2,e.beginPath();let y=205;e.moveTo(118,y);for(let Y=0;Y<8;Y++)y+=4,e.lineTo(122,y),y+=4,e.lineTo(118,y);e.stroke(),e.lineWidth=1.5,e.strokeStyle="#ef4444",e.beginPath(),e.moveTo(118,20),e.bezierCurveTo(110,5,200,30,245,60),e.stroke(),e.strokeStyle="#111827",e.beginPath(),e.moveTo(122,20),e.bezierCurveTo(130,8,210,45,245,75),e.stroke();const q=245,T=40,z=135,O=90;e.fillStyle="#18181b",e.strokeStyle="#6366f1",e.lineWidth=2.5,e.beginPath(),e.roundRect(q,T,z,O,10),e.fill(),e.stroke(),e.fillStyle="#022c22",e.beginPath(),e.roundRect(q+10,T+12,z-20,34,4),e.fill(),e.font='bold 17px "Courier New"',e.fillStyle="#10b981",e.textAlign="right",e.fillText(r.currentResistance.toFixed(2)+" Ω",q+z-16,T+34),e.font="6px Arial",e.fillStyle="#a7f3d0",e.textAlign="left",e.fillText("PLATINUM RTD METER",q+14,T+21),r.showLabels&&(w(e,116,100,10,70,t("tools.thermometerLab.labels.metalSheath"),"left"),w(e,120,225,230,205,t("tools.thermometerLab.labels.platinumCoil"),"left"))}function W(e){e.strokeStyle="#111827",e.lineWidth=1.2,e.beginPath(),e.moveTo(118,20),e.lineTo(118,245),e.stroke(),e.beginPath(),e.moveTo(122,20),e.lineTo(122,245),e.stroke();const p=20,C=225,v=12,y=120-v/2,q=e.createLinearGradient(y,p,y+v,p);q.addColorStop(0,"rgba(229, 231, 235, 0.4)"),q.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),q.addColorStop(.7,"rgba(243, 244, 246, 0.5)"),q.addColorStop(1,"rgba(209, 213, 219, 0.6)"),e.fillStyle=q,e.strokeStyle="rgba(156, 163, 175, 0.6)",e.lineWidth=.8,e.beginPath(),e.roundRect(y,p,v,C-p,[0,0,3,3]),e.fill(),e.stroke();const T=7,z=e.createRadialGradient(120-T*.2,245-T*.2,T*.1,120,245,T);z.addColorStop(0,"#6b7280"),z.addColorStop(.7,"#1f2937"),z.addColorStop(1,"#09090b"),e.fillStyle=z,e.strokeStyle="#030712",e.lineWidth=1.2,e.beginPath(),e.arc(120,245,T,0,Math.PI*2),e.fill(),e.stroke(),e.lineWidth=1.5,e.strokeStyle="#ef4444",e.beginPath(),e.moveTo(118,20),e.bezierCurveTo(110,5,200,30,245,60),e.stroke(),e.strokeStyle="#111827",e.beginPath(),e.moveTo(122,20),e.bezierCurveTo(130,8,210,45,245,75),e.stroke();const O=245,Y=40,S=135,B=90;e.fillStyle="#18181b",e.strokeStyle="#10b981",e.lineWidth=2.5,e.beginPath(),e.roundRect(O,Y,S,B,10),e.fill(),e.stroke(),e.fillStyle="#022c22",e.beginPath(),e.roundRect(O+10,Y+12,S-20,34,4),e.fill(),e.font='bold 17px "Courier New"',e.fillStyle="#34d399",e.textAlign="right",e.fillText(r.currentThermistorR.toFixed(2)+" kΩ",O+S-16,Y+34),e.font="6px Arial",e.fillStyle="#a7f3d0",e.textAlign="left",e.fillText("NTC THERMISTOR METER",O+14,Y+21),r.showLabels&&(w(e,118,120,10,90,t("tools.thermometerLab.labels.leads"),"left"),w(e,120,245,230,225,t("tools.thermometerLab.labels.semiconductorBead"),"left"))}function X(e,c,m,b,p,C,v,y,q){const{gx:T,gy:z,gw:O,gh:Y}=c;e.strokeStyle="rgba(255, 255, 255, 0.2)",e.lineWidth=1,e.setLineDash([4,4]),e.beginPath(),e.moveTo(m,b),e.lineTo(m,z+Y),e.stroke(),e.beginPath(),e.moveTo(m,b),e.lineTo(T,b),e.stroke(),e.setLineDash([]),e.font="bold 11px Arial",e.textAlign="center",e.textBaseline="top";const S=`${p.toFixed(1)}${v}`,B=e.measureText(S).width+10;e.fillStyle=q,e.beginPath(),e.roundRect(m-B/2,z+Y+2,B,15,3),e.fill(),e.fillStyle="#000",e.fillText(S,m,z+Y+4),e.textAlign="right",e.textBaseline="middle";const N=`${C.toFixed(2)} ${y}`,re=e.measureText(N).width+10;e.fillStyle=q,e.beginPath(),e.roundRect(T-re-2,b-7,re,15,3),e.fill(),e.fillStyle="#000",e.fillText(N,T-7,b)}function D(e){const c=M(),{minL:m,maxL:b}=E(),{minT:p,maxT:C,tickStep:v}=K(),y=g(m,b),q=F(e,c,p,C,v,y),{gx:T,gy:z,gw:O,gh:Y,axisFont:S,yLabelX:B,xLabelY:N,dotR:re}={...c,...q};e.save(),e.translate(B,z+Y/2),e.rotate(-Math.PI/2),e.font=S,e.fillStyle="#e4e4e7",e.fillText("Length of liquid column / cm",0,0),e.restore(),e.font=S,e.fillStyle="#e4e4e7",e.textAlign="center",e.fillText("temperature / °C",T+O/2,N);const we=C,be=x(0,p,C,T,O),fe=_($(0),m,b,z,Y),se=x(we,p,C,T,O),ie=_($(we),m,b,z,Y);e.strokeStyle="#ef4444",e.lineWidth=3,e.beginPath(),e.moveTo(be,fe),e.lineTo(se,ie),e.stroke();const ce=r.thermometerTemp,pe=r.currentLength;if(ce>=p&&ce<=C){const ve=x(ce,p,C,T,O),Te=_(pe,m,b,z,Y);X(e,c,ve,Te,ce,pe,"°C","cm","#ef4444"),e.shadowColor="#ef4444",e.shadowBlur=10,e.fillStyle="#ef4444",e.beginPath(),e.arc(ve,Te,re,0,Math.PI*2),e.fill(),e.shadowBlur=0}}function de(e){const c=M(),{minR:m,maxR:b,ticks:p}=U(),C=K(),v=F(e,c,C.minT,C.maxT,C.tickStep,p),{gx:y,gy:q,gw:T,gh:z,axisFont:O,yLabelX:Y,xLabelY:S,dotR:B}={...c,...v};e.save(),e.translate(Y,q+z/2),e.rotate(-Math.PI/2),e.font=O,e.fillStyle="#e4e4e7",e.fillText("Resistance of platinum / Ω",0,0),e.restore(),e.font=O,e.fillStyle="#e4e4e7",e.textAlign="center",e.fillText("temperature / °C",y+T/2,S);const{minT:N,maxT:re}=C,we=re,be=x(0,N,re,y,T),fe=_(d(0),m,b,q,z),se=x(we,N,re,y,T),ie=_(d(we),m,b,q,z);e.strokeStyle="#6366f1",e.lineWidth=3,e.beginPath(),e.moveTo(be,fe),e.lineTo(se,ie),e.stroke();const ce=r.thermometerTemp,pe=r.currentResistance;if(ce>=N&&ce<=re){const ve=x(ce,N,re,y,T),Te=_(pe,m,b,q,z);X(e,c,ve,Te,ce,pe,"°C","Ω","#6366f1"),e.shadowColor="#6366f1",e.shadowBlur=10,e.fillStyle="#6366f1",e.beginPath(),e.arc(ve,Te,B,0,Math.PI*2),e.fill(),e.shadowBlur=0}}function le(e){const c=M(),m=K(),{minR:b,maxR:p,ticks:C}=f(m),v=F(e,c,m.minT,m.maxT,m.tickStep,C),{gx:y,gy:q,gw:T,gh:z,axisFont:O,yLabelX:Y,xLabelY:S,dotR:B}={...c,...v},{minT:N,maxT:re}=m;e.save(),e.translate(Y,q+z/2),e.rotate(-Math.PI/2),e.font=O,e.fillStyle="#e4e4e7",e.fillText("Resistance of thermistor / kΩ",0,0),e.restore(),e.font=O,e.fillStyle="#e4e4e7",e.textAlign="center",e.fillText("temperature / °C",y+T/2,S),e.strokeStyle="#10b981",e.lineWidth=3,e.beginPath();let we=!1;for(let se=N;se<=re;se+=1){const ie=se+273.15,ce=r.thermistorR25*Math.exp(r.thermistorBeta*(1/ie-1/298.15)),pe=x(se,N,re,y,T),ve=_(Math.min(p,ce),b,p,q,z);ve>=q&&ve<=q+z&&(we?e.lineTo(pe,ve):(e.moveTo(pe,ve),we=!0))}e.stroke();const be=r.thermometerTemp,fe=r.currentThermistorR;if(be>=N&&be<=re){const se=x(be,N,re,y,T),ie=_(Math.min(p,fe),b,p,q,z);X(e,c,se,ie,be,fe,"°C","kΩ","#10b981"),e.shadowColor="#10b981",e.shadowBlur=10,e.fillStyle="#10b981",e.beginPath(),e.arc(se,ie,B,0,Math.PI*2),e.fill(),e.shadowBlur=0}}function he(){k.clearRect(0,0,u,j),J.clearRect(0,0,L,H),k.save(),k.translate(A,0),ae(k),r.thermometerType==="liquid"?R(k):r.thermometerType==="resistance"?Z(k):W(k),k.restore(),r.thermometerType==="liquid"?D(J):r.thermometerType==="resistance"?de(J):le(J)}function ge(){const e=a.querySelector("#tl-svg-formula-liquid");e&&(e.innerHTML=`
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
      `);const c=a.querySelector("#tl-svg-formula-liquid-sub");if(c){const v=r.liquidL100-r.liquidL0,y=r.currentLength-r.liquidL0;c.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${r.liquidL100.toFixed(1)} - ${r.liquidL0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${r.currentLength.toFixed(2)} - ${r.liquidL0.toFixed(1)}</text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">T - 0</text>

          <!-- Step 2: Simplify Ratio -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for T</text>
          <line x1="120" y1="80" x2="200" y2="80" stroke="#fff" stroke-width="1.2" />
          <text x="160" y="72" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${y.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${v.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${r.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const m=a.querySelector("#tl-svg-formula-resistance");m&&(m.innerHTML=`
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
      `);const b=a.querySelector("#tl-svg-formula-resistance-sub");if(b){const v=r.resistanceR100-r.resistanceR0,y=r.currentResistance-r.resistanceR0;b.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${r.resistanceR100.toFixed(1)} - ${r.resistanceR0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${r.currentResistance.toFixed(2)} - ${r.resistanceR0.toFixed(1)}</text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">T - 0</text>

          <!-- Step 2: Simplify Ratio -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for T</text>
          <line x1="120" y1="80" x2="200" y2="80" stroke="#fff" stroke-width="1.2" />
          <text x="160" y="72" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${y.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${v.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${r.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const p=a.querySelector("#tl-svg-formula-thermistor");p&&(p.innerHTML=`
        <svg height="50" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="23" x2="220" y2="23" stroke="#fff" stroke-width="1.5" />
          <text x="130" y="15" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">1</text>
          <text x="130" y="38" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">(1/&beta;) &bull; ln(R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2">/R</tspan><tspan dy="2" font-size="8">25</tspan><tspan dy="-2">) + 1/298.15</tspan></text>
          <text x="230" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">- 273.15</text>
        </svg>
      `);const C=a.querySelector("#tl-svg-formula-thermistor-sub");if(C){const v=r.thermometerTemp+273.15;C.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            T<tspan dy="3" font-size="10">K</tspan><tspan dy="-3" fill="#10b981" font-weight="bold"> = ${v.toFixed(2)} K</tspan>
            <tspan fill="#fff"> &rArr; T = </tspan>
            <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${r.thermometerTemp.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `}}function qe(){const e=a.querySelector("#tl-faulty-svg-container");if(!e)return;const{cf:c,cu:m,interval:b}=He(),p=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,C=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,v=a.querySelector("#tl-pane-q10a").classList.contains("active"),y=v?(p-c)/b*100:C,q=v?p:C/100*b+c,z=(O=>130-O/100*80)(y);e.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <!-- Left Scale: True Scale -->
        <g transform="translate(0, 0)">
          <!-- Glass Tube -->
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="84" y="${z}" width="4" height="${144-z}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          
          <!-- Ticks -->
          <!-- Ice Point 0°C -->
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          
          <!-- Steam Point 100°C -->
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>

          <!-- Current Point -->
          <text x="65" y="${z+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${y.toFixed(1)}°C</text>

          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${t("tools.thermometerLab.faulty.trueScale")}</text>
        </g>

        <!-- Right Scale: Faulty Scale -->
        <g transform="translate(130, 0)">
          <!-- Glass Tube -->
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="104" y="${z}" width="4" height="${144-z}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          
          <!-- Ticks -->
          <!-- Faulty Ice Point Cf -->
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${c.toFixed(1)}°C</tspan></text>
          
          <!-- Faulty Steam Point Cu -->
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${m.toFixed(1)}°C</tspan></text>

          <!-- Current Faulty Point -->
          <text x="125" y="${z+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${q.toFixed(1)}°C</text>

          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${t("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>

        <!-- Connecting Ratio Indicator Line -->
        <line x1="86" y1="${z}" x2="236" y2="${z}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${z}" r="3" fill="#34d399" />
        <circle cx="236" cy="${z}" r="3" fill="#34d399" />
      </svg>
    `}function ke(e){a.querySelector("#tl-bath-temp-display").innerHTML=r.bathTemp.toFixed(1)+"°C",a.querySelector("#tl-val-bath-temp").innerHTML=r.bathTemp.toFixed(1)+" °C";const c=a.querySelector("#tl-bath-state");r.bathTemp<=0?c.textContent="Melting Ice Bath":r.bathTemp>=100?c.textContent="Boiling Water/Steam":r.bathTemp===150?c.textContent="Hot Cooking Oil":c.textContent="Liquid Water",a.querySelector("#tl-val-response-time").textContent=e.toFixed(2)+" s";const m=a.querySelector("#tl-alcohol-boiling-warning");r.thermometerType==="liquid"&&r.liquidType==="alcohol"&&r.bathTemp>=78?m.style.display="block":m.style.display="none",r.thermometerType==="liquid"?(a.querySelector("#tl-live-liquid-lt").textContent=r.currentLength.toFixed(2)+" cm",a.querySelector("#tl-live-liquid-t-sub").textContent=r.thermometerTemp.toFixed(1)+"°C"):r.thermometerType==="resistance"?(a.querySelector("#tl-live-resistance-rt").textContent=r.currentResistance.toFixed(2)+" Ω",a.querySelector("#tl-live-resistance-t-sub").textContent=r.thermometerTemp.toFixed(1)+"°C"):a.querySelector("#tl-live-thermistor-rt").textContent=r.currentThermistorR.toFixed(2)+" kΩ",ge()}let Se=null;function _e(e){r.lastTimestamp||(r.lastTimestamp=e);const c=(e-r.lastTimestamp)/1e3;r.lastTimestamp=e;const m=Math.min(c,.1),b=ne(),p=m/b*(r.bathTemp-r.thermometerTemp);r.thermometerTemp+=p,r.currentLength=r.liquidL0+(r.liquidL100-r.liquidL0)/100*r.thermometerTemp,r.currentResistance=r.resistanceR0+(r.resistanceR100-r.resistanceR0)/100*r.thermometerTemp;const C=r.thermometerTemp+273.15;r.currentThermistorR=r.thermistorR25*Math.exp(r.thermistorBeta*(1/C-1/298.15)),te(),he(),ke(b),Se=requestAnimationFrame(_e)}function He(){const e=parseFloat(a.querySelector("#tl-input-faulty-cf").value),c=parseFloat(a.querySelector("#tl-input-faulty-cu").value),m=Number.isFinite(e)?e:-1.5,b=Number.isFinite(c)?c:105,p=b-m;return{cf:m,cu:b,interval:p}}function Fe(e){const c=Math.round(e*100)/100;return c>=0?c.toFixed(1):`(${c.toFixed(1)})`}function me(){const{cf:e,cu:c,interval:m}=He(),b=a.querySelector("#tl-val-faulty-interval"),p=a.querySelector("#tl-faulty-error-a"),C=a.querySelector("#tl-faulty-error-b"),v=Math.abs(m)<.01;b.textContent=m.toFixed(1)+" °C";const y=a.querySelector("#tl-svg-formula-faulty-a"),q=a.querySelector("#tl-svg-formula-faulty-b");if(v){p.hidden=!1,p.textContent="C_u must differ from C_f (interval cannot be zero).",C.hidden=!1,C.textContent=p.textContent,y&&(y.innerHTML=""),q&&(q.innerHTML="");return}p.hidden=!0,C.hidden=!0;const T=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,z=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,O=(T-e)/m*100,Y=z/100*m+e;y&&(y.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${T.toFixed(1)} - ${Fe(e)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${c.toFixed(1)} - ${Fe(e)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${O.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),q&&(q.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${z.toFixed(1)} &times; ${m.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${Fe(e)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${Y.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),qe()}function ye(){const e=parseFloat(a.querySelector("#tl-input-q11-r").value)||0,c=(e-r.resistanceR0)/(r.resistanceR100-r.resistanceR0)*100,m=a.querySelector("#tl-svg-formula-resistance-solver");m&&(m.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">&theta; =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="13" text-anchor="middle">${e.toFixed(1)} - ${r.resistanceR0.toFixed(1)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">${r.resistanceR100.toFixed(1)} - ${r.resistanceR0.toFixed(1)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${c.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `)}function Ce(){const e=r.thermometerTemp,c=r.liquidL100-r.liquidL0,m=r.liquidL0+c/100*e,b=a.querySelector("#tl-svg-formula-t-to-l");b&&(b.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${r.liquidL100.toFixed(1)} - ${r.liquidL0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${r.liquidL0.toFixed(1)}</tspan></text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${e.toFixed(1)} - 0</text>

          <!-- Step 2: Solve for L_T -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"></tspan></text>
          <text x="10" y="103" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">L<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${r.liquidL0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${c.toFixed(1)} / 100)</tspan> &times; ${e.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${m.toFixed(2)} cm</tspan>
          </text>
        </svg>
      `)}function Ne(){const e=r.thermometerTemp,c=r.resistanceR100-r.resistanceR0,m=r.resistanceR0+c/100*e,b=a.querySelector("#tl-svg-formula-t-to-r");b&&(b.innerHTML=`
        <svg height="110" width="340" style="background:transparent; overflow:visible;">
          <!-- Step 1: Slope Equivalence -->
          <text x="10" y="22" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 1: Equate Slopes</text>
          <line x1="10" y1="47" x2="100" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="55" y="38" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${r.resistanceR100.toFixed(1)} - ${r.resistanceR0.toFixed(1)}</text>
          <text x="55" y="60" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">100 - 0</text>
          
          <text x="110" y="52" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">=</text>
          
          <line x1="130" y1="47" x2="220" y2="47" stroke="#fff" stroke-width="1.2" />
          <text x="175" y="38" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> - ${r.resistanceR0.toFixed(1)}</tspan></text>
          <text x="175" y="60" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${e.toFixed(1)} - 0</text>

          <!-- Step 2: Solve for R_T -->
          <text x="10" y="85" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">Step 2: Solve for R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"></tspan></text>
          <text x="10" y="103" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13">R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2"> = ${r.resistanceR0.toFixed(1)} + </tspan>
            <tspan fill="#a1a1aa">(${c.toFixed(1)} / 100)</tspan> &times; ${e.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${m.toFixed(2)} Ω</tspan>
          </text>
        </svg>
      `)}function ue(){me(),ye(),Ce(),Ne()}function Ee(e,c){a.querySelector("#"+e).addEventListener("click",()=>{r.bathTemp=c,a.querySelector("#tl-bath-temp-slider").value=c,ue()})}function Ct(){a.querySelectorAll(".tl-tab-btn").forEach(p=>{p.addEventListener("click",()=>{a.querySelectorAll(".tl-tab-btn").forEach(v=>v.classList.remove("active")),a.querySelectorAll(".tl-tab-content").forEach(v=>v.classList.remove("active")),p.classList.add("active");const C=p.getAttribute("data-tl-tab");a.querySelector("#tl-tab-"+C).classList.add("active"),r.thermometerType=C,ue()})}),a.querySelector("#tl-btn-toggle-labels").addEventListener("click",()=>{r.showLabels=!r.showLabels,a.querySelector("#tl-lbl-toggle-labels").textContent=r.showLabels?t("tools.thermometerLab.labels.hide"):t("tools.thermometerLab.labels.show")}),a.querySelector("#tl-bath-temp-slider").addEventListener("input",p=>{r.bathTemp=parseFloat(p.target.value),ue()}),Ee("tl-btn-preset-ice",0),Ee("tl-btn-preset-room",25),Ee("tl-btn-preset-steam",100),Ee("tl-btn-preset-oil",150),a.querySelector("#tl-card-mercury").addEventListener("click",()=>{r.liquidType="mercury",a.querySelector("#tl-card-mercury").className="tl-seg-btn active-mercury",a.querySelector("#tl-card-alcohol").className="tl-seg-btn",ue()}),a.querySelector("#tl-card-alcohol").addEventListener("click",()=>{r.liquidType="alcohol",a.querySelector("#tl-card-mercury").className="tl-seg-btn",a.querySelector("#tl-card-alcohol").className="tl-seg-btn active-alcohol",ue()}),a.querySelector("#tl-slider-bulb-vol").addEventListener("input",p=>{r.bulbVolume=parseFloat(p.target.value),a.querySelector("#tl-val-bulb-vol").textContent=r.bulbVolume+" mm³"}),a.querySelector("#tl-slider-wall-thick").addEventListener("input",p=>{r.wallThickness=parseFloat(p.target.value),a.querySelector("#tl-val-wall-thickness").textContent=r.wallThickness.toFixed(1)+" mm"}),a.querySelector("#tl-slider-capillary-bore").addEventListener("input",p=>{r.capillaryBore=parseFloat(p.target.value),a.querySelector("#tl-val-capillary-bore").textContent=r.capillaryBore.toFixed(2)+" mm"}),a.querySelector("#tl-slider-liquid-l0").addEventListener("input",p=>{r.liquidL0=parseFloat(p.target.value),a.querySelector("#tl-val-liquid-l0").textContent=r.liquidL0.toFixed(1)+" cm",ue()}),a.querySelector("#tl-slider-liquid-l100").addEventListener("input",p=>{r.liquidL100=parseFloat(p.target.value),a.querySelector("#tl-val-liquid-l100").textContent=r.liquidL100.toFixed(1)+" cm",ue()}),a.querySelector("#tl-slider-resistance-r0").addEventListener("input",p=>{r.resistanceR0=parseFloat(p.target.value),a.querySelector("#tl-val-resistance-r0").textContent=r.resistanceR0.toFixed(1)+" Ω",a.querySelector("#tl-spec-resistance-r0").textContent=r.resistanceR0.toFixed(1)+" Ω",ue()}),a.querySelector("#tl-slider-resistance-r100").addEventListener("input",p=>{r.resistanceR100=parseFloat(p.target.value),a.querySelector("#tl-val-resistance-r100").textContent=r.resistanceR100.toFixed(1)+" Ω",a.querySelector("#tl-spec-resistance-r100").textContent=r.resistanceR100.toFixed(1)+" Ω",ue()}),a.querySelector("#tl-slider-thermistor-r25").addEventListener("input",p=>{r.thermistorR25=parseFloat(p.target.value),a.querySelector("#tl-val-thermistor-r25").textContent=r.thermistorR25.toFixed(1)+" kΩ",a.querySelector("#tl-spec-thermistor-r25").textContent=r.thermistorR25.toFixed(1)+" kΩ",ue()}),a.querySelector("#tl-slider-thermistor-beta").addEventListener("input",p=>{r.thermistorBeta=parseFloat(p.target.value),a.querySelector("#tl-val-thermistor-beta").textContent=r.thermistorBeta+" K",a.querySelector("#tl-spec-thermistor-beta").textContent=r.thermistorBeta+" K",ue()}),a.querySelector("#tl-btn-solve-q10a").addEventListener("click",()=>{a.querySelector("#tl-btn-solve-q10a").classList.add("active"),a.querySelector("#tl-btn-solve-q10b").classList.remove("active"),a.querySelector("#tl-pane-q10a").classList.add("active"),a.querySelector("#tl-pane-q10b").classList.remove("active"),me()}),a.querySelector("#tl-btn-solve-q10b").addEventListener("click",()=>{a.querySelector("#tl-btn-solve-q10a").classList.remove("active"),a.querySelector("#tl-btn-solve-q10b").classList.add("active"),a.querySelector("#tl-pane-q10a").classList.remove("active"),a.querySelector("#tl-pane-q10b").classList.add("active"),me()}),a.querySelector("#tl-input-faulty-cf").addEventListener("input",me),a.querySelector("#tl-input-faulty-cu").addEventListener("input",me),a.querySelector("#tl-input-q10a-cm").addEventListener("input",me),a.querySelector("#tl-input-q10b-t").addEventListener("input",me),a.querySelector("#tl-input-q11-r").addEventListener("input",ye);const m=a.querySelector("#tl-input-t-to-l");m&&m.addEventListener("input",ue);const b=a.querySelector("#tl-input-t-to-r");b&&b.addEventListener("input",ue)}if(n.type){const e=a.querySelector(".tl-tabs-container");e&&(e.style.display="none")}return a.querySelectorAll(".tl-tab-btn").forEach(e=>{e.getAttribute("data-tl-tab")===o?e.classList.add("active"):e.classList.remove("active")}),a.querySelectorAll(".tl-tab-content").forEach(e=>{e.id.replace("tl-tab-","")===o?e.classList.add("active"):e.classList.remove("active")}),P(),Ct(),ue(),Se=requestAnimationFrame(_e),a._thermometerLabCleanup=()=>{Se&&cancelAnimationFrame(Se)},a}function ha(t){const n=document.createElement("div");n.className="tool-specific-heat";const o=document.createElement("iframe"),i="./",s=i.endsWith("/")?i:i+"/";function a(){return s+"specific-heat/index.html?lang="+encodeURIComponent(oe())}o.src=a(),o.title=t("tools.specificHeat.title")||"Specific Heat Capacity Lab",o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var u;try{(u=o.contentWindow)==null||u.postMessage({type:"s3phy:lang",lang:oe()},"*")}catch{o.src=a()}};return window.addEventListener("s3phy:lang",r),n._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",r),n.appendChild(o),n}function pa(t){const n=document.createElement("div");n.className="tool-thermal-mixing";const o=document.createElement("iframe"),i="./",s=i.endsWith("/")?i:i+"/";function a(){return s+"thermal-mixing/index.html?lang="+encodeURIComponent(oe())}o.src=a(),o.title=t("tools.thermalMixing.title")||"Thermal Mixing Lab",o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var u;try{(u=o.contentWindow)==null||u.postMessage({type:"s3phy:lang",lang:oe()},"*")}catch{o.src=a()}};return window.addEventListener("s3phy:lang",r),n._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",r),n.appendChild(o),n}function ma(t){const n=document.createElement("div");n.className="tool-change-of-state";const o=document.createElement("iframe"),i="./",s=i.endsWith("/")?i:i+"/";function a(){return s+"change-of-state/index.html?lang="+encodeURIComponent(oe())}o.src=a(),o.title=t("tools.changeOfState.title")||"Change of State Lab",o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var u;try{(u=o.contentWindow)==null||u.postMessage({type:"s3phy:lang",lang:oe()},"*")}catch{o.src=a()}};return window.addEventListener("s3phy:lang",r),n._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",r),n.appendChild(o),n}function ba(t){const n=document.createElement("div");n.className="tool-heat-transfer";const o=document.createElement("iframe"),i="./",s=i.endsWith("/")?i:i+"/";function a(){return s+"heat-transfer/index.html?embed=1&lang="+encodeURIComponent(oe())}o.src=a(),o.title=t("tools.heatTransfer.title")||"Heat Transfer Laboratory",o.setAttribute("loading","lazy"),o.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var u;try{(u=o.contentWindow)==null||u.postMessage({type:"s3phy:lang",lang:oe()},"*")}catch{o.src=a()}};return window.addEventListener("s3phy:lang",r),n._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",r),n.appendChild(o),n}const ze=[{id:"thermometer",titleKey:"topic.thermometer",fileEn:"thermometer-en.pdf",fileZh:"thermometer-zhHant.pdf",tool:"liquid"},{id:"heatInternalEnergy",titleKey:"topic.heatInternalEnergy",fileEn:"heat-internal-energy-en.pdf",fileZh:"heat-internal-energy-zhHant.pdf",tool:"specificHeat"},{id:"changeOfState",titleKey:"topic.changeOfState",fileEn:"change-of-state-en.pdf",fileZh:"change-of-state-zhHant.pdf",tool:"changeOfState"},{id:"heatTransfer",titleKey:"topic.heatTransfer",fileEn:"heat-transfer-en.pdf",fileZh:"heat-transfer-zhHant.pdf",tool:"heatTransfer"}],ot=["liquidThermometer","faultyThermometer","resistanceThermometer","thermistor"],ga=[["thermometer","topic.thermometer"]],st=["liquid","resistance","thermistor","specificHeat","thermalMixing","changeOfState","heatTransfer"],va={liquid:t=>Ge(t,{type:"liquid"}),resistance:t=>Ge(t,{type:"resistance"}),thermistor:t=>Ge(t,{type:"thermistor"}),specificHeat:t=>ha(t),thermalMixing:t=>pa(t),changeOfState:t=>ma(t),heatTransfer:t=>ba(t)};function ya(t){return l({liquid:"tools.thermometerLab.liquid.title",resistance:"tools.thermometerLab.resistance.title",thermistor:"tools.thermometerLab.thermistor.title",specificHeat:"tools.specificHeat.title",thermalMixing:"tools.thermalMixing.title",changeOfState:"tools.changeOfState.title",heatTransfer:"tools.heatTransfer.title"}[t]||t)}function je(){return oe()==="zh-Hant"?"zhHant":"en"}async function Me(t,n){const o=`./${t}/${n}`;try{return(await fetch(o,{method:"HEAD"})).ok}catch{return!1}}async function lt(t){return Me("notes",t)}function wa(t){let n="topics",o="liquid",i=null,s={main:null},a=null,r=null;const u=[{value:"all",labelKey:"flashcards.all"},{value:"thermometry",labelKey:"flashcards.deck.thermometry"},{value:"heatInternalEnergy",labelKey:"flashcards.deck.heatInternalEnergy"},{value:"changeOfState",labelKey:"flashcards.deck.changeOfState"},{value:"heatTransfer",labelKey:"flashcards.deck.heatTransfer"}];function j(){if(s.main){if(r==null||r(),r=null,n==="topics"?s.main.innerHTML=L():n==="notes"?s.main.innerHTML=M():n==="tools"?s.main.innerHTML=x():n==="worksheets"?s.main.innerHTML=gt(l,{topics:ga,paperTitleKey:"worksheets.paperTitleHeat"}):n==="flashcards"?r=yt(s.main,{deckOptions:u.map(d=>({value:d.value,label:l(d.labelKey)})),buildDeck:d=>ia(d,oe())}):n==="summary"&&(s.main.innerHTML=g()),n==="notes"&&K(),n==="tools"&&_(),n==="worksheets"){const d=mt.filter(f=>ot.includes(f.topic));vt(t,d,l,je,{topicFilter:(f,h)=>h.includes("thermometer")?ot.includes(f.topic):h.includes(f.topic)})}n==="summary"&&E()}}function A(){i==null||i.destroy(),i=bt(t,{subtitleKey:"strand.heat.subtitle",activeSection:n,onSection:d=>{n==="tools"&&d!=="tools"&&a!=null&&a._thermometerLabCleanup&&(a._thermometerLabCleanup(),a=null),n=d,i.updateSection(n),j()},onLang:()=>A()}),s.main=i.main,i.updateSection(n),j()}function L(){return`
      <section class="panel panel--topic-hub">
        <h2>${l("topics.title")}</h2>
        <p class="lead">${l("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${ze.map(d=>{const f=d.tool?`<button class="btn primary" type="button" data-go-tool="${d.tool}">${l("topic.openTool")}</button>`:`<button class="btn primary" type="button" data-go-section="notes">${l("topic.viewNotes")}</button>`;return`
            <div class="card">
              <h3>${l(d.titleKey)}</h3>
              ${f}
            </div>`}).join("")}
        </div>
      </section>`}function H(d){const f=d.target.closest("[data-go-tool]");if(f){const k=f.getAttribute("data-go-tool");st.includes(k)?o=k:o="liquid",n="tools",i.updateSection(n),j();return}const h=d.target.closest("[data-go-section]");(h==null?void 0:h.getAttribute("data-go-section"))==="notes"&&(n="notes",i.updateSection(n),j())}function M(){return`
      <section class="panel">
        <h2>${l("notes.title")}</h2>
        <p class="lead">${l("notes.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${ze.map(d=>`
            <div class="card" data-note-card="${d.id}">
              <h3>${l(`notes.card.${d.id}`)}</h3>
              <div data-note-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function K(){const d=je();for(const f of ze){const h=t.querySelector(`[data-note-card="${f.id}"]`);if(!h)continue;const k=h.querySelector("[data-note-body]"),G=d==="zhHant"?f.fileZh:f.fileEn,J=await lt(G),Q=`./notes/${G}`;J?k.innerHTML=`
          <iframe class="notes-grid" title="${l(`notes.card.${f.id}`)}" src="${Q}"></iframe>
          <p style="margin-top:8px"><a href="${Q}" target="_blank" rel="noopener">${l("notes.openPdf")}</a></p>`:k.innerHTML=`<p class="lead">${l("notes.missing")}</p>`}}function x(){return`
      <section class="panel panel--tools">
        <h2>${l("tools.title")}</h2>
        <p class="lead">${l("tools.pick")}</p>
        <div class="tools-layout">
          <div class="tool-list" data-tool-list>
            ${st.map(d=>`<button type="button" data-tool="${d}" class="${o===d?"active":""}">${ya(d)}</button>`).join("")}
          </div>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function _(){const d=t.querySelector("[data-tool-list]"),f=t.querySelector("[data-tool-stage]");!d||!f||(d.querySelectorAll("button").forEach(h=>{h.addEventListener("click",()=>{o=h.getAttribute("data-tool"),d.querySelectorAll("button").forEach(k=>k.classList.toggle("active",k.getAttribute("data-tool")===o)),F(f)})}),F(f))}function F(d){d.innerHTML="",a!=null&&a._thermometerLabCleanup&&a._thermometerLabCleanup();const f=va[o];f&&(a=f(l),d.appendChild(a))}function g(){return`
      <section class="panel">
        <h2>${l("summary.title")}</h2>
        <p class="lead">${l("summary.intro")}</p>
        <p class="lead">${l("notes.embedHint")}</p>
        <div class="grid cols-2" data-summary-grid>
          ${ze.map(d=>`
            <div class="card" data-summary-card="${d.id}">
              <h3>${l(`summary.item.${d.id}`)}</h3>
              <div data-summary-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function E(){const d=je();for(const f of ze){const h=t.querySelector(`[data-summary-card="${f.id}"]`);if(!h)continue;const k=h.querySelector("[data-summary-body]");if(f.id==="thermometer"){const P=await Me("summary","thermometer.webp"),I="./summary/thermometer.webp";P?k.innerHTML=`
          <img class="summary-thumb" src="${I}" alt="${l("summary.item.thermometer")}" loading="lazy" />
          <p style="margin-top:8px"><a href="${I}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:k.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}if(f.id==="heatInternalEnergy"){const P=await Me("summary","heat-internal-energy.webp"),I="./summary/heat-internal-energy.webp";P?k.innerHTML=`
          <img class="summary-thumb" src="${I}" alt="${l("summary.item.heatInternalEnergy")}" loading="lazy" />
          <p style="margin-top:8px"><a href="${I}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:k.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}if(f.id==="changeOfState"){const P=await Me("summary","change-of-state.webp"),I="./summary/change-of-state.webp";P?k.innerHTML=`
          <img class="summary-thumb" src="${I}" alt="${l("summary.item.changeOfState")}" loading="lazy" />
          <p style="margin-top:8px"><a href="${I}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:k.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}if(f.id==="heatTransfer"){const P=await Me("summary","heat-transfer.webp"),I="./summary/heat-transfer.webp";P?k.innerHTML=`
          <img class="summary-thumb" src="${I}" alt="${l("summary.item.heatTransfer")}" loading="lazy" />
          <p style="margin-top:8px"><a href="${I}" target="_blank" rel="noopener">${l("summary.viewImage")}</a></p>`:k.innerHTML=`<p class="lead">${l("summary.missing")}</p>`;continue}const G=d==="zhHant"?f.fileZh:f.fileEn,J=await lt(G),Q=`./notes/${G}`;J?k.innerHTML=`
          <iframe class="notes-grid" title="${l(`summary.item.${f.id}`)}" src="${Q}"></iframe>
          <p style="margin-top:8px"><a href="${Q}" target="_blank" rel="noopener">${l("summary.download")}</a></p>`:k.innerHTML=`<p class="lead">${l("summary.missing")}</p>`}}const $=()=>A(),U=d=>H(d);return window.addEventListener("s3phy:lang",$),t.addEventListener("click",U),A(),()=>{window.removeEventListener("s3phy:lang",$),t.removeEventListener("click",U),r==null||r(),a!=null&&a._thermometerLabCleanup&&a._thermometerLabCleanup(),i==null||i.destroy()}}const ct={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};Rt();Mt();const dt="s3phy_splash_seen",kt={optics:da,heat:wa};let Re=null,Le=null;function xa(){const t=location.hash.match(/^#\/(\w+)/),n=t==null?void 0:t[1];return n&&Object.prototype.hasOwnProperty.call(kt,n)?n:null}function ka(){const t=`${location.pathname}${location.search}`;history.replaceState(null,"",t)}function St(t){Re==null||Re(),Re=null,Le==null||Le(),Le=null;const n=document.getElementById("app");if(!n)return;if(n.innerHTML="",!t){location.hash&&ka(),Le=Ht(n);return}const o=`#/${t}`;if(location.hash!==o){location.hash=o;return}Re=kt[t](n)??null}function qt(){St(xa())}function Sa(){return"./images/uniplus-logo.png"}function qa(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${Sa()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${l("splash.start")}</button>
      </div>
    </div>
  `,t}function Ca(t,n){const o=[...ct.en,...ct.zhHant],i=()=>{if(!t.parentElement)return;const s=document.createElement("div");s.className="splash-danmaku-item",s.textContent=o[Math.floor(Math.random()*o.length)];const a=Math.random()*85+5,r=Math.random()*.8+.9,u=Math.random()*12+10;s.style.top=`${a}%`,s.style.fontSize=`${r}rem`,s.style.animationDuration=`${u}s`,n.appendChild(s),s.addEventListener("animationend",()=>s.remove()),window.setTimeout(i,1500+Math.random()*1e3)};for(let s=0;s<4;s+=1)window.setTimeout(i,s*1e3)}function Ta(t){const n=t.querySelector("#splashLogoWrap"),o=t.querySelector("#splashDanmaku"),i=t.querySelector("#splashStartWrap");window.setTimeout(()=>n==null?void 0:n.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{o==null||o.classList.add("splash-danmaku--visible"),i==null||i.classList.add("splash-start-wrap--in"),o&&Ca(t,o)},1600)}function ut(){qt()}function za(){let t=!1;try{t=sessionStorage.getItem(dt)==="1"}catch{}if(t){ut();return}const n=qa();document.body.insertBefore(n,document.body.firstChild),Ta(n);const o=n.querySelector("#splashStart"),i=()=>{n.remove(),ut()};o.addEventListener("click",()=>{try{sessionStorage.setItem(dt,"1")}catch{}n.classList.add("splash--hide"),n.addEventListener("transitionend",i,{once:!0}),window.setTimeout(i,480)})}window.addEventListener("hashchange",qt);window.addEventListener("s3phy:strand",t=>{St(t.detail??null)});za();
