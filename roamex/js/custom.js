var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

// stay connect slider section
var swiperConnect = new Swiper('.mySwiperConnect', {
  loop:true,
  slidesPerView:4,
  spaceBetween:20,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next img',
    prevEl: '.swiper-button-prev img',
  },
});