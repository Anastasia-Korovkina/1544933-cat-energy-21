// Гамбургер меню
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// Слайдер до/после для mobile
// ... без понятия ...
// let mobileSlider = document.getElementById('mobile-slider');
// let mobileInput = document.getElementById('input');

// document.getElementById('mobile-slider').addEventListener('click', function () {
//   if (mobileInput.checked) {
//     console.log('Импут нажат');
//     document.getElementById('mobile-slider').src = "img/img/mobile-after.png";
//   } else {
//     document.getElementById('mobile-slider').src = "img/mobile-after.png";
//   }
// });


// Слайдер до/после для tablet и desktop
const rangeValueElement = document.querySelector("#rangeValue");
const rangeElement = document.querySelector("#range");
const firstSlideElement = document.querySelector("#slide-1");
const secondSlideElement = document.querySelector("#slide-2");

let sliderState = 50;
rangeElement.value = sliderState;

function updateRangeValue() {
  sliderState = rangeElement.value;
  rangeValueElement.innerText = sliderState;
}

function updateSliderState() {
  firstSlideElement.style = 'clip-path:inset(0 ' + (100 - sliderState) + '%' + ' 0 0)';
  secondSlideElement.style = 'clip-path:inset(0 0 0 ' + sliderState + '%)';
}

updateRangeValue();
updateSliderState();

rangeElement.addEventListener('input', function () {
  updateRangeValue();
  updateSliderState();
});
