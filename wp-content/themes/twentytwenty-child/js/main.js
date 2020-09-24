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

      $('.quality-worker__slider').owlCarousel({
        items: 5,
        margin: 2,
        dots: true,
        nav: true,
        dotsClass: ['quality-worker__nav-dots'],
        dotClass: ['quality-worker__nav-dot'],
        responsive: {
            1200: {
                margin: 4
            }
        }
      });

      $('.our-professional-employees__slider').owlCarousel({
        items: 1,
        dotsClass: ['our-professional-employees__nav-dots'],
        dotClass: ['our-professional-employees__nav-dot']
      });

      let photoGallerySlider = $('.photo-gallery__slider-box');
      let photoPreviewSlider = $('.photo-gallery__previews');

      photoPreviewSlider.owlCarousel({
        items: 4,
        margin: 2
      });

      photoGallerySlider.owlCarousel({
        items: 1,
        dotsClass: ['photo-gallery__nav-dots'],
        dotClass: ['photo-gallery__nav-dot'],
        nav: true,
        navText: [''],
        navContainerClass: ['photo-gallery__nav'],
        navClass: ['photo-gallery__nav-left', 'photo-gallery__nav-right'],
        responsive: {
          768 : {
            dots: false
          }
        },
        onChanged: photoImageCallback
      });

      function photoImageCallback(e) {
          let index = e.item.index;
          $('.owl-item', photoPreviewSlider).removeClass('current').eq(index).addClass('current');
          photoPreviewSlider.trigger("to.owl.carousel", [index, 300, true]);
      }

      $('.owl-item', photoPreviewSlider).click(function () {
          let index = $(this).index();
          photoGallerySlider.trigger("to.owl.carousel", [index, 300, true]);
      });
    
});

