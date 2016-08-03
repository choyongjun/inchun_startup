"use strict";

(function($) {

	$(document).on('appinit', function() {
		$('.visual').each(function() {
			var $visual = $(this);
			var $visualContent = $('>ul', $visual);
			var options = {
				slides : '>li',
				timeout : 2400,
				fx : 'fade',
				log : false,
				pauseOnHover : false,
				pagerActiveClass : 'on'
			};
			var $prev = $('.prev').each(function() {
				options.prev = this;
			});
			var $next = $('.next').each(function() {
				options.next = this;

				setTimeout(function() {
					$next.click();
				}, 1200);
			});
			var $pager = $('.pager', $visual).each(function() {
				options.pager = this;
				options.pagerTemplate = '';
				options.pagerEvent = 'mouseover';
			});

			$visualContent.cycle(options);

			$(document).one('pjax:beforeReplace', function() {
				$visualContent.cycle('destroy');
			});
		});
	});

})(jQuery);