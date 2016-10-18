"use strict";

	var timer =  180;
	var interval;


	function callback(){ 
		var minutes = parseInt(timer/60); 
		var secondes = parseInt(timer-minutes*60); 
		$('#putTime').text(minutes+ ':'+ secondes);
		timer--;
		if (timer === -1){
			clearIntervalinterval;
			console.log(timer);  
		}


	}
	$('#setTime').click(function(){
		var minutes = $('.setMinutes').val();
		var secondes= $('.setSecondes').val();
		timer= parseInt(minutes*60 + secondes); 
	});

	$('.btnStart').click(function(){
		interval = setInterval(callback, 1000);
	});

	$('.btnClear').click(function(){
		clearInterval(interval);

		var minutes = $('.setMinutes').val();
		var secondes= $('.setSecondes').val();
		var timers= parseInt(minutes + secondes);
		$('#putTime').val(minutes + ':' + secondes);
	}); 

	$('.btnStop').click(function(){
		clearInterval(interval);    
	});
	$('.btnReset').click(function(){

	});
