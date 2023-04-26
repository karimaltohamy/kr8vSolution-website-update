// crate cusom cursor
const innerCursor = document.querySelector(".inner_cursor");
const menuIcon = document.querySelector(".menu-icon");
const heroNavItems = document.querySelectorAll(".hero_nav_item");
const heroNavOne = document.querySelector(".hero_nav_one");
const heroNavtwo = document.querySelector(".hero_nav_two");
const heroNavthree = document.querySelector(".hero_nav_three");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
});

// menu icon
menuIcon.addEventListener("mousemove", () => {
  innerCursor.classList.add("grow");
});
menuIcon.addEventListener("mouseleave", () => {
  innerCursor.classList.remove("grow");
});

// heroNavItems.forEach((item) => {
//   item.addEventListener("mousemove", () => {
//     innerCursor.classList.add(item.getAttribute("data-video"));
//   });
//   item.addEventListener("mouseleave", () => {
//     innerCursor.classList.remove(item.getAttribute("data-video"));
//   });
// });

heroNavOne.addEventListener("mousemove", () => {
  innerCursor.classList.add("grow-video-1");
});

heroNavOne.addEventListener("mouseleave", () => {
  innerCursor.classList.remove("grow-video-1");
});

heroNavtwo.addEventListener("mousemove", () => {
  innerCursor.classList.add("grow-video-2");
});

heroNavtwo.addEventListener("mouseleave", () => {
  innerCursor.classList.remove("grow-video-2");
});

heroNavthree.addEventListener("mousemove", () => {
  innerCursor.classList.add("grow-video-3");
});

heroNavthree.addEventListener("mouseleave", () => {
  innerCursor.classList.remove("grow-video-3");
});
