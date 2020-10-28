'use strict';

// счётчик, на каком шаге находится текущий шаг
let currentSlide = 0;

// навигация
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const stepWrapper = document.getElementById("step-wrapper");

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// перелистыватель вперёд ( кнопка "вперёд")
function showNextSlide() {
    showSlide(currentSlide + 1);
}
// перелистыватель назад ( кнопка "назад")
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

let btn__next = document.querySelector('.calc-balcony__btn--next');
let i_name_sash = document.querySelectorAll('input[name="sash"]');
for (var i = 0; i < i_name_sash.length; i++) {
    i_name_sash[i].addEventListener('click', function(event) {
        btn__next.classList.remove('blocking');
    });
}

// ф-ция в которой происходит перелистывание шагов
function showSlide(n) {

    currentSlide = n;
    stepWrapper.classList.remove("balcony-home", 
    "balcony-leaflets", "balcony-size", "balcony-add",
    "balcony-services", "balcony-payment");

    

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

        console.log(i_name_sash);


    }
    if(currentSlide === 2){
        stepWrapper.classList.add("balcony-size");
    }
    if(currentSlide === 3){
        stepWrapper.classList.add("balcony-add");
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