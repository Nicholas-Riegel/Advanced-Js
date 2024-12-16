// RECURSION
// A process that calls itself

// Invoke the same function with a different input until you reach your base case!

// Iterative verion
// function countDown(num){
//     for(let i=num; i>0; i--){
//         console.log(i);
//     }
//     console.log("All done!");
// }

// // Recursive version
// function countDown(num){
//     // base case
//     if (num <= 0){
//         console.log("All done");
//         return;
//     }

//     console.log(num);

//     // change input
//     num--;
//     countDown(num)
// }

// countDown(6)

// Second example
// function sumRange(num){
//     if(num === 1) return 1; 
//     return num + sumRange(num-1);
//  }

// write factorial recursively
// function factorial(num){
//     if (num === 1) return 1;
//     return num * factorial(num-1);
// }

// console.log(factorial(3))

// HELPER METHOD RECURSION
// Pattern:
// function outer(input){
    
//     var outerScopedVariable = []

//     function helper(helperInput){
//         // modify the outerScopedVariable
//         helper(helperInput--)
//     }
    
//     helper(input)

//     return outerScopedVariable;
// }

// ANOTHER EXAMPLE
// Let's try to collect all of the odd values in an array!
// helper function version
// function collectOddValues(arr){
    
//     let result = []

//     function helper(helperInput){
//         // base
//         if(helperInput.length === 0) {
//             return;
//         }
//         // action
//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }
//         // change
//         helper(helperInput.slice(1))
//     }
    
//     helper(arr)

//     return result;

// }

// Pure version
function collectOddValues(arr){

    let newArr = [];
    
    // base
    if(arr.length === 0) {
        return newArr;
    }
    
    // action
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    
    // change
    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
}

collectOddValues([1, 2, 3, 4, 5])
// following the steps, we push 1 into newArr
[1]
// then we make newArr =
/*
[1].concat(collectOddValues([2, 3, 4, 5]))
    [].concat(collectOddValues([3, 4, 5]))
        [3].concat(collectOddValues([4, 5]))
            [].concat(collectOddValues([5]))
                [5].concat(collectOddValues([]))
                    [];
*/ 

// For arrays, use methods like 
// slice, 
// the spread operator,
// concat, 
// that make copies of arrays so you do not mutate them
// 
// Remember that strings are immutable so you will need to use methods like 
// slice, (first index (incl), last index (excl))
// substr, (from first index a given number of elements)
// substring, (like slice, but dn allow negative indices)
// to make copies of strings
// 
// To make copies of objects use 
// Object.assign, 
// the spread operator