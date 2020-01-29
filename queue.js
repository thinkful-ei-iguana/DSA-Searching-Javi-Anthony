class _Node {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    enqueue(data){
  
      const node = new _Node(data, null);
      
      if (this.first  === null){
        this.first = node;
        console.log('high')
      }
  
      if(this.last){
        this.last.next= node;
        console.log('low')
      }
      this.last= node;
     
    }
  
    dequeue(){
  
      if(this.first  === null) {
        return null;
      }
  
      const node = this.first;
      this.first = this.first.next;
  
      // if(node === this.last){
      //   this.last = null;
      // }
  
      return node.data;
    }
  
  }
  
  module.exports = Queue;