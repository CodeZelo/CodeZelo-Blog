---
title: "أتقن 3 وسوم مالتيميديا HTML (img, video, audio) لتسريع أداء موقعك (دليل مبسط)"
description: "تعلّم بالخطوات كيف تستخدم وسوم img، video، وaudio في HTML لدمج المالتيميديا. دليل عملي يشرح أهم الخصائص مثل autoplay و preload وكيف تحافظ على أداء صفحتك سريعاً. ابدأ التطبيق الآن!"
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

تقدّم لغة **HTML** العديد من الوسوم، ومن أهمها **وسوم الوسائط المتعددة (Multimedia)**، والتي تتلخص في ثلاثة وسوم أساسية:  
وسم الصورة `<img>`، ووسم الفيديو `<video>`، ووسم الصوت `<audio>`.

تساعدك هذه الوسوم على **إضافة الوسائط المتنوعة إلى صفحات الويب**، مما يضفي عليها **مظهرًا جذابًا ولمسات جمالية مميزة** تغير من شكل الصفحة وتحسّن تجربة المستخدم.

## وسم الصورة `<img>` في HTML

!['وسم الصورة image في HTML'](images/image-tag-in-html.webp "وسم الصورة image في HTML")

لإضافة صورة داخل صفحة ويب باستخدام لغة **HTML**، نستخدم الوسم `<img>`.

يُعد وسم `<img>` من **الوسوم الذاتية الإغلاق** (Self-closing Tags)،  
وهذا طبيعي جدًا،  
لأنه لا يحتوي على محتوى بداخل الوسم نفسه،  
بل يُستخدم فقط **لعرض الصورة** في الصفحة.

### أهم الخصائص (Attributes) المستخدمة مع وسم `<img>`

#### 1. خاصية `src`

تُستخدم خاصية **`src`** — وهي اختصار لكلمة **source** أي _المصدر_ — لتحديد **مسار الصورة** التي تريد عرضها.

يمكن أن يكون المسار **نسبيًا** أو **مطلقًا**:

- **المسار النسبي:**  
   عندما تكون الصورة موجودة داخل ملفات المشروع نفسه.

```html
<img src="images/logo.png" alt="شعار الموقع" />
```

في المثال السابق، الصورة موجودة داخل مجلد اسمه `images` داخل المشروع.

- **المسار المطلق:**  
   عندما تكون الصورة موجودة على الإنترنت.

```html
<img src="https://example.com/logo.png" alt="شعار الموقع من الإنترنت" />
```

#### 2. خاصية `alt`

الخاصية الثانية هي **`alt`**، وهي اختصار لـ **alternative text** أي _النص البديل_.

يُعرض هذا النص في حال فشل تحميل الصورة لأي سبب،  
كما يساعد محركات البحث والأدوات المخصصة لذوي الاحتياجات الخاصة على **فهم محتوى الصورة**.

مثال:

```html
<img src="profile.jpg" alt="صورة الملف الشخصي" />
```

> **خد بالك:**  
> استخدم نصوصًا بديلة تصف محتوى الصورة بدقة، لأن ذلك يساعد في **تحسين محركات البحث (SEO)**.

#### 3. خاصيتا `width` و `height`

تُستخدم خاصيتا **`width`** و **`height`** لتحديد **أبعاد الصورة** (العرض والارتفاع) بوحدة **البكسل** عادةً.

مثال:

```html
<img src="banner.jpg" alt="صورة بانر" width="600" height="300" />
```

> **ملاحظة:**  
> يُفضَّل ضبط الأبعاد باستخدام **CSS** بدلًا من تحديدها مباشرة في الوسم، حتى يسهل التحكم في التصميم لاحقًا:

```html
<img src="banner.jpg" alt="صورة بانر" class="banner" />
```

```css
.banner {
  width: 600px;
  height: 300px;
}
```

#### 4. خاصية `loading`

تُعد خاصية **`loading`** من الخصائص المهمة لتحسين **سرعة تحميل الصفحة**.

