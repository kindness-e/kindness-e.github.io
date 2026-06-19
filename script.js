document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-item");
  const cards = document.querySelectorAll(".learning-card");
  const empty = document.querySelector(".learning-empty");

  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();

      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const filter = tab.dataset.filter;
      let visibleCount = 0;

      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.style.display = matches ? "" : "none";
        if (matches) visibleCount++;
      });

      if (empty) empty.classList.toggle("is-visible", visibleCount === 0);
    });
  });
});
