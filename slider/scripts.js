const container = document.querySelector('.swiper-container');
const slides = document.querySelectorAll('.swiper-slide');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

let currentIndex = 0;

updateButtonVisibility(); // 초기 버튼 가시성 설정

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    return;
  } else {
    currentIndex--;
  }
  updateSlide();
  updateButtonVisibility();
});

nextButton.addEventListener('click', () => {
  if (currentIndex === slides.length - 1) {
    return;
  } else {
    currentIndex++;
  }
  updateSlide();
  updateButtonVisibility();
});

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    slide.style.zIndex = index === currentIndex ? 1 : 0;
  });
}

function updateButtonVisibility() {
  if (currentIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = '';
  }

  if (currentIndex === slides.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = '';
  }
}
