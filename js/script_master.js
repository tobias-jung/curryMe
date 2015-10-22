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
textkontakt.innerHTML = document.getElementById("kontakt").innerHTML;

// Über uns
var hostueberuns = document.querySelector('ueber-uns');
var textueberuns = hostueberuns.createShadowRoot();
textueberuns.innerHTML = document.getElementById("ueberuns").innerHTML;



var hostlogin = document.querySelector('log-in');
var textlogin = hostlogin.createShadowRoot();
textlogin.innerHTML = document.getElementById("login").innerHTML;


var hostimpressum = document.querySelector('x-impressum');
var textimpressum = hostimpressum.createShadowRoot();
textimpressum.innerHTML = document.getElementById("impressum").innerHTML;

var hoststartseite = document.querySelector('x-startseite');
var textstartseite = hoststartseite.createShadowRoot();
textstartseite.innerHTML = document.getElementById("startseite").innerHTML;


//Function Call

function callKontakt() {

    document.getElementById("swap").innerHTML = textkontakt.innerHTML;

}

function callUeberUns() {

    document.getElementById("swap").innerHTML = textueberuns.innerHTML;

}

function callLogIn() {

    document.getElementById("swap").innerHTML = textlogin.innerHTML;

}

function callImpressum() {

    document.getElementById("swap").innerHTML = textimpressum.innerHTML;

}

function callStartseite() {

    document.getElementById("swap").innerHTML = textstartseite.innerHTML;

}

function callSpeisekarte() {

    var myNode = document.getElementById("swap");
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

