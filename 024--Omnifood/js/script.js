'use strict';

const nav = document.querySelector('.header');
const menuBtn = document.querySelector('.btn-mobile-nav');

const allLinks = document.querySelectorAll('a:link');


menuBtn.addEventListener('click', function () {
    nav.classList.toggle('nav-open');
});

allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href === '#') window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (href !== '#' && href.startsWith('#')) {
            const sectionElement = document.querySelector(href);
            sectionElement.scrollIntoView({
                behavior: 'smooth'
            });
        };
    });
});

const sectionHero = document.querySelector('.section-hero');
const observer = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
        document.body.classList.add('sticky');
    };
    if (ent.isIntersecting === true) {
        document.body.classList.remove('sticky');
    };
},
    {
        root: null,
        threshold: 0,
        rootMargin: '-80px'
    });
observer.observe(sectionHero);


// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js