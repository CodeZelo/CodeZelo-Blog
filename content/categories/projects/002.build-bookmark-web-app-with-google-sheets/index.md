---
title: "كيفية بناء تطبيق ويب Bookmark متكامل باستخدام Google Sheets كقاعدة بيانات"
description: "تعلم خطوة بخطوة كيفية بناء تطبيق ويب لحفظ الإشارات المرجعية (Bookmark App) باستخدام Google Sheets كقاعدة بيانات خلفية. دليل شامل يغطي ربط البيانات، البرمجة، والنشر مجاناً."
categories: ["projects"]
tags: ["html-css-practical", "js-practical"]
draft: false
authors:
  - mahmoudadel
slug: "build-bookmark-web-app-with-google-sheets"
weight: -18
---

هل فكرت يوماً في بناء تطبيق ويب كامل لإدارة روابطك المفضلة دون الحاجة للاشتراك في خدمات قواعد بيانات مدفوعة أو معقدة؟ في هذا الدليل، سنتعلم سوياً **how to submit an html form to google sheets without google forms**، وكيفية تحويل جدول بيانات بسيط إلى محرك قوي يدير عمليات الـ CRUD بالكامل (إنشاء، قراءة، تحديث، وحذف).

سواء كنت تبحث عن **كيف أرسل البيانات إلى جداول بيانات Google؟** أو ترغب في بناء **Bookmark web app** احترافي، فأنت في المكان الصحيح.

![كيفية بناء تطبيق ويب Bookmark متكامل باستخدام Google Sheets كقاعدة بيانات](/featured.webp "كيفية بناء تطبيق ويب Bookmark متكامل")

## ما هو مشروع Bookmark Manager؟

المشروع عبارة عن نظام "إشارات مرجعية" (Bookmark System) متطور يسمح لك بحفظ قنوات اليوتيوب، المواقع الإلكترونية، والمصادر التقنية التي تتابعها. بدلاً من استخدام الإضافات التقليدية، سنقوم ببناء **Web App** خاص بنا يستخدم **Google Sheets API** كقاعدة بيانات خلفية.

## مميزات التطبيق التقنية

التطبيق يعتمد على السهولة مع إعطاء الشخص الإمكانيات الأساسية المطلوبة في أي تطبيق ويب من هذا النوع. بمعنى أخر هو تطبيق CRUD كامل يتيح للشخص عمل كل عمليات قواعد البيانات كأنك تستخدم MySQL. أو أي قاعدة بيانات أخرى.

| **الميزة**            | **الوصف**                                        |
| --------------------- | ------------------------------------------------ |
| **Full CRUD**         | إمكانية الإضافة، العرض، التعديل، والحذف لكل سجل. |
| **Real-time Search**  | حقل بحث ذكي للوصول للمصادر بالاسم بسرعة.         |
| **Pagination**        | عرض آخر 5 مصادر فقط لضمان سرعة تحميل الصفحة.     |
| **Dark Mode**         | واجهة مريحة للعين تدعم الوضع الليلي والنهاري.    |
| **Responsive Design** | تصميم متجاوب مع كافة الشاشات باستخدام CSS حديث.  |

## هيكلة المشروع والتقنيات المستخدمة

لبناء هذا التطبيق، سنعتمد على ثلاثي الويب الذهبي (HTML - CSS - JS) مع قوة خدمات جوجل السحابية:

1. **HTML5**: لبناء الهيكل الأساسي للفورم والجدول.
2. **CSS3**: لتنسيق الواجهة وإضافة خاصية الـ Dark Mode.
3. **JavaScript**: لربط الواجهة بالبيانات ومعالجة الطلبات.
4. **Google Apps Script**: المحرك الذي يربط تطبيقك بجوجل شيت.

> [!IMPORTANT] **ملاحظة هامة:**
> استخدام جوجل شيت كقاعدة بيانات هو حل مثالي للمشاريع الصغيرة والمتوسطة، حيث يوفر لك واجهة إدارة بيانات مجانية وسهلة الاستخدام دون الحاجة لتعلم SQL.

## المرحلة الأولى: بناء هيكل التطبيق (Frontend)

سنبدأ بإنشاء مجلد باسم `BookmarkSheet` يحتوي على الملفات الأساسية.

```
BookmarkSheet/
│
├── index.html
├── style.css
├── main.js
```

### 1. ملف index.html

يحتوي الملف على الأقسام التالية:

