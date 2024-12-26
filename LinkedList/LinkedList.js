// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
        let next = {
            value: value,
            next: null
        }
        this.tail.next = next;
        this.tail = next;
        this.length++;
    }

    prepend(value) {
       let head = {
        value: value,
        next: this.head
       }
       this.head = head;
       this.length++;
    }

    print(){
        let currentNode = this.head;
        const arr = [];

        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    insert(index, value){
        let count = 0;
        let currentNode = this.head;

        if(index >= this.length){
            return this.append(value);
        }

        while(currentNode !== null) {
            if(count === index - 1 ){
                const newNode = {
                    value: value,
                    next: currentNode.next
                }
                currentNode.next = newNode;
                break;
            }
            count++;
            currentNode = currentNode.next;
        }
        this.length++;
    }

    remove(index){
        let currentNode = this.head;
        let count = 0;

        if(count === 0){
            this.head = this.head.next;
            this.length--;
            return;
        }

        if(index > this.length){
            return undefined;
        }

        while(currentNode !== null){
            if( count === index - 1 ){
                currentNode.next = currentNode.next.next;
                this.length--;
                break;
            }
            count++;
            currentNode = currentNode.next;
        }
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.append(23);
  myLinkedList.prepend(1);
  myLinkedList.insert(3, 99);
  myLinkedList.insert(5, 45);
  myLinkedList.insert(8, 11);
  console.log(myLinkedList.print());
  myLinkedList.remove(6);
  console.log(myLinkedList.print());
  myLinkedList.remove(2);
  console.log(myLinkedList.print());

// [1, 10, 5,     16, 23]
// [1, 10, 5, 99, 16, 23]