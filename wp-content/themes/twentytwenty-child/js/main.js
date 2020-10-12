$(document).ready(function () {

  // Скрипт для слайдера блока advantages-windows
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

  // Скрипт для слайдера блока right-balcony
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

  // Скрипт для слайдера блока quality-worker
  $('.quality-worker__slider').owlCarousel({
    items: 5,
    margin: 2,
    dots: true,
    dotsClass: ['quality-worker__nav-dots'],
    dotClass: ['quality-worker__nav-dot'],
    responsive: {
      1200: {
        margin: 4
      }
    }
  });

  // Скрипт для слайдера блока our-professional-employees
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
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    nav: true,
    navText: [''],
    navContainerClass: ['navigation'],
    navClass: ['navigation-left', 'navigation-right'],
    responsive: {
      768: {
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

  // Скрипт для слайдера блока reviews
  $('.reviews-about__slider').owlCarousel({
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    nav: true,
    dots: false,
    navText: [''],
    navContainerClass: ['navigation'],
    navClass: ['navigation-left', 'navigation-right']
  });

  const reviewsItems = document.querySelectorAll('.reviews-about__watch-item'),
    reviewsItems2 = document.querySelectorAll('.reviews-about__previews-item'),
    reviewsWatchImage = document.querySelector('.reviews-about__watch-big-image');

  const toggleActivePreview = (previews, string) => {
    previews.forEach((item) => {
      item.addEventListener('click', function () {
        if (item.classList.contains(`${string}`)) {
          if (item.getAttribute('data-image') === 'preview1') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big1.jpg');
          } else if (item.getAttribute('data-image') === 'preview2') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big2.jpg');
          } else if (item.getAttribute('data-image') === 'preview3') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big3.jpg');
          } else if (item.getAttribute('data-image') === 'preview4') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big4.jpg');
          } else if (item.getAttribute('data-image') === 'preview5') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big7.jpg');
          } else if (item.getAttribute('data-image') === 'preview6') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big10.jpg');
          } else if (item.getAttribute('data-image') === 'preview7') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big.jpg');
          } else if (item.getAttribute('data-image') === 'preview11') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big12.jpg');
          } else if (item.getAttribute('data-image') === 'preview12') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big16.jpg');
          } else if (item.getAttribute('data-image') === 'preview13') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big20.jpg');
          } else if (item.getAttribute('data-image') === 'preview14') {
            reviewsWatchImage.setAttribute('src', '/wp-content/themes/twentytwenty-child/img/reviews-image-big24.jpg');
          }
          previews.forEach((item) => {
            item.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });
  };

  toggleActivePreview(reviewsItems, 'reviews-about__watch-item');
  toggleActivePreview(reviewsItems2, 'reviews-about__previews-item');

  // Скрипт для слайдера блока windows-country-house
  $('.windows-country-house__slider').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока window-shapes
  $('.window-shapes__slider').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    responsive: {
      768: {
        items: 4,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

});

