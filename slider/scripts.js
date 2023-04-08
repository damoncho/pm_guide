const container = document.querySelector('.swiper-container');
const slides = document.querySelectorAll('.swiper-slide');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  updateSlide();
});

nextButton.addEventListener('click', () => {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlide();
});

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    slide.style.zIndex = index === currentIndex ? 1 : 0;
  });
}

