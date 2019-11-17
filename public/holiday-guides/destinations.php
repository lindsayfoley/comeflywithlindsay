<?php 
	class Destination {
		
		public $country;
		public $image;
		public $altText;
		public $title;
		public $description;
		public $callToAction;
		
		public function __construct($country, $image, $altText, $title, $description, $callToAction) {
			$this->link = $country;
			$this->image = $image;
			$this->altText = $altText;
			$this->title = $title;
			$this->description = $description;
			$this->cta = $callToAction;
		}
		
		public function createDestinationSection() {
			return '<hr>
					<div class="row">
						<div class="large-6 column">
							<a href="/holiday-guides/' . $this->link . '"><img src="/images/homepage/' . $this->image . '.jpg" alt="' . $this->altText . '"></a>
						</div>
						<div class="large-6 column">
							<h2><a href="/holiday-guides/'. $this->link . '">' . $this->title . '</a></h2>
							<p>' . $this->description . '</p>
							<a class="button small" href="/holiday-guides/' . $this->link . '">' . $this->cta . '</a>
						</div>
					</div>';
		}
	}


		$newForest = new Destination('new-forest', 'ponies-new-forest', 'Majestic wild ponies in the New Forest, England', 'New Forest, England', 'The New Forest is an area steeped in rich history; once a royal hunting ground for William the Conqueror and the site for major airfields during WW2. It has been influenced throughout the centuries, evolving into the extraordinary National Park it is today, receiving worldwide recognition for being a unique area.', 'New Forest Travel Guide');
			
		$croatia = new Destination('croatia', 'trogir-town-croatia', 'Views of the town of Trogir, Croatia', 'Dalmatia Region, Croatia', 'I heard a lot of great things about Croatia and its many islands, so I was super excited when we were invited to a wedding in the stunning region of Dalmatia. We spent a week in Croatia visiting Split, Hvar, Brac and Trogir in September and the weather was excellent, it was hot and sunny like summer for us in London.', 'Croatia Holiday Guide');
	
		$lasVegas = new Destination('las-vegas', 'las-vegas-strip-at-night', 'Las Vegas strip sparkling at night', 'Las Vegas, U.S.A', 'If you\'re looking for a sunny and lively destination to spend a few nights, Las Vegas is definitely the place to go. There\'s a vast amount of excellent bars and restaurants, world famous shows, endless casinos and extremely creative hotels - you certainly won\'t run out of things to do in Las Vegas!', 'My Guide to Las Vegas');
	
	$cornwall = new Destination('cornwall', 'beach-newquay-cornwall', 'The magnificent beach at Watergate Bay', 'Cornwall, England', 'Mawgan Porth is a small town located in Newquay, Cornwall and it has some of the most heavenly, sandy beaches complete with ombre blue waters in England. It\'s a great destination for an England staycation or a quick trip out of the city as you can easily be fooled into thinking you are somewhere exotic! ', 'A Guide to Cornwall');

	$cotswolds = new Destination('cotswolds', 'sudeley-castle-cotswolds', 'Sudeley Castle in the Cotswolds', 'Cotswolds, England', 'The Cotswolds is the ideal destination for a quick getaway! It\'s one of the country’s most beautiful landscapes with traditional villages and buildings made from warm, honey-coloured Cotswold stone. Prepare to swap the hustle and bustle of city life for the peaceful English countryside and medieval towns.', 'Cotswolds Travel Guide');
		
	$paris = new Destination('paris', 'eiffel-tower-paris-france-at-sunset', 'The Eiffel Tower at sunset, France', 'Paris, France', 'Paris undoubtedly offers the largest concentration of tourist attractions in France. This wonderful city is filled with remarkable historical monuments and some of the most iconic complex structures such as the world renowned Eiffel Tower or the glass and steel pyramids of the Louvre.', 'A Guide to Paris');
	
	$carvoeiro = new Destination('carvoeiro', 'caves-scenery-at-tivoli-carvoeiro', 'Cliffs and beautiful scenery around the Tivoli Carvoeiro Resort, Portugal', 'Carvoeiro, Portugal', 'Many of you may be unfamiliar with this little town in Lagoa. Carvoeiro is an idyllic area in the Algarve and one of the most beautiful places I\'ve visited in Europe. Carvoeiro was our winter escape in December 2017 and we didn\'t expect it to be so peaceful or to have so much stunning scenery!', 'Carvoeiro Holiday Guide');

	$afternoonTea = new Destination('afternoon-tea-london', 'afternoon-tea-london', 'Afternoon tea at Fortnum and Mason in London, England', 'Afternoon Tea, London', 'With so many places to choose from including top hotels, tea rooms, upmarket department stores and even museums! Afternoon tea in London can be found almost anywhere - so here are a few of my top picks which have been vigorously tried and tested (of course!) to help narrow things down.', 'London Afternoon Tea Guide');

	$calgary = new Destination('calgary', 'olympic-plaza-calgary', 'Olympic Plaza in Downtown Calgary', 'Downtown Calgary, Canada', 'Typically used as a base before heading to the Canadian Rockies in Banff, Calgary\'s city centre is good for a quick getaway or a weekend break if you\'re looking for a quiet destination. It\'s divided into several neighbourhoods with good shopping centres, dining options, museums, as well as spas.', 'A Guide to Downtown Calgary');

	$banff = new Destination('banff', 'snow-covered-trees-mountains-banff-canada', 'Winter wonderland, snow topped mountains and trees in Banff - Alberta, Canada', 'Banff National Park, Canada', 'Filled with incredible snow tipped mountains in every direction you look, Banff was my second stop on my 2 week holiday to the West coast of Canada. I visited Banff National Park in October to see the famous Rocky Mountains and picturesque lakes and it was truly one of the best experiences ever.', 'Banff Holiday Guide');

	$whistler = new Destination('whistler', 'autumnal-colours-whistler-village-british-columbia', 'Stunning autumnal coloured trees in Whistler - British Columbia, Canada', 'Whistler, Canada', 'Hiking, biking, skiing... definitely a must stop destination for all adventure seekers! Whistler is located in the Coast Mountains of British Columbia and is home to one of the largest ski resorts in America. It has a cute village with shops, restaurants and bars, making it the perfect location to visit at any time of year.', 'A Guide to Whistler');

	$vancouver = new Destination('vancouver', 'port-view-stanley-park-vancouver', 'A view of the port and boats taken in Stanley Park', 'Downtown Vancouver, Canada', 'Cycling around the famous Stanley Park, roaming around Gastown and strolling through the historical Yaletown - these are just a few of my favourite moments spent in this vibrant city. Vancouver really has it all, it\'s a cosmopolitan city surrounded by the ocean, mountain ranges and exquisite parks.', 'Vancouver Holiday Guide');
	
	$allDestinations = array();
	
	array_push($allDestinations, $newForest->createDestinationSection(), $croatia->createDestinationSection(), $lasVegas->createDestinationSection(), $cornwall->createDestinationSection(), $cotswolds->createDestinationSection(), $paris->createDestinationSection(), $carvoeiro->createDestinationSection(), $afternoonTea->createDestinationSection(), $calgary->createDestinationSection(), $banff->createDestinationSection(), $whistler->createDestinationSection(), $vancouver->createDestinationSection());

?>