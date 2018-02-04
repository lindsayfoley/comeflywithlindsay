<?php 
	$fileName = 'paris';
	$metaTitle = '';
	$metaDescription = '';
	$ogImageUrl = '/images/' . $destination . '.jpg';		  
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/' . $fileName . '.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../destinations';
	$viewMoreText = 'View My Holiday Guides';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>