/*
Warenkorb - Logik
Author: Fabian Sölker
*/


// Objekt für einen Artikel im Warenkorb
function warenkorb_artikel(nr, name, kurz, lang, grafik, preis) {
    
    this.nr = nr;
    this.name = name;
    this.lang = lang;
    this.kurz = kurz;
    this.grafik = grafik;
    this.preis = preis;
    this.anzahl = 0;
    return this;
}


//Mögliche Artikel

var currywurst_1 = new warenkorb_artikel(1, "Berliner Currywurst", "c1c1c1c1c1c1c1c1", "c1c1", "hier fehlt eine url", 2.49);

var currywurst_2 = new warenkorb_artikel(2, "Currywurst Vegetarisch", "c2c2c2c2c2c2c2c2", "c2c2", "hier fehlt eine url", 4.29);

var currywurst_3 = new warenkorb_artikel(3, "Geflügel Currywurst", "c2c2c2c2c2c2c2c2", "c3c3", "hier fehlt eine url", 2.49);


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
function add(artikel_nummer) {

    for (var i = 0; i < artikel.length; i++) {

        if (artikel[i].nr == artikel_nummer) {
            artikel[i].anzahl++;
        }

    }


}