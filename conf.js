var appConfig = {
    front: {
        styles: ['style'],
        scripts: ['utils'],
        externalStyles: [
            cache.css.bootstrap,
            cache.css.fa,
            'https://bootswatch.com/3/slate/bootstrap.min.css'
        ],
        externalScripts: [
            cache.js.jquery,
            cache.js.bootstrap
        ]
    },
    back: {
        views: ['dashboard'],
        bwfDomains: ['user', 'dashboard'],
        domainClasses: ['dashboard'],
        controllers: ['dashboard']
    },
    conf: {
        appName: 'Dashboards',
        // language: navigator.language || 'en-US',
        dependencies: [
            norse.bwf.full,
            norse.dbarray,
            norse.bhdr2,
            norse.frgg,
            norse.hdllr,
            norse.loki,
            'lib/slpnr/slpnr.js'
        ],
        dataPool: 'Bhdr',
        classLoader: 'Bwf',
        pageLoader: 'Frgg',
        session: true,
        bwfDomain: true,
        bootstrap: true,
        debug: {
            controllers: true,
            services: true,
            bridges: true
        },
        production: false
    }
}