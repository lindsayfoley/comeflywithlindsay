<?php
	$metaTitle = 'A First-timers Guide to York in England';
	$metaDescription = 'York is a quaint English city encased by medieval walls with a gothic cathedral adorning the centre. It has an abundance of historical sights for you to uncover';
	$ogImageUrl = '/images/york/cobbled-lane-york-england.jpg';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/york.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../cotswolds';
	$viewMoreText = 'Cotswolds Travel Guide';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>