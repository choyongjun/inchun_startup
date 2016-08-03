jQuery(function($) {

	$('.files').each(function() {
		var $files = $(this);

		$files.on('click', 'a.action-push', function() {
			var $file = $(this).parent('.btn-group').parent('li');
			var $files = $file.parent('ul');

			if (jQuery.oEditor) {
				jQuery.oEditor.exec("PASTE_HTML", [ $(this).attr('data-editor-item-html') ]);
			} else {
				alert('에디터가 없습니다.');
			}

			return false;
		});

		$files.on('click', 'a.action-delete', function() {
			var $file = $(this).parent('.btn-group').parent('li');
			var $files = $file.parent('ul');

			$(this).button('loading');

			$.ajax({
				url : $(this).attr('href'),
				method : 'post',
				success : function(data) {
					if (!data || !data.success) {
						console.log(data);

						return;
					}

					$file.remove();
					$files.html($.trim($files.html()));
				},
				error : function(data) {
					console.log(data);
				}
			});

			return false;
		});
	});
	
	$('.crud-list').each(function() {
		var $obj = $(this);
		
		$obj.on('validate', function(){
			$obj.find('a.up, a.dn').removeClass('disabled');
			$obj.find('tbody tr').first().find('a.up').addClass('disabled');
			$obj.find('tbody tr').last().find('a.dn').addClass('disabled');
		}).trigger('validate');
		
		$(this).on('click', 'a.up', function(event) {
			event.preventDefault();
			
			var $this = $(this);
			var $item = $(this).parents('tr');
			
			if (!$item.prev().size())
				return;
			
			$this.addClass('disabled');
			
			$.post($this.attr('href'), {}, function(data) {
				if (!data.success)
					return;

				$item.prev().before($item);
				$item.fadeOut('fast').fadeIn('fast');
				
				$obj.trigger('validate');
			}, 'json');
		});
		
		$(this).on('click', 'a.dn', function(event) {
			event.preventDefault();
			
			var $this = $(this);
			var $item = $(this).parents('tr');

			if (!$item.next().size())
				return;
			
			$this.addClass('disabled');

			$.post($this.attr('href'), {}, function(data) {
				if (!data.success)
					return;

				$item.next().after($item);
				$item.fadeOut('fast').fadeIn('fast');
				
				$obj.trigger('validate');
			}, 'json');
		});
	});

});