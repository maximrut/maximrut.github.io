$(document).ready(function() {


	$(".top_centered h1").animated("fadeInDown", "fadeOutUp" );
	$(".top_text p").animated("fadeInUp", "fadeOutDown" );

	function heightDetect() {
		$(".main_head, .top_wrapper").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	$("#work_table").mixItUp();

	$(".work li").click(function() {
		$(".work li").removeClass("active");
		$(this).addClass("active");
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