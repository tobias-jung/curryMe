<html>
<head>
<meta charset="utf-8"/>
<title>Page Redirection!</title>
<meta http-equiv="refresh" content="3; url=../start.php">
</head>
<body>
<?php
session_start();
if (!empty($_POST['anmeldename']) AND !empty($_POST['pwd']))
{
	
//DB Verbindung
require_once 'settings.php';
	
	
//Felder �bergeben
$login = $_POST['anmeldename'];
$password = $_POST['pwd'];
$vorname = $_POST['vorname'];
$nachname = $_POST['nachname'];
$email	= $_POST['e-mail'];

//Abfrage in der DB


$control = 0;
$ergebnis = mysql_query("SELECT `e-mail` FROM `user` WHERE `e-mail` = '$email'");
	while ($row = mysql_fetch_object($ergebnis)) 
	{
	$control ++;	
	}
	if ($control != 0){
		echo "E-mail bereits vergeben";}
	else {
		while (true){
			if (filter_var($email, FILTER_VALIDATE_EMAIL)) 
			{
				$Query = mysql_query("INSERT INTO `webproggen`.`user`
						(`anmeldename`, `e-mail`, `vorname`, `nachname`, `passwort`)
						VALUES ('$login', '$email', '$vorname', '$nachname', '$password')");
				if ($Query == true){
					echo "Registrierung erfolgreich!";
					return;
				}
				else {
					echo "Registrierung fehlgeschlagen";
					return;
				}
			}
			
			else {
				echo "E-Mail falsch";
				return;
					}
		}
	}
	}

?>
</body>
</html>
