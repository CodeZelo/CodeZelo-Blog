---
title: "Convert JSON to Excel with JavaScript: A Step-by-Step Guide"
description: "Learn how to easily convert JSON data to Excel files (XLSX) using JavaScript. Discover how to use libraries like SheetJS to export and organize data into professional spreadsheets directly from your browser."
draft: false
categories: ["articles"]
tags: ["js-libraries"]
authors:
  - mahmoudadel
slug: "convert-json-to-excel-using-sheetjs"
weight: -25
---

In the era of Big Data, power lies not just in possessing information, but in how it is presented. Non-technical users, such as sales managers or accountants, need to see data in a familiar and organized environment, and here **Excel** remains the global first choice.

In this guide, we will learn how to **convert JSON data to Excel** programmatically, and build an integrated tool that processes and formats data professionally using [the world's most famous library: **SheetJS**](/en/categories/articles/sheetjs-full-guide).

## The Foundation: Why use the SheetJS library?

The **SheetJS** library (or `xlsx`) is known as the "Swiss Army Knife" for developers; it is a powerful and flexible tool characterized by the following:

- **Client-side processing:** It runs entirely on the user's end, ensuring superior speed without straining the server.
- **Broad support:** It supports various file formats such as XLS, XLSX, CSV, and ODS.
- **Ease of use:** It provides ready-made functions to convert complex JSON arrays into organized tables in just a few lines.

## The fastest way to export data from JSON to Excel

Imagine you have a product list and want to enable the user to export it with a single click. Here is the complete code ready for execution:

### Code Sample (HTML & JavaScript)

```html
<!view-source>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Professional JSON to Excel Conversion</title>
    <script src="https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js"></script>
  </head>
  <body>
    <h2>Export Product List to Excel</h2>
    <button onclick="exportExcel()">Download File Now</button>

    <script>
      function exportExcel() {
        // Sample JSON data
        const data = [
          { Product: "Iphone 15", Price: 15000, "Date Added": "2024-05-01" },
          { Product: "Samsung S23", Price: 3400, "Date Added": "2024-05-02" },
        ];

        // 1. Convert JSON data to a Worksheet
        const worksheet = XLSX.utils.json_to_sheet(data);

        // 2. Create a new Workbook
        const workbook = XLSX.utils.book_new();

        // 3. Add the worksheet to the workbook and name it "Products"
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

        // 4. Generate and download the final file as products_report.xlsx
        XLSX.writeFile(workbook, "products_report.xlsx");
      }
    </script>
  </body>
</html>
```

### Data Journey Explained: What happens behind the scenes?

To get the most out of **SheetJS**, we must understand the four basic steps performed in the code above:

1. **Data Conversion (`json_to_sheet`):** This function takes an array of objects and converts their keys into column headers and their values into rows.
2. **Container Creation (`book_new`):** An Excel file is essentially a "Workbook" that can contain multiple pages. This function creates the empty file.
3. **Linking (`book_append_sheet`):** Here, we place the "Worksheet" we created in the first step inside the "Workbook".
4. **Exporting (`writeFile`):** This is the decisive moment when the library converts the source code into a physical file that is downloaded to the user's device.

## The Art of Column Engineering and Customization

Sometimes, the data order coming from the server (Backend) is not user-friendly. **SheetJS** gives you absolute control over restructuring the data, whether by reordering columns or changing programmatic keys into understandable Arabic or English names.

### 1. Reordering Columns

Instead of "Name" appearing first, you might want "Price" to appear. Here we use the `header` property to precisely define the order:

```js
const worksheet = XLSX.utils.json_to_sheet(data, {
  header: ["price", "name", "added_at"], // Price will appear first, then the Name
});
```

### 2. Renaming Column Headers

To convert labels from programming terms (like `name`) to user-friendly titles (like `Product Name`), we use the `sheet_add_aoa` function:

```js
XLSX.utils.sheet_add_aoa(
  worksheet,
  [["Product Name", "Unit Price", "Date Added"]],
  { origin: "A1" },
);
```

## Professional Data Styling

A raw file can look unappealing; therefore, we will add some programmatic touches to make the Excel file look as if it were designed manually.

### Enhancing Data Presentation (Format & Links)

Instead of writing a plain number, we will format the cells to understand the data type (currency, date, or link):

- **Currency Formatting:** Adding the `$` symbol to numbers.
- **Date Formatting:** Converting the date format to `yyyy-mm-dd`.
- **Adding Hyperlinks:** Linking the product name to its original page.

```js
data.forEach((row, i) => {
  const priceCell = "B" + (i + 2);
  const dateCell = "C" + (i + 2);
  const linkCell = "D" + (i + 2);

  // 1. Format price as currency
  if (worksheet[priceCell]) {
    worksheet[priceCell].t = "n"; // Cell type: number
    worksheet[priceCell].z = "$0.00"; // Format
  }

  // 2. Format date
  if (worksheet[dateCell]) {
    worksheet[dateCell].z = "yyyy-mm-dd";
  }

  // 3. Add an interactive link
  worksheet[linkCell] = {
    t: "s",
    v: "View Product",
    l: {
      Target: "https://example.com/p/" + row.id,
      Tooltip: "Click to visit product",
    },
  };
});
```

### Layout Control

Often, data appears compressed or part of it disappears behind the `#####` symbol due to narrow columns. Here is the solution:

**Adjusting Cell Dimensions and Freezing Rows**

- **Column Width:** We define the width for each column using `!cols`.
- **Row Height:** We use `!rows` to format headers.
- **Freezing the Top Row:** Very useful when scrolling through massive files.

```js
// Set column widths (20 characters per column)
worksheet["!cols"] = [{ wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];

// Freeze the first row (Header)
worksheet["!freeze"] = { xSplit: 0, ySplit: 1 };

// Enable Auto Filter
worksheet["!autofilter"] = { ref: "A1:D100" };
```

### Merging Cells for Reports (Merging)

To create a main title that spans the table, we use the `!merges` feature. Here is an example of how to merge the first 4 cells to create a "Product Sales Report" header:

```js
// Merge from the first column (c:0) to the fourth (c:3) in the first row (r:0)
worksheet["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }];

// Add header text
worksheet["A1"] = { t: "s", v: "Annual Product Sales Report" };
```

## Creating Multi-Sheet Excel Files

Do you want to export "Users" and "Orders" data into a single file? It's simple:

```js
const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook, usersSheet, "Users");
XLSX.utils.book_append_sheet(workbook, ordersSheet, "Orders");

XLSX.writeFile(workbook, "General_Report.xlsx");
```

## Building an Integrated JSON to Excel Tool (Step-by-Step)

We won't just stop at a programmatic conversion; we will build an **interactive web tool** that allows the user to:

1. Paste JSON data.
2. Parse and process data instantly.
3. Clean data from errors.
4. Preview the table before downloading.
5. Export a final, formatted Excel file.

[You can try the tool from here](https://codezelo.github.io/json-to-excel/).

### First: Page Structure (HTML)

We will create a simple interface containing a text area for input, control buttons, and a preview area.

```html
<div class="tool-container">
  <textarea id="jsonInput" placeholder="Paste JSON data here..."></textarea>

  <div class="controls">
    <button onclick="handleProcess()">Parse and Clean Data</button>
    <button onclick="exportExcel()" id="downloadBtn" disabled>
      Download Excel File
    </button>
  </div>

  <div id="previewSection" class="preview-table"></div>
</div>
```

### Second: Data Processing and Cleaning (The Logic)

In real-world data, we often encounter empty values, extra spaces, or missing fields. We will build a smart function for **Data Cleaning** before displaying it.

```js
let parsedData = [];

function handleProcess() {
  try {
    const input = document.getElementById("jsonInput").value;
    const rawData = JSON.parse(input);

    // Clean data before preview
    parsedData = cleanData(rawData);

    // Render preview and enable download button
    renderPreview(parsedData);
    document.getElementById("downloadBtn").disabled = false;
  } catch (e) {
    alert("Error: Please ensure the JSON format is correct");
  }
}

function cleanData(data) {
  return data.map((row) => {
    const cleanRow = {};
    Object.keys(row).forEach((key) => {
      let value = row[key];

      // 1. Remove extra spaces from strings
      if (typeof value === "string") value = value.trim();

      // 2. Handle empty, null, or undefined values
      if (value === "" || value === null || value === undefined) {
        value = "N/A";
      }

      cleanRow[key] = value;
    });
    return cleanRow;
  });
}
```

### Third: Live Preview Feature

It is very important for the user to see the data in an **HTML Table** format before exporting it to ensure its accuracy.

```js
function renderPreview(data) {
  if (data.length === 0) return;

  const container = document.getElementById("previewSection");
  let html = `<h3>Data Preview (${data.length} rows):</h3><table class="styled-table"><thead><tr>`;

  // Create column headers
  const headers = Object.keys(data[0]);
  headers.forEach((h) => (html += `<th>${h}</th>`));
  html += "</tr></thead><tbody>";

  // Add rows
  data.forEach((row) => {
    html += "<tr>";
    headers.forEach((h) => (html += `<td>${row[h]}</td>`));
    html += "</tr>";
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}
```

### Fourth: Final Export to Excel

Now we use **SheetJS** to convert the cleaned array into a direct download file.

```js
function exportExcel() {
  // 1. Convert cleaned data to a Sheet
  const worksheet = XLSX.utils.json_to_sheet(parsedData);

  // 2. Create Workbook and add the Sheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Cleaned Data");

  // 3. Download the file
  XLSX.writeFile(workbook, "Exported_Data.xlsx");
}
```

Here is the styling code you can place inside a `<style>` tag on your page:

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

We have completed an enjoyable technical journey, starting with understanding the **importance of the SheetJS library**, moving through how to **convert JSON to Excel**, and arriving at building an integrated tool that processes and formats data professionally.

Always remember that a developer's true power lies not only in fetching data from the server but in the ability to present it to the end-user in the format they prefer and can easily interact with. By using these techniques, you are not just providing a file, but you are saving **time and effort** for those who will work on these reports later.
