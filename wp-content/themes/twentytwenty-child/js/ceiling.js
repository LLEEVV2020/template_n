/* Frontend Дима */

// Универсальная ф-ия проверяет ширину окна и в зависимости от этой ширины включает или отключает слайдер owl-carousel 
function checkWindowWidth(sliderClass, windowWidth, runSliderFunction) {
    let innerWindowWidth = window.innerWidth,
        item = document.querySelector(`.${sliderClass}`),
        itemName = '.' + sliderClass;

    // если ширина окна меньше или равна переменной windowWidth
    if (innerWindowWidth < windowWidth) {
        // добавляет класс owl-carousel и запускает ф-ию runSlider с переданным парметром, которая инициализирует слайдер
        if (item && itemName) {
            item.classList.add('owl-carousel');
            runSliderFunction(itemName);
        }
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

// Универсальный скрипт для модальных окон 
let btns = document.querySelectorAll('*[data-modal-btn]'),
    popups = document.querySelectorAll('.holz-modal .popup'),
    reviewsWindows = document.querySelectorAll('.reviews-windows'),
    holzGutModalContent = document.querySelectorAll('.holz-modal .popup__content');

// Останавливает всплытие на элементе
function stopPropogation(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }
}

// Этот код показывает попап при клике на кнопку или скрывает его при клике на крестик внтри попапа
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let name = btns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='" + name + "']");
        modal.style.display = 'block';
        let close = modal.querySelector('.popup__btn-close');
        close.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });
}

// Цикл перебирает все попапы и вешает обработчик события клик на каждый попап и закрывает попап при клике на него
for (let i = 0; i < popups.length; i++) {
    popups[i].addEventListener('click', function (event) {
        this.style.display = 'none';
    });
}

for (let i = 0; i < reviewsWindows.length; i++) {
    reviewsWindows[i].addEventListener('click', function (event) {
        event.stopPropagation();
    });
}

// Эта ф-ия останавливает вспллытие на элементе
stopPropogation(reviewsWindows);
stopPropogation(holzGutModalContent);

// В качестве параметра ф-ии checkWindowWidth передаем название класса слайдера, размер окна(до какой ширины окна будет происходить инициализация слайдера) и ф-ию в которой будет инициализироваться слайдер
checkWindowWidth('sale-only-7-days__slider', 1200, saleOnly7DaysSlider);

// При изменении окна будет выполняться событие resize, которое будет запускать нужную ф-ию
window.addEventListener('resize', function () {
    checkWindowWidth('sale-only-7-days__slider', 1200, saleOnly7DaysSlider);
});

/* Frontend Паша */

$('.cost-calculation__box-list').on('click', '.cost-calculation__link', function () {
    $('.cost-calculation__list').toggleClass('list-open');
    $('.cost-calculation__link').toggleClass('btn-open');
});

// скрипт select
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
            margin: 38,
            autoWidth: true,
            items: 2,
        },
        1200: {
            autoWidth: true,
            margin: 33,
            items: 3,
        }
    }
});

/* Frontend Дима */
// Скрипт для блока discounts-promotions-ceilings
const discountsCeilingsBtn = document.getElementById('discountsPromotionsCeilingsBtn'),
    discountsCeilingsItemsHide = document.querySelectorAll('.discounts-promotions-ceilings__item.hide');


if (discountsCeilingsBtn) {
    discountsCeilingsBtn.addEventListener('click', function () {
        this.style.display = 'none';
        discountsCeilingsItemsHide.forEach((item) => {
            item.classList.remove('hide');
        });
    });
}

// Скрипт для слайдера блока with-ceilings-you-get
function withCeilingsYouGetSlider(itemName) {
    $(itemName).owlCarousel({
        items: 1,
        dots: true,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        responsive: {
            768: {
                items: 2,
                margin: 10
            }
        }
    });
}

checkWindowWidth('with-ceilings-you-get__slider', 1200, withCeilingsYouGetSlider);

window.addEventListener('resize', function () {
    checkWindowWidth('with-ceilings-you-get__slider', 1200, withCeilingsYouGetSlider);
});

// Скрипт для слайдера блока photos-ceilings
const more = document.querySelectorAll('.more');

if (more) {
    for (let i = 0; i < more.length; i++) {
        more[i].addEventListener('click', function (event) {
            event.preventDefault();
            const hidden = this.parentNode.querySelectorAll('.hidden');
            for (let i = 0; i < 4; i++) {
                if (!hidden[i]) return this.outerHTML = '';
                hidden[i].classList.remove('hidden');
            }
        });
    }
}

// Скрипт для слайдера блока stretch-ceilings-better
function stretchCeilingsBetter(itemName) {
    $(itemName).owlCarousel({
        items: 1,
        dots: true,
        dotsClass: ['pagination-box'],
        dotClass: ['pagination'],
        responsive: {
            768: {
                items: 2,
                margin: 10
            }
        }
    });
}

checkWindowWidth('stretch-ceilings-better__slider', 768, stretchCeilingsBetter);

window.addEventListener('resize', function () {
    checkWindowWidth('stretch-ceilings-better__slider', 768, stretchCeilingsBetter);
});

// Скрипт для слайдера с ползунком блока calculating-cost-stretch-ceiling
const slider = document.getElementById('calculatingCostRange'),
    output = document.getElementById('calculatingCostValue');

output.textContent = slider.value;

function getSliderValue() {
    let x = slider.value * 2.2,
        color = 'linear-gradient(90deg, rgb(242, 100, 34)' + (x - 10) + '%, rgb(214, 214, 214)' + (x - 10) + '%)';
    slider.style.background = color;
}

getSliderValue();

slider.addEventListener('input', function () {
    output.textContent = this.value;
});

slider.addEventListener('mousemove', function () {
    getSliderValue();
});
slider.addEventListener('touchmove', function () {
    getSliderValue();
});
slider.addEventListener('touchend', function () {
    getSliderValue();
});

