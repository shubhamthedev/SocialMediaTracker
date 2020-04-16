//Variables
const headerCard = document.querySelectorAll(".header__card"),
  headerCardHandle = document.querySelectorAll(".header__social-media-text"),
  followers = document.querySelectorAll(".followers"),
  headingSecondary = document.querySelectorAll(".heading-secondary"),
  headingTertiary = document.querySelector(".heading-tertiary"),
  overviewCard = document.querySelectorAll(".overview-card"),
  overviewCardHeading = document.querySelectorAll(".overview-card__heading"),
  overviewCardText = document.querySelectorAll(".overview-card__text"),
  navbarTextDark = document.querySelector(".navbar__dark-text"),
  navbarToggle = document.querySelector(".navbar__toggle"),
  navbarCircle = document.querySelector(".navbar__circle");

//Event Listeners
document.getElementById("toggle").addEventListener("click", darkMode);
function darkMode(e) {
  if (document.body.classList.contains("body-white")) {
    document.body.className = "body-dark";
    document.querySelector("h1").className =
      "heading-primary heading-primary--dark";
    document.getElementById("lead-para").className = "lead lead--dark";
    for (let i = 0; i < headerCard.length; i++) {
      headerCard[i].classList.remove("header__card--light");
      headerCard[i].classList.add("header__card--dark");
    }
    for (let i = 0; i < headerCardHandle.length; i++) {
      headerCardHandle[i].classList.remove("header__social-media-text--light");
      headerCardHandle[i].classList.add("header__social-media-text--dark");
    }
    for (let i = 0; i < headingSecondary.length; i++) {
      headingSecondary[i].classList.remove("heading-secondary--light");
      headingSecondary[i].classList.add("heading-secondary--dark");
    }
    for (let i = 0; i < followers.length; i++) {
      followers[i].classList.remove("followers--light");
      followers[i].classList.add("followers--dark");
    }
    headingTertiary.classList.remove("heading-tertiary--light");
    headingTertiary.classList.add("heading-tertiary--dark");
    for (let i = 0; i < overviewCard.length; i++) {
      overviewCard[i].classList.remove("overview-card--light");
      overviewCard[i].classList.add("overview-card--dark");
    }
    for (let i = 0; i < overviewCardHeading.length; i++) {
      overviewCardHeading[i].classList.remove("overview-card__heading--light");
      overviewCardHeading[i].classList.add("overview-card__heading--dark");
    }
    for (let i = 0; i < overviewCardText.length; i++) {
      overviewCardText[i].classList.remove("overview-card__text--light");
      overviewCardText[i].classList.add("overview-card__text--dark");
    }
    navbarTextDark.classList.remove("navbar__text-dark--light");
    navbarTextDark.classList.add("navbar__text-dark--dark");
    navbarToggle.classList.remove("navbar__toggle--light");
    navbarToggle.classList.add("navbar__toggle--dark");
    navbarCircle.classList.remove("navbar__circle--light");
    navbarCircle.classList.add("navbar__circle--dark");
  } else {
    document.body.className = "body-white";
    document.querySelector("h1").className =
      "heading-primary heading-primary--light";
    document.getElementById("lead-para").className = "lead lead--light";
    for (let j = 0; j < headerCard.length; j++) {
      headerCard[j].classList.remove("header__card--dark");
      headerCard[j].classList.add("header__card--light");
    }
    for (let i = 0; i < headerCardHandle.length; i++) {
      headerCardHandle[i].classList.remove("header__social-media-text--dark");
      headerCardHandle[i].classList.add("header__social-media-text--light");
    }
    for (let i = 0; i < headingSecondary.length; i++) {
      headingSecondary[i].classList.remove("heading-secondary--dark");
      headingSecondary[i].classList.add("heading-secondary--light");
    }
    for (let i = 0; i < followers.length; i++) {
      followers[i].classList.remove("followers--dark");
      followers[i].classList.add("followers--light");
    }
    headingTertiary.classList.remove("heading-tertiary--dark");
    headingTertiary.classList.add("heading-tertiary--light");
    for (let i = 0; i < overviewCard.length; i++) {
      overviewCard[i].classList.remove("overview-card--dark");
      overviewCard[i].classList.add("overview-card--light");
    }
    for (let i = 0; i < overviewCardHeading.length; i++) {
      overviewCardHeading[i].classList.remove("overview-card__heading--dark");
      overviewCardHeading[i].classList.add("overview-card__heading--light");
    }
    for (let i = 0; i < overviewCardText.length; i++) {
      overviewCardText[i].classList.remove("overview-card__text--dark");
      overviewCardText[i].classList.add("overview-card__text--light");
    }
    navbarTextDark.classList.remove("navbar__text-dark--dark");
    navbarTextDark.classList.add("navbar__text-dark--light");
    navbarToggle.classList.remove("navbar__toggle--dark");
    navbarToggle.classList.add("navbar__toggle--light");
    navbarCircle.classList.remove("navbar__circle--dark");
    navbarCircle.classList.add("navbar__circle--light");
  }
}
