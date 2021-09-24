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

const test = (inputString) => {
    if(typeof inputString !== 'string' || inputString.length == 0) return {};
    let resultCount = {};
    const stringArray = inputString.split('');
    const uniqueCharacters = new Set(stringArray);
    uniqueCharacters.forEach((character)=>{
        resultCount[character] = countCharacters(character, stringArray);
    })
    return resultCount;
}

module.exports = {
    foo,
    test
}