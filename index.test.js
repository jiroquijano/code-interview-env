const {foo, fizzbuzz, fizzbuzzArray, customFizzBuzz} = require('./index');

describe('index', () => {

    it('should return fizz if number is divible by 3', () => {
        expect(fizzbuzz(9)).toBe('fizz');
    });

    it('should return the number, if number is not divisible by 3', () => {
        expect(fizzbuzz(11)).toBe(11);
    });

    it('should return buzz if the number is divisible by 5', () => {
        expect(fizzbuzz(10)).toBe('buzz');
    });

    it('should return fizzbuzz if the number is divisible by 5 and 3', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });

    it('should be able to map the integer array to a fizzbuzz array', () => {
        expect(fizzbuzzArray([3,6,5,10,15])).toEqual(["fizz", "fizz", "buzz", "buzz", "fizzbuzz"]);
    })


    //custom fizzbuzz(number, {"hello": 2, "world": 3})
    it('should return helloworld when the number is divisible by the "hello-world" map', () => {
        expect(customFizzBuzz(4, {2: "hello", 3: "world"})).toBe("hello")
    })

    it('should return helloworld when the number is divisible by the "hello-world" map', () => {
        expect(customFizzBuzz(3, {2: "hello", 3: "world"})).toBe("world")
    })

    it('should return helloworld when the number is divisible by the "hello-world" map', () => {
        expect(customFizzBuzz(6, {2: "hello", 3: "world"})).toBe("helloworld")
    })

    it('should work properly with an option with more than 2 mapppings', () => {
        expect(customFizzBuzz(5,{2:"fizz", 3:"buzz", 5:"boom"})).toBe("boom")
    })

    it('should work properly with an option with more than 2 mapppings', () => {
        expect(customFizzBuzz(15,{2:"fizz", 3:"buzz", 5:"boom"})).toBe("buzzboom")
    })

    it('should return the original number if it is not divisible by anything in the map', () => {
        expect(customFizzBuzz(7,{2:"fizz", 3:"buzz", 5:"boom"})).toBe(7)
    })

})
