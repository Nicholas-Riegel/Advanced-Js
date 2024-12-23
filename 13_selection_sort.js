// SELECTION SORT
// go through whole array and find the lowest value, then put it at the beginning

// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

// my solution
// function selectionSort(arr){

//     let smallest = null;
//     let indexOfSmallest = null;

//     for (let i = 0; i < arr.length; i++){

//         smallest = arr[i];
//         indexOfSmallest = i;
        
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] < smallest){
//                 smallest = arr[j];
//                 indexOfSmallest = j;
//             }
//             if (j === arr.length - 1 && smallest < arr[i]){
//                 [arr[i], arr[indexOfSmallest]] = [arr[indexOfSmallest], arr[i]]
//             }
//         }
//     }
//     return arr;
// }

// second solution after teacher hint of just using indexOfLowest
function selectionSort(arr){
    
    for (let i = 0; i < arr.length; i++){

        let indexOfLowest = i;
        
        for (let j = i + 1; j < arr.length; j++){
        
            if (arr[j] < arr[indexOfLowest]){
        
                indexOfLowest = j;
            }
        }
        
        if (i !== indexOfLowest){
        
            [arr[i], arr[indexOfLowest]] = [arr[indexOfLowest], arr[i]]
        }
    }
    return arr;
}
// Ot(n^2)

console.log(
    selectionSort([29, 4,  1,  53, 2])
);
console.log(
    selectionSort([1, 29, 4,  1,  53, 2])
);