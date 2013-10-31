word="";
currentWord="";
listOfWords=["bombardeo","vivienda","tribuna","destruir","gratis","casa","tercero","debate","firmar","siguiente","personaje","trabajar","gubernamental","aceptable","aprovechar","secadora","descuento","apoyar","calidad","transparencia","preocupacion","avion","ferrocarril","dolor","muerte","vida","publico","privado","seguridad","puente","fuente","recibir","sistema","computadora","hospital","emergencia","delincuente","diversion","pizza","hambuerguesa","perro","gato","burro","guacamayo","artista","escultor","ornitorrinco","orritonaringologia","orritonaringologo","espectador","baloncesto","natacion","rugby","tenis","yoga","fovorito","notificar","voluntad","dolar","euro","lempira","yenes","molestar","universidad","colegio","escuela","maravilla","comedor","cocina","submarino","autobus","autobanco","comercial","autopista","mandarin","ingles","frances","italiano"];
errors = 0;

function setLetter(letter){
	var start = 0;
	while(start < currentWord.length){
		var temp = currentWord.indexOf(letter,start);
		if(temp == -1){
			break;
		}
		word = setCharAt(word,temp,letter);
		start = temp + 1;
	}

	for (var i = 0; i < currentWord.length; i++) {
		if(currentWord.charAt(i) != letter){
			if (i == currentWord.length-1) {
				errors++;
			}
		}else{
			break;
		}
	}

	document.getElementById(("button-"+letter)).disabled=true;
	console.log(word);
	console.log("Errors: " + errors);
	valiteWinGame();
}

function valiteWinGame(){
	if (errors < 5) {
		for (var i = 0; i < word.length; i++) {
			if (word.charAt(i) == "_") {
				break;
			}else{
				if((i == word.length -1) && errors < 5){
					alert("Ganaste el Juego!!!!");
					disableButtons();
				}
			}
		}
	}else{
		alert("Juego Terminado!!!");
		disableButtons();
	}
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function setCurrentWord(){
	var index = 0;
	do{
		index = Math.floor(Math.random()*100);		
	}while(index>=77);
	console.log(index);
	currentWord = listOfWords[index];
	word="";
	errors = 0;

	document.getElementById("button-play").value = "Jugar Otra Vez!";
	for (var i = currentWord.length - 1; i >= 0; i--) {
		word+="_";
	};

	console.log(currentWord);
	enableButtons();
}

function enableButtons(){
	var elements = document.getElementsByClassName('letter-button');
	for (var i = 0; i < elements.length; i++) {
		elements[i].disabled=false;
	}
	setCanvas();
}

function disableButtons(){
	var elements = document.getElementsByClassName('letter-button');
	for (var i = 0; i < elements.length; i++) {
		elements[i].disabled=true;
	}
}

function setCanvas(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext('2d');
	ctx.fillStyle='#FF0000';
	ctx.fillRect(0,0,500,500)
}

function startGame(){
	setCanvas();
	disableButtons();
}