عند استخدام القيمة `"lazy"`،  
لن تُحمَّل الصورة إلا عندما يقترب المستخدم منها أثناء التمرير،  
وهذا يُساعد في تسريع فتح الصفحة خاصةً عند وجود صور كثيرة.

مثال:

```html
<img src="gallery/photo1.jpg" alt="صورة من المعرض" loading="lazy" />
```

> **نصيحة:**  
> استخدم `loading="lazy"` دائمًا للصور غير الظاهرة في الجزء الأول من الصفحة لتحسين الأداء.

### مثال كامل:

```html
<img
  src="images/nature.jpg"
  alt="منظر طبيعي جميل"
  width="500"
  height="300"
  loading="lazy"
/>
```

## وسم الفيديو `<video>` في HTML

!['وسم الفيديو video في HTML'](images/video-tag-in-html.webp "وسم الفيديو video في HTML")

لو حابب تضيف **فيديو** في صفحة الويب بتاعتك،  
يبقى الوسم اللي هنستخدمه هو `<video>`.

الوسم ده من وسوم **الوسائط المتعددة (Multimedia Tags)**،  
وبيخلّيك تعرض أي فيديو جوه الصفحة بدل ما المستخدم يضطر يحمّله أو يفتحه في موقع تاني.

### تركيب وسم `<video>`

الوسم `<video>` **ليه وسم فتح ووسم إغلاق**،  
يعني بنكتبه كده:

```html
<video src="video.mp4"></video>
```

بس غالبًا مش بنكتب الفيديو كده لوحده،  
لأننا بنحتاج نضيف جواه عنصر `<source>` علشان نحدد ملف الفيديو بشكل أوضح.  
وده الشكل الصحيح والأكتر استخدامًا

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
</video>
```

### أهم الخصائص (Attributes) اللي بنستخدمها مع وسم `<video>`

#### 1. خاصية `src`

زي الصورة بالظبط، بتحدد **مسار الفيديو**:

- ممكن يكون **نسبي** لو الفيديو جوه المشروع.
- أو **مطلق** لو الفيديو موجود على الإنترنت.

مثال:

```html
<video src="videos/intro.mp4" controls></video>
```

#### 2. خاصية `controls`

دي من أهم الخصائص، وبتخلي المستخدم **يتحكم في الفيديو** (زي التشغيل، الإيقاف، الصوت...).

```html
<video src="movie.mp4" controls></video>
```

من غيرها، الفيديو هيتعرض بس **من غير أي أزرار تحكم**

#### 3. خاصية `autoplay`

لو حطيت `autoplay`، الفيديو هيبدأ **يشغّل تلقائي** أول ما الصفحة تفتح:

```html
<video src="clip.mp4" autoplay controls></video>
```

بس خُد بالك
في متصفحات كتير مش بتسمح بتشغيل الفيديو تلقائي إلا لو **الصوت مقفول**،  
فعشان كده الأفضل تستخدمها مع خاصية `muted` كده:

```html
<video src="clip.mp4" autoplay muted controls></video>
```

#### 4. خاصية `loop`

لو عايز الفيديو **يعيد نفسه تلقائي بعد ما يخلص**،  
يبقى تضيف `loop`:

```html
<video src="trailer.mp4" loop controls></video>
```

#### 5. خاصية `poster`

الخاصية دي جميلة جدًا
بتخليك تختار **صورة تظهر مكان الفيديو قبل التشغيل** (زي الغلاف).

```html
<video src="travel.mp4" poster="images/cover.jpg" controls></video>
```

### مثال كامل على وسم `<video>`

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
  متصفحك لا يدعم تشغيل الفيديو
</video>
```

> **نصيحة:**  
> من الأفضل تضيف أكتر من صيغة للفيديو (زي `.mp4` و `.webm`)  
> عشان تتأكد إنه هيشتغل على كل المتصفحات.

## وسم الصوت `<audio>` في HTML

!['وسم الصوت audio في HTML'](images/audio-tag-in-html.webp "وسم الصوت audio في HTML")

