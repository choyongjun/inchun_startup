jQuery(function($) {

	$('.page-index .module-toppopup-widget').each(function() {
		var $widget = $(this);

		$('.phone-cycle', this).each(function() {
			var options = {
				slides : '>li',
				timeout : 2400,
				pauseOnHover : true,
				log: false,
				fx : 'scrollHorz'
			};

			$(this).cycle(options);
		});
		
		$('.tablet-gt-cycle', this).each(function() {
			var options = {
				slides : '>ul',
				timeout : 2400,
				pauseOnHover : true,
				log: false,
				fx : 'scrollHorz',
				prev: $widget.find('.prev'),
				next: $widget.find('.next')
			};

			$(this).cycle(options);
		});

		var $phone = $('.phone', this);
		var $tabletGt = $('.tablet-gt', this);
		
		setTimeout(function(){
			$phone.animate({'margin-top': 0}, 1500, 'easeInOutExpo');
			$tabletGt.animate({'margin-top': 0}, 1500, 'easeInOutExpo');
		}, 1000);

		$(this).on('click', '.close-one-day-button', function(event) {
			event.preventDefault();

			$.ajax({
				url : $(this).attr('href'),
				success : function(data) {
					if (!data || !data.success) {
						console.log(data);

						alert('예측하지 못한 오류가 발생했습니다.');
					}

					$widget.remove();
				}
			});
		});

		$(this).on('click', '.close-button', function(event) {
			event.preventDefault();

			$widget.remove();
		});
	});

});