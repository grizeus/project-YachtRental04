"use strict";

export default (() => {
  const topScrollBtn = document.querySelector(".top-scroll-btn");

  topScrollBtn.addEventListener("click", () => {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const btnVanishing = () => {
    const TRIGGER_HEIGHT = 100;
    const scrollYOffset = window.scrollY;

    if (scrollYOffset > TRIGGER_HEIGHT) {
      topScrollBtn.style.visibility = "visible";
    } else {
      topScrollBtn.style.visibility = "hidden";
    }
  };

  window.addEventListener("scroll", btnVanishing);
})();
