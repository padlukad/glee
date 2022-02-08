$(function() {
    $('.top-slider__slick').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    var mixer1 = mixitup('.products__items');
    var mixer2 = mixitup('.new-design__items');
});