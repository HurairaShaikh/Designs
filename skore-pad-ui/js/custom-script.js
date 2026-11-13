document.addEventListener("DOMContentLoaded", function () {
    // =========================================================
    // 1. EIGHT METRICS SWIPER SLIDER
    // =========================================================
    const progressDot = document.getElementById("metricsProgressDot");
    const activeNumberEl = document.getElementById("metricsActiveNumber");

    const metricsSwiper = new Swiper(".skorMetricsSwiper", {
        slidesPerView: 1.6,
        spaceBetween: 18,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        slideToClickedSlide: true,
        breakpoints: {
            576: { slidesPerView: 2.6, spaceBetween: 20 },
            768: { slidesPerView: 4.2, spaceBetween: 22 },
            1200: { slidesPerView: 6.4, spaceBetween: 24 }
        },
        on: {
            slideChange: function () {
                const realIdx = this.realIndex; // 0 to 7
                const total = 8;
                if (activeNumberEl) {
                    activeNumberEl.textContent = String(realIdx + 1).padStart(2, "0");
                }
                if (progressDot) {
                    const percent = ((realIdx + 0.5) / total) * 100;
                    progressDot.style.left = `${percent}%`;
                }
            }
        }
    });

    // =========================================================
    // 2. MEASURE PUNCHING POWER STEPS + IMAGE SWIPER
    // =========================================================
    const stepItems = document.querySelectorAll("#skorPowerSteps .skor-step-item");

    const powerSwiper = new Swiper(".skorPowerSwiper", {
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: { crossFade: true },
        pagination: {
            el: ".skor-power-pagination",
            clickable: true
        },
        on: {
            slideChange: function () {
                updateActiveStep(this.activeIndex);
            }
        }
    });

    function updateActiveStep(index) {
        stepItems.forEach((item, idx) => {
            item.classList.toggle("active", idx === index);
        });
    }

    stepItems.forEach((item) => {
        item.addEventListener("click", function () {
            const stepIndex = parseInt(this.getAttribute("data-step"), 10);
            updateActiveStep(stepIndex);
            powerSwiper.slideTo(stepIndex);
        });
    });

    // =========================================================
    // 3. TESTIMONIALS SWIPER SLIDER
    // =========================================================
    const testimonialsSwiper = new Swiper(".skorTestimonialsSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: 1.65,
                spaceBetween: 45
            }
        }
    });
});