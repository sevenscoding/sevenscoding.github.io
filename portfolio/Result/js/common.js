$(function() {

	// Menu 

	$('.main__header-menu').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).toggleClass('open__menu');
		$('.aside__menu-layout').toggleClass('open__aside');
		$('.catalog__section').removeClass('open__catalog');
		
	});
	$('.aside__menu-block-close').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.aside__menu-layout').toggleClass('open__aside');
		$('.main__header-menu').toggleClass('open__menu');
	});
	$('.search__wrap-link').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.search__modal-case').toggleClass('open__search');
	});
	$('.close__search').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.search__modal-case').toggleClass('open__search');
	});
	$('.catalog__header').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.catalog__section').toggleClass('open__catalog');
	});
	// select 
	$('#selectMain').styler();
	$(".range__wrap").slider({
		min: 30,
		max: 250,
		range: true
	});

	// Pagi 

	$('.product__pagination').on('click', function(event) {
		

		$('.product__pagination').removeClass('active_pagi');
		$(this).addClass('active_pagi');


	});

});
