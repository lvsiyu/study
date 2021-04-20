$(document).ready(function() {
	//获取滚动条宽度
	var scrollbarWidth = $('.all_father')[0].offsetWidth - $('.all_father')[0].scrollWidth;
	$(".chose_box").css("right", scrollbarWidth + "px");

	/*var rurl = $("link[rel='shortcut icon']").attr("href");*/

	//页签切换
	setInterval(function() {
		var site = $("link[rel='shortcut icon']").attr("site");
		if(site == 1) {
			$("link[rel='shortcut icon']").attr("href", "lib/img/favicon/heihei.ico");
			$("link[rel='shortcut icon']").attr("site", "2");
		} else if(site == 2) {
			$("link[rel='shortcut icon']").attr("href", "lib/img/favicon/hahaha.ico");
			$("link[rel='shortcut icon']").attr("site", "1");
		} else {}
	}, 100)

	//点击屏幕滚动事件

	var aa = $("#canvas").offset().top;
	var bb = $("#css").offset().top;
	var cc = $("#demo").offset().top;
	var dd = $("#js").offset().top;
	var ee = $("#other").offset().top;
	var ff = $("#plugin").offset().top;
	var gg = $("#svg").offset().top;
	var hh = $("#webgl").offset().top;

	$(".box_list:eq(0)").click(function() {
		$(".all_father").animate({
			scrollTop: aa
		}, 500);
	});

	$(".box_list:eq(1)").click(function() {
		$(".all_father").animate({
			scrollTop: bb
		}, 500);
	});

	$(".box_list:eq(2)").click(function() {
		$(".all_father").animate({
			scrollTop: cc
		}, 500);
	});

	$(".box_list:eq(3)").click(function() {
		$(".all_father").animate({
			scrollTop: dd
		}, 500);
	});

	$(".box_list:eq(4)").click(function() {
		$(".all_father").animate({
			scrollTop: ee
		}, 500);
	});

	$(".box_list:eq(5)").click(function() {
		$(".all_father").animate({
			scrollTop: ff
		}, 500);
	});

	$(".box_list:eq(6)").click(function() {
		$(".all_father").animate({
			scrollTop: gg
		}, 500);
	});
	
	$(".box_list:eq(7)").click(function() {
		$(".all_father").animate({
			scrollTop: hh
		}, 500);
	});

	//box hover事件
	$(".box_list").hover(function() {
		var index = $(".box_list").index(this);

		var html = $('.modular').eq(index).children().html();
		$(this).html(html);
		$(this).stop().animate({
			width: "150px"
		}, 500);
		$(this).css("background-color", "black");
		$(this).css("color", "#FFF");
	}, function() {

		$(this).stop().animate({
			width: "100%"
		}, 500);
		$(this).css("background-color", "#FFF");
		$(this).css("color", "#000");
		$(this).html($(".box_list").index(this) + 1);
	});

	//滚屏切换
	var height = $(window).height();
	var aaa = $("#canvas").offset().top - height;
	var bbb = $("#css").offset().top - height;
	var ccc = $("#demo").offset().top - height;
	var ddd = $("#js").offset().top - height;
	var eee = $("#other").offset().top - height;
	var fff = $("#plugin").offset().top - height;
	var ggg = $("#svg").offset().top - height;
	var hhh = $("#webgl").offset().top - height;
	var ssscroll = $(".all_father").scrollTop();

	$(".all_father").scroll(function() {
		var sscroll = $(".all_father").scrollTop();
		if(sscroll >= aaa && sscroll < bbb) {

			$(".box1").css("background-color", "#000");
			$(".box1").css("color", "#FFF");

			$(".box2").css("background-color", "#FFF");
			$(".box2").css("color", "#000");

			$(".box3").css("background-color", "#FFF");
			$(".box3").css("color", "#000");

			$(".box4").css("background-color", "#FFF");
			$(".box4").css("color", "#000");

			$(".box5").css("background-color", "#FFF");
			$(".box5").css("color", "#000");

			$(".box6").css("background-color", "#FFF");
			$(".box6").css("color", "#000");

			$(".box7").css("background-color", "#FFF");
			$(".box7").css("color", "#000");
			
			$(".box8").css("background-color", "#FFF");
			$(".box8").css("color", "#000");

		} else if(sscroll >= bbb && sscroll < ccc) {

			$(".box1").css("background-color", "#FFF");
			$(".box1").css("color", "#000");

			$(".box2").css("background-color", "#000");
			$(".box2").css("color", "#FFF");

			$(".box3").css("background-color", "#FFF");
			$(".box3").css("color", "#000");

			$(".box4").css("background-color", "#FFF");
			$(".box4").css("color", "#000");

			$(".box5").css("background-color", "#FFF");
			$(".box5").css("color", "#000");

			$(".box6").css("background-color", "#FFF");
			$(".box6").css("color", "#000");

			$(".box7").css("background-color", "#FFF");
			$(".box7").css("color", "#000");
			
			$(".box8").css("background-color", "#FFF");
			$(".box8").css("color", "#000");

		} else if(sscroll >= ccc && sscroll < ddd) {

			$(".box1").css("background-color", "#FFF");
			$(".box1").css("color", "#000");

			$(".box2").css("background-color", "#FFF");
			$(".box2").css("color", "#000");

			$(".box3").css("background-color", "#000");
			$(".box3").css("color", "#FFF");

			$(".box4").css("background-color", "#FFF");
			$(".box4").css("color", "#000");

			$(".box5").css("background-color", "#FFF");
			$(".box5").css("color", "#000");

			$(".box6").css("background-color", "#FFF");
			$(".box6").css("color", "#000");

			$(".box7").css("background-color", "#FFF");
			$(".box7").css("color", "#000");
			
			$(".box8").css("background-color", "#FFF");
			$(".box8").css("color", "#000");

		} else if(sscroll >= ddd && sscroll < eee) {

			$(".box1").css("background-color", "#FFF");
			$(".box1").css("color", "#000");

			$(".box2").css("background-color", "#FFF");
			$(".box2").css("color", "#000");

			$(".box3").css("background-color", "#FFF");
			$(".box3").css("color", "#000");

			$(".box4").css("background-color", "#000");
			$(".box4").css("color", "#FFF");

			$(".box5").css("background-color", "#FFF");
			$(".box5").css("color", "#000");

			$(".box6").css("background-color", "#FFF");
			$(".box6").css("color", "#000");

			$(".box7").css("background-color", "#FFF");
			$(".box7").css("color", "#000");
			
			$(".box8").css("background-color", "#FFF");
			$(".box8").css("color", "#000");

		} else if(sscroll >= eee && sscroll < fff) {

			$(".box1").css("background-color", "#FFF");
			$(".box1").css("color", "#000");

			$(".box2").css("background-color", "#FFF");
			$(".box2").css("color", "#000");

			$(".box3").css("background-color", "#FFF");
			$(".box3").css("color", "#000");

			$(".box4").css("background-color", "#FFF");
			$(".box4").css("color", "#000");

			$(".box5").css("background-color", "#000");
			$(".box5").css("color", "#FFF");

			$(".box6").css("background-color", "#FFF");
			$(".box6").css("color", "#000");

			$(".box7").css("background-color", "#FFF");
			$(".box7").css("color", "#000");
			
			$(".box8").css("background-color", "#FFF");
			$(".box8").css("color", "#000");

		} else if(sscroll >= fff && sscroll < ggg) {

			$(".box1").css("background-color", "#FFF");
			$(".box1").css("color", "#000");

			$(".box2").css("background-color", "#FFF");
			$(".box2").css("color", "#000");

			$(".box3").css("background-color", "#FFF");
			$(".box3").css("color", "#000");

			$(".box4").css("background-color", "#FFF");
			$(".box4").css("color", "#000");

			$(".box5").css("background-color", "#FFF");
			$(".box5").css("color", "#000");

			$(".box6").css("background-color", "#000");
			$(".box6").css("color", "#FFF");

			$(".box7").css("background-color", "#FFF");
			$(".box7").css("color", "#000");
			
			$(".box8").css("background-color", "#FFF");
			$(".box8").css("color", "#000");

		} else if(sscroll >= ggg && sscroll < hhh) {

			$(".box1").css("background-color", "#FFF");
			$(".box1").css("color", "#000");

			$(".box2").css("background-color", "#FFF");
			$(".box2").css("color", "#000");

			$(".box3").css("background-color", "#FFF");
			$(".box3").css("color", "#000");

			$(".box4").css("background-color", "#FFF");
			$(".box4").css("color", "#000");

			$(".box5").css("background-color", "#FFF");
			$(".box5").css("color", "#000");

			$(".box6").css("background-color", "#FFF");
			$(".box6").css("color", "#000");

			$(".box7").css("background-color", "#000");
			$(".box7").css("color", "#FFF");
			
			$(".box8").css("background-color", "#FFF");
			$(".box8").css("color", "#000");

		}else if(sscroll >= hhh){
			$(".box1").css("background-color", "#FFF");
			$(".box1").css("color", "#000");

			$(".box2").css("background-color", "#FFF");
			$(".box2").css("color", "#000");

			$(".box3").css("background-color", "#FFF");
			$(".box3").css("color", "#000");

			$(".box4").css("background-color", "#FFF");
			$(".box4").css("color", "#000");

			$(".box5").css("background-color", "#FFF");
			$(".box5").css("color", "#000");

			$(".box6").css("background-color", "#FFF");
			$(".box6").css("color", "#000");

			$(".box7").css("background-color", "#FFF");
			$(".box7").css("color", "#000");
			
			$(".box8").css("background-color", "#000");
			$(".box8").css("color", "#FFF");
		}
	})
});

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

//刷新页面滚动条回滚顶部
window.onunload = unload;

function unload(e) {
	$(".all_father").scrollTop(0, 0);
}

$(document).ready(function() {
	$(".no_more").click(function() {
		alert("木有了木有了。太多还没整理出来。先看现在有的呗。")
	})
})