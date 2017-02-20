/* jquery for the lightbox plugin */

$(document).ready(function() {

	$('#gallery').lightGallery({selector: 'a'});
	
	/* jquery for the photo hover interaction */
	
	$('#gallery img').hover(function(){
		$(this).animate({
			borderRadius: '-=170px'
	},200);
	},function(){
		$(this).animate({
			borderRadius: '+=190px'
		},200);
		});
	});
	
	
 
