<?php 
	$metaTitle = 'London Afternoon Tea Guide';
	$metaDescription = 'A guide to my top traditional afternoon tea venues in London, England with tea reviews of Fortnum and Mason, The Ritz & more, written by Come Fly With Lindsay.';
	$ogImageUrl = '/images/london/traditional-afternoon-tea-fortnum-and-mason.jpg';		  
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/afternoon-tea-london.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../destinations';
	$viewMoreText = 'View My Holiday Guides';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>