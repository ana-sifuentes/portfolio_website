//navbar restyling
document.addEventListener("DOMContentLoaded", () => {
  const waitForNavbar = () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      // Start with landing style
      navbar.classList.add("scroll-landing");

      const handleExit = () => {
        // Add fade-out class to trigger CSS transition
        navbar.classList.add("fade-out");

        // After the transition starts, remove scroll-landing and add hidden
        setTimeout(() => {
          navbar.classList.remove("scroll-landing");
          navbar.classList.add("hidden");
        }, 300); // Match your CSS transition duration

        window.removeEventListener("scroll", handleExit);
        navbar.removeEventListener("click", handleExit);
      };

      window.addEventListener("scroll", handleExit);
      navbar.addEventListener("click", handleExit);
    } else {
      setTimeout(waitForNavbar, 50);
    }
  };

  waitForNavbar();
});

// Fade-up
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

document.querySelectorAll(".fade-up").forEach((el) => {
  fadeObserver.observe(el);
});

//scroll indicator
const scrollIndicator = document.querySelector(".scroll-indicator");
const introSection = document.querySelector("#intro");

function checkScrollIndicator() {
  const rect = introSection.getBoundingClientRect();
  scrollIndicator.style.opacity = rect.bottom <= 0 ? "0" : "1";
  scrollIndicator.style.pointerEvents = rect.bottom <= 0 ? "none" : "auto";
}

// Initial scrollIndicator check on load
window.addEventListener("scroll", checkScrollIndicator);
window.addEventListener("load", checkScrollIndicator);
