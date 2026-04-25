(function () {
  var STORAGE_KEY = "tl-mode";
  var LANG_STORAGE_KEY = "tl-lang";
  var root = document.documentElement;
  var media = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : { matches: false };

  function savedMode() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      return saved === "light" || saved === "dark" ? saved : null;
    } catch (e) { return null; }
  }

  function apply(mode) {
    if (mode === "light" || mode === "dark") {
      root.setAttribute("data-mode", mode);
    } else {
      root.removeAttribute("data-mode");
    }
    var btn = document.getElementById("mode-toggle");
    if (btn) {
      var resolved = mode || (media.matches ? "dark" : "light");
      btn.setAttribute("aria-pressed", resolved === "dark" ? "true" : "false");
      btn.textContent = resolved === "dark" ? "LIGHT" : "DARK";
    }
  }

  function current() {
    return savedMode() || (media.matches ? "dark" : "light");
  }

  function toggle() {
    var next = current() === "dark" ? "light" : "dark";
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    apply(next);
  }

  function handleSystemModeChange() {
    if (!savedMode()) apply(null);
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(savedMode());
    var btn = document.getElementById("mode-toggle");
    if (btn) btn.addEventListener("click", toggle);
    if (media.addEventListener) media.addEventListener("change", handleSystemModeChange);
    else if (media.addListener) media.addListener(handleSystemModeChange);

    var langLinks = document.querySelectorAll("[data-lang-link][data-lang]");
    langLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        try { localStorage.setItem(LANG_STORAGE_KEY, link.getAttribute("data-lang")); } catch (e) {}
      });
    });
  });
})();

// TOC scroll-spy: highlight TOC items as their corresponding sections come into view.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var toc = document.querySelector(".toc");
    if (!toc) return;
    var links = toc.querySelectorAll("a[href^='#']");
    if (!links.length) return;
    var idMap = {};
    var ids = [];
    links.forEach(function (a) {
      var id = decodeURIComponent(a.getAttribute("href").slice(1));
      idMap[id] = a;
      ids.push(id);
    });
    if (!("IntersectionObserver" in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.id;
        if (!idMap[id]) return;
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          idMap[id].classList.add("active");
        }
      });
    }, { rootMargin: "0px 0px -75% 0px", threshold: 0 });
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  });
})();
