<?php 
	$fileName = 'how-to-make-your-blog-more-successful';
	$metaTitle = 'How to Make Your Blog Successful';
	$metaDescription = 'Every blogger wants to make their blog popular and overall a success. Here are my recommendations from my background as Web Developer to improve your blog.';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../articles/md/' . $fileName . '.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../how-to-run-an-instagram-competition';
	$viewMoreText = 'How to Do an Instagram Giveaway';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>