// OBJECTIVES
// 1. Motivate the need for something like Big O Notation
// 2. Describe what Big O Notation is
// 3. Simplify Big O Expressions
// 4. Define "time complexity" and "space complexity"
// 5. Evaluate the time complexity and space complexity of different algorithms using Big O Notation
// 6. Describe what a logarithm is


// 1. Motivate the need for something like Big O Notation
// Write a function that accepts a string input and returns a reversed copy
// my solution
// function reverse(str){
//     let rev = ""
//     for (let x of str) rev = x + rev;
//     return rev;
// }
// console.log(reverse("hello"))
// Time Complexity: O(n²)
// This might be surprising, but here’s why:
// In each iteration of the loop, the statement rev = x + rev creates a new string by concatenating x and rev.
// Strings are immutable in JavaScript, so every time this operation occurs, a new string is created, and all characters of rev are copied into the new string.

// a better solution is: 
// function reverse(str){
//     let arr = []
//     for (let x of str) arr.unshift(x);
//     return arr.join('')
// }
// console.log(reverse("hello"));

// Or
// function reverse(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverse("hello"));

// MEASURING PERFORMANCE
// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
  
// var t1 = performance.now();
// addUpTo(1000000000);//adding a zero will take up to 13 seconds!
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// function addUpTo(n) { // this is waaaay faster
//     return n * (n + 1) / 2;
// }
// console.log(addUpTo(4));
// var time1 = performance.now();
// addUpTo(10000000000);
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// But timing depends on machine, and is unreliable

// COUNTING OPERATIONS
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

BIG O

function addUpTo(n) {
    return n * (n + 1) / 2;
} has a O of 1 bc the number of operations (3) is constant, so 3 reduces to 1
O(1)
its growth is constant

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
has a O(n) because the total += 1 happens n times (plus all the other operations)

Even if there were two un-nested for loops, the O would still be of n, O(n) and O(n) is O(2n) which reduces to O(n)

function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

but if the for loops are nested, then it would be O(n^2)

CONSTANTS AND SMALLER TERMS DON'T MATTER
O(500) => O(1)
O(5n) => O(n)
O(n^2 + 5n + 8) => O(n^2)

RULES OF THUMB (they don't always hold)
Arithmetic operations are constant
Variable assignment is constant
Accessing elements in an array (by index) or object (by key) is constant
In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

EXAMPLES
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
O(n) bc operations will grow as n grows

function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
O(1) bc at most it will only be 5 operations
*/

// SPACE COMPLEXITY
/*
We are concerned with what is sometimes called auxiliary space complexity
This is the space required for the algorithm to run
Not the space taken up by the inputs
We are concerned with what happens inside the algorithm

Rules of thub
has to do with what sorts of things are assigned in the algorithm
1. Most primitives (booleans, number, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length), if they grow
3. Reference types are O(n), where n is the length (for arrays) or number of keys (for objects), if they grow  

for sum(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

since we are not concerned about the input, there are only two assignments (total and i). so it has a space complexity of O(2) i.e. O(1)

function double(arr){
     let newArr = []
     for (let i = 0; i<arr.length; i++){
        newArr.push(2 * arr[i]);
     }
    return newArr
}
=> O(n) because array have O(n) space. the size of the array grows with length of arr

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
=>O(n) bc you're assigning an array
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