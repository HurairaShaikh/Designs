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
var swiperWebConnect = new Swiper('.mySwiperWebConnect', {
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

var swiperTabConnect = new Swiper('.mySwiperTabConnect', {
  loop:true,
  slidesPerView:2,
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
var swiperMobConnect = new Swiper('.mySwiperMobConnect', {
  loop:true,
  slidesPerView:1,
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