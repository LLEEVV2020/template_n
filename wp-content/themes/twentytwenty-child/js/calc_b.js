'use strict';

// счётчик, на каком шаге находится текущий шаг
let currentSlide = 0;

// навигация
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const stepWrapper = document.getElementById("step-wrapper");

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

let balcony_add_img = document.querySelector('.balcony-add__img');
let shablon_type = ``;
let flag_namber = true;
let okno_namber = 1;

// перелистыватель вперёд ( кнопка "вперёд")
function showNextSlide() {
    showSlide(currentSlide + 1);
}
// перелистыватель назад ( кнопка "назад")
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function delite_bg(){
    stepWrapper.classList.remove("balcony-home", 
    "balcony-leaflets", "balcony-size", "balcony-add",
    "balcony-services", "balcony-payment");
}

let btn__next = document.querySelector('.calc-balcony__btn--next');
let i_name_sash = document.querySelectorAll('input[name="sash"]');
for (var i = 0; i < i_name_sash.length; i++) {
    i_name_sash[i].addEventListener('click', function(event) {
        btn__next.classList.remove('blocking');
    });
}

// кнопка "добавить новое окно"
let calc_balcony__add = document.querySelector('.calc-balcony__add');
calc_balcony__add.addEventListener('click', function(event) {
    delite_bg();
    flag_namber = true;
    currentSlide = 1;
    okno_namber++;
    stepWrapper.classList.add("balcony-leaflets");

});

// ф-ция в которой происходит перелистывание шагов
function showSlide(n) {

    currentSlide = n;
    delite_bg();

    shablon_type = `
        <div class="balcony-img__box" data-number_okno="${okno_namber}">
            <div class="balcony-img">
                <span data-tooltip="удалить окно"
                    class="balcony-icon balcony-icon__del open-modal-1" data-modal="#modal-2">
                    <svg class="icon icon__del">
                        <use
                            xlink:href="wp-content/themes/twentytwenty-child/img/sprite.svg#del">
                        </use>
                    </svg>
                </span>
                <span data-tooltip="скопировать окно" class="balcony-icon balcony-icon__copy">
                    <svg class="icon icon__copy">
                        <use
                            xlink:href="wp-content/themes/twentytwenty-child/img/sprite.svg#copy">
                        </use>
                    </svg>
                </span>
                <span data-tooltip="изменить окно" class="balcony-icon balcony-icon__setting">
                    <svg class="icon icon__setting">
                        <use
                            xlink:href="wp-content/themes/twentytwenty-child/img/sprite.svg#setting">
                        </use>
                    </svg>
                </span>
            </div>
            <div class="balcony-text">Остекление 1 1000*1500</div>
        </div>
    `;

    if(currentSlide === 0){
        stepWrapper.classList.add("balcony-home");
        previousButton.classList.add("none");

        btn__next.classList.remove('blocking');
    }
    if(currentSlide === 1){
        stepWrapper.classList.add("balcony-leaflets");
        previousButton.classList.remove("none");
        
        let flag_sash = false;
        

        
        for (let i_item of i_name_sash) {
            if(i_item.checked){
                flag_sash = true;
            }
            
        }

        if(!flag_sash){
            //currentSlide--;
            btn__next.classList.add('blocking');
        } 

    }
    if(currentSlide === 2){
        stepWrapper.classList.add("balcony-size");
    }
    if(currentSlide === 3){
        stepWrapper.classList.add("balcony-add");
        //balcony_add_img.append(shablon_type);

        if(flag_namber){
            balcony_add_img.insertAdjacentHTML('beforeEnd', shablon_type);
        }
        flag_namber = false;
        

        //console.log(balcony_add_img);

    }
    if(currentSlide === 4){
        stepWrapper.classList.add("balcony-services");
        nextButton.classList.remove("none");
    }
    if(currentSlide === 5){
        stepWrapper.classList.add("balcony-payment");
        nextButton.classList.add("none");

    }

}

const myQuestions = [
    {
        class: "balcony-home",
    },
    {
        class: "balcony-leaflets",
    },
    {
        class: "balcony-size",
    },
    {
        class: "balcony-add",
    },
    {
        class: "balcony-services",
    },
    {
        class: "balcony-home",
    },

];

// Вызываем первый экран
showSlide(currentSlide);