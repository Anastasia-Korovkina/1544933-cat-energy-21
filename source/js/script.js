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


// Слайдер до/после для desktop
let slider = document.getElementById('slider');
let beforeImage = document.getElementById('before');
let afterImage = document.getElementById('after');

slider.addEventListener('input', function () {
  beforeImage.style.width = slider.value + '%';
  afterImage.style.width = slider.value + '%';
});
