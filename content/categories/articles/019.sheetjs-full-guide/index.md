---
title: "شرح مكتبة SheetJS قراءة وكتابة ملفات Excel باستخدام JavaScript"
description: "تعلم كيفية استخدام مكتبة SheetJS للتعامل مع ملفات Excel في JavaScript. دليل شامل يشرح تصدير البيانات، قراءة ملفات XLSX، وتحويل JSON إلى Excel بسهولة في المتصفح وNode.js."
draft: false
categories: ["articles"]
tags: ["js-libraries"]
authors:
  - mahmoudadel
slug: "sheetjs-full-guide"
weight: -24
---

في عصر البيانات الضخمة، أصبح التعامل مع جداول البيانات (Spreadsheets) جزءاً لا يتجزأ من تطوير تطبيقات الويب الحديثة. سواء كنت تبني نظام محاسبة، أو لوحة تحكم إدارية (Admin Dashboard)، أو منصة لتحليل البيانات، فإن القدرة على **تصدير واستيراد ملفات Excel** تعد ميزة حاسمة يطلبها المستخدمون باستمرار.

بدلاً من بناء هذه الوظائف المعقدة من الصفر والتعامل مع بنية ملفات `.xlsx` أو `.xlsb` المعقدة، تبرز مكتبة **SheetJS** (المعروفة أيضاً بـ `xlsx`) كأقوى أداة في ترسانة مطور الويب للتعامل مع هذه المهام بكفاءة متناهية.

في هذا الدليل الشامل سنتعلم:

- ما هي مكتبة SheetJS
- كيفية تثبيتها
- البنية الأساسية لملف Excel
- إنشاء ملفات Excel
- قراءة ملفات Excel
- تحويل JSON إلى Excel
- تصدير جدول HTML إلى Excel

مع أمثلة عملية يمكنك استخدامها في مشاريعك مباشرة.

## ما هي مكتبة SheetJS

مكتبة **SheetJS** هي مكتبة JavaScript تسمح للمطورين بالتعامل مع ملفات Excel داخل تطبيقات الويب.

باستخدام هذه المكتبة يمكنك:

- إنشاء ملفات Excel
- قراءة ملفات Excel
- تعديل البيانات داخل ملفات Excel
- تحويل البيانات بين عدة صيغ مثل JSON و CSV

تدعم المكتبة العديد من الصيغ مثل:

- XLSX
- XLS
- CSV

كما يمكن استخدامها في:

- المتصفح (Browser)
- Node.js

وهذا يجعلها مناسبة لمختلف أنواع المشاريع.

## متى نستخدم SheetJS

تستخدم المكتبة في العديد من السيناريوهات العملية مثل:

### 1 تصدير التقارير

يمكنك تصدير بيانات النظام إلى ملف Excel ليتم تحميله من قبل المستخدم.

مثال:

- تقرير المبيعات
- تقرير العملاء
- تقرير الطلبات

### 2 استيراد البيانات

يمكن للمستخدم رفع ملف Excel يحتوي على بيانات ليتم قراءتها داخل التطبيق.

مثل:

- استيراد قائمة منتجات
- استيراد بيانات الموظفين

### 3 تحليل البيانات

يمكن قراءة ملفات Excel وتحويلها إلى JSON لمعالجتها داخل JavaScript.

## تثبيت مكتبة SheetJS

يمكن تثبيت المكتبة بعدة طرق.

### باستخدام npm

إذا كنت تستخدم مشروع JavaScript حديث مثل Vue أو React أو Node.js يمكنك تثبيت المكتبة باستخدام الأمر التالي:

```bash
npm install xlsx
```

بعد التثبيت يمكن استيراد المكتبة داخل المشروع:

```javascript
import * as XLSX from "xlsx";
```

### استخدام CDN

يمكن أيضًا استخدام المكتبة مباشرة داخل صفحة HTML.

```html
<script src="https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js"></script>
```

وهذه الطريقة مناسبة للمشاريع الصغيرة أو التجارب السريعة.

## البنية الأساسية لملف Excel في SheetJS

لفهم كيفية عمل المكتبة، يجب أن نفهم "التسلسل الهرمي" للأشياء (Objects) بداخلها:

