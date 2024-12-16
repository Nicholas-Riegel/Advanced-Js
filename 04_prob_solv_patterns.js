// PROBLEM SOLVING PATTERNS
// Frequency Counter
// Multiple Pointers
// Sliding Window
// Divide and Conquer
// Dynamic Programming
// Greedy Algorithms
// Backtracking
// Many more!

// FREQUENCY PATTERN
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// Challenge:
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// my solution
// function same(arr1, arr2){

//     if (arr1.length !== arr2.length) return false;
    
//     const [obj1, obj2] = [{}, {}]
    
//     for (let i = 0; i < arr1.length; i++){
        
//         if (arr1[i] in obj1){
//             obj1[arr1[i]]++
//         } else {
//             obj1[arr1[i]] = 1
//         }

//         if (arr2[i] in obj2){
//             obj2[arr2[i]]++
//         } else {
//             obj2[arr2[i]] = 1
//         }
//     }

//     let result1 = false;
//     Object.keys(obj1).forEach(key => {
//         if (obj1[key] === obj2[key ** 2]){
//             result1 = true;
//         } else {
//             result1 = false;
//             return;
//         }
//     })
    
//     let result2 = false;
//     Object.keys(obj2).forEach(key => {
//         if (obj2[key] === obj1[Math.sqrt(key)]){
//             result2 = true;
//         } else {
//             result2 = false;
//             return;
//         }
//     })

//     if (result1 && result2){
//         return true;
//     } else {
//         return false;
//     }
// }


// Colt's "naive" solution
// function same(arr1, arr2){
//     // if the lengths are different, return false
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     // go through arr2 finding the index of the square of the arr1 element
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         // if don't find the square, return false
//         if(correctIndex === -1) {
//             return false;
//         }
//         // of you find the square, delete it from arr2
//         // this is to handle multiple same elements
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }
// this is O(n^2) becuase indexOf is itself looping

// Colt's refactored solution
// function same(arr1, arr2){
//     // if different lengths, return false Ot(1)
//     if (arr1.length !== arr2.length) return false;
    
//     // create two objects with the counts of the elements Ot(n) Os(n)
//     let obj1 = {}
//     let obj2 = {}
//     for (let val of arr1){
//         obj1[val] = (obj1[val] || 0) + 1;
//     }
//     for (let val of arr2){
//         obj2[val] = (obj2[val] || 0) + 1;
//     }
//     console.log(obj1);
//     console.log(obj2);

//     // check that keys and values of both objects are same Ot(n)
//     for (let key in obj1){
//         // if the square key of obj1 isn't in obj2, return false Ot(1)
//         if (!(key ** 2) in obj2) return false;
//         // if the value of the squared key in obj2 dn equal the value of the key in obj1, return false Ot(1)
//         if (obj2[key ** 2] !== obj1[key]) return false;
//     }
//     // otherwise return true
//     return true;
// }
// // Ot(n) Os(n)
// console.log(same([2, 5, 2], [4, 4, 25])) // true
// console.log(same([1,2,3], [4,1,9])) // true
// console.log(same([1,2,3], [1,9])) // false
// console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)

// MULTIPLE POINTERS
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// my solution 1
// function sumZero(arr1){
//     for(let i = 0; i<arr1.length; i++){
//         for(let j=i+1; j<arr1.length; j++){
//             if (arr1[j]+arr1[i]===0){
//                 return [arr1[j], arr1[i]];
//             }
//         }
//     }
// }
// my solution 2
// function sumZero(arr1){

//     let obj1 = {} // Os(n)
//     let arr2 = [] 

//     for (let x of arr1){ // Ot(n)
//         obj1[x] = (obj1[x] || 0) + 1; 
//     }

//     for (let x in obj1){ // Ot(n)
//         if (x === 0 && obj1[x] > 1){
//             arr2.push(x)
//         } else if (x !=0 && -x in obj1){
//             arr2.push(x);
//         }
//     }

