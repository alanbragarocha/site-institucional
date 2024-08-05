var swiper = new Swiper(".slide-content", {
  slidesPerView: 4, // Número de slides visíveis por padrão
  spaceBetween: 50,
  loop: true,
  centeredSlides: true,
  effect: 'slide', // Certifique-se de que o efeito de deslizamento esteja ativado
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Número de slides visíveis em telas pequenas
    },
    520: {
      slidesPerView: 2, // Número de slides visíveis em telas médias
    },
    950: {
      slidesPerView: 5, // Número de slides visíveis em telas grandes
    },
    /*
    1200: {
      slidesPerView: 6, // Número de slides visíveis em telas muito grandes
    },*/
  },
});
