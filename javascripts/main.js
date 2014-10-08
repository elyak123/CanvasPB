var dibujo;
var lienzo;


function inicio(){
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");	
	lienzo.moveTo(1,1);	
	lienzo.lineTo(1,299);
	lienzo.lineTo(299,299);
	lienzo.lineTo(299,1);
	lienzo.lineTo(1,1);
	lienzo.strokeStyle = "#F00";
	lienzo.stroke();
	//lienzo.beginPath(); permite crear otro trazo con un color diferente
	// lienzo.beginPath();
	// lienzo.arc(x del centro, y del centro, radio del ciculo, circunferencia en radianes)
	// lienzo.arc(150,150, 100, (Math.PI * 2 ), false);
	// lienzo.closePath();
	// lienzo.stroke();
	 dibujarGrilla();

}
function dibujarGrilla (){
	var ancho = 300, alto = 300;
		for(linea = 0; linea < 300; linea = linea + 10 )
	{
		//lienzo.moveTo( linea, 0 );
		//lienzo.lineTo( linea, alto);
		lienzo.moveTo( 0, linea);
		lienzo.lineTo( linea, ancho);
		lienzo.stroke();
		lienzo.moveTo( linea, 0);
		lienzo.lineTo( alto, linea);
	}
}


