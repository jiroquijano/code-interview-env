const {foo} = require('./index');

describe('index', () => {
    it('should pass', () => {
        expect(foo()).toBe('pass');
    })
})