"use strict";

export default (() => {
  const phoneInput = document.querySelector('[name="telephone_number"]');

  phoneInput.addEventListener("input", e => {
    let input = e.target.value.replace(/[^\d]/g, "");
    let formatted = "";

    if (input.length > 0 && input.length <= 2) {
      formatted = `+${input}`;
    } else if (input.length > 2 && input.length <= 5) {
      formatted = `+${input.slice(0, 2)}-${input.slice(2)}`;
    } else if (input.length > 5 && input.length <= 8) {
      formatted = `+${input.slice(0, 2)}-${input.slice(2, 5)}-${input.slice(
        5)}`;
    } else if (input.length > 8 && input.length <= 10) {
      formatted = `+${input.slice(0, 2)}-${input.slice(2, 5)}-${input.slice(
        5, 8)}-${input.slice(8)}`;
    } else if (input.length > 10 && input.length <= 12) {
      formatted = `+${input.slice(0, 2)}-${input.slice(2, 5)}-${input.slice(
        5, 8)}-${input.slice(8, 10)}-${input.slice(10)}`;
    }

    e.target.value = formatted;
  });
  const popup = document.querySelector(".phone-helper-popup");

  phoneInput.addEventListener("invalid", e => {
    e.preventDefault();
    popup.style.visibility = "visible";
  });

  phoneInput.addEventListener("focus", () => {
    popup.style.visibility = "hidden";
  });
})();