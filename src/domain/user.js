// Create new class from Bwf definition
classLoader.create('User: {\
            username: string,\
            password: string\
        }');

// Map class to 'database'
dataPool.map(User);



// ----------------------------------------------
// Create instances
// ----------------------------------------------

new User({username: 'santojon'}).save();
new User({username: 'blah'}).save();
new User({username: 'manolo'}).save();