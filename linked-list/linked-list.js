

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
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
urList.printList();