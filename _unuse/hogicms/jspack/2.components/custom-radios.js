jQuery(function($) {
	var labelClassName = 'custom-radios-label';
	var checkedClassName = 'custom-radios-checked';

	$(document).on('click', '.' + labelClassName, function() {
		var $customRadios = $(this).parent();
		var $customRadiosLabel = $customRadios.find('.' + labelClassName);

		$customRadiosLabel.removeClass(checkedClassName);
		$(this).addClass(checkedClassName);
	});
});