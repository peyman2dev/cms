import { themeToggle } from "./theme.js";

const $ = document;

const themeButton = $.querySelector("#themeButton");

themeButton.addEventListener("click", (event) => themeToggle());
