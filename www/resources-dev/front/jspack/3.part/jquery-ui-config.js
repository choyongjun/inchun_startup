"use strict";

(function($) {

	$.datepicker.setDefaults($.datepicker.regional['ko']);

	$(document).on('appinit', function() {
		$('input.input-date').datepicker();
	});

})(jQuery);