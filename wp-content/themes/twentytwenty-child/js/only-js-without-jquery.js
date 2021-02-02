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

// Скрипт для блока right-balcony
const rightBalconyTabs = document.querySelectorAll('.right-balcony__tabs-item'),
      rightBalconyTabsContents = document.querySelectorAll('.right-balcony__box'),
      rightBalconyNavigationLeft = document.querySelector('.right-balcony__navigation-left'),
      rightBalconyNavigationRight = document.querySelector('.right-balcony__navigation-right'),
      rightBalconyWarmGlazingTab = document.querySelector('[data-tab="warm-glazing"]'),
      rightBalconyColdGlazingTab = document.querySelector('[data-tab="cold-glazing"]'),
      rightBalconyFramelessGlazingTab = document.querySelector('[data-tab="frameless-glazing"]'),
      rightBalconyWarmGlazingTabContent = document.getElementById('warm-glazing'),
      rightBalconyColdGlazingTabContent = document.getElementById('cold-glazing'),
      rightBalconyFramelessGlazingTabContent = document.getElementById('frameless-glazing');

function rightBalconyRemoveClassActive() {
    rightBalconyTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    rightBalconyTabsContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });
}

if (rightBalconyTabs && rightBalconyTabsContents && rightBalconyNavigationRight) {
    rightBalconyTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            rightBalconyRemoveClassActive();
            this.classList.add('active');
            const id = this.dataset.tab;
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

    rightBalconyNavigationRight.addEventListener('click', function() {
        rightBalconyRemoveClassActive();

        if (this.textContent === 'Холодное остекление' && rightBalconyNavigationLeft.textContent === 'Безрамное остекление') {
            this.textContent = 'Безрамное остекление';
            rightBalconyNavigationLeft.textContent = 'Теплое остекление';
            rightBalconyColdGlazingTab.classList.add('active');
            rightBalconyColdGlazingTabContent.classList.add('active');
            return;
        }

        if (this.textContent === 'Безрамное остекление' && rightBalconyNavigationLeft.textContent === 'Теплое остекление') {
            this.textContent = 'Теплое остекление';
            rightBalconyNavigationLeft.textContent = 'Холодное остекление';
            rightBalconyFramelessGlazingTab.classList.add('active');
            rightBalconyFramelessGlazingTabContent.classList.add('active');
            return;
        }

        if (this.textContent === 'Теплое остекление' && rightBalconyNavigationLeft.textContent === 'Холодное остекление') {
            this.textContent = 'Холодное остекление';
            rightBalconyNavigationLeft.textContent = 'Безрамное остекление';
            rightBalconyWarmGlazingTab.classList.add('active');
            rightBalconyWarmGlazingTabContent.classList.add('active');
            return;
        }
    });

    rightBalconyNavigationLeft.addEventListener('click', function() {
        rightBalconyRemoveClassActive();

        if (this.textContent === 'Безрамное остекление' && rightBalconyNavigationRight.textContent === 'Холодное остекление') {
            this.textContent = 'Холодное остекление';
            rightBalconyNavigationRight.textContent = 'Теплое остекление';
            rightBalconyFramelessGlazingTab.classList.add('active');
            rightBalconyFramelessGlazingTabContent.classList.add('active');
            return;
        }

        if (this.textContent === 'Холодное остекление' && rightBalconyNavigationRight.textContent === 'Теплое остекление') {
            this.textContent = 'Теплое остекление';
            rightBalconyNavigationRight.textContent = 'Безрамное остекление';
            rightBalconyColdGlazingTab.classList.add('active');
            rightBalconyColdGlazingTabContent.classList.add('active');
            return;
        }

        if (this.textContent === 'Теплое остекление' && rightBalconyNavigationRight.textContent === 'Безрамное остекление') {
            this.textContent = 'Безрамное остекление';
            rightBalconyNavigationRight.textContent = 'Холодное остекление';
            rightBalconyWarmGlazingTab.classList.add('active');
            rightBalconyWarmGlazingTabContent.classList.add('active');
            return;
        }
    });
}

// Скрипт для блока four-types-glazing
const fourTypesGlazingSlider = document.querySelector('.four-types-glazing__slider');

