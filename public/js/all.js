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