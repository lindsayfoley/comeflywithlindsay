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
			<h2>Travelling The World One Stop At A Time</h2>
			<p>With so many spectacular places to visit, I find the web inundated with travel information, resources, reviews, etc. that can make the whole planning/booking process really stressful - especially with the fear of not picking the prime location or the right hotel!</p>
			<p>I decided to document my travels to give you an honest insight into areas that I visit and advise on the good, the bad and the ugly. So let me be your travel <span class="crossed-out">guinea pig</span> guru and I'll tell you where I think is best to stay, what to see and what activities I recommend doing.</p>
		</div>
		<main class="row">
			<div class="large-12 column">
				<article>
					<h2 class="text-center"><a href="destinations">Recent Holiday Guides</a></h2>
					<div class="row">
						<div class="large-6 column">
							<a href="/holiday-guides/carvoeiro"><img src="/images/homepage/caves-scenery-at-tivoli-carvoeiro.jpg" alt="Cliffs and beautiful scenery around the Tivoli Carvoeiro Resort, Portugal"></a>
						</div>
						<div class="large-6 column">
							<h2><a href="/holiday-guides/carvoeiro">Carvoeiro, Portugal</a></h2>
							<p>Many of you may be unfamiliar with this little town in Lagao. Carvoeiro is an idyllic area in the Algarve and one of the most beautiful places I've visited in Europe. Carvoeiro was our winter escape in December 2017 and we didn't expect it to be so peaceful or to have so much stunning scenery!</p>
							<a class="button small" href="/holiday-guides/carvoeiro">Carvoeiro Holiday Guide</a>
						</div>
					</div>					
					<hr>
					
					<div class="row">
						<div class="large-6 column">
							<a href="/holiday-guides/banff"><img src="images/homepage/snow-covered-trees-mountains-banff-canada.jpg" alt="Winter wonderland, snow topped mountains and trees in Banff - Alberta, Canada"></a>
						</div>
						<div class="large-6 column">
							<h2><a href="/holiday-guides/banff">Banff National Park, Canada</a></h2>
							<p>Filled with incredible snow tipped mountains in every direction you look, Banff was my second stop on my two week holiday to the West coast of Canada. I visited Banff National Park in October to see the famous Rocky Mountains and picturesque lakes and it was truly one of the best holidays I've ever had.</p>
							<a class="button small" href="/holiday-guides/banff">Banff Holiday Guide</a>
						</div>
					</div>

					<hr>
					<div class="row">
						<div class="large-6 column">
							<a href="/holiday-guides/vancouver"><img src="images/homepage/port-view-stanley-park-vancouver.jpg" alt="A view of the port and boats taken in Stanley Park"></a>
						</div>
						<div class="large-6 column">
							<h2><a href="/holiday-guides/vancouver">Downtown Vancouver, Canada</a></h2>
							<p>Cycling around the famous Stanley Park, roaming around Gastown and the historical Yaletown - these are just a few of my favourite moments spent in this vibrant city. There's an abundance of things to do in Downtown Vancouver and hopefully this guide will help to inform and inspire you.</p>
							<a class="button small" href="/holiday-guides/vancouver">Vancouver Holiday Guide</a>
						</div>
					</div>
				</article>
			</div>
		</main>
	</section>
	
<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/footer.php"); ?>
