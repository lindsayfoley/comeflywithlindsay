<?php 

	class Article {
		
		public $subject;
		public $date;
		public $title;
		public $description;
		public $callToAction;
		
		public function __construct($subject, $title, $date, $description, $callToAction) {
			$this->link = $subject;
			$this->title = $title;
			$this->date = $date;
			$this->description = $description;
			$this->cta = $callToAction;
		}
		
		public function createArticleSection() {
			return '<hr>
					<div class="row">
						<div class="large-12 column">
							<h2><a href="/articles/'. $this->link . '">' . $this->title . '</a></h2>
							<h5>' . $this->date . '</h5>
							<p>' . $this->description . '</p>
							<a class="button small" href="/articles/' . $this->link . '">' . $this->cta . '</a>
						</div>
					</div>';
		}
	}
	
	$intagramCompetiton = new Article('how-to-run-an-instagram-competition', 'How to Run an Instagram Competition', 'April 10, 2018', 'Instagram competitions or giveaways are a great tactic to increase brand awareness and an effective way of gaining more followers. It\'s key to collaborate with a small brand, one who sells products that appeal to your target audience, and of course a brand who has much less followers than you! This article focuses on my key takeaways after running my initial Instagram competition.', 'How to Run an Instagram Competition');
	
	$instagramSuccess = new Article('how-to-be-successful-on-instagram', 'How to be Successful on Instagram', 'April 5, 2018', 'If you are planning on creating social media accounts to promote your blog, I recommend focusing most of your time and energy on Instagram. It\'s a great platform to build a solid following on because it\'s simple to use. If you\'re already posting high quality, relevant content with appropriate hashtags, there are some simple methods you can implement to get the most engagement out of each post.', 'Read My Instagram Success Secrets');

	$blogSuccess = new Article('how-to-make-your-blog-more-successful', 'Making Your Blog More Successful', 'March 24, 2018', 'I\'m a Web Developer by day and I\'ve been in this profession for 7 years working for a variety of businesses, predominantly in the retail and travel sectors. I have gained a lot of knowledge about what\'s required to create a successful site, so I\'ve created this post to share with you web best practises and to guide you into creating better content that\'s going to help your blog work harder for you.', 'How to Make Your Blog More Successful');
	
	
	$blogPostsArray = array();
	
	array_push($blogPostsArray, $intagramCompetiton->createArticleSection(), $instagramSuccess->createArticleSection(), $blogSuccess->createArticleSection());
	s	
?>