/**/
$(document).ready(function() {
	$("html").niceScroll({
		cursorcolor: "#FFFFFF",
		cursorfixedheight:40,
		zindex:2000000,
		background:"rgba(10,10,10,.5)",
		cursorborder:"0px solid #f00"
	});
	//$('html').niceScroll();//for scrolling 
	$('.carousel').carousel({
		//slidershow
		interval: 3000
	})
});

/*Loading=====================*/
$(window).load(function() {
	$('body').css("overflow", "auto");
	$('.loading .heartbeat-loader').fadeOut(1000, function() {
		$(this).parent().fadeOut(1000, function() {
			$(this).remove();
		})
	});
});