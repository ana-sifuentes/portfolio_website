document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll("[data-gallery]");

  galleries.forEach((gallery) => {
    const slides = gallery.querySelectorAll(".gallery-slide");
    const dotsContainer = gallery.querySelector(".gallery-dots");
    let current = 0;

    // Create dots
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        showSlide(i);
      });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
      current = index;
    }

    function nextSlide() {
      const next = (current + 1) % slides.length;
      showSlide(next);
    }

    // Start auto-rotation
    setInterval(nextSlide, 5000);
  });
});
