class Stack {
    constructor() {
        this.top = new Array();
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if(this.length === 0){
            return null;
        }
        return this.bottom;
    }

    push(value) {
        this.top.push(value);
        this.bottom = value;
        this.length++;
    }

    pop() {
        if(this.length > 0){
            this.top.pop();
            this.length--;
            this.bottom = this.top[0];
        }
    }

    isEmpty() {
        if(this.length === 0) {
            return true;
        }
        return false;
    }

    print(){
        console.log(this.top);
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
myStack.print();
myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
console.log(myStack.peek());
console.log('------------');
console.log(myStack.isEmpty());