- **الهيكل الأساسي**: وطبعاً ده بيكون الهيكل الأساسي لأي صفحة ويب. وكمان أضفنا ملف الجافاسكريبت وملف الـ CSS.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bookmarks APP</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <script src="main.js"></script>
    </body>
  </html>
  ```

- **Loader**: عنصر مرئي يظهر أثناء معالجة البيانات (Update/Delete/Create).

  ```html
  <div id="loader" class="loader hidden">
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
  ```

- **Navbar**: يحتوي على اسم التطبيق وزر تبديل الثيم.

  ```html
  <nav class="navbar">
    <div class="nav-brand">📌 Bookmarks</div>

    <button id="themeToggle" class="theme-btn">🌙 Dark</button>
  </nav>
  ```

- **Page Container**: يضم "Form" التسجيل الذي يحتوي على 3 حقول (اسم المصدر، الرابط، الوصف).

  ```html
  <div class="page-container">
    <!-- Form -->
    <form id="bookmarkForm">
      <h2>Bookmark Form</h2>

      <input type="text" name="name" placeholder="Resource Name" required />
      <input type="url" name="url" placeholder="Resource URL" required />
      <textarea
        name="description"
        placeholder="Resource Description"
      ></textarea>
      <button type="submit">Add Bookmark</button>
    </form>
  </div>
  ```

- **Table Wrapper**: لعرض البيانات، حقل البحث، وأزرار التنقل (Pagination).

  ```html
  <div class="page-container">
    <!-- Form -->

    <!-- Table -->
    <div class="table-wrapper">
      <h2>My Bookmarks</h2>

      <input
        type="text"
        id="searchInput"
        placeholder="Search..."
        style="margin-bottom: 15px; padding: 8px; width: 100%"
      />

      <table id="dataTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <div id="pagination" style="margin-top: 15px; text-align: center"></div>
    </div>
  </div>
  ```

### 2. ملف style.css

هنا نقوم بتنسيق العناصر وجعلها تبدو احترافية. إذا كنت لا ترغب في تضييع الوقت في التنسيق، يمكنك نسخ الأكواد الجاهزة لضمان مظهر عصري يدعم الـ Dark Mode.

- **تنسيق الـ body**.

  ```css
  body {
    margin: 0;
    min-height: 100vh;
    background: #f5f7fa;
    font-family: Arial, sans-serif;
  }
  ```

- **تنسيق الـ Navbar**.

  ```css
  /* Navbar */
  .navbar {
    height: 60px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-brand {
    font-size: 18px;
    font-weight: bold;
    color: #e5690e;
  }

  .theme-btn {
    background: #e5690e;
    color: #fff;
    border: none;
    padding: 8px 14px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.3s;
  }

  .theme-btn:hover {
    background: #9f4504;
  }
  ```

- **تنسيق الـ Page Conatainer مع الـ HTML Form**.

  ```css
  /* Main Layout */
  .page-container {
    display: flex;
    gap: 30px;
    padding: 30px;
    align-items: flex-start;
  }

  /* Form */
  #bookmarkForm {
    flex: 1;
    max-width: 450px;
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  #bookmarkForm h2 {
    text-align: center;
    margin: 0 0 10px;
    color: #333;
  }

  #bookmarkForm input,
  #bookmarkForm textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
  }

  #bookmarkForm textarea {
    resize: none;
    height: 120px;
  }

  #bookmarkForm button {
    padding: 12px;
    border: none;
    border-radius: 5px;
    background: #e5690e;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
  }

  #bookmarkForm button:hover {
    background: #9f4504;
  }
  ```

- **تنسيق الـ HTML Table**.

  ```css
  /* Table Wrapper */
  .table-wrapper {
    flex: 1;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
  }

  /* Table */
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }

  th {
    background: #e5690e;
    color: #fff;
  }

  tr:hover {
    background: #f1f1f1;
  }
  ```

- **الجزء الخاص بالـ Responsive**.

  ```css
  /* Responsive Navbar */
  @media (max-width: 600px) {
    .navbar {
      padding: 0 15px;
    }

    .nav-brand {
      font-size: 16px;
    }

    .theme-btn {
      padding: 6px 12px;
      font-size: 13px;
    }
  }

  /* Responsive */
  @media (max-width: 992px) {
    .page-container {
      flex-direction: column;
      align-items: center; /* 👈 التوسيط الأفقي */
    }

    #bookmarkForm,
    .table-wrapper {
      width: 100%;
      max-width: 500px; /* اختياري */
    }
  }
  ```

- **تنسيق الـ Spinner Loader**.

  ```css
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .loader.hidden {
    display: none;
  }

  .spinner {
    width: 45px;
    height: 45px;
    border: 4px solid #ddd;
    border-top: 4px solid #e5690e;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .loader p {
    margin-top: 12px;
    color: #333;
    font-size: 14px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  ```

- **وأخر حاجة تنسيقات الـ Dark Mode**.

  ```css
  /* ========== DARK MODE ========== */
  body.dark {
    background: #0f172a;
    color: #e5e7eb;
  }

  body.dark .navbar {
    background: #020617;
  }

  body.dark .nav-brand {
    color: #a5b4fc;
  }

  body.dark #bookmarkForm,
  body.dark #bookmarkForm h2,
  body.dark .table-wrapper {
    background: #020617;
    color: #e5e7eb;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
  }

  body.dark .table-wrapper a {
    color: #e5690e;
  }

  body.dark input,
  body.dark textarea {
    background: #020617;
    border-color: #1e293b;
    color: #e5e7eb;
  }

  body.dark table th {
    background: #e5690e;
  }

  body.dark table td {
    border-color: #1e293b;
  }

  body.dark tr:hover {
    background: #1e293b;
  }

  body.dark .loader {
    background: rgba(2, 6, 23, 0.85);
  }

  body.dark .loader p {
    color: #e5e7eb;
  }
  ```

## المرحلة الثانية: إعداد Google Sheets و Apps Script

هذا هو الجزء الأهم لجعل **Google spreadsheet available with a web application**.

### خطوات تجهيز قاعدة البيانات:

1. قم بإنشاء ملف Google Sheet جديد باسم "Bookmarks".
2. في الصف الأول، قم بتعريف العناوين التالية: `ID`, `Name`, `URL`, `Description`, `Date`.
3. انتقل إلى **Extensions** ثم **Apps Script**.

### البرمجة النصية (Apps Script functions):

سنحتاج إلى دالتين أساسيتين للتعامل مع طلبات الـ HTTP:

- **doGet(e)**: المسؤولة عن جلب البيانات (Read)، البحث (Search)، والترقيم (Pagination).

  ```js
  function doGet(e) {
    const sheet = SpreadsheetApp.getActiveSheet();
    const rows = sheet.getDataRange().getValues();
    rows.shift(); // remove headers

    const search = (e.parameter.search || "").toLowerCase();
    const page = parseInt(e.parameter.page || 1);
    const limit = parseInt(e.parameter.limit || 5);

    // Map data
    let data = rows.map((r) => ({
      id: r[0],
      name: r[1],
      url: r[2],
      description: r[3],
      date: r[4],
    }));

    // 🔽 Sort: newest → oldest
    data.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });

    // 🔍 Search
    if (search) {
      data = data.filter((row) => row.name.toLowerCase().includes(search));
    }

    // 📄 Pagination
    const total = data.length;
    const start = (page - 1) * limit;
    const paginatedData = data.slice(start, start + limit);

    return jsonResponse({
      data: paginatedData,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  }
  ```

- **doPost(e)**: المسؤولة عن العمليات التي تتطلب تغيير البيانات مثل الإضافة، التعديل، والحذف.

  ```js
  function doPost(e) {
    const action = e.parameter.action;

    if (action === "create") return createRow(e);
    if (action === "update") return updateRow(e);
    if (action === "delete") return deleteRow(e);

    return jsonResponse({ error: "Invalid action" });
  }
  ```

- **createRow(e)**: المسورلة عن حفظ البيانات داخل ملف الجوجل شيت.

  ```js
  /* ===== CREATE ===== */
  function createRow(e) {
    const sheet = SpreadsheetApp.getActiveSheet();
    const id = Utilities.getUuid();

    sheet.appendRow([
      id,
      e.parameter.name,
      e.parameter.url,
      e.parameter.description,
      new Date(),
    ]);

    return jsonResponse({ success: true, id });
  }
  ```

- **updateRow(e)**: المسورلة عن تعديل البيانات داخل ملف الجوجل شيت.

  ```js
  /* ===== UPDATE ===== */
  function updateRow(e) {
    const sheet = SpreadsheetApp.getActiveSheet();
    const rows = sheet.getDataRange().getValues();

    for (let i = 1; i < rows.length; i++) {
      if (rows[i][0] === e.parameter.id) {
        sheet
          .getRange(i + 1, 2, 1, 3)
          .setValues([
            [e.parameter.name, e.parameter.url, e.parameter.description],
          ]);

        return jsonResponse({ success: true });
      }
    }

    return jsonResponse({ error: "ID not found" });
  }
  ```

- **deleteRow(e)**: المسورلة عن حذف البيانات داخل ملف الجوجل شيت.

  ```js
  /* ===== DELETE ===== */
  function deleteRow(e) {
    const sheet = SpreadsheetApp.getActiveSheet();
    const rows = sheet.getDataRange().getValues();

    for (let i = 1; i < rows.length; i++) {
      if (rows[i][0] === e.parameter.id) {
        sheet.deleteRow(i + 1);
        return jsonResponse({ success: true });
      }
    }

    return jsonResponse({ error: "ID not found" });
  }
  ```

- **jsonResponse**: وبدلاً من تكرار الكود الخاص بإرجاع البيانات أكتر من مرة. أنشأنا تلك الدالة لتوحيد طريفة إرسال الـResponse الي الفرونت إند.

  ```js
  /* ===== Helper ===== */
  function jsonResponse(data) {
    return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
      ContentService.MimeType.JSON,
    );
  }
  ```

  > [!info]+ **تنبيه للمبرمجين:**
  > تأكد عند عمل **Deploy** أن تختار نوع التطبيق **Web App** وتجعل الصلاحية **Anyone** ليتمكن تطبيق الويب من الوصول للبيانات. وأيضاً تأكد من حفظ الرابط بعد عمل الـ Depoy لأننا سنحتاجه في ملف الـ Javascript.

## المرحلة الثالثة: الربط البرمجي باستخدام JavaScript

الآن سنقوم بربط كل شيء معاً في ملف `main.js`. هذا الملف هو المسؤول عن تحويل الـ HTML الجامد إلى تطبيق تفاعلي.

1. **تعريف المتغيرات**: جلب الفورم، الـ Loader، والجدول عن طريق الـ ID.

```js
const form = document.getElementById("bookmarkForm");
const loader = document.getElementById("loader");
const tableBody = document.querySelector("#dataTable tbody");
```

2. **Sheet URL**: وضع الرابط الذي حصلنا عليه من عملية الـ Deploy لربط الـ Frontend بالـ Backend.

```js
const SHEET_URL = "https://script.google.com/macros/s/url-like-this/exec";
```

3. **التحكم في الـ Loader**: بناء دالتين لإظهار وإخفاء الـ Loader.

```js
/* ===== Helper ===== */
function showLoader() {
  loader.classList.remove("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
}
```

4. **loadTable (تحميل بيانات الجدول)**: الدالة المسئوالة عن تحميل البيانات من ملف جوجل شيت وعرضها في الجدول. وأيضاً التعامل مع البحث والـ Pagination.

```js
/* ===== Load Table Data ===== */
let currentPage = 1;
let currentSearch = "";
const limit = 5;

function loadTable() {
  showLoader();

  const url = `${SHEET_URL}?search=${encodeURIComponent(
    currentSearch,
  )}&page=${currentPage}&limit=${limit}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      renderTable(res.data);
      renderPagination(res.totalPages);
    })
    .catch(() => {
      alert("Failed to load table ❌");
    })
    .finally(() => {
      hideLoader();
    });
}
```

5. **العرض (Rendering)**: داخل دالة الـ loadTable قمنا ببناء دالتين `renderTable` و `renderPagination` لتحويل البيانات القادمة من جوجل شيت إلى صفوف في جدولك.

```js
/* ===== Table Data ===== */
function renderTable(data) {
  tableBody.innerHTML = "";

  data.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td data-id="${row.id}">${row.name}</td>
          <td>
            <a 
              href="${row.url}" 
              data-url="${row.url}"
              data-description="${row.description}"
              title="${row.description}"
              target="_blank"
            >
              Visit
            </a>
          </td>
          <td>${new Date(row.date).toLocaleString()}</td>
          <td>
            <button onclick="editRow('${row.id}')">✏️</button>
            <button onclick="deleteRow('${row.id}')">🗑️</button>
          </td>
        `;

    tableBody.appendChild(tr);
  });
}

