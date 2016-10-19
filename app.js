
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
						//utilise des ID quand tu selectionne un elem unique laisse les classes pour le css ou pour les selections multiples
	$('.btnStart').click(function(){                //que ca passe t il si un user appuie plusieur fois sur start sans mettre pause ?
		interval = setInterval(callback, 1000);	
	});

	$('.btnClear').click(function(){	//pk clear? plutot input user ou un truc du genre ?
		clearInterval(interval);

		var minutes = $('.setMinutes').val();
		var secondes= $('.setSecondes').val();
		var timers= parseInt(minutes + secondes);//a quoi sert cet variable locale ? pk un nom aussi pour que ta variable globale?
		$('#putTime').val(minutes + ':' + secondes); //je ne crois pas que c est que ca va faire ce que tu voulais que ca fasse? .val?
	}); 

	$('.btnStop').click(function(){
		clearInterval(interval);    
	});
	$('.btnReset').click(function(){

	});
