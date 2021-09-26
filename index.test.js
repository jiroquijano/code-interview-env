const {foo, sumZero} = require('./index');

describe('index', () => {
    
    describe('foo', () => {
        it('should return string pass', () => {
            expect(foo()).toBe('pass');
        })
    })

    describe('sumZero', () => {
        it('should return a pair of numbers whose sum is zero', ()=>{
            expect(sumZero([-1,1])).toEqual([-1,1])
        })
        it('should return a pair of numbers whose sum is zero', ()=>{
            expect(sumZero([-1,0,1,2])).toEqual([-1,1])
        })
        it('should return a pair of numbers whose sum is zero', ()=>{
            expect(sumZero([-2,0,1,2,3,5])).toEqual([-2,2])
        })
        it('should return undefined if no pair sums to zero', ()=>{
            expect(sumZero([-2,0,1])).toEqual(undefined)
        })
        it('should return undefined if no pair sums to zero', () => {
            expect(sumZero([6,2,1,5])).toBe(undefined);
        })
    })

})