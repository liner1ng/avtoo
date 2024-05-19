let touchstartX = 0;
let touchendX = 0;
const slider = document.querySelector(".slider__list");

slider.addEventListener(
  "touchstart",
  function (event) {
    touchstartX = event.changedTouches[0].screenX;
  },
  false
);

slider.addEventListener(
  "touchend",
  function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture1();
  },
  false
);

function handleGesture1() {
  if (touchendX < touchstartX) {
    slider.scrollLeft += 210;
  }

  if (touchendX > touchstartX) {
    slider.scrollLeft -= 210;
  }
}

function openTab(tabName, btn) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  var tabButtons = document.getElementsByClassName("car__info-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("selected");
  }

  btn.classList.add("selected");
}

let touchstartXx = 0;
let touchendXx = 0;
const slider2 = document.querySelector(".position");

slider2.addEventListener(
  "touchstart",
  function (event) {
    touchstartXx = event.changedTouches[0].screenX;
  },
  false
);

slider2.addEventListener(
  "touchend",
  function (event) {
    touchendXx = event.changedTouches[0].screenX;
    handleGesture1();
  },
  false
);

function handleGesture1() {
  if (touchendXx < touchstartXx) {
    slider2.scrollLeft += 210;
  }

  if (touchendXx > touchstartXx) {
    slider2.scrollLeft -= 210;
  }
}
