$(function(){
	
	$.get("data/imprortFood.json",function(data){
		var data2=JSON.parse($.cookie("init"));
		var cart=$(".cart_body")
		var str="";
		for(var i=0;i<data.length;i++){
			for(var key in data2){
         		if(data[i].id==key){
         			
         			str+=`<div class="row" data-id="${data[i].id}">
						<input type="checkbox" class="one" name="one" id="one" value="" />
						<div class="b1">
                              <img src="${data[i].images}"/>		
                              <p>${data[i].title}</p>
						</div>
						<div class="b2">
							口味:${data[i].type}
						</div>
						<div class="b3">
							${data[i].price}
						</div>
						<div class="Num">
							<span class="minus">-</span><input type="text" name="" class="amount" value="${data2[key]}" /><span class="add">+</span>
						</div>
						<div class="price">
							${data[i].price}
						</div>
						<div class="delete">
							删除
						</div>
					</div>`
         		}
			}
		}
		cart.html(str);
//		+
		var amount=$(".amount")
		$(".add").click(function(){
			var Nval=$(this).parent().children().eq(1);
			var numVal=Number($(this).parent().children().eq(1).val());
			numVal++;
			Nval.val(numVal);
			var numid=$(this).parent().parent().attr("data-id");
			data2[numid]=numVal;
			var objstr=JSON.stringify(data2);
			$.cookie("init",objstr,{expires:10})
			total();
		})
//		-
      $(".minus").click(function(){
			var Nval=$(this).parent().children().eq(1);
			var numVal=Number($(this).parent().children().eq(1).val());
			if(numVal<=1){
				return;
			}else{
				numVal--;
			}
			Nval.val(numVal);
			var numid=$(this).parent().parent().attr("data-id");
			data2[numid]=numVal;
			var objstr=JSON.stringify(data2);
			$.cookie("init",objstr,{expires:10})
			total();
		})
//	计算小计	
   var rows=$(".row");
   var rows_len=rows.length;
	for(var i=0;i<rows_len;i++){
		var single=Number($(".b3").eq(i).html().replace(/￥/g,''))*$(".amount").eq(i).val()
	    
	}
	function total(){
		var total1=$("#total");
		var rows=$(".row");
		var all=0;
		var rows_len=rows.length;
		for(var i=0;i<rows_len;i++){
			var single=Number($(".b3").eq(i).html().replace(/￥/g,''))*$(".amount").eq(i).val();
			if($(".one").eq(i).prop('checked')==true){
			  all+=single;
			}
		}
		var all1=all.toFixed(2)
		total1.html("￥"+all1+"元")
	}
	total();
	$(".one").click(function(){
		total();
	})
	$("#All").click(function(){
		var status =$(this).prop('checked');
		for(var i=0;i<$(".one").length;i++){
//			if(status){
//			   $(".one").eq(i).prop('checked',true);
//		    }else{
//		    	 $(".one").eq(i).prop('checked',false);
//		    }
		    $(".one").eq(i).prop('checked',status)
	     }	
	     total();
	     
	})
//	删除商品
 $(".delete").click(function(){
    	
    	$(this).parent().remove();
    	var ab=$(this).parent().attr("data-id");
    	delete data2[ab];
    	var objstr01=JSON.stringify(data2);
    	console.log(objstr01)
    	$.cookie("init",objstr01,{ expires: 7 })
    })

  })
	
   
})
