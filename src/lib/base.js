/**
 * Function responsible to fetch a custom file
 */
function loadCustomFile(url, type, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/x-' + type;
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

/**
 * Function responsible to fetch custom files
 */
function loadCustomFiles(urls, type, callback) {
    urls.forEach(function(url, i) {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/x-' + type;
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if (i === (urls.length - 1)) {
            //script.onreadystatechange = callback;
            script.onload = callback;
        }

        // Fire the loading
        head.appendChild(script);
    });
}

/**
 * Function responsible to fetch scripts
 */
function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

/**
 * Function responsible to fetch asset scripts
 */
function loadScriptAsset(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js' + url + '.js';

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

/**
 * Function responsible to fetch asset scripts
 */
function loadScriptAssets(urls, callback) {
    urls.forEach(function(url, i) {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/js' + url + '.js';

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if (i === (urls.length - 1)) {
            //style.onreadystatechange = callback;
            script.onload = callback;
        }

        // Fire the loading
        head.appendChild(script);
    });
}

/**
 * Function responsible to fetch scripts
 */
function loadScripts(urls, callback) {
    urls.forEach(function(url, i) {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if (i === (urls.length - 1)) {
            //script.onreadystatechange = callback;
            script.onload = callback;
        }

        // Fire the loading
        head.appendChild(script);
    });
}

/**
 * Function responsible to fetch service scripts
 */
function loadService(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'services/' + url + 'controller.js';

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

/**
 * Function responsible to fetch service scripts
 */
function loadServices(urls, callback) {
    urls.forEach(function(url, i) {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'services/' + url + 'controller.js';

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if (i === (urls.length - 1)) {
            //script.onreadystatechange = callback;
            script.onload = callback;
        }

        // Fire the loading
        head.appendChild(script);
    });
}

/**
 * Function responsible to fetch controller scripts
 */
function loadController(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'controllers/' + url + 'controller.js';

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

/**
 * Function responsible to fetch controller scripts
 */
function loadControllers(urls, callback) {
    urls.forEach(function(url, i) {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'controllers/' + url + 'controller.js';

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if (i === (urls.length - 1)) {
            //script.onreadystatechange = callback;
            script.onload = callback;
        }

        // Fire the loading
        head.appendChild(script);
    });
}

/**
 * Function responsible to fetch domain scripts
 */
function loadDomain(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'domain/' + url + '.js';

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

/**
 * Function responsible to fetch stylesheets
 */
function loadStyle(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //style.onreadystatechange = callback;
    style.onload = callback;

    // Fire the loading
    head.appendChild(style);
}

/**
 * Function responsible to fetch stylesheets
 */
function loadStyles(urls, callback) {
    urls.forEach(function(url, i) {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if (i === (urls.length - 1)) {
            //style.onreadystatechange = callback;
            style.onload = callback;
        }

        // Fire the loading
        head.appendChild(style);
    });
}

/**
 * Function responsible to fetch asset stylesheets
 */
function loadStyleAsset(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = 'assets/css/' + url + '.css';

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //style.onreadystatechange = callback;
    style.onload = callback;

    // Fire the loading
    head.appendChild(style);
}

/**
 * Function responsible to fetch asset stylesheets
 */
function loadStyleAssets(urls, callback) {
    urls.forEach(function(url, i) {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = 'assets/css/' + url + '.css';

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if (i === (urls.length - 1)) {
            //style.onreadystatechange = callback;
            style.onload = callback;
        }

        // Fire the loading
        head.appendChild(style);
    });
}

/**
 * Function responsible to load an Array of files in chain
 * @param lst: the array of files
 * @param func: the load function to be used
 * @param callback: an optional callback to run in the end of the chain
 */
function progressiveLoad(lst, func, callback) {
    if (lst instanceof Array) {
        if (lst.length > 1) {
            func(lst[0], function(){
                lst.shift();
                progressiveLoad(lst, func, callback);
            });
        } else if (lst.length === 1) {
            func(lst[0], callback || function(){});
        } else {
            callback();
        }
    } else {
        if (callback) {
            callback();
        }
    }
}