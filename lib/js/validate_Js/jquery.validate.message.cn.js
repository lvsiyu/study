jQuery.extend(jQuery.validator.messages, {
    required: "必填字段",
	remote: "请修正该字段",
	email: "请输入正确格式的电子邮件",
	url: "请输入合法的网址",
	date: "请输入合法的日期",
	dateISO: "请输入合法的日期 (ISO).",
	number: "请输入合法的数字",
	digits: "只能输入整数",
	creditcard: "请输入合法的信用卡号",
	equalTo: "请再次输入相同的值",
	accept: "请输入拥有合法后缀名的字符串",
	maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),
	minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),
	rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
	range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
	max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
	min: jQuery.validator.format("请输入一个最小为 {0} 的值")
});


//重新定位错误位置
$.validator.setDefaults({  
	errorPlacement: function(error, element) {    
		error.appendTo(element.parent());
		/*
		var list  = $("input").add($("select")).add($("textarea"));
		/*
		list.each(function() {
			$(this).focus(function() {
				var label = $("label.error");					
				var lw;		
				var z_index = 9999;
				label.each(function() {
					lw = $(this).width()+20;
					$(this).css("right", "-"+lw+"px");							
					$(this).css({"z-index":z_index--});
				});
			});
		});*/	
	}  
});

$(function(){
	$("body").on("focus", "input,select,textarea", function(){
		var obj = $(this).parent().find("label.error");
		locateLabelError(obj);
	});
	
	$("body").on("keyup", "input,select,textarea", function(){
		var obj = $(this).parent().find("label.error");
		locateLabelError(obj);
	});
	
	$("body").on("click", "input,select,textarea", function(){
		var obj = $(this).parent().find("label.error");
		locateLabelError(obj);
	});
});


var validateFlag = true;
function locateLabelError() {
	var list = $("label.error");
	if(list != null && list.length > 0) {
		if(!validateFlag) {
			return false;
		}
		else {
			validateFlag = false;
		}
	}
	else {
		return false;
	}
	list.each(function(){
		obj = $(this);
		var parent = obj.parent();
		var list   = parent.children("*").not(obj);
		var left   = 0;
		list.each(function(){
			if($(this).css("position") != "absolute" && $(this).css("position") != "fixed" && $(this).css("float") != "left" && $(this).css("right"))  {
				left += $(this).outerWidth(true);
			}
		});
		obj.css("left", left+"px");
	});
	
//	if(obj && obj.length > 0) {
//		var parent = obj.parent();
//		var list   = parent.children("*").not(obj);
//		var left   = 0;
//		list.each(function(){
//			if($(this).css("position") != "absolute" && $(this).css("position") != "fixed" && $(this).css("float") != "left" && $(this).css("right"))  {
//				left += $(this).outerWidth(true);
//			}
//		});
//		obj.css("left", left+"px");
//	}
}

//定位错误位置
function locatePage() {
	var list  = $("input.error").add($("select.error")).add($("textarea.error")).first();
	if(list.length > 0){
		var top = list.offset().top-100;
		$(document).scrollTop(top);
		list.focus();
	}
	return true;
}

//获取高宽度的整数值
function getWH(value) {
	value = value+"";
	if(value.indexOf("px") > 0) {
		value = value.substr(0,value.indexOf("px"));
	}
	value = parseInt(value);
	return value;
}
