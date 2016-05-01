// Loads all needed things to run app. It need 'base.js' loaded to work
loadScript('loader.js', function() {
    // Timeout is needed to loader get all necessary data
    setTimeout(function() {
        
        /**
         * The app itself.
         */
        bwfSpec.run().forEach(
            function(tset) {
                showProgress(tset);
                
                tset.tests.forEach(
                    function(result) {
                        appendTest('tests-results', new Test(result));
                    }
                );
            }
        );
        
    // Adjust this time for your needs/requirements
    }, 1500);
});