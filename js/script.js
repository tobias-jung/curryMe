/*
Webstorage
Author: Fabian Sölker
*/

if (typeof (Storage) !== "undefined") {

    
} else {
     alert("Ihr Browser unterstützt keinen Webstorage");
}




/*
Warenkorb - Logik
Author: Fabian Sölker
*/


// Objekt für einen Artikel im Warenkorb
function warenkorb_artikel(id, name, beschreibung, grafik, preis) {

    this.id = id;
    this.name = name;
    this.beschreibung = beschreibung;
    this.grafik = grafik;
    this.preis = preis;
    this.anzahl = 0;
    return this;
}


//Mögliche Artikel

var currywurst_1 = new warenkorb_artikel(1, "Berliner Currywurst", "Unser Klassiker", "../media/currywurst1.jpg", 2.49);

var currywurst_2 = new warenkorb_artikel(2, "Currywurst Vegetarisch", "#Hipster #SoWasKauftManDochNurInBerlin #Facepalm", "../media/currywurst1.jpg", 4.29);

var currywurst_3 = new warenkorb_artikel(3, "Geflügel Currywurst", "Die etwas Andere Currywurst", "../media/currywurst1.jpg", 2.49);


//Array mit möglichen Artikeln
var artikel = new Array(currywurst_1, currywurst_2, currywurst_3);



//Get Array Artikel
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




