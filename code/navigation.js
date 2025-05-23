document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      const toggleBtn = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");
      const hamburger = document.getElementById("hamburger");

      if (toggleBtn && menu && hamburger) {
        const toggleMenu = () => {
          menu.classList.toggle("visible");
          hamburger.classList.toggle("open");
        };

        toggleBtn.addEventListener("click", toggleMenu);

        menu.addEventListener("click", (e) => {
          // Close the menu only if the clicked element is NOT a link
          if (!e.target.closest("a")) {
            toggleMenu();
          }
        });

        hamburger.addEventListener("click", toggleMenu);
      }
    });
});
