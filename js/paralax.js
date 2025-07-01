(function () {
  window.addEventListener("scroll", positionImage);
  const dataParallaxContainer = [
    ...document.querySelectorAll("[data-parallax]"),
  ];

  function isGettingOut(container) {
    return container.getBoundingClientRect().top <= 0;
  }

  function getNewPositionY(c) {
    const v = parsefloat(c.getAttribute("data-p-velocity")) || 2;
    return c.getBoundingClientRect().top * v * -1;
  }

  function positionImage() {
    dataParallaxContainer.forEach((c) => {
      let originalPositionY = getComputedStyle(c).backgroundPositionY;
      let originalPositionX = getComputedStyle(c).backgroundPositionX;

      console.log(originalPositionX, originalPositionY);

      if (isGettingOut(c)) {
        c.style.backgroundPosition = `${originalPositionX} ${getNewPositionY(
          c
        )}px`;
      }
    });
  }
})();
