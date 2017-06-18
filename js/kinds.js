var kindul=document.querySelector(".kind_ul");
var myScroll = new IScroll("#wrapper",{
	mouseWheel: true,  
	scrollbars: true  
});
$.ajax({
//	url:"http://datainfo.duapp.com/shopdata/getclass.php",res[i].icon
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	dataType : "jsonp",
	success:function(res){
		var str="";
//		console.log(res);
		for(var i=0;i<9;i++){
			str+="<li><a href='http://127.0.0.1:8020/webapp-day05-4-28/gooslist.html'><img src='"+res[i].goodsListImg+"'/><p>"+res[i].className+"</p></a></li>";
		}
		kindul.innerHTML+=str;
		myScroll.refresh();
	}
});
