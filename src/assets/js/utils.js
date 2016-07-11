var Utils = {
    /**
     * Function used to show all hidden elements in page
     */
    unhideAll: function() {
        var tags = document.body.getElementsByTagName("*");
        for (var i = 0; i < tags.length; i++) {
            var element = tags[i];
            if (element.offsetWidth <= 0 && element.offsetHeight <= 0) {
                // get it only if is not a script or iframe block
           		if (element.outerHTML.indexOf('<script') < 0) {
           			if (element.outerHTML.indexOf('<iframe') < 0) {
               			element.hidden = false;
                  	}
           		}
            }
        }
    },
    /**
     * Function used to hide all hidden elements in page
     */
    hideAll: function() {
        var tags = document.body.getElementsByTagName("*");
        for (var i = 0; i < tags.length; i++) {
            var element = tags[i];
            if (element.offsetWidth <= 0 && element.offsetHeight <= 0) {
                // get it only if is not a script or iframe block
           		if (element.outerHTML.indexOf('<script') < 0) {
           			if (element.outerHTML.indexOf('<iframe') < 0) {
               			element.hidden = true;
                  	}
           		}
            }
        }
    }
};