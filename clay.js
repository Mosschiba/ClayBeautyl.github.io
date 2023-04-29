

window.addEventListener('scroll', ()=>{
    let header = document.getElementsByClassName('header');
    const scrolled = window.scrollY;
    if (scrolled >= 50){
        for ( i = 0; i < header.length; i++){
        header[i].classList.add('header-scroll');
        }
    }  else {
        for ( i = 0; i < header.length; i++){
            header[i].classList.remove('header-scroll')
    }}
    
})
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(n) {
  slides[slideIndex].classList.remove('active');
  slideIndex = (n + totalSlides) % totalSlides;
  slides[slideIndex].classList.add('active');
}

document.querySelector('.carousel-prev').addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

document.querySelector('.carousel-next').addEventListener('click', () => {
  showSlide(slideIndex + 1);
});




