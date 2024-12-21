// Describe what a searching algorithm is
// Implement linear search on arrays
// Implement binary search on sorted arrays
// Implement a naive string searching algorithm
// Implement the KMP string searching algorithm

// JavaScript has search!
// There are many different search methods on arrays in JavaScript:

// indexOf
// includes
// find
// findIndex
// But how do these functions work?
// these are all linear search methods

// Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

function linearSearch(arr, val){
    for (let i=0;i<arr.length;i++){
        if (arr[i] === val) return i;
    }
    return -1;
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
// console.log(linearSearch([100], 100)) // 0
// console.log(linearSearch([1,2,3,4,5], 6)) // -1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1
// console.log(linearSearch([100], 200)) // -1

// all this has Ot(n)

// Binary search is better, but requires the list to be sorted

// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// my solution
// function binarySearch(arr, val){

//     let start = 0;
//     let end = arr.length - 1;
        
//     if (arr.length < 1) return -1;
    
//     while (true){
        
//         const middle = Math.floor((start + end)/2);

//         if (val === arr[end]) return end;
        
//         if (val === arr[middle]) return middle;
        
//         if (val > arr[middle]){ start = middle } else { end = middle }

//         if (start = end - 1 && arr[middle] !== val) return -1;
//     }
// }

// Teacher's solution:
// function binarySearch(arr, elem){
//     let start = 0;
//     let end = arr.length -1;
//     let middle = Math.floor((start + end)/2);
//     while (arr[middle] !== elem && start <= end){
//         if (elem < arr[middle]) end = middle -1;
//         else start = middle + 1;
//         middle = Math.floor((start + end)/2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }
// array has no elements
// console.log(binarySearch([], 2)); // -1
// // array has one element
// console.log(binarySearch([2], 2)); // 0
// // array has two elements
// console.log(binarySearch([2, 5], 5)); // 1
// // value between start and end elements but not in array
// console.log(binarySearch([1,2,4,5],3)) // -1
// // value between start and end elements and in array
// console.log(binarySearch([1,2,3,4,5],5)) // 4
// // value bigger than end element
// console.log(binarySearch([1,2,3,4,5],6)) // -1
// // value smaller than end element
// console.log(binarySearch([1,2,3,4,5],0)) // -1

// console.log("Colt's tests");

// console.log(binarySearch([1,2,3,4,5],2)) // 1
// console.log(binarySearch([1,2,3,4,5],3)) // 2
// console.log(binarySearch([1,2,3,4,5],5)) // 4
// console.log(binarySearch([1,2,3,4,5],6)) // -1
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10)) // 2
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95)) // 16
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)) // -1


// stringSearch
// create an algorithm which finds how many times a substring is in a string
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

// my first solution
// function stringSearch(str, substr){
    
//     let count = 0;
    
//     for (let i = 0; i < str.length; i++){
    
//         const window = str.slice(i, i + substr.length)
    
//         if (substr === window) count++;
//     }
    
//     return count;
// }

// my second solution (because I think he wants us to use nested loops)
// function stringSearch(str, substr){
//     let count = 0;
//     let subcount = 0;
//     for (let i = 0; i < str.length; i++){

//         for (let j = 0; j < substr.length; j++){
        
//             if (substr[j] === str[i + j]) subcount++;
//         }
        
//         if (subcount === substr.length) count++;
        
//         subcount = 0;
//     }
//     return count;
// }

// my third solution, using break, as the teacher seems to want to do
function stringSearch(str, substr){

    let count = 0;

    for (let i = 0; i < str.length; i++){

        for (let j = 0; j < substr.length; j++){
        
            if (substr[j] !== str[i + j]) break;

            if (j === substr.length - 1) count++;
        }
    }
    
    return count;
}

console.log(stringSearch("helolo", "lo")); // 2
console.log(stringSearch("lelomgklswo omgkalal ajala;dlkomg oslemnomg", "omg")); // 4
console.log(stringSearch(";alksdflkajsdf;lkjasdf;flkjsdf", "sdf")); // 4