---
title: "كيف تصنع تطبيق قرعة عشوائية احترافي باستخدام ملف Excel و JavaScript؟"
description: "تعلم كيفية برمجة تطبيق قرعة عشوائية من ملف Excel باستخدام JavaScript. سحب أسماء احترافي للمسابقات مع عداد تنازلي وتأثيرات حماسية. ارفع ملفك وابدأ السحب الآن!"
categories: ["projects"]
tags: ["js-practical", "html-css-practical"]
draft: false
authors:
  - mahmoudadel
slug: "build-excel-giveaway-app-js"
weight: -21
---

هل تبحث عن طريقة عادلة ومثيرة لاختيار فائزين في مسابقتك القادمة؟ في هذا الدليل العملي، سنتعلم كيفية بناء **تطبيق سحب أسماء إلكتروني** يعتمد على رفع ملف **Excel**، مع إضافة تأثيرات بصرية وحماسية تجعل لحظة إعلان الفائز لا تُنسى.

سواء كنت تريد عمل **قرعة عشوائية للمسابقات**، أو اختيار طلاب في فصل دراسي، أو حتى توزيع هدايا في شركتك، هذا المشروع هو الحل الأمثل والبسيط.

{{< youtubeLite id="-s0_UHejREs" label="كيف تصنع تطبيق قرعة عشوائية احترافي باستخدام ملف Excel و JavaScript؟" >}}

## مميزات تطبيق القرعة العشوائية

- **سهولة الاستخدام:** ارفع ملف الـ Excel وابدأ السحب فوراً.
- **تفاعلي وحماسي:** يحتوي على عداد تنازلي وتأثيرات "الكونفيتي" عند الفوز.
- **مرونة كاملة:** يمكنك تعديل الكود لإظهار (الاسم، الرقم، أو أي بيانات أخرى).
- **نظام ذكي:** إمكانية إعادة السحب أو تصفير البيانات للبدء من جديد.

## الأدوات المستخدمة في المشروع

لبناء هذا التطبيق، سنعتمد على تقنيات الويب الأساسية:

1. **HTML5 & CSS3:** لبناء واجهة عصرية وتجاوبية.
2. **JavaScript (Vanilla JS):** لمحرك السحب العشوائي.
3. **SheetJS Library:** المكتبة السحرية التي تسمح لنا بقرءاة ملفات Excel برمجياً.

## الخطوة الأولى: هيكل المشروع (HTML)

سنقوم بإنشاء ملف `index.html`. نستخدم فيه نظام الاتجاه من اليمين لليسار `dir="rtl"` ليكون مناسباً للمستخدم العربي، ونستدعي مكتبة **SheetJS** وخط **Cairo** المميز.

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>تطبيق قرعة عشوائية من Excel | سحب أسماء احترافي</title>
    <script src="https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>🎉 قرعة عشوائية من Excel</h1>
      <input type="file" id="fileInput" accept=".xlsx,.xls" />
      <div class="stats">
        عدد المشاركين: <span id="count">0</span> | الفائزين السابقين:
        <span id="historyCount">0</span>
      </div>
      <div id="counter" class="counter">3</div>
      <div id="winnerBox" class="winner-box">لم يتم اختيار فائز بعد</div>
      <div class="buttons">
        <button class="draw-btn" onclick="startDraw()">ابدأ القرعة</button>
        <button class="reset-btn" onclick="redoDraw()">إعادة سحب</button>
        <button class="clear-btn" onclick="resetAll()">إعادة تعيين</button>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

## الخطوة الثانية: التصميم والأنيميشن (CSS)

نريد واجهة "مودرن" تشبه تطبيقات الجوال. استخدمنا `backdrop-filter` لعمل تأثير الزجاج الضبابي (Glassmorphism) مع حركات انسيابية للعداد.

> **نصيحة:** تأكد من وضع كود الـ CSS في ملف منفصل باسم `style.css` لتحسين أداء الأرشفة وسرعة الموقع.

_(يمكنك نسخ كود الـ CSS من قسم الأكواد أعلاه وضبط الألوان بما يناسب هويتك البصرية)._

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Cairo", sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #fff;
  padding: 20px;
}

.container {
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  font-weight: 800;
}

input[type="file"] {
  margin: 15px 0;
  padding: 10px;
  width: 100%;
  background: #fff;
  color: #000;
  border-radius: 10px;
  border: none;
}

.stats {
  margin: 10px 0;
  font-size: 14px;
  opacity: 0.8;
}

.counter {
  font-size: 60px;
  font-weight: 800;
  margin: 20px 0;
  opacity: 0;
  transform: scale(0.5);
  transition: 0.3s ease;
}

.counter.active {
  opacity: 1;
  transform: scale(1.2);
}

.winner-box {
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.15);
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  transition: 0.4s;
}

.winner-box.glow {
  animation: glow 1s infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 10px #00f2ff;
  }
  to {
    box-shadow: 0 0 30px #00f2ff;
  }
}

