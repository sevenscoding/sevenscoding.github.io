$(function() {
// Menu

	$(".header__hidden-Button svg").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".hidden__menu-case").toggleClass('open__menu');
	});

	//scroll2id
	$(".nav__anchor").mPageScroll2id({
    	offset:50
	});

 // wow
 new WOW().init();
/* ------------------------- */


// Obj carousel

$('.object__carousel').owlCarousel({
    loop:true,
    margin:10,
    stagePadding: 50,
    responsiveClass:true,
    navText: ['<', '>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})



});
