<?php 
	$metaTitle = 'The Best Guide you’ll find on the Dalmatia Region in Croatia';
	$metaDescription = 'Travel guide to Split, Hvar, Brac and Trogir in Croatia in the Dalmatia region. Find out the best area to stay, eat and places to go by Come Fly With Lindsay.';
	$ogImageUrl = '/images/croatia/trogir-town-croatia.jpg';	 
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/croatia.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../carvoeiro';
	$viewMoreText = 'View Portugal Guide';	
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>

