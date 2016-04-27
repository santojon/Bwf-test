/**
 * Function responsible to simulate a database
 * TODO @param options: Database options
 */
function DataPool(options) {
    
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
         * Function used to add new instances into 'database'
         * @param klass: the class of the object to add
         * @param obj: the object to add into 'database'
         */
        add: function(klass, obj) {
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
        remove: function(klass, obj) {
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
            
            return null;
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
            
            return result;
        },
        /**
         * Function used to find instances in 'database'
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
            
            return result;
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
            
            return result;
        },
        /**
         * Function used get the 'entity' with the given class and id
         * @param klass: the class of the object to get
         * @param id: the id of the object in datapool
         */
        get: function(klass, id) {
            var cname = klass.prototype.constructor.name;
            
            if (data[cname]) {
                return data[cname][id] || null;
            }
            return null;
        },
        /**
         * Function used to show all data in 'database'
         */
        showAll: function() {
            return data;
        }
    };
    
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

(function() {
    Array.prototype.remove = function(val) {
        var i = this.indexOf(val);
        return (i > -1) ? this.splice(i, 1) : [];
    };
    
    Array.prototype.unique = function() {
        var u = {}, a = [];
        
        for(var i = 0, l = this.length; i < l; ++i) {
            if(u.hasOwnProperty(this[i])) {
                continue;
            }
            a.push(this[i]);
            u[this[i]] = 1;
        }
        
        return a;
    };
})();