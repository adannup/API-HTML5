//Obtener el elemento
var canvas = document.getElementById('canvas');
//Obtener el contexto
var ctx = canvas.getContext('2d');
var h = canvas.height,
	w = canvas.width;

//Dibujar en Canvas
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;

var separacion = 20;

var lineasHorizontales = function(){
	var lineasH = h/separacion,
		corrimiento = separacion;

	for(var i = 0; i < lineasH; i++){
		ctx.moveTo(0, corrimiento);
		ctx.lineTo(w, corrimiento);
		corrimiento += separacion;
		ctx.stroke();
	}
};

var lineasVerticales = function(){
	var lineasV = w/separacion,
		corrimiento = separacion;

	for(var i = 0; i < lineasV; i++){
		ctx.moveTo(corrimiento, 0);
		ctx.lineTo(corrimiento, h);
		corrimiento += separacion;
		ctx.stroke();
	}
};

(function dibujar(){
	lineasHorizontales();
	lineasVerticales();
})();