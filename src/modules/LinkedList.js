import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    newNode.next = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let current = this.headNode;
    let size;
    if (!this.headNode) {
      size = 0;
    } else {
      size = 1;
    }
    while (current.next) {
      current = current.next;
      size = size + 1;
    }
    return size;
  }
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
}
