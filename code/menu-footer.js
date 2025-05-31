$(document).ready(function () {
  //footer load
  $("#footer-placeholder").load("footer.html");

  let lastScrollY = window.scrollY;
  const header = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const isMenuOpen = $("#menu").is(":visible");

    // Only apply hide/show behavior if menu is NOT open
    if (!isMenuOpen) {
      if (window.scrollY > lastScrollY) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
    }

    lastScrollY = window.scrollY;
  });

  const $hamburger = $(".hamburger");
  const $navitem = $(".nav-item");
  const $menu = $("#menu");
  const $body = $("body");

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#footer-container").innerHTML = data;
    });

  function toggleMenu(forceState = null) {
    const isOpen = $menu.is(":visible");
    const shouldOpen = forceState !== null ? forceState : !isOpen;

    if (shouldOpen) {
      $menu.show();
      $body.addClass("fixed-position");
      $hamburger.addClass("active");
      $navitem.addClass("hidden");
    } else {
      $menu.hide();
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

    // If clicked target is not inside .grid, close the menu
    if (!$grid.is(e.target) && $grid.has(e.target).length === 0) {
      toggleMenu(false);
    }
  });
});
