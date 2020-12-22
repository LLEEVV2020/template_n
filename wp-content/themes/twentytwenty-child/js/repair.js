 
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