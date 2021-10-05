(function ($) {
    "use strict";

    $(".owl-carousel").each(function () {
        var $Carousel = $(this);
        $Carousel.owlCarousel({
            loop: $Carousel.data("loop"),
            autoplay: $Carousel.data("autoplay"),
            margin: $Carousel.data("space"),
            nav: $Carousel.data("nav"),
            dots: $Carousel.data("dots"),
            dotsSpeed: $Carousel.data("speed"),
            thumbs: true,
            thumbsPrerendered: true,
            thumbContainerClass: "owl-thumbs",
            thumbItemClass: "owl-thumb-item",
            responsive: { 0: { items: 1 }, 600: { items: $Carousel.data("slide-res") }, 1000: { items: $Carousel.data("slide") } },
        });
    });

})(jQuery);
