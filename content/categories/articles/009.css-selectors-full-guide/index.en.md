---
title: "Master 30 Essential & Advanced CSS Selectors for Professional Designs"
description: "Learn all types of CSS Selectors, from basics to the latest CSS4 selectors, with clear examples and practical applications. Master your designs like a pro effortlessly."
draft: false
categories: ["articles"]
tags: ["learn-css"]
authors:
  - mahmoudadel
series: ["css-tutorial"]
series_order: 2
slug: "css-selectors-full-guide"
weight: -9
---

**CSS Selectors** are the tools that tell your stylesheet exactly *which* HTML element you want to style.
And if you don’t pick the right element? One of two things happens:
your style won’t show up at all… or it ends up affecting something you never intended.
That’s why you hear people say:

**“The code looks right… but the CSS isn’t working!”**

Knowing how to use selectors correctly is the foundation of writing clean, reliable CSS.

But before we can say:
“Apply this style to that element,”
we need to understand something important: **How does the browser actually read your HTML?**
And how does it turn that raw code into a structured layout called the **DOM Tree**?

## What Is the DOM Tree?

Let’s take a quick look behind the scenes of what happens the moment you open any web page.

The browser reads your HTML file **line by line**, from top to bottom.
Every tag it encounters becomes a real element inside something called the:

> **Document Object Model (DOM)**

Think of the DOM as a **well-organized map** of everything on your page:
Who’s the parent?
Who are the children?
Which element lives inside which?
What’s the structure of the entire page?

For example:

* The first element in every page is `<html>` — the **root**.
* Inside it, you’ll find `<head>` — the part users don’t see.
* Then comes `<body>` — everything your visitors interact with.
* Inside the body you might have a `<div>`, and inside that a `<p>`, and so on.

The browser turns all of this into connected **nodes**, forming a tree-like structure.

Once the DOM tree is built, CSS jumps into action.
It starts scanning through the structure to find out:

Which elements should receive this style?
Do I target them by tag name?
By class?
By ID?
Or by using another type of selector?

### **In Short:**

The **DOM** is the browser’s internal, structured version of your HTML page,
and it’s what allows **CSS** to locate and style any element it needs.

## CSS Selectors — How Do We Target Elements?

Now we reach the fun part:
**How do we actually select HTML elements using CSS selectors?**

A **selector** is simply the instruction we give CSS to say:

> “Apply this style… to *this specific* element.”

Next, we’ll walk through the different types of selectors with clear, practical examples so everything makes sense.

### 1. Selecting Elements by Tag Name – **Element Selector**

The simplest way to target an element in CSS is by using its **tag name**,
like `p`, `h1`, `div`, and so on.

For example, if your HTML looks like this:

```html
<p>HTML is a HyperText Markup Language</p>
<p>CSS is a Cascading Style Sheet</p>
```

And your CSS is:

```css
p {
  color: blue;
}
```

You’re basically telling the browser:

> “Every `<p>` element on the page should be blue.”

That means **all paragraphs** will receive the same styling.
This method is perfect when you want every element of the same type to share the same look.

### 2. Selecting Elements by Class – **Class Selector**

This is one of the most commonly used and most powerful selectors in CSS.
You add a class to an element in your HTML, then target it in CSS using a **dot `.`**.

HTML:

```html
<p class="note">This paragraph has the ‘note’ class.</p>
<p>This is a normal paragraph.</p>
```

CSS:

```css
.note {
  color: green;
}
```

Here, the style applies **only** to the element with the `note` class.
That’s the beauty of classes—you can:

* Group different elements under the same styling
* Reuse the same class multiple times
* Control specific parts of the page without affecting everything else

> **Why Class Names Matter**

Choosing your class names correctly is extremely important.

A few simple rules:

* Use **clear, meaningful names**
* Avoid generic or visual names like `red`, `big`, or `x`
* When using multiple words, stick to **kebab-case**

Examples:

```html
<button class="btn btn-primary"></button>
```

**Good examples:**

```html
<div class="card"></div>
<button class="btn btn-primary"></button>
<ul class="nav-list"></ul>
```

**Bad examples (and why):**

```html
<div class="red"></div>          <!-- Color-based name, not functional -->
<div class="big-div"></div>      <!-- Describes appearance, not purpose -->
<div class="x"></div>            <!-- Meaningless name -->
```

### 3. Selecting an Element by Its ID – **ID Selector**

An **ID** works a lot like a class…
but the key difference is that an ID is meant for **one unique element** on the entire page.
In CSS, we target it using the **`#` symbol**.

**Example:**

HTML:

```html
<h1 id="main-title">Main Heading</h1>
```

CSS:

```css
#main-title {
  color: red;
}
```

This is perfect for elements that appear only once in a layout, such as:
the header, the logo, the main slider, the footer, etc.

> ⚠️ A Very Important Note

An **ID must not be repeated** within the same page.
So this is *incorrect*:

