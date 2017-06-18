//轮播
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop : true,
	autoplay : 3000
});
//滚动条
var myScroll = new IScroll("#wrapper",{
	mouseWheel: true,  
	scrollbars: true  
});
//document.addEventListener("touchend",function(){
//	if( myScroll.y > 50 ){
//		console.log("下拉刷新");
//	}
//	myScroll.refresh();
//})

var oDd=$("dd");
oDd.click(function(){
	$(this).addClass("check").siblings().removeClass("check");
})

var gfli= $(".goods-fnav li");
gfli.click(function(){
	$(this).addClass("on").siblings().removeClass("on");
});

