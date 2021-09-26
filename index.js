const foo = () => {
    return 'pass';
}

/*  write a function named same, which checks if the values of the 2 arrays are similar
    only that the second array is squared. frequency of each array elements should be the same.

    //inputs: 2 arrays.
    //output: a boolean determining if the arrays are 'same'
*/

//countFrequency() takes in an array and returns an object with number of elements
// countFrequency([1,1,1]) returns {'1': 3}
const countFrequency = (array) => {
    let result = {}
    for(const arrElement of array) {
        let elementCount = result[arrElement];
        result[arrElement] = !elementCount ? 1 : ++elementCount;
    }
    return result;
}

const same = (array1, array2) => {
    if(!Array.isArray(array1) || !Array.isArray(array2)) return 'invalid params';
    if(array1.length !== array2.length) return false;
    let result = false;
    const squaredArray1WithFreq = countFrequency(array1.map((number)=>number**2));
    const array2WithFreq = countFrequency(array2);
    for(const objElem of Object.keys(squaredArray1WithFreq)) {
        result = (array2WithFreq[objElem] === squaredArray1WithFreq[objElem]) ? true : false
    }
    return result;
}

module.exports = {
    foo,
    same
}