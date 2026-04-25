(function () {
  try {
    var saved = localStorage.getItem("tl-mode");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-mode", saved);
    }
  } catch (e) {}
})();
