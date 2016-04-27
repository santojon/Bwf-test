/**
 * Change the dashboards to show.
 * This remove previous dashboards from screen.
 */
function changeDashBoard() {
    var username = this.innerHTML.split(/-li/)[0];
    document.getElementById('dashboards').innerHTML = '';
    document.getElementById('currentUser').innerHTML = username;
    
    var currentUser = User.findBy({ username: username })[0];
    var allUsers = User.findAll();
    
    // Add all defined dashboards for user 'me' to screen
    var dashboards = Dashboard.findBy({ owner: currentUser });
    dashboards.forEach(
    	function(v) {
    	    appendDashboard('dashboards', v);
    	}
    );
        
    allUsers.forEach(
        function(v) {
            if (v !== currentUser) {
                var old = document.getElementById(username + '-li');
                if (old) {
                    document.getElementById('chg-lst').removeChild(old.parentElement);
                }
                    
                var n = document.getElementById(v.username + '-li');
                if (!n) {
                    var li = document.createElement('li');
                    li.innerHTML = '<a id="' + v.username + '-li" ' + 'href="#">' + v.username + '</a>';
                    document.getElementById('chg-lst').appendChild(li);
                }		        
                document.getElementById(v.username + '-li').onclick = changeDashBoard;
    		}
        }
    );
}

/**
 * Create a new dashboard
 */
function createDashboard() {
    var userVar;
    
    var w = window;
    Object.keys(window).forEach(
        function(v) {
            if (w[v] instanceof User) {
                if (w[v].username === document.getElementById('currentUser').innerHTML) {
                    userVar = w[v];
                }
            }
        }
    );
    
    var d = new Dashboard({
	    				name: 'new',
	    				owner: userVar,
	    				base: 'home',
	    				tiles: ['to-do lists'],
	    				extras: {
	    					base: 'all',
	    					tiles: ['calendar', 'hollidays']
	    				}
	    			});
	
	var varName = d['name'] + '-dashboard' + Math.random();
	if (!window[varName]) {
	    window[varName] = d;
	    appendDashboard('dashboards', d);
	}
}

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
}