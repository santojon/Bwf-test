// find all specs in path
window['specs'] = []
Object.keys(window).forEach(
	function (key) {
		if (key.match(/[a-zA-Z0-9\-_]*Spec/) !== null) {
			window['specs'].push(window[key])
		}
	}
)