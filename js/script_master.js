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
        gesamtsumme = gesamtsumme + ((artikel[i].preis) * artikel[i].anzahl);
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
    event.dataTransfer.setData("artikel_id", event.srcElement.id);
    
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

    var myNode = document.getElementById("warenkorb-sidebar");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    var tabelle = document.createElement("table");
    tabelle.border = 0;

    var heading = document.createElement("tr");
    heading.innerHTML = "<th>Anzahl</th><th>Produkt</th><th>Einzelpreis</th><th>Gesamt</th>";
    
    tabelle.appendChild(heading);

    for (var i = 0; i < getArtikel().length; i++) {


        if (artikel[i].anzahl > 0) {

            var position = document.createElement("tr")
            position.innerHTML = "<td>" + artikel[i].anzahl + "x</td><td>" + artikel[i].name + "</td><td>" + artikel[i].preis + "€</td><td>" + (artikel[i].preis) * (artikel[i].anzahl) + "€</td>"

            tabelle.appendChild(position);




        }

                var gesamtsummeTabelle = document.createElement("table");
        gesamtsummeTabelle.innerHTML = "<th>Gesamtsumme</th><td>" + getArtikelGesamtsumme() + "€</td>"
        
        
        document.getElementById("warenkorb-sidebar").appendChild(tabelle);

    }
                document.getElementById("warenkorb-sidebar").appendChild(gesamtsummeTabelle);
    
                   var bild = document.createElement("div");
               var br = document.createElement("br");
    bild.innerHTML = "<img src='media/einkaufswagen.png' width='100%' height='100%' onclick='callWarenkorb()'>"
    
                    document.getElementById("warenkorb-sidebar").appendChild(br);
                    document.getElementById("warenkorb-sidebar").appendChild(br);
                    document.getElementById("warenkorb-sidebar").appendChild(bild);


}



//Custom Elements
var hostkontakt = document.querySelector('x-kontakt');
var textkontakt = hostkontakt.createShadowRoot();
textkontakt.innerHTML = '<form id="form" class="form" name="form" method="post" enctype="application/x-www-form-urlencoded" accept-charset="UTF-8" autocomplete><h2><a href="# " title="Kontaktiere uns!">Kontaktiere uns!</a></h2></header><div class="content"><div class="intro"></div><div id="section0"><div class="field"><label for="Name" >Name:</label><input type="text" id="NameId" name="Name" placeholder="Vorname, Nachname" required></div><div class="field"><label for="EMail">E-Mail:</label><input type="email" id="EMailId" name="EMail" placeholder="example@email.com" required></div><div class="field"><label for="Telefonnummeroptional">Telefonnummer (optional):</label><input type="tel" id="TelefonnummerId" name="Telefonnummeroptional" placeholder="0621/ 123456"></div><div class="field"><label for="DeineNachrichtanuns">Deine Nachricht an uns: </label><textarea id="DeineNachrichtanuns" name="DeineNachrichtanuns" wrap="soft" required></textarea></div><div class="field"><div><input type="radio" name="radio" id="radio1" class="radio" checked/><label for="radio1" class="radiolabel">Super</label></div><div><input type="radio" name="radio" id="radio2" class="radio" /><label for="radio2" class="radiolabel">Super</label></div><div><input type="radio" name="radio" id="radio3" class="radio" /><label for="radio3" class="radiolabel">Super</label></div><div><input type="radio" name="radio" id="radio4" class="radio" /><label for="radio4" class="radiolabel">Super</label></div></div><div class="field"><div class="edit-options"><div class="edit"></div><div class="delete"></div></div><input type="submit" id="SubmitId" class="submit" required></div></div></div></form><style>.submit{margin-top:10px;}form {}div {}.radiolabel {width: 200px;border-radius: 3px;border: 1px solid #D1D3D4; margin-right: 5px;}input.radio:empty {margin-left: -999px;}input.radio:empty ~ label {position: relative;float: left;line-height: 2.5em;text-indent: 3.25em;margin-top: 2em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}input.radio:empty ~ label:before {position: absolute;display: block;top: 0; bottom: 0; left: 0; content:"";width: 2.5em;background: #D1D3D4;border-radius: 3px 0 0 3px;}input.radio:hover:not(:checked) ~ label:before {content: "";text-indent: .9em;color: #C2C2C2;}input.radio:hover:not(:checked) ~ label {color: #888;}input.radio:checked ~ label:before {content: "";text-indent: .9em;color: #9CE2AE;background-color: #4DCB6D;}input.radio:checked ~ label {color: #777;}input.radio:focus ~ label:before {box-shadow: 0 0 0 3px #999;}.radio{float:left;}</style>';

