// i18n.js — לא משנים כיוון/פריסה, רק טקסטים
(function () {
  const LS = "studlypro:lang";
  const dict = {
    en: {
      brand: "Studly Pro",
      nav_home: "Home",
      nav_pomodoro: "Pomodoro",
      nav_tasks: "Tasks",
      nav_flash: "Flashcards",
      hero_title: "Welcome to Studly Pro",
      hero_tag: "Free study & productivity tools.",
      card_pomodoro_title: "Pomodoro Timer",
      card_pomodoro_desc: "Timer with progress ring, short/long breaks, Auto-start and local save.",
      card_open: "Open",
      card_tasks_title: "Task List (soon)",
      card_tasks_desc: "Simple task list with browser storage.",
      card_flash_title: "Flashcards (soon)",
      card_flash_desc: "Smart study flashcards.",
      footer: "Built on GitHub Pages — Studly Pro ©",
    },
    he: {
      brand: "Studly Pro",
      nav_home: "בית",
      nav_pomodoro: "Pomodoro",
      nav_tasks: "Tasks",
      nav_flash: "Flashcards",
      hero_title: "ברוך הבא ל-Studly Pro",
      hero_tag: "כלי לימוד ופרודוקטיביות בחינם.",
      card_pomodoro_title: "שעון פומודורו",
      card_pomodoro_desc: "טיימר עם טבעת התקדמות, הפסקות קצרות/ארוכות, Auto-start ושמירה מקומית.",
      card_open: "פתח",
      card_tasks_title: "Task List (בקרוב)",
      card_tasks_desc: "רשימת משימות פשוטה עם שמירה בדפדפן.",
      card_flash_title: "Flashcards (בקרוב)",
      card_flash_desc: "כרטיסיות לימוד חכמות ללמידה מהירה.",
      footer: "© Studly Pro — בנוי על GitHub Pages",
    },
  };

  function currentLang() {
    return localStorage.getItem(LS) || "he"; // ברירת מחדל: עברית
  }
  function setLang(lang) {
    const l = dict[lang] ? lang : "en";
    localStorage.setItem(LS, l);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[l][key];
      if (val != null) {
        if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
        else el.textContent = val;
      }
    });
  }

  // חשיפה גלובלית פשוטה
  window.lang = {
    set: setLang,
    get: currentLang,
    t: (k) => (dict[currentLang()] || dict.en)[k] || k,
  };

  // החלה ראשונה
  document.addEventListener("DOMContentLoaded", () => setLang(currentLang()));
})();
