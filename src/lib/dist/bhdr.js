/**
 * Class responsible to simulate a database
 * TODO @param options: Database options
 */
function Bhdr(options) {
    
    // needed variables
    var pool = this;
    var data = {};
    var baseId = 1;
    
    // The pool itself
    pool.prototype = {
        /**
         * Function responsible to initialize the pool
         */
        init: function() {
            return this;
        },
        /**
         * Create a table if it not exists
         * @param klass: the class of the objects of the table
         */
        createTable: function(klass) {
            var cname = klass.prototype.constructor.name;
            if (!data[cname]) {
                data[cname] = { id: baseId };
            }
            
            return data[cname];
        },
        /**
         * Drop a table if it not exists
         * @param klass: the class of the objects of the table
         */
        dropTable: function(klass) {
            var cname = klass.prototype.constructor.name;
            if (data[cname]) {
                delete data[cname];
            }
            
            return null;
        },
        /**
         * Alter a table if it exists
         * @param klass: the class of the objects of the table
         */
        alterTable: function(klass, opt) {
            var cname = klass.prototype.constructor.name;
            if (data[cname]) {
                Object.keys(opt).forEach(
                    function(key) {
                        if (key === 'tableName') {
                            data[opt['tableName']] = data[cname];
                            delete data[cname];
                        } else {
                            if (data[cname]) {
                                Object.keys(data[cname]).forEach(
                                    function(k) {
                                        Object.keys(data[cname][k]).forEach(
                                            function(kk) {
                                                if (kk === key) {
                                                    data[cname][k][opt[key]] = data[cname][k][kk];
                                                    delete data[cname][k][kk];
                                                }
                                            }
                                        );
                                    }
                                );
                            }
                        }
                    }
                );
                
                return data[cname];
            }
            
            return null;
        },
        /**
         * Function used to add new instances into 'database'
         * @param klass: the class of the object to add
         * @param obj: the object to add into 'database'
         */
        insert: function(klass, obj) {
            var cname = klass.prototype.constructor.name;
            if (!data[cname]) {
                data[cname] = {};
            }
            
            if (obj instanceof klass) {
                data[cname][autoIncrementableId(klass)] = obj;
            }
            
            return obj;
        },
        /**
         * Function used to remove instances from 'database'
         * @param klass: the class of the object to remove
         * @param obj: the object to remove from 'database'
         */
        delete: function(klass, obj) {
            var cname = klass.prototype.constructor.name;
            
            if (data[cname]) {
                if (obj instanceof klass) {
                    Object.keys(data[cname]).forEach(
                        function(key) {
                            if (data[cname][key] === obj) {
                                delete data[cname][key];
                            }
                        }
                    );
                }
            }
            
            return obj;
        },
        /**
         * Function used to find instances in 'database' with exact values
         * @param klass: the class of the object to find
         * @param opt: the options used to find
         */
        findBy: function(klass, opt) {
            var cname = klass.prototype.constructor.name;
            var result = [];
            
            if (data[cname]) {
                Object.keys(opt).forEach(
                    function(key) {
                        Object.keys(data[cname]).forEach(
                            function(k) {
                                if (data[cname][k][key] &&
                                        (data[cname][k][key] === opt[key])) {
                                    
                                    result.push(data[cname][k]);
                                }
                            }
                        );
                    }
                );
            }
            
            return result.unique();
        },
        /**
         * Function used to find instances in 'database' with exact values (case insensitive)
         * @param klass: the class of the object to find
         * @param opt: the options used to find
         */
        findByI: function(klass, opt) {
            var cname = klass.prototype.constructor.name;
            var result = [];
            
            if (data[cname]) {
                Object.keys(opt).forEach(
                    function(key) {
                        Object.keys(data[cname]).forEach(
                            function(k) {
                                if (data[cname][k][key] &&
                                        (data[cname][k][key]
                                            .toLowerCase() === opt[key].toLowerCase())) {
                                    
                                    result.push(data[cname][k]);
                                }
                            }
                        );
                    }
                );
            }
            
            return result.unique();
        },
        /**
         * Function used to find instances in 'database' with similar values
         * @param klass: the class of the object to find
         * @param opt: the options used to find
         */
        findByLike: function(klass, opt) {
            var cname = klass.prototype.constructor.name;
            var partial = [];
            var aux = [];
            
            var result = [];
            
            Object.keys(data[cname]).forEach(
                function(k) {
                    if (k !== 'id') {
                        partial.push(data[cname][k]);
                    }
                }
            );
            
            if (data[cname]) {
                Object.keys(opt).forEach(
                    function(key) {
                        partial.forEach(
                            function(k) {
                                if (k[key]) {
                                    if (k[key].toString()
                                            .indexOf(opt[key].toString()) !== -1) {
                                        
                                        aux.push(k);
                                    }
                                }
                            }
                        );
                        partial = aux;
                        aux = [];
                    }
                );
                result = partial;
            }
            
            return result.unique();
        },
        /**
         * Function used to find instances in 'database' with similar values (case insensitive)
         * @param klass: the class of the object to find
         * @param opt: the options used to find
         */
        findByILike: function(klass, opt) {
            var cname = klass.prototype.constructor.name;
            var partial = [];
            var aux = [];
            
            var result = [];
            
            Object.keys(data[cname]).forEach(
                function(k) {
                    if (k !== 'id') {
                        partial.push(data[cname][k]);
                    }
                }
            );
            
            if (data[cname]) {
                Object.keys(opt).forEach(
                    function(key) {
                        partial.forEach(
                            function(k) {
                                if (k[key]) {
                                    if (k[key].toString().toLowerCase()
                                            .indexOf(opt[key].toString().toLowerCase()) !== -1) {
                                        
                                        aux.push(k);
                                    }
                                }
                            }
                        );
                        partial = aux;
                        aux = [];
                    }
                );
                result = partial;
            }
            
            return result.unique();
        },
        /**
         * Function used to find all instances in 'database'
         * @param klass: the class of the objects to find
         */
        findAll: function(klass) {
            var cname = klass.prototype.constructor.name;
            var result = [];
            
            if (data[cname]) {
                Object.keys(data[cname]).forEach(
                    function(k) {
                        if (k !== 'id') {
                            result.push(data[cname][k]);
                        }
                    }
                );
            }
            
            return result.unique();
        },
        /**
         * Map the Bhr main functions in class
         * @param klass: the class to map
         */
        map: function(klass) {
            klass.add = function(obj) {
            	return pool.prototype.insert(klass, obj);
            };
            
            klass.remove = function(obj) {
                return pool.prototype.delete(klass, obj);
            };
            
            klass.findBy = function(opt) {
                return pool.prototype.findBy(klass, opt);
            };
            
            klass.findByILike = function(opt) {
                return pool.prototype.findByILike(klass, opt);
            };
            
            klass.findAll = function() {
                return pool.prototype.findAll(klass);
            };
            
            klass.get = function(id) {
                return pool.prototype.get(klass, id);
            };
            
            klass.prototype.save = function() {
            	return klass.add(this);
            };
            
            klass.prototype.delete = function() {
            	return klass.remove(this);
            };
            
            klass.createTable = function() {
            	return pool.prototype.createTable(klass);
            };
            
            klass.dropTable = function() {
            	return pool.prototype.dropTable(klass);
            };
            
            return klass;
        },
        /**
         * Function used get the 'entity' with the given class and id
         * @param klass: the class of the object to get
         * @param id: the id of the object in Bhdr
         */
        get: function(klass, id) {
            var cname = klass.prototype.constructor.name;
            
            if (data[cname]) {
                return data[cname][id] || null;
            }
            return null;
        },
        /**
         * Function used to export 'database' to given type
         * @param type: the type to export, as string
         */
        exportAs: function(type) {
            var result;
            
            switch (type) {
                case 'javascript':
                    result = data;
                    break;
                case 'json':
                    result = JSON.stringify(data);
                    break;
                case 'bwf':
                    var main = JSON.stringify(data)
                            .trim().split(/"/).join(' ')
                                .split(/{/).join(' { ')
                                    .split(/}/).join(' } ')
                                        .split(/\[/).join(' \[ ')
                                            .split(/\]/).join(' \] ')
                                                .split(/ :/).join(': ')
                                                    .split(/ ,/).join(', ')
                                                        .split(/  /).join(' ').trim();
                    result = 'Bhdr: ' + main;
                    break;
            }
            
            return result;
        }
    };
    
    /**
     * Function responsible to return an incremented id
     * @param klass: the class of the related id
     */
    var autoIncrementableId = function(klass) {
        var cname = klass.prototype.constructor.name;
        
        if (data[cname]) {
            if (data[cname].id) {
                data[cname].id = data[cname].id + 1;
            } else {
                data[cname]['id'] = baseId;
            }
        } else {
            data[cname] = { id: baseId };
        }
        
        return data[cname].id;
    };
    
    return pool.prototype.init();
}

/**
 * Array extra functions (for Bhdr needs)
 */
(function() {
    /**
     * Remove a value from array (all occurences)
     * @param val: the value to remove
     */
    Array.prototype.remove = function (val) {
        var i = this.indexOf(val);
        return (i > -1) ? this.splice(i, 1) : [];
    };
    
    /**
     * Remove all duplicated values from array
     */
    Array.prototype.unique = function () {
	    return this.sort().filter(function(item, pos, array) {
	        return !pos || item != array[pos - 1];
	    });
	};
	
	/**
     * Alias for 'lenght'
     */
	Array.prototype.count = function () {
	    return this.length || 0;
	};
	
	/**
     * Order an array of objects by fields
     * @param field: the field to order by
     * @param reverse: true to order descending
     * @param rfunc: function to restrict compairson scope (if needed)
     */
	Array.prototype.orderBy = function (field, reverse, rfunc) {
	    var key = rfunc ? 
           function(x) { return rfunc(x[field]); } : 
           function(x) { return x[field]; };
        
        reverse = !reverse ? 1 : -1;
	    
	    return this.sort(function (a, b) {
	        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        });
	};
	
	/**
	 * Calculate average of numeric fields
	 * @param field: the field to calculate avg
	 */
	Array.prototype.avg = function (field) {
	    if (this.count() > 0) {
	        var r = [];
	        this.forEach(function(k) {
	            r.push(k[field]);
	        });
	        
	        return r.reduce(function(a, b) { return a + b; }) / this.count();
	    } else {
	        return 0;
	    }
	};
})();