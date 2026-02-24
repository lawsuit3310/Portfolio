$(".nav > ul > li").hover(function(){
    //mouseover
    $(this).find(".submenu").stop().slideDown();
},function(){
    //mouseleave
    $(this).find(".submenu").stop().slideUp();
})
$(".nav > ul > li a").click(function(){
    $(".nav > ul > li").removeClass("active");
    $(this).parents('li').addClass("active");
})

$(".slideList").children('div:gt(0)').hide();

let currentIndex = 0;
setInterval(function(){
    $(".slideList").find(`div`).eq(currentIndex).fadeOut();
    currentIndex = (currentIndex+1)%3;
    $(".slideList").find(`div`).eq(currentIndex).fadeIn();
    console.log(currentIndex)
},3000);