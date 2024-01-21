// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        //Expected: O(1) time complexity

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.head) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    addToTail(val) {
        //Expected: O(1) time complexity
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);
        if(this.tail){
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

        }
        else{
            this.tail = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    removeFromHead() {
        //Expected O(1) time complexity
        if(!this.head){
            return;
        }

        let oldHead = this.head.value;
        this.length--;

        if(!this.head.next){
            this.head = null;
            this.tail = null;
            return oldHead;
        }

        let newHead = this.head.next;
        newHead.prev = null;
        this.head = newHead;
        return oldHead;
    }

    removeFromTail() {
        // Expected: O(1) time complexity

        if(!this.tail){
            return;
        }

        let oldTail = this.tail.value;
        this.length--;

        if(this.tail === this.head){
            this.tail = null;
            this.head = null;
            return oldTail;
        }

        let newTail = this.tail.prev;
        newTail.next = null;
        this.tail = newTail;
        return oldTail;
    }

    peekAtHead() {
        //Expected O(1) time complexity
        if(!this.head){
            return;
        }
        return this.head.value;
    }

    peekAtTail() {
        // Expected: O(1) time complexity
        if(!this.tail){
            return
        }
        return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
