// The backend that uses Wikipedia's Query API to search all articles pertaining to a certain topic

$( 'button' ).on( 'click' , function () {
    var searchTerm = $( 'input' ).val();
	// API call
	var wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + searchTerm;
	
	$.ajax( {
		url: wikiURL, 
		dataType: "jsonp",
		success: function( data ) {
			// store the query results into a variable
		    var results = data.query.search;
		    	// display the resulting query as a JSON in the developer console
		    console.log(results);
		    
		    for( var i = 0; i< results.length; i++ ) {
		        
		        var titletext = results[i]['title'];
		        // Make a hyperlink to the article
		        $( 'body' ).append("<br><a href='"+ "https://en.wikipedia.org/wiki/"+titletext.split(' ').join('_') + "'> "+titletext+" </a>");
		        // Display the time of the most recent edit to each article
		        $( 'body' ).append("<h4> latest edit: <small>" + results[i]['timestamp'] + "</small></h4>");
		        
		    }
		}
	} );
} );

	
