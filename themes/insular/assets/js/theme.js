(function () {
  var STORAGE_KEY = "tl-mode";
  var root = document.documentElement;

  function apply(mode) {
    if (mode === "light" || mode === "dark") {
      root.setAttribute("data-mode", mode);
    } else {
      root.removeAttribute("data-mode");
    }
    var btn = document.getElementById("mode-toggle");
    if (btn) {
      var resolved = mode || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      btn.setAttribute("aria-pressed", resolved === "dark" ? "true" : "false");
      btn.textContent = resolved === "dark" ? "LIGHT" : "DARK";
    }
  }

  function current() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "light" || saved === "dark") return saved;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function toggle() {
    var next = current() === "dark" ? "light" : "dark";
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    apply(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    apply(saved);
    var btn = document.getElementById("mode-toggle");
    if (btn) btn.addEventListener("click", toggle);
  });

  // Inline-applied early in <head> via separate snippet to avoid FOUC; this also
  // re-applies after DOM is ready in case content was missing then.
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
