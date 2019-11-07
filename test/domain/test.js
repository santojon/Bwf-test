/**
* Function responsible to create HTML text for a Test
 */
Test.prototype.toHtml = function(cls) {
	var db = this
	var divClass = db['result'] ? 'successStr' : 'failureStr' 
	var result = db['result'] ? '<small class="success"><span class="glyphicon glyphicon-ok"></span></small>'
            	    : '<small class="failure"><span class="glyphicon glyphicon-remove"></span></small>'
            	    
	var htmlStr = ''
	if (cls) {
	    if (db['result']) {
	        htmlStr = '<div id="' + db['name'] + '" class="panel panel-success ' + (cls || '') + '">'
	    } else {
	        htmlStr = '<div id="' + db['name'] + '" class="panel panel-danger ' + (cls || '') + '">'
	    }
	    htmlStr = htmlStr + '<div class="panel-heading">' + db['relatedTo'] +
	                ' <small><span class="glyphicon glyphicon-triangle-right"></span></small> ' + db['name'] +
	                            '<div class="pull-right">' +
            	    			    result +
	                            '</div>' +
	                        '</div>'
	    htmlStr = htmlStr + '<div class="panel-body">'
	}
	
	Object.keys(db).forEach(
		function(key) {
			switch (typeof db[key]) {
				case 'string':
				    if ((key !== 'name') && (key !== 'relatedTo')) {
				        htmlStr = htmlStr + '<p>' 
    						+ key + ': <code class="' + divClass + '">' + db[key] + '</code></p>'
				    }
					break
				case 'object':
					if (db[key] instanceof Array) {
						htmlStr = htmlStr + '<p>' + key + ':<ul>'
    					db[key].forEach(
    						function(k) {
    							htmlStr = htmlStr + '<li><code class="' + divClass + '">' +
    								k + '</code></li>'
    						}
    					)
    					htmlStr = htmlStr + '</ul>'
					} else {
						htmlStr = htmlStr + '<p>' + key + ':</p>' +
						    '<div class="col-xs-11 col-xs-offset-1">'
								+ new Test(db[key]).toHtml() + '</div>'
					}
					break
			}
		}
	)
	return htmlStr + '</div></div>'
}