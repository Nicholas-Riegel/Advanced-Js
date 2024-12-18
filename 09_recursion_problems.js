// 1. Power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exp){
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

/*
2 * power(2, 3):8 = 16
    2 * power(2, 2):4 = 8
        2 * power(2, 1):2 = 4
            2 * power(2, 0):1 = 2
                1
*/

// console.log(power(2,0)) // 1
// console.log(power(2,2)) // 4
// console.log(power(2,4)) // 16

// 2. Factorial
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num){
    if (num === 0) return 1;
    return num * factorial(num-1);
}

/*
4 * factorial(3):6 = 24
    3 * factorial(2):2 = 6
        2 * factorial(1):1 = 2
            1 * factorial(0):1 = 1
                1
 */

// console.log(factorial(1)) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040

// 3. productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr){
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

/*
1 * productOfArray([2, 3]):6 = 6
    2 * productOfArray([3]):3 = 6
        3 * productOfArray([]):1 = 3
            1
*/

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60

// 4. recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(num){
    if (num < 1) return 0;
    return num + recursiveRange(num - 1);
}

/*
3 + recursiveRange(2):3 = 6
    2 + recursiveRange(1):1 = 3
        1 + recursiveRange(0):0 = 1
            0
*/

// console.log(recursiveRange(6))   // 21
// console.log(recursiveRange(10))  // 55 

// 5. fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num){
    if (num < 3) return 1;
    return fib(num-1) + fib(num-2);
}

/*
num = 6
fib(5):5 + fib(4):3 = 8
    fib(4):3 + fib(3):2 = 5
        fib(3):2 + fib(2):1 = 3
            fib(2):1 + fib(1):1 = 2
*/ 

console.log(fib(1))  // 1
console.log(fib(2))  // 1
console.log(fib(3))  // 2
console.log(fib(4))  // 3
console.log(fib(5))  // 5
console.log(fib(6))  // 8
console.log(fib(7))  // 13
console.log(fib(8))  // 21
console.log(fib(9))  // 34
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
