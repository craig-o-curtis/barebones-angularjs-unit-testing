(function(){
    'use strict';


    angular.module('expensesApp')

        .controller('expensesController', ['expensesService', expensesController]);

        function expensesController(expensesService) {
            var vm = this;

            vm.activate = activate;
            vm.expenseItems = [];

            activate();

            // definitions

            function activate() {
                // // nasty return doing 2 things
                // return vm.expenseItems = [
                //     {title: 'Taxi', description: 'To airport', amount: 69.95},
                //     {title: 'Lunch', description: 'At airport', amount: 19.95},
                //     {title: 'Coffee', description: 'In airport', amount: 4.95}
                // ];
                vm.expenseItems =  expensesService.getExpenses();
            }
        }


        /*** MUST write controller as function otherwise unit tests fail ****/
        /*
        .controller('expensesController', ['$scope', function($scope) {
 
            var vm = this;

            vm.activate = activate;
            vm.expenseItems = [];

            activate();

            // fn definitions
            function activate() {
                return [
                    {title: 'Taxi', description: 'To airport', amount: 69.95},
                    {title: 'Lunch', description: 'At airport', amount: 19.95},
                    {title: 'Coffee', description: 'In airport', amount: 4.95}
                ];
            }

        }]);
        */
        /*** MUST write controller as function otherwise unit tests fail ****/



})();