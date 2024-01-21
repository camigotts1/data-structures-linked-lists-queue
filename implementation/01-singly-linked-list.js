// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Expected: O(1) time complexity

        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    addToTail(val) {
        // Expected: O(n) time complexity

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        //Expected: O(1) time complexity
        if(!this.head){
            return;
        }
        let prevHead = this.head;
        this.head = this.head.next;
        this.length--;
        return prevHead;
    }

    removeFromTail() {
        // Expected: O(n) time complexity

        if(!this.head){
            return;
        }

        if(this.length === 1){
            this.head = null;
            this.length = 0;
            return;
        }

        let prevNextToLast = this.head;
        let prevLast = this.head.next;

        while(prevNextToLast.next.next){
            prevNextToLast = prevNextToLast.next;
            prevLast = prevNextToLast.next.next;
        }

        prevNextToLast.next = null;
        this.length--;
        return prevLast;
    }

    peekAtHead() {
        // Expected: O(1) time complexity

        if(!this.head){
            return;
        }

        return this.head.value;
    }

    print() {
        //Expected: O(n) time complexity
        if(!this.head){
            return;
        }
        let currentNode = this.head;
        //console.log("HEAD");
        for(let i = 0; i < this.length; i++){
            if(currentNode.next){
                console.log(currentNode.value);
                currentNode = currentNode.next;
            }

        }
        console.log(currentNode.value);
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
