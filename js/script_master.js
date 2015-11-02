resObjekt = new XMLHttpRequest();
var artikel;
var benutzer;
var hstate;
var hstate = 5;


function sndReq() {
    resObjekt.open('get', './json/artikel.json', false);
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
        gesamtsumme = (gesamtsumme + (artikel[i].preis) * artikel[i].anzahl);
    }
    return gesamtsumme.toFixed(2);

}

//Hinzufügen
function add(artikel_id) {

    for (var i = 0; i < artikel.length; i++) {

        if (artikel[i].id == artikel_id) {
            artikel[i].anzahl++;
        }

    }
}

function del(artikel_id) {

    for (var i = 0; i < artikel.length; i++) {

        if (artikel[i].id == artikel_id) {
            artikel[i].anzahl--;
        }

    }
}

function delButton(artikel_id) {

    del(artikel_id);
    callWarenkorb();
    callSidebar();


}

function addButton(artikel_id) {


    add(artikel_id);
    callWarenkorb();
    callSidebar();

}

function delButtonSpeisekarte(artikel_id) {

    del(artikel_id);
    callSpeisekarte();
    callSidebar();


}

function addButtonSpeisekarte(artikel_id) {


    add(artikel_id);
    callSpeisekarte();
    callSidebar();

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
    callSidebar();


}

function callSidebar() {

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
            position.innerHTML = "<td>" + artikel[i].anzahl + "x</td><td>" + artikel[i].name + "</td><td>" + artikel[i].preis + "€</td><td>" + ((artikel[i].preis) * (artikel[i].anzahl)).toFixed(2) + "€</td>"

            tabelle.appendChild(position);




        }

        var gesamtsummeTabelle = document.createElement("table");
        gesamtsummeTabelle.innerHTML = "<th>Gesamtsumme</th><td>" + getArtikelGesamtsumme() + "€</td>"


        document.getElementById("warenkorb-sidebar").appendChild(tabelle);

    }
    document.getElementById("warenkorb-sidebar").appendChild(gesamtsummeTabelle);

    var bild = document.createElement("div");
    var br = document.createElement("br");
    bild.innerHTML = "<img src='media/einkaufswagen.png' width='40%' height='40%' onclick='callWarenkorb()'>"

    document.getElementById("warenkorb-sidebar").appendChild(br);
    document.getElementById("warenkorb-sidebar").appendChild(br);
    document.getElementById("warenkorb-sidebar").appendChild(bild);


}



//Custom Elements
var hostkontakt = document.querySelector('x-kontakt');
var textkontakt = hostkontakt.createShadowRoot();
textkontakt.innerHTML = document.getElementById("kontakt").innerHTML;

// Über uns
var hostueberuns = document.querySelector('ueber-uns');
var textueberuns = hostueberuns.createShadowRoot();
textueberuns.innerHTML = document.getElementById("ueberuns").innerHTML;



var hostlogin = document.querySelector('log-in');
var textlogin = hostlogin.createShadowRoot();
textlogin.innerHTML = document.getElementById("login").innerHTML;

var hostlogout = document.querySelector('log-out');
var textlogout = hostlogout.createShadowRoot();
textlogout.innerHTML = document.getElementById("logout").innerHTML;


var hostimpressum = document.querySelector('x-impressum');
var textimpressum = hostimpressum.createShadowRoot();
textimpressum.innerHTML = document.getElementById("impressum").innerHTML;

var hoststartseite = document.querySelector('x-startseite');
var textstartseite = hoststartseite.createShadowRoot();
textstartseite.innerHTML = document.getElementById("startseite").innerHTML;


//Function Call

function callKontakt() {

    history.pushState(hstate, null, "kontakt");
    hstate = 1;

    document.getElementById("swap").innerHTML = textkontakt.innerHTML;

}

