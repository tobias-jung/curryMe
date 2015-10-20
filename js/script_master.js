resObjekt = new XMLHttpRequest();
var artikel;


function sndReq() {
    resObjekt.open('get', '../json/artikel.json', false);
    resObjekt.onreadystatechange = handleResponse;
    resObjekt.send();


}

resObjekt.onreadystatechange = handleResponse;


function handleResponse() {
    if (resObjekt.readyState == 4) {
        artikel = JSON.parse(resObjekt.responseText);



    }


}


function getArtikel() {

    return artikel;
}

//Get Gesamtsumme Artikel
function getArtikelGesamtsumme() {
    var gesamtsumme;
    gesamtsumme = 0.00;
    for (var i = 0; i < artikel.length; i++) {
        gesamtsumme = gesamtsumme + ((artikel[i].preis))
    }
    return gesamtsumme;

}

//Hinzufügen
function add(artikel_id) {

    for (var i = 0; i < artikel.length; i++) {

        if (artikel[i].id == artikel_id) {
            artikel[i].anzahl++;
        }

    }
}


/*
Warenkorb - Drag and Drop
Author: Fabian Sölker
*/

//var iframe = document.getElementById("warenkorbFrame");

//Dragstart
function drag(event) {
    event.dataTransfer.setData("artikel_id", event.target.id);
}

//Allow Drop
function allowDrop(event) {
    event.preventDefault();

}


//Drop
function handleDrop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("artikel_id");
    add(data);
    document.getElementById("warenkorb-sidebar").innerHTML = 
        "<article> "+
            "<h2><a href='#'>Warenkorb</a></h2> "+
                add(1);
                add(1);
                add(2);
                add(3);


                document.write("<table ondrop=handleDrop(event) ondragover=allowDrop(event)>")
                document.write("<th>Anzahl</th>")
                document.write("<th>Produkt</th>")
                document.write("<th>Einzelpreis</th>")
                document.write("<th>Gesamt</th>")

                for (var i = 0; i < getArtikel().length; i++) {
                    var artikel = getArtikel();

                    if (artikel[i].anzahl > 0) {
                        document.write("<tr>")
                        document.write("<td>")
                        document.write(artikel[i].anzahl + "x")
                        document.write("</td>")
                        document.write("<td>")
                        document.write(artikel[i].name)
                        document.write("</td>")
                        document.write("<td>")
                        document.write(artikel[i].preis + "€")
                        document.write("</td>")
                        document.write("<td>")
                        document.write((artikel[i].preis) * (artikel[i].anzahl) + "€")
                        document.write("</td>")
                        document.write("</tr>")


                    }


                }
                document.write("</table>")
                document.write("<br>")
                document.write("")
                document.write("<table>")
                document.write("<th>Gesamtsumme</th>")
                document.write("<td>")
                document.write(getArtikelGesamtsumme() + "€")
                document.write("</table>")


        "</article>"
        
        

}


//Custom Elements
var hostkontakt = document.querySelector('x-kontakt');
var textkontakt = hostkontakt.createShadowRoot();
textkontakt.innerHTML = '<form id="form" class="form" name="form" method="post" enctype="application/x-www-form-urlencoded" accept-charset="UTF-8" autocomplete><h2><a href="# " title="Kontaktiere uns!">Kontaktiere uns!</a></h2></header><div class="content"><div class="intro"></div><div id="section0"><div class="field"><label for="Name">Name:</label><input type="text" id="NameId" name="Name" placeholder="Vorname, Nachname" required></div><div class="field"><label for="EMail">E-Mail:</label><input type="email" id="EMailId" name="EMail" placeholder="example@email.com" required></div><div class="field"><label for="Telefonnummeroptional">Telefonnummer (optional):</label><input type="tel" id="TelefonnummerId" name="Telefonnummeroptional" placeholder="0621/ 123456"></div><div class="field"><label for="DeineNachrichtanuns">Deine Nachricht an uns: </label><textarea id="DeineNachrichtanuns" name="DeineNachrichtanuns" wrap="soft" required></textarea></div><div class="field"><label for="Bewerteuns1schlechteste5beste">Bewerte uns! (1= schlechteste, 5= beste):</label><span>Supergeil</span><input type="radio" value="5" id="Bewerteuns1schlechteste5beste" name="Bewerteuns1schlechteste5beste"><span>Supergeil</span><input type="radio" value="5" id="Bewerteuns1schlechteste5beste" name="Bewerteuns1schlechteste5beste"><span>Supergeil</span><input type="radio" value="5" id="Bewerteuns1schlechteste5beste" name="Bewerteuns1schlechteste5beste"><span>Supergeil</span><input type="radio" value="5" id="Bewerteuns1schlechteste5beste" name="Bewerteuns1schlechteste5beste"><span>Supergeil</span><input type="radio" value="5" id="Bewerteuns1schlechteste5beste" name="Bewerteuns1schlechteste5beste"></div><div class="field"><div class="edit-options"><div class="edit"></div><div class="delete"></div></div><input type="submit" id="SubmitId" required></div></div></div></form>';

