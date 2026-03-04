---
title: "تثبيت WSL على ويندوز وبداية استخدام Ubuntu كمطور ويب"
description: "شرح خطوة بخطوة لتثبيت WSL على ويندوز وإعداد Ubuntu كمطور ويب، مع تهيئة Git وDocker وبناء بيئة تطوير احترافية للعمل على مشاريع الويب."
draft: false
categories: ["articles"]
tags: ["developer-tools"]
authors:
  - mahmoudadel
slug: "install-wsl-windows-setup-ubuntu-web-development"
weight: -23
---

لو أنت مطور ويب وتعمل على ويندوز، فغالبًا واجهت مشكلة اختلاف البيئة بين جهازك وسيرفر الاستضافة (اللي بيكون غالبًا Linux).  
الحل العملي والبسيط هو استخدام **Windows Subsystem for Linux** واختيار توزيعة **Ubuntu** للعمل عليها.

في هذا الدليل هنتعلم:

- تثبيت WSL من الصفر
- تثبيت Ubuntu
- تثبيت Git
- تثبيت Docker و Docker Compose
- تجهيز بيئة عمل حقيقية لمطور ويب

## لماذا نستخدم WSL كمطور ويب؟

قبل ما نبدأ، خلينا نفهم الفكرة ببساطة.

بدل ما:

- تثبت Linux على جهاز منفصل
- أو تستخدم Virtual Machine مثل **VirtualBox**

ميزة WSL تسمح لك بتشغيل Linux داخل ويندوز مباشرة، بدون استهلاك موارد ضخمة.

ولتعرف الفرق باختصار يمكنك الإطلاع على الجدول التالي:

| WSL                   | Virtual Machine             |
| --------------------- | --------------------------- |
| سريع وخفيف            | يستهلك RAM وبروسيسور أكثر   |
| تكامل مباشر مع ويندوز | نظام منفصل بالكامل          |
| مناسب لتطوير الويب    | مناسب لاختبارات أنظمة كاملة |

كمطور ويب يريد أن يجمع بين مميزات الويندوز العادية من برامج وألعاب وبين تطوير الويب في بيئة إحترافية فالـ WSL هو الخيار الذكي.

و المتطلبات بسيطة وتقريباً توجد فى جميع الأجهزة العادية ورخيصة الثمن:

- Windows 10 إصدار حديث (2004+)
- **Windows 11**
- RAM 8 (لا يقل عن 8 جيجا وكلما زاد كان أفضل)

## الخطوة 1: تثبيت WSL

افتح PowerShell كمسؤول (Run as Administrator) واكتب:

```bash
wsl --install
```

ماذا يفعل هذا الأمر؟

- يفعّل WSL
- يفعّل Virtual Machine Platform
- يثبت WSL 2
- يثبت Ubuntu تلقائيًا

بعد انتهاء التثبيت:

أعد تشغيل الجهاز.

## الخطوة 2: إعداد Ubuntu لأول مرة

بعد إعادة التشغيل:

1. افتح Ubuntu من قائمة Start.
2. انتظر حتى يكتمل الإعداد.
3. سيطلب منك:
   - إنشاء Username
   - إنشاء Password

وبكده أصبح عندك بيئة Linux كاملة داخل ويندوز.

## التأكد أن WSL يعمل بالإصدار 2

داخل PowerShell اكتب:

```bash
wsl -l -v
```

لو ظهر Version = 2  
يبقى كل شيء تمام.

ولو لسه على الإصدار الأول ستحتاج بتنفيذ ذلك الأمر:

```bash
wsl --set-default-version 2
```

## الخطوة 3: تحديث Ubuntu

داخل Ubuntu اكتب:

```bash
sudo apt update
sudo apt upgrade -y
```

ولمن إستخدم نظام Ubuntu على سيرفر VPS أو كنظام تشغيل من قبل ستجد نفسك في بيئة مألوفة لك ولن تجد صعوبة في التعامل مع النظام.

## الخطوة 4: تثبيت Git

أي مطور ويب يحتاج Git للقيام بجلب وتحديث المستودعات Repositiries.

ثبتّه بالأمر:

