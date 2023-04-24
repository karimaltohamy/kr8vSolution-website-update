const images = document.querySelectorAll(".img_wil_change");

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    const targetRotateX = Math.floor(Math.random() * 90) - 45 + "deg";
    const targetRotateY = Math.floor(Math.random() * 90) - 45 + "deg";

    gsap.to(image, {
      duration: 1,
      ease: "power2.out",
      transform: `perspective(500px) rotateX(${targetRotateX}) rotateY(${targetRotateY})`,
    });
  });

  image.addEventListener("mouseleave", () => {
    gsap.to(image, {
      duration: 1,
      ease: "power2.out",
      transform: "perspective(300px) rotateX(0deg) rotateY(0deg)",
    });
  });
});
