function toggleNavbar() {
    var navbar = document.getElementById("navbarNav");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize the slider
showSlide(currentSlide);

// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el fragmento de URL (hash)
    const hash = window.location.hash;

    // Si hay un fragmento de URL, mostrar la clase correspondiente
    if (hash) {
        // Eliminar el `#` del fragmento de URL para coincidir con el id de las clases
        const targetId = hash.substring(1);

        // Seleccionar el slider
        const slides = document.querySelectorAll('.slide');
        const slideArray = Array.from(slides);

        // Encontrar el índice de la diapositiva correspondiente
        const targetIndex = slideArray.findIndex(slide => slide.id === targetId);

        // Mostrar la diapositiva deseada
        if (targetIndex !== -1) {
            // Cambiar el slide
            changeSlide(targetIndex - currentSlideIndex);
        }
    }
});

// Función para cambiar el slide (debes ajustar la lógica si es necesario)
let currentSlideIndex = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;

    // Ocultar todos los slides
    slides.forEach(slide => slide.style.display = 'none');

    // Actualizar el índice actual
    currentSlideIndex = (currentSlideIndex + n + slideCount) % slideCount;

    // Mostrar el slide actual
    slides[currentSlideIndex].style.display = 'block';
}