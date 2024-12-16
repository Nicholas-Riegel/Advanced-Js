// ANAGRAM CHALLENGE

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// My solution:
function validAnagram(str1, str2){

    // if the lengths of the strings differ, return false Ot(n)
    if (str1.length !== str2.length) return false;
    
    // construct two objects
    const [obj1, obj2] = [{}, {}];
    
    // populate them with the number of times each letter occurs Ot(n) Os(n)
    for (let val of str1) obj1[val] = (obj1[val] || 0) + 1;
    
    for (let val of str2) obj2[val] = (obj2[val] || 0) + 1;
    
    for (let key in obj1) if (!(obj1[key] === obj2[key])) return false; // Ot(n)
    
    return true;
}
// Ot(n) Os(n)

// Teacher's solution:
function validAnagram(first, second) {
    
    if (first.length !== second.length) {
        return false;
    }
    
    const lookup = {};
    
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    
    console.log(lookup)
    
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    
    return true;
}
// Ot(n) Os(1)
// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'tza')) // false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram("rat","car")) // false
// console.log(validAnagram('awesome', 'awesom')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true