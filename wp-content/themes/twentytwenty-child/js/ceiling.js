// Универсальная ф-ия проверяет ширину окна и в зависимости от этой ширины включает или отключает слайдер owl-carousel 
function checkWindowWidth(sliderClass, windowWidth, runSliderFunction) {
    let innerWindowWidth = window.innerWidth,
        item = document.querySelector(`.${sliderClass}`),
        itemName = '.' + sliderClass; 

    // если ширина окна меньше или равна переменной windowWidth
    if (innerWindowWidth < windowWidth) {
        // добавляет класс owl-carousel и запускает ф-ию runSlider с переданным парметром, которая инициализирует слайдер
        item.classList.add('owl-carousel');
        runSliderFunction(itemName);
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

function hotPromotionsSlider(itemName) {
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
            },
            1200: {
                items: 3,
                margin: 58
            }
        }
    });
}

// В качестве параметра ф-ии checkWindowWidth передаем название класса слайдера, размер окна(до какой ширины окна будет происходить инициализация слайдера) и ф-ию в которой будет инициализироваться слайдер
checkWindowWidth('sale-only-7-days__slider', 1200, saleOnly7DaysSlider);
checkWindowWidth('hot-promotions__slider', 1200, hotPromotionsSlider);


// При изменении окна будет выполняться событие resize, которое будет запускать нужную ф-ию
window.addEventListener('resize', function() {
    checkWindowWidth('sale-only-7-days__slider', 1200, saleOnly7DaysSlider);
});

$('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
});

$('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
    }
});