// Über uns
var hostueberuns = document.querySelector('ueber-uns');
var textueberuns = hostueberuns.createShadowRoot();
textueberuns.innerHTML = '<h1>Über uns</h1><p>Unser freundliches und motiviertes Team heißt alle Gäste herzlich willkommen. Wenn Sie Fragen oder Wünsche zu uns, unseren Leistungen oder bei einem Ihrer Besuche bei uns haben, stehen wir Ihnen gern mit Rat und Tat zur Seite - sprechen Sie uns einfach an.</p><br><h1>Unser Team:</h1><table><tr><th><h1>Chefkoch Manfed Käfer</h1>Er erhielt für seine Hochleistungen schon in der Ausbildung zahlreiche Auszeichnungen. Als Küchenchef und Gastgeber wird er Sie mit seiner hervorragenden Küche überaus verwöhnen. Höchste Qualität sowie höchster Standard bei Produkten und Zubereitung verstehen sich von selbst. Die Kompositionen - mal klassisch, mal innovativ - sind immer wieder überraschend, zumal der Küchenchef und sein Team die Kreationen fortlaufend überdenken und damit zu höchster Perfektion bringen.</th><th><img src="media/kuechenchef.png"></th> </tr></table> <table><tr><th><img src="media/kuechenhilfe.png"></th> <th><h1>Restaurant Managerin Stefanie Heidecker</h1>Stefanie Heidecker absolvierte ihrem Bacherlorabschluss in Wirtschaftsmathemaktik an der Universtität Karlsruhe. Sie ist zudem Initiatorin des Leadership-Programms und Partnerin von Manager für Menschen. Ihre Aufgabe besteht aus dem Coaching für Veränderungsprozesse sowie Ansprechpartnerin für Fach- und Führungskräfte und Unternehmen im Raum Frankfurt. </th> </tr></table></p> <b> Der Rest von unserem Team:<img src="http://westfalium.de/wp-content/uploads/2015/03/K%C3%BCchenteam.jpg" width="" height=""><br><h4> <u>Von Rechts nach Links:</u> Heiko Mueller, Tobias Heinke, Fabian Skutnik, Nina Schlang, Jurek Beckmann, Jannis Blankenhagen und Dennis Iuliano</h4><style>h1{font-size: 17pt;} th,td,td,table{font-family: Arial; line-height: 1.5; font-weight: 400;}</style>';
textueberuns.innerHTML = '<header><h2><a href="# " title="Über uns">Über uns</a></h2></header><content><p>Unser freundliches und motiviertes Team heißt alle Gäste herzlich willkommen. Wenn Sie Fragen oder Wünsche zu uns, unseren Leistungen oder bei einem Ihrer Besuche bei uns haben, stehen wir Ihnen gern mit Rat und Tat zur Seite - sprechen Sie uns einfach an.</p><p><strong>Vertreten durch: </strong><table><tr><th><h2>Chefkoch Manfed Käfer</h2>Er erhielt für seine Hochleistungen schon in der Ausbildung zahlreiche Auszeichnungen. Als Küchenchef und Gastgeber wird er Sie mit seiner hervorragenden Küche überaus verwöhnen. Höchste Qualität sowie höchster Standard bei Produkten und Zubereitung verstehen sich von selbst. Die Kompositionen - mal klassisch, mal innovativ - sind immer wieder überraschend, zumal der Küchenchef und sein Team die Kreationen fortlaufend überdenken und damit zu höchster Perfektion bringen.</th><th><img src="media/kuechenchef.png"></th> </tr></table> <table><tr><th><img src="media/kuechenhilfe.png"></th> <th><h2>Restaurant Managerin Stefanie Heidecker</h2>Stefanie Heidecker absolvierte ihrem Bacherlorabschluss in Wirtschaftsmathemaktik an der Universtität Karlsruhe. Sie ist zudem Initiatorin des Leadership-Programms und Partnerin von Manager für Menschen. Ihre Aufgabe besteht aus dem Coaching für Veränderungsprozesse sowie Ansprechpartnerin für Fach- und Führungskräfte und Unternehmen im Raum Frankfurt. </th> </tr></table></p> <b> Der Rest von unserem Team:<img src="http://westfalium.de/wp-content/uploads/2015/03/K%C3%BCchenteam.jpg" width="" height=""><br><h4> <u>Von Rechts nach Links:</u> Heiko Mueller, Tobias Heinke, Fabian Skutnik, Nina Schlang, Jurek Beckmann, Jannis Blankenhagen und Dennis Iuliano</h4></content><style>h1{color:black;}</style>';



