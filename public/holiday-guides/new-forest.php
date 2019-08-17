<?php
	$metaTitle = 'New Forest, England';
	$metaDescription = 'The New Forest is the epitome of natural beauty from lush woodland, to a plethora of wildlife and even beautiful coastal towns! Read my guide to learn more.';
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