```html
<h1 id="main-title">Main Title</h1>
<h2 id="main-title">Sub Title</h2>
```

Repeated IDs cause issues with:

* CSS
* JavaScript
* SEO as well

Browsers expect each ID to be **unique**.

> Writing IDs the Right Way

Just like classes, IDs have some naming rules you should follow:

* Must start with a **letter**, not a number
* Prefer **kebab-case** or **camelCase**
* Keep it short but meaningful
* And most importantly: **never reuse it**

**Valid ID examples:**

```html
<div id="main-header"></div>
<input id="userEmail">
<section id="heroSection"></section>
```

**Invalid ID examples:**

```html
<div id="1header"></div>          <!-- Starts with a number -->
<div id="header header2"></div>   <!-- Contains a space -->
<div id="test"></div>
<div id="test"></div>             <!-- Duplicate ID -->
```

> Should You Use a Class or an ID?

Great question — here’s the golden rule:

* **For CSS styling → use a class**
* **For JavaScript targeting or unique page elements → use an ID**

Classes are flexible, reusable, and ideal for styling.
IDs are best reserved for unique elements or JavaScript hooks.

### 4. Selecting Elements Based on Their Relationship – **Relationship Selectors**

Sometimes you won’t have a class or ID on every element—
and in some cases, adding one may not even make sense.
That’s where **relationship selectors** come in.
They let you target elements based on how they relate to other elements in the page structure.

#### 4.1 The “Element Inside Element” Selector — **Descendant Selector**

This selector targets any element *inside* another element, even if it’s **not a direct child**.

**HTML:**

```html
<div>
  <p>This paragraph is inside the div.</p> <!-- This will be styled -->
</div>

<p>This paragraph is outside the div.</p>
```

**CSS:**

```css
div p {
  color: purple;
}
```

**Result:**
Only the `<p>` inside the `<div>` gets the new color.

If elements are nested deeper:

```html
<div>
  <p>Direct child paragraph.</p>
  <main>
    <p>Indirect child paragraph.</p> <!-- This also gets styled -->
  </main>
</div>

<p>Outside the div.</p>
```

The paragraph inside `<main>` will also be styled because it’s still a **descendant** of the `div`, even though it’s not a direct child.

This selector doesn’t care whether the element is a child, grandchild, or further down the tree.

#### 4.2 Direct Child Only — **Child Selector**

This selector targets **direct children**—not grandchildren, not deeper levels—just the immediate child elements.

**HTML:**

```html
<div>
  <p>This is a direct child.</p>
  <span>
    <p>This is a grandchild.</p>
  </span>
</div>
```

**CSS:**

```css
div > p {
  color: orange;
}
```

**Result:**
Only the first paragraph changes color.
The second one, inside the `<span>`, won’t be affected because it’s **not** a direct child.

#### 4.3 The “Next Sibling” Selector — **Adjacent Sibling Selector**

This selector targets the element that appears **immediately after** another element.

**HTML:**

```html
<h2>Heading</h2>
<p>This is the first paragraph after the h2.</p>
<p>This is another paragraph.</p>
```

**CSS:**

```css
h2 + p {
  color: red;
}
```

**Result:**
Only the **first** paragraph that comes right after the `<h2>` gets the styling.
This is great for formatting elements that appear in sequence—like product details, subtitles, or any content arranged one after another.

#### 4.4 Any Following Sibling — **General Sibling Selector**

This selector targets **any sibling element that comes after another**, not necessarily the one immediately after.

**HTML:**

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

**CSS:**

```css
h2 ~ p {
  color: teal;
}
```

**Result:**
Every paragraph that appears after the `<h2>`—at the same level—gets the new color, not just the first one.

> **Quick Recap**

At this point, you can target almost any element on the page using:

* Element selectors
* Class selectors
* ID selectors
* Relationship selectors

These fundamentals are essential, because **every style you write depends on choosing the right element in the first place**.

### 5. Selecting Elements by Attributes – **Attribute Selectors**

Instead of targeting an element by its tag, class, or ID, you can select it based on the **attributes it has**.
This is extremely useful for elements like `<input>`, `<a>`, and any tag that relies on different attributes.

**Basic Example:**

**CSS:**

```css
input[type="text"] {
  border-color: blue;
}

input[type="email"] {
  border-color: green;
}

input[required] {
  background-color: yellow;
}

[required] {
  outline: 2px solid orange;
}
```

Here, you're selecting elements based on their attribute values, or simply the presence of an attribute.

**Advanced Attribute Targeting**

You aren't limited to exact matches — CSS lets you use **partial matching** to style elements in more flexible ways.

#### 5.1 Attribute Contains Text — `*=`

```css
input[type*="mail"] {
  border-color: green;
}
```

**HTML:**

```html
<input type="email" />
```

**Result:**
This selector targets any element whose attribute **contains** the word `mail`.
It doesn’t need to match the full value—just a part of it.
The `*` symbol means **“contains this text anywhere inside the attribute value.”**

