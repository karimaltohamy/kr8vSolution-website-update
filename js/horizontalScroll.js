/* Panels */
const panelsContainer = document.querySelector("#panels-container");
const panels = gsap.utils.toArray("#panels-container .panel");
const panelWidth = panels[0].offsetWidth; // assumes all panels have same width
const numPanels = panels.length;

tween = gsap.to(panels, {
  xPercent: 100,
  x: () => -innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    start: "top top",
    end: () => innerWidth * 3,
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});

// // Add a conditional check for mobile devices
// if (window.innerWidth < 768) {
//   // Mobile: disable the horizontal scrolling animation and show all the panels
//   gsap.set(panelsContainer, { scrollTrigger: null });
//   gsap.set(panels, { clearProps: "all" });
// } else {
//   // Desktop: enable the horizontal scrolling animation
//   gsap.to(panels, {
//     xPercent: -100 * (numPanels - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: panelsContainer,
//       start: "top top",
//       end: () => "+=" + panelWidth * (numPanels - 3),
//       scrub: 1,
//       pin: true,
//       invalidateOnRefresh: true,
//       anticipatePin: 1,
//     },
//   });
// }
