'use strict'

const carouselItems = document.querySelectorAll('.carousel__item');
const carouselDots = document.querySelectorAll('.carousel__dot');

carouselDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        carouselItems.forEach(item => {
            item.classList.add('hidden');
        });
        carouselDots.forEach(dot => {
            dot.classList.remove('carousel__dot--selected');
        });
        carouselItems[i].classList.remove('hidden');
        carouselDots[i].classList.add('carousel__dot--selected');
    });
});