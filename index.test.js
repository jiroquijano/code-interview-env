const {foo, same} = require('./index');

describe('index', () => {
    
    describe('foo', () => {
        it('should return string pass', () => {
            expect(foo()).toBe('pass');
        })
    })

    /*  write a function named same, which checks if the values of the 2 arrays are similar
    only that the second array is squared. frequency of each array elements should be the same.

    //inputs: 2 arrays.
    //output: a boolean determining if the arrays are 'same'
*/
    describe('same', () => {
        it('should return true if arrays are the same', () => {
            expect(same([1,1,1], [1,1,1])).toBe(true);
        });
        it('should return false if the array lengths are not equal', () => {
            expect(same([1],[1,1])).toBe(false);
        });
        it('should return true if 2nd array has values which is squared of values in array 1', () => {
            expect(same([2],[4])).toBe(true);
        });
        it('should return true if 2nd array contains elements which are squared of array 1 values', () => {
            expect(same([1,2],[1,4])).toBe(true);
        })
        it('should check same-ness regardless of order', () => {
            expect(same([3,2],[4,9])).toBe(true);
        })
        it('should return false if frequency of the squared value is not same', () => {
            expect(same([1,1,3], [9,9,9])).toBe(false);
        })
        it('should return true if the squared values and frequency are the same', () => {
            expect(same([1,3,4],[9,16,1])).toBe(true);
        });
        it('should gracefully handle if 1st argument is not an array', () => {
            expect(same(undefined,[1])).toBe('invalid params');
        })
        it('should gracefully handle if 2nd argument is not an array', () => {
            expect(same([1],null)).toBe('invalid params');
        })
    })

})