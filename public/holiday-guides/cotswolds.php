<?php
	$metaTitle = 'The Cotswolds Travel Guide, England';
	$metaDescription = 'Travel guide to the Cotswolds, England with information on top attractions to visit for tourists, where to stay and how to get there, by Come Fly With Lindsay.';
	$ogImageUrl = '/images/cotswolds/TBC.jpg';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/cotswolds.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../afternoon-tea';
	$viewMoreText = 'London Afternoon Tea Guide';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>