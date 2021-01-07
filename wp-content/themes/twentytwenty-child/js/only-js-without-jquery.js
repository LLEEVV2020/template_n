// Универсальный скрипт для табов
let tabs = document.querySelectorAll('.js-tab'),
    tabsItems = document.querySelectorAll('.js-tab__item');

if (tabs && tabsItems) {
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (tab) {
                tab.classList.remove('active');
            });
            this.classList.add('active');
            let id = tab.dataset.id;
            tabsItems.forEach(function (item) {
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
    colors.forEach(function (color) {
        color.addEventListener('click', function () {
            colors.forEach(function (color) {
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
    chooseYourCeilingColorsItems.forEach(function (color) {
        color.addEventListener('click', function () {
            let data = color.dataset.img;
            let parent = color.closest('.choose-your-own-ceiling__box').querySelector('.choose-your-own-ceiling__image-bg');
            parent.style.backgroundImage = `url(/wp-content/themes/twentytwenty-child/img/ceiling/${data}.webp)`;
        });
    });
}

const chooseYourCeilingPrices = document.querySelectorAll('.choose-your-own-ceiling__price-box');

if (chooseYourCeilingPrices) {
    chooseYourCeilingPrices.forEach(function (priceBox) {
        priceBox.addEventListener('click', function (event) {
            let target = event.target;
            let meterNumber = priceBox.querySelector('.choose-your-own-ceiling__price-input');
            let meterNumberOld = priceBox.querySelector('.choose-your-own-ceiling__price-old-value');
            let meterNumberNew = priceBox.querySelector('.choose-your-own-ceiling__price-new-value');
            let meter = meterNumber.value;

            if (target.classList.contains('choose-your-own-ceiling__price-circle--minus')) {
                meter--;
                if (meter < 1) {
                    meter = 1;
                }
            }

            if (target.classList.contains('choose-your-own-ceiling__price-circle--plus')) {
                meter++;
                if (meter > 100) {
                    meter = 100;
                }
            }

            meterNumber.value = meter;
            meterNumberOld.textContent = Math.round(meterNumberNew.dataset.value * meter * meterNumberOld.dataset.value);
            meterNumberNew.textContent = Math.round(meterNumberNew.dataset.value * meter);

        });
    });
}

// Скрипт для блока repair-before-and-after
const repairBeforeAndFfterBox = document.querySelectorAll('.repair-before-and-after__box');

if (repairBeforeAndFfterBox) {
    repairBeforeAndFfterBox.forEach(function (box) {
        // Получаем все нужные элементы внутри блока repair-before-and-after__box
        let dragLine = box.querySelector('.repair-before-and-after__drag-line');
        let img = box.querySelector('.repair-before-and-after__img-js');
        let beforeItem = box.querySelector('.repair-before-and-after__item.before');
        let afterItem = box.querySelector('.repair-before-and-after__item.after');

        // Вешаем событие input для каждого блока repair-before-and-after__box
        box.addEventListener('input', function (event) {
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

// Скрипт для блока make-repair-in-15-days
let makeRepairIn15DaysSlider = document.querySelector('.make-repair-in-15-days__slider');

if (makeRepairIn15DaysSlider) {
    let makeRepairIn15DaysSwiper = new Swiper(makeRepairIn15DaysSlider, {
        sliderPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
}

// favorablePricesIframe = `<iframe width="468" height="265" src="https://www.youtube.com/embed/3U79waCgqCw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;


// Скрипт для блока favorable-prices файла C_video-reviews.html
const favorablePricesItemImgBox = document.querySelectorAll('.favorable-prices__item-img-box'),
    favorablePricesIframe = document.createElement('iframe');
favorablePricesLink = document.createElement('a');

favorablePricesIframe.classList.add('hide');
favorablePricesIframe.src = 'https://www.youtube.com/embed/3U79waCgqCw';
favorablePricesIframe.setAttribute('frameborder', 0);
favorablePricesIframe.setAttribute('allow', 'accelerometer');
favorablePricesIframe.setAttribute('autoplay', '');
favorablePricesIframe.setAttribute('clipboard-write', '');
favorablePricesIframe.setAttribute('encrypted-media', '');
favorablePricesIframe.setAttribute('gyroscope', '');
favorablePricesIframe.setAttribute('picture-in-picture', '');
favorablePricesIframe.setAttribute('allowfullscreen', '');

favorablePricesLink.classList.add('favorable-prices__item-img-big');
favorablePricesLink.href = '#';
favorablePricesLink.innerHTML = `<img src="/wp-content/themes/twentytwenty-child/img/ceiling/favorable-prices-big-img.webp" alt="отзывы">`;

if (favorablePricesItemImgBox) {
    favorablePricesItemImgBox.forEach(function (box) {
        let imgBigBox = box.querySelector('.favorable-prices__item-img-big'),
            imgBig = box.querySelector('.favorable-prices__item-img-big img'),
            iframe = box.querySelector('iframe');

        box.addEventListener('click', function (event) {
            event.preventDefault();
            const target = event.target;
            if (target.classList.contains('js-favorable-prices-img')) {
                const src = event.target.src;
                imgBig.src = src;
                imgBigBox.classList.remove('hide');
                if (iframe) iframe.classList.add('hide');
            }
            if (target.classList.contains('js-favorable-prices-video-img')) {
                imgBigBox.classList.add('hide');
                if (iframe) iframe.classList.remove('hide');
            }
        });
    });
}

// Скрипт для блока favorable-prices файла C_questions-for-accurate-calculation
let questionsForAccurateCalculationSlider = document.querySelector('.questions-for-accurate-calculation__slider');

if (questionsForAccurateCalculationSlider) {
    let makeRepairIn15DaysSwiper = new Swiper(questionsForAccurateCalculationSlider, {
        sliderPerView: 1,
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: '.questions-for-accurate-calculation__btn--next',
            prevEl: '.questions-for-accurate-calculation__btn--prev'
        }
    });
}

const rightBalconyTabs = document.querySelectorAll('.right-balcony__tabs-item'),
      rightBalconyTabsContents = document.querySelectorAll('.right-balcony__box'),
      rightBalconyNavigationLeft = document.querySelector('.right-balcony__navigation-left'),
      rightBalconyNavigationRight = document.querySelector('.right-balcony__navigation-right');

if (rightBalconyTabs && rightBalconyTabsContents) {
    rightBalconyTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            rightBalconyTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            this.classList.add('active');
            const id = this.dataset.tab;
            rightBalconyTabsContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            });
            document.querySelector('#' + id).classList.add('active');
            if (id === 'warm-glazing') {
                rightBalconyNavigationLeft.textContent = 'Безрамное остекление';
                rightBalconyNavigationRight.textContent = 'Холодное остекление';
            }
            if (id === 'cold-glazing') {
                rightBalconyNavigationLeft.textContent = 'Теплое остекление';
                rightBalconyNavigationRight.textContent = 'Безрамное остекление';
            }
            if (id === 'frameless-glazing') {
                rightBalconyNavigationLeft.textContent = 'Холодное остекление';
                rightBalconyNavigationRight.textContent = 'Теплое остекление';
            }
        });        
    });
}







