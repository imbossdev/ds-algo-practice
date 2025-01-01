class Stack{
    constructor(){
        this.arr = [];
    }

    peek(){
        return this.arr[this.arr.length-1]
    }

    push(value){
        this.arr.push(value);
    }

    pop(){
        this.arr.pop();
    }

    print(){
        console.log(this.arr);
    }
}
const myStack = new Stack();
myStack.push("Google");
myStack.print();
myStack.push("Udemy");
myStack.print();
myStack.push("Discord");
myStack.print();
console.log('------------');
console.log(myStack.peek());
console.log('------------');
myStack.print();
myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
myStack.pop();
myStack.print();
console.log(myStack.peek());