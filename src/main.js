/**
 * Mount front-end here
 */
with (DashboardController) { with (Utils) {
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

    //console.log(Dashboard.findByILike({ name: 'all', base: 'overall' }));

    unhideAll();
}}