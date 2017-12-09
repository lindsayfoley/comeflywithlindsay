/* FB share button */
var addPageUrlToFBShareButton = function() {

	var fbSharerLink = $('.fb-share-button a').attr('href');
	var fbUrlPrefix = '?u=';
	var pageUrl = window.location.href;
	
	$('.fb-share-button a').attr('href', fbSharerLink + fbUrlPrefix + pageUrl);
};

$(document).ready(function() {
	addPageUrlToFBShareButton();	
});
