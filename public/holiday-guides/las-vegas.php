<?php 
	$metaTitle = '5 Nights in Las Vegas to Remember';
	$metaDescription = 'A quick guide to help you make the best choices for your time in Las Vegas! I advise on where to eat and the best area and hotels to stay in Vegas.';
	$ogImageUrl = '/images/las-vegas/las-vegas-strip-at-night.jpg';		  
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/las-vegas.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../banff';
	$viewMoreText = 'View Banff Guide';	
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>
