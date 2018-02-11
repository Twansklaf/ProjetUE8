
window.addEventListener("load", function () {
   var search = document.getElementById("search");
   var search_button = document.getElementById("search_button");
   var message_result = document.getElementById("message_result");
	
	search_button.addEventListener("click", function () {
		message_result.innerText = "recherche: " + search.value;
		$val =  encodeURIComponent(search.value);
		request(val);
    });
});

function request(search) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:9010/twitter_db.py?search=" + search);
    xhr.send(null); // La requête est prête, on envoie tout !

}