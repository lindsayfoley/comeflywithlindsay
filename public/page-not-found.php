<?php 
	$metaTitle = "Page Not Found";
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/head.php");
?>

  <body>
	  
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/header.php"); ?>
	
	<section>
		<main class="row">
			<div class="large-12 column">
				<article>
					<div class="row">
						<div class="large-6 column">
							<h1>Sorry, that page doesn't exist!</h1>
							<p>Where would you like to go next?</p>
							<p><a class="button small" href="/">Home</a></p>
							<p><a class="button small" href="about">Get In Touch</a></p>
							<p><a class="button small" href="destinations">Browse Destinations</a></p>
						</div>
					</div>
				</article>
			</div>
		</main>
	</section>
	
<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/footer.php"); ?>
