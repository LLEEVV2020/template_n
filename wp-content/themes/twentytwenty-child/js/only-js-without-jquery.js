// Универсальный скрипт для табов
let tabs = document.querySelectorAll('.js-tab'),
    tabsItems = document.querySelectorAll('.js-tab__item');

if (tabs && tabsItems) {
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            tabs.forEach(function(tab) {
                tab.classList.remove('active');
            });
            this.classList.add('active');
            let id = tab.dataset.id;
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
            document.querySelector('#' + id).classList.add('active');
        });
    });
}

// Скрипт для блока choose-your-own-ceiling
const chooseYourCeilingColorsMate = document.querySelectorAll('.choose-your-own-ceiling__colors-item--mate'),
    chooseYourCeilingColorsGlossy = document.querySelectorAll('.choose-your-own-ceiling__colors-item--glossy'),
    chooseYourCeilingColorsPhotoprint = document.querySelectorAll('.choose-your-own-ceiling__colors-item--photoprint'),
    chooseYourCeilingColorsItems = document.querySelectorAll('.choose-your-own-ceiling__colors-item');

// Ф-ия добавляет бордер для элемента
function chooseYourCeilingAddBorder(colors) {
    colors.forEach(function(color) {
        color.addEventListener('click', function() {
            colors.forEach(function(color) {
                color.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

if (chooseYourCeilingColorsMate && chooseYourCeilingColorsGlossy && chooseYourCeilingColorsPhotoprint) {
    chooseYourCeilingAddBorder(chooseYourCeilingColorsMate);
    chooseYourCeilingAddBorder(chooseYourCeilingColorsGlossy);
    chooseYourCeilingAddBorder(chooseYourCeilingColorsPhotoprint);
}

if (chooseYourCeilingColorsItems) {
    // При клике на элемент меняеться фоновое изображение у блока
    chooseYourCeilingColorsItems.forEach(function(color) {
        color.addEventListener('click', function() {
            let data = color.dataset.img;
            let parent = color.closest('.choose-your-own-ceiling__box').querySelector('.choose-your-own-ceiling__image-bg');
            parent.style.backgroundImage = `url(/wp-content/themes/twentytwenty-child/img/ceiling/${data}.webp)`;
        }); 
    });
}

const chooseYourCeilingPrices = document.querySelectorAll('.choose-your-own-ceiling__price-box');

let meter = 1;

chooseYourCeilingPrices.forEach(function(priceBox) {
    priceBox.addEventListener('click', function(event) {
        let target = event.target;
        // let oldPrice = priceBox.querySelector('.choose-your-own-ceiling__price-old-value');
        // let newPrice = priceBox.querySelector('.choose-your-own-ceiling__price-new-value');
        let meterNumber = priceBox.querySelector('.choose-your-own-ceiling__price-meter-number');

        if (target.classList.contains('choose-your-own-ceiling__price-circle--minus')) {
            meter--;
            if (meter < 1) {
                meter = 1;
            }
            meterNumber.textContent = meter;
        }

        if (target.classList.contains('choose-your-own-ceiling__price-circle--plus')) {
            meter++;
            if (meter > 100) {
                meter = 100;
            }
            meterNumber.textContent = meter;
        }
    });
});


