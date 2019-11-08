var appConfig = {
    front: {
        styles: ['style'],
        scripts: ['utils'],
        externalStyles: [
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
            'https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css',
            'https://bootswatch.com/3/slate/bootstrap.min.css'
        ],
        externalScripts: [
            'https://code.jquery.com/jquery-2.2.3.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'
        ]
    },
    back: {
        full: ['user', 'dashboard'],
        services: ['security']
    },
    conf: {
        appName: 'Dashboards',
        // language: navigator.language || 'en-US',
        dependencies: [
            '../lib/slpnr/slpnr.js',
            '../lib/frgg/frgg.js',
            '../lib/bhdr/bhdr.js',
            '../lib/bwf/bwf.full.js'
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