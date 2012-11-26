$(function(){
	
	$("html").mousemove(function(event) {
		var xPercent = Math.floor((event.pageX / $('html').width())*100)+100;
		var yPercent = Math.floor((event.pageY / $('html').height())*100)+100;
		var color =  'rgb(40,'+xPercent+','+yPercent+')';
	  	$('html').css('background-color',color);
	});
	
	var counter = 0;
	$('.tags span').each(function(){
		if($(this).css('text-decoration')=='line-through'){
			counter++;
		}
	});
	var total = $('.tags span').length;
	
	var comments = ['Rayos! - Estas Perdido!','Genial!','Puede Mejorar!','Bazzinga!','Nada mal!','Changos!','Firulais!'];
	
	$('aside h1').append(' &#8212; '+(total-counter)+'/'+$('.tags span').length+' '+comments[total-counter]);

	setTimeout(function(){
		var $el1 = randomSpan();
		var $el2 = randomSpan();
		$el1.addClass('on');
		setTimeout(function(){
			$el2.addClass('on');
		},400);
		setTimeout(function(){
			$el1.removeClass('on');
		},700);
		setTimeout(function(){
			$el2.removeClass('on');
		},1100);
		setTimeout(arguments.callee,8000)
	},3000);	

	function randomSpan(){
		var $spans = $('h1 span');
		var randomNumber = Math.floor(Math.random()*$spans.length);
		return $spans.eq(randomNumber);
	}

});