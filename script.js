// Carrusel de imágenes
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.hero .slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].classList.add('active');
    setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}

// Funcionalidad de los botones "prev" y "next"
document.querySelector('.prev').addEventListener('click', function() {
    let slides = document.querySelectorAll('.hero .slide');
    slideIndex = (slideIndex > 1) ? slideIndex - 1 : slides.length;
    showSlides();
});

document.querySelector('.next').addEventListener('click', function() {
    let slides = document.querySelectorAll('.hero .slide');
    slideIndex = (slideIndex < slides.length) ? slideIndex + 1 : 1;
    showSlides();
});
