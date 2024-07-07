import {
  themeButton,
  themesCard,
  openThemesMenu,
  lightButton,
  darkButton,
  systemButton,
  toggleThemeTo,
} from "./theme.js";

import { profileButton, profileDropdown, toggleProfile } from "./profile.js";

const $ = document;
const navbarScreen = $.querySelector("#navbar-wrap");
const navbar = $.querySelector("#navbar");
const navbarButton = $.querySelector("#navbar-button");
const navbarCloseBtn = $.querySelector("#close-navbar");

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
profileButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleProfile();
});

const toggleNav = () => {
  navbarScreen.classList.toggle("invisible");
  navbarScreen.classList.toggle("opacity-0");
  navbar.classList.toggle("left-[-1440px]");
  navbar.classList.toggle("left-[0]");
};

navbarButton.addEventListener("click", (event) => {
  if (
    navbarScreen.classList.contains("opacity-0") &&
    navbarScreen.classList.contains("invisible")
  ) {
    toggleNav();
  }
});
navbar.addEventListener("click", (event) => {
  event.stopPropagation();
});

navbarScreen.addEventListener("click", () => toggleNav());
navbarCloseBtn.addEventListener("click", () => toggleNav());

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


//  Users 
let modal = document.querySelector("#modal-card")
let modalContent = document.querySelector("#modal-content")
let title = document.querySelector('.section-title')

let usernameInput = document.querySelector("#usernameInput")
let firstNameInput = document.querySelector("#firstNameInput")
let lastNameInput = document.querySelector("#lastNameInput")
let usernameVal = ''
let firstnameVal = ''
let lastnameVal = ''
const usersContainer = document.querySelector('#table-container')
let users = []


async function getUsers() {
  const response = await fetch('http://localhost:3000/users')
  const resolveData = await response.json()

  users = resolveData
  return resolveData
}

getUsers()


usernameInput.addEventListener('keyup', function (event) {
  usernameVal = event.target.value
})
firstNameInput.addEventListener('keyup', function (event) {
  firstnameVal = event.target.value
})
lastNameInput.addEventListener('keyup', function (event) {
  lastnameVal = event.target.value
})


async function createAnUser() {
  let requestBody = {
    id: crypto.randomUUID(),
    username: usernameVal,
    name: firstnameVal,
    lastname: lastnameVal,
    role: "user"
  }

  const request = await fetch(`http://localhost:3000/users`, {
    method: "POST",
    body: JSON.stringify(requestBody)
  })

  const requestResult = await request.json()

  if (request.ok) {
    toggleModal()
    getUsers()
  }

  return requestBody
  
}
window.createAnUser = createAnUser



async function userRemove(userID) {
  console.log(userID)

  const res = await fetch(`http://localhost:3000/users/${userID}`, {
    'method': "DELETE"
  })
  const responseData = await res.json()

  console.log(responseData)
  if (res.ok) {
    getUsers()
    toggleModal()
  }
  return responseData

}

// معرفی فانشن به ویندو
window.userRemove = userRemove

modal.addEventListener('click', function () {
  modal.classList.toggle('invisible')
  modal.classList.toggle('opacity-0')
})

modalContent.addEventListener('click', function (event) {
  event.stopPropagation()
})


const toggleModal = () => {
  modal.classList.toggle('invisible')
  modal.classList.toggle('opacity-0')
}

window.toggleModal = toggleModal

function userRemoveModalToggle(targetUserID) {
  modal.classList.toggle('invisible')
  modal.classList.toggle('opacity-0')
  modalContent.innerHTML = ""

  modalContent.insertAdjacentHTML('afterbegin', `
      <header class="flex w-full items-center text-sm py-3 px-6 justify-between">
        <span class=" text-gray-600 dark:text-white/40">
          USER BAN ACTION
        </span>
  
      </header>
      <main class="w-full border-y border-white/10 py-5 flex flex-col items-center">
        <span>
          Are you sure to remove this user?
        </span>
        <span
          class="text-red-700 mt-2 select-none font-Inter-Regular text-xs bg-red-500/5 border-red-500/20 border rounded-md py-2 px-4">
          This action cannot be undone !
        </span>
      </main>
      <footer
        class="text-sm py-2 flex items-center gap-1 child:px-2 child:py-1 child:rounded-md child:duration-150 child-hover:bg-opacity-80 child:border justify-end px-4">
        <button onclick="toggleModal()" class="bg-red-600 border-red-500">
          Cancel
        </button>
        <button onclick="userRemove('${targetUserID}')" class="bg-teal-600 border-teal-500">
          Continue
        </button>
      </footer>
   `)
}
window.userRemoveModalToggle = userRemoveModalToggle

