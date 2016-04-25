// Loads all needed things to run app. It need 'base.js' loaded to work
loadScript('loader.js', function() {
    // Timeout is needed to loader get all necessary data
    setTimeout(function() {
        
        /**
         * The app itself.
         */
         
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
        
    // Adjust this time for your needs/requirements
    }, 1700);
});