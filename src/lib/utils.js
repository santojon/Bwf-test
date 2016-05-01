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
 * Read a file as text
 */
function readTextFile(file) {
    if (!window['classesTmp']) {
        window['classesTmp'] = {};
    }
                
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var name = allText.split(/:/)[0];
                window['classesTmp'][name] = allText;
            }
        }
    }
    rawFile.send(null);
}

//'use strict';
function getFiles(dir, fileList){
    fileList = fileList || [];

    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, fileList);
        } else {
            fileList.push(name);
        }
    }
    return fileList;
}