// I've added annotations to make this easier to follow along at home. Good luck learning and check out my other pens if you found this useful


// First let's set the colors of our sliders
const settings = {
    fill: '#F26422',
    background: '#D0D0D0'
}

// First find all our sliders
const sliders = document.querySelectorAll('.range-slider');

// Iterate through that list of sliders
// ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
Array.prototype.forEach.call(sliders, (slider) => {
    // Look inside our slider for our input add an event listener
    //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
    slider.querySelector('input').addEventListener('input', (event) => {
        // 1. apply our value to the span
        slider.querySelector('span').innerHTML = event.target.value;
        // 2. apply our fill to the input
        applyFill(event.target);
    });
    // Don't wait for the listener, apply it now!
    applyFill(slider.querySelector('input'));
});

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
    // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
    const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    // now we'll create a linear gradient that separates at the above point
    // Our background color will change here
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}


// MODAl //

$(".modal").each( function(){
	$(this).wrap('<div class="overlay"></div>')
});

$(".open-modal-1").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modal = $($this).data("modal");
	
	$(modal).parents(".overlay").addClass("open");
	setTimeout( function(){
		$(modal).addClass("open");
	}, 350);
	
	$(document).on('click', function(e){
		var target = $(e.target);
		
		if ($(target).hasClass("overlay")){
			$(target).find(".modal").each( function(){
				$(this).removeClass("open");
			});
			setTimeout( function(){
				$(target).removeClass("open");
			}, 350);
		}
		
	});
	
});

$(".close-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modal = $($this).data("modal");
	
	$(modal).removeClass("open");
	setTimeout( function(){	
		$(modal).parents(".overlay").removeClass("open");
	}, 350);
	
});

/**
 * Вычисление значений
 */
// шаги калькулятора
let current_Slide = 1;
// что выбрали: Квартира, Частный дом, Офис
let c__window = "Частный дом";

let arr_index = 0;
let arr__window = [];
let data__all = {
	stvorki: '', 
	width: 0,
	height: 0,
	windowsill: false,
	slopes: false,
	slopes_block_add: "",
	otlivi: false,
	stvorki: []
}
let arr_raspolozenie = ["Левая створка", "Центральная створка", "Правая створка"];
let arr_stvorki = [
	{
		raspolozenie: '',
		glyhaia: false,
		povorotnaia: false,
		povorotno_otkidnaia: false,
		moskitnaia_setka: false,
		detskii_zamok: false
	}
];

// начальный экран
let i_name_window = document.querySelectorAll('input[name="window"]');
for (let i_item of i_name_window) {
	
	i_item.addEventListener("click",  function() { 
		if (i_item.checked) {
			c__window = i_item.parentNode.children[1].children[1].innerText;
		}
	});
}

// второй экран
let i_name_window_two = document.querySelectorAll('input[name="window-two"]');
for (let i_item of i_name_window_two) {
	i_item.addEventListener("click",  function() {
		document.querySelector('.calc-window-two .calc-window__btn--next').classList.remove('blocking');
		if (i_item.checked) {
			//let local_data__all = data__all;
			data__all.stvorki = [];
			let item_local = document.querySelectorAll('.calc-window-two__list-item');
			for (let i of item_local) {
				i.setAttribute('style', "pointer-events: auto;") ;
			}

			if(this.dataset.win_st == 1){
				//console.log( 'Маловато' );
				data__all.stvorki.push(arr_stvorki);
				
			} else{
				for (let i = 0; i < Number(this.dataset.win_st); i++) {
					data__all.stvorki.push(arr_stvorki);
				}
			   
			}
			this.parentNode.setAttribute('style', "pointer-events: none;") ;
			//arr__window.push(data__all);

			
		}
	});
}

// третий экран

document.querySelector(".range-slider__height").addEventListener("change", function() {
	console.log(this.value);
});



let btn__prew = document.querySelectorAll('.calc-window__btn--prew');
for (let i_item of btn__prew) {
	i_item.addEventListener("click",  function() { 
		showPrevious_Slide();
	});
}

let btn_next = document.querySelectorAll('.calc-window__btn--next');
for (let i_item of btn_next) {
	i_item.addEventListener("click",  function() { 
		showNext_Slide();
	});
}

function showSlide(n) {

	let btn_next = document.querySelectorAll('.calc-window');
	for (let i_item of btn_next) {
		i_item.style.display = "none";
	}

	switch (n) {

		case 1:
			document.querySelector('.calc-window-1').style.display = "block" ;
			break;
		case 2:
			document.querySelector('.calc-window-2').style.display = "block" ;
			break;
		case 3:
			document.querySelector('.calc-window-3').style.display = "block" ;
			// загружаем картинку окон с выбранным кол-вом створок
			document.querySelector('.calc-window-three__box_click').className = "calc-window-three__box calc-window-three__box_click calc-window-three__box--" + data__all.stvorki.length;
			data__all.height = Number(document.querySelector('.range-slider__height').value);
			data__all.width = Number(document.querySelector('.range-slider__width').value);
			data__all.windowsill = document.querySelector('[id="check-windowsill-1"]').checked;
			data__all.slopes = document.querySelector('[id="slopes-2"]').checked;
			let slopes_block_add  = document.querySelectorAll('[name="slopes-block-add"]');
			console.log("hhh");
			for (let i of slopes_block_add) {
				if(i.checked){
					data__all.slopes_block_add = i.value;
				}
			}
			data__all.otlivi = document.querySelector('[id="otlivi-3"]').checked;

			break;
		case 4:
			document.querySelector('.calc-window-4').style.display = "block" ;
			break;
		case 5:
			console.log( 'Перебор' );
			break;
	}
	if(n == 0){

	}
}

function showNext_Slide() {
	current_Slide++;
	showSlide(current_Slide);
}

function showPrevious_Slide() {
	current_Slide--;
	showSlide(current_Slide);
}
