$(function(){


//口味选择
$(".hm").addClass("active3")
 var type=$(".type>p");
 type.click(function(){
 	$(this).addClass("active3").siblings().removeClass("active3")
 })
//加载页面
var str01=location.href;
var arr=str01.split("?");

$.get("data/imprortFood.json",function(data){
	var str02='';
	for(var i=0;i<data.length;i++){
		if(data[i].id==arr[1]){
			str02+=`<div class="top">
					<div class="wz">
						<a href="##">进口</a><code>></code>
						<a href="##">饼干</a><code>></code>
						<p>${data[i].title}</p>
					</div>
				</div>
				<div class="product_content">
				<div class="left">
						
					
					<div class="bigbox">
						<img src="${data[i].images}"/>
						<div id="filter"></div>
					</div>
					<div id="maxPic">
						<img src="${data[i].images}" class="max"/>
					</div>
					<div id="sbox">
						<img src="${data[i].images}"/>
					</div>
				  </div>
				  <div class="right">
				  	
				  	<h3>${data[i].title}</h3>
				  	<p class="zhizao"><strong>【韩国制造】</strong></p>
				    <div class="star">
				    	<img src="img/stars5.gif"/>
				    	<a href="##">0条商品评论</a>
				    </div>
				    <div class="xian"></div>
				    <p class="price">价格：<span>$33.00</span></p>
				    <p class="bianhao">商品编号：8801073140578<span>商品库存：(96)</span></p>
				    <p class="zl">重量：700克</p>
				    <div class="xian"></div>
				    <div class="type">
				    	<span>口味：</span>
				    	<p class="hm">哈密瓜味</p>
				    	<p class="cm">草莓味</p>
				    </div>
				    <div class="buy_num">
				    	<span>购买数量：</span>
				    	<p class="prev"></p>
				    	<input type="text" name="" id="num" value="1" />
				    	<p class="next"></p>
				    </div>
				    <div class="buy_now" data-id="${data[i].id}">
				    	<a href="##" class="now"></a>
				    	<a href="##" class="addCart"></a>
				    </div>
				    <div class="area">
				    	广东省内地区购物满99元免运费，约3日内送达；广东省外地区购物满159元免运费，约5日内送达（港澳台、西藏、新疆、内蒙古地区及中国境外地区除外）
				    </div>
				    <div class="icons">
				    	<a href="##"></a>
				    	<a href="##"></a>
				    	<a href="##"></a>
				    	<a href="##"></a>
				    	<a href="##"></a>
				    	<a href="##"></a>
				    	
				    </div>
				  </div>
			</div>
			
			`
		}
	}
	$("#mains_right").html(str02);
		$(".bigbox").mousemove(function(e){
		$("#filter").css("display","block");
		$("#maxPic").css("display","block");
		var l=e.pageX-$(".bigbox").offset().left-($("#filter").width()/2);
		var t=e.pageY-$(".bigbox").offset().top-($("#filter").height()/2);
		if(l<0){
			l=0;
		}
		if(t<0){
			t=0;
		}
		if(l>$(".bigbox").width()-$("#filter").width()){
			l=$(".bigbox").width()-$("#filter").width();
		}
		if(t>$(".bigbox").height()-$("#filter").height()){
			t=$(".bigbox").height()-$("#filter").height()
		}
		var l1=l+"px";
		var t1=t+"px";
		$('#filter').css("left",l1);
		$('#filter').css("top",t1);
		var l2=-l*2+"px"
		var t2=-t*2+"px"
		$(".max").css({left:l2,top:t2});
		
		$(".bigbox").mouseout(function(){
			$("#filter").css("display","none");
		    $("#maxPic").css("display","none");
		})
		
	})
//		lll
var nav_left=$(".nav_left");
    	var a1=$("#firstPage");
    	a1.addClass("active2");
    	nav_left.on("click","a",function(){
    		$(this).addClass("active2").siblings().removeClass("active2");
    		
    		
    	})
    	var feilei=$(".fenlei");
    	var feilei_list=$("#fenlei_list")
    	feilei.mouseover(function(){
    		feilei.css("cursor","pointer")
    		feilei_list.stop(true).slideDown(500)
    		feilei.mouseout(function(){
    			feilei_list.stop(true).slideUp(500)
    		})
    	})
    	
    	
   // 加入购物车
   var init=$.cookie("init");
   if(init){
   	obj=JSON.parse(init)
	   }else{
	   	var obj={}
	   }
   
   var sum=1;
   var im_list=$("#im_list");
   var jl=$(".addCart");
   jl.on("click",function(){
   	var numID=$(this).parent().attr("data-id");
   	if(obj[numID]==undefined){
   		obj[numID]=sum;
   	}else{
   		obj[numID]++;
   	}
   	var objstr=JSON.stringify(obj);
   	$.cookie("init",objstr,{ expires: 7 })
   })
		
		
	
})





})
