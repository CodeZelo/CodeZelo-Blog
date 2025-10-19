document.addEventListener("DOMContentLoaded", async function () {
  const container = document.querySelector(".quiz-container");
  if (!container) return;

  const QUIZ_JSON = container.dataset.quiz;
  const LANG = window.quizLang; // ← الترجمة الجاهزة من Hugo

  const lang = container.dataset.lang;
  const isArabic = lang === "ar";

  const title = container.querySelector(".quiz-title");
  const desc = container.querySelector(".quiz-desc");
  const nameInput = container.querySelector("#user-name");
  const photoInput = container.querySelector("#user-photo");
  const startBtn = container.querySelector("#start-quiz");
  const resetBtn = container.querySelector("#reset-quiz");
  const quizArea = container.querySelector("#quiz-area");
  const resultArea = container.querySelector("#result-area");
  const downloadBtn = container.querySelector("#download-cert");

  // إعداد النصوص
  title.textContent = LANG.title;
  desc.textContent = LANG.desc;
  startBtn.textContent = LANG.start;
  resetBtn.textContent = LANG.reset;
  downloadBtn.textContent = LANG.download;
  nameInput.placeholder = LANG.enterName;

  const escapeHTML = (str) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  let data,
    userAnswers = {},
    currentIndex = 0;

  // اسم المفتاح في localStorage
  const STORAGE_KEY = "quiz_progress";

  // استرجاع التقدم المحفوظ إن وجد
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      userAnswers = parsed.userAnswers || {};
      currentIndex = parsed.currentIndex || 0;
      nameInput.value = parsed.name || "";
      console.log("✅ Quiz progress restored", parsed);
    } catch (e) {
      console.warn("❌ Failed to parse saved quiz data", e);
    }
  }

  try {
    const res = await fetch(QUIZ_JSON);
    data = await res.json();
    // لو فيه بيانات محفوظة، نعرض السؤال الحالي تلقائيًا
    if (Object.keys(userAnswers).length > 0) {
      renderQuestion(currentIndex);
      startBtn.disabled = true;
    }
  } catch {
    quizArea.innerHTML = `<div style="color:crimson">${LANG.errorLoadFile}</div>`;
    return;
  }

  function renderQuestion(index) {
    quizArea.innerHTML = "";
    const q = data.questions[index];
    const qDiv = document.createElement("div");
    qDiv.className = "quiz-question";
    qDiv.innerHTML = `<strong>${LANG.Q}${index + 1}.</strong> ${escapeHTML(
      q.question
    )}`;
    const opts = document.createElement("div");
    opts.className = "options";

    if (q.type === "single") {
      q.options.forEach((opt, i) => {
        const id = `q${q.id}_opt${i}`;
        opts.innerHTML += `<label><input type="radio" name="q${
          q.id
        }" value="${i}" ${
          userAnswers[q.id] == i ? "checked" : ""
        }/> ${escapeHTML(opt)}</label>`;
      });
    } else {
      q.options.forEach((opt, i) => {
        const id = `q${q.id}_opt${i}`;
        const checked =
          Array.isArray(userAnswers[q.id]) && userAnswers[q.id].includes(i)
            ? "checked"
            : "";
        opts.innerHTML += `<label><input type="checkbox" name="q${
          q.id
        }" value="${i}" ${checked}/> ${escapeHTML(opt)}</label>`;
      });
    }
    qDiv.appendChild(opts);
    quizArea.appendChild(qDiv);

    // أزرار التنقل
    const controls = document.createElement("div");
    controls.className = "questions-controls";
    if (index > 0) {
      const prev = document.createElement("button");
      prev.textContent = LANG.prev;
      prev.onclick = () => {
        saveAnswer(q);
        currentIndex--;
        renderQuestion(currentIndex);
      };
      controls.appendChild(prev);
    }
    if (index < data.questions.length - 1) {
      const next = document.createElement("button");
      next.textContent = LANG.next;
      next.onclick = () => {
        saveAnswer(q);
        currentIndex++;
        renderQuestion(currentIndex);
      };
      controls.appendChild(next);
    } else {
      const finish = document.createElement("button");
      finish.textContent = LANG.finish;
      finish.onclick = () => {
        saveAnswer(q);
        gradeQuiz();
      };
      controls.appendChild(finish);
    }
    quizArea.appendChild(controls);
  }

  function saveAnswer(q) {
    if (q.type === "single") {
      const sel = document.querySelector(`input[name="q${q.id}"]:checked`);
      userAnswers[q.id] = sel ? Number(sel.value) : null;
    } else {
      const sels = Array.from(
        document.querySelectorAll(`input[name="q${q.id}"]:checked`)
      ).map((i) => Number(i.value));
      userAnswers[q.id] = sels;
    }

    saveProgress();
  }

  function saveProgress() {
    const progress = {
      userAnswers,
      currentIndex,
      name: nameInput.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function gradeQuiz() {
    let total = data.questions.length;
    let correct = 0;
    data.questions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (q.type === "single") {
        if (ans === q.answer) correct++;
      } else {
        const s1 = JSON.stringify((ans || []).slice().sort());
        const s2 = JSON.stringify((q.answer || []).slice().sort());
        if (s1 === s2) correct++;
      }
    });
    const percent = Math.round((correct / total) * 100);
    const passed = percent >= (data.passingPercent || 60);
    resultArea.innerHTML = `<div class="result ${passed ? "pass" : "fail"}">
      <strong>${LANG?.certScore}</strong> ${correct}/${total} — ${percent}%
    </div>`;
    quizArea.innerHTML = "";
    downloadBtn.style.display = "inline-block";
    downloadBtn.dataset.correct = correct;
    downloadBtn.dataset.total = total;
    downloadBtn.dataset.percent = percent;
  }

  async function createCertificate(name, scoreText, photoDataURL) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
      orientation: "landscape",
    });

    const w = doc.internal.pageSize.getWidth();
    const h = doc.internal.pageSize.getHeight();

    // ===== الخلفية =====
    doc.setFillColor(250, 250, 252);
    doc.rect(0, 0, w, h, "F");

    doc.setFont("Tajawal", "normal");
    // ===== إعادة تعيين اللون قبل الإطارات =====
    doc.setDrawColor(0); // أسود مؤقتًا لتجربة الوضوح

    // ===== الإطار الخارجي =====
    doc.setLineWidth(5);
    doc.setDrawColor(60, 120, 200); // أزرق جميل
    doc.rect(15, 15, w - 30, h - 30, "S"); // "S" = stroke (حدود فقط)

    // ===== الإطار الداخلي =====
    doc.setLineWidth(2);
    doc.setDrawColor(160, 190, 230);
    doc.rect(30, 30, w - 60, h - 60, "S");

    // ===== الشعار =====
    try {
      const logoUrl = "/img/CodeZelo.png";
      const circularLogo = await makeCircularImage(logoUrl, 100);
      const logo = await loadImage(circularLogo);
      doc.addImage(logo, "JPEG", w - 180, h - 200, 100, 100);
      // doc.addImage(logo, "PNG", w / 2 - 50, 50, 100, 100);
    } catch {
      console.warn("⚠️ لم يتم تحميل الشعار.");
    }

    // doc.setFont("Tajawal", "normal");
    // ===== النصوص =====
    doc.setFont("helvetica", "normal");
    doc.setTextColor(40, 40, 40);

    doc.setFontSize(28);
    doc.text(LANG.certTitle || "Certificate of Achievement", w / 2, 180, {
      align: "center",
    });

    doc.setFontSize(20);
    doc.text(LANG.certPresented || "This is presented to", w / 2, 220, {
      align: "center",
    });

    doc.setFontSize(26);
    doc.setTextColor(0, 0, 100);
    doc.text(name || "—", w / 2, 260, { align: "center" });

    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text(`${LANG.certScore || "Score:"} ${scoreText}`, w / 2, 300, {
      align: "center",
    });

    // ===== الصورة الشخصية (دائرية) =====
    if (photoDataURL) {
      try {
        const circularPhoto = await makeCircularImage(photoDataURL, 100);
        const img = await loadImage(circularPhoto);
        doc.addImage(img, "PNG", w / 2 - 50, 50, 100, 100);
      } catch {
        console.warn("⚠️ لم يتم تحميل الصورة الشخصية.");
      }
    }

    // ===== التاريخ (منسق يدويًا لتجنب الحروف الغريبة) =====
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const dateStr = `${day}/${month}/${year}`;

    doc.setFont("Tajawal", "normal");
    doc.setFontSize(14);
    doc.setTextColor(60, 60, 60);
    doc.text(`${LANG.certDate || "Date:"} ${dateStr}`, w / 2, h - 60, {
      align: "center",
    });

    // ===== حفظ الملف =====
    doc.save(`certificate-${name || "user"}.pdf`);
  }

  // ===== دالة تحويل الصورة إلى دائرية =====
  async function makeCircularImage(photoDataURL, size = 100) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = photoDataURL;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = size;
        canvas.height = size;

        // قص على شكل دائرة
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // رسم الصورة داخل القص
        ctx.drawImage(img, 0, 0, size, size);

        resolve(canvas.toDataURL("image/png"));
      };
    });
  }

  // ===== تحميل الصورة =====
  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  }

  // ===== تحويل ملف إلى DataURL =====
  function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  downloadBtn.onclick = async () => {
    const name = nameInput.value.trim() || "Certificate";
    const c = downloadBtn.dataset.correct;
    const t = downloadBtn.dataset.total;
    const p = downloadBtn.dataset.percent;

    // جلب صورة المستخدم (لو رفعها)
    const photoFile = document.getElementById("user-photo").files[0];
    let photoDataURL = null;
    if (photoFile) {
      photoDataURL = await fileToDataURL(photoFile);
    }

    createCertificate(name, `${c}/${t} (${p}%)`, photoDataURL);
  };

  startBtn.onclick = () => {
    if (!nameInput.value.trim()) {
      alert(LANG.enterName);
      return;
    }
    started = true;
    currentIndex = 0;
    userAnswers = {};
    renderQuestion(currentIndex);
    startBtn.disabled = true;
  };

  resetBtn.onclick = () => {
    quizArea.innerHTML = "";
    resultArea.innerHTML = "";
    startBtn.disabled = false;
    downloadBtn.style.display = "none";
    nameInput.value = "";
    userAnswers = {};
    currentIndex = 0;
    localStorage.removeItem(STORAGE_KEY);
  };
});
