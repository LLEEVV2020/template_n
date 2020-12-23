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
    chooseYourCeilingColorsSky = document.querySelectorAll('.choose-your-own-ceiling__colors-item--sky'),
    chooseYourCeilingColorsItems = document.querySelectorAll('.choose-your-own-ceiling__colors-item');

// Ф-ия добавляет бордер для активного элемента 
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

if (chooseYourCeilingColorsMate || chooseYourCeilingColorsGlossy || chooseYourCeilingColorsPhotoprint || chooseYourCeilingColorsSky) {
    chooseYourCeilingAddBorder(chooseYourCeilingColorsMate);
    chooseYourCeilingAddBorder(chooseYourCeilingColorsGlossy);
    chooseYourCeilingAddBorder(chooseYourCeilingColorsPhotoprint);
    chooseYourCeilingAddBorder(chooseYourCeilingColorsSky);
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

if (chooseYourCeilingPrices) {
    chooseYourCeilingPrices.forEach(function(priceBox) {
        priceBox.addEventListener('click', function(event) {
            let target = event.target;
            let meterNumber = priceBox.querySelector('.choose-your-own-ceiling__price-input');

            meterNumber.value = '';
    
            if (target.classList.contains('choose-your-own-ceiling__price-circle--minus')) {
                meter--;
                if (meter < 1) {
                    meter = 1;
                }
                meterNumber.value = meter;
            }
    
            if (target.classList.contains('choose-your-own-ceiling__price-circle--plus')) {
                meter++;
                if (meter > 100) {
                    meter = 100;
                }
                meterNumber.value = meter;
            }
        });
    });
}

// Скрипт для блока repair-before-and-after
const repairBeforeAndFfterBox = document.querySelectorAll('.repair-before-and-after__box');

if (repairBeforeAndFfterBox) {
    repairBeforeAndFfterBox.forEach(function(box) {
        // Получаем все нужные элементы внутри блока repair-before-and-after__box
        let dragLine = box.querySelector('.repair-before-and-after__drag-line');
        let img = box.querySelector('.repair-before-and-after__img-js');
        let beforeItem = box.querySelector('.repair-before-and-after__item.before');
        let afterItem = box.querySelector('.repair-before-and-after__item.after');

        // Вешаем событие input для каждого блока repair-before-and-after__box
        box.addEventListener('input', function(event) {
            if (event.target.classList.contains('repair-before-and-after__range')) {
                let sliderRange = event.target.value;
                // Если значение св-ва value у блока repair-before-and-after__range менее 29 или более 72, то мы скрываем элементы repair-before-and-after__item.before и repair-before-and-after__item.after
                if (sliderRange < 29) beforeItem.style.display = 'none';
                else beforeItem.style.display = 'block';
                if (sliderRange > 72) afterItem.style.display = 'none';
                else afterItem.style.display = 'block';
                // Меняем св-во left у линии
                dragLine.style.left = sliderRange + '%';
                // Меняем ширину у ползунка
                img.style.width = sliderRange + '%';
            }
        });
    });
}



