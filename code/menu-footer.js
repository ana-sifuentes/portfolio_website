$(document).ready(function () {
  //load divs
  //
  //menu load
  $("#menu-placeholder").load("menu.html");

  //footer load
  $("#footer-placeholder").load("footer.html");

  //check if user is scrolling to show navbar
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

  //navbar and menu open/close

  const $hamburger = $(".hamburger");
  const $navitem = $(".nav-item");
  const $menu = $("#menu");
  const $body = $("body");

  function toggleMenu(forceState = null) {
    const isHidden = $("#menu").hasClass("hidden");
    const shouldOpen = forceState !== null ? forceState : isHidden;

    if (shouldOpen) {
      $("#menu").removeClass("hidden");
      $body.addClass("fixed-position");
      $hamburger.addClass("active");
      $navitem.addClass("hidden");
    } else {
      $("#menu").addClass("hidden");
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

//file:///Users/anita/testing/index.html
// open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files
