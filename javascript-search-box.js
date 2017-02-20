/* javascript for the search box functionality */

$(document).ready(function(){
	
	$('#gallery li').each(function(){
		$(this).attr('data-search-term',
		$(this).text().toLowerCase());
	});
	
	$('#search').on('keyup',
	function(){
		
		var searchTerm = 
		$(this).val().toLowerCase();
		
		$('#gallery li').each(function(){
		if($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0
		|| searchTerm.length < 1) {
			$(this).show('.pic');
		} else {
			$(this).hide('.pic');
		}
		});
		});

	});
	
	
