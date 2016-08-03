"use strict";

(function($) {

	var sourceIncluded = false;

	$(document).on('appinit', function() {
		$('textarea.editor').each(function() {
			if (sourceIncluded == false) {
				sourceIncluded = true;

				var $body = $('body');

				$body.append('<link rel="stylesheet" href="/resources/nhnEditor/css/smart_editor2.css" />');
				$body.append('<script src="/resources/nhnEditor/js/lib/jindo2.all.js"></script>');
				$body.append('<script src="/resources/nhnEditor/js/lib/jindo_component.js"></script>');
				$body.append('<script src="/resources/nhnEditor/js/SE2M_Configuration.js"></script>');
				$body.append('<script src="/resources/nhnEditor/js/SE2BasicCreator.js"></script>');
				$body.append('<script src="/resources/nhnEditor/js/smarteditor2.min.js"></script>');
			}

			var $form = $(this).closest('form');
			var $textarea = $(this);
			var $editorContainer = $('<div class="editor-container"></div>');

			$textarea.after($editorContainer);

			$editorContainer.load('/resources/nhnEditor/editor.html', function() {
				var oEditor = createSEditor2($textarea[0], {
					bUseToolbar : true,
					bUseVerticalResizer : true,
					bUseModeChanger : true,
					fOnBeforeUnload : function() {
						// 이벤트
					}
				}, $editorContainer.get(0));

				$textarea.data('editor', oEditor);

				oEditor.run({
					fnOnAppReady : function() {
						// 이벤트
					}
				});

				$form.on('submit', function() {
					oEditor.exec("UPDATE_CONTENTS_FIELD");
 				});
			});

		});
	});

})(jQuery);