#### 5.2 Attribute Starts With — `^=`

```css
input[type^="ema"] {
  border-color: green;
}
```

This applies to any element whose attribute value **starts with** the text you specify.
Here, any type beginning with `ema` (such as `email`) will be matched.

#### 5.3 Attribute Ends With — `$=`

```css
input[type$="ail"] {
  background-color: red;
}
```

This targets any element whose attribute value **ends with** the text you provide—
in this case, anything ending with `ail`, like `email`.

**Quick Attribute Selector Cheat Sheet**

* `[attr]` → Selects elements **that have the attribute**, regardless of value
* `[attr="value"]` → Matches a **specific attribute value**
* `[attr*="text"]` → Attribute **contains** the given text
* `[attr^="text"]` → Attribute **starts with** the given text
* `[attr$="text"]` → Attribute **ends with** the given text

### 6. Child-Based Selectors

Child-based selectors let you target elements based **solely on their position inside a parent**, no matter what tag they use.
It doesn’t matter whether the element is a `div`, `p`, or `li`—what matters is **its order among its siblings**.

#### 6.1 The `:nth-child()` Selector

This selector targets the **X-th child** inside a parent.

**Syntax:**

```css
element:nth-child(n)
```

**Example 1: Select the second child inside a parent**

```css
div p:nth-child(2) {
  color: red;
}
```

**How it works:**

* It selects the **second child inside the `<div>`**.
* If the second child isn’t a `<p>`, nothing happens — because it needs both **type match + position match**.

**Example 2: Select all even children**

```css
li:nth-child(even) {
  background: #f0f0f0;
}
```

**What happens:**

* Styles apply to even items: 2, 4, 6, 8…
* Using `odd` targets 1, 3, 5, 7…

**Example 3: Use a pattern with a formula**

```css
li:nth-child(3n + 1) {
  color: blue;
}
```

**Explanation:**

* This selects children numbered:
  **1, 4, 7, 10, ...**
* `3n` means “every 3 elements,” and `+1` sets the starting point.

#### 6.2 The `:nth-last-child()` Selector

This works exactly like `nth-child()`, but counting starts **from the end**.

**Example:**

```css
p:nth-last-child(1) {
  font-weight: bold;
}
```

**What happens:**

* `1` from the end = **the last child**.
* Style applies only if the last child is a `<p>`.

#### 6.3 The `:first-child` Selector

Targets the **first child** inside a parent.

```css
div p:first-child {
  color: green;
}
```

**How it works:**

* Applies only if the *first child* inside the `<div>` is a `<p>`.
* If the first element is something else (like a `<span>`), nothing applies.

#### 6.4 The `:last-child` Selector

Targets the **last child** inside a parent.

```css
ul li:last-child {
  margin-bottom: 0;
}
```

**What happens:**

* Selects the last `<li>` in a `<ul>`.
* Very useful for removing spacing at the end of lists.

#### 6.5 The `:only-child` Selector

Matches an element only if it’s the **only child** inside its parent.

```css
div p:only-child {
  font-size: 20px;
  color: purple;
}
```

**Behavior:**

* Works only when the `<div>` contains **exactly one element**, and that element is a `<p>`.
* If there’s a `<p>` plus any other element (like `<span>`), the selector won’t match.

**Quick Summary**

| Selector           | What it does                                         |
| ------------------ | ---------------------------------------------------- |
| `nth-child()`      | Selects a child based on its position from the start |
| `nth-last-child()` | Selects a child based on its position from the end   |
| `first-child`      | Targets the first child inside a parent              |
| `last-child`       | Targets the last child                               |
| `only-child`       | Matches when the element is the only child           |

### 7. Type-Based Selectors

Type-based selectors let you target elements based on **their position among siblings of the same tag type**.
Here, **the element type matters**, unlike child-based selectors where only the position mattered.

#### 7.1 The `:nth-of-type()` Selector

This selector targets the **X-th element of its type** inside a parent.

**Syntax:**

```css
element:nth-of-type(n)
```

**Example 1: Select the second `<p>` inside a parent**

```css
div p:nth-of-type(2) {
  color: red;
}
```

**How it works:**

* It doesn’t care about the element’s position among *all* siblings.
* It only cares about which `<p>` number it is.
* Even if there are several `<div>` or `<span>` elements before it, that doesn’t matter.

**Example 2: Select all even `<li>` elements**

```css
li:nth-of-type(even) {
  background: #f0f0f0;
}
```

**What happens:**

* It counts only the `<li>` elements.
* Styles apply to the even ones: 2, 4, 6, and so on.

**Example 3: Use a formula**

```css
p:nth-of-type(3n + 1) {
  font-weight: bold;
}
```

**Explanation:**

* Selects paragraphs number: **1, 4, 7, 10…**
* The formula applies only to `<p>` elements.

#### 7.2 The `:nth-last-of-type()` Selector

Works just like `nth-of-type()`, but counting starts **from the end**.

