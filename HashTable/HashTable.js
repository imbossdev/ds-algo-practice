class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  set(key, value){
    let address = this._hash(key)
    if(!this.data[address]){
     this.data[address] = [];
    }
    let element = [];
    element.push(key, value);
    this.data[address].push(element);
  }

  get(key){
    const keyValue = this.data[this._hash(key)];
    for(let i=0; i < keyValue.length; i++){
        if(keyValue[i][0] === key){
            return keyValue[i][1];
        }
    }
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
const b = myHashTable.get('grapes')
console.log(b);

myHashTable.set('apples', 9);
const a = myHashTable.get('apples')
console.log(a);

myHashTable.set('apples', 544545);
const c = myHashTable.get('apples')
console.log(c);

console.log(myHashTable.data);