/* ===== Pagination UI ===== */
function renderPagination(totalPages) {
  const container = document.getElementById("pagination");
  container.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    btn.style.margin = "0 5px";
    btn.disabled = i === currentPage;

    btn.onclick = () => {
      currentPage = i;
      loadTable();
    };

    container.appendChild(btn);
  }
}
```

6. **editRow(id)**: المسئولة عن عملية التعديل على الـ Bookmark.

```js
let currentEditId = null;

function editRow(id) {
  const row = [...document.querySelectorAll("#dataTable tbody tr")].find(
    (tr) => tr.children[0].dataset.id === id,
  );

  currentEditId = id;

  const link = row.querySelector("a");

  form.name.value = row.children[0].innerText;
  form.url.value = link.dataset.url;
  form.description.value = link.dataset.description;

  form.querySelector("button").innerText = "Update Bookmark";
}
```

7. **deleteRow(id)**: المسئولة عن عملية حذف الـ Bookmark.

```js
function deleteRow(id) {
  if (!confirm("Are you sure?")) return;

  showLoader();

  fetch(SHEET_URL, {
    method: "POST",
    body: new URLSearchParams({
      action: "delete",
      id,
    }),
  }).then(loadTable);
}
```

8. **إدارة البيانات**: إضافة "Event Listeners" للتعامل مع حفظ الفورم سواء كان "إضافة عنصر جديد" أو "تعديل عنصر قديم".

```js
/* ===== Submit Form ===== */
form.addEventListener("submit", function (e) {
  e.preventDefault();
  showLoader();

  const action = currentEditId ? "update" : "create";

  const formData = new URLSearchParams({
    action,
    id: currentEditId || "",
    name: this.name.value,
    url: this.url.value,
    description: this.description.value,
  });

  fetch(SHEET_URL, {
    method: "POST",
    body: formData,
  })
    .then(() => {
      alert("Sent successfully ✅");
      form.reset();
      currentEditId = null;
      form.querySelector("button").innerText = "Add Bookmark";
      loadTable(); // reload table after submit
    })
    .catch(() => {
      alert("Error ❌");
    });
});
```

9. **البحث في البيانات**: إضافة "Event Listeners" للتعامل مع عملية البحث داخل الجدول".

```js
/* ===== Search Debounce ===== */
const searchInput = document.getElementById("searchInput");

