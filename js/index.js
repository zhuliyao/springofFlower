var nowMax=2;	
$(function(){
//	楼层
	var allFloor=$(".zly")
	var Floor=$("#Floor");
	var allLi=$("#Floor>li");
	var bgk=$(".bgk");
	var dname=$(".dname");
	var ch = document.documentElement.clientHeight||document.body.clientHeight;
    $(window).scroll(function(){
    	var scrollT=$(window).scrollTop();
    	if(scrollT>1200-ch/2){

    		Floor.fadeIn()
    	}else{
    		Floor.fadeOut()
    	}
    	allFloor.each(function(i){
    		var t=$(this).offset().top;
    		var h=$(this).outerHeight();
    		if((t<scrollT+ch/2)&&(t+h>scrollT+ch/2)){
					allLi.eq(i).addClass("active").siblings().removeClass("active");
					bgk.eq(i).css("display","none");
					dname.eq(i).css("display","block")
					
				}else{
					bgk.eq(i).css("display","block");
					dname.eq(i).css("display","none")
				}
    		
    		
    		
    	});
    	allLi.click(function(){
    		var t=allFloor.eq($(this).index()).offset().top-50;
    		$("body,html").stop(true).animate({
					scrollTop:t
					
				},500)
    	})   	
    })
  //点击回到顶部
  var to_top1=$("#to_top1")
  to_top1.click(function(){
  	$("body,html").stop(true).animate({
					scrollTop:0
					
				},500)
  	
  })
  
  
 //热卖推荐
 var onews_item=$(".news_item1")
 $.ajax({
 		type:"get",
   	url:"data/product.json",
   	dataType:"json",
   	success:function(data){
   		for(var i=0;i<data.length;i++){
   				var str3="";   				
	   			if(data[i]['lei']=="newGoods"){
			   			str3=$(`<div class="nbox1" data-id=${data[i].id} style="cursor: pointer;">
										<a href="##"><img src="${data[i].images}"/></a>
										<p class="t1">${data[i].title}</p>
										<p class="t2">${data[i].price}</p>
									</div>`);
						onews_item.append(str3);
			   		}
	   			
   			}
  		
   		$('#news_top>li').mouseover(function(){
   			$(".news_item1").css("left",0)
   			onews_item.html('');
   			for(var i=0;i<data.length;i++){
   				var str3="";
	   			if(data[i]['lei']==$(this).attr('data-id')){
			   			str3=$(`<div class="nbox1" data-id=${data[i].id} style="cursor: pointer;">
										<a href="##"><img src="${data[i].images}"/></a>
										<p class="t1">${data[i].title}</p>
										<p class="t2">${data[i].price}</p>
									</div>`);
						onews_item.append(str3);
			   		}
   			}
// 			console.log($(".nbox1").length)
   			 nowMax=Math.ceil($(".nbox1").length/6);		
// 			 console.log(nowMax)
   		})
   	}
 	
 	
 })
 //tab
 $('#news_top>li').mouseover(function(){
 	$(this).addClass('active1').siblings().removeClass("active1");
 	
 	
 	
 })

 //左右点击事件   
   var oleft_click=$(".left_click") 
    var ocontent=$(".news_content")
    ocontent.mouseover(function(){
    	oleft_click.stop(true).animate({
    		left:"0",
    		opacity:"1"
    		
    		
    	},500)
 })
    ocontent.mouseout(function(){
    	oleft_click.stop(true).animate({
    		left:"-29",
    		opacity:"0"
    	},500)
 })
    
     var oright_click=$(".right_click") 
    var ocontent=$(".news_content")
    ocontent.mouseover(function(){
    	oright_click.stop(true).animate({
    		right:"0",
    		opacity:"1"
    		
    		
    	},500)
 })
    ocontent.mouseout(function(){
    	oright_click.stop(true).animate({
    		right:"-29",
    		opacity:"0"
    	},500)
 })
    
    
    
    
    
//  1F添加商品
    var one_shop=$("#one_shop")
     var two_shop=$("#two_shop");
   $.ajax({
   	type:"get",
   	url:"data/product.json",
   	dataType:"json",
   	success:function(data){
//    console.log(11)
   		var str="";
   		for(var i=0;i<8;i++){
   			str+=`<div class="box"  data-id=${data[i].id} style="cursor: pointer;">
						<img src="${data[i].images}"/>
						<p class="miaoshu"><a href="##">${data[i].title}</a></p>
					     <p class="price">${data[i].price}</p>
					</div>`
   		}
   		one_shop.html(str)
   		//热销商品添加
   		var one_right=$("#one_right")
   		var str1="";
   		str1+=`<h3>热销排行榜</h3>
						<ul id="hotsell">
							<li class="firstHot">
								<img src="${data[0].images}"/>
								<div class="firstHot_right">
									<p><a href="##">${data[0].title}</a></p>
								    <p>${data[0].price}</p>
								
								</div>
							</li>
							<li>
								<p id="hotname"><span>2</span>&nbsp;<a href="##">${data[1].title}</a></p>
								<p id="hotprice">${data[1].price}</p>													
							</li>
							<li>
								<p id="hotname"><span>3</span>&nbsp;<a href="##">${data[2].title}</a></p>
								<p id="hotprice">${data[2].price}</p>
							</li>
							<li>
								<p id="hotname"><span>4</span>&nbsp;<a href="##">${data[3].title}</a></p>
								<p id="hotprice">${data[3].price}</p>
							</li>
							<li>
								<p id="hotname"><span>5</span>&nbsp;<a href="##">${data[4].title}</a></p>
								<p id="hotprice">${data[4].price}</p>
							</li>
							<li>
								<p id="hotname"><span>6</span>&nbsp;<a href="##">${data[5].title}</a></p>
								<p id="hotprice">${data[5].price}</p>
							</li>
							<li>
								<p id="hotname"><span>7</span>&nbsp;<a href="##">${data[6].title}</a></p>
								<p id="hotprice">${data[6].price}</p>
							</li>
							<li>
								<p id="hotname"><span>8</span>&nbsp;<a href="##">${data[7].title}</a></p>
								<p id="hotprice">${data[7].price}</p>
							</li>
							
						</ul>`
   		one_right.html(str1)
   		
   	}
// 	error:function(e){
// 		console.log(e)
// 	}
   });
// 2F添加商品
    var two_shop=$("#two_shop");
   $.ajax({
   	type:"get",
   	url:"data/product.json",
   	dataType:"json",
   	success:function(data){
   		var str="";
   		for(var i=8;i<16;i++){
   			str+=`<div class="box"  data-id=${data[i].id} style="cursor: pointer;">
						<img src="${data[i].images}"/>
						<p class="miaoshu"><a href="##">${data[i].title}</a></p>
					     <p class="price">${data[i].price}</p>
					</div>`
   		}
   		two_shop.html(str)
   		//热销商品添加
   		var two_right=$("#two_right")
   		var str1="";
   		str1+=`<h3>热销排行榜</h3>
						<ul id="hotsell">
							<li class="firstHot">
								<img src="${data[8].images}"/>
								<div class="firstHot_right">
									<p><a href="##">${data[8].title}</a></p>
								    <p>${data[8].price}</p>
								
								</div>
							</li>
							<li>
								<p id="hotname"><span>2</span>&nbsp;<a href="##">${data[9].title}</a></p>
								<p id="hotprice">${data[1].price}</p>													
							</li>
							<li>
								<p id="hotname"><span>3</span>&nbsp;<a href="##">${data[10].title}</a></p>
								<p id="hotprice">${data[2].price}</p>
							</li>
							<li>
								<p id="hotname"><span>4</span>&nbsp;<a href="##">${data[11].title}</a></p>
								<p id="hotprice">${data[3].price}</p>
							</li>
							<li>
								<p id="hotname"><span>5</span>&nbsp;<a href="##">${data[12].title}</a></p>
								<p id="hotprice">${data[4].price}</p>
							</li>
							<li>
								<p id="hotname"><span>6</span>&nbsp;<a href="##">${data[13].title}</a></p>
								<p id="hotprice">${data[5].price}</p>
							</li>
							<li>
								<p id="hotname"><span>7</span>&nbsp;<a href="##">${data[14].title}</a></p>
								<p id="hotprice">${data[6].price}</p>
							</li>
							<li>
								<p id="hotname"><span>8</span>&nbsp;<a href="##">${data[15].title}</a></p>
								<p id="hotprice">${data[7].price}</p>
							</li>
							
						</ul>`
   		two_right.html(str1)

   		
   	}
   });
//3楼添加商品
 var three_shop=$("#three_shop");
   $.ajax({
   	type:"get",
   	url:"data/product.json",
   	dataType:"json",
   	success:function(data){
   		
   		
   		var str="";
   		for(var i=16;i<24;i++){
   			
// 			console.log(data[18].price)
// 			var zz=(data[18].price).substr(1)
// 			console.log(zz)
   			str+=`<div class="box"  data-id=${data[i].id} style="cursor: pointer;">
						<img src="${data[i].images}"/>
						<p class="miaoshu"><a href="##">${data[i].title}</a></p>
					     <p class="price">${data[i].price}</p>
					</div>`
   		}
   		three_shop.html(str)
   		//热销商品添加
   		var three_right=$("#three_right")
   		var str1="";
   		str1+=`<h3>热销排行榜</h3>
						<ul id="hotsell">
							<li class="firstHot">
								<img src="${data[16].images}"/>
								<div class="firstHot_right">
									<p><a href="##">${data[16].title}</a></p>
								    <p>${data[16].price}</p>
								
								</div>
							</li>
							<li>
								<p id="hotname"><span>2</span>&nbsp;<a href="##">${data[17].title}</a></p>
								<p id="hotprice">${data[1].price}</p>													
							</li>
							<li>
								<p id="hotname"><span>3</span>&nbsp;<a href="##">${data[18].title}</a></p>
								<p id="hotprice">${data[2].price}</p>
							</li>
							<li>
								<p id="hotname"><span>4</span>&nbsp;<a href="##">${data[19].title}</a></p>
								<p id="hotprice">${data[3].price}</p>
							</li>
							<li>
								<p id="hotname"><span>5</span>&nbsp;<a href="##">${data[20].title}</a></p>
								<p id="hotprice">${data[4].price}</p>
							</li>
							<li>
								<p id="hotname"><span>6</span>&nbsp;<a href="##">${data[21].title}</a></p>
								<p id="hotprice">${data[5].price}</p>
							</li>
							<li>
								<p id="hotname"><span>7</span>&nbsp;<a href="##">${data[22].title}</a></p>
								<p id="hotprice">${data[6].price}</p>
							</li>
							<li>
								<p id="hotname"><span>8</span>&nbsp;<a href="##">${data[23].title}</a></p>
								<p id="hotprice">${data[7].price}</p>
							</li>
							
						</ul>`
   		three_right.html(str1)
   		
   	}
   });
//4楼添加商品
var four_shop=$("#four_shop");
   $.ajax({
   	type:"get",
   	url:"data/product.json",
   	dataType:"json",
   	success:function(data){
   		var str="";
   		for(var i=24;i<32;i++){
   			str+=`<div class="box"  data-id=${data[i].id} style="cursor: pointer;">
						<img src="${data[i].images}"/>
						<p class="miaoshu"><a href="##">${data[i].title}</a></p>
					     <p class="price">${data[i].price}</p>
					</div>`
   		}
   		four_shop.html(str)
   		//热销商品添加
   		var four_right=$("#four_right")
   		var str1="";
   		str1+=`<h3>热销排行榜</h3>
						<ul id="hotsell">
							<li class="firstHot">
								<img src="${data[24].images}"/>
								<div class="firstHot_right">
									<p><a href="##">${data[24].title}</a></p>
								    <p>${data[24].price}</p>
								
								</div>
							</li>
							<li>
								<p id="hotname"><span>2</span>&nbsp;<a href="##">${data[25].title}</a></p>
								<p id="hotprice">${data[1].price}</p>													
							</li>
							<li>
								<p id="hotname"><span>3</span>&nbsp;<a href="##">${data[26].title}</a></p>
								<p id="hotprice">${data[2].price}</p>
							</li>
							<li>
								<p id="hotname"><span>4</span>&nbsp;<a href="##">${data[27].title}</a></p>
								<p id="hotprice">${data[3].price}</p>
							</li>
							<li>
								<p id="hotname"><span>5</span>&nbsp;<a href="##">${data[28].title}</a></p>
								<p id="hotprice">${data[4].price}</p>
							</li>
							<li>
								<p id="hotname"><span>6</span>&nbsp;<a href="##">${data[29].title}</a></p>
								<p id="hotprice">${data[5].price}</p>
							</li>
							<li>
								<p id="hotname"><span>7</span>&nbsp;<a href="##">${data[30].title}</a></p>
								<p id="hotprice">${data[6].price}</p>
							</li>
							<li>
								<p id="hotname"><span>8</span>&nbsp;<a href="##">${data[31].title}</a></p>
								<p id="hotprice">${data[7].price}</p>
							</li>
							
						</ul>`
   		four_right.html(str1)
   		
   	}
   });
//5楼添加商品
var five_shop=$("#five_shop");
   $.ajax({
   	type:"get",
   	url:"data/product.json",
   	dataType:"json",
   	success:function(data){
   		var str="";
   		for(var i=32;i<40;i++){
   			str+=`<div class="box"  data-id=${data[i].id} style="cursor: pointer;">
						<img src="${data[i].images}"/>
						<p class="miaoshu"><a href="##">${data[i].title}</a></p>
					     <p class="price">${data[i].price}</p>
					</div>`
   		}
   		five_shop.html(str)
   		//热销商品添加
   		var five_right=$("#five_right")
   		var str1="";
   		str1+=`<h3>热销排行榜</h3>
						<ul id="hotsell">
							<li class="firstHot">
								<img src="${data[32].images}"/>
								<div class="firstHot_right">
									<p><a href="##">${data[32].title}</a></p>
								    <p>${data[32].price}</p>
								
								</div>
							</li>
							<li>
								<p id="hotname"><span>2</span>&nbsp;<a href="##">${data[33].title}</a></p>
								<p id="hotprice">${data[1].price}</p>													
							</li>
							<li>
								<p id="hotname"><span>3</span>&nbsp;<a href="##">${data[34].title}</a></p>
								<p id="hotprice">${data[2].price}</p>
							</li>
							<li>
								<p id="hotname"><span>4</span>&nbsp;<a href="##">${data[35].title}</a></p>
								<p id="hotprice">${data[3].price}</p>
							</li>
							<li>
								<p id="hotname"><span>5</span>&nbsp;<a href="##">${data[36].title}</a></p>
								<p id="hotprice">${data[4].price}</p>
							</li>
							<li>
								<p id="hotname"><span>6</span>&nbsp;<a href="##">${data[37].title}</a></p>
								<p id="hotprice">${data[5].price}</p>
							</li>
							<li>
								<p id="hotname"><span>7</span>&nbsp;<a href="##">${data[38].title}</a></p>
								<p id="hotprice">${data[6].price}</p>
							</li>
							<li>
								<p id="hotname"><span>8</span>&nbsp;<a href="##">${data[39].title}</a></p>
								<p id="hotprice">${data[7].price}</p>
							</li>
							
						</ul>`
   		five_right.html(str1)
   		
   	}
   });

//左右滑动轮播效果
var news_item=$(".news_item1");
var now=0;


   function move(){
   	   news_item.stop(true).animate({
   	   	      "left":-(1200)*now
   	   })
   }
   
   $("#right_click").click(function(){
   	  if(now!=nowMax-1){
   	  	now++;
   	  	move()
   	  }else{
   	  	return
   	  }
   })
   $("#left_click").click(function(){
   	  if(now==0){
   	  	return
   	  }else{
   	  	now--;
   	  	move()
   	  }
   	  
   })

})
