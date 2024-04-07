import {
  themeButton,
  themesCard,
  openThemesMenu,
  lightButton,
  darkButton,
  systemButton,
  toggleThemeTo,
} from "./theme.js";

import { profileButton,profileDropdown, toggleProfile } from "./profile.js";

const $ = document;

//  Theme Handler
themeButton.addEventListener("click", (event) => {
  event.stopPropagation();
  openThemesMenu();
});

// Change to light theme
lightButton.addEventListener("click", (event) => {
  const theme = event.target.value;
  toggleThemeTo(theme);
  openThemesMenu();
});

// Change to dark theme
darkButton.addEventListener("click", (event) => {
  const theme = event.target.value;
  toggleThemeTo(theme);
  openThemesMenu();
});
// Change to system theme
systemButton.addEventListener("click", (event) => {
  const theme = event.target.value;
  toggleThemeTo(theme);
  openThemesMenu();
});

// Profile dropdown
profileButton.addEventListener('click', event => {
  event.stopPropagation()
  toggleProfile()
})

















//  mounted actions 
window.onload = () => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme && localTheme === "light") {
    document.documentElement.className = "light";
  } else {
    document.documentElement.className = "dark";
  }
};


document.addEventListener("click", (event) => {
  if (
    !themesCard.classList.contains("opacity-0") &&
    !themesCard.classList.contains("invisible")
  ) {
    themesCard.classList.toggle("opacity-0");
    themesCard.classList.toggle("invisible");
  }

  if (
    !profileDropdown.classList.contains("opacity-0") &&
    !profileDropdown.classList.contains("invisible")
  ) {
      profileDropdown.classList.toggle("opacity-0");
      profileDropdown.classList.toggle("invisible");
  }
});
