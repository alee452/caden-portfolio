const prevButton = document.querySelector('#previousArrow');
const nxtButton = document.querySelector('#nextArrow');
const carousel = document.querySelector('.carousel');

let current = 0;
const totalImages = 6;

nxtButton.addEventListener ('click', () => {

    const firstImage = carousel.firstElementChild;
    carousel.style.transition = "transform 0.4s ease-in-out";
    carousel.style.transform = "translateX(-100%";

    carousel.addEventListener('transitionend', function handleNext() {
        carousel.style.transition = "none";
        carousel.appendChild(firstImage);
        carousel.style.transform = "translateX(0)";

        carousel.removeEventListener('transitionend', handleNext);
    });
});

prevButton.addEventListener ('click', () => {
    const lastImage = carousel.lastElementChild;

    carousel.style.transition = "none";
    carousel.style.transform = "translateX(-100%)";
    carousel.insertBefore(lastImage, carousel.firstElementChild);

    setTimeout(() => {
        carousel.style.transition = "transform 0.4s ease-in-out";
        carousel.style.transform = "translateX(0)";
    }, 0);
});




const cubeBtn = document.querySelector('#cube');
const overlay = document.querySelector('.overlay');
const x = document.querySelector('.x');
const body = document.body;

function openPopup(event) {

    if (event) {
        event.preventDefault();
    }

    overlay.classList.add('show');
    document.documentElement.classList.add('no-scroll'); 
    document.body.classList.add('no-scroll');
}

function closePopup() {
    overlay.classList.remove('show');
    body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll'); 
    document.body.classList.remove('no-scroll');
}

if (cube) {
    cube.addEventListener('click', openPopup);
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closePopup();
    }
});

x.addEventListener('click', (event) => {
    if (event.target === x) {
        closePopup();
    }
});