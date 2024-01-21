const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        //Expected: O(1) time complexity

        let newNode = new SinglyLinkedNode(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
    }

    dequeue() {
        // Expected: O(1) time complexity
        if(!this.head){
            return null;
        }
        let prevHead = this.head.value;
        this.head = this.head.next;

        if(this.head === null){
            this.tail = null;
        }

        this.length--;
        return prevHead;
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
