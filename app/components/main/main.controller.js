(function() {
    'use strict';

    angular
        .module('app.main')
        .controller('MainController', MainController);

    MainController.$inject = ['dataService'];

    /* @ngInject */
    function MainController(dataService) {
        var vm = this;
        vm.title = 'MainController';
       
    }
})();
