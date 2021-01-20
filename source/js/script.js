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


// {/* <input class="example__input--mobile input-mobile" id="checkbox" type="checkbox"></input> */}

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


// Слайдер до/после для mobile
const checkboxElement = document.querySelector("#checkbox");

checkboxElement.checked = sliderState;

function changeRangeValue() {
  sliderState = checkboxElement.checked;
	rangeValueElement.innerText = sliderState;
}


function changeSliderState() {

	if (checkboxElement.checked) {
 		sliderState = 100;
		} else {
      sliderState = 0;
    }

 firstSlideElement.style='clip-path:inset(0 ' + sliderState +'%' + ' 0 0';
 secondSlideElement.style='clip-path:inset(0 0 0 ' + (100 - sliderState) +'%)';
}

changeRangeValue();
changeSliderState();

checkboxElement.addEventListener('change', function() {
  changeRangeValue();
  changeSliderState();
});