- **Workbook (كتاب العمل):** هو الملف بأكمله.
- **Worksheet (ورقة العمل):** هي التبويبات الفردية داخل الملف.
- **Cells (الخلايا):** هي الوحدات الأساسية التي تحتوي على القيم والتنسيقات.

## إنشاء أول ملف Excel باستخدام SheetJS

لنبدأ بمثال بسيط لإنشاء ملف Excel يحتوي على بيانات.

**مثال عملي**

لدينا بيانات مستخدمين بالشكل التالي:

```javascript
const users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Omar", age: 28 },
];
```

يمكن تحويل هذه البيانات إلى ملف Excel باستخدام الكود التالي:

```javascript
import * as XLSX from "xlsx";

const worksheet = XLSX.utils.json_to_sheet(users);
const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

XLSX.writeFile(workbook, "users.xlsx");
```

بعد تشغيل الكود سيتم تحميل ملف Excel يحتوي على البيانات.

## تحويل JSON إلى Excel

يعتبر تحويل JSON إلى Excel من أكثر استخدامات مكتبة SheetJS شيوعًا.

يمكن استخدام الدالة:

```
XLSX.utils.json_to_sheet()
```

وهي تقوم بتحويل بيانات JSON إلى Worksheet.

**مثال**

```javascript
const data = [
  { product: "Laptop", price: 1200 },
  { product: "Phone", price: 800 },
];

const worksheet = XLSX.utils.json_to_sheet(data);
```

بعد ذلك يمكن إضافة الورقة إلى Workbook وتصدير الملف.

## تصدير جدول HTML إلى Excel

إذا كان لديك جدول HTML داخل الصفحة يمكنك تحويله مباشرة إلى Excel.

**مثال جدول HTML**

```html
<table id="table">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>25</td>
  </tr>
</table>
```

**يمكنك تحويل الجدول إلى Excel**

```javascript
const table = document.getElementById("table");

const worksheet = XLSX.utils.table_to_sheet(table);
const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

XLSX.writeFile(workbook, "table.xlsx");
```

هذه الطريقة مفيدة لتصدير بيانات الجداول الموجودة في الصفحة.

## التعامل مع التواريخ والأرقام

من المشاكل الشائعة في Excel هي صيغ التواريخ. توفر SheetJS خيارات لمعالجة ذلك:

```js
const ws = XLSX.utils.json_to_sheet(data, {
  cellDates: true,
  dateNF: "yyyy-mm-dd",
});
```

## قراءة ملف Excel باستخدام SheetJS

تسمح المكتبة أيضًا بقراءة ملفات Excel التي يقوم المستخدم برفعها.

**مثال حقل رفع الملف**

```html
<input type="file" id="fileInput" />
```

**قراءة الملف باستخدام JavaScript**

```javascript
document.getElementById("fileInput").addEventListener("change", (event) => {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);

    const workbook = XLSX.read(data, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const json = XLSX.utils.sheet_to_json(worksheet);

    console.log(json);
  };

  reader.readAsArrayBuffer(file);
});
```

سيتم تحويل بيانات Excel إلى JSON يمكن التعامل معها داخل التطبيق.

**خطوات قراءة الملف:**

1. التقاط الملف من وسم `input`.
2. تحويل الملف إلى `ArrayBuffer`.
3. استخدام `XLSX.read` لتحويل البيانات إلى كائن Workbook.
4. استخراج البيانات وتحويلها إلى JSON.

## إنشاء ملف Excel يحتوي على عدة أوراق

يمكن لملف Excel أن يحتوي على أكثر من ورقة.

**مثال**

```javascript
const workbook = XLSX.utils.book_new();

const sheet1 = XLSX.utils.json_to_sheet(data1);
const sheet2 = XLSX.utils.json_to_sheet(data2);

XLSX.utils.book_append_sheet(workbook, sheet1, "Users");
XLSX.utils.book_append_sheet(workbook, sheet2, "Orders");

XLSX.writeFile(workbook, "report.xlsx");
```

سيحتوي الملف على ورقتين.

## حالات استخدام واقعية (Case Studies)

### 1. أنظمة الموارد البشرية (HRMS)

