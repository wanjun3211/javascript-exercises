const reverseString = function (str) {
    const newArray = [];
    let newStr='';
    // covert string into array, using split, delimeter is space
    //Use resverse function to reverse the array;
    const arr = str.split(' ').reverse();

    // Iterate each item in the array
    for (let i = 0; i < arr.length; i++) {
        // Covert item to array
        // Reverse each item array
        // Using join to convert array to string
        const reversedWord = arr[i].split('').reverse().join('')
        // Push a string item to a new array;
        newArray.push(reversedWord);
    }
       // Covert array to str, by join space
         newStr = newArray.join(' ');
        // Return result
        return newStr;
};

// Do not edit below this line
module.exports = reverseString;
