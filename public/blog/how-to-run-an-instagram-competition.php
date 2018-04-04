<?php 
	$fileName = 'how-to-run-an-instagram-competition';
	$metaTitle = 'How to Run an Instagram Competition';
	$metaDescription = 'Running an Instagram competition can help to increase your following. Here\'s what I\'ve learned about maximising giveaways to run a successful contest.';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/head.php');
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-start.php');
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../blog/md/' . $fileName . '.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = '../how-to-be-successful-on-instagram';
	$viewMoreText = 'My Instagram Success Secrets';
	include($_SERVER['DOCUMENT_ROOT'] . '/structure/blog-post-end.php'); 
?>

