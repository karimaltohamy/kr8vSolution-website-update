const iconMenu = document.querySelector(".menu-icon");
const modelMenu = document.querySelector("#model-menu");
const closeMenu = document.querySelector(".close-menu");

iconMenu.addEventListener("click", () => {
  modelMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  modelMenu.classList.remove("open");
});
