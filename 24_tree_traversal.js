// this is about any tree
// not just ordered trees like BSTs
// two main approaches: Breadth first and Depth first search

// Breadth first search
// traverse horizontally across every level fo the treee
// Create a queue (this can be an array) and a variable to store the values of nodes data
// Place the root node in the queue
// Loop as long as there is anything in the queue
// Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
// If there is a left property on the node dequeued - add it to the queue
// If there is a right property on the node dequeued - add it to the queue
// Return the variable that stores the values
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true){
            if (current.val === newNode.val){
                break;
            } else if (newNode.val > current.val){
                if (!current.right) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            } else {
                if (!current.left){
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            }
        }
        return this;
    }

    find(val){
        if(!this.root) return false;
        let current = this.root;
        while(true){
            if (val === current.val){
                return current;
            } else if (val > current.val){
                if (!current.right){
                    return false;
                } else {
                    current = current.right;
                }
            } else {
                if (!current.left){
                    return false;
                } else {
                    current = current.left;
                }
            }
        }
    }

    breadthFirstSearch(){
        let node = this.root;
        let queue = [node];
        let data = [];
        while (queue.length){
            node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            data.push(node.val);
        }
        return data;
    }

    // Pre order Depth First Search
    preOrderDFS(){
        const data = []; 
        const traverse = node => {
            data.push(node.val);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    
    // Post order Depth First Search
    postOrderDFS(){
        const data = []; 
        const traverse = node => {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }

    // In order Depth first search
    inOrderDFS(){
        const data = []; 
        const traverse = node => {
            node.left && traverse(node.left);
            data.push(node.val);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

let bst = new BinarySearchTree;
bst.insert(10)
// left
bst.insert(5)
bst.insert(3)
bst.insert(7)
// right
bst.insert(20)
bst.insert(25)
bst.insert(15)
// BFS expected: [10, 5, 20, 3, 7, 15, 25]
// console.log(bst.breadthFirstSearch());
// preOrderDFS expected: [10, 5, 3, 7, 20, 15, 25]
// console.log(bst.preOrderDFS());
// postOrderDFS expexted: [3, 7, 5, 15, 25, 20, 10]
// console.log(bst.postOrderDFS());
// inOrderDFS expexted: [3, 5, 7, 10, 15, 20, 25]
console.log(bst.inOrderDFS());

// which is better
// time complexity is the same
// for a really wide tree it would be bad to use BFS because have to store the whole breadth in memory first
// since most trees are wide, should use DFS
// In Order DFS returns all the values in order!
