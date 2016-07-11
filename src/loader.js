/**
 * Load all needed data here. Chain order is very important!
 */
with (Base) {
    // Load project dependencies
    progressiveLoad(appConfig.conf.dependencies, loadScript, function() {
        // Inject 'classLoader'
        container['classLoader'] = new container[appConfig.conf.classLoader]();

        // Inject 'database' access
        container['dataPool'] = new container[appConfig.conf.dataPool]();

        // Load back-end files
        progressiveLoad(appConfig.back.domainClasses, loadDomain, function() {
            progressiveLoad(appConfig.back.services, loadService, function() {
                progressiveLoad(appConfig.back.controllers, loadController, function() {

                    // Map the classes to 'database'
                    progressiveLoad(['dataMappings.js'], loadScript, function() {
                        // If bootstrap data is set on
                        if (appConfig.conf.bootstrap) {
                            progressiveLoad(['bootstrap.js'], loadScript, function() {

                            });
                        }
                    });

                    // Load front-end files
                    progressiveLoad(appConfig.front.externalScripts, loadScript, function() {
                        progressiveLoad(appConfig.front.scripts, loadScriptAsset, function() {
                            progressiveLoad(appConfig.front.externalStyles, loadStyle, function() {
                                progressiveLoad(appConfig.front.styles, loadStyleAsset, function() {
                                    // Run main script
                                    progressiveLoad(['main.js'], loadScript, function() {

                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}