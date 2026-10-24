(() => {
  const body = document.body;
  document
    .querySelectorAll("[data-theme-toggle]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        body.classList.toggle("theme-light"),
      ),
    );
  document.querySelectorAll(".d-tab").forEach((button) =>
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".d-tab")
        .forEach((tab) => tab.classList.toggle("active", tab === button));
      document
        .querySelectorAll(".d-panel")
        .forEach((panel) =>
          panel.classList.toggle("active", panel.id === button.dataset.tab),
        );
    }),
  );
  document.querySelectorAll("[data-record]").forEach((button) =>
    button.addEventListener("click", () => {
      const records = [...document.querySelectorAll("[data-record]")];
      records.forEach((record, index) => {
        record.classList.toggle("active", record === button);
        record.querySelector(".record-indicator").textContent =
          record === button ? "●" : "○";
        document
          .querySelectorAll(".record-detail")
          [index].classList.toggle("open", record === button);
      });
    }),
  );
  document.querySelectorAll(".s-stop-card").forEach((button) =>
    button.addEventListener("click", () => {
      const card = button.closest(".s-stop");
      const open = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
      const sign = button.querySelector("i");
      if (sign) sign.textContent = open ? "−" : "+";
    }),
  );
  const progress = document.querySelector(".s-progress span");
  if (progress) {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }
  const sections = [...document.querySelectorAll(".story-section")];
  if (sections.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            document
              .querySelectorAll(".track-stop")
              .forEach((stop) =>
                stop.classList.toggle(
                  "active",
                  stop.hash === `#${entry.target.id}`,
                ),
              );
        }),
      { rootMargin: "-38% 0px -45% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
  }
})();
