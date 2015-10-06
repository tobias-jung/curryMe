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