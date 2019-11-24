<?php
	$metaTitle = 'How to Maximise 2 Days in the Historic Cotswolds';
	$metaDescription = 'The Cotswolds is an area in England containing the Cotswold Hills. You\'ll see historic buildings made from honey-coloured Cotswold stone and English countryside';
	$ogImageUrl = '/images/cotswolds/sudeley-castle-cotswolds.jpg';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/cotswolds.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../new-forest';
	$viewMoreText = 'View New Forest Guide';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>