// Loads all needed things to run app. It need 'base.js' loaded to work
loadScript('loader.js', function() {
    // Timeout is needed to loader get all necessary data
    setTimeout(function() {
        
        console.log([{ name: 34 }, { name: 1 }, { name: 9 }].avg('name'));
        
        /**
         * The app itself.
         */
         
         var currentUser = User.findBy({ username: 'santojon' })[0];
         var allUsers = User.findAll();
         
        // add my name to screen
        var div = document.createElement('small');
        div.innerHTML = ' <code id="currentUser">' + currentUser.username + '</code>';
        document.getElementById('title').appendChild(div);
        	
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
                    var li = document.createElement('li');
                    li.innerHTML = '<a id="' + v.username + '-li" ' + 'href="#">' + v.username + '</a>';
        		    document.getElementById('chg-lst').appendChild(li);
        		        
        		    document.getElementById(v.username + '-li').onclick = changeDashboard;
        		}
            }
        );
        
        document.getElementById('btn-create-dshb').onclick = createDashboard;
        
        //console.log(dataPool.exportAs('bwf'));
        
        //console.log(getFiles('controllers'));
        
        //console.log(dataPool.exportAs('javascript'));
        //console.log(dataPool.exportAs('json'));
        
        //console.log(Dashboard.findByILike({ name: 'all', base: 'overall' }));
        
    // Adjust this time for your needs/requirements
    }, 1500);
});