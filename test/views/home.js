pages.Home = function (params) {
    // Tests results
    var res = new Slpnr({
        sets: specs
    }).run()

    // SHow all results as a pretty list on screen
    Object.keys(res).forEach(
        function (tset) {
            Utils.appendDiv('tests-results', tset, 'set')
            Utils.appendSet(res[tset].relatedTo, res[tset])
            Utils.showProgress(res[tset])

            res[tset].tests.forEach(
                function (result) {
                    Utils.appendTest(tset, new Test(result))
                }
            )
        }
    )

    // Print tests page button action
    $('#btn-print')[0].onclick = () => {
        print()
    }

    // Show the page
    Utils.unhideAll()
}