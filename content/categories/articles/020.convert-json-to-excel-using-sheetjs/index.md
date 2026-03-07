---
title: "تحويل JSON إلى Excel باستخدام JavaScript"
description: "تعلم كيفية تحويل بيانات JSON إلى ملفات Excel (XLSX) بسهولة باستخدام JavaScript. سنشرح كيفية استخدام المكتبات الشهيرة مثل SheetJS لتصدير البيانات وتنظيمها في جداول احترافية مباشرة من المتصفح."
draft: false
categories: ["articles"]
tags: ["js-libraries"]
authors:
  - mahmoudadel
slug: "convert-json-to-excel-using-sheetjs"
weight: -25
---

في عصر البيانات الضخم، لا تكمن القوة في امتلاك المعلومة فحسب، بل في كيفية تقديمها. يحتاج المستخدمون غير التقنيين، مثل مديري المبيعات أو المحاسبين، إلى رؤية البيانات في بيئة مألوفة ومنظمة، وهنا يظل **برنامج Excel** هو الخيار الأول عالمياً.

في هذا الدليل، سنتعلم كيفية **تحويل بيانات JSON إلى Excel** برمجياً، وبناء أداة متكاملة تعالج البيانات وتنسقها باحترافية باستخدام [المكتبة الأشهر عالمياً: **SheetJS**](/categories/articles/sheetjs-full-guide).

## حجر الأساس: لماذا نستخدم مكتبة SheetJS؟

تُعرف مكتبة **SheetJS** (أو `xlsx`) بأنها "السكين السويسري" للمطورين؛ فهي أداة قوية ومرنة تمتاز بالآتي:

- **المعالجة في المتصفح (Client-side):** تعمل بالكامل لدى المستخدم، مما يضمن سرعة فائقة دون إجهاد الخادم (Server).
- **دعم واسع:** تدعم مختلف صيغ الملفات مثل XLS, XLSX, CSV, و ODS.
- **سهولة الاستخدام:** توفر دوالاً جاهزة لتحويل مصفوفات JSON المعقدة إلى جداول منظمة بأسطر قليلة.

## أسرع طريقة لتصدير البيانات من JSON إلى Excel

لنتخيل أن لديك قائمة منتجات وتريد تمكين المستخدم من تصديرها بضغطة زر واحدة. إليك الكود الكامل والجاهز للتنفيذ:

### نموذج الكود (HTML & JavaScript)

```html
<!view-source>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>تحويل JSON إلى Excel باحترافية</title>
    <script src="https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js"></script>
  </head>
  <body>
    <h2>تصدير قائمة المنتجات إلى Excel</h2>
    <button onclick="exportExcel()">تحميل الملف الآن</button>

    <script>
      function exportExcel() {
        // بيانات JSON تجريبية
        const data = [
          { المنتج: "Iphone 15", السعر: 15000, "تاريخ الإضافة": "2024-05-01" },
          { المنتج: "Samsung S23", السعر: 3400, "تاريخ الإضافة": "2024-05-02" },
        ];

        // 1. تحويل بيانات JSON إلى ورقة عمل (Worksheet)
        const worksheet = XLSX.utils.json_to_sheet(data);

        // 2. إنشاء كتاب عمل جديد (Workbook)
        const workbook = XLSX.utils.book_new();

        // 3. إضافة ورقة العمل إلى كتاب العمل وتسميتها "Products"
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

        // 4. توليد وتحميل الملف النهائي باسم products.xlsx
        XLSX.writeFile(workbook, "products_report.xlsx");
      }
    </script>
  </body>
</html>
```

### شرح رحلة البيانات: ماذا يحدث خلف الكواليس؟

لتحقيق أقصى استفادة من **SheetJS**، يجب أن نفهم الخطوات الأربع الأساسية التي تمت في الكود أعلاه:

1. **تحويل البيانات (`json_to_sheet`):** تقوم هذه الدالة بأخذ مصفوفة الكائنات (Objects) وتحويل مفاتيحها (Keys) إلى رؤوس أعمدة (Headers) وقيمها إلى صفوف.
2. **إنشاء الحاوية (`book_new`):** ملف الإكسل فعلياً هو عبارة عن "كتاب عمل" قد يحتوي على عدة صفحات. هذه الدالة تنشئ الملف الفارغ.
3. **الربط (`book_append_sheet`):** نقوم هنا بوضع "ورقة البيانات" التي أنشأناها في الخطوة الأولى داخل "كتاب العمل".
4. **التصدير (`writeFile`):** هي اللحظة الحاسمة التي تقوم فيها المكتبة بتحويل الكود البرمجي إلى ملف فيزيائي يتم تحميله على جهاز المستخدم.

## فن هندسة وتخصيص الأعمدة (Customization)

أحياناً يكون ترتيب البيانات القادم من السيرفر (Backend) غير مريح للقراءة البشرية. تمنحك **SheetJS** تحكماً مطلقاً في إعادة هيكلة البيانات؛ سواء بترتيب الأعمدة أو بتغيير مسمياتها البرمجية إلى أسماء عربية أو أجنبية مفهومة.

