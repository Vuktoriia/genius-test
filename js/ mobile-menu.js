const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinks = document.querySelectorAll('.mobile-menu__link');

const openMenu = () => {
  mobileMenu.classList.add('is-open');
};

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
};

menuBtnOpen.addEventListener('click', openMenu);
menuBtnClose.addEventListener('click', closeMenu);

// закрытие меню при клике на ссылку
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
