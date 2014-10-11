function inicio(){
	var dibujo;
	var lienzo;
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");	
	lienzo.beginPath();
	lienzo.strokeStyle = "#F00";
	 //lienzo.arc(x del centro, y del centro, radio del ciculo, circunferencia en radianes)
	circulo(lienzo)
	dibujarGrilla(lienzo);
	areabcurva(lienzo);

}
function circulo (c){
	c.arc(150,150, 100, (Math.PI * 2 ), false);
	c.closePath();
	c.stroke();
	c.fillStyle ="red";
	c.fill()
}
function dibujarGrilla (l){
	var ancho = 300, alto = 300;
	var nlineas = 30;
	var anchoColumna = ancho / nlineas;
	var anchoFila = alto / nlineas;
		for(lapiz = 0; lapiz <= 300; lapiz = lapiz + anchoColumna )
	{
		//lienzo.moveTo( linea, 0 );
		//lienzo.lineTo( linea, alto);
		l.beginPath();
		l.strokeStyle = "#555555"
		l.moveTo( lapiz, 0);
		l.lineTo( lapiz, ancho);
		l.stroke();
		l.moveTo( 0, lapiz);
		l.lineTo( ancho, lapiz);
		l.stroke();
	}
}