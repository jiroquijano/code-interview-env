const foo = () => {
    return 'pass';
}


    /*
    Write a function that takes a string as an argument and generates an array that sums all the repeating characters.

    Test Cases
    compress(‘’) // []
    compress(‘abcd’) // [[1, ‘a’], [1, ‘b’], [1, ‘c’], [1, ‘d’]]
    compress(‘aaaaaaaabaaaa’) // [[8,’a’], [1,’b’], [4,’a’]]
    */

    //input: string
    //output: array, with key[0]: frequency value[1]: letter


const frequencyCounter = (inputString) => {
    const counter = {};
    //handle the empty string case
    if(inputString.length === 0) return [];
    //got through all of the characters in the inputString
    for(let char of inputString) {
        //check if the current character on iteration exists in the counter
        //if it doesn't exist, then set it to 1
        if(!counter[char]) {
            counter[char] = 1;
        } else { //if it exists in the counter, increment
            counter[char] += 1;
        }
    }
    const result = [];
    for(const iteration in counter) {
        const entry = [counter[iteration], iteration]
        result.push(entry);
    }
    return result;
}

module.exports = {
    foo,
    frequencyCounter
}