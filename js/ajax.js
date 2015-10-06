resObjekt = new XMLHttpRequest();


function sndReq() {
    resObjekt.open('get', './artikel.json', true);
    resObjekt.onreadystatechange = handleResponse;
    resObjekt.send(null);
    
    
}


function handleResponse() {
    if(resObjekt.readystate == 4)
    {
     document.getElementById("content").innerHTML = resObjekt.responseText;
        
        
    }
 
    
    
}