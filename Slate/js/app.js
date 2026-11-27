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
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    effect:"fade",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

});
var swiperMob = new Swiper('.mySwiperMob', {
    loop: true,
    effect:"fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

});
// Second Section slider
var swiperMobCards2 = new Swiper('.mySwiperCards2', {
    // effect:"cards",
    breakpoints: {
        576: { slidesPerView: 1,  },
        768: { slidesPerView: 1.6, spaceBetween: 10 },
        1032: { slidesPerView: 2, spaceBetween: 10 },
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

// Fourth Section
var mySwiperFourthSec = new Swiper('.mySwiperFourthSec', {
    breakpoints: {
        576: { slidesPerView: 1, spaceBetween: 1 },
        768: { slidesPerView: 1.6, spaceBetween: 10 },
        1032: { slidesPerView: 2, spaceBetween: 10, },
        1200: { slidesPerView: 3, spaceBetween: 10, }
    },
    // effect: "fade",
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});
// fifth section
var mySwiperFifthSec = new Swiper('.mySwiperFifthSec', {
    breakpoints: {
        576: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 1.6, spaceBetween: 10 },
        1032: { slidesPerView: 2, spaceBetween: 10, },
        1200: { slidesPerView: 3, spaceBetween: 10, }
    },
    // effect: "fade",
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

let changeMobColor = document.getElementsByClassName("web-banners");
let changeWebColor = document.getElementsByClassName("mob-banners-sli");

