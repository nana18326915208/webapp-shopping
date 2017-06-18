//banner
var swiperWrapper = document.querySelector(".swiper-wrapper");
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    loop : true,
    autoplay : 3000
});
var myScroll = new IScroll("#wrapper",{
	mouseWheel: true,  
	scrollbars: true  
});
$.ajax({
	url:"http://datainfo.duapp.com/shopdata/getBanner.php",
	dataType:"jsonp",
	success:function(res){
//		console.log(res);
		var divimg="";
		var banUrl=JSON.parse(res[0].goodsBenUrl);
		for(var i=0;i<banUrl.length;i++){
			divimg+="<div class='swiper-slide'><img src='"+banUrl[i]+"'/></div>"
		}
		swiperWrapper.innerHTML=divimg;
		swiper.update();
		myScroll.refresh();
	}
})
