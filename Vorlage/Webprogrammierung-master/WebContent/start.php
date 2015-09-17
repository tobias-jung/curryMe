<?php header('Content-Type: text/html; charset=ISO-8859-1');  session_start(); ?>
<!DOCTYPE html>
<html dir="ltr" lang="de-DE">
<head>
	<!-- Kodierung des Files UTF-8 Standard -->
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <meta charset="UTF-8">
	
    <title>GC DHBW</title>
	
	<!-- Favicon -->
	<link rel="icon" href="img/icon.png" type="image/png"/> 
	
	<!-- Stylesheetdateien -->
	    <link rel="stylesheet" type="text/css" media="all" href="css/style.css">
	    <link rel="stylesheet" type="text/css" href="css/mobile-style.css">
	    <link rel="stylesheet" type="text/css" href="css/contactform.css">
	 
	<!-- Stylesheetdateien ENDE /-->

	<!-- Java Script -->

	 <script type="text/javascript" src="../src/extras.js"></script>
	 <script type="text/javascript" src="../src/storage.js"></script>
	 <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
    <!-- Java Script ENDE -->
	<!-- Viewport skalliert die Seite für Mobile-Devices Faktor 1 = 100% -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <style type="text/css" media="screen"> 
		body {background:  url(img/background.jpg)  no-repeat center center fixed; 
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
		}
    </style> 

</head>

<body id="top">
	<div class="wrapper">
		<header>
			
			<nav id="main-nav">
			
				<div class="main-menu"><ul class="menu">
					<li class="menu-item <?php if(!isset ($_GET['activemenu'])){echo'current-meno-item';}?>">
						<a href="start.php?cat=Startseite">Startseite</a>
					</li>
					<li class="menu-item <?php if($_GET['activemenu']==2){echo'current-menu-item';}?>">
						<a href="#">Golfclub <span class="sub-indicator"></span></a>
						<ul class="sub-menu">
							<li class="menu-item"><a href="start.php?cat=vorstand&activemenu=2">Vorstand</a></li>
							<li class="menu-item"><a href="start.php?cat=geschaeftsstelle&activemenu=2">Geschäftsstelle</a></li>
						</ul>
					</li>
					<li class="menu-item <?php if($_GET['activemenu']==3){echo'current-meno-item';}?>">
						<a href="start.php?cat=mitgliedschaft&activemenu=3">Mitgliedschaft</a>
						<ul class="sub-menu">
							<li class="menu-item"><a href="start.php?cat=login&activemenu=3">Anmeldung</a></li>
							<li class="menu-item"><a href="start.php?cat=signup&activemenu=3">Registrierung</a></li>
							
						</ul>
					</li>
					<li class="menu-item <?php if($_GET['activemenu']==4){echo'current-menu-item';}?>">
						<a href="start.php?cat=servlet&activemenu=4">Veranstaltungen</a>
					</li>
<!-- 					<li class="menu-item <?php if($_GET['activemenu']==4){echo'current-menu-item';}?>">
						<a href="#">Spielbetrieb <span class="sub-indicator"></span></a>
						<ul class="sub-menu">
							<li class="menu-item"><a href="start.php?cat=days&activemenu=4">Days</a></li>
							<li class="menu-item"><a href="start.php?cat=turniere&activemenu=4">Turniere</a></li>
						</ul>
					</li>
-->
					<li class="menu-item <?php if($_GET['activemenu']==5){echo'current-menu-item';}?>">
						<a href="#">Kontakt <span class="sub-indicator"></span></a>
						<ul class="sub-menu">
							<li class="menu-item"><a href="start.php?cat=kontakt&activemenu=5">Kontakt</a></li>
							<li class="menu-item"><a href="start.php?cat=anfahrt&activemenu=5">Anfahrt</a></li>
						</ul>
					</li>
					<li class="menu-item <?php if($_GET['activemenu']==6){echo'current-meno-item';}?>">
						<a href="start.php?cat=impressum&activemenu=6">Impressum</a>
					</li>
<!-- 				<li class="menu-item <?php if($_GET['activemenu']==7){echo'current-meno-item';}?>">
						<a href="start.php?cat=extras&activemenu=7">Extras<span class="sub-indicator"></span></a>
						<ul class="sub-menu">
							<li class="menu-item"><a href="start.php?cat=funfacts&activemenu=7">Fun Facts</a></li>
							<li class="menu-item"><a href="start.php?cat=localstorage&activemenu=7">Caddy Tool</a></li>
							<li class="menu-item"><a href="start.php?cat=clock&activemenu=7">Uhrzeit</a></li>
							<li class="menu-item"><a href="start.php?cat=servlet&activemenu=7">Servlet Test</a></li>
						
							<li class="menu-item"><a href="http://localhost:8080/gcdhbw/index.jsp">Datum</a></li>
							

						</ul>

