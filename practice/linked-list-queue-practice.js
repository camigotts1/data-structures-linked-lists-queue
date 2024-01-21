// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {

        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return newNode;
    }


    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        // O(n) time:
        // let len = 0;
        // let node = this.head;
        // while(node.next !== null){
        //     node = node.next;
        //     len++;
        // }
        // len++;
        // return len;

        //O(1) time:
        return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        // Expected O(n) time complexity
        let sum = 0;
        let node = this.head;
        if(this.length > 0){
            while(node.next !== null){
                sum+= node.value;
                node = node.next;
            }
            sum += node.value;
        }


        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes
        // Expected O(n) time complexity

        return this.sumOfNodes() / this.length;
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        // Expected: O(n) time complexity
        if(n > this.length - 1 || n < 0){
            return;
        }

        let node = this.head;

        for(let i = 0; i < n; i++){
            node = node.next;
        }

        return node;
    }

    findMid() {
        // Returns the middle node
        // Expected: O(n) time complexity

        if(this.length === 0){
            return;
        }
        if(this.length === 1){
            return this;
        }

        let node = this.head;
        let mid = this.length / 2;

        for(let i = 0; i < mid - 1; i++){
            node = node.next;
        }

        return node;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Expected: O(n) time complexity
        let node = this.findNthNode(this.length - 1);
        let newList = new SinglyLinkedList();
        let length = this.length;
        while(length > 0){
            newList.addToTail(node.value);
            length--;
            node = this.findNthNode(length - 1);
        }

        return newList;
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        // Expected: O(n) time complexity
        if(!this.head){
            return;
        }
        if(this.length === 1){
            return this;
        }
        let prevNode = this.head;
        let currentNode = prevNode.next;
        prevNode.next = null
        let nextNode = currentNode;

        while(nextNode !== null){
            nextNode = nextNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
       }
        this.head = prevNode;
        return this.head;

    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        //Rather than traversing through the whole list, the two pointers are meeting
            //at the middle node
        //Expected: O(n) time complexity
        let front = this.head;
        let back = this.tail;
         while(front !== null){
            front = front.next;
            back = back.prev;
            if(front === back || back.next === front){
                break;
            }
        }
        return back;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Expected: O(n) time complexity
        let newList = new DoublyLinkedList();
        let currentNode = this.tail;
        while(currentNode){
            newList.addToTail(currentNode.value);
            currentNode = currentNode.prev;
        }

        return newList;
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        // Expected: O(n) time complexity

        if(!this.head){
            return;
        }
        if(this.head === this.tail){
            return this;
        }
        let prevNode = this.head;
        let currentNode = prevNode.next;
        prevNode.next = null
        let nextNode = currentNode;

        while(nextNode !== null){
            nextNode = nextNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
       }
        this.head = prevNode;
        return this.head;

    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
