/**
 * Function responsible to fetch other scripts
 */
function loadScript(url, callback)
{
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
 * Function responsible to fetch stylesheets
 */
function loadStyle(url, callback)
{
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