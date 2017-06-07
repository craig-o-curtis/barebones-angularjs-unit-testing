(function(){
    'use strict';

    var app = angular.module('expensesApp', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvideer) {
        $routeProvideer
            .when('/', { templateUrl: 'app/Expense/expense.html' })
            .when('/admin', { templateUrl: 'app/Admin/admin.html' })
            .otherwise( { redirectTo: '/' } );
    }]);
})();