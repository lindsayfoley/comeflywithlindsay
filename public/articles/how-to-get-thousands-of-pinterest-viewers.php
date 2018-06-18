<?php 
	$fileName = 'how-to-get-thousands-of-pinterest-viewers';
	$metaTitle = 'How to Get Thousands of Pinterest Viewers';
	$metaDescription = 'Pinterest is a must for all bloggers out there, growing your account and increasing your monthly unique viewers could not be easier with these helpful tips.';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../articles/md/' . $fileName . '.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../how-to-be-successful-on-instagram';
	$viewMoreText = 'My Instagram Success Secrets';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>

