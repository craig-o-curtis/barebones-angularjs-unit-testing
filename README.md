// Barebones focus on Jasmine
No Karma test runner
No npm packages / node modules

// Test Driven Development
RED GREEN REFACTOR
SEE - Setup Execute, Expectations
AAA - Arrange Act Assert

// Testing Basics
1. No need to test proven third-party libraries
2. Need to test trivial / obvious functionality


// Serving up app --- http-server approach
1. npm install -g http-server
2. http-server src/
3. Right-click on SpecRunner.html (no auto-refreshing) and choose 'open in browser'


// Matchers
- toBe
```
    // another way to inject right into an it block
    it('should return three expense items', inject(function(expensesService) {
        expect(expensesService.getExpenses().length).toBe(3);
    }));
```

- toContain
```
    // check if getting back items from service
    it('should return a taxi expense', inject(function(expensesService) {
        var expenseItems = expensesService.getExpenses();
        var testExpenseItem = new ExpenseItem('Taxi', 'To airport', 69.59);
        
        expect(expenseItems).toContain(testExpenseItem);
    }));
```
- toBeLessThan
```
    it('taxi should be a reasonable expense', function(){
        var taxi = new ExpenseItem('Taxi', 'To airport', 69.59);
        expect(taxi.amount).toBeLessThan(100);
    });
```

// Create a Custom Watcher
1. have a class or object as a model, create a method to return boolean:
```
// ExpenseItems.js
function ExpenseItem(type, description, amount) {
    this.type = type;
    this.description = description;
    this.amount = amount;
}

ExpenseItem.prototype.isReasonable = function() {
    return this.amount <= 100;
}
```

2. Add a SpecHelper.js file and do sth. add a method:
```
// SpecHelper.js
var customMatchers = {
    toBeAReasonableExpense: function(){
        return {
            compare: function(actual){
                var pass = actual.isReasonable();
                var judgement = pass ? 'unreasonable' : 'reasonable';

                return {
                    pass: pass,
                    message: 'Expected expense to be a ' + judgement + ' expense.'
                };
            }
        };
    }
}
```

3. Call the method in a Unit Test
```
'use strict';

describe('persisting expenses', function(){

    beforeEach(module('expensesApp'));

    describe('call backs', function(){

        it('should call back when persisted', inject(function(expensesService){
            var spyCallBack = jasmine.createSpy('callBackSpy');
            expensesService.persistExpenses(spyCallBack);
            expect(spyCallBack).toHaveBeenCalled();
        }));
    });

    describe('spy on', function() {

        it('should spy on persistExpenses', inject(function (expensesService) {
           var spy = spyOn(expensesService, 'persistExpenses');
            expensesService.persistExpenses();
            expect(spy).toHaveBeenCalled();
        }));

        it('should spy on persistExpenses and fake a reply', inject(function(expensesService){
            var spy = spyOn(expensesService, 'persistExpenses').and.callFake(function(){
                return 3;
            });
            var numRecordsPersisted = expensesService.persistExpenses();
            expect(numRecordsPersisted).toEqual(3);

        }));
    });
});
```



// Spies
- can craeate mock objects
- can check whether  method was called
