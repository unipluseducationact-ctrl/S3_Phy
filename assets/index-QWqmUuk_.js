(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(l){if(l.ep)return;l.ep=!0;const a=s(l);fetch(l.href,a)}})();const Se={"app.title":"Uni+ HKDSE Physics Hub","app.subtitle":"S3 Physics — Optics & Heat","strands.title":"Choose a strand","strands.intro":"Select Optics or Heat to open that learning hub.","strand.optics.title":"Optics","strand.optics.desc":"Light and waves: reflection, refraction, lenses, and electromagnetic waves.","strand.optics.subtitle":"Optics — light and waves","strand.heat.title":"Heat","strand.heat.desc":"Temperature, heat transfer, and thermal physics (interactive labs, worksheets, flashcards).","strand.heat.subtitle":"Heat — temperature and energy transfer","strand.open":"Open strand","strand.back":"All strands","heat.section.empty":"Heat strand content.","splash.start":"Start","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"Traditional Chinese","nav.topics":"Topics","nav.notes":"Notes","nav.tools":"Interactive Tools","nav.worksheets":"Worksheets","nav.flashcards":"Flashcards","nav.summary":"Summary","topics.title":"Topic map","topics.intro":"Choose a strand to study. Each topic links to the interactive lab.","topic.reflection":"Reflection","topic.rotatingMirror":"Rotating plane mirror","topic.refraction":"Refraction","topic.refractionSnell":"Refraction and Snell’s law","topic.tir":"Total internal reflection","topic.refractionTir":"Refraction, Snell’s law & total internal reflection","topic.convex":"Convex lens","topic.concave":"Concave lens","topic.em":"Electromagnetic waves","topic.openTool":"Open lab","notes.title":"Study notes (PDF)","notes.intro":"Add PDFs under public/notes/ (see README there). Until then, use the topic list and interactive tools.","notes.card.reflection":"Reflection","notes.card.refraction":"Refraction and Snell law","notes.card.tir":"Total internal reflection","notes.card.convexLens":"Convex lens","notes.card.concaveLens":"Concave lens","notes.card.em":"Electromagnetic spectrum","notes.openPdf":"Open PDF","notes.embedHint":"If the preview is blank, open the PDF in a new tab.","notes.missing":"PDF not uploaded yet.","tools.title":"Interactive labs","tools.pick":"Select a lab","tools.hideLabList":"Hide lab list","tools.showLabList":"Show lab list","tools.rotatingMirror.title":"Rotating plane mirror","tools.rotatingMirror.subtitle":"Ray shift when the mirror turns (?θ_ray = 2θ_mirror).","tools.planeMirror.title":"Plane mirror lab","tools.planeMirror.subtitle":"Image formation, minimum mirror size, seeing behind objects, wedge mirrors, and ray sketching with live formulas.","tools.rotatingMirror.toggle.origNormal":"Orig. normal","tools.rotatingMirror.toggle.origRay":"Orig. reflected","tools.rotatingMirror.toggle.newNormal":"New normal","tools.rotatingMirror.toggle.newRay":"New reflected","tools.rotatingMirror.incidentAngle":"Incident direction (°)","tools.rotatingMirror.mirrorRotation":"Mirror rotation θ (°)","tools.rotatingMirror.statIncidence":"Incidence angle i","tools.rotatingMirror.statReflection":"Reflection angle r","tools.rotatingMirror.rayShift":"Ray shift","tools.rotatingMirror.logicBadge":"Rule: 2 ? θ","tools.rotatingMirror.reset":"Reset rotation","tools.rotatingMirror.canvas.incident":"Incident ray","tools.rotatingMirror.canvas.originalReflected":"Original reflected","tools.rotatingMirror.canvas.newReflected":"New reflected","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"Shift","tools.refractionTir.title":"Prison Break lab — refraction, Snell & TIR","tools.refraction.title":"Refraction — Snell law","tools.refraction.n1":"n1 incident medium","tools.refraction.n2":"n2 second medium","tools.refraction.angle":"Angle of incidence (deg)","tools.tir.title":"Total internal reflection","tools.tir.n1":"n dense inside","tools.tir.n2":"n rare outside","tools.tir.angle":"Incidence in dense medium (deg)","tools.tir.critical":"Critical angle","tools.tir.state":"State","tools.tir.partial":"Partial refraction","tools.tir.full":"Total internal reflection","tools.lens.title":"Lens ray sketch","tools.convexLens.title":"Convex lens — ray sketch","tools.concaveLens.title":"Concave lens — ray sketch","tools.lens.type":"Lens type","tools.lens.convex":"Convex converging","tools.lens.concave":"Concave diverging","tools.lens.u":"Object distance u (cm)","tools.lens.f":"Focal length magnitude f (cm)","tools.lens.h":"Object height relative","tools.lens.note":"Convention: real u and v positive; convex f positive, concave f negative. Diagram is qualitative.","tools.rgbMixer.title":"RGB colour mixer","tools.rgbMixer.intro":"Additive mixing: red, green and blue light combine on screens. Drag sliders or use presets.","tools.rgbMixer.canvas":"RGB light overlap diagram","tools.rgbMixer.controls":"Colour controls","tools.rgbMixer.red":"Red","tools.rgbMixer.green":"Green","tools.rgbMixer.blue":"Blue","tools.rgbMixer.preview":"Mixed colour preview","tools.rgbMixer.presets":"Presets","tools.rgbMixer.presetRed":"Red","tools.rgbMixer.presetGreen":"Green","tools.rgbMixer.presetBlue":"Blue","tools.rgbMixer.presetYellow":"Yellow","tools.rgbMixer.presetCyan":"Cyan","tools.rgbMixer.presetMagenta":"Magenta","tools.rgbMixer.presetWhite":"White","tools.rgbMixer.presetBlack":"Black","topic.rgbMixer":"RGB colour mixing","tools.em.title":"Electromagnetic spectrum","tools.em.pick":"Explore wavelength, frequency, and simulation labs","worksheets.title":"Worksheet generator","worksheets.intro":"Generate practice worksheets with online checking, hints, and export.","worksheets.count":"Number of questions","worksheets.countLabel":"Number of questions (1–50)","worksheets.topics":"Topics","worksheets.generate":"Generate questions","worksheets.printPractice":"Print / Save as PDF","worksheets.printAnswers":"Print answer key","worksheets.empty":"Generate questions first.","worksheets.tabPractice":"Practice","worksheets.tabAnswer":"Answer key","worksheets.paperTitle":"S3 Optics — Multiple choice worksheet","worksheets.score":"Score","worksheets.hint":"Hint","worksheets.answer":"Answer","worksheets.today":"Today","worksheets.date":"Date","worksheets.exportWord":"Download Word","worksheets.exportWordAnswers":"Download answers (Word)","worksheets.exportWordQuestions":"Word — Questions","worksheets.sessionSummary":"Session summary","worksheets.firstTry":"Correct on first try","worksheets.revisionSuggestions":"Revision suggestions","worksheets.revisionExcellent":"Excellent — keep revising with flashcards.","worksheets.revisionGood":"Good progress — review any missed sections.","worksheets.revisionFair":"Fair — revisit summary notes for weak topics.","worksheets.revisionLow":"Needs work — study summaries and try again.","worksheets.weakSections":"Sections to review","worksheets.settingsTitle":"Worksheet settings","worksheets.bankTitle":"Question bank (current filters)","worksheets.bankAvailable":"Available to generate","worksheets.bankByTopic":"By topic","worksheets.bankNone":"Select at least one topic.","worksheets.exportTitle":"Export","worksheets.exportHint":"Word: .doc for Microsoft Word. Use Print → Save as PDF for a PDF copy.","worksheets.progressNone":"No session yet","worksheets.progressPrefix":"Completed","worksheets.hideSettings":"Hide settings","worksheets.showSettings":"Show settings","worksheets.hintEmpty":"Generate questions to see topic hints here.","worksheets.practiceTitle":"On-screen practice","worksheets.practiceHint":"First wrong: hint only. Second wrong: model answer.","worksheets.keyboardHint":"You may press A, B, C, D on your keyboard to choose your answers. Hover over a question and press Enter (Windows) or Return (macOS) to check that question only.","worksheets.checkAnswer":"Check answer","worksheets.correct":"Correct.","worksheets.modelAnswer":"Model answer","flashcards.title":"Flashcards","flashcards.intro":"Study with spaced repetition — cards you find harder appear more often in later rounds. Picture decks for reflection, refraction, and TIR.","flashcards.progress":"Card {current} of {total}","flashcards.deck":"Deck","flashcards.question":"Question","flashcards.answer":"Answer","flashcards.flip":"Flip","flashcards.next":"Next","flashcards.prev":"Previous","flashcards.all":"All topics","flashcards.deck.refractionTir":"Refraction & TIR","flashcards.mode.sequence":"Sequence","flashcards.mode.random":"Random","flashcards.again":"Again","flashcards.gotIt":"Got it","flashcards.round":"Round {round} · {total} cards","flashcards.studyMode":"Study mode","flashcards.progressLabel":"Progress","flashcards.tapFlip":"Tap, space, or FLIP to reveal answer","flashcards.cardCode":"Card {id}","flashcards.flipFirst":"Tap the card, press Space, or Flip to reveal the answer first.","flashcards.hint.rated":"← Again · Got it →  (or keys 1 / 2)","flashcards.summary.title":"Round {round} complete","flashcards.summary.stats":"{total} cards studied · Again {again} · Got it {gotIt} · Next {neutral}","flashcards.summary.keep":"{count} to keep practising","flashcards.summary.confident":"{count} confident","flashcards.summary.nextRound":"Next round","flashcards.summary.restart":"Restart session","flashcards.summary.complete":"Session complete","flashcards.summary.completeStats":"Great work — you have finished all scheduled copies.","summary.title":"Topic summaries","summary.intro":"HKDSE summary sheets (PDF or image). Preview below or open in a new tab.","summary.viewImage":"Open full image","summary.download":"Open / download PDF","summary.missing":"Summary PDF not found.","footer.conventions":"Ray diagrams use a consistent thin-lens sign convention stated in each lab.","summary.item.reflection":"Reflection","summary.item.refraction":"Refraction and Snell’s law","summary.item.tir":"Total internal reflection","summary.item.convex":"Convex lens","summary.item.concave":"Concave lens","summary.item.em":"Electromagnetic waves","topic.thermometer":"Thermometer","topic.heatInternalEnergy":"Heat and internal energy","topic.changeOfState":"Change of state","topic.heatTransfer":"Heat transfer","topic.thermometerLab":"Thermometry & Calibration Lab","topic.viewNotes":"View notes","notes.card.thermometer":"Ch.1.1 Thermometer","notes.card.heatInternalEnergy":"Ch.1.2 Heat and internal energy","notes.card.changeOfState":"Ch.1.3 Change of state","notes.card.heatTransfer":"Ch.1.4 Heat transfer process","summary.item.thermometer":"Thermometer","summary.item.heatInternalEnergy":"Heat and internal energy","summary.item.changeOfState":"Change of state","summary.item.heatTransfer":"Heat transfer","flashcards.deck.thermometry":"Thermometry (all types)","flashcards.deck.heatInternalEnergy":"Heat and internal energy","flashcards.deck.changeOfState":"Change of state","flashcards.deck.heatTransfer":"Heat transfer","tools.thermometerLab.title":"Thermometry & Calibration Lab","tools.specificHeat.title":"Specific Heat Capacity Lab","tools.thermalMixing.title":"Thermal Mixing Lab","tools.changeOfState.title":"Change of State Lab","tools.heatTransfer.title":"Heat Transfer Laboratory","tools.thermometerLab.subtitle":"Interactive study companion for liquid-in-glass, platinum resistance, and thermistor thermometers.","tools.thermometerLab.liquid.title":"Liquid-in-Glass Thermometer","tools.thermometerLab.liquid.subtitle":"Explore the effects of bulb volume, capillary bore, and liquid type on sensitivity and response time.","tools.thermometerLab.resistance.title":"Platinum Resistance Thermometer","tools.thermometerLab.resistance.subtitle":"Investigate how platinum resistance varies linearly with temperature and solve calibration problems.","tools.thermometerLab.thermistor.title":"Negative Temperature Coefficient Thermistor","tools.thermometerLab.thermistor.subtitle":"Study the non-linear resistance-temperature relationship of negative temperature coefficient thermistors and live beta calculations.","tools.thermometerLab.thermistor.liveBetaLabel":"Live negative temperature coefficient beta calculation","tools.thermometerLab.thermistor.meterLabelLine1":"NEGATIVE TEMPERATURE","tools.thermometerLab.thermistor.meterLabelLine2":"COEFFICIENT THERMISTOR","tools.thermometerLab.labels.show":"Show Structure Labels","tools.thermometerLab.labels.hide":"Hide Structure Labels","tools.thermometerLab.labels.thinWall":"Thin glass wall (fast heat transfer)","tools.thermometerLab.labels.largeBulb":"Large bulb (contains more liquid, increases sensitivity)","tools.thermometerLab.labels.narrowBore":"Narrow capillary bore (liquid rises higher, increases sensitivity)","tools.thermometerLab.labels.meniscus":"Meniscus (reading point)","tools.thermometerLab.labels.platinumCoil":"Platinum coil (resistance increases linearly with temp)","tools.thermometerLab.labels.metalSheath":"Metal sheath (protects & conducts heat quickly)","tools.thermometerLab.labels.semiconductorBead":"Semiconductor bead (resistance decreases exponentially with temp)","tools.thermometerLab.labels.leads":"Connecting leads","tools.thermometerLab.faulty.dualScale":"Dual-Scale Comparison Diagram","tools.thermometerLab.faulty.trueScale":"True Scale (°C)","tools.thermometerLab.faulty.faultyScale":"Faulty Scale (°C)","tools.thermometerLab.paramSettings":"Parameter settings","tools.floatingControls.dragHint":"Drag to move","tools.floatingControls.showParams":"Show parameters","tools.floatingControls.hideParams":"Hide parameters","tools.thermometerLab.faultySolver":"Faulty thermometer solver","tools.thermometerLab.resistanceSolver":"Resistance-to-temperature solver","worksheets.paperTitleHeat":"S3 Heat — Worksheet (MC + short answer)","worksheets.typeShort":"Short answer","worksheets.typeMcq":"MCQ","worksheets.yourAnswer":"Your answer","worksheets.typeAnswerPlaceholder":"Type your answer here…"},kt={"app.title":"Uni+ HKDSE 物理學習中心","app.subtitle":"中三物理 — 光與熱","strands.title":"選擇單元","strands.intro":"選擇光學或熱學，進入該學習中心。","strand.optics.title":"光學","strand.optics.desc":"光與波動：反射、折射、透鏡與電磁波。","strand.optics.subtitle":"光學 — 光與波動","strand.heat.title":"熱學","strand.heat.desc":"溫度、熱傳入與熱力學（互動實驗室。工作紙、閃卡）。","strand.heat.subtitle":"熱學 — 溫度與熱傳入","strand.open":"進入單元","strand.back":"全部單元","heat.section.empty":"熱學單元內容。","splash.start":"開始","splash.unitEducation":"Unit Education","lang.en":"English","lang.zhHant":"繁體中文","nav.topics":"課題","nav.notes":"筆記","nav.tools":"互動實驗室","nav.worksheets":"工作紙","nav.flashcards":"閃卡","nav.summary":"總結","topics.title":"課題地圖","topics.intro":"選擇學習主題。每個主題可連到互動實驗室。","topic.reflection":"反射","topic.rotatingMirror":"旋轉平面鏡","topic.refraction":"折射","topic.refractionSnell":"折射與司乃耳定律","topic.tir":"全反射","topic.refractionTir":"折射、司乃耳定律與全內反射","topic.convex":"凸透鏡","topic.concave":"凹透鏡","topic.em":"電磁波","topic.openTool":"開啟實驗室","notes.title":"學習筆記（PDF）","notes.intro":"請把 PDF 放到 public/notes/ (見該資料夾 README)。完成前可先使用課題列表與互動工具。","notes.card.reflection":"反射","notes.card.refraction":"折射與司乃耳定律","notes.card.tir":"全內反射","notes.card.convexLens":"凸透鏡","notes.card.concaveLens":"凹透鏡","notes.card.em":"電磁波譜","notes.openPdf":"開啟 PDF","notes.embedHint":"若預覽空白，請在新分頁開啟 PDF。","notes.missing":"尚未上載 PDF。","tools.title":"互動實驗室","tools.pick":"選擇實驗","tools.hideLabList":"收合實驗列表","tools.showLabList":"顯示實驗列表","tools.rotatingMirror.title":"旋轉平面鏡","tools.rotatingMirror.subtitle":"鏡面轉動時反射光線的偏移（光線偏角 = 2 × 鏡角）。","tools.planeMirror.title":"平面鏡反射實驗室","tools.planeMirror.subtitle":"像的形成、最小鏡長／鏡高、看後方物件、夾角鏡與練習作圖，配合即時公式。","tools.rotatingMirror.toggle.origNormal":"原法線","tools.rotatingMirror.toggle.origRay":"原反射光","tools.rotatingMirror.toggle.newNormal":"新法線","tools.rotatingMirror.toggle.newRay":"新反射光","tools.rotatingMirror.incidentAngle":"入射方向（°）","tools.rotatingMirror.mirrorRotation":"鏡面轉角 θ（°）","tools.rotatingMirror.statIncidence":"入射觔 i","tools.rotatingMirror.statReflection":"反射觔 r","tools.rotatingMirror.rayShift":"光線偏移","tools.rotatingMirror.logicBadge":"關係：2 × θ","tools.rotatingMirror.reset":"重設轉角","tools.rotatingMirror.canvas.incident":"入射光線","tools.rotatingMirror.canvas.originalReflected":"原反射光線","tools.rotatingMirror.canvas.newReflected":"新反射光線","tools.rotatingMirror.canvas.n":"n","tools.rotatingMirror.canvas.nPrime":"n′","tools.rotatingMirror.canvas.shift":"偏移","tools.refractionTir.title":"逃獄遊戲 — 折射、司乃耳與全內反射","tools.refraction.title":"折射 — 司乃耳定律","tools.refraction.n1":"n1 入射介質","tools.refraction.n2":"n2 第二介質","tools.refraction.angle":"入射觔（度）","tools.tir.title":"全內反射","tools.tir.n1":"n 密（光密）","tools.tir.n2":"n 疏（光疏）","tools.tir.angle":"光密介質內入射觔（度）","tools.tir.critical":"臨界觔","tools.tir.state":"狀態","tools.tir.partial":"部分折射","tools.tir.full":"全內反射","tools.lens.title":"透鏡 — 光線示意","tools.convexLens.title":"凸透鏡 — 光線示意","tools.concaveLens.title":"凹透鏡 — 光線示意","tools.lens.type":"透鏡類型","tools.lens.convex":"凸透鏡（會聚）","tools.lens.concave":"凹透鏡（發散）","tools.lens.u":"物距 u（厘米）","tools.lens.f":"焦距大小 f（厘米）","tools.lens.h":"物高（相對）","tools.lens.note":"符號：實物、實像距離取正；凸透鏡 f 為正，凹透鏡 f 為負。圖示為定性示意。","tools.rgbMixer.title":"RGB 顏色混合","tools.rgbMixer.intro":"加法混色：紅、綠、藍光在蟻幕上疊加。拖動滑棒或使用預設。","tools.rgbMixer.canvas":"RGB 光線疊加示意圖","tools.rgbMixer.controls":"顏色控制","tools.rgbMixer.red":"紅","tools.rgbMixer.green":"綠","tools.rgbMixer.blue":"藍","tools.rgbMixer.preview":"混合顏色預覽","tools.rgbMixer.presets":"預設","tools.rgbMixer.presetRed":"紅","tools.rgbMixer.presetGreen":"綠","tools.rgbMixer.presetBlue":"藍","tools.rgbMixer.presetYellow":"黃","tools.rgbMixer.presetCyan":"青","tools.rgbMixer.presetMagenta":"品紅","tools.rgbMixer.presetWhite":"白","tools.rgbMixer.presetBlack":"黑","topic.rgbMixer":"RGB 顏色混合","tools.em.title":"電磁波譜","tools.em.pick":"探索波長、頻率與模擬實驗","worksheets.title":"工作紙產生器","worksheets.intro":"產生練習工作紙，支援線上核對、提示與匯出。","worksheets.count":"題數","worksheets.countLabel":"題數（1–50）","worksheets.topics":"課題","worksheets.generate":"產生題目","worksheets.printPractice":"列印／儲存 PDF","worksheets.printAnswers":"列印答案","worksheets.empty":"請先按「產生題目」。","worksheets.tabPractice":"練習模式","worksheets.tabAnswer":"答案","worksheets.paperTitle":"S3 光學 — 多項選擇題工作紙","worksheets.score":"得分","worksheets.hint":"提示","worksheets.answer":"答案","worksheets.today":"今日","worksheets.date":"日期","worksheets.exportWord":"下載 Word","worksheets.exportWordAnswers":"下載答案（Word）","worksheets.exportWordQuestions":"Word — 試題","worksheets.sessionSummary":"本次練習摘要","worksheets.firstTry":"首次即答對","worksheets.revisionSuggestions":"複習建議","worksheets.revisionExcellent":"優秀 — 繼續用閃卡複習。","worksheets.revisionGood":"良好 — 重溫錯題所屬節。","worksheets.revisionFair":"一般 — 回顧總結針對弱項。","worksheets.revisionLow":"需努力 — 先温習總結再試。","worksheets.weakSections":"建議複習節次","worksheets.settingsTitle":"工作紙設定","worksheets.bankTitle":"題庫（依現有篩選）","worksheets.bankAvailable":"可產生題數","worksheets.bankByTopic":"按課題","worksheets.bankNone":"請至少選擇一個課題。","worksheets.exportTitle":"匯出","worksheets.exportHint":"Word：下載 .doc 以 Word 開啟。PDF 請用「列印」→「儲存 PDF」。","worksheets.progressNone":"尚未產生題目","worksheets.progressPrefix":"已完成","worksheets.hideSettings":"隱藏設定","worksheets.showSettings":"顯示設定","worksheets.hintEmpty":"產生題目後可在此看到提示。","worksheets.practiceTitle":"互動練習","worksheets.practiceHint":"第一次答錯只顯示提示；第二次答錯顯示參考答案。","worksheets.keyboardHint":"可按鍵盤 A、B、C、D 選擇答案。滑鼠懸停在某題上時，按 Enter（Windows）或 Return（macOS）僅檢查該題。","worksheets.checkAnswer":"檢查答案","worksheets.correct":"正確。","worksheets.modelAnswer":"參考答案","flashcards.title":"閃卡","flashcards.intro":"使用間隔重複習—難記的卡片在下一輪會更頻繁出現。反射、折射、全內反射課題使用圖片閃卡。","flashcards.progress":"第 {current} 張，共 {total} 張","flashcards.deck":"卡組","flashcards.question":"問題","flashcards.answer":"答案","flashcards.flip":"翻面","flashcards.next":"下一張","flashcards.prev":"上一張","flashcards.all":"全部課題","flashcards.deck.refractionTir":"折射與全內反射","flashcards.mode.sequence":"順序","flashcards.mode.random":"隨機","flashcards.again":"再來","flashcards.gotIt":"懂了","flashcards.round":"第 {round} 輪 · {total} 張卡","flashcards.studyMode":"學習模式","flashcards.progressLabel":"進度","flashcards.tapFlip":"點擊、空白鍵或 FLIP 顯示答案","flashcards.cardCode":"卡片 {id}","flashcards.flipFirst":"請先點擊卡片、按空白鍵或翻面查看答案。","flashcards.hint.rated":"← 再來 · 懂了 →（或按 1 / 2）","flashcards.summary.title":"第 {round} 輪完成","flashcards.summary.stats":"共 {total} 張 · 再來 {again} · 懂了 {gotIt} · 下一張 {neutral}","flashcards.summary.keep":"{count} 張需繼續練習","flashcards.summary.confident":"{count} 張已掌握","flashcards.summary.nextRound":"下一輪","flashcards.summary.restart":"重新開始","flashcards.summary.complete":"練習完成","flashcards.summary.completeStats":"很好！你已完成所有排程的卡片。","summary.title":"課題總結","summary.intro":"HKDSE 總結表（PDF 或圖片）。可於下方預覽，或新分頁開啟。","summary.viewImage":"開啟完整圖片","summary.download":"開啟 / 下載 PDF","summary.missing":"找不到總結 PDF。","footer.conventions":"透鏡光線圖採用與各實驗室說明一致的薄透鏡符號規定。","summary.item.reflection":"反射","summary.item.refraction":"折射與司乃耳定律","summary.item.tir":"全內反射","summary.item.convex":"凸透鏡","summary.item.concave":"凹透鏡","summary.item.em":"電磁波","topic.thermometer":"溫度計","topic.heatInternalEnergy":"熱與內能","topic.changeOfState":"物態變化","topic.heatTransfer":"熱傳入","topic.thermometerLab":"溫度計與校準實驗室","topic.viewNotes":"查閱筆記","notes.card.thermometer":"Ch.1.1 溫度計","notes.card.heatInternalEnergy":"Ch.1.2 熱與內能","notes.card.changeOfState":"Ch.1.3 物態變化","notes.card.heatTransfer":"Ch.1.4 熱傳入","summary.item.thermometer":"溫度計","summary.item.heatInternalEnergy":"熱與內能","summary.item.changeOfState":"物態變化","summary.item.heatTransfer":"熱傳入","flashcards.deck.thermometry":"溫度計（各類）","flashcards.deck.heatInternalEnergy":"熱與內能","flashcards.deck.changeOfState":"物態變化","flashcards.deck.heatTransfer":"熱傳入","tools.thermometerLab.title":"溫度計與校準實驗室","tools.specificHeat.title":"比熱容量實驗室","tools.thermalMixing.title":"熱混合實驗室","tools.changeOfState.title":"物態變化實驗室","tools.heatTransfer.title":"熱的轉移實驗室","tools.thermometerLab.subtitle":"液體玻璃、鈐電阻及熱敏電阻溫度計的互動學習伴侶。","tools.thermometerLab.liquid.title":"液體玻璃溫度計","tools.thermometerLab.liquid.subtitle":"探索玻璃泡容積、毛細管內外徑和液體種類對靉敏度及反應時間的影響。","tools.thermometerLab.resistance.title":"鈐電阻溫度計","tools.thermometerLab.resistance.subtitle":"研究鈐電阻如何隨溫度呈線性變化，並解決溫度校準問題。","tools.thermometerLab.thermistor.title":"負溫度係數熱敏電阻溫度計","tools.thermometerLab.thermistor.subtitle":"學習負溫度係數熱敏電阻的非線性電阻-溫度關係，並進行實時 Beta 計算。","tools.thermometerLab.thermistor.liveBetaLabel":"即時負溫度係數 Beta 計算","tools.thermometerLab.thermistor.meterLabelLine1":"負溫度係數","tools.thermometerLab.thermistor.meterLabelLine2":"熱敏電阻","tools.thermometerLab.labels.show":"顯示結構標註","tools.thermometerLab.labels.hide":"隱藏結構標註","tools.thermometerLab.labels.thinWall":"薄玻璃壁 (快速傳熱)","tools.thermometerLab.labels.largeBulb":"大玻璃泡 (容納更多液體，提高靉敏度)","tools.thermometerLab.labels.narrowBore":"細毛細管 (液柱升得更高，提高靉敏度)","tools.thermometerLab.labels.meniscus":"彎月面 (讀數位置)","tools.thermometerLab.labels.platinumCoil":"鈐絲線圈 (電阻隨溫度線性增加)","tools.thermometerLab.labels.metalSheath":"金屬保護套 (保護並快速導熱)","tools.thermometerLab.labels.semiconductorBead":"半導體小珠 (電阻隨溫度指數級減少)","tools.thermometerLab.labels.leads":"連接導線","tools.thermometerLab.faulty.dualScale":"雙刻度對比示意圖","tools.thermometerLab.faulty.trueScale":"標準溫標 (°C)","tools.thermometerLab.faulty.faultyScale":"偏差溫標 (°C)","tools.thermometerLab.paramSettings":"參數設定","tools.floatingControls.dragHint":"拖曳以移動","tools.floatingControls.showParams":"顯示參數","tools.floatingControls.hideParams":"隱藏參數","tools.thermometerLab.faultySolver":"故障溫度計求解器","tools.thermometerLab.resistanceSolver":"電阻求溫度求解器","worksheets.paperTitleHeat":"S3 熱學 — 練習工作紙（選擇題 + 短答）","worksheets.typeShort":"短答題","worksheets.typeMcq":"多項選擇題","worksheets.yourAnswer":"你的答案","worksheets.typeAnswerPlaceholder":"在此輸入答案…"},tt="s3phy.lang",rt={en:Se,"zh-Hant":kt};let Te="en";function qt(){try{const t=localStorage.getItem(tt);if(t==="zh-Hant"||t==="en")return t}catch{}return"en"}function St(){Te=qt()}function at(t){if(rt[t]){Te=t;try{localStorage.setItem(tt,t)}catch{}document.documentElement.lang=t==="zh-Hant"?"zh-Hant":"en",window.dispatchEvent(new CustomEvent("s3phy:lang"))}}function J(){return Te}function g(t){const o=rt[Te]||Se;return Object.prototype.hasOwnProperty.call(o,t)?o[t]:Object.prototype.hasOwnProperty.call(Se,t)?Se[t]:t}const Tt=.78;function Le(){const t=document.documentElement,o=window.innerWidth,s=Math.max(window.innerHeight,1),n=o/s;let l=1;if(o<=1360?l=.88:o<=1500&&(l=.94),o>1700&&n>1.7){const a=Math.min(.07,(n-1.7)*.09),r=Math.min(.05,(o-1700)/1800*.05);l-=a+r}s<=700&&(l=Math.min(l,.82)),l=Math.max(Tt,Math.min(1,l)),t.style.setProperty("--hub-scale",l.toFixed(3))}function Ct(){return Le(),window.addEventListener("resize",Le),()=>window.removeEventListener("resize",Le)}const Lt=[{id:"optics",titleKey:"strand.optics.title",descKey:"strand.optics.desc"},{id:"heat",titleKey:"strand.heat.title",descKey:"strand.heat.desc"}];function zt(t){function o(){t.innerHTML=`
      <header class="site-header site-header--strand-picker">
        <div class="site-header__brand">
          <div class="brand-logo-wrap" aria-hidden="true">
            <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
          </div>
          <div class="brand-text-block">
            <h1 class="site-title">${g("app.title")}</h1>
            <p class="site-subtitle">${g("app.subtitle")}</p>
          </div>
        </div>
        <div class="site-header__actions">
          <div class="lang-toggle" data-lang></div>
        </div>
      </header>
      <section class="panel panel--topic-hub panel--strand-hub">
        <h2>${g("strands.title")}</h2>
        <p class="lead">${g("strands.intro")}</p>
        <div class="grid cols-2 topic-hub-grid strand-hub-grid">
          ${Lt.map(({id:l,titleKey:a,descKey:r})=>`
            <div class="card">
              <h3>${g(a)}</h3>
              <p>${g(r)}</p>
              <button class="btn primary" type="button" data-strand="${l}">${g("strand.open")}</button>
            </div>`).join("")}
        </div>
      </section>
    `;const n=t.querySelector("[data-lang]");n.innerHTML=`
      <button type="button" data-set-lang="en" class="${J()==="en"?"active":""}">${g("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${J()==="zh-Hant"?"active":""}">${g("lang.zhHant")}</button>
    `,n.querySelectorAll("button").forEach(l=>{l.addEventListener("click",()=>{at(l.getAttribute("data-set-lang")),o()})}),t.querySelectorAll("[data-strand]").forEach(l=>{l.addEventListener("click",()=>{const a=l.getAttribute("data-strand");window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:a}))})})}const s=()=>o();return window.addEventListener("s3phy:lang",s),o(),()=>{window.removeEventListener("s3phy:lang",s)}}const Ge="s3phy-rotating-mirror-lab-css",Ht=`
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
`;function Mt(){if(document.getElementById(Ge))return;const t=document.createElement("style");t.id=Ge,t.textContent=Ht,document.head.appendChild(t)}function Et(t){Mt();const o=document.createElement("div");o.className="rml",o.innerHTML=`
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
  `;const s=o.querySelector(".rml-canvas"),n=s.getContext("2d"),l=o.querySelector("[data-rml-rot]"),a=o.querySelector("[data-rml-inc]"),r=o.querySelector('[data-rml-disp="rot"]'),i=o.querySelector('[data-rml-disp="inc"]'),G=o.querySelector('[data-rml-val="i"]'),M=o.querySelector('[data-rml-val="r"]'),E=o.querySelector('[data-rml-val="shift"]'),I=350,R=380,D=300,h="#22d3ee",k="bold 17px system-ui, sans-serif";let T=0,A=-140,N=!0,d=!0,f=!0,u=!0;function v(B){return B*Math.PI/180}function y(B,$,H,X,ee,V=2,Q=!1){n.beginPath(),n.lineWidth=V,n.strokeStyle=ee,n.setLineDash(Q?[6,6]:[]);const Z=B+Math.cos(v(H))*X,ne=$+Math.sin(v(H))*X;return n.moveTo(B,$),n.lineTo(Z,ne),n.stroke(),n.setLineDash([]),{x:Z,y:ne}}function W(B,$,H,X,ee,V=14){const Q=H-B,Z=X-$,ne=Math.hypot(Q,Z);if(ne<1e-6)return;const de=Q/ne,ge=Z/ne,he=H-de*V,U=X-ge*V,pe=.45*V;n.beginPath(),n.fillStyle=ee,n.moveTo(H,X),n.lineTo(he-ge*pe,U+de*pe),n.lineTo(he+ge*pe,U-de*pe),n.closePath(),n.fill()}function O(B,$,H,X,ee,V=25){n.beginPath(),n.strokeStyle=X,n.lineWidth=2;const Q=Math.min(B,$),Z=Math.max(B,$);if(n.arc(I,R,H,v(Q),v(Z),!1),n.stroke(),ee){const ne=(Q+Z)/2,de=I+Math.cos(v(ne))*(H+V),ge=R+Math.sin(v(ne))*(H+V);n.save(),n.font="bold 14px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle=X,n.fillText(ee,de,ge),n.restore()}}function K(B,$,H,X,ee){n.clearRect(0,0,s.width,s.height),n.beginPath(),n.setLineDash([10,6]),n.strokeStyle="rgba(255, 204, 0, 0.45)",n.lineWidth=3,n.lineCap="round",n.moveTo(I-200,R),n.lineTo(I+200,R),n.stroke(),n.setLineDash([]),n.lineCap="butt";const V=I+Math.cos(v(B))*D,Q=R+Math.sin(v(B))*D;n.beginPath(),n.lineWidth=3,n.strokeStyle="#fff",n.moveTo(V,Q),n.lineTo(I,R),n.stroke();const Z=(V+I)*.5,ne=(Q+R)*.5,de=Math.hypot(I-V,R-Q)||1,ge=(I-V)/de,he=(R-Q)/de;if(W(Z-ge*28,ne-he*28,Z,ne,"#fff",16),n.save(),n.font=k,n.textAlign="center",n.textBaseline="bottom",n.fillStyle="#fff",n.fillText(t("tools.rotatingMirror.canvas.incident"),V,Q-12),n.restore(),N){const U=y(I,R,-90,D-60,"#00e676",1,!0);n.save(),n.font="bold 14px system-ui, sans-serif",n.textAlign="left",n.textBaseline="bottom",n.fillStyle="#00e676",n.fillText(t("tools.rotatingMirror.canvas.n"),U.x+6,U.y-4),n.restore()}if(d){const U=y(I,R,X,D,"#00e676",2,!1);W(I,R,U.x,U.y,"#00e676",16),n.save(),n.font=k,n.textAlign="center",n.textBaseline="bottom",n.fillStyle="#00e676",n.fillText(t("tools.rotatingMirror.canvas.originalReflected"),U.x,U.y-14),n.restore()}n.save(),n.translate(I,R),n.rotate(v(T)),n.beginPath(),n.lineWidth=6,n.strokeStyle="#ffcc00",n.lineCap="round",n.moveTo(-200,0),n.lineTo(200,0),n.stroke(),n.beginPath(),n.lineWidth=1,n.strokeStyle="#666";for(let U=-190;U<200;U+=15)n.moveTo(U,0),n.lineTo(U-5,8);if(n.stroke(),n.restore(),f){const U=y(I,R,$,D-40,h,2,!0);n.save(),n.font="bold 14px system-ui, sans-serif",n.textAlign="left",n.textBaseline="bottom",n.fillStyle=h,n.fillText(t("tools.rotatingMirror.canvas.nPrime"),U.x+6,U.y-4),n.restore()}if(u){const U=y(I,R,H,D,h,4);W(I,R,U.x,U.y,h,16),Math.abs(T)>.5&&(n.save(),n.font=k,n.textAlign="center",n.textBaseline="bottom",n.fillStyle=h,n.fillText(t("tools.rotatingMirror.canvas.newReflected"),U.x,U.y-14),n.restore())}if(f&&O(B,$,100,"#ffcc00",`i=${ee.toFixed(0)}°`,25),f&&u&&O($,H,100,h,`r=${ee.toFixed(0)}°`,25),N&&f&&Math.abs(T)>.5&&O(-90,$,50,"#ffcc00",`θ=${Math.abs(T)}°`,20),d&&u&&Math.abs(T)>.5){const U=H-X;O(X,H,260,"#ff5252",`${t("tools.rotatingMirror.canvas.shift")}=${U.toFixed(0)}°`,40)}}function _(){T=parseFloat(l.value),A=parseFloat(a.value);const B=T>0?"+":"";r.textContent=`${B}${T}°`,i.textContent=`${A}°`;const $=-90,H=Math.abs(A-$),X=$+H,ee=-90+T,V=Math.abs(A-ee),Q=ee+V,Z=Q-X;G.textContent=`${V.toFixed(1)}°`,M.textContent=`${V.toFixed(1)}°`;const ne=Z>0?"+":"";E.textContent=`${ne}${Z.toFixed(1)}°`,K(A,ee,Q,X,V)}return o.querySelectorAll("[data-rml-toggle]").forEach(B=>{B.addEventListener("click",()=>{const $=B.getAttribute("data-rml-toggle");$==="orig-norm"&&(N=!N),$==="orig-ray"&&(d=!d),$==="new-norm"&&(f=!f),$==="new-ray"&&(u=!u),B.classList.toggle("active"),_()})}),o.querySelector("[data-rml-reset]").addEventListener("click",()=>{l.value="0",_()}),l.addEventListener("input",_),a.addEventListener("input",_),_(),o}function $t(t){const o=document.createElement("div");o.className="tool-plane-mirror-lab";const s=document.createElement("iframe"),n="./",l=n.endsWith("/")?n:`${n}/`;function a(){const i=J()==="zh-Hant"?"zh":"en";return`${l}plane-mirror-lab/index.html?embed=1&lang=${encodeURIComponent(i)}`}s.src=a(),s.title=t("tools.planeMirror.title"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var i;try{(i=s.contentWindow)==null||i.postMessage({type:"s3phy:lang",lang:J()},"*")}catch{s.src=a()}};return window.addEventListener("s3phy:lang",r),o._planeMirrorLabCleanup=()=>window.removeEventListener("s3phy:lang",r),o.appendChild(s),o}function Rt(t){const o=document.createElement("div");o.className="tool-tir-escape";const s=document.createElement("iframe"),n="./",l=n.endsWith("/")?n:`${n}/`;return s.src=`${l}tir-escape/index.html?embed=1`,s.title=t("tools.refractionTir.title"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin",o.appendChild(s),o}function Wt(t,o={}){const s=o.defaultKind==="concave"?"concave":"convex",n="tools.lens.title",l=document.createElement("div");l.className="tool-lens-simulator";const a=document.createElement("iframe"),r="./",i=r.endsWith("/")?r:`${r}/`;return a.src=`${i}lens-simulator/index.html?embed=1&defaultLens=${encodeURIComponent(s)}&v=2`,a.title=t(n),a.setAttribute("loading","lazy"),a.referrerPolicy="strict-origin-when-cross-origin",l.appendChild(a),l}function It(t){const o=document.createElement("div");o.className="tool-em-spectrum";const s=document.createElement("iframe"),n="./",l=n.endsWith("/")?n:`${n}/`;function a(){return`${l}em-spectrum/index.html?lang=${encodeURIComponent(J())}`}s.src=a(),s.title=t("tools.em.title"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var i;try{(i=s.contentWindow)==null||i.postMessage({type:"s3phy:lang",lang:J()},"*")}catch{s.src=a()}};return window.addEventListener("s3phy:lang",r),o._emLabCleanup=()=>window.removeEventListener("s3phy:lang",r),o.appendChild(s),o}function Pt(t){const o=document.createElement("div");o.className="rgb-mixer",o.innerHTML=`
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
  `;const s=o.querySelector("[data-r]"),n=o.querySelector("[data-g]"),l=o.querySelector("[data-b]"),a=o.querySelector(".rgb-mixer-canvas"),r=o.querySelector(".rgb-mixer-stage"),i=a.getContext("2d");function G(h){return h.toString(16).padStart(2,"0")}function M(h,k,T){const A=a.width/(window.devicePixelRatio||1),N=a.height/(window.devicePixelRatio||1),d=A/2,f=N/2,u=Math.min(A,N)*.34,v=u*.5,y=Math.sqrt(3)/2;i.clearRect(0,0,A,N),i.fillStyle="#000",i.fillRect(0,0,A,N);const W=[{x:d,y:f-v,rgb:[255,0,0],val:h},{x:d-v*y,y:f+v*.5,rgb:[0,255,0],val:k},{x:d+v*y,y:f+v*.5,rgb:[0,0,255],val:T}];i.globalCompositeOperation="lighter",W.forEach(O=>{if(O.val<=0)return;const K=O.val/255,[_,B,$]=O.rgb,H=i.createRadialGradient(O.x,O.y,0,O.x,O.y,u);H.addColorStop(0,`rgba(${_},${B},${$},${K})`),H.addColorStop(.65,`rgba(${_},${B},${$},${K})`),H.addColorStop(.85,`rgba(${_},${B},${$},${K*.5})`),H.addColorStop(1,`rgba(${_},${B},${$},0)`),i.fillStyle=H,i.beginPath(),i.arc(O.x,O.y,u,0,Math.PI*2),i.fill()}),i.globalCompositeOperation="source-over"}function E(){const h=r.getBoundingClientRect(),k=Math.max(200,Math.min(h.width-8,h.height-8,720)),T=window.devicePixelRatio||1;a.width=k*T,a.height=k*T,a.style.width=`${k}px`,a.style.height=`${k}px`,i.setTransform(T,0,0,T,0,0),M(+s.value,+n.value,+l.value)}function I(){const h=+s.value,k=+n.value,T=+l.value,A=`rgb(${h}, ${k}, ${T})`,N=`#${G(h)}${G(k)}${G(T)}`;o.querySelector("[data-r-val]").textContent=h,o.querySelector("[data-g-val]").textContent=k,o.querySelector("[data-b-val]").textContent=T,o.querySelector("[data-r-bar]").style.width=`${h/255*100}%`,o.querySelector("[data-g-bar]").style.width=`${k/255*100}%`,o.querySelector("[data-b-bar]").style.width=`${T/255*100}%`,s.style.setProperty("--fill",`${h/255*100}%`),n.style.setProperty("--fill",`${k/255*100}%`),l.style.setProperty("--fill",`${T/255*100}%`);const d=o.querySelector("[data-swatch]");d.style.backgroundColor=A,d.setAttribute("aria-label",`${t("tools.rgbMixer.preview")}: ${A}`),o.querySelector("[data-rgb-text]").textContent=A,o.querySelector("[data-hex-text]").textContent=N,M(h,k,T)}function R(h,k,T){s.value=h,n.value=k,l.value=T,I()}return[s,n,l].forEach(h=>h.addEventListener("input",I)),o.querySelectorAll(".rgb-presets button").forEach(h=>{h.addEventListener("click",()=>{R(+h.dataset.r,+h.dataset.g,+h.dataset.b)})}),new ResizeObserver(()=>E()).observe(r),requestAnimationFrame(()=>{E(),I()}),o}const At=["topics","notes","tools","worksheets","flashcards","summary"],Ft={topics:"nav.topics",notes:"nav.notes",tools:"nav.tools",worksheets:"nav.worksheets",flashcards:"nav.flashcards",summary:"nav.summary"};function ot(t,{subtitleKey:o,activeSection:s,onSection:n,onLang:l}){t.innerHTML=`
    <header class="site-header">
      <div class="site-header__brand">
        <div class="brand-logo-wrap" aria-hidden="true">
          <img class="brand-logo-img" src="./images/uniplus-logo.png" alt="" width="220" height="52" decoding="async" />
        </div>
        <div class="brand-text-block">
          <h1 class="site-title">${g("app.title")}</h1>
          <p class="site-subtitle" data-hub-subtitle>${g(o)}</p>
        </div>
      </div>
      <div class="site-header__actions">
        <button type="button" class="strand-back-btn" data-strand-back>${g("strand.back")}</button>
        <div class="lang-toggle" data-lang></div>
      </div>
    </header>
    <nav class="main-nav" data-nav></nav>
    <main data-main></main>
    <footer class="site-footer no-print" data-hub-footer>${g("footer.conventions")}</footer>
  `;const a=t.querySelector("[data-main]"),r=t.querySelector("[data-nav]"),i=t.querySelector("[data-lang]"),G=t.querySelector("[data-strand-back]");let M=s;function E(h){M=h,r.innerHTML=At.map(k=>`<button type="button" class="${h===k?"active":""}" data-sec="${k}">${g(Ft[k])}</button>`).join(""),r.querySelectorAll("button").forEach(k=>{k.addEventListener("click",()=>n(k.getAttribute("data-sec")))})}function I(){i.innerHTML=`
      <button type="button" data-set-lang="en" class="${J()==="en"?"active":""}">${g("lang.en")}</button>
      <button type="button" data-set-lang="zh-Hant" class="${J()==="zh-Hant"?"active":""}">${g("lang.zhHant")}</button>
    `,i.querySelectorAll("button").forEach(h=>{h.addEventListener("click",()=>{at(h.getAttribute("data-set-lang")),l()})})}function R(){t.querySelector("[data-hub-subtitle]").textContent=g(o),G.textContent=g("strand.back"),t.querySelector("[data-hub-footer]").textContent=g("footer.conventions"),t.querySelector(".site-title").textContent=g("app.title")}const D=()=>{window.dispatchEvent(new CustomEvent("s3phy:strand",{detail:null}))};return G.addEventListener("click",D),E(s),I(),{main:a,updateSection(h){E(h)},refreshLabels(){R(),E(M),I()},destroy(){G.removeEventListener("click",D)}}}const De="s3phy:tool-picker-collapsed",Bt=820;function nt({toolOrder:t,toolId:o,getLabel:s,t:n}){const l=t.map(a=>`<button type="button" data-tool="${a}" class="${o===a?"active":""}">${s(a)}</button>`).join("");return`
      <section class="panel panel--tools" data-tools-panel>
        <div class="tools-panel-head">
          <div class="tools-panel-head__text">
            <h2>${n("tools.title")}</h2>
            <p class="tools-active-lab" data-tool-active-label hidden>${s(o)}</p>
          </div>
          <button type="button" class="tool-picker-toggle" data-tool-picker-toggle aria-expanded="true">
            <span data-tool-picker-chevron aria-hidden="true">&#9650;</span>
            <span data-tool-picker-toggle-label>${n("tools.hideLabList")}</span>
          </button>
        </div>
        <div class="tools-layout">
          <aside class="tool-picker" data-tool-picker>
            <p class="lead">${n("tools.pick")}</p>
            <div class="tool-list" data-tool-list>${l}</div>
          </aside>
          <div class="tool-stage" data-tool-stage></div>
        </div>
      </section>`}function st(t,{getLabel:o,t:s,onSelectTool:n,mountTool:l,getActiveToolId:a}){const r=t.querySelector("[data-tools-panel]"),i=t.querySelector("[data-tool-picker]"),G=t.querySelector("[data-tool-list]"),M=t.querySelector("[data-tool-stage]"),E=t.querySelector("[data-tool-picker-toggle]"),I=t.querySelector("[data-tool-picker-toggle-label]"),R=t.querySelector("[data-tool-picker-chevron]"),D=t.querySelector("[data-tool-active-label]");if(!r||!i||!G||!M||!E)return;let h=sessionStorage.getItem(De)==="true";const k=()=>{D&&(D.textContent=o(a()))},T=()=>{E.setAttribute("aria-expanded",h?"false":"true"),I&&(I.textContent=s(h?"tools.showLabList":"tools.hideLabList")),R&&(R.textContent=h?"▼":"▲"),D&&(D.hidden=!h)},A=N=>{h=N,r.classList.toggle("is-picker-collapsed",h),sessionStorage.setItem(De,h?"true":"false"),T()};r.classList.toggle("is-picker-collapsed",h),k(),T(),E.addEventListener("click",()=>{A(!h)}),G.querySelectorAll("button").forEach(N=>{N.addEventListener("click",()=>{const d=N.getAttribute("data-tool");d&&(n(d),G.querySelectorAll("button").forEach(f=>{f.classList.toggle("active",f.getAttribute("data-tool")===d)}),k(),l(M),window.innerWidth<=Bt&&A(!0))})}),l(M)}function Ot(t){const o=document.createElement("div");o.className="tool-optics-light-lens-quiz";const s=document.createElement("iframe"),n="./",l=n.endsWith("/")?n:`${n}/`;function a(){return`${l}optics-light-lens/quiz.html?embed=1`}s.src=a(),s.title=t("worksheets.practiceTitle"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var i;try{(i=s.contentWindow)==null||i.postMessage({type:"s3phy:lang",lang:J()},"*")}catch{s.src=a()}};return window.addEventListener("s3phy:lang",r),o._opticsLightLensWorksheetCleanup=()=>window.removeEventListener("s3phy:lang",r),o.appendChild(s),o}const Gt=1.7,Dt=.7,ze=1,Nt=.1,_t=3;function jt(t){const o=Math.floor(t),s=t-o;return o+(Math.random()<s?1:0)}function Ne(t){for(let o=t.length-1;o>0;o-=1){const s=Math.floor(Math.random()*(o+1));[t[o],t[s]]=[t[s],t[o]]}return t}function Yt(t){const o=new Map(t.map(a=>[a.id,a.copies])),s=[];let n=null;const l=t.reduce((a,r)=>a+r.copies,0);for(let a=0;a<l;a+=1){let r=[...o.entries()].filter(([M,E])=>E>0&&M!==n);r.length===0&&(r=[...o.entries()].filter(([,M])=>M>0)),r.sort((M,E)=>E[1]-M[1]);const[i,G]=r[0];s.push(i),o.set(i,G-1),n=i}return s}function Kt(t){const o=[];return t.forEach(({id:s,copies:n})=>{for(let l=0;l<n;l+=1)o.push(s)}),o}function Ut(t){let o="sequence",s=1,n=[],l=[],a=0,r=!1,i=!1,G=!1;const M=new Map;function E(){return t()}function I(){return new Map(E().map(u=>[u.id,u]))}function R(){M.clear(),E().forEach(u=>{M.set(u.id,{nextRate:ze,totalGotIt:0,roundAgain:0,roundGotIt:0,roundNeutral:0})})}function D(){const u=E();return s===1?u.map(v=>({id:v.id,copies:1})):u.map(v=>{var y;return{id:v.id,copies:jt(((y=M.get(v.id))==null?void 0:y.nextRate)??ze)}}).filter(v=>v.copies>0)}function h(u){if(u.length===0)return[];if(s===1){const v=u.map(y=>y.id);return o==="random"?Ne([...v]):[...v].sort((y,W)=>y-W)}return o==="random"?Ne(Kt(u)):Yt(u)}function k(){if(i=!1,G=!1,n=D(),n.reduce((v,y)=>v+y.copies,0)===0){G=!0,i=!0,l=[],a=0;return}E().forEach(v=>{const y=M.get(v.id);y&&(y.roundAgain=0,y.roundGotIt=0,y.roundNeutral=0)}),l=h(n),a=0,r=!1}function T(){s=1,R(),k()}function A(){return l[a]??null}function N(){const u=A();return u==null?null:I().get(u)??null}function d(u){const v=A();if(v==null)return;const y=M.get(v);y&&(u==="again"?(y.nextRate=Gt,y.totalGotIt=0,y.roundAgain+=1):u==="gotit"?(y.totalGotIt+=1,y.roundGotIt+=1,y.nextRate=y.totalGotIt>=_t?Nt:Dt):u==="neutral"&&(y.roundNeutral+=1,y.nextRate=ze))}function f(){return r=!1,a<l.length-1?(a+=1,!1):(i=!0,!0)}return T(),{getMode:()=>o,setMode(u){o!==u&&(o=u,l=h(n),a=0,r=!1)},resetSession:T,getRoundNumber:()=>s,getProgress:()=>({index:l.length?a+1:0,total:l.length}),isFlipped:()=>r,flip(){r=!r},unflip(){r=!1},currentCard:N,prev(){return a>0?(a-=1,r=!1,!0):!1},nextNavigate(){return a<l.length-1?(a+=1,r=!1,!0):!1},rateAgain(){return r?(d("again"),f()):!1},rateGotIt(){return r?(d("gotit"),f()):!1},rateNeutral(){return r?(d("neutral"),f()):!1},isSummary:()=>i,isSessionComplete:()=>G,getRoundStats(){let u=0,v=0,y=0;return M.forEach(W=>{u+=W.roundAgain,v+=W.roundGotIt,y+=W.roundNeutral}),{again:u,gotIt:v,neutral:y}},nextRound(){s+=1,k()},restart(){T()}}}const Vt={thermometry:"flashcards.deck.thermometry",heatInternalEnergy:"flashcards.deck.heatInternalEnergy",changeOfState:"flashcards.deck.changeOfState",heatTransfer:"flashcards.deck.heatTransfer",reflection:"topic.reflection",refraction:"topic.refraction",tir:"topic.tir",rotatingMirror:"topic.reflection"};function Zt(t){const o=Vt[t]||`topic.${t}`,s=g(o);return s===o?t:s}function it(t,{deckOptions:o,buildDeck:s,initialDeck:n="all"}){let l=n,a=null,r=null;t.innerHTML=`
    <section class="panel panel--flashcards">
      <h2>${g("flashcards.title")}</h2>
      <p class="lead">${g("flashcards.intro")}</p>
      <div class="fc-controls no-print">
        <div class="control">
          <label>${g("flashcards.deck")}</label>
          <select data-fc-deck>
            ${o.map(d=>`<option value="${d.value}">${d.label}</option>`).join("")}
          </select>
        </div>
        <div class="fc-controls-right">
          <div class="fc-mode-group">
            <span class="fc-mode-label">${g("flashcards.studyMode")}</span>
            <div class="fc-mode-toggle" data-fc-mode>
              <button type="button" data-mode="sequence" class="active">${g("flashcards.mode.sequence")}</button>
              <button type="button" data-mode="random">${g("flashcards.mode.random")}</button>
            </div>
          </div>
          <span class="fc-round-badge" data-fc-round></span>
          <div class="fc-progress-block">
            <span class="fc-progress-label">${g("flashcards.progressLabel")}</span>
            <span class="fc-progress-num" data-fc-progress></span>
          </div>
        </div>
      </div>
      <div data-fc-study-panel>
        <div class="fc-study-stage">
          <div class="fc-card-layer fc-card-layer-back" aria-hidden="true"></div>
          <div class="fc-card-layer fc-card-layer-mid" aria-hidden="true"></div>
          <div class="fc-card-container" data-fc-card-wrap>
            <div class="fc-card-inner" data-fc-card-inner>
              <div class="fc-card-face fc-card-face-front">
                <div class="fc-card-top">
                  <span class="fc-subtopic-pill" data-fc-subtopic-pill></span>
                  <span class="fc-card-code" data-fc-card-code></span>
                </div>
                <div class="fc-card-body-scroll">
                  <div class="fc-card-text" data-fc-front-body></div>
                </div>
                <p class="fc-flip-prompt" data-fc-flip-prompt>${g("flashcards.tapFlip")}</p>
              </div>
              <div class="fc-card-face fc-card-face-back">
                <div class="fc-card-top">
                  <span class="fc-subtopic-pill" data-fc-subtopic-pill-back></span>
                  <span class="fc-card-code" data-fc-card-code-back></span>
                </div>
                <div class="fc-card-body-scroll">
                  <div class="fc-card-text" data-fc-back-body></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="fc-rating-hint" data-fc-hint></p>
        <div class="fc-toolbar no-print">
          <button type="button" class="fc-btn-nav" data-fc-prev>
            <span class="material-symbols-outlined" aria-hidden="true">chevron_left</span>
            <span data-fc-prev-label>${g("flashcards.prev")}</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-again" data-fc-again title="${g("flashcards.again")}">
            <span class="material-symbols-outlined" aria-hidden="true">history</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-flip" data-fc-flip title="${g("flashcards.flip")}">
            <span class="material-symbols-outlined fc-flip-icon" aria-hidden="true">sync</span>
          </button>
          <button type="button" class="fc-btn-circle fc-btn-gotit" data-fc-gotit title="${g("flashcards.gotIt")}">
            <span class="material-symbols-outlined" aria-hidden="true">check</span>
          </button>
          <button type="button" class="fc-btn-nav" data-fc-next>
            <span data-fc-next-label>${g("flashcards.next")}</span>
            <span class="material-symbols-outlined" aria-hidden="true">chevron_right</span>
          </button>
        </div>
      </div>
      <div class="fc-summary-panel" data-fc-summary hidden>
        <h3 data-fc-summary-title></h3>
        <p class="muted" data-fc-summary-stats></p>
        <div class="fc-summary-counts">
          <span data-fc-summary-keep></span>
          <span data-fc-summary-confident></span>
        </div>
        <div class="fc-toolbar no-print">
          <button class="btn primary" type="button" data-fc-next-round>${g("flashcards.summary.nextRound")}</button>
          <button class="btn" type="button" data-fc-restart>${g("flashcards.summary.restart")}</button>
        </div>
      </div>
    </section>`;const i={deck:t.querySelector("[data-fc-deck]"),mode:t.querySelector("[data-fc-mode]"),round:t.querySelector("[data-fc-round]"),progress:t.querySelector("[data-fc-progress]"),studyPanel:t.querySelector("[data-fc-study-panel]"),summaryPanel:t.querySelector("[data-fc-summary]"),cardWrap:t.querySelector("[data-fc-card-wrap]"),cardInner:t.querySelector("[data-fc-card-inner]"),subtopicPill:t.querySelector("[data-fc-subtopic-pill]"),subtopicPillBack:t.querySelector("[data-fc-subtopic-pill-back]"),cardCode:t.querySelector("[data-fc-card-code]"),cardCodeBack:t.querySelector("[data-fc-card-code-back]"),frontBody:t.querySelector("[data-fc-front-body]"),backBody:t.querySelector("[data-fc-back-body]"),flipPrompt:t.querySelector("[data-fc-flip-prompt]"),hint:t.querySelector("[data-fc-hint]"),prev:t.querySelector("[data-fc-prev]"),again:t.querySelector("[data-fc-again]"),flip:t.querySelector("[data-fc-flip]"),gotit:t.querySelector("[data-fc-gotit]"),next:t.querySelector("[data-fc-next]"),summaryTitle:t.querySelector("[data-fc-summary-title]"),summaryStats:t.querySelector("[data-fc-summary-stats]"),summaryKeep:t.querySelector("[data-fc-summary-keep]"),summaryConfident:t.querySelector("[data-fc-summary-confident]"),nextRound:t.querySelector("[data-fc-next-round]"),restart:t.querySelector("[data-fc-restart]")};function G(){a=Ut(()=>s(l))}function M(d,f){const u=!f;i.prev.disabled=u,i.again.disabled=u||!d,i.gotit.disabled=u||!d,i.flip.disabled=u,i.next.disabled=u}function E(d,f,u=!1){var B;d.classList.remove("fc-card-text-long","fc-card-text-compact");const v=document.createElement("div");v.innerHTML=f||"";const y=(v.textContent||"").trim(),W=y.split(`
`).filter(Boolean).length,O=((B=(f||"").match(/<br\s*\/?>/gi))==null?void 0:B.length)??0,K=Math.max(W,O>0?O+1:0),_=y.length;u||K>=5||_>220?d.classList.add("fc-card-text-compact"):(K>=4||_>130)&&d.classList.add("fc-card-text-long")}function I(d,f,u){const v=(u||"").replace(/"/g,"&quot;"),y=(u||g("flashcards.question")).replace(/</g,"&lt;");d.innerHTML=`<img src="${f}" alt="${v}" loading="lazy" class="fc-card-img" data-fc-img /><p class="fc-img-fallback muted" data-fc-img-fallback hidden>${y}</p>`;const W=d.querySelector("[data-fc-img]"),O=d.querySelector("[data-fc-img-fallback]");W&&O&&(W.onerror=()=>{W.hidden=!0,O.hidden=!1},W.onload=()=>{W.hidden=!1,O.hidden=!0})}function R(){const d=a.currentCard(),f=a.isFlipped();if(i.cardInner.classList.toggle("fc-flipped",f),!d){i.subtopicPill.textContent="",i.subtopicPillBack.textContent="",i.cardCode.textContent="",i.cardCodeBack.textContent="",i.frontBody.innerHTML="",i.backBody.innerHTML="",i.flipPrompt.hidden=!0,i.cardWrap.classList.remove("fc-card-container--image"),M(!1,!1),i.hint.textContent="";return}const u=Zt(d.subtopic),v=g("flashcards.cardCode").replace("{id}",String(d.id));i.subtopicPill.textContent=u,i.subtopicPillBack.textContent=u,i.cardCode.textContent=v,i.cardCodeBack.textContent=v,d.isImage?(i.cardWrap.classList.add("fc-card-container--image"),i.flipPrompt.hidden=!0,I(i.frontBody,d.frontImage,d.alt),d.backImage&&d.backImage!==d.frontImage?I(i.backBody,d.backImage,d.alt):i.backBody.innerHTML=i.frontBody.innerHTML):(i.cardWrap.classList.remove("fc-card-container--image"),i.flipPrompt.hidden=f,i.frontBody.innerHTML=d.front,i.backBody.innerHTML=d.back,E(i.frontBody,d.front,d.compactFront),E(i.backBody,d.back,d.compactBack)),M(f,!0),i.hint.textContent=g(f?"flashcards.hint.rated":"flashcards.flipFirst"),i.hint.classList.toggle("fc-rating-hint--action",!f)}function D(){const d=a.getRoundStats(),{total:f}=a.getProgress();a.isSessionComplete()?(i.summaryTitle.textContent=g("flashcards.summary.complete"),i.summaryStats.textContent=g("flashcards.summary.completeStats"),i.nextRound.hidden=!0):(i.summaryTitle.textContent=g("flashcards.summary.title").replace("{round}",String(a.getRoundNumber())),i.summaryStats.textContent=g("flashcards.summary.stats").replace("{total}",String(f)).replace("{again}",String(d.again)).replace("{gotIt}",String(d.gotIt)).replace("{neutral}",String(d.neutral)),i.nextRound.hidden=!1),i.summaryKeep.textContent=g("flashcards.summary.keep").replace("{count}",String(d.again)),i.summaryConfident.textContent=g("flashcards.summary.confident").replace("{count}",String(d.gotIt))}function h(){const{index:d,total:f}=a.getProgress();i.round.textContent=g("flashcards.round").replace("{round}",String(a.getRoundNumber())).replace("{total}",String(f)),i.progress.textContent=f?`${d} / ${f}`:"—";const u=a.isSummary();i.studyPanel.hidden=u,i.summaryPanel.hidden=!u,u?D():R()}function k(){const d=a.getMode();i.mode.querySelectorAll("button").forEach(f=>{f.classList.toggle("active",f.dataset.mode===d)})}function T(){a.currentCard()&&(a.flip(),R())}function A(){t.querySelector("h2").textContent=g("flashcards.title"),t.querySelector(".lead").textContent=g("flashcards.intro"),t.querySelector("[data-fc-deck]").previousElementSibling.textContent=g("flashcards.deck"),t.querySelector(".fc-mode-label").textContent=g("flashcards.studyMode"),t.querySelector(".fc-progress-label").textContent=g("flashcards.progressLabel"),i.mode.querySelector('[data-mode="sequence"]').textContent=g("flashcards.mode.sequence"),i.mode.querySelector('[data-mode="random"]').textContent=g("flashcards.mode.random"),i.flipPrompt.textContent=g("flashcards.tapFlip"),t.querySelector("[data-fc-prev-label]").textContent=g("flashcards.prev"),t.querySelector("[data-fc-next-label]").textContent=g("flashcards.next"),i.nextRound.textContent=g("flashcards.summary.nextRound"),i.restart.textContent=g("flashcards.summary.restart"),h()}i.deck.value=l,i.deck.addEventListener("change",()=>{l=i.deck.value,G(),k(),h()}),i.mode.querySelectorAll("button").forEach(d=>{d.addEventListener("click",()=>{a.setMode(d.dataset.mode),k(),h()})}),i.cardWrap.addEventListener("click",d=>{d.target.closest("button")||T()}),i.flip.addEventListener("click",d=>{d.stopPropagation(),T()}),i.prev.addEventListener("click",()=>{a.prev(),h()}),i.again.addEventListener("click",()=>{a.rateAgain()?h():R()}),i.gotit.addEventListener("click",()=>{a.rateGotIt()?h():R()}),i.next.addEventListener("click",()=>{a.isFlipped()?a.rateNeutral()?h():R():a.nextNavigate()&&h()}),i.nextRound.addEventListener("click",()=>{a.nextRound(),h()}),i.restart.addEventListener("click",()=>{a.restart(),h()}),r=d=>{var u;if(!t.isConnected)return;const f=(u=d.target)==null?void 0:u.tagName;if(!(f==="INPUT"||f==="SELECT"||f==="TEXTAREA")){if(d.code==="Space"){d.preventDefault(),T();return}if(d.key==="ArrowLeft"){a.isFlipped()?a.rateAgain()?h():R():(a.prev(),h());return}if(d.key==="ArrowRight"||d.key==="1"){a.isFlipped()?a.rateGotIt()?h():R():a.nextNavigate()&&h();return}d.key==="2"&&a.isFlipped()&&(a.rateAgain()?h():R())}},window.addEventListener("keydown",r);const N=()=>{G(),k(),A()};return window.addEventListener("s3phy:lang",N),G(),k(),h(),()=>{window.removeEventListener("keydown",r),window.removeEventListener("s3phy:lang",N),a==null||a.restart(),t.innerHTML=""}}function Xt(t){const o=String(t).replace(/^\.\//,""),s=window.location.origin,n=window.location.pathname,l=n.match(/^(.*\/dist)\/?/);if(l)return`${s}${l[1]}/${o}`;let a="./";a.endsWith("/")||(a+="/");const r=n.endsWith("/")?n:n.replace(/\/[^/]*$/,"/")||"/";return new URL(`${a}${o}`,`${s}${r}`).href}const Ee=JSON.parse(`[{"topic":"reflection","en":{"q":"How is a <strong>light ray</strong> drawn?","a":"A <strong>straight line with an arrow</strong> showing the direction of travel."},"zhHant":{"q":"How is a <strong>light ray</strong> drawn?","a":"A <strong>straight line with an arrow</strong> showing the direction of travel."}},{"topic":"reflection","en":{"q":"What is a <strong>parallel beam</strong>?","a":"Rays that are <strong>parallel</strong> to each other."},"zhHant":{"q":"What is a <strong>parallel beam</strong>?","a":"Rays that are <strong>parallel</strong> to each other."}},{"topic":"reflection","en":{"q":"What is a <strong>divergent beam</strong>?","a":"Rays that <strong>spread out</strong> from a source."},"zhHant":{"q":"What is a <strong>divergent beam</strong>?","a":"Rays that <strong>spread out</strong> from a source."}},{"topic":"reflection","en":{"q":"What is a <strong>convergent beam</strong>?","a":"Rays that <strong>meet at a point</strong>."},"zhHant":{"q":"What is a <strong>convergent beam</strong>?","a":"Rays that <strong>meet at a point</strong>."}},{"topic":"reflection","en":{"q":"Rays from a <strong>nearby</strong> point object reach the eye as…","a":"<strong>Divergent</strong> rays."},"zhHant":{"q":"Rays from a <strong>nearby</strong> point object reach the eye as…","a":"<strong>Divergent</strong> rays."}},{"topic":"reflection","en":{"q":"Rays from a <strong>distant</strong> point object are treated as…","a":"<strong>Parallel</strong> rays."},"zhHant":{"q":"Rays from a <strong>distant</strong> point object are treated as…","a":"<strong>Parallel</strong> rays."}},{"topic":"reflection","en":{"q":"State the <strong>law of reflection</strong> regarding angles.","a":"<strong>Angle of incidence = angle of reflection</strong>."},"zhHant":{"q":"State the <strong>law of reflection</strong> regarding angles.","a":"<strong>Angle of incidence = angle of reflection</strong>."}},{"topic":"reflection","en":{"q":"State the <strong>law of reflection</strong> regarding the plane of the rays.","a":"The <strong>normal</strong>, <strong>incident ray</strong>, and <strong>reflected ray</strong> lie in the <strong>same plane</strong>."},"zhHant":{"q":"State the <strong>law of reflection</strong> regarding the plane of the rays.","a":"The <strong>normal</strong>, <strong>incident ray</strong>, and <strong>reflected ray</strong> lie in the <strong>same plane</strong>."}},{"topic":"reflection","en":{"q":"What is the <strong>incident ray</strong>?","a":"The ray <strong>approaching</strong> the mirror."},"zhHant":{"q":"What is the <strong>incident ray</strong>?","a":"The ray <strong>approaching</strong> the mirror."}},{"topic":"reflection","en":{"q":"What is the <strong>reflected ray</strong>?","a":"The ray <strong>leaving</strong> the mirror after reflection."},"zhHant":{"q":"What is the <strong>reflected ray</strong>?","a":"The ray <strong>leaving</strong> the mirror after reflection."}},{"topic":"reflection","en":{"q":"What is the <strong>normal</strong>?","a":"An imaginary line <strong>perpendicular</strong> to the mirror at the point of incidence."},"zhHant":{"q":"What is the <strong>normal</strong>?","a":"An imaginary line <strong>perpendicular</strong> to the mirror at the point of incidence."}},{"topic":"reflection","en":{"q":"Define <strong>angle of incidence</strong>.","a":"Angle between the <strong>incident ray</strong> and the <strong>normal</strong>."},"zhHant":{"q":"Define <strong>angle of incidence</strong>.","a":"Angle between the <strong>incident ray</strong> and the <strong>normal</strong>."}},{"topic":"reflection","en":{"q":"Define <strong>angle of reflection</strong>.","a":"Angle between the <strong>reflected ray</strong> and the <strong>normal</strong>."},"zhHant":{"q":"Define <strong>angle of reflection</strong>.","a":"Angle between the <strong>reflected ray</strong> and the <strong>normal</strong>."}},{"topic":"reflection","en":{"q":"What is the <strong>reversibility of light</strong>?","a":"Light follows the <strong>same path</strong> if its direction is reversed."},"zhHant":{"q":"What is the <strong>reversibility of light</strong>?","a":"Light follows the <strong>same path</strong> if its direction is reversed."}},{"topic":"reflection","en":{"q":"Is a plane mirror image <strong>laterally inverted</strong>?","a":"<strong>Yes</strong> — left and right are swapped."},"zhHant":{"q":"Is a plane mirror image <strong>laterally inverted</strong>?","a":"<strong>Yes</strong> — left and right are swapped."}},{"topic":"reflection","en":{"q":"What is the <strong>size</strong> of a plane mirror image compared with the object?","a":"<strong>Same size</strong> as the object."},"zhHant":{"q":"What is the <strong>size</strong> of a plane mirror image compared with the object?","a":"<strong>Same size</strong> as the object."}},{"topic":"reflection","en":{"q":"Is a plane mirror image <strong>erect</strong> or inverted?","a":"<strong>Erect</strong>."},"zhHant":{"q":"Is a plane mirror image <strong>erect</strong> or inverted?","a":"<strong>Erect</strong>."}},{"topic":"reflection","en":{"q":"Is a plane mirror image <strong>real or virtual</strong>?","a":"<strong>Virtual</strong> — cannot be projected on a screen."},"zhHant":{"q":"Is a plane mirror image <strong>real or virtual</strong>?","a":"<strong>Virtual</strong> — cannot be projected on a screen."}},{"topic":"reflection","en":{"q":"How does <strong>object distance</strong> compare with <strong>image distance</strong> for a plane mirror?","a":"<strong>Object distance = image distance</strong>."},"zhHant":{"q":"How does <strong>object distance</strong> compare with <strong>image distance</strong> for a plane mirror?","a":"<strong>Object distance = image distance</strong>."}},{"topic":"reflection","en":{"q":"In a ray diagram, how are <strong>virtual rays</strong> drawn?","a":"<strong>Dotted lines</strong> behind the mirror."},"zhHant":{"q":"In a ray diagram, how are <strong>virtual rays</strong> drawn?","a":"<strong>Dotted lines</strong> behind the mirror."}},{"topic":"reflection","en":{"q":"In a ray diagram, how are <strong>real rays</strong> drawn?","a":"<strong>Solid lines with arrows</strong>."},"zhHant":{"q":"In a ray diagram, how are <strong>real rays</strong> drawn?","a":"<strong>Solid lines with arrows</strong>."}},{"topic":"reflection","en":{"q":"What is the <strong>visibility condition</strong> for seeing a plane mirror image?","a":"The line from the <strong>image point to the observer</strong> must pass <strong>through the mirror</strong>."},"zhHant":{"q":"What is the <strong>visibility condition</strong> for seeing a plane mirror image?","a":"The line from the <strong>image point to the observer</strong> must pass <strong>through the mirror</strong>."}},{"topic":"reflection","en":{"q":"Two <strong>applications</strong> of plane mirrors?","a":"<strong>Dressing mirror</strong> and <strong>rear-view driving mirror</strong>."},"zhHant":{"q":"Two <strong>applications</strong> of plane mirrors?","a":"<strong>Dressing mirror</strong> and <strong>rear-view driving mirror</strong>."}},{"topic":"reflection","en":{"q":"One <strong>advantage</strong> of a plane mirror?","a":"Image is the <strong>same size</strong> as the object."},"zhHant":{"q":"One <strong>advantage</strong> of a plane mirror?","a":"Image is the <strong>same size</strong> as the object."}},{"topic":"reflection","en":{"q":"One <strong>disadvantage</strong> of a plane mirror?","a":"Can form <strong>multiple images</strong>."},"zhHant":{"q":"One <strong>disadvantage</strong> of a plane mirror?","a":"Can form <strong>multiple images</strong>."}},{"topic":"reflection","en":{"q":"Which of the following is <strong>not</strong> a property of an image formed by a plane mirror?<br><br>A. Erect<br>B. Same size as the object<br>C. Real<br>D. Same distance behind the mirror as the object is in front","a":"<strong>C. Real</strong> — plane mirror images are always <strong>virtual</strong>."},"zhHant":{"q":"Which of the following is <strong>not</strong> a property of an image formed by a plane mirror?<br><br>A. Erect<br>B. Same size as the object<br>C. Real<br>D. Same distance behind the mirror as the object is in front","a":"<strong>C. Real</strong> — plane mirror images are always <strong>virtual</strong>."},"compactFront":true,"compactBack":true},{"topic":"reflection","en":{"q":"A clock seen in a plane mirror shows <strong>8:30</strong>. What is the actual time?","a":"<strong>3:30</strong>."},"zhHant":{"q":"A clock seen in a plane mirror shows <strong>8:30</strong>. What is the actual time?","a":"<strong>3:30</strong>."}},{"topic":"reflection","en":{"q":"A lady holds a plane mirror <strong>20 cm</strong> in front of her eyes. A bird is <strong>150 cm behind</strong> her. What is the distance from her eyes to the image of the bird?","a":"<strong>190 cm</strong> — the bird is 170 cm in front of the mirror, so its image is 170 cm behind the mirror; add 20 cm from her eyes to the mirror."},"zhHant":{"q":"A lady holds a plane mirror <strong>20 cm</strong> in front of her eyes. A bird is <strong>150 cm behind</strong> her. What is the distance from her eyes to the image of the bird?","a":"<strong>190 cm</strong> — the bird is 170 cm in front of the mirror, so its image is 170 cm behind the mirror; add 20 cm from her eyes to the mirror."}},{"topic":"reflection","en":{"q":"A girl stands in front of a plane mirror. The distance between her and her image is <strong>4 m</strong>. How far is she from the mirror?","a":"<strong>2 m</strong> — object distance equals image distance, so she is half the total separation from the mirror."},"zhHant":{"q":"A girl stands in front of a plane mirror. The distance between her and her image is <strong>4 m</strong>. How far is she from the mirror?","a":"<strong>2 m</strong> — object distance equals image distance, so she is half the total separation from the mirror."}},{"topic":"reflection","en":{"q":"A plane mirror is moved <strong>10 cm closer</strong> to an observer. By how much does the image move toward the observer?","a":"<strong>20 cm</strong>."},"zhHant":{"q":"A plane mirror is moved <strong>10 cm closer</strong> to an observer. By how much does the image move toward the observer?","a":"<strong>20 cm</strong>."}},{"topic":"reflection","en":{"q":"What is the <strong>minimum mirror length</strong> needed to see your full body if your height is <strong>h</strong>?","a":"<strong>h/2</strong> — half the person's height."},"zhHant":{"q":"What is the <strong>minimum mirror length</strong> needed to see your full body if your height is <strong>h</strong>?","a":"<strong>h/2</strong> — half the person's height."}},{"topic":"reflection","en":{"q":"What is the distance between an object and its image in a plane mirror?","a":"<strong>2 × object distance</strong> from the mirror."},"zhHant":{"q":"What is the distance between an object and its image in a plane mirror?","a":"<strong>2 × object distance</strong> from the mirror."}},{"topic":"reflection","en":{"q":"A standard periscope uses two plane mirrors at 45°. Is the image seen by the observer <strong>erect</strong>? Is it <strong>laterally inverted</strong>?","a":"<strong>Erect</strong> — and <strong>not</strong> laterally inverted."},"zhHant":{"q":"A standard periscope uses two plane mirrors at 45°. Is the image seen by the observer <strong>erect</strong>? Is it <strong>laterally inverted</strong>?","a":"<strong>Erect</strong> — and <strong>not</strong> laterally inverted."}},{"topic":"refraction","en":{"q":"Where does light travel <strong>fastest</strong>?","a":"In a <strong>vacuum</strong> or <strong>air</strong>."},"zhHant":{"q":"Where does light travel <strong>fastest</strong>?","a":"In a <strong>vacuum</strong> or <strong>air</strong>."}},{"topic":"refraction","en":{"q":"What is <strong>refraction</strong>?","a":"Bending of light when it passes into a medium where light travels at a <strong>different speed</strong>."},"zhHant":{"q":"What is <strong>refraction</strong>?","a":"Bending of light when it passes into a medium where light travels at a <strong>different speed</strong>."}},{"topic":"refraction","en":{"q":"During refraction, what happens to <strong>frequency</strong>?","a":"Frequency <strong>remains unchanged</strong>."},"zhHant":{"q":"During refraction, what happens to <strong>frequency</strong>?","a":"Frequency <strong>remains unchanged</strong>."}},{"topic":"refraction","en":{"q":"When does a refracted ray <strong>not change direction</strong>?","a":"<strong>Normal incidence</strong> — ray perpendicular to the boundary."},"zhHant":{"q":"When does a refracted ray <strong>not change direction</strong>?","a":"<strong>Normal incidence</strong> — ray perpendicular to the boundary."}},{"topic":"refraction","en":{"q":"Define <strong>optically denser</strong> medium.","a":"Medium with a <strong>larger refractive index</strong>."},"zhHant":{"q":"Define <strong>optically denser</strong> medium.","a":"Medium with a <strong>larger refractive index</strong>."}},{"topic":"refraction","en":{"q":"Define <strong>optically less dense</strong> medium.","a":"Medium with a <strong>smaller refractive index</strong>."},"zhHant":{"q":"Define <strong>optically less dense</strong> medium.","a":"Medium with a <strong>smaller refractive index</strong>."}},{"topic":"refraction","en":{"q":"State <strong>Snell's law</strong>.","a":"n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>"},"zhHant":{"q":"State <strong>Snell's law</strong>.","a":"n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>"}},{"topic":"refraction","en":{"q":"What is the formula for <strong>refractive index</strong> using speed?","a":"n = c / v."},"zhHant":{"q":"What is the formula for <strong>refractive index</strong> using speed?","a":"n = c / v."}},{"topic":"refraction","en":{"q":"What is the formula for <strong>refractive index</strong> using angles when light enters a medium from air?","a":"n = sin i / sin r"},"zhHant":{"q":"What is the formula for <strong>refractive index</strong> using angles when light enters a medium from air?","a":"n = sin i / sin r"}},{"topic":"refraction","en":{"q":"Light travels from an <strong>optically less dense</strong> medium into a <strong>denser</strong> medium. How does the ray bend?","a":"<strong>Towards the normal</strong>."},"zhHant":{"q":"Light travels from an <strong>optically less dense</strong> medium into a <strong>denser</strong> medium. How does the ray bend?","a":"<strong>Towards the normal</strong>."}},{"topic":"refraction","en":{"q":"Light travels from an <strong>optically denser</strong> medium into a <strong>less dense</strong> medium. How does the ray bend?","a":"<strong>Away from the normal</strong>."},"zhHant":{"q":"Light travels from an <strong>optically denser</strong> medium into a <strong>less dense</strong> medium. How does the ray bend?","a":"<strong>Away from the normal</strong>."}},{"topic":"refraction","en":{"q":"If a medium has a <strong>greater refractive index</strong>, is the speed of light in it higher or lower?","a":"Speed is <strong>lower</strong>."},"zhHant":{"q":"If a medium has a <strong>greater refractive index</strong>, is the speed of light in it higher or lower?","a":"Speed is <strong>lower</strong>."}},{"topic":"refraction","en":{"q":"What is the refractive index of <strong>water</strong>?","a":"<strong>1.33</strong>"},"zhHant":{"q":"What is the refractive index of <strong>water</strong>?","a":"<strong>1.33</strong>"}},{"topic":"refraction","en":{"q":"What is a typical refractive index of <strong>glass</strong>?","a":"<strong>1.50</strong>"},"zhHant":{"q":"What is a typical refractive index of <strong>glass</strong>?","a":"<strong>1.50</strong>"}},{"topic":"refraction","en":{"q":"What is the refractive index of <strong>diamond</strong>?","a":"<strong>2.42</strong>"},"zhHant":{"q":"What is the refractive index of <strong>diamond</strong>?","a":"<strong>2.42</strong>"}},{"topic":"refraction","en":{"q":"A ray passes through a rectangular glass block. What is the direction of the <strong>emergent ray</strong>?","a":"<strong>Parallel</strong> to the incident ray."},"zhHant":{"q":"A ray passes through a rectangular glass block. What is the direction of the <strong>emergent ray</strong>?","a":"<strong>Parallel</strong> to the incident ray."}},{"topic":"refraction","en":{"q":"If the angle of incidence <strong>i</strong> increases in the same two media, what happens to the angle of refraction <strong>r</strong>?","a":"<strong>r also increases</strong>."},"zhHant":{"q":"If the angle of incidence <strong>i</strong> increases in the same two media, what happens to the angle of refraction <strong>r</strong>?","a":"<strong>r also increases</strong>."}},{"topic":"refraction","en":{"q":"Light enters a semi-circular block at the <strong>centre of the flat face</strong>. Is there refraction at the curved face?","a":"<strong>None</strong> — ray along normal."},"zhHant":{"q":"Light enters a semi-circular block at the <strong>centre of the flat face</strong>. Is there refraction at the curved face?","a":"<strong>None</strong> — ray along normal."}},{"topic":"refraction","en":{"q":"What is the formula relating <strong>real depth</strong> and <strong>apparent depth</strong>?","a":"n = real depth / apparent depth"},"zhHant":{"q":"What is the formula relating <strong>real depth</strong> and <strong>apparent depth</strong>?","a":"n = real depth / apparent depth"}},{"topic":"refraction","en":{"q":"Why does a swimming pool look <strong>shallower</strong> than it really is?","a":"Light from the bottom <strong>bends away from the normal</strong> leaving water → image appears higher."},"zhHant":{"q":"Why does a swimming pool look <strong>shallower</strong> than it really is?","a":"Light from the bottom <strong>bends away from the normal</strong> leaving water → image appears higher."}},{"topic":"refraction","en":{"q":"What is the nature of the image seen through a glass block placed over print?","a":"<strong>Virtual</strong> and <strong>erect</strong>."},"zhHant":{"q":"What is the nature of the image seen through a glass block placed over print?","a":"<strong>Virtual</strong> and <strong>erect</strong>."}},{"topic":"refraction","en":{"q":"A ray passes from water into an <strong>air bubble</strong> at the curved surface. How does it bend?","a":"Bends <strong>away from normal</strong>."},"zhHant":{"q":"A ray passes from water into an <strong>air bubble</strong> at the curved surface. How does it bend?","a":"Bends <strong>away from normal</strong>."}},{"topic":"refraction","en":{"q":"Why does <strong>white light split</strong> into colours when it passes through a prism?","a":"Different colours travel at <strong>different speeds</strong> → different n."},"zhHant":{"q":"Why does <strong>white light split</strong> into colours when it passes through a prism?","a":"Different colours travel at <strong>different speeds</strong> → different n."}},{"topic":"refraction","en":{"q":"In a prism, which colour of light bends the <strong>most</strong>?","a":"<strong>Violet</strong>."},"zhHant":{"q":"In a prism, which colour of light bends the <strong>most</strong>?","a":"<strong>Violet</strong>."}},{"topic":"refraction","en":{"q":"In a prism, which colour of light bends the <strong>least</strong>?","a":"<strong>Red</strong>."},"zhHant":{"q":"In a prism, which colour of light bends the <strong>least</strong>?","a":"<strong>Red</strong>."}},{"topic":"refraction","en":{"q":"Arrange the refractive indices of <strong>orange, green, and blue</strong> light in glass in <strong>descending</strong> order.","a":"<strong>Blue > Green > Orange</strong>"},"zhHant":{"q":"Arrange the refractive indices of <strong>orange, green, and blue</strong> light in glass in <strong>descending</strong> order.","a":"<strong>Blue > Green > Orange</strong>"}},{"topic":"refraction","en":{"q":"Arrange the speeds of <strong>violet, blue, and yellow</strong> light in glass in <strong>ascending</strong> order.","a":"<strong>Violet < Blue < Yellow</strong>"},"zhHant":{"q":"Arrange the speeds of <strong>violet, blue, and yellow</strong> light in glass in <strong>ascending</strong> order.","a":"<strong>Violet < Blue < Yellow</strong>"}},{"topic":"tir","en":{"q":"What are the <strong>two conditions</strong> for total internal reflection?","a":"1) <strong>Denser → less dense</strong> medium<br>2) i <strong>></strong> critical angle c"},"zhHant":{"q":"What are the <strong>two conditions</strong> for total internal reflection?","a":"1) <strong>Denser → less dense</strong> medium<br>2) i <strong>></strong> critical angle c"}},{"topic":"tir","en":{"q":"What is the <strong>critical angle formula</strong> for light leaving a medium into air?","a":"sin c = 1/n"},"zhHant":{"q":"What is the <strong>critical angle formula</strong> for light leaving a medium into air?","a":"sin c = 1/n"}},{"topic":"tir","en":{"q":"At the <strong>critical angle</strong>, what is the angle of refraction?","a":"<strong>90°</strong>."},"zhHant":{"q":"At the <strong>critical angle</strong>, what is the angle of refraction?","a":"<strong>90°</strong>."}},{"topic":"tir","en":{"q":"When the angle of incidence is <strong>less than the critical angle</strong> at a denser-to-less dense boundary, what happens?","a":"<strong>Partial reflection</strong> and <strong>refraction</strong>."},"zhHant":{"q":"When the angle of incidence is <strong>less than the critical angle</strong> at a denser-to-less dense boundary, what happens?","a":"<strong>Partial reflection</strong> and <strong>refraction</strong>."}},{"topic":"tir","en":{"q":"Which of the following use <strong>total internal reflection</strong>: mirage, optical fibre, or plane mirror?","a":"<strong>Mirage</strong> and <strong>optical fibre</strong> only."},"zhHant":{"q":"Which of the following use <strong>total internal reflection</strong>: mirage, optical fibre, or plane mirror?","a":"<strong>Mirage</strong> and <strong>optical fibre</strong> only."}},{"topic":"tir","en":{"q":"Why do <strong>diamonds sparkle</strong>?","a":"<strong>Total internal reflection</strong> inside the gem."},"zhHant":{"q":"Why do <strong>diamonds sparkle</strong>?","a":"<strong>Total internal reflection</strong> inside the gem."}},{"topic":"tir","en":{"q":"In a fish-eye view underwater, what does the water surface outside the viewing cone act like?","a":"A <strong>mirror</strong>."},"zhHant":{"q":"In a fish-eye view underwater, what does the water surface outside the viewing cone act like?","a":"A <strong>mirror</strong>."}},{"topic":"tir","en":{"q":"How does a <strong>mirage</strong> on a hot road form?","a":"Hot ground → air layers with decreasing n → rays refract then <strong>total internal reflection</strong> → sky image on road."},"zhHant":{"q":"How does a <strong>mirage</strong> on a hot road form?","a":"Hot ground → air layers with decreasing n → rays refract then <strong>total internal reflection</strong> → sky image on road."}},{"topic":"tir","en":{"q":"Give one advantage of a <strong>reflecting prism</strong> over a plane mirror.","a":"<strong>No multiple images</strong>; brighter, clearer image."},"zhHant":{"q":"Give one advantage of a <strong>reflecting prism</strong> over a plane mirror.","a":"<strong>No multiple images</strong>; brighter, clearer image."}},{"topic":"tir","en":{"q":"Give two advantages of <strong>optical fibre</strong> over copper cable.","a":"<strong>Less energy loss</strong>; <strong>lighter/thinner</strong>; carries more data."},"zhHant":{"q":"Give two advantages of <strong>optical fibre</strong> over copper cable.","a":"<strong>Less energy loss</strong>; <strong>lighter/thinner</strong>; carries more data."}},{"topic":"tir","en":{"q":"Peanut oil has refractive index <strong>1.47</strong> and water has <strong>1.33</strong>. Which has the <strong>smaller critical angle</strong> to air?","a":"<strong>Peanut oil</strong>."},"zhHant":{"q":"Peanut oil has refractive index <strong>1.47</strong> and water has <strong>1.33</strong>. Which has the <strong>smaller critical angle</strong> to air?","a":"<strong>Peanut oil</strong>."}},{"topic":"tir","en":{"q":"Can <strong>total internal reflection</strong> occur when light travels from <strong>peanut oil into water</strong>?","a":"<strong>Yes</strong> — oil is denser than water."},"zhHant":{"q":"Can <strong>total internal reflection</strong> occur when light travels from <strong>peanut oil into water</strong>?","a":"<strong>Yes</strong> — oil is denser than water."}},{"topic":"tir","en":{"q":"Which of the following use <strong>total internal reflection</strong>: binoculars, periscope, or optical fibre?","a":"<strong>Binoculars</strong>, <strong>periscope</strong>, <strong>optical fibre</strong> — all use TIR."},"zhHant":{"q":"Which of the following use <strong>total internal reflection</strong>: binoculars, periscope, or optical fibre?","a":"<strong>Binoculars</strong>, <strong>periscope</strong>, <strong>optical fibre</strong> — all use TIR."}}]`),_e=JSON.parse(`[{"topic":"thermometry","en":{"q":"What is temperature?","a":"A measure of the <strong>degree of hotness</strong> of an object."},"zhHant":{"q":"What is temperature?","a":"A measure of the <strong>degree of hotness</strong> of an object."}},{"topic":"thermometry","en":{"q":"What is a thermometer used for?","a":"To measure the <strong>temperature</strong> of objects."},"zhHant":{"q":"What is a thermometer used for?","a":"To measure the <strong>temperature</strong> of objects."}},{"topic":"thermometry","en":{"q":"What is the common unit of temperature in these notes?","a":"<strong>Degree Celsius</strong> (°C)."},"zhHant":{"q":"What is the common unit of temperature in these notes?","a":"<strong>Degree Celsius</strong> (°C)."}},{"topic":"thermometry","en":{"q":"What is the ice point (lower fixed point)?","a":"<strong>0 °C</strong> — temperature of <strong>pure melting ice</strong> at normal atmospheric pressure."},"zhHant":{"q":"What is the ice point (lower fixed point)?","a":"<strong>0 °C</strong> — temperature of <strong>pure melting ice</strong> at normal atmospheric pressure."}},{"topic":"thermometry","en":{"q":"What is the steam point (upper fixed point)?","a":"<strong>100 °C</strong> — temperature of <strong>steam over pure boiling water</strong> at normal atmospheric pressure."},"zhHant":{"q":"What is the steam point (upper fixed point)?","a":"<strong>100 °C</strong> — temperature of <strong>steam over pure boiling water</strong> at normal atmospheric pressure."}},{"topic":"thermometry","en":{"q":"What are the parts of a liquid-in-glass thermometer?","a":"<strong>Bulb</strong>, <strong>stem</strong>, <strong>capillary tube</strong>, and <strong>constriction</strong> (clinical thermometer)."},"zhHant":{"q":"What are the parts of a liquid-in-glass thermometer?","a":"<strong>Bulb</strong>, <strong>stem</strong>, <strong>capillary tube</strong>, and <strong>constriction</strong> (clinical thermometer)."}},{"topic":"thermometry","en":{"q":"How can you increase the sensitivity of a liquid-in-glass thermometer?","a":"Use a <strong>narrower capillary tube</strong> — liquid column length increases more per °C."},"zhHant":{"q":"How can you increase the sensitivity of a liquid-in-glass thermometer?","a":"Use a <strong>narrower capillary tube</strong> — liquid column length increases more per °C."}},{"topic":"thermometry","en":{"q":"How can you increase the response (speed) of a thermometer?","a":"Use a <strong>thinner glass wall</strong>."},"zhHant":{"q":"How can you increase the response (speed) of a thermometer?","a":"Use a <strong>thinner glass wall</strong>."}},{"topic":"thermometry","en":{"q":"How can you increase the range of a liquid-in-glass thermometer?","a":"Use a <strong>smaller bulb</strong>."},"zhHant":{"q":"How can you increase the range of a liquid-in-glass thermometer?","a":"Use a <strong>smaller bulb</strong>."}},{"topic":"thermometry","en":{"q":"Why is the stem of a mercury thermometer made thin?","a":"Thinner stem → greater length change per °C → <strong>more sensitive</strong>."},"zhHant":{"q":"Why is the stem of a mercury thermometer made thin?","a":"Thinner stem → greater length change per °C → <strong>more sensitive</strong>."}},{"topic":"thermometry","en":{"q":"Which changes increase sensitivity?\\n(i) longer tube\\n(ii) narrower tube\\n(iii) larger bulb","a":"<strong>(ii) and (iii)</strong> only."},"zhHant":{"q":"Which changes increase sensitivity?\\n(i) longer tube\\n(ii) narrower tube\\n(iii) larger bulb","a":"<strong>(ii) and (iii)</strong> only."}},{"topic":"thermometry","en":{"q":"Why does a clinical thermometer keep reading after removal from the mouth?","a":"It has a <strong>constriction</strong> near the bulb."},"zhHant":{"q":"Why does a clinical thermometer keep reading after removal from the mouth?","a":"It has a <strong>constriction</strong> near the bulb."}},{"topic":"thermometry","en":{"q":"What are the steps to calibrate an unmarked thermometer?","a":"Ice point (0 °C) → steam point (100 °C) → mark levels → divide into <strong>100 equal divisions</strong> (1 °C each)."},"zhHant":{"q":"What are the steps to calibrate an unmarked thermometer?","a":"Ice point (0 °C) → steam point (100 °C) → mark levels → divide into <strong>100 equal divisions</strong> (1 °C each)."}},{"topic":"thermometry","en":{"q":"For mercury vs alcohol thermometers, what is the difference in temperature range?","a":"Mercury: <strong>high</strong> temperatures; Alcohol: <strong>low</strong> temperatures."},"zhHant":{"q":"For mercury vs alcohol thermometers, what is the difference in temperature range?","a":"Mercury: <strong>high</strong> temperatures; Alcohol: <strong>low</strong> temperatures."}},{"topic":"thermometry","en":{"q":"For mercury vs alcohol thermometers, what is the difference in response?","a":"Mercury: <strong>quick</strong>; Alcohol: <strong>slow</strong>."},"zhHant":{"q":"For mercury vs alcohol thermometers, what is the difference in response?","a":"Mercury: <strong>quick</strong>; Alcohol: <strong>slow</strong>."}},{"topic":"thermometry","en":{"q":"For mercury vs alcohol thermometers, what is the difference in toxicity?","a":"Mercury: <strong>toxic</strong>; Alcohol: <strong>non-toxic</strong>."},"zhHant":{"q":"For mercury vs alcohol thermometers, what is the difference in toxicity?","a":"Mercury: <strong>toxic</strong>; Alcohol: <strong>non-toxic</strong>."}},{"topic":"thermometry","en":{"q":"For a liquid-in-glass thermometer, what is the temperature-dependent property?","a":"<strong>Volume of liquid</strong> increases as temperature increases."},"zhHant":{"q":"For a liquid-in-glass thermometer, what is the temperature-dependent property?","a":"<strong>Volume of liquid</strong> increases as temperature increases."}},{"topic":"thermometry","en":{"q":"For an infra-red thermometer, what is the temperature-dependent property?","a":"<strong>Intensity of infra-red radiation</strong> increases as temperature increases."},"zhHant":{"q":"For an infra-red thermometer, what is the temperature-dependent property?","a":"<strong>Intensity of infra-red radiation</strong> increases as temperature increases."}},{"topic":"thermometry","en":{"q":"For a rotary (bimetallic) thermometer, what is the temperature-dependent property?","a":"<strong>Curvature of bimetallic strip</strong> — metals expand by different amounts when heated."},"zhHant":{"q":"For a rotary (bimetallic) thermometer, what is the temperature-dependent property?","a":"<strong>Curvature of bimetallic strip</strong> — metals expand by different amounts when heated."}},{"topic":"thermometry","en":{"q":"Thermistor thermometer — how does resistance change with temperature?","a":"Resistance <strong>decreases</strong> as temperature increases."},"zhHant":{"q":"Thermistor thermometer — how does resistance change with temperature?","a":"Resistance <strong>decreases</strong> as temperature increases."}},{"topic":"thermometry","en":{"q":"Resistance thermometer — how does resistance change with temperature?","a":"Resistance <strong>increases</strong> as temperature increases."},"zhHant":{"q":"Resistance thermometer — how does resistance change with temperature?","a":"Resistance <strong>increases</strong> as temperature increases."}},{"topic":"thermometry","en":{"q":"For a liquid crystal thermometer, what is the temperature-dependent property?","a":"<strong>Colour</strong> of liquid crystal changes with temperature."},"zhHant":{"q":"For a liquid crystal thermometer, what is the temperature-dependent property?","a":"<strong>Colour</strong> of liquid crystal changes with temperature."}},{"topic":"thermometry","en":{"q":"Which type of thermometer should you use for body temperature (~37 °C)?","a":"<strong>Clinical thermometer</strong>"},"zhHant":{"q":"Which type of thermometer should you use for body temperature (~37 °C)?","a":"<strong>Clinical thermometer</strong>"}},{"topic":"thermometry","en":{"q":"Which type of thermometer should you use for a furnace at ~1000 °C?","a":"<strong>Resistance thermometer</strong>"},"zhHant":{"q":"Which type of thermometer should you use for a furnace at ~1000 °C?","a":"<strong>Resistance thermometer</strong>"}},{"topic":"thermometry","en":{"q":"Which type of thermometer should you use for dry ice at ~−80 °C?","a":"<strong>Alcohol-in-glass thermometer</strong>"},"zhHant":{"q":"Which type of thermometer should you use for dry ice at ~−80 °C?","a":"<strong>Alcohol-in-glass thermometer</strong>"}},{"topic":"thermometry","en":{"q":"Celsius scale — which statements are correct?\\nI: 0–100 fixed points\\nII: only 0–100 measurable\\nIII: 100 equal divisions","a":"<strong>I and III only</strong>"},"zhHant":{"q":"Celsius scale — which statements are correct?\\nI: 0–100 fixed points\\nII: only 0–100 measurable\\nIII: 100 equal divisions","a":"<strong>I and III only</strong>"}},{"topic":"thermometry","en":{"q":"If mercury is replaced with alcohol in a liquid-in-glass thermometer, which statements are correct?\\n(1) It can measure a higher temperature\\n(2) It becomes less sensitive to temperature change\\n(3) It is safer to use","a":"<strong>Less sensitive</strong> to temperature change, and <strong>safer to use</strong> (non-toxic). It <strong>cannot</strong> measure higher temperatures than mercury."},"zhHant":{"q":"If mercury is replaced with alcohol in a liquid-in-glass thermometer, which statements are correct?\\n(1) It can measure a higher temperature\\n(2) It becomes less sensitive to temperature change\\n(3) It is safer to use","a":"<strong>Less sensitive</strong> to temperature change, and <strong>safer to use</strong> (non-toxic). It <strong>cannot</strong> measure higher temperatures than mercury."}},{"topic":"thermometry","en":{"q":"What is the formula to find temperature T (°C) from mercury column lengths?","a":"<strong>T/100 = (L<sub>T</sub> − L<sub>0</sub>) / (L<sub>100</sub> − L<sub>0</sub>)</strong><br><br>L<sub>T</sub> = length at unknown temperature<br>L<sub>0</sub> = length at 0°C (ice point)<br>L<sub>100</sub> = length at 100°C (steam point)"},"zhHant":{"q":"What is the formula to find temperature T (°C) from mercury column lengths?","a":"<strong>T/100 = (L<sub>T</sub> − L<sub>0</sub>) / (L<sub>100</sub> − L<sub>0</sub>)</strong><br><br>L<sub>T</sub> = length at unknown temperature<br>L<sub>0</sub> = length at 0°C (ice point)<br>L<sub>100</sub> = length at 100°C (steam point)"}},{"topic":"thermometry","en":{"q":"After heater switched off, why does liquid temperature still rise briefly?","a":"Heater is still <strong>hotter than the liquid</strong> → heat still flows in → temperature rises, then falls."},"zhHant":{"q":"After heater switched off, why does liquid temperature still rise briefly?","a":"Heater is still <strong>hotter than the liquid</strong> → heat still flows in → temperature rises, then falls."}},{"topic":"thermometry","en":{"q":"More powerful heater, same water — effect on temperature-time graph?","a":"Reaches same final temperature in <strong>shorter time</strong> (steeper slope)."},"zhHant":{"q":"More powerful heater, same water — effect on temperature-time graph?","a":"Reaches same final temperature in <strong>shorter time</strong> (steeper slope)."}},{"topic":"thermometry","en":{"q":"Resistance thermometer: linear assumption gives 46.2 °C; actual curve is concave up. Actual temperature?","a":"<strong>Higher</strong> than 46.2 °C."},"zhHant":{"q":"Resistance thermometer: linear assumption gives 46.2 °C; actual curve is concave up. Actual temperature?","a":"<strong>Higher</strong> than 46.2 °C."}},{"topic":"thermometry","en":{"q":"When is a resistance thermometer more sensitive?","a":"At <strong>high temperatures</strong> — resistance changes more per °C (steeper slope)."},"zhHant":{"q":"When is a resistance thermometer more sensitive?","a":"At <strong>high temperatures</strong> — resistance changes more per °C (steeper slope)."}},{"topic":"heatInternalEnergy","en":{"q":"What is the formula linking energy, power and time?","a":"<strong>E = Pt</strong> (J = W × s)."},"zhHant":{"q":"What is the formula linking energy, power and time?","a":"<strong>E = Pt</strong> (J = W × s)."}},{"topic":"heatInternalEnergy","en":{"q":"What is specific heat capacity?","a":"Heat energy needed to raise <strong>1 kg</strong> of a material by <strong>1 °C</strong>."},"zhHant":{"q":"What is specific heat capacity?","a":"Heat energy needed to raise <strong>1 kg</strong> of a material by <strong>1 °C</strong>."}},{"topic":"heatInternalEnergy","en":{"q":"What is the formula for specific heat capacity calculations?","a":"<strong>E = mcΔT</strong> or <strong>Pt = mcΔT</strong>."},"zhHant":{"q":"What is the formula for specific heat capacity calculations?","a":"<strong>E = mcΔT</strong> or <strong>Pt = mcΔT</strong>."}},{"topic":"heatInternalEnergy","en":{"q":"What is the unit of specific heat capacity?","a":"<strong>J kg⁻¹ °C⁻¹</strong>"},"zhHant":{"q":"What is the unit of specific heat capacity?","a":"<strong>J kg⁻¹ °C⁻¹</strong>"}},{"topic":"heatInternalEnergy","en":{"q":"What is ΔT?","a":"<strong>Final temperature − initial temperature</strong>."},"zhHant":{"q":"What is ΔT?","a":"<strong>Final temperature − initial temperature</strong>."}},{"topic":"heatInternalEnergy","en":{"q":"Same energy to 5 g copper vs glass — which has greater ΔT?","a":"<strong>Copper</strong> — smaller specific heat capacity."},"zhHant":{"q":"Same energy to 5 g copper vs glass — which has greater ΔT?","a":"<strong>Copper</strong> — smaller specific heat capacity."}},{"topic":"heatInternalEnergy","en":{"q":"What is heat in energy transfer?","a":"Energy transferred from one body to another due to a <strong>temperature difference</strong>."},"zhHant":{"q":"What is heat in energy transfer?","a":"Energy transferred from one body to another due to a <strong>temperature difference</strong>."}},{"topic":"heatInternalEnergy","en":{"q":"What is the law of conservation of energy (heat exchange)?","a":"Energy can neither be created nor destroyed — only changes form."},"zhHant":{"q":"What is the law of conservation of energy (heat exchange)?","a":"Energy can neither be created nor destroyed — only changes form."}},{"topic":"heatInternalEnergy","en":{"q":"What is the principle when hot and cold bodies mix (no heat loss)?","a":"<strong>Heat loss from hot object = heat gain by cold object</strong>."},"zhHant":{"q":"What is the principle when hot and cold bodies mix (no heat loss)?","a":"<strong>Heat loss from hot object = heat gain by cold object</strong>."}},{"topic":"changeOfState","en":{"q":"When heating a substance, what happens during: solid → liquid at melting point?","a":"<strong>Melting</strong> — absorbs energy."},"zhHant":{"q":"When heating a substance, what happens during: solid → liquid at melting point?","a":"<strong>Melting</strong> — absorbs energy."}},{"topic":"changeOfState","en":{"q":"When heating a substance, what happens during: liquid → gas at boiling point?","a":"<strong>Vaporization</strong> (boiling) — absorbs energy."},"zhHant":{"q":"When heating a substance, what happens during: liquid → gas at boiling point?","a":"<strong>Vaporization</strong> (boiling) — absorbs energy."}},{"topic":"changeOfState","en":{"q":"When cooling a substance, what happens during: gas → liquid?","a":"<strong>Condensation</strong> — releases energy."},"zhHant":{"q":"When cooling a substance, what happens during: gas → liquid?","a":"<strong>Condensation</strong> — releases energy."}},{"topic":"changeOfState","en":{"q":"When cooling a substance, what happens during: liquid → solid at melting point?","a":"<strong>Freezing / solidification</strong> — releases energy."},"zhHant":{"q":"When cooling a substance, what happens during: liquid → solid at melting point?","a":"<strong>Freezing / solidification</strong> — releases energy."}},{"topic":"changeOfState","en":{"q":"During melting or boiling, what happens to temperature?","a":"Temperature <strong>stays constant</strong> while state changes."},"zhHant":{"q":"During melting or boiling, what happens to temperature?","a":"Temperature <strong>stays constant</strong> while state changes."}},{"topic":"changeOfState","en":{"q":"What is latent heat?","a":"Energy absorbed or released during a <strong>change of state</strong>."},"zhHant":{"q":"What is latent heat?","a":"Energy absorbed or released during a <strong>change of state</strong>."}},{"topic":"changeOfState","en":{"q":"What is the specific latent heat of fusion of ice (l<sub>f</sub>)?","a":"<strong>334,000 J kg⁻¹</strong> — energy to melt 1 kg ice at 0 °C to water at 0 °C."},"zhHant":{"q":"What is the specific latent heat of fusion of ice (l<sub>f</sub>)?","a":"<strong>334,000 J kg⁻¹</strong> — energy to melt 1 kg ice at 0 °C to water at 0 °C."}},{"topic":"changeOfState","en":{"q":"What is the specific latent heat of vaporization of water (l<sub>v</sub>)?","a":"<strong>2,260,000 J kg⁻¹</strong> — energy to vaporize 1 kg water at 100 °C to steam at 100 °C."},"zhHant":{"q":"What is the specific latent heat of vaporization of water (l<sub>v</sub>)?","a":"<strong>2,260,000 J kg⁻¹</strong> — energy to vaporize 1 kg water at 100 °C to steam at 100 °C."}},{"topic":"changeOfState","en":{"q":"What is the formula for latent heat energy?","a":"<strong>E = ml</strong> or <strong>Pt = ml</strong>."},"zhHant":{"q":"What is the formula for latent heat energy?","a":"<strong>E = ml</strong> or <strong>Pt = ml</strong>."}},{"topic":"changeOfState","en":{"q":"What is internal energy?","a":"Sum of <strong>kinetic energy + potential energy</strong> of all molecules in a body."},"zhHant":{"q":"What is internal energy?","a":"Sum of <strong>kinetic energy + potential energy</strong> of all molecules in a body."}},{"topic":"changeOfState","en":{"q":"What does internal energy depend on?","a":"<strong>Temperature</strong>, <strong>state</strong>, and <strong>mass</strong>."},"zhHant":{"q":"What does internal energy depend on?","a":"<strong>Temperature</strong>, <strong>state</strong>, and <strong>mass</strong>."}},{"topic":"changeOfState","en":{"q":"Solid → liquid or liquid → gas: molecular potential energy?","a":"<strong>Increases</strong> (molecules move further apart)."},"zhHant":{"q":"Solid → liquid or liquid → gas: molecular potential energy?","a":"<strong>Increases</strong> (molecules move further apart)."}},{"topic":"changeOfState","en":{"q":"On a heating curve, what does a horizontal plateau mean?","a":"Change of state at <strong>constant temperature</strong> (melting or boiling)."},"zhHant":{"q":"On a heating curve, what does a horizontal plateau mean?","a":"Change of state at <strong>constant temperature</strong> (melting or boiling)."}},{"topic":"changeOfState","en":{"q":"On a heating curve, if slope = P/(mc). If slope increases, specific heat capacity?","a":"<strong>Decreases</strong> (inverse relationship)."},"zhHant":{"q":"On a heating curve, if slope = P/(mc). If slope increases, specific heat capacity?","a":"<strong>Decreases</strong> (inverse relationship)."}},{"topic":"changeOfState","en":{"q":"On a heating curve, if longer plateau at melting/boiling means?","a":"<strong>Larger latent heat</strong> (more energy for same time at constant P)."},"zhHant":{"q":"On a heating curve, if longer plateau at melting/boiling means?","a":"<strong>Larger latent heat</strong> (more energy for same time at constant P)."}},{"topic":"changeOfState","en":{"q":"How does evaporation differ from boiling in terms of temperature?","a":"Evaporation: <strong>any temperature below boiling point</strong>; Boiling: <strong>at boiling point only</strong>."},"zhHant":{"q":"How does evaporation differ from boiling in terms of temperature?","a":"Evaporation: <strong>any temperature below boiling point</strong>; Boiling: <strong>at boiling point only</strong>."}},{"topic":"changeOfState","en":{"q":"How does evaporation differ from boiling in terms of location?","a":"Evaporation: <strong>surface only</strong>; Boiling: <strong>throughout liquid</strong>."},"zhHant":{"q":"How does evaporation differ from boiling in terms of location?","a":"Evaporation: <strong>surface only</strong>; Boiling: <strong>throughout liquid</strong>."}},{"topic":"changeOfState","en":{"q":"How does evaporation differ from boiling in terms of bubbles?","a":"Evaporation: <strong>no bubbles</strong>; Boiling: <strong>bubbles form inside</strong>."},"zhHant":{"q":"How does evaporation differ from boiling in terms of bubbles?","a":"Evaporation: <strong>no bubbles</strong>; Boiling: <strong>bubbles form inside</strong>."}},{"topic":"changeOfState","en":{"q":"Why does evaporation cool the liquid?","a":"Highest-KE molecules escape → <strong>average KE of remaining liquid decreases</strong> → temperature drops."},"zhHant":{"q":"Why does evaporation cool the liquid?","a":"Highest-KE molecules escape → <strong>average KE of remaining liquid decreases</strong> → temperature drops."}},{"topic":"changeOfState","en":{"q":"Three factors increasing evaporation rate?","a":"<strong>Higher temperature</strong>, <strong>larger surface area</strong>, <strong>lower vapour density</strong> above liquid."},"zhHant":{"q":"Three factors increasing evaporation rate?","a":"<strong>Higher temperature</strong>, <strong>larger surface area</strong>, <strong>lower vapour density</strong> above liquid."}},{"topic":"changeOfState","en":{"q":"When measuring l<sub>f</sub> of ice, what is formula using joulemeter?","a":"<strong>l<sub>f</sub> = E / m</strong> where m = mass of water melted by heater only."},"zhHant":{"q":"When measuring l<sub>f</sub> of ice, what is formula using joulemeter?","a":"<strong>l<sub>f</sub> = E / m</strong> where m = mass of water melted by heater only."}},{"topic":"changeOfState","en":{"q":"Why use crushed ice at melting point in l<sub>f</sub> experiment?","a":"Crushed ice → <strong>good thermal contact</strong>; at 0 °C → energy goes to <strong>melting</strong>, not warming."},"zhHant":{"q":"Why use crushed ice at melting point in l<sub>f</sub> experiment?","a":"Crushed ice → <strong>good thermal contact</strong>; at 0 °C → energy goes to <strong>melting</strong>, not warming."}},{"topic":"changeOfState","en":{"q":"Why use a control funnel (no heater) in l<sub>f</sub> experiment?","a":"Measures ice melted by <strong>surroundings</strong> — subtract from experimental result."},"zhHant":{"q":"Why use a control funnel (no heater) in l<sub>f</sub> experiment?","a":"Measures ice melted by <strong>surroundings</strong> — subtract from experimental result."}},{"topic":"changeOfState","en":{"q":"Ice below 0 °C in l<sub>f</sub> experiment — effect on measured l<sub>f</sub>?","a":"Measured l<sub>f</sub> is <strong>greater than</strong> actual (extra energy warms ice first)."},"zhHant":{"q":"Ice below 0 °C in l<sub>f</sub> experiment — effect on measured l<sub>f</sub>?","a":"Measured l<sub>f</sub> is <strong>greater than</strong> actual (extra energy warms ice first)."}},{"topic":"changeOfState","en":{"q":"Heat gained from surroundings in l<sub>f</sub> experiment — effect on measured l<sub>f</sub>?","a":"Measured l<sub>f</sub> is <strong>smaller than</strong> actual (extra mass melted)."},"zhHant":{"q":"Heat gained from surroundings in l<sub>f</sub> experiment — effect on measured l<sub>f</sub>?","a":"Measured l<sub>f</sub> is <strong>smaller than</strong> actual (extra mass melted)."}},{"topic":"changeOfState","en":{"q":"When measuring l<sub>v</sub>, what is key formula and readings?","a":"<strong>l<sub>v</sub> = Pt / m</strong> — record balance mass loss while water boils."},"zhHant":{"q":"When measuring l<sub>v</sub>, what is key formula and readings?","a":"<strong>l<sub>v</sub> = Pt / m</strong> — record balance mass loss while water boils."}},{"topic":"changeOfState","en":{"q":"What is the formula when ice melts then water warms when a substance melts and then warms up?","a":"<strong>Pt = ml + mcΔT</strong>."},"zhHant":{"q":"What is the formula when ice melts then water warms when a substance melts and then warms up?","a":"<strong>Pt = ml + mcΔT</strong>."}},{"topic":"changeOfState","en":{"q":"0.5 kg ice −10 °C → water 25 °C: energy formula?","a":"<strong>E = mc_ice·ΔT + ml_f + mc_water·ΔT</strong>."},"zhHant":{"q":"0.5 kg ice −10 °C → water 25 °C: energy formula?","a":"<strong>E = mc_ice·ΔT + ml_f + mc_water·ΔT</strong>."}},{"topic":"changeOfState","en":{"q":"0.5 kg water 25 °C frozen to ice at −8 °C — three energy steps?","a":"Cool water (mcΔT) + freeze (ml_f) + cool ice (mcΔT) = <strong>2.28×10⁵ J</strong> removed."},"zhHant":{"q":"0.5 kg water 25 °C frozen to ice at −8 °C — three energy steps?","a":"Cool water (mcΔT) + freeze (ml_f) + cool ice (mcΔT) = <strong>2.28×10⁵ J</strong> removed."}},{"topic":"changeOfState","en":{"q":"1 kg ice at 0 °C + 1 kg steam at 100 °C in insulated chamber — final state?","a":"<strong>100 °C</strong>, mixture of <strong>liquid and gas</strong> (partial condensation)."},"zhHant":{"q":"1 kg ice at 0 °C + 1 kg steam at 100 °C in insulated chamber — final state?","a":"<strong>100 °C</strong>, mixture of <strong>liquid and gas</strong> (partial condensation)."}},{"topic":"changeOfState","en":{"q":"Why is ice good for cooling drinks? (give two reasons)","a":"Large <strong>latent heat of fusion</strong>; melts at <strong>room temperature</strong>."},"zhHant":{"q":"Why is ice good for cooling drinks? (give two reasons)","a":"Large <strong>latent heat of fusion</strong>; melts at <strong>room temperature</strong>."}},{"topic":"changeOfState","en":{"q":"Should you cover the beaker with a lid when measuring l<sub>v</sub>?","a":"<strong>No</strong> — vapour condenses on lid and drips back, underestimating mass loss."},"zhHant":{"q":"Should you cover the beaker with a lid when measuring l<sub>v</sub>?","a":"<strong>No</strong> — vapour condenses on lid and drips back, underestimating mass loss."}},{"topic":"heatTransfer","en":{"q":"What are the three heat transfer processes?","a":"<strong>Conduction</strong>, <strong>convection</strong>, <strong>radiation</strong>."},"zhHant":{"q":"What are the three heat transfer processes?","a":"<strong>Conduction</strong>, <strong>convection</strong>, <strong>radiation</strong>."}},{"topic":"heatTransfer","en":{"q":"How does conduction work in solids?","a":"Heated molecules vibrate more → collide with neighbours → energy passed along; metals also use <strong>free electrons</strong>."},"zhHant":{"q":"How does conduction work in solids?","a":"Heated molecules vibrate more → collide with neighbours → energy passed along; metals also use <strong>free electrons</strong>."}},{"topic":"heatTransfer","en":{"q":"Can conduction occur in a vacuum?","a":"<strong>No</strong> — needs a material medium."},"zhHant":{"q":"Can conduction occur in a vacuum?","a":"<strong>No</strong> — needs a material medium."}},{"topic":"heatTransfer","en":{"q":"How does the rate of conduction compare for solid vs liquid vs gas?","a":"<strong>Solid > liquid > gas</strong>."},"zhHant":{"q":"How does the rate of conduction compare for solid vs liquid vs gas?","a":"<strong>Solid > liquid > gas</strong>."}},{"topic":"heatTransfer","en":{"q":"Which solids are good conductors of heat?","a":"<strong>Metals</strong> (e.g. copper, aluminium)."},"zhHant":{"q":"Which solids are good conductors of heat?","a":"<strong>Metals</strong> (e.g. copper, aluminium)."}},{"topic":"heatTransfer","en":{"q":"Which solids are good heat insulators?","a":"<strong>Plastic, glass, wood</strong>."},"zhHant":{"q":"Which solids are good heat insulators?","a":"<strong>Plastic, glass, wood</strong>."}},{"topic":"heatTransfer","en":{"q":"What is convection?","a":"Heat transfer through a <strong>fluid</strong> by movement of the fluid itself."},"zhHant":{"q":"What is convection?","a":"Heat transfer through a <strong>fluid</strong> by movement of the fluid itself."}},{"topic":"heatTransfer","en":{"q":"Why are air conditioners placed high on the wall?","a":"Cold air is <strong>denser</strong> → sinks → pushes warm air up → <strong>convection current</strong> cools room."},"zhHant":{"q":"Why are air conditioners placed high on the wall?","a":"Cold air is <strong>denser</strong> → sinks → pushes warm air up → <strong>convection current</strong> cools room."}},{"topic":"heatTransfer","en":{"q":"Why are convection heaters placed on the floor?","a":"Warm air <strong>rises</strong>, cold air <strong>sinks</strong> → convection current."},"zhHant":{"q":"Why are convection heaters placed on the floor?","a":"Warm air <strong>rises</strong>, cold air <strong>sinks</strong> → convection current."}},{"topic":"heatTransfer","en":{"q":"During a daytime sea breeze, what is the direction of wind?","a":"From <strong>sea to land</strong> — land heats faster, warm air rises, cool sea air replaces it."},"zhHant":{"q":"During a daytime sea breeze, what is the direction of wind?","a":"From <strong>sea to land</strong> — land heats faster, warm air rises, cool sea air replaces it."}},{"topic":"heatTransfer","en":{"q":"What do all hot/warm objects emit?","a":"<strong>Infra-red radiation</strong> — hotter objects emit more."},"zhHant":{"q":"What do all hot/warm objects emit?","a":"<strong>Infra-red radiation</strong> — hotter objects emit more."}},{"topic":"heatTransfer","en":{"q":"Can radiation travel through a vacuum?","a":"<strong>Yes</strong> — no medium needed."},"zhHant":{"q":"Can radiation travel through a vacuum?","a":"<strong>Yes</strong> — no medium needed."}},{"topic":"heatTransfer","en":{"q":"Good absorbers and radiators of radiation?","a":"<strong>Black, dull</strong> surfaces."},"zhHant":{"q":"Good absorbers and radiators of radiation?","a":"<strong>Black, dull</strong> surfaces."}},{"topic":"heatTransfer","en":{"q":"Poor absorbers and radiators of radiation?","a":"<strong>White, shiny</strong> surfaces."},"zhHant":{"q":"Poor absorbers and radiators of radiation?","a":"<strong>White, shiny</strong> surfaces."}},{"topic":"heatTransfer","en":{"q":"In a vacuum flask, what does the vacuum between walls prevents?","a":"<strong>Conduction and convection</strong>."},"zhHant":{"q":"In a vacuum flask, what does the vacuum between walls prevents?","a":"<strong>Conduction and convection</strong>."}},{"topic":"heatTransfer","en":{"q":"In a vacuum flask, what does the silvery walls reduce?","a":"<strong>Radiation</strong> (reflect IR back)."},"zhHant":{"q":"In a vacuum flask, what does the silvery walls reduce?","a":"<strong>Radiation</strong> (reflect IR back)."}},{"topic":"heatTransfer","en":{"q":"In a vacuum flask, what does the plastic/cork stopper reduces?","a":"<strong>Conduction and convection</strong> at the top."},"zhHant":{"q":"In a vacuum flask, what does the plastic/cork stopper reduces?","a":"<strong>Conduction and convection</strong> at the top."}},{"topic":"heatTransfer","en":{"q":"Why does the greenhouse effect mean why is it warm inside?","a":"Sunlight enters → objects warm → emit <strong>IR</strong> → <strong>glass traps IR</strong> → energy trapped."},"zhHant":{"q":"Why does the greenhouse effect mean why is it warm inside?","a":"Sunlight enters → objects warm → emit <strong>IR</strong> → <strong>glass traps IR</strong> → energy trapped."}},{"topic":"heatTransfer","en":{"q":"Heat from Sun to Earth — which process?","a":"<strong>Radiation only</strong> (through vacuum of space)."},"zhHant":{"q":"Heat from Sun to Earth — which process?","a":"<strong>Radiation only</strong> (through vacuum of space)."}},{"topic":"heatTransfer","en":{"q":"Which statement is correct?\\n(1) Conduction except vacuum\\n(2) Convection except vacuum\\n(3) Radiation only in vacuum","a":"<strong>(1) only</strong> — convection needs fluid; radiation works with or without medium."},"zhHant":{"q":"Which statement is correct?\\n(1) Conduction except vacuum\\n(2) Convection except vacuum\\n(3) Radiation only in vacuum","a":"<strong>(1) only</strong> — convection needs fluid; radiation works with or without medium."}},{"topic":"heatTransfer","en":{"q":"Which does NOT affect rate of conduction?","a":"<strong>Orientation of the conductor</strong>"},"zhHant":{"q":"Which does NOT affect rate of conduction?","a":"<strong>Orientation of the conductor</strong>"}},{"topic":"heatTransfer","en":{"q":"About dull black surfaces and radiation, which statement is correct?\\n(1) They are poor absorbers of radiation\\n(2) They are good absorbers of radiation\\n(3) They cannot emit radiation\\n(4) They only reflect radiation","a":"Dull black surfaces are <strong>good absorbers</strong> of radiation (and good radiators)."},"zhHant":{"q":"About dull black surfaces and radiation, which statement is correct?\\n(1) They are poor absorbers of radiation\\n(2) They are good absorbers of radiation\\n(3) They cannot emit radiation\\n(4) They only reflect radiation","a":"Dull black surfaces are <strong>good absorbers</strong> of radiation (and good radiators)."}},{"topic":"heatTransfer","en":{"q":"All objects emit and absorb radiation?","a":"<strong>Yes</strong> — at all temperatures, simultaneously."},"zhHant":{"q":"All objects emit and absorb radiation?","a":"<strong>Yes</strong> — at all temperatures, simultaneously."}},{"topic":"heatTransfer","en":{"q":"About heat and internal energy, which statements are correct?\\n(1) Heat and internal energy mean the same thing\\n(2) Heat is energy transferred due to a temperature difference\\n(3) Heating a body increases its internal energy\\n(4) Internal energy never changes when heated","a":"<strong>Heat</strong> is energy transferred due to a <strong>temperature difference</strong>. <strong>Heating</strong> increases a body's <strong>internal energy</strong>."},"zhHant":{"q":"About heat and internal energy, which statements are correct?\\n(1) Heat and internal energy mean the same thing\\n(2) Heat is energy transferred due to a temperature difference\\n(3) Heating a body increases its internal energy\\n(4) Internal energy never changes when heated","a":"<strong>Heat</strong> is energy transferred due to a <strong>temperature difference</strong>. <strong>Heating</strong> increases a body's <strong>internal energy</strong>."}},{"topic":"heatTransfer","en":{"q":"No net heat flow between bodies in contact → same?","a":"<strong>Temperature</strong> (thermal equilibrium)."},"zhHant":{"q":"No net heat flow between bodies in contact → same?","a":"<strong>Temperature</strong> (thermal equilibrium)."}},{"topic":"heatTransfer","en":{"q":"Temperature rises from 250 K to 300 K. Change in °C?","a":"<strong>50 °C</strong> (ΔK = Δ°C)."},"zhHant":{"q":"Temperature rises from 250 K to 300 K. Change in °C?","a":"<strong>50 °C</strong> (ΔK = Δ°C)."}},{"topic":"heatTransfer","en":{"q":"Why wear white clothes in summer?","a":"White is a <strong>poor absorber</strong> of infra-red radiation."},"zhHant":{"q":"Why wear white clothes in summer?","a":"White is a <strong>poor absorber</strong> of infra-red radiation."}},{"topic":"heatTransfer","en":{"q":"Open refrigerator — why do feet feel cold air first?","a":"Cold air is <strong>denser</strong> → <strong>sinks</strong>."},"zhHant":{"q":"Open refrigerator — why do feet feel cold air first?","a":"Cold air is <strong>denser</strong> → <strong>sinks</strong>."}},{"topic":"heatTransfer","en":{"q":"Kettle: how is water heated by immersion heater?","a":"<strong>Conduction</strong> near heater, then <strong>convection</strong> to rest of water."},"zhHant":{"q":"Kettle: how is water heated by immersion heater?","a":"<strong>Conduction</strong> near heater, then <strong>convection</strong> to rest of water."}},{"topic":"heatTransfer","en":{"q":"Why is a kettle surface chromed silvery?","a":"To <strong>reduce heat loss by radiation</strong>."},"zhHant":{"q":"Why is a kettle surface chromed silvery?","a":"To <strong>reduce heat loss by radiation</strong>."}},{"topic":"heatTransfer","en":{"q":"You can barbecue sausages on a fork in two ways. Way A: sausages threaded along the tines (parallel). Way B: sausages pierced across the tines (perpendicular). Which cooks the inside more evenly?","a":"<strong>Way A</strong> — sausages lie along the metal tines, giving <strong>larger contact area</strong> and better <strong>conduction</strong> to the centre."},"zhHant":{"q":"You can barbecue sausages on a fork in two ways. Way A: sausages threaded along the tines (parallel). Way B: sausages pierced across the tines (perpendicular). Which cooks the inside more evenly?","a":"<strong>Way A</strong> — sausages lie along the metal tines, giving <strong>larger contact area</strong> and better <strong>conduction</strong> to the centre."}},{"topic":"heatTransfer","en":{"q":"Potatoes are wrapped in aluminium foil and cooked beside a charcoal fire. How is heat transferred (a) from the fire to the foil, and (b) from the foil to the potato?","a":"Fire → foil: <strong>radiation</strong>; foil → potato: <strong>conduction</strong>."},"zhHant":{"q":"Potatoes are wrapped in aluminium foil and cooked beside a charcoal fire. How is heat transferred (a) from the fire to the foil, and (b) from the foil to the potato?","a":"Fire → foil: <strong>radiation</strong>; foil → potato: <strong>conduction</strong>."}},{"topic":"heatTransfer","en":{"q":"Which side of aluminium foil should face outward?","a":"<strong>Shiny side</strong> — better reflector of radiation."},"zhHant":{"q":"Which side of aluminium foil should face outward?","a":"<strong>Shiny side</strong> — better reflector of radiation."}},{"topic":"heatTransfer","en":{"q":"Tile vs wood floor at 20 °C — which feels cooler barefoot?","a":"<strong>Tile</strong> — better conductor removes heat from feet faster."},"zhHant":{"q":"Tile vs wood floor at 20 °C — which feels cooler barefoot?","a":"<strong>Tile</strong> — better conductor removes heat from feet faster."}},{"topic":"heatTransfer","en":{"q":"How does a defrost tray work?","a":"Metal is a <strong>good conductor</strong> → conducts heat from surroundings to frozen food quickly."},"zhHant":{"q":"How does a defrost tray work?","a":"Metal is a <strong>good conductor</strong> → conducts heat from surroundings to frozen food quickly."}},{"topic":"heatTransfer","en":{"q":"Conduction demo: pins on rod drop A→B→C. Why same amount of wax?","a":"Fair test — <strong>same energy</strong> needed to melt each wax blob."},"zhHant":{"q":"Conduction demo: pins on rod drop A→B→C. Why same amount of wax?","a":"Fair test — <strong>same energy</strong> needed to melt each wax blob."}},{"topic":"heatTransfer","en":{"q":"Copper rod instead of iron in pin-drop experiment?","a":"Pins drop in <strong>shorter time</strong> (same order) — copper conducts faster."},"zhHant":{"q":"Copper rod instead of iron in pin-drop experiment?","a":"Pins drop in <strong>shorter time</strong> (same order) — copper conducts faster."}},{"topic":"heatTransfer","en":{"q":"CPU heat sink fan function?","a":"Increases <strong>airflow</strong> → removes warm air by <strong>convection</strong>."},"zhHant":{"q":"CPU heat sink fan function?","a":"Increases <strong>airflow</strong> → removes warm air by <strong>convection</strong>."}},{"topic":"heatTransfer","en":{"q":"Why paint heat sink fins black?","a":"Black surfaces are <strong>good radiators</strong> — extra heat loss by radiation."},"zhHant":{"q":"Why paint heat sink fins black?","a":"Black surfaces are <strong>good radiators</strong> — extra heat loss by radiation."}},{"topic":"heatTransfer","en":{"q":"Plastic instead of metal heat sink strips — effect on CPU cooling?","a":"Temperature decreases at a <strong>lower rate</strong> (plastic insulates)."},"zhHant":{"q":"Plastic instead of metal heat sink strips — effect on CPU cooling?","a":"Temperature decreases at a <strong>lower rate</strong> (plastic insulates)."}},{"topic":"heatTransfer","en":{"q":"Speed of heat transmission: conduction vs convection vs radiation?","a":"Conduction <strong>very slow</strong>; convection <strong>slow</strong>; radiation <strong>fastest</strong>."},"zhHant":{"q":"Speed of heat transmission: conduction vs convection vs radiation?","a":"Conduction <strong>very slow</strong>; convection <strong>slow</strong>; radiation <strong>fastest</strong>."}},{"topic":"heatTransfer","en":{"q":"Glass house + home openings — type of air transfer between rooms?","a":"<strong>Convection</strong> — warm air rises through top, cool air returns through bottom."},"zhHant":{"q":"Glass house + home openings — type of air transfer between rooms?","a":"<strong>Convection</strong> — warm air rises through top, cool air returns through bottom."}},{"topic":"heatTransfer","en":{"q":"Best colour for wall between glass house and home (solar heating)?","a":"<strong>Black</strong> — good absorber of radiation."},"zhHant":{"q":"Best colour for wall between glass house and home (solar heating)?","a":"<strong>Black</strong> — good absorber of radiation."}}]`);function Jt(t){return t==="zh-Hant"?"zhHant":"en"}function qe(t){return Xt(t)}function He(t){return Ee.filter(o=>o.topic===t)}function Qt(t,o,s,n){var r,i,G;const l=Jt(o);if((r=t==null?void 0:t.en)!=null&&r.front||(i=t==null?void 0:t.zhHant)!=null&&i.front){const M=(G=t[l])!=null&&G.front?t[l]:t.en||t.zhHant,E=qe(M.front),I=M.back?qe(M.back):E;return{id:s,subtopic:t.topic||n,front:"",back:"",frontImage:E,backImage:I,alt:t.alt||t.title||"",isImage:!0}}if(t!=null&&t.front){const M=qe(t.front),E=t.back?qe(t.back):M;return{id:s,subtopic:t.topic||n,front:"",back:"",frontImage:M,backImage:E,alt:t.alt||t.title||"",isImage:!0}}const a=t[l]||t.en;return{id:s,subtopic:t.topic||n,front:(a==null?void 0:a.q)||"",back:(a==null?void 0:a.a)||"",isImage:!1,compactFront:!!t.compactFront,compactBack:!!t.compactBack}}function lt(t,o,s="General"){let n=1;return t.map(l=>{const a=Qt(l,o,n,l.topic||s);return n+=1,a})}function er(t){const o=t==="rotatingMirror"?"reflection":t;return o==="all"?Ee.slice():o==="reflection"?He("reflection"):o==="refractionTir"?[...He("refraction"),...He("tir")]:Ee.slice()}function tr(t){return t==="all"?_e.slice():_e.filter(o=>o.topic===t)}function rr(t,o){return lt(er(t),o)}function ar(t,o){return lt(tr(t),o)}const or=["rotatingMirror","planeMirrorLab","refractionTir","lens","rgbMixer","em"],nr="20260627-em-v2",sr={rotatingMirror:t=>Et(t),planeMirrorLab:t=>$t(t),refractionTir:t=>Rt(t),lens:(t,o)=>Wt(t,{defaultKind:o}),rgbMixer:t=>Pt(t),em:t=>It(t)};function je(t){return g({rotatingMirror:"tools.rotatingMirror.title",planeMirrorLab:"tools.planeMirror.title",refractionTir:"tools.refractionTir.title",lens:"tools.lens.title",rgbMixer:"tools.rgbMixer.title",em:"tools.em.title"}[t]||t)}function Ye(){return J()==="zh-Hant"?"zhHant":"en"}async function $e(t,o){const s=`./${t}/${o}`;try{return(await fetch(s,{method:"HEAD"})).ok}catch{return!1}}async function ir(t){return $e("notes",t)}function lr(t){let o="topics",s="rotatingMirror",n="convex",l=null,a={main:null},r=null,i=null;const G=[{value:"all",labelKey:"flashcards.all"},{value:"reflection",labelKey:"topic.reflection"},{value:"refractionTir",labelKey:"flashcards.deck.refractionTir"}];function M(){if(a.main){if(r==null||r(),r=null,i==null||i(),i=null,o==="topics")a.main.innerHTML=I();else if(o==="notes")a.main.innerHTML=D();else if(o==="tools")a.main.innerHTML=nt({toolOrder:or,toolId:s,getLabel:je,t:g});else if(o==="worksheets"){a.main.innerHTML='<section class="panel panel--worksheets-embed"></section>';const d=a.main.querySelector(".panel--worksheets-embed"),f=Ot(g);d.appendChild(f),i=f._opticsLightLensWorksheetCleanup||null}else o==="flashcards"?r=it(a.main,{deckOptions:G.map(d=>({value:d.value,label:g(d.labelKey)})),buildDeck:d=>rr(d,J())}):o==="summary"&&(a.main.innerHTML=k());o==="notes"&&h(),o==="tools"&&st(t,{getLabel:je,t:g,getActiveToolId:()=>s,onSelectTool:d=>{s=d},mountTool:d=>{d.innerHTML="";const f=sr[s];if(!f)return;const u=s==="lens"?f(g,n):f(g);d.appendChild(u)}}),o==="summary"&&T()}}function E(){l==null||l.destroy(),l=ot(t,{subtitleKey:"strand.optics.subtitle",activeSection:o,onSection:d=>{o=d,l.updateSection(o),M()},onLang:()=>E()}),a.main=l.main,l.updateSection(o),M()}function I(){const d=[["planeMirrorLab","topic.reflection"],["refraction","topic.refractionSnell"],["tir","topic.tir"],["convex","topic.convex"],["concave","topic.concave"],["em","topic.em"]];return`
      <section class="panel panel--topic-hub">
        <h2>${g("topics.title")}</h2>
        <p class="lead">${g("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${d.map(([f,u])=>{const v=f==="convex"||f==="concave"?"lens":f==="refraction"||f==="tir"?"refractionTir":f==="em"?"em":f,y=f==="convex"?"convex":f==="concave"?"concave":"";return`
            <div class="card">
              <h3>${g(u)}</h3>
              <button class="btn primary" type="button" data-go-tool="${v}"${y?` data-lens-kind="${y}"`:""}>${g("topic.openTool")}</button>
            </div>`}).join("")}
        </div>
      </section>`}function R(d){const f=d.target.closest("[data-go-tool]");if(!f)return;o="tools",s=f.getAttribute("data-go-tool");const u=f.getAttribute("data-lens-kind");(u==="convex"||u==="concave")&&(n=u),l.updateSection(o),M()}function D(){const d=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}];return`
      <section class="panel">
        <h2>${g("notes.title")}</h2>
        <p class="lead">${g("notes.intro")}</p>
        <p class="lead">${g("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${d.map(f=>{const u=g(`notes.card.${f.key}`);return`
            <div class="card" data-note-card="${f.key}">
              <h3>${u}</h3>
              <div data-note-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function h(){const d=[{key:"reflection",fileEn:"reflection-en.pdf",fileZh:"reflection-zhHant.pdf"},{key:"refraction",fileEn:"refraction-en.pdf",fileZh:"refraction-zhHant.pdf"},{key:"tir",fileEn:"tir-en.pdf",fileZh:"tir-zhHant.pdf"},{key:"convexLens",fileEn:"convex-lens-en.pdf",fileZh:"convex-lens-zhHant.pdf"},{key:"concaveLens",fileEn:"concave-lens-en.pdf",fileZh:"concave-lens-zhHant.pdf"},{key:"em",fileEn:"emwaves-en.pdf",fileZh:"emwaves-zhHant.pdf"}],f=Ye();for(const u of d){const v=t.querySelector(`[data-note-card="${u.key}"]`);if(!v)continue;const y=v.querySelector("[data-note-body]"),W=f==="zhHant"?u.fileZh:u.fileEn,O=await ir(W),K=`./notes/${W}`;O?y.innerHTML=`
          <iframe class="notes-grid" title="${g(`notes.card.${u.key}`)}" src="${K}"></iframe>
          <p style="margin-top:8px"><a href="${K}" target="_blank" rel="noopener">${g("notes.openPdf")}</a></p>`:y.innerHTML=`<p class="lead">${g("notes.missing")}</p>
          <p><a class="btn" href="./notes/README.txt" target="_blank" rel="noopener">README</a></p>`}}function k(){const d=[{key:"reflection",type:"image",fileEn:"reflection-en.webp",fileZh:"reflection-zhHant.webp"},{key:"refraction",type:"image",fileEn:"refraction-en.webp",fileZh:"refraction-zhHant.webp"},{key:"tir",type:"image",fileEn:"tir-en.webp",fileZh:"tir-zhHant.webp"},{key:"convex",type:"image",fileEn:"convex-en.webp",fileZh:"convex-zhHant.webp"},{key:"concave",type:"image",fileEn:"concave-en.webp",fileZh:"concave-zhHant.webp"},{key:"em",type:"image",fileEn:"em-en.webp",fileZh:"em-zhHant.webp"}];return`
      <section class="panel">
        <h2>${g("summary.title")}</h2>
        <p class="lead">${g("summary.intro")}</p>
        <p class="lead">${g("notes.embedHint")}</p>
        <div class="grid cols-2" data-summary-grid>
          ${d.map(f=>{const u=g(`summary.item.${f.key}`);return`
            <div class="card" data-summary-card="${f.key}">
              <h3>${u}</h3>
              <div data-summary-body></div>
            </div>`}).join("")}
        </div>
      </section>`}async function T(){const d=[{key:"reflection",type:"image",fileEn:"reflection-en.webp",fileZh:"reflection-zhHant.webp"},{key:"refraction",type:"image",fileEn:"refraction-en.webp",fileZh:"refraction-zhHant.webp"},{key:"tir",type:"image",fileEn:"tir-en.webp",fileZh:"tir-zhHant.webp"},{key:"convex",type:"image",fileEn:"convex-en.webp",fileZh:"convex-zhHant.webp"},{key:"concave",type:"image",fileEn:"concave-en.webp",fileZh:"concave-zhHant.webp"},{key:"em",type:"image",fileEn:"em-en.webp",fileZh:"em-zhHant.webp"}],f=Ye();for(const u of d){const v=t.querySelector(`[data-summary-card="${u.key}"]`);if(!v)continue;const y=v.querySelector("[data-summary-body]");if(u.type==="image"){const _=u.fileEn&&u.fileZh?f==="zhHant"?u.fileZh:u.fileEn:u.file,B=await $e("summary",_),H=`${`./summary/${_}`}?v=${nr}`;B?y.innerHTML=`
          <img class="summary-thumb" src="${H}" alt="${g(`summary.item.${u.key}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${H}" target="_blank" rel="noopener">${g("summary.viewImage")}</a></p>`:y.innerHTML=`<p class="lead">${g("summary.missing")}</p>`;continue}const W=f==="zhHant"?u.fileZh:u.fileEn,O=await $e("summary-pdfs",W),K=`./summary-pdfs/${W}`;O?y.innerHTML=`
          <iframe class="notes-grid" title="${g(`summary.item.${u.key}`)}" src="${K}"></iframe>
          <p style="margin-top:8px"><a href="${K}" target="_blank" rel="noopener">${g("summary.download")}</a></p>`:y.innerHTML=`<p class="lead">${g("summary.missing")}</p>`}}const A=()=>E(),N=d=>R(d);return window.addEventListener("s3phy:lang",A),t.addEventListener("click",N),E(),()=>{window.removeEventListener("s3phy:lang",A),t.removeEventListener("click",N),r==null||r(),i==null||i(),l==null||l.destroy()}}const Ke="s3phy-thermometer-lab-css",cr=900,ur=`
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
.tl-wrap .tl-bath-bar--under-graph {
  margin-top: 0;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
}
.tl-wrap .tl-bath-bar--under-graph .tl-bath-bar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.tl-wrap .tl-bath-bar--under-graph .tl-beaker-overlay {
  padding: 4px 8px;
  margin: 0;
  font-size: 0.75rem;
  background: transparent;
  border: none;
}
.tl-wrap .tl-bath-bar--under-graph .tl-temp-badge {
  font-size: 1rem;
}
.tl-wrap .tl-bath-bar--under-graph .tl-bath-slider-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tl-wrap .tl-bath-bar--under-graph input[type="range"] {
  margin: 0;
}
.tl-wrap .tl-bath-bar--under-graph .tl-val-bath-temp {
  color: var(--tl-cyan);
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
.tl-wrap .tl-controls-float-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.tl-wrap .tl-controls.lab-controls-float .tl-controls-float-bar {
  cursor: grab;
  touch-action: none;
  user-select: none;
}
.tl-wrap .tl-controls.lab-controls-float .tl-controls-float-bar.is-dragging {
  cursor: grabbing;
}
.tl-wrap .tl-controls-drag-handle {
  display: none;
  color: var(--tl-muted);
  padding: 4px 6px;
  border-radius: 6px;
  background: none;
  border: 1px solid transparent;
  font-size: 0.85rem;
  line-height: 1;
  flex-shrink: 0;
  pointer-events: none;
}
.tl-wrap .tl-controls-drag-handle:hover { color: var(--tl-text); border-color: var(--tl-border); }
.tl-wrap .tl-controls.lab-controls-float .tl-controls-drag-handle { display: inline-flex; align-items: center; }
.tl-wrap .tl-controls-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
  background: none;
  border: none;
  color: var(--tl-cyan);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  padding: 4px 0;
  text-align: left;
}
.tl-wrap .tl-controls-toggle:hover { opacity: 0.85; }
.tl-wrap .tl-controls-body {
  transition: max-height 0.25s ease, opacity 0.2s ease;
  min-height: 0;
}
.tl-wrap .tl-controls.controls-collapsed .tl-controls-body {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
}
.tl-wrap .tl-controls:not(.controls-collapsed) .tl-controls-body {
  max-height: min(70vh, 520px);
  opacity: 1;
  overflow-y: auto;
}
.tl-wrap .tl-controls.lab-controls-float {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
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
}
@media (min-width: 900px) {
  .tl-wrap .tl-dash {
    display: grid;
    grid-template-columns: minmax(0, 460px) 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
    align-items: stretch;
    position: relative;
  }
  .tl-wrap .tl-viz-phys {
    grid-column: 1;
    grid-row: 1;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
  }
  .tl-wrap .tl-viz-graph {
    grid-column: 2;
    grid-row: 1;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #10b981;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
  }
  .tl-wrap .tl-live-calculations {
    grid-row: 2;
    grid-column: 1 / -1;
    min-width: 0;
  }
  .tl-wrap .tl-controls.lab-controls-float {
    position: absolute;
    z-index: 40;
    width: min(360px, calc(100% - 24px));
    padding: 12px;
    gap: 10px;
  }
  .tl-wrap .tl-canvas-phys,
  .tl-wrap .tl-canvas-graph {
    max-width: 100%;
    width: 100%;
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
.tl-wrap .tl-live-calculations {
  background: var(--tl-panel);
  border: 1px solid var(--tl-border);
  border-radius: 16px;
  padding: 16px;
  min-width: 0;
}
.tl-wrap .tl-live-tab {
  display: none;
}
.tl-wrap .tl-live-tab.active {
  display: block;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  align-items: stretch;
  width: 100%;
  margin-top: 6px;
}
.tl-wrap .tl-preset-btn {
  padding: 6px 4px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  white-space: nowrap;
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
.tl-wrap .tl-worked-solution.tl-dual-direction {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: stretch;
  margin-bottom: 10px;
}
.tl-wrap .tl-direction-col {
  flex: 1 1 0;
  min-width: 0;
}
.tl-wrap .tl-dual-direction > .tl-direction-col:first-child {
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  padding-right: 16px;
}
@media (max-width: 699px) {
  .tl-wrap .tl-worked-solution.tl-dual-direction {
    flex-direction: column;
    gap: 12px;
  }
  .tl-wrap .tl-dual-direction > .tl-direction-col:first-child {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-right: 0;
    padding-bottom: 10px;
  }
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
`;function dr(){if(document.getElementById(Ke))return;const t=document.createElement("style");t.id=Ke,t.textContent=ur,document.head.appendChild(t)}function fr(t){const s={x:12,y:12},n=200,{container:l,panel:a,toggleBtn:r,dragHandle:i,dragSurface:G,storageKey:M,onLayoutChange:E,breakpoint:I=1024,collapsedClass:R="controls-collapsed",floatingClass:D="controls-floating"}=t,h=G||i;if(!l||!a||!r)return null;let k=sessionStorage.getItem(M)!=="false",T=(()=>{try{const $=localStorage.getItem(M+":pos");if(!$)return{...s};const H=JSON.parse($);if(typeof H.x=="number"&&typeof H.y=="number")return H}catch{}return{...s}})(),A=null,N=null;const d=()=>window.innerWidth>=I,f=($,H)=>{const X=l.getBoundingClientRect(),ee=a.getBoundingClientRect(),V=Math.max(0,X.width-ee.width),Q=Math.max(0,X.height-ee.height);return{x:Math.min(Math.max(0,$),V),y:Math.min(Math.max(0,H),Q)}},u=()=>{a.style.left=T.x+"px",a.style.top=T.y+"px",a.style.right="auto",a.style.bottom="auto"},v=()=>{typeof E=="function"&&(clearTimeout(N),N=setTimeout(E,n))},y=()=>{r.setAttribute("aria-expanded",k?"false":"true"),t.getToggleTitle&&(r.title=t.getToggleTitle(k));const $=r.querySelector("[data-float-chevron]");$&&($.textContent=k?"v":"^")},W=()=>{d()&&(T=f(T.x,T.y),u())},O=$=>{k=$,a.classList.toggle(R,k),sessionStorage.setItem(M,k?"true":"false"),y(),v(),requestAnimationFrame(W),setTimeout(W,260)},K=()=>{l.classList.add(D),a.classList.add("lab-controls-float"),T=f(T.x,T.y),u(),i&&(i.style.display="")},_=()=>{l.classList.remove(D),a.classList.remove("lab-controls-float"),a.style.left="",a.style.top="",a.style.right="",a.style.bottom="",i&&(i.style.display="none")},B=()=>{d()?(K(),T=f(T.x,T.y),u()):_(),v()};if(a.classList.toggle(R,k),y(),B(),r.addEventListener("click",$=>{$.stopPropagation(),O(!k)}),h){h.addEventListener("pointerdown",H=>{d()&&(r.contains(H.target)||(H.preventDefault(),A={pointerId:H.pointerId,startX:H.clientX,startY:H.clientY,originX:T.x,originY:T.y},h.setPointerCapture(H.pointerId),h.classList.add("is-dragging")))}),h.addEventListener("pointermove",H=>{!A||A.pointerId!==H.pointerId||(T=f(A.originX+H.clientX-A.startX,A.originY+H.clientY-A.startY),u())});const $=H=>{if(!(!A||A.pointerId!==H.pointerId)){h.releasePointerCapture(H.pointerId),h.classList.remove("is-dragging");try{localStorage.setItem(M+":pos",JSON.stringify(T))}catch{}A=null,v()}};h.addEventListener("pointerup",$),h.addEventListener("pointercancel",$)}return window.addEventListener("resize",B),{setCollapsed:O,refreshMode:B,isCollapsed:()=>k}}function Me(t,o={}){dr();const s=o.type||"liquid";let n=t("tools.thermometerLab.title"),l=t("tools.thermometerLab.subtitle");o.type==="liquid"?(n=t("tools.thermometerLab.liquid.title"),l=t("tools.thermometerLab.liquid.subtitle")||t("tools.thermometerLab.subtitle")):o.type==="resistance"?(n=t("tools.thermometerLab.resistance.title"),l=t("tools.thermometerLab.resistance.subtitle")||t("tools.thermometerLab.subtitle")):o.type==="thermistor"&&(n=t("tools.thermometerLab.thermistor.title"),l=t("tools.thermometerLab.thermistor.subtitle")||t("tools.thermometerLab.subtitle"));const a=document.createElement("div");a.className="tl-wrap",a.innerHTML=`
    <div class="tl-head">
      <h2 class="tl-title">${n}</h2>
      <div class="tl-sub">${l}</div>
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
        <div class="tl-bath-bar tl-bath-bar--under-graph">
          <div class="tl-bath-bar-top">
            <div class="tl-beaker-overlay">
              <span>Liquid: <b id="tl-bath-state">Water</b></span>
              <span><b class="tl-temp-badge" id="tl-bath-temp-display">25.0°C</b></span>
            </div>
            <div class="tl-bath-slider-wrap">
              <div class="tl-lr">
                <span>T<sub>bath</sub></span>
                <span class="tl-badge tl-lr-value tl-val-bath-temp" id="tl-val-bath-temp">25.0 °C</span>
              </div>
              <input type="range" id="tl-bath-temp-slider" min="0" max="200" step="0.5" value="25.0">
            </div>
          </div>
          <div class="tl-btn-group">
            <button class="tl-btn tl-preset-btn" id="tl-btn-preset-ice">Ice 0°C</button>
            <button class="tl-btn tl-preset-btn" id="tl-btn-preset-room">Room 25°C</button>
            <button class="tl-btn tl-preset-btn" id="tl-btn-preset-steam">Steam 100°C</button>
            <button class="tl-btn tl-preset-btn" id="tl-btn-preset-oil">Oil 150°C</button>
          </div>
        </div>
      </div>

      <!-- DOCKED LIVE CALCULATIONS -->
      <div class="tl-live-calculations">
        <div class="tl-live-tab active" id="tl-live-liquid">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
            <div class="tl-worked-solution tl-dual-direction">
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction A: Length to Temperature (L<sub>T</sub> &rarr; T)</div>
                <div id="tl-svg-formula-liquid" class="tl-math-formula" style="height:45px; margin:4px 0"></div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current reading <b class="tl-live-value" id="tl-live-liquid-lt">5.50 cm</b>:</p>
                <div id="tl-svg-formula-liquid-sub" class="tl-math-formula" style="height:100px; margin:4px 0"></div>
              </div>
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Length (T &rarr; L<sub>T</sub>)</div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current bath temperature <b class="tl-live-value" id="tl-live-liquid-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-l" class="tl-math-formula" style="font-size:0.85rem;height:110px; margin:4px 0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tl-live-tab" id="tl-live-resistance">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-cyan)">Live calibration formula (Dual-Directional Realtime Calculations)</div>
            <div class="tl-worked-solution tl-dual-direction">
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction A: Resistance to Temperature (R<sub>T</sub> &rarr; T)</div>
                <div id="tl-svg-formula-resistance" class="tl-math-formula" style="height:45px; margin:4px 0"></div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current resistance <b class="tl-live-value" id="tl-live-resistance-rt">5.30 Ω</b>:</p>
                <div id="tl-svg-formula-resistance-sub" class="tl-math-formula" style="height:100px; margin:4px 0"></div>
              </div>
              <div class="tl-direction-col">
                <div class="tl-info-label" style="font-size:0.75rem;color:var(--tl-cyan);margin-bottom:4px">Direction B: Temperature to Resistance (T &rarr; R<sub>T</sub>)</div>
                <p style="margin:2px 0; font-size:0.85rem">Substitute current bath temperature <b class="tl-live-value" id="tl-live-resistance-t-sub">25.0°C</b>:</p>
                <div id="tl-svg-formula-t-to-r" class="tl-math-formula" style="font-size:0.85rem;height:110px; margin:4px 0"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tl-live-tab" id="tl-live-thermistor">
          <div class="tl-controls-steps">
            <div class="tl-info-label" style="margin-top:0;font-size:0.8rem;color:var(--tl-green)">${t("tools.thermometerLab.thermistor.liveBetaLabel")}</div>
            <div class="tl-worked-solution" style="background-color:rgba(16,185,129,0.05);border-left-color:var(--tl-green)">
              <div id="tl-svg-formula-thermistor" class="tl-math-formula" style="font-size:0.85rem"></div>
              <p style="font-size:0.85rem">Substitute current resistance <b class="tl-live-value" id="tl-live-thermistor-rt">10.00 kΩ</b>:</p>
              <div id="tl-svg-formula-thermistor-sub" class="tl-math-formula" style="font-size:0.85rem"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- FLOATING CONTROLS & SOLVERS -->
      <div class="tl-controls controls-collapsed">
        <div class="tl-controls-float-bar">
          <button type="button" class="tl-controls-drag-handle" id="tl-controls-drag" aria-label="${t("tools.floatingControls.dragHint")}" title="${t("tools.floatingControls.dragHint")}">⋮⋮</button>
          <button type="button" class="tl-controls-toggle" id="tl-controls-toggle" aria-expanded="false">
            <span data-float-chevron>▾</span>
            <span>${t("tools.thermometerLab.paramSettings")}</span>
          </button>
        </div>
        <div class="tl-controls-body">

        <!-- TAB 1: LIQUID-IN-GLASS -->
        <div class="tl-tab-content active" id="tl-tab-liquid">
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
  `;const r={liquidType:"mercury",thermometerType:s,bulbVolume:200,wallThickness:.5,capillaryBore:.3,liquidL0:3,liquidL100:13,resistanceR0:5,resistanceR100:6.2,thermistorR25:10,thermistorBeta:3500,bathTemp:25,thermometerTemp:25,bubbles:[],iceCubes:[],heatWaves:[],steamParticles:[],currentLength:5.5,currentResistance:5.3,currentThermistorR:10,lastTimestamp:0,showLabels:!0},i=460,G=340,M=80,E=800,I=560;function R(){const e={left:110,top:48,right:30,bottom:65};return{gx:e.left,gy:e.top,gw:E-e.left-e.right,gh:I-e.top-e.bottom,tickFont:`bold ${Math.round(E*.024)}px Arial`,axisFont:`bold ${Math.round(E*.026)}px Arial`,dotR:8,yLabelX:e.left-75,xLabelY:I-e.bottom+32}}function D(){return{minT:0,maxT:200,tickStep:25}}function h(e,c,p,b,m){return b+(e-c)/(p-c)*m}function k(e,c,p,b,m){return b+m-(e-c)/(p-c)*m}function T(e,c,p,b,m,z,x=null){const{gx:w,gy:q,gw:L,gh:S,tickFont:F,axisFont:j,yLabelX:C,xLabelY:te}=c;e.strokeStyle="#1e1e24",e.lineWidth=1;for(const P of z){const Y=k(P.value,P.min,P.max,q,S);e.beginPath(),e.moveTo(w,Y),e.lineTo(w+L,Y),e.stroke()}for(let P=p;P<=b+.01;P+=m){const Y=h(P,p,b,w,L);e.beginPath(),e.moveTo(Y,q),e.lineTo(Y,q+S),e.stroke()}e.strokeStyle="#4b5563",e.lineWidth=2.5,e.beginPath(),e.moveTo(w,q),e.lineTo(w,q+S),e.lineTo(w+L,q+S),e.stroke(),e.fillStyle="#e4e4e7",e.font=F,e.textAlign="right",e.textBaseline="middle";for(const P of z){const Y=k(P.value,P.min,P.max,q,S);e.fillText(P.label,w-15,Y)}e.textAlign="center",e.textBaseline="top";for(let P=p;P<=b+.01;P+=m){if(x!=null&&Math.abs(P-x)<.25)continue;const Y=h(P,p,b,w,L);e.fillText(`${Math.round(P)}`,Y,q+S+10)}return{gx:w,gy:q,gw:L,gh:S,axisFont:j,yLabelX:C,xLabelY:te}}function A(e,c){const p=c-e,b=p<=8?1:p<=14?2:5,m=[],z=Math.ceil(e/b)*b;for(let x=z;x<=c+.001;x+=b)m.push({value:x,label:x%1===0?`${x.toFixed(0)}`:`${x.toFixed(1)}`,min:e,max:c});return m}function N(){const{maxT:e}=D(),c=d(0),p=d(e),b=p-c,m=Math.max(1,b*.1),z=Math.max(0,Math.round((c-m)*10)/10),x=Math.round((p+m)*10)/10;return{minL:z,maxL:x}}function d(e){return r.liquidL0+(r.liquidL100-r.liquidL0)/100*e}function f(){const{maxT:e}=D(),c=u(0),p=u(e),b=p-c,m=Math.max(.2,b*.1),z=Math.max(0,c-m),x=p+m,w=b<=2?.5:b<=4?1:2,q=[],L=Math.ceil(z/w)*w;for(let S=L;S<=x+.001;S+=w)q.push({value:S,label:S.toFixed(1),min:z,max:x});return{minR:z,maxR:x,ticks:q}}function u(e){return r.resistanceR0+(r.resistanceR100-r.resistanceR0)/100*e}function v(e){const{maxT:c}=e;let p=r.thermistorR25;for(let x=0;x<=c;x+=5){const w=x+273.15,q=r.thermistorR25*Math.exp(r.thermistorBeta*(1/w-1/298.15));p=Math.max(p,q)}p=Math.ceil(p*1.08*10)/10;const b=0,m=p<=12?2:4,z=[];for(let x=0;x<=p+.001;x+=m)z.push({value:x,label:x.toFixed(0),min:b,max:p});return{minR:b,maxR:p,ticks:z}}const y=a.querySelector("#tl-thermometerCanvas"),W=y.getContext("2d"),O=a.querySelector("#tl-graphCanvas"),K=O.getContext("2d"),_=window.devicePixelRatio||1;y.width=i*_,y.height=G*_,W.scale(_,_),O.width=E*_,O.height=I*_,K.scale(_,_);function B(){r.iceCubes=[];for(let e=0;e<5;e++)r.iceCubes.push({x:60+Math.random()*120,y:200+Math.random()*15,size:12+Math.random()*8,angle:Math.random()*Math.PI,speedX:(Math.random()-.5)*.15,speedY:(Math.random()-.5)*.15});r.bubbles=[];for(let e=0;e<20;e++)r.bubbles.push({x:60+Math.random()*120,y:190+Math.random()*70,r:1+Math.random()*3.5,speedY:.8+Math.random()*1.5,phase:Math.random()*Math.PI*2,wobbleSpeed:.08+Math.random()*.08});r.heatWaves=[];for(let e=0;e<8;e++)r.heatWaves.push({x:65+Math.random()*110,y:190+Math.random()*60,length:15+Math.random()*15,speedY:.5+Math.random()*.6,opacity:.15+Math.random()*.25});r.steamParticles=[];for(let e=0;e<12;e++)r.steamParticles.push({x:60+Math.random()*120,y:175+Math.random()*10,r:2+Math.random()*4,vx:(Math.random()-.5)*.3,vy:-.4-Math.random()*.6,alpha:.2+Math.random()*.4})}const $=200,H=11;function X(){const e=Math.pow(r.bulbVolume/$,.3333333333333333);return H*e}function ee(){if(r.thermometerType==="resistance"||r.thermometerType==="thermistor")return .35;const e=r.liquidType==="mercury"?1:8,c=.2+r.wallThickness*1.5,p=.4+r.bulbVolume*.003,b=1.35-r.capillaryBore*.45;return Math.max(.1,c*p*b*e*.15)}function V(e){r.bathTemp<=8&&r.iceCubes.forEach(c=>{c.x+=c.speedX,c.y+=c.speedY,(c.x<65||c.x>175)&&(c.speedX*=-1),(c.y<195||c.y>210)&&(c.speedY*=-1)}),r.bathTemp>35&&r.heatWaves.forEach(c=>{c.y-=c.speedY*(1+r.bathTemp/100),c.y<185&&(c.y=265,c.x=65+Math.random()*110)}),r.bathTemp>=80&&r.bubbles.forEach(c=>{c.y-=c.speedY*(1+(r.bathTemp-80)/40),c.phase+=c.wobbleSpeed,c.x+=Math.sin(c.phase)*.3,c.y<185&&(c.y=260+Math.random()*10,c.x=60+Math.random()*120)}),r.bathTemp>=95&&r.steamParticles.forEach(c=>{c.x+=c.vx,c.y+=c.vy,c.alpha-=.005,(c.alpha<=0||c.y<130)&&(c.x=60+Math.random()*120,c.y=175+Math.random()*5,c.alpha=.2+Math.random()*.4)})}function Q(e){let x=59,w=130,q=246;if(r.bathTemp<25){const C=r.bathTemp/25;x=Math.round(180-C*121),w=Math.round(210-C*80),q=Math.round(250-C*4)}else{const C=Math.min(1,(r.bathTemp-25)/125);x=Math.round(59+C*180),w=Math.round(130-C*100),q=Math.round(246-C*190)}if(r.bathTemp>40){const C=Math.min(1,(r.bathTemp-40)/100),te=Date.now()*.02;e.fillStyle=`rgba(239, 68, 68, ${C*.25})`,e.beginPath(),e.roundRect(45,284,150,10,4),e.fill(),e.fillStyle="rgba(249, 115, 22, 0.85)",e.beginPath(),e.moveTo(55+130/2-25,284);for(let P=-25;P<=25;P+=6){const Y=C*(12+Math.sin(P*.4+te)*5);e.lineTo(55+130/2+P,284-Y)}e.lineTo(55+130/2+25,284),e.closePath(),e.fill()}e.strokeStyle="#4b5563",e.lineWidth=2,e.fillStyle="#121214",e.beginPath(),e.roundRect(55,180,130,100,[0,0,10,10]),e.fill();const L=e.createLinearGradient(55,190,55,280);L.addColorStop(0,`rgba(${x}, ${w}, ${q}, 0.25)`),L.addColorStop(1,`rgba(${x}, ${w}, ${q}, 0.55)`),e.fillStyle=L,e.beginPath(),e.moveTo(55,190);const S=r.bathTemp>=80?2:.5,F=r.bathTemp>=80?.09:.03,j=Date.now()*F;for(let C=55;C<=185;C+=5){const te=190+Math.sin(C*.15+j)*S;e.lineTo(C,te)}e.lineTo(185,280),e.lineTo(55,280),e.closePath(),e.fill(),r.bathTemp>35&&(e.strokeStyle=`rgba(239, 68, 68, ${Math.min(.5,(r.bathTemp-35)/120)})`,e.lineWidth=1.2,r.heatWaves.forEach(C=>{e.beginPath(),e.moveTo(C.x,C.y),e.quadraticCurveTo(C.x+Math.sin(C.y*.06)*5,C.y-C.length/2,C.x,C.y-C.length),e.stroke()})),r.bathTemp<=8&&(e.fillStyle="rgba(224, 242, 254, 0.55)",e.strokeStyle="rgba(186, 230, 253, 0.8)",e.lineWidth=1,r.iceCubes.forEach(C=>{e.save(),e.translate(C.x,C.y),e.rotate(C.angle),e.beginPath(),e.roundRect(-C.size/2,-C.size/2,C.size,C.size,3),e.fill(),e.stroke(),e.restore()})),r.bathTemp>=80&&(e.fillStyle="rgba(255, 255, 255, 0.4)",e.strokeStyle="rgba(255, 255, 255, 0.65)",e.lineWidth=.6,r.bubbles.forEach(C=>{e.beginPath(),e.arc(C.x,C.y,C.r,0,Math.PI*2),e.fill(),e.stroke()})),r.bathTemp>=95&&r.steamParticles.forEach(C=>{e.fillStyle=`rgba(255, 255, 255, ${C.alpha})`,e.beginPath(),e.arc(C.x,C.y,C.r,0,Math.PI*2),e.fill()}),e.strokeStyle="#9ca3af",e.lineWidth=3.5,e.beginPath(),e.moveTo(54,180),e.lineTo(54,272),e.arcTo(54,281,65,281,8),e.lineTo(175,281),e.arcTo(186,281,186,272,8),e.lineTo(186,180),e.stroke(),e.strokeStyle="rgba(255, 255, 255, 0.4)",e.lineWidth=1.5,e.beginPath(),e.moveTo(59,190),e.lineTo(59,270),e.stroke()}function Z(e,c,p,b,m,z,x="left"){if(!r.showLabels)return;e.strokeStyle="rgba(6, 182, 212, 0.7)",e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(c,p),e.lineTo(b,m),e.stroke(),e.setLineDash([]),e.fillStyle="#06b6d4",e.beginPath(),e.arc(c,p,3,0,Math.PI*2),e.fill(),e.font="bold 9px system-ui, sans-serif";const q=e.measureText(z).width+10,L=16,S=x==="left"?b:b-q,F=m-L/2;e.fillStyle="rgba(21, 21, 24, 0.9)",e.strokeStyle="#06b6d4",e.lineWidth=1,e.beginPath(),e.roundRect(S,F,q,L,4),e.fill(),e.stroke(),e.fillStyle="#f4f4f5",e.textAlign="center",e.textBaseline="middle",e.fillText(z,S+q/2,F+L/2+.5)}function ne(e){const b=X(),m=250+Math.max(0,b-H)*.35,z=m-b-1,x=10+r.wallThickness*8,w=120-x/2,q=120+x/2,L=e.createLinearGradient(w,20,q,20);L.addColorStop(0,"rgba(209, 213, 219, 0.85)"),L.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),L.addColorStop(.5,"rgba(243, 244, 246, 0.15)"),L.addColorStop(.8,"rgba(255, 255, 255, 0.95)"),L.addColorStop(1,"rgba(156, 163, 175, 0.9)"),e.fillStyle=L,e.strokeStyle="rgba(156, 163, 175, 0.8)",e.lineWidth=1,e.beginPath(),e.moveTo(w,z),e.lineTo(w,25),e.arcTo(w,20,w+5,20,5),e.arcTo(q,20,q,25,5),e.lineTo(q,z),e.closePath(),e.fill(),e.stroke();const S=e.createRadialGradient(120-b*.2,m-b*.2,b*.1,120,m,b);S.addColorStop(0,"rgba(255, 255, 255, 0.8)"),S.addColorStop(1,"rgba(156, 163, 175, 0.35)"),e.fillStyle=S,e.strokeStyle="#6b7280",e.lineWidth=.8+r.wallThickness*.6,e.beginPath(),e.arc(120,m,b+.5+r.wallThickness*.5,0,Math.PI*2),e.fill(),e.stroke();const F=Math.min(x*.72,.8+r.capillaryBore*4.5);e.fillStyle="#0a0a0c",e.fillRect(120-F/2,28,F,z-20-8);const j=r.liquidType==="mercury",C=j?"#a1a1aa":"#ef4444",te=j?"#f4f4f5":"#fee2e2",P=210,Y=220,le=(P-40)/Y,ae=P-Math.min(Y,r.thermometerTemp)*le;e.fillStyle=C,e.fillRect(120-F/2,ae,F,z-ae),e.beginPath(),e.ellipse(120,ae,F/2,1.5,0,0,Math.PI*2),e.fill(),e.fillStyle=te,e.fillRect(120-F/6,ae,F/3,z-ae);const oe=b*.9,re=e.createRadialGradient(120-oe*.2,m-oe*.2,oe*.1,120,m,oe);j?(re.addColorStop(0,"#f4f4f5"),re.addColorStop(.3,"#d4d4d8"),re.addColorStop(.8,"#71717a"),re.addColorStop(1,"#3f3f46")):(re.addColorStop(0,"#fee2e2"),re.addColorStop(.2,"#fca5a5"),re.addColorStop(.7,"#ef4444"),re.addColorStop(1,"#991b1b")),e.fillStyle=re,e.beginPath(),e.arc(120,m,oe,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(161, 161, 170, 0.6)",e.lineWidth=.5,e.font="6.5px Arial",e.fillStyle="#a1a1aa",e.textAlign="right",e.textBaseline="middle";for(let se=0;se<=200;se+=50){const ce=P-se*le;e.beginPath(),e.moveTo(w,ce),e.lineTo(w+4,ce),e.stroke(),e.fillText(`${se}°C`,w-22,ce+2.5)}r.showLabels&&(Z(e,w+1,80,10,50,t("tools.thermometerLab.labels.thinWall"),"left"),Z(e,120,ae,230,ae-15,t("tools.thermometerLab.labels.meniscus"),"left"),Z(e,120-F/2,130,10,130,t("tools.thermometerLab.labels.narrowBore"),"left"),Z(e,120,m,230,m+15,t("tools.thermometerLab.labels.largeBulb"),"left"))}function de(e){const x=e.createLinearGradient(115,20,125,20);x.addColorStop(0,"#71717a"),x.addColorStop(.3,"#f4f4f5"),x.addColorStop(.7,"#d4d4d8"),x.addColorStop(1,"#3f3f46"),e.fillStyle=x,e.strokeStyle="#4b5563",e.lineWidth=1,e.beginPath(),e.roundRect(115,20,10,225,[0,0,4,4]),e.fill(),e.stroke(),e.fillStyle="rgba(21, 21, 24, 0.8)",e.fillRect(117,200,6,40),e.strokeStyle="#e2e8f0",e.lineWidth=1.2,e.beginPath();let w=205;e.moveTo(118,w);for(let j=0;j<8;j++)w+=4,e.lineTo(122,w),w+=4,e.lineTo(118,w);e.stroke(),e.lineWidth=1.5,e.strokeStyle="#ef4444",e.beginPath(),e.moveTo(118,20),e.bezierCurveTo(110,5,200,30,245,60),e.stroke(),e.strokeStyle="#111827",e.beginPath(),e.moveTo(122,20),e.bezierCurveTo(130,8,210,45,245,75),e.stroke();const q=245,L=40,S=135,F=90;e.fillStyle="#18181b",e.strokeStyle="#6366f1",e.lineWidth=2.5,e.beginPath(),e.roundRect(q,L,S,F,10),e.fill(),e.stroke(),e.fillStyle="#022c22",e.beginPath(),e.roundRect(q+10,L+12,S-20,34,4),e.fill(),e.font='bold 17px "Courier New"',e.fillStyle="#10b981",e.textAlign="right",e.fillText(r.currentResistance.toFixed(2)+" Ω",q+S-16,L+34),e.font="6px Arial",e.fillStyle="#a7f3d0",e.textAlign="left",e.fillText("PLATINUM RTD METER",q+14,L+21),r.showLabels&&(Z(e,116,100,10,70,t("tools.thermometerLab.labels.metalSheath"),"left"),Z(e,120,225,230,205,t("tools.thermometerLab.labels.platinumCoil"),"left"))}function ge(e){e.strokeStyle="#111827",e.lineWidth=1.2,e.beginPath(),e.moveTo(118,20),e.lineTo(118,245),e.stroke(),e.beginPath(),e.moveTo(122,20),e.lineTo(122,245),e.stroke();const m=20,z=225,x=12,w=120-x/2,q=e.createLinearGradient(w,m,w+x,m);q.addColorStop(0,"rgba(229, 231, 235, 0.4)"),q.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),q.addColorStop(.7,"rgba(243, 244, 246, 0.5)"),q.addColorStop(1,"rgba(209, 213, 219, 0.6)"),e.fillStyle=q,e.strokeStyle="rgba(156, 163, 175, 0.6)",e.lineWidth=.8,e.beginPath(),e.roundRect(w,m,x,z-m,[0,0,3,3]),e.fill(),e.stroke();const L=7,S=e.createRadialGradient(120-L*.2,245-L*.2,L*.1,120,245,L);S.addColorStop(0,"#6b7280"),S.addColorStop(.7,"#1f2937"),S.addColorStop(1,"#09090b"),e.fillStyle=S,e.strokeStyle="#030712",e.lineWidth=1.2,e.beginPath(),e.arc(120,245,L,0,Math.PI*2),e.fill(),e.stroke(),e.lineWidth=1.5,e.strokeStyle="#ef4444",e.beginPath(),e.moveTo(118,20),e.bezierCurveTo(110,5,200,30,245,60),e.stroke(),e.strokeStyle="#111827",e.beginPath(),e.moveTo(122,20),e.bezierCurveTo(130,8,210,45,245,75),e.stroke();const F=245,j=40,C=135,te=90;e.fillStyle="#18181b",e.strokeStyle="#10b981",e.lineWidth=2.5,e.beginPath(),e.roundRect(F,j,C,te,10),e.fill(),e.stroke(),e.fillStyle="#022c22",e.beginPath(),e.roundRect(F+10,j+12,C-20,34,4),e.fill(),e.font='bold 17px "Courier New"',e.fillStyle="#34d399",e.textAlign="right",e.fillText(r.currentThermistorR.toFixed(2)+" kΩ",F+C-16,j+34),e.font="5px Arial",e.fillStyle="#a7f3d0",e.textAlign="left",e.fillText(t("tools.thermometerLab.thermistor.meterLabelLine1"),F+14,j+52),e.fillText(t("tools.thermometerLab.thermistor.meterLabelLine2"),F+14,j+59),r.showLabels&&(Z(e,118,120,10,90,t("tools.thermometerLab.labels.leads"),"left"),Z(e,120,245,230,225,t("tools.thermometerLab.labels.semiconductorBead"),"left"))}function he(e,c,p,b,m,z,x,w,q){const{gx:L,gy:S,gw:F,gh:j,tickFont:C}=c;e.strokeStyle="rgba(255, 255, 255, 0.2)",e.lineWidth=1,e.setLineDash([4,4]),e.beginPath(),e.moveTo(p,b),e.lineTo(p,S+j),e.stroke(),e.beginPath(),e.moveTo(p,b),e.lineTo(L,b),e.stroke(),e.setLineDash([]);const te=S+j+10;e.font=C,e.textAlign="center",e.textBaseline="top";const P=`${m.toFixed(1)}${x}`,Y=e.measureText(P).width+10,ue=18;e.fillStyle=q,e.beginPath(),e.roundRect(p-Y/2,te-2,Y,ue,3),e.fill(),e.fillStyle="#000",e.fillText(P,p,te),e.textAlign="right",e.textBaseline="middle";const le=`${z.toFixed(2)} ${w}`,ae=e.measureText(le).width+10;e.fillStyle=q,e.beginPath(),e.roundRect(L-ae-2,b-7,ae,15,3),e.fill(),e.fillStyle="#000",e.fillText(le,L-7,b)}function U(e){const c=R(),{minL:p,maxL:b}=N(),{minT:m,maxT:z,tickStep:x}=D(),w=A(p,b),q=T(e,c,m,z,x,w,r.thermometerTemp),{gx:L,gy:S,gw:F,gh:j,axisFont:C,yLabelX:te,xLabelY:P,dotR:Y}={...c,...q};e.save(),e.translate(te,S+j/2),e.rotate(-Math.PI/2),e.font=C,e.fillStyle="#e4e4e7",e.fillText("Length of liquid column / cm",0,0),e.restore(),e.font=C,e.fillStyle="#e4e4e7",e.textAlign="center",e.fillText("temperature / °C",L+F/2,P);const ue=z,le=h(0,m,z,L,F),ae=k(d(0),p,b,S,j),oe=h(ue,m,z,L,F),re=k(d(ue),p,b,S,j);e.strokeStyle="#ef4444",e.lineWidth=3,e.beginPath(),e.moveTo(le,ae),e.lineTo(oe,re),e.stroke();const se=r.thermometerTemp,ce=r.currentLength;if(se>=m&&se<=z){const fe=h(se,m,z,L,F),be=k(ce,p,b,S,j);he(e,c,fe,be,se,ce,"°C","cm","#ef4444"),e.shadowColor="#ef4444",e.shadowBlur=10,e.fillStyle="#ef4444",e.beginPath(),e.arc(fe,be,Y,0,Math.PI*2),e.fill(),e.shadowBlur=0}}function pe(e){const c=R(),{minR:p,maxR:b,ticks:m}=f(),z=D(),x=T(e,c,z.minT,z.maxT,z.tickStep,m,r.thermometerTemp),{gx:w,gy:q,gw:L,gh:S,axisFont:F,yLabelX:j,xLabelY:C,dotR:te}={...c,...x};e.save(),e.translate(j,q+S/2),e.rotate(-Math.PI/2),e.font=F,e.fillStyle="#e4e4e7",e.fillText("Resistance of platinum / Ω",0,0),e.restore(),e.font=F,e.fillStyle="#e4e4e7",e.textAlign="center",e.fillText("temperature / °C",w+L/2,C);const{minT:P,maxT:Y}=z,ue=Y,le=h(0,P,Y,w,L),ae=k(u(0),p,b,q,S),oe=h(ue,P,Y,w,L),re=k(u(ue),p,b,q,S);e.strokeStyle="#6366f1",e.lineWidth=3,e.beginPath(),e.moveTo(le,ae),e.lineTo(oe,re),e.stroke();const se=r.thermometerTemp,ce=r.currentResistance;if(se>=P&&se<=Y){const fe=h(se,P,Y,w,L),be=k(ce,p,b,q,S);he(e,c,fe,be,se,ce,"°C","Ω","#6366f1"),e.shadowColor="#6366f1",e.shadowBlur=10,e.fillStyle="#6366f1",e.beginPath(),e.arc(fe,be,te,0,Math.PI*2),e.fill(),e.shadowBlur=0}}function gt(e){const c=R(),p=D(),{minR:b,maxR:m,ticks:z}=v(p),x=T(e,c,p.minT,p.maxT,p.tickStep,z,r.thermometerTemp),{gx:w,gy:q,gw:L,gh:S,axisFont:F,yLabelX:j,xLabelY:C,dotR:te}={...c,...x},{minT:P,maxT:Y}=p;e.save(),e.translate(j,q+S/2),e.rotate(-Math.PI/2),e.font=F,e.fillStyle="#e4e4e7",e.fillText("Resistance of thermistor / kΩ",0,0),e.restore(),e.font=F,e.fillStyle="#e4e4e7",e.textAlign="center",e.fillText("temperature / °C",w+L/2,C),e.strokeStyle="#10b981",e.lineWidth=3,e.beginPath();let ue=!1;for(let oe=P;oe<=Y;oe+=1){const re=oe+273.15,se=r.thermistorR25*Math.exp(r.thermistorBeta*(1/re-1/298.15)),ce=h(oe,P,Y,w,L),fe=k(Math.min(m,se),b,m,q,S);fe>=q&&fe<=q+S&&(ue?e.lineTo(ce,fe):(e.moveTo(ce,fe),ue=!0))}e.stroke();const le=r.thermometerTemp,ae=r.currentThermistorR;if(le>=P&&le<=Y){const oe=h(le,P,Y,w,L),re=k(Math.min(m,ae),b,m,q,S);he(e,c,oe,re,le,ae,"°C","kΩ","#10b981"),e.shadowColor="#10b981",e.shadowBlur=10,e.fillStyle="#10b981",e.beginPath(),e.arc(oe,re,te,0,Math.PI*2),e.fill(),e.shadowBlur=0}}function Re(){W.clearRect(0,0,i,G),K.clearRect(0,0,E,I),W.save(),W.translate(M,0),Q(W),r.thermometerType==="liquid"?ne(W):r.thermometerType==="resistance"?de(W):ge(W),W.restore(),r.thermometerType==="liquid"?U(K):r.thermometerType==="resistance"?pe(K):gt(K)}function ht(){const e=a.querySelector("#tl-svg-formula-liquid");e&&(e.innerHTML=`
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
      `);const c=a.querySelector("#tl-svg-formula-liquid-sub");if(c){const x=r.liquidL100-r.liquidL0,w=r.currentLength-r.liquidL0;c.innerHTML=`
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
          <text x="160" y="72" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${w.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${x.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${r.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const p=a.querySelector("#tl-svg-formula-resistance");p&&(p.innerHTML=`
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
      `);const b=a.querySelector("#tl-svg-formula-resistance-sub");if(b){const x=r.resistanceR100-r.resistanceR0,w=r.currentResistance-r.resistanceR0;b.innerHTML=`
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
          <text x="160" y="72" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="11" text-anchor="middle">${w.toFixed(2)} &times; 100</text>
          <text x="160" y="94" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">${x.toFixed(1)}</text>
          
          <text x="215" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" font-size="15" class="tl-final-ans">&rArr; T = ${r.thermometerTemp.toFixed(1)}°C</text>
        </svg>
      `}const m=a.querySelector("#tl-svg-formula-thermistor");m&&(m.innerHTML=`
        <svg height="50" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="23" x2="220" y2="23" stroke="#fff" stroke-width="1.5" />
          <text x="130" y="15" fill="#fff" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">1</text>
          <text x="130" y="38" fill="#fff" font-family="Cambria, Georgia, serif" font-size="11" text-anchor="middle">(1/&beta;) &bull; ln(R<tspan dy="2" font-size="8">T</tspan><tspan dy="-2">/R</tspan><tspan dy="2" font-size="8">25</tspan><tspan dy="-2">) + 1/298.15</tspan></text>
          <text x="230" y="28" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">- 273.15</text>
        </svg>
      `);const z=a.querySelector("#tl-svg-formula-thermistor-sub");if(z){const x=r.thermometerTemp+273.15;z.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            T<tspan dy="3" font-size="10">K</tspan><tspan dy="-3" fill="#10b981" font-weight="bold"> = ${x.toFixed(2)} K</tspan>
            <tspan fill="#fff"> &rArr; T = </tspan>
            <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${r.thermometerTemp.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `}}function mt(){const e=a.querySelector("#tl-faulty-svg-container");if(!e)return;const{cf:c,cu:p,interval:b}=Ie(),m=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,z=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,x=a.querySelector("#tl-pane-q10a").classList.contains("active"),w=x?(m-c)/b*100:z,q=x?m:z/100*b+c,S=(F=>130-F/100*80)(w);e.innerHTML=`
      <svg width="100%" height="100%" viewBox="0 0 340 180" style="background:transparent; overflow:visible;">
        <!-- Left Scale: True Scale -->
        <g transform="translate(0, 0)">
          <!-- Glass Tube -->
          <rect x="80" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="86" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="84" y="${S}" width="4" height="${144-S}" fill="#3b82f6" />
          <circle cx="86" cy="144" r="8" fill="#3b82f6" />
          
          <!-- Ticks -->
          <!-- Ice Point 0°C -->
          <line x1="70" y1="130" x2="78" y2="130" stroke="#3b82f6" stroke-width="1.5" />
          <text x="65" y="133" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">0°C</text>
          
          <!-- Steam Point 100°C -->
          <line x1="70" y1="50" x2="78" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="65" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">100°C</text>

          <!-- Current Point -->
          <text x="65" y="${S+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="end">${w.toFixed(1)}°C</text>

          <text x="86" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${t("tools.thermometerLab.faulty.trueScale")}</text>
        </g>

        <!-- Right Scale: Faulty Scale -->
        <g transform="translate(130, 0)">
          <!-- Glass Tube -->
          <rect x="100" y="25" width="12" height="115" rx="6" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Bulb -->
          <circle cx="106" cy="144" r="10" fill="rgba(255,255,255,0.05)" stroke="#4b5563" stroke-width="1" />
          <!-- Liquid Core -->
          <rect x="104" y="${S}" width="4" height="${144-S}" fill="#f59e0b" />
          <circle cx="106" cy="144" r="8" fill="#f59e0b" />
          
          <!-- Ticks -->
          <!-- Faulty Ice Point Cf -->
          <line x1="112" y1="130" x2="120" y2="130" stroke="#f59e0b" stroke-width="1.5" />
          <text x="125" y="133" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">f</tspan><tspan dy="-3"> = ${c.toFixed(1)}°C</tspan></text>
          
          <!-- Faulty Steam Point Cu -->
          <line x1="112" y1="50" x2="120" y2="50" stroke="#ef4444" stroke-width="1.5" />
          <text x="125" y="53" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="start">C<tspan dy="3" font-size="7">u</tspan><tspan dy="-3"> = ${p.toFixed(1)}°C</tspan></text>

          <!-- Current Faulty Point -->
          <text x="125" y="${S+3}" fill="#34d399" font-size="10" font-weight="bold" text-anchor="start">C = ${q.toFixed(1)}°C</text>

          <text x="106" y="170" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">${t("tools.thermometerLab.faulty.faultyScale")}</text>
        </g>

        <!-- Connecting Ratio Indicator Line -->
        <line x1="86" y1="${S}" x2="236" y2="${S}" stroke="#34d399" stroke-dasharray="3,3" stroke-width="1.5" />
        <circle cx="86" cy="${S}" r="3" fill="#34d399" />
        <circle cx="236" cy="${S}" r="3" fill="#34d399" />
      </svg>
    `}function pt(e){a.querySelector("#tl-bath-temp-display").innerHTML=r.bathTemp.toFixed(1)+"°C",a.querySelector("#tl-val-bath-temp").innerHTML=r.bathTemp.toFixed(1)+" °C";const c=a.querySelector("#tl-bath-state");r.bathTemp<=0?c.textContent="Melting Ice Bath":r.bathTemp>=100?c.textContent="Boiling Water/Steam":r.bathTemp===150?c.textContent="Hot Cooking Oil":c.textContent="Liquid Water",a.querySelector("#tl-val-response-time").textContent=e.toFixed(2)+" s";const p=a.querySelector("#tl-alcohol-boiling-warning");r.thermometerType==="liquid"&&r.liquidType==="alcohol"&&r.bathTemp>=78?p.style.display="block":p.style.display="none",r.thermometerType==="liquid"?(a.querySelector("#tl-live-liquid-lt").textContent=r.currentLength.toFixed(2)+" cm",a.querySelector("#tl-live-liquid-t-sub").textContent=r.thermometerTemp.toFixed(1)+"°C"):r.thermometerType==="resistance"?(a.querySelector("#tl-live-resistance-rt").textContent=r.currentResistance.toFixed(2)+" Ω",a.querySelector("#tl-live-resistance-t-sub").textContent=r.thermometerTemp.toFixed(1)+"°C"):a.querySelector("#tl-live-thermistor-rt").textContent=r.currentThermistorR.toFixed(2)+" kΩ",ht()}let xe=null;function We(e){r.lastTimestamp||(r.lastTimestamp=e);const c=(e-r.lastTimestamp)/1e3;r.lastTimestamp=e;const p=Math.min(c,.1),b=ee(),m=p/b*(r.bathTemp-r.thermometerTemp);r.thermometerTemp+=m,r.currentLength=r.liquidL0+(r.liquidL100-r.liquidL0)/100*r.thermometerTemp,r.currentResistance=r.resistanceR0+(r.resistanceR100-r.resistanceR0)/100*r.thermometerTemp;const z=r.thermometerTemp+273.15;r.currentThermistorR=r.thermistorR25*Math.exp(r.thermistorBeta*(1/z-1/298.15)),V(),Re(),pt(b),xe=requestAnimationFrame(We)}function Ie(){const e=parseFloat(a.querySelector("#tl-input-faulty-cf").value),c=parseFloat(a.querySelector("#tl-input-faulty-cu").value),p=Number.isFinite(e)?e:-1.5,b=Number.isFinite(c)?c:105,m=b-p;return{cf:p,cu:b,interval:m}}function Ce(e){const c=Math.round(e*100)/100;return c>=0?c.toFixed(1):`(${c.toFixed(1)})`}function me(){const{cf:e,cu:c,interval:p}=Ie(),b=a.querySelector("#tl-val-faulty-interval"),m=a.querySelector("#tl-faulty-error-a"),z=a.querySelector("#tl-faulty-error-b"),x=Math.abs(p)<.01;b.textContent=p.toFixed(1)+" °C";const w=a.querySelector("#tl-svg-formula-faulty-a"),q=a.querySelector("#tl-svg-formula-faulty-b");if(x){m.hidden=!1,m.textContent="C_u must differ from C_f (interval cannot be zero).",z.hidden=!1,z.textContent=m.textContent,w&&(w.innerHTML=""),q&&(q.innerHTML="");return}m.hidden=!0,z.hidden=!0;const L=parseFloat(a.querySelector("#tl-input-q10a-cm").value)||0,S=parseFloat(a.querySelector("#tl-input-q10b-t").value)||0,F=(L-e)/p*100,j=S/100*p+e;w&&(w.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">T =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${L.toFixed(1)} - ${Ce(e)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">${c.toFixed(1)} - ${Ce(e)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${F.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `),q&&(q.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">C =</text>
          <line x1="40" y1="21" x2="150" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="95" y="15" fill="#06b6d4" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="12" text-anchor="middle">${S.toFixed(1)} &times; ${p.toFixed(1)}</text>
          <text x="95" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="12" text-anchor="middle">100</text>
          <text x="158" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="14">
            + ${Ce(e)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${j.toFixed(2)}°C</tspan>
          </text>
        </svg>
      `),mt()}function Pe(){const e=parseFloat(a.querySelector("#tl-input-q11-r").value)||0,c=(e-r.resistanceR0)/(r.resistanceR100-r.resistanceR0)*100,p=a.querySelector("#tl-svg-formula-resistance-solver");p&&(p.innerHTML=`
        <svg height="45" width="280" style="background:transparent; overflow:visible;">
          <text x="10" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">&theta; =</text>
          <line x1="40" y1="21" x2="160" y2="21" stroke="#fff" stroke-width="1.5" />
          <text x="100" y="15" fill="#6366f1" font-family="Cambria, Georgia, serif" font-weight="bold" font-size="13" text-anchor="middle">${e.toFixed(1)} - ${r.resistanceR0.toFixed(1)}</text>
          <text x="100" y="36" fill="#a1a1aa" font-family="Cambria, Georgia, serif" font-size="13" text-anchor="middle">${r.resistanceR100.toFixed(1)} - ${r.resistanceR0.toFixed(1)}</text>
          <text x="170" y="26" fill="#fff" font-family="Cambria, Georgia, serif" font-size="15">
            &times; 100 = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${c.toFixed(1)}°C</tspan>
          </text>
        </svg>
      `)}function bt(){const e=r.thermometerTemp,c=r.liquidL100-r.liquidL0,p=r.liquidL0+c/100*e,b=a.querySelector("#tl-svg-formula-t-to-l");b&&(b.innerHTML=`
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
            <tspan fill="#a1a1aa">(${c.toFixed(1)} / 100)</tspan> &times; ${e.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${p.toFixed(2)} cm</tspan>
          </text>
        </svg>
      `)}function yt(){const e=r.thermometerTemp,c=r.resistanceR100-r.resistanceR0,p=r.resistanceR0+c/100*e,b=a.querySelector("#tl-svg-formula-t-to-r");b&&(b.innerHTML=`
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
            <tspan fill="#a1a1aa">(${c.toFixed(1)} / 100)</tspan> &times; ${e.toFixed(1)} = <tspan fill="#10b981" font-family="system-ui, sans-serif" font-weight="900" class="tl-final-ans">${p.toFixed(2)} Ω</tspan>
          </text>
        </svg>
      `)}function ie(){me(),Pe(),bt(),yt()}function ke(e,c){a.querySelector("#"+e).addEventListener("click",()=>{r.bathTemp=c,a.querySelector("#tl-bath-temp-slider").value=c,ie()})}function Ae(e){a.querySelectorAll(".tl-tab-btn").forEach(c=>{c.classList.toggle("active",c.getAttribute("data-tl-tab")===e)}),a.querySelectorAll(".tl-tab-content").forEach(c=>{c.classList.toggle("active",c.id==="tl-tab-"+e)}),a.querySelectorAll(".tl-live-tab").forEach(c=>{c.classList.toggle("active",c.id==="tl-live-"+e)}),r.thermometerType=e}function vt(){a.querySelectorAll(".tl-tab-btn").forEach(m=>{m.addEventListener("click",()=>{Ae(m.getAttribute("data-tl-tab")),ie()})}),a.querySelector("#tl-btn-toggle-labels").addEventListener("click",()=>{r.showLabels=!r.showLabels,a.querySelector("#tl-lbl-toggle-labels").textContent=r.showLabels?t("tools.thermometerLab.labels.hide"):t("tools.thermometerLab.labels.show")}),a.querySelector("#tl-bath-temp-slider").addEventListener("input",m=>{r.bathTemp=parseFloat(m.target.value),ie()}),ke("tl-btn-preset-ice",0),ke("tl-btn-preset-room",25),ke("tl-btn-preset-steam",100),ke("tl-btn-preset-oil",150),a.querySelector("#tl-card-mercury").addEventListener("click",()=>{r.liquidType="mercury",a.querySelector("#tl-card-mercury").className="tl-seg-btn active-mercury",a.querySelector("#tl-card-alcohol").className="tl-seg-btn",ie()}),a.querySelector("#tl-card-alcohol").addEventListener("click",()=>{r.liquidType="alcohol",a.querySelector("#tl-card-mercury").className="tl-seg-btn",a.querySelector("#tl-card-alcohol").className="tl-seg-btn active-alcohol",ie()}),a.querySelector("#tl-slider-bulb-vol").addEventListener("input",m=>{r.bulbVolume=parseFloat(m.target.value),a.querySelector("#tl-val-bulb-vol").textContent=r.bulbVolume+" mm³"}),a.querySelector("#tl-slider-wall-thick").addEventListener("input",m=>{r.wallThickness=parseFloat(m.target.value),a.querySelector("#tl-val-wall-thickness").textContent=r.wallThickness.toFixed(1)+" mm"}),a.querySelector("#tl-slider-capillary-bore").addEventListener("input",m=>{r.capillaryBore=parseFloat(m.target.value),a.querySelector("#tl-val-capillary-bore").textContent=r.capillaryBore.toFixed(2)+" mm"}),a.querySelector("#tl-slider-liquid-l0").addEventListener("input",m=>{r.liquidL0=parseFloat(m.target.value),a.querySelector("#tl-val-liquid-l0").textContent=r.liquidL0.toFixed(1)+" cm",ie()}),a.querySelector("#tl-slider-liquid-l100").addEventListener("input",m=>{r.liquidL100=parseFloat(m.target.value),a.querySelector("#tl-val-liquid-l100").textContent=r.liquidL100.toFixed(1)+" cm",ie()}),a.querySelector("#tl-slider-resistance-r0").addEventListener("input",m=>{r.resistanceR0=parseFloat(m.target.value),a.querySelector("#tl-val-resistance-r0").textContent=r.resistanceR0.toFixed(1)+" Ω",a.querySelector("#tl-spec-resistance-r0").textContent=r.resistanceR0.toFixed(1)+" Ω",ie()}),a.querySelector("#tl-slider-resistance-r100").addEventListener("input",m=>{r.resistanceR100=parseFloat(m.target.value),a.querySelector("#tl-val-resistance-r100").textContent=r.resistanceR100.toFixed(1)+" Ω",a.querySelector("#tl-spec-resistance-r100").textContent=r.resistanceR100.toFixed(1)+" Ω",ie()}),a.querySelector("#tl-slider-thermistor-r25").addEventListener("input",m=>{r.thermistorR25=parseFloat(m.target.value),a.querySelector("#tl-val-thermistor-r25").textContent=r.thermistorR25.toFixed(1)+" kΩ",a.querySelector("#tl-spec-thermistor-r25").textContent=r.thermistorR25.toFixed(1)+" kΩ",ie()}),a.querySelector("#tl-slider-thermistor-beta").addEventListener("input",m=>{r.thermistorBeta=parseFloat(m.target.value),a.querySelector("#tl-val-thermistor-beta").textContent=r.thermistorBeta+" K",a.querySelector("#tl-spec-thermistor-beta").textContent=r.thermistorBeta+" K",ie()}),a.querySelector("#tl-btn-solve-q10a").addEventListener("click",()=>{a.querySelector("#tl-btn-solve-q10a").classList.add("active"),a.querySelector("#tl-btn-solve-q10b").classList.remove("active"),a.querySelector("#tl-pane-q10a").classList.add("active"),a.querySelector("#tl-pane-q10b").classList.remove("active"),me()}),a.querySelector("#tl-btn-solve-q10b").addEventListener("click",()=>{a.querySelector("#tl-btn-solve-q10a").classList.remove("active"),a.querySelector("#tl-btn-solve-q10b").classList.add("active"),a.querySelector("#tl-pane-q10a").classList.remove("active"),a.querySelector("#tl-pane-q10b").classList.add("active"),me()}),a.querySelector("#tl-input-faulty-cf").addEventListener("input",me),a.querySelector("#tl-input-faulty-cu").addEventListener("input",me),a.querySelector("#tl-input-q10a-cm").addEventListener("input",me),a.querySelector("#tl-input-q10b-t").addEventListener("input",me),a.querySelector("#tl-input-q11-r").addEventListener("input",Pe);const p=a.querySelector("#tl-input-t-to-l");p&&p.addEventListener("input",ie);const b=a.querySelector("#tl-input-t-to-r");b&&b.addEventListener("input",ie)}if(o.type){const e=a.querySelector(".tl-tabs-container");e&&(e.style.display="none")}Ae(s),B(),vt(),ie();const Fe=a.querySelector(".tl-dash"),Be=a.querySelector(".tl-controls"),Oe=a.querySelector("#tl-controls-toggle"),wt=a.querySelector("#tl-controls-drag"),xt=a.querySelector(".tl-controls-float-bar");return Fe&&Be&&Oe&&fr({container:Fe,panel:Be,toggleBtn:Oe,dragHandle:wt,dragSurface:xt,storageKey:`s3phy-thermo-${s}`,breakpoint:cr,getToggleTitle:e=>t(e?"tools.floatingControls.showParams":"tools.floatingControls.hideParams"),onLayoutChange:()=>Re()}),xe=requestAnimationFrame(We),a._thermometerLabCleanup=()=>{xe&&cancelAnimationFrame(xe)},a}function gr(t){const o=document.createElement("div");o.className="tool-specific-heat";const s=document.createElement("iframe"),n="./",l=n.endsWith("/")?n:n+"/";function a(){return l+"specific-heat/index.html?lang="+encodeURIComponent(J())}s.src=a(),s.title=t("tools.specificHeat.title")||"Specific Heat Capacity Lab",s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var i;try{(i=s.contentWindow)==null||i.postMessage({type:"s3phy:lang",lang:J()},"*")}catch{s.src=a()}};return window.addEventListener("s3phy:lang",r),o._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",r),o.appendChild(s),o}function hr(t){const o=document.createElement("div");o.className="tool-thermal-mixing";const s=document.createElement("iframe"),n="./",l=n.endsWith("/")?n:n+"/";function a(){return l+"thermal-mixing/index.html?lang="+encodeURIComponent(J())}s.src=a(),s.title=t("tools.thermalMixing.title")||"Thermal Mixing Lab",s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var i;try{(i=s.contentWindow)==null||i.postMessage({type:"s3phy:lang",lang:J()},"*")}catch{s.src=a()}};return window.addEventListener("s3phy:lang",r),o._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",r),o.appendChild(s),o}function mr(t){const o=document.createElement("div");o.className="tool-change-of-state";const s=document.createElement("iframe"),n="./",l=n.endsWith("/")?n:n+"/";function a(){return l+"change-of-state/index.html?lang="+encodeURIComponent(J())}s.src=a(),s.title=t("tools.changeOfState.title")||"Change of State Lab",s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var i;try{(i=s.contentWindow)==null||i.postMessage({type:"s3phy:lang",lang:J()},"*")}catch{s.src=a()}};return window.addEventListener("s3phy:lang",r),o._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",r),o.appendChild(s),o}function pr(t){const o=document.createElement("div");o.className="tool-heat-transfer";const s=document.createElement("iframe"),n="./",l=n.endsWith("/")?n:n+"/";function a(){return l+"heat-transfer/index.html?embed=1&lang="+encodeURIComponent(J())}s.src=a(),s.title=t("tools.heatTransfer.title")||"Heat Transfer Laboratory",s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var i;try{(i=s.contentWindow)==null||i.postMessage({type:"s3phy:lang",lang:J()},"*")}catch{s.src=a()}};return window.addEventListener("s3phy:lang",r),o._thermometerLabCleanup=()=>window.removeEventListener("s3phy:lang",r),o.appendChild(s),o}function br(t){const o=document.createElement("div");o.className="tool-heat-final-exam-quiz";const s=document.createElement("iframe"),n="./",l=n.endsWith("/")?n:`${n}/`;function a(){return`${l}f3-heat-final-exam/quiz.html?embed=1`}s.src=a(),s.title=t("worksheets.practiceTitle"),s.setAttribute("loading","lazy"),s.referrerPolicy="strict-origin-when-cross-origin";const r=()=>{var i;try{(i=s.contentWindow)==null||i.postMessage({type:"s3phy:lang",lang:J()},"*")}catch{s.src=a()}};return window.addEventListener("s3phy:lang",r),o._heatFinalExamWorksheetCleanup=()=>window.removeEventListener("s3phy:lang",r),o.appendChild(s),o}const ye=[{id:"thermometer",titleKey:"topic.thermometer",fileEn:"thermometer-en.pdf",fileZh:"thermometer-zhHant.pdf",tool:"liquid"},{id:"heatInternalEnergy",titleKey:"topic.heatInternalEnergy",fileEn:"heat-internal-energy-en.pdf",fileZh:"heat-internal-energy-zhHant.pdf",tool:"specificHeat"},{id:"changeOfState",titleKey:"topic.changeOfState",fileEn:"change-of-state-en.pdf",fileZh:"change-of-state-zhHant.pdf",tool:"changeOfState"},{id:"heatTransfer",titleKey:"topic.heatTransfer",fileEn:"heat-transfer-en.pdf",fileZh:"heat-transfer-zhHant.pdf",tool:"heatTransfer"}],Ue=["liquid","resistance","thermistor","specificHeat","thermalMixing","changeOfState","heatTransfer"],yr={liquid:t=>Me(t,{type:"liquid"}),resistance:t=>Me(t,{type:"resistance"}),thermistor:t=>Me(t,{type:"thermistor"}),specificHeat:t=>gr(t),thermalMixing:t=>hr(t),changeOfState:t=>mr(t),heatTransfer:t=>pr(t)};function Ve(t){return g({liquid:"tools.thermometerLab.liquid.title",resistance:"tools.thermometerLab.resistance.title",thermistor:"tools.thermometerLab.thermistor.title",specificHeat:"tools.specificHeat.title",thermalMixing:"tools.thermalMixing.title",changeOfState:"tools.changeOfState.title",heatTransfer:"tools.heatTransfer.title"}[t]||t)}function Ze(){return J()==="zh-Hant"?"zhHant":"en"}async function ct(t,o){const s=`./${t}/${o}`;try{return(await fetch(s,{method:"HEAD"})).ok}catch{return!1}}async function Xe(t){return ct("notes",t)}function vr(t){let o="topics",s="liquid",n=null,l={main:null},a=null,r=null,i=null;const G=[{value:"all",labelKey:"flashcards.all"},{value:"thermometry",labelKey:"flashcards.deck.thermometry"},{value:"heatInternalEnergy",labelKey:"flashcards.deck.heatInternalEnergy"},{value:"changeOfState",labelKey:"flashcards.deck.changeOfState"},{value:"heatTransfer",labelKey:"flashcards.deck.heatTransfer"}];function M(){if(l.main){if(r==null||r(),r=null,i==null||i(),i=null,o==="topics")l.main.innerHTML=I();else if(o==="notes")l.main.innerHTML=D();else if(o==="tools")l.main.innerHTML=nt({toolOrder:Ue,toolId:s,getLabel:Ve,t:g});else if(o==="worksheets"){l.main.innerHTML='<section class="panel panel--worksheets-embed"></section>';const f=l.main.querySelector(".panel--worksheets-embed"),u=br(g);f.appendChild(u),i=u._heatFinalExamWorksheetCleanup||null}else o==="flashcards"?r=it(l.main,{deckOptions:G.map(f=>({value:f.value,label:g(f.labelKey)})),buildDeck:f=>ar(f,J())}):o==="summary"&&(l.main.innerHTML=k());o==="notes"&&h(),o==="tools"&&st(t,{getLabel:Ve,t:g,getActiveToolId:()=>s,onSelectTool:f=>{s=f},mountTool:f=>{f.innerHTML="",a!=null&&a._thermometerLabCleanup&&a._thermometerLabCleanup();const u=yr[s];u&&(a=u(g),f.appendChild(a))}}),o==="summary"&&A()}}function E(){n==null||n.destroy(),n=ot(t,{subtitleKey:"strand.heat.subtitle",activeSection:o,onSection:f=>{o==="tools"&&f!=="tools"&&a!=null&&a._thermometerLabCleanup&&(a._thermometerLabCleanup(),a=null),o=f,n.updateSection(o),M()},onLang:()=>E()}),l.main=n.main,n.updateSection(o),M()}function I(){return`
      <section class="panel panel--topic-hub">
        <h2>${g("topics.title")}</h2>
        <p class="lead">${g("topics.intro")}</p>
        <div class="grid cols-2 topic-hub-grid">
          ${ye.map(f=>{const u=f.tool?`<button class="btn primary" type="button" data-go-tool="${f.tool}">${g("topic.openTool")}</button>`:`<button class="btn primary" type="button" data-go-section="notes">${g("topic.viewNotes")}</button>`;return`
            <div class="card">
              <h3>${g(f.titleKey)}</h3>
              ${u}
            </div>`}).join("")}
        </div>
      </section>`}function R(f){const u=f.target.closest("[data-go-tool]");if(u){const y=u.getAttribute("data-go-tool");Ue.includes(y)?s=y:s="liquid",o="tools",n.updateSection(o),M();return}const v=f.target.closest("[data-go-section]");(v==null?void 0:v.getAttribute("data-go-section"))==="notes"&&(o="notes",n.updateSection(o),M())}function D(){return`
      <section class="panel">
        <h2>${g("notes.title")}</h2>
        <p class="lead">${g("notes.intro")}</p>
        <p class="lead">${g("notes.embedHint")}</p>
        <div class="grid cols-2" data-notes-grid>
          ${ye.map(f=>`
            <div class="card" data-note-card="${f.id}">
              <h3>${g(`notes.card.${f.id}`)}</h3>
              <div data-note-body></div>
            </div>`).join("")}
        </div>
      </section>`}async function h(){const f=Ze();for(const u of ye){const v=t.querySelector(`[data-note-card="${u.id}"]`);if(!v)continue;const y=v.querySelector("[data-note-body]"),W=f==="zhHant"?u.fileZh:u.fileEn,O=await Xe(W),K=`./notes/${W}`;O?y.innerHTML=`
          <iframe class="notes-grid" title="${g(`notes.card.${u.id}`)}" src="${K}"></iframe>
          <p style="margin-top:8px"><a href="${K}" target="_blank" rel="noopener">${g("notes.openPdf")}</a></p>`:y.innerHTML=`<p class="lead">${g("notes.missing")}</p>`}}function k(){return`
      <section class="panel">
        <h2>${g("summary.title")}</h2>
        <p class="lead">${g("summary.intro")}</p>
        <p class="lead">${g("notes.embedHint")}</p>
        <div class="grid cols-2" data-summary-grid>
          ${ye.map(f=>`
            <div class="card" data-summary-card="${f.id}">
              <h3>${g(`summary.item.${f.id}`)}</h3>
              <div data-summary-body></div>
            </div>`).join("")}
        </div>
      </section>`}const T={thermometer:"thermometer",heatInternalEnergy:"heat-internal-energy",changeOfState:"change-of-state",heatTransfer:"heat-transfer"};async function A(){const f=Ze();for(const u of ye){const v=t.querySelector(`[data-summary-card="${u.id}"]`);if(!v)continue;const y=v.querySelector("[data-summary-body]"),W=T[u.id];if(W){const B=f==="zhHant"?`${W}-zhHant.webp`:`${W}-en.webp`,$=await ct("summary",B),H=`./summary/${B}`;$?y.innerHTML=`
          <img class="summary-thumb" src="${H}" alt="${g(`summary.item.${u.id}`)}" loading="lazy" />
          <p style="margin-top:8px"><a href="${H}" target="_blank" rel="noopener">${g("summary.viewImage")}</a></p>`:y.innerHTML=`<p class="lead">${g("summary.missing")}</p>`;continue}const O=f==="zhHant"?u.fileZh:u.fileEn,K=await Xe(O),_=`./notes/${O}`;K?y.innerHTML=`
          <iframe class="notes-grid" title="${g(`summary.item.${u.id}`)}" src="${_}"></iframe>
          <p style="margin-top:8px"><a href="${_}" target="_blank" rel="noopener">${g("summary.download")}</a></p>`:y.innerHTML=`<p class="lead">${g("summary.missing")}</p>`}}const N=()=>E(),d=f=>R(f);return window.addEventListener("s3phy:lang",N),t.addEventListener("click",d),E(),()=>{window.removeEventListener("s3phy:lang",N),t.removeEventListener("click",d),r==null||r(),a!=null&&a._thermometerLabCleanup&&a._thermometerLabCleanup(),n==null||n.destroy()}}const Je={en:["F = ma","E = mc²","p = mv","v = u + at","s = ut + ½at²","v² = u² + 2as","W = Fs cos θ","P = W / t","Eₖ = ½mv²","Eₚ = mgh","P = Fv","λ = h / p","E = hf","c = fλ","v = fλ","n₁ sin θ₁ = n₂ sin θ₂","η = sin i / sin r","1/f = 1/u + 1/v","m = v/u","V = IR","P = IV","ρ = m/V","Reflection","Refraction","Total internal reflection","Convex lens","Electromagnetic waves"],zhHant:["F = ma","E = mc²","p = mv","v = u + at","W = Fs cos θ","Eₖ = ½mv²","Eₚ = mgh","λ = h / p","E = hf","c = fλ","n₁ sin θ₁ = n₂ sin θ₂","1/f = 1/u + 1/v","V = IR","ρ = m/V","反射","折射","全內反射","凸透鏡","凹透鏡","電磁波"]};St();Ct();const Qe="s3phy_splash_seen",ut={optics:lr,heat:vr};let ve=null,we=null;function wr(){const t=location.hash.match(/^#\/(\w+)/),o=t==null?void 0:t[1];return o&&Object.prototype.hasOwnProperty.call(ut,o)?o:null}function xr(){const t=`${location.pathname}${location.search}`;history.replaceState(null,"",t)}function dt(t){ve==null||ve(),ve=null,we==null||we(),we=null;const o=document.getElementById("app");if(!o)return;if(o.innerHTML="",!t){location.hash&&xr(),we=zt(o);return}const s=`#/${t}`;if(location.hash!==s){location.hash=s;return}ve=ut[t](o)??null}function ft(){dt(wr())}function kr(){return"./images/uniplus-logo.png"}function qr(){const t=document.createElement("div");return t.id="splash",t.className="splash",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","Uni+"),t.innerHTML=`
    <div class="splash-danmaku" id="splashDanmaku" aria-hidden="true"></div>
    <div class="splash-stage">
      <div class="splash-logo-wrap" id="splashLogoWrap">
        <img class="splash-logo-img" src="${kr()}" alt="Uni+ logo" decoding="async" width="520" height="120" />
      </div>
      <div class="splash-uni-title" aria-hidden="true">Uni+</div>
      <div class="splash-start-wrap" id="splashStartWrap">
        <button type="button" class="splash-start-btn" id="splashStart">${g("splash.start")}</button>
      </div>
    </div>
  `,t}function Sr(t,o){const s=[...Je.en,...Je.zhHant],n=()=>{if(!t.parentElement)return;const l=document.createElement("div");l.className="splash-danmaku-item",l.textContent=s[Math.floor(Math.random()*s.length)];const a=Math.random()*85+5,r=Math.random()*.8+.9,i=Math.random()*12+10;l.style.top=`${a}%`,l.style.fontSize=`${r}rem`,l.style.animationDuration=`${i}s`,o.appendChild(l),l.addEventListener("animationend",()=>l.remove()),window.setTimeout(n,1500+Math.random()*1e3)};for(let l=0;l<4;l+=1)window.setTimeout(n,l*1e3)}function Tr(t){const o=t.querySelector("#splashLogoWrap"),s=t.querySelector("#splashDanmaku"),n=t.querySelector("#splashStartWrap");window.setTimeout(()=>o==null?void 0:o.classList.add("splash-logo-wrap--in"),800),window.setTimeout(()=>{s==null||s.classList.add("splash-danmaku--visible"),n==null||n.classList.add("splash-start-wrap--in"),s&&Sr(t,s)},1600)}function et(){ft()}function Cr(){let t=!1;try{t=sessionStorage.getItem(Qe)==="1"}catch{}if(t){et();return}const o=qr();document.body.insertBefore(o,document.body.firstChild),Tr(o);const s=o.querySelector("#splashStart"),n=()=>{o.remove(),et()};s.addEventListener("click",()=>{try{sessionStorage.setItem(Qe,"1")}catch{}o.classList.add("splash--hide"),o.addEventListener("transitionend",n,{once:!0}),window.setTimeout(n,480)})}window.addEventListener("hashchange",ft);window.addEventListener("s3phy:strand",t=>{dt(t.detail??null)});Cr();
