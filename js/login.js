

$(function(){
	
	$("#login").click(function(){
		var user={
			username:$(".login_txt").val(),
			password:$(".pass").val()
		};
		//异步POST请求
		$.post("loginCheck.php",user,function(data){
//			console.log(data)
			if (data.status == 1) {
				$("#login_username_notice").text("用户名不存在"); 
                   $("#login_password_notice").text("密码错误");               }
				else {
//				if($(".login_checkbox").checked){
						 $.cookie("user", $(".login_txt").val(), { expires: 7 }); 			
					location = "index.html";}
			
		},"json");
		
		
		
	});
	if($.cookie("user")){
		$(".login_txt").val($.cookie("user"));
		$(".login_checkbox").css("checked","checked");
		}
	

	
	
	
})



