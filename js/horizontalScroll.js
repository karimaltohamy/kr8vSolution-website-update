/* Panels */
const panelsContainer = document.querySelector("#panels-container");
const panels = gsap.utils.toArray("#panels-container .panel");
const panelWidth = panels[0].offsetWidth; // assumes all panels have same width
const numPanels = panels.length;

// if (innerWidth <= 768) {
tween = gsap.to(panels, {
  xPercent: 100,
  x: () => -innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    start: "top top",
    end: () => innerWidth * 4,
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});
// }

// Add a conditional check for mobile devices
