describe('Expense Controller', function() {

    var $controllerConstructor;
    var scope;

    beforeEach( module('expensesApp') );

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controllerConstructor = _$controller_;
        scope = _$rootScope_.$new();
    }));

    
    it('should have three expense items', function() {
        // create instance of controller in it block
            // reference real controller name, get instance of real controller        

        var ctrl = $controllerConstructor('expensesController', {$scope:scope});

        expect(ctrl.expenseItems.length).toBe(3);
        // expect(true).toBe(true);
    });

});