// INSERTION SORT
// make half of the array always sorted

// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// Repeat until the array is sorted.

// first attempt. It works, but it's probably nto what the teacher wants. 
// function insertionSort(arr){
    
//     let newArr = arr.slice(0, 1)
    
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] >= newArr[newArr.length - 1]){
//             newArr.push(arr[i])
//         } else if (arr[i] <= newArr[0]){
//             newArr.unshift(arr[i])
//         } else {
//             for (let j = 0; j < newArr.length; j++){
//                 if (arr[i] >= newArr[j] && arr[i] <= newArr[j+1]){
//                     newArr.splice(j+1, 0, arr[i]);
//                     break;
//                 }
//             }
//         }
//     }

//     return newArr;
// }

// second attempt
// function insertionSort(arr){
    
//     if (arr.length < 2) return arr;

//     if (arr[0] > arr[1]) [arr[0], arr[1]] = [arr[1], arr[0]]

//     for (let i = 2; i < arr.length; i++){
        
//         if (arr[i] >= arr[i-1]) continue;
        
//         if (arr[i] <= arr[0]){
    
//             arr.unshift(arr.splice(i, 1)[0])
    
//         } else {
    
//             for (let j = 0; j < i; j++){
    
//                 if (arr[i] >= arr[j] && arr[i] <= arr[j+1]){
    
//                     arr.splice(j+1, 0, arr.splice(i, 1)[0])
    
//                     break;
//                 }
//             }
//         }
//     }

//     return arr;
// }

// Third attempt (after looking at ChatGPT's answer) 
// function insertionSort(arr){
    
//     if (arr.length < 2) return arr;

//     for (let i = 1; i < arr.length; i++){
        
//         if (arr[i] < arr[i-1]){

//             let j = i - 1;
            
//             while (j >= 0 && arr[i] < arr[j]) --j;

//             arr.splice(j+1, 0, arr.splice(i, 1)[0])
//         }
//     }
//     return arr;
// }

// Teacher's solution
// function insertionSort(arr){

//     for (let i = 0; i < arr.length; i++){

//         let val = arr[i];

//         let j;

//         for (j = i - 1; j >=0 && arr[j] > val; j--){
            
//             arr[j+1] = arr[j]
//         }

//         arr[j+1] = val;
//     }
//     return arr;
// }

// pretty ugly with the hanging "let j", but pretty neat how he avoids using splices by externalizing the value and then doubling each lower value up. 

console.log(insertionSort([3, 2, 5, 4, 5, 3, 12, 5, 1, 10]))
console.log(insertionSort([3, 2]))

