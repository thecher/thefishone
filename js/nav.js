$(function() {
	
	navigation();
	
	addBodyId();
	
});

function navigation() {
	$('nav').addClass('jsEnabled');
	var $downArrow = $("<img /> ").attr({src: 'imgs/down-arrow.png', alt: 'down'}).css('margin','0px 10px 3px 0px');
	$('.parent').prepend($downArrow);
	$('nav ul li.parent').mouseenter( function() {
		$(this).addClass('active').children().slideDown(500);
	}).mouseleave( function() {
		$(this).removeClass('active');
		$('.parent ul').slideUp(500);
	});
	$('nav a').mouseenter( function() {
		$(this).addClass('active');
	}).mouseleave( function() {
		$(this).removeClass('active');
	});
}

function addBodyId() {
	var pageUrl = window.location.pathname;
	var partPath = "project_php";
	var lastPeriod = $.inArray(".",pageUrl);
	var lastSlash = $.inArray("/",pageUrl,lastPeriod-18);
	var thisPage = pageUrl.substr(lastSlash+1,lastPeriod);
	if (thisPage == "index.php") {
		$(".home").addClass("current");
		$("nav + section").attr({id: 'home'});
	}else if ($.inArray("f",thisPage) == 15) {
		$(".staff").addClass("current");
		$("nav + section").attr({id: 'staff'});
	}else if ($.inArray("q",thisPage) != -1) {
		$(".faq").addClass("current");
		$("nav + section").attr({id: 'faq'});
	}else if (thisPage == "contact.php") {
		$(".contact").addClass("current");
		$("nav + section").attr({id: 'contact'});
	}else if (thisPage == "bermuda-tour.php") {
		$(".tours").addClass("current");
		$("nav .tbermuda").addClass("current");
		$("nav + section").attr({id: 'tour'});
	}else if (thisPage == "caribbean-tour.php") {
		$(".tours").addClass("current");
		$("nav .tcaribbean").addClass("current");
		$("nav + section").attr({id: 'tour'});
	}else if (thisPage == "bermuda-gallery.php") {
		$(".galleries").addClass("current");
		$("nav .gbermuda").addClass("current");
		$("nav + section").attr({id: 'gallery'}).addClass("bermuda");
	}else if (thisPage == "caribbean-gallery.php") {
		$(".galleries").addClass("current");
		$("nav .gcaribbean").addClass("current");
		$("nav + section").attr({id: 'gallery'}).addClass("caribbean");
	}
}