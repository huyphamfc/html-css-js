'use strict';

const navbar = document.querySelector('.nav__navbar');
const togglerBtn = document.querySelector('.nav__toggler');

togglerBtn.addEventListener('click', () => {
    navbar.classList.toggle('display');
});