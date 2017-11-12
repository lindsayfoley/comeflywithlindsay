var addPinterestButtonToImages = function() {
	
	var allImages = $('figure img');
	
	for(var i = 0; i < allImages.length; i++) {
		allImages[i] = 'test';
// 		allImages[i] = '<a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark">' + '<img src="' + $(allImages[i]).attr('src') + '" alt="' +  $(allImages[i]).attr('alt') + '"></a>';
	}
};


$(document).ready(function() {
	addPinterestButtonToImages();
});
