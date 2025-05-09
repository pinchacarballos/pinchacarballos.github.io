const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
// const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

// --- NUEVAS VARIABLES PARA LOS EVENTOS TÁCTILES ---
let touchStartX = 0; // Almacena la coordenada X donde comenzó el toque
let touchEndX = 0;   // Almacena la coordenada X donde terminó (o se movió) el toque
const swipeThreshold = 50; // Distancia mínima en píxeles para considerar un arrastre como un swipe

// --- Seleccionar el contenedor principal del carrusel para los eventos táctiles ---
// ASUNCIÓN: Asegúrate de que tienes un contenedor HTML con la clase 'carousel-container'
// que envuelve a todos tus elementos '.carousel-slide'.
// Ejemplo HTML: <div class="carousel-container"> <div class="carousel-slide">...</div> ... </div>
const carouselContainer = document.querySelector('.carousel-container');

// --- VERIFICACIÓN IMPORTANTE ---
if (!carouselContainer) {
    console.error("Error: No se encontró el contenedor '.carousel-container'. Los eventos de arrastre no funcionarán.");
    console.info("Asegúrate de que tus '.carousel-slide' estén dentro de un elemento con la clase 'carousel-container'.");
}

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

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    nextSlide();
});
prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    prevSlide();
});

showSlide(currentIndex);

if (carouselContainer) { // Solo añade los listeners si el contenedor existe
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carouselContainer.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });

    carouselContainer.addEventListener('touchend', (e) => {
        const swipeDistance = touchStartX - touchEndX;
        if (touchEndX !== 0) {
            if (swipeDistance > swipeThreshold) {
                nextSlide();
            } else if (swipeDistance < -swipeThreshold) {
                prevSlide();
            }
        }

        touchStartX = 0;
        touchEndX = 0;
    });

    carouselContainer.addEventListener('touchcancel', () => {
        touchStartX = 0;
        touchEndX = 0;
    });
}