تستخدم الشركات SheetJS لاستيراد سجلات الحضور والانصراف الشهرية. يقوم الموظف برفع ملف البصمة (غالباً بصيغة CSV أو Excel)، وتقوم المكتبة بتحليله ومطابقته مع قواعد البيانات.

### 2. المتاجر الإلكترونية

عند إضافة 1000 منتج جديد، من المرهق إضافتها يدوياً. توفر المتاجر "قالب Excel" يقوم التاجر بتعبئته، ثم تستخدم المكتبة لقراءة البيانات ورفعها إلى قاعدة بيانات المتجر عبر API.

### 3. التقارير المالية

توليد ميزانيات عمومية معقدة تحتوي على عدة أوراق عمل (Sheets)، واحدة للأصول، وأخرى للخصوم، مع دمجها في ملف واحد احترافي أمر مرهق بدون إستخدام Sheetjs.

## مقارنة: SheetJS مقابل المكتبات الأخرى

| **الميزة**           | **SheetJS (XLSX)** | **ExcelJS**   | **PapaParse**       |
| -------------------- | ------------------ | ------------- | ------------------- |
| **دعم XLSX**         | ممتاز              | ممتاز         | لا يدعم             |
| **دعم CSV**          | نعم                | نعم           | متخصص وممتاز        |
| **التنسيق (Styles)** | في النسخة المدفوعة | ممتاز (مجاني) | لا يوجد             |
| **حجم المكتبة**      | متوسط              | كبير          | صغير جداً           |
| **السرعة**           | عالية جداً         | متوسطة        | عالية جداً (لـ CSV) |

## نصائح ذهبية لتحسين الأداء (Performance Optimization)

1. **استخدام Web Workers:** عند معالجة ملفات تحتوي على أكثر من 50,000 صف، قد يتجمد المتصفح. استخدم Web Workers لتشغيل عملية المعالجة في الخلفية.
2. **التحكم في الذاكرة:** في Node.js، استخدم `Streams` إذا كنت تتعامل مع ملفات جيجابايت لتجنب انهيار الخادم (Heap Out of Memory).
3. **تصفية البيانات قبل التصدير:** لا تصدر أعمدة لا يحتاجها المستخدم. استخدم `map` لتنظيف كائن الـ JSON قبل تمريره للدالة `json_to_sheet`.

## أسئلة شائعة

> [!QUSETION] **س: هل تعمل SheetJS داخل المتصفح؟**
> نعم يمكن تشغيلها مباشرة داخل المتصفح.

> [!QUSETION] **س: هل يمكن استخدامها مع Node.js؟**
> نعم المكتبة تدعم Node.js أيضًا.

> [!QUSETION] **س: هل يمكن تحويل Excel إلى JSON؟**
> نعم يمكن ذلك باستخدام الدالة:

```js
sheet_to_json();
```

> [!QUSETION] **س: هل تدعم المكتبة CSV؟**
> نعم يمكن قراءة وكتابة ملفات CSV.

> [!QUSETION] **س: هل تدعم المكتبة تلوين الخلايا أو تغيير الخطوط؟**
> في النسخة المجانية (Community Edition)، التركيز يكون على **البيانات**. لتغيير الألوان والتنسيقات المعقدة (Cell Styling)، ستحتاج إلى النسخة الاحترافية (Pro) أو استخدام مكتبة مكملة مثل `exceljs`.

> [!QUSETION] **س: هل يمكنني دمج الخلايا (Merge Cells)؟**
> نعم، يمكنك ذلك عن طريق تعريف خاصية `!merges` في كائن ورقة العمل:

```js
ws["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 1, c: 0 } }];
```

## الخلاصة

تعد مكتبة **SheetJS** العمود الفقري لأي تطبيق ويب يحتاج للتفاعل مع ملفات Excel. سهولتها في تحويل البيانات بين JSON و HTML و Excel تجعلها أداة لا غنى عنها. ابدأ بتجربتها اليوم في مشاريعك لرفع كفاءة تقاريرك وتسهيل حياة مستخدميك.

إذا كنت تعمل على نظام يحتوي على تقارير أو بيانات كبيرة، فإن استخدام SheetJS سيساعدك على إنشاء ملفات Excel بشكل سريع واحترافي.
