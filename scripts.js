const priceCards = document.querySelectorAll('.price__card');

setHoverToCardPrice();

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
