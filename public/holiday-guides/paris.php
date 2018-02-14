<?php
	$metaTitle = 'A Travel Guide to Paris, France';
	$metaDescription = 'Your travel guide to France\'s capital city, Paris! Including where to stay, top attractions to visit and places to eat and drink by Come Fly With Lindsay.';
	$ogImageUrl = '/images/paris/eiffel-tower-paris-at-sunset.jpg';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/paris.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../carvoeiro';
	$viewMoreText = 'Read About Carvoeiro';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>