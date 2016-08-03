"use strict";

(function($) {

	$(document).on('modal-close', function() {
		$('body>.module-popup').remove();
	});

	$(document).on('click', 'a.module-popup-close', function() {
		var $popup = $(this).closest('.module-popup');

		$popup.remove();

		return false;
	});

	$(document).on('click', 'a.module-popup-close-never', function() {
		var $popup = $(this).closest('.module-popup');

		$.ajax({
			url : $(this).attr('href'),
			success : function() {
				$popup.remove();
			}
		});

		return false;
	});

})(jQuery);