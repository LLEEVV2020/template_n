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

// ф-ция в которой происходит перелистывание шагов
function showSlide(n) {

    currentSlide = n;
    stepWrapper.classList.remove("balcony-home", 
    "balcony-leaflets", "balcony-size", "balcony-add",
    "balcony-services", "balcony-payment");

    if(currentSlide === 0){
        stepWrapper.classList.add("balcony-home");
        previousButton.classList.add("none");
    }
    if(currentSlide === 1){
        stepWrapper.classList.add("balcony-leaflets");
        previousButton.classList.remove("none");
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

// Вызываем первый экран
showSlide(currentSlide);