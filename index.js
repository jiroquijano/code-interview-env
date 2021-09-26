const foo = () => {
    return 'pass';
}

/*
    write a function which finds a pair of integers whose sum is zero
    input: an array of numbers
    output: an array containing the pair of numbers whose sum is zero
*/

const sumZero = (inputArray) => {
    //sort the inputArray
    const sortedArray = inputArray.sort((a,b)=>a-b);
    //create two pointers in the array (beginning and end)
    let beginIndex = 0;
    let endIndex = sortedArray.length - 1;
    //add the value of the two pointers.
    //  if sum is zero, return the value of the pointers.
    //  if sum is positive, move the end pointer to the left, else move beginning pointer to the right
    while (beginIndex < endIndex) {
        const leftValue = sortedArray[beginIndex];
        const rightValue = sortedArray[endIndex];
        const sum = leftValue + rightValue;
        if(sum === 0) {
            return [leftValue, rightValue];
        } else if(sum > 0) {
            --endIndex;
        } else {
            ++beginIndex;
        }
    }
}

module.exports = {
    foo,
    sumZero
}