//     if (arr2.length > 0){
//         let first = Math.min(...arr2) // Ot(n)
//         let second = -first;
//         return [first, second]
//     }
// }

// teacher's answer

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
// Ot(n) : Os(1)
// console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
// console.log(sumZero([-2,0,1,3])) // undefined
// console.log(sumZero([1,2,3])) // undefined

// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array, ie it ignores all duplicates There can be negative numbers in the array, but it will always be sorted.
// my answer 1
// function countUniqueValues(arr){
//     let left = 0;
//     let right = 1;
//     let counter = 0;

//     while (left < arr.length){
//         if (arr[left] !== arr[right]){
//             counter++
//         }
//         left++
//         right++
//     }
//     console.log(counter);
// }
// Ot(n) : Os(1)
// my solution 2 (with minor help from chatGPT: it just had a slightly cleaner version)
function countUniqueValues(arr){

    if (arr.length < 1){
        console.log(0);
        return;
    }
    
    counter = 1;

    for (let i=1;i<arr.length;i++){
        if (arr[i-1] !== arr[i]){
            counter++;
        }
    }
    console.log(counter);
}
// Ot(n) : Os(1)
// the teacher's solution in this case is veruckt and not better than mine
// countUniqueValues([1,1,1,1,1,2])                 // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])    // 7
// countUniqueValues([])                            // 0
// countUniqueValues([-2,-1,-1,0,1])                // 4
// countUniqueValues([1, 1, 1, 1, 2]);              // 2
// countUniqueValues([-2, -1, -1, 0, 1]);           // 4
// countUniqueValues([1, 2, 3, 4, 5]);              // 5
// countUniqueValues([1, 1, 1, 2, 2, 3, 3])         // 3

// SLIDING WINDOW
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
// my solution 1
// function maxSubarraySum(arr, num){

//     if (arr.length < num || num < 1){
//         console.log(null);
//         return;
//     }

//     let maxArr = [-Infinity];
//     let arr2 = [];

//     for (let i = 0; i < arr.length-(num-1); i++){
//         for(let j = i; j <= i + (num-1); j++){
//             arr2.push(arr[j])
//         }
//         if (arr2.reduce((acc, curr)=> acc + curr, 0) > maxArr.reduce((acc, curr)=> acc + curr, 0)){
//             maxArr = arr2.slice();
//         }
//         arr2 = [];
//     }
//     console.log(`${maxArr} has a sum of ${maxArr.reduce((acc, curr)=>acc+curr, 0)}`);
// }
// Ot(n^2)

// teacher's solution
function maxSubarraySum(arr, num){
    
    if (arr.length < num){
        console.log(null);
        return;
    }
    
    let maxVal = 0;
    let tempVal = 0;

    for (let i = 0; i < num; i++){
        maxVal += arr[i];
    }

    tempVal = maxVal;

    for (let i = num; i < arr.length; i++){
        tempVal = tempVal - arr[i - num] + arr[i];
        maxVal = Math.max(tempVal, maxVal)
    }

    console.log(maxVal);
}
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([-4,-2,-1,-3,-2],3) // -6
maxSubarraySum([],4) // null
// DIVIDE AND CONQUER
// Binary search
// he only introduces this concept, because he will get more into it later on
// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// teachers naive solution
// function search(arr, val){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === val){
//             return i;
//         }
//     }
//     return -1;
// }
// Ot(n)

// teachers better solution bc Ot(log(n))
// Binary search
// find a middle and see if the value is more or less
// This is far more efficient
// function search(array, val) {
 
//     let min = 0;
//     let max = array.length - 1;
 
//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2);
//         let currentElement = array[middle];
 
//         if (array[middle] < val) {
//             min = middle + 1;
//         }
//         else if (array[middle] > val) {
//             max = middle - 1;
//         }
//         else {
//             return middle;
//         }
//     }
 
//     return -1;
// }

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1
// DYNAMIC PROGRAMMING
// GREEDY ALGORITHMS
// BACKTRACKING