### 1. إعادة ترتيب الأعمدة

بدلاً من ظهور "الأسم" أولاً، قد تود ظهور "السعر". نستخدم هنا خاصية `header` لتحديد الترتيب بدقة:

```js
const worksheet = XLSX.utils.json_to_sheet(data, {
  header: ["price", "name", "added_at"], // سيظهر السعر أولاً ثم الإسم
});
```

### 2. تغيير عناوين الأعمدة (Renaming)

لتحويل المسميات من لغة البرمجة (مثل `name`) إلى مسميات للمستخدم (مثل `اسم المنتج`)، نستخدم الدالة `sheet_add_aoa`:

```js
XLSX.utils.sheet_add_aoa(
  worksheet,
  [["اسم المنتج", "سعر الوحدة", "تاريخ الإضافة"]],
  { origin: "A1" },
);
```

## التنسيق الاحترافي (Data Styling)

الملف الخام يبدو فقيراً؛ لذا سنضيف بعض اللمسات البرمجية التي تجعل ملف الإكسل يبدو وكأنه صُمم يدوياً.

### تحسين عرض البيانات (Format & Links)

بدلاً من كتابة رقم مجرد، سنقوم بتنسيق الخلايا لتفهم نوع البيانات (عملة، تاريخ، أو رابط):

- **تنسيق العملات:** إضافة رمز `$` للأرقام.
- **تنسيق التواريخ:** تحويل صيغة التاريخ إلى `yyyy-mm-dd`.
- **إضافة روابط (Hyperlinks):** ربط اسم المنتج بصفحته الأصلية.

```js
data.forEach((row, i) => {
  const priceCell = "B" + (i + 2);
  const dateCell = "C" + (i + 2);
  const linkCell = "D" + (i + 2);

  // 1. تنسيق السعر كعملة
  if (worksheet[priceCell]) {
    worksheet[priceCell].t = "n"; // نوع الخلية: رقم
    worksheet[priceCell].z = "$0.00"; // التنسيق
  }

  // 2. تنسيق التاريخ
  if (worksheet[dateCell]) {
    worksheet[dateCell].z = "yyyy-mm-dd";
  }

  // 3. إضافة رابط تفاعلي
  worksheet[linkCell] = {
    t: "s",
    v: "عرض المنتج",
    l: {
      Target: "https://example.com/p/" + row.id,
      Tooltip: "اضغط لزيارة المنتج",
    },
  };
});
```

### التحكم في مظهر الجدول (Layout Control)

غالباً ما تظهر البيانات مضغوطة أو يختفي جزء منها خلف علامة `#####` بسبب ضيق العمود. إليك الحل:

**ضبط أبعاد الخلايا وتجميد الصفوف**

- **عرض الأعمدة:** نحدد العرض لكل عمود باستخدام `!cols`.
- **ارتفاع الصفوف:** نستخدم `!rows` لتنسيق العناوين.
- **تجميد الصف العلوي:** مفيد جداً عند التمرير في الملفات الضخمة.

```js
// تحديد عرض الأعمدة (20 حرف لكل عمود)
worksheet["!cols"] = [{ wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];

// تجميد أول صف (Header)
worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

// تفعيل الفلترة التلقائية (Auto Filter)
worksheet["!autofilter"] = { ref: "A1:D100" };
```

### دمج الخلايا لإنشاء التقارير (Merging)

لإنشاء عنوان رئيسي يتوسط الجدول، نستخدم ميزة `!merges`. إليك مثال لكيفية دمج أول 4 خلايا لإنشاء عنوان "تقرير مبيعات المنتجات":

```js
// دمج من العمود الأول (c:0) إلى الرابع (c:3) في الصف الأول (r:0)
worksheet["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }];

// إضافة نص العنوان
worksheet["A1"] = { t: "s", v: "تقرير مبيعات المنتجات السنوي" };
```

## إنشاء ملف إكسل بصفحات متعددة (Multi-Sheets)

هل تريد تصدير بيانات "المستخدمين" و "الطلبات" في ملف واحد؟ الأمر بسيط:

```js
const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook, usersSheet, "المستخدمين");
XLSX.utils.book_append_sheet(workbook, ordersSheet, "الطلبات");

XLSX.writeFile(workbook, "General_Report.xlsx");
```

## بناء أداة متكاملة لتحويل JSON إلى Excel (Step-by-Step)

لن نكتفي بمجرد تحويل برمجي، بل سنبني **أداة ويب تفاعلية** تتيح للمستخدم:

1. لصق بيانات JSON.
2. تحليل البيانات ومعالجتها فورياً.
3. تنظيف البيانات من الأخطاء.
4. معاينة الجدول قبل التحميل.
5. تصدير ملف Excel نهائي ومنسق.

