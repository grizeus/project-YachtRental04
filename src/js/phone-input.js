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

  inputs.forEach(input => {
    if (input.name === "telephone_number") {
      input.addEventListener("input", e => formatPhoneNumber(e.target));
    }

    input.addEventListener("invalid", e => {
      e.preventDefault();

      // Reset all previous invalid marks and popup
      inputs.forEach(inp => inp.classList.remove("input-invalid"));
      popups.forEach(popup => (popup.style.visibility = "hidden"));

      // Mark the first invalid input
      if (!form.querySelector(".input-invalid")) {
        input.classList.add("input-invalid");
        switch (input.type) {
          case "text":
            namePop.style.visibility = "visible";
            console.log("name");
            break;
          case "email":
            emailPop.style.visibility = "visible";
            console.log("email");
            break;
          case "tel":
            telPop.style.visibility = "visible";
            console.log("tel");
            break;
        }
      }
    });

    input.addEventListener("focus", () => {
      input.classList.remove("input-invalid");
      popups.forEach(popup => (popup.style.visibility = "hidden"));
    });
  });

  form.addEventListener("submit", e => {
    const firstInvalidInput = form.querySelector("input:invalid");

    if (firstInvalidInput) {
      e.preventDefault();
      firstInvalidInput.focus();
    }
  });
})();