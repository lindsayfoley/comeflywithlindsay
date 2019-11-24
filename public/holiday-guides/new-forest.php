<?php
	$metaTitle = 'New Forest, England';
	$metaDescription = 'A guide to the New Forest including where to spot the famous New Forest horses, the best restaurants and pubs in New Forest and which towns to visit.';
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