function callUeberUns() {

    history.pushState(hstate, null, "ueberuns");
    hstate = 6;

    document.getElementById("swap").innerHTML = textueberuns.innerHTML;

}
/*
Authentifizierung mittels Authentication Passport
Author: Tobias Jung
*/
function callLogIn() {

    history.pushState(hstate, null, "login");
    hstate = 3;

    //wenn Benutzer eingeloggt (=true)
    if (isLoggedIn()) {
        document.getElementById("swap").innerHTML = textlogout.innerHTML;
        document.getElementById("username").innerHTML = getUsername();

    } else {

        document.getElementById("swap").innerHTML = textlogin.innerHTML;
    }

}
//Funktion zum prüfen, ob User eingeloggt!
function isLoggedIn() {
    // XMLHTTP-Request
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", '/verify', false);
    // false for synchronous request
    xmlHttp.send(null);
    var response = xmlHttp.responseText;
    //wenn Benutzer nicht eingeloggt, dann....
    if (response === 'notvalid') {
        return false; //liefere false zurück

    } else {
        benutzer = response; //speichere Username und liefere true zurück
        return true;
    }
}

function getUsername() {
    return benutzer; //liefere Benutzername zurück
}
/*########################*/

function callImpressum() {
    history.pushState(hstate, null, "impressum");
    hstate = 1;
    document.getElementById("swap").innerHTML = textimpressum.innerHTML;
}

function callStartseite() {

    history.pushState(hstate, null, "startseite");
    hstate = 5;
    document.getElementById("swap").innerHTML = textstartseite.innerHTML;

}

function callSpeisekarte() {

    history.pushState(hstate, null, "speisekarte");
    hstate = 4;

    var myNode = document.getElementById("swap");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }




    if (typeof (getArtikel()) == "undefined") {
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
        posten.className = "produkte";
        posten.border = 1;



        posten.innerHTML = "<tr><td><img src ='" + artikel[i].grafik + "'></td><td>" + artikel[i].name + "</td><td>" + artikel[i].beschreibung + "</td><td>" + artikel[i].preis + "€</td><td><button type='button' onclick = 'delButtonSpeisekarte(" + artikel[i].id + ")'>-</button></td><td><button type='button' onclick = 'addButtonSpeisekarte(" + artikel[i].id + ")'>+</button></td></tr>"


        postenDiv.appendChild(posten);
        var divBR = document.createElement("br");
        divSpeisekarte.appendChild(postenDiv);

        document.getElementById("swap").appendChild(divSpeisekarte);
        document.getElementById("swap").appendChild(divBR);
    }





}

function callWarenkorb() {

    history.pushState(hstate, null, "warenkorb");
    hstate = 7;

    var myNode = document.getElementById("swap");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    var tabelle = document.createElement("table");
    tabelle.border = 1;

    var heading = document.createElement("tr");
    heading.innerHTML = "<th>Abbildung</th><th>Produkt</th><th>Anzahl</th><th>Einzelpreis</th><th>Gesamt</th><th>löschen</th><th>hinzufügen</th>";

    tabelle.appendChild(heading);

    for (var i = 0; i < getArtikel().length; i++) {

        if (artikel[i].anzahl > 0) {

            var position = document.createElement("tr")
            position.innerHTML = "<td><img src ='" + artikel[i].grafik + "'></td><td>" + artikel[i].name + "</td><td>" + artikel[i].anzahl + "x</td><td>" + artikel[i].preis + "€</td><td>" + ((artikel[i].preis) * (artikel[i].anzahl)).toFixed(2) + "€</td><td><button type='button' onclick = 'delButton(" + artikel[i].id + ")'>-</button></td><td><button type='button' onclick = 'addButton(" + artikel[i].id + ")'>+</button></td>"

            tabelle.appendChild(position);




        }

        var gesamtsummeTabelle = document.createElement("table");
        gesamtsummeTabelle.innerHTML = "<th>Gesamtsumme</th><td>" + getArtikelGesamtsumme() + "€</td>"


        document.getElementById("swap").appendChild(tabelle);

    }
    document.getElementById("swap").appendChild(gesamtsummeTabelle);

    var br = document.createElement("br");
    document.getElementById("swap").appendChild(br);

    var button = document.createElement("button");
    button.type = "button";
    button.className += " myButton";
    button.onclick = bestellen;
    button.innerHTML = "Bestellung abschicken";

    document.getElementById("swap").appendChild(button);




}


