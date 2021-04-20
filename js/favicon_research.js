$(document).ready(function() {
	setInterval(function() {
		var site = $("link[rel='shortcut icon']").attr("site");
		if(site == 1) {
			$("link[rel='shortcut icon']").attr("href", "../../lib/img/favicon/heihei.ico");
			$("link[rel='shortcut icon']").attr("site", "2");
		} else if(site == 2) {
			$("link[rel='shortcut icon']").attr("href", "../../lib/img/favicon/hahaha.ico");
			$("link[rel='shortcut icon']").attr("site", "1");
		} else {}
	}, 100)
})

//调用函数
$(function() {
	$('.material-card').materialCard({
		icon_close: 'fa-chevron-left',
		icon_open: 'fa-thumbs-o-up',
		icon_spin: 'fa-spin-fast',
		card_activator: 'click'
	});

	$('.material-card').on('shown.material-card show.material-card hide.material-card hidden.material-card', function(event) {
		console.log(event.type, event.namespace, $(this));
	});
});