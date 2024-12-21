// console.log([ "Steele", "Colt", "Data Structures", "Algorithms" ].sort()); // [ "Algorithms", "Colt", "Data Structures", "Steele" ]

// BUT

// console.log([6, 4, 15, 10].sort()); // [10, 15, 4, 6] !!!!


// console.log([6, 4, 15, 10].sort((a, b) => a - b)); // [4, 6, 10, 15,] 

// BUBBLE SORT 
// not very efficient Ot(nlogn)
// if left is bigger than right, noSwap
// this eventually sorts smallest to largest

function bubbleSort(arr){

    for (let i = arr.length - 1; i > -1; i--){

        let noSwap = true; // this will stop the loop if the rest is already sorted. 
        // normally the time complexity is Ot(n^2), but with this optimization, if the array is nearly sorted, it is closer to Ot(n)

        for (let j = 0; j < i; j++){    
            
            if (arr[j] > arr[j + 1]){
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                noSwap = false;
            }
        }
        
        console.log(arr);
        
        if (noSwap) break;
    }

    return arr;
}
bubbleSort([1, 2, 3, 4, 5, 10, 13, 6, 54, 34, 29, 76, 45, 53])
// console.log(bubbleSort([1, 2, 3, 4, 5, 10, 13, 6, 54, 34, 29, 76, 45, 53]));