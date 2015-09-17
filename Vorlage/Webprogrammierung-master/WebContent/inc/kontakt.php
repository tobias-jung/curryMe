<article class="post post-listing">
	<div class="post-inner">
		<h1 class="post-title">Kontakt</h1>


</script>



<p>Kontaktformular:</p>
<form name="kontaktformular" id="contactform" action="php/contactform.php" method="post">

<table>
<tr><td colspan="2"></td></tr>
<tr>
	<td >Name:</td>
	<td><input name="name" type="text" id="name"  size="40" maxlength="100" /></td>
</tr>
<tr>
	<td>E-Mail Adresse:<br /></td>
	<td><input name="email" type="text" id="email"  size="40" maxlength="100" /></td>
</tr>
<tr>
	<td style="width:150px">Betreff:</td>
	<td><input name="betreff" type="text" id="betreff"  size="40" maxlength="50" /></td>
</tr>
<tr>
	<td style="width:150px">Nachricht:</td>
	<td><textarea name="nachricht" cols="40" rows="10" style="white-space: nowrap;"></textarea></td>
</tr>
<tr>
<td></td>
<td><img src="inc/captcha.php" alt="Captcha" title="Captcha - Bitte Zeichen in das Feld eingeben" width=140 height=40 />
<tr>
<td><td><input type="text" name="captcha_code" size=10 />
</tr>	<td style="width:150px">&nbsp;</td>
</tr>
<tr>
	<td><input type="submit" value="Abschicken" name="submit" />
</tr>
</table>
</form>

</article>
