// Create new class from string definition
//readTextFile('model/Dashboard.bwf');
//new Bwf( window['classesTmp']['Dashboard']);
new Bwf('Dashboard: {\
		    name: string,\
		    owner: object,\
		    tiles: list,\
		    base: string,\
		    extras: object\
		}');
        



// ------------------------------------------------
// ORM related static functions
// ------------------------------------------------

Dashboard.add = function(obj) {
	return dataPool.add(Dashboard, obj);
};

Dashboard.remove = function(obj) {
    return dataPool.remove(Dashboard, obj);
};

Dashboard.findBy = function(opt) {
    return dataPool.findBy(Dashboard, opt);
};

Dashboard.findByILike = function(opt) {
    return dataPool.findByILike(Dashboard, opt);
};

Dashboard.findAll = function() {
    return dataPool.findAll(Dashboard);
};

Dashboard.get = function(id) {
    return dataPool.get(Dashboard, id);
};




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

Dashboard.add(new Dashboard({
	    				name: 'homeBase',
	    				owner: User.findBy({ username: 'santojon' })[0],
	    				tiles: ['lights', 'water', 'tv', 'pc', 'security', 'cameras']
	    			})
	    	  );
//console.log(dashboard);
//console.log(dashboard.get());
    			
Dashboard.add(new Dashboard({
	    				name: 'home',
	    				owner: User.findBy({ username: 'santojon' })[0],
	    				base: 'homeBase',
	    				tiles: ['locks', 'people'],
	    				extras: {
	    					tiles: ['games', 'stats']
	    				}
	    			})
	    	  );
	    			
Dashboard.add(new Dashboard({
	    				name: 'work',
	    				owner: User.findBy({ username: 'santojon' })[0],
	    				tiles: ['tasks', 'hours', 'coffee', 'slack', 'time tracking', 'issues'],
	    				extras: {
	    					tiles: ['news', 'forecast', 'traffic']
	    				}
	    			})
	    	  );
				 
Dashboard.add(new Dashboard({
	    				name: 'overall',
	    				owner: User.findBy({ username: 'blah' })[0],
	    				base: 'home',
	    				tiles: ['kids', 'wife', 'to-do lists'],
	    				extras: {
	    					base: 'work',
	    					tiles: ['family', 'calendar', 'hollidays']
	    				}
	    			})
	    	  );
				
Dashboard.add(new Dashboard({
	    				name: 'all',
	    				owner: User.findBy({ username: 'manolo' })[0],
	    				base: 'overall'
	    			})
	    	  );