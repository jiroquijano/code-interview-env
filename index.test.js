const {foo, test} = require('./index');

describe('index', () => {
    
    describe('foo', () => {
        it('should return string pass', () => {
            expect(foo()).toBe('pass');
        })
    })

    //write a function that takes a string and returns count of each character in the string.
    //input <string> : string whose characters will be counted
    //output <object> : counts of each character in the string in the following format: {[character]: [count]}
    describe('test', () => {
        it('should be able to count a string with only single characters', () => {
            expect(test('aaa')).toEqual({'a': 3});
        })
        it('should be able to count characters in the string with different characters', () => {
            expect(test('aab')).toEqual({'a': 2, 'b': 1});
        })
        it('should be able to count characters in the alphabet', () => {
            expect(test('alphabet')).toEqual({'a': 2, 'l': 1, 'p': 1, 'h': 1, 'b': 1, 'e': 1, 't': 1});
        })
        it('should be able to handle more complex string', () => {
            expect(test('alphabet ito1')).toEqual({
                'a': 2, 'l': 1, 'p': 1, 'h': 1, 'b': 1, 'e': 1, 't': 2, 'i': 1, 'o': 1, '1': 1}
            );
        })
        it('should return empty object when input string is undefined', ()=> {
            expect(test(undefined)).toEqual({});
        })
        it('should return empty object when input string is null', () => {
            expect(test(null)).toEqual({});
        })
        it('should return empty object when input string is empty', () => {
            expect(test('')).toEqual({});
        })
        
    })

})