import * as functions from "./modules/functions.js"
import { burger } from "./modules/menu-burger.js";
import {InitSpoiler} from "./modules/onlyOneSpoiler.js";

let burgerBtn = document.querySelector(".header__burger");
let menu = document.querySelector(".header__buttons")
burger(burgerBtn, menu);

let accordions = document.querySelectorAll(".category");
console.log(document.documentElement.offsetWidth)
if (document.documentElement.offsetWidth < 768){
  InitSpoiler(accordions);
}

new Swiper('.deals__slider', {
  navigation: {
    nextEl: '.deals__slider-next',
    prevEl: '.deals__slider-prev',
  },
  simulateTouth: true,
  grabCursor: true,
  keyboard: {           // управління клавиатурою
    enabled: true,      // вкл/викл
    onlyInViewport: true, // тільки в межах в'юпорта
    pageUpDown: false,   // клавішами pageUp, pageDown
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  speed: 100,
})