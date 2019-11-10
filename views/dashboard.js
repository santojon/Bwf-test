pages.Dashboards = function (params) {
    // Get all needed scopes (another js objects like controllers, services etc.)
    with(
        Sgfd.Base.merge(
            DashboardController,
            Utils
        )
    ) {
        var currentUser = User.find({
            username: params ? (params.username ? params.username : 'santojon') : 'santojon'
        })
        var allUsers = User.findAll().distinct()

        // add current user username to screen
        var div = document.createElement('small')
        div.innerHTML = ' <code id="currentUser">' + currentUser.username + '</code>'
        document.getElementById('title').appendChild(div)

        // Add all defined dashboards for user to screen
        var dashboards = Dashboard.findBy({
            owner: currentUser
        }).distinct()
        dashboards.forEach(
            function (dashboard) {
                appendDashboard('dashboards', dashboard)
            }
        )

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