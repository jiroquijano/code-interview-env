const foo = () => {
    return 'pass';
}

const customFizzBuzz = (number, fizzbuzzMap) => {
    const keysArray = Object.keys(fizzbuzzMap);
   
    const result = keysArray.reduce((acc, key)=>{
        if (number % key == 0) {
            return acc = acc + fizzbuzzMap[key]
        } else {
            return acc
        }
    },'')

    return result || number;
}

const fizzbuzz = (number) => {
    if (number % 15 === 0 ) {
        return "fizzbuzz"
    } else if (number % 3 === 0 ) {
        return "fizz"
    }
    else if (number % 5 === 0) {
        return "buzz"
    } else {
        return number
    }
}

const fizzbuzzArray = (inputArray) => {
    return inputArray.map(fizzbuzz)
}

module.exports = {
    foo,
    fizzbuzz,
    fizzbuzzArray,
    customFizzBuzz
}