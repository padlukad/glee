$(function() {

    $('.product-one__num').styler();

    $('.product-slider__thumb').slick({
        asNavFor: '.product-slider__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });

    $('.product-slider__big').slick({
        asNavFor: '.product-slider__thumb',
        draggable: false,
        arrows: false,
        fade: true
    });

    $(".filter-price__input").ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $(".star").rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    $(".star-two").rateYo({
        starWidth: "16px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

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