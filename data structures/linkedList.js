class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let temp = this.head;
    let tempTail = temp;
    while (temp.next) {
      tempTail = temp;
      temp = temp.next;
    }
    this.tail = tempTail;
    this.tail.next = null;
    this.length--;
  }
  print() {
    let curr = this.head;
    let s = "";
    while (curr) {
      s += curr.val + " ==> ";
      curr = curr.next;
    }
    console.log(s);
  }
  reverse() {
    let temp = this.head;
    let prev = null;
    while (temp) {
      let tempNext = temp.next;
      temp.next = prev;
      prev = temp;
      temp = tempNext;
    }
    return prev
  }
}

const ll = new LL();
ll.push(12);
ll.push(31);
ll.push(41);
// ll.pop();
ll.push(12);
ll.push(42);
ll.print();
console.log(ll.reverse());