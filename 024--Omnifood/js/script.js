'use strict';

const nav = document.querySelector('.header');
const menuBtn = document.querySelector('.btn-mobile-nav');

menuBtn.addEventListener('click', function () {
    nav.classList.toggle('nav-open');
})