document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Add toggle functionality
      const toggleBtn = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");
      const hamburger = document.getElementById("hamburger");

      if (toggleBtn && menu) {
        toggleBtn.addEventListener("click", () => {
          menu.classList.toggle("visible");
        });
      }

      if (hamburger) {
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("open");
        });
      }
    });
});
