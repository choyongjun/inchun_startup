"use strict";

(function($) {
	var pjaxContainer = '#pjax-container';

	$(document).on('appinit', function() {
		$('a.model-close-and-parent-replace').on('click', function(event) {
			event.preventDefault();

			parent.$.locationReplace($(this).attr('href'));
		});

		$(this).pjax('body.layout-primary a:not([href*=file-load]):not(.pjax-reload):not([target])', pjaxContainer);
	});

	$(document).on('ready', function() {
		var $document = $(document);

		$.pjax.defaults.maxCacheLength = 0;
		$.pjax.defaults.type = 'GET';
		$.pjax.defaults.timeout = 5000;

		$document.on('reload', function() {
			$.pjax.reload(pjaxContainer);
		});

		$document.on('pjax:start', function() {
			NProgress.start();
		});

		$document.on('pjax:end', function(data, status, xhr, options) {
			NProgress.done();

			$(document).trigger('modal-close');

			updateBodyClassAndAppInit(status.getResponseHeader('Body-Class'));
		});

		$document.on('pjax:beforeSend', function(xhr, options) {
			$.pjax.originalUrl = window.location.pathname;
		});

		$document.on('pjax:error', function(event, xhr, textStatus, error, options) {
			event.preventDefault();

			alert(error);

			history.pushState(null, "", $.pjax.originalUrl);
		});

		window.jQuery.locationReplace = function(location) {
			$.pjax({
				url : location,
				container : pjaxContainer
			});
		}
	});

	function updateBodyClassAndAppInit(bodyClass) {
		if (!bodyClass)
			return;

		var $body = $('body');
		var bodyClassList = $body.attr('class').split(/\s+/);
		var newBodyClassList = new Array();

		for ( var i in bodyClassList) {
			var className = bodyClassList[i];

			if (className.indexOf('page') === 0 || className.indexOf('module') === 0)
				continue;

			newBodyClassList.push(className);
		}

		newBodyClassList.push(bodyClass);

		$body.attr('class', null);
		$body.addClass(newBodyClassList.join(' '));

		$(document).trigger('appinit');
	}

})(jQuery);