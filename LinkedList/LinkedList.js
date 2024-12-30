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
        console.log(arr);
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        }

        let leaderNode = this.traverseToIndex(index-1);
        let currentNextNode = leaderNode.next;
        newNode.next = currentNextNode;
        leaderNode.next = newNode;
        this.length++;
    }

    remove(index){
        if(index === 0){
            this.head = this.head.next;
            this.length--;
            return;
        }

        if(index > this.length){
            return undefined;
        }

        let leaderNode = this.traverseToIndex(index-1)
        let toBeRemovedNode = leaderNode.next;
        leaderNode.next = toBeRemovedNode.next;
        this.length--;
        toBeRemovedNode = null;
    }

    //one of the ways to reverse. This is very simple approach O(n)
    //Collect all the elements into an array
    //Iterate the array from back to front and push into new linked list
    reverse(){
        let newLinkedList = new LinkedList(this.tail.value);

        const tempArray = [] 
        let currentNode = this.head;

        while(currentNode.next){
          tempArray.push(currentNode.value);
          currentNode = currentNode.next;      
        }

        for(let i = tempArray.length-1; i >= 0; i--){
            newLinkedList.append(tempArray[i]);
        }

        //below is required to point this object's head to new LinkedList Object's head
        this.head = newLinkedList.head; 
    }

    //another way to reverse
    //this is my thinking
    reverse1(){
        let currentNode = this.head.next;
        let newLinkedList = new LinkedList(this.head.value);

        while(currentNode.next){ //checking until we find next=null which is tail.
          newLinkedList.prepend(currentNode.value);//prepend each element to new LinkedList to get reverse order
          currentNode = currentNode.next;//incrementing to next element
        }
        newLinkedList.prepend(currentNode.value);//since while wont consider tail as its next is null, manually prepend
        this.head = newLinkedList.head;//assign new LinkedList's head back to this so that this points to correct head
    }

    //another way but not my thinking.
    //bit tricky to understand unless you spend sometime on it.
    //All they are doing is taking first 3 elements, setting 1st element as 2nd's next. 
    //And swapping 2nd and 3rd elements places to 1st and 2nd.
    reverse2(){
        if(this.length === 1){
            return
        }

        let firstElement = this.head;
        let secondElement = this.head.next;
        firstElement.next = null; //removing next since it is going to become tail

        while(secondElement){
            let thirdElement = secondElement.next;
            secondElement.next=firstElement;
            firstElement = secondElement;
            secondElement = thirdElement;
        }
        this.head = firstElement;
    }

    traverseToIndex(index){
        let currentNode = this.head;
        let counter = 0;

        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.print();

  myLinkedList.append(16);
  myLinkedList.print();

  myLinkedList.append(23);
  myLinkedList.print();

  myLinkedList.prepend(1);
  myLinkedList.print();

  myLinkedList.insert(3, 99);
  myLinkedList.print();

  myLinkedList.insert(5, 45);
  myLinkedList.print();

  myLinkedList.insert(8, 11);
  myLinkedList.print();

  myLinkedList.remove(6);
  myLinkedList.print();

  myLinkedList.remove(2);
  myLinkedList.print();

  myLinkedList.reverse2();
  myLinkedList.print();