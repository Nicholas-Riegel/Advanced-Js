// In order to implement radix sort, it's helpful to build a few helper functions first:

// getDigit(num, place) - returns the digit in num at the given place value

// getDigit(12345, 0); // 5
// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3
// getDigit(12345, 3); // 2
// getDigit(12345, 4); // 1
// getDigit(12345, 5); // 0

// getDigit with strings
// function getDigit(num, ir){
//     let numString = "" + num;
//     let numStringArr = numString.split('');
//     if (numStringArr[0] === '-') numStringArr.shift();
//     let revNumStrArr = numStringArr.reverse();
//     return revNumStrArr[ir];
// }

// getDigit using math
function getDigit(num, ir){
    return Math.floor(Math.abs(num)/Math.pow(10, ir)) % 10;
}

// console.log(getDigit(-3245, 3));

// create a function that counts the number of digits in a number
// string version
// function digitCount(num){
//     let numArr = num.toString().split('');
//     if (numArr[0] === '-') numArr.shift();
//     return numArr.length;
// }

// math version
function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(-100));

// mostDigits: Given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(arr){

    if (arr.length === 0) return undefined;

    let largest = digitCount(arr[0])

    for (let i = 1; i < arr.length; i++){
        // if (digitCount(arr[i]) > largest) largest = digitCount(arr[i])
        largest = Math.max(largest, digitCount(arr[i]))
    }

    return largest;
}

// console.log(mostDigits([22, 333, 4444]));

// RADIX SORT PSEUDOCODE
// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// For each iteration of the loop:
// Create buckets for each digit (0 to 9)
// place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end!
// my version
function radixSort(arr){
    
    function getDigit(num, ir){
        return Math.floor(Math.abs(num)/Math.pow(10, ir)) % 10;
    }
    
    function mostDigits(arr){
        function digitCount(num){
            if (num === 0) return 1;
            return Math.floor(Math.log10(Math.abs(num))) + 1;
        }
        if (arr.length === 0) return undefined;
        let largest = digitCount(arr[0])
        for (let i = 1; i < arr.length; i++){
            if (digitCount(arr[i]) > largest) largest = digitCount(arr[i])
        }
        return largest;
    }   

    let cycles = mostDigits(arr)

    for (let i = 0; i < cycles; i++){
        const buckets = Array.from({length:10}, ()=>[])
        for (let j = 0; j < arr.length; j++){
            let indexOfBucket = getDigit(arr[j], i);
            buckets[indexOfBucket].push(arr[j])
        }
        arr = [].concat(...buckets);
    }
    return arr;
}
console.log(radixSort([23, 456, 54, 8765, 3, 23, 11, 1]));




// teacher's version
// function radixSort(arr){

//     let maxDigitCout = mostDigits(arr)

//     for (let i = 0; i < maxDigitCout; i++){
    
//         let digitBuckets = Array.from({length: 10}, () => []);

//         for (let j = 0; j < arr.length; j++){

//             digitBuckets[getDigit(arr[j], i)].push(arr[j])
//         }

//         arr = [].concat(...digitBuckets)
//     }
//     return arr;
// }
// time complexity O(nk)
// n: length of array
// k: average number of digits
// space complexity O(n+k)