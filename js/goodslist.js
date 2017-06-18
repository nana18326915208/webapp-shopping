var goodslist=$(".goods_ul li");
goodslist.click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})


var itemlist=document.querySelector(".item_list");
$.ajax({
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	dataType:"jsonp",
	success:function(res){
		console.log(res);
		var itemli="";
		for(var i=0;i<10;i++){
			itemli+="<li class='clear'><a href='http://127.0.0.1:8020/webapp-day05-4-28/goodsdetail.html'><img class='li_l l' src='"+res[i].goodsListImg+"'/><div class='li_r'><p class='p_title'>"+res[i].goodsName+"</p><p class='price'>￥"+res[i].price+"</p><p class='old_price'>￥"+res[i].price+"</p></div></a></li>";
		}
		itemlist.innerHTML+=itemli;
		myScroll.refresh();
	}
});