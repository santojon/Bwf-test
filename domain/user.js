// Class definition
new Bwf('User: {\
            required: [\
                username: string,\
                password: string\
            ],\
            optional: [\
                dashboards: list\
            ],\
            get: -> {\
            	dashboards\
            }\
        }');



// ----------------------------------------------
// Create instances
// ----------------------------------------------

var me = new User({username: 'santojon'});
var blah = new User({username: 'blah'});
var fu = new User({username: 'manolo'});