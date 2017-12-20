$(function(){
	
	$.get("data/imprortFood.json",function(data){
	var pager=$("#pager");
	var ofirst=$(".first")
	var olast=$(".last")
	var pagelen=60;
	var len=data.length;
	var num=Math.ceil(len/pagelen);
	for(var i=0;i<num;i++){
		var a=$('<a href="##" class="page"></a>');
		a.html(i+1);
		a.insertBefore(olast)
	}
//	加载数据
     datapage(0)
     function datapage(n){
     	var start=n*pagelen,
     	    end=Math.min(len,(n+1)*pagelen);
     	var _data=data.slice(start,end);
     	var str=template("test",{products:_data});
	     $("#im_list").html(str);
     	
     }
//	点击
    var now=1;
    var opage=$(".page");
    opage.click(function(){
 	datapage($(this).index()-1);
 	now=$(this).index();
    })
	
	ofirst.click(function(){
		if(now==1){
			return
		}else{
			datapage(now-2);
			now--;
		}
	})
	olast.click(function(){
		if(now==num){
			return
		}else{
			datapage(now);
			now++
		}
	})
	
	// 加入购物车
//	var obj={};
   var sum=1;
   var init=$.cookie("init");
   if(init){
   	obj=JSON.parse(init)
	   }else{
	   	var obj={}
	   }
   var im_list=$("#im_list");
   var jl=$(".t3");
   jl.on("click",function(){
   	var numID=$(this).parent().parent().attr("data-id");
   	if(obj[numID]==undefined){
   		obj[numID]=sum;
   	}else{
   		obj[numID]++;
   	}
   	var objstr=JSON.stringify(obj);
   	$.cookie("init",objstr,{ expires: 7 })
   })
// 跳转详情页
	$(".food_img").click(function(){
		var numId=$(this).parent().parent().attr("data-id");
		location.href="detail.html?"+numId
	})
  
})
	
   console.log(123)
	
	
	
})

