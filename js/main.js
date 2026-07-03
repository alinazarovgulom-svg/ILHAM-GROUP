// ILHAM GROUP — site behaviour

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  const onScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add("is-scrolled");
    } else if (!header?.classList.contains("solid")) {
      header?.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  toggle?.addEventListener("click", () => {
    mobileNav?.classList.toggle("is-open");
    toggle.classList.toggle("is-open");
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileNav.classList.remove("is-open"));
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));

  // Animated stat counters
  const stats = document.querySelectorAll(".stat .value[data-count]");
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        statObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  stats.forEach((el) => statObserver.observe(el));

  // Collections filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll("[data-category]");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.style.display = show ? "" : "none";
      });
    });
  });

  // Contact form (static — no backend yet)
  const form = document.querySelector("#contact-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const note = document.querySelector("#form-status");
    if (note) {
      note.textContent = "Rahmat! Xabaringiz qabul qilindi. Tez orada siz bilan bog'lanamiz.";
    }
    form.reset();
  });

  // Footer year
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
