(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = [];

    /* @ngInject */
    function IndexController() {
        var vm = this;
        vm.title = 'IndexController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();