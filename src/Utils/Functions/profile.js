const $ = document;

// Profile Button
export const profileButton = $.querySelector("#profile-button");
export const profileDropdown = $.querySelector("#profile-dropdown");

export const toggleProfile = () => {
  if (
    profileDropdown.classList.contains("opacity-0") &&
    profileDropdown.classList.contains("invisible")
  ) {
    profileDropdown.classList.toggle("opacity-0");
    profileDropdown.classList.toggle("invisible");
  }  else {
    profileDropdown.classList.toggle("opacity-0");
    profileDropdown.classList.toggle("invisible");
  } 
};


profileDropdown.addEventListener('click', event => event.stopPropagation())