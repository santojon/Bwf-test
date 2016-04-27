// Load all needed data here. Chain order is very important!
loadScripts(['models/Dashboard.bwf'], function() {
    loadScripts(['lib/utils.js', 'lib/dist/datapool.js', 'https://code.jquery.com/jquery-2.2.3.min.js', 'lib/dist/bwf.js'], function() {
        loadScript('database.js', function() {
            loadDomain('user', function() {
                loadDomain('dashboard', function() {
                    loadController('user', function() {
                        loadController('dashboard', function() {
                            loadStyle('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', function() {
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