-->				 
					<?php 
					if(isset($_COOKIE['login'])) {
						include 'inc/mitgliedermenu.php';
					}
					?>
					</div> 
					<canvas id="canvas" width="50" height="50" style="background-color:#white">
					<script type="text/javascript" src="../src/clock.js">
						function drawClock();
					</script></canvas>	
				
				
				<!-- Dropdownmenü wird angezeigt, wenn Screen schmal wird Mobile-->
				<select id="main-menu-mob" onchange="location = this.options[this.selectedIndex].value;">
					<option value="" selected="selected">>> Go to...</option>
					<option value="start.php?cat=Startseite">>> Startseite</option>
					
					<option value="start.php?cat=vorstand&activemenu=2">---Vorstand</option>
					<option value="start.php?cat=geschaeftsstelle&activemenu=2">--- Geschäftsstelle</option>
					<option value="start.php?cat=mitgliedschaft&activemenu=3">>> Mitgliedschaft</option>
					<option value="start.php?cat=login&activemenu=3">--- Anmeldung</option>
					<option value="start.php?cat=signup&activemenu=3">--- Registrierung</option>
					<option value="start.php?cat=servlet&activemenu=4">>> Veranstaltungen</option>
					<option value="start.php?cat=kontakt&activemenu=5">--- Kontakt</option>
					<option value="start.php?cat=anfahrt&activemenu=5">--- Anfahrt</option>
					<option value="start.php?cat=impressum&activemenu=6">>> Impressum</option>
					<option value="start.php?cat=extras&activemenu=7">>> Mitglieder Only</option>
					<option value="start.php?cat=funfacts&activemenu=7">--- Fun Facts</option>
					<option value="start.php?cat=localstorage&activemenu=7">--- Caddy Tool</option>
					<option value="http://localhost:8080/gcdhbw/index.jsp">---Datum</option>
				<option value=start.php?cat=clock&activemenu=7">---Uhr</option>
				</select>	
		</nav><!-- .main-nav /-->
	
	</header><!-- #header /-->
	
<div id="main-content" class="container">
	<div class="content">
    

    <?php
		if(isset($_GET['cat'])){
			switch($_GET['cat']){
				case 'Startseite':  include'inc/Startseite.php';break;
				case 'vorstand':  include'inc/vorstand.php';break;
				case 'geschaeftsstelle': include'inc/geschaeftsstelle.php';break;
				case 'mitgliedschaft': include 'inc/mitgliedschaft.php';break;
				case 'login': include 'inc/login.php';break;
				case 'signup': include 'inc/signup.php';break;
				case 'days': include 'inc/days.php';break;
				case 'turniere': include 'inc/turniere.php';break;
				case 'kontakt': include 'inc/kontakt.php';break;
				case 'anfahrt': include 'inc/anfahrt.php';break;
				case 'impressum': include 'inc/impressum.php';break;
				case 'funfacts': include 'inc/funfacts.php'; break;
				case 'servlet': include 'inc/servlettest.php'; break;
				case 'localstorage': include 'inc/localstorage.php'; break;
				case 'extras': include 'inc/extras.php'; break;
				case 'clock': include 'inc/clock.php'; break;
				default: include 'inc/Startseite.php';break;
			}
			
		}
		else{
			include'inc/Startseite.php';
		}
	?>
	
	<div class="clear"></div>
          
	</div><!-- .content /-->
<!-- 
	<div class="clear"></div>
    
</div><!-- .container /-->


<footer>
    
</footer><!-- .Footer /-->
				
<div class="clear"></div>
    
<div class="footer-bottom" id="footer" >
		<div class="alignleft" id="socialmedia">
			<a href="https://www.facebook.com/GCDHBW" id="facebook" target="_blank"><img src="img/social-icons/facebook.png" alt="facebook" width="20px"></a>
			<a href="https://plus.google.com/" id="Google+" target="_blank"><img src="img/social-icons/Google+.svg" alt="Google+" width="20px"></a>
			<a href="https://twitter.com/?lang=de" id="Twitter" target="_blank"><img src="img/social-icons/Twitter.png" alt="Twitter" width="20px"></a>
		</div>
		<div class="alignright" id="copyright">	
			<a href="start.php">GC DHBW</a> © Copyright 2015 by Denis Maag und Steffen Schmitz
		</div>
</div><!-- .Footer bottom -->
	
	
</body>
</html>