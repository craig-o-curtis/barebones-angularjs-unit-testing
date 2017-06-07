(function(){
    'use strict';

    angular.module('expensesApp')
        .factory('expensesService', ['$http', expensesService]);

    // definition
    function expensesService($http) {
        var service = {
            getExpenses: getExpenses
        };

        return service;

        // definition
        function getExpenses() {
            return [
                {title: 'Taxi', description: 'To airport', amount: 69.95},
                {title: 'Lunch', description: 'At airport', amount: 19.95},
                {title: 'Coffee', description: 'In airport', amount: 4.95}
            ];
        }
    }
})();