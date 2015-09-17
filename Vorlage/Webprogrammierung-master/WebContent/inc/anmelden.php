<?php session_start();
if (!empty($_POST['anmeldename']) AND !empty($_POST['pwd']))
{
	
//DB Verbindung
require_once 'settings.php';
	
//Felder übergeben
$Login = $_POST['anmeldename'];
$Password = $_POST['pwd'];	

//Abfrage in der DB
$Query = mysql_query("SELECT * FROM user WHERE anmeldename='$Login' AND passwort='$Password'");
$NumRows = mysql_num_rows($Query);

if($NumRows != 0)
{
	while($Row = mysql_fetch_assoc($Query))
	{
		$Vorname = $Row['vorname'];
		
	}
	
	setcookie("login", $Vorname, 0 , "/");
	
	
}
else
{
	die("Anmeldename oder Passwort falsch!");
	exit();
}

//Link Weiterleitung
$cat = $_POST['cat'];
$activemenu = $_POST['activemenu'];

if(isset($_POST['cat']) AND isset($_POST['activemenu'])){	header('Location: ../start.php?cat='.$cat.'&activemenu='.$activemenu.'');}
else{														header('Location: ../start.php');}  


exit();
}
else
{
    echo "Login fehlgeschlagen!";
}
?>
