<?php 
	$metaTitle = 'A First-timers Guide to the Canadian Rockies';
	$metaDescription = 'A handy travel guide on Banff in Alberta, Canada to plan your holiday to the Canadian Rockies. Read my tips on things to do and see by Come Fly With Lindsay.';
	$ogImageUrl = '/images/banff/banff-town-alberta-canada.jpg';		  
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/banff.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../whistler';
	$viewMoreText = 'View Whistler Guide';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>