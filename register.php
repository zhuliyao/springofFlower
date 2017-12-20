<?php
    $username=$_REQUEST["username"];
    $password=$_REQUEST["password"];
    $phone=$_REQUEST["phone"];
    $email=$_REQUEST["email"];
    // 连接数据库服务器
	mysql_connect("localhost:3306", "root", "root");
	
	mysql_select_db("h51706");
	// 创建添加的SQL语句
	$sql = "INSERT INTO student (username, password, phone, email) VALUES ('$username', '$password', '$phone', '$email')";
	// 执行SQL语句，返回执行结果的boolean值
	$result = mysql_query($sql);
	if ($result) {
		echo '{"status":1, "message":"success"}';
	} else {
		echo '{"status":0, "message":"failed"}';
	}
	// 关闭数据库连接
	mysql_close();
?>