async function roleHandler(targetID) {
  const user = users.find(user => user.id == targetID)
  const reqData = {
    ...user,
    role: user.role == "user" ? "admin" : user.role == "admin" ? "moderator" : "user",
  }

  const response = await fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(reqData)
  })
  const responseData = await response.json()

  if (response.ok) {
    toggleModal()
  }

  return responseData


}

window.roleHandler = roleHandler

function userRoleChangleModal(targetUserID) {
  modal.classList.toggle('invisible')
  modal.classList.toggle('opacity-0')
  modalContent.innerHTML = ""

  const user = users.find(user => user.id == targetUserID)

  modalContent.insertAdjacentHTML('afterbegin', `
        <header class="flex w-full items-center text-sm py-3 px-6 justify-between">
        <span class=" text-gray-600 dark:text-white/40">
          ROLE CHANGLE ACTION
        </span>
        <button>
          X
        </button>
      </header>
      <main class="w-full border-y text-sm border-white/10 py-5 flex flex-col items-center">
        <span>
          Are you sure to change <span class="font-Geist-Light text-sm px-0.5 py-1 pb-1.5 rounded-md text-teal-500 underline">${user.name}'s</span> role?
        </span>
        <span
          class="text-sky-700 mt-4 select-none font-Inter-Regular text-xs bg-sky-500/5 border-sky-500/20 border rounded-md py-2 px-4">
          This action cannot be undone !
        </span>
      </main>
      <footer
        class="text-sm py-2 flex items-center gap-1 child:px-2 child:py-1 child:rounded-md child:duration-150 child-hover:bg-opacity-80 child:border justify-end px-4">
        <button onclick="toggleModal()" class="bg-red-600 border-red-500">
          Cancel
        </button>
        <button onclick="roleHandler('${targetUserID}')" class="bg-teal-600 border-teal-500">
          Continue
        </button>
      </footer>
   `)
}
window.userRoleChangleModal = userRoleChangleModal



window.addEventListener('load', () => {
  console.log(users)
  if (users && users.length) {
    title.innerHTML = `Users (${users.length})`
    usersContainer.innerHTML = ''
    users.forEach((user) => {
      usersContainer.insertAdjacentHTML('afterbegin', `
        <div class="w-full h-[80px] child:flex child:items-center child:justify-center child:w-[150px]">
          <span>
            ${user.username}
          </span>
          <span>
            ${user.name}
          </span>
          <span>
            ${user.lastname}
          </span>
          <div class="flex-center"> 
            <span class="px-2 py-1 text-xs uppercase ${user.role == 'user' ? "bg-rose-500/10 text-rose-500 border-rose-500/10" : user.role == "moderator" ? "bg-sky-600/10 text-sky-600 border-sky-600/40" : " text-teal-500 border-teal-600/20 bg-teal-500/10 "} rounded-md border select-none">
              ${user.role}
            </span>
          </div>
          <div class="flex-center min-w-[260px] child:px-2 child:py-1.5 child:rounded-md child:border child:dark:border-white/15 gap-1 child:duration-150 child-hover:bg-opacity-80 text-white">
            <button class="bg-sky-500">View</button>
            <button class="bg-teal-600" onclick="userRoleChangleModal('${user.id}')">Manage</button>
            <button class="bg-red-600" onclick="userRemoveModalToggle('${user.id}')">REMOVE</button>
          </div>
        </div>
      `)
    })
  }
})