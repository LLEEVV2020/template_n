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
let balcony_icon_del;
let balcony_icon_copy;
let balcony_icon_setting;
let calc_bal_btn_box = document.querySelector(`.calc-balcony__btn-box`);

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

// кнопка "ДА" в модальном окне "удалить окно?" 
let close_window = document.querySelector('.close-window');
close_window.addEventListener('click', function(event) {
    
    // this.dataset.number_okno;
    balcony_icon_del = document.querySelector(this.dataset.number_okno);
    //console.log(balcony_icon_del);
    balcony_icon_del.remove();

});

// ф-ция в которой происходит перелистывание шагов
function showSlide(n) {

    currentSlide = n;
    delite_bg();

    // узнаём какое кол-во створок
    let data_kolvo_stvorok = 0;
    for (let i_item of i_name_sash) {
        if(i_item.checked){
            data_kolvo_stvorok = i_item.value;
        }
    }

    // узнать ширину
    let range_width = document.querySelector('.range_width');
    // узнать высоту
    let range_height = document.querySelector('.range_height');


    shablon_type = `
        <div class="balcony-img__box" 
            data-number_okno="${okno_namber}"
            data-kolvo_stvorok="${data_kolvo_stvorok}">
            <div class="balcony-img">
                <span data-tooltip="удалить окно"
                    class="balcony-icon balcony-icon__del open-modal-1" data-modal="#modal-close">
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
            <div class="balcony-text">Остекление 1 ${range_height.value}*${range_width.value}</div>
        </div>
    `;

    if(currentSlide === 0){
        stepWrapper.classList.add("balcony-home");
        previousButton.classList.add("none-visible");

        btn__next.classList.remove('blocking');
    }
    if(currentSlide === 1){
        stepWrapper.classList.add("balcony-leaflets");
        previousButton.classList.remove("none-visible");
        
        let flag_sash = false;
        
        if(calc_bal_btn_box.style.display !== "none"){
            previousButton.classList.add("none-visible");
        }
        
        for (let i_item of i_name_sash) {
            if(i_item.checked){
                flag_sash = true;
            }
        }

        if(!flag_sash){
            btn__next.classList.add('blocking');
        } 

    }
    if(currentSlide === 2){
        stepWrapper.classList.add("balcony-size");

        if(calc_bal_btn_box.style.display !== "none"){
            previousButton.classList.remove("none-visible");
        }
    }
    if(currentSlide === 3){
        stepWrapper.classList.add("balcony-add");
        //balcony_add_img.append(shablon_type);

        if(flag_namber){
            balcony_add_img.insertAdjacentHTML('beforeEnd', shablon_type);
        } else{
            let data_n_okno = document.querySelector(`[data-number_okno="${okno_namber}"]`);
            data_n_okno.insertAdjacentHTML('afterEnd', shablon_type);
            data_n_okno.remove();
        }
        flag_namber = false;

        
        function block_even() {
            open_modal_1(`[data-number_okno="${okno_namber}"] .open-modal-1`);
        
            balcony_icon_del = document.querySelector(`[data-number_okno="${okno_namber}"] .balcony-icon__del`);
            balcony_icon_del.addEventListener('click', function(event) {
                let delite = this.parentElement.parentElement;
                close_window.dataset.number_okno = `[data-number_okno="${delite.dataset.number_okno}"]`;
            });

            balcony_icon_setting = document.querySelector(`[data-number_okno="${okno_namber}"] .balcony-icon__setting`);
            balcony_icon_setting.addEventListener('click', function(event) {
                delite_bg();

                currentSlide = 1;
                stepWrapper.classList.add("balcony-leaflets");

                
                calc_bal_btn_box.style.display = "flex";

                // скрываем кнопку далее, на втором экране.        
                if(calc_bal_btn_box.style.display !== "none"){
                    previousButton.classList.add("none-visible");
                }

                okno_namber = tris.data-number_okno;

                //let delite = this.parentElement.parentElement;
                //close_window.dataset.number_okno = `[data-number_okno="${delite.dataset.number_okno}"]`;
            });
        
            balcony_icon_copy = document.querySelector(`[data-number_okno="${okno_namber}"] .balcony-icon__copy`);
            balcony_icon_copy.addEventListener('click', function(event) {
                let copy = this.parentElement.parentElement;
                
                //close_window.dataset.number_okno = `[data-number_okno="${delite.dataset.number_okno}"]`;
                okno_namber++;
                let copy_clone = copy.cloneNode(true);
                copy_clone.dataset.number_okno = okno_namber;
                
                copy.insertAdjacentElement('afterEnd', copy_clone);
                //console.log(copy);
                block_even();
            });
        }
        block_even();

        
       

    }
    if(currentSlide === 4){
        stepWrapper.classList.add("balcony-services");
        nextButton.classList.remove("none-visible");
    }
    if(currentSlide === 5){
        stepWrapper.classList.add("balcony-payment");
        nextButton.classList.add("none-visible");

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