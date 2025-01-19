// 1. Define what a binary heap is
// A heap is either a min or max binary heap.
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. 
// In a MinBinaryHeap, parent nodes are always smaller than child nodes
// no order to left or right, just parent to child
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

// 2. To store a binary heap, you can use an array.
// For any index of an array n
// the left child is stored at 2n + 1 
// the right child is at 2n + 2
// For any child node at index n, its parent is at index Math.floor((n-1)/2)

// 3. Implement basic methods on heaps
class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
        // this.values = [];
    }

    insert(val){
        const arr = this.values;
        arr.push(val);
        let i = arr.length-1;
        let parent = Math.floor((i-1)/2)
        while(arr[parent] < arr[i]){
            [arr[parent], arr[i]] = [arr[i], arr[parent]]
            i = parent;
            parent = Math.floor((i-1)/2)
        }
    }
}

const mbh = new MaxBinaryHeap;
mbh.insert(55)
mbh.insert(1)
mbh.insert(45)
mbh.insert(199)
// should get [199, 55, 41, 39, 45, 12, 33,  1, 18, 27]
console.log(mbh.values);
