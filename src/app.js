// Loads all needed things to run app. It need 'base.js' loaded to work
with (Base) {
    progressiveLoad(['conf.js', 'loader.js'], loadScript, function() {
        /**
         * The app itself.
         */
    });
}