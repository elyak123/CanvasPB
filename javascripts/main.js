var lienzo, t, b;
function inicio(){
	var dibujo;
	t = document.getElementById("usuario");
	b = document.getElementById("boton");
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");
	b.addEventListener("click", dibujarGrilla);

	//lienzo.beginPath(); permite crear otro trazo con un color diferente
	lienzo.beginPath();
	//lienzo.strokeStyle = "#F00";
	lienzo.moveTo(0,0);
	lienzo.lineTo(300, 0);
	lienzo.stroke();
	lienzo.lineTo(300,300);
	lienzo.stroke();
	lienzo.lineTo(0, 300 );
	lienzo.stroke();
	lienzo.lineTo(0,0);
	lienzo.stroke();
	lienzo.closePath();
	circulo(lienzo);
}
function circulo (c){

	//lienzo.arc(x del centro, y del centro, radio del ciculo, circunferencia en radianes)
	c.beginPath();
	c.fillStyle ="#F54D27";
	c.arc(150,150, 100, (Math.PI * 2 ), false);
	c.stroke();
	c.closePath();
	c.fillStyle ="#F54D27";
	c.fill();
	c.closePath();
}
function dibujarGrilla (l){
	var l = lienzo;
	var ancho = 300, alto = 300;
	var nlineas = Number(t.value);
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


