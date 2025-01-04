
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    pop(){
        let poppedNode = this.tail;
        if (!this.head) return undefined;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    unshift(val){
        let newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if (!this.head) return undefined;
        let shiftedNode = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }

    get(index){
        if (index < 0 || index >= this.length) return null;
        let mid = this.length/2
        let current;
        if (index <= mid){
            current = this.head;
            for (let i=0; i<index; i++) current = current.next;
        } else {
            current = this.tail;
            for (let i=this.length-1; i>index; i--) current = current.prev;
        }
        return current;
    }

    set(index, val){
        let node = this.get(index)
        if (node){
            node.val = val;
            return true;
        } 
        return false;
    }

    insert(index, val){
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        let newNode = new Node(val);
        let after = this.get(index);
        let before = this.get(index-1);
        if (after && before){
            before.next = newNode;
            newNode.prev = before;
            newNode.next = after;
            after.prev = newNode;
            this.length++;
            return true;
        }
        return false;
    }

    remove(index){
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();
        let removedNode = this.get(index);
        let before = this.get(index-1);
        let after = this.get(index+1);
        if (before && after){
            before.next = after;
            after.prev = before;
            removedNode.prev = null;
            removedNode.next = null;
            this.length--;
            return removedNode;
        }
        return undefined;
    }

    // [0, 1, 2, 3, 4]
    reverse(){
        let node = this.head; // node = 0

        // swap the head and the tail
        this.head = this.tail; // head = 4
        this.tail = node; // tail = 0

        // create next and prev variables for storage
        let next;
        let prev = null;

        while (node){
            // detatch the body, and store it
            next = node.next; //1
            // reassign next on node
            node.next = prev; // null
            // reassign prev on node
            node.prev = next;
            // move prev forward
            prev = node; // 0
            // move node forward and reattatch body
            node = next; // 1
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

let dll = new DoublyLinkedList;
dll.unshift(3)
dll.unshift(2)
dll.unshift(1)
dll.unshift(0)
dll.push(4)
// dll.push(5)
// dll.pop()
// console.log(dll.shift())

// console.log(dll);
// console.log(getAllNodes(dll));
console.log(getAllValues(dll));
dll.reverse();
console.log(getAllValues(dll));
console.log(dll);

// Big O
// of Doubly Linked Lists
// Insertion -   O(1)

// Removal -   O(1)

// Searching -   O(N)

// Access -   O(N)

// Technically searching is O(N / 2), but that's still O(N)