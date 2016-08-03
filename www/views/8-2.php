<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>8-2.php</title>
</head>
<body>
<?php
	$password = $_GET["password"];
	if($password == "1111"){
		echo "주인님 환영합니다.";
		echo $_GET["password"];
	}else{
		echo "누구세요?";
	}
?>
</body>
</html>