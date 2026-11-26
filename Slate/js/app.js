var swiper = new Swiper('.mySwiper', {
    direction: 'vertical',
    //  breakpoints: {
    //         576: { slidesPerView: 1, spaceBetween: 10 },
    //         768: { direction:"vertical",  slidesPerView: 1,},
    //         1032: {direction:"vertical",  slidesPerView: 1,  },
    //         1200: {direction:"vertical",  slidesPerView: 1, },
    //         1400: {direction:"vertical",  slidesPerView: 1, }
    //     },
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
// Second Section slider
var swiperMobCards2 = new Swiper('.mySwiperCards2', {
    breakpoints: {
            576: { slidesPerView: 1.3, spaceBetween: 10 },
            768: { slidesPerView: 1.6, spaceBetween:10 },
            1032: { slidesPerView: 2, spaceBetween:10 },
            1200: { slidesPerView: 3, spaceBetween: 24 }
        },
    loop: true,

});

// Third Section Slider
var mySwiperThirdSec = new Swiper('.mySwiperThirdSec', {
    slidesPerView: 2,
    spaceBetween: 20,
    // effect: "fade",
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

// 
let changeMobColor = document.getElementsByClassName("web-banners");
let changeWebColor = document.getElementsByClassName("mob-banners-sli");

