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