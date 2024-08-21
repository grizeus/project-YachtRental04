"use strict";

export default (() => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");
  const popups = document.querySelectorAll(".input-popup");
  const [namePop, emailPop, telPop] = popups;
  const formatPhoneNumber = input => {
    let value = input.value.replace(/[^\d]/g, "");
    let formatted = "";

    if (value.length > 0 && value.length <= 2) {
      formatted = `+${value}`;
    } else if (value.length > 2 && value.length <= 5) {
      formatted = `+${value.slice(0, 2)}-${value.slice(2)}`;
    } else if (value.length > 5 && value.length <= 8) {
      formatted = `+${value.slice(0, 2)}-${value.slice(2, 5)}-${value.slice(
        5
      )}`;
    } else if (value.length > 8 && value.length <= 10) {
      formatted = `+${value.slice(0, 2)}-${value.slice(2, 5)}-${value.slice(
        5,
        8
      )}-${value.slice(8)}`;
    } else if (value.length > 10 && value.length <= 12) {
      formatted = `+${value.slice(0, 2)}-${value.slice(2, 5)}-${value.slice(
        5,
        8
      )}-${value.slice(8, 10)}-${value.slice(10)}`;
    }

    input.value = formatted;
  };
  const popupContent = { name: "Please enter your full name", email: "Please enter your email: \"name@domain.com\"", phone: "Please use the international format, e.g. +38-420-123-45-67"};
  const initialBorderColor = inputs[0].style.borderColor;
  const warnBorderColor = "#e27246";

  let firstInvalidInput = null;
  for (const input of inputs) {
    if (input.name === "telephone_number") {
      input.addEventListener("input", e => formatPhoneNumber(e.target));
    }

    input.addEventListener("invalid", e => {
      e.preventDefault();

      if (!firstInvalidInput) {
        firstInvalidInput = input;
      
        switch (input.name) {
          case "username":
            input.style.borderColor = warnBorderColor;
            namePop.innerHTML = popupContent.name;
            namePop.style.visibility = "visible";
            break;
          case "email_address":
            input.style.borderColor = warnBorderColor;
            emailPop.innerHTML = popupContent.email;
            emailPop.style.visibility = "visible";
            break;
          case "telephone_number":
            input.style.borderColor = warnBorderColor;
            telPop.innerHTML = popupContent.phone;
            telPop.style.visibility = "visible";
            break;
          default:
            break;
        }
      }
    });

    input.addEventListener("focus", () => {
      inputs.forEach(input => (input.style.borderColor = initialBorderColor));
      popups.forEach(popup => (popup.style.visibility = "hidden"));
      firstInvalidInput = null;
    });
  }
})();
