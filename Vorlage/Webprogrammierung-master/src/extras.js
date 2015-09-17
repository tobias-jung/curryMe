function wechsel() {
  // sichtbar/unsichtbar
  if (document.getElementByClassName('cookie').style.visibility == 'hidden')
    document.getElementByClassName('cookie').style.visibility = 'visible';
  else
    document.getElementByClassName('#main-nav .cookie').style.visibility = 'hidden';

}

function doIt() {
	 
    //erstellen des requests
    var req = new XMLHttpRequest();

    var number = Math.floor(Math.random() * 3) + 1  ;
    var url;

    switch(number) {
    case 1:
    	url = './inc/funfacts/sheepfarm.txt';
        break;
    case 2:
    	url = './inc/funfacts/wood.txt';
        break;
    case 3:
    	url = './inc/funfacts/lorem.txt';
        break;
    default:
        url = './inc/funfacts/hello.txt';
	}

    //request ist asynchron
    req.open("GET", url, true);

    req.onreadystatechange = function() {
    
         var result = "<p>" + req.responseText + "</p>";
         document.getElementById('eins').innerHTML = result;  
        
    }

    req.send(null);
}
