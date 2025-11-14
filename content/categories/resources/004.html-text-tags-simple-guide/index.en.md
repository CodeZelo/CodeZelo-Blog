---
title: "HTML Text Tags Made Simple: Headings, Paragraphs, and Full Formatting"
description: "Learn HTML text tags in an easy, beginner-friendly way in Arabic. A practical guide to headings, paragraphs, and text formatting — including bold, italic, and underlined styles."
draft: false
categories: ["resources"]
tags: ["html"]
authors:
  - mahmoudadel
series: ["html-tutorial"]
series_order: 4
slug: "html-text-tags-simple-guide"
weight: -4
---

In the previous article, we talked about [semantic elements](/en/categories/resources/semantic-elements-and-content-elements).
But to use **text tags in HTML** and learn how to format them properly,
we’ll rely on the **HTML text formatting tags**.

![HTML Text Tags Made Simple: Headings, Paragraphs, and Full Formatting](featured.png "HTML Text Tags Made Simple: Headings, Paragraphs, and Full Formatting")

In HTML, there are tags used for writing **headings** or **paragraphs**.
To understand how to use them correctly,
we’ll start by explaining **heading tags** first, and then move on to **paragraph tags**.

## Headings in HTML

Headings in HTML are divided into **6 different levels**,
starting from `<h1>` up to `<h6>`.
The higher the number, the **smaller the text size** becomes.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

**Note:**
When using the `<h1>` tag, keep it for the **main title** of the page only —
and don’t repeat it more than once.
This helps search engines (like Google) understand and organize your content properly.

## Paragraphs in HTML

To write a paragraph in HTML, you simply use the `<p>` tag like this:

```html
<p>This is a simple paragraph in HTML.</p>
```

You can add as many paragraphs as you want on a page.
Each paragraph appears **on a separate line**,
and there’s usually **some spacing before and after it** to keep the layout clean and readable.

## Text Formatting Tags in HTML

{{< youtubeLite id="c0QI7b7IoAo" label="Text Formatting Tags in HTML" >}}

HTML provides several tags that help you **format text**.
Let’s go through each one step by step with examples.

### 1. Making Text Bold in HTML

To make text appear **bold** in HTML,
you can use two different tags:

- `<strong>`
- `<b>`

Both make the text look bold,
but there’s an important difference:
`<strong>` has a **semantic meaning**,
which tells browsers and search engines that the text is **important or emphasized**.

So it’s always better to use `<strong>` instead of `<b>`,
especially when you want to highlight key information or an important message.

**Example:**

```html
<p>Learn <strong>HTML</strong> step by step.</p>
```

### 2. Making Text Italic in HTML

To make text appear **italic**,
you can use one of these two tags:

- `<em>`
- `<i>`

Both display the text in italics,
but `<em>` carries **semantic meaning**,
indicating that the text should be **emphasized or stressed**.

On the other hand, `<i>` is used purely for **styling** —
it changes how the text looks without adding meaning.

**Example:**

```html
<p>The <em>italic</em> word here adds emphasis to the meaning.</p>
```

**In short:**
If you want to **add emphasis** or indicate tone, use `<em>`.
If you just want **italic styling**, use `<i>`.

### 3. Underlining Text in HTML

To make **text or a specific word appear underlined** in HTML,
you can use the `<u>` tag.

**Example:**

```html
<p>This is an example of <u>underlined text</u> in HTML.</p>
```

The `<u>` tag makes the text appear as if it’s underlined.
It’s useful when you want to **draw attention** to a specific word or phrase.

**But be careful:**
Try not to use `<u>` for text that contains links,
so users don’t confuse it with a hyperlink.

### 4. Highlighting Text in HTML

To make **text look like it’s highlighted with a yellow marker**,
you can use the `<mark>` tag in HTML.

**Example:**

```html
<p>This is an example of <mark>highlighted text</mark> in HTML.</p>
```

The `<mark>` tag displays text with a default **yellow background**,
and it’s great for **emphasizing important words**
or **drawing attention** to a key part of the page.

### 5. Making Text Smaller in HTML

To make **text or a specific word smaller than the normal size** in HTML,
you can use the `<small>` tag.

**Example:**

```html
<p>This is an example of <small>small text</small> in HTML.</p>
```

The `<small>` tag slightly reduces the text size
and is often used for **side notes** or **secondary information**,
like copyrights or disclaimers.

### 6. Superscript and Subscript Text in HTML

In HTML, there are two similar-looking tags,
but each one has a different purpose:

- `<sup>`
- `<sub>`

Both are used to format text **either above or below the baseline**.

Here’s the simple difference:

- `<sup>` (think of the heavy “p” 😄) makes the text appear **above the line**.
- `<sub>` (the light “b”) makes the text appear **below the line**.

**Examples:**

```html
<p>This is an example of <sup>superscript</sup> text in HTML.</p>
<p>This is an example of <sub>subscript</sub> text in HTML.</p>
```

These tags are very useful for **mathematical equations** or **chemical formulas**,
like this:

```html
<p>H<sub>2</sub>O or X<sup>2</sup> = 4</p>
```

### 7. The `<del>` and `<ins>` Tags in HTML

In HTML, there are two important tags that help you show **text changes** —
for example, when a sentence or word has been removed or replaced.

- `<del>` — represents **deleted text**
- `<ins>` — represents **inserted text**

**Basic Example:**

```html
<p>She <del>worked</del> <ins>works</ins> here.</p>
```

In this example, the word “worked” will appear with a line through it,
showing it was deleted,
while “works” will appear normally (or slightly underlined depending on the browser),
indicating it was added.

### Adding More Details

You can also include extra information using the `cite` and `datetime` attributes
to show **why** and **when** the text was changed.

**Advanced Example:**

```html
<p>
  The sentence was changed from
  <del cite="https://codezelo.com/change-log" datetime="2026-01-01">old</del>
  to
  <ins cite="https://codezelo.com/change-log" datetime="2026-10-01">new</ins>.
</p>
```

This way, both users and search engines can understand **when** the change happened
and **where** it came from.

**In short:**

- `<del>` → deleted text
- `<ins>` → inserted text
- `cite` → source of the change
- `datetime` → date of the change