var hostlogin = document.querySelector('log-in');
var textlogin = hostlogin.createShadowRoot();
textlogin.innerHTML = '<header><h2><a href="# " title="Login">Kunden-Login</a></h2></header><content>Hier entsteht der Kunden-Login!<form action="" method="post"><input type="text" name="username" placeholder="Benutzername"><input type="password" name="password" placeholder="Passwort"><input type="submit" value="Login"></form><a href="/auth/facebook">Login with Facebook</a></content><style>h1{color:black;}</style>';


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

    document.getElementById("masterContent").innerHTML = "<h2>Willkommen auf CurryMe!</h2><div> Wir sind ein Unternehmen aus der Systemgastronomie und in dem Wachstumssegment Currywurst-Bringdienst tätig. In Mannheim-Neuostheim eröffneten wir im Oktober 2013 unser erstes Currywurst-Bistro mit Bringdienst. <br><br>CurryMe gehört zu den Top-Lieferdiensten in Mannheim. Probieren auch Sie es aus! So funktioniert unser Lieferservice: Lecker Curry Wurst und andere Gerichte auswählen, online bestellen und von unserem Heimservice in wenigen Minuten bis an die Haustür bringen lassen.<br><br>";

}

function callSpeisekarte() {

    var myNode = document.getElementById("masterContent");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }




    if(typeof(getArtikel()) == "undefined")
    {
    sndReq();
    }

    var idProdukt = 1;


    for (var i = 0; i < artikel.length; i++) {

        var divSpeisekarte = document.createElement("div");


        var postenDiv = document.createElement("div")
        postenDiv.draggable = true;
        postenDiv.id = idProdukt;
        idProdukt = idProdukt + 1;
        postenDiv.ondragstart = drag;


        var posten = document.createElement("table");
        posten.border = 1;
        posten.innerHTML = "<tr><td><img src ='" + artikel[i].grafik + "'></td><td>" + artikel[i].name + "</td><td>" + artikel[i].beschreibung + "</td><td>" + artikel[i].preis + "€)</td></tr>"

        postenDiv.appendChild(posten);
        var divBR = document.createElement("br");
        divSpeisekarte.appendChild(postenDiv);

        document.getElementById("masterContent").appendChild(divSpeisekarte);
        document.getElementById("masterContent").appendChild(divBR);
    }





}

function callWarenkorb() {

    var myNode = document.getElementById("masterContent");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    var tabelle = document.createElement("table");
    tabelle.border = 1;

    var heading = document.createElement("tr");
    heading.innerHTML = "<th>Abbildung</th><th>Produkt</th><th>Anzahl</th><th>Einzelpreis</th><th>Gesamt</th>";
    
    tabelle.appendChild(heading);

    for (var i = 0; i < getArtikel().length; i++) {

        if (artikel[i].anzahl > 0) {

            var position = document.createElement("tr")
            position.innerHTML = "<td><img src ='" + artikel[i].grafik + "'></td><td>" + artikel[i].name + "</td><td>" + artikel[i].anzahl + "x</td><td>" + artikel[i].preis + "€</td><td>" + (artikel[i].preis) * (artikel[i].anzahl) + "€</td>"

            tabelle.appendChild(position);




        }

                var gesamtsummeTabelle = document.createElement("table");
        gesamtsummeTabelle.innerHTML = "<th>Gesamtsumme</th><td>" + getArtikelGesamtsumme() + "€</td>"
        
        
        document.getElementById("masterContent").appendChild(tabelle);

    }
                document.getElementById("masterContent").appendChild(gesamtsummeTabelle);

                

}

