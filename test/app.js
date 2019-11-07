// Loads all needed things to run app. It need 'base.js' loaded to work
with(Base) {
    loadScript('loader.js', function () {
        // Timeout is needed to loader get all necessary data
        setTimeout(function () {

            /**
             * The app itself.
             */

            var res = new Slpnr({
                sets: specs
            }).run();
            Object.keys(res).forEach(
                function (tset) {
                    appendDiv('tests-results', tset, 'set');
                    appendSet(res[tset].relatedTo, res[tset]);
                    showProgress(res[tset]);

                    res[tset].tests.forEach(
                        function (result) {
                            appendTest(tset, new Test(result));
                        }
                    );
                }
            );

            // Adjust this time for your needs/requirements
        }, 2500);
    })
};