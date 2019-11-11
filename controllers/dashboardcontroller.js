var DashboardController = new Sgfd.Controller({
    metaName: 'DashboardController',

    /**
     * Change the dashboards to show.
     * This remove previous dashboards from screen.
     */
    changeDashboard: function () {
        var username = this.innerHTML.split(/-li/)[0]
        document.getElementById('dashboards').innerHTML = ''
        document.getElementById('currentUser').innerHTML = username

        var currentUser = User.findBy({
            username: username
        })[0]
        var allUsers = User.findAll()

        // Add all defined dashboards for user 'me' to screen
        var dashboards = Dashboard.findBy({
            owner: currentUser
        })
        dashboards.forEach(
            function (v) {
                DashboardController.appendDashboard('dashboards', v)
            }
        )

        allUsers.forEach(
            function (v) {
                if (v !== currentUser) {
                    var old = document.getElementById(username + '-li')
                    if (old) {
                        document.getElementById('chg-lst').removeChild(old.parentElement)
                    }

                    var n = document.getElementById(v.username + '-li')
                    if (!n) {
                        var li = document.createElement('li')
                        li.innerHTML = '<a id="' + v.username + '-li" ' + 'href="#">' + v.username + '</a>'
                        document.getElementById('chg-lst').appendChild(li)
                    }
                    document.getElementById(v.username + '-li').onclick = DashboardController.changeDashboard
                }
            }
        )
    },
    /**
     * Create a new dashboard
     */
    createDashboard: function () {
        var username = document.getElementById('currentUser').innerHTML
        var currentUser = User.findBy({
            username: username
        })[0]

        DashboardController.appendDashboard('dashboards',
            Dashboard.add(
                new Dashboard({
                    name: 'new',
                    owner: currentUser,
                    base: 'home',
                    tiles: ['to-do lists'],
                    extras: {
                        base: 'all',
                        tiles: ['calendar', 'hollidays']
                    }
                })
            )
        )
    },
    /**
     * Remove dashboard from screen (and database)
     * @param name: the name of the dashboard to remove
     */
    removeDashboard: function (name) {
        DashboardController.unAppendDashboard('dashboards',
            Dashboard.remove(
                Dashboard.findBy({
                    name: name
                })[0]
            )
        )
    },
    /**
     * Function responsible to add a HTML description of a dashboard to screen
     * @param id: the id of the element of the screen to append dashboard
     * @param dashboard: the dashboard to append
     */
    appendDashboard: function (id, dashboard) {
        var div, target = document.getElementById(id)
        div = document.createElement('div')

        div.innerHTML = dashboard.toHtml('dashboard')
        target.appendChild(div)

        while (div.firstChild) {
            // Also removes child nodes from 'div'
            target.insertBefore(div.firstChild, div)
        }
        // Remove 'div' element from target element
        target.removeChild(div)
    },
    /**
     * Function responsible to remove the HTML description of a dashboard from screen
     * @param id: the id of the element of the screen to remove dashboard
     * @param dashboard: the dashboard to remove
     */
    unAppendDashboard: function (id, dashboard) {
        var div = document.getElementById(id)
        var db = document.getElementById(dashboard.name)

        div.removeChild(db)
    }
})