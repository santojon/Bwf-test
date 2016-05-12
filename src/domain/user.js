// Create new class from Bwf definition
classLoader.create('User: {\
            username: string,\
            password: string\
        }');

// Map class to 'database'
dataPool.map(User);