<?php

session_start();
setcookie(session_name(), '', 100);
session_unset();
session_destroy();
$_SESSION = array();
header("location: ../start.php");
?>
<!--  
unset($_SESSION["login"]);  // where $_SESSION["nome"] is your own variable. if you do not have one use only this as follow **session_unset();**

?>
-->
