---
title: "دليل بناء نظام تسجيل دخول (Login System) احترافي بـ PHP و MySQL من الصفر"
description: "تعلم بناء نظام تسجيل دخول PHP آمن واحترافي. شرح مفصل لكيفية تنفيذ Validation قوي، حماية CSRF، وإدارة Session لمنع الاختراق. دليل شامل لتأمين بيانات المستخدمين من الصفر."
categories: ["projects"]
tags: ["php-practical", "html-css-practical"]
draft: false
authors:
  - mahmoudadel
slug: "secure-php-auth"
weight: -20
---

هل تبحث عن الطريقة الصحيحة لبناء **نظام تسجيل دخول ومصادقة (Auth System)** لموقعك؟ في هذا المقال، سننتقل من مستوى المبتدئين إلى الاحتراف عبر بناء سكريبت متكامل بلغة، مع التركيز على الأمان (Security) وتنظيم الكود البرمجي باستخدام **Helper Functions**.

سنتعلم حماية النماذج ضد ثغرات **CSRF**، وتشفير كلمات المرور، والتحقق من البيانات (Validation)، وإدارة الجلسات (Sessions).

{{< youtubeLite id="C4kSj1jS85k" label="دليل بناء نظام تسجيل دخول (Login System) احترافي بـ PHP و MySQL من الصفر" >}}

## 1. إعداد هيكل المشروع وقاعدة البيانات

