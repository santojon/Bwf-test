// create test class and map it to db
classLoader.create('Test: {\
                        name: string,\
                        relatedTo: string,\
                        result: boolean,\
                        trace: string\
                    }');
dataPool.map(Test);

// create test set class and map it to db
classLoader.create('TestSet: {\
                        relatedTo: string,\
                        date: string,\
                        tests: list,\
                        failure: number,\
                        success: number\
                    }');
dataPool.map(TestSet);
                    
// test/index.html related code
                    
/**
* Function responsible to create HTML text for a Test
 */
Test.prototype.toHtml = function(cls) {
	var db = this;
	var divClass = db['result'] ? 'successStr' : 'failureStr' ;
	var result = db['result'] ? '<small class="success"><span class="glyphicon glyphicon-ok"></span></small>'
            	    : '<small class="failure"><span class="glyphicon glyphicon-remove"></span></small>';
            	    
	var htmlStr = '';
	if (cls) {
	    if (db['result']) {
	        htmlStr = '<div id="' + db['name'] + '" class="panel panel-success ' + (cls || '') + '">';
	    } else {
	        htmlStr = '<div id="' + db['name'] + '" class="panel panel-danger ' + (cls || '') + '">';
	    }
	    htmlStr = htmlStr + '<div class="panel-heading">' + db['relatedTo'] +
	                ' <small><span class="glyphicon glyphicon-triangle-right"></span></small> ' + db['name'] +
	                            '<div class="pull-right">' +
            	    			    result +
	                            '</div>' +
	                        '</div>';
	    htmlStr = htmlStr + '<div class="panel-body">';
	}
	
	Object.keys(db).forEach(
		function(key) {
			switch (typeof db[key]) {
				case 'string':
				    if ((key !== 'name') && (key !== 'relatedTo')) {
				        htmlStr = htmlStr + '<p>' 
    						+ key + ': <code class="' + divClass + '">' + db[key] + '</code></p>';
				    }
					break;
				case 'object':
					if (db[key] instanceof Array) {
						htmlStr = htmlStr + '<p>' + key + ':<ul>';
    					db[key].forEach(
    						function(k) {
    							htmlStr = htmlStr + '<li><code class="' + divClass + '">' +
    								k + '</code></li>';
    						}
    					);
    					htmlStr = htmlStr + '</ul>';
					} else {
						htmlStr = htmlStr + '<p>' + key + ':</p>' +
						    '<div class="col-xs-11 col-xs-offset-1">'
								+ new Test(db[key]).toHtml() + '</div>';
					}
					break;
			}
		}
	);
	return htmlStr + '</div></div>';
};


/**
 * Used to append progress bar to screen in tests
 * @param id: the id of the div to use
 * @param divId: the id of div to append
 * @param cls: css class of the div
 */
function appendDiv(id, divId, cls) {
	var div, target = document.getElementById(id);
	div = document.createElement('div');
	div.id = divId;
	div.className = cls;
	
	target.appendChild(div);
}

/**
 * Function responsible to add a HTML description of a dashboard to screen
 * @param id: the id of the element of the screen to append dashboard
 * @param dashboard: the dashboard to append
 */
function appendTest(id, test) {
	var div, target = document.getElementById(id);
	div = document.createElement('div');
	
	div.innerHTML = test.toHtml('test-result');
	target.appendChild(div);
	
	while (div.firstChild) {
        // Also removes child nodes from 'div'
        target.insertBefore(div.firstChild, div);
    }
    // Remove 'div' element from target element
    target.removeChild(div);
}

/**
 * Used to append progress bar to screen in tests
 * @param id: the id of the div to use
 * @param tset: the set to append
 */
function appendSet(id, tset) {
	var div, target = document.getElementById(id);
	div = document.createElement('div');
	
	div.innerHTML = '<h4>' + tset.relatedTo + '</h4><div class="progress">\
			  <div id="success-progress' + tset.relatedTo + '" class="progress-bar progress-bar-success"></div>\
			  <div id="error-progress' + tset.relatedTo + '" class="progress-bar progress-bar-danger"></div>\
			</div>';
	
	target.appendChild(div);
	
	while (div.firstChild) {
        // Also removes child nodes from 'div'
        target.insertBefore(div.firstChild, div);
    }
    // Remove 'div' element from target element
    target.removeChild(div);
}

/**
 * Show test set progressBar
 * @param tset: the set to show progress
 */
function showProgress(tset) {
    var sum = tset.success + tset.failure;
    var sucP = (tset.success * 100 / sum);
    
    // 100% error!!!
    if (sucP === 0) {
        var err = document.getElementById('error-progress' + tset.relatedTo);
        err.style = 'width: ' + (100 - sucP) + '% !important;';
        err.textContent = 'Failure: ' + (100 - Math.round(sucP)).toString() + '%';
    }
    // 100% success!!!
    else if (sucP === 1) {
        var suc = document.getElementById('success-progress' + tset.relatedTo);
        suc.style = 'width: ' + sucP + '% !important;';
        suc.textContent = 'Success: ' + Math.round(sucP).toString() + '%';
    } else {
        var suc = document.getElementById('success-progress' + tset.relatedTo);
        var err = document.getElementById('error-progress' + tset.relatedTo);
        
        suc.style = 'width: ' + sucP + '% !important;';
        err.style = 'width: ' + (100 - sucP) + '% !important;';
        
        suc.textContent = 'Success: ' + Math.round(sucP).toString() + '%';
        err.textContent = 'Failure: ' + (100 - Math.round(sucP)).toString() + '%';
    }
}