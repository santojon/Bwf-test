var appConfig = {
    front: {
        // styles: ['style'],
        // scripts: ['utils'],
        externalStyles: [
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
            'https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css',
            'https://bootswatch.com/3/slate/bootstrap.min.css',
            '../assets/css/style.css',
        ],
        externalScripts: [
            '../assets/js/utils.js',
            'https://code.jquery.com/jquery-2.2.3.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'
        ]
    },
    back: {
        bwfDomains: ['test', 'testset'],
        domainClasses: ['test'],
        views: ['home']
    },
    conf: {
        appName: 'Dashboards Tests',
        // language: navigator.language || 'en-US',
        dependencies: [
            // Libs
            '../lib/slpnr/slpnr.js',
            '../lib/frgg/frgg.js',
            '../lib/bhdr/bhdr.js',
            '../lib/bwf/bwf.full.js',

            // Tests
            'data/specs/lib/dist/bwfspec.js',
            'data/specs/lib/dist/bhdrspec.js',
            'data/specs/app/domain/userspec.js',
            'data/specs/app/domain/dashboardspec.js',
            'data/specs/app/controllers/usercontrollerspec.js',
            'data/specs/app/controllers/dashboardcontrollerspec.js'
        ],
        dataPool: 'Bhdr',
        classLoader: 'Bwf',
        pageLoader: 'Frgg',
        session: false,
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