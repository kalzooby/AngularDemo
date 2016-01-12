(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig)
    .config(restangularConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

  /** @ngInject */
  function restangularConfig(RestangularProvider) {
      RestangularProvider.setBaseUrl('/api');
    };

})();
