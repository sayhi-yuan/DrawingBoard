// selectGraphics.js
//class name
var graphicss = ["pointLine", "drawLine", "fillRect", "fillArc"];

function changeGraphics(index){
	graphics = graphicss[index];

	for(var i=0; i < 4; i++){
		if(i != index){
			$("."+graphicss[i]+" > .cover").css({
				"background-color": "rgba(0, 163, 139, .0)"			
			});
		}
	}
}

$(document).ready(function(){
	for(var i=0; i < 4; i++){
		(function(){
			var index = i;
			$("."+graphicss[index]).click(function(){
				$("."+graphicss[index]+" > .cover").css({
					"background-color": "rgba(0, 163, 139, .3)"
				});

				changeGraphics(index);
			});
		})()
	}
});