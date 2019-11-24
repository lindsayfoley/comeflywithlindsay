<?php 
	$metaTitle = "Travel Guides for a Variety of Destinations";
	$metaDescription = "Travel guides on Portugal, Banff, Whistler and other holiday destinations on Come Fly With Lindsay; a travel blog with handy guides to help plan your holidays.";
	$ogImageUrl = "/images/destinations/carvoeiro-town-and-beach.jpg";		  
	include($_SERVER['DOCUMENT_ROOT'] . "/structure/head.php");
?>
  
  <body id="destinations">
	  	  
	<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/header.php"); ?>
	
	<section>
		<main class="row">
			<div class="large-12 column">
				<article>
					<div id="intro">
						<h1 class="text-center">Travel Guides to Destinations Around the World</h1>
						<p>I'm making my way through my travel bucket list and I'm taking you all with me!</p>
						<p>These travel guides will provide you with tips and advice on your upcoming holidays, as well as inspire you about some incredible destinations you may not have considered visiting.</p>		
					</div>
					
					<?php include($_SERVER['DOCUMENT_ROOT'] . "/holiday-guides/destinations.php"); 
					foreach($allDestinations as $x => $x_value) {
						echo $x_value;
					}				
					?>
		
				</article>
			</div>
		</main>
	</section>
	<button id="toTop">&#8593;</button>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/structure/footer.php"); ?>
