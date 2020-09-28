//HTML ELEMENTS
let activate1 = document.getElementById('activate1');
let activate2 = document.getElementById('activate2');
let activate3 = document.getElementById('activate3');
activate1.addEventListener("click", getWeather1);
activate2.addEventListener("click", getWeather2);
activate3.addEventListener("click", getWeather3);


let completeData = document.getElementById('result');

//weather API http://weerlive.nl/delen.php
let apiAdress = "http://weerlive.nl/api/json-data-10min.php?key=";
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam"; // locatie als string
let url = apiAdress + key + locatie + geoLocation; // URL van API

function ShowWeather(JSONresponseFromAjax){
	let weatherObject = JSON.parse(weatherString)
}

function getWeather1(){
	console.log(url); //debug van IRL
	makeAjaxCall(url, "GET"). then (showWeather1, errorHandler);
}
function showWeather1(JSONresponseFromAjax){
	result.innerHTML = JSONresponseFromAjax;
}

function getWeather2(){
	makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}

function showWeather2(JSONresponseFromAjax){
	let weatherObject = JSON.parse(JSONresponseFromAjax);
	let completeData = ""; //maak een lege string
	for (const [key, value] of Object.entries(weatherObject.liveweer[0])) {
		console.log(`${key}: ${value}`); //debug naar console
		completeData += key + " : " + value +"<br>"; //maak string
		result.innerHTML = completeData; // string naar browser
	}
}

function getWeather3(){
	console.log(url); //debug van IRL
	makeAjaxCall(url, "GET"). then (showWeather3, errorHandler);
}

function showWeather3(JSONresponseFromAjax){
	let weatherObject = JSON.parse(JSONresponseFromAjax);
	let ditWeer =
		"Locatie: " +
		weatherObject.liveweer[0].plaats +
		"<br>Temparatuur = " +
		weatherObject.liveweer[0].temp + " &#176;C" +
		"<br>Verwachting: " +
		weatherObject.liveweer[0].samenv +
		"<br>Lucht: " +
		weatherObject.liveweer[0].image + 
		'<img src="iconen/' + weatherObject.liveweer[0].image + '.png"<br>' +
		'<br>Kans op neerslag: '
		weatherObject.liveweer[0].d0neerslag + "%";


		;
		
	result.innerHTML = ditWeer;
}
