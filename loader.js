// Load all needed data here. Chain order is very important!
loadScript('lib/dist/bwf.js', function() {
    loadDomain('user', function() {
        loadDomain('dashboard', function() {
            loadControllers(['user', 'dashboard'], function() {
                loadStyle('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', function() {
                    loadStyleAsset('style', function() {
                        loadScript('lib/utils.js', function() {
                            unhideAll();
                            
                            // Put your preload script here
                        })
                    })
                })
            })
        })
    })
});