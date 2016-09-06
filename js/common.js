$(function() {

	// open__aside
	$('.portfolio__item_descr').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).parent().parent().find('.portfolio_aside').toggleClass("open__poftfolio_descr");
	});

	$('.portfolio__descr-close').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).parent().toggleClass("open__poftfolio_descr");
	});
	
	// Pop-up
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	//Parallax
	$(window).scroll(function(event) {

	  var wScroll = $(this).scrollTop();

	    $('.greeting__title').css({
	      'transform' : 'translate(0px, '+ wScroll /8 +'%)'
	    });


	  });








	// menu
	$(".nav__list-hidden a img").on('click', function(event) {

		 event.preventDefault();

		$(".aside__navigation").fadeToggle( "slow", "linear" );
	});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
