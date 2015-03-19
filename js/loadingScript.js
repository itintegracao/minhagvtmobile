
$(document).on('pageshow', '#loadingpage',function(e,data){   
    var header = $.mobile.activePage.find("div[data-role='header']:visible");
	var headerHt = header.outerHeight();
	var viewport_height = $(window).height();
	var content_height = viewport_height - headerHt;
	
	var vp_width = $(window).width();
	var vp_height = $(window).height()-header.outerHeight(); 
	 
	var x = vp_height/2-74.5;
	var y = vp_width/2-74.5;
	
	$('#loading_page').height(content_height); 	
	$('#loading').css({'paddingTop': x+'px' });
	$('#loading').css({'paddingLeft': y+'px' });
	$(window).resize(function(){
		var header = $.mobile.activePage.find("div[data-role='header']:visible");
		var headerHt = header.outerHeight();
		var viewport_height = $(window).height();
		var content_height = viewport_height - headerHt;
		
		var vp_width = $(window).width();
		var vp_height = $(window).height()-header.outerHeight(); 
		 
		var x = vp_height/2-74.5;
		var y = vp_width/2-74.5;
		
		$('#loading_page').height(content_height); 	
		$('#loading').css({'paddingTop': x+'px' });
		$('#loading').css({'paddingLeft': y+'px' });
	
	});
	
});
