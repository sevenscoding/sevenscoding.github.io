$(function() {
	$('.top__sale-owl').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: ['<', '>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        480:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});

// Register

$('.register__btn-open').on('click', function(event) {
	event.preventDefault();
	
	$('.form__login-in').hide();
	$('.form__resister-out').show();


});
$('.register__btn-toggle').on('click', function(event) {
	event.preventDefault();
	
	$('.form__login-in').show();
	$('.form__resister-out').hide();


});

$('.cataloge__form-case h5').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).parent().find(".cataloge__form-item-absoluteArrow img").toggleClass('rotate__img');
	$(this).parent().find("form").slideToggle(300);
});



// Gallery Item

var mainImgAttr = $('.product__case-gallery-main img'),
	subImgArray =  $('.product__case-gallery-subImg');

$(subImgArray).on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.product__case-gallery-subImg').removeClass('active__subGallery');
	$(this).addClass('active__subGallery');
	var currentAttr = $(this).find('img').attr('src');
	mainImgAttr.attr('src', currentAttr).fadeIn();
});

// Tabs

var openFirstTab = $('.product__info-item:first-child'),
	spanTabs = $('product__info-tabsAnchor-case span');
	$('product__info-item:first-child').fadeIn(0);

	openFirstTab.fadeIn(0);

$('.product__info-tabsAnchor-case span').on('click', function(event) {
	event.preventDefault();
	
	$('.product__info-tabsAnchor-case span').removeClass('tabsAnchor__active');
	$(this).addClass('tabsAnchor__active');
	
	

	var currentLink = $(this).attr('data-link'),
		tabs = $('.product__info-item');
		tabs.fadeOut(0);



		tabs.each(function(index, el) {
			var thisElement = el;
			var getAttr = $(this).attr('data-link');
			if ( getAttr == currentLink ) {
				$(this).fadeIn();

			} 	
		});

});


// Commentary Add Form

$('.add_comment-btn').on('click', function(event) {
	event.preventDefault();



	/* Variable */

	var commentTheme = $('.add__form-theme').val(),
		commentText = $('.add__form-txt').val(),
		messageCommentary = '<div class="commentary__accept-fixed "><img src="img/circle-with-check-symbol.svg" alt="accept"><h5>Комментарий добавлен!</h5></div>',
		commAnimation = $('.commentary__accept-fixed'),
		newCommentText = '<div class="product__info-commentItem"><div class="product__info-commentItem-img"><img src="img/jigglypuff.svg" alt="jiggly"></div><div class="product__info-commentItem-text"><h5>' + commentTheme + '</h5><p>' + commentText + '</p></div></div>';


	/* ----------------------- */
	$('.product__info-item-empty').remove();

	$('.product__info-commentItem-wrap').append(newCommentText);
	$('.add__form-theme').val('');
	$('.add__form-txt').val('');

	$('body').append(messageCommentary);

	
});

// Commentary if empty

var emptyImgComment = '<h3 class="product__info-item-empty"><img src="img/chat.svg" alt="empty"><span>Нет отзывов!</span></h3>';

if ( $('.product__info-commentItem-wrap .product__info-commentItem').length == 0 ){
	
	$('.product__info-commentItem-wrap').append(emptyImgComment);

}

// Remove Comment by Img

$('body').on('click', '.product__info-commentItem-img', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).parent().remove();

	var productCounter = $(this).parent().parent().parent();

	
	
});








});
