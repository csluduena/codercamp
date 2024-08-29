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

// Scroll to the corresponding slide if a fragment is present
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const targetSlide = document.querySelector(hash);
        if (targetSlide) {
            const index = Array.from(slides).indexOf(targetSlide);
            showSlide(index);
        }
    }
});