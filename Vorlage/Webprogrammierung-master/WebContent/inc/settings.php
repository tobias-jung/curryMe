<?php 
 // MySQL connect information. 
$c_username = "root"; 
$c_password = ""; 
$c_host = "localhost"; 
$c_database = "webproggen"; 

// Connect. 
$connection = mysql_connect($c_host, $c_username, $c_password) 
or die ("Datenbank antwortet nicht."); 

mysql_select_db($c_database) 
or die ("Datenbank antwortet nicht."); 
?>