**Example:**

```css
p:nth-last-of-type(1) {
  color: blue;
}
```

**What happens:**

* Selects the **last `<p>` element** inside the parent.
* Other element types before or after it don’t matter.

#### 7.3 The `:first-of-type` Selector

Targets the **first element of its type** within a parent.

**Example:**

```css
section h2:first-of-type {
  margin-top: 0;
}
```

**Explanation:**

* Selects the first `<h2>` inside the `<section>`.
* It doesn’t matter if the section starts with an `<h3>` or `<p>` — the rule applies only to the first `<h2>`.

#### 7.4 The `:last-of-type` Selector

Targets the **last element of its type** inside a parent.

**Example:**

```css
article p:last-of-type {
  color: green;
}
```

**Explanation:**

* Selects the *last* `<p>` inside the `<article>`.
* Even if there are other elements after it, that doesn't change the selection.

#### 7.5 The `:only-of-type` Selector

Matches an element only if it’s **the only one of its type** inside its parent.

**Example:**

```css
div span:only-of-type {
  font-size: 20px;
  color: purple;
}
```

**How it works:**

* Applies only if the parent `<div>` contains **exactly one `<span>`**.
* Works even if there are other element types (like `<p>`).
* If there are two `<span>` elements, it won’t match.

#### Quick Comparison: Child-Based vs. Type-Based Selectors

| Selector Group  | What It Cares About                                 |
| --------------- | --------------------------------------------------- |
| **Child-based** | Position among *all* siblings (type doesn’t matter) |
| **Type-based**  | Position among siblings of the *same type*          |


### 8. The Universal Selector

The **Universal selector** is the simplest CSS selector: `*`.
The asterisk represents **all elements** in the document, or all elements within a specific scope.

```css
* {
  box-sizing: border-box;
}
```

This means: apply `box-sizing: border-box` to **every element** on the page.

#### Simple Examples

##### 1. Apply to all elements

```css
* {
  margin: 0;
  padding: 0;
}
```

**Explanation:**
Removes default spacing for all elements — a common lightweight CSS reset.

##### 2. Limit the scope

```css
.main * {
  color: #333;
}
```

**What happens:**
Styles apply to all elements **inside `.main`**, not the entire page.
Great for controlling a section without affecting other areas.

##### 3. Combine with child or type selectors

```css
.container > * {
  margin-bottom: 10px;
}
```

**Explanation:**
Targets all **direct children** of `.container` and adds spacing between them.
Saves you from writing long lists of individual element rules.

#### Advanced Uses & Benefits

* **Lightweight Reset / Normalize:** Apply universal rules like `box-sizing`, `margin`, and `padding` across the project.
* **Scoped general rules:** For example, `.card * { color: inherit; }` ensures all elements inside a card inherit colors.
* **Style children without knowing their types:** Useful when a parent contains various elements and you want consistent spacing or styling.

#### Combining the Universal Selector with Other Selectors

##### 1. With class or ID

```css
#sidebar * {
  font-size: 14px;
}
```

* Limits effect to all elements inside `#sidebar`.

##### 2. With attributes

```css
form[data-form="signup"] * {
  line-height: 1.6;
}
```

* Ensures consistent styling inside a specific form.

##### 3. With pseudo-classes or child selectors

```css
ul li:first-child > * {
  color: blue;
}
```

* All elements inside the first `<li>` of the `<ul>` will be blue.

#### Universal Selector & Specificity

* The `*` has **almost zero specificity** — like general rules.
* When combined with a class or ID (e.g., `.main *`), specificity comes from the other components.
* General rule: **more specific selectors override universal ones**.

#### Performance Tips

* Using `*` globally and extensively can affect rendering because the browser must check every element.
* Best practice: **limit the scope** (`.component *`) instead of targeting the entire document.
* Avoid complex combinators or pseudo-classes with `*` on large pages—it increases DOM computations.

#### Common Pitfalls

* `*` does **not** match pseudo-elements (`::before`, `::after`) unless specified.
* Applying heavy properties like `transform` or `filter` to `*` can hurt performance.
* Avoid relying on `*` with `!important`; organize rules from general → specific.

#### Practical Tips / Best Practices

1. Use `*` for simple resets:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

2. Limit the scope whenever possible:

```css
.article * { color: inherit; }
```

3. Combine with child combinators for spacing:

```css
.list > * + * { margin-top: 8px; }
```

4. Organize CSS from general → specific to avoid specificity issues.

#### Full Example (HTML + CSS)

```html
<!-- HTML -->
<div class="card">
  <h2>Title</h2>
  <p>Paragraph one.</p>
  <img src="#" alt="img">
  <button>Click</button>
</div>
```

```css
/* CSS */
/* Reset box model globally */
*, *::before, *::after {
  box-sizing: border-box;
}

/* General styling for the card only */
.card * {
  font-family: "Arial", sans-serif;
  color: #222;
}

/* Uniform spacing between direct children */
.card > * + * {
  margin-top: 12px;
}

/* Target specific elements inside the card */
.card img {
  max-width: 100%;
  display: block;
}
```

