/*Variables a utilizar */
var canvas = document.getElementById("Lienzo");
var ctx = canvas.getContext("2d")
var ballRadius = 15; /*Variable que controla el tamaño de la pelota */
var x = canvas.width/2; /*Variable busca el centro en el eje x del canvas */
var y = canvas.height/2; /*Variable busca el centro en el eje y del canvas */
var dx = 5; /*Variable que controla la velocidad de la pelota en el eje x*/
var dy = -5; /*Variable que controla la velocidad de la pelota en el eje y*/
var vary1 = 80; /*Controla donde se va a empezar a dibujar la barra izquierda en base al eje y*/
var vary2 = 80; /*Controla donde se va a empezar a dibujar la barra derecha en base al eje y*/
var up = false; /*Verifica el estado de la tecla "arriba"*/
var down = false; /*Verifica el estado de la tecla "abajo"*/
var puntoy = 0; /*Puntaje del jugador*/
var puntoe = 0; /*Puntaje del enemigo*/
var nivel = 1; /*Controla el nivel actual*/
var VelocidadE = 3;  /*Controla la velocidad del enemigo*/
var cuadradito= 200; /*Controla desde donde se empieza a dibujar el obstaculo en base al eje y*/
var movCuadradito= 2; /*Controla la velocidad del obstaculo*/
var obstaculo = false; /*Guarda el estado del obstaculo (activado/desactivado)*/
alert ('Buenas! Te vas a enfrentar al mas pelele. Nivel:' +nivel);
/* Esta funcion se encarga del dibujado*/

