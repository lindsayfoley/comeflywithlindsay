<?php
	$metaTitle = 'Why the Cornish Coast Is England\'s Best Summer Destination';
	$metaDescription = 'I stayed at Mawgan Porth in Newquay, North Cornwall and had no idea that England had such heavenly, sandy beaches with ombre blue waters!';
	$ogImageUrl = '/images/cornwall/mawgan-porth-beach.jpg';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/cornwall.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../cotswolds';
	$viewMoreText = 'Cotswolds Travel Guide';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>