function inicio(){
	var dibujo;
	var lienzo;
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");	
	//lienzo.beginPath(); permite crear otro trazo con un color diferente
	 lienzo.beginPath();
	 lienzo.strokeStyle = "#F00";
	 //lienzo.arc(x del centro, y del centro, radio del ciculo, circunferencia en radianes)
	 lienzo.arc(150,150, 100, (Math.PI * 2 ), false);
	 lienzo.closePath();
	 lienzo.stroke();
	 dibujarGrilla(lienzo);
}
function dibujarGrilla (l){
	var ancho = 300, alto = 300;
	var nlineas = 30;
	var anchoColumna = ancho / nlineas;
	var anchoFila = alto / nlineas;
	for(lapiz = 0; lapiz <= 300; lapiz = lapiz + anchoColumna )
	{
		l.beginPath();
		l.strokeStyle = "#555555"
		l.moveTo( 0, lapiz);
		l.lineTo( ancho, alto + lapiz);
		l.stroke();
		l.closePath();
		l.beginPath();
		l.moveTo( 0, alto - lapiz );
 		l.lineTo( ancho - lapiz, 0 );
		l.stroke();
		l.closePath();
		l.beginPath();
		l.moveTo( ancho - lapiz, 0 );
		l.lineTo( ancho, lapiz);
		l.stroke();
		l.closePath();
		l.beginPath();
		l.moveTo( ancho, lapiz );
		l.lineTo( lapiz, alto );
		l.stroke();
		l.closePath();
	}
}