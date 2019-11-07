pages.Home = function (params) {
    var res = new Slpnr({
        sets: specs
    }).run()
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

    Utils.unhideAll()
}