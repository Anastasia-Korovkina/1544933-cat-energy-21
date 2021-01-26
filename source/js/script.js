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



// Слайдер до/после для tablet и desktop

const rangeElement = document.querySelector("#range");
const checkboxElement = document.querySelector("#checkbox");

const buttonBefore = document.querySelector("#button-before");
const buttonAfter = document.querySelector("#button-after");

const firstSlideElement = document.querySelector("#slide-1");
const secondSlideElement = document.querySelector("#slide-2");

// Объявление переменной, отражающая состояние слайдера
let sliderState = 50;
if (window.innerWidth < 768) {
  sliderState = 0;
}

function rangeOnInput() {
  sliderState = rangeElement.value;
  renderSliderState();
}

function checkboxOnInput() {
  if (checkboxElement.checked) {
    sliderState = 100;
  } else {
    sliderState = 0;
  }
  renderSliderState()
}

function buttonBeforeOnClick() {
  sliderState = 100;
  renderSliderState();
}

function buttonAfterOnClick() {
  sliderState = 0;
  renderSliderState();
}

function renderSliderState() {
  rangeElement.value = sliderState;
  firstSlideElement.style = 'clip-path:inset(0 ' + (100 - sliderState) + '%' + ' 0 0)';
  secondSlideElement.style = 'clip-path:inset(0 0 0 ' + sliderState + '%)';
}

renderSliderState();
rangeElement.value = sliderState;

// Обработчики событий


rangeElement.addEventListener('input', rangeOnInput);

buttonBefore.addEventListener('click', buttonBeforeOnClick);
buttonAfter.addEventListener('click', buttonAfterOnClick);

checkboxElement.addEventListener('change', checkboxOnInput);
