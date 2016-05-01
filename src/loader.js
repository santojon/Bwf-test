// Load all needed data here. Chain order is very important!
loadScripts(['models/User.bwf', 'models/Dashboard.bwf'], function() {
    loadScripts(['lib/utils.js', 'lib/dist/bhdr.js', 'https://code.jquery.com/jquery-2.2.3.min.js', 'lib/dist/bwf.js'], function() {
        loadScript('database.js', function() {
            loadDomain('user', function() {
                loadDomain('dashboard', function() {
                    loadController('user', function() {
                        loadController('dashboard', function() {
                            loadStyles(['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
                                        'https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css'], function() {
                                loadStyleAsset('style', function() {
                                    loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', function() {
                                        
                                        // show hidden things in screen
                                        unhideAll();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});