```bash
sudo apt install git -y
```

بعد ذلك تأكد من التثبيت:

```bash
git --version
```

ثم اضبط بياناتك:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## الخطوة 5: تثبيت Docker

تثبيت Docker مهم جدًا لتشغيل:

- Node.js
- PHP
- Laravel
- MySQL
- PostgreSQL
- Redis

وغيرهم بدون تلويث نظامك. كان يمكننا تثبيت دوكر على الويندوز بطريقة مباشرة عن طريق التحميل من موقعهم بشكل مباشر ولكن لا أحبذ هذه الطريقة بسبب أن الواجهة الرسومية التي تنزل مع الحزمة تستهلك كثير من الموارد ولكن فى حالتنا هنا سنتعامل عن طريق موجه الأوامر Terminal بطريقة إحترافية أكثر كما لو كنا على سيرفر حقيقي.

سنقوم بتثبيت **Docker** داخل Ubuntu عن طريق الخطوات التالية:

### 1️. تثبيت المتطلبات

```bash
sudo apt install ca-certificates curl gnupg -y
```

### 2️. إضافة مفتاح Docker الرسمي

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

### 3️. إضافة المستودع

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 4️. تثبيت Docker

```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

## الخطوة 6: تشغيل Docker بدون sudo

أضف المستخدم لمجموعة docker:

```bash
sudo usermod -aG docker $USER
```

ثم:

```bash
exit
```

وأعد الدخول مرة أخرى إلى Ubuntu.

اختبر:

```bash
docker --version
```

## الخطوة 7: استخدام Docker Compose

Compose أصبح مدمج داخل Docker باسم:

```bash
docker compose
```

اختبر:

```bash
docker compose version
```

لاحظ أن الأمر الآن بدون شرطة:  
❌ docker-compose  
✅ docker compose

## مثال بسيط لتجربة Docker

أنشئ ملف:

```bash
nano docker-compose.yml
```

وضع بداخله:

```yaml
services:
  app:
    image: nginx
    ports:
      - "8080:80"
```

ثم شغّل:

```bash
docker compose up
```

افتح المتصفح على:

```
http://localhost:8080
```

سترى صفحة Nginx تعمل 🎉

## أفضل طريقة للعمل كمطور ويب

✔ ضع مشاريعك داخل مجلد Linux وليس داخل C  
مثال:

```
/home/mahmoud/projects
```

✔ استخدم VS Code مع إضافة:  
WSL Extension

لتفتح المشروع مباشرة داخل بيئة Linux.

## هل أحتاج Docker Desktop؟

يمكنك العمل بدون **Docker Desktop** إذا ثبت Docker داخل Ubuntu كما شرحنا سابقاً.

وكما قولنا سابقاُ Docker Desktop يوفر:

- واجهة رسومية
- إدارة الحاويات
- تكامل أسهل للبعض

لكن للمطور المحترف؟  
التثبيت داخل Ubuntu كافي وأكثر نظافة ويعطيك نفس شعور التواجد على سيرفر حقيقي.

الآن أنت جاهز لتطوير:

- Laravel
- Node.js
- Vue
- React
- Angular
- WordPress
- أي Stack حديث تريد أن تتعلمه وتطبق عليه.

كل ذلك في بيئة Linux حقيقية داخل ويندوز وكل ذلك بفضل WSL.

وفى الختام باستخدام:

- WSL 2
- Ubuntu
- Git
- Docker + Compose

أصبحت تملك بيئة احترافية تشبه بيئة السيرفر بنسبة 95٪ تقريبًا.

وهذا يقلل مشاكل:

- "المشروع يعمل عندي ولا يعمل على السيرفر".
- اختلاف الإصدارات.
- مشاكل المسارات والصلاحيات.

وإن وجدت إن هذه الطريقة معقدة بالنسبة لك وتحتاج الى طريقة أسهل، فقد تكلمنا سابقاً عن [تجهيز بيئة تطوير الويب على ويندوز باستخدام Laragon](/categories/articles/web-development-environment-windows-laragon-guide/) ويعتبر هذا الخيار الأسهل للمبتدئين.
