<?php 
	$fileName = 'how-to-be-successful-on-instagram';
	$metaTitle = 'How to be successful on Instagram and see the best results';
	$metaDescription = 'Being successful on Instagram wont happen over night, but I can give you tips on getting the most engagement from posts and  help you increase your followers';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../blog/md/' . $fileName . '.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../how-to-make-your-blog-more-successful';
	$viewMoreText = 'Make Your Blog More Successful';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>