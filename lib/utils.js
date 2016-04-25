/**
 * Function used to show all hidden elements in page
 */
function unhideAll() {
    var tags = document.body.getElementsByTagName("*");
    for (var i = 0; i < tags.length; i++) {
        var element = tags[i];
        if (element.offsetWidth <= 0 && element.offsetHeight <= 0) {
            // get it only if is not a script or iframe block
       		if (element.outerHTML.indexOf('<script') < 0) {
       			if (element.outerHTML.indexOf('<iframe') < 0) {
           			element.hidden = false;
              	}
       		}
        }
    }
}

/**
 * Read a file as text and create a Bwf
 */
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                new Bwf(allText);
            }
        }
    }
    rawFile.send(null);
}