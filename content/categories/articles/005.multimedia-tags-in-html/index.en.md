---
title: "Master 3 Essential HTML Multimedia Tags img, video, audio) to Improve Website Performance"
description: "Stop breaking your layout! Learn how to properly implement <img>, <video>, and <audio> tags. Practical guide covers key attributes like loading, controls, and alt text for fast loading and accessibility. Code examples included!"
draft: false
categories: ["articles"]
tags: ["learn-html"]
authors:
  - mahmoudadel
series: ["html-tutorial"]
series_order: 5
slug: "multimedia-tags-in-html"
weight: -5
---

HTML provides many tags, and among the most important are the **multimedia tags**, which include three main elements:
the `<img>` tag for images, the `<video>` tag for videos, and the `<audio>` tag for audio files.

These tags allow you to **add various types of media to web pages**, giving them a **more attractive appearance and enhancing the user experience**.

## The `<img>` Tag in HTML

!['Image Tag in HTML'](images/image-tag-in-html.webp "Image Tag in HTML")

To insert an image into a web page using **HTML**, we use the `<img>` tag.

The `<img>` tag is a **self-closing tag**,
which makes sense because it **doesn’t contain any inner content**.
It is used solely to **display an image** on the page.

### The Most Important Attributes of the `<img>` Tag

#### 1. The `src` Attribute

The **`src`** attribute — short for **source** — is used to specify the **path of the image** you want to display.

The path can be **relative** or **absolute**:

- **Relative Path:**
  When the image exists within your project files.

```html
<img src="images/logo.png" alt="Website logo" />
```

In this example, the image is stored in a folder named `images` inside the project.

- **Absolute Path:**
  When the image is hosted on the internet.

```html
<img src="https://example.com/logo.png" alt="Website logo from the Internet" />
```

#### 2. The `alt` Attribute

The **`alt`** attribute stands for **alternative text**.

This text is displayed when the image fails to load for any reason.
It also helps search engines and accessibility tools **understand the image content**.

Example:

```html
<img src="profile.jpg" alt="Profile picture" />
```

> **Tip:**
> Use descriptive alternative text that accurately represents the image — this helps with **SEO (Search Engine Optimization)**.

#### 3. The `width` and `height` Attributes

The **`width`** and **`height`** attributes define the **dimensions** of the image (in pixels by default).

Example:

```html
<img src="banner.jpg" alt="Banner image" width="600" height="300" />
```

> **Note:**
> It’s better to control image size using **CSS**, rather than setting it directly in the tag:

```html
<img src="banner.jpg" alt="Banner image" class="banner" />
```

```css
.banner {
  width: 600px;
  height: 300px;
}
```

#### 4. The `loading` Attribute

The **`loading`** attribute helps improve **page loading performance**.

When you set its value to `"lazy"`,
the image won’t load until the user scrolls near it.
This greatly improves page speed — especially on image-heavy pages.

Example:

```html
<img src="gallery/photo1.jpg" alt="Gallery photo" loading="lazy" />
```

> **Pro Tip:**
> Always use `loading="lazy"` for images that are not visible in the initial viewport to optimize performance.

### Complete Example

```html
<img
  src="images/nature.jpg"
  alt="Beautiful nature scenery"
  width="500"
  height="300"
  loading="lazy"
/>
```

## The `<video>` Tag in HTML

!['Video Tag in HTML'](images/video-tag-in-html.webp "Video Tag in HTML")

If you want to add a **video** to your web page,
the tag you’ll use is `<video>`.

This tag is one of the **multimedia tags** in HTML,
and it allows you to **display a video directly on the page**, instead of making the user download it or open it on another site.

### Structure of the `<video>` Tag

The `<video>` tag has **an opening and a closing tag**, like this:

```html
<video src="video.mp4"></video>
```

