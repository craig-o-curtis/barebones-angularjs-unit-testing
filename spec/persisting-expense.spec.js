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