const ctaButtonsArray = document.querySelectorAll(".cta-btn");
const overlay = document.querySelector(".overlay");

const closeBtn = document.querySelector(".close-button");

ctaButtonsArray.forEach((ctaBtn) =>
  ctaBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  })
);
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
  document.body.style.overflow = "unset";
});