**What happens here:**

* The first rule makes box-sizing calculations easier globally.
* The second rule applies font and color to **all elements inside `.card` only**, not the whole page.
* The third rule adds consistent spacing between `.card`’s children without listing their types.


### 9. User-Action Pseudo-Classes

User-action pseudo-classes apply **styles when users interact with elements**—like hovering, clicking, or focusing.
They are essential for adding life and interactivity to your website.

Let’s break down the most common ones with examples.

#### 9.1 `:hover`

Triggers when the user **moves the mouse over** an element without clicking.

**HTML:**

```html
<button class="btn">Click Me</button>
```

**CSS:**

```css
.btn {
  background-color: #eee;
  padding: 10px 20px;
  border: 1px solid #ccc;
}

.btn:hover {
  background-color: #333;
  color: #fff;
  cursor: pointer;
}
```

**What happens:**
When the mouse hovers over the button, the background changes from light gray to dark, the text turns white, and the cursor becomes a pointer.
This gives a visual cue that the element is clickable.

#### 9.2 `:focus`

Triggers when an element, like an input or textarea, **receives focus**, either by mouse click or keyboard navigation.

**HTML:**

```html
<input type="text" placeholder="Enter your name">
```

**CSS:**

```css
input {
  border: 1px solid #aaa;
  padding: 8px;
}

input:focus {
  border-color: dodgerblue;
  outline: none;
  box-shadow: 0 0 5px rgba(30, 144, 255, 0.4);
}
```

**What happens:**
When the user clicks or tabs into the input, the border turns blue and a subtle shadow appears—giving a clear visual indication that the field is active.

#### 9.3 `:active`

Triggers **while an element is being clicked**, like a button or link.

**HTML:**

```html
<a href="#" class="link">Click the Link</a>
```

**CSS:**

```css
.link {
  color: teal;
  text-decoration: none;
}

.link:active {
  color: red;
}
```

**What happens:**
The moment the link is clicked, its color briefly changes to red—providing immediate feedback to the user.

#### 9.4 `:visited`

Applies to links the user has **visited before**.

**HTML:**

```html
<a href="https://example.com" class="nav-link">External Page</a>
```

**CSS:**

```css
.nav-link:visited {
  color: purple;
}
```

**What happens:**
If the user has visited the link before, it appears purple.
This helps users navigate, especially in long menus or blog posts.

> **Note:** For privacy reasons, CSS can only change **limited properties**, like text color, to prevent revealing browsing history.

#### Practical Example — All Pseudo-Classes Together

**HTML:**

```html
<button class="cta">Subscribe Now</button>
```

**CSS:**

```css
.cta {
  padding: 12px 25px;
  font-size: 18px;
  background: #ddd;
  border: 1px solid #aaa;
  transition: 0.2s;
}

.cta:hover {
  background: #333;
  color: #fff;
}

.cta:active {
  transform: scale(0.97);
}

.cta:focus {
  outline: 2px solid dodgerblue;
}
```

**What happens here:**

* **Hover:** Background and text color change when the mouse is over the button.
* **Active:** Button slightly shrinks when clicked, adding a subtle press effect.
* **Focus:** Blue outline appears if the button is reached via keyboard (Tab), improving accessibility.

This combination makes the button feel interactive, polished, and user-friendly.

#### Advanced Notes & Applications

##### 1. Combining Multiple Pseudo-Classes

```css
button:hover:active {
  background: firebrick;
}
```

**Meaning:**
When the user is **hovering over the button** *and* **clicking it at the same time**, apply a special color.
This creates a more dynamic, interactive effect.

##### 2. Using with Other Selectors

```css
.form-group input:focus {
  border-color: #0d6efd;
}
```

* Targets inputs **inside `.form-group`** only when they are focused.
* Useful for forms with multiple sections or grouped fields.

##### 3. Animations on `:hover`

```css
.card:hover {
  transform: translateY(-5px);
}
```

* Adds subtle motion when hovering over elements.
* Great for cards, buttons, or interactive components to give a sense of depth.

##### 4. Consider Mobile Devices

* Mobile devices **don’t support hover**, but some browsers may interpret a tap as hover.
* Best practice: keep hover effects **light and non-critical**, so the experience works well on touch screens.

### 10. State / Selecting Pseudo-Classes

State pseudo-classes target **the current state of an element**.
They are commonly used with form elements like `input`, `textarea`, `select`, `checkbox`, and `radio`.

These selectors are essential for building professional forms because they let you **change the appearance of elements based on their state**—whether valid, invalid, checked, or disabled.

Here’s a step-by-step guide with real examples.

#### 10.1 `:checked`

Applies to elements that can be **checked**, such as:

* Checkboxes
* Radio buttons
* `<option>` elements inside `<select>`

**Example:**