// Über uns
var hostueberuns = document.querySelector('ueber-uns');
var textueberuns = hostueberuns.createShadowRoot();
textueberuns.innerHTML = '<h1>Über uns</h1><p>Currywurst - Tradition seit 2015

    <img src="http://www.kath-akademie-bayern.de/tl_files/Kath_Akademie_Bayern/Bilder/Akademie_im_Ueberblick/Mitarbeiter/Kueche.jpg">
    
    </p><style>h1</style>';


//Log In
var hostlogin = document.querySelector('log-in');
var textlogin = hostlogin.createShadowRoot();
textlogin.innerHTML = '<header><h2><a href="# " title="Login">Kunden-Login</a></h2></header><content>Hier entsteht der Kunden-Login!<form action="" method="post"><input type="text" name="username" placeholder="Benutzername"><input type="password" name="password" placeholder="Passwort"><input type="submit" value="Login"></form><a href="/auth/facebook">Login with Facebook</a></content><style>h1{color:red;}</style>';


var hostimpressum = document.querySelector('x-impressum');
var textimpressum = hostimpressum.createShadowRoot();
textimpressum.innerHTML = '<header><h2><a href="#" title="Impressum">Impressum</a></h2></header><content><p>Angaben gemäß § 5 TMG</p><p>Duale Hochschule Baden-Württemberg Mannheim<br> Coblitzallee 1-9<br> 68163 Mannheim<br></p><p><strong>Vertreten durch: </strong><br> Curry Musteressen<br></p><p><strong>Kontakt:</strong><br> Telefon: 0621-41050<br> E-Mail: <a href="curryme@example.com">curryme@example.com</a></br></p><p><strong>Umsatzsteuer-ID: </strong><br> Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: 123456789.<br><br><strong>Wirtschafts-ID: </strong><br> 987654321<br></p><p><strong>Aufsichtsbehörde:</strong><br> Mannheim<br></p></p><p><strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Inhalte</strong><br><br> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br><br> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br> Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.<br> Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.<br> Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br><br><br><strong>Google AdSense</strong><br><br> Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA ("Google"). Google Adsense verwendet sog. "Cookies" (Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch sog. "Web Beacons" (kleine unsichtbare Grafiken) zur Sammlung von Informationen. Durch die Verwendung des Web Beacons können einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten Informationen über Ihre Benutzung diese Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern, indem Sie in Ihren Browser-Einstellungen "keine Cookies akzeptieren" wählen (Im MS Internet-Explorer unter "Extras > Internetoptionen > Datenschutz > Einstellung"; im Firefox unter "Extras > Einstellungen > Datenschutz > Cookies"); wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p><br> Website Impressum erstellt durch <a href="http://www.impressum-generator.de">impressum-generator.de</a> der <a href="http://www.kanzlei-hasselbach.de">Kanzlei Hasselbach</a></content><style>h1{color:red;}</style>';



//Function Call

function callKontakt() {

    document.getElementById("masterContent").innerHTML = textkontakt.innerHTML;

}

function callUeberUns() {

    document.getElementById("masterContent").innerHTML = textueberuns.innerHTML;

}

function callLogIn() {

    document.getElementById("masterContent").innerHTML = textlogin.innerHTML;

}

function callImpressum() {

    document.getElementById("masterContent").innerHTML = textimpressum.innerHTML;

}

function callStartseite() {

    document.getElementById("masterContent").innerHTML = "<h2>Startseite</h2>";

}

function callSpeisekarte() {

    document.getElementById("masterContent").innerHTML = 
     "<article class='topcontent '>"+
        "<header>"+
            "<h2><a href='# ' title='Speisekarte'>Speisekarte</a></h2></header>"+
        "<content>"+


            "<script language='javascript' type='text/javascript'>"+
                
                sndReq();
                
                var artikel = getArtikel();
 

                for (var i = 0; i < artikel.length; i++) {

                    document.write("<div class=draggableContent draggable=true ondragstart=drag(event) id=" + artikel[i].id + ">");
                    document.write("<table border=1 id=" + artikel[i].id + ">");
                    document.write("<tr>");
                    document.write("<td>");
                    document.write("<img src = " + artikel[i].grafik + ">");
                    document.write("</td>");
                    document.write("<td>");
                    document.write(artikel[i].name)
                    document.write("</td>")
                    document.write("<td>")
                    document.write(artikel[i].beschreibung)
                    document.write("</td>")
                    document.write("<td>")
                    document.write((artikel[i].preis) + "€")
                    document.write("</td>")
                    document.write("</tr>")
                    document.write("</table>")
                    document.write("<br>");
                    document.write("</div>");
                }

            "</script>"+

        "</content>"+
    "</article>"

}

function callWarenkorb() {

    document.getElementById("masterContent").innerHTML = "<h2>Warenkorb</h2>";

}