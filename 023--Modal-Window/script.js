'use strict';

const modal = document.querySelector('.modal-window');
const showModal = document.querySelectorAll('.show-modal');
const hiddenModal = document.querySelector('.hidden-modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log('Show Modal');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', openModal);
}

hiddenModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})