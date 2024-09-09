/*
WHAT IS AN ALGORITHM?
A process or set of steps to accomplish a certain task.

PROBLEM SOLVING
1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve/Simplify
5. Look Back and Refactor

UNDERSTAND THE PROBLEM
1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

EXPLORE CONCRETE EXAMPLES
User stories are: given an input, what should the output be
1. Start with Simple Examples
2. Progress to More Complex Examples
3. Explore edge cases: Examples with Empty Inputs
4. Explore Examples with Invalid Inputs

ex:
Write a function which takes in a string and returns counts of each character in the string.

charCount("aaa") //= {a:4}
charCount("hello") //= {h:1, e:1, l:2, o:1}
What about characters that aren't in there
listing every letter might be easier {b:0} etc.
what about numebers?
special characters?
upper and lower case?
what about "" empty input?

BREAK IT DOWN
Explicitly write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

ex:
function charCount(){
    1. do something
    2. return an object with characters as keys and integers as values
}

function charCount(){
    1. make object to return at end
    2. loop through string
    3. return object at end
}

function charCount(){
    1. make object to return at end
    2. lower case entire string
    3. loop through string
    4. return object at end
}

function charCount(){
    1. make object to return at end
    2. lower case entire string
    3. loop through string
    4. check that character is letter/number
    4. check if first character is key in object
        if yes, then add 1 to value
        if no, add character, and set value to 1
    4. return object at end
}

SOLVE OR SIMPLIFY
SOLVE THE PROBLEM
If you can't...

SOLVE A SIMPLER PROBLEM!
Find the core difficulty in what you're trying to do
Temporarily ignore that difficulty
Write a simplified solution
Then incorporate that difficulty back in

function charCount(str){
    // 1. make object to return at end
    const result = {}
    // 2. lower case entire string
    str = str.toLowerCase()
    // 3. loop through string
    for (let i=0; i<str.length; i++){
        // 4. check that character is letter/number
        // 4. check if first character is key in object
        // if yes, then add 1 to value
        // if no, add character, and set value to 1
        let char = result[i]
        if(/[a-z0-9]/.test(char))
        if (result[char] > 0){
        result[char]++;
    }
    else
    {
        result[char] = 1;
    }
}
// 4. return object at end
return result;
}

console.log(charCount("hello there!"))
*/

/*
LOOKING BACK AND REFACTORING IS SUPER IMPORTANT
what do you like and not like about your code
about how it looks
efficiency
ask these questions out loud

Can you check the result?
Can you derive the result differently?
Can you understand it at a glance?
Can you use the result or method for some other problem?
Can you improve the performance of your solution?
Can you think of other ways to refactor?
How have other people solved this problem?
ask them how others have solved it
*/

function charCount(str){
    // 1. make object to return at end
    const result = {}
    // 2. lower case entire string
    // 3. loop through string
    for (let char of str){
        if (/[a-zA-Z0-9]/.test(char)){
            char = char.toLowerCase()
            result[char] = ++result[char] || 1 ;
        } 
    }
    return result;
}

console.log(charCount("Hello there!"))