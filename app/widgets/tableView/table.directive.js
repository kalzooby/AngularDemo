(function() {
    'use strict';

    angular
        .module('app.table')
        .directive('tableView', tableView);

    tableView.$inject = [];

    /* @ngInject */
    function tableView () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: TableController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    /* @ngInject */
    function TableController () {

    }
})();