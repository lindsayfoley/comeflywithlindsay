<?php 
	$newPost = 'paris';
	$newPostFile = fopen($newPost . '.txt', 'w') 
	$metaTitle = '';
	$metaDescription = '';
	$ogImageUrl = '/images/';		  
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/' . $newPost . '.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../destinations';
	$viewMoreText = 'View My Holiday Guides';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>