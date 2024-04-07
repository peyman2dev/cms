const $ = document;
export const themeButton = $.querySelector("#themeButton");
export const themesCard = $.querySelector("#themes-card");

export const lightButton = document.querySelector("#lightButton");
export const darkButton = document.querySelector("#darkButton");
export const systemButton = document.querySelector("#systemButton");

// Functions
export const openThemesMenu = () => {
  if (
    themesCard.classList.contains("opacity-0") &&
    themesCard.classList.contains("invisible")
  ) {
    themesCard.classList.toggle("opacity-0");
    themesCard.classList.toggle("invisible");
  } else {
    themesCard.classList.toggle("opacity-0");
    themesCard.classList.toggle("invisible");
  }
};


export const toggleThemeTo = theme => {
  if (theme === "dark") {
        document.documentElement.className = "dark";
    localStorage.setItem("theme", "dark");
  } else {
        document.documentElement.className = "light";
    localStorage.setItem("theme", "light");
  }
}
























// export const themeSwitchHandler = () => {
//   const localTheme = localStorage.getItem("theme");
//   if (localTheme && localTheme === "light") {
//     document.documentElement.className = "dark";
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.documentElement.className = "light";
//     localStorage.setItem("theme", "light");
//   }
// };
