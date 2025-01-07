class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        let currentNode = this.root;
        while (currentNode) {  //or we can also make it just while(true),
            // since we break it when we achieve the plave where we need to insert
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    break;  //or we can also use return to return break the loop
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = node;
                    break;  //or we can also use return to return break the loop
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value === value) {   //we can also move this condition to below as if, else if, else if 
                return currentNode;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return undefined;
    }

    /**
     * remove in binary-search-tree works as follows:
     * 1) if deletion node doesn't have right node, then assign deletion node's left to its parent
     * 2) if deletion node have right node and right node doesn't have left node, then assign deletion node's right node to its parent
     * 3) if deletion node have right node and right node have left node, then find left most node of the right node and assign it to its parent node.
     *  3.1) Find left most node    
     *  3.2) assign left most node's right element to its parent.
     *  3.3) And assign left most node with deletion nodes left and right nodes 
     */
    remove(value) {
        let currentNode = this.root;
        let parentNode = null;

        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value){
                if(!currentNode.right){ // point 1 in comments
                    if(!parentNode) {
                        this.root = currentNode.left;
                    } else {
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left;
                        } else if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.left;
                        }
                    }
                    
                } else if (!currentNode.right.left) { // point 2 in comments
                    currentNode.right.left = currentNode.left;
                    if(!parentNode){
                        this.root = currentNode.right;
                    }else {
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;    
                        } else if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.right;
                        }
                    }
                } else { // point 3 in comments
                    // point 3.1 in comments - start
                    let leftMost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while(leftMost.left) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }
                    // point 3.1 in comments - end

                    leftMostParent.left = leftMost.right; // point 3.2 in comments
                    leftMost.left = currentNode.left; // point 3.3 in comments
                    leftMost.right = currentNode.right; // point 3.3 in comments

                    if(!parentNode) {
                        this.root = leftMost;
                    } else { // point 3 in comments
                        if(currentNode.value < parentNode.value){
                            parentNode.left = leftMost;
                        } else {
                            parentNode.right = leftMost;
                        }
                    }
                }
            }
            return true;
        }
    }
}

//          09
//       /      \  
//      04       20
//    /   \    /   \
//  1      6  15   170
//       /    /       \
//      5    13       175

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
tree.remove(9);
tree.remove(15);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(4));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}