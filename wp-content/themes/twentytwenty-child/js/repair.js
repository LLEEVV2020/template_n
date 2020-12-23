
// Скрипт для слайдера блока choose-your-bathroom-renovation

$('.choose-your-bathroom-renovation__slider').owlCarousel({
  items: 1,
  dots: true,
  dotsClass: ['pagination-box'],
  dotClass: ['pagination'],
  margin: 15,
  responsive: {
    768: {
      items: 2
    },
    1200: {
      margin: 20,
      items: 3,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
    }
  }
});

// Скрипт для слайдера блока work-algorithm__slider
function checkWidth11() {
  var windowWidth = $('body').innerWidth(),
    elem = $(".work-algorithm__slider");
  if (windowWidth < 768) {

    elem.addClass('owl-carousel');

    $('.work-algorithm__slider').owlCarousel({
      items: 1,
      dots: true,
      dotsClass: ['pagination-box'],
      dotClass: ['pagination'],
      margin: 15,
    });
  }
  else {
    elem.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
  }
}

checkWidth11(); // проверит при загрузке страницы

$(window).resize(function () {
  checkWidth11(); // проверит при изменении размера окна клиента
});