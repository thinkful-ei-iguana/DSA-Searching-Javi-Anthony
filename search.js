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

function bfs(tree,values=[]){
    const queue = new Queue();

    // add to queue line from tree
    queue.enqueue(tree)

    while(queue.first){
        //remove from queue while there is a first
        const node = queue.dequeue();
         
        values.push(node.value)

        //add left child to the queue
        if(node.left){
            queue.enqueue(node.left)
        }
        //add right child to the queue
        if(node.right){
            queue.enqueue(node.right)
        }

    }

    return values
}

const officers = new BST()

officers.insert(100, 'Captain Picard');
officers.insert(90, 'Commander Riker');
officers.insert(110, 'Commander Data');
officers.insert(80, 'Lt. Cmdr Worf');
officers.insert(95, 'Lt. Cmdr LaForge');
officers.insert(120, 'Lt. Cmdr Crusher');
officers.insert(70, 'Lieutenant security-officer');
officers.insert(115, 'Lieutenant Selar');

console.log(bfs(officers))

function main(){
const officers = new BST()


// officers.insert(5)
// officers.insert(7)
// officers.insert(6)
// officers.insert(9)
// officers.insert(11)
// officers.insert(10)
// officers.insert(8)



// officers.insert(35)
// officers.insert(79)
// officers.insert(89)
// officers.insert(90)
// officers.insert(91)
// officers.insert(14)
// officers.insert(15)
// officers.insert(19)
// officers.insert(25)
// officers.insert(27)
 
return officers.postOrder()
}



//in-order 14 15 19 25 27 35 79 89 90 91 
//pre-order 35 25 15 14 19 27 89 79 91 90. 
//post-order 

const sharePrices = [128, 97, 121, 123, 98, 97, 105];

const calcBuyDay = function (sharePrices) {

  let highestGain = 0;
  let buyDay = null;

  for (let d = 1; d < sharePrices.length; d++) {

    const gain = sharePrices[d] - sharePrices[d-1];

    if (gain > highestGain) {
      highestGain = gain;
      buyDay = d-1;
    }
  }

  return buyDay;
};

console.log(calcBuyDay(sharePrices));