function draw() {
var middleI = (vary1 +150)/2;
var middleD = (vary2 + 150)/2;
	/*Este bloque dibuja la pelotita */
ctx.clearRect(0, 0, canvas.width, canvas.height);
	
ctx.beginPath();
ctx.arc(x, y, ballRadius, 0, Math.PI*2);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();  
x += dx;
y += dy;
/*este bloque dibuja la barra izquierda*/
ctx.beginPath();
ctx.rect(20, vary1, 20, 150);
ctx.fillStyle = "#643ff4";
ctx.fill();
ctx.closePath();

/*este bloque dibuja la barra derecha*/
ctx.rect(760, vary2, 20, 150);
ctx.fillStyle = "#643ff4";
ctx.fill();
ctx.closePath();
/*los bloques siguientes dibuja la linea punteada del medio */
ctx.beginPath();
ctx.rect(400, 0, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 25, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 55, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 80, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 105, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 130, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 155, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 180, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 205, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 230, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 255, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 280, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 305, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 330, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 355, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 380, 5, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
/*Dibujado del obstaculo */
if (obstaculo == true){
ctx.beginPath();
ctx.rect(380, cuadradito, 40, 40);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
/*movimiento del  obstaculo */
cuadradito += movCuadradito;
 if (cuadradito+40 > canvas.height) {
 		movCuadradito= -movCuadradito;
 } else if (cuadradito < 0) {
 	movCuadradito = 2;
 }
}
/* este bloque simula  el rebote de la bola*/
if(y  > canvas.height-ballRadius || y  < ballRadius) {
    dy = -dy;
    var audio = document.getElementById("bolapared");

    audio.play();
} else if (y  > vary2 && y  < vary2 + 150  && x  == 760 ) {
	 dx = -dx;
	 if (y  > middleD + 25 ){
	 	dy = dy + 4 ;
	 	
	 	 } else if (y  < middleD - 25) {
	 	 	dy = dy - 4;
	 	 	
	 	 } else if (dy<0) {
	 	 	dy = -2 ;
	 	 } else {
	 	 	dy = 2;
	 	 }
	 	 }
 else if (x + dx > canvas.width-ballRadius)  {
	puntoy++
	x = canvas.width/2;
	y = canvas.height/2;
	dx = 8;
	dy = -2;
	vary1 = 80;
	vary2 = 80;
} else if (y > vary1 && y < vary1 + 150  && x  == 40 ){
	dx = -dx ;
	if (y < middleI - 25 ){
	 	dy = dy - 4;
	 	
	 	 } else if (y > middleI + 25) {
	 	 	dy = dy + 4;
	 	 	
	 	 } else if (dy<0) {
	 	 	dy = -2;
	 	 } else {
	 	 	dy = 2;
	 	 }
	 }
   else if (x  < 0 + ballRadius) {
     
     puntoe++;
     x = canvas.width/2;
     y = canvas.height/2;
	 dx = -8;
	 dy = -2;
	 vary1 = 80;
	 vary2 = 80;
    } else if (obstaculo == true) {
    if (y + ballRadius > cuadradito && y + ballRadius < cuadradito + 40 && x + ballRadius > 380 && x + ballRadius < 380 +40) {
    	  	dx = -dx;
    	  	dy = -dy;
    } 
}
/*"escuchador" del teclado y movimiento de barra izquierda*/
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        up = true;
    }
    else if(e.keyCode == 38) {
        down = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        up = false;
    }
    else if(e.keyCode == 38) {
        down = false;
    }
}
if (up==true && vary1<=250) {
	vary1 = vary1 + 12;
} else if ( down == true && vary1>0) {
	vary1 = vary1 - 12;
}
/*Movimiento de la barra enemiga (derecha)*/
if (y > vary2 + 75) {
	vary2 = vary2 + VelocidadE;
} else if (y < vary2 + 75){
	vary2 =  vary2 - VelocidadE;
} 
/*Dibujado de tabla de puntaje*/
switch (puntoy) {
	case 0:
	ctx.beginPath();
ctx.rect(200, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 120, 20, 80);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(260, 120, 20, 80);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break
case 1:
ctx.beginPath();
ctx.rect(230, 120, 20, 90);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath()
	
ctx.beginPath();
ctx.rect(200, 100, 50, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();	
	
ctx.beginPath();
ctx.rect(205, 200, 70, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break	
case 2:
 ctx.beginPath();
ctx.rect(200, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 160, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(260, 120, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break
case 3:

	 ctx.beginPath();
ctx.rect(200, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(260, 160, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(260, 120, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break
case 4:
	 
ctx.beginPath();
ctx.rect(200, 100, 20, 70);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(260, 100, 20, 120);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();		
	break
case 5:
  ctx.beginPath();
ctx.rect(200, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(260, 160, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 120, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break
case 6:
  ctx.beginPath();
ctx.rect(200, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(260, 160, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 120, 20, 80);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	
	break

case 7:
ctx.beginPath();
ctx.rect(230, 120, 20, 90);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath()
	
ctx.beginPath();
ctx.rect(200, 100, 50, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();	
	break	
}

switch (puntoe) {
	case 0:
	ctx.beginPath();
ctx.rect(520, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 120, 20, 80);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(580, 120, 20, 80);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break
case 1:
ctx.beginPath();
ctx.rect(550, 120, 20, 90);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath()
	
ctx.beginPath();
ctx.rect(520, 100, 50, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();	
	
ctx.beginPath();
ctx.rect(525, 200, 70, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break	
case 2:
 ctx.beginPath();
ctx.rect(520, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 160, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(580, 120, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break
case 3:

	 ctx.beginPath();
ctx.rect(520, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(580, 160, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(580, 120, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break
case 4:
	 
ctx.beginPath();
ctx.rect(520, 100, 20, 70);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(580, 100, 20, 120);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();		
	break
case 5:
  ctx.beginPath();
ctx.rect(520, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(580, 160, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 120, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	break
case 6:
  ctx.beginPath();
ctx.rect(520, 100, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 200, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(580, 160, 20, 40);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 120, 20, 80);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(520, 150, 80, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();
	
	break

case 7:
ctx.beginPath();
ctx.rect(550, 120, 20, 90);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath()
	
ctx.beginPath();
ctx.rect(520, 100, 50, 20);
ctx.fillStyle = "#DEDEDE";
ctx.fill();
ctx.closePath();	
	break
}
/*Selector de nivel segun puntaje propio o enemigo*/
if (puntoy == 7 ) {
    puntoy = 0;
	puntoe = 0;
	if (nivel ==1 ) {
	VelocidadE = 3;
	nivel++
	obstaculo = true;
	alert ("De una wachin pasaste al nivel: " +nivel + ".Te vas a enfrentar a uno mas piola. Pssstt... Al obstaculo se la suda las leyes de la fisica");
} else if (nivel == 2) {
 VelocidadE = 5;
 nivel++;
 alert ("De una wachin pasaste al nivel: " + nivel +" .Te vas a enfrentar al mas chingon.");
} else if (nivel== 3 && puntoy == 7){
 alert ("GONGRATULACIONES PA, TE MAMASTE Y AHORA SOS EL MAS CHINGON");	
}
} else if (puntoe == 7) {
	puntoy = 0;
	puntoe = 0;
	if (nivel==1){
		alert ("Sos alto manco, intenta de nuevo. Nivel: "+nivel );
		obstaculo=false;
	} else if (nivel==2){
		nivel = nivel - 1;
		alert ("Manqueaste, te vas para el nivel anterior. Nivel: "+nivel);
		VelocidadE=3;
	}else if (nivel==3){
		nivel = nivel - 1;
		alert ("Manqueaste, te vas para el nivel anterior. Nivel: "+nivel);
		VelocidadE=5;
} 
}
}

setInterval(draw, 1);




