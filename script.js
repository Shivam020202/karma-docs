document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking a link
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });

  // Sticky Header Effect
  const header = document.getElementById("main-header");
  const topBar = document.getElementById("top-contact-bar");
  const logoImg = header.querySelector("img");
  const navLinks = header.querySelectorAll("nav a");
  const desktopCta = header.querySelector("nav + div a"); // The Book Online button
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Scrolled State
      header.classList.remove("bg-transparent", "py-4");
      header.classList.add(
        "bg-white/95",
        "backdrop-blur-md",
        "shadow-md",
        "py-2"
      );

      // Show Top Bar
      if (topBar) {
        topBar.classList.remove("hidden", "opacity-0", "-translate-y-2");
      }

      // Logo shrink
      logoImg.classList.remove("h-20");
      logoImg.classList.add("h-12");

      // Links: Brand color, no shadow
      navLinks.forEach((link) => {
        link.classList.remove("text-white", "drop-shadow-md");
        link.classList.add("text-brand-purple");
      });

      // CTA Button: Standard shadow
      if (desktopCta) {
        desktopCta.classList.remove("shadow-white/20");
      }

      // Mobile toggle color
      mobileMenuBtn.classList.remove("text-white");
      mobileMenuBtn.classList.add("text-gray-800");
    } else {
      // Top State
      header.classList.add("bg-transparent", "py-4");
      header.classList.remove(
        "bg-white/95",
        "backdrop-blur-md",
        "shadow-md",
        "py-2"
      );

      // Hide Top Bar
      if (topBar) {
        topBar.classList.add("hidden", "opacity-0", "-translate-y-2");
      }

      // Logo expand
      logoImg.classList.add("h-20");
      logoImg.classList.remove("h-12");

      // Links: White text, shadow for readability
      navLinks.forEach((link) => {
        link.classList.add("text-white", "drop-shadow-md");
        link.classList.remove("text-brand-purple");
      });

      // Mobile toggle color
      mobileMenuBtn.classList.add("text-white");
      mobileMenuBtn.classList.remove("text-gray-800");
    }
  };

  window.addEventListener("scroll", handleScroll);
  // Initial check in case page is reloaded scrolled down
  handleScroll();

  // Simple Intersection Observer for scroll animations (optional enhancement)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Observe specific sections or elements if they have the 'reveal-on-scroll' class
  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    el.style.opacity = "0"; // Hide initially if using JS for reveal
    observer.observe(el);
  });
});
