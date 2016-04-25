// Create new class from string definition
new Bwf('Dashboard: {\
            required: [\
                name: string,\
                owner: object\
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



// -----------------------------------------------
// Appends things into class
// -----------------------------------------------

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
					} else if (db[key] instanceof User) {
						htmlStr = htmlStr + '<p>' 
							+ key + ': <code>' + db[key]['username'] + '</code></p>';
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



// ----------------------------------------------------------
// Create Dashboards
// ----------------------------------------------------------

var dashboard = new Dashboard({
	    				name: 'homeBase',
	    				owner: me,
	    				tiles: ['lights', 'water', 'tv', 'pc', 'security', 'cameras']
	    			});
//console.log(dashboard);
//console.log(dashboard.get());
    			
var dashboard2 = new Dashboard({
	    				name: 'home',
	    				owner: me,
	    				base: 'homeBase',
	    				tiles: ['locks', 'people'],
	    				extras: {
	    					tiles: ['games', 'stats']
	    				}
	    			});
	    			
var dashboard3 = new Dashboard({
	    				name: 'work',
	    				owner: me,
	    				tiles: ['tasks', 'hours', 'coffee', 'slack', 'time tracking', 'issues'],
	    				extras: {
	    					tiles: ['news', 'forecast', 'traffic']
	    				}
	    			});
				 
var dashboard4 = new Dashboard({
	    				name: 'overall',
	    				owner: me,
	    				base: 'home',
	    				tiles: ['kids', 'wife', 'to-do lists'],
	    				extras: {
	    					base: 'work',
	    					tiles: ['family', 'calendar', 'hollidays']
	    				}
	    			});
				
var dashboard5 = new Dashboard({
	    				name: 'all',
	    				owner: me,
	    				base: 'overall'
	    			});