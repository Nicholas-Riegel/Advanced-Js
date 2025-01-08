// A tree is a datastructure with parent and child nodes only
// And the direction is always down
// no sibling connections (that's a graph)
// and has to have one root only
// siblings are nodes that have the same parent
// Leaf - a node with no children
// Edge - the arrow from one node to another

// the Dom is an example of a tree structure

// Binary trees: each node can have at most two children

// Binary search trees: every number that is less than the parent node is to the left
// every number that is greater than the parent node is to the right

// doing it manually
// let bst = new BinarySearchTree();
// bst.root = new Node(15);
// bst.root.left = new Node(10)
// bst.root.right = new Node(20)
// bst.root.left.right = new Node(11)
// console.log(bst);

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
}

let bst = new BinarySearchTree;
bst.insert(15)
bst.insert(10)
bst.insert(10)
bst.insert(11)
bst.insert(9)
bst.insert(20)
bst.insert(25)
bst.insert(19)
// console.log(bst.find(19));

// Big O of BST
// best and average case
// Insertion - O(log n)
// Searching - O(log n)

// NOT guaranteed!