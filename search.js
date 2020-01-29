const BST = require('./BinarySearchTree')
const Queue = require('./Queue')

//try to find 8
//Given a sorted list 3, 5, 6, 8, |11|, 12, 14, 15, 17, 18
// 11,5,6,8


//try to find 16
//Given a sorted list 3, 5, 6, 8, |11|, 12, 14, 15, 17, 18
//11,15,17, -1**
//11,17,18, -1

let arr = [14, 15, 19, 25, 27, 35 ,79, 89 ,90, 91]

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

function main(){
const tree = new BST()

tree.insert(5)
tree.insert(7)
tree.insert(6)
tree.insert(9)
tree.insert(11)
tree.insert(10)
tree.insert(8)



// tree.insert(35)
// tree.insert(79)
// tree.insert(89)
// tree.insert(90)
// tree.insert(91)
// tree.insert(14)
// tree.insert(15)
// tree.insert(19)
// tree.insert(25)
// tree.insert(27)
 
return tree.postOrder()
}

main()

//in-order 14 15 19 25 27 35 79 89 90 91 
//pre-order 35 25 15 14 19 27 89 79 91 90. 
//post-order