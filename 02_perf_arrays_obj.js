/*
Big O of Objects

Insertion -   O(1)
Removal -   O(1)
Searching -   O(N) checking to see if some information is in a value
Access -   O(1)

When you don't need any ordering, objects are an excellent choice!
Constant time is the fastest
Linear time is O(n)

Object.keys -   O(N)
Object.values -   O(N)
Object.entries -   O(N)
hasOwnProperty -   O(1)
 */

// let instructor = {
//     firstName: "Kelly",
//     isInstructor: true,
//     favoriteNumbers: [1,2,3,4]
// }
// console.log(Object.keys(instructor))
// console.log(Object.values(instructor))
// console.log(Object.entries(instructor))
// console.log(instructor.hasOwnProperty("firstName"))

// ARRAYS

let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];
/*
WHEN TO USE ARRAYS
When you need order
When you need fast access / insertion and removal (sort of....)

Big O of Arrays
Insertion -   It depends....
    .push() is O(1)
    .pop() is O(1)
    .unshift() is O(n)
    .shift() is O(n)
Removal -   It depends....
Searching -   O(N)
Access -   O(1)


push -   O(1)
pop -   O(1)
shift -   O(N)
unshift -   O(N)
concat -   O(N)
slice -   O(N)
splice -   O(N)
sort -   O(N * log N)
forEach/map/filter/reduce/etc. -   O(N)
*/