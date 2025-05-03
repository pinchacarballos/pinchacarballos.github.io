const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
// const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        // indicators[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    // indicators[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//         goToSlide(index);
//     });
// });

// Mostrar la primera slide al cargar la página
showSlide(currentIndex);