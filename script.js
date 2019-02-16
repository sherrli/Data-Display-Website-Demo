$( 'button' ).on( 'click' , function () {
    var searchTerm = $( 'input' ).val();

	var wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + searchTerm;
	
	$.ajax( {
		url: wikiURL, 
		dataType: "jsonp",
		success: function( data ) {
		    var results = data.query.search;
		    
		    console.log(results);
		    
		    for( var i = 0; i< results.length; i++ ) {
		        
		        var titletext = results[i]['title'];
		        
		        $( 'body' ).append("<br><a href='"+ "https://en.wikipedia.org/wiki/"+titletext.split(' ').join('_') + "'> "+titletext+" </a>");
		        
		        $( 'body' ).append("<h4> latest edit: <small>" + results[i]['timestamp'] + "</small></h4>");
		        
		    }
		}
	} );
} );

	
