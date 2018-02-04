<?php 
	$metaTitle = "Vancouver Travel Guide";
	$metaDescription = "Travel guide on Downtown Vancouver with handy travel tips, experiences, information on where to visit and where to stay by Come Fly With Lindsay.";
	$ogImageUrl = "/images/vancouver/cycling-around-stanley-park-in-vancouver.jpg";		 
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/head.php");
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/blog-post-start.php");
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/vancouver.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = "../whistler";
	$viewMoreText = "Whistler Holiday Guide";
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/blog-post-end.php"); 
?>
