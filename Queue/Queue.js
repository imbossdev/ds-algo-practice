class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        let currentLast = this.last;
        let newElement = new Node(value);
        if(currentLast){
           currentLast.next = newElement;
        } 
        this.last = newElement;
        this.length++;
        if(!this.first){
            this.first = this.last;
        }
    }

    dequeue() {
        let currentFirst = this.first;
        let nextFirst = currentFirst.next;
        this.first = nextFirst;
        this.length--;
    }

    print(){
        const values = [];
        let currentNode = this.first;
        while(currentNode){
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(values);
    }
}

const myQueue = new Queue();
console.log(myQueue.peek());
console.log('--------------');
myQueue.enqueue("Joy");
myQueue.print();
myQueue.enqueue("Matt");
myQueue.print();
myQueue.enqueue("Pavel");
myQueue.print();
myQueue.enqueue("Samir");
myQueue.print();
console.log('--------------');
console.log(myQueue.peek());
console.log('--------------');
myQueue.print();
myQueue.dequeue();
myQueue.print();
myQueue.dequeue();
myQueue.print();
myQueue.dequeue();
myQueue.print();
console.log('--------------');
console.log(myQueue.peek());
console.log('--------------');
myQueue.dequeue();
console.log('--------------');
console.log(myQueue.peek());
myQueue.print();