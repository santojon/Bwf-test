var that = this;
function Bwf(elem, options) {
    var bwf = this;
    var elem = elem;
    
    var result = {};
    
    /**
     * A template to create classes
     * @param className: the name of the class (as string)
     * @param options: the properties to insert into class
     */
    var classTemplate = function(className, options) {
        var keys = Object.keys(options);
        var code = 'this.f = function ' + className + '(options) {\
            var c = this;\
            var k = [];\
            "' + keys + '".split(/,/).forEach(function(key) {\
                k.push(key);\
            });\
            var inList = function(val, lst) {\
        		return lst.indexOf(val) > -1;\
        	};\
            var keys = Object.keys(options);\
            keys.forEach(function(key) {\
                if (inList(key, k)) {\
                    c[key] = options[key];\
                }\
            });\
            return c;\
        };';
        var klass = eval(code);
        
        keys.forEach(function(key) {
            klass.prototype[key] = options[key];
        });
        
        return klass;
    };
    
    // the Bwf itself
    bwf.prototype = {
	    init: function() {
	        return this;
	    },
	    /**
	     * Creates a class for the given string
	     * @param el: the Beowulf class notation, as string
	     */
        create: function(el) {
            elem = el;
            var parts = elem.splitOn(/ /);
            
            // can split?
            if ((parts !== undefined) && (parts[0] !== '')) {
                // Verify if is a class
                if (parts[0] !== parts[0].toLowerCase()) {
                    var className = parts[0].split(/:/)[0];
                    result[className] = {};
                    var klass = result[className];
                    
                    // remove first element
                    parts.shift();
                    
                    // parse rest of the string
                    parseCreate(parts.join(' '), klass);
                    
                    //klass = JSON.parse(parts.join('').trim().replace(/[a-zA-Z0-9]+[a-zA-Z0-9 ]*/g, 
                    //    function(val) {
                    //        return '"' + val.trim() + '"';
                    //    }
                    //).trim());
                    
                    // return it
                    that[className] = classTemplate(className, klass);
                    return that[className];
                }
            }
            
            return result;
        },
        /**
         * Used to give values to a created class
         * @param val: the values in Beowulf notation
         */
        valuate: function(val) {
            var parts = val.splitOn(/ /);
            
            // can split?
            if ((parts !== undefined) && (parts[0] !== '')) {
                // Verify if is a class
                if (parts[0] !== parts[0].toLowerCase()) {
                    var className = parts[0].split(/:/)[0];
                    
                    // class exists ?
                    if (that[className]) {
                    
                        // remove first element
                        parts.shift();
                        var p = [];
                        
                        var pp = parts.join(' ').trim().split('');
                        pp.forEach(
                            function(k, i) {
                                if (i !== 0 && i !== pp.length - 1) {
                                    p.push(k);
                                }
                            }
                        );
                        
                        var json = JSON.parse('{' + p.join('').trim().replace(/[a-zA-Z0-9]+[a-zA-Z0-9 ]*/g, 
                            function(val) {
                                return '"' + val.trim() + '"';
                            }
                        ).trim() + '}');
                        
                        // parse rest of the string
                        return new that[className](json);
                    }
                }
            }
            
            return result;
        }
    };
    
    var parseCreate = function(str, kls, base) {
        var r = str.splitOn(/ /);
        var $$ = base || ['$'];
        
        for (var i = 0; i < r.length; i++) {
            var s = r[i];
            
            //console.log(s);
            //console.log(r);
            //console.log($$);
            
            if (r.indexOf(s) !== r[r.length - 1]) {
                if (s.trim() !== '') {
                    switch (s) {
                        // TOKENS
                        case '{':
                            $$.push('{');
                            r.shift();
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case '}':
                            r.shift();
                            
                            if ($$.indexOf('{') > -1) {
                                $$.splice(r.indexOf('{'), 1);
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case '},':
                            r.shift();
                            
                            if ($$.indexOf('{') > -1) {
                                $$.splice(r.indexOf('{'), 1);
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case '[':
                            $$.push('[');
                            r.shift();
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case ']':
                            r.shift();
                            
                            if ($$.indexOf('[') > -1) {
                                $$.splice(r.indexOf('['), 1);
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case '],':
                            r.shift();
                            
                            if ($$.indexOf('[') > -1) {
                                $$.splice(r.indexOf('['), 1);
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                            
                        // FIELD VALUE TYPES
                        case 'string':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = "";
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'string,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = "";
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'number':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = 0;
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'number,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = 0;
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'list':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = [];
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'list,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = [];
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'object':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = {};
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'object,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = {};
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'boolean':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = false;
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'boolean,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = false;
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'function':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = function(){};
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        case 'function,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = function(){};
                                $$.pop();
                            }
                            
                            parseCreate(r.join(' '), kls, $$);
                            break;
                        
                        // VALUES
                        default:
                            r.shift();
                            
                            if (s.match(/[a-zA-Z0-9\-_]*:/)) {
                                $$.push(s);
                                parseCreate(r.join(' '), kls, $$);
                            } else {
                                if (s.match(/[a-zA-Z0-9\-_]*/)) {
                                    if (kls[s]) {
                                        switch ($$[$$.length - 1]) {
                                            // IS A PROPERTY GETTER
                                            case '[':
                                                break;
                                            
                                            // IGNORE
                                            default:
                                                r.shift();
                                                parseCreate(r.join(' '), kls, $$);
                                                break;
                                        }
                                    }
                                }
                            }
                            break;
                    }
                }
            }
            // remove empty strings
            else {
                if (r.indexOf(s) > -1) {
                    r.splice(r.indexOf(s), 1);
                }
            }
            
            if (($$.length === 1) && ($$[$$.length - 1] === '$')) {
                i = r.length;
            }
        }
    };
    
    return bwf.prototype.init();
}

(function() {
    var trimParts = function(lst, pattern) {
        var parts = [];
        
        lst.forEach(function(part) {
            parts.push(part.trim());
        });
        
        return parts.filter(function(p) {
            return !p.match(pattern);
        });
    };
    
    String.prototype.splitOn = function(pattern) {
        var t = trimParts(this.trim().split(pattern), pattern);
        var result = [];
        t.forEach(function(r) {
            if (r !== '') {
                result.push(r);
            }
        });
        return result;
    };
})();