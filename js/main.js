const sideMenu = document.getElementById("side-menu");
const openBtnMenu = document.getElementById("btn-open-mobile");
const closeBtnMenu = document.getElementById("btn-close-mobile");

const openMenu = () => {
  sideMenu.classList.remove("left-[-250px]");
  sideMenu.classList.add("left-0");
};

const closeMenu = () => {
  sideMenu.classList.remove("left-0");
  sideMenu.classList.add("left-[-250px]");
};

openBtnMenu.addEventListener('click', openMenu);
closeBtnMenu.addEventListener('click', closeMenu);
