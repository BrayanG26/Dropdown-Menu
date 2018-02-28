$(document).ready(main);

var counter = 1;
// Todo el codigo se ejecutara hasta que la pantalla se haya cargado
// Se ejecutara la funcion main
function main (argument) {
	$('.menu-bar').click(function(){
		// forma sencilla de mostrar el menu
		// $('nav').toggle(); 
		/* Otra manera de hacerlo*/
		if(counter == 1){
			$('nav').animate({
				left:'0'
			});
			counter = 0;
		}else {
			counter = 1;
			$('nav').animate({
				left:'-100%'
			}); 
		}
	});
};