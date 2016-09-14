// selectColor.js
var colors = ["red", "green", "blue", "pink", "orange", "yellow"];

function changeColor(index){
	colorLine = colors[index];
	colorFill = colors[index];

	for(var i = 0; i < 6; i++){
		if(i != index){
			$("."+colors[i]+" > .cover").css({
				"background-color": "rgba(0, 163, 139, .0)"
			});
		}
	}
}

$(document).ready(function(){
	for(var i=0; i < 6; i++){
		(function(){
			var index = i;
			$("."+colors[index]).click(function(){
				$("."+colors[index]+" > .cover").css({
					"background-color": "rgba(0, 163, 139, .4)"
				});

				changeColor(index);
			});
		})()
	}
});