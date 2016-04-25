// Load all needed data here. Chain order is very important!
loadScripts(['lib/dist/bwf.js', 'https://code.jquery.com/jquery-2.2.3.min.js'], function() {
    loadDomain('user', function() {
        loadDomain('dashboard', function() {
            loadControllers(['user', 'dashboard'], function() {
                loadStyles(['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
                    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css'], function() {
                    loadStyleAsset('style', function() {
                        loadScripts(['lib/utils.js',
                            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'], function() {
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
});