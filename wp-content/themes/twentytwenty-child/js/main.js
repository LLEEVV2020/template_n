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
    loop: true,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 3000,
    dotsClass: ['quality-worker__nav-dots'],
    dotClass: ['quality-worker__nav-dot'],
    nav: true,
    navText: [''],
    navContainerClass: ['navigation'],
    navClass: ['navigation-left', 'navigation-right'],
    responsive: {
      1200: {
        margin: 4,
        items: 4
      }
    }
  });

  // Скрипт для слайдера блока our-professional-employees
  $('.our-professional-employees__slider').owlCarousel({
    items: 1,
    nav: true,
    navText: [''],
    navContainerClass: ['our-professional-employees__slider-navigation'],
    navClass: ['our-professional-employees__slider-navigation-left', 'our-professional-employees__slider-navigation-right'],
    dotsClass: ['our-professional-employees__nav-dots'],
    dotClass: ['our-professional-employees__nav-dot']
  });

  // Скрипт для слайдера блока photo-gallery
  const photoGallerySlider1 = $('.photo-gallery__slider-box--1'),
    photoPreviewSlider1 = $('.photo-gallery__previews--1'),
    photoGallerySlider2 = $('.photo-gallery__slider-box--2'),
    photoPreviewSlider2 = $('.photo-gallery__previews--2'),
    photoGallerySlider3 = $('.photo-gallery__slider-box--3'),
    photoPreviewSlider3 = $('.photo-gallery__previews--3'),
    photoGallerySlider4 = $('.photo-gallery__slider-box--4'),
    photoPreviewSlider4 = $('.photo-gallery__previews--4'),
    photoGallerySlider5 = $('.photo-gallery__slider-box--5'),
    photoPreviewSlider5 = $('.photo-gallery__previews--5'),
    photoGallerySlider6 = $('.photo-gallery__slider-box--6'),
    photoPreviewSlider6 = $('.photo-gallery__previews--6'),
    photoGallerySlider7 = $('.photo-gallery__slider-box--7'),
    photoPreviewSlider7 = $('.photo-gallery__previews--7'),
    photoGallerySlider8 = $('.photo-gallery__slider-box--8'),
    photoPreviewSlider8 = $('.photo-gallery__previews--8'),
    photoGallerySlider9 = $('.photo-gallery__slider-box--9'),
    photoPreviewSlider9 = $('.photo-gallery__previews--9'),
    photoGallerySlider10 = $('.photo-gallery__slider-box--10'),
    photoPreviewSlider10 = $('.photo-gallery__previews--10');

  function inititalizePhotoGallerySlider(slider, previews) {
    previews.owlCarousel({
      items: 4,
      margin: 2
    });

    slider.owlCarousel({
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
      $('.owl-item', previews).removeClass('current').eq(index).addClass('current');
      previews.trigger("to.owl.carousel", [index, 300, true]);
    }

    $('.owl-item', previews).click(function () {
      let index = $(this).index();
      slider.trigger("to.owl.carousel", [index, 300, true]);
    });
  }

  inititalizePhotoGallerySlider(photoGallerySlider1, photoPreviewSlider1);
  inititalizePhotoGallerySlider(photoGallerySlider2, photoPreviewSlider2);
  inititalizePhotoGallerySlider(photoGallerySlider3, photoPreviewSlider3);
  inititalizePhotoGallerySlider(photoGallerySlider4, photoPreviewSlider4);
  inititalizePhotoGallerySlider(photoGallerySlider5, photoPreviewSlider5);
  inititalizePhotoGallerySlider(photoGallerySlider6, photoPreviewSlider6);
  inititalizePhotoGallerySlider(photoGallerySlider7, photoPreviewSlider7);
  inititalizePhotoGallerySlider(photoGallerySlider8, photoPreviewSlider8);
  inititalizePhotoGallerySlider(photoGallerySlider9, photoPreviewSlider9);
  inititalizePhotoGallerySlider(photoGallerySlider10, photoPreviewSlider10);


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
        items: 2
      },
      1200: {
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока window-repair
  $('.window-repair__slider').owlCarousel({
    items: 1,
    dots: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    margin: 55,
    responsive: {
      768: {
        items: 2,
        margin: 10,
      },
      1200: {
        items: 3,
        margin: 15,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока mosquito-net
  $('.mosquito-net__slider').owlCarousel({
    items: 1,
    dots: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    margin: 55,
    responsive: {
      768: {
        items: 2,
        margin: 10,
      },
      1200: {
        items: 3,
        margin: 0,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока renovation-windows
  $('.renovation-windows__slider').owlCarousel({
    items: 1,
    dots: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    margin: 55,
    responsive: {
      768: {
        items: 2,
        margin: 10,
      },
      1200: {
        items: 3,
        margin: 0,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока installment-plan
  $('.installment-plan__slider').owlCarousel({
    items: 1,
    dots: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    margin: 55,
    responsive: {
      768: {
        items: 3,
        margin: 0,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для табов блока installment-plan
  $('.installment-plan__wrapper .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.installment-plan__wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.installment-plan__wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  // Скрипт для сладйера блока any-window-repair
  $('.any-window-repair__slider').owlCarousel({
    items: 1,
    dots: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        items: 2
      },
      1200: {
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для табов

  // tabs__wrapper - обертка блока
  // data-id="...."  - id для кнопки
  // tabs - кнопка
  // active - активная кнопка
  // tab - блок с контентом ( блоку присваеваем id от кнопки)
  // active-tab - активный блок 

  $('.tabs__wrapper .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $(this).parent().parent().find('.tab-item').removeClass('active-tab').hide();
    $(this).parent().find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  // Скрипт для слайдера блока wood-species
  $('.wood-species__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        margin: 0,
        items: 2
      },
      1200: {
        margin: 25,
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока on-your-balcony
  $('.on-your-balcony__slider').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    nav: true,
    navContainerClass: ['navigation'],
    navClass: ['navigation-left', 'navigation-right']
  });

  // Скрипт для слайдера блока windows-at-low-prices
  $('.windows-at-low-prices__box').owlCarousel({
    items: 1,
    dots: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        items: 4,
        dots: false,
        mouseDrag: false,
        touchDrag: false
      }
    }
  });

  // Скрипт для слайдера блока panoramic-windows__slider
  $('.panoramic-windows__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        margin: 10,
        items: 2
      },
      1200: {
        margin: 10,
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока materials-for-creating-a-parapet
  $('.materials-for-creating-a-parapet__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        margin: 10,
        items: 2
      },
      1200: {
        margin: 10,
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока other-types-of-wooden-windows
  $('.other-types-of-wooden-windows__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        margin: 0,
        items: 2,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока types-of-openings-for-warm-glazing
  $('.types-of-openings-for-warm-glazing__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        margin: 0,
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока cost-of-balconies-and-loggias
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".cost-of-balconies-and-loggias__slider");
    if (windowWidth < 768) {

      elem.addClass('owl-carousel');

      $('.cost-of-balconies-and-loggias__slider').owlCarousel({
        items: 1,
        dots: true,
        margin: 55,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
      });
    }
    else {
      elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });


  // Скрипт для слайдера блока prices-for-warm-glazing
  $('.prices-for-warm-glazing__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        margin: 0,
        items: 2
      },
      1200: {
        margin: 30,
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока high-quality-glued-casing
  $('.high-quality-glued-casing__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        margin: 10,
        items: 2
      },
      1200: {
        margin: 15,
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока types-of-installation-in-a-wooden-house__slider
  function checkWidth2() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".types-of-installation-in-a-wooden-house__slider");
    if (windowWidth < 1200) {

      elem.addClass('owl-carousel');

      $('.types-of-installation-in-a-wooden-house__slider').owlCarousel({
        items: 1,
        dots: true,
        margin: 55,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        responsive: {
          768: {
            items: 2,
            margin: 10,
          }
        }
      });
    }
    else {
      elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
  }

  checkWidth2(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth2(); // проверит при изменении размера окна клиента
  });

  // Скрипт для слайдера блока prices-for-wooden-pine-windows
  $('.prices-for-wooden-pine-windows__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    responsive: {
      768: {
        margin: 0,
        items: 2
      },
      1200: {
        margin: 30,
        items: 3,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока stages-of-insulation
  function checkWidth3() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".stages-of-insulation__slider");
    if (windowWidth < 768) {

      elem.addClass('owl-carousel');

      $('.stages-of-insulation__slider').owlCarousel({
        items: 1,
        dots: true,
        margin: 55,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
      });
    }
    else {
      elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
  }

  checkWidth3(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth3(); // проверит при изменении размера окна клиента
  });

  // Скрипт для слайдера блока plan-for-combining-balcony-and-loggia
  function checkWidth4() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".plan-for-combining-balcony-and-loggia__slider");
    if (windowWidth < 768) {

      elem.addClass('owl-carousel');

      $('.plan-for-combining-balcony-and-loggia__slider').owlCarousel({
        items: 1,
        dots: true,
        margin: 55,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
      });
    }
    else {
      elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
  }

  checkWidth4(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth4(); // проверит при изменении размера окна клиента
  });

  // Скрипт для слайдера блока cold-frameless-glazing
  $('.cold-frameless-glazing__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    autoHeight: true,
    responsive: {
      1200: {
        margin: 30,
        items: 2,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
      }
    }
  });

  // Скрипт для слайдера блока cold-frameless-glazing__img-slider
  $('.cold-frameless-glazing__img-slider').owlCarousel({
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    dots: true,
    margin: 55,
    loop: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    navContainerClass: ['navigation'],
    navClass: ['navigation-left', 'navigation-right']
  });

  // Скрипт для слайдера блока balcony-alignment
  function checkWidth5() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".balcony-alignment__slider");
    if (windowWidth < 768) {

      elem.addClass('owl-carousel');

      $('.balcony-alignment__slider').owlCarousel({
        items: 1,
        dots: true,
        margin: 55,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
      });
    }
    else {
      elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
  }

  checkWidth5(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth5(); // проверит при изменении размера окна клиента
  });

  // Скрипт для слайдера блока main-nodes
  $('.main-nodes__slider').owlCarousel({
    items: 1,
    dots: true,
    margin: 55,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    nav: true,
    // autoHeight: true,
  });

  // Скрипт для отзывов
  $('.reviews-windows__slider').owlCarousel({
    items: 1,
    dots: true,
    dotsClass: ['pagination-box'],
    dotClass: ['pagination'],
    nav: false,
    responsive: {
      768: {
        dots: false,
        nav: true,
        navText: [''],
        navContainerClass: ['navigation'],
        navClass: ['navigation-left', 'navigation-right']
      }
    }
  });

  // Скрипт для слайдера блока low-prices-for-glazing
  function checkWidth6() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".low-prices-for-glazing__slider");
    if (windowWidth < 768) {

      elem.addClass('owl-carousel');

      $('.low-prices-for-glazing__slider').owlCarousel({
        items: 1,
        dots: true,
        margin: 55,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        nav: true,
      });
    }
    else {
      elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
  }

  checkWidth6(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth6(); // проверит при изменении размера окна клиента
  });


  // Скрипт для слайдера блока window-shapes
  function checkWidth7() {
    var windowWidth = $('body').innerWidth(),
      elem = $(".window-shapes__slider");
    if (windowWidth < 768) {

      elem.addClass('owl-carousel');

      $('.window-shapes__slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
      });
    }
    else {
      elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
  }

  checkWidth7(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth7(); // проверит при изменении размера окна клиента
  });

  // Скрипт для слайдера блока hot-promotions__slider
$('.hot-promotions__slider').owlCarousel({
  items: 1,
  dots: true,
  loop: true,
  margin: 55,
  dotsClass: ['pagination-box'],
  dotClass: ['pagination'],
  nav: true,
  responsive: {
      768: {
          margin: 15,
          autoWidth: true,
          items: 2,
      },
      1200: {
          autoWidth: true,
          margin: 20,
          items: 3,
      }
  }
});

});

