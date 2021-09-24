const {foo, bar, baz, generateFibonacciArray} = require('./index');
const axios = require('axios');

jest.mock('axios');

describe('index', () => {
    
    describe('foo', () => {
        it('should return string pass', () => {
            expect(foo()).toBe('pass');
        })
    })

    describe('bar', () => {
        it('should return object with result', () => {
            expect(bar()).toEqual({
                result: 'pass'
            })
        })
    })

    describe('baz', () => {
        it('should call axios get', async () => {
            const result = baz();
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(result).not.toBeNull();
        })
    })

    describe('generateFibonacciArray', () => {
        it('should return an array', () => {
            expect(generateFibonacciArray()).toEqual([]);
        })
        it('should return a fibonnacci sequence with 1 element', () => {
            expect(generateFibonacciArray(1)).toEqual([1]);
        })
        it('should return a fibonnacci sequence with 2 elements', () => {
            expect(generateFibonacciArray(2)).toEqual([1,1]);
        })
        it('should return a fibonnacci sequence with 3 elements', () => {
            expect(generateFibonacciArray(3)).toEqual([1,1,2]);
        })
        it('should return a fibonnacci sequence with 8 elements', () => {
            expect(generateFibonacciArray(8)).toEqual([1,1,2,3,5,8,13,21]);
        })
    })
})