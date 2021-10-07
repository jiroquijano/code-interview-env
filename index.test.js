const {foo, countUnique} = require('./index');

describe('index', () => {
    
    describe('foo', () => {
        it('should return string pass', () => {
            expect(foo()).toBe('pass');
        })
    })

    describe('countUnique', () => {
        it('should be able to count elements on an array with only one unique number', () => {
            expect(countUnique([1,1,1,1])).toBe(1);
        });
        it('should be able to count elements on an array with multiple unique numbers', () => {
            expect(countUnique([1,1,2,3])).toBe(3);
        });
        it('should be able to count elements on an array with negative, positive and zero values', () => {
            expect(countUnique([-1,0,1,2,3])).toBe(5);
        });
    })

})