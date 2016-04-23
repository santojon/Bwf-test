// Create new class from string definition
new Bwf('Dashboard: {\
            required: [\
                name: string\
            ],\
            optional: [\
                tiles: list,\
                base: string,\
                extras: object\
            ],\
            get: -> {\
            	tiles\
            }\
        }');

// Add function to recently created class
/**
 * Class responsible to create HTML text for a dashboard
 */
Dashboard.prototype.toHtml = function(cls) {
	var db = this;
	var htmlStr = '';
	if (cls) {
	    htmlStr = '<div class="panel panel-default ' + (cls || '') + '">';
	    htmlStr = htmlStr + '<div class="panel-heading">' + db['name'] + '</div>';
	    htmlStr = htmlStr + '<div class="panel-body">';
	}
	
	Object.keys(db).forEach(
		function(key) {
			switch (typeof db[key]) {
				case 'string':
				    if (!(key === 'name')) {
				        htmlStr = htmlStr + '<p>' 
    						+ key + ': <code>' + db[key] + '</code></p>';
				    }
					break;
				case 'number':
					htmlStr = htmlStr + '<p>' 
						+ key + ': <code>' + db[key] + '</code></p>';
					break;
				case 'object':
					if (db[key] instanceof Array) {
						htmlStr = htmlStr + '<p>' + key + ':<ul>';
    					db[key].forEach(
    						function(k) {
    							htmlStr = htmlStr + '<li><code>' +
    								k + '</code></li>';
    						}
    					);
    					htmlStr = htmlStr + '</ul>';
					} else {
						htmlStr = htmlStr + '<p>' + key + ':</p>' +
						    '<div class="col-xs-11 col-xs-offset-1">'
								+ new Dashboard(db[key]).toHtml() + '</div>';
					}
					break;
			}
		}
	);
	return htmlStr + '</div></div>';
};

/**
 * Function responsible to add a HTML description of a dashboard to screen
 */
function appendDashboard(id, dashboard) {
	var div, target = document.getElementById(id);
	div = document.createElement('div');
	
	div.innerHTML = dashboard.toHtml('dashboard');
	target.appendChild(div);
	
	while (div.firstChild) {
        // Also removes child nodes from 'div'
        target.insertBefore(div.firstChild, div);
    }
    // Remove 'div' element from target element
    target.removeChild(div);
};