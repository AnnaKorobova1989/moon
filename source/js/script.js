'use strict';

const headerBurger = document.querySelector(".header__burger");
const mainMenu = document.querySelector('.header__menu');

headerBurger.addEventListener ("click", function(evt) {

  evt.preventDefault();
  headerBurger.classList.toggle('active');
  mainMenu.classList.toggle('active');
})
