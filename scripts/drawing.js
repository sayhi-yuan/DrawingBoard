// drawing.js
var drawFlag = false;
var imageData; //保存像素数据

var pointFirstX = 0;
var pointFirstY = 0;
myCanvas.onmousedown = function(event){
	imageData = ctx.getImageData(0, 0, 800, 600);

	ctx.strokeStyle = colorLine;
	ctx.lineWidth = lineWidth;
	ctx.fillStyle = colorFill;

	drawFlag = true;

	//mouse point
	var x = event.clientX - this.offsetLeft;
	var y = event.clientY - this.offsetTop;

	//start point
	pointFirstX = x;
	pointFirstY = y;
	//select graphics
	switch(graphics){
		case "pointLine":
			break;
		case "drawLine":
			ctx.beginPath();
			ctx.moveTo(x, y);
			break;
		case "fillRect":
			break;
		case "fillArc":
			break;
	}
}

myCanvas.onmousemove = function(event){
	if(drawFlag){
		//mouse point
		var x = event.clientX - this.offsetLeft;
		var y = event.clientY - this.offsetTop;

		switch(graphics){
			case "pointLine":
				ctx.clearRect(0, 0, 800, 600);
				ctx.putImageData(imageData, 0, 0);
				ctx.beginPath();
				ctx.moveTo(pointFirstX, pointFirstY);
				ctx.lineTo(x, y);
				ctx.stroke();
				ctx.closePath();
				break;

			case "drawLine":
				ctx.lineTo(x, y);
				ctx.stroke();
				break;

			case "fillRect":
				ctx.clearRect(0, 0, 800, 600);
				ctx.putImageData(imageData, 0, 0);
				ctx.beginPath();
				ctx.fillRect(pointFirstX, pointFirstY, x-pointFirstX, y-pointFirstY);
				break;

			case "fillArc":
				ctx.clearRect(0, 0, 800, 600);
				ctx.putImageData(imageData, 0, 0);
				ctx.beginPath();
				ctx.arc(pointFirstX, pointFirstY, Math.sqrt(Math.pow(x-pointFirstX, 2))+Math.sqrt(Math.pow(y-pointFirstY, 2)), 0, Math.PI*2, false);
				ctx.stroke();
				break;
		}
	}
}

myCanvas.onmouseup = function(event){
	drawFlag = false;

	switch(graphics){
		case "pointLine":
			break;
		case "drawLine":
			ctx.closePath();
			break;
		case "fillRect":
			ctx.closePath();
			break;
		case "fillArc":
			ctx.closePath();
			break;
	}
}

myCanvas.onmouseout = function(){
	drawFlag = false;
}