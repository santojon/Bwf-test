pages.Dashboards = function(options) {
    // Get all needed scopes (another js objects like controllers, services etc.)
    with (
        /**
         * The merge function in Base compiles all functions and attributes
         * in objects into a single one, used to 'import' into this file,
         * to use its functions and attribues as local ones
         */
        Base.merge(
            DashboardController,
            Utils
        )
    ) {
        var currentUser = User.find({ username: 'santojon' });
        var allUsers = User.findAll().distinct();

        // add current user username to screen
        var div = document.createElement('small');
        div.innerHTML = ' <code id="currentUser">' + currentUser.username + '</code>';
        document.getElementById('title').appendChild(div);

        // Add all defined dashboards for user to screen
        var dashboards = Dashboard.findBy({ owner: currentUser }).distinct();
        dashboards.forEach(
        	function(dashboard) {
        	    appendDashboard('dashboards', dashboard);
        	}
        );

        allUsers.forEach(
            function(user) {
                if (user !== currentUser) {
                    var li = document.createElement('li');
                    li.innerHTML = '<a id="' + user.username + '-li" ' + 'href="#">' + user.username + '</a>';
        		    document.getElementById('chg-lst').appendChild(li);

        		    document.getElementById(user.username + '-li').onclick = changeDashboard;
        		}
            }
        );

        document.getElementById('btn-create-dshb').onclick = createDashboard;
        document.getElementById('btn-dump').onclick = function() {
            console.log(dataPool.exportAs('json'));
        };

        // Show all hidden things in screen
        unhideAll();
    }
};