.buttons {
  margin-top: 25px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.draw-btn {
  background: #00f2ff;
  color: #000;
}
.reset-btn {
  background: #ff6b6b;
  color: #fff;
}
.clear-btn {
  background: #555;
  color: #fff;
}

button:hover {
  transform: scale(1.05);
}

.confetti {
  position: fixed;
  width: 10px;
  height: 10px;
  background: red;
  top: -10px;
  animation: fall 3s linear forwards;
}

@keyframes fall {
  to {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

@media (max-width: 500px) {
  .counter {
    font-size: 40px;
  }
  .winner-box {
    font-size: 18px;
  }
}
```

## الخطوة الثالثة: المحرك البرمجي (JavaScript)

هنا يكمن ذكاء التطبيق. ملف `script.js` يقوم بثلاث وظائف رئيسية:

1. **تحويل الـ Excel إلى بيانات:** عبر دالة `handleFile` التي تحول صفوف الجدول إلى مصفوفة أسماء.
2. **اختيار الفائز عشوائياً:** دالة `pickWinner` تستخدم `Math.random()` لاختيار اسم عشوائي من القائمة.
3. **تأثيرات الاحتفال:** دالة `launchConfetti` التي تملأ الشاشة بالألوان عند ظهور النتيجة.

```js
let participants = [];
let winners = [];
let currentWinner = null;
let isDrawing = false;

const fileInput = document.getElementById("fileInput");
const countSpan = document.getElementById("count");
const historyCount = document.getElementById("historyCount");
const winnerBox = document.getElementById("winnerBox");
const counterEl = document.getElementById("counter");

fileInput.addEventListener("change", handleFile);

function handleFile(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);

    participants = json.map((row) => Object.values(row)[0]);
    countSpan.textContent = participants.length;
  };

  reader.readAsArrayBuffer(file);
}

function startDraw() {
  if (isDrawing || participants.length === 0) return;

  const available = participants.filter((p) => !winners.includes(p));
  if (available.length === 0) {
    alert("تم اختيار جميع المشاركين!");
    return;
  }

  isDrawing = true;
  winnerBox.classList.remove("glow");
  let count = 3;
  counterEl.textContent = count;
  counterEl.classList.add("active");

  const countdown = setInterval(() => {
    count--;
    counterEl.textContent = count;
    if (count === 0) {
      clearInterval(countdown);
      counterEl.classList.remove("active");
      pickWinner(available);
    }
  }, 1000);
}

function pickWinner(list) {
  let i = 0;
  const spin = setInterval(() => {
    winnerBox.textContent = list[Math.floor(Math.random() * list.length)];
    i++;
    if (i > 20) {
      clearInterval(spin);
      currentWinner = winnerBox.textContent;
      winners.push(currentWinner);
      historyCount.textContent = winners.length;
      winnerBox.classList.add("glow");
      launchConfetti();
      isDrawing = false;
    }
  }, 100);
}

function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const conf = document.createElement("div");
    conf.classList.add("confetti");
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    conf.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 3000);
  }
}

function redoDraw() {
  if (!currentWinner) return;
  winners = winners.filter((w) => w !== currentWinner);
  historyCount.textContent = winners.length;
  winnerBox.textContent = "تمت إعادة السحب";
  winnerBox.classList.remove("glow");
  currentWinner = null;
}

function resetAll() {
  participants = [];
  winners = [];
  currentWinner = null;
  countSpan.textContent = 0;
  historyCount.textContent = 0;
  winnerBox.textContent = "لم يتم اختيار فائز بعد";
  winnerBox.classList.remove("glow");
  fileInput.value = "";
}
```

### شرح الدوال الأساسية:

- **`startDraw`:** تبدأ العد التنازلي (3.. 2.. 1) لزيادة الحماس قبل إعلان النتيجة.
- **`redoDraw`:** تسمح لك بإلغاء سحب معين وإعادة المحاولة دون تكرار نفس الفائز.
- **`resetAll`:** تمسح كل البيانات المرفوعة لتبدأ مسابقة جديدة تماماً.

## كيف تضمن نجاح "سحب الأسماء" في تطبيقك؟

للحصول على أفضل تجربة مستخدم، تأكد من:

- تنسيق ملف الـ Excel بحيث يكون العمود الأول هو الذي يحتوي على الأسماء.
- تجربة التطبيق على المتصفحات المختلفة (Chrome, Safari, Firefox).
- إضافة شعارك الخاص في أعلى الصفحة لتعزيز علامتك التجارية.

## الخاتمة

برمجة **تطبيق قرعة عشوائية** لم تعد أمراً معقداً. باستخدام بضع أسطر من الكود ومكتبة **SheetJS**، يمكنك امتلاك أداتك الخاصة مجاناً وبدون أي إعلانات مزعجة.

**هل أعجبك المشروع؟**
إذا كان لديك استفسار حول كيفية تعديل الكود لإظهار بيانات إضافية (مثل رقم الهاتف أو البريد الإلكتروني)، اترك لنا تعليقاً بالأسفل!

**الأكواد علي Github:**
{{< github repo="CodeZelo/Lottery-Excel" showThumbnail=true >}}
