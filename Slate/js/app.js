var swiper = new Swiper('.mySwiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

});
var swiperMob = new Swiper('.mySwiperMob', {
    // direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

});
var swiperMobCards1 = new Swiper('.mySwiperCards1', {
    spaceBetween:20,
    slidesPerView:3,
    loop: true,

});
var swiperMobCards2 = new Swiper('.mySwiperCards2', {
    // spaceBetween:10,
    slidesPerView:1.1,
    loop: true,

});
