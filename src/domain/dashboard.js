// Create new class from Bwf definition
classLoader.create('Dashboard: {\
		    name: string,\
		    owner: object,\
		    tiles: list,\
		    base: string,\
		    extras: object\
        }');
        
// Map class to 'database'
dataPool.map(Dashboard);



// -----------------------------------------------
// Appends things into class
// -----------------------------------------------

/**
 * Function responsible to create HTML text for a dashboard
 */
Dashboard.prototype.toHtml = function(cls) {
	var db = this;
	var htmlStr = '';
	if (cls) {
	    htmlStr = '<div id="' + db['name'] + '" class="panel panel-default ' + (cls || '') + '">';
	    htmlStr = htmlStr + '<div class="panel-heading">' + db['name']
	    			+ '<a href="#" class="pull-right" onclick="removeDashboard(\'' + db['name']
	    				+ '\');"><small><span class="glyphicon glyphicon-trash">\
	    					</span><small></div>' + '</a>';
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

new Dashboard({
		name: 'homeBase',
	   	owner: User.findBy({ username: 'santojon' })[0],
		tiles: ['lights', 'water', 'tv', 'pc', 'security', 'cameras']
	}).save();
    			
new Dashboard({
		name: 'home',
		owner: User.findBy({ username: 'santojon' })[0],
		base: 'homeBase',
		tiles: ['locks', 'people'],
		extras: {
			tiles: ['games', 'stats']
		}
	}).save();
    			
new Dashboard({
		name: 'work',
		owner: User.findBy({ username: 'santojon' })[0],
		tiles: ['tasks', 'hours', 'coffee', 'slack', 'time tracking', 'issues'],
		extras: {
			tiles: ['news', 'forecast', 'traffic']
		}
	}).save();
				 
new Dashboard({
		name: 'overall',
		owner: User.findBy({ username: 'blah' })[0],
		base: 'home',
		tiles: ['kids', 'wife', 'to-do lists'],
		extras: {
			base: 'work',
			tiles: ['family', 'calendar', 'hollidays']
		}
	}).save();
				
new Dashboard({
		name: 'all',
		owner: User.findBy({ username: 'manolo' })[0],
		base: 'overall'
	}).save();