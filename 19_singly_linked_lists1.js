// LINKED LISTS
// A data structure that contains a head, tail and length property.
// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if (this.head === null){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; // current tail
            this.tail = newNode; // new tail
        }
        this.length++;
        return this;
    }
    
    pop(){
        if (!this.head) return undefined;
        let current = this.head;
        let previous = null;
        while (current.next){
            previous = current;
            current = current.next;
        }
        if (previous){
            this.tail = previous;
            this.tail.next = null;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--
        return current;
    }

    unshift(val){
        let newNode = new Node(val);
        if (this.head){
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
        return this;    
    }

    shift(){
        if (!this.head) return undefined;      
        const oldHead = this.head;
        if (this.head.next){
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null
        }
        this.length--;
        oldHead.next = null;
        return oldHead;
    }

    get(index){
        if (index >= this.length || index < 0) return null;
        let counter = 0; 
        let current = this.head;
        while (counter < index){
            current = current.next;
            counter++
        }
        return current;
    }
    
    set(index, val){
        let target = this.get(index);
        if (target){
            target.val = val;
            return true;
        }
        return false;
    }
    
    insert(index, val){
        if (index < 0 || index > this.length) return false;
        if (index === 0){ 
            this.unshift(val);
        } else {
            let newNode = new Node(val);
            let previous = this.get(index-1)
            let current = previous.next;
            previous.next = newNode;
            newNode.next = current;
        }
        this.length++;
        return true;
    }

    remove(index){
        if (index >= this.length || index < 0) return false;
        if (index === 0) return this.shift();
        else {
            let previous = this.get(index-1);
            let current = previous.next;
            let subsequent = previous.next.next;
            previous.next = subsequent;
            this.length--;
            current.next = null;
            return current;
        }
    }

    // [0, 1, 2, 3, 4]
    reverse() {

        // set node to the head to begin the loop
        let node = this.head; // node = 0

        // swap the head and the tail
        this.head = this.tail; // head = 4
        this.tail = node; // tail = 0

        // create next and prev variables for storage
        let next;
        let prev = null;

        while (node){
            // detatch the body, and store it
            next = node.next;
            // reassign next on node
            node.next = prev;
            // move prev forward
            prev = node;
            // move node forward and reattatch body
            node = next;
        }
        return this;
    }
    
}

function getAllValues(linkedList) {
    let values = [];
    let current = linkedList.head; 
    while (current) { 
        values.push(current.val); 
        current = current.next; 
    }
    return values;
}

function getAllNodes(linkedList) {
    let nodes = [];
    let current = linkedList.head; 
    while (current) { 
        nodes.push(current); 
        current = current.next; 
    }
    return nodes;
}

const list = new SinglyLinkedList;
list.push(0); 
list.push(1)
list.push(2); 
list.push(3); 
list.push(4); 

// console.log(list.shift())
// console.log(list.pop())
// console.log(getAllValues(list));
// console.log(list.remove(4));
let reversedList = list.reverse()
console.log(reversedList);
console.log(getAllNodes(reversedList));
console.log(getAllValues(reversedList));

// O(n)
// Insertion -   O(1)

// Removal -   It depends.... O(1) or O(N)

// Searching -   O(N)

// Access (getting) -   O(N)

// arrays are faster for accessing (getting)
// linked lists are better for insertion and removal
// linked lists are better for insertion at beginning