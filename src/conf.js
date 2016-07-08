/**
 * The application container (default is 'this', or 'window')
 */
var container = this;

/**
 * App configuration
 *
 * @param front: the front-end dependencies {
 *      @param styles: local style files (src/assets/css)
 *      @param scripts: local javascript files (src/assets/js)
 *      @param externalStyles: external style files
 *      @param externalScripts: external javascript files
 * }
 * @param back: the back-end dependencies {
 *      @param domainClasses: list of names of the domain classes to be loaded
 *      @param controllers: list of names of the controllers to be loaded (same as domain name)
 *      @param services: list of names of the services to be loaded (same as domain name)
 * }
 * @param conf: entire project dependencies and configuration {
 *      @param appName: the name of the application
 *      @param dependencies: project dependencies (libraries)
 *      @param dataPool: database related class name
 *      @param classLoader: classloader class name
 *      @param bootstrap: set to 'true' to use 'bootstrap.js' file to setup data
 * }
 *
 *
 * PS: all list parametes have to be given in the needed order
 *     to be loaded correctly
 */
var appConfig = {
    front: {
        styles: ['style'],
        scripts: [],
        externalStyles: [
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
            'https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css'
        ],
        externalScripts: [
            'https://code.jquery.com/jquery-2.2.3.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'
        ]
    },
    back: {
        domainClasses: ['user', 'dashboard'],
        controllers: ['user', 'dashboard'],
        services: []
    },
    conf: {
        appName: 'Dashboards',
        dependencies: [
            'lib/utils.js',
            'lib/dist/bhdr.js',
            'lib/dist/bwf.js'
        ],
        dataPool: 'Bhdr',
        classLoader: 'Bwf',
        bootstrap: true
    }
};