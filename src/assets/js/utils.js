var Utils = {
    /**
     * Function used to show all hidden elements in page
     */
    unhideAll: function () {
        var tags = document.body.getElementsByTagName("*")
        for (var i = 0; i < tags.length; i++) {
            var element = tags[i]
            if (element.offsetWidth <= 0 && element.offsetHeight <= 0) {
                // get it only if is not a script or iframe block
                if (element.outerHTML.indexOf('<script') < 0) {
                    if (element.outerHTML.indexOf('<iframe') < 0) {
                        element.hidden = false
                    }
                }
            }
        }
    },
    /**
     * Function used to hide all hidden elements in page
     */
    hideAll: function () {
        var tags = document.body.getElementsByTagName("*")
        for (var i = 0; i < tags.length; i++) {
            var element = tags[i]
            if (element.offsetWidth <= 0 && element.offsetHeight <= 0) {
                // get it only if is not a script or iframe block
                if (element.outerHTML.indexOf('<script') < 0) {
                    if (element.outerHTML.indexOf('<iframe') < 0) {
                        element.hidden = true
                    }
                }
            }
        }
    },

    /**
     * Used to append progress bar to screen in tests
     * @param id: the id of the div to use
     * @param divId: the id of div to append
     * @param cls: css class of the div
     */
    appendDiv: function (id, divId, cls) {
        var div, target = document.getElementById(id)
        div = document.createElement('div')
        div.id = divId
        div.className = cls

        target.appendChild(div)
    },

    /**
     * Function responsible to add a HTML description of a dashboard to screen
     * @param id: the id of the element of the screen to append dashboard
     * @param dashboard: the dashboard to append
     */
    appendTest: function (id, test) {
        var div, target = document.getElementById(id)
        div = document.createElement('div')

        div.innerHTML = test.toHtml('test-result')
        target.appendChild(div)

        while (div.firstChild) {
            // Also removes child nodes from 'div'
            target.insertBefore(div.firstChild, div)
        }
        // Remove 'div' element from target element
        target.removeChild(div)
    },

    /**
     * Used to append progress bar to screen in tests
     * @param id: the id of the div to use
     * @param tset: the set to append
     */
    appendSet: function (id, tset) {
        var div, target = document.getElementById(id)
        div = document.createElement('div')

        div.innerHTML = '<h4>' + tset.relatedTo + '</h4><div class="progress">\
			  <div id="success-progress' + tset.relatedTo + '" class="progress-bar progress-bar-success"></div>\
			  <div id="error-progress' + tset.relatedTo + '" class="progress-bar progress-bar-danger"></div>\
			</div>'

        target.appendChild(div)

        while (div.firstChild) {
            // Also removes child nodes from 'div'
            target.insertBefore(div.firstChild, div)
        }
        // Remove 'div' element from target element
        target.removeChild(div)
    },

    /**
     * Show test set progressBar
     * @param tset: the set to show progress
     */
    showProgress: function (tset) {
        var sum = tset.success + tset.failure
        var sucP = (tset.success * 100 / sum)

        // 100% error!!!
        if (sucP === 0) {
            var err = document.getElementById('error-progress' + tset.relatedTo)
            err.style = 'width: ' + (100 - sucP) + '% !important'
            err.textContent = 'Failure: ' + (100 - Math.round(sucP)).toString() + '%'
        }
        // 100% success!!!
        else if (sucP === 1) {
            var suc = document.getElementById('success-progress' + tset.relatedTo)
            suc.style = 'width: ' + sucP + '% !important'
            suc.textContent = 'Success: ' + Math.round(sucP).toString() + '%'
        } else {
            var suc = document.getElementById('success-progress' + tset.relatedTo)
            var err = document.getElementById('error-progress' + tset.relatedTo)

            suc.style = 'width: ' + sucP + '% !important'
            err.style = 'width: ' + (100 - sucP) + '% !important'

            suc.textContent = 'Success: ' + Math.round(sucP).toString() + '%'
            err.textContent = 'Failure: ' + (100 - Math.round(sucP)).toString() + '%'
        }
    }
}