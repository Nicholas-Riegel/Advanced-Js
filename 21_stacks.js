// data structure that is Lifo
// last in first out

// arrays work decently as stacks, 
// as long as you just use push and pop
// you don't want to use shift and unshift, because that requires reindexing the whole array everytime

// Singly linked list works great for stacks as well, 
// because you're just adding and removing from the beginning

// Making a stack out of a singly linked list
// could just use shift and unshift from before 
// and just rename them push and pop
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){ // = unshift
        let newNode = new Node(val)
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop(){ //= shift
        if (!this.first) return null;
        let poppedNode = this.first;
        if (this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return poppedNode.val;
    }
}

let stack = new Stack;
stack.push(1)
stack.push(2)
stack.push(3)

// console.log(stack.pop());
console.log(stack);

// BIG O of STACKS
// Insertion -   O(1)
// Removal -   O(1)
// Searching -   O(N)
// Access -   O(N)