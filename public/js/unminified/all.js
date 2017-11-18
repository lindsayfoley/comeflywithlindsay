var toggleHamburgerNav = function() {
	
	$('.hamburger-container').click(function(e){
		$('nav').slideToggle();
		e.stopPropagation();
	});
};

/*
var addBackToTopButton = function() {
	
	var windowVerticalPoesition = $(window).scrollTop();
	
	if(windowVerticalPosition > 800) {
		$('article').after('<a id="page-top" href="#blog-post">Back To Top</a>').show();		
	} 		
};

$(window).one('scroll', function() {
	addBackToTopButton();
});
*/


$(document).ready(function() {
	toggleHamburgerNav();
});
