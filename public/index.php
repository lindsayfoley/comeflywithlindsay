<?php 
	$metaTitle = "Welcome to my Travel Blog";
	$metaDescription = "I have been documenting my travel adventures to give you an insight into the destinations I visit, covering where to stay, where to eat and what to see.";
	$ogImageUrl = "/images/vancouver/cycling-around-stanley-park-in-vancouver.jpg";		  
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/head.php");
?>
  
  <body id="homepage">
	  
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/header.php"); ?>

	<div id="featured-img-mobile" class="row"></div>
	
	<section>
		<a href="destinations"><h1>Travel Inspiration &amp; Guides</h1></a>
		<div id="purpose" class="text-center">
			<h2>I'm Travelling The Globe One Step At A Time</h2>
			<p>With so many spectacular places to visit, I find the web inundated with travel advice websites, resources, reviews, etc. that can make the whole planning/booking process really stressful - especially with the fear of not picking the prime location or the right hotel!</p>
			<p>I decided to document my travels to give you an honest insight into where to go on holiday, advising on the good, the bad and the ugly. Let me be your travel <span class="crossed-out">guinea pig</span> guru and I'll tell you where I think is best to stay, what to see and what activities I recommend doing.</p>
			<a class="button small" href="destinations">View All Holiday Guides</a>
		</div>
		<main class="row">
			<div class="large-12 column">
				<article>
					<h2 class="text-center"><a href="destinations">Recent Holiday Guides</a></h2>

					<?php include($_SERVER['DOCUMENT_ROOT'] . "/holiday-guides/destinations.php"); 
					foreach( array_slice($allDestinations, 0, 3) as $el) {
						echo $el;
					}
					?>
					
				</article>
			</div>
		</main>
	</section>
	
<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/footer.php"); ?>
