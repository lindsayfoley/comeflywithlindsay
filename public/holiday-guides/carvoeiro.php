<?php 
	$metaTitle = 'Discovering Carvoeiro: Portugal’s Hidden Gem';
	$metaDescription = 'My Carvoeiro holiday guide detailing which Carvoeiro hotel I love, what Praia De Carvoeiro (Carvoeiro beach) is like and when the weather in Carvoeiro is good';
	$ogImageUrl = '/images/carvoeiro/tivoli-carvoeiro-at-sunset.jpg';	 
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/carvoeiro.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../croatia';
	$viewMoreText = 'Read My Croatia Guide';	
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>

