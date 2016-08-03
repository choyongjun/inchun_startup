"use strict";

(function($) {

	$(document).on('appinit', function() {
	});

	$(document).on('ready', function() {
	});

})(jQuery);


jQuery(function($) {
$('.page-index').each(function() {
		$('#visual').each(function() {
			var $visual = $(this);
			var $visualContent = $('>ul', $visual);
			var options = {
				slides : '>li',
				timeout: 2400,
				fx: 'fade',
				log: false,
				pauseOnHover: false,
				pagerActiveClass: 'on'
			};
			var $prev = $('.btn_slide_prev', $visual).each(function(){
				options.prev = this;
			});
			var $next = $('.btn_slide_next', $visual).each(function(){
				var $this = $(this);
				
				options.next = this;
				
				setTimeout(function(){
					$this.click();
				}, 1000);
			});
			var $pager = $('.btn_pager', $visual).each(function(){
				options.pager = this;
				options.pagerTemplate = '';
				options.pagerEvent = 'mouseover';
			});
			/*
			var $pager2 = $('.btn_pager', '.visual_roller').each(function(){
				options.pager = this;
				options.pagerTemplate = '';
				options.pagerEvent = 'mouseover';
			});
			*/
			var $pauseAndPlay = $('.btn_pager_play', '.visual_roller');
			
			$pauseAndPlay.on("click", function(event){
				event.preventDefault();
				
				if($pauseAndPlay.hasClass("on")){
					$pauseAndPlay.removeClass("on");
					$visualContent.cycle("resume");
				}else{
					$pauseAndPlay.addClass("on");
					$visualContent.cycle("pause");
				}
			});
			
			$visualContent.cycle(options);
		});
		
	});

});