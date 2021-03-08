$(function() {
		$('body').addClass('is-loading');

		$(document).ready(function () {
			$('body').removeClass('is-loading');

			$('.open-popup-link').each(function() {
				var template = $(this).find("script[type='text/template']").html();
				$(this).magnificPopup({
					items: {
						type: 'inline',
						src: template,
					},
					callbacks: {
						beforeOpen: function () {
							this.st.el.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
							this.st.mainClass = 'mfp-move-from-top';
						}
					},
					closeOnContentClick: true,
					enableEscapeKey: true,
					midClick: true,
				});
			});
		});
});