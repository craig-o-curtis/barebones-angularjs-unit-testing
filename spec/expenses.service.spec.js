describe('Expenses Service', function(){

    beforeEach(module('expensesApp'));

    // another way to inject right into an it block
    it('should return three expense items', inject(function(expensesService) {
        expect(expensesService.getExpenses().length).toBe(3);
    }));

});