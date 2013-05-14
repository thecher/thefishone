$(function() {
	var $errorMsg = $("<p />").attr({class: 'error'}).text("Please insert a value.");
	var $fields = $("li");
	$("input, select").each(function(index) {
		$(this).blur(function() {
			var $found = $(this).parent().find(".error");
			if ($found.size() == 0 ) {
				if($(this).val() == "") {
					var $parent = $(this).parent();
					$errorMsg.clone().appendTo($parent);
					return false;
				}
			}else if ($(this).val() != "" && $found.size() != 0) {
				$found.remove();
				return true;
			}
			/* if($(this).attr("id") == "selState" &&  insert check selectedindex ) {
				$(this).css("border","solid 5px #f00");
			} */
		});
	});
});