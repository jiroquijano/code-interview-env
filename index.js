const foo = () => {
    return 'pass';
}

//accepts a string and returns an object with the format: {'a': <number of a's>}
const countCharacters = (string) => {
    let result = {}
    for(const character of string) {
        if(!result[character]) {
            result[character] = 1;
        } else {
            result[character] += 1;
        }
    }
    return result;
}

/*
    Given 2 strings, check if the second string is an anagram of the first.
    //inputs: 2 strings. 1st string is the word, 2nd string is the jumbled letters
    //output: boolean. true if the 2nd string is an anagram for the first string.
*/

const isValidAnagram = (string1, string2) => {
    if(string1.length !== string2.length) return false;
    //create a result variable. default to false
    let result = false;
    //compare the strings. string2 should have letters in string 1 with the same frequency
    //create an object which lists the frequency of each letters for both string 1 and string 2
    const string1CharCount = countCharacters(string1.toLowerCase());
    const string2CharCount = countCharacters(string2.toLowerCase());
    //check if the characters in string 2 is present in string 1 and have the same count
    result = Object.keys(string2CharCount).every((character)=>{
        return (string1CharCount[character] && string1CharCount[character] === string2CharCount[character]);
    })
    return result;
}

module.exports = {
    foo,
    isValidAnagram
}