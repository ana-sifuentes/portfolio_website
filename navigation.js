document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Add toggle functionality
      const toggleBtn = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");

      if (toggleBtn && menu) {
        toggleBtn.addEventListener("click", () => {
          menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
        });
      }
    });

  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("hamburger").classList.toggle("open");
  });

});
