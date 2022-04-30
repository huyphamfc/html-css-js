'use strict';

const navbar = document.querySelector('.header__nav');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    navbar.classList.toggle('nav--open');
})