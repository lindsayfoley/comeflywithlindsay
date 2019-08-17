<?php
	$metaTitle = 'New Forest, England';
	$metaDescription = 'The New Forest is a tranquil place with lush woodland, wildlife and even has beautiful coastal towns! Read my guide on where to stay, eat and where to visit.';
	$ogImageUrl = '/images/new-forest/ponies-new-forest.jpg';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/new-forest.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../cotswolds';
	$viewMoreText = 'Cotswolds Travel Guide';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>