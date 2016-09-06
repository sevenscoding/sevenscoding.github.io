$(function() {
	

    //Modal 
    $('#myModal').on('shown.bs.modal', function () {
  		$('#myInput').focus()
	});

	//slider 
	$('.owl_carousel').owlCarousel({
	    loop: true,
	    margin: 10,
	    dots: true,
	    responsiveClass: true,
	    autoplay: true,
	    responsive: {
	        0: {
	            items: 1,
	            nav: false
	        },
	        600: {
	            items: 1,
	            nav: false
	        },
	        1000: {
	            items: 1,
	            nav: false,
	            loop: false
	        }
	    }
	});

	// menu 
	$('.hidden__menu').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".hidden__menu__wrap").toggle(300);
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
