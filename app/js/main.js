$(function() {

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.footer-top__title').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('footer-top__title--active');
    });

    $('.related__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="22px" height="9px"><path fill-rule="evenodd" fill="rgb(163, 187, 200)" d="M21.703,3.526 L21.711,3.528 L4.755,3.528 L4.856,0.670 C4.910,0.615 4.940,0.541 4.940,0.465 C4.940,0.388 4.910,0.315 4.856,0.260 L4.683,0.87 C4.629,0.32 4.557,0.3 4.480,0.3 C4.402,0.3 4.330,0.32 4.276,0.86 L0.84,4.298 C0.29,4.352 0.0,4.426 0.0,4.502 C0.0,4.580 0.29,4.653 0.84,4.706 L4.276,8.920 C4.330,8.973 4.402,9.2 4.480,9.2 C4.557,9.2 4.629,8.973 4.683,8.920 L4.856,8.745 C4.910,8.692 4.940,8.619 4.940,8.541 C4.940,8.464 4.910,8.395 4.856,8.342 L4.743,5.477 L21.707,5.477 C21.866,5.477 22.0,5.340 22.0,5.181 L22.0,3.811 C22.0,3.652 21.862,3.526 21.703,3.526 Z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="22px" height="9px"><path fill-rule="evenodd"  fill="rgb(163, 187, 200)"d="M0.296,5.473 L0.287,5.470 L17.244,5.470 L17.143,8.329 C17.89,8.383 17.59,8.457 17.59,8.534 C17.59,8.611 17.89,8.684 17.143,8.738 L17.316,8.912 C17.370,8.966 17.442,8.996 17.519,8.996 C17.596,8.996 17.669,8.966 17.723,8.912 L21.915,4.701 C21.970,4.646 22.0,4.573 21.999,4.496 C22.0,4.419 21.970,4.346 21.915,4.293 L17.723,0.79 C17.669,0.26 17.596,0.3 17.519,0.3 C17.442,0.3 17.370,0.26 17.316,0.79 L17.143,0.253 C17.89,0.307 17.59,0.380 17.59,0.457 C17.59,0.534 17.89,0.603 17.143,0.657 L17.256,3.521 L0.292,3.521 C0.133,3.521 0.0,3.659 0.0,3.818 L0.0,5.187 C0.0,5.346 0.137,5.473 0.296,5.473 Z"/></svg></button>',
        infinite: false,
        draggable: false
    });

    $('.product-tabs__top-item').on('click', function(e){
        e.preventDefault();  //standartnaya obrapotka po ssilke
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });


    $('.product-one__num').styler();

    $('.product-slider__thumb').slick({
        asNavFor: '.product-slider__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        
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