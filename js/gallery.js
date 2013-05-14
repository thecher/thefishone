$(function() {
	
	var $slidesContainer = $("#slides");
	var $slides = $("#slides img");
	

	//make thumbnail slides to click on
	$slides.each( function(i) {
		if ($(this).width() > 600) {
			$(this).width(600);
		}
		$(this).addClass("img0"+i);
	});
	var newHeight = 80;
	if ($("section#gallery").attr('class') == 'caribbean') {
		newHeight = 55;
	}
	var $smallSlides = $slides.clone().show();
	$.when($smallSlides.prependTo("#navigateSlides")).then( function() {
		$smallSlides.each( function(i) {
			var $height = $(this).height();
			var $width = $(this).width();
			var newWidth = $width*newHeight/$height;
			$(this).height(newHeight).width(newWidth);
		});
	});


	var loaded = 0;
	$("#slides img").each( function() {
		$(this).bind('load', function (e) {
			$slides.hide();
			var thisHeight;
			$("#slides .img00").addClass("active");
			thisHeight = $("#slides .active").height();
			if (thisHeight != 0) {
				$slidesContainer.css("min-height", thisHeight);
			}
		 });

	});

	$("#navigateSlides img").click( function() {
		$("#slides .active").fadeOut(500, function() {
			$(this).removeClass("active");
		});
		var $newImg = $(this).attr('class');
		$("#slides ."+$newImg).fadeIn(500).addClass("active");
		var newSmallHeight = $("#slides ."+$newImg).height();
		$slidesContainer.css("min-height", newSmallHeight);

	});
	
	
});