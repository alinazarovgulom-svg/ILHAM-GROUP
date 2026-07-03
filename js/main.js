// ILHAM GROUP — site behaviour

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  const progressBar = document.querySelector(".scroll-progress");

  const onScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add("is-scrolled");
    } else if (!header?.classList.contains("solid")) {
      header?.classList.remove("is-scrolled");
    }

    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      progressBar.style.width = pct + "%";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
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

  // Contact form — submits via Web3Forms (no backend needed)
  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-status");
  const sendingMsg = note?.dataset.sending || "Sending...";
  const successMsg = note?.dataset.success || "Thank you! Your message has been received.";
  const errorMsg = note?.dataset.error || "Something went wrong. Please try again later.";

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type=submit]");
    if (note) note.textContent = sendingMsg;
    if (submitBtn) submitBtn.disabled = true;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (note) note.textContent = result.success ? successMsg : errorMsg;
      if (result.success) form.reset();
    } catch (err) {
      if (note) note.textContent = errorMsg;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });

  // Footer year
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
