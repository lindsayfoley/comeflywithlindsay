var MobileNav = {
	
	windowWidth : function() {	
		return $(window).width();
	},
	
	mobileWidth: 639,

	toggleMenu: function() {
		$('body').toggleClass('open');
		$('nav').slideToggle();
	},
	
	addClickHandlerToHamburgerIcon: function() {
		$('#main-menu').click(function(){
			MobileNav.toggleMenu();
		});
	},
	
	initialiseOnMobile: function(){
		if(MobileNav.windowWidth() <= MobileNav.mobileWidth) {
			MobileNav.addClickHandlerToHamburgerIcon();
		}
	}
};

$(document).ready(function() {
	MobileNav.initialiseOnMobile();
});

$(window).resize(function() {
	MobileNav.initialiseOnMobile();
});