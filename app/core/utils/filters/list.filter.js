(function() {
    'use strict';

    angular
        .module('app.filters')
        .filter('filtertag', filtertag);

    function filtertag() {
        return filtertagFilter;

        ////////////////

        function filtertagFilter(input, tag) {

            if (tag == undefined || tag == '') {
                return input;
            } else {

                var output = [];
                // var keys = Object.keys(input);
                // console.log(keys);
                for (var i = 0; i < input.length; i++) {
                    if (Object.keys(input[i])[0].includes(tag)) {
                        output.push(input[i]);
                    }

                }
                return output;
            }

        }
    }

})();
