const {foo, bar, baz} = require('./index');
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
})