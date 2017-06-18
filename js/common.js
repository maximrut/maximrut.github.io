$(document).ready(function() {

	$(".top_h1 h1, .shadow").animated("fadeInDown", "fadeOutUp");
	$(".top_h2 p").animated("fadeInUp", "fadeOutDown" );
	


	function heightDetect() {
	$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

});	

try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};




$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

