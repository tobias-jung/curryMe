/*
Warenkorb - Drag and Drop
Author: Fabian Sölker
*/


//Dragstart
function drag(event) {
    event.dataTransfer.setData("artikel_id", this.id);
}

//Allow Drop
function allowDrop(event) {
    event.preventDefault();

}


//Drop
function handleDrop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("artikel_id");
    var iframe = document.getElementById("warenkorbFrame");
    add(data);
    iframe.src = iframe.src;
        
  }