// Load all needed data here. Chain order is very important!
loadScripts(['../src/models/User.bwf', '../src/models/Dashboard.bwf'], function() {
    loadScripts(['../src/lib/utils.js', '../src/lib/dist/bhdr.js', 'https://code.jquery.com/jquery-2.2.3.min.js', '../src/lib/dist/bwf.js'], function() {
        loadScript('database.js', function() {
            loadScripts(['../src/domain/user.js', '../src/controllers/usercontroller.js'], function() {
                loadScripts(['../src/domain/dashboard.js', '../src/controllers/dashboardcontroller.js'], function() {
                    loadStyles(['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', '../src/assets/css/style.css',
                                'https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css'], function() {
                        loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', function() {
                            loadScript('env.js', function() {
                                loadScript('testloader.js', function() {
                                    
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
});