$(function(){
	var username_reg=/^[a-zA-Z_]\w{5,14}$/;
	var password_reg=/^[\x21-\x7E]{6,20}$/;
	var phone_reg=/^[1-3]\d{10}$/;
	var email_reg=/^\w+@\w+(\.\w+)+$/;
	var oyes=$(".yes");
	var oyes1=$(".yes1");
	var oyes2=$(".yes2");
	var oyes3=$(".yes3");
	var oyes4=$(".yes4");
	var orp1=$("#rp1");
	var orp2=$("#rp2");
	var orp3=$("#rp3");
	var orp4=$("#rp4");
	var orp5=$("#rp5");
	var orp6=$("#rp6");
	       
	var oname=$("#username");
	  oname.blur(function(){
//	  	if(!username_reg.test(oname.val())){
//	  		orp1.html("账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间")
//	  	}else{
//	  		
//	  		oyes.css("display","block")
//	  	}
	  });
	var opassword=$("#password");
	opassword.blur(function(){
		if(password_reg.test(opassword.val())){
			oyes1.css("display","block")
			orp2.html("");
		}else{
			orp2.html("6-20位字母、数字或符号的组合");
		}
	});
	var opassword1=$("#password1")
	opassword1.blur(function(){
		if(opassword.val()==opassword1.val()){
			oyes2.css("display","block");
			orp3.html("")
		}else{
			orp3.html("两次密码输入不一致")
		}
	});
	var ophone=$("#phone");
	ophone.blur(function(){
	if(phone_reg.test(ophone.val())){
		oyes3.css("display","block")
		orp4.html("");
	}else{
		orp4.html("手机格式不正确");
	}
	
	});
	var oemail=$("#email");
	oemail.blur(function(){
		if(email_reg.test(oemail.val())){
			oyes4.css("display","block")
		    orp5.html("");
		}else{
			orp5.html("邮箱格式不正确")
		}
	});
	//判断用户名是否可用
	$("#username").on("blur",function(){
		$.get("check.php",{username:$(this).val()},function(data){
//			console.log(data)
			if(!username_reg.test(oname.val())){
	  		orp1.html("账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间");
	  		   
	  	}else{
	  		if(data.status == 0){
	  		   	  orp1.html("用户名已存在，请重新选择");
	  		   }else{
	  		orp1.html("用户名可以使用")
	  		oyes.css("display","block")
	  	  }
	  	}
//           if(data.status == 0){
//	  		   	  orp1.html("用户名已存在，请重新选择");
//	  		   }else{
//	  		orp1.html("用户名可以使用")
//	  		oyes.css("display","block")
//	  	}
			
		},"json")
		
	});
	//注册
	$("#register1").click(function(){
		var user={
		    username:$("#username").val(),
		    password:$("#password").val(),
		    phone:$("#phone").val(),
		    email:$("#email").val()
		};
		//异步POST请求
		$.post("register.php",user,function(data){
			console.log(data.status)
			if (data.status == 1) {
				
					location.href= "login.html";}
				else {
					console.log("失败")}
		},"json")
	})
	
})
