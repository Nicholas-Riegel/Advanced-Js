// TIME COMPLEXITY
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
  
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function addUpTo(n) {
    return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// But timing depends on machine, and is unreliable

// BIGO NOTATION
// TIME COMPLEXITY
// Count the number of operations
/*
function addUpTo(n) {
    return n * (n + 1) / 2;
}
has three.

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

+= is two operations. assignment is an operation
++ is two operations
but in a for loop, the += happens n times!
<= is an operation. But it also runs n times.

function addUpTo(n) {
    return n * (n + 1) / 2;
} has a O of 1
O(1)
its growth is constant

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
has a O(n)

Even if there were two un-nested for loops, the 0 would still be of n, 0(n)
O(n) reduces to O(n)

but if the for loops are nested, then it would be O(n^2)

O(n^2 + 5n + 8) => O(n^2)

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
=> O(1)

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
=> O(n)
*/

// SPACE COMPLEXITY
/*
We are going to be concerned with what is sometimes called auxiliary space complexity
This is the space required for the algorithm to run, not the space taken up by the inputs
We are concerned with what happens inside the algorithm
Rules of thub
1. Most primitives (booleans, number, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)
3. Reference types are general O(n), where n is the length (for arrays) or number of keys (for objects)  

for sum(arr){
    let total =0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

since we are not concerned about the input, there are only two assignments. so O(1)

function double(arr){
     let newArr = []
     for (let i = 0; i<arr.length; i++){
        newArr.push(2 * arr[i]);
     }
    return newArr
}
=> O(n)
*/