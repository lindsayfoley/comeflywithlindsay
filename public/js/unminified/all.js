var MobileNav = {
	
	windowWidth : function() {	
		return $(window).width();
	},
	
	maxMobileWidth: 667,

	toggleNav: function(e) {
		$('nav').slideToggle();
		e.stopPropagation();
	},
	
	registerHamburgerIconForTaps: function() {
		$('.hamburger-container').click(function(){
			MobileNav.toggleNav();
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
	if(MobileNav.windowWidth() <= MobileNav.maxMobileWidth) {
		MobileNav.registerHamburgerIconForTaps();
	}
});

$(window).resize(function() {
	if(MobileNav.windowWidth() <= MobileNav.maxMobileWidth) {
		MobileNav.registerHamburgerIconForTaps();
	}
});