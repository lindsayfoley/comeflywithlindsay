<?php
	$metaTitle = '5 Exciting Reasons to Visit Painshill Park Surrey';
	$metaDescription = 'With its crystal grotto, Gothic Temple and winding path of artistic sights to discover, you\'ll wonder why you didn\'t visit Painshill Park in Surrey sooner!';
	$ogImageUrl = '/images/painshill-park/inside-gothic-temple-painshill-park-surrey.jpg';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/painshill-park.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../new-forest';
	$viewMoreText = 'View New Forest Guide';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>