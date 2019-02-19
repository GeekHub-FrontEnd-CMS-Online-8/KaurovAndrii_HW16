$(document).ready(function() {

	$('.burger, .menu').on('click', function(){
		$('.menu').toggleClass('menu--open');
		$('.burger').children('.burger__menu').toggleClass('menu--close');
		$('.burger').toggleClass('burger--close');
	});

	$('.scroll').mPageScroll2id({
		speed : 500,
	});

	let header = new Headhesive('.menu-logo');

});