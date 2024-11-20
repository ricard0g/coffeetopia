console.log(document.querySelector('.swiper-pagination'));
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  slidesOffsetBefore: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  centerSlidesBounds: true,
  breakpoints: {
    989: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
      centeredSlides: false,
      longSwipes: false,
      centerSlidesBounds: false,
      longSwipes: false,
      autoHeight: true,
    },
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 25,
      centeredSlides: false,
      centerSlidesBounds: false,
      longSwipes: false,
      autoHeight: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