[يمكنك تحربة الأداة من هنا](https://codezelo.github.io/json-to-excel/).

### أولاً: هيكل الصفحة (HTML)

سنقوم بإنشاء واجهة بسيطة تحتوي على منطقة نصية للإدخال، وأزرار للتحكم، ومنطقة للمعاينة.

```html
<div class="tool-container">
  <textarea id="jsonInput" placeholder="أدخل بيانات JSON هنا..."></textarea>

  <div class="controls">
    <button onclick="handleProcess()">تحليل وتنظيف البيانات</button>
    <button onclick="exportExcel()" id="downloadBtn" disabled>
      تحميل ملف Excel
    </button>
  </div>

  <div id="previewSection" class="preview-table"></div>
</div>
```

### ثانياً: معالجة وتنظيف البيانات (The Logic)

في البيانات الحقيقية، غالباً ما نواجه قيماً فارغة، مسافات زائدة، أو حقولاً مفقودة. سنقوم ببناء دالة ذكية لتنظيف البيانات (Data Cleaning) قبل عرضها.

```js
let parsedData = [];

function handleProcess() {
  try {
    const input = document.getElementById("jsonInput").value;
    const rawData = JSON.parse(input);

    // تنظيف البيانات قبل المعاينة
    parsedData = cleanData(rawData);

    // عرض المعاينة وتفعيل زر التحميل
    renderPreview(parsedData);
    document.getElementById("downloadBtn").disabled = false;
  } catch (e) {
    alert("خطأ: يرجى التأكد من صحة تنسيق JSON");
  }
}

function cleanData(data) {
  return data.map((row) => {
    const cleanRow = {};
    Object.keys(row).forEach((key) => {
      let value = row[key];

      // 1. إزالة المسافات الزائدة من النصوص
      if (typeof value === "string") value = value.trim();

      // 2. معالجة القيم الفارغة أو غير المعرفة
      if (value === "" || value === null || value === undefined) {
        value = "N/A";
      }

      cleanRow[key] = value;
    });
    return cleanRow;
  });
}
```

### ثالثاً: ميزة المعاينة الحية (Live Preview)

من المهم جداً أن يرى المستخدم البيانات في شكل جدول (HTML Table) قبل تصديرها للتأكد من دقتها.

```js
function renderPreview(data) {
  if (data.length === 0) return;

  const container = document.getElementById("previewSection");
  let html = `<h3>معاينة البيانات (${data.length} صف):</h3><table class="styled-table"><thead><tr>`;

  // إنشاء رؤوس الأعمدة
  const headers = Object.keys(data[0]);
  headers.forEach((h) => (html += `<th>${h}</th>`));
  html += "</tr></thead><tbody>";

  // إضافة الصفوف
  data.forEach((row) => {
    html += "<tr>";
    headers.forEach((h) => (html += `<td>${row[h]}</td>`));
    html += "</tr>";
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}
```

### رابعاً: التصدير النهائي إلى Excel

الآن نستخدم **SheetJS** لتحويل المصفوفة المنظفة إلى ملف تحميل مباشر.

```js
function exportExcel() {
  // 1. تحويل البيانات المنظفة إلى Sheet
  const worksheet = XLSX.utils.json_to_sheet(parsedData);

  // 2. إنشاء Workbook وإضافة الـ Sheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Cleaned Data");

  // 3. تحميل الملف
  XLSX.writeFile(workbook, "Exported_Data.xlsx");
}
```

إليك كود التنسيق الذي يمكنك وضعه داخل وسم `<style>` في صفحتك:

```css
.tool-container {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  direction: rtl; /* لدعم اللغة العربية */
}

/* تحسين منطقة إدخال الـ JSON */
#jsonInput {
  width: 100%;
  height: 200px;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-family: monospace;
  font-size: 14px;
  resize: vertical;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

#jsonInput:focus {
  border-color: #2ecc71;
  outline: none;
}

/* تنسيق الأزرار */
.controls {
  margin: 20px 0;
  display: flex;
  gap: 10px;
}

button {
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

button:first-child {
  background-color: #3498db;
  color: white;
}

button:first-child:hover {
  background-color: #2980b9;
}

#downloadBtn {
  background-color: #27ae60;
  color: white;
}

#downloadBtn:hover:not(:disabled) {
  background-color: #219150;
}

#downloadBtn:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

/* تنسيق جدول المعاينة (Styled Table) */
.preview-table {
  margin-top: 30px;
  overflow-x: auto; /* لدعم الشاشات الصغيرة */
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
}

.styled-table thead tr {
  background-color: #2c3e50;
  color: #ffffff;
  text-align: right;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
}

.styled-table tbody tr:hover {
  background-color: #f5f5f5;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #3498db;
}
```

لقد قطعنا رحلة تقنية ممتعة، بدأت من فهم **أهمية مكتبة SheetJS**، ومروراً بكيفية **تحويل JSON إلى Excel**، وصولاً إلى بناء أداة متكاملة تعالج البيانات وتنسقها باحترافية.

تذكر دائماً أن القوة الحقيقية للمطور لا تكمن فقط في جلب البيانات من السيرفر، بل في القدرة على تقديمها للمستخدم النهائي (End-user) بالصيغة التي يفضلها ويستطيع التعامل معها بسهولة. باستخدامك لهذه التقنيات، أنت لا توفر ملفاً فحسب، بل توفر **وقتًا وجهداً** لمن سيعملون على تلك التقارير لاحقاً.
