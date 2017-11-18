var MobileNav = {

	toggleNav: function() {
		$('nav').slideToggle();
	},
	
	registerHamburgerIconForTaps: function() {
		$('.hamburger-container').click(function(e){
			MobileNav.toggleNav();
			e.stopPropagation();
		});
	}
};


/*
var addBackToTopButton = function() {
	
	var windowVerticalPosition = $(window).scrollTop();
	
	if(windowVerticalPosition > 800) {
		$('article').after('<a id="page-top" href="#blog-post">Back To Top</a>').show();		
	} 		
};

$(window).one('scroll', function() {
	addBackToTopButton();
});
*/


$(document).ready(function() {
	MobileNav.registerHamburgerIconForTaps()
});