However, we usually don’t write it like this,
because it’s better to include a `<source>` element inside it to specify the video file more clearly.
Here’s the correct and most common way to use it:

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
</video>
```

### The Most Common Attributes Used with the `<video>` Tag

#### 1. The `src` Attribute

Just like with images, this attribute defines the **path of the video**:

- It can be **relative** if the video is inside your project files.
- Or **absolute** if it’s hosted online.

Example:

```html
<video src="videos/intro.mp4" controls></video>
```

#### 2. The `controls` Attribute

This is one of the most important attributes.
It allows the user to **control the video** (play, pause, volume, etc.).

```html
<video src="movie.mp4" controls></video>
```

Without it, the video will be displayed **without any control buttons**.

#### 3. The `autoplay` Attribute

When you add `autoplay`, the video will **start playing automatically** as soon as the page loads:

```html
<video src="clip.mp4" autoplay controls></video>
```

> **Note:**
> Many browsers block autoplay unless the **sound is muted**.
> So it’s recommended to combine it with the `muted` attribute like this:

```html
<video src="clip.mp4" autoplay muted controls></video>
```

#### 4. The `loop` Attribute

If you want the video to **replay automatically after it finishes**,
just add the `loop` attribute:

```html
<video src="trailer.mp4" loop controls></video>
```

#### 5. The `poster` Attribute

This is a very nice feature — it allows you to **set a preview image** (like a cover) that appears before the video starts playing.

```html
<video src="travel.mp4" poster="images/cover.jpg" controls></video>
```

### Complete Example of the `<video>` Tag

```html
<video
  width="640"
  height="360"
  controls
  autoplay
  muted
  loop
  poster="images/video-cover.jpg"
>
  <source src="videos/promo.mp4" type="video/mp4" />
  <source src="videos/promo.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
```

> **Tip:**
> It’s best to include **multiple video formats** (like `.mp4` and `.webm`)
> to ensure compatibility across all browsers.

## The `<audio>` Tag in HTML

!['Audio Tag in HTML'](images/audio-tag-in-html.webp "Audio Tag in HTML")

If you want to add an **audio file** (such as music, sound effects, or a voice recording) to your web page,
the tag you’ll use is `<audio>`.

This tag allows you to **play sounds directly from the website**,
so the user doesn’t have to download them manually.

### Structure of the `<audio>` Tag

The `<audio>` tag has **an opening and a closing tag**,
and its basic form looks like this:

```html
<audio src="sound.mp3"></audio>
```

However, just like with videos, it’s better to use a `<source>` element inside it for a cleaner and more flexible setup:

```html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg" />
</audio>
```

### The Most Common Attributes Used with the `<audio>` Tag

#### 1. The `src` Attribute

This attribute defines the **path to the audio file**.
It can be **relative** (if the file is inside your project folder) or **absolute** (if it’s hosted online).

Example:

```html
<audio src="audio/background.mp3" controls></audio>
```

#### 2. The `controls` Attribute

Without this attribute, users won’t be able to play, pause, or control the volume of the audio.
So you should always include it to **display playback controls**.

```html
<audio src="song.mp3" controls></audio>
```

#### 3. The `autoplay` Attribute

When you add `autoplay`, the audio will **start playing automatically** once the page loads.
However, most browsers **don’t allow automatic playback** unless the sound is **muted**.

```html
<audio src="intro.mp3" autoplay muted controls></audio>
```

#### 4. The `loop` Attribute

This attribute makes the audio **replay automatically** after it finishes.

```html
<audio src="beat.mp3" loop controls></audio>
```

#### 5. The `muted` Attribute

This mutes the audio **by default** when the page loads.
It’s especially useful when combined with `autoplay`.

```html
<audio src="theme.mp3" autoplay muted controls></audio>
```

#### 6. The `preload` Attribute

This is an important attribute for **page performance**.
It controls **when the browser should start loading the audio file**.
It accepts three main values:

- `none`: The audio won’t load until the user plays it.
- `metadata`: Only basic information (like duration) will be loaded.
- `auto`: The entire audio file will be loaded as soon as the page opens.

Example:

```html
<audio src="song.mp3" controls preload="metadata"></audio>
```

### Complete Example of the `<audio>` Tag

```html
<audio controls autoplay muted loop preload="metadata">
  <source src="sounds/music.mp3" type="audio/mpeg" />
  <source src="sounds/music.ogg" type="audio/ogg" />
  Your browser does not support the audio tag.
</audio>
```

> **Tip:**
> Always include multiple audio formats (such as `.mp3` and `.ogg`)
> to ensure the audio plays correctly across all browsers.

## In Conclusion

The `<audio>` tag, along with `<video>` and `<img>`, forms the foundation of **HTML multimedia**.
By using these tags properly, you can make your web pages **more dynamic, engaging, and user-friendly**.

After finishing the multimedia tags — and after we already covered [HTML text tags and how to format them](/en/categories/articles/html-text-tags-simple-guide/) in the previous article —
it’s now time to learn how to organize page elements using **lists** and **tables** in HTML.

That’s exactly what we’ll be exploring in the **next lesson**, God willing.
**Stay tuned!**

**To learn more**

- [W3Schools](https://www.w3schools.com/html/html_media.asp)
- MDN Web Docs
  - [Img Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)
  - [Video Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video)
  - [Audio Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio)
