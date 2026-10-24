(() => {
  const body = document.body;
  document
    .querySelectorAll("[data-theme-toggle]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        body.classList.toggle("theme-light"),
      ),
    );
  document.querySelectorAll(".g-job-head").forEach((button) =>
    button.addEventListener("click", () => {
      const parent = button.closest(".g-job");
      const open = parent.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
      const sign = button.querySelector(".expand-sign");
      if (sign) sign.textContent = open ? "−" : "+";
    }),
  );
  const sections = [
    ...document.querySelectorAll(".g-main .section-anchor[id]"),
  ];
  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          document
            .querySelectorAll(".rail-link")
            .forEach((link) =>
              link.classList.toggle(
                "active",
                link.hash === `#${entry.target.id}`,
              ),
            );
        }),
      { rootMargin: "-28% 0px -62% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
  }
})();
