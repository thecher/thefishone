$(function() {
	$(".article section").hide();
	var $downArrow = $("<img /> ").attr({src: 'imgs/down-arrow-black.png', alt: 'down'});
	var $articleHeader = $('.article header');
	$articleHeader.prepend($downArrow);
	$articleHeader.click( function() {
		$(this).next().slideToggle(500, function() {
			//$(this).parent().find("img").animate({'transform':'rotate(180deg)'}, 500);
			console.log($(this).parent().find("img"));
		});
	});
});