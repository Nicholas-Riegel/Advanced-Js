// FREQUENCY PATTERN
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
// Challenge:
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
// my solution
// function same(arr1, arr2){

//     if (arr1.length !== arr2.length) return false;
    
//     let obj1 = {}
//     let obj2 = {}
    
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
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }
// this is O(n^2) becuase indexOf is itself looping
// console.log(same([2, 5, 2], [4, 4, 255])) // true

// Colt's refactored solution
// function same(arr1, arr2){
//     if (arr1.length !== arr2.length) return false;
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
//     for (let key in obj1){
//         if (!(key ** 2) in obj2) return false;
//         if (obj2[key ** 2] !== obj1[key]) return false;
//     }
//     return true;
// }
// console.log(same([2, 5, 2], [4, 4, 5]))

// MULTIPLE POINTERS
// SLIDING WINDOW
// DIVIDE AND CONQUER
// DYNAMIC PROGRAMMING
// GREEDY ALGORITHMS
// BACKTRACKING