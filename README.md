What is good code3 pillars of code? Readable, Scalable(Speed) and Memory(Space)

Big O Rules:
Rule 1: Worst case
Rule 2: Remove constants
Rule 3: Different term for inputs(or parameter) //O(a+b) - one after other steps addition or O(a*b) nested multiplication
Rule 4: Drop non dominants //O(n + n^2) becomes O(n^2)

O(n) - Linear - 1 or many loop(s) of the input, but not nested
O(1) - Constant - Single operation, no loops
O(n^2) - Quadratic - 2 nested loop of the input. if 3 nested loops then O(n^3) and so on
O(n!) - Oh no - Loop for every element in the input
O(logn) - Simple means least number of steps needed to traverse a tree to get the result. Mostly used in tree data structures.

Most solution have tradeoff between Speed and Memory. For speed we would need to sacrifice memory and viceversa.

2 ways to remember things when a program executes Heap and Stack.
Heap is usually where we store variables.
Stack is usually where we store function calls.

What causes Space complexity:
Variables, DataStructures, function calls and allocations

What skills interviewer is looking for:
Analytic Skills - How can you think through problems and analyze things?
Coding Skills - Do you code well, by writing clean, simple, organized, readable code?
Technical knowledge - Do you know the fundamentals of the job you're applying for?
Communication skills: Does your personality match the companies’ culture?

