var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper1 = new Swiper('.mySwiper1', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination-one',
  },
});

 var videoSwiper = new Swiper('.myVideoSwiper', {
   slidesPerView: 4,
  spaceBetween: 30,
  loop:true
 });

 var mobVideoSwiper = new Swiper('.myMobVideoSwiper', {
   slidesPerView: 1.5,
  spaceBetween: 20,
  loop:true,
  pagination: {
    el: '.swiper-pagination-second',
  },
 });