<?php 
	$metaTitle = 'Visiting Whistler in the Off-peak Season';
	$metaDescription = 'A guide to Whistler, British Columbia in Canada with things to do and see in sporty Whistler in autumn, with tips and ideas by Come Fly With Lindsay.';
	$ogImageUrl = '/images/whistler/whistler-village-autumnal-colours.jpg';		  	 
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/whistler.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../vancouver';
	$viewMoreText = 'Vancouver Holiday Guide';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>