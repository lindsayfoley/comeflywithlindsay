<?php 
	$metaTitle = "Articles to help maximise your blog";
	$metaDescription = "I've documented my learnings from my travel blog in a series of blog posts to help bloggers get the most out of their sites and Instagram accounts.";
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/head.php");
?>
  
  <body id="blog-landing">
	  	  
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/header.php"); ?>
	
	<section>
		<main class="row">
			<div class="large-12 column">
				<article>
					<div id="intro">
						<h1>Tips for Bloggers</h1>
						<p>I've been documenting my learnings since starting my travel blog/site in November 2017 by creating a series of articles aimed at helping bloggers, particularly new ones to get the most out of their sites and social media.</p>		
					</div>
					
					<?php include($_SERVER['DOCUMENT_ROOT'] . "/articles/all-posts.php"); 						
					foreach($blogPostsArray as $x => $x_value) {
						echo $x_value;
					}	
					?>
		
				</article>
			</div>
		</main>
	</section>
	
<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/footer.php"); ?>