Step By Step through a problem:
1. When the interviewer says the question, write down the key points at the top (i.e. sorted array). Make sure you have all the details. Show how organized you are.
2. Make sure you double check: What are the inputs? What are the outputs?
3. What is the most important value of the problem? Do you have time, and space and memory, etc.. What is the main goal?
4. Don't be annoying and ask too many questions.
5. Start with the naive/brute force approach. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).
6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
7. Walk through your approach, comment things and see where you may be able to break things. Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.
8. Before you start coding, walk through your code and write down the steps you are going to follow.
9. Modularize your code from the very beginning. Break up your code into beautiful small pieces
and add just comments if you need to.
10. Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, the better the whiteboard will go. So never start a whiteboard interview not being sure of how things are going to work out. That is a recipe for disaster. Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time. So think: What can I show in order to show that I can do this and I am better than other coders. Break things up in Functions (if you can’t remember a method, just make up a function and you will at least have it there. Write something, and start with the easy part.
11. Think about error checks and how you can break this code. Never make assumptions about the input. Assume people are trying to break your code and that Darth Vader is using your function. How will you safeguard it? Always check for false inputs that you don’t want. Here is a trick: Comment in the code, the checks that you want to do… write the function, then tell the interviewer that you would write tests now to make your function fail (but you won't need to actually write the tests).
12. Don’t use bad/confusing names like i and j. Write code that reads well. 
13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc… Ask the interviewer if we can make assumption about the code. Can you make the answer return an error Poke holes into your solution. Are you repeating yourself?
14. Finally talk to the interviewer where you would improve the code. Does it work? Are there different approaches? Is it readable? What would you google to improve? How can performance be mproved Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem
15. If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later.
 
Good code checklist:
- [✅]It works
- [✅]Good use of data structures
- [✅]Code Re-use/ Do Not Repeat Yourself
- [✅]Modular - makes code more readable, maintainable and testable
- [✅]Less than O(N^2). We want to avoid nested loops if we can since they are expensive. Two separate loops are better than 2 nested loops
- [✅]Low Space Complexity --> Recursion can cause stack overflow, copying of large arrays may exceed memory of machine Heurestics to ace the question:
- [✅]Hash Maps are usually the answer to improve Time Complexity
- [✅]If it's a sorted array, use Binary tree to achieve O(log N). Divide and Conquer - Divide a data set into smaller chunks and then repeating a process with a subset of data. Binary search is a great example of this
- [✅]Try Sorting your input
- [✅]Hash tables and precomputed information (i.e. sorted) are some of the best ways to optimize your code
- [✅]Look at the Time vs Space tradeoff. Sometimes storing extra state in memory can help the time. (Runtime)
- [✅]If the interviewer is giving you advice/tips/hints. Follow them
- [✅]Space time tradeoffs: Hastables usually solve this a lot of the times. You use more space, but you can get a time optimization to the process. In programming, you often times can use up a little bit more space to get faster time And always remember: Communicate your thought process as much as possible. Don’t worry about finishing it fast. Every part of the interview matters

https://visualgo.net/en is a good place for seeing the datastructures workings visually. 

Arrays: are considered objects.
 - It can be fixed(fixed size when init)
 - Arrays are ordered
 - dynamic(automatically grow when reaches a threshold, ArrayList)
 - Array's are index based, associate each item with an index sequancially.
 - only requires O(1) for push (could require O(n) in case of dynamic array as it might increase the array size on push/append operation) and pop operations.
 - Also requires O(1) for get as it is index based. But requires O(n) if you are searching
 - Slow O(n) in case of insert and delete
 - Arrays are generally placed next to each other.
 - push and pop operations inserts and deletes last element in the array.

HashTables:
- It stores the data in key value pairs
- most of the language has this DataStructure, in JS it is called Object({age:10}), in Java it is Map(which internally uses hashtables), in Python it is Dictonary
- it generates a hash for the key which points to a memory location(or sequence of memory locations also called bucket) and stores both key value pair at that location.
- Hash value is some sort of gibberish alphanumerical value generated using some logic. There are multiple algorithams to generate hash like MD5, SHA-1, SHA-256 etc.
- When accessing the data, we pass key.The key is again converted into hash to find the memory location and get the data.
- Two keys can have same hash value which is called Collision, in which case it stores all key value pairs in same memory location.
- On collision, it uses some sort of DataStructure(like LinkedList) to store multiple pairs.
- Ideally it only requires O(1) for insert, delete, lookup and search except in case of collision in which case lookup could be O(n)
- Key and Value can be any type of data structure.
- In JS when using Object key can be only string(or internally it converts to string). Map can be used to store any type of DataStructure as key.
- Hash Tables are Unordered.
- Slow key iteration(getting all keys).
- Using hashtables we optimize algorithams by avoiding nested loops. from O(n^2) to O(n). Hashmap tradeoff is fast access but more memory.

LiskedLists:
- Linked List is collection of items(nodes). Each item has 2 parts, first data itself and second a pointer/reference to next item.
- There are 2 type of Linked List i.e., LinkedList(Singly Linked List) and DoublyLinkedList. 
- In DoublyLinkedList each node has pointer to previous node, data and pointer to next node
- LinkedList
    - Is a simple implementation
    - It requires less memory
    - It cannot traverse backwards as DoublyLinkedList
    - It should be used
        - when memory is a contraint
        - for faster insertion and deletion
- DoublyLinkedList
    - It can be traversed from both front and back
    - Requires more memory
    - It should be used
        - when memory is not a contraint
        - when searching for an element like searching backwards
- LinkedList are ordered.
- LinkedList can be used for Fast insertion and deletion.
- LinkedList is also flexible in terms of size. No need to define a size.
- In LinkedList cannot do random lookups like Arrays or other DataStructures. We need to traverse all the elements until we find the desired item.
- LinkedList also requires more memory when compared to other DataStructures.
- Please refer to ArrayList reverse approach. It is bit complex and time taking to understand

Stacks & Queues:
- They are linear data structures i.e., it allows traversal sequentially.
- There is no random access to the elements.
- Stacks can be implemented using Array/LinkedList, it depends what one wants
    - Since only last element is added or removed both are good
    - In Arrays elements are stored next to eachother where as in LinkedList elements are scattered
    - LinkedList consumes more memory as it has to hold reference to next element
    - Arrays size are either fixed or have to increase size and move all the elements to the new one where as in LinkedList size is flexible.
- Queues should be implemented using LinkedList
    - Removing first element in an array requires all the other elements index to be shifted. Would be O(n)
    - Linked would consume only O(1)
Stacks:
- Elements stacked on top of each other.
- Stacks are LIFO(Last In First Out). When plates are stacked on top of eachother, only first plate can be removed first.
- It is manily used internally bu most of the programming languages, like stacking funcation calls, last function is called first or browser history or undo/redo operations.
- Stack have operations like push(insert to the top), pop(remove top element) and peek(see the top element). All this operations take O(1) time.
- Stack also has lookup operation and would take O(n) time. This is rarely used.
Queues:
- Queues are like any queue outside any restuarant or office. First person in the queue is served first.
- Queues are FIFO(First In First Out). First element into the queue is the first element out of the queue.
- Any waitlist app or uber app for ride or a printer are good examples of queue. First user in the queue is served first.
- Queue has operations like enqueue(push an element into the queue), dequeue(pop element from the queue), peek(same as seek but looks for first element in queue unlike last element in stack) which take O(1) time.
- Queue also has lookup operation and would take O(n) time. This is rarely used.
- Go through [QueueUsingTwoStacks](Queue/QueueUsingTwoStacks.java) which is improtant interview question.

Trees:
- Trees are another type of data structure which we use extensively.
- Each tree starts with a root node and all other elements decends from root node.
- Each child node decends from parent node.
- Tree can have sub-trees as well.
- Best examples of trees are dom structure like how html contains a head and body. And each of them have their children.
- Real world examples can be family tree.
- In software world example can be Abstract Syntax Tree or chess game or comments in any website.
- LinkedList is technically a type of tree, but it is linear and in trees a node can only to a child.
- In trees there is always only 1 entry point which is the root.
- In trees nodes dont have to reference to its parent
- Like in real life there are many kinds of trees only with minor differences.

         O (Root Node, ParentNode, Level 0)
       /   \
      O     O (ParentNodes, Level 1)
     / \   / \
    O   O O   O (LeafNodes, Level 2)

BinaryTree:
- Each node can only have 0, 1 or 2 nodes and each child can only have 1 parent.
- Each node represents a certain state.
- A PerfectBinaryTree has everything filled in i.e, all the nodes has 2 children until it reaches leaf nodes.
- A PerfectBinaryTree is really efficient because in each level the  number of nodes double
- In PerfectBinaryTree (sum of all the leaf nodes) = (all the nodes in above levels + 1) i.e., half of nodes is in  bottom level.
- Because of this type of structure its complexity is O(log N).
- A FullBinaryTree has all of the nodes with either 0 or 2 childres but not necessarily every node has child like PerfectBinaryTree
- Number of nodes in each level can be calculated using 2^n where n is the level. For example at level 2 we have 2^2 = 4 nodes
- Number of nodes in a tree can be calculated as (2^h - 1) where h is the height(total levels) of the tree. Example: 2^3-1 = 7 when tree has 3 levels.

Perfect Binary Tree (Full and all leaves at same depth)
         O
       /   \
      O     O
     / \   / \
    O   O O   O

BinarySearchTree:
- BinarySearchTree is really good at searching.
- It are great for comparing. It preserves relationship. 
- Like folders in a computer should have relationships like parent folder has sub-folder which has child folder.
- It has some rules:
    - All child nodes in the tree to the right of root node must be greater than the root node, i.e., left nodes always decreases
    - A node can only have upto 2 children
- All of its operations insert, delete and lookup are generally O(log N). No O(1) operations.
- BinarySearchTree can quickly become unbalanced when we keep adding elements to onside of the tree. 
- For example in BinarySearchTree since right node is greater than left node, if we keep on adding greater values, it keeps on adding to right node. This would become unbalanced tree and seem more lika a LinkedList rather than a BinarySearchTree. It also decreases the performance of BinarySearchTree O(n)
- BinarySearchTree is ordered. Also its size is flexible unlike arrays where we need to define the size.
- When compared to Array, lookup, inserts and deletes will be faster.
- When compared to hashtables, hashtables are not ordered. We also dont get tree structure(parent-child relationship) in hashtable.
- AVL Tree and RedBlack Tree are 2 binary search trees which balances itself

Unbalanced BinarySearchTree
       8
     /   \
    3     11
   / \   / \
  1   6 10  12
             \
              13
               \
                14
                 \
                  15