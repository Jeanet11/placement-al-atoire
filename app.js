$.ajax({
	// url de la google sheet contennat le tableau avec les noms et images
	

	success : function(data) {
// fonction qui effectue un tri aléatoire du tableau
function shuffle(arra1) {
	var ctr = arra1.length, temp, index;

// tant qu'il y a des elements dans l'array
while (ctr > 0) {
// on prend un indice au hasard
index = Math.floor(Math.random() * ctr);
// on désincrémente ctr de 1 en 1
ctr--;
// et on échange le dernier élément avec lui
temp = arra1[ctr];
arra1[ctr] = arra1[index];
arra1[index] = temp;
}
return arra1;
}

//on récupère le tableau avec les 15 objets - eleves		
var tableau = data.feed.entry;
var tableauMelange = shuffle(tableau);


for (var i = 0; i<tableauMelange.length;i++) {
	var prenom = tableauMelange[i].gsx$prénoms.$t;
	var url = tableauMelange[i].gsx$url.$t;

	// insertion dans chaque case 
	$(".id"+i).html(prenom + "<br/><img src='" + url + "'/>");
}

}
});

