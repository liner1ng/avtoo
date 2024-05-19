const menuToggle = document.getElementById("header__menu-icon");
const menu = document.getElementById("mobile__nav");
let isActiveMemo = false;

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("open");
  if (isActiveMemo) {
    menu.classList.remove("open");
    document.body.style.overflow = "auto";
    isActiveMemo = false;
  } else {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
    isActiveMemo = true;
  }
});

const modal = document.querySelector(".modal");
const modalBtns = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".modal__close");

modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокировка скроллинга
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Разблокировка скроллинга
});

// const formInput = document.querySelectorAll(".form__input-number");

// formInput.forEach((input) => {
//   input.addEventListener("input", (input) => {
//     console.log("not error");
//     formatPhoneNumber(input);
//   });
// });

// function formatPhoneNumber(input) {
//   let cleaned = ("" + input).replace(/\D/g, "");
//   let match = cleaned.match(/^(\d{1,3})(\d{1,3})?(\d{1,2})?(\{0,2})?/);

//   if (match) {
//     let formattedNumber = "+7 (" + match[1];

//     if (match[2]) {
//       formattedNumber += ") " + match[2];
//     }

//     if (match[3]) {
//       formattedNumber += "-" + match[3];
//     }

//     if (match[4]) {
//       formattedNumber += "-" + match[4];
//     }
//     console.log("form", input);
//     input.value = formattedNumber;
//   }
//   console.log("notform", input);
//   return input;
// }
