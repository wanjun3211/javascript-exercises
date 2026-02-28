const removeFromArray = function (arr, ...manyMoreArgs) {
    //two loop
    //outer loop  Iterate each target item
    //inner loop iterate full array, find all the possble postion and remove it

    for (let i = 0; i < manyMoreArgs.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === manyMoreArgs[i])
                delete arr[j];
        }

    }

    return arr.filter(item => item !== undefined );

}





// Do not edit below this line
module.exports = removeFromArray;
