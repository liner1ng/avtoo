const mobuleBytton = document.querySelector(".about__company-mobile");
const list = document.querySelector(".about__company-list");

mobuleBytton.addEventListener("click", () => {
  list.classList.toggle("active");
});

let button = document.querySelector("#text");
let originalText = button.innerText;
let newText = "Cкрыть";

function changeText() {
  if (button.innerText === originalText) {
    button.innerText = newText;
  } else {
    button.innerText = originalText;
  }
}
