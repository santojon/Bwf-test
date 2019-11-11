/**
 * Tests for Brynhildr lib
 */
var bhdrSpec = {
    relatedTo: 'Brynhildr',

    /**
     * Responsible to create necessary resources before run the tests
     */
    setUp: function () {
        // Create needed classes (if don't exsists)
        if (!window['Testset']) {
            classLoader.create('Testset: {\
                                    relatedTo: string,\
                                    date: string,\
                                    tests: list,\
                                    failure: number,\
                                    success: number\
                                }')
            dataPool.map(Testset)
        }

        if (!window['Test']) {
            classLoader.create('Test: {\
                                    name: string,\
                                    relatedTo: string,\
                                    result: boolean,\
                                    trace: string\
                                }')
            dataPool.map(Test)
        }
    },

    /**
     * Responsible to do a cleanup run  after tests
     */
    tearDown: function () {
        // cleanup
        Test.dropTable()
        Testset.dropTable()
    },

    /**
     * All tests f this set
     */
    tests: {

        /**
         * Test for creating a Brynhildr instance without any option
         */
        testSimpleInstance: function () {
            // create test
            var t = new Test({
                relatedTo: bhdrSpec.relatedTo,
                name: 'testSimpleInstance',
                result: false
            })

            // do test
            try {
                var bhdr = new Bhdr()

                if (bhdr.instanceof(Bhdr)) {
                    t.result = true
                    t.trace = 'Brynhildr created successfully!'
                }
            } catch (e) {
                t.trace = t.trace + e.stack.toString().replace('JSON', 'Brynhildr')
            }

            //save test
            t.save()
            return t.result
        },

        /**
         * Test mapping
         */
        testMappingSuccess: function () {
            // create test
            var t = new Test({
                relatedTo: bhdrSpec.relatedTo,
                name: 'testMappingSuccess',
                result: false
            })

            // do test
            try {
                dataPool.map(Test)
                if (Test.findAll !== undefined) {
                    t.result = true
                    t.trace = 'Class mapped successfully!'
                }
            } catch (e) {
                t.trace = t.trace + e.stack.toString().replace('JSON', 'Brynhildr')
            }

            //save test
            t.save()
            return t.result
        }
    }
}