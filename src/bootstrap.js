// ----------------------------------------------
// Create instances
// ----------------------------------------------

new User({username: 'santojon'}).save(function(usr) {
    new Dashboard({
    		name: 'homeBase',
    	   	owner: usr,
    		tiles: ['lights', 'water', 'tv', 'pc', 'security', 'cameras']
    	}).save();

    new Dashboard({
    		name: 'home',
    		owner: usr,
    		base: 'homeBase',
    		tiles: ['locks', 'people'],
    		extras: {
    			tiles: ['games', 'stats']
    		}
    	}).save();

    new Dashboard({
    		name: 'work',
    		owner: usr,
    		tiles: ['tasks', 'hours', 'coffee', 'slack', 'time tracking', 'issues'],
    		extras: {
    			tiles: ['news', 'forecast', 'traffic']
    		}
    	}).save();
});

new User({username: 'blah'}).save(function(usr) {
    new Dashboard({
    		name: 'overall',
    		owner: usr,
    		base: 'home',
    		tiles: ['kids', 'wife', 'to-do lists'],
    		extras: {
    			base: 'work',
    			tiles: ['family', 'calendar', 'hollidays']
    		}
    	}).save();
});

new User({username: 'manolo'}).save(function(usr) {
    new Dashboard({
    		name: 'all',
    		owner: usr,
    		base: 'overall'
    	}).save();
});