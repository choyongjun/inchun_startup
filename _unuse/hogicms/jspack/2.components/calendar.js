jQuery(function($) {

	$('.module-calendar-widget').each(function() {
		var $layer = $('<div class="module-calendar-widget-layer">');

		$layer.appendTo('body');

		$(this).on('mouseover', 'td>div>a', function() {
			$layer.html($(this).next('ul').clone()).addClass('on');
		});

		$(this).on('mouseout', 'td>div>a', function() {
			$layer.removeClass('on').empty();
		});

		$(document).mousemove(function(e) {
			if($layer.hasClass('on')){
				$layer.css({
					'left': e.pageX,
					'top': e.pageY + 20
				});
			}
		});
	});

});