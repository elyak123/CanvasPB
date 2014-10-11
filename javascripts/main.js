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
	var x;
	var y;
	var ancho = 300, alto = 300;
	var nlineas = 30;
	var anchoColumna = ancho / nlineas;
	var anchoFila = alto / nlineas;
		for(lapiz = 300; 0 => lapiz <= 300; lapiz = lapiz - anchoColumna )
	{
		l.beginPath();
		l.strokeStyle = "#555555"
		l.moveTo( 0, lapiz);
		l.lineTo( ancho - lapiz, 0);
		l.stroke();
		l.moveTo( lapiz, alto);
		l.lineTo( ancho, lapiz);
		l.stroke();
	}
}


