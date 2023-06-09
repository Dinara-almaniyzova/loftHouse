// nav
const btnNav = document.querySelector('.nav-icon-btn');
const iconNav = document.querySelector('.nav-icon');
const headerTop = document.querySelector('.header__top');

btnNav.onclick = function () {
    btnNav.classList.toggle('rotate');
    headerTop.classList.toggle('header__top--mobile');
    document.body.classList.toggle('.no-scroll');
}

