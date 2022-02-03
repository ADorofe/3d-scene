document.addEventListener('DOMContentLoaded', function () {
  const slider = new Swiper('.showcase__carousel', {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: '#nextSlide',
      prevEl: '#prevSlide',
    },
  });

  document.querySelector('video').playbackRate = 2;
});
