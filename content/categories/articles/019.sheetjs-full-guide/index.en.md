---
title: "How to Export JSON to Excel and Read XLSX Files Using SheetJS"
description: "Master SheetJS (XLSX) library to handle Excel files in JavaScript. Learn how to export JSON to Excel, parse XLSX files in the browser, and convert HTML tables with full code examples."
draft: false
categories: ["articles"]
tags: ["js-libraries"]
authors:
  - mahmoudadel
slug: "sheetjs-full-guide"
weight: -24
---

In the era of Big Data, handling spreadsheets has become an integral part of modern web development. Whether you are building an accounting system, an Admin Dashboard, or a data analysis platform, the ability to export and import Excel files is a critical feature that users constantly demand.

Instead of building these complex functions from scratch and dealing with the intricate structure of `.xlsx` or `.xlsb` files, the **SheetJS** library (also known as `xlsx`) stands out as the most powerful tool in a web developer's arsenal for handling these tasks with extreme efficiency.

**In this comprehensive guide, we will learn:**

- What the SheetJS library is.
- How to install it.
- The basic structure of an Excel file.
- Creating Excel files.
- Reading Excel files.
- Converting JSON to Excel.
- Exporting HTML tables to Excel.
- Practical examples you can use in your projects immediately.

## What is the SheetJS Library?

SheetJS is a JavaScript library that allows developers to manipulate Excel files within web applications.

**Using this library, you can:**

- Create Excel files.
- Read Excel files.
- Modify data within Excel files.
- Convert data between various formats such as JSON and CSV.

**The library supports many formats, including:**

- XLSX
- XLS
- CSV

**It can be used in:**

- **Browsers:** Client-side processing.
- **Node.js:** Server-side automation.

This versatility makes it suitable for various types of projects.

## When Do We Use SheetJS?

The library is used in many practical scenarios, such as:

### 1. Exporting Reports

You can export system data to an Excel file for the user to download.

- **Examples:** Sales reports, customer lists, or order summaries.

### 2. Importing Data

Users can upload an Excel file containing data to be read inside the application.

- **Examples:** Importing a product list or employee records.

### 3. Data Analysis

Excel files can be read and converted into JSON format to be processed within JavaScript logic.

## Installing the SheetJS Library

The library can be installed in several ways.

### Using npm

If you are using a modern JavaScript project like Vue, React, or Node.js, you can install the library using the following command:

```bash
npm install xlsx

```

After installation, you can import the library into your project:

```javascript
import * as XLSX from "xlsx";
```

### Using CDN

The library can also be used directly inside an HTML page:

```html
<script src="https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js"></script>
```

This method is suitable for small projects or quick experiments.

## Basic Structure of an Excel File in SheetJS

To understand how the library works, we must understand the "hierarchy" of objects within it:

- **Workbook:** The entire file.
- **Worksheet:** Individual tabs within the file.
- **Cells:** The basic units that contain values and formatting.

## Creating Your First Excel File Using SheetJS

Let's start with a simple example of creating an Excel file containing data.

**Practical Example**

Suppose we have user data as follows:

```javascript
const users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Omar", age: 28 },
];
```

You can convert this data into an Excel file using the following code:

```javascript
import * as XLSX from "xlsx";

const worksheet = XLSX.utils.json_to_sheet(users);
const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

XLSX.writeFile(workbook, "users.xlsx");
```

After running this code, an Excel file containing the data will be downloaded.

## Converting JSON to Excel

Converting JSON to Excel is one of the most common uses of the SheetJS library.

You can use the function: `XLSX.utils.json_to_sheet()`, which converts JSON data into a Worksheet.

**Example:**

```javascript
const data = [
  { product: "Laptop", price: 1200 },
  { product: "Phone", price: 800 },
];

const worksheet = XLSX.utils.json_to_sheet(data);
// After this, you can add the sheet to a Workbook and export the file.
```

## Exporting an HTML Table to Excel

If you have an HTML table on your page, you can convert it directly to Excel.

**Example HTML Table:**

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

**Convert the table to Excel:**

```javascript
const table = document.getElementById("table");

const worksheet = XLSX.utils.table_to_sheet(table);
const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

XLSX.writeFile(workbook, "table.xlsx");
```

