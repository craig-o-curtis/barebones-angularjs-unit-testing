(function(){
    'use strict'

    angular.module('expensesApp')
        .factory('expensesService', ['$http', expensesService]);

    function expensesService($http){
        var service = {
            getExpenses: getExpenses,
            persistExpenses: persistExpenses
        };

        return service;

        function getExpenses(){
            return [
                new ExpenseItem('Taxi', 'To airport',  89.95),
                new ExpenseItem('Dinner', 'At airport', 15.40),
                new ExpenseItem('Coffee','Starbucks', 4.93)
            ]
        }

        function reportExpenses(){
            // some work
            return;
        }

        function persistExpenses(reportExpenses){
            // do some work
            var success = true;
            if (success){
                reportExpenses();
            }
        }
    }
})();