لو حابب تضيف **ملف صوت** (زي موسيقى، مؤثرات صوتية، أو تسجيل) في صفحة الويب،  
فالوسم اللي هنستخدمه هو `<audio>`.

الوسم ده بيخليك تشغّل الأصوات مباشرة من الموقع،  
من غير ما المستخدم يضطر يحمّلها على جهازه.

### تركيب وسم `<audio>`

وسم `<audio>` **ليه وسم فتح ووسم إغلاق**،  
وبيكون شكله الأساسي كده:

```html
<audio src="sound.mp3"></audio>
```

بس زي الفيديو، الأفضل نستخدم وسم `<source>` جواه علشان نحدد الملفات بشكل احترافي:

```html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg" />
</audio>
```

### أهم الخصائص (Attributes) اللي بنستخدمها مع وسم `<audio>`

#### 1. خاصية `src`

دي اللي بتحدد **مسار ملف الصوت**.  
ممكن يكون **نسبي** (لو الصوت جوه ملفات المشروع)، أو **مطلق** (لو على الإنترنت).

مثال:

```html
<audio src="audio/background.mp3" controls></audio>
```

#### 2. خاصية `controls`

من غير الخاصية دي، المستخدم مش هيقدر يشغل أو يوقف الصوت.  
فلازم تحطها علشان تظهر أزرار التحكم (تشغيل، إيقاف، صوت...).

```html
<audio src="song.mp3" controls></audio>
```

#### 3. خاصية `autoplay`

لو ضفت `autoplay`، الصوت هيبدأ **يشغّل تلقائي** أول ما الصفحة تفتح.  
بس زي الفيديو، المتصفحات مش بتسمح بتشغيل الصوت تلقائي **إلا لو كاتم الصوت** (Muted).

```html
<audio src="intro.mp3" autoplay muted controls></audio>
```

#### 4. خاصية `loop`

بتخلي الصوت **يعيد نفسه تلقائي** بعد ما يخلص.

```html
<audio src="beat.mp3" loop controls></audio>
```

#### 5. خاصية `muted`

بتكتم الصوت افتراضيًا لما الصفحة تفتح.  
مفيدة لما تستخدم `autoplay`.

```html
<audio src="theme.mp3" autoplay muted controls></audio>
```

#### 6. خاصية `preload`

دي خاصية مهمة لأداء الصفحة،  
وبتتحكم في **إمتى المتصفح يبدأ يحمّل الصوت**.  
وليها 3 قيم أساسية:

- `none`: مش هيحمّل الصوت إلا لما المستخدم يشغّله.
- `metadata`: هيحمّل بس معلومات الملف (زي المدة).
- `auto`: هيحمّل الصوت بالكامل أول ما الصفحة تفتح.

مثال:

```html
<audio src="song.mp3" controls preload="metadata"></audio>
```

### مثال كامل على وسم `<audio>`

```html
<audio controls autoplay muted loop preload="metadata">
  <source src="sounds/music.mp3" type="audio/mpeg" />
  <source src="sounds/music.ogg" type="audio/ogg" />
  متصفحك لا يدعم تشغيل الصوت
</audio>
```

> **نصيحة:**  
> دايمًا حط أكتر من صيغة للصوت (زي `.mp3` و `.ogg`)  
> عشان تتأكد إن الصوت هيشتغل على كل المتصفحات.

## في النهاية

بعد ما خلصنا وسوم الوسائط. وشرحنا كمان [الوسوم الخاصة بالنصوص في HTML وازاي ننسقها](/categories/articles/html-text-tags-simple-guide/) في المقال اللي فات دلوقتي جه الوقت إننا ننظم العناصر جوه الصفحة بإستخدام القوائم والجداول في HTML. وده اللي هنشرحه في الدرس الجاي إن شاء الله. إستنوني.

**للمزيد من المعلومات**

- [W3Schools](https://www.w3schools.com/html/html_media.asp)
- MDN Web Docs
  - [وسم Img](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)
  - [وسم Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video)
  - [وسم Audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio)
