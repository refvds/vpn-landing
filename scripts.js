const priceCards = document.querySelectorAll('.price__card');
const header = document.querySelector('.header');
const numberBlock = document.querySelector('.about__numbers-block');
const numbers = document.querySelectorAll('.about__number-digits');

setHoverToCardPrice();
isInViewport();

function isInViewport() {
 let rect = numberBlock.getBoundingClientRect();
 return rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ? setDigits()
  : numbers.forEach((number) => (number.innerHTML = `${number.getAttribute('data-target')}+`));
}

function setDigits() {
 numbers.forEach((counter) => {
  counter.innerHTML = '0';
  const updateCount = () => {
   const target = +counter.getAttribute('data-target');
   const c = +counter.innerHTML;
   const inc = target / 200;
   if (c < target) {
    counter.innerHTML = `${Math.ceil(c + inc)}`;
    setTimeout(updateCount, 1);
   } else {
    counter.innerHTML = `${target}+`;
   }
  };
  updateCount();
 });
}

function setHoverToCardPrice() {
 priceCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
   card.classList.add('price__card--active');
   const button = card.querySelector('a');
   button.classList.remove('button--outlined');
   button.classList.add('button--contained');
   button.classList.add('button--shadow');
  });
  card.addEventListener('mouseout', () => {
   card.classList.remove('price__card--active');
   const button = card.querySelector('a');
   button.classList.add('button--outlined');
   button.classList.remove('button--contained');
   button.classList.remove('button--shadow');
  });
 });
}

const burgerMenuOpenButton = document.querySelector('.header__burger-menu__button-open');
const signInsignUpBlock = document.querySelector('.header__signin-signup-block');
const burgerMenu = document.querySelector('.header__burger-menu');

burgerMenuOpenButton.addEventListener('click', () => {
 burgerMenuOpenButton.classList.add('header__burger-menu__button-open--hidden');
 burgerMenuOpenButton.classList.remove('header__burger-menu__button-open--active');

 const burgerMenuCloseButton = document.querySelector('.header__burger-menu__button-close');
 burgerMenu.classList.add('header__burger-menu--active');
 burgerMenuCloseButton.addEventListener('click', () => {
  if (window.screen.width >= 641) {
   burgerMenuOpenButton.classList.add('header__burger-menu__button-open--hidden');
   burgerMenuOpenButton.classList.remove('header__burger-menu__button-open--active');
  } else {
   burgerMenuOpenButton.classList.remove('header__burger-menu__button-open--hidden');
   burgerMenuOpenButton.classList.add('header__burger-menu__button-open--active');
  }
  burgerMenu.classList.add('header__burger-menu--hidden');
  burgerMenu.classList.remove('header__burger-menu--active');
 });
});

window.addEventListener('resize', () => {
 if (window.screen.width > 640) {
  burgerMenu.classList.remove('header__burger-menu--active');
  burgerMenu.classList.add('header__burger-menu--hidden');
 } 
});
