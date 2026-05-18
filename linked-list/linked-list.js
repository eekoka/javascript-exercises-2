

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    size = function () {
        return this.length;
    }

    headNode = function () {
        if (!this.head) {
            return undefined
        };
        return this.head.value;
    }

    tailNode = function () {
        if (!this.head) {
            return undefined
        };

        let current = this.head;
        
        // Loop until current.next is null (the last node)
        while (current.next) {
            current = current.next;
        }
        // Returns the full node object
        return current.value;
    }

    append = function (value) {
        const newNode = new Node(value);
        // If list is empty, make it the head
        if (!this.head) {
            this.head = newNode;            
        }
        else {
            // Traverse to the end of the list
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    };

    prepend = function (value) {
        const newNode = new Node(value);
        // If list is empty, make it the head
        if (!this.head) {
            this.head = newNode;            
        }
        else {
            // add node as new head
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    remove = function (value) {
        previousNode = null;
        let current = this.head;
        while (current !== null && current.value !== value) {
            previousNode = current;
            current = current.next;
        }
        if (current === null) return;
        else if (previousNode !== null) previousNode.next = current.next;
        else this.head = current.next;

        this.length--;
    }

    printList = function () {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        //console.log(result);
        console.log(result.join(" -> "));
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


const mylist = new LinkedList();
console.log(mylist.length);
mylist.append(1);
mylist.append(2);
console.log(mylist.length);
mylist.printList();


const urList = new LinkedList();

urList.append("X");
urList.append("Y");
urList.append("Z");
urList.prepend("A");
urList.printList();

console.log(urList.size());
console.log(urList.headNode());
console.log(urList.tailNode());