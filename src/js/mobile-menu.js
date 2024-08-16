"use strict";

export default (() => {
  const openMenuBtn = document.querySelector(".menu-btn");
  const closeMenuBtn = document.querySelector(".close-btn");
  const mobMenu = document.querySelector(".mobile-menu");

  if (!openMenuBtn || !closeMenuBtn || !mobMenu) {
    console.warn("Mobile menu elements not found");
    return;
  }

  const preventTouchMove = e => {
    e.preventDefault();
  };

  const addTouchMoveListener = () => {
    document.body.addEventListener("touchmove", preventTouchMove, {
      passive: false,
    });
  };

  const removeTouchMoveListener = () => {
    document.body.removeEventListener("touchmove", preventTouchMove, {
      passive: false,
    });
  };

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true";
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobMenu.classList.toggle("is-open");

    document.body.style.overflow = isMenuOpen ? "" : "hidden";
    mobMenu.style.overflow = "auto";

    if (!isMenuOpen) {
      addTouchMoveListener();
    } else {
      removeTouchMoveListener();
    }

    const menuAnchors = mobMenu.querySelectorAll("a.mobile-nav-link");
    menuAnchors.forEach(anchor => {
      if (!isMenuOpen) {
        anchor.addEventListener("click", toggleMenu);
      } else {
        anchor.removeEventListener("click", toggleMenu);
      }
    });
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  const mediaQuery = window.matchMedia("(max-width: 767px)");
  const queryHandler = e => {
    if (!e.matches && mobMenu.classList.contains("is-open")) {
      toggleMenu();
    }
  };
  mediaQuery.addEventListener("change", queryHandler);

  if (mobMenu.classList.contains("is-open")) {
    addTouchMoveListener();
  } else {
    removeTouchMoveListener();
  }
})();