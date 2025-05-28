document.addEventListener("DOMContentLoaded", () => {
  let menuLoaded = false; // Track if menu is already loaded

  const hamburger = document.getElementById("hamburger");
  const menuContainer = document.getElementById("navbar-placeholder");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");

      // If menu already loaded, just toggle
      if (menuLoaded) {
        const menu = document.getElementById("menu");
        if (menu) menu.classList.toggle("visible");
        return;
      }

      // Load the menu HTML once
      fetch("navbar.html")
        .then(res => res.text())
        .then(data => {
          menuContainer.innerHTML = data;
          menuLoaded = true;

          const menu = document.getElementById("menu");
          const toggleBtn = document.getElementById("menu-toggle");

          if (menu) {
            menu.classList.add("visible");
          }

          // Allow internal toggle button to close the menu
          if (toggleBtn) {
            toggleBtn.addEventListener("click", () => {
              menu.classList.toggle("visible");
              hamburger.classList.toggle("open");
            });
          }

          // Optional: clicking on non-link in menu closes it
          menu.addEventListener("click", (e) => {
            if (!e.target.closest("a")) {
              menu.classList.toggle("visible");
              hamburger.classList.toggle("open");
            }
          });
        });
    });
  }
});
