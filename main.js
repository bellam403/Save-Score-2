function back() {
window.location = "https://bellam403.github.io/Save-Score-1/";
}

function getScore()
{
	score = localStorage.getItem("score");	
	document.getElementById("update").innerHTML = "<h1>Score: " + score +"</h1>";
}
