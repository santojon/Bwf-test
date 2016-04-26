// Class definition
new Bwf('User: {\
            required: [\
                username: string,\
                password: string\
            ],\
            optional: [\
                dashboards: list\
            ]\
        }');




// ------------------------------------------------
// ORM related static functions
// ------------------------------------------------

User.add = function(obj) {
	return dataPool.add(User, obj);
};

User.remove = function(obj) {
    return dataPool.remove(User, obj);
};

User.find = function(opt) {
    return dataPool.find(User, opt);
};

User.findLike = function(opt) {
    return dataPool.findLike(User, opt);
};

User.findAll = function() {
    return dataPool.findAll(User);
};

User.get = function(id) {
    return dataPool.get(User, id);
};




// ----------------------------------------------
// Create instances
// ----------------------------------------------

User.add(new User({username: 'santojon'}));
User.add(new User({username: 'blah'}));
User.add(new User({username: 'manolo'}));