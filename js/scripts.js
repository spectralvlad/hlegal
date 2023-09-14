const swiper = new Swiper('.logo-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },

    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    }
    
  },
  
    // If we need pagination
    pagination: {
      el: '.logo-slider-pagination',
      clickable: true,
    },
  });