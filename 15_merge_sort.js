// first attempt to merge two sorted arrays
// function merge(arr1, arr2){
    
//     if (arr1.length < 1) return arr2;
//     if (arr2.length < 1) return arr1;

//     for (let i = 0; i < arr1.length; i++){
    
//         for (let j = 0; j < arr2.length; j++){
    
//             if (arr1[i] > arr2[arr2.length - 1]){ 
//                 arr2.push(arr1[i]);
//                 break;
//             } else if (arr1[i] > arr2[j]){
//                 continue;
//             } else {
//                 arr2.splice(j, 0, arr1[i]);
//                 break;
//             }
//         }
//     }
//     return arr2;
// }

// second attempt
// function merge(arr1, arr2){

//     let arr = arr1.concat(arr2)
//     let finalArr = [];

//     while (arr.length > 0){
//         let i = arr.indexOf(Math.min(...arr))
//         finalArr.push(arr.splice(i, 1)[0])
//     }
//     return finalArr;
// }
// still O(n^2)

// Third attempt after looking at ChatGPT's answer

function merge(arr1, arr2){
    
    const final = [];

    let [i, j] = [0, 0];

    while (i < arr1.length && j < arr2.length){

        if (arr1[i] < arr2[j]) final.push(arr1[i++]);

        else final.push(arr2[j++]);
    }

    while (i < arr1.length) final.push(arr1[i++])
    
    while (j < arr2.length) final.push(arr2[j++])

    return final;
}

// my first attempt at mergeSort
function mergeSort(arr){
    
    let final = [];

    arr.forEach(e => final.push([e]));

    while (final.length > 1) final.unshift(merge(final.pop(), final.pop()));

    return final[0];
}

// using recursion, as the teacher suggests
// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array

// teacher's solution
function mergeSort(arr){

    if (arr.length < 2) return arr;
    
    let mid = Math.floor(arr.length/2)

    let left = mergeSort(arr.slice(0, mid));

    let right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}
console.log(mergeSort([15, 3, 71, 9, 2]));
/* 
[2, 3, 9, 15, 71]

left                                            right
mergeSort([15, 3]):[3, 15]                      mergeSort([71, 9, 2]):[2, 9, 71]

left                    right                   left                    right
mergeSort([15]):[15]    mergeSort([3]):[3]      mergeSort([71]):[71]    mergeSort([9, 2]):[2, 9]

                                                                        left                right
                                                                        mergeSort([9]):[9]  mergesort([2]):[2]
*/