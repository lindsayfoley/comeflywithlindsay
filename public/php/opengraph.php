<?php
	
class OpenGraphTags {

		
	function metaTagMaker($type, $property) {
		return "<meta type='og:" + $type + "' property='" + $property + "'>";
	}
	
	function createMetaTag() {
		
		$metaTags = array();
		
		aray_push(OpenGraphTags.metaTagMaker('url', 'website'));
		aray_push(OpenGraphTags.metaTagMaker('type', 'website'));
		aray_push(OpenGraphTags.metaTagMaker('title', 'website'));
		aray_push(OpenGraphTags.metaTagMaker('description', 'website'));
		aray_push(OpenGraphTags.metaTagMaker('image', 'website'));
		
		return join(" ", $metaTags);
	}
}




?>