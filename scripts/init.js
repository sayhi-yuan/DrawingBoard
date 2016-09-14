// index.js
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");


var lineWidth = 1;
var graphics = "pointLine";
var colorLine = "red";
var colorFill = "red";

//init
$(document).ready(function(){
	//lineWidht init
	$(".div_1").css({
		"background-color": "rgba(0, 163, 139, .3)"
	});

	//graphics init
	$(".pointLine > .cover").css({
		"background-color": "rgba(0, 163, 139, .3)"
	});

	// colors init
	$(".red > .cover").css({
		"background-color": "rgba(0, 163, 139, .4)"
	});
});