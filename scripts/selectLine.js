// selectLine.js
function changeLineBackground(index){
	if(index == 1){
		lineWidth = 1;
	}else{
		lineWidth = (index-1)*2;
	}

	for(var i=1; i < 6; i++){
		if(index != i){
			$(".div_"+i).css({
				"background-color": "#F5F6F7"
			});
		}
	}
}

$(document).ready(function(){
	//closure
	for(var i=1; i < 6; i++){
		(function(){
			var index = i;
			$(".div_"+index).click(function(){
				$(this).css({
					"background-color": "rgba(0, 163, 139, .3)"
				});

				changeLineBackground(index);
			});
		})()
	}
});