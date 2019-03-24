$(function() {
		$('body').addClass('is-loading');

		$(document).ready(function () {
			$('body').removeClass('is-loading');

			$('.thumbnails').magnificPopup({
				delegate: 'a',
				type: 'image',
				removalDelay: 500,
				callbacks: {
					beforeOpen: function () {
						this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
						this.st.mainClass = 'mfp-move-from-top';
					}
				},
				closeOnContentClick: true,
				enableEscapeKey: true,
				midClick: true,
				image: {
					verticalFit: false
				}
			});
		});
});