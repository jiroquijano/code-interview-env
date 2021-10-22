const {foo, frequencyCounter} = require('./index');

describe('index', () => {

      /*
    Write a function that takes a string as an argument and generates an array that su
    ms all the repeating characters.

    Test Cases
    compress(‘’) // []
    compress(‘abcd’) // [[1, ‘a’], [1, ‘b’], [1, ‘c’], [1, ‘d’]]
    compress(‘aaaaaaaabaaaa’) // [[8,’a’], [1,’b’], [4,’a’]]
    */

    //input: string
    //output: array, with key[0]: frequency value[1]: letter

    describe('frequencyCounter', () => {

        it('should be able to count a monocharacter string', () => {
            expect(frequencyCounter('aaaa')).toEqual([[4,'a']]);
        });

        it('should be able to count a string with multiple unique characters', () => {
            expect(frequencyCounter('abcd')).toEqual([[1,'a'],[1,'b'],[1,'c'],[1, 'd']]);
        })

        it('should be able to count a multicharacter string with varied frequency', () => {
            expect(frequencyCounter('aaaabbc')).toEqual([[4,'a'],[2,'b'],[1,'c']]);
        })
        
        it('should return an empty array if the string is empty', () => {
            expect(frequencyCounter('')).toEqual([]);
        })
    })
})