let debounceTimer;
searchInput.addEventListener("input", function () {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    currentSearch = this.value;
    currentPage = 1;
    loadTable();
  }, 400);
});
```

10. **تغيير الثيم**: الكود المسئول عن عملية Theme Toggle.

```js
const themeToggle = document.getElementById("themeToggle");

// load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.innerText = "☀️ Light";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.innerText = isDark ? "☀️ Light" : "🌙 Dark";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
```

11. **تحميل البيانات (Initial Load)**: السطر المسئول عن عمليو تحميل البيانات من جوجل شيت وعرضها في الـ HTML Table.

```js
/* ===== Initial Load ===== */
loadTable();
```

> [!info] وبكده يكون ملف الـ javascript جاهز ليقوم بمهمته على أكمل وجه والتعامل مع كل حالات الـ CRUD Operations.

## تجربة المستخدم النهائية

بعد الانتهاء من الأكواد، ستجد أن التطبيق يعمل بسلاسة تامة:

- عند إضافة "قناة يوتيوب"، ستظهر فوراً في جدول البيانات بجوجل شيت.
- زر التعديل يفتح لك البيانات في الفورم، وبمجرد الحفظ يتم التحديث في الشيت تلقائياً.
- خاصية الحذف تعمل بدقة مع ظهور الـ Loader لضمان تجربة مستخدم احترافية.

## الأسئلة الشائعة حول ربط HTML بجوجل شيت

> [!question]- **كيف أرسل البيانات إلى جداول بيانات Google؟**
> يتم ذلك عن طريق إرسال طلب `POST` من خلال JavaScript `fetch` إلى رابط الـ Web App الخاص بـ Google Apps Script، والذي بدوره يقوم بكتابة البيانات في الشيت.

> [!question]- **هل يمكنني استخدام هذا النظام كمحرك بحث خاص؟**
> نعم، التطبيق يتضمن حقل بحث (Search field) يقوم بفلترة النتائج بناءً على اسم المصدر المسجل في قاعدة البيانات.

بناء **Bookmark web app** باستخدام جوجل شيت هو وسيلة رائعة لتعلم كيفية التعامل مع الـ APIs وتطوير تطبيقات Full-stack بسيطة وفعالة. لقد تعلمنا **how to create web form to get data from google sheets** وكيفية إدارتها بالكامل.

هل أنت جاهز لتستخدم هذا التطبيق؟

**الأكواد علي Github:**
{{< github repo="CodeZelo/BookmarkSheet" showThumbnail=true >}}
