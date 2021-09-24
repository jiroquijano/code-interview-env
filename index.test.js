const {foo, bar, baz} = require('./index');

describe('index', () => {
    
    describe('foo', () => {
        it('should return string pass', () => {
            expect(foo()).toBe('pass');
        })
    })

})