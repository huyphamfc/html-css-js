const openButton = document.getElementsByClassName("openButton");
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');
const videoModalBox = document.getElementById('videoModalBox');
const openVideoButton = document.getElementsByClassName("videoButton");
const closeVideoButton = document.getElementById('videoModalBox__closeVideoModalBoxButton');

openButton[0].addEventListener('click', openModal);
openButton[1].addEventListener('click', openModal);
openButton[2].addEventListener('click', openModal);
openButton[3].addEventListener('click', openModal);
openButton[4].addEventListener('click', openModal);
openButton[5].addEventListener('click', openModal);
openButton[6].addEventListener('click', openModal);
function openModal() {
    modal.style.display = 'block';
}
openVideoButton[0].addEventListener('click', openVideoModalBox);
function openVideoModalBox() {
    videoModalBox.style.display = 'block';
}

closeButton.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none';
}
closeVideoButton.addEventListener('click', closeVideoModalBox);
function closeVideoModalBox() {
    videoModalBox.style.display = 'none';
}

window.addEventListener('click', outsideModal);
function outsideModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
window.addEventListener('click', outsideCloseVideoButton);
function outsideCloseVideoButton(shit) {
    if (shit.target == videoModalBox) {
        videoModalBox.style.display = 'none';
    }
}