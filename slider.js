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

if (carouselContainer) { // Solo añade los listeners si el contenedor existe
    carouselContainer.addEventListener('touchstart', (e) => {
        // Guarda la posición X del primer toque (si hay múltiples toques)
        touchStartX = e.touches[0].clientX;
    });

    carouselContainer.addEventListener('touchmove', (e) => {
        // Opcional: Prevenir el comportamiento por defecto del scroll si el carrusel
        // es el objetivo principal de arrastre horizontal.
        // e.preventDefault();

        // Actualiza la posición X actual del toque
        touchEndX = e.touches[0].clientX;
    });

    carouselContainer.addEventListener('touchend', () => {
        // Calcula la distancia total arrastrada
        const swipeDistance = touchStartX - touchEndX;

        if (swipeDistance > swipeThreshold) {
            // El usuario arrastró hacia la izquierda (desea ver la siguiente slide)
            nextSlide();
        } else if (swipeDistance < -swipeThreshold) {
            // El usuario arrastró hacia la derecha (desea ver la slide anterior)
            prevSlide();
        }

        // Reinicia las coordenadas de toque para el siguiente arrastre
        touchStartX = 0;
        touchEndX = 0;
    });

    carouselContainer.addEventListener('touchcancel', () => {
        // En caso de que el evento táctil sea interrumpido (ej. llamada entrante),
        // resetea las coordenadas para evitar comportamientos inesperados.
        touchStartX = 0;
        touchEndX = 0;
    });
}