## Handling Dates and Numbers

A common problem in Excel is date formatting. SheetJS provides options to handle this:

```javascript
const ws = XLSX.utils.json_to_sheet(data, {
  cellDates: true,
  dateNF: "yyyy-mm-dd",
});
```

## Reading Excel Files Using SheetJS

The library also allows reading Excel files uploaded by the user.

**Example File Upload Field:**

```html
<input type="file" id="fileInput" />
```

**Reading the File Using JavaScript:**

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

**Steps to read the file:**

1. Capture the file from the `input` tag.
2. Convert the file to an `ArrayBuffer`.
3. Use `XLSX.read` to convert the data into a **Workbook** object.
4. Extract the data and convert it to **JSON**.

## Creating an Excel File with Multiple Sheets

An Excel file can contain more than one sheet.

**Example:**

```javascript
const workbook = XLSX.utils.book_new();

const sheet1 = XLSX.utils.json_to_sheet(data1);
const sheet2 = XLSX.utils.json_to_sheet(data2);

XLSX.utils.book_append_sheet(workbook, sheet1, "Users");
XLSX.utils.book_append_sheet(workbook, sheet2, "Orders");

XLSX.writeFile(workbook, "report.xlsx");
```

## Real-World Case Studies

### 1. Human Resources Systems (HRMS)

Companies use SheetJS to import monthly attendance and departure records. Employees upload a fingerprint log file (usually in CSV or Excel format), and the library analyzes and matches it with the database.

### 2. E-commerce Stores

When adding 1,000 new products, it is exhausting to add them manually. Stores provide an "Excel template" for the merchant to fill out, and the library reads the data and uploads it to the store's database via an API.

### 3. Financial Reports

Generating complex balance sheets containing multiple worksheets (e.g., one for assets, another for liabilities) is a tedious task without using SheetJS.

## Comparison: SheetJS vs. Other Libraries

| Feature          | SheetJS (XLSX)    | ExcelJS          | PapaParse             |
| ---------------- | ----------------- | ---------------- | --------------------- |
| **XLSX Support** | Excellent         | Excellent        | No                    |
| **CSV Support**  | Yes               | Yes              | Specialized/Excellent |
| **Styling**      | Paid version only | Excellent (Free) | None                  |
| **Library Size** | Medium            | Large            | Very Small            |
| **Speed**        | Very High         | Medium           | Very High (for CSV)   |

## Golden Tips for Performance Optimization

- **Use Web Workers:** When processing files containing more than 50,000 rows, the browser may freeze. Use Web Workers to run the processing in the background.
- **Memory Control:** In Node.js, use **Streams** if you are dealing with gigabyte-sized files to avoid server crashes (`Heap Out of Memory`).
- **Filter Data Before Exporting:** Do not export columns that the user does not need. Use `.map()` to clean the JSON object before passing it to `json_to_sheet`.

## Frequently Asked Questions (FAQ)

> [!QUSETION] **Q: Does SheetJS work inside the browser?**
> Yes, it can be run directly inside the browser.

> [!QUSETION] **Q: Can it be used with Node.js?**
> Yes, the library also supports Node.js.

> [!QUSETION] **Q: Can Excel be converted to JSON?**
> Yes, this can be done using the `sheet_to_json()` function.

```js
sheet_to_json();
```

> [!QUSETION] **Q: Does the library support CSV?**
> Yes, it can read and write CSV files.

> [!QUSETION] **Q: Does the library support cell coloring or font changes?**
> In the **Community Edition** (Free), the focus is on the data. For complex styling, you will need the **Pro** version or a complementary library like `exceljs`.

> [!QUSETION] **Q: Can I merge cells?**
> Yes, you can do this by defining the `!merges` property in the worksheet object:

```javascript
ws["!merges"] = [
  { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } }, // Merges A1 and A2
];
```

## Conclusion

The SheetJS library is the backbone of any web application that needs to interact with Excel files. Its ease of converting data between JSON, HTML, and Excel makes it an indispensable tool. Start experimenting with it in your projects today to increase report efficiency and make your users' lives easier.

If you are working on a system that contains large reports or data, using SheetJS will help you create Excel files quickly and professionally.
