export function burger(burgerBtn, menu){
  let body = document.querySelector('body')

  burgerBtn.addEventListener("click", function(){
    burgerBtn.classList.toggle("header__burger_active")
    menu.classList.toggle("header__buttons_active")
    body.classList.toggle("freeze")
  });
}