//Canvas Uhr

// Global variable
var clock_face = null,
    ctx = null;

var IMG_HEIGHT = 59,
    IMG_WIDTH = 170,
    DIGIT_HEIGHT = IMG_HEIGHT,
    DIGIT_WIDTH = 34.5,
    xPositions = null,
    xSecondStartPos = 0,
    secondWidth = 0,
    secondHeight = 0;

function clearCanvas() {


    ctx.clearRect(0, 0, IMG_HEIGHT, IMG_WIDTH);
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number;
}

function draw() {

    var currentTime = new Date(),
        time = pad2(currentTime.getHours()) + pad2(currentTime.getMinutes()) + pad2(currentTime.getSeconds()),
        iDigit;

    clearCanvas();


    for (iDigit = 0; iDigit < 4; iDigit++) {
        drawHHMMDigit(time, iDigit);
    }

    // Draw scalled second digits
    ctx.drawImage(clock_face, time.substr(4, 1) * DIGIT_WIDTH, 0, DIGIT_WIDTH, DIGIT_HEIGHT, xSecondStartPos, 5, secondWidth, secondHeight);
    ctx.drawImage(clock_face, time.substr(5, 1) * DIGIT_WIDTH, 0, DIGIT_WIDTH, DIGIT_HEIGHT, xSecondStartPos + secondWidth, 5, secondWidth, secondHeight);
}

function drawHHMMDigit(time, unit) {
    ctx.drawImage(clock_face, time.substr(unit, 1) * DIGIT_WIDTH, 0, DIGIT_WIDTH, DIGIT_HEIGHT, xPositions[unit], 0, DIGIT_WIDTH, DIGIT_HEIGHT);
}

function imgLoaded() {
    setInterval(draw, 1000);
}


function init() {
    var canvas = document.getElementById('clock'),
        iHHMMGap = 25,
        iSSGap = 0;

    if (canvas.getContext('2d')) {
        ctx = canvas.getContext('2d');


        clock_face = new Image();
        clock_face.src = './media/flip_clock_small_hd.png';
        clock_face.onload = imgLoaded;

        xPositions = Array(DIGIT_WIDTH * 0,
            DIGIT_WIDTH * 1, (DIGIT_WIDTH * 1.4) + iHHMMGap, (DIGIT_WIDTH * 2.4) + iHHMMGap)

        xSecondStartPos = xPositions[3] + DIGIT_WIDTH + iSSGap;

        secondWidth = DIGIT_WIDTH * 0.35;
        secondHeight = DIGIT_HEIGHT * 0.35;

    } else {
        alert("Canvas wird nicht unterstützt");
    }
}


function bestellen() {

    if (isLoggedIn() == true) {

        if (getArtikelGesamtsumme() != 0) {
            alert("Ihre Bestellung wurde abgeschicket");
            sndReq();
            callSpeisekarte();

            var myNode = document.getElementById("warenkorb-sidebar");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }

            var bild1 = document.createElement("img");
            bild1.src = "media/drag_drop.png";

            var bild = document.createElement("div");
            var br = document.createElement("br");
            bild.innerHTML = "<img src='media/einkaufswagen.png' width='40%' height='40%' onclick='callWarenkorb()'>"

            document.getElementById("warenkorb-sidebar").appendChild(bild1);
            document.getElementById("warenkorb-sidebar").appendChild(br);
            document.getElementById("warenkorb-sidebar").appendChild(bild);
        } else {

            alert("Es befindet sich nichts im Warenkorb");
        }


    } else {
        alert("Bitte mdelden sie sich an, um ihre Bestellung abzuschicken");
    }

}

window.onpopstate = popstatehandler;

function popstatehandler(event) {


    if (history.state != null) {

        switch (event.state) {

        case 1:
            callImpressum();
            break;
        case 2:
            callKontakt();
            break;
        case 3:
            callLogIn();
            break;
        case 4:
            callSpeisekarte();
            break;
        case 5:
            callStartseite();
            break;
        case 6:
            callUeberUns();
            break;
        case 7:
            callWarenkorb();
            break;
        }

    }

}