if (fourTypesGlazingSlider) {
    let fourTypesGlazingSwiper = new Swiper(fourTypesGlazingSlider, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 11,
        autoplay: {
            delay: 5000
        },
        simulateTouch: false,
        pagination: {
            el: '.four-types-glazing__pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1200 : {
                slidesPerView: 4,
                spaceBetween: 20,
                autoplay: false,
                allowTouchMove: false
            }
        }
    });
}

// Скрипт для блока prices-without-intermediaries
const pricesWithoutIntermediariesSlider = document.querySelector('.prices-without-intermediaries__slider');

if (pricesWithoutIntermediariesSlider) {
    let pricesWithoutIntermediariesSwiper = new Swiper(pricesWithoutIntermediariesSlider, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
        simulateTouch: false,
        pagination: {
            el: '.prices-without-intermediaries__pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10
            },
            1200 : {
                slidesPerView: 3,
                allowTouchMove: false,
                spaceBetween: 0
            }
        }
    });
}

// Скрипт для блока examples-works
const exampleWorksBtn = document.getElementById('exampleWorksBtn'),
    exampleWorksItems = document.querySelectorAll('.examples-works__item'),
    exampleWorksItemJs = document.querySelectorAll('.examples-works-item-js');

if (exampleWorksBtn && exampleWorksItems) {

    // Показ активной превью
    exampleWorksItemJs.forEach(item => {
        item.addEventListener('click', (event) => {
            const target = event.target,
                img = item.querySelector('.examples-works__img'),
                examplesWorksPreviews = item.querySelectorAll('.examples-works__preview');
                          
            if (target.classList.contains('examples-works__preview')) {
                img.src = target.src;
                examplesWorksPreviews.forEach(preview => preview.classList.remove('active'));
                target.classList.add('active');
            }
        });
    });

    // На планшетной версии убираються классы hidden у всех элементов с классом .tablet-block
    if (window.matchMedia("(min-width: 768px)").matches) {
        const tabletBlock = document.querySelectorAll('.tablet-block');
        tabletBlock.forEach(item => item.classList.remove('hidden'));
    }

    // На десктопной версии убираються классы hidden у всех элементов
    if (window.matchMedia("(min-width: 1200px)").matches) {
        const hidden = document.querySelectorAll('.hidden');
        hidden.forEach(item => item.classList.remove('hidden'));
    }

    // Показывает 3 скрытые карточки при каждои клике на кнопку Загрузить еще
    exampleWorksBtn.addEventListener('click', function (event) {
        event.preventDefault();
        
        const hidden = this.parentNode.querySelectorAll('.hidden');

        for (let i = 0; i < 3; i++) {
            if (!hidden[i]) return this.outerHTML = '';
            hidden[i].classList.remove('hidden');
        }

        exampleWorksItems.forEach(item => {
            if (item.classList.contains('hidden')) exampleWorksBtn.style.display = 'block';
            else exampleWorksBtn.style.display = 'none';
        });
    });
}

// Показывает модальные окна при клике на кнопку открытия модального окна
const modalBtns = document.querySelectorAll('*[data-modal-btn]');

if (modalBtns) {
    for (let i = 0; i < modalBtns.length; i++) {
        modalBtns[i].addEventListener('click', function () {
            let name = modalBtns[i].getAttribute('data-modal-btn');
            let modal = document.querySelector("[data-modal-window='" + name + "']");
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            let close = modal.querySelector('.popup__btn-close');
            close.addEventListener('click', function () {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
    }
}

function closePopup(popup, popupName) {
    for (let i = 0; i < popup.length; i++) {
        popup[i].addEventListener('click', function (event) {
            const target = event.target;
            if (target.classList.contains(`${popupName}`)) {
                this.style.display = 'none';
                document.body.style.overflow = '';
            };
        });
    }
}

exampleWorksPopups = document.querySelectorAll('.examples-works__popup');
if (exampleWorksPopups) closePopup(exampleWorksPopups, 'popup__inner');

discountPopup = document.querySelectorAll('.discount-popup');
if (discountPopup) closePopup(discountPopup, 'popup__inner');









