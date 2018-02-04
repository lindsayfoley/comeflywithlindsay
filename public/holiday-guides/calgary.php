<?php 
	$metaTitle = "Downtown Calgary Travel Guide";
	$metaDescription = "My insiders guide to spending a couple of nights in Downtown Calgary in Alberta, Canada. Read my blog post to prepare for your short stay in Calgary.";
	$ogImageUrl = "/images/calgary/olympic-plaza-calgary.jpg";		  
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/head.php");
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/blog-post-start.php");
	
	// Blog post body
	require_once '../vendor/autoload.php';
	$Parsedown = new Parsedown();
	$text = file_get_contents('../holiday-guides/md/calgary.txt');
	echo $Parsedown->text($text);
	// /Blog post body
	
	$viewMoreLink = "../banff";
	$viewMoreText = "View Banff Guide";	
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/blog-post-end.php"); 
?>
