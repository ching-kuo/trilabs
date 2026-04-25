(function () {
  try {
    var saved = localStorage.getItem("tl-mode");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-mode", saved);
    }
  } catch (e) {}

  try {
    var config = window.__TL_LANGS__;
    if (!config || !config.isHome || !config.homes) return;
    if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") return;

    var savedLang = null;
    try { savedLang = localStorage.getItem("tl-lang"); } catch (e) {}
    var preferred = config.homes[savedLang] ? savedLang : null;

    if (!preferred) {
      var languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
      for (var i = 0; i < languages.length && !preferred; i += 1) {
        var lang = (languages[i] || "").toLowerCase();
        if (lang === "zh-tw" || lang === "zh-hant" || lang.indexOf("zh-hant") === 0) preferred = "zh-tw";
        else if (lang.indexOf("ja") === 0) preferred = "ja";
        else if (lang.indexOf("en") === 0) preferred = "en";
      }
    }

    if (!preferred || preferred === config.current || !config.homes[preferred]) return;
    window.location.replace(config.homes[preferred] + window.location.search + window.location.hash);
  } catch (e) {}
})();
