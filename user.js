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