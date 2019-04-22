const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navlins = document.querySelectorAll('.nav-links li');

const naSlide = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navlins.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

}

naSlide();