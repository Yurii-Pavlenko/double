var navMain = document.querySelector('.main-nav');
var mainHeaderTop = document.querySelector('.main-header__top');
var navToggle = document.querySelector('.main-header__toggle');

if(navMain && mainHeaderTop) {
  navMain.classList.add('main-nav--closed');
  mainHeaderTop.classList.add('main-header__top--closed')
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    mainHeaderTop.classList.remove('main-header__top--closed');
    mainHeaderTop.classList.add('main-header__top--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    mainHeaderTop.classList.remove('main-header__top--opened');
    mainHeaderTop.classList.add('main-header__top--closed');
  }
});
