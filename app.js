// Loads all needed things to run app. It need 'base.js' loaded to work
loadScript('loader.js', function() {
    // Timeout is needed to loader get all necessary data
    setTimeout(function() {
        
        /**
         * The app itself.
         */
         
        // add my name to screen
        var div = document.createElement('small');
        div.innerHTML = ' <code id="currentUser">' + me.username + '</code>';
        document.getElementById('title').appendChild(div);
        	
        // Add all defined dashboards for user 'me' to screen
        var w = window;
        Object.keys(window).forEach(
        	function(v) {
        		if (w[v] instanceof Dashboard) {
        			if (w[v].owner === me) {
        				appendDashboard('dashboards', w[v]);
        			}
        		} else if (w[v] instanceof User) {
        		    if (w[v] !== me) {
        		        var li = document.createElement('li');
                        li.innerHTML = '<a id="' + w[v].username + '-li" ' + 'href="#">' + w[v].username + '</a>';
        		        document.getElementById('chg-lst').appendChild(li);
        		        
        		        document.getElementById(w[v].username + '-li').onclick = changeDashBoard;
        		    }
        		}
        	}
        );
        
        
        document.getElementById('btn-chg-usr');
        
    // Adjust this time for your needs/requirements
    }, 1500);
});