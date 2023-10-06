// script.js
// script.js
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

const card = document.querySelector('.card');
card.addEventListener('click', () => {
    alert('Hello, I\'m your digital portfolio!');
});


feather.replace()