// TIME COMPLEXITY
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
  
// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }

// var time1 = performance.now();
// addUpTo(1000000000);
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

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
We are concerned with what is sometimes called auxiliary space complexity
This is the space required for the algorithm to run
Not the space taken up by the inputs
We are concerned with what happens inside the algorithm

Rules of thub
1. Most primitives (booleans, number, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)
3. Reference types are O(n), where n is the length (for arrays) or number of keys (for objects)  

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

Quiz
1. 
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
=> O(1)

2.
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
=> O(1)

3.
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

=>O(1)

4.
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
=> O(n)

5.
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
=>O(n)
*/

// LOGARITHMS
// log2(8) = 3
// log2 (value) = exponent
// for our purposes log === log2
/*
Rule of thumb:
The binary logarithm of a number is how many times you can divide it by 2 until (inclusive) you get a number less than or equal to 1.
log2(8) = 3

8/2 = 4
4/2 = 2
2/2 = 1 

{{
    When the number is a power of 2:
    For example, 8 is a power of 2 (2³), so dividing it by 2 repeatedly will eventually get you exactly to 1. In this case, the binary logarithm gives you the exact number of divisions, which matches the exponent in the power of 2.
    
    When the number is not a power of 2:
    For numbers that are not powers of 2 (e.g., 10), dividing by 2 repeatedly will result in a number less than 1 before you exactly reach 1. Here's an example:
    
    10 ÷ 2 = 5
    5 ÷ 2 = 2.5
    2.5 ÷ 2 = 1.25
    1.25 ÷ 2 = 0.625 (now less than 1)
    The binary logarithm of 10 is approximately 3.32, meaning it takes about 3.32 divisions to reduce 10 to 1 (log₂(10) ≈ 3.32).
}}

O(log n) is only slighly worse than O(1)
and much better than O(n)

*/