قبل البدء بكتابة الأكواد، قمنا بتنظيم المشروع ليكون قابلاً للتوسع. قم بتحميل ملفات الفرونت إند الخاصة بالمشروع من خلال (https://github.com/CodeZelo/minimal-frontend)[هذا الرابط] سنستخدم بيئة **Laragon** ونقوم بتغيير امتدادات الملفات من `.html` إلى `.php`.

### هيكل المجلدات (Project Structure):

- **assets/**: للملفات الثابتة (CSS/JS).
- **helpers/**: للملفات البرمجية المساعدة (`auth.php`, `csrf.php`, `validation.php`).
- **layouts/**: للمكونات المشتركة مثل الـ `navbar.php`.

### إنشاء قاعدة البيانات (MySQL):

عبر التيرمينال، سوف نقوم في البداية بعمل لوجن على الـ MySQL من خلال هذا الأمر:

```bash
mysql -u root -p
```

ثم نقوم بإنشاء الداتابيس وجدول المستخدمين:

SQL

```mysql
CREATE DATABASE authsystem;
USE authsystem;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    gender ENUM('male', 'female') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 2. الاتصال بقاعدة البيانات (`database.php`)

نستخدم نمط الـ **Singleton** لضمان أن الاتصال بقاعدة البيانات يتم مرة واحدة فقط طوال مدة تنفيذ السكريبت، مما يحسن الأداء.

```php
<?php
function db(): PDO {
    static $con = null;
    if ($con === null) {
        try {
            $con = new PDO("mysql:host=localhost;dbname=authsystem;charset=utf8mb4", "root", "", [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
        } catch (PDOException $e) {
            die("Database connection failed.");
        }
    }
    return $con;
}
```

## 3. محرك التحقق من البيانات (`validation.php`)

تعتبر عملية الـ **Validation** أهم خطوة لحماية السيرفر من البيانات الخاطئة أو الخبيثة. قمنا ببناء دالة مرنة تدعم قواعد مثل `required`, `email`, `min`, `max` وقوة كلمة المرور.

```php
<?php

function validate(array $rules, array $data): array
{
    $errors = [];

    foreach ($rules as $field => $rulesArray) {
        foreach ($rulesArray as $rule) {
            $ruleErrors = applyRule($field, $rule, $data);
            if (!empty($ruleErrors)) {
                $errors[$field] = array_merge($errors[$field] ?? [], $ruleErrors);
            }
        }
    }

    return $errors;
}

function applyRule(string $field, string $rule, array $data): array
{
    [$ruleName, $param] = array_pad(explode(':', $rule, 2), 2, null);
    $value = trim($data[$field] ?? '');
    $errors = [];

    switch ($ruleName) {

        case 'required':
            if ($value === '') {
                $errors[] = "The $field field is required.";
            }
            break;

        case 'string':
            if ($value !== '' && !is_string($value)) {
                $errors[] = "The $field must be a string.";
            }
            break;

        case 'email':
            if ($value !== '' && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
                $errors[] = "The $field must be a valid email.";
            }
            break;

        case 'min':
            if ($value !== '' && strlen($value) < (int)$param) {
                $errors[] = "The $field must be at least $param characters.";
            }
            break;

        case 'max':
            if ($value !== '' && strlen($value) > (int)$param) {
                $errors[] = "The $field must be at most $param characters.";
            }
            break;

        case 'in':
            if ($value !== '') {
                $options = explode(',', $param);
                if (!in_array($value, $options)) {
                    $errors[] = "The $field must be one of: " . implode(', ', $options);
                }
            }
            break;

        case 'password_confirmation':
            if ($value !== ($data['password'] ?? null)) {
                $errors[] = "Password confirmation does not match.";
            }
            break;

        case 'has_number':
            if ($value !== '' && !preg_match('/\d/', $value)) {
                $errors[] = "The $field must contain at least one number.";
            }
            break;

        case 'has_special':
            if ($value !== '' && !preg_match('/[\W_]/', $value)) {
                $errors[] = "The $field must contain at least one special character.";
            }
            break;

        case 'has_upper':
            if ($value !== '' && !preg_match('/[A-Z]/', $value)) {
                $errors[] = "The $field must contain at least one uppercase letter.";
            }
            break;

        case 'has_lower':
            if ($value !== '' && !preg_match('/[a-z]/', $value)) {
                $errors[] = "The $field must contain at least one lowercase letter.";
            }
            break;

        default:
            $errors[] = "Unknown rule: $ruleName";
    }

    return $errors;
}
```

## 4. الحماية ضد ثغرات CSRF (`csrf.php`)

لحماية الفورم من الهجمات العابرة للمواقع، نولد توكن سري (Secret Token) ونخزنه في السيشن.

```php
<?php
function csrf_token() {
    if (empty($_SESSION['_csrf'])) {
        $_SESSION['_csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['_csrf'];
}

function csrf_input() {
    return '<input type="hidden" name="_csrf" value="' . csrf_token() . '">';
}

function csrf_verify() {
    return isset($_POST['_csrf'], $_SESSION['_csrf']) && hash_equals($_SESSION['_csrf'], $_POST['_csrf']);
}
```

## 5. منطق المصادقة وتسجيل الدخول (`auth.php`)

هذا الملف هو "قلب النظام"، حيث يحتوي على دوال التسجيل، محاولة الدخول، وحماية الصفحات.

**تشفير كلمة المرور:**

نستخدم `password_hash` للتشفير و `password_verify` للمقارنة، مع استخدام **Prepared Statements** لمنع **SQL Injection**.

```php
<?php
require_once "database.php";

function auth_register(array $data): bool|string
{
    // Check email uniqueness
    $stmt = db()->prepare("SELECT id FROM users WHERE email = :email");
    $stmt->execute(['email' => $data['email']]);

    if ($stmt->fetch()) {
        return "Email already registered!";
    }

    $hashed = password_hash($data['password'], PASSWORD_DEFAULT);

    $stmt = db()->prepare(
        "INSERT INTO users (name, email, password, gender)
         VALUES (:name, :email, :password, :gender)"
    );

    $stmt->execute([
        'name'     => $data['name'],
        'email'    => $data['email'],
        'password' => $hashed,
        'gender'   => $data['gender'],
    ]);

    return true;
}


function auth_attempt(string $login, string $password): bool
{
    $isEmail = filter_var($login, FILTER_VALIDATE_EMAIL);

    $stmt = db()->prepare(
        $isEmail
            ? "SELECT * FROM users WHERE email = :value LIMIT 1"
            : "SELECT * FROM users WHERE name = :value LIMIT 1"
    );

    $stmt->execute(['value' => $login]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
            'gender' => $user['gender'],
        ];

        session_regenerate_id(true);

        return true;
    }

    return false;
}
```

## 6. صفحة تسجيل الدخول (`login.php`)

هنا نجمع كل القطع معاً. نستخدم دالة `auth_redirect_if_logged()` لمنع المستخدم المسجل من رؤية صفحة الدخول مرة أخرى.

```php
<?php
session_start();

require_once "helpers/validation.php";
require_once "helpers/csrf.php";
require_once "helpers/auth.php";

auth_redirect_if_logged();

$errors = [];

if (isset($_POST['login'])) {

    if (!csrf_verify()) {
        $errors[] = "Invalid CSRF token.";
    }

    $data = [
        "login" => $_POST['login'] ?? '',
        "password" => $_POST['password'] ?? '',
    ];

    $rules = [
        "login" => ["required"],
        "password" => ["required"]
    ];

    $errors = array_merge($errors, validate($rules, $data));

    if (empty($errors)) {
        if (auth_attempt($data['login'], $data['password'])) {
            header("Location: dashboard.php");
            exit;
        }
        $errors[] = "Invalid credentials.";
    }
}
?>
```

## 7. صفحة تسجيل المستخدم (`index.php`)

قبل أن تقوم بعمل تسجيل دخول يجب أن يكون هناك مستخدم مسجل داخل قاعدة البيانات وهذا يتم عن طريق صفحة تسجيل مستخدم جديد Register Form وهذا الكود هو الذي يقوم بتسجيل المستخدم داخل قاعدة البيانات مع التأكد من صحة تلك البيانات وإستخدام قواعد صارمة مع عمل validation بشكل صحيح.

```php
<?php
session_start();

require_once "helpers/validation.php";
require_once "helpers/csrf.php";
require_once "helpers/auth.php";

$errors = [];
$success = false;

if (isset($_POST['submit'])) {

    if (!csrf_verify()) {
        $errors[] = "Invalid CSRF token.";
    }

    $data = [
        "name" => $_POST['name'] ?? '',
        "email" => $_POST['email'] ?? '',
        "password" => $_POST['password'] ?? '',
        "confirmation_password" => $_POST['confirmation_password'] ?? '',
        "gender" => $_POST['gender'] ?? ''
    ];

    $rules = [
        "name" => ["required", "string", "min:3", "max:50"],
        "email" => ["required", "email", "max:50"],
        "password" => [
            "required",
            "min:6",
            "has_number",
            "has_special",
            "has_upper",
            "has_lower"
        ],
        "confirmation_password" => ["password_confirmation"],
        "gender" => ["required", "in:male,female"]
    ];

    $errors = array_merge($errors, validate($rules, $data));

    if (empty($errors)) {
        $result = auth_register($data);

        if ($result === true) {
            $success = true;
        } else {
            $errors[] = $result;
        }
    }
}

?>
```

## 8. صفحة الداشبورد (`dashboaard.php`)

صفحة الداشبورد هي صفحة بسيطة تعرض معلومات الشخص الذي قام بعمل تسجيل دخول على السيستم.
تلك المعلومات يتم جلبها من السيشن عن طريق الدالة المساعدة من ملف `auth.php`.

```php
<?php
session_start();
require_once "helpers/auth.php";

auth_require_login();

$user = auth_user();
?>
```

## 9. صفحة تسجيل الخروج (`logout.php`)

صفحة تسجيل الخروج تقوم بمسح أثار المستخدم بالكامل من على السيرفر وأيضاً الكوكيز الخاصة به من على المتصفح. وبعد ذلك نقوم بعمل تحويل للمستخدم الى لصفحة اللوجن.

```php
<?php
session_start();
require_once "helpers/auth.php";

auth_logout();
header("Location: login.php");
exit;
```

## لماذا هذا النظام احترافي؟

بناء أنظمة تسجيل الدخول ليس مجرد فورم وقاعدة بيانات، بل هو فن إدارة الثغرات وتجربة المستخدم. في هذا السكريبت قمنا بـ:

1. **منع التخمين**: لم نحدد للمستخدم هل الخطأ في الإيميل أم الباسورد (Security Best Practice).
2. **تجربة المستخدم (UX)**: حافظنا على البيانات المدخلة (Old Input) في حال حدوث خطأ.
3. **تنظيم الكود**: فصلنا المنطق (Logic) عن الواجهة (UI) باستخدام ملفات الـ Helpers.

يمكنك الآن تحميل الكود بالكامل وتطويره لإضافة ميزات مثل "نسيت كلمة المرور" أو "تفعيل الإيميل".

**الأكواد علي Github:**
{{< github repo="CodeZelo/secure-php-auth" showThumbnail=true >}}
