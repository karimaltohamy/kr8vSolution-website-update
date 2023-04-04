const iconMenu = document.querySelector(".menu-icon");
const modelMenu = document.querySelector("#model-menu");
const closeMenu = document.querySelector(".close-menu");

iconMenu.addEventListener("click", () => {
  modelMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  modelMenu.classList.remove("open");
});

const header = document.querySelector(".header");

window.onscroll = function () {
  // scroll navbar fixed
  if (window.scrollY > 20) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
};

// portfolio btn end

// const btnEnd = document.querySelector(".btn-end");
// const nextSection = document.querySelector(".our_latest_work");

// console.log(nextSection.scrollTop);

// const horizontalScrollContainer = document.querySelector(".scroll");
// const content = document.getElementById("content");

// window.addEventListener("scroll", function () {
//   const scrollPosition = window.pageYOffset;
//   horizontalScrollContainer.scrollLeft = -scrollPosition;
// });
