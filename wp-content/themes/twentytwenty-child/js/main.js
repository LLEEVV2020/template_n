$(document).ready(function(){

    $(".advantages-windows__slider").owlCarousel({
        items: 1,
        nav: true,
        navText: [''],
        navContainerClass: ['advantages-windows__nav'],
        navClass: ['advantages-windows__nav-buttons advantages-windows__nav-buttons--left', 
                    'advantages-windows__nav-buttons advantages-windows__nav-buttons--right'],
        dotsClass: ['advantages-windows__nav-dots'],
        dotClass: ['advantages-windows__nav-dot']
    });

    $('.left-balcony-slider').owlCarousel({
        items: 1,
        merge: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        nav: true,
        dots: true,
        navContainerClass: ['left-balcony-slider__nav'],
        navClass: ['left-balcony-slider__left', 'left-balcony-slider__right'],
        dotsClass: ['left-balcony-slider__dots'],
        dotClass: ['left-balcony-slider__dot'],
        navText: ['']
      });
    
});

