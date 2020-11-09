// Универсальная ф-ия проверяет ширину окна и в зависимости от этой ширины включает или отключает слайдер owl-carousel 
function checkWindowWidth(sliderClass, windowWidth, runSliderFunction) {
    let innerWindowWidth = window.innerWidth,
        item = document.querySelector(`.${sliderClass}`),
        itemName = '.' + sliderClass; 

    // если ширина окна меньше или равна переменной windowWidth
    if (innerWindowWidth < windowWidth) {
        // добавляет класс owl-carousel и запускает ф-ию runSlider с переданным парметром, которая инициализирует слайдер
        item.classList.add('owl-carousel');
        runSliderFunction('.sale-only-7-days__slider');
    } else {
        // реинициализирует слайдер по тригеру и удалет класс owl-loaded
        $(item).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    }
 }

// Скрипт для слайдера блока sale-only-7-days
function saleOnly7DaysSlider(itemName) {
    $(itemName).owlCarousel({
        items: 1,
        dots: true,
        margin: 55,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        responsive: {
            768: {
                items: 2,
                margin: 58
            }
        }
    });
}

// В качестве параметра ф-ии checkWindowWidth передаем название класса слайдера, размер окна(до какой ширины окна будет происходить инициализация слайдера) и ф-ию в которой будет инициализироваться слайдер
checkWindowWidth('sale-only-7-days__slider', 1200, saleOnly7DaysSlider);

// При изменении окна будет выполняться событие resize, которое будет запускать нужную ф-ию
window.addEventListener('resize', function() {
    checkWindowWidth('sale-only-7-days__slider', 1200, saleOnly7DaysSlider);
});