// Load all needed data here. Chain order is very important!
with(Base) {
    loadScripts(['lib/dist/bwfspec.js', 'lib/dist/bhdrspec.js'], function () {
        loadScripts(['app/domain/userspec.js', 'app/controllers/usercontrollerspec.js'], function () {
            loadScripts(['app/domain/dashboardspec.js', 'app/controllers/dashboardcontrollerspec.js'], function () {
                setTimeout(function () {

                    // find all specs in path
                    window['specs'] = [];
                    Object.keys(window).forEach(
                        function (key) {
                            if (key.match(/[a-zA-Z0-9\-_]*Spec/) !== null) {
                                window['specs'].push(window[key]);
                            }
                        }
                    );

                }, 500);
            })
        })
    })
};