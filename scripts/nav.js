const NAVIGATION_BACKGROUND = ".navigation__background";
const HAMBURGER_BUTTON = ".hamburger__btn";
const HAMBURGER_BAR = ".hamburger__bar";
const NAVIGATION_NAV = ".navigation__nav";

const navigation__background = document.querySelector(NAVIGATION_BACKGROUND);
const hamburger_btn = document.querySelector(HAMBURGER_BUTTON);
const hamburger__bar = document.querySelector(HAMBURGER_BAR);

const navigation__nav = document.querySelector(NAVIGATION_NAV);

hamburger_btn.addEventListener("click", () => {
  if (hamburger_btn.classList.contains("active")) {
    hamburger_btn.classList.remove("active");
  } else {
    hamburger_btn.classList.add("active");
  }

  if (navigation__background.classList.contains("active")) {
    navigation__background.classList.remove("active");
  } else {
    navigation__background.classList.add("active");
  }

  if (navigation__nav.classList.contains("active")) {
    navigation__nav.classList.remove("active");
  } else {
    navigation__nav.classList.add("active");
  }
});
