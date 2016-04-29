// Class definition
classLoader.create('User: {\
            username: string,\
            password: string\
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

User.findBy = function(opt) {
    return dataPool.findBy(User, opt);
};

User.findByILike = function(opt) {
    return dataPool.findByILike(User, opt);
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