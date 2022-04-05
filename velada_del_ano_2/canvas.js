document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.slider');
ScrollReveal().reveal('.banner', {delay: 100});
ScrollReveal().reveal('.social', {delay: 50});
ScrollReveal().reveal('.parte-abajo', {delay: 50});
ScrollReveal().reveal('.footer', {delay: 10});
