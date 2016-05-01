// Loads all needed things to run app. It need 'base.js' loaded to work
loadScript('loader.js', function() {
    // Timeout is needed to loader get all necessary data
    setTimeout(function() {
        
        function showProgress(tset) {
            var sum = tset.success + tset.failure;
            var sucP = (tset.success * 100 / sum);
            
            // 100% error!!!
            if (sucP === 0) {
                var err = document.getElementById('error-progress');
                err.style = 'width: ' + (100 - sucP) + '% !important;';
                err.textContent = 'Failure: ' + (100 - Math.round(sucP)).toString() + '%';
            }
            // 100% success!!!
            else if (sucP === 1) {
                var suc = document.getElementById('success-progress');
                suc.style = 'width: ' + sucP + '% !important;';
                suc.textContent = 'Success: ' + Math.round(sucP).toString() + '%';
            } else {
                var suc = document.getElementById('success-progress');
                var err = document.getElementById('error-progress');
                
                suc.style = 'width: ' + sucP + '% !important;';
                err.style = 'width: ' + (100 - sucP) + '% !important;';
                
                suc.textContent = 'Success: ' + Math.round(sucP).toString() + '%';
                err.textContent = 'Failure: ' + (100 - Math.round(sucP)).toString() + '%';
            }
        }
        
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