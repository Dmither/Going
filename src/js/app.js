import * as functions from "./modules/functions.js"
import { burger } from "./modules/menu-burger.js";


let burgerBtn = document.querySelector(".header__burger");
let menu = document.querySelector(".header__buttons")

burger(burgerBtn, menu);

