
//des que la page est chargée
window.addEventListener("load", function () {
   var search = document.getElementById("search");
   var search_button = document.getElementById("search_button");
   var message_result = document.getElementById("message_result");
	
	//quand on clic sur le boutton
	search_button.addEventListener("click", function () {
		message_result.innerText = "recherche: " + search.value;
		//on encode les données
		var val =  encodeURIComponent(search.value);
		search(val);
    });
});

// fonction pour envoyer la chaine de caractere au serveur
var request = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send(null);
};

function search(val)  {
    var req = request("http://localhost:9010/index.html?search=" + val);
    var response = JSON.parse(req);
};
