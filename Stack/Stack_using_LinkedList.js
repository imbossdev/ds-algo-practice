class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        let node = new Node(value);
        let currentTop = this.top;
        node.next = currentTop;
        this.top = node;
        if(!currentTop){
            this.bottom = node;
        }
        this.length++;
    }

    pop() {
        let oldTop = this.top;
        let newTop = oldTop.next;
        this.top = newTop;
        this.length--;
        return oldTop;
    }

    isEmpty() {
        if(this.length === 0) {
            return true;
        }
        return false;
    }

    print(){
        const values = [];
        let currentNode = this.top;
        while(currentNode){
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(values);
    }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
console.log('------------');
myStack.push("Google");
myStack.print();
myStack.push("Udemy");
myStack.print();
myStack.push("Discord");
myStack.print();
console.log(myStack.peek());
console.log('------------');
console.log(myStack.isEmpty());
console.log('------------');
myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
console.log(myStack.peek());
console.log('------------');
console.log(myStack.isEmpty());