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
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
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
    script.onreadystatechange = callback;
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
            script.onreadystatechange = callback;
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
    script.onreadystatechange = callback;
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
    style.onreadystatechange = callback;
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
            style.onreadystatechange = callback;
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
    style.onreadystatechange = callback;
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
            style.onreadystatechange = callback;
            style.onload = callback;
        }
    
        // Fire the loading
        head.appendChild(style);
    });
}