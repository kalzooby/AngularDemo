(function() {
    'use strict';

    angular
        .module('app.table')
        .directive('tableView', tableView);

    tableView.$inject = ['dataService'];

    /* @ngInject */
    function tableView () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            templateUrl:'./app/widgets/tableView/table.html',
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
    function TableController (dataService) {
        var vm = this;
        vm.title = 'TableController';
        vm.data = [];
        vm.list = [];
        vm.isCollapsed = true;
        activate();

        ////////////////

        function activate() {
            return getMassages().then(function(obj) {
                vm.list = parseData(obj);
                console.log('Activated View');
            });
        }

        function getMassages() {
            return dataService.getMsg().then(function(data) {
                vm.data = data;
                return vm.data;
            });
        }

        function parseData(data) {

            return convertToArrayOfObjects(data);
        }

        function convertToArrayOfObjects(data) {
            var parselist = [],
                output = [],
                parseobj = null,
                obj = null;
            for (var i = 0; i < data.length; i++) {
                output = [];
                parseobj = {};
                var parselv1 = data[i].message.split('|');
                for (var j = 0; j < parselv1.length; j++) {
                    var parselv2 = parselv1[j].split('=');
                    var key = parselv2.shift();
                    obj = {};
                    obj[key] = parselv2;
                    if (Object.keys(obj)[0].length > 0) { // Todo
                        // some messges have empty tags 
                        output.push(obj);
                    }
                }
                parseobj['id'] = data[i].id;
                parseobj['timestamp'] = data[i].timestamp;
                parseobj['tags'] = output;
                parselist.push(parseobj);
            }

            return parselist;
        }
    }
})();