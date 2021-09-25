const foo = () => {
    return 'pass';
}

const countCharacters = (character, inputString) => {
    let count = 0
    inputString.forEach((currentChar)=>{
        if(currentChar === character) count++;
    });
    return count;
}

//write a function that takes a string and returns count of each character in the string.
const test = (inputString) => {
    //check if input is valid
    if(typeof inputString !== 'string' || inputString.length == 0) return {};
    //create the object which will be returned by the solution method
    let resultCount = {};
    //create an array out of the input to use HOCs (forEach)
    const stringArray = inputString.split('');
    //get all of the unique characters from the array
    const uniqueCharacters = new Set(stringArray);
    //count the unique characters in the array and add it to resultCount
    uniqueCharacters.forEach((character)=>{
        if(character === ' ') return;
        resultCount[character] = countCharacters(character, stringArray);
    })
    //return the result count
    return resultCount;
}

module.exports = {
    foo,
    test
}