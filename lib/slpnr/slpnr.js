/**
 * Class responsible to run tests
 * @param options: test sets options
 */
function Slpnr(options) {
    var slpnr = this

    // test options
    var options = options || {}

    // tests and results
    var testSets = {}
    var results = {}

    // the horse itself
    slpnr.prototype = {
        init: function () {
            testSets = options['sets'] || {}
            return this
        },
        /**
         * Function responsible to run the tests
         */
        run: function () {
            testSets.forEach(
                function (tset) {
                    results[tset['relatedTo']] = runTests(tset)
                }
            )
            return results
        }
    }

    /**
     * Run all tests in set
     * @param tset: the set to use
     */
    var runTests = function (tset) {
        var testSet = new Testset({
            relatedTo: tset.relatedTo,
            date: new Date().toUTCString()
        })


        var setUp = tset['setUp']
        var tearDown = tset['tearDown']

        if (setUp) {
            setUp()
        }

        var allTests = tset.tests
        Object.keys(allTests).forEach(
            function (test) {
                var res = allTests[test]()

                var tes = Test.findBy({
                    name: test
                })[0]

                if (tes) {
                    testSet.tests.push(tes)

                    if (res) {
                        testSet.success++
                    } else {
                        testSet.failure++
                    }
                }
            }
        )

        testSet.save()

        if (tearDown) {
            tearDown()
        }

        return testSet
    }

    return slpnr.prototype.init()
}