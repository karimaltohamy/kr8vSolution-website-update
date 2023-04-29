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

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  mousewheel: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// fixed menu icon
const menuIcon = document.querySelector(".menu_icon");
window.onscroll = function () {
  if (window.scrollY > 10) {
    menuIcon.classList.add("fixed");
  } else {
    menuIcon.classList.remove("fixed");
  }
};
