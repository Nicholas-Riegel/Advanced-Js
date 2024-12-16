/*
Big O of Objects

Insertion -   O(1)
Removal -   O(1)
Searching -   O(n) checking to see if some information is in a value
Access -   O(1)

When you don't need any ordering, objects are an excellent choice!
Constant time is the fastest
Linear time is O(n)

Object.keys -   O(n)
Object.values -   O(n)
Object.entries -   O(n)
hasOwnProperty -   O(1)
 */

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
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
Searching -   O(n)
Access -   O(1)


push -   O(1)
pop -   O(1)
shift -   O(n)
unshift -   O(n)
concat -   O(n)
slice -   O(n)
splice -   O(n)
sort -   O(nlog(n))
forEach/map/filter/reduce/etc. -   O(n)
*/