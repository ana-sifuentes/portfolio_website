$(document).ready(function () {
  // Load navbar
  $("#navbar-placeholder").load("components/navbar.html", function () {
    const header = document.querySelector(".navbar");

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      const isMenuHidden = $("#menu").hasClass("hidden");

      // Only apply hide/show behavior if menu is hidden
      if (isMenuHidden) {
        if (window.scrollY > lastScrollY) {
          header.classList.add("hidden");
        } else {
          header.classList.remove("hidden");
        }
      }

      lastScrollY = window.scrollY;
    });
  });

  // Load menu
  $("#menu-placeholder").load("components/menu.html", function () {
    const $hamburger = $(".hamburger");
    const $navitem = $(".nav-item");
    const $menu = $("#menu");
    const $body = $("body");

    function toggleMenu(forceState = null) {
      const isHidden = $menu.hasClass("hidden");
      const shouldOpen = forceState !== null ? forceState : isHidden;

      if (shouldOpen) {
        $menu.removeClass("hidden");
        $body.addClass("fixed-position");
        $hamburger.addClass("active");
        $navitem.addClass("hidden");
      } else {
        $menu.addClass("hidden");
        $body.removeClass("fixed-position");
        $hamburger.removeClass("active");
        $navitem.removeClass("hidden");
      }
    }

    // Toggle on hamburger click
    $hamburger.on("click", function (e) {
      e.stopPropagation(); // Prevent bubbling to document
      toggleMenu();
    });

    // Click outside of the .grid (but inside #menu) should close menu
    $menu.on("click", function (e) {
      const $grid = $menu.find(".grid");

      if (!$grid.is(e.target) && $grid.has(e.target).length === 0) {
        toggleMenu(false);
      }
    });
  });

  // Load footer
  $("#footer-placeholder").load("components/footer.html");
});
