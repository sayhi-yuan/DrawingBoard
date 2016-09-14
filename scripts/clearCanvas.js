// clearCanvas.js
$(document).ready(function(){
	$(".erase").mousedown(function(){
		$(this).css({
			"background-color": "rgba(0, 163, 139, .8)"
		});
	});

	$(".erase").mouseup(function(){
		$(this).css({
			"background-color": "rgba(0, 163, 139, .2)"		
		});
		ctx.clearRect(0, 0, 800, 600);
	});
});
