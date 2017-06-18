document.documentElement.style.fontSize=document.documentElement.clientWidth/6.4+"px";
window.addEventListener("resize",function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth /  6.4 + "px";
})
//滚动条
var myScroll = new IScroll("#wrapper",{
	mouseWheel: true,  
	scrollbars: true  
});
//footer
var $fli=$("#f_ul li");
$fli.click(function(){
	console.log(1)
	$(this).addClass("action").siblings().removeClass("action");
})