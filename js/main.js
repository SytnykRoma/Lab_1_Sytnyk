function slowScroll(id) {
    var offset = 70;

    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1500)
};

const menuToggle = document.querySelector('#menu-button');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu-button-active');
    mobileNavContainer.classList.toggle('mobile-nav--active')
};

$('.assortment__slider').slick({
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 3840,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 2300,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: false
            }
        }
    ]
});