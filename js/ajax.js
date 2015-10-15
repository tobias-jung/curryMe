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
