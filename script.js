const ctaButtonsArray = document.querySelectorAll(".cta-btn");
const overlay = document.querySelector(".overlay");
const signupDiv = document.querySelector(".content.signup-options");

const emailSignup = document.querySelector(".content.email-signup");

const closeBtn = document.querySelector(".close-button");
const emailSignupBtn = document.querySelector(".email-signup-btn");
const backToSignupBtn = document.querySelector(".back");

ctaButtonsArray.forEach((ctaBtn) =>
  ctaBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
      if (e.target === emailSignupBtn) {
        signupDiv.style.display = "none";
        emailSignup.classList.add("active");
      }
      if (e.target === backToSignupBtn) {
        emailSignup.classList.remove("active");
        signupDiv.style.display = "flex";
      }
    });
    // emailSignupBtn.addEventListener("click", () => {
    //   signupDiv.style.display = "none";
    //   emailSignup.classList.add("active");
    // });
  })
);
closeBtn.addEventListener("click", () => {
  signupDiv.style.display = "flex";
  emailSignup.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "unset";
});
