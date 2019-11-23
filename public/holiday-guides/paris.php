<?php
	$metaTitle = 'A Travel Guide to Paris, France';
	$metaDescription = 'Read this guide if you plan to visit Paris to make the most of your city break! I cover fun things to do in Paris, places to eat and the best bars in Paris';
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