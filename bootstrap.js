// ----------------------------------------------
// Create instances
// ----------------------------------------------

new User({
	username: 'santojon',
	password: 'senha',
	name: 'Jonathan Santos',
	email: 'santojon5@gmail.com'
}).save(function (usr) {
	new Dashboard({
		name: 'homeBase',
		owner: usr,
		tiles: ['lights', 'water', 'tv', 'pc', 'security', 'cameras']
	}).save()

	new Dashboard({
		name: 'home',
		owner: usr,
		base: 'homeBase',
		tiles: ['locks', 'people'],
		extras: {
			tiles: ['games', 'stats']
		}
	}).save()

	new Dashboard({
		name: 'work',
		owner: usr,
		tiles: ['tasks', 'hours', 'coffee', 'slack', 'time tracking', 'issues'],
		extras: {
			tiles: ['news', 'forecast', 'traffic']
		}
	}).save()
})

new User({
	username: 'blah',
	password: 'senha',
	name: 'Blah Blah',
	email: 'blah@blah.com'
}).save(function (usr) {
	new Dashboard({
		name: 'overall',
		owner: usr,
		base: 'home',
		tiles: ['kids', 'wife', 'to-do lists'],
		extras: {
			base: 'work',
			tiles: ['family', 'calendar', 'hollidays']
		}
	}).save()
})

new User({
	username: 'manolo',
	password: 'senha',
	name: 'Manolo Supimpa',
	email: 'manolo@supimpa.com'
}).save(function (usr) {
	new Dashboard({
		name: 'all',
		owner: usr,
		base: 'overall'
	}).save()
})