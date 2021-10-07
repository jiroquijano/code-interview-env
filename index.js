const foo = () => {
    return 'pass';
}

/*create a function which accepts an array and counts the number of
unique numbers. there can be negative values in the array.
input: array of numbers (negative, positive, zero)
output: number of unique elements of the array.
*/
//[-1,0,1,2,3] => 5
const countUnique = (inputArray) => {
    //sort the input array
    const sortedArray = inputArray.sort((a,b)=>a-b);
    //create two pointers, (tail[starts at index 0], current[ head at index 1])
    let tail = 0, head = 1;
    //when head is greater than or equal to array length, stop
    while(head < sortedArray.length) {
        //compare the values of tail and head pointer
        if(sortedArray[tail] === sortedArray[head]) { 
            //if values are equal, splice out the element on head's index
            sortedArray.splice(head,1)
        } else { //if values are not equal, increment tail and head by 1
            tail += 1;
            head += 1;
        }
    }
    //return length of sortedArray
    return sortedArray.length;
}

module.exports = {
    foo,
    countUnique
}