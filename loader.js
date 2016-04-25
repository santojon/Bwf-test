// Load all needed data here. Chain order is very important!
loadScripts(['models/Dashboard.bwf'], function() {
    loadScripts(['lib/utils.js', 'lib/dist/bwf.js', 'https://code.jquery.com/jquery-2.2.3.min.js'], function() {
        loadDomain('user', function() {
            loadDomain('dashboard', function() {
                loadControllers(['user', 'dashboard'], function() {
                    loadStyle('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', function() {
                        loadStyleAsset('style', function() {
                            loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', function() {
                                // Timeout is needed to loader get all necessary data
                                setTimeout(function() {
                                    unhideAll();
                                
                                    // Put your preload script here
                                }, 150);
                            })
                        })
                    })
                })
            })
        })
    })
});