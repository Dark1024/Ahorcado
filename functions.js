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

	draw();
	for (var i = 0; i < currentWord.length; i++) {
		if(currentWord.charAt(i) != letter){
			if (i == currentWord.length-1) {
				errors++;
				draw();
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
	var message="";
	if (errors < 5) {
		for (var i = 0; i < word.length; i++) {
			if (word.charAt(i) == "_") {
				break;
			}else{
				if((i == word.length -1) && errors < 5){
					message+="Ganaste el Juego!";
					alert(message);
					disableButtons();
				}
			}
		}
	}else{
		message+="Juego Terminado!";
		word=currentWord;
		disableButtons();
		alert(message);
		
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
	draw();
}

function disableButtons(){
	var elements = document.getElementsByClassName('letter-button');
	for (var i = 0; i < elements.length; i++) {
		elements[i].disabled=true;
	}
	draw();
}

function startGame(){
	disableButtons();
}

function draw(){
	var canvas = document.getElementById("myCanvas");
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');

		ctx.beginPath();
		ctx.clearRect(0,0,400,400);
		ctx.fillStyle = "rgb(0,0,0)";
		
		ctx.font = "bold 14px Verdana";
		ctx.fillText(word,140,140);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(80,270);
		ctx.lineTo(80,0);
		ctx.lineTo(180,0);
		ctx.lineTo(180,30);
		ctx.stroke();

		if(errors>=1){
			ctx.beginPath();
			ctx.arc(180,40,10,0,Math.PI*2,true);
			ctx.closePath();
			ctx.stroke();
		}

		if(errors>=2){
			ctx.beginPath();
			ctx.moveTo(180,50);
			ctx.lineTo(180,100);
			ctx.stroke();
		}

		if (errors>=3) {
			ctx.beginPath();
			ctx.moveTo(160,70);
			ctx.lineTo(180,60);
			ctx.lineTo(200,70);
			ctx.stroke();
		}

		if (errors>=4) {
			ctx.beginPath();
			ctx.moveTo(160,115);
			ctx.lineTo(165,115);
			ctx.lineTo(180,100);
			ctx.stroke();
		}

		if (errors>=5) {
			ctx.beginPath();
			ctx.moveTo(180,100);
			ctx.lineTo(195,115);
			ctx.lineTo(200,115);
			ctx.stroke();
		}
	}
}

function drawMessage(message){
	var canvas = document.getElementById("myCanvas");
	if(canvas.getContext){
		var ctx = canvas.getContext("2d");

		ctx.beginPath();
		ctx.clearRect(0,0,400,400);
		ctx.fillStyle = "rgb(0,0,0)";
		
		ctx.beginPath();
		ctx.font = "bold 16px Verdana";
		ctx.fillText(message,50,50);
		ctx.stroke();
	}
}