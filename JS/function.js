
window.addEventListener("load", function () {
   var search = document.getElementById("search");
   var search_button = document.getElementById("search_button");
   var message_result = document.getElementById("message_result");
	
	search_button.addEventListener("click", function () {
		message_result.innerText = "recherche: " + search.value;
		//on crypte les données
		$val =  encodeURIComponent(search.value);
		request(val);
    });
});

// fonction pour envoyer la chaine de caractere au serveur
function request(search) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:9010/twitter_db.py?search=" + search);
    xhr.send(null);

}