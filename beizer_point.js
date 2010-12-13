/*
	Bernstein function: 
		1 = t + (1 - t)
	
	Cuadratic beizer:
		12 = (t + (1 - t))2
		» 1 = t2 + 2t(1 - t) + (1 - t)2
	
	Cuadratic beizer 3rd:	
		13 = (t + (1 - t))3
		» 1 = (t + (1 - t)) . (t2 + 2t(1 - t) + (1 - t)2)
		» 1 = t3 + 3t2(1 - t) + 3t(1 - t)2 + (1 - t)3
		
	Cubic beizer:
	
		B1(t) = t3
		B2(t) = 3t2(1 - t)
		B3(t) = 3t(1 - t)2
		B4(t) = (1 - t)3

	* Ver archivo de mathematica beizer.math, ecuación para buscar un punto en la curva
	
		p = C1.B1(d) + C2.B2(d) + C3.B3(d) + C4.B4(d)
				 
		Ci Cuntos de control
		Bi Funciones beizer
		d Porcentaje de distancia a la curba entre 0 y 1
		p el punto en el espacio 2D

*/

cordenates = function (x,y) {
   if(!x) var x=0;
   if(!y) var y=0;
   return {x: x, y: y};
}

function b1(t) { return t*t*t }
function b2(t) { return 3*t*t*(1-t) }
function b3(t) { return 3*t*(1-t)*(1-t) }
function b4(t) { return (1-t)*(1-t)*(1-t) }

function getBeizerPoint(p,c1,c2,c3,c4) {
	var pos = new cordenates();
	pos.x = c1.x*b1(p) + c2.x*b2(p) + c3.x*b3(p) + c4.x*b4(p);
	pos.y = c1.y*b1(p) + c2.y*b2(p) + c3.y*b3(p) + c4.y*b4(p);
	return pos;
}	