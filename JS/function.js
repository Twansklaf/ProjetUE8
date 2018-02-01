window.addEventListener("load", function () {
   var search = document.getElementById("search");
   var search_button = document.getElementById("search_button");
   var message_result = document.getElementById("message_result");
	
	search_button.addEventListener("click", function () {
		message_result.innerText = search.value;
    });
});
