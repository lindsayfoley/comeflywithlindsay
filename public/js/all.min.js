var toggleHamburgerNav = function() {
	
	$('.hamburger-container').click(function(e){
		$('nav').slideToggle();
		e.stopPropagation();
	});
};


$(document).ready(function() {
	toggleHamburgerNav();
});
