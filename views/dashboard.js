pages.Dashboards = (params) => {
    // Get all needed scopes (another js objects like controllers, services etc.)
    with (
    Sgfd.Base.merge(
        DashboardController,
        Utils
    )
    ) {
        var allUsers = new DbArray()
        User.findAll().forEach((user) => {
            allUsers.push(user)
        })

        allUsers = allUsers.distinct()
        if (params) {
            // Get Current User
            var currentUser = User.find({
                username: params.username ? params.username : 'santojon'
            })

            // add current user username to screen
            var div = document.createElement('small')
            div.innerHTML = ' <code id="currentUser">' + currentUser.username + '</code>'
            document.getElementById('title').appendChild(div)

            // Add all defined dashboards for user to screen
            var dashboards = new DbArray()
            Dashboard.findBy({
                owner: currentUser
            }).forEach((dashboard) => {
                dashboards.push(dashboard)
            })

            dashboards = dashboards.distinct()
            dashboards.forEach(
                function (dashboard) {
                    appendDashboard('dashboards', dashboard)
                }
            )
        }

        // Add all users to dropdown
        allUsers.forEach(
            function (user) {
                if (user !== currentUser) {
                    var li = document.createElement('li')
                    li.innerHTML = '<a id="' + user.username + '-li" ' + 'href="#">' + user.username + '</a>'
                    document.getElementById('chg-lst').appendChild(li)

                    document.getElementById(user.username + '-li').onclick = changeDashboard
                }
            }
        )

        // Buttons actions
        document.getElementById('btn-create-dshb').onclick = createDashboard
        document.getElementById('btn-dump').onclick = function () {
            console.log(dataPool.export('json', 4))
        }

        // Show all hidden things in screen
        unhideAll()
    }
}