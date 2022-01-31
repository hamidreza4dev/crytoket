const topSellersSwiper = new Swiper('.top-sellers-swiper .swiper', {
  navigation: {
    nextEl: '.top-sellers-swiper .swiper-button-next-custom',
    prevEl: '.top-sellers-swiper .swiper-button-prev-custom',
  },
  slidesPerView: 5,
  spaceBetween: 22,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    680: {
      slidesPerView: 2,
    },
    476: {
      slidesPerView: 1,
    },
  },
});
