<script>
window.i18n = (function(){
  const LS_KEY = "studlypro:lang";
  const dict = {
    en: {
      brand:"Studly Pro",
      nav_home:"Home", nav_pomodoro:"Pomodoro", nav_tasks:"Tasks", nav_flash:"Flashcards",
      hero_title:"Welcome to Studly Pro", hero_tag:"Free study & productivity tools.",
      card_pomodoro_title:"Pomodoro Timer",
      card_pomodoro_desc:"Timer with progress ring, short/long breaks, auto-start and local save.",
      card_open:"Open",
      card_tasks_title:"Task List (soon)", card_tasks_desc:"Simple task list with browser storage.",
      card_flash_title:"Flashcards (soon)", card_flash_desc:"Smart study flashcards.",
      footer:"Built on GitHub Pages — Studly Pro ©",

      // Pomodoro component
      p_tabs_work:"Work", p_tabs_short:"Short", p_tabs_long:"Long",
      p_label_work:"WORK", p_label_short:"Short Break", p_label_long:"Long Break",
      p_btn_start:"Start", p_btn_pause:"Pause", p_btn_reset:"Reset",
      p_set_work:"Work (min)", p_set_short:"Short (min)", p_set_long:"Long (min)",
      p_auto:"Auto-start next session",
      p_tip:`Tip: Set <code>controls="external"</code> to hide built-in controls and drive it with your own buttons.`
    },
    he: {
      brand:"Studly Pro",
      nav_home:"בית", nav_pomodoro:"Pomodoro", nav_tasks:"Tasks", nav_flash:"Flashcards",
      hero_title:"ברוך הבא ל-Studly Pro", hero_tag:"כלי לימוד ופרודוקטיביות בחינם.",
      card_pomodoro_title:"Pomodoro Timer",
      card_pomodoro_desc:"טיימר עם טבעת התקדמות, הפסקות קצרות/ארוכות, Auto-start ושמירה מקומית.",
      card_open:"פתח",
      card_tasks_title:"Task List (בקרוב)", card_tasks_desc:"רשימת משימות פשוטה עם שמירה בדפדפן.",
      card_flash_title:"Flashcards (בקרוב)", card_flash_desc:"כרטיסיות לימוד חכמות ללמידה מהירה.",
      footer:"בנוי על GitHub Pages — Studly Pro ©",

      // Pomodoro component
      p_tabs_work:"עבודה", p_tabs_short:"קצרה", p_tabs_long:"ארוכה",
      p_label_work:"עבודה", p_label_short:"הפסקה קצרה", p_label_long:"הפסקה ארוכה",
      p_btn_start:"התחל", p_btn_pause:"השהה", p_btn_reset:"איפוס",
      p_set_work:"עבודה (דקות)", p_set_short:"קצרה (דקות)", p_set_long:"ארוכה (דקות)",
      p_auto:"הפעלה אוטומטית לסשן הבא",
      p_tip:`טיפ: ניתן להסתיר כפתורים פנימיים בעזרת <code>controls="external"</code> ולהפעיל עם כפתורים חיצוניים.`
    }
  };

  function getDefaultLang(){
    const saved = localStorage.getItem(LS_KEY);
    if (saved) return saved;
    const n = (navigator.language||"en").toLowerCase();
    return n.startsWith("he") ? "he" : "en";
  }
  function dirOf(lang){ return lang==="he" ? "rtl" : "ltr"; }

  let current = getDefaultLang();
  apply(current);

  function apply(lang){
    current = lang in dict ? lang : "en";
    localStorage.setItem(LS_KEY, current);
    const html = document.documentElement;
    html.lang = current;
    html.dir = dirOf(current);

    // עדכון טקסטים לפי data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const val = dict[current][key];
      if (val!=null) {
        if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
        else el.textContent = val;
      }
    });

    window.dispatchEvent(new CustomEvent("i18n:change", {detail:{lang:current}}));
  }

  function t(key){ return dict[current][key] ?? key; }

  return { set: apply, t, get: ()=>current };
})();
</script>
