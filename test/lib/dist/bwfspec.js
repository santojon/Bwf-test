// relatedTo
var relatedTo = 'Beowulf';

/**
 * Tests for Beowulf lib
 */
var bwfSpec = {
    
    /**
     * All tests f this set
     */
    tests: {
        
        /**
         * Test for creating a Bwf instance without any option
         */
        testSimpleInstance: function() {
            // create test
            var t = new Test({
                relatedTo: relatedTo,
                name: 'testSimpleInstance',
                result: false
            });
            
            // do test
            try {
                var bwf = new Bwf();
                
                if (bwf.instanceof(Bwf)) {
                    t.result = true;
                    t.trace = 'Beowulf created successfully!';
                }
            } catch (e) {
                t.trace = t.trace + e.stack;
            }
            
            //save test
            t.save();
            return t.result;
        },
        
        /**
         * TODO Test for creating a Bwf instance successfully with options
         */
        testOptionsInstanceSuccess: function(options) {
            // body...
        },
        
        /**
         * TODO Test for creating a Bwf instance unsuccessfully with options
         */
        testOptionsInstanceFailure: function(options) {
            // body...
        },
        
        /**
         * Test for instancing a simple class with Bwf successfully
         */
        testSimpleCreateSuccess: function() {
            // create test
            var t = new Test({
                relatedTo: relatedTo,
                name: 'testSimpleCreateSuccess',
                result: false
            });
            
            // do test
            try {
                var bwf = new Bwf('TestClass: { className: string }').create();
                
                if (TestClass) {
                    t.result = true;
                    t.trace = 'Class created successfully!';
                }
            } catch (e) {
                t.trace = t.trace + e.stack;
            }
            
            //save test
            t.save();
            return t.result;
        },
        
        /**
         * Test for instancing a simple class with Bwf unsuccessfully
         */
        testSimpleCreateFailure: function() {
            // create test
            var t = new Test({
                relatedTo: relatedTo,
                name: 'testSimpleCreateFailure',
                result: true
            });
            
            // do test
            try {
                var bwf = new Bwf('TestClass: { className: string ').create();
                
                if (TestClass) {
                    t.result = false;
                    t.trace = 'Class created, but expected is not!';
                }
            } catch (e) {
                t.trace = t.trace + e.toString();
            }
            
            //save test
            t.save();
            return t.result;
        },
        
        /**
         * Test for instancing a complex class with Bwf successfully
         */
        testComplexCreateSuccess: function() {
            // create test
            var t = new Test({
                relatedTo: relatedTo,
                name: 'testComplexCreateSuccess',
                result: false
            });
            
            // do test
            try {
                var bwf = new Bwf('TestClass2: {\
                                    className: string,\
                                    valid: boolean,\
                                    toHtml: function,\
                                    misc: object,\
                                    properties: {\
                                        values: list,\
                                        size: number,\
                                        relation: {\
                                            from: string,\
                                            to: string\
                                        }\
                                    }\
                                }').create();
                
                if (TestClass2) {
                    t.result = true;
                    t.trace = 'Class created successfully!';
                }
            } catch (e) {
                t.trace = t.trace + e.stack;
            }
            
            //save test
            t.save();
            return t.result;
        },
        
        /**
         * Test for instancing a complex class with Bwf unsuccessfully
         */
        testComplexCreateFailure: function() {
            // create test
            var t = new Test({
                relatedTo: relatedTo,
                name: 'testComplexCreateFailure',
                result: true
            });
            
            // do test
            try {
                var bwf = new Bwf('TestClass2: {\
                                    className: string,\
                                    valid: boolean,\
                                    toHtml: function,\
                                    misc: object,\
                                    properties: {\
                                        values: list,\
                                        size: number,\
                                        relation: {\
                                            from: string\
                                            to: string\
                                        }\
                                    }\
                                }').create();
                
                if (TestClass2) {
                    t.result = false;
                    t.trace = 'Class created, but expected is not!';
                }
            } catch (e) {
                t.trace = t.trace + e.toString();
            }
            
            //save test
            t.save();
            return t.result;
        },
        
        /**
         * Test for valuating a simple class with Bwf successfully
         */
        testSimpleValuateSuccess: function() {
            // create test
            var t = new Test({
                relatedTo: relatedTo,
                name: 'testSimpleValuateSuccess',
                result: false
            });
            
            // do test
            try {
                var v = classLoader.valuate('TestClass: {\
                                    			className: asd\
                                    		}');
                
                if (v.className === 'asd') {
                    t.result = true;
                    t.trace = 'Class valuated successfully!';
                }
            } catch (e) {
                t.trace = t.trace + e.stack;
            }
            
            //save test
            t.save();
            return t.result;
        },
        
        /**
         * Test for valuating a simple class with Bwf unsuccessfully
         */
        testSimpleValuateFailure: function() {
            // create test
            var t = new Test({
                relatedTo: relatedTo,
                name: 'testSimpleValuateFailure',
                result: true
            });
            
            // do test
            try {
                var v = classLoader.valuate('TestClass: {\
                                    			className: asd!\
                                    		}');
                
                if (v['className'] === undefined) {
                    t.result = false;
                    t.trace = 'Class valuated, but expected is not!';
                }
            } catch (e) {
                t.trace = t.trace + e.toString();
            }
            
            //save test
            t.save();
            return t.result;
        },
        
        /**
         * Test for valuating a complex class with Bwf successfully
         */
        testComplexValuateSuccess: function() {
            // create test
            var t = new Test({
                relatedTo: relatedTo,
                name: 'testComplexValuateSuccess',
                result: false
            });
            
            // do test
            try {
                var v = classLoader.valuate('TestClass2: {\
                                                className: all OK,\
                                                valid: true,\
                                                misc: { states: [ true, false ] },\
                                                properties: {\
                                                    values: [ 0, 1, 2 ],\
                                                    size: 12,\
                                                    relation: {\
                                                        from: me\
                                                        to: you\
                                                    }\
                                                }\
                                            }');
                
                if ((v.className === 'all OK') && (v.misc === { states: [ true, false ] })) {
                    t.result = true;
                    t.trace = 'Class valuated successfully!';
                }
            } catch (e) {
                t.trace = t.trace + e.stack;
            }
            
            //save test
            t.save();
            return t.result;
        },
        
        /**
         * Test for valuating a complex class with Bwf unsuccessfully
         */
        testComplexValuateFailure: function() {
            // create test
            var t = new Test({
                relatedTo: relatedTo,
                name: 'testComplexValuateFailure',
                result: true
            });
            
            // do test
            try {
                var v = classLoader.valuate('TestClass2: {\
                                                className: all OK\',\
                                                valid: true,\
                                                misc: { states: [ true, false ] },\
                                                properties: {\
                                                    values: [ 0, 1, 2 ],\
                                                    size: 12,\
                                                    relation: {\
                                                        from: me\
                                                        to: you\
                                                    }\
                                                }\
                                            }');
                
                if (v['className'] === undefined) {
                    t.result = false;
                    t.trace = 'Class valuated, but expected is not!';
                }
            } catch (e) {
                t.trace = t.trace + e.toString();
            }
            
            //save test
            t.save();
            return t.result;
        }
    },
    
    /**
     * Run all tests in this set
     */
    run: function() {
        var testSet = new TestSet({
            relatedTo: relatedTo,
            date: new Date().toUTCString()
        });
        
        var allTests = this.tests;
        Object.keys(allTests).forEach(
            function(test) {
                var res = allTests[test]();
                
                var tes = Test.findBy({ name: test })[0];
                
                if (tes) {
                    testSet.tests.push(tes);
                    
                    if (res) {
                        testSet.success++;
                    } else {
                        testSet.failure++;
                    }
                }
            }
        );
        
        testSet.save();
        
        // cleanup
        Test.findBy({ relatedTo: relatedTo }).forEach(
            function(test) {
                test.delete();
            }
        );
        
        return TestSet.findBy({ relatedTo: relatedTo })[0];
    }
};