const {foo, isValidAnagram} = require('./index');

describe('index', () => {
    
    describe('foo', () => {
        it('should return string pass', () => {
            expect(foo()).toBe('pass');
        })
    })

    describe('isValidAnagram', () => {
        it('should return false if the string lengths do not match', () => {
            expect(isValidAnagram('aaa', 'aaaa')).toBe(false);
        })
        it('should return true if the second string is a valid anagram', () => {
            expect(isValidAnagram('vallid', 'dillav')).toBe(true);
        });
        it('should return false if string2 is not a valid anagram', () => {
            expect(isValidAnagram('valid','notvalid')).toBe(false);
        })
        it('should not be case sensitive', ()=> {
            expect(isValidAnagram('valid', 'dVali')).toBe(true);
        })
    })

})