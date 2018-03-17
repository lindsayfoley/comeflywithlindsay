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
			<h2>I'm Travelling The World One Stop At A Time</h2>
			<p>With so many spectacular places to visit, I find the web inundated with travel advice websites, resources, reviews, etc. that can make the whole planning/booking process really stressful - especially with the fear of not picking the prime location or the right hotel!</p>
			<p>I decided to document my travels to give you an honest insight into where to go on holiday, advising on the good, the bad and the ugly. Let me be your travel <span class="crossed-out">guinea pig</span> guru and I'll tell you where I think is best to stay, what to see and what activities I recommend doing.</p>
			<a class="button small" href="destinations">View All Holiday Guides</a>
		</div>
		<main class="row">
			<div class="large-12 column">
				<article>
					<h2 class="text-center"><a href="destinations">Recent Holiday Guides</a></h2>
					
					<div class="row">
						<div class="large-6 column">
							<a href="paris"><img src="/images/homepage/eiffel-tower-paris-france-at-sunset.jpg" alt="The Eiffel Tower at sunset, France"></a>
						</div>
						<div class="large-6 column">
							<h2><a href="paris">Paris, France</a></h2>
							<p></p>
							<p>Paris is an extremely popular European destination for tourists, in fact it's one of the world's most visited cities! Renowned for fashion, gastronomy, art, culture, majestic monuments and much more, I was eager to see if much had changed since my first trip to this charming destination in 2003!</p>
							<a class="button small" href="paris">A Guide to Paris</a>
						</div>
					</div>					
					<hr>
					
					<div class="row">
						<div class="large-6 column">
							<a href="carvoeiro"><img src="/images/homepage/caves-scenery-at-tivoli-carvoeiro.jpg" alt="Cliffs and beautiful scenery around the Tivoli Carvoeiro Resort, Portugal"></a>
						</div>
						<div class="large-6 column">
							<h2><a href="carvoeiro">Carvoeiro, Portugal</a></h2>
							<p>Portugal is a sublime choice to visit in winter as the weather can reach highs of 19&deg;C with a decent amount of sunshine hours too. After researching areas to spend a few nights, I stumbled upon Carvoeiro which looked ideal!</p>
							<a class="button small" href="carvoeiro">Holiday Guide Portugal</a>
						</div>
					</div>					
					<hr>
					
					<div class="row">
						<div class="large-6 column">
							<a href="banff"><img src="images/homepage/snow-covered-trees-mountains-banff-canada.jpg" alt="Winter wonderland, snow topped mountains and trees in Banff - Alberta, Canada"></a>
						</div>
						<div class="large-6 column">
							<h2><a href="banff">Banff National Park, Canada</a></h2>
							<p>If you've ever wanted to visit the Canadian Rocky Mountains then Banff is the destination for you. It's located in the rockies, west of Calgary in the province of Alberta. The nearest airport is Calgary Airport and then it's a couple of hours drive to Banff.</p>
							<a class="button small" href="banff">Banff Holiday Guide</a>
						</div>
					</div>
					
				</article>
			</div>
		</main>
	</section>
	
<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/footer.php"); ?>
