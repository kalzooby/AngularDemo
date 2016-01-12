(function() {
    'use strict';

    angular
        .module('app.datasource')
        .service('dataService', dataService);

    dataService.$inject = ['Restangular', '$http'];

    /* @ngInject */
    function dataService(Restangular, $http) {
        var service = {
            getMsg: getData
        };


        ////////////////

        function getData() {
            // return $http.get('/api/messages').then(function(res) {
            //     return res.data;
            // });
            return Restangular.all('messages').getList().then(function(res) {
                return res;
            });
        }
        return service;
    }
})();
