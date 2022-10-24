const slider_items = document.getElementsByClassName('slider-item');

let index = 0;
let currentSlide = 0;
let countSlide = 0;

function show(animation = false, right = true) {
 if (index === slider_items.length) {
  index = 0;
  currentSlide = 0;
 }
 if (index < 0) {
  index = slider_items.length - 3;
  currentSlide = countSlide;
 }

 let i = index;
 for (; i < index + 3; i++) {
  slider_items[i].classList.add('slider-item--active');
  if (animation && right) {
   slider_items[i].classList.add('slider-item__animation--r2l');
  } else if (animation && !right) {
   slider_items[i].classList.add('slider-item__animation--l2r');
  }
 }
}

function activeDot() {
 let dot = document.getElementsByClassName('slider-dot');
 for (let i = 0; i < countSlide; i++) {
  dot[i].classList.remove('slider-dot--current');
 }
 dot[currentSlide].classList.add('slider-dot--current');
 console.log(`current ${currentSlide}`);
}

function next() {
 index += 3;

 Array.from(slider_items).map((element) => {
  element.classList.remove('slider-item--active');
  element.classList.remove('slider-item__animation--r2l');
  element.classList.remove('slider-item__animation--l2r');
 });
 ++currentSlide;
 show(true, true);
}

function prev() {
 index -= 3;
 Array.from(slider_items).map((element) => {
  element.classList.remove('slider-item--active');
  element.classList.remove('slider-item__animation--r2l');
  element.classList.remove('slider-item__animation--l2r');
 });
 currentSlide--;
 show(true, false);
}

show();

function dots() {
 let active = document.getElementsByClassName('slider-item--active');
 let dotsCount = slider_items.length / active.length;
 countSlide = dotsCount;
 const dots = document.createElement('div');
 dots.classList.add('slider-dots');

 for (let i = 0; i < dotsCount; i++) {
  let dot = document.createElement('div');
  dot.classList.add('slider-dot');
  dots.appendChild(dot);
 }
 console.log(index / dotsCount);
 document.querySelector('.slider-wrapper').appendChild(dots);
}
dots();
activeDot();
const prevB = document.querySelector('.slider-prev-button');
const nextB = document.querySelector('.slider-next-button');

nextB.addEventListener('click', () => {
 next();
 activeDot();
});

prevB.addEventListener('click', () => {
 prev();
 activeDot();
});
