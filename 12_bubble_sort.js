// console.log([ "Steele", "Colt", "Data Structures", "Algorithms" ].sort()); // [ "Algorithms", "Colt", "Data Structures", "Steele" ]

// BUT

// console.log([6, 4, 15, 10].sort()); // [10, 15, 4, 6] !!!!


// console.log([6, 4, 15, 10].sort((a, b) => a - b)); // [4, 6, 10, 15,] 

// BUBBLE SORT 
// if left is bigger than right, swap

function bubbleSort(arr){

    // start at end (bc inner loop moves largest to end)
    for (let i = arr.length - 1; i > -1; i--){
        
        // start at beginning and go to i
        for (let j = 0; j < i; j++){    
            
            // if a greater than b, swap a and b
            if (arr[j] > arr[j + 1]){
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];                
            }
        }
    }
    
    return arr;
}
// not very efficient: Ot(n^2)

console.log(
    bubbleSort([10, 6, 13, 76, 54, 5, 45, 3, 34, 29, 4,  1,  53, 2])
);