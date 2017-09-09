$.ajax({
	url: "http://spreadsheets.google.com/feeds/list/1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ/od6/public/values?alt=json",

	success : function(data) {
		console.log (data);
		

		var tableau = data.feed.entry;
		for (var i = 0; i<tableau.length;i++) {
			var prenom = tableau[i].gsx$prénoms.$t;
			var url = tableau[i].gsx$url.$t;
			
			$(".id"+i).html(prenom + "<br/><img src='" + url + "'/>")
		}


	},

	error : function(data) {
		console.log("error");
	}

})