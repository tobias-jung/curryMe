resObjekt = new XMLHttpRequest();
var artikel;


function sndReq() {
    resObjekt.open('get', '../json/artikel.json', false);
    resObjekt.onreadystatechange = handleResponse;
    resObjekt.send();
    
    
}

resObjekt.onreadystatechange = handleResponse;


function handleResponse() {
    if(resObjekt.readyState == 4)
    {
                    artikel = JSON.parse( resObjekt.responseText );
        
        
        
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
    refresh("warenkorbFrame");
        
  }

function refresh(ID) {
 var a = document.getElementById(ID);
    a.src = a.src;
    
}


//Function Call

function callSpeisekarte() {
 
    document.getElementById("masterContent").innerHTML='Hallo';



}
