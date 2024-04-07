import {
  themeButton,
  themesCard,
  openThemesMenu,
  lightButton,
  darkButton,
  systemButton,
  toggleThemeTo,
} from "./theme.js";
const $ = document;

//  Theme Handler
themeButton.addEventListener("click", event => {
    event.stopPropagation()
    openThemesMenu()
});

lightButton.addEventListener("click", (event) => {
    const theme = event.target.value
    toggleThemeTo(theme)
  openThemesMenu()
});
darkButton.addEventListener("click", (event) => {
    const theme = event.target.value
    toggleThemeTo(theme)
  openThemesMenu()
});
systemButton.addEventListener("click", (event) => {
    const theme = event.target.value
    toggleThemeTo(theme)
  openThemesMenu()
});

window.onload = () => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme && localTheme === "light") {
    document.documentElement.className = "light";
  } else {
    document.documentElement.className = "dark";
  }
};

document.addEventListener('click', event => {
    if (
        !themesCard.classList.contains("opacity-0") &&
        !themesCard.classList.contains("invisible")
      ) {
        themesCard.classList.toggle("opacity-0");
        themesCard.classList.toggle("invisible");
      } 
})