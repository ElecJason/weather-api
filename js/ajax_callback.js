function makeAjaxCall(url, methodType){
	let promiseObj = new Promise(function(resolve, reject){
		console.log(url);
		let xmlhttp = new XMLHttpRequest();
		xmlhttp.open(methodType, url, true);
		xmlhttp.send();
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState === 4){
				if(xmlhttp.status === 200){
					console.log("xmlhttp done succesfully"); // debug als het goed is gegaan
					let serverResponse = xmlhttp.responseText; // server antwoord met string
					console.log(serverResponse); // debug
					resolve(serverResponse); // wordt via return promiseObj teruggeven
				} else {
					reject(xmlhttp.status);
					console.log("xmlhttp failed");
				}
			} else {
				console.log("xmlhttp processing going on");
			}
		}
		console.log("request send sucesfully");
	});
	return promiseObj;
}

function errorHandler(statusCode){
	console.log("failed with status", status);
}