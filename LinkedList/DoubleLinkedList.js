class Node {
    constructor(value, next, previous){
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}
class DoubleLinkedList{
    constructor(value){
        this.head = new Node(value, null, null);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let node = new Node(value, null, this.tail);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepend(value){
        let node = new Node(value, this.head, null)
        this.head.previous=node;
        this.head=node;
        this.length++;
    }

    insert(index, value){
        if(index === 0){
            return this.prepend(value);
        }
        if(index >= this.length){
            return this.append(value);
        }

        let count = 0;
        let currentNode = this.head;

        while( currentNode !== null ){
            if( count === index ){
                let node = new Node(value, currentNode, currentNode.previous);
                currentNode.previous.next = node;
                currentNode = node;
                this.length++;
                break;
            }
            count++;
            currentNode = currentNode.next;
        }
    }

    remove(index){
        
        if(index >= this.length){
            return undefined;
        }

        let count = 0;
        let currentNode = this.head;

        while( currentNode !== null ){
            if( count === index ){
                let next = currentNode.next;
                let previous = currentNode.previous;

                previous.next = next;
            
                this.length--;
                break;
            }
            count++;
            currentNode = currentNode.next;
        }
    }

    printLog(){
        let values = [];
        let currentNode = this.head;
        while(currentNode !== null){
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(values);
    }
}

const a = new DoubleLinkedList(10); //10
a.append(22); // 10, 22
a.printLog();

a.prepend(5); // 5, 10, 22
a.printLog();

a.insert(5, 34); // 5, 10, 22, 34
a.printLog();

a.insert(2, 66); // 5, 10, 66, 22, 34
a.printLog();

a.prepend(1); // 1, 5, 10, 66, 22, 34
a.printLog();

a.append(65); // 1, 5, 10, 66, 22, 34, 65
a.printLog();

a.remove(2); // 1, 5, 66, 22, 34, 65
a.printLog();

a.remove(8); // 1, 5, 66, 22, 34, 65
a.printLog();

a.remove(4); // 1, 5, 66, 22, 65
a.printLog();