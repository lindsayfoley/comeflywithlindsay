<?php 
	$metaTitle = "Carvoeiro, Portugal Travel Guide";
	$metaDescription = "Travel guide on Carvoeiro in Portugal featuring travel advice and details on where to stay, what to eat and things to see, written by Come Fly With Lindsay.";
	$ogImageUrl = "/images/carvoeiro/tivoli-carvoeiro-at-sunset.jpg";	 
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/head.php");
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/blog-post-start.php");
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/carvoeiro.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = "../banff";
	$viewMoreText = "View Banff Guide";	
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/blog-post-end.php"); 
?>

