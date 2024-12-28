// QUICK SORT
// pick a value in the array
// move all the values lower than that number to the left of it
// and all the values higher to the right of it. 

// arranger takes first value and puts all lower before and all higher after
function arranger(arr, start=0){

    let pivot = arr[start]
    
    let swapIndex = start;
    
    for (let i = start + 1; i < arr.length; i++){
    
        if (arr[i] < pivot) {
    
            swapIndex++;
    
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
        }
    }
    
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]
    // console.log(arr);
    return swapIndex;
}


function quickSort(arr, left=0, right=arr.length-1){
    
    if (left < right){
        
        let pivotIndex = arranger(arr, left)
        
        //left
        quickSort(arr, left, pivotIndex-1)
        
        //right
        quickSort(arr, pivotIndex+1, right)
    }
    return arr;
}

console.log(quickSort([100, 3, 4, 7, 34, 13, 1, 0]));