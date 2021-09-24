const axios = require('axios');

const foo = () => {
    return 'pass';
}

const bar = () => {
    return {
        result: 'pass'
    }
}

const baz = async () => {
    const users = await axios.get('https://reqres.in/api/users');
    return users;
}

const generateFibonacciArray = (numElements) => {
    let fibonacciArray = [];
    for(i = 0; i < numElements; i++) {
        const newElement = fibonacciArray.length <= 1 ? 1 : fibonacciArray[i-2] + fibonacciArray[i-1];
        fibonacciArray.push(newElement);
    }
    return fibonacciArray;
}

module.exports = {
    foo,
    bar,
    baz,
    generateFibonacciArray
}