```html
<label>
  <input type="checkbox" id="agree" />
  I agree to the terms
</label>
```

```css
input:checked + label,
input:checked {
  accent-color: green;
}
```

**What happens:**
When the user checks the box, the element enters the `checked` state.
You can change its color with `accent-color` or style the label that follows.

* Before: empty checkbox
* After: checkbox turns green

#### 10.2 `:disabled`

Targets elements that are **disabled** and not interactive.

**Example:**

```html
<input type="text" placeholder="Not available" disabled>
```

```css
input:disabled {
  background-color: #eee;
  color: #999;
  cursor: not-allowed;
}
```

**What happens:**

* The input cannot be typed into or clicked.
* The faded style shows the user it’s inactive.
* Cursor changes to indicate it’s not allowed.

> Useful for UI flows where certain actions must happen before a step is unlocked.

#### 10.3 `:valid`

Applies when the input value is **valid** according to its type or constraints.

**Example:**

```html
<input type="email" placeholder="Enter your email">
```

```css
input:valid {
  border-color: green;
}
```

**What happens:**

* When the user enters a **correct email** (with `@` and `.`), the border turns green.
* Invalid input will not trigger this style.

> Ideal for real-time validation feedback.

#### 10.4 `:invalid`

The opposite of `:valid`; applies when the input value is **invalid**.

**Example:**

```html
<input type="email" placeholder="Enter your email" required>
```

```css
input:invalid {
  border-color: red;
}
```

**What happens:**

* The border turns red as soon as the user types an incorrect value.
* An empty required field is also considered invalid.

#### Full Example — Interactive Form

```html
<form>
  <label>Email</label>
  <input type="email" required>

  <label>
    <input type="checkbox" id="terms">
    I agree to the terms
  </label>

  <button disabled id="submit-btn">Sign Up</button>
</form>
```

```css
/* Valid / Invalid Inputs */
input:valid {
  border: 2px solid green;
}

input:invalid {
  border: 2px solid red;
}

/* Checkbox checked */
input[type="checkbox"]:checked + span,
input[type="checkbox"]:checked {
  accent-color: green;
}

/* Disabled Button */
button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
```

**What happens here:**

* **Email input**

  * Green border if valid
  * Red border if invalid
* **Checkbox**

  * Changes color when checked
* **Submit button**

  * Disabled until the user enters a valid email **and** checks the checkbox

All of this works **without a single line of JavaScript**.

### 11. UI Pseudo-Classes – Advanced Interface States

UI pseudo-classes let you **control the element itself** or **its children** based on the current user interaction.
They’re essential for building **interactive forms** without a single line of JavaScript.

The main pseudo-classes include:

1. `:focus-within`
2. `:focus-visible`
3. `:enabled`
4. `:required`
5. `:optional`

Let’s explore them with real-world examples.

#### 11.1 `:focus-within`

Applies to a **parent element** as long as **any child inside it receives focus**.

Perfect for forms when you want the entire `<div>` to highlight once the user clicks into an input.

**Example:**

```html
<div class="form-group">
  <label>Email</label>
  <input type="email" required>
</div>
```

```css
.form-group {
  padding: 10px;
  border: 1px solid #ccc;
}

.form-group:focus-within {
  border-color: dodgerblue;
  background-color: #f0f8ff;
}
```

**What happens:**

* When the user clicks the input, the **whole `.form-group`** gains focus styles.
* The border and background color change, signaling the “active typing area.”

> Seen in interfaces like Google Forms or Stripe Checkout.

#### 11.2 `:focus-visible`

Triggers only when the element receives focus **via keyboard navigation**, not mouse.
Essential for accessibility (keyboard users, screen readers).

**Example:**

```html
<button class="btn">Book Now</button>
```

```css
.btn:focus-visible {
  outline: 3px solid #0d6efd;
  outline-offset: 4px;
}
```

**Behavior:**

* No outline when clicked with a mouse.
* Outline appears when focused with `Tab` key.
* Improves accessibility and keyboard navigation.

#### 11.3 `:enabled`

Targets elements that are **active/enabled**, i.e., not disabled.

Useful for distinguishing active inputs or buttons from disabled ones.

**Example:**

```html
<input type="text" placeholder="Type here">
```

```css
input:enabled {
  background: #fff;
  cursor: text;
}
```

**Behavior:**

* Styling applies only to inputs that are enabled.
* Helps create clear UI states for toggling between enabled/disabled.

#### 11.4 `:required`

Targets inputs with the `required` attribute.

**Example:**

```html
<input type="text" required placeholder="Full Name">
```

```css
input:required {
  border-left: 4px solid orange;
}
```

**Behavior:**

* Highlights mandatory fields with an orange border.
* Clearly signals the user which fields are required.

#### 11.5 `:optional`

Targets inputs that **are not required**.

**Example:**

```html
<input type="text" placeholder="Notes (optional)">
```

```css
input:optional {
  border-left: 4px solid #ccc;
}
```

**Behavior:**

