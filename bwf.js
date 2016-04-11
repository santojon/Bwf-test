var that = this;
function Bwf(elem, options) {
    var bwf = this;
    var elem = elem;
    
    var result = {};
    
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
    
    bwf.prototype = {
	    init: function() {
	        return this.parseDomain();
	    },
        parseDomain: function() {
            var parts = elem.splitOn(/ /);
            
            // can split?
            if ((parts !== undefined) && (parts[0] !== '')) {
                // Verify if is a class creation
                if (parts[0] !== parts[0].toLowerCase()) {
                    var className = parts[0].split(/:/)[0];
                    result[className] = {};
                    var klass = result[className];
                    
                    // remove first element
                    parts.shift();
                    
                    // parse rest of the string
                    parseDomain(parts.join(' '), klass);
                    
                    // return it
                    that[className] = classTemplate(className, klass);
                    return that[className];
                }
                // is a class usage
                else {
                    
                }
            }
            
            return result;
            //return elem.split(/:/).join('->');
        },
        parseMain: function() {
            var parts = elem.splitOn(/:/);
        }
    };
    
    var parseDomain = function(str, kls, base) {
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
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case '}':
                            r.shift();
                            
                            if ($$[$$.length - 1] === '->') {
                                var pp = $$[$$.length - 2];
                                $$.pop();
                                $$.pop();
                                $$.pop();
                                $$.push(pp);
                            }
                            
                            if ($$.indexOf('{') > -1) {
                                $$.splice(r.indexOf('{'), 1);
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case '},':
                            r.shift();
                            
                            if ($$[$$.length - 1] === '->') {
                                var pp = $$[$$.length - 2];
                                $$.pop();
                                $$.pop();
                                $$.pop();
                                $$.push(pp);
                            }
                            
                            if ($$.indexOf('{') > -1) {
                                $$.splice(r.indexOf('{'), 1);
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case '[':
                            $$.push('[');
                            r.shift();
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case ']':
                            r.shift();
                            
                            if ($$[$$.length - 2] === '->') {
                                var pp = $$[$$.length - 3];
                                $$.pop();
                                $$.pop();
                                $$.pop();
                                $$.push(pp);
                            }
                            
                            if ($$.indexOf('[') > -1) {
                                $$.splice(r.indexOf('['), 1);
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case '],':
                            r.shift();
                            
                            if ($$[$$.length - 2] === '->') {
                                var pp = $$[$$.length - 3];
                                $$.pop();
                                $$.pop();
                                $$.pop();
                                $$.push(pp);
                            }
                            
                            if ($$.indexOf('[') > -1) {
                                $$.splice(r.indexOf('['), 1);
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                            
                        // FIELD TYPES
                        case 'required:':
                            //$$.push(s);
                            r.shift();
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case 'optional:':
                            //$$.push(s);
                            r.shift();
                            parseDomain(r.join(' '), kls, $$);
                            break;
                            
                        // FIELD VALUE TYPES
                        case 'string':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = "";
                                $$.pop();
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case 'string,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = "";
                                $$.pop();
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case 'number':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = 0;
                                $$.pop();
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case 'number,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = 0;
                                $$.pop();
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case 'list':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = [];
                                $$.pop();
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case 'list,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = [];
                                $$.pop();
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case 'object':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = {};
                                $$.pop();
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case 'object,':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = {};
                                $$.pop();
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        
                        // MATHEMATICS
                        case '+':
                            $$.push('+');
                            r.shift();
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case '-':
                            $$.push('-');
                            r.shift();
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case '/':
                            $$.push('/');
                            r.shift();
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case '*':
                            $$.push('*');
                            r.shift();
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        case '^':
                            $$.push('^');
                            r.shift();
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        
                        // FUNCTIONS
                        case '->':
                            r.shift();
                            
                            if ($$[$$.length - 1].match(/[a-zA-Z0-9\-_]*:/)) {
                                kls[$$[$$.length - 1].split(/:/)[0]] = function() {};
                                
                                switch (r[0]) {
                                    // func, no params
                                    case '{':
                                        $$.push('{');
                                        $$.push('->');
                                        r.shift();
                                        break;
                                    // property getter
                                    case '[':
                                        $$.push('[');
                                        $$.push('->');
                                        r.shift();
                                        break;
                                    
                                    // fun with params
                                    default:
                                        var params = r[0].split(/,/);
                                        var code = 'this.f = function (' + 
                                            params.forEach(function(p) {
                                                if (p !== '') {
                                                    return p;
                                                }
                                            });
                                        + ') {\
                                        }';
                                        kls[$$[$$.length - 1].split(/:/)[0]] = eval(code);
                                        r.shift();
                                        if (r[0] === '{') {
                                            $$.push('{');
                                            $$.push('->');
                                        } else {
                                            
                                        }
                                        r.shift();
                                        break;
                                }
                            }
                            
                            parseDomain(r.join(' '), kls, $$);
                            break;
                        
                        // VALUES
                        default:
                            r.shift();
                            
                            if (s.match(/[a-zA-Z0-9\-_]*:/)) {
                                $$.push(s);
                                parseDomain(r.join(' '), kls, $$);
                            } else {
                                if (s.match(/[a-zA-Z0-9\-_]*/)) {
                                    if (kls[s]) {
                                        switch ($$[$$.length - 1]) {
                                            // IS A FUNCTION DEFINITION
                                            case '->':
                                                if (kls[$$[$$.length - 3]
                                                        .split(/:/)[0]]() !== undefined) {
                                                    
                                                } else {
                                                    kls[$$[$$.length - 3]
                                                        .split(/:/)[0]]
                                                            = eval('this.f = function () {\
                                                        return this.' + s + ';\
                                                    }');
                                                }
                                                break;
                                            
                                            // IS A PROPERTY GETTER
                                            case '[':
                                                break;
                                            
                                            // IGNORE
                                            default:
                                                r.shift();
                                                parseDomain(r.join(' '), kls, $$);
                                                break;
                                        }
                                    }
                                }
                            }
                            break;
                    }
                }
            }
            // remove mpty strings
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