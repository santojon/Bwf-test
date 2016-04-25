/**
 * The app itself. It need the 'base.js' file in env.
 */
loadStyle('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', function() {
    loadStyle('assets/css/style.css', function() {
        loadScript('lib/dist/bwf.js', function() {
            loadScript('controller/user.js', function() {
                loadScript('controller/dashboard.js', function() {
                    // add my name to screen
        			var div = document.createElement('small');
        			div.innerHTML = ' <code>' + me.username + '</code>';
        			document.getElementById('title').appendChild(div);
        				
            		// Add all defined dashboards for user 'me' to screen
            		var w = window;
            		Object.keys(window).forEach(
            			function(v) {
            				if (w[v] instanceof Dashboard) {
            					if (w[v].owner === me) {
            						appendDashboard('dashboards', w[v]);
            					}
            				}
            			}
            		);
                })
            })
        })
    })
});