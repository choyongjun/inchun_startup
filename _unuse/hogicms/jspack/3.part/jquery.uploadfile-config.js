"use strict";

(function($) {
	$(document).on('appinit', function() {
		$('.fileuploader').each(function() {
			var $obj = $(this);
			var settings = {
				url : $(this).attr('data-url'),
				dragDrop : true,
				fileName : 'File[file]',
				formData : {},
				returnType : 'json',
				showDone : false,
				showAbort : false,
				showDelete : false,
				onSuccess : function(files, data, xhr) {
					if (!data || !data.success) {
						console.log(data);
						return;
					}

					$obj.parent().find('.files').append(data.itemHtml);

					if (jQuery.oEditor && data.isImage) {
						jQuery.oEditor.exec("PASTE_HTML", [ data.editorItemHtml ]);
					}
				},
				onError : function(files, data, xhr) {
					console.log(data);
				},
			}

			if ($(this).attr('data-accept') == 'image') {
				settings.allowedTypes = 'gif,jpg,jpeg,png';
			}

			$(this).uploadFile(settings);
		});
	});
})(jQuery);