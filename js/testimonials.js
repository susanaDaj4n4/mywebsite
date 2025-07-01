document.body.classList.replace("no-js", "js");

function setupTestimonials(config) {
  const wrapper = document.querySelector(config.wrapper);
  if (!wrapper) return;

  const items = wrapper.querySelectorAll(config.items);
  if (items.length === 0) return;

  if (!window.matchMedia("screen and (min-width: 90rem)").matches) return;

  wrapper.classList.add("js-enable");

  const slideWidth = 740; // largura do slide em px (ex: 46.25rem = 740px)
  const gap = 32; // gap entre os slides em px (ex: 2rem = 32px)
  const totalSlides = items.length;

  const totalDistance = (slideWidth + gap) * totalSlides;

  // Define variáveis CSS dinamicamente
  wrapper.style.setProperty("--qtd", totalSlides);
  wrapper.style.setProperty("--slide-distance", `${totalDistance}px`);

  items.forEach((item) => {
    const clone = item.cloneNode(true);
    wrapper.appendChild(clone);
  });
}

setupTestimonials({
  wrapper: ".testimonials__carroussel__wrapper",
  items: "figure",
});

// document
//   .querySelector(".testimonials__carroussel__wrapper")
//   ?.classList.add("js-enable");

// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .querySelector(".testimonials__carroussel__wrapper")
//     ?.classList.add("js-enable");
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const wrapper = document.querySelector(".testimonials__carroussel__wrapper");
//   if (wrapper) {
//     wrapper.classList.add("js-enable");
//   }
// });
