
$(document).ready(function () {
    $('.slider').slick({

        slidesToShow: 3,
        prevArrow: ".slider-angle__left",
        nextArrow: ".slider-angle__right",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
});



