$(document).ready(function() {

	var touch = $('#touch_mnu');
	var menu = $('nav');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));


	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	
});