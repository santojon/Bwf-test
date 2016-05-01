// Load all needed data here. Chain order is very important!
loadScripts(['lib/dist/bwfspec.js', 'lib/dist/bhdrspec.js'], function() {
    loadScripts(['app/domain/userspec.js', 'app/controllers/usercontrollerspec.js'], function() {
        loadScripts(['app/domain/dashboardspec.js', 'app/controllers/dashboardcontrollerspec.js'], function() {
            // pre-test scripts goes here...
        })
    })
});