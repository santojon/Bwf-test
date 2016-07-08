// Mount front-end here
var currentUser = User.find({ username: 'santojon' });
var allUsers = User.findAll().distinct();

// add my name to screen
var div = document.createElement('small');
div.innerHTML = ' <code id="currentUser">' + currentUser.username + '</code>';
document.getElementById('title').appendChild(div);

// Add all defined dashboards for user 'me' to screen
var dashboards = Dashboard.findBy({ owner: currentUser }).distinct();
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
document.getElementById('btn-dump').onclick = function() {
    console.log(dataPool.exportAs('json'));
};

//console.log(Dashboard.findByILike({ name: 'all', base: 'overall' }));

unhideAll();