(function() {
    'use strict';

    angular
        .module('app', [
            'ngAnimate', 'ngSanitize', 'ui.router', 'restangular', 'angularMoment', 'ui.bootstrap', 'app.datasource', 'app.main', 'app.widgets'
        ]);
})();
