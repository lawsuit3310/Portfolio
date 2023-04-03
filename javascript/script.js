
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseleave(function(){
    $(this).find(".submenu").stop().slideUp(200);
});

var currentIndex = 0;

/*setInterval(function(){
    currentIndex = (currentIndex+1)%3;
    $(".slideList").animate({top: -389 * currentIndex + "px"}, 400);
}, 3000);*/

setInterval(function(){
    currentIndex = (currentIndex+1)%3
    $(".slideList").animate({left: -1000 * currentIndex + "px"}, 400);
},3000);

var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(evt){
    evt.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.hide().eq(index).show();
});

$("#content1 .right").click(function(){
    $(".layer").show(300);
    $(".layer_bg").show();
});
$(".layer .close").click(function(){
    $(".layer").hide(300);
    $(".layer_bg").hide();
});