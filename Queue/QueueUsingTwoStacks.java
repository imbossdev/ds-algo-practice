package Queue;

import java.util.Stack;

/**
 * Queue implemented using two stacks.
 *
 * This implementation uses two stacks, stack1 and stack2, to simulate a queue.
 *
 * Push Operation:
 * When the push method is called, the element is pushed onto stack1.
 * This results in elements being stored in reverse order (LIFO) relative to queue order.
 *
 * Pop Operation:
 * When the pop method is called:
 *   1. If stack1 is not empty, elements are popped from stack1 and pushed onto stack2 until stack1 is empty.
 *   2. stack2 now contains the elements in the correct queue order (FIFO).
 *   3. The top element of stack2 is popped and returned.
 *
 * Handling Elements in stack2 during Push:
 * If the push method is called and stack2 contains elements while stack1 is empty,
 * it indicates that stack2 holds elements in the correct queue order from previous pop operations.
 * In this scenario, elements are popped from stack2 and pushed onto stack1.
 * This restores the reverse order in stack1, preparing it for future pop operations.
 */
class QueueUsingTwoStacks {
    private Stack<Integer> stack1 = null;
    private Stack<Integer> stack2 = null;

    public QueueUsingTwoStacks() {
        stack1 = new Stack<Integer>();
        stack2 = new Stack<Integer>();
    }
    
    public void push(int x) {
        if(!stack2.isEmpty()){
            while(!stack2.isEmpty()){
                stack1.push(stack2.pop());
            }
            stack1.push(x);
            return;
        }
        stack1.push(x);
    }
    
    public int pop() {
        if(!stack2.isEmpty()){
            return Integer.parseInt(stack2.pop().toString());
        }
        while(!stack1.isEmpty()){
            stack2.push(stack1.pop());
        }
        return Integer.parseInt(stack2.pop().toString());
    }
    
    public int peek() {
        if(!stack2.isEmpty()){
            return Integer.parseInt(stack2.peek().toString());
        }

        while(!stack1.isEmpty()){
            stack2.push(stack1.pop());
        }
        return Integer.parseInt(stack2.peek().toString());
    }
    
    public boolean empty() {
        if(stack1.isEmpty() && stack2.isEmpty()){
            return true;
        }
        return false;
    }

    public static void print(int i){
        System.out.println(i);
    }

    public static void main(String[] args) {
        var myQueue = new QueueUsingTwoStacks();
        myQueue.push(1);
        myQueue.push(2);
        myQueue.push(3);
        myQueue.push(4);
        assert myQueue.pop() == 1; //returns 1 as expected FIFO
        assert myQueue.peek() == 2;
        myQueue.push(5);
        assert myQueue.pop() == 2;
        assert myQueue.pop() == 3;
        assert myQueue.pop() == 4;
        assert myQueue.pop() == 5;
    }
}