* Optional fields are visually distinct.
* Helps differentiate between required and optional inputs.

#### Full Example – Interactive Form

```html
<form class="my-form">

  <div class="form-group">
    <label>Email</label>
    <input type="email" required>
  </div>

  <div class="form-group">
    <label>Name (optional)</label>
    <input type="text">
  </div>

  <button class="btn" disabled>Continue</button>

</form>
```

```css
/* Focus Within */
.form-group:focus-within {
  border-color: #0d6efd;
  background: #eef6ff;
}

/* Required Fields */
input:required {
  border-left: 4px solid orange;
}

/* Optional Fields */
input:optional {
  border-left: 4px solid #ccc;
}

/* Disabled / Enabled Buttons */
button:disabled {
  background: #999;
  cursor: not-allowed;
}

button:enabled {
  background: #0d6efd;
  color: #fff;
  cursor: pointer;
}

/* Focus Visible for Accessibility */
.btn:focus-visible {
  outline: 3px solid #0d6efd;
  outline-offset: 3px;
}
```

**Result:**

* Mandatory fields are clearly marked.
* Form responds immediately as the user types.
* Submit button visually shows enabled/disabled state.
* Fully accessible and professional experience **without JavaScript**.

### 12. New CSS4 Logical Selectors

CSS4 introduced powerful **logical selectors** that allow you to apply styles **based on conditions** directly in CSS.
You can select elements depending on their **contents** or **child elements**, something that was nearly impossible before CSS4.

#### 12.1 `:has()`

One of the most powerful selectors in CSS—it lets you “look forward” instead of just selecting children.

**Idea:**

Select a **parent element** if it **contains a specific child or state**.

**Example 1 – Highlight `div` containing an active button:**

```css
div:has(button.active) {
  border: 2px solid green;
}
```

* Targets the `div`, not the button, **based on the child’s state**.

**Example 2 – Highlight `form` with invalid input:**

```css
form:has(input:invalid) {
  background: #ffe6e6;
}
```

* Styles the form if it contains an input that is invalid, without JS.

**Example 3 – Highlight product cards with discounted prices:**

```css
.product:has(.price.discount) {
  box-shadow: 0 0 15px orange;
}
```

* Detects conditions inside elements smartly.

#### 12.2 `:is()`

A **shortcut selector** that simplifies long, repetitive selectors.

**Example – Apply styles to multiple elements inside `.card`:**

```css
.card :is(h2, h3, p) {
  margin-bottom: 10px;
}
```

* Instead of writing:

```css
.card h2,
.card h3,
.card p { ... }
```

* You write it once using `:is()`.

#### 12.3 `:where()`

Works like `:is()` but **without adding specificity** (specificity = 0).

Useful for applying **reset styles** without affecting other CSS rules.

**Example – Reset margins for all elements inside a section:**

```css
section :where(h1, h2, h3, p, ul, li) {
  margin: 0;
  padding: 0;
}
```

* Because `:where()` has zero specificity, it **does not override existing styles**.

#### 12.4 `:not()`

Selects elements **except** those you specify.

**Example – Style all buttons except `.danger`:**

```css
button:not(.danger) {
  background: #007bff;
  color: #fff;
}
```

**Example – Exclude first list item:**

```css
ul li:not(:first-child) {
  border-top: 1px solid #ddd;
}
```

* Applies styles to all except the specified elements.

#### Full Practical Example – Product Cards

**HTML:**

```html
<div class="product">
  <h3>Product A</h3>
  <span class="price">$90</span>
</div>

<div class="product">
  <h3>Product B</h3>
  <span class="price discount">$49</span>
</div>

<div class="product featured">
  <h3>Product C</h3>
  <span class="price">$120</span>
</div>
```

**CSS:**

```css
/* Highlight cards with discounted price */
.product:has(.price.discount) {
  border: 2px solid orange;
}

/* Reduce margin for titles and prices */
.product :is(h3, .price) {
  margin-bottom: 8px;
}

/* Fade out content except h3 in featured products */
.product.featured :not(h3) {
  opacity: 0.7;
}

/* General reset without specificity */
.product :where(*) {
  padding: 0;
}
```

#### Quick Comparison Table

| Selector   | Function                                |
| ---------- | --------------------------------------- |
| `:has()`   | Selects a parent based on its content   |
| `:is()`    | Shortcut for multiple selectors         |
| `:where()` | Like `:is()`, but with zero specificity |
| `:not()`   | Excludes elements from selection        |


This demonstrates how **modern CSS logical selectors** let you write cleaner, more dynamic, and interactive styles **without relying on JavaScript**.

### 13. CSS Pseudo-elements

**Pseudo-elements** let you style **specific parts of an element** as if they were separate elements.
You can target things like the **first letter**, or add content **before or after an element**—without changing the HTML.
These are powerful tools for UI and typography design.

#### 13.1 `::before`

Adds content **before the element** without modifying HTML.

**Example – Add an icon before a section title:**

```css
h2::before {
  content: "🔹 ";
  font-size: 24px;
  color: #3498db;
}
```

* `::before` inserts content before the original element.
* You can also use an image:

```css
content: url(icon.png);
```

**Use case:**
Perfect for decorating headings, lists, or notifications without extra HTML.

#### 13.2 `::after`

Works like `::before` but adds content **after the element**.

**Example – Add “New” label after product names:**

```css
.product.new::after {
  content: " (New)";
  color: green;
  font-weight: bold;
}
```

**Example – Decorative bar below a heading:**

```css
h3::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: #ff9800;
  margin-top: 6px;
}
```

* Must always include `content: ""` even if empty.
* `display: block` ensures it appears on a new line.

#### 13.3 `::first-letter`

Targets **the first letter** of a block element.

**Example – Drop Cap effect:**

```css
p::first-letter {
  font-size: 3rem;
  color: #b63a3a;
  font-weight: bold;
  float: left;
  margin-right: 8px;
}
```

* Enlarges the first letter to create a magazine-like effect.
* Works best on block or inline-block elements.
* The letter may include punctuation depending on language.

#### 13.4 `::selection`

Styles **text selected by the user**.

**Example – Custom selection color:**

```css
::selection {
  background: #1e88e5;
  color: #fff;
}
```

* Overrides the default blue highlight.
* Optional cross-browser support for Firefox:

```css
::-moz-selection {
  background: #1e88e5;
  color: #fff;
}
```

#### Full Practical Example – Combined Pseudo-elements

**HTML:**

```html
<h2 class="title">Welcome to CSS Guide</h2>

<p class="intro">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in magna sed lorem varius tincidunt.
</p>

<button class="cta">Subscribe</button>
```

**CSS:**

```css
/* Before heading */
.title::before {
  content: "★ ";
  color: gold;
  font-size: 20px;
}

/* After button */
.cta::after {
  content: " →";
  font-weight: bold;
}

/* First letter of paragraph */
.intro::first-letter {
  font-size: 2.7rem;
  color: #d35400;
  float: left;
  margin-right: 10px;
}

/* Text selection */
::selection {
  background: #333;
  color: #fff;
}
```

#### Quick Reference Table

| Pseudo-element   | Function                                 |
| ---------------- | ---------------------------------------- |
| `::before`       | Adds content **before** the element      |
| `::after`        | Adds content **after** the element       |
| `::first-letter` | Styles the **first letter** of a block   |
| `::selection`    | Customizes **text selection appearance** |


### 14. Grouping Selectors

**Grouping selectors** allow you to apply **the same CSS rules to multiple elements** without repeating the code.

**Syntax:**

```css
h1, h2, h3 {
  color: #333;
}
```

* The comma `,` works as **“or”**, meaning:
  Apply the same style to **h1, h2, and h3**.

**Example – Apply the same padding to multiple elements:**

```css
button, input, select {
  padding: 10px;
}
```

* This is useful for **forms, buttons, or repeated layouts** where multiple elements share the same styling.
* Keeps your CSS **cleaner and easier to maintain**.

### 15. Complex Selectors

**Complex selectors** are combinations of multiple selectors to create **precise targeting conditions**.
Each part of the line represents a *layer* of conditions.

In short, we **combine multiple selectors** in a single rule to style exactly what we want.

**Example:**

```css
ul li.item:first-child > a[href^="http"]
```

**Step-by-step breakdown:**

1. `ul` – selects inside any unordered list.
2. `li.item:first-child` – selects the first `<li>` **with the class `item`**.
3. `>` – means the next element must be a **direct child**.
4. `a[href^="http"]` – selects an `<a>` whose `href` **starts with "http"**.

**Result:**
It targets a link (`<a>`) inside the first `<li class="item">` of a `<ul>`, only if the link starts with `http`.

**Advanced example using `:has()`**

Select all `<div>` that contains a required `<input>`:

```css
div:has(input[required]) {
  border: 2px solid red;
}
```

* `:has()` allows CSS to **look inside the element**.
* If the `<div>` contains a required input, it gets a red border.

**Practical example:**

```html
<div class="field">
  <label>Name</label>
  <input type="text" required>
</div>

<div class="field">
  <label>Message</label>
  <input type="text">
</div>
```

```css
.field:has(input[required]) {
  background: #ffe5e5;
}
```

**Result:**

* The first div has a light red background because it contains a required input.
* The second div remains normal.

**Conclusion:**

If there’s one thing in CSS worth mastering from the start, it’s **CSS selectors**.

* Every style rule you write **depends heavily on selecting the right element**.
* You might not use every selector type in a single project, and that’s fine.
* What matters is **knowing your tools**, so when you need to target an element by type, order, relationship, state, or content, you **already know the solution**.

With practice, your use of selectors becomes professional, helping you build **cleaner, faster, and easier-to-maintain pages**.

**The secret of good CSS:** select the right element, in the right way.
