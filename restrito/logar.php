<?php
	$senha=$_POST['login-pass'];
	$cryptpass = crypt("jean");
	if(crypt($senha, $cryptpass) == $cryptpass){
		session_start();
		$_SESSION['logado'] = true;
		header("location: restrito/index.html");
	}
?>