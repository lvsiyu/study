// bof jwplayer
(function ($) {
	$(function ($) {
		// bof dom ready
		// fancybox handler
		if ($.fn.fancybox)
			$('<a href="#" id="play_video_fancyboxTag"></a>').appendTo("body").fancybox({
				padding : 0,
				onClosed : function () {
					pauseVideo();
				}
			});

		var playerInstance = null;

		function pauseVideo(e) {
			try {
				if (playerInstance)
					playerInstance.destroyPlayer();
			} catch (_e) {}
		}

		$(document).on("click", ".js_video_player, .js-play-btn", function (e) {
			var playerid = $(this).attr("data-player-id") || 'playerContainer';
			var video_path = $(this).attr("data-video-path");
			var autostart = ($(this).attr("data-player-autostart") || "1") == "1";
			var ismobile = $(window).width() < 768;
			if (ismobile)
				video_path = $(this).attr("data-video-path-mobile") || video_path;

			if ($(this).attr("data-play-nopop")) {
				//$(this).next("img").fadeOut();
				playerInstance = initPlayer(playerid, video_path, $(this).attr("data-img-path"), autostart);

				setTimeout(function () {
					if (!ismobile && playerInstance && playerInstance.getState() != "PLAYING")
						playerInstance.play();
				}, 2000);
				$(this).hide();
				return false;
			}

			if (!$("#player_wrapper").length)
				$('<div style="display:none;"><div id="player_wrapper"></div></div>').appendTo("body");
			$("#play_video_fancyboxTag").attr("href", "#player_wrapper").trigger("click");
			if (playerInstance)
				playerInstance.destroyPlayer();
			$("#player_wrapper").empty();
			$('<div id="' + playerid + '"/>').appendTo("#player_wrapper");
			//$("#player_wrapper").show();
			playerInstance = initPlayer(playerid, video_path, $(this).attr("data-img-path"), autostart);
			playerInstance.onFullscreen = function (e) {
				console.log(e); //alert(e);
			};

			setTimeout(function () {
				if (playerInstance && playerInstance.getState() != "PLAYING")
					playerInstance.play();
			}, 2000);

			return false;
		});

		window.initPlayer = function (playerid, videoPath, imgSrc, autoplay) {
			//if(jwplayer(playerid))return;
			autoplay = autoplay || false;
			var video_width = '100%';
			var video_height = '100%';
			//var videoPath=$("#"+playerid).attr("data-video-path");
			//var imgSrc=$("#"+playerid).attr("data-img-path");
			var skinSrc = '../../../lib/jwplayer-dist/js/carbon.xml';
			var swfPlayer = '../../../lib/jwplayer-dist/js/player_new.swf';
			return jwplayer(playerid).setup({
				//stretching : 'exactfit',
				skin : skinSrc,
				aspectratio : "16:9",
				width : video_width,
				height : video_height,
				image : imgSrc,
				file : videoPath,
				flashplayer : swfPlayer,
				autostart : autoplay,
				ga : {}
			});
		};

		// eof dom ready
	});
})(jQuery);
// eof