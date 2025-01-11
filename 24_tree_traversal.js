// this is about any tree
// not just ordered trees like BSTs
// two main approaches: Breadth first and Depth first search

// Breadth first search
// go horizontally across every level fo the treee
// Create a queue (this can be an array) and a variable to store the values of nodes visited
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
        let visited = [];
        while (queue.length > 0){
            node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            visited.push(node.val)
        }
        return visited;
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
console.log(bst.breadthFirstSearch());