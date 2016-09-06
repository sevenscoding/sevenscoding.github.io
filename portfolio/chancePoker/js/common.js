$(function() {

	// Module

	$('.social__mudule').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.module__user').fadeIn(300);
		
	});
	$('.close__module').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.module__user').fadeOut(300);
		
	});
	// Search Block

	$(".search__svg").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".header__bottom-wrap").toggleClass('activeSearch');
	});
	$("#button_search").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".header__bottom-wrap").toggleClass('activeSearch');
	});
	
	/* ------- End ------- */

	// Side Menu
	$(".header__close-wrap").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".side__menu").show(200);
	});
	$(".side__menu-close svg").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".side__menu").hide(200);
	});
	$(".header__close-wrap svg").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".side__menu").toggle(200);
	});
	$(".news__side-menu").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".side__menu").show(200);
	});
	/* ------- End ------- */

	// Recommended Owl

	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin: 10,
	    responsiveClass: true,
	    responsive: {
	        0: {
	            items: 1,
	            nav: false
	        },

	        500: {
	            items: 1,
	            nav: false
	        },
	        600: {
	            items: 2,
	            nav: false
	        },
	        800: {
	            items: 2,
	            nav: false
	        },
	        1000: {
	            items: 3,
	            nav: false,
	            loop: false,
	            autoplay: true
	        }
	    }
	})

	// Add new's
	$('.news__title-add').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.add__news-wrap').toggle( "fast", function() {
    		// Animation complete.
  		});
	});
	$('.add__news-button-add').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		var newsTitle = $("#addNewsTitle").val(),
			newsDescr = $("#addNewsDescr").val(),
			addNewsTxt =$("#addNewsText").val();



		
	});

	// Gate Tabs 

	$(".gate__container a").on('click', function(event) {
		event.preventDefault();

		var myFilter = $('.gate__container a'),
			myDataLink = $(this).attr('data-topLink');
			

		myFilter.removeClass('activeTab');
		$(this).addClass('activeTab');

		if ( myDataLink == "all") {
			$('.gate__case-item').fadeIn(300);
			return false;
		}

		$('.gate__case-item').fadeOut(300);

		$('.gate__case-item').each(function () {

			var thisData = $(this).attr('data-topLink');

			if ( myDataLink == thisData ) {
				$(this).fadeIn('300');
			} else {
				
			}

		});
		





	}); // end